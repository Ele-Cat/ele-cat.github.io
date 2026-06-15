# Angular 实战面试题

## Q1: Angular 项目目录结构

Angular 官方推荐的目录结构遵循**功能模块化**和**关注点分离**原则。

**推荐的 Angular 项目目录结构：**

```
src/
├── app/
│   ├── core/                    # 核心模块（只导入一次）
│   │   ├── services/            # 全局单例服务
│   │   │   ├── auth.service.ts
│   │   │   ├── logger.service.ts
│   │   │   └── error-handler.service.ts
│   │   ├── interceptors/        # HTTP 拦截器
│   │   │   ├── auth.interceptor.ts
│   │   │   └── error.interceptor.ts
│   │   ├── guards/              # 路由守卫
│   │   │   ├── auth.guard.ts
│   │   │   └── role.guard.ts
│   │   └── core.config.ts
│   │
│   ├── shared/                  # 共享模块
│   │   ├── components/          # 通用组件
│   │   │   ├── loading-spinner/
│   │   │   └── confirm-dialog/
│   │   ├── directives/          # 通用指令
│   │   │   ├── highlight.directive.ts
│   │   │   └── tooltip.directive.ts
│   │   ├── pipes/               # 通用管道
│   │   │   ├── truncate.pipe.ts
│   │   │   └── safe-url.pipe.ts
│   │   └── shared.module.ts
│   │
│   ├── features/                # 功能模块
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.routes.ts
│   │   │   └── dashboard.service.ts
│   │   ├── products/
│   │   │   ├── product-list/
│   │   │   ├── product-detail/
│   │   │   ├── product.model.ts
│   │   │   ├── product.service.ts
│   │   │   └── products.routes.ts
│   │   └── users/
│   │
│   ├── layout/                  # 布局组件
│   │   ├── header/
│   │   ├── footer/
│   │   └── sidebar/
│   │
│   ├── models/                  # 全局接口和类型
│   │   ├── user.model.ts
│   │   └── api-response.model.ts
│   │
│   ├── app.config.ts            # 应用配置（Standalone 方式）
│   └── app.component.ts
│
├── assets/                      # 静态资源
├── environments/                # 环境配置
│   ├── environment.ts
│   └── environment.prod.ts
└── styles/                      # 全局样式
    ├── variables.scss
    └── mixins.scss
```

**Standalone 应用的推荐结构（Angular 17+）：**

```
src/
└── app/
    ├── core/                    # 全局服务、拦截器、守卫
    ├── shared/                  # 共享组件、指令、管道
    ├── features/                # 功能模块
    │   └── products/
    │       ├── pages/           # 路由页面组件
    │       ├── components/      # 功能内部组件
    │       ├── services/        # 功能内部服务
    │       └── models/          # 功能内部类型
    ├── app.routes.ts
    └── app.config.ts
```

**目录设计原则：**

| 原则 | 说明 |
|------|------|
| 单一职责 | 每个文件/目录只负责一个关注点 |
| 功能优先 | 按功能组织（products/），而非按类型（components/） |
| 显式依赖 | 所有依赖通过 imports 显式声明 |
| 树摇友好 | 最小化共享模块的导入，避免"大杂烩"模块 |

**面试追问：**
- CoreModule 和 SharedModule 的区别？（CoreModule 只导入一次，提供全局单例服务；SharedModule 可多次导入，提供复用组件）
- 功能模块中的服务应该注册在哪里？（懒加载模块中注册在模块内部，急切加载模块中注册在 root）
- Angular 17 默认 Standalone 后还需要 CoreModule / SharedModule 吗？（可以不用 NgModule 包装，但目录组织仍然保留 core/shared/features 的概念）

---

## Q2: Angular 状态管理方案对比（Signal 在 16+）

Angular 应用有多种状态管理方案，选择合适的方案取决于应用规模和复杂度。

```ts
// 方案一：Service + Signal（轻量级，推荐中小应用）
@Injectable({ providedIn: 'root' })
export class TodoStore {
  private todos = signal<Todo[]>([]);
  private loading = signal(false);

  readonly todos$ = this.todos.asReadonly();
  readonly loading$ = this.loading.asReadonly();

  async loadTodos() {
    this.loading.set(true);
    try {
      const todos = await firstValueFrom(this.http.get<Todo[]>('/api/todos'));
      this.todos.set(todos);
    } finally {
      this.loading.set(false);
    }
  }

  addTodo(todo: Todo) {
    this.todos.update(list => [...list, todo]);
  }
}
```

```ts
// 方案二：NgRx（大型应用）
// store/actions/todo.actions.ts
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());

// store/reducers/todo.reducer.ts
const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos }))
);

// store/effects/todo.effects.ts
@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    switchMap(() => this.http.get<Todo[]>('/api/todos').pipe(
      map(todos => loadTodosSuccess({ todos }))
    ))
  ));
}

// 组件使用
@Component({ template: `&#123;&#123; todos() &#125;&#125;` })
export class TodoComponent {
  private store = inject(Store);
  todos = toSignal(this.store.select(selectTodos));
}
```

**方案对比：**

| 方案 | 复杂度 | 适用规模 | 学习曲线 | 调试工具 | 团队要求 |
|------|--------|---------|---------|---------|---------|
| Service + RxJS | 低 | 小/中 | 低 | 日志 | 1-3 人 |
| Service + Signal | 低 | 小/中 | 低 | Angular DevTools | 1-5 人 |
| NgRx | 高 | 大/超大 | 高 | Redux DevTools | 5+ 人 |
| NGXS | 中 | 中/大 | 中 | NGXS DevTools | 3-8 人 |
| Akita | 中 | 中/大 | 中 | Redux DevTools | 3-8 人 |
| Signal Store (NgRx 2) | 中 | 中/大 | 中 | Angular DevTools | 3-8 人 |

**选型建议：**

```ts
// 小应用（< 5 个页面）：Service + Signal 足够
@Injectable({ providedIn: 'root' })
export class AppState {
  user = signal<User | null>(null);
  theme = signal<'light' | 'dark'>('light');
}

// 中等应用（5-20 个页面）：考虑 Signal Store 或 NGXS
// 大型应用（20+ 页面）：考虑 NgRx 或 Akita
```

**面试追问：**
- Service + Signal 方案有什么局限性？（跨组件状态同步需要手动管理 Signal，没有强制单向数据流）
- NgRx 的 Effect 和 Service 有什么区别？（Effect 负责处理副作用并 dispatch 新 action，Service 可能直接修改状态）
- Signal 可以完全替代 NgRx 吗？（Signal 解决了反应性问题，但 NgRx 提供了完整的单向数据流、DevTools 和团队规范约束）

---

## Q3: Angular 的信号（Signal）最佳实践

Signal 是 Angular 16+ 引入的响应式原语，提供了细粒度的反应性，减少了对 Zone.js 的依赖。

```ts
// 核心 API
import { signal, computed, effect, untracked } from '@angular/core';

const count = signal(0);                    // 可写 Signal
const doubled = computed(() => count() * 2); // 计算 Signal（只读）
const isEven = computed(() => count() % 2 === 0);

// 读取
console.log(count());   // 0

// 更新
count.set(1);           // 设置新值
count.update(v => v + 1); // 基于当前值更新
count.set(prev => prev + 1); // 同 update（14+）

// 副作用
effect(() => {
  console.log(`count 值变为: ${count()}`);
});

// 修改 count 时自动执行 effect 内的代码
count.set(5); // log: count 值变为: 5
```

```ts
// 最佳实践 1：模型输入（model 实现双向绑定）
@Component({ template: `<p>&#123;&#123; value() &#125;&#125;</p>` })
export class SliderComponent {
  value = model(0); // 类似 [(value)]
  // 父组件: <app-slider [(value)]="parentValue" />
}

// 最佳实践 2：信号驱动的状态管理
@Injectable({ providedIn: 'root' })
export class CartStore {
  private items = signal<CartItem[]>([]);

  readonly count = computed(() => this.items().reduce((s, i) => s + i.quantity, 0));
  readonly total = computed(() => this.items().reduce((s, i) => s + i.price * i.quantity, 0));
  readonly isEmpty = computed(() => this.items().length === 0);

  addItem(item: CartItem) {
    this.items.update(list => [...list, item]);
  }

  removeItem(id: string) {
    this.items.update(list => list.filter(i => i.id !== id));
  }
}

// 最佳实践 3：与 RxJS 互操作
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({ template: `...` })
export class HybridComponent {
  // Signal -> Observable
  private count$ = toObservable(this.store.count);

  // Observable -> Signal
  data = toSignal(this.http.get<Data>('/api/data'), { initialValue: null });

  // RxJS 操作后转回 Signal
  filteredItems = toSignal(
    toObservable(this.store.items).pipe(
      debounceTime(300),
      filter(items => items.length > 0)
    ),
    { initialValue: [] }
  );
}

// 最佳实践 4：effect 中避免无限循环
effect(() => {
  const current = this.count();
  // 不要在 effect 中写入同一个 Signal（会造成循环）
  // this.count.set(current + 1); // BAD: 无限循环

  // 读取但不需要追踪依赖时使用 untracked
  console.log(untracked(() => this.lastUpdated()));
});
```

**Signal 使用红线：**

| 可以做 | 不可以做 |
|-------|----------|
| 在模板中作为函数调用 `&#123;&#123; count() &#125;&#125;` | 在 effect 中修改同一个 Signal（循环） |
| 使用 `computed` 派生数据 | 在 computed 中修改 Signal（副作用） |
| 使用 `effect` 处理副作用（日志、缓存） | 在 effect 中做异步操作（不推荐，用 RxJS） |
| 在 Service 中定义状态 | 在组件外直接修改 Signal（暴露 readonly） |

**面试追问：**
- `signal` 和 `computed` 有什么区别？（`signal` 是可变状态源，`computed` 是只读的派生值）
- `effect` 的执行时机是什么？（变更检测之前执行，适合同步副作用）
- Signal 可以替代 `async` pipe 吗？（Signal 可以直接在模板中使用，但 `async` pipe + 自动取消订阅的优势更明显）

---

## Q4: Angular 中的 RxJS 取消订阅

RxJS 订阅如果不取消会导致**内存泄漏**，因为 Observable 仍然保持引用，回调仍能执行。

**四种取消订阅方式：**

```ts
// 方式一：手动管理 Subscription（最基础）
@Component({ template: `...` })
export class ManualComponent implements OnInit, OnDestroy {
  private sub?: Subscription;

  ngOnInit() {
    this.sub = this.http.get('/api/data').subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe(); // 确保取消
  }
}
```

```ts
// 方式二：takeUntil 模式（推荐，适合多个订阅）
@Component({ template: `...` })
export class TakeUntilComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(1000).pipe(
      takeUntil(this.destroy$)       // destroy$ 发出时自动取消
    ).subscribe(v => this.counter = v);

    this.http.get('/api/data').pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();      // 防止内存泄漏
  }
}
```

```ts
// 方式三：async pipe（推荐，零手动管理）
@Component({
  template: `
    <ul>
      @for (user of users$ | async; track user.id) {
        <li>&#123;&#123; user.name &#125;&#125;</li>
      }
    </ul>
    <p>计数器: &#123;&#123; counter$ | async &#125;&#125;</p>
  `
})
export class AsyncPipeComponent {
  // async pipe 自动在组件销毁时取消订阅
  users$ = this.http.get<User[]>('/api/users');
  counter$ = interval(1000);
}
```

```ts
// 方式四：toSignal（Angular 16+，完全取消手动订阅）
@Component({ template: `&#123;&#123; data() &#125;&#125;` })
export class ToSignalComponent {
  // toSignal 自动管理生命周期，组件销毁时取消
  data = toSignal(this.http.get<Data>('/api/data'), { initialValue: null });
}
```

**各方案对比：**

| 方案 | 代码量 | 内存安全 | 适用场景 | 说明 |
|------|--------|---------|---------|------|
| 手动 unsubscribe | 多 | 可能忘 | 简单场景 | 多订阅时代码冗余 |
| takeUntil | 中 | 安全 | 推荐 | 一个 destroy$ 管所有 |
| async pipe | 少 | 自动 | 模板绑定 | 零模板代码 |
| toSignal | 最少 | 自动 | Signal 模式 | 16+ 推荐 |

**常见陷阱：**
- `takeUntil(this.destroy$)` 要放在 `pipe` 的**最后**（靠近 subscribe），否则它后面的操作符可能阻止取消
- 多个订阅共用一个 `destroy$` 时，`destroy$` 必须在 `ngOnDestroy` 中 `unsubscribe` 自己
- `async pipe` 不可用于组件类中（只能在模板中使用）
- HTTP 请求的 Observable 通常会完成后自动 complete，但 Angular HttpClient 不会——需要手动取消

```ts
// takeUntil 的正确位置
observable.pipe(
  switchMap(v => anotherObservable(v)),
  takeUntil(this.destroy$) // 正确：最后一个操作符
).subscribe();

observable.pipe(
  takeUntil(this.destroy$), // 错误：后面的操作符可能被绕过
  switchMap(v => anotherObservable(v))
).subscribe();
```

**面试追问：**
- HTTP 请求如果不取消，浏览器会继续请求吗？（会，取消只会停止 Angular 处理响应，浏览器请求可能仍在进行，可用 `AbortController`）
- `async pipe` 在处理多个 Observable 时怎么用？（配合 `combineLatest` 或使用 `*ngIf` 解构）
- Signal 的出现是否会取代 RxJS ？（Signal 处理同步状态很好，RxJS 在异步流操作上仍有不可替代的优势）

---

## Q5: Angular 测试策略

Angular 测试分为单元测试、组件测试和端到端测试（E2E），推荐使用 Jest / Karma + TestBed 进行测试。

**测试金字塔最佳实践：**

```
        /\
       /E2E\         少量端到端测试（最慢、最贵）
      /______\
     / 集成  \       中等集成测试（中等速度）
    /________\
   / 单元测试  \     大量单元测试（最快速、覆盖面最广）
  /____________\
```

```ts
// 服务测试（最简单，纯逻辑）
describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should login successfully', () => {
    service.login('admin', '123456').subscribe(result => {
      expect(result).toBeTrue();
    });

    const req = httpMock.expectOne('/api/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'mock-token' }); // 模拟成功响应
    httpMock.verify();
  });

  afterEach(() => {
    httpMock.verify(); // 验证没有挂起的请求
  });
});
```

```ts
// 组件测试（渲染 + 交互）
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent], // Standalone 组件直接导入
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('应该显示错误信息当表单无效时提交', () => {
    const submitBtn = fixture.nativeElement.querySelector('button[type="submit"]');
    submitBtn.click();
    fixture.detectChanges();

    const errorEl = fixture.nativeElement.querySelector('.error');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('邮箱不能为空');
  });

  it('应该调用 login 方法当表单有效时', () => {
    spyOn(component, 'login');

    component.loginForm.setValue({ email: 'test@test.com', password: '123456' });
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('button[type="submit"]');
    submitBtn.click();
    expect(component.login).toHaveBeenCalled();
  });
});
```

```ts
// 管道测试（纯函数，最简单）
describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('应该截断超过指定长度的字符串', () => {
    expect(pipe.transform('Hello World', 5)).toBe('Hello...');
  });

  it('应该返回原字符串当长度不足时', () => {
    expect(pipe.transform('Hi', 5)).toBe('Hi');
  });

  it('应该处理空字符串', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null as unknown as string)).toBe('');
  });
});
```

**测试类型对比：**

| 测试类型 | 工具 | 速度 | 覆盖 | 编写成本 |
|---------|------|------|------|---------|
| 服务测试 | TestBed + HttpClientTestingModule | 快 | 高 | 低 |
| 组件测试 | ComponentFixture + TestBed | 中 | 中 | 中 |
| 指令测试 | 同上 | 中 | 中 | 中 |
| 管道测试 | 直接 new | 最快 | 高 | 最低 |
| 集成测试 | TestBed | 较慢 | 高 | 高 |
| E2E 测试 | Playwright / Cypress | 最慢 | 端到端 | 最高 |

**面试追问：**
- `fixture.detectChanges()` 的作用？（手动触发一次变更检测，模拟 Angular 自动检测）
- `TestBed.compileComponents()` 在什么情况下需要？（使用 `templateUrl` 或 `styleUrls` 时需要异步编译）
- 为什么要使用 `HttpClientTestingModule` 而不是真实的 HTTP？（避免真实网络请求，测试独立运行，速度快）

---

## Q6: Angular 中的错误处理

Angular 应用的错误处理分为全局错误处理、HTTP 错误处理和组件内错误处理三个层级。

```ts
// 1. 全局错误处理器（捕获未处理的错误）
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private errorService = inject(ErrorService);

  handleError(error: any): void {
    // 记录错误到日志服务
    this.errorService.log(error);

    // 区分不同类型的错误
    if (error instanceof HttpErrorResponse) {
      // HTTP 错误 - 由拦截器处理，这里不重复处理
      return;
    }

    // 运行时错误
    console.error('未捕获的错误:', error);

    // 用户友好的提示
    // 可以使用 Toast 或弹窗
  }
}

// 注册
providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
```

```ts
// 2. HTTP 错误拦截器
export function httpErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    retryWhen(errors =>
      errors.pipe(
        // 只在特定条件下重试（服务器错误，非 401/403）
        mergeMap((error, index) => {
          if (index >= 3) return throwError(() => error); // 最多重试 3 次

          if (error.status === 401) {
            // 跳转登录
            return throwError(() => error);
          }

          if (error.status >= 500) {
            // 服务器错误，等待后重试
            return timer(1000 * Math.pow(2, index)); // 指数退避
          }

          return throwError(() => error);
        })
      )
    ),
    catchError((error: HttpErrorResponse) => {
      let userMessage = '操作失败，请重试';

      if (error.status === 0) {
        userMessage = '网络连接失败，请检查网络';
      } else if (error.status === 400) {
        userMessage = error.error?.message || '请求参数错误';
      } else if (error.status === 404) {
        userMessage = '请求的资源不存在';
      } else if (error.status === 500) {
        userMessage = '服务器内部错误';
      }

      // 通知用户（通过全局通知服务）
      inject(NotificationService).error(userMessage);

      // 将错误转换为可消费格式
      return throwError(() => ({ message: userMessage, original: error }));
    })
  );
}
```

```ts
// 3. 组件级 try/catch
@Component({ template: `...` })
export class DataComponent {
  error = signal<string | null>(null);

  async loadData() {
    try {
      this.error.set(null);
      const data = await firstValueFrom(this.http.get('/api/data'));
      this.data.set(data);
    } catch (err) {
      this.error.set('加载数据失败，请稍后重试');
      // 组件可以处理某些特定错误
      if (err instanceof HttpErrorResponse && err.status === 404) {
        this.router.navigate(['/404']);
      }
    }
  }
}
```

```ts
// 4. 路由错误处理
export function errorReportGuard(): CanActivateFn {
  return () => {
    return inject(HttpClient).get('/api/health-check').pipe(
      map(() => true),
      catchError(() => {
        // 健康检查失败时显示维护页面
        inject(Router).navigate(['/maintenance']);
        return of(false);
      })
    );
  };
}
```

**错误处理最佳实践：**

| 层级 | 处理方式 | 示例 |
|------|---------|------|
| 全局 | 捕获未处理运行时错误 | `ErrorHandler` |
| HTTP | 拦截器统一处理 | HTTP 状态码映射为友好提示 |
| 组件 | 业务逻辑错误 | 表单验证、加载失败重试 |
| 服务 | 错误的转换和清理 | `catchError` 返回 User 友好的错误 |

**面试追问：**
- 自定义 ErrorHandler 会影响 Angular 自身的行为吗？（会捕获所有未被 catch 的错误，但不建议在 ErrorHandler 中执行 Angular 视图更新）
- HTTP 错误拦截器中可以弹出 Toast 吗？（可以，通过注入 NotificationService）
- 错误重试使用指数退避的好处？（避免服务器持续过载，同时提高重试成功率）

---

## Q7: Angular Universal（SSR）

Angular Universal 是 Angular 的服务器端渲染解决方案，在服务器预渲染应用，提升首屏加载速度和 SEO。

**工作原理：**

```
请求 → 服务器 → Angular Universal（在 Node.js 上运行 Angular）
  → 渲染 HTML → 返回给浏览器 → 浏览器显示静态 HTML
  → 加载 JS → Angular 启动（Hydration）→ 接管交互
```

```ts
// app.config.ts (Standalone SSR 配置)
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), // 启用 hydration
    provideRouter(routes)
  ]
};
```

```ts
// server.ts（Express 服务器，Angular 17+）
import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@angular/ssr';

const server = express();
server.engine('html', ngExpressEngine({
  bootstrap: AppComponent,
  inlineCriticalCss: true     // 提取首屏关键 CSS
}));
server.set('view engine', 'html');
server.set('views', distFolder);

server.get('*', (req, res) => {
  res.render('index', {
    req,
    providers: [{ provide: 'REQUEST', useValue: req }]
  });
});
```

```ts
// TransferState — 避免重复 API 请求
import { TransferState, makeStateKey } from '@angular/core';

const USERS_KEY = makeStateKey<User[]>('users');

@Component({ template: `...` })
export class UsersComponent implements OnInit {
  private state = inject(TransferState);
  private http = inject(HttpClient);
  users = signal<User[]>([]);

  ngOnInit() {
    // 优先使用服务器传输的状态
    const stored = this.state.get(USERS_KEY, null);
    if (stored) {
      this.users.set(stored);
      this.state.remove(USERS_KEY); // 消费后移除
    } else {
      // 浏览器端请求
      this.http.get<User[]>('/api/users').subscribe(users => this.users.set(users));
    }
  }
}

// 服务器端（在 Resolver 或组件中设置状态）
ngOnInit() {
  this.http.get<User[]>('/api/users').subscribe(users => {
    this.users.set(users);
    if (isPlatformServer(this.platformId)) {
      this.state.set(USERS_KEY, users);
    }
  });
}
```

**SSR 的优缺点：**

| 方面 | 优势 | 劣势 |
|------|------|------|
| SEO | 搜索引擎可抓取完整内容 | 需要额外的 SEO 配置 |
| 首屏速度 | 用户立即看到内容 | TTI（可交互时间）可能较慢 |
| 用户体验 | 内容立即可见 | 需要处理 hydration 闪烁 |
| 服务器负载 | - | 增加服务器计算压力 |
| 部署 | - | 需要 Node.js 服务器环境 |

**常见陷阱：**
- 服务器端没有 `window`、`document`、`localStorage`，使用前需要检查 `isPlatformBrowser`
- `setTimeout` 在服务器端也会执行，但不会渲染视觉效果——可能造成内存泄漏
- 第三方库使用了 DOM API 会在 SSR 时报错（需要 mock 或使用 `afterNextRender`）

```ts
import { isPlatformBrowser } from '@angular/common';

@Component({ template: `...` })
export class SafeSSRComponent {
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // 只在浏览器端执行
      localStorage.setItem('key', 'value');
    }
  }
}
```

**面试追问：**
- Hydration 过程是什么？（服务器发送 HTML，浏览器解析后 Angular 复用 DOM 节点挂载事件，避免重新创建 DOM）
- 为什么 SSR 需要 TransferState？（防止服务器已经请求过的数据在浏览器端重复请求，也避免数据不一致）
- Angular 的 SSR 和 Next.js / Nuxt.js 的 SSR 有什么异同？（思路类似，但 Angular Universal 更"硬核"，需要手动处理更多细节）

---

## Q8: Angular 中的跨组件通信

**七种跨组件通信方式：**

| 方式 | 适用场景 | 复杂度 | 方向 |
|------|---------|--------|------|
| `@Input` / `@Output` | 父子组件 | 低 | 父子双向 |
| 模板引用变量 (#var) | 父访问子 | 低 | 父 -> 子 |
| `@ViewChild` / `@ContentChild` | 父访问子/投影 | 中 | 父 -> 子 |
| 服务 + Subject | 任意组件 | 中 | 任意方向 |
| 路由参数 | 路由相关组件 | 中 | 路由传参 |
| Signal 共享状态 | 任意组件 | 中 | 任意方向 |
| NgRx / 状态管理库 | 大型应用 | 高 | 全局单向 |

```ts
// 1. @Input / @Output（父子通信用）
@Component({ selector: 'app-child', template: `...` })
export class ChildComponent {
  @Input() data!: string;
  @Output() action = new EventEmitter<string>();

  doSomething() {
    this.action.emit('来自子组件的消息');
  }
}

// 2. 服务 + Subject（任意组件通信，推荐）
@Injectable({ providedIn: 'root' })
export class EventBusService {
  private eventSubject = new Subject<{ type: string; payload: any }>();

  // 事件流
  on(type: string): Observable<any> {
    return this.eventSubject.pipe(
      filter(e => e.type === type),
      map(e => e.payload)
    );
  }

  // 发布事件
  emit(type: string, payload: any) {
    this.eventSubject.next({ type, payload });
  }
}

// 组件 A（发送）
@Component({ template: `<button (click)="send()">发送</button>` })
export class ComponentA {
  private bus = inject(EventBusService);
  send() { this.bus.emit('user:updated', { id: 1, name: 'Alice' }); }
}

// 组件 B（接收，任意层级）
@Component({ template: `&#123;&#123; message &#125;&#125;` })
export class ComponentB implements OnInit, OnDestroy {
  private bus = inject(EventBusService);
  private destroy$ = new Subject<void>();
  message = '';

  ngOnInit() {
    this.bus.on('user:updated').pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.message = `用户 ${data.name} 已更新`);
  }

  ngOnDestroy() { this.destroy$.next(); }
}
```

```ts
// 3. Signal 共享状态（推荐 Angular 16+）
@Injectable({ providedIn: 'root' })
export class SharedState {
  readonly count = signal(0);
  readonly doubled = computed(() => this.count() * 2);

  increment() { this.count.update(v => v + 1); }
}

// 任意组件都可以注入 SharedState，保持状态同步
@Component({ template: `&#123;&#123; state.count() &#125;&#125;` })
export class ConsumerComponent {
  state = inject(SharedState);
}
```

**选择指南：**

```
父子组件（直接）
  ├── 展示型数据传递 → @Input
  ├── 回传事件 → @Output
  ├── 访问子组件 API → @ViewChild
  └── 投影内容通信 → @ContentChild

非父子组件（任意）
  ├── 小应用中 → Service + Subject / Signal
  ├── 共享状态多 → StateService with Signal
  └── 复杂状态流 → NgRx / NGXS
```

**常见陷阱：**
- `@Output` 的事件名不要和 HTML 原生事件冲突（如 `click`）
- 服务中使用 `Subject` 时务必在 `ngOnDestroy` 中取消订阅，防止内存泄漏
- 路由参数传参不要传敏感信息（URL 可见）
- `EventEmitter` 必须配合 `@Output` 使用，在 Service 中用 `Subject`

**面试追问：**
- `@Output` 的 `EventEmitter` 是同步还是异步？（同步触发，父组件中的事件处理函数在子组件 emit 的同一 tick 执行）
- 服务通信和状态管理库的核心区别？（前者更灵活但约束少，后者提供单向数据流和调试工具）
- 为什么不用全局事件 bus 替代所有通信？（全局事件难以追踪、没有类型安全、容易造成内存泄漏）

---

## Q9: Angular 微前端方案

微前端将大型前端应用拆分为多个独立开发、独立部署的小型应用，在主应用中组合运行。

**主流方案对比：**

| 方案 | 框架中立 | Angular 适配 | 隔离性 | 通信 | 部署 |
|------|---------|-------------|-------|------|------|
| Module Federation (Webpack 5) | 是 | 原生支持 | 中等 | 共享模块 | 独立 |
| Single-SPA | 是 | 有插件 | 强 | 自定义事件 | 独立 |
| Web Components | 是 | Angular Elements | 强 | Props/Events | 独立 |
| iframe | 是 | 原生支持 | 最强 | postMessage | 独立 |

```ts
// Module Federation 配置（webpack.config.js）
// 主应用
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    mfe1: 'mfe1@http://localhost:4201/remoteEntry.js',
    mfe2: 'mfe2@http://localhost:4202/remoteEntry.js'
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true }
  }
});

// 微应用
new ModuleFederationPlugin({
  name: 'mfe1',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/app/dashboard/dashboard.module.ts'
  },
  shared: {
    '@angular/core': { singleton: true },
    '@angular/common': { singleton: true }
  }
});
```

```ts
// Angular Elements（Web Components 方式）
// 将 Angular 组件打包为原生 Web Component
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [MicroWidgetComponent],
  imports: [BrowserModule],
  bootstrap: []
})
export class WidgetModule {
  constructor(private injector: Injector) {
    const widget = createCustomElement(MicroWidgetComponent, { injector });
    customElements.define('micro-widget', widget);
  }

  ngDoBootstrap() {} // 不需要 bootstrap
}
```

```html
<!-- 在任何框架中使用 Angular Web Component -->
<micro-widget user-id="123"></micro-widget>
<script src="widget.js"></script>
```

```ts
// 微前端通信：自定义事件
// 微应用发出事件
window.dispatchEvent(new CustomEvent('order:placed', {
  detail: { orderId: 'ORD-001', amount: 299 }
}));

// 主应用监听
window.addEventListener('order:placed', (event: CustomEvent) => {
  console.log('下单成功:', event.detail);
  // 更新购物车角标等
});
```

**最佳实践（Module Federation）：**

| 原则 | 说明 |
|------|------|
| 共享库版本一致 | Angular 核心库使用 `singleton: true` + `strictVersion: true` |
| 按业务拆分 | 每个微应用对应完整业务领域（订单、用户、商品） |
| 独立部署 | 每个微应用有自己的 CI/CD 流程 |
| 统一设计 | 使用共享 UI 组件库或 Design System |
| 降级处理 | 微应用加载失败时显示 fallback 组件 |

**常见陷阱：**
- 共享库版本不一致导致运行时错误（所有微应用必须使用兼容的 Angular 版本）
- 样式冲突（使用 CSS 隔离或 scoped styles）
- 路由冲突（主应用负责顶层路由，微应用只管理自己的子路由）
- 打包体积（共享库重复打包，需要正确配置 shared）

**面试追问：**
- Module Federation 中 shared 配置的作用是什么？（避免共享库重复加载，所有微应用共用同一份 Angular 库）
- Angular Elements 的优缺点？（优点是框架无关性可在任何页面使用；缺点是打包体积大、性能开销）
- 微前端适合什么样的团队？（5 个以上团队的独立功能组，每个团队负责一个业务域，需要独立迭代和部署）

---

## Q10: Angular 升级策略

Angular 每 6 个月发布一个大版本，官方提供 `ng update` 工具简化升级过程。了解升级路径和 breaking changes 至关重要。

**主要版本间升级路径：**

```
Angular 2 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19
                     ╰─ Ivy 编译   ╰─ Standalone    ╰─ Signals    ╰─ Zoneless
                                  (14+)               (16+)         (18+ exp)
```

```bash
# 官方升级命令（逐版本升级，不跨大版本）
ng update @angular/core @angular/cli --allow-dirty

# 查看更新详情
ng update @angular/core --next
```

```ts
// 各版本关键改动：

// Angular 9 → Ivy 编译（2019）
// 默认启用 Ivy，更小的包体积，更好的调试

// Angular 13 → 移除 View Engine（2021）
// 完全迁移到 Ivy，不再支持 View Engine

// Angular 14 → Standalone 组件（2022）
@Component({
  standalone: true, // 新增选项
  imports: [CommonModule]
})

// Angular 15 → NgOptimizedImage、Model inputs（2023）

// Angular 16 → Signals（响应式原语，2023）
count = signal(0);

// Angular 17 → Standalone 默认、@if/@for 控制流（2023）
@if (condition) { ... }
@for (item of items; track item.id) { ... }

// Angular 18 → Zoneless 变更检测（实验性，2024）

// Angular 19 → 更多 Signal 组件特性
```

**升级前检查清单：**

```ts
// 1. 检查当前版本
ng version

// 2. 查看兼容性矩阵
// https://angular.dev/reference/versions

// 3. 检查第三方库兼容性
npm outdated @angular/core @angular/cli my-lib @ngrx/store

// 4. 运行测试
ng test --no-watch --code-coverage

// 5. 更新 Angular CLI 工具
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest

// 6. 备份项目（提交 git）
git add . && git commit -m "backup before upgrade"

// 7. 执行更新
ng update @angular/core @angular/cli
```

```ts
// 处理 Breaking Changes 示例
// Angular 17: 弃用 *ngIf/*ngFor，推荐 @if/@for
// 迁移方法：自动迁移工具
ng generate @angular/core:control-flow

// Angular 14+: 弃用 TestBed.get，推荐 TestBed.inject
// 旧写法：TestBed.get(MyService)
// 新写法：TestBed.inject(MyService)

// Angular 15+: 弃用 provideLocaleData，推荐 provideLocale
```

**常见升级问题及解决方案：**

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| npm 依赖冲突 | 第三方库未更新 | 使用 `--force` 或等待库更新 |
| TestBed.get 不存在 | Angular 14 后移除 | 替换为 TestBed.inject |
| 找不到模块 | 包名/路径变化 | 更新 import 路径 |
| `@angular/forms` 兼容问题 | 升级后 API 变化 | 参考 angular.dev 迁移指南 |
| Ivy 编译报错 | View Engine 组件不兼容 | 更新第三方库到 Ivy 兼容版本 |

**升级策略建议：**

1. **跟随 LTS**：始终使用 Angular 当前的 LTS 版本，获得长期支持
2. **逐版本升级**：跳过多个大版本升级可能导致复杂问题，建议 v15 → v16 → v17
3. **测试覆盖**：升级前确保测试覆盖关键功能
4. **先在分支升级**：不要在主干分支做升级，有风险
5. **使用官方工具**：`ng update` + `angular.dev` 迁移指南

**面试追问：**
- 为什么 Angular 推荐逐版本升级而不是跳跃升级？（每个版本都有独立的 breaking changes，跳跃升级可能导致依赖错误难以定位）
- Ivy 编译器比 View Engine 好在哪里？（更小的 bundle、更好的模板类型检查、更快的编译速度、更好的调试信息）
- 如何制定团队的升级频率？（每个大版本发布后 2-3 个月内测试升级，保持最多落后 2 个版本）

DONE
