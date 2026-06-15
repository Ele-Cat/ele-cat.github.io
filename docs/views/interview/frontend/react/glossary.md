# React 术语速查

| 术语 | 一句话 |
|------|--------|
| **Fiber** | React 16 的协调引擎，每个组件对应一个 JS 对象，可中断、可分片 |
| **Hooks** | useState/useEffect 等函数，在 Fiber.memoizedState 上挂成链表 |
| **Virtual DOM** | JS 对象描述真实 DOM，diff 后批量更新 |
| **Reconciliation** | 协调——对比新旧 VNode 决定怎么更新 DOM |
| **Concurrent Mode** | 可中断渲染，高优任务能插队 |
| **Time Slicing** | 渲染任务切成 5ms 小块 |
| **Double Buffering** | current ↔ workInProgress 两棵树切换 |
| **Suspense** | 声明式加载状态，fallback 自动显示 |
| **RSC** | Server Components，零 JS 到客户端 |
| **SSR** | 服务端生成 HTML 加速首屏 |
| **memo** | `React.memo(Comp)`，props 不变跳过渲染 |
| **useCallback** | 缓存函数引用，配合 memo 用 |
| **useMemo** | 缓存计算结果 |
| **useRef** | 跨渲染保留可变对象，不触发重渲染 |
| **Closure Trap** | 闭包捕获旧值——useEffect/setTimeout 读到的是创建时的 state |
| **Functional Update** | `setState(prev => newState)` 永远读到最新值 |
| **Derived State** | 派生状态，完全由已有 state 计算得出 |
| **Lifting State Up** | 状态提升到最近的共同父组件 |
| **Immutability** | 不可变数据，引用变化驱动渲染 |
