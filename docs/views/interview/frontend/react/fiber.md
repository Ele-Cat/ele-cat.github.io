# Fiber 架构是怎样的？

## 一句话

Fiber 是 React 16 引入的新协调引擎——每个组件对应一个 **纯 JS 对象**，描述组件要做什么，支持可中断渲染和优先级调度。

## 为什么需要 Fiber？

React 15 的协调是 **递归不可中断** 的。渲染大列表时调用栈被占满，用户点击无响应。

Fiber 把渲染拆成 **小工作单元**，每个单元做完后问主线程：还有更紧急的事吗？

```
旧：一次性递归到底                      新：每次做一点，交还主线程
用户点击 → 无响应                       用户点击 → 立刻响应，渲染暂停
```

## Fiber 节点数据结构

```ts
{
  tag: HostComponent,     // 节点类型
  type: 'div',
  stateNode: div DOM,     // 指向真实 DOM
  memoizedState: { ... }, // 当前状态——Hooks 链表挂在这里
  memoizedProps: { ... },
  pendingProps: { ... },
  return: Fiber,          // 父节点
  child: Fiber,           // 第一个子节点
  sibling: Fiber,         // 下一个兄弟节点
  effectTag: 'PLACEMENT', // 标记（插入/更新/删除）
  lanes: 1,               // 优先级
  alternate: Fiber,       // 双缓存中的"另一个版本"
}
```

## 双缓存机制

React 同时维护两棵 Fiber 树：

```
current（屏幕上） ←→ workInProgress（内存中构建）
    |                       |
  真实 DOM                影子树
```

构建完 workInProgress → 一次指针切换 → 变成新的 current。这棵影子树是 Concurrent Mode 的基础。

## 渲染流程

```
setState
  → 标记 Fiber 需要更新（打 effectTag）
  → 调度器判断优先级
  → render 阶段（构建 workInProgress，可中断）
  → commit 阶段（一次性应用到真实 DOM，不可中断）
```

## 面试追问

**Q: Fiber 怎么实现时间分片？**
每个工作单元执行完后检查是否超时（约 5ms），超时则交还主线程，等浏览器空闲再继续。通过 `requestIdleCallback` 或 `MessageChannel` 调度。

**Q: 为什么 commit 阶段不可中断？**
因为 commit 阶段操作真实 DOM，中断会导致 UI 不一致。
