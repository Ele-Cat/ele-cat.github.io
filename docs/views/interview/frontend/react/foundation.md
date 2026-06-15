# React 基础面试题

## Q1: 什么是 JSX？和模板引擎有什么区别？

JSX 是 JavaScript 的语法扩展，看起来像 HTML，但本质是 `React.createElement` 的语法糖。它让 UI 描述更直观，同时保留了 JS 的全部能力（变量、循环、条件判断）。

```tsx
// JSX 写法
const element = <h1 className="title">Hello, {name}</h1>

// 编译后等价于
const element = React.createElement('h1', { className: 'title' }, 'Hello, ', name)
```

**和模板引擎（如 Handlebars、EJS、Mustache）的区别：**

| 维度 | JSX | 模板引擎 |
|------|-----|----------|
| 类型 | JS 语法糖，是 JS 的一部分 | 独立模板语言，需专门语法 |
| 逻辑能力 | 可嵌入任意 JS 表达式 | 有限语法（循环、条件） |
| 类型安全 | 支持 TypeScript | 需额外插件 |
| 编译时机 | 构建时（Babel/SWC） | 构建时或运行时 |
| 值转义 | React 默认转义所有输出 | 需手动关闭转义（有 XSS 风险） |

```tsx
// JSX 可以直接用 map、filter 等
const items = data.filter(Boolean).map(item => <li key={item.id}>{item.name}</li>)

// 模板引擎通常需要专用语法
// &#123;&#123;#each items&#125;&#125; <li>&#123;&#123;name&#125;&#125;</li> &#123;&#123;/each&#125;&#125;
```

**性能提示：** JSX 本身无运行时开销（编译后就是 createElement 调用）。但大 JSX 树会创建大量虚拟 DOM 节点，可用 `React.Fragment` 减少层级。

**面试追问：**
- JSX 为什么不能用 `if/else` 而可以用三元表达式？（JSX 是表达式，`if` 是语句）
- JSX 的 `key` 为什么要稳定唯一？（diff 算法的依赖）
- 可以不用 JSX 写 React 吗？（可以，`createElement` / `jsx` 运行时）

## Q2: 函数组件和类组件有什么区别？

| 维度 | 函数组件 | 类组件 |
|------|----------|--------|
| 定义方式 | 纯函数 | ES6 class |
| 状态管理 | `useState` Hook | `this.state` + `setState` |
| 生命周期 | `useEffect` 模拟 | 专用生命周期方法 |
| `this` | 无 | 需绑定或箭头函数 |
| 代码量 | 更少 | 更冗余 |
| 性能 | 更轻量（无实例） | 有实例开销 |
| Hooks 支持 | 全部支持 | 不支持 |

```tsx
// 函数组件
function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => { document.title = `${count}` }, [count])
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}

// 类组件（等价实现）
class Counter extends React.Component {
  state = { count: 0 }
  componentDidUpdate() { document.title = `${this.state.count}` }
  render() {
    return <button onClick={() => this.setState(s => ({ count: s.count + 1 }))}>
      {this.state.count}
    </button>
  }
}
```

**为什么 React 推荐函数组件？** 类组件的 `this` 指向容易导致闭包陷阱，且生命周期方法分散逻辑（如订阅在 `componentDidMount` 解绑在 `componentWillUnmount`）。Hooks 让相关逻辑聚合在一起。

**陷阱：** 函数组件每次渲染都会重新执行所有代码，闭包捕获的是当前渲染的值。类组件的 `this.state.count` 始终读取最新值。如果需要在函数组件中读取最新值而不触发重新渲染，用 `useRef`。

**面试追问：**
- 函数组件可以有自己的实例方法吗？（可以，用 `useImperativeHandle` + `forwardRef`）
- 类组件在 React 18 中会被移除吗？（不会，但不再推荐）
- PureComponent 和 React.memo 的区别？（PureComponent 浅比较 props + state，React.memo 只比较 props）

## Q3: props 和 state 有什么区别？

| 维度 | props | state |
|------|-------|-------|
| 来源 | 父组件传入 | 组件内部定义 |
| 可变性 | 不可变（只读） | 可变（通过 setState） |
| 触发更新 | 父组件重新渲染 | 自身 setState |
| 默认值 | `defaultProps` | `useState(initial)` |
| 用途 | 外部数据传入 | 内部交互状态 |

```tsx
// props — 外部传入，组件不能修改
function Greeting({ name, onGreet }) {
  return <button onClick={onGreet}>Hello {name}</button>
}

// state — 内部状态，组件自己管理
function Counter() {
  const [count, setCount] = useState(0)

  // setCount 的两种形式
  const increment = () => setCount(count + 1)        // 直接传入（依赖当前闭包值）
  const safeIncrement = () => setCount(prev => prev + 1) // 函数形式（始终基于最新值）

  return <button onClick={safeIncrement}>{count}</button>
}
```

**关键区别：** props 像函数的参数，state 像函数的局部变量。props 变化完全由父组件控制，state 变化由组件自身触发。

**常见误区：** 不要将 props 复制到 state。除非明确需要"初始值快照"：

```tsx
// 错误：props 更新不会同步到 state
function Bad({ value }) {
  const [state, setState] = useState(value) // value 后续变化被忽略
}

// 正确：直接用 props
function Good({ value }) {
  return <div>{value}</div>
}

// 需要快照时：加 key 实现重置
function Snapshot({ initialValue }) {
  const [value, setValue] = useState(initialValue)
  return <input value={value} onChange={e => setValue(e.target.value)} />
}
// 父组件用 <Snapshot key={id} initialValue={name} /> 来重置
```

**面试追问：**
- props 是响应式的吗？（是的，父组件重新渲染会传新 props）
- 为什么不能直接修改 state？（React 依赖不可变性来检测变化，直接修改不会触发重新渲染）
- props drilling 怎么解决？（Context、组合、状态管理库）

## Q4: setState 是同步还是异步的？

**核心结论：** 在 React 合成事件和生命周期中，`setState` 是**异步**批量更新的；在原生事件、`setTimeout`、`Promise` 中是**同步**的（React 17 及之前默认行为，React 18 严格模式自动批处理所有更新）。

```tsx
class Example extends React.Component {
  handleClick = () => {
    // React 合成事件：异步批量
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count) // 还是旧值

    // 函数形式保证基于最新状态
    this.setState(prev => ({ count: prev.count + 1 }))
  }

  componentDidMount() {
    // 原生事件：同步（React 17），React 18 也是批量
    document.addEventListener('click', () => {
      this.setState({ count: 1 })
      console.log(this.state.count) // React 17: 1（同步）
    })

    // setTimeout：同步（React 17），React 18 也是批量
    setTimeout(() => {
      this.setState({ count: 2 })
      console.log(this.state.count) // React 17: 2（同步）
    }, 0)
  }
}
```

**React 18 自动批处理：**

```tsx
// React 18 — 所有场景自动批量更新，不再区分
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    // 只会触发一次重新渲染
    setCount(c => c + 1)
    setFlag(f => !f)

    // 即使在 setTimeout 内也是批量
    setTimeout(() => {
      setCount(c => c + 1)
      setFlag(f => !f)
    }, 0)

    // 在 Promise 内也是批量
    fetch('/api').then(() => {
      setCount(c => c + 1)
      setFlag(f => !f)
    })
  }

  // 如果确实需要强制同步更新，用 flushSync
  function handleFlush() {
    ReactDOM.flushSync(() => setCount(c => c + 1)) // 立即更新 DOM
    ReactDOM.flushSync(() => setFlag(f => !f))     // 两次同步更新
  }

  return <button onClick={handleClick}>{count}</button>
}
```

**面试追问：**
- `setState(prev => prev + 1)` 为什么能拿到最新值？（React 内部维护一个更新队列，函数形式会被依次执行）
- 批量更新怎么实现的？（Fiber 调度中的批量策略 `executionContext`）
- `unstable_batchedUpdates` 在 React 18 中还用得到吗？（不需要了，自动批处理覆盖所有场景）

## Q5: React 事件机制和原生事件有什么区别？

React 事件使用了**事件委托**：React 16 及以前委托到 `document`，React 17+ 委托到 root 容器（`#root`）。

```tsx
// React 合成事件
function App() {
  const handleClick = (e: React.MouseEvent) => {
    // e 是 SyntheticEvent（包装过的）
    console.log(e.nativeEvent) // 原生事件
    e.preventDefault()        // 跨浏览器一致
    e.stopPropagation()       // 只阻止合成事件冒泡
  }

  return <button onClick={handleClick}>Click</button>
}
```

| 维度 | React 合成事件 | 原生事件 |
|------|---------------|---------|
| 绑定方式 | `onClick={fn}` JSX 属性 | `addEventListener` |
| 事件对象 | `SyntheticEvent`（跨浏览器封装） | 原生 Event |
| 委托节点 | React 17+: root 容器 | 各自绑定 |
| 内存 | 统一委托，少 listener | 每个元素独立绑定 |
| 阻止冒泡 | `e.stopPropagation()` 只阻合成 | `e.stopPropagation()` 阻原生 |
| 异步访问 | 事件池机制（React 16），React 17 取消 | 始终可用 |

```tsx
// 混合使用时的陷阱
function Mixed() {
  useEffect(() => {
    // 原生监听，不要阻止合成事件的冒泡
    const el = document.getElementById('btn')
    el.addEventListener('click', () => console.log('native'))
  }, [])

  const handleReactClick = (e) => {
    // React 17: e.stopPropagation() 只停止合成事件冒泡
    // 要阻止原生事件冒泡需要用 e.nativeEvent.stopPropagation()
    e.nativeEvent.stopPropagation()
    console.log('react')
  }

  return <button id="btn" onClick={handleReactClick}>混合事件</button>
}
```

**面试追问：**
- React 17 为什么把事件委托从 document 改到 root？（更安全，多个 React 版本共存时不冲突）
- 事件池在 React 17 为什么被移除？（异步访问 `e` 需要 `e.persist()`，增加心智负担，性能收益不大）
- SSR 时合成事件怎么工作？（不在服务端绑定，hydrate 后客户端绑定）

## Q6: 条件渲染有哪些方式？

**5 种主要方式：**

```tsx
function ConditionalRendering({ status, items, isAdmin }) {
  // 1. 三元表达式（最常用，适合二分支）
  return <div>{status === 'loading' ? <Spinner /> : <Content />}</div>

  // 2. && 短路（适合单分支隐藏）
  return <div>{isAdmin && <AdminPanel />}</div>

  // 3. if/else 语句（适合多分支，返回 JSX）
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <Error />
  return <Content />

  // 4. 立即执行函数（IIFE）
  return <div>{(() => {
    if (status === 'loading') return <Spinner />
    if (status === 'error') return <Error />
    return <Content />
  })()}</div>

  // 5. 枚举对象（适合固定状态映射）
  const statusMap = {
    loading: <Spinner />,
    empty: <Empty />,
    error: <Error />,
    success: <Content />,
  }
  return <div>{statusMap[status] ?? <Fallback />}</div>
}
```

**常见陷阱：**

```tsx
// 错误：falsy 值会渲染 0
{count && <span>显示</span>}  // count = 0 时渲染 0

// 正确：转成布尔
{count > 0 && <span>显示</span>}

// 错误：数组渲染字符串
{[] && <span>不会渲染</span>} // [] 是 truthy

// 错误：三元嵌套过深
{a ? (b ? (c ? <A /> : <B />) : <C />) : <D />}

// 正确：抽成组件或变量
const inner = c ? <A /> : <B />
const outer = b ? inner : <C />
return a ? outer : <D />
```

**面试追问：**
- 为什么 `0 && <Component>` 会渲染 `0`？（JSX 渲染所有非布尔返回值，`&&` 短路时返回 0）
- `v-show` 和条件渲染的区别？（Vue 的 `v-show` 是 CSS 隐藏，React 条件渲染直接移除 DOM）
- 列表中没有 key 的条件渲染导致的问题？（diff 复用错误，组件状态错乱）

## Q7: 列表渲染为什么要用 key？

Key 帮助 React 在 diff 时**识别哪些项被修改、添加或删除**。没有 key 时 React 默认使用索引，导致状态复用错误。

```tsx
// 正确：使用唯一 ID
const list = items.map(item => <li key={item.id}>{item.name}</li>)

// 错误：使用索引（列表会被变更时引发 bug）
const bad = items.map((item, i) => <li key={i}>{item.name}</li>)
```

**索引 key 的典型问题：**

```tsx
function BuggyList() {
  const [items, setItems] = useState([
    { id: 1, text: 'A' },
    { id: 2, text: 'B' },
  ])

  // 每个 li 内有一个 input
  return (
    <>
      {items.map((item, i) => (
        <li key={i}>
          <input defaultValue={item.text} />
        </li>
      ))}
      <button onClick={() => setItems([{ id: 3, text: 'C' }, ...items])}>
        头部插入
      </button>
    </>
  )
}
```

插入 C 后：原本 A 对应的 input 仍然显示 A 的值，因为 key=0 被复用给 C，但 DOM 实例没有重建，input 的 state 保留了。使用 `key={item.id}` 能正确重建。

**Key 的选择策略：**

| Key 类型 | 示例 | 建议 |
|---------|------|------|
| 唯一 ID | `item.id` | 首选 |
| 组合键 | `${item.type}-${item.id}` | 无全局 ID 时 |
| 索引 | `index` | 仅静态列表、无删除/插入/排序 |
| 随机数 | `Math.random()` | 禁用（每次重渲染都变，完全破坏 diff） |

```tsx
// 用 key 重置组件状态
function ResetOnChange({ userId }) {
  return <ProfileForm key={userId} /> // userId 变化时 ProfileForm 完全重建
}

// 用 key 强制刷新列表
function RefreshList() {
  const [refreshKey, setRefreshKey] = useState(0)
  return (
    <>
      <List key={refreshKey} />
      <button onClick={() => setRefreshKey(k => k + 1)}>刷新</button>
    </>
  )
}
```

**面试追问：**
- React 为什么不用数组下标作为默认 key？（避免新手陷阱，显式要求开发者思考标识稳定性）
- key 在同一兄弟数组内必须唯一，全局不需要唯一，为什么？（diff 只在同级比较）
- 复用组件时 key 和 ref 的关系？（key 用于 diff，ref 用于 DOM 引用）

## Q8: 受控组件和非受控组件有什么区别？

受控组件：表单数据由 React state 控制。非受控组件：表单数据由 DOM 自身管理。

```tsx
// 受控组件
function Controlled() {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 可以拦截、转换、校验
    setValue(e.target.value.toUpperCase())
  }
  return <input value={value} onChange={handleChange} />
}

// 非受控组件
function Uncontrolled() {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = () => {
    alert(inputRef.current?.value) // 需要时才读取
  }
  return (
    <>
      <input defaultValue="initial" ref={inputRef} />
      <button onClick={handleSubmit}>提交</button>
    </>
  )
}
```

| 维度 | 受控组件 | 非受控组件 |
|------|---------|-----------|
| 数据源 | React state | DOM |
| 读取时机 | 任何时候 | 需要时通过 ref |
| 验证/格式化 | 实时，在 onChange 中 | 提交时 |
| 代码量 | 多 | 少 |
| 可控性 | 完全 | 有限 |
| 性能 | 每次输入触发渲染 | 不触发渲染 |

**选择策略：**

```tsx
// 受控适用场景：实时搜索、格式化输入、联动校验
function Search() {
  const [query, setQuery] = useState('')
  const debounced = useDebounce(query, 300)
  // 每次敲击触发搜索
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}

// 非受控适用场景：文件上传、简单表单、第三方库集成
function FileUpload() {
  const fileRef = useRef<HTMLInputElement>(null)
  return (
    <input
      type="file"
      ref={fileRef}
      onChange={() => console.log(fileRef.current?.files?.[0]?.name)}
    />
  )
}
```

**常见陷阱：** 将 `undefined` 传给受控组件的 `value` 会转为非受控模式，导致 React 警告。

```tsx
// 危险：异步加载数据时 value 先 undefined 后赋值
function AsyncInput({ userId }) {
  const [name, setName] = useState<string>() // undefined

  useEffect(() => {
    fetchUser(userId).then(u => setName(u.name))
  }, [userId])

  // 初始 undefined → React 认为是非受控
  // 后续赋值 → React 报错：从非受控切换到受控
  return <input value={name} onChange={e => setName(e.target.value)} />

  // 修复：提供空字符串默认值
  // return <input value={name ?? ''} onChange={e => setName(e.target.value)} />
}
```

**面试追问：**
- 受控组件每次输入都触发 render，会不会性能问题？（React 18 自动批处理 + 虚拟 DOM diff，大部分场景无感知，大量输入框用 memo/ref）
- `defaultValue` 和 `value` 同时设置会怎样？（`value` 优先，`defaultValue` 被忽略）
- 怎么让特定 div 可编辑？（用 `contentEditable`，但需要受控方式维护 innerHTML）

## Q9: 什么是状态提升（Lifting State Up）？

当多个组件需要共享同一份状态时，将该状态提升到它们最近的共同父组件中管理，通过 props 下发数据和更新函数。

```tsx
// 状态提升的经典例子：温度转换
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>{scale === 'c' ? 'Celsius' : 'Fahrenheit'}</legend>
      <input value={temperature} onChange={e => onTemperatureChange(e.target.value)} />
    </fieldset>
  )
}

function Calculator() {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')

  const handleCelsiusChange = (value: string) => {
    setScale('c')
    setTemperature(value)
  }

  const handleFahrenheitChange = (value: string) => {
    setScale('f')
    setTemperature(value)
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}

// 工具函数
function toCelsius(f: number) { return ((f - 32) * 5) / 9 }
function toFahrenheit(c: number) { return (c * 9) / 5 + 32 }
function tryConvert(temperature: string, convert: (n: number) => number) {
  const input = parseFloat(temperature)
  return Number.isNaN(input) ? '' : String(convert(input))
}
```

**何时使用 vs Context vs 状态管理库：**

| 方案 | 适用场景 |
|------|---------|
| 状态提升 | 兄弟组件共享，层级浅 |
| Context | 深层传递，跨层级共享 |
| Redux/Zustand | 全局状态，复杂更新逻辑 |
| 组件组合 | 避免 prop drilling，通过 children 透传 |

**状态提升的局限性：** 层级很深时每一层都需要透传 props（prop drilling），此时应改用 Context 或组合。

```tsx
// 用组合减少 prop drilling
function Layout({ header, sidebar, children }) {
  return (
    <div>
      <div>{header}</div>
      <div>{sidebar}</div>
      <div>{children}</div>
    </div>
  )
}

// 使用
<Layout
  header={<Header user={user} />}
  sidebar={<Sidebar items={items} />}
>
  <Main data={data} />
</Layout>
```

**面试追问：**
- 状态提升和 Context 怎么选？（看层级深度和更新频率，频繁更新用状态提升更好，避免 Context 导致大量重渲染）
- 子组件怎么通知父组件更新？（父组件传递回调函数 `onXxxChange`）
- 状态提升过多导致父组件臃肿怎么办？（拆分父组件为逻辑 Hook 或使用状态管理库）

## Q10: React 的生命周期有哪些？

React 16.3 引入了新的生命周期，废弃了三个不安全方法（加 `UNSAFE_` 前缀）。

**挂载阶段：**
```
constructor → static getDerivedStateFromProps → render → componentDidMount
```

**更新阶段：**
```
static getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
```

**卸载阶段：**
```
componentWillUnmount
```

```tsx
class LifecycleDemo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // 1. 初始化 state，绑定方法
    this.state = { count: 0 }
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    // 2. 每次渲染前调用，根据 props 派生 state
    // 返回 null 表示无更新
    if (props.reset) return { count: 0 }
    return null
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // 3. 性能优化，返回 false 跳过渲染
    return nextState.count !== this.state.count
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    // 4. 在 DOM 更新前获取快照（如滚动位置）
    return this.listRef.current?.scrollHeight ?? null
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: any) {
    // 5. DOM 更新后，处理副作用
    if (prevProps.id !== this.props.id) {
      this.fetchData(this.props.id)
    }
    // 使用 snapshot 恢复滚动位置
    if (snapshot !== null) {
      this.listRef.current?.scrollTo(0, this.listRef.current.scrollHeight - snapshot)
    }
  }

  componentDidMount() {
    // 6. 挂载后：请求数据、订阅、DOM 操作
    this.fetchData(this.props.id)
    this.subscription = someEvent.subscribe(this.handleEvent)
  }

  componentWillUnmount() {
    // 7. 卸载前：清理定时器、取消订阅
    this.subscription?.unsubscribe()
    clearTimeout(this.timer)
  }

  render() {
    return <div ref={this.listRef}>{this.state.count}</div>
  }
}
```

**Hooks 对应的生命周期映射：**

| 类生命周期 | Hook 替代 |
|-----------|----------|
| `constructor` | `useState` 初始化 |
| `getDerivedStateFromProps` | 直接计算 |
| `shouldComponentUpdate` | `React.memo` / `useMemo` |
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate` | `useEffect(() => {}, [deps])` |
| `componentWillUnmount` | `useEffect(() => fn, [])` 返回清理函数 |
| `getSnapshotBeforeUpdate` | `useLayoutEffect` |
| `componentDidCatch` | Error Boundary（类组件专属） |

```tsx
// Hook 版本等价实现
function LifecycleHooks({ id }: { id: string }) {
  const [data, setData] = useState(null)
  const listRef = useRef<HTMLDivElement>(null)

  // componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    let cancelled = false
    fetchData(id).then(res => { if (!cancelled) setData(res) })
    return () => { cancelled = true } // 清理
  }, [id])

  // getSnapshotBeforeUpdate 等价
  useLayoutEffect(() => {
    // DOM 变更后立即执行，在浏览器绘制前
    if (listRef.current) {
      // 处理滚动位置恢复
    }
  })

  return <div ref={listRef}>{data}</div>
}
```

**面试追问：**
- `getDerivedStateFromProps` 被设计为静态方法的原因？（避免访问 `this`，防止副作用，函数式纯逻辑）
- `componentDidMount` 和 `useEffect` 执行时机有什么区别？（`useEffect` 在浏览器绘制后异步执行，`componentDidMount` 在绘制前同步执行）
- `getSnapshotBeforeUpdate` 在什么场景下必须用？（读取滚动位置、手动 DOM 尺寸计算，需要在 DOM 更新后 layout 前捕获）

## Q11: React.createElement 和 JSX 的关系？

JSX 经过编译器（Babel / SWC / TypeScript）编译后变成 `React.createElement` 调用，在 React 17+ 中也可以使用新的 `jsx` 运行时自动导入。

```tsx
// 原始 JSX
const element = <div className="container"><span>Hello</span></div>

// React 17 之前的编译结果
const element = React.createElement('div', { className: 'container' },
  React.createElement('span', null, 'Hello')
)

// React 17+ / 18 新的 jsx 运行时（自动导入）
import { jsx as _jsx } from 'react/jsx-runtime'
const element = _jsx('div', { className: 'container', children: _jsx('span', { children: 'Hello' }) })
```

**新 JSX 运行时的改进：**

| 方面 | 旧（createElement） | 新（jsx-runtime） |
|------|---------------------|-------------------|
| 导入 | 需手动 `import React from 'react'` | 自动注入，无需显式导入 |
| children | 单独参数 | 作为 props 的一部分 |
| key/ref | 特殊处理 | 和其他 props 分开 |
| spread 优化 | 全量 spread | 可区分静态/dynamic props |
| 包体积 | 略大 | 更小 |

**TypeScript 实战：**

```tsx
// tsconfig.json 配置
{
  "compilerOptions": {
    "jsx": "react-jsx",       // React 17+ 新运行时
    // "jsx": "react"          // 旧：React.createElement
    // "jsx": "preserve"       // 保留 JSX，让 Babel 处理
  }
}
```

```tsx
// 手动 createElement（不用 JSX 的场景）
const element = React.createElement(
  'div',
  { style: { color: 'red' } },
  React.createElement('h1', null, 'Title'),
  'Plain text child'
)

// Fragment 在 createElement 中的表示
const fragment = React.createElement(React.Fragment, null,
  React.createElement('li', { key: 1 }),
  React.createElement('li', { key: 2 })
)

// React 17+ Fragment 也可以简写
const fragmentNew = /*#__PURE__*/ _jsxs(React.Fragment, {
  children: [
    _jsx('li', {}),
    _jsx('li', {})
  ]
})
```

**自定义 JSX 工厂：** 理论上 JSX 不限于 React，可以通过 `@jsx` 注释或 `pragma` 设置自定义函数。

```tsx
/** @jsx CustomCreateElement */
const element = <div>Hello</div> // 编译为 CustomCreateElement('div', ...)
```

**面试追问：**
- React 17 为什么要引入新的 JSX 运行时？（减少包体积、免去显式 `import React`、为未来优化铺路）
- 没有 JSX 怎么写 React？（用 `createElement` 或 `h` 函数）
- Babel 和 TypeScript 编译 JSX 的区别？（Babel 编译更彻底，支持自定义 pragma；TS 更关注类型检查）

## Q12: Fiber 为什么让类组件生命周期某些方法不安全？

Fiber 架构引入了可中断的异步渲染。在 Reconciliation 过程中，Fiber 可以在发现高优任务时**暂停当前工作，让浏览器处理高优更新，之后再恢复**。这意味着某些生命周期可能在暂停后恢复时被**重复执行**。

```tsx
// 不安全的生命周期 — 可能多次调用
class UnsafeLifecycle extends React.Component {
  UNSAFE_componentWillMount() {
    // 问题：Fiber 可能多次调用此方法
    // 如果在这里发起请求或添加订阅，会导致重复
    this.fetchData() // 可能被调用 2-3 次
    window.addEventListener('resize', this.handleResize) // 重复绑定
  }
}
```

**为什么不安全：**

| 方法 | 不安全原因 | Fiber 场景 |
|------|-----------|-----------|
| `componentWillMount` | 可能多次调用 | 渲染被中断后恢复时重新执行 |
| `componentWillUpdate` | 可能和实际更新的 DOM 不一致 | 中断后状态已变，但该方法执行了 |
| `componentWillReceiveProps` | 可能收到"过期"的 props | 中断后 props 再次变化，方法重新执行 |

**替代方案：**

```tsx
// 推荐的替代方案
class SafeLifecycle extends React.Component {
  static getDerivedStateFromProps(props: Props, state: State) {
    // 静态方法，纯函数，不在实例上操作
    // 每次渲染时调用，不产生副作用
    if (props.userId !== state.prevUserId) {
      return { prevUserId: props.userId, data: null }
    }
    return null
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    // 在提交阶段执行，不会被中断
    // 可以安全地发起副作用
    if (prevProps.userId !== this.props.userId) {
      this.fetchData(this.props.userId)
    }
  }

  componentDidMount() {
    // 只会执行一次
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  // 如果必须使用不安全方法（迁移场景）
  UNSAFE_componentWillMount() {
    // 加守卫避免重复执行
    if (!this._mounted) {
      this._mounted = true
      this.fetchData()
    }
  }
}
```

**Fiber 中的 Render 阶段 vs Commit 阶段：**

```
Render 阶段（可中断）:
  → getDerivedStateFromProps
  → shouldComponentUpdate
  → render

Commit 阶段（不可中断）:
  → getSnapshotBeforeUpdate
  → componentDidMount / componentDidUpdate
  → componentWillUnmount
```

Render 阶段的方法可能在 Fiber 回退（bailout）或中断时被调用多次。Commit 阶段的方法只会执行一次，因为它们操作 DOM 实例。

**Hook 版本为什么没有这个问题：**

```tsx
function SafeHooks({ userId }: { userId: string }) {
  useEffect(() => {
    // commit 阶段执行，不会被中断
    fetchData(userId)
  }, [userId])

  useEffect(() => {
    // 清理函数在卸载或下一次 effect 前执行
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
}
```

Hooks 中只有 `useEffect` 和 `useLayoutEffect` 的回调在 Commit 阶段执行，所以天然安全。`useMemo` / `useCallback` 的回调在 Render 阶段执行（可能被重复调用），但不允许在其中产生副作用。

**面试追问：**
- React 16 为什么不直接移除不安全方法而是加 `UNSAFE_` 前缀？（向后兼容，给开发者迁移时间）
- Fiber 的中断策略具体是怎么实现的？（时间切片 + 优先级调度，每次检查剩余时间，不够就让出）
- `getDerivedStateFromProps` 为什么被设计为静态的？（防止开发者在其中使用 `this.setState` 或其他副作用）
- Fiber 中 Commit 阶段的生命周期可以再细分吗？（分为 Before Mutation / Mutation / Layout 三个阶段，分别对应 DOM 更新前、更新中、更新后）
