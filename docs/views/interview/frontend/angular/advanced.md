# Angular 进阶面试题

## Q1: Angular 的变更检测策略（OnPush: 2+, Zoneless: [18+]）

变更检测是 Angular 同步组件状态和视图的机制。默认情况下，Angular 使用 Zone.js 拦截浏览器异步事件（点击、HTTP、定时器），然后遍历整个组件树检查数据变化并更新 DOM。

**Default 策略：** 每次 Zone.js 触发变更检测时，从根组件开始**自上而下**遍历所有组件，检查每个绑定表达式是否有变化。小应用无问题，大应用可能影响性能。

**OnPush 策略：** 组件只在其输入属性引用变化（`@Input` 收到新对象）、组件自身事件触发、Observable 通过 `async` pipe 发出新值、手动调用 `markForCheck()` 时才进行变更检测。

```ts
// OnPush 组件
@Component({
  selector: 'app-user-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>&#123;&#123; user.name &#125;&#125;</p>
    <p>&#123;&#123; counter() &#125;&#125;</p>
    <button (click)="increment()">+1</button>
  `
})
export class UserCardComponent {
  // 只有 user 对象引用变化时才会触发检测
  @Input() user!: User;

  // Signal 会自动通知变更检测
  counter = signal(0);

  increment() {
    this.counter.update(v => v + 1);
  }

  // 手动触发：当需要在异步回调后更新时
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.data = 'new value';
      this.cdr.markForCheck(); // 标记本组件及其父组件需要检测
    }, 1000);
  }
}
```

**Zoneless 变更检测（Angular 18+ 实验性）：**

```ts
// 启用 Zoneless
// angular.json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "polyfills": []  // 移除 zone.js
          }
        }
      }
    }
  }
}

// 组件中使用 Signal，无需 Zone 也能自动检测
@Component({
  selector: 'app-zoneless-demo',
  standalone: true,
  template: `<p>Count: &#123;&#123; count() &#125;&#125;</p>`
})
export class ZonelessDemoComponent {
  count = signal(0);

  constructor() {
    // Signal 变更自动触发更新，不需要 Zone.js
    setInterval(() => this.count.update(v => v + 1), 1000);
  }
}
```

**三者对比：**

| 特性 | Default | OnPush | Zoneless (18+) |
|------|---------|--------|---------------|
| 检测范围 | 全组件树 | 组件层级标记 | Signal 关联的组件 |
| 触发方式 | 自动（Zone 拦截事件） | 输入变化/事件/Signal | Signal 更新 |
| 性能 | 树越大越慢 | 优秀 | 最优 |
| 心智负担 | 低 | 中（需理解不可变数据） | 低（Signal 驱动） |
| 与第三方库 | 友好 | 友好 | 需 Signal 集成 |

**常见陷阱：**
- OnPush 下 `@Input()` 传入可变对象时，修改对象内部属性不会触发检测——必须创建新对象引用
- `markForCheck()` 标记的是**当前组件及其父组件**的检测路径，不标记子组件
- OnPush + 路由参数变化：路由参数变化不会自动触发 OnPush 组件检测，需要用 `markForCheck`

```ts
// 解决 OnPush 下对象内部修改不检测
// 错误：不会触发变更检测
this.user.name = 'new name';

// 正确：创建新对象
this.user = { ...this.user, name: 'new name' };
```

**面试追问：**
- Zone.js 如何拦截浏览器事件？（通过 `zone.js` 库 monkey-patch 所有异步 API：`setTimeout`、`Promise`、`addEventListener` 等）
- `detectChanges()` 和 `markForCheck()` 区别？（前者立即执行变更检测，后者标记后在下一轮检测队列执行）
- Zoneless 的优势是什么？（减少 bundle 体积、更好的跨平台兼容、更精确的触发时机）

---

## Q2: RxJS 的核心概念

RxJS（Reactive Extensions for JavaScript）是 Angular 处理异步数据流的核心库，基于**观察者模式**和**迭代器模式**实现。

**五大核心成员：**

| 成员 | 说明 | 类比 |
|------|------|------|
| **Observable** | 可观察对象，代表一个数据源，随时间推送数据 | Promise 的增强版（可多次推送） |
| **Observer** | 观察者，消费 Observable 推送的数据 | `{ next, error, complete }` 回调对象 |
| **Subscription** | 订阅关系，控制数据的生命周期 | 类似 `clearTimeout` |
| **Operators** | 操作符，纯函数用于转换/组合数据流 | 数组的 map/filter/find |
| **Subject** | 多播 Observable，可手动推送数据 | 既是 Observable 也是 Observer |
| **Scheduler** | 调度器控制异步执行的时机 | - |

```ts
// 创建 Observable
const obs = new Observable<number>(subscriber => {
  subscriber.next(1);              // 推送数据
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();         // 完成（不再推送）
  }, 1000);

  return () => console.log('清理'); // 取消订阅时的清理
});

// Observer
const observer: Observer<number> = {
  next: val => console.log('收到:', val),
  error: err => console.error('错误:', err),
  complete: () => console.log('完成')
};

// 订阅
const subscription = obs.subscribe(observer);
// 取消订阅
setTimeout(() => subscription.unsubscribe(), 500);
```

```ts
// Subject 的四种类型
const subject = new Subject<number>();      // 普通 Subject，广播给所有订阅者
const bcSubject = new BehaviorSubject(0);   // BehaviorSubject 有初始值，新订阅者立即获得当前值
const replaySubject = new ReplaySubject(2); // ReplaySubject 缓存最近 N 个值
const asyncSubject = new AsyncSubject();    // AsyncSubject 只在 complete 时推送最后一个值

// Subject 可以同时作为 Observable 和 Observer
const control$ = new Subject<string>();
control$.subscribe(v => console.log(v));    // 作为 Observable
control$.next('Hello');                     // 作为 Observer
```

**常用创建函数：**

```ts
import { of, from, fromEvent, interval, timer, combineLatest, forkJoin, merge } from 'rxjs';

of(1, 2, 3).subscribe(v => console.log(v));           // 同步发出 1, 2, 3
from([1, 2, 3]).subscribe(v => console.log(v));        // 从数组创建
from(fetch('/api')).subscribe(v => console.log(v));    // 从 Promise 创建
fromEvent(document, 'click').subscribe(e => ...);      // 从 DOM 事件创建
interval(1000).subscribe(v => console.log(v));          // 每秒发出 0, 1, 2...
timer(2000, 1000).subscribe(v => ...);                  // 2 秒后开始，每秒发出
combineLatest([a$, b$]).subscribe(([a, b]) => ...);     // 合并最新值
forkJoin([a$, b$]).subscribe(([a, b]) => ...);          // 等待全部完成
```

**面试追问：**
- Observable 和 Promise 的核心区别？（Observable 是惰性的、可取消的、可多次推送的；Promise 是急切的、不可取消的、只推送一次）
- Subject 和 Observable 的区别是什么？（Subject 是多播，可以手动推送；Observable 默认是单播，每次订阅独立执行）
- 如何将 Observable 转换为 Signal？（使用 `toSignal()` 操作符）

---

## Q3: RxJS 常用操作符

操作符是 RxJS 的"调味料"，用纯函数的方式对数据流进行组合、变换和过滤。

```ts
// === 创建操作符 ===
import { of, from, fromEvent, interval, timer, range, EMPTY, NEVER } from 'rxjs';

// === 转换操作符 ===
import { map, pluck, scan, buffer, windowTime } from 'rxjs/operators';

of(1, 2, 3).pipe(
  map(x => x * 10)  // 10, 20, 30
);

// === 过滤操作符 ===
import { filter, first, take, skip, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// 搜索输入的防抖
searchInput.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),  // 和上次值不同时才发出
  filter(term => term.length >= 2)
).subscribe(term => this.search(term));

// === 组合操作符 ===
import { combineLatest, forkJoin, merge, zip, race } from 'rxjs';

// combineLatest: 任一 Observable 发出值时，组合所有 Observable 的最新值
combineLatest([username$, password$]).subscribe(([user, pass]) => {
  this.isFormValid = !!user && !!pass;
});

// forkJoin: 等待所有 Observable 完成，类似 Promise.all
forkJoin([this.http.get('/api/users'), this.http.get('/api/roles')])
  .subscribe(([users, roles]) => this.initData(users, roles));

// === 错误处理操作符 ===
import { catchError, retry, retryWhen } from 'rxjs/operators';

this.http.get('/api/data').pipe(
  retry(3),                              // 失败重试 3 次
  catchError(err => of(defaultData))     // 返回默认值，防止订阅者报错
);

// === 工具操作符 ===
import { tap, delay, timeout } from 'rxjs/operators';

this.http.get('/api/data').pipe(
  tap(data => console.log('log:', data)), // 副作用，不改变数据
  delay(500),                             // 延迟 500ms
  timeout(5000)                           // 超时报错
);
```

```ts
// 实际 Angular 使用场景：搜索自动完成
@Component({ template: `...` })
export class SearchComponent implements OnInit {
  private searchInput = new Subject<string>();

  ngOnInit() {
    this.searchInput.pipe(
      debounceTime(300),                 // 防抖 300ms
      distinctUntilChanged(),            // 避免重复搜索
      filter(term => term.length >= 2), // 至少输入 2 字符
      switchMap(term =>                  // 取消上一个请求
        this.http.get(`/api/search?q=${term}`).pipe(
          catchError(() => of([]))       // 错误时返回空数组
        )
      )
    ).subscribe(results => this.results = results);
  }
}
```

**面试追问：**
- `tap` 操作符什么时候用？（调试日志、缓存、或执行不改变流的副作用）
- 为什么 `combineLatest` 不会在开始时立即发出值？（需要所有 Observable 至少发出一次值）
- `forkJoin` 和 `combineLatest` 有什么区别？（前者等所有 Observable 完成后发一次，后者每次任一 Observable 变化都发）

---

## Q4: switchMap / mergeMap / concatMap / exhaustMap 的区别

这四个是高阶映射操作符（将每个输入值映射为 Observable，然后展平输出），但处理并发的方式不同。

| 操作符 | 行为 | 何时取消前一个？ | 适用场景 |
|--------|------|---------------|---------|
| `switchMap` | 切换到新 Observable，取消上一个 | 有新值立即取消 | 搜索、自动补全、路由导航 |
| `mergeMap`（`flatMap`） | 所有 Observable 并发执行 | 永不取消 | 并行 API 请求、上传多个文件 |
| `concatMap` | 按顺序执行，完成一个再开始下一个 | 不取消，但排队 | 顺序写入、日志记录、支付顺序 |
| `exhaustMap` | 忽略新值直到当前 Observable 完成 | 即使完成也不中断 | 登录按钮防重复点击、刷新 token |

```ts
// switchMap: 搜索场景（经典用法）
// 每次输入变化取消上一次 HTTP 请求
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => this.http.get(`/api/search?q=${term}`))
).subscribe(results => this.results = results);

// mergeMap: 同时执行多个请求
// 获取用户列表，然后为每个用户获取详细信息
this.http.get<User[]>('/api/users').pipe(
  mergeMap(users => from(users)),
  mergeMap(user => this.http.get(`/api/users/${user.id}/details`)),
  // 等价于 concatMap — 如果需要按顺序获取详情
).subscribe(details => this.details.push(details));

// concatMap: 按顺序保存文档
// 每个保存完成后再开始下一个
from(documents).pipe(
  concatMap(doc => this.http.post('/api/documents', doc))
).subscribe(result => console.log('saved', result.id));

// exhaustMap: 防重复提交
// 如果请求在进行中，忽略后续点击
submitClick$.pipe(
  exhaustMap(() => this.http.post('/api/submit', formData).pipe(
    catchError(err => of({ error: err.message }))
  ))
).subscribe(result => {
  if (result.error) { /* 处理错误 */ }
});
```

```ts
// 选型逻辑图（面试高频）
// 需要保留顺序？→ Yes → concatMap
// 需要维护并发数？→ Yes → mergeMap(concurrency)
// 需要取消旧的？→ Yes → switchMap
// 需要忽略新的？→ Yes → exhaustMap
```

**常见陷阱：**
- `mergeMap` 不限制并发数，大量请求可能导致浏览器连接池耗尽。使用 `mergeMap(project, concurrency)` 限制并发数
- `switchMap` 取消请求不会取消服务器处理，但客户端只关心最新的响应
- `concatMap` 中前一个 Observable 如果报错会终止整个流，需要加 `catchError`
- 在 HTTP 请求中使用 `switchMap` 时，可用 `AbortController` 取消浏览器请求（Angular HttpClient 支持）

**面试追问：**
- 这四个操作符哪个和 `Promise.all` 最接近？（`forkJoin`，但 `mergeMap` 也可以实现并发效果）
- 除了 HTTP 请求，这些操作符还有什么应用场景？（WebSocket 消息处理、用户输入处理、定时轮询）
- `switchMap` 和 `debounceTime` 一起使用的正确姿势？（debounceTime 在外层，switchMap 在内层，避免频繁切换导致请求被取消过多）

---

## Q5: Angular 的 HTTP 拦截器（函数式拦截器见 [17+]）

HTTP 拦截器在请求发出前或响应返回后插入自定义逻辑，适合统一处理认证、日志、缓存、错误提示等。

**类式拦截器（传统方式）：**

```ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // 克隆请求并添加认证头（HttpRequest 是不可变的）
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });

    return next.handle(authReq);
  }
}

// 注册
@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
```

**函数式拦截器（Angular 17+，推荐）：**

```ts
// 日志拦截器
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(`[${req.method}] ${req.url}`);
  const start = performance.now();

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          console.log(`[${req.method}] ${req.url} - ${event.status} (${performance.now() - start}ms)`);
        }
      },
      error: (err) => {
        console.error(`[${req.method}] ${req.url} - 失败`, err);
      }
    })
  );
}

// 错误处理拦截器
export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    retry(2), // 失败重试 2 次
    catchError((error: HttpErrorResponse) => {
      let message = '未知错误';
      if (error.status === 401) {
        message = '请先登录';
        // 跳转到登录页
      } else if (error.status === 403) {
        message = '权限不足';
      } else if (error.status === 500) {
        message = '服务器错误，请稍后重试';
      }
      // 全局错误提示（不暴露给具体组件）
      console.error(message, error);

      // 转换错误，组件端的 subscribe 还能继续处理
      return throwError(() => new Error(message));
    })
  );
}

// 注册（Standalone 应用）
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([loggingInterceptor, errorInterceptor, authInterceptor])
    )
  ]
};
```

**缓存拦截器示例：**

```ts
export function cacheInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // 只缓存 GET 请求
  if (req.method !== 'GET') return next(req);

  const cache = new Map<string, HttpResponse<any>>();
  const cachedResponse = cache.get(req.urlWithParams);

  if (cachedResponse) {
    return of(cachedResponse.clone()); // 返回缓存
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, event.clone());
      }
    })
  );
}
```

**拦截执行顺序：** 注册顺序决定拦截器的调用顺序。请求按 A -> B -> C 顺序执行，响应按 C -> B -> A 逆序返回（洋葱模型）。

**常见陷阱：**
- HttpRequest 和 HttpResponse 是**不可变**的，修改请求必须通过 `clone()`
- 多个拦截器要设置 `multi: true`，否则后面的会覆盖前面的
- `catchError` 一定要返回 `throwError` 或 `of(defaultValue)`，否则订阅者收不到错误
- 拦截器中不要引入循环依赖（拦截器使用 HttpClient 会造成无限循环）

**面试追问：**
- 拦截器和中间件模式的异同？（类似 Express 中间件，都是洋葱模型）
- 函数式拦截器相对于类式拦截器的优势？（更简洁、更好的类型推断、不需要 NgModule）
- 如何实现请求超时？（在拦截器中使用 `timeout` 操作符）

---

## Q6: Angular 的路由守卫

路由守卫控制路由导航的权限和行为，决定用户能否进入/离开特定路由。

**守卫类型：**

| 守卫 | 接口 | 用途 | 返回值 |
|------|------|------|--------|
| `CanActivate` | 路由激活前 | 检查是否有权限访问 | boolean / UrlTree |
| `CanActivateChild` | 子路由激活前 | 针对子路由的权限检查 | boolean / UrlTree |
| `CanDeactivate` | 离开当前路由前 | 确认未保存的数据 | boolean / Observable |
| `CanLoad`（已废弃） | 懒加载模块前 | 控制是否加载模块 | boolean |
| `Resolve` | 路由激活前 | 预加载路由数据 | Observable / Promise |

```ts
// 函数式守卫（Angular 14+ 推荐）
export function authGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // 保存目标 URL，登录后跳回
  authService.redirectUrl = state.url;
  return router.parseUrl('/login');
}

// 角色守卫
export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    return allowedRoles.includes(authService.getRole());
  };
}

// 路由配置
const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],           // 需要登录
    canActivateChild: [authGuard],
    canActivate: [roleGuard(['admin'])], // 需要 admin 角色
    loadComponent: () => import('./admin/admin.component'),
    children: [
      { path: 'users', component: UsersComponent }
    ]
  }
];
```

```ts
// CanDeactivate 守卫：防止丢失未保存编辑
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export function unsavedChangesGuard(component: CanComponentDeactivate): boolean | Observable<boolean> {
  return component.canDeactivate?.() ?? true;
}

// 组件实现
@Component({ template: `...` })
export class EditorComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;

  canDeactivate(): boolean | Observable<boolean> {
    if (this.hasUnsavedChanges) {
      return confirm('有未保存的更改，确定要离开吗？');
    }
    return true;
  }
}
```

**守卫执行顺序：**

```
路由事件开始
  → CanDeactivate（离开当前路由）
  → CanMatch / CanLoad
  → CanActivateChild
  → CanActivate
  → Resolve
  → 路由激活
```

**常见陷阱：**
- 守卫返回 `UrlTree` 实现重定向（14+ 特性），而不是在守卫中调用 `router.navigate`
- 守卫中不要直接 `navigate`，可能造成无限循环
- 不要将需要请求数据的逻辑放在 CanActivate 中长时间阻塞导航（考虑使用 Resolve 或懒加载）
- `CanLoad` 在 15.1+ 被 `CanMatch` 替代

**面试追问：**
- 多个守卫如何执行？（按注册顺序依次执行，任何守卫返回 false 则取消导航）
- 守卫和拦截器都能做认证，如何选择？（守卫控制路由权限，拦截器处理 HTTP 认证，职责不同）
- 如何让守卫只检查一次而不每次都执行？（缓存认证状态到服务或 Signal 中）

---

## Q7: Angular 的 resolve 守卫（预加载数据）

Resolve 守卫在路由激活前预先获取数据，确保组件渲染时数据已就绪。避免组件中出现"空数据状态"。

```ts
// 类式 Resolver
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  private http = inject(HttpClient);

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.paramMap.get('id')!;
    return this.http.get<User>(`/api/users/${id}`).pipe(
      catchError(() => of(null as unknown as User)) // 错误时提供默认值
    );
  }
}

// 函数式 Resolver（14+ 推荐）
export const productResolver: ResolveFn<Product> = (route, state) => {
  const http = inject(HttpClient);
  const id = route.paramMap.get('id')!;
  return http.get<Product>(`/api/products/${id}`);
};
```

```ts
// 路由配置
const routes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve: { user: userResolver }
  }
];

// 组件中获取数据
@Component({ template: `&#123;&#123; user.name &#125;&#125;` })
export class UserDetailComponent implements OnInit {
  // 方式一：通过 ActivatedRoute.data
  user = signal<User | null>(null);

  private route = inject(ActivatedRoute);

  ngOnInit() {
    // resolve 的数据可以通过 data 或 snapshot.data 获取
    this.user.set(this.route.snapshot.data['user']);

    // 如果是路由参数变化（同一组件切换参数），监听 data
    this.route.data.subscribe(data => this.user.set(data['user']));
  }
}
```

**Resolve 的优缺点对比：**

| 方面 | 优点 | 缺点 |
|------|------|------|
| 用户体验 | 进入路由时数据已就绪，无加载闪烁 | 用户需等待数据加载完成才能看到页面 |
| 错误处理 | 可在 Resolver 中统一处理 | 加载失败则路由不会激活 |
| 代码组织 | 数据获取逻辑集中在 Resolver | 增加了抽象层，小项目可能过度设计 |
| 替代方案 | - | 组件内 ngOnInit 中获取（显示加载状态） |

**最佳实践：**
- 核心数据（如编辑页面中要编辑的实体）适合用 Resolver
- 非核心数据（如侧边栏推荐列表）适合组件内按需加载
- Resolver 中做好错误处理，失败的返回默认值或抛出导航错误

```ts
// 导航失败处理
export const safeResolver: ResolveFn<Data> = () => {
  const router = inject(Router);
  return http.get('/api/data').pipe(
    catchError(() => {
      // 数据加载失败时导航到错误页
      return router.navigate(['/error']);
    })
  );
};
```

**面试追问：**
- Resolve 和 `ngOnInit` 中获取数据谁更好？（看场景：Resolver 适合数据缺失页面无意义的场景；组件获取适合可以展示加载状态的场景）
- Resolve 守卫中如果 Observable 不 `complete()` 会怎样？（路由永远不会激活）
- 如何在 Resolve 中处理多个 API 依赖？（使用 `forkJoin` 或 `combineLatest` 组合多个请求）

---

## Q8: Angular 的 provider 作用域

在 Angular DI 系统中，provider 的作用域决定了服务实例的可见性和生命周期。Angular 使用层次化注入器，每个注入器维护一个独立的服务实例容器。

**作用域层级：**

```
Platform Injector（平台级，整个应用共用）
  └── Root Injector（根级，providedIn: 'root' 或 AppModule providers）
       └── NgModule Injector（模块级，延迟加载模块的 providers）
            └── Component Injector（组件级，每个组件实例独立）
                 └── Child Component Injector（子组件级）
```

```ts
// === 根级提供者（应用级单例） ===
@Injectable({ providedIn: 'root' })
export class AppSingletonService {
  // 在整个应用中只存在一个实例
}

// === 模块级提供者 ===
// 注意：每个懒加载模块会创建自己的注入器，导致服务多实例
@NgModule({
  providers: [ModuleScopedService] // 每个模块实例一个
})
export class LazyModule {}

// === 组件级提供者 ===
// 每个组件实例有自己的服务实例
@Component({
  selector: 'app-editor',
  providers: [EditorState], // 每次创建 EditorComponent 都新建
  template: `...`
})
export class EditorComponent {
  private editorState = inject(EditorState); // 组件自己的实例
}
```

```ts
// 装饰器控制解析范围
export class ChildComponent {
  constructor(
    private rootService: RootService,  // 默认：从当前注入器向上查找

    @Optional() private optional: MaybeMissingService | null,  // 可选依赖

    @Self() private ownService: OwnService,  // 只从当前组件注入器查找

    @SkipSelf() private parentService: ParentService,  // 跳过当前注入器

    @Host() private hostService: DirectivesService  // 限制在当前组件/宿主指令
  ) {}
}
```

```ts
// 实际应用：每个组件拥有自己的 undo/redo 状态
export class EditorStateService {
  private undoStack: string[] = [];
  private redoStack: string[] = [];

  pushState(state: string) {
    this.undoStack.push(state);
    this.redoStack = []; // 新操作清空 redo
  }

  undo(): string | null {
    return this.undoStack.pop() ?? null;
  }

  redo(): string | null {
    return this.redoStack.pop() ?? null;
  }
}

// 两个 EditorComponent 实例各自拥有独立的 EditorStateService
```

**常见陷阱：**
- `providedIn: 'root'` 的服务在懒加载模块中仍然是单例，但如果同时在模块的 `providers` 中也注册了该服务，会创建第二个实例
- 懒加载模块的 `providers` 是隔离的——该模块提供的服务只对模块内的组件可见
- `@SkipSelf` 在根组件中使用时，会一直跳过到根注入器还找不到，导致报错

**面试追问：**
- 懒加载模块为什么会有自己的注入器？（为了实现模块级服务隔离，模块卸载时能清理其服务）
- `providedIn: 'any'` 有什么用？（在懒加载模块中会获得该模块独立的实例，非懒加载时是根单例）
- 如何调试 DI 解析过程？（`inject(Service, { optional: true })` 检查返回值，或使用 Angular DevTools）

---

## Q9: Angular 的 ViewChild 和 ContentChild

`ViewChild` / `ViewChildren` 查询组件视图中的元素（组件自身的模板），`ContentChild` / `ContentChildren` 查询投影到组件中的内容。

| 装饰器 | 查询范围 | 何时可用 | 用途 |
|--------|---------|---------|------|
| `@ViewChild` | 组件自己的模板 | `ngAfterViewInit` | 获取子组件/DOM 元素引用 |
| `@ViewChildren` | 组件自己的模板（多个） | `ngAfterViewInit` | 获取列表 |
| `@ContentChild` | 投影内容（ng-content） | `ngAfterContentInit` | 获取投影的子组件 |
| `@ContentChildren` | 投影内容（多个） | `ngAfterContentInit` | 获取投影列表 |

```ts
// ViewChild 使用
@Component({
  selector: 'app-parent',
  standalone: true,
  template: `
    <input #myInput type="text">
    <app-child></app-child>
    <button (click)="focusInput()">聚焦</button>
  `
})
export class ParentComponent implements AfterViewInit {
  // 查询模板引用变量
  @ViewChild('myInput') inputEl!: ElementRef<HTMLInputElement>;

  // 查询子组件
  @ViewChild(ChildComponent) childComp!: ChildComponent;

  // QueryList — 动态变化的列表
  @ViewChildren('listItem') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.inputEl.nativeElement); // 可操作原生 DOM
    console.log(this.childComp.someProperty); // 访问子组件

    this.items.changes.subscribe(list => {
      console.log('列表项数量变化:', list.length);
    });
  }

  focusInput() {
    this.inputEl.nativeElement.focus();
  }
}
```

```ts
// ContentChild 使用
@Component({
  selector: 'app-tab',
  template: `
    <div class="tab-header">
      <ng-content select="[tab-header]"></ng-content>
    </div>
    <div class="tab-body">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent implements AfterContentInit {
  @ContentChild('header') headerEl!: ElementRef;
  @ContentChildren(TabPanelComponent) panels!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    // 投影内容已就绪
    console.log('投影面板数:', this.panels.length);
    this.panels.forEach(p => console.log('面板:', p.title));
  }
}

// 使用
<app-tab>
  <h2 tab-header>标题</h2>     <!-- 投影到 select="[tab-header]" -->
  <app-tab-panel></app-tab-panel>  <!-- 投影到默认 ng-content -->
  <app-tab-panel></app-tab-panel>
</app-tab>
```

**`{ static: true }` 参数（Angular 8+）：**

| static | 查询时机 | 适用场景 |
|--------|---------|---------|
| `true` | 变更检测前（ngOnInit 可用） | 元素不依赖 `ngIf`/`@if` 条件渲染 |
| `false`（默认） | 变更检测后（ngAfterViewInit 可用） | 元素在条件渲染中 |

```ts
// static: true — 在 ngOnInit 中即可获取
@ViewChild('staticRef', { static: true }) el!: ElementRef;

ngOnInit() {
  console.log(this.el); // 可用（但 ngAfterViewInit 之前不要操作 nativeElement）
}
```

**常见陷阱：**
- ViewChild 在 ngAfterViewInit 之前不可用，ContentChild 在 ngAfterContentInit 之前不可用
- `@ViewChildren` 返回 `QueryList`，其 `changes` 属性是 Observable，订阅后需清理
- 当 `*ngIf` / `@if` 隐藏元素时，ViewChild 引用变为 `undefined`
- 多个匹配项时，ViewChild 返回第一个匹配（按 DOM 顺序）

**面试追问：**
- ViewChild 和 ContentChild 同时查询同一元素会怎样？（不会冲突，它们查询不同的 DOM 范围）
- `QueryList.changes` 在什么情况下触发？（子元素增、删、移动时，但不会因为子元素属性变化而触发）
- `ElementRef.nativeElement` 直接操作 DOM 有什么问题？（不可移植，在 Web Worker / SSR 中会报错）。推荐使用 `Renderer2`。

---

## Q10: Angular 的 ng-template / ng-container / ng-content

这三个是 Angular 模板层面的结构性元素/指令，用于控制视图渲染和内容投影。

| 元素 | 作用 | 是否产生 DOM | 用途 |
|------|------|-------------|------|
| `<ng-template>` | 定义可复用的模板片段 | 否（需要实例化） | 结构型指令的底层实现 |
| `<ng-container>` | 逻辑分组容器 | 否 | 分组元素不增加额外 DOM |
| `<ng-content>` | 内容投影插槽 | 是（投影宿主元素） | 在组件中插入外部内容 |

```ts
// ng-template — 模板定义与实例化
@Component({
  template: `
    <!-- 定义模板 -->
    <ng-template #greeting let-name="userName">
      <p>Hello, &#123;&#123; name &#125;&#125;!</p>
    </ng-template>

    <!-- 手动实例化 -->
    <ng-container *ngTemplateOutlet="greeting; context: {userName: 'Alice'}"></ng-container>

    <!-- 结构型指令本质上是 ng-template 的语法糖 -->
    <!-- *ngIf="condition" 等价于： -->
    <ng-template [ngIf]="condition"><p>条件为真</p></ng-template>
  `
})
export class TemplateDemoComponent {}
```

```ts
// ng-container — 无 DOM 的容器
@Component({
  template: `
    <!-- 避免额外的 div 包裹 -->
    <ng-container *ngFor="let item of items">
      @if (item.visible) {
        <p>&#123;&#123; item.name &#125;&#125;</p>
      }
    </ng-container>

    <!-- 解决结构型指令不能共存的问题 -->
    <ng-container *ngIf="isLoggedIn">
      <button (click)="logout()">退出</button>
    </ng-container>
  `
})
export class ContainerDemoComponent {}
```

```ts
// ng-content — 内容投影的多级插槽
@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <ng-content select="[card-title]"></ng-content>
      </div>
      <div class="card-body">
        <!-- 默认插槽（未使用 select 的内容） -->
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-actions]"></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {}

// 使用
<app-card>
  <h2 card-title>商品卡片</h2>           <!-- select="[card-title]" -->
  <p>这里是商品描述内容...</p>             <!-- 默认插槽 -->
  <button card-actions>购买</button>     <!-- select="[card-actions]" -->
</app-card>
```

**进阶技巧：条件投影**

```ts
// 使用 @if 和 ngTemplateOutlet 实现条件投影
@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip">
      <ng-content></ng-content>
      @if (templateRef) {
        <div class="tooltip-content">
          <ng-container *ngTemplateOutlet="templateRef"></ng-container>
        </div>
      }
    </div>
  `
})
export class TooltipComponent {
  @ContentChild(TemplateRef) templateRef?: TemplateRef<any>;
}

// 使用
<app-tooltip>
  悬停查看提示
  <ng-template>这是提示内容</ng-template>
</app-tooltip>
```

**常见陷阱：**
- `<ng-content>` 中的内容是**在父组件上下文中**编译的，不是子组件上下文
- Angular 17+ 新控制流语法 `@if` / `@for` 本质仍是 `ng-template` 的语法糖
- 多级 `<ng-content>` 嵌套时可能造成"黑洞"——内容被外层组件"吞掉"

**面试追问：**
- `ngTemplateOutlet` 可以实现组件复用吗？（可以，但不推荐——组件复用更适合用动态组件 `ViewContainerRef`）
- 内容投影和输入属性有什么区别？（投影传递的是模板片段，输入传递的是数据/对象）
- 如何实现条件投影？（通过 @ContentChild 判断是否有投影内容，决定是否显示插槽）

---

## Q11: Angular 的 FormArray

`FormArray` 是 Angular 响应式表单中用于管理动态列表的类，允许在运行时增删表单项组。

```ts
// 动态表单基础
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="orderForm">
      <div formArrayName="items">
        @for (item of items.controls; track $index; let i = $index) {
          <div [formGroupName]="i" class="item-row">
            <input formControlName="name" placeholder="商品名">
            <input type="number" formControlName="quantity" placeholder="数量">
            <input type="number" formControlName="price" placeholder="单价">
            <button type="button" (click)="removeItem(i)">删除</button>
          </div>
        }
      </div>
      <button type="button" (click)="addItem()">添加商品</button>
      <p>总价: &#123;&#123; totalPrice() &#125;&#125;</p>
    </form>
  `
})
export class DynamicFormComponent {
  private fb = inject(FormBuilder);

  orderForm = this.fb.group({
    customer: ['', Validators.required],
    items: this.fb.array([])     // FormArray
  });

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  constructor() {
    this.addItem(); // 初始化添加一行
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  // 计算总价
  totalPrice = computed(() => {
    return this.items.controls.reduce((sum, group) => {
      const qty = group.get('quantity')?.value ?? 0;
      const price = group.get('price')?.value ?? 0;
      return sum + qty * price;
    }, 0);
  });
}
```

```ts
// FormArray 的嵌套（复杂场景）
export class NestedFormArrayComponent {
  surveyForm = this.fb.group({
    title: [''],
    sections: this.fb.array([]) // 每节包含多个问题
  });

  get sections(): FormArray {
    return this.surveyForm.get('sections') as FormArray;
  }

  addSection() {
    const section = this.fb.group({
      name: ['', Validators.required],
      questions: this.fb.array([])
    });
    this.sections.push(section);
  }

  addQuestion(sectionIndex: number) {
    const section = this.sections.at(sectionIndex) as FormGroup;
    const questions = section.get('questions') as FormArray;
    questions.push(this.fb.group({
      text: ['', Validators.required],
      type: ['text'],
      required: [false]
    }));
  }
}
```

**FormArray 常用方法：**

| 方法 | 用途 | 示例 |
|------|------|------|
| `push(control)` | 添加到最后 | `items.push(new FormControl())` |
| `insert(index, control)` | 插入到指定位置 | `items.insert(0, new FormControl())` |
| `removeAt(index)` | 删除指定位置 | `items.removeAt(0)` |
| `setControl(index, control)` | 替换 | `items.setControl(0, new FormControl())` |
| `at(index)` | 获取 | `items.at(0)` |
| `clear()` | 清空 | `items.clear()` |
| `length` | 长度 | `items.length` |

**常见陷阱：**
- FormArray 的 `setValue()` 需要传入数组，`patchValue()` 支持部分更新
- 使用 `*ngFor` 遍历 FormArray 时需要使用 `trackBy` 或 `@for` 的 `track` 以避免性能问题
- FormArray 中包含大量控件时，性能会下降。考虑虚拟滚动或分页
- `removeAt` 会触发验证器和 `valueChanges`，监听这些事件时注意无限循环

**面试追问：**
- FormArray 和 FormGroup 嵌套使用的最佳实践？（分组逻辑用 FormGroup，列表逻辑用 FormArray）
- 如何给 FormArray 添加跨行验证？（在 group 中使用 `validators` 参数）
- 动态表单的性能优化策略？（`updateOn: 'blur'`、虚拟滚动、`ChangeDetectionStrategy.OnPush`）

---

## Q12: Angular 的 Performance 优化

Angular 应用的性能优化涵盖加载时性能、运行时性能和渲染性能三个方面。

**加载性能优化：**

```ts
// 1. 懒加载
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.routes') }
];

// 2. 预加载关键模块
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });

// 3. 图片懒加载
@Component({
  template: `<img [loading]="'lazy'" [src]="imageUrl">`
})

// 4. 移除 zone.js（Angular 18+）
// angular.json: "polyfills": []
```

**运行时性能优化：**

```ts
// 1. OnPush 变更检测策略
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

// 2. trackBy / track — 列表 DOM 复用
// 新旧方式都需要 track
@for (item of items; track item.id) {
  <li>&#123;&#123; item.name &#125;&#125;</li>
}

// 3. 纯管道
@Pipe({ name: 'memoized', pure: true }) // 默认就是纯管道
// 非纯管道谨慎使用（每次变更检测都执行）

// 4. 减少 ngDoCheck 中的复杂操作
ngDoCheck() {
  // 不要在这里做深度比较或复杂计算
  // 每个变更检测周期都会执行
}

// 5. 使用 Signal 代替传统绑定（Zoneless 兼容）
count = signal(0); // Signal 变更只更新依赖的组件
```

**渲染性能优化：**

```ts
// 1. CDK Virtual Scroll（适合长列表）
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
      <div *cdkVirtualFor="let item of items">&#123;&#123; item.name &#125;&#125;</div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [`.viewport { height: 500px; }`]
})
export class VirtualScrollComponent {}

// 2. trackBy 减少 DOM 操作
trackByFn(index: number, item: any): number {
  return item.id; // 用唯一标识而不是索引
}

// 3. 避免不必要的表达式计算
// bad: &#123;&#123; getComplexData() &#125;&#125;  每次变更检测都调用
// good: &#123;&#123; cachedData &#125;&#125;        只计算一次
```

```ts
// 性能分析工具
@Component({
  template: `<button (click)="measure()">测试性能</button>`
})
export class PerformanceComponent {
  measure() {
    // 使用 Chrome DevTools Performance 面板
    // 或 Angular DevTools 的 Profiler
    console.time('operation');
    // 执行操作
    console.timeEnd('operation');
  }

  // ngProfiler（Angular 16+）
  // 在 Angular DevTools 中使用
}
```

**常见性能陷阱：**

| 陷阱 | 原因 | 解决方案 |
|------|------|---------|
| `*ngFor` 大列表 | 每次变更检测重建 DOM | `trackBy` + 虚拟滚动 |
| 复杂表达式在模板中 | 每次检测重新计算 | 预计算或用 `computed` Signal |
| 不可变对象全量拷贝 | 大对象深拷贝消耗内存 | 使用 Immer 或结构共享 |
| 频繁变更检测 | Zone.js 拦截过多事件 | OnPush 策略或 Zoneless |
| 非纯管道执行昂贵转换 | 每次检测都调 transform | 改纯管道或在组件中预计算 |

**面试追问：**
- Angular DevTools Profiler 如何帮助定位性能问题？（可以记录变更检测耗时，找到哪些组件检测时间长）
- `runOutsideAngular` 的用途？（把不需要 Angular 检测的事件从 Zone 中移出，减少变更检测触发）
- 大表单性能优化方案？（`updateOn: 'blur'`、`ControlValueAccessor`、拆分多个 FormGroup）

---

## Q13: Angular 和 React/Vue 的更新粒度对比

三大框架在视图更新机制上有本质区别，了解这些区别有助于选择合适的框架及理解各自的性能特性。

**核心更新机制对比：**

| 特性 | Angular | React | Vue |
|------|---------|-------|-----|
| 更新驱动 | Zone.js / Signal | 虚拟 DOM Diff | Proxy 响应式 |
| 更新粒度 | 组件级（OnPush）-> Signal 级 | 组件级（默认重新执行整个组件函数） | 属性级（精确追踪） |
| 变更检测触发 | Zone 自动 / 手动 markForCheck | setState / useState setter | Proxy getter 追踪 |
| 批量更新 | 同一 tick 内合并 | 合成事件批量更新 | 微任务批量更新 |
| 编译优化 | AOT + 增量 DOM | React Compiler（自动记忆化） | 编译优化的响应式 |
| 不可变数据 | OnPush 需要 | 推荐（不可变更新） | 不需要（响应式代理） |

**代码实现对比：**

```ts
// Angular — 组件级更新
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class AngularComponent {
  @Input() data!: Data;
  // 只有 data 引用变化或事件触发才更新组件及其子组件
}
```

```tsx
// React — 函数组件级重新执行
function ReactComponent({ data }: { data: Data }) {
  const [count, setCount] = useState(0);
  // count 变化时，整个组件函数重新执行
  // React.memo 可阻止不必要的重新执行
  return <div onClick={() => setCount(c => c + 1)}>{count}</div>;
}
```

```vue
<!-- Vue — 属性级响应式追踪 -->
<template>
  <div @click="count++">&#123;&#123; count &#125;&#125;</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
// 只有 count 的实际 DOM 位置会被更新，组件本身不会重新渲染
</script>
```

**Signal 带来的趋同：**

```ts
// Angular Signal — 精确的 Signal 级更新
@Component({
  template: `<p>&#123;&#123; count() &#125;&#125;</p><p>&#123;&#123; name() &#125;&#125;</p>`
})
export class SignalComponent {
  count = signal(0);
  name = signal('Alice');

  // 更新 count 时，只有第一个 <p> 会重新渲染
  // 第二个 <p> 不会受影响
}
```

```tsx
// React 19 的 use — 趋近 Signal 模式
function ReactSignalComponent() {
  const count = use(new BehaviorSubject(0));
  return <div>{count}</div>;
}
```

**总结：**

- **Angular 的更新粒度从粗到精**：Default（全树）-> OnPush（组件 + 子树）-> Signal（精确依赖）
- **React 默认重新执行组件函数**，但通过 `React.memo` + `useMemo` / `useCallback` 实现选择性更新
- **Vue 3 的 Proxy + 编译优化** 天然实现精确的响应式更新

**面试追问：**
- Zone.js 的更新粒度为什么比 Vue 的 Proxy 更粗？（Zone 无法知道组件依赖了哪些数据，只能全树检查；Proxy 能精确追踪每个属性的访问）
- Signal 对 Angular 的更新粒度意味着什么？（从"组件不知道哪些数据变了"变成"组件精确知道哪些数据变了"）
- 哪个框架在大型列表中性能最好？（都依赖虚拟滚动，但 Vue 的精确追踪在处理频繁的小数据更新时开销更低）

---

## Q14: Angular 的依赖注入原理

Angular DI 是一个**层次化容器系统**，在启动时构建注入器树，运行时根据令牌查找服务实例。

**DI 系统四步工作流程：**

```ts
// ① 注册（Registration）：通过 providers 注册服务
// ② 令牌（Token）：使用唯一令牌标识服务
// ③ 注入（Injection）：组件/服务声明依赖
// ④ 解析（Resolution）：注入器树逐级查找
```

**令牌类型：**

```ts
// 1. 类令牌（最常见）
providers: [TodoService]
// 等价于 { provide: TodoService, useClass: TodoService }

// 2. 字符串令牌（配合 @Inject 使用）
providers: [{ provide: 'API_URL', useValue: 'https://api.example.com' }]
constructor(@Inject('API_URL') private apiUrl: string) {}

// 3. InjectionToken（类型安全的令牌）
export const API_URL = new InjectionToken<string>('API_URL');
providers: [{ provide: API_URL, useValue: 'https://api.example.com' }]
constructor(@Inject(API_URL) private apiUrl: string) {}

// 4. 多提供者（multi: true）
const providers = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];
```

**完整 DI 例子：**

```ts
// 自定义注入器（手动创建）
import { Injector, Provider } from '@angular/core';

const providers: Provider[] = [
  { provide: Logger, useClass: ConsoleLogger },
  { provide: 'APP_NAME', useValue: 'My Angular App' },
  { provide: ConfigService, useFactory: (logger) => {
    return new ConfigService(logger, { debug: true });
  }, deps: [Logger] }
];

const injector = Injector.create({ providers });

const logger = injector.get(Logger);
const appName = injector.get('APP_NAME');
```

**解析修饰符对比：**

| 修饰符 | 查找范围 | 找不到时 |
|--------|---------|---------|
| 无（默认） | 当前 -> 父 -> ... -> 根 | 报错 |
| `@Optional()` | 同上 | 返回 null |
| `@Self()` | 只查当前注入器 | 报错 |
| `@SkipSelf()` | 跳过当前 -> 父 -> ... -> 根 | 报错 |
| `@Host()` | 当前 -> 直到宿主组件 | 报错 |

**注入器树的工作原理：**

```ts
// 树结构（以组件树为例）
// AppComponent (根组件注入器)
//   ├── HeaderComponent
//   │   └── NavComponent
//   └── ContentComponent (有 providers: [ContentService])
//        └── PanelComponent

// PanelComponent 查找 ContentService:
// 1. PanelComponent 自己的注入器 → 没有
// 2. ContentComponent 的注入器 → 找到 → 返回实例
// 如果 ContentComponent 没有提供 → 继续向上到 AppComponent
```

**封装性的三个级别：**

| 级别 | 方式 | 可见范围 |
|------|------|---------|
| 全局 | `providedIn: 'root'` | 整个应用共享实例 |
| 模块 | `NgModule.providers` | 当前模块及导入该模块的地方 |
| 组件 | `Component.providers` | 该组件及子组件（每个组件实例独立） |

**面试追问：**
- DI 容器如何知道要创建什么类型的服务？（通过 `provide` 令牌和 `useClass`，默认类令牌时通过 TypeScript 类型——实际是 JS 构造函数引用）
- 为什么 Angular 推荐用 `InjectionToken` 而不是字符串令牌？（避免命名冲突，支持类型安全）
- DI 在 AOT 编译下如何处理？（编译时分析 provider 关系，生成更高效的代码，树摇未使用的 provider）
