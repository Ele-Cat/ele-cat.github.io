# Hooks 的底层原理是什么？

## 一句话

Hooks 本质上是一个 **链表**，挂在组件对应 Fiber 节点的 `memoizedState` 上，按调用顺序遍历——所以不能放在条件语句里。

## 链表存储结构

```
Fiber.memoizedState
  │
  ├─ useState   → next → useEffect → next → useCallback → next → useMemo → null
  └─ 每次渲染按调用顺序遍历链表，一一对应
```

## 为什么不能放条件语句里？

如果某次渲染 `if` 没命中，useEffect 就跳过了，下一个 Hook 拿到的是上一个的状态，整个链表错位。

```tsx
// ❌ 错误：条件语句改变 Hook 调用顺序
if (isMounted) {
  useEffect(() => { /* ... */ })
}
const [count, setCount] = useState(0) // 拿到的是 useEffect 的 state
```

## useCallback — 稳定函数引用

```tsx
const toggleTodo = useCallback((id: number) => {
  setTodos(prev => prev.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ))
}, []) // 空依赖 → 永远同一个引用
```

- 配合 `React.memo` 使用：props 没变就跳过渲染
- 如果用 **函数式更新**（`prev => ...`），可以空依赖

## useMemo — 派生状态缓存

```tsx
const filteredTodos = useMemo(
  () => filter === 'all'
    ? todos
    : todos.filter(t => filter === 'active' ? !t.completed : t.completed),
  [todos, filter]
)
```

只在依赖变化时重新计算，避免每次渲染都重复执行。

## useRef — 跨渲染保留可变数据

```tsx
const renderCount = useRef(0)
renderCount.current++
```

- 改变 `ref.current` **不会** 触发重渲染
- 常用于 DOM 引用或保存"最新值"

## 闭包陷阱

```tsx
// ❌ 闭包捕获旧值
useEffect(() => {
  const timer = setTimeout(() => {
    console.log(todos.length) // 永远初始值
  }, 3000)
  return () => clearTimeout(timer)
}, []) // 依赖数组为空

// ✅ 修复：加入依赖或函数式更新
useEffect(() => {
  const timer = setTimeout(() => {
    console.log(todos.length) // 现在最新
  }, 3000)
  return () => clearTimeout(timer)
}, [todos])
```

## 不可变数据

React 通过 **对象引用** 判断变化。直接修改原对象引用不变，跳过渲染。

```tsx
// ❌ 直接修改（Vue3 可以这样做）
todo.completed = true
setTodos(prev) // React 不知道变了

// ✅ 返回新对象
setTodos(prev =>
  prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
)
```

## 面试追问

**Q: useCallback(fn, []) 和 const fn = () => {} 有什么区别？**
前者每次渲染返回同一个引用；后者每次创建新函数。配合 memo 时前者生效，后者无效。

**Q: useRef 为什么不需要依赖数组？**
因为 ref 对象引用在组件整个生命周期不变，存在 Fiber.memoizedState 里，不参与依赖追踪。
