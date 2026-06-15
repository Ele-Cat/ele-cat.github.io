# RxJS 和 Signals 如何选择？

## 一句话

**RxJS** 适合事件流（HTTP、WebSocket、用户交互流），**Signal** 适合组件状态。在 Angular 17+ 中，组件状态推荐用 Signal，跨组件事件用 RxJS。

## 对比

```
RxJS Observable          Angular Signal
─────────────────        ──────────────
拉取式（push）             拉取式（pull）
多值（流）                 单值（随时间变化）
需要 unsubscribe          自动跟踪依赖
管道操作符（pipe）         computed 派生
适合：事件流、HTTP、WS    适合：组件状态
```

## Signal 的 API

```ts
const count = signal(0)

// 读
console.log(count())  // 0

// 写
count.set(1)
count.update(v => v + 1)

// 派生
const doubled = computed(() => count() * 2)  // 懒计算 + 缓存

// 副作用
effect(() => {
  localStorage.setItem('key', JSON.stringify(todos()))
})
```

和 Vue3 的 `ref` + `computed` + `watch` 几乎一一对应。

## model — 双向绑定

```ts
readonly filter = model.required<Filter>()
```

等价于 Vue3 的 `defineModel` = `input` + `output` 语法糖。

## 面试追问

**Q: Signals 会完全取代 RxJS 吗？**
不会。RxJS 的 Observable 天然适合处理事件流（debounce、merge、combineLatest 等操作符），Signal 没有这些能力，两个互补。

**Q: Signal 和 Zone.js 是什么关系？**
Signal 可以 **不依赖 Zone.js** 触发变更检测——Angular 17+ 用 Signal 后，Zoneless Angular 成为可能。
