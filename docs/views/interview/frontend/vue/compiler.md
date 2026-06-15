# Vue3 编译器优化

## 一句话

Vue3 的编译器在构建阶段分析模板，做静态提升、打 PatchFlags 标记、生成 Block Tree——让运行时少干活。

## 静态提升

纯静态节点提到渲染函数外面，只创建一次：

```js
// 编译前
<span>always same</span>

// 编译后——提到 render 外面
const _hoisted_1 = createVNode("span", null, "always same", -1)

function render(ctx) {
  return _hoisted_1 // 每次渲染复用同一个对象
}
```

React 没有这一步——JSX 里的所有元素每次渲染都重建虚拟 DOM 对象。

## PatchFlags

编译时标记哪些部分是动态的：

```
1  → TEXT      （文本动态）
2  → CLASS     （class 动态）
4  → STYLE     （style 动态）
8  → PROPS     （其他 props 动态）
32 → CHILDREN  （全动态）
-1 → HOISTED   （静态，永远不变）
```

运行时 diff 时，Vue 只检查有 flag 的部分。React 没有这个——每次全量 diff。

## Block Tree

Vue3 把模板拍成"区块树"，每个区块只追踪动态节点：

```html
<div>               <!-- block root -->
  <p>static</p>
  <p>{{ msg }}</p>  <!-- 只有这个被追踪 -->
</div>
```

Vue3 diff 只对比追踪到的动态节点，跳过全部静态结构。React 需要完整遍历整棵 VNode 树。

## 为什么 Vue 能做而 React 很难？

Vue3 是 **编译时 + 运行时** 混合框架——模板语法限制自由度，但让编译器可以做静态分析。

React 是 **纯运行时** 框架——JSX 就是 JS，全动态，编译器无法做有意义的优化。

```
Vue3：限制语法 → 更好的编译优化 → 运行时更少工作
React：零限制 → 没有编译优化 → 运行时做更多工作
```

## 面试追问

**Q: PatchFlags 的 1/2/4/8 为什么是 2 的幂次？**
位运算。`if (patchFlag & TEXT)` 一次运算判断是否包含 TEXT 标记，性能极高。

**Q: 静态提升能省多少？**
整个子树变成同一个引用，子组件数量 = 静态节点数 × 复用次数。100 个静态 li 只创建 1 次。
