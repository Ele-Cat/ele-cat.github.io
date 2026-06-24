# Vapor Mode 是什么？

## 一句话

Vapor Mode 是 Vue 的无虚拟 DOM 模式——编译器直接生成 **细粒度 DOM 更新代码**，不需要 VNode 和 diff。

## 对比

```js
// 传统模式：创建 VNode → diff → 更新 DOM
function render(ctx) {
  return createVNode('p', null, toDisplayString(ctx.count))
}

// Vapor 模式：直接操作 DOM
const p = document.createElement('p')
effect(() => {
  p.textContent = ctx.count // count 变了直接改这一个属性
})
```

## 效果

- **零虚拟 DOM 开销**：没有 createVNode，没有 diff
- **和 Solid.js 类似**：提前编译出细粒度更新
- **更小的 JS 体积**：不需要运行时虚拟 DOM 库

## 渐进式

Vapor 组件和传统组件可以 **在同一个组件树里混合**，不是全有或全无。

## 为什么 Vue 能做 Vapor 但 React 很难？

同一个原因：**模板给了编译器完整信息**。Vue 知道 &#123;&#123; count &#125;&#125; 就绑定在这个 `<p>` 上，可以直接生成 `p.textContent = count`。

React 的 JSX 就是 JS，编译器不确定 `{count}` 最终渲染到哪个 DOM 节点。

## 面试追问

**Q: Vapor Mode 什么时候上线？**
Vue 3.6 目标，目前 experimental（Vue 3.5+ 开始推进）。

**Q: Vapor 会取代传统模式吗？**
不会。Vapor 是渐进式的——复杂交互组件用传统模式（VNode 更灵活），简单展示组件用 Vapor（零开销）。
