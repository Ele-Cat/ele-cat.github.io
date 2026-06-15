# React 进阶面试题

## Q1: useEffect 的完整行为指南

`useEffect` 在浏览器绘制后异步执行，用于处理副作用（数据请求、订阅、DOM 操作、日志）。其核心机制是**依赖数组**和**清理函数**。

```tsx
// 基本模式
useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理函数：组件卸载或依赖变化时执行
  }
}, [dependencies])
```

**依赖数组的 3 种形态：**

```tsx
function EffectBehavior({ id }: { id: string }) {
  // 1. 无依赖：每次渲染都执行（极少用）
  useEffect(() => {
    console.log('每次渲染后执行')
  })

  // 2. 空数组：只在挂载时执行一次
  useEffect(() => {
    const subscription = api.subscribe(handleEvent)
    return () => subscription.unsubscribe() // 卸载时清理
  }, [])

  // 3. 有依赖：依赖变化时执行
  useEffect(() => {
    fetchData(id).then(setData)
    // 清理：取消上次请求（竞态处理）
    return () => setAbort(true)
  }, [id])

  return <div>{/*...*/}</div>
}
```

**竞态条件处理：**

```tsx
function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    let cancelled = false

    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        // 如果 query 已经变化，忽略旧结果
        if (!cancelled) setResults(data)
      })

    // 清理函数在下一次 effect 执行前被调用
    return () => { cancelled = true }
  }, [query])

  return <ul>{results.map(r => <li key={r.id}>{r.text}</li>)}</ul>
}
```

**闭包陷阱：**

```tsx
function ClosureTrap() {
  const [count, setCount] = useState(0)

  // 问题：setInterval 中捕获的是首次渲染的 count（值为 0）
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1) // 始终设置为 1
    }, 1000)
    return () => clearInterval(timer)
  }, []) // 依赖为空，count 始终是 0

  // 修复 1：函数式更新（不需要依赖 count）
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 修复 2：把 count 加入依赖（但会导致定时器不断重建）
  // 修复 3：用 useRef 存储最新值
  const countRef = useRef(count)
  countRef.current = count
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(countRef.current) // 始终读取最新值
    }, 1000)
    return () => clearInterval(timer)
  }, [])
}
```

**执行时机对比：**

| 阶段 | useEffect | useLayoutEffect | 类 componentDidMount |
|------|-----------|-----------------|---------------------|
| DOM 更新 | 后 | 后 | 前 |
| 浏览器绘制 | 后 | 前 | 前 |
| 同步/异步 | 异步 | 同步 | 同步 |

**面试追问：**
- `useEffect` 的清理函数什么时候执行？（组件卸载时、依赖变化下次执行前、开发模式 StrictMode 中额外执行一次）
- React 18 的 StrictMode 中 useEffect 执行两次的原因？（帮助发现未正确清理的副作用）
- `useEffect` 内能不能用 `async` 函数？（不能直接给 useEffect 传 async 函数，因为 async 返回 Promise，需要内部定义异步函数再调用）

## Q2: useLayoutEffect 和 useEffect 有什么区别？

`useLayoutEffect` 在浏览器**绘制之前**同步执行，`useEffect` 在浏览器**绘制之后**异步执行。

```tsx
function LayoutEffectDemo() {
  const divRef = useRef<HTMLDivElement>(null)

  // useEffect：看到元素的初始位置 → 闪烁后跳到目标位置
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.top = '100px' // 用户看到跳跃
    }
  }, [])

  // useLayoutEffect：DOM 更新后、绘制前执行 → 用户直接看到目标位置
  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.top = '100px' // 无闪烁
    }
  }, [])

  return <div ref={divRef} style=&#123;&#123; position: 'absolute', top: 0 &#125;&#125;>Element</div>
}
```

| 维度 | useEffect | useLayoutEffect |
|------|-----------|-----------------|
| 执行时机 | 浏览器绘制后 | DOM 变更后、绘制前 |
| 阻塞绘制 | 否 | 是（过多任务导致卡顿） |
| 适用场景 | 网络请求、日志、订阅 | DOM 测量、滚动恢复、动画 |
| 服务端渲染 | 支持 | 警告（SSR 中忽略） |

```tsx
// useLayoutEffect 典型场景：读取并恢复滚动位置
function MessageList({ messages }: { messages: Message[] }) {
  const listRef = useRef<HTMLDivElement>(null)
  const prevHeight = useRef(0)

  useLayoutEffect(() => {
    if (listRef.current) {
      // 测量旧内容高度 → 追加新内容后保持滚动位置
      const newHeight = listRef.current.scrollHeight
      listRef.current.scrollTop += newHeight - prevHeight.current
      prevHeight.current = newHeight
    }
  }, [messages.length])

  return <div ref={listRef} style=&#123;&#123; height: 400, overflow: 'auto' &#125;&#125;>
    {messages.map(m => <div key={m.id}>{m.text}</div>)}
  </div>
}
```

**选择原则：** 能用 `useEffect` 就不用 `useLayoutEffect`。只有需要**在用户看到结果之前**处理 DOM 时才用 `useLayoutEffect`。

**面试追问：**
- SSR 中怎么处理 useLayoutEffect？（在服务端不会执行，可以用 `useEffect` 替代或使用 `isomorphic-use-layout-effect` 在 SSR 时降级）
- useLayoutEffect 会导致性能问题吗？（会，同步阻塞绘制，大量计算会导致页面卡顿）
- 测量元素尺寸应该用哪个？（`useLayoutEffect`，因为需要在绘制前获取准确尺寸）

## Q3: useRef 的完整用法

`useRef` 返回一个可变的 `ref` 对象，`.current` 属性在整个组件生命周期内保持不变。改变 `ref.current` 不会引起重新渲染。

```tsx
function RefUseCases() {
  // 1. DOM 引用
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => inputRef.current?.focus()

  // 2. 保存可变值（跨渲染不丢失，修改不触发重渲染）
  const renderCount = useRef(0)
  renderCount.current += 1

  // 3. 保存前一次的值
  const [count, setCount] = useState(0)
  const prevCount = useRef(count)
  useEffect(() => {
    prevCount.current = count
  }, [count])

  // 4. 存储定时器/订阅的 ID
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const start = () => { timerRef.current = setInterval(tick, 1000) }
  const stop = () => { clearInterval(timerRef.current) }

  return (
    <>
      <p>渲染次数: {renderCount.current}</p>
      <p>当前: {count}, 上次: {prevCount.current}</p>
      <input ref={inputRef} />
      <button onClick={focusInput}>聚焦</button>
    </>
  )
}
```

**useRef 保存回调（解决闭包过时问题）：**

```tsx
function LatestRef() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  // 用 ref 保存最新回调，避免 useEffect 依赖变化
  const onTimeout = useRef(() => {
    console.log('当前 text:', text) // 始终是调用时的值
  })
  onTimeout.current = () => {
    console.log('最新 text:', text) // 始终是最新值
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // onTimeout.current 始终是最新函数
      onTimeout.current()
    }, 3000)
    return () => clearTimeout(timer)
  }, []) // 依赖为空，但回调始终是最新的
}
```

| 对比 | useRef | useState |
|------|--------|----------|
| 是否触发重渲染 | 否 | 是 |
| 值持久化 | 是 | 是 |
| 跨渲染一致性 | 同一个对象 | 每次渲染新值 |
| 适用场景 | DOM、定时器、缓存 | UI 状态 |

**陷阱：** 不要在渲染期间读写 `ref.current`（除了初始化），因为渲染函数应该是纯函数。

```tsx
// 错误：渲染期间改变 ref，导致不可预测的行为
function Bad() {
  const ref = useRef(0)
  ref.current += 1 // 不要在渲染期间修改
  return <div>{ref.current}</div>
}
```

**面试追问：**
- `useRef` 和 `createRef` 的区别？（`useRef` 在组件生命周期内保持同一个对象，`createRef` 每次渲染创建新对象）
- 回调 ref 是什么？（`<div ref={node => { /* node 变化时触发 */ &#125;&#125; />`，用于动态 ref）
- forwardRef 和 useRef 的关系？（forwardRef 让父组件通过 ref 访问子组件 DOM，而子组件内部用 useRef 管理自身 DOM）

## Q4: forwardRef 是什么？什么场景用？

`forwardRef` 让父组件能获取子组件内部的 DOM 节点或组件实例。子组件通过 `forwardRef` 包裹后接收第二个参数 `ref`。

```tsx
// 子组件：将 ref 转发到内部 DOM
const FancyInput = forwardRef<HTMLInputElement, FancyInputProps>(
  (props, ref) => {
    return <input ref={ref} className="fancy" {...props} />
  }
)

// 父组件使用
function Parent() {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputRef.current?.focus()
    inputRef.current?.scrollIntoView()
  }

  return (
    <>
      <FancyInput ref={inputRef} placeholder="自动聚焦" />
      <button onClick={focusInput}>聚焦输入框</button>
    </>
  )
}
```

**配合 `useImperativeHandle` 暴露有限 API：**

```tsx
// 不暴露整个 DOM，只暴露特定方法
const ControlledInput = forwardRef<{ focus: () => void; clear: () => void }, {}>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus()
        inputRef.current?.select()
      },
      clear: () => {
        if (inputRef.current) inputRef.current.value = ''
      },
    }), []) // 第三个参数是依赖数组

    return <input ref={inputRef} {...props} />
  }
)

// 父组件只能调用 focus 和 clear，无法直接操作 input DOM
function Parent() {
  const inputApi = useRef<{ focus: () => void; clear: () => void }>(null)

  return (
    <>
      <ControlledInput ref={inputApi} />
      <button onClick={() => inputApi.current?.focus()}>聚焦并选中</button>
      <button onClick={() => inputApi.current?.clear()}>清空</button>
    </>
  )
}
```

**代替 forwardRef 的 prop 模式：**

```tsx
// 不推荐：用 prop 代替 ref
function InputWithInnerRef({ innerRef, ...props }: { innerRef: Ref<HTMLInputElement> }) {
  return <input ref={innerRef} {...props} />
}

// 推荐：标准 forwardRef
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} />
})
```

| 场景 | 是否需要 forwardRef | 方案 |
|------|-------------------|------|
| 访问子组件 DOM | 是 | forwardRef + useRef |
| 暴露有限方法 | 是 | forwardRef + useImperativeHandle |
| HOC 透传 ref | 是 | forwardRef 包裹 HOC |
| 组合组件（props 传） | 否 | 自定义 innerRef prop |
| 三方库组件 | 可能是 | 查看文档是否支持 ref |

**面试追问：**
- 为什么需要 forwardRef？（函数组件没有实例，不能直接接收 ref，类组件接收 ref 没问题）
- forwardRef 在高阶组件中的应用？（HOC 用 forwardRef 包裹，透传 ref 到包裹组件）
- React 19 中 forwardRef 有什么变化？（React 19 支持 `ref` 直接作为 prop，不再必须 forwardRef）

## Q5: useContext 的工作原理

`useContext` 让函数组件订阅 React Context 的变化。当 Context 值变化时，所有使用了该 Context 的组件都会重新渲染。

```tsx
// 1. 创建 Context
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

// 2. Provider 提供值
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. 使用 Context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      style=&#123;&#123;
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      &#125;&#125;
    >
      切换主题（当前: {theme}）
    </button>
  )
}
```

**Context 性能陷阱：**

```tsx
// 问题：Provider 每次重渲染都会创建新对象 → 所有 consumer 重渲染
function BadProvider() {
  const [count, setCount] = useState(0)
  return (
    // 每次 render 创建新对象 → 所有使用 Context 的组件都重渲染
    <MyContext.Provider value=&#123;&#123; count, setCount &#125;&#125;>
      <ExpensiveTree />
    </MyContext.Provider>
  )
}

// 解决方案：用 useMemo 稳定引用
function GoodProvider() {
  const [count, setCount] = useState(0)
  const value = useMemo(() => ({ count, setCount }), [count])
  return (
    <MyContext.Provider value={value}>
      <ExpensiveTree />
    </MyContext.Provider>
  )
}

// 或者拆分 Context，减少不必要更新
const CountContext = createContext(0)
const DispatchContext = createContext<React.Dispatch<number>>(() => {})
// 只读取 count 的组件只依赖 CountContext
```

| Context 方案 | 适用场景 | 缺点 |
|-------------|---------|------|
| 单个 Context | 小应用，状态简单 | 任何变化导致所有 consumer 重渲染 |
| Context 拆分 | 读写分离，降低重渲染 | Provider 嵌套变深 |
| useReducer + Context | 全局状态 + dispatch | 需配合 useMemo 稳定 value |

**面试追问：**
- Context 和 Redux 怎么选？（Context 适合主题、语言等低频更新场景，Redux 适合复杂全局状态和中间件）
- 为什么 Context 不推荐用于高频更新？（因为每次 Context 值变化会使所有 consumer 重渲染，无法选择跳过）
- 嵌套多个 Provider 时的层级问题怎么解决？（合理拆分，或者用组合模式减少层级）

## Q6: useReducer 和 useState 怎么选？

两者都是状态管理 Hook。`useState` 适合简单独立的状态，`useReducer` 适合复杂状态逻辑或多个相关状态。

```tsx
// useState — 简单状态
function SimpleCounter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}

// useReducer — 复杂状态逻辑
interface State { count: number; step: number; history: number[] }
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; step: number }
  | { type: 'reset' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step, history: [...state.history, state.count] }
    case 'decrement':
      return { ...state, count: state.count - state.step, history: [...state.history, state.count] }
    case 'setStep':
      return { ...state, step: action.step }
    case 'reset':
      return { count: 0, step: 1, history: [] }
    default:
      return state
  }
}

function ComplexCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1, history: [] })

  return (
    <div>
      <p>计数: {state.count} (步长: {state.step})</p>
      <p>历史: {state.history.join(', ')}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'setStep', step: 5 })}>步长设为5</button>
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  )
}
```

| 对比 | useState | useReducer |
|------|----------|------------|
| 状态类型 | 简单值（number, string, boolean） | 复杂对象 / 多个相关值 |
| 更新逻辑 | 内联在组件中 | 外部纯函数，可测试 |
| 上下文传递 | 每个 state 单独传递 | 统一 dispatch 传递 |
| 中间件/扩展 | 不支持 | 可封装中间件 |
| 代码量 | 少 | 多（适合复杂场景） |

**useReducer 的惰性初始化：**

```tsx
// 惰性初始化（计算初始状态的函数）
function init(initialCount: number): State {
  return { count: initialCount, step: 1, history: [] }
}

const [state, dispatch] = useReducer(reducer, 0, init)
// 第三个参数是 init 函数，第二个参数作为 init 的参数
// 这样 init 只在首次渲染时执行
```

**选择原则：**

```tsx
// 用 useState 的场景
const [name, setName] = useState('')
const [visible, setVisible] = useState(true)

// 用 useReducer 的场景
// 1. 下一个状态依赖上一个状态的多个维度
// 2. 状态更新逻辑需要复用或测试
// 3. 需要传递给多个子组件（dispatch 引用稳定）
```

**面试追问：**
- `useReducer` 的 dispatch 引用是否稳定？（是，React 保证 dispatch 在组件生命周期内不变，可以安全传入 useEffect 依赖）
- 可以用 useReducer 实现 Redux 吗？（部分替代，但 useReducer 没有 middleware，没有 combineReducers，没有 DevTools）
- useReducer 和 useState 底层是什么关系？（`useState` 底层实现就是 `useReducer`，`useState` 是预置了更新函数的特殊 reducer）

## Q7: 自定义 Hook 的规则和最佳实践

自定义 Hook 是以 `use` 开头的函数，内部可以调用其他 Hook，用于**提取和复用状态逻辑**。

```tsx
// 基本规则
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, []) // 依赖数组规则同样适用

  return isOnline
}

// 使用
function StatusBar() {
  const isOnline = useOnlineStatus()
  return <div>{isOnline ? 'Online' : 'Offline'}</div>
}
```

**自定义 Hook 的 4 条规则：**

```tsx
// 1. 必须以 use 开头（让 React 插件检查规则生效）
// 正确
function useLocalStorage<T>(key: string, initial: T) { /*...*/ }
// 错误：不会触发 Hooks 规则校验
function getLocalStorage(key: string) { /* 不能用 useState 等 */ }

// 2. 内部调用的 Hooks 必须遵守 Hook 规则
function useCustomHook() {
  // 不能放在条件或循环中
  const [state, setState] = useState(0) // 正确
  if (state > 0) {
    // useEffect(() => {}, []) // 错误：条件中调用 Hook
  }
}

// 3. 自定义 Hook 之间可以互相调用
function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null)
  const isOnline = useOnlineStatus() // 复用其他 Hook

  useEffect(() => {
    fetchUser(id).then(setUser)
  }, [id])

  return { user, isOnline }
}

// 4. 自定义 Hook 是纯逻辑，不应返回 JSX
```

**常用自定义 Hook 示例：**

```tsx
// useDebounce
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

// usePrevious
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()
  useEffect(() => { ref.current = value }, [value])
  return ref.current
}

// useToggle
function useToggle(initial = false): [boolean, () => void] {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue(v => !v), [])
  return [value, toggle]
}

// useAsync
function useAsync<T>(fn: () => Promise<T>, deps: any[] = []) {
  const [state, setState] = useState<{
    data: T | null; loading: boolean; error: Error | null
  }>({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState(s => ({ ...s, loading: true }))

    fn()
      .then(data => { if (!cancelled) setState({ data, loading: false, error: null }) })
      .catch(error => { if (!cancelled) setState({ data: null, loading: false, error }) })

    return () => { cancelled = true }
  }, deps)

  return state
}
```

| 最佳实践 | 说明 |
|---------|------|
| 单一职责 | 一个 Hook 只做一件事 |
| 参数类型化 | 使用 TypeScript 泛型 |
| 清理资源 | useEffect 返回清理函数 |
| 避免闭包陷阱 | 函数式更新或 useRef 保存最新值 |
| 返回值稳定 | 用 useMemo/useCallback 稳定引用 |

**面试追问：**
- 自定义 Hook 和普通函数的区别？（普通函数不能调用 Hooks，自定义 Hook 可以）
- 自定义 Hook 怎么测试？（用 `renderHook` from `@testing-library/react-hooks`）
- 多个自定义 Hook 之间共享状态的方法？（用 Context + 自定义 Provider，或者用状态管理库）

## Q8: React.memo 什么时候失效？

`React.memo` 对函数组件进行**浅比较 props**（类似 PureComponent），如果 props 没变则跳过渲染。

```tsx
const ExpensiveComponent = React.memo(({ data, onUpdate }: {
  data: Item[]
  onUpdate: (id: number) => void
}) => {
  console.log('重新渲染')
  return <div>{/* 渲染大量数据 */}</div>
})
```

**React.memo 失效场景：**

```tsx
// 1. 内联对象/数组 — 每次渲染都是新引用
function Parent() {
  const [count, setCount] = useState(0)
  return (
    <>
      <ExpensiveComponent
        data={[{ id: 1 }]} // 每次新数组 → memo 失效
        onUpdate={(id) => {&#125;&#125; // 每次新函数 → memo 失效
      />
      <button onClick={() => setCount(c => c + 1)}>更新父组件</button>
    </>
  )
}

// 修复：稳定引用
function FixedParent() {
  const [count, setCount] = useState(0)
  const data = useMemo(() => [{ id: 1 }], []) // 稳定引用
  const onUpdate = useCallback((id: number) => {
    // 处理更新
  }, []) // 稳定引用

  return <ExpensiveComponent data={data} onUpdate={onUpdate} />
}

// 2. children prop — 每次渲染 JSX 都会创建新对象
function ParentWithChildren() {
  const header = <Header /> // 每次新对象
  return <ExpensiveComponent>{header}</ExpensiveComponent>
}

// 修复：抽成 memo 化组件
// const HeaderMemo = React.memo(Header)
// function Parent() {
//   return <ExpensiveComponent><HeaderMemo /></ExpensiveComponent>
// }

// 3. 使用完整对象比较（定义自定义比较函数）
const MemoWithCompare = React.memo(
  (props: { items: Item[] }) => <ExpensiveList items={props.items} />,
  (prevProps, nextProps) => {
    // 深度比较（仅限你知道数据量小）
    return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items)
  }
)
// ⚠️ 自定义比较函数应谨慎使用，深度比较本身也有性能成本
```

| 失效原因 | 解决方案 |
|---------|---------|
| 内联对象/数组 | `useMemo` 稳定引用 |
| 内联函数 | `useCallback` |
| children prop | 子组件 memo 化 |
| Context 变化 | 拆分 Context 或使用 selector |
| 内部状态变化 | 无法避免，memo 不影响内部 state |

**使用原则：**

```tsx
// 适合 memo：纯展示组件、列表项、频繁父组件重渲染的叶子组件
const ListItem = React.memo(({ item, onSelect }: {
  item: Item
  onSelect: (id: number) => void
}) => {
  return <div onClick={() => onSelect(item.id)}>{item.name}</div>
})

// 不适合 memo：自身有频繁 state 更新、props 总是变化、轻量组件
// memo 的比较也有开销，轻量组件直接渲染可能更快
```

**面试追问：**
- React.memo 是浅比较还是深比较？（浅比较，只比较引用是否变化）
- React.memo 和 useMemo 的区别？（React.memo 包裹整个组件跳过渲染，useMemo 缓存计算结果）
- 什么时候不该用 React.memo？（props 频繁变化时，或者组件本身渲染代价很小）
- React.memo 和 PureComponent 的区别？（memo 用于函数组件，PureComponent 用于类组件）

## Q9: Error Boundary 是什么？为什么函数组件不能用？

Error Boundary 是 React 组件，在子组件树中捕获 JavaScript 错误，记录错误并显示降级 UI，防止整个应用崩溃。

```tsx
// Error Boundary 必须是类组件（必须实现 getDerivedStateFromError 或 componentDidCatch）
class ErrorBoundary extends React.Component<
  { fallback?: ReactNode; children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下次渲染显示降级 UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // 记录错误日志（上报日志服务）
    console.error('Error caught:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h2>Something went wrong</h2>
    }
    return this.props.children
  }
}

// 使用
function App() {
  return (
    <ErrorBoundary fallback={<p>页面出错了，请刷新重试</p>}>
      <MyComponent />
    </ErrorBoundary>
  )
}
```

**为什么函数组件不能做 Error Boundary：**

```tsx
// Error Boundary 需要两个关键类组件方法：
// 1. static getDerivedStateFromError() — 静态方法
// 2. componentDidCatch() — 实例方法

// 函数组件无法实现静态方法
// 函数组件没有实例，没有 componentDidCatch
// useErrorBoundary Hook 只是语法糖，底层仍然依赖类组件
```

**Error Boundary 捕获不到的错误：**

```tsx
// 1. 事件处理中的错误（需要 try-catch）
function EventError() {
  const handleClick = () => {
    try {
      throw new Error('点击错误')
    } catch (e) {
      console.error('事件错误需手动捕获', e)
    }
  }
  return <button onClick={handleClick}>可能出错</button>
}

// 2. 异步代码（setTimeout, Promise）
function AsyncError() {
  useEffect(() => {
    setTimeout(() => {
      try {
        throw new Error('异步错误')
      } catch (e) {
        // Error Boundary 捕获不到，需手动 try-catch
      }
    }, 1000)
  }, [])
}

// 3. 服务端渲染
// 4. Error Boundary 自身抛出的错误

// 全局捕获未处理 Promise 错误
window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的 Promise 拒绝:', event.reason)
})
```

| 错误来源 | 能否被 Error Boundary 捕获 | 处理方式 |
|---------|--------------------------|---------|
| render 中同步错误 | 能 | Error Boundary |
| 生命周期中同步错误 | 能 | Error Boundary |
| 事件处理中错误 | 不能 | try-catch |
| 异步代码错误 | 不能 | try-catch + 全局事件 |
| SSR 错误 | 不能 | 服务端错误处理 |

**面试追问：**
- React 18 或 19 会支持函数组件 Error Boundary 吗？（目前没有计划，需要类组件的静态生命周期方法）
- Error Boundary 嵌套？不同层级可以使用不同 Error Boundary，粒度更细
- 怎么处理 useEffect 中的错误？（在 useEffect 内部 try-catch 或使用 Promise.catch）

## Q10: React Portal 是什么？什么场景用？

Portal 将子节点渲染到父组件 DOM 层级之外的 DOM 节点，但保持 React 组件树中的上下文（Context、事件冒泡）。

```tsx
// 基本用法
function PortalExample({ children }: { children: ReactNode }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('portal-root')!
  )
}

// 在 index.html 中需要有一个 <div id="portal-root"></div>
// 或者在组件中动态创建
function createPortalContainer() {
  const el = document.createElement('div')
  el.id = `portal-${Date.now()}`
  document.body.appendChild(el)
  return el
}
```

**典型场景：模态框、Tooltip、Dropdown、全局通知：**

```tsx
// Modal 组件（避免被父组件 overflow/层级遮挡）
function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null

  // 使用 Portal 渲染到 document.body
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.body
  )
}

// 使用
function App() {
  const [open, setOpen] = useState(false)
  return (
    <div style=&#123;&#123; overflow: 'hidden' &#125;&#125;>
      <button onClick={() => setOpen(true)}>打开模态框</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>即使父组件有 overflow: hidden，模态框也不受影响</p>
      </Modal>
    </div>
  )
}
```

**Portal 事件冒泡特性：**

```tsx
function PortalBubble() {
  const [clicked, setClicked] = useState('')

  return (
    <div onClick={() => setClicked('外层捕获点击')} style=&#123;&#123; border: '1px solid red' &#125;&#125;>
      <Portal>
        {/* 这个按钮点击会冒泡到外层 div */}
        <button onClick={() => console.log('内部点击')}>
          Portal 内的按钮
        </button>
      </Portal>
    </div>
  )
}
```

**事件冒泡在 Portal 中的行为：**

```tsx
<Portal>
  <button onClick={handleClick}>按钮</button>
</Portal>
// 点击按钮时，事件会按 React 组件树冒泡
// 而不是按 DOM 树冒泡
// 所以在 Portal 内部 → 即使 DOM 在 body 下，事件仍然会被 React 树上层的父组件捕获
```

| 场景 | 是否用 Portal | 原因 |
|------|-------------|------|
| 模态框 | 是 | 避免父组件的 z-index 上下文 |
| Tooltip | 是 | 防止 overflow: hidden 裁剪 |
| Dropdown | 是 | 避免父容器截断 |
| 通知/Toast | 是 | 固定在视口特定位置 |
| 一般子组件 | 否 | 没有跨出父 DOM 的必要 |

**面试追问：**
- Portal 的事件冒泡怎么工作的？（React 的事件委托在 root，组件树逻辑决定了冒泡路径，不是 DOM 树）
- Portal 中怎么访问 Context？（可以，Portal 保持组件树中的 Context 链）
- Portal 在 SSR 中怎么处理？（在服务端不执行，需要在客户端 hydrate 后渲染）

## Q11: HOC 和 Render Props 分别是什么？

两者都是 React 16.8 之前复用状态逻辑的模式。Hooks 出现后逐渐取代了它们。

```tsx
// HOC：高阶组件，接收组件返回新组件
function withAuth<T extends { user?: User }>(WrappedComponent: React.ComponentType<T>) {
  return function AuthenticatedComponent(props: Omit<T, 'user'>) {
    const user = useAuth() // 使用 Hook（即使经典模式也可以用）

    if (!user) return <Redirect to="/login" />

    // 注入 user prop
    return <WrappedComponent {...(props as T)} user={user} />
  }
}

// 使用
const DashboardWithAuth = withAuth(Dashboard)
// Dashboard 收到 user prop

// Render Props：通过函数 prop 共享逻辑
interface MouseTrackerProps {
  render: (state: { x: number; y: number }) => ReactNode
}

class MouseTracker extends React.Component<MouseTrackerProps> {
  state = { x: 0, y: 0 }
  handleMouseMove = (e: MouseEvent) => {
    this.setState({ x: e.clientX, y: e.clientY })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    return this.props.render(this.state)
  }
}

// 使用
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>鼠标位置: {x}, {y}</h1>
      )}
    />
  )
}
```

| 对比 | HOC | Render Props | Hooks |
|------|-----|-------------|-------|
| 模式 | 函数组合 | 函数作为 prop | 函数调用 |
| 命名冲突 | 可能（prop 注入） | 无 | 无 |
| 类型安全性 | 较差 | 一般 | 好 |
| 调试 | 多层 wrapper | 嵌套深 | 扁平 |
| 可读性 | 中 | 低 | 高 |
| 现代 React | 不推荐 | 不推荐 | 推荐 |

**HOC 的注意事项：**

```tsx
// 问题：ref 不会自动透传
function withLog(WrappedComponent) {
  class WithLog extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return WithLog
}

const Enhanced = withLog(MyComponent)
// <Enhanced ref={myRef} /> — myRef 指向 WithLog 实例，不是 MyComponent
// 修复：React.forwardRef
function withLogWithRef(WrappedComponent) {
  class WithLog extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }
  return React.forwardRef((props, ref) => (
    <WithLog {...props} forwardedRef={ref} />
  ))
}
```

**Render Props 的注意事项：**

```tsx
// 问题：每次 render 都创建新函数 → 破坏子组件 shouldComponentUpdate
function BadUsage() {
  return (
    <MouseTracker
      render={(pos) => <Cat position={pos} />} // 每次新函数
    />
  )
}

// 修复：使用类方法或 useCallback
function GoodUsage() {
  const renderCat = useCallback((pos: { x: number; y: number }) => {
    return <Cat position={pos} />
  }, [])

  return <MouseTracker render={renderCat} />
}
```

**Hooks 替代方案：**

```tsx
// HOC 替代
function useAuth() {
  const user = /* 从 Context 获取 */
  return user
}

function DashboardPage() {
  const user = useAuth()
  if (!user) return <Redirect to="/login" />
  return <Dashboard user={user} />
}

// Render Props 替代
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])
  return pos
}

function App() {
  const { x, y } = useMousePosition()
  return <h1>鼠标位置: {x}, {y}</h1>
}
```

**面试追问：**
- HOC 和 Render Props 现在还有用吗？（遗留代码维护，新代码推荐 Hooks）
- 多个 HOC 嵌套怎么组织？（`compose` 函数如 lodash.flowRight 或 Redux 的 compose）
- Render Props 的 children 模式是什么？（`<MouseTracker>{pos => <Cat {...pos} />}</MouseTracker>`，直接用 children prop 做 render prop）

## Q12: dangerouslySetInnerHTML 是什么？怎么防范 XSS？

`dangerouslySetInnerHTML` 是 React 用于直接插入 HTML 字符串的属性。React 默认转义所有 JSX 输出，但某些场景需要渲染原始 HTML。

```tsx
function RawHTML() {
  const htmlContent = '<p>带 <strong>加粗</strong> 和 <script>alert("xss")</script></p>'

  return (
    <div dangerouslySetInnerHTML=&#123;&#123; __html: htmlContent &#125;&#125; />
    // 输出: <p>带 <strong>加粗</strong> 和 <script>alert("xss")</script></p>
    // 注意: 默认情况下，script 标签不会执行（React 处理方式）
  )
}
```

**XSS 防御策略：**

```tsx
// 1. 优先使用 JSX（自动转义）
function Safe() {
  const userInput = '<script>alert("xss")</script>'
  return <div>{userInput}</div> // 输出文本：<script>alert...
}

// 2. 必须用 dangerouslySetInnerHTML 时，净化输入
import DOMPurify from 'dompurify'

function SanitizedHTML({ html }: { html: string }) {
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p'],
    ALLOWED_ATTR: ['href', 'target'],
  })

  return <div dangerouslySetInnerHTML=&#123;&#123; __html: clean &#125;&#125; />
}

// 3. 防范注入链接中的 javascript: 协议
function SafeLink({ href, text }: { href: string; text: string }) {
  const safeHref = href.startsWith('javascript:') ? '#' : href
  return <a href={safeHref}>{text}</a>
}
```

| 防御措施 | 说明 | 级别 |
|---------|------|------|
| React 默认转义 | 自动转义 JSX 中的字符串 | 基础 |
| DOMPurify | 清理 HTML 白名单标签和属性 | 推荐 |
| Content Security Policy | HTTP 头限制脚本执行 | 强 |
| 输入验证 | 服务端也做验证 | 必要 |
| encodeURIComponent | URL 参数编码 | 针对 URL |

```tsx
// 完整的 XSS 防御示例
function Comment({ comment }: { comment: { id: number; html: string } }) {
  const sanitizedHtml = useMemo(() => {
    return DOMPurify.sanitize(comment.html, {
      ALLOWED_TAGS: ['b', 'i', 'a', 'code', 'pre'],
      ALLOWED_ATTR: ['href', 'class'],
      ALLOW_DATA_ATTR: false,
    })
  }, [comment.html])

  return (
    <div
      dangerouslySetInnerHTML=&#123;&#123; __html: sanitizedHtml &#125;&#125;
      style=&#123;&#123; wordBreak: 'break-word' &#125;&#125;
    />
  )
}
```

**面试追问：**
- 为什么叫 dangerouslySetInnerHTML？（React 故意用这个长名字对开发者产生警示）
- 除了 XSS，dangerouslySetInnerHTML 还有别的风险吗？（性能：每次都需要重新解析 HTML；破坏 React 的虚拟 DOM 对比机制）
- React 会阻止 script 标签执行吗？（在 dangerouslySetInnerHTML 中，script 标签不会执行，但 img onerror 等事件处理器可能执行）
- 服务端渲染时怎么处理 HTML 净化？（在服务端同样使用 DOMPurify，并设置 CSP 头）

## Q13: React.lazy 和 Suspense 实现代码分割

`React.lazy` 动态加载组件，配合 `Suspense` 显示加载状态，实现代码分割和按需加载。

```tsx
// 1. 动态导入组件
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))

// 2. 包裹 Suspense 提供加载状态
function App() {
  return (
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

**路由级别的代码分割：**

```tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
```

**错误处理 + 重试机制：**

```tsx
function LazyWithRetry({ children }: { children: ReactNode }) {
  const [retryCount, setRetryCount] = useState(0)

  return (
    <ErrorBoundary
      fallback={
        <div>
          <p>加载失败</p>
          <button onClick={() => setRetryCount(c => c + 1)}>重试</button>
        </div>
      }
    >
      {/* key 变化强制 React 重新创建 lazy 组件 */}
      <Suspense fallback={<Spinner />}>
        <div key={retryCount}>{children}</div>
      </Suspense>
    </ErrorBoundary>
  )
}

// 使用
<LazyWithRetry>
  <HeavyComponent />
</LazyWithRetry>
```

| 特性 | React.lazy | Loadable Components |
|------|-----------|-------------------|
| SSR 支持 | 不支持（需配合 @loadable/component） | 支持 |
| 加载后缓存 | 自动 | 自动 |
| 错误处理 | 配合 Error Boundary | 内置 |
| Suspense 集成 | 原生 | 兼容 |

**React.lazy 的限制：**

```tsx
// 1. 只支持默认导出
export default function MyComponent() {} // 正确

// 错误：命名导出
export function MyComponent() {} // 要写成 export default

// 修复：中间模块重新导出
// lazy(() => import('./Module').then(m => ({ default: m.MyComponent })))

// 2. 不能在组件内部使用
function Bad() {
  const Component = React.lazy(() => import('./Comp')) // 错误
  return <Component />
}

// 3. 必须放在 Suspense 内
// 不在 Suspense 内会报错
```

**Webpack/Vite 分包优化：**

```tsx
// Webpack magic comments 控制分包名称
const Admin = lazy(() => import(/* webpackChunkName: "admin" */ './pages/Admin'))

// 预加载（用户 hover 时预加载资源）
const preloadAdmin = () => import('./pages/Admin')

function Nav() {
  return (
    <Link
      to="/admin"
      onMouseEnter={preloadAdmin} // hover 时开始加载
    >
      管理后台
    </Link>
  )
}
```

**面试追问：**
- React.lazy 和 Suspense 的加载过程？（首次渲染触发 import()，Suspense 抛出 Promise，React 捕获后显示 fallback，Promise resolve 后重新渲染）
- React.lazy 可以和 SSR 一起用吗？（不能，SSR 需要 @loadable/component 或 Next.js 的动态导入）
- Suspense 在 React 18 中还有哪些新用途？（数据获取 Suspense，`use` Hook，流式 SSR）

## Q14: flushSync 是什么？

`flushSync` 强制 React 同步刷新更新到 DOM，跳出自动批处理。

```tsx
import { flushSync } from 'react-dom'

function FlushSyncDemo() {
  const [count, setCount] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    // React 18 自动批处理：setState 不会立即更新 DOM
    setCount(1)
    // 此时 DOM 还没有更新
    // console.log(divRef.current?.textContent) // 仍然是旧值

    // flushSync 强制立即更新 DOM
    flushSync(() => {
      setCount(2)
    })
    // 此时 DOM 已经更新
    console.log(divRef.current?.textContent) // "2"
  }

  return <div ref={divRef}>{count}</div>
}
```

**典型场景：**

```tsx
// 1. 需要在 setState 后立即读取 DOM 尺寸
function MeasureAfterUpdate() {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  function handleToggle() {
    flushSync(() => {
      setExpanded(prev => !prev)
    })

    // 需要立即知道展开后的高度
    const height = contentRef.current?.scrollHeight ?? 0
    console.log('展开后高度:', height)
  }

  return (
    <div>
      <button onClick={handleToggle}>展开</button>
      <div ref={contentRef} className={expanded ? 'open' : 'closed'}>
        内容
      </div>
    </div>
  )
}

// 2. React 18 之前 useLayoutEffect 也能做到，但 flushSync 更明确
// 3. 与三方库（非 React）集成时，需要立即同步 DOM
```

**flushSync 的注意点：**

```tsx
function MultipleFlushSync() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function handleClick() {
    // 每次 flushSync 触发一次完整渲染
    flushSync(() => setA(1)) // 渲染一次
    flushSync(() => setB(2)) // 再渲染一次

    // 相比自动批处理只渲染一次 → 性能更差
  }
}
```

| 方法 | 渲染次数 | 场景 |
|------|---------|------|
| 自动批处理 | 1 次 | 默认推荐 |
| flushSync 多次调用 | 多次 | 极少数需要同步的场景 |
| unstable_batchedUpdates | 1 次 | React 17 手动批处理 |

**面试追问：**
- flushSync 的作用和潜在性能问题？（强制同步更新，破坏批处理，导致多次渲染，应谨慎使用）
- flushSync 和 useLayoutEffect 的区别？（flushSync 强制更新后立即执行，useLayoutEffect 在浏览器绘制前执行回调）
- React 17 没有 flushSync 怎么强制同步？（React 17 在 setTimeout 和原生事件中 setState 天然是同步的）

## Q15: React 18 的 useDeferredValue 和 useTransition

两者都是 React 18 引入的**并发特性**，用于标记非紧急更新，让高优更新先执行。

```tsx
// useTransition — 将状态更新标记为低优先级
function SearchWithTransition() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [isPending, startTransition] = useTransition()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // 高优更新：更新输入框的值
    setQuery(value)

    // 低优更新：搜索（可能很慢，延迟执行）
    startTransition(() => {
      setResults(search(value))
    })
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <ResultList items={results} />
    </div>
  )
}

// useDeferredValue — 延迟一个值（不需要直接控制 setState）
function SearchWithDeferredValue() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const isPending = query !== deferredQuery

  const results = useMemo(() => search(deferredQuery), [deferredQuery])

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {isPending && <Spinner />}
      <ResultList items={results} />
    </div>
  )
}
```

| 对比 | useTransition | useDeferredValue |
|------|--------------|-----------------|
| 控制粒度 | 更新逻辑（setState 包装） | 值本身 |
| 适用场景 | 你有控制的 setState 调用 | 值来自外部 props 或 Hook |
| 返回 | `[isPending, startTransition]` | `deferredValue` |
| 底层机制 | 低优先级调度 | 值采样 + 延迟 |

**性能对比：**

```tsx
// 场景：输入框 + 大数据列表渲染
function PerformanceComparison() {
  const [input, setInput] = useState('')
  const [list, setList] = useState(generateLargeList())

  // 方案 A：无优化 — 每次输入都卡顿
  const filteredA = list.filter(item => item.includes(input))

  // 方案 B：useDeferredValue — 输入流畅，过滤延迟
  const deferredInput = useDeferredValue(input)
  const filteredB = useMemo(
    () => list.filter(item => item.includes(deferredInput)),
    [deferredInput, list]
  )

  // 方案 C：debounce — 固定延迟，无论是否卡顿
  // 方案 D：useTransition — 和 B 类似，但从 setter 角度控制

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <div style=&#123;&#123; opacity: input !== deferredInput ? 0.5 : 1 &#125;&#125;>
        {filteredB.map(item => <div key={item}>{item}</div>)}
      </div>
    </div>
  )
}
```

**并发模式的注意事项：**

```tsx
// useTransition 中的 setState 不能使用 useRef 读取旧值
function RefInTransition() {
  const [text, setText] = useState('')
  const ref = useRef(text)
  ref.current = text

  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value
    setText(newText)

    startTransition(() => {
      // ref.current 在 transition 中可能是过期值
      // 因为 transition 被推迟执行
      console.log('transition 中的 ref:', ref.current) // 可能不是最新的
      // 应该直接用新值
    })
  }
}
```

| 特性 | useTransition | debounce | throttle | useDeferredValue |
|------|-------------|---------|---------|-----------------|
| 响应性 | 即时开始，可中断 | 延迟执行 | 限频执行 | 延迟分发 |
| 中断策略 | 高优更新中断低优 | 重置计时器 | 丢弃中间值 | 值追赶 |
| 用户体验 | 最好（即时反馈） | 有等待 | 有等待 | 好 |
| 实现复杂度 | 内置 | 手动 | 手动 | 内置 |

**面试追问：**
- useTransition 的 startTransition 和 React 17 的 startTransition 一样吗？（一样，但 React 18 增加了 isPending 状态）
- useDeferredValue 和 debounce 的区别？（debounce 固定延迟，useDeferredValue 根据浏览器帧率动态调整，能即时响应的就即时响应）
- 什么场景不适合用 useTransition？（更新必须立即执行的场景，如表单提交按钮的 loading 状态）
- useDeferredValue 内配合 useMemo 为什么要用？（避免每次渲染重新计算过滤结果，配合 useMemo 缓存延迟值的结果）
