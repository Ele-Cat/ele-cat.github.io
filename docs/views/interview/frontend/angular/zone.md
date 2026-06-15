# Zone.js 如何触发变更检测？

## 一句话

Zone.js 通过 **monkey-patch**（猴子补丁）所有浏览器异步 API（setTimeout/Promise/DOM 事件/fetch），在这些操作完成后自动触发 Angular 的变更检测。

## Zone.js 做的事

```ts
// 伪代码：Zone.js 拦截 setTimeout
const originalSetTimeout = window.setTimeout
window.setTimeout = function(fn, ms) {
  return originalSetTimeout.call(window, () => {
    Angular.runInZone(fn) // 执行回调后触发变更检测
  }, ms)
}
```

Angular 在以下操作后自动检查变化：
- setTimeout / setInterval
- Promise .then / .catch
- DOM 事件（click / input / submit）
- fetch / XMLHttpRequest
- addEventListener

## OnPush 策略

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

告诉 Angular：**只有输入属性引用变化时才检查这个组件**。和 React 的 `memo` 类似。

## 三框架对比

| | Angular | React | Vue3 |
|--|---------|-------|------|
| 触发更新 | Zone.js 自动（拦截异步） | setState 手动 | ref.value = x 自动 |
| 检测粒度 | 组件树（OnPush 缩 subtree） | 整个子树 | 动态节点级 |
| 优化手段 | OnPush 策略 | memo / useCallback | 默认已优化 |

## 面试追问

**Q: Zone.js 不依赖的话 Angular 还能工作吗？**
能用，但需要手动触发变更检测（`ChangeDetectorRef.detectChanges()`）。微前端场景常设置 `ngZone: 'noop'`。

**Q: Zone.js 性能影响大吗？**
patch 的数量有限（几十个 API），影响可以忽略。主要性能开销来自 Angular 的全树检查——这也是 OnPush 存在的原因。
