# React 生态 & 实战面试题

## Q1: React 项目目录结构最佳实践

推荐的目录结构按**功能/领域**组织，而非按文件类型。

```
src/
  features/              # 按功能模块（推荐）
    auth/
      components/        # 该功能私有组件
      hooks/             # 该功能 Hooks
      api.ts             # 该功能 API 请求
      types.ts           # 该功能 TS 类型
      index.ts           # 入口导出
    dashboard/
      components/
      hooks/
      api.ts
  shared/                # 跨功能共享
    components/          # 通用 UI 组件（Button, Modal, Input）
      Button/
        Button.tsx
        Button.test.tsx
        Button.module.css
        index.ts
    hooks/               # 通用 Hooks（useDebounce, useAuth）
    utils/               # 工具函数
    api/                 # 通用 API 客户端封装
    types/               # 全局类型
  layouts/               # 布局组件
  pages/                 # 路由页面（如果不用 Next.js）
  routes/                # 路由配置
  stores/                # 全局状态（Zustand/Redux store）
  styles/                # 全局样式
  App.tsx                # 根组件
  main.tsx               # 入口文件
  vite.config.ts         # 构建配置
```

**不同规模项目的结构选择：**

| 项目规模 | 推荐结构 | 说明 |
|---------|---------|------|
| 小（<10 页面） | 按文件类型 | `components/`, `pages/`, `hooks/` 简单明了 |
| 中（10-50 页面） | 按功能模块 | `features/` 解耦，团队并行开发 |
| 大（50+ 页面） | 按领域 + 微前端 | 独立仓库 + monorepo |

```tsx
// Barrel 导出（index.ts）的优缺点
// 优点：导入路径简短
// 缺点：可能引入循环依赖、tree-shaking 困难

// 推荐：显式导入具体文件路径
import { Button } from '@/shared/components/Button'
// 而不是
import { Button } from '@/shared/components'
```

**面试追问：**
- 为什么按文件类型（components/, hooks/, utils/）不好？（功能分散，改一个页面要跨 3-4 个目录，不利于代码[高内聚低耦合]）
- 大项目中路径别名怎么配置？（`@/` 指向 `src/`，避免深层相对路径 `../../../`）
- 组件库和自己的业务组件目录怎么区分？（shared/components 放通用组件库封装，features/*/components 放业务相关组件）

## Q2: React Router v6 核心概念

React Router v6 完全基于 Hooks，使用声明式路由配置，核心变化是**路由嵌套**和**相对路径**。

```tsx
// 路由配置：嵌套路由
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        // loader: dashboardLoader,  // 数据加载
        children: [
          { index: true, element: <Overview /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
      { path: 'products/:productId', element: <ProductDetail /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
```

**核心 Hooks：**

```tsx
import { useParams, useSearchParams, useNavigate, useLocation, Outlet } from 'react-router-dom'

// useParams — 动态路由参数
function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  // /products/123 → productId = "123"
}

// useSearchParams — 查询参数（类似 useState 但持久化在 URL）
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const updateQuery = (newQuery: string) => {
    setSearchParams({ q: newQuery })
    // URL 更新为 ?q=xxx，不触发导航
  }
}

// useNavigate — 编程式导航
function LoginButton() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/dashboard', { replace: true })}>
      登录（替换当前历史记录）
    </button>
  )
}
```

**v5 到 v6 的关键变化：**

| v5 | v6 |
|----|----|
| `<Switch>` | `<Routes>` |
| `component={Comp}` | `element={<Comp />}` |
| `exact` | 默认精确，嵌套用 `/*` |
| `useHistory` | `useNavigate` |
| `Redirect` | `<Navigate>` |
| 路径可选参数 `:param?` | 不直接支持，用 `*` 匹配 |

```tsx
// v6 中实现路由守卫
function RequireAuth({ children }: { children: ReactNode }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    // 重定向到登录，保存当前路径以便登录后跳回
    return <Navigate to="/login" state=&#123;&#123; from: location &#125;&#125; replace />
  }

  return <>{children}</>
}

// 使用
const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
])
```

**面试追问：**
- v6 的 `<Outlet>` 和 v5 的 `{this.props.children}` 区别？（Outlet 是 v6 嵌套路由中渲染子路由的组件，自动匹配子路由）
- createBrowserRouter 和 BrowserRouter 的区别？（createBrowserRouter 是 v6.4+ 的数据路由 API，支持 loader/action 数据加载）
- 路由懒加载在 v6 中怎么做？（配合 React.lazy + Suspense）

## Q3: 状态管理方案对比

| 方案 | 适用规模 | 学习曲线 | 样板代码 | 性能 | 中间件 |
|------|---------|---------|---------|------|--------|
| React Context | 小 | 低 | 少 | 中（不能 select） | 无 |
| Zustand | 中 | 低 | 少 | 好（选择订阅） | 简单 |
| Redux Toolkit | 中-大 | 中 | 中 | 好 | 丰富 |
| Jotai | 中 | 低 | 少 | 好（原子化） | 有 |
| MobX | 中-大 | 中 | 少 | 好（响应式） | 有 |
| XState | 大（复杂状态机） | 高 | 多 | 好 | 无 |

```tsx
// Zustand — 简洁的全局状态
import { create } from 'zustand'

interface Store {
  count: number
  inc: () => void
  dec: () => void
  reset: () => void
}

const useStore = create<Store>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

function Counter() {
  // 选择订阅：只监听 count 变化，不订阅其他属性
  const count = useStore((state) => state.count)
  const inc = useStore((state) => state.inc)

  return <button onClick={inc}>{count}</button>
}

// Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => { state.value += 1 },
    decremented: (state) => { state.value -= 1 },
  },
})

export const { incremented, decremented } = counterSlice.actions
export const store = configureStore({ reducer: counterSlice.reducer })

// 使用
// dispatch(incremented())
// useSelector(state => state.value)
```

**选择原则：**

```tsx
// 小应用：Context + useReducer 就够了
function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value=&#123;&#123; state, dispatch &#125;&#125;>
      {children}
    </AppContext.Provider>
  )
}

// 中应用：Zustand（比 Redux 简单一半）
// 大应用：Redux Toolkit（规范、中间件丰富）
// 复杂状态逻辑：XState（状态机适合处理复杂的流程状态）
```

**面试追问：**
- Context 为什么不适合做全局状态管理？（Consumer 不能跳过更新、Provider 值变化导致所有 Consumer 重渲染、不利于代码拆分）
- Zustand 内部怎么做到选择订阅的？（使用 immer 的 proxy 或者手动比较 selector 返回值）
- Redux 的三大原则是什么？（单一数据源、state 只读、纯函数修改）

## Q4: Next.js App Router 核心概念

Next.js App Router 基于 React 服务端组件，采用目录即路由的约定。

```
app/
  layout.tsx            # 根布局（必须）
  page.tsx              # /
  loading.tsx           # 加载 UI
  error.tsx             # 错误 UI
  not-found.tsx         # 404
  globals.css           # 全局样式
  (marketing)/          # 路由组（不影响 URL）
    about/page.tsx      # /about
  blog/
    [slug]/page.tsx     # /blog/:slug
    layout.tsx          # blog 下共享布局
  api/                  # API 路由
    route.ts
```

**核心概念：**

```tsx
// 服务端组件（默认）
async function BlogPage() {
  // 直接 await 数据，无需 useEffect
  const posts = await db.posts.findMany()

  // 服务端组件可以直接访问数据库、文件系统等
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// 客户端组件（需要交互）
'use client'

function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '已赞' : '点赞'}
    </button>
  )
}

// 数据获取方式
// 1. 服务端直接 fetch/DB 查询（推荐）
// 2. 服务端 fetch + 缓存（next.revalidate）
async function CachedPage() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }, // 每小时重新验证
  })
  return <div>{/*...*/}</div>
}
```

| 概念 | 说明 | 文件/API |
|------|------|---------|
| Layout | 共享 UI，跨路由保持状态 | `layout.tsx` |
| Template | 类似 Layout，但每次导航重新挂载 | `template.tsx` |
| Loading | 加载状态（Suspense） | `loading.tsx` |
| Error | 错误边界 | `error.tsx` |
| Parallel Routes | 同时渲染多个页面区域 | `@modal/page.tsx` |
| Intercepting Routes | 从另一路由拦截显示模态框 | `(.)photo/page.tsx` |

**面试追问：**
- App Router 和 Pages Router 的区别？（App Router 默认 RSC、支持布局嵌套、流式 SSR、Server Actions）
- 'use client' 和 'use server' 的区别？（'use client' 标记客户端组件，'use server' 定义服务端 action）
- App Router 中的 metadata 怎么配置？（export const metadata = { title: '...' } 或 generateMetadata 函数）

## Q5: React Testing Library 测试策略

React Testing Library（RTL）核心原则：**测试用户行为，而非实现细节**。

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest' // 或 jest

// 基础测试
test('点击提交按钮显示成功消息', async () => {
  const user = userEvent.setup()

  render(<ContactForm />)

  // 通过文本/标签查找元素（类似用户使用）
  const nameInput = screen.getByLabelText('用户名')
  const submitBtn = screen.getByRole('button', { name: '提交' })

  // 模拟用户操作
  await user.type(nameInput, '张三')
  await user.click(submitBtn)

  // 验证结果
  await waitFor(() => {
    expect(screen.getByText('提交成功')).toBeInTheDocument()
  })
})
```

**测试策略分类：**

```tsx
// 1. 组件测试 — 用户交互验证
describe('LoginForm', () => {
  test('输入错误密码显示错误提示', async () => {
    const onLogin = vi.fn().mockRejectedValue(new Error('密码错误'))

    render(<LoginForm onLogin={onLogin} />)

    const emailInput = screen.getByPlaceholderText('邮箱')
    const passwordInput = screen.getByPlaceholderText('密码')
    const loginBtn = screen.getByRole('button', { name: '登录' })

    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'wrong')
    await userEvent.click(loginBtn)

    expect(await screen.findByText('密码错误')).toBeInTheDocument()
  })
})

// 2. Hook 测试
import { renderHook, act } from '@testing-library/react'

test('useCounter 增加和减少', () => {
  const { result } = renderHook(() => useCounter(0))

  act(() => result.current.increment())
  expect(result.current.count).toBe(1)

  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

// 3. Mock 外部依赖
vi.mock('../api', () => ({
  fetchUsers: vi.fn().mockResolvedValue([
    { id: 1, name: '张三' },
  ]),
}))
```

**查询优先级：**

| 优先级 | 查询 | 示例 | 说明 |
|--------|------|------|------|
| 1 (最高) | `getByRole` | `getByRole('button')` | 可访问性 |
| 1 | `getByLabelText` | `getByLabelText('用户名')` | 表单字段 |
| 1 | `getByPlaceholderText` | `getByPlaceholderText('请输入')` | input 提示 |
| 1 | `getByText` | `getByText('提交')` | 文本内容 |
| 1 | `getByDisplayValue` | `getByDisplayValue('张三')` | 当前值 |
| 2 | `getByAltText` | `getByAltText('logo')` | 图片 alt |
| 2 | `getByTitle` | `getByTitle('关闭')` | title 属性 |
| 3 | `getByTestId` | `getByTestId('custom-id')` | 仅最后手段 |

**面试追问：**
- 为什么要避免测试实现细节？（重构时测试不损坏，提高测试的可维护性）
- fireEvent 和 userEvent 的区别？（userEvent 模拟更真实的用户操作，如 click 包含 mousedown/mouseup/click 序列）
- RTL 怎么测试异步组件？（用 waitFor 或 findBy 查询，它们会自动重试直到超时）

## Q6: React 性能优化清单

| 技术 | 场景 | 成本 | 效果 |
|------|------|------|------|
| `React.memo` | props 稳定但父频繁重渲染 | 低 | 中 |
| `useMemo` | 昂贵计算 | 中 | 高 |
| `useCallback` | 回调传递给 memo 子组件 | 中 | 中 |
| 虚拟列表 | 渲染上千条数据 | 高 | 极高 |
| 代码分割 | 大包体初始加载 | 低 | 高 |
| 图片懒加载 | 大量图片 | 低 | 高 |
| 防抖/节流 | 频繁触发（搜索/滚动） | 低 | 中 |
| Web Worker | CPU 密集型计算 | 高 | 高 |
| 减少重渲染 | Context 拆分/选区 | 中 | 高 |
| 不可变数据 | 状态更新 | 低 | 高 |

```tsx
// 1. useMemo 缓存计算结果
function ExpensiveList({ items, filter }: { items: Item[]; filter: string }) {
  const filtered = useMemo(
    () => items.filter(item => item.name.includes(filter)),
    [items, filter]
  )
  return <ul>{filtered.map(item => <li key={item.id}>{item.name}</li>)}</ul>
}

// 2. useCallback 稳定函数引用
const handleClick = useCallback((id: number) => {
  setSelected(id)
}, []) // 只在挂载时创建一次

// 3. 减少 Context 重渲染 — 拆分读写 Context
const CountContext = createContext(0)
const DispatchContext = createContext<() => void>(() => {})

function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)
  const value = useMemo(() => count, [count])
  const dispatch = useCallback(() => setCount(c => c + 1), [])

  return (
    <DispatchContext.Provider value={dispatch}>
      <CountContext.Provider value={value}>
        {children}
      </CountContext.Provider>
    </DispatchContext.Provider>
  )
}

// 4. 图片懒加载
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && imgRef.current) {
        imgRef.current.src = src
        observer.disconnect()
      }
    })
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src])

  return <img ref={imgRef} alt={alt} style=&#123;&#123; opacity: loaded ? 1 : 0 &#125;&#125; />
}
```

**性能分析工具：**

```tsx
// React DevTools Profiler — 记录渲染时间
// 在 DevTools > Profiler > 录制
// 关注：不必要的重渲染、渲染时间长的组件

// Chrome Performance Tab — 分析整体性能
// 关注：Long Tasks、FPS、Layout Shifts

// console.log 或 why-did-you-render
// 排查不必要的重复渲染
```

**面试追问：**
- 过早优化是万恶之源，什么时候该开始优化？（真的出现卡顿、丢帧、输入延迟时，用 Profiler 定位瓶颈后）
- React.memo 和 useMemo 选哪个？（memo 跳过整个组件，useMemo 跳过单个计算，场景不同）
- 虚拟列表的固定高度 vs 可变高度实现区别？（固定高度简单，可变高度需要维护位置缓存，如 react-window 的 VariableSizeList）

## Q7: React 服务端组件（RSC）和客户端组件怎么选？

RSC 在服务端渲染，不发送 JavaScript 到客户端；客户端组件在浏览器中执行，有交互能力。

```tsx
// 服务端组件（默认）— 用于数据获取和展示
// app/page.tsx — 默认服务端组件
async function HomePage() {
  // 可以直接使用 async
  const posts = await fetch('https://api.example.com/posts').then(r => r.json())

  return (
    <div>
      <h1>博客列表</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* 客户端组件可以嵌入服务端组件 */}
      <LikeButton postId="123" />
    </div>
  )
}

// 客户端组件 — 需要交互时
'use client'

function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'} {postId}
    </button>
  )
}
```

| 维度 | 服务端组件 | 客户端组件 |
|------|-----------|-----------|
| 交互性 | 无（纯展示） | 有（事件、state） |
| Hooks | 不支持 useState/useEffect | 全部支持 |
| 数据获取 | 直接 await（更安全） | useEffect / SWR |
| Bundle 大小 | 不发送 JS | 发送全部 JS |
| 访问后端 | 直接（DB, 文件系统） | 通过 API |
| 渲染位置 | 服务端 | 浏览器 |

**选择指南：**

```tsx
// 服务端组件（优先选择）
// ✓ 数据获取和展示
// ✓ 静态内容
// ✓ 无需状态和事件的 UI
// ✓ 依赖后端资源的组件

// 客户端组件（必要时才用）
// ✓ 状态管理（useState, useReducer）
// ✓ 事件处理（onClick, onChange）
// ✓ 浏览器 API（localStorage, IntersectionObserver）
// ✓ 需要交互的三方库
// ✓ useEffect 副作用

// "use client" 的传染性
// 一旦标记 'use client'，该文件和所有 import 的子组件都成为客户端组件
// 所以应该尽量将交互逻辑封装在最底层组件

// 正确的拆分：外层服务端组件获取数据，内层客户端组件处理交互
// ServerComponent (fetch data) → ClientComponent (handle click)
```

**面试追问：**
- RSC 解决了什么问题？（减少 JS bundle、直接访问后端资源、自动代码拆分、流式渲染）
- RSC 和 SSR 有什么区别？（SSR 服务端生成 HTML 发送到客户端，RSC 服务端渲染组件树发送序列化结果，客户端不下载 RSC 的 JS）
- 'use client' 和 'use server' 可以同时用吗？（不能，一个文件只能有一个标记，通过拆分组件来实现）

## Q8: 中间人攻击怎么防？（前端安全）

中间人攻击（MITM）是攻击者在客户端和服务端之间拦截通信。

```tsx
// HTTPS 是基础防御（传输层加密）
// 前端能做的是配合服务端加强验证和保护

// 1. HSTS — 强制 HTTPS
// 服务端返回 Header: Strict-Transport-Security: max-age=31536000; includeSubDomains

// 2. Content Security Policy (CSP) — 防止注入
// 服务端返回 Header: Content-Security-Policy:
//   default-src 'self';
//   script-src 'self' https://trusted.cdn.com;
//   style-src 'self' 'unsafe-inline';
//   img-src 'self' data:;
//   connect-src 'self' https://api.example.com;

// 3. 子资源完整性 (SRI) — 验证 CDN 资源
// <script src="https://cdn.example.com/lib.js"
//         integrity="sha384-xxxxx"
//         crossorigin="anonymous"></script>

// 4. Cookie 安全配置
document.cookie = 'sessionId=xxx; Secure; HttpOnly; SameSite=Strict; Path=/'
```

**前端加强措施：**

```tsx
// 5. 验证 WebSocket 连接来源
function createSecureWebSocket() {
  const ws = new WebSocket('wss://api.example.com/ws')
  // 服务端在连接建立后验证 token
  ws.onopen = () => {
    ws.send(JSON.stringify({ type: 'auth', token: getToken() }))
  }
}

// 6. 防止点击劫持（X-Frame-Options）
// 服务端返回 Header: X-Frame-Options: DENY
// 或前端
if (window.top !== window.self) {
  window.top.location = window.self.location
}

// 7. 公钥固定（HPKP）— 已不推荐，改用 Expect-CT
// 8. 敏感操作二次验证（支付、改密）
```

| 威胁 | 防御 | 前端/后端 |
|------|------|----------|
| 劫持 HTTP 通信 | HTTPS + HSTS | 后端 |
| XSS 注入 | CSP + 输入净化 | 前后端 |
| CDN 脚本篡改 | SRI | 前端 |
| Session 劫持 | Secure + HttpOnly Cookie | 后端 |
| 点击劫持 | X-Frame-Options | 后端 |
| WebSocket 劫持 | Token 验证 | 前后端 |

**面试追问：**
- HTTPS 已经被 MITM 了吗？（如果 HTTPS 配置正确 + 证书有效 + HSTS，基本不可能 MITM。但用户安装了恶意根证书的情况除外）
- SRI 的 integrity 值怎么生成？（`openssl dgst -sha384 -binary file.js | openssl base64 -A`）
- 前端能完全防御 XSS 吗？（不能，服务端和数据库也要做过滤和转义，纵深防御）

## Q9: React 组件设计原则

组件设计的核心原则是**单一职责**和**组合优于继承**。

```tsx
// 1. 单一职责原则 — 每个组件只做一件事
// 错误：一个组件做太多事
function UserProfile({ userId }) {
  // 取数据
  // 渲染个人信息
  // 渲染好友列表
  // 渲染设置表单
}

// 正确：拆分成多个组件
function UserProfile({ userId }: { userId: string }) {
  const user = useUser(userId)

  return (
    <section>
      <UserInfo user={user} />
      <FriendList userId={userId} />
      <UserSettings userId={userId} />
    </section>
  )
}
```

**5 大设计原则：**

```tsx
// 2. 组合优于继承
interface CardProps {
  header: ReactNode
  children: ReactNode
  footer?: ReactNode
}

function Card({ header, children, footer }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}

// 使用组合
<Card
  header={<CardTitle title="用户信息" />}
  footer={<CardActions><Button>编辑</Button></CardActions>}
>
  <UserDetails user={user} />
</Card>

// 3. 声明式 vs 命令式
// 声明式（React 风格）
{isLoading ? <Spinner /> : <DataTable data={data} />}

// 命令式（避免）
// const el = document.createElement('div')
// el.textContent = 'Hello'
// document.body.appendChild(el)

// 4. 受控 vs 非受控 — 可预测性优先
// 尽量使用受控组件，让状态可预测

// 5. 关注点分离
// 逻辑：Hooks
// 展示：组件
// 样式：CSS Modules / Tailwind
// 数据：API 层
```

**组件分类：**

| 类型 | 特征 | 示例 |
|------|------|------|
| 展示组件 | 纯渲染、无状态、可复用 | Button, Card, Avatar |
| 容器组件 | 管理状态、获取数据 | UserContainer, PostListContainer |
| 布局组件 | 页面结构、不关心数据 | Sidebar, Header, MainLayout |
| 页面组件 | 路由入口、组合其他组件 | HomePage, DashboardPage |
| HOC | 增强功能 | withAuth, withLogger |
| Hook | 复用状态逻辑 | useAuth, useDebounce |

```tsx
// 组件接口设计原则
// 好的接口：自解释、最小化、类型安全
interface GoodButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

// 不好的接口：太多可选、隐式依赖
interface BadButtonProps {
  type?: string
  color?: string
  text?: string
  icon?: string
  // variant, size 未定义，全靠开发者脑补
}
```

**面试追问：**
- 复合组件模式（Compound Components）是什么？（`<Select><Select.Option value="1">A</Select.Option></Select>`，通过 Context 共享隐式状态）
- 怎么设计可复用的组件？（明确 props 接口、不强制样式、支持组合、提供类型定义）
- 组件库的样式方案选择？（CSS Modules 隔离性好、Tailwind 开发快、styled-components 动态性好，看团队偏好）

## Q10: 虚拟列表（Virtual List）原理

虚拟列表只渲染可视区域内的 DOM 元素，通过滚动容器的 scrollTop 计算应该显示的条目。

```tsx
// 固定高度虚拟列表（完整实现）
function VirtualList<T extends { id: string | number }>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
}: {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => ReactNode
}) {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 计算可见范围
  const overscan = 3 // 额外渲染条目，防止快速滚动白屏
  const startIdx = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIdx = Math.min(
    items.length,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  const visibleItems = items.slice(startIdx, endIdx)
  const totalHeight = items.length * itemHeight
  const offsetY = startIdx * itemHeight

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style=&#123;&#123; height: containerHeight, overflow: 'auto' &#125;&#125;
      onScroll={handleScroll}
    >
      {/* 撑起滚动条 */}
      <div style=&#123;&#123; height: totalHeight, position: 'relative' &#125;&#125;>
        {/* 可见内容 */}
        <div style=&#123;&#123; transform: `translateY(${offsetY}px)` &#125;&#125;>
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              style=&#123;&#123; height: itemHeight &#125;&#125;
            >
              {renderItem(item, startIdx + i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 使用
function App() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    content: `Item ${i}`,
  }))

  return (
    <VirtualList
      items={items}
      itemHeight={50}
      containerHeight={600}
      renderItem={(item) => <div>{item.content}</div>}
    />
  )
}
```

**优化方向：**

```tsx
// 1. 可变高度虚拟列表（需要预先测量或动态计算）
// 方案：缓存每个 item 的高度，累加计算 offset
// 使用 react-window 的 VariableSizeList

// 2. 动态测量
function DynamicVirtualList() {
  // 用 IntersectionObserver 监听可见性
  // 或者用 ResizeObserver 监听 item 尺寸变化
  // 更新高度缓存
}

// 3. 滚动到特定项
const listRef = useRef<HTMLDivElement>(null)
const scrollToIndex = (index: number) => {
  if (listRef.current) {
    listRef.current.scrollTop = index * itemHeight
  }
}
```

| 方案 | 固定高度 | 可变高度 | 适用场景 |
|------|---------|---------|---------|
| 手动实现 | 简单 | 复杂 | 学习、简单场景 |
| react-window | 支持 | 支持（VariableSizeList） | 推荐生产环境 |
| @tanstack/react-virtual | 支持 | 支持（动态测量） | 灵活、Hooks 化 |
| react-virtuoso | 支持 | 自动 | 功能最全 |

**面试追问：**
- 虚拟列表和无限滚动有什么区别？（虚拟列表始终只渲染可视区域，无限滚动是追加更多条目到 DOM）
- overscan 的作用？（多渲染几行防止快速滚动时空白，overscan 越大越流畅但越耗性能）
- 可变高度虚拟列表怎么测量？（渲染后获取实际高度，更新缓存数组，重新计算偏移。常用的有 `@tanstack/react-virtual` 的 dynamic 模式或 react-window 的 `VariableSizeList`）
- 为什么生产不手写虚拟列表？（边缘情况太多：滚动事件节流、ResizeObserver 适配容器大小变化、键盘导航、RTL 支持等）
