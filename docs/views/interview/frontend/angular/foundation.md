# Angular 基础面试题

## Q1: Angular 的组件是什么？

组件是 Angular 应用的基本构建块，每个组件由三部分组成：**模板（Template）**定义视图、**样式（Styles）**定义外观、**类（Class）**定义数据和逻辑。组件通过 `@Component` 装饰器标记，Angular 会将其编译为自定义元素并管理其生命周期。

**为什么需要组件？** 组件化实现了关注点分离，每个组件封装独立的 UI 片段，可复用、可测试、易维护。

```ts
// 基础组件
@Component({
  selector: 'app-user-card',
  template: `<h2>{{ user.name }}</h2><p>{{ user.email }}</p>`,
  styles: [`h2 { color: navy; }`]
})
export class UserCardComponent {
  @Input() user!: User;
}
```

```ts
// Standalone 组件（Angular 17+ 默认方式）
@Component({
  selector: 'app-clock',
  standalone: true,
  template: `<p>{{ currentTime | date:'HH:mm:ss' }}</p>`
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime = new Date();
  private timerRef?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.timerRef = setInterval(() => this.currentTime = new Date(), 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timerRef); // 防止内存泄漏
  }
}
```

**常见误区：** 组件类中直接操作 DOM（应使用 `Renderer2` 或模板绑定）。不要在构造函数中执行复杂逻辑——构造函数只适合 DI 注入，初始化应在 `ngOnInit` 中做。

**性能要点：** 默认变更检测（`ChangeDetectionStrategy.Default`）会检查整个组件树。对纯展示组件使用 `ChangeDetectionStrategy.OnPush` 可以跳过不必要的检查。

**面试追问：**
- 组件和指令的区别是什么？（组件有模板，指令没有）
- 组件在 Angular 启动时经历了哪些步骤？（引导 -> 编译 -> 创建 -> 变更检测 -> 销毁）
- 同一个组件可以同时出现在多个位置吗？（可以，通过 ViewContainerRef 动态创建）

---

## Q2: Angular 的数据绑定方式

Angular 提供四种数据绑定方式，实现模板与组件类的数据同步：

| 绑定类型 | 语法 | 方向 | 用途 |
|---------|------|------|------|
| 插值 | &#123;&#123; value &#125;&#125; | 类 -> 模板 | 显示文本/表达式结果 |
| 属性绑定 | `[property]="value"` | 类 -> 模板 | 设置 DOM/组件属性 |
| 事件绑定 | `(event)="handler()"` | 模板 -> 类 | 响应用户操作 |
| 双向绑定 | `[(ngModel)]="value"` | 双向同步 | 表单输入 |

```ts
// 组件类
export class BindingDemoComponent {
  name = 'Alice';
  isDisabled = false;
  items = ['A', 'B', 'C'];
  selected!: string;

  handleClick(msg: string) {
    alert(msg);
  }
}
```

```html
<!-- 插值：显示数据 -->
<p>Hello, {{ name.toUpperCase() }}!</p>

<!-- 属性绑定：动态控制 -->
<button [disabled]="isDisabled">Submit</button>
<img [src]="userAvatarUrl">

<!-- 事件绑定：用户交互 -->
<button (click)="handleClick('clicked')">Click</button>
<input (keyup.enter)="search($event)">

<!-- 双向绑定：表单 -->
<input [(ngModel)]="name">
<!-- 等价于 -->
<input [ngModel]="name" (ngModelChange)="name = $event">
```

**重要细节：** `[attr.*]` 绑定 HTML 属性，`[class.*]` 绑定 CSS 类，`[style.*]` 绑定内联样式。

**常见陷阱：**
- `@Input()` 绑定可变对象时，子组件使用 OnPush 可能不检测对象内部变化（不可变更新 + 新引用可解决）
- `ExpressionChangedAfterItHasBeenCheckedError`：开发模式下，如果在变更检测周期中修改了父组件数据，会触发此错误。解决：使用 `setTimeout` 或 `ChangeDetectorRef.detectChanges()`

```ts
// 解决办法：异步更新
ngAfterViewInit() {
  setTimeout(() => this.data = 'new value'); // 下一轮检测周期
}
```

**面试追问：**
- `[value]` 和 `attr.value` 有什么区别？（前者绑定 DOM 属性，后者绑定 HTML 属性，值类型不同）
- 如何实现自定义双向绑定？（使用 `@Input()` 和 `@Output()` 配合 `change` 后缀事件）

---

## Q3: Angular 的装饰器有哪些？

装饰器是 Angular 利用 TypeScript 元编程能力实现的核心机制，用于标记类、属性、方法或参数，附加元数据。

**分类及用途：**

| 类别 | 装饰器 | 作用 |
|------|--------|------|
| 类装饰器 | `@Component`、`@Directive`、`@Pipe`、`@Injectable`、`@NgModule` | 标记类并配置元数据 |
| 属性装饰器 | `@Input()`、`@Output()`、`@HostBinding()` | 标记属性/输入输出 |
| 方法装饰器 | `@HostListener()` | 标记方法为事件处理器 |
| 参数装饰器 | `@Inject()`、`@Optional()`、`@Self()`、`@SkipSelf()`、`@Host()` | 标记 DI 参数 |

```ts
// 类装饰器：最常用的 @Component
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {}

// 属性装饰器
export class ChildComponent {
  @Input() name = '';               // 父传子
  @Output() changed = new EventEmitter<string>(); // 子传父
  @HostBinding('class.active') isActive = false;  // 绑定宿主元素类

  @ViewChild('myInput') inputEl!: ElementRef;      // 查询子元素
  @ContentChild('projected') content!: ElementRef; // 查询投影内容
}

// 参数装饰器：控制 DI 解析
export class ExampleService {
  constructor(
    @Optional() @Inject('API_URL') private apiUrl: string | null,
    @SkipSelf() private parentService: ParentService
  ) {}
}
```

**注意：** Angular 17+ 引入了 `input()` 和 `output()` 函数作为装饰器的替代方案，但装饰器模式在现有代码库中仍广泛使用。

**面试追问：**
- 装饰器执行的顺序是什么？（属性装饰器 -> 方法装饰器 -> 类装饰器）
- 自定义装饰器如何实现？（通过工厂函数返回 decorator 函数）
- Angular 编译后装饰器还保留吗？（JIT 保留，AOT 编译时被处理）

---

## Q4: Angular 的模块系统（NgModule vs Standalone）

**NgModule（传统方式）：** 使用 `@NgModule` 将组件、指令、管道、服务组织为模块，需要手动声明依赖。应用至少需要一个根模块 `AppModule`。

**Standalone（新方式）：** Angular 14+ 引入, 17+ 默认。组件可以直接独立使用，无需 NgModule 包装，通过 `imports` 数组声明依赖。

```ts
// NgModule 方式
@NgModule({
  declarations: [UserCardComponent, UserListComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [UserService],
  exports: [UserCardComponent]
})
export class UserModule {}

// 使用需要先导入 UserModule，再在 declarations 中声明
@NgModule({
  imports: [BrowserModule, UserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```ts
// Standalone 方式：每个组件自己声明依赖
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `...`
})
export class UserProfileComponent {
  userService = inject(UserService);
}
```

```ts
// 路由懒加载 Standalone 组件
const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  }
];
```

**迁移策略：**
1. 工具 `ng generate @angular/core:standalone` 可以自动迁移
2. 从最底层的叶子组件开始，逐步向上迁移
3. Standalone 组件可以导入 NgModule，反之 NgModule 也可以导入 Standalone 组件（通过 `imports`）

**对比：**

| 特性 | NgModule | Standalone |
|------|----------|------------|
| 心智负担 | 需要管理 declarations/providers/imports | 组件自包含，更简单 |
| 懒加载 | loadChildren 加载模块 | loadComponent 直接加载组件 |
| 树摇（Tree-shaking） | 模块中任何导出都用才生效 | 更好，只打包使用的组件 |
| 第三方库 | 成熟，大部分库提供 NgModule | 逐渐支持，部分库可能兼容问题 |
| 测试 | 需要 TestBed.configureTestingModule 导入模块 | 直接导入组件，更轻量 |

**面试追问：**
- Standalone 应用如何做惰性加载？（`loadComponent` 或 `loadChildren` 返回 `Routes` 数组）
- NgModule 的 `providers` 和组件 `providers` 有什么区别？（模块级提供者对所有组件可见，组件级只对该组件及其子组件可见）
- 可以在 Standalone 组件中使用 NgModule 提供的服务吗？（可以，NgModule 的 providers 是全局的）

---

## Q5: Angular 的指令分类（新控制流语法 `@if`/`@for` 见 [17+]）

指令分为三类：

| 类型 | 说明 | 示例 |
|------|------|------|
| **组件** | 带有模板的指令，最常用 | `@Component` |
| **结构型指令** | 改变 DOM 结构（增删元素） | `*ngIf`、`*ngFor`、`*ngSwitch`、`@if`、`@for` |
| **属性型指令** | 改变 DOM 元素的外观/行为 | `ngClass`、`ngStyle`、`ngModel`、自定义属性指令 |

```ts
// 自定义属性指令：高亮
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
```

```ts
// 自定义结构型指令：权限控制
@Directive({ selector: '[appHasPermission]', standalone: true })
export class HasPermissionDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input() set appHasPermission(permission: string) {
    const allowed = this.auth.hasPermission(permission);
    if (allowed && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!allowed && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

**新旧控制流语法对比：**

```html
<!-- 旧语法（结构型指令） -->
<div *ngIf="loading; else loaded">加载中...</div>
<ng-template #loaded><div>加载完成</div></ng-template>

<li *ngFor="let item of items; trackBy: trackById; index as i">&#123;&#123; i &#125;&#125;. &#123;&#123; item.name &#125;&#125;</li>

<!-- 新语法（Angular 17+，@for 会自动 track $index，性能更好） -->
@if (loading) {
  <div>加载中...</div>
} @else {
  <div>加载完成</div>
}

@for (item of items; track item.id; let i = $index) {
  <li>&#123;&#123; i &#125;&#125;. &#123;&#123; item.name &#125;&#125;</li>
} @empty {
  <li>列表为空</li>
}
```

**注意陷阱：**
- 一个元素上只能有一个结构型指令（`*ngIf` 和 `*ngFor` 不能同时放在一个元素上，可以用 `<ng-container>` 嵌套）
- `@if` / `@for` 默认是 Standalone 语法，不需要额外导入 CommonModule
- `track` 在新语法中是必需的，用于性能优化

**面试追问：**
- `<ng-template>` 和 `<ng-container>` 有什么区别？（前者定义模板，后者是逻辑容器不产生 DOM）
- `*ngIf` 和 `@if` 的性能差异？（`@if` 编译后更高效，不产生 wrapper 元素）
- 为什么 `@for` 强制要求 `track`？（为了高效的 DOM 复用和 diff 计算）

---

## Q6: Angular 的管道（Pipe）是什么？

管道用于在模板中转换数据。输入数据 -> 管道 -> 输出格式化后的数据。Angular 内置了数十个管道，也支持自定义。

**内置管道示例：**

```ts
@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, DecimalPipe, JsonPipe],
  template: `
    <p>&#123;&#123; birthday | date:'yyyy年MM月dd日' &#125;&#125;</p>       <!-- 2026年06月12日 -->
    <p>&#123;&#123; name | uppercase &#125;&#125;</p>                       <!-- ALICE -->
    <p>&#123;&#123; price | currency:'CNY':'symbol':'1.2-2' &#125;&#125;</p><!-- ¥1,234.56 -->
    <p>&#123;&#123; pi | number:'1.2-3' &#125;&#125;</p>                    <!-- 3.142 -->
    <p>&#123;&#123; user | json &#125;&#125;</p>                             <!-- {"name":"Alice"} -->
  `
})
export class PipeDemoComponent {
  birthday = new Date(2026, 5, 12);
  name = 'Alice';
  price = 1234.56;
  pi = 3.1415926;
  user = { name: 'Alice', age: 30 };
}
```

**自定义管道：**

```ts
@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLen = 20, suffix = '...'): string {
    if (!value) return '';
    return value.length > maxLen ? value.substring(0, maxLen) + suffix : value;
  }
}
```

**纯管道 vs 非纯管道：**

| 特性 | 纯管道 (pure: true) | 非纯管道 (pure: false) |
|------|---------------------|----------------------|
| 触发时机 | 输入值引用变化时 | 每次变更检测周期 |
| 性能 | 好（缓存结果） | 差（频繁调用） |
| 适用场景 | 字符串、数字、日期转换 | 数组过滤、异步数据处理 |
| 默认值 | 是（绝大多数用默认） | 手动设置 |

```ts
// 非纯管道：每次变更检测都执行（性能敏感，慎用）
@Pipe({ name: 'filterArray', pure: false })
export class FilterArrayPipe implements PipeTransform {
  transform(items: any[], searchTerm: string) {
    if (!items || !searchTerm) return items;
    return items.filter(item => item.name.includes(searchTerm));
  }
}
```

**常见陷阱：**
- 非纯管道在每次变更检测时都执行，大数据量过滤会造成严重性能问题。应改用组件中的 `computed` 或 `memoize` 技术。
- 管道默认是纯管道，如果输入是可变对象且只修改对象内部属性，管道不会重新执行。这时使用非纯管道或创建新对象引用。

**面试追问：**
- 管道链式调用如何工作？（`value | pipe1 | pipe2`，从左到右依次执行）
- `async` 管道的原理是什么？（订阅 Observable/Promise，自动管理订阅和取消订阅）
- 如何给管道传递多个参数？（`value | pipeName:arg1:arg2`，在 `transform` 方法中接收）

---

## Q7: Angular 的服务（Service）和 DI（`inject()` 见 [14+]）

服务是封装可复用逻辑的类，通过依赖注入（DI）提供给组件使用。DI 是 Angular 的核心设计模式，实现"控制反转"。

**三种注入方式：**

```ts
// 方式一：树摇式提供者（推荐）
@Injectable({ providedIn: 'root' })
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = '/api/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
}

// 方式二：构造函数注入
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
}

// 方式三：inject 函数注入（Angular 14+，适合在 guard/pipe/resolver 中使用）
const authService = inject(AuthService);
export function authGuard(): boolean {
  return authService.isLoggedIn();
}
```

**层次化注入器（Hierarchical Injectors）：**

```
根注入器 (providedIn: 'root')
  └── 模块注入器 (NgModule providers)
       └── 组件注入器 (Component providers)
            └── 子组件注入器
```

```ts
// 组件级提供者：每个组件实例获得独立的服务实例
@Component({
  selector: 'app-editor',
  providers: [EditorStateService] // 每次创建组件都新建实例
})
export class EditorComponent {}

// 父子组件通过 @SkipSelf 跳过当前注入器
export class ChildComponent {
  constructor(@SkipSelf() private parentService: ParentService) {}
}
```

**四种工厂提供者：**

```ts
providers: [
  { provide: Logger, useClass: Logger },                        // 类提供者
  { provide: 'API_URL', useValue: 'https://api.example.com' },   // 值提供者（配合 @Inject 使用）
  { provide: Logger, useExisting: ConsoleLogger },               // 别名提供者
  { provide: Logger, useFactory: (config) => new Logger(config.level), deps: [Config] } // 工厂提供者
]
```

**常见陷阱：**
- 直接 `new Service()` 会绕过 Angular DI，导致该服务无法使用 Angular 内置依赖（如 HttpClient）
- `providedIn: 'root'` 的服务是**单例**的，但如果同时在模块和组件 providers 中注册，会创建多个实例
- 循环依赖：`ServiceA` 依赖 `ServiceB`，`ServiceB` 又依赖 `ServiceA`。避免方案：使用 `forwardRef(() => ServiceA)` 或重构设计

**面试追问：**
- `providedIn: 'root'` 和 `providers: []` 在 NgModule 中的区别？（前者懒加载时也不会重复创建，后者会导致多个实例）
- Angular 如何解决循环依赖？（`forwardRef` + `Injector` 手动获取）
- `@Optional` 装饰器有什么用？（依赖可能不存在时避免报错，返回 null）

---

## Q8: Angular 的路由

Angular Router 是官方路由库，管理页面导航，支持懒加载、路由守卫、路由参数、嵌套路由等。

```ts
// 路由配置
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: '首页' },

  // 带参数路由
  { path: 'products/:id', component: ProductDetailComponent },

  // 嵌套路由
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
    canActivate: [authGuard], // 路由守卫
    canDeactivate: [confirmGuard], // 离开确认
  },

  // 懒加载
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then(m => m.settingsRoutes)
  },

  // 通配符（404）
  { path: '**', component: NotFoundComponent }
];
```

```ts
// 组件中使用路由
@Component({ template: `...` })
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    // 获取路由参数（快照方式：只获取一次）
    const id = this.route.snapshot.paramMap.get('id');

    // 监听参数变化（在同一个组件内切换参数时使用）
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.loadProduct(this.productId);
    });

    // 查询参数
    this.route.queryParamMap.subscribe(params => {
      this.page = Number(params.get('page')) || 1;
    });
  }

  goBack() {
    this.router.navigate(['/products'], { queryParams: { page: 1 } });
  }
}
```

```html
<!-- 模板中的路由指令 -->
<nav>
  <a routerLink="/home" routerLinkActive="active">首页</a>
  <a [routerLink]="['/products', product.id]">商品详情</a>
  <button (click)="goBack()">返回</button>
</nav>

<router-outlet />  <!-- 路由内容渲染位置 -->
```

**路由参数类型：**

| 类型 | 获取方式 | 特点 |
|------|----------|------|
| Path 参数 | `route.paramMap.get('id')` | `/products/:id`，必需 |
| 查询参数 | `route.queryParamMap.get('page')` | `/products?page=1`，可选 |
| 路由数据 | `route.data` | 在路由配置中通过 `data: {...}` 传递 |
| 片段 | `route.fragment` | `/products#section2`，锚点定位 |

**常见陷阱：**
- 同一组件切换路由参数（如 `/product/1` -> `/product/2`），`ngOnInit` 不会重新执行。需要使用 `paramMap.subscribe` 监听。
- `pathMatch: 'full'` 不加的话，`redirectTo` 可能导致无限重定向。
- 路由懒加载不等于模块懒加载——Standalone 组件可以直接懒加载。

**面试追问：**
- `RouterModule.forRoot()` 和 `RouterModule.forChild()` 的区别？（根路由用 forRoot，特性模块用 forChild）
- 如何实现路由复用策略？（`RouteReuseStrategy` 接口，缓存组件状态）
- `RouterLinkActive` 的工作原理是什么？（匹配当前 URL 是否包含 routerLink 的路径，自动添加/移除 CSS 类）

---

## Q9: Angular 表单

Angular 提供两种表单方案：**模板驱动表单**和**响应式表单**。

| 特性 | 模板驱动 | 响应式表单 |
|------|----------|------------|
| 数据模型 | 隐式，由 `[(ngModel)]` 自动创建 | 显式在组件类中定义 FormGroup |
| 验证 | 在模板中使用指令 `required`, `minlength` | 在组件类中使用 Validators 函数 |
| 测试 | 依赖 DOM，需要渲染组件 | 纯类验证，容易单元测试 |
| 复杂场景 | 不太适合动态表单 | 动态表单（FormArray）很容易 |
| 初始化 | 自动 | 手动通过 `new FormControl()` |

```ts
// 响应式表单（推荐用于复杂应用）
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="邮箱"
             [class.is-invalid]="email.invalid && email.touched">
      @if (email.errors?.['required'] && email.touched) {
        <small class="error">邮箱不能为空</small>
      }
      @if (email.errors?.['email']) {
        <small class="error">邮箱格式不正确</small>
      }
      <input type="password" formControlName="password">
      <button [disabled]="loginForm.invalid">登录</button>
    </form>
  `
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  get email() { return this.loginForm.get('email')!; }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

```ts
// 自定义验证器
export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName);
    const matching = formGroup.get(matchingControlName);
    if (!control || !matching) return null;

    if (matching.errors && !matching.errors['mustMatch']) return null;

    if (control.value !== matching.value) {
      matching.setErrors({ mustMatch: true });
    } else {
      matching.setErrors(null);
    }
    return null;
  };
}

// 使用
this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, { validators: mustMatch('password', 'confirmPassword') });
```

**常见陷阱：**
- 模板驱动表单需要 `FormsModule`，响应式表单需要 `ReactiveFormsModule`
- `formControlName` 必须在 `formGroup` 内使用，否则报错
- 表单验证器的执行顺序：单个控件验证 -> 组验证 -> 异步验证
- `reset()` 会重置表单状态，`setValue()` 要求完整对象，`patchValue()` 可以部分更新

**性能要点：**
- 大型表单使用 `updateOn: 'blur'` 或 `updateOn: 'submit'` 减少验证触发次数
- `valueChanges` 是高频率事件，使用 `debounceTime` 处理输入搜索

**面试追问：**
- `setValue` 和 `patchValue` 有什么区别？（前者要求所有字段，后者可以部分更新）
- 如何实现异步验证器？（`AsyncValidatorFn` 返回 `Promise<ValidationErrors|null>` 或 `Observable<ValidationErrors|null>`）
- `FormArray` 如何使用？（用于动态增删表单项组）

---

## Q10: Angular 的生命周期钩子

Angular 组件从创建到销毁有固定的生命周期，Angular 提供了一系列钩子接口让开发者介入。

**执行顺序（父子组件）：**

```
父组件: constructor
父组件: ngOnChanges        (输入属性第一次变化)
父组件: ngOnInit           (初始化)
父组件: ngDoCheck          (变更检测时调用)
父组件: ngAfterContentInit (内容投影初始化)
父组件: ngAfterContentChecked
父组件: ngAfterViewInit    (视图初始化)
父组件: ngAfterViewChecked
  └── 子组件: constructor
  └── 子组件: ngOnChanges
  └── 子组件: ngOnInit
  └── 子组件: ngDoCheck
  └── 子组件: ngAfterContentInit
  └── 子组件: ngAfterContentChecked
  └── 子组件: ngAfterViewInit
  └── 子组件: ngAfterViewChecked
...变更检测循环...
父组件: ngOnDestroy        (销毁)
子组件: ngOnDestroy        (销毁)
```

```ts
@Component({ template: `<p>&#123;&#123; data &#125;&#125;</p>` })
export class LifecycleDemoComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data!: string;

  constructor() {
    console.log('1. 构造函数：DI 可用，但输入属性还未设置');
  }

  ngOnChanges(changes: SimpleChanges) {
    // 输入属性变化时调用，首次绑定也会调用
    console.log('2. ngOnChanges:', changes['data']?.currentValue);
    if (changes['data']?.firstChange) {
      console.log('  这是第一次变化');
    }
  }

  ngOnInit() {
    // 组件初始化完成，所有输入属性已设置
    console.log('3. ngOnInit: 适合做初始化数据加载');
    this.loadData();
  }

  ngDoCheck() {
    // 每次变更检测时调用（非常频繁，慎用复杂逻辑）
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit() {
    // 内容投影初始化后
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // 每次内容投影变更检测后
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // 视图初始化后，此时 ViewChild 可用
    console.log('7. ngAfterViewInit: ViewChild 已就绪');
  }

  ngAfterViewChecked() {
    // 每次视图变更检测后
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    // 组件销毁前，适合清理资源
    console.log('9. ngOnDestroy: 取消订阅、清理定时器');
    this.subscription?.unsubscribe();
  }
}
```

**常见陷阱：**
- **不要在 ngDoCheck 中执行复杂逻辑**：每个变更检测周期都会触发，导致性能问题
- **不要在 ngAfterViewInit 前操作 ViewChild**：会得到 undefined
- **ExpressionChangedAfterItHasBeenCheckedError**：在 ngAfterViewInit 中修改父组件绑定数据，通常通过 setTimeout 或 ChangeDetectorRef 解决
- 服务没有生命周期钩子（但服务通过 `@Injectable` 也可以使用 `ngOnDestroy` 如果实现了 `OnDestroy` 接口）

**最佳实践：**

| 钩子 | 推荐用途 | 不推荐用途 |
|------|---------|-----------|
| `ngOnInit` | HTTP 请求、初始化数据、观察者订阅 | 复杂 DOM 操作 |
| `ngOnDestroy` | 取消订阅、清除定时器、释放资源 | - |
| `ngAfterViewInit` | 操作子组件/指令、第三方 DOM 库初始化 | 修改父组件数据 |
| `ngOnChanges` | 响应输入属性变化 | 执行异步操作 |

**面试追问：**
- `ngOnChanges` 和 `ngDoCheck` 有什么区别？（前者只对 `@Input` 变化响应，后者每次变更检测都执行）
- 销毁时不取消订阅会有什么后果？（内存泄漏，后台持续运行的回调）
- Angular 什么时候调用 `ngOnDestroy`？（当组件从 DOM 中移除时，或者路由导航离开时）

---

## Q11: Angular 的 input 和 output

Angular 17+ 引入函数式的 `input()` 和 `output()`，替代传统的 `@Input()` / `@Output()` 装饰器。这是 Signal 组件的一部分。

```ts
// 传统方式
export class LegacyChildComponent {
  @Input() name = '';
  @Input() required!: string;
  @Output() clicked = new EventEmitter<string>();
}
```

```ts
// Signal 方式（17+）
@Component({
  selector: 'app-modern-child',
  standalone: true,
  template: `
    <p>&#123;&#123; fullName() &#125;&#125;</p>   <!-- 自动解包 Signal -->
    <button (click)="notify()">点击</button>
  `
})
export class ModernChildComponent {
  // 带默认值的输入
  name = input('Alice');

  // 必填输入
  required = input.required<string>();

  // 转换输入
  count = input.required({ transform: numberAttribute });

  // 别名
  data = input('', { alias: 'sourceData' });

  // 输出
  clicked = output<string>();

  fullName = computed(() => `用户: ${this.name()}`);

  notify() {
    this.clicked.emit(`来自子组件的消息: ${this.name()}`);
  }
}
```

```html
<!-- 父组件使用 -->
<app-modern-child [name]="parentName" (clicked)="handleChildEvent($event)" />
```

**函数式 input/output 的优势：**

| 特性 | @Input/@Output 装饰器 | input()/output() 函数 |
|------|----------------------|----------------------|
| 类型安全 | 需要明确泛型 | 自动推断 |
| 可变性 | 子组件可以直接修改 | 只读（Signal 模式） |
| 必填检测 | 需要自定义逻辑 | `input.required()` |
| 转换 | 需要额外 getter/setter | `transform` 参数 |
| 变更检测 | OnPush 需要额外注意 | 自动触发 Signal 变更 |

**常见陷阱：**
- `input()` 返回的是 `InputSignal`，模板中自动解包，但组件类中需要作为函数调用（`name()`）
- `output()` 返回的是 `OutputEmitterRef`，用法和 `EventEmitter` 类似
- `transform` 函数在输入值变化时自动调用，适合数据格式化

**面试追问：**
- Signal 的 input 和传统 @Input 在变更检测上的区别？（Signal input 直接通知消费方，不需要 Zone 介入）
- `output()` 可以替代 `@Output` + `EventEmitter` 吗？（完全可以，且更简洁）
- `model()` 和 `input()` 有什么区别？（`model()` 是读写双向绑定信号，类似 `[(ngModel)]` 的信号版）

---

## Q12: HostBinding 和 HostListener

`HostBinding` 和 `HostListener` 是两个装饰器，分别用于绑定宿主元素的属性和监听宿主元素的事件。宿主元素即指令/组件挂载的 DOM 元素。

```ts
// host: { class: '...' } 方式（推荐统一写法）
@Directive({ selector: '[appDropdown]', host: {
  'class': 'dropdown',
  '(click)': 'toggle()'
&#125;&#125;)
export class DropdownDirective {
  isOpen = false;
  toggle() { this.isOpen = !this.isOpen; }
}
```

```ts
// 装饰器方式
@Directive({ selector: '[appColorPicker]' })
export class ColorPickerDirective {
  @HostBinding('style.color') textColor = 'black';
  @HostBinding('class.selected') isSelected = false;
  @HostBinding('attr.aria-expanded') expanded = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.isSelected = !this.isSelected;
    this.textColor = this.isSelected ? 'blue' : 'black';
    this.expanded = this.isSelected;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.textColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.textColor = 'black';
  }
}
```

**两种写法的对比：**

| 特性 | 装饰器方式 | host 元数据方式 |
|------|-----------|----------------|
| 代码组织 | 属性/方法分散 | 集中在 `@Directive`/`@Component` 配置中 |
| 动态绑定 | 运行时可以修改绑定值 | 编译时确定，无法运行时改变 |
| 可读性 | 每个装饰器独立 | 所有绑定集中，容易查看 |
| 适合场景 | 复杂交互（需在类中多次修改） | 静态配置，固定事件 |

**适用场景：**
- 自定义指令需要操作宿主元素样式
- 封装 UI 库组件（如按钮、输入框的封装）
- 实现拖拽、点击外部关闭等交互

**常见陷阱：**
- `@HostBinding` 不能绑定到 `class` 本身，使用 `@HostBinding('class.className')`
- 同名的 `@HostBinding` 多个实例会互相覆盖
- 不要过度使用 `@HostListener` 注册高频事件（如 scroll、mousemove），使用 `Renderer2.listen` 配合 `passive: true` 有更好的性能

**面试追问：**
- `@HostBinding` 和 `Renderer2` 有什么区别？（装饰器语法简洁，Renderer2 提供更多控制和平台抽象）
- 如何在无装饰器的情况下实现相同功能？（使用 `host` 元数据属性）
- `@HostListener` 能监听全局事件吗？（默认监听宿主元素，通过 `window:scroll` 语法监听 Window 事件）

---

## Q13: Angular 的模块加载策略

Angular 提供三种模块加载策略，控制应用在用户访问之前何时加载代码，影响首屏加载速度和用户体验。

```ts
// 1. 急切加载（Eager Loading）
// 应用启动时立即加载所有模块
// 适合中小型应用或核心功能
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```ts
// 2. 懒加载（Lazy Loading）
// 访问该路由时才加载对应代码
// 适合大型应用的功能模块

// NgModule 方式
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

// Standalone 方式（17+）
const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then(m => m.routes)
  }
];
```

```ts
// 3. 预加载（Preloading）
// 首屏加载完成后，后台静默加载其他模块
// 折衷方案：兼顾首屏速度和后续导航体验

import { PreloadAllModules, CustomPreloadingStrategy } from '@angular/router';

// 方法一：预加载所有懒加载模块
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })]
})

// 方法二：自定义预加载策略
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // 仅在路由配置了 data.preload = true 时预加载
    return route.data?.['preload'] ? load() : of(null);
  }
}

const routes: Routes = [
  { path: 'dashboard', loadComponent: ..., data: { preload: true } },
  { path: 'admin', loadChildren: ..., data: { preload: false } }
];
```

**三种策略对比：**

| 策略 | 加载时机 | 首屏时间 | 后续导航速度 | 适用场景 |
|------|---------|---------|------------|---------|
| 急切加载 | 应用启动 | 慢 | 不需要加载 | 小应用、核心功能 |
| 懒加载 | 访问路由时 | 快 | 需要等加载 | 大型企业应用 |
| 预加载 | 首屏完成后后台加载 | 较快 | 快（已预加载） | 大部分应用 |

**常见陷阱：**
- 懒加载模块中如果没有配置 `forChild()`，路由不会正常工作
- 预加载不会在 SSR（服务器端渲染）时执行，只在浏览器端执行
- 过度分割模块（每个组件一个独立懒加载模块）会导致过多的网络请求，适得其反
- 懒加载的服务如果是 `providedIn: 'root'` 仍然是单例的，这可能导致预期外的状态共享

**性能要点：**
- 使用 Lighthouse 分析首屏加载，通过代码分割实现 < 2s 的可交互时间
- 预加载策略适用于使用频次高的功能模块
- 配合 PRPL 模式（Push, Render, Pre-cache, Lazy-load）获得最佳效果

**面试追问：**
- 预加载和懒加载可以一起使用吗？（可以，预加载是懒加载的增强策略）
- 如何实现条件预加载？（继承 `PreloadingStrategy` 接口，自定义 `preload` 方法）
- 懒加载对打包有什么影响？（每个懒加载模块单独打包为 chunk，由 webpack 等打包工具自动处理）
