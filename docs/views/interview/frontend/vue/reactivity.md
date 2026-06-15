# Vue3 响应式原理

## 一句话

Vue3 用 **Proxy** 代理整个对象，在 get 时收集依赖（track），在 set 时触发更新（trigger）。

## Vue2 的痛点

Vue2 用 `Object.defineProperty`，问题是：
- 新增/删除属性检测不到 → 需要 `Vue.set()` / `Vue.delete()`
- 数组下标修改检测不到 → 需要重写 `push/pop/splice`
- 一次只能代理一个属性

## Vue3 Proxy

```ts
const proxy = new Proxy(obj, {
  get(target, key, receiver) {
    track(target, key)          // 收集依赖
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    trigger(target, key)         // 触发更新
    return result
  },
  deleteProperty(target, key) {
    trigger(target, key)
    return Reflect.deleteProperty(target, key)
  },
})
```

优势：
- **全部拦截**：增删改查全部能检测
- **数组天然支持**：下标修改、length 变化都能触发
- **懒代理**：嵌套对象在访问时才递归代理

## ref vs reactive

```ts
reactive({ count: 0 })     // 只能代理对象
ref(0)                      // 包装基本类型，底层也是 reactive({ value: x })
```

ref 的本质是一个类，get value 时 track，set value 时 trigger。

## 依赖追踪系统

```
targetMap
  ┌──────┐   ┌──────────────┐
  │ 对象A │ → │ Map<key, Set>│
  │      │   │ "count"→[fn1]│
  │      │   │ "name" →[fn2]│
  └──────┘   └──────────────┘
```

- `track()` — 把当前执行的 effect 加到 key 的 Set
- `trigger()` — 遍历 key 的 Set，逐个执行 effect

## 和 React 的对比

| | Vue3 | React |
|--|------|-------|
| 依赖追踪 | **自动**（运行时 effect 系统） | **手动声明**（deps 数组） |
| 数据修改 | 可变（直接改属性） | 不可变（返回新对象） |
| 触发更新 | `ref.value = x` → 精确更新 | `setState(x)` → 整个组件重渲染 |

## 面试追问

**Q: 为什么 Vue3 不需要不可变数据？**
Proxy 在 set 时自动触发更新，不需要新引用。React 靠引用对比判断变化，必须不可变。

**Q: watch 的 deep: true 性能影响大吗？**
深度递归遍历整个对象，大数据集需要注意。精确监听具体属性会更好。
