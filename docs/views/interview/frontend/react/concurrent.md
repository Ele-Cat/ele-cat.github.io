# Concurrent Mode 如何工作？

## 一句话

Concurrent Mode 不是让渲染变快，而是让 React **能同时准备多个版本的 UI**，让高优先级更新插队执行。

```
传统模式：
  更新 A → 渲染完 A → 更新 B → 渲染完 B

并发模式：
  更新 A 开始 → 紧急的 B 插队 → 暂停 A → 优先 B → 恢复 A
```

## 时间分片

JS 单线程，React 用 Fiber 把渲染任务切成 5ms 小块模拟并发效果。

## Suspense（悬念）

声明式加载状态——子组件没准备好时显示 fallback，准备好后无缝切换。

```tsx
<Suspense fallback={<Loading />}>
  <SomeSlowComponent />
</Suspense>
```

配合 Concurrent Mode：Suspense 组件没准备好时，React 先渲染其他就绪部分，这叫 **流式渲染**。

## 三者关系

```
Fiber（基础设施）
  → 时间分片让渲染可中断
  → Concurrent Mode 让优先级调度成为可能
  → Suspense 利用这个能力实现流式加载
```

## 面试追问

**Q: React 18 的 createRoot 默认就是 Concurrent Mode 吗？**
`createRoot` 开启了并发特性，但 Suspense/transitions 需要主动使用才生效。
