# Vue 进阶面试题

## Q1: Vue3 的响应式原理和 Vue2 的核心差异

### 原理对比

```
Vue2：Object.defineProperty 递归遍历对象每个属性
  问题：增删属性检测不到 → 需要 Vue.set / Vue.delete
       数组下标直接赋值检测不到 → 重写 7 个数组方法
       递归遍历所有属性，初始化性能开销大
       
Vue3：Proxy 代理整个对象
  优势：增删改查全部拦截
       数组天然支持
       懒代理（访问嵌套对象时才递归代理，初始化更快）
```

### Vue3 响应式七种拦截

```ts
const proxy = new Proxy(obj, {
  get(target, key, receiver) {          // 读值：track 收集依赖
    track(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {   // 写值：trigger 触发更新
    const result = Reflect.set(target, key, value, receiver)
    trigger(target, key)
    return result
  },
  deleteProperty(target, key) {         // 删除：delete obj.x 可检测
    const result = Reflect.deleteProperty(target, key)
    trigger(target, key)
    return result
  },
  has(target, key) {                   // in 操作符
    track(target, key)
    return Reflect.has(target, key)
  },
  ownKeys(target) {                    // Object.keys / for...in
    track(target, ITERATE_KEY)
    return Reflect.ownKeys(target)
  },
})

// 额外两个（较少涉及）：
// getPrototypeOf —— Object.getPrototypeOf
// setPrototypeOf —— Object.setPrototypeOf
```

### 完整问题对比

| 场景 | Vue 2 | Vue 3 |
|------|-------|-------|
| 新增属性 | `Vue.set(obj, key, val)` | 直接 `obj.key = val` 即可 |
| 删除属性 | `Vue.delete(obj, key)` | 直接 `delete obj.key` 即可 |
| 数组下标赋值 | `arr[0] = 'x'` 不响应 | 直接 `arr[0] = 'x'` 响应 |
| 数组 length 修改 | 不响应 | 响应 |
| 初始化性能 | 递归所有属性，深度对象慢 | 懒代理，按需递归 |
| Set/Map | 不支持 | 支持 `reactive(new Map())` |
| Object.freeze | 卡死 | 可处理（返回原对象） |

### Vue2 重写的 7 个数组方法

```ts
// Vue2 通过修改数组原型来监听变化
const originalProto = Array.prototype
const arrayProto = Object.create(originalProto)
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  arrayProto[method] = function(...args) {
    const result = originalProto[method].apply(this, args)
    // 通知更新
    notify()
    return result
  }
})
// 被代理的数组的原型指向 arrayProto
```

### Vue3 的懒代理实现

```ts
function reactive(target) {
  // Vue3 不会立即递归，访问时才代理嵌套对象
  return new Proxy(target, {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver)
      // 惰性代理：如果值是对象，访问时才创建 Proxy
      if (isObject(value)) {
        return reactive(value)
      }
      return value
    }
  })
}
```

### 面试追问

- Q: Proxy 为什么不兼容 IE11？→ ES6 特性，无法 polyfill
- Q: Vue3 的 reactive 可以代理原始类型吗？→ 不能，reactive 只接受对象，原始类型用 ref
- Q: Vue2 中数组通过 splice 新增的元素是响应式的吗？→ 是，因为重写的 splice 内部调用了 observe
- Q: 性能对比上 Vue3 的乐观更新是什么？→ 更少的初始化递归 + 编译时标记动态节点，减少运行时开销

## Q2: ref 和 reactive 的底层实现

### 核心实现

```ts
// reactive 直接返回 Proxy
function reactive(target: object) {
  if (!isObject(target)) return target
  return new Proxy(target, reactiveHandler)
}

// ref 的实现
function ref<T>(value: T): Ref<T> {
  if (isRef(value)) return value
  // 对象类型：reactive 包装
  if (isObject(value)) {
    return new RefImpl(reactive(value))
  }
  // 基本类型：getter/setter 实现
  return new RefImpl(value)
}

class RefImpl<T> {
  private _value: T
  public dep: Dep

  constructor(value: T) {
    this._value = toReactive(value) // 对象调用 reactive，原始值不动
  }

  get value() {
    trackRefValue(this) // 收集依赖
    return this._value
  }

  set value(newVal) {
    if (hasChanged(newVal, this._value)) {
      this._value = toReactive(newVal)
      triggerRefValue(this) // 触发更新
    }
  }
}
```

### 自动解包规则

```ts
// 1. 模板中自动解包（编译时处理）
const count = ref(0)
// 模板中直接用 {{ count }}，不需要 {{ count.value }}

// 2. reactive 中嵌套 ref 自动解包
const state = reactive({
  count: ref(0),
  name: ref('Alice')
})
state.count       // number（自动解包，不需要 .value）
state.name        // string

// 3. ref 嵌套 ref
const outer = ref(ref(0))
outer.value       // 0（自动解包一层）

// 4. 数组/集合中不解包
const arr = reactive([ref(0)])
arr[0].value     // 需要 .value（数组元素不解包）
```

### 选择策略

| 场景 | 推荐 | 原因 |
|------|------|------|
| 基本类型 | ref | reactive 不支持基本类型 |
| 对象/数组 | reactive 或 ref | reactive 不需要 .value |
| 需要重新赋值 | ref | `state = newObj` reactive 无法替换整个对象 |
| 从函数返回 | ref | 解构保持响应性 |
| 表单数据 | reactive | 多个字段，不需要 .value |
| 全局状态 | reactive + readonly | 共享状态，防止误改 |

### 陷阱

```ts
// 陷阱 1：直接解构 reactive 丢失响应性
const state = reactive({ count: 0, name: 'Alice' })
const { count, name } = state // 普通变量，不再响应

// 解决：用 toRefs
const { count, name } = toRefs(state) // 变成 ref，保持响应

// 陷阱 2：ref 替换整个 reactive
const state = reactive({ items: [] })
state.items = ref([1, 2, 3]) // ref 会被解包，等价于 state.items = [1, 2, 3]

// 陷阱 3：reactive 重新赋值
let state = reactive({ count: 0 })
state = reactive({ count: 1 }) // 新对象，原响应丢失
```

### 面试追问

- Q: shallowRef 和 shallowReactive 是什么？→ 只做浅层响应，适合大数据结构
- Q: toRef 和 toRefs 的区别？→ toRef 创建单个 ref，toRefs 批量转换所有属性
- Q: isRef / isReactive / isProxy 的作用？→ 类型检查，常用于 composable 内部
- Q: unref 是什么？→ `val = isRef(val) ? val.value : val` 的语法糖
- Q: customRef 怎么用？→ 自定义 getter/setter 逻辑（如防抖）

## Q3: Vue3 的 effect 系统是怎么工作的？

### 三大数据结构

```
targetMap: WeakMap<target, depsMap>
  depsMap: Map<key, dep>
    dep: Set<effect>
```

```ts
// 全局变量
let activeEffect: ReactiveEffect | null = null  // 当前正在执行的 effect
const targetMap = new WeakMap()                 // 存储所有依赖

// effect 函数——响应式系统的核心
function effect(fn: () => void) {
  const _effect = new ReactiveEffect(fn)
  _effect.run() // 立即执行，过程中触发 track
}
```

### track 和 trigger 流程

```ts
// 读取值时调用：收集依赖
function track(target: object, key: string | symbol) {
  if (!activeEffect) return // 不在 effect 中，不收集

  let depsMap = targetMap.get(target)
  if (!depsMap) targetMap.set(target, depsMap = new Map())

  let dep = depsMap.get(key)
  if (!dep) depsMap.set(key, dep = new Set())

  dep.add(activeEffect) // 把当前 effect 加入依赖集合
}

// 写入值时调用：触发更新
function trigger(target: object, key: string | symbol) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const dep = depsMap.get(key)
  if (dep) {
    const effectsToRun = new Set(dep)
    effectsToRun.forEach(effect => effect.run()) // 重新执行所有依赖
  }
}
```

### 完整执行示例

```ts
const count = ref(0)    // 创建 RefImpl，内部有 dep: Set

effect(() => {
  console.log(count.value) // 访问 value → getter → track → activeEffect 加入 dep
})

count.value++            // 赋值 → setter → trigger → 找到 dep 中所有 effect → 重新执行
```

### 多层嵌套

```ts
const user = reactive({ name: 'Alice', profile: { age: 25 } })

effect(() => {
  console.log(user.name)           // 依赖：user 的 name 属性
  console.log(user.profile.age)    // 依赖：user.profile 的 age 属性
})

// 单独修改 name 或 age 都会触发 effect
user.name = 'Bob'     // 触发
user.profile.age = 30 // 触发
user.profile = { age: 35 } // user.profile 被替换，新对象也会被代理
```

### 和 React 的对比

| | Vue（自动追踪） | React（手动声明） |
|--|---------------|-----------------|
| 依赖收集 | 运行时自动 | 手动声明依赖数组 |
| 闭包陷阱 | 无（响应式对象始终是最新值） | 有（useEffect 闭包捕获旧值） |
| 更新粒度 | 精确到每个属性 | 组件级别重新渲染 |
| 记忆化 | 自动（computed） | 手动（useMemo, useCallback） |

### 面试追问

- Q: effect 和 watchEffect 的关系？→ watchEffect 是 effect 的封装，多了停止和清理机制
- Q: 怎么手动停止 effect？→ effect 返回 runner，调用 runner.effect.stop()
- Q: 嵌套 effect 怎么处理？→ 用 effectStack 管理当前执行的 effect 栈
- Q: 为什么 Vue 没有闭包陷阱？→ 因为访问的是代理对象，每次 getter 都返回最新值

## Q4: Vue3 的编译器做了哪些优化？

### 四大编译优化

### 1. 静态提升（Static Hoisting）

```js
// 编译前
<div>
  <span>static</span>
  <p>{{ msg }}</p>
</div>

// 编译后——静态节点提升到 render 外，只创建一次
const _hoisted_1 = createVNode("span", null, "static", PatchFlags.HOISTED)
function render(ctx) {
  return [
    _hoisted_1,                              // 复用，不重新创建
    createVNode("p", null, ctx.msg, PatchFlags.TEXT)
  ]
}
// 如果静态节点包含动态内容，部分提升
// 静态属性 + 动态 children → 静态提升 VNode 结构，只更新 children
```

### 2. PatchFlags

编译时标记动态节点的类型，运行时只检查有 flag 的部分：

```ts
enum PatchFlags {
  TEXT       = 1,   // 只有文本变化
  CLASS      = 2,   // 只有 class 变化
  STYLE      = 4,   // 只有 style 变化
  PROPS      = 8,   // 只有属性变化（非 class/style）
  FULL_PROPS = 16,  // 有动态 key 的属性
  NEED_PATCH = 32,  // 需要完整 diff（自定义组件）
  CHILDREN   = 64,  // 子节点变化
  DYNAMIC_SLOT = 256, // 动态插槽
  HOISTED    = -1,  // 静态（永不比较）
  BAIL       = -2,  // 跳出优化，完整 diff
}
```

```html
<!-- 每个动态节点都有 patchFlag -->
<div :class="active">       <!-- patchFlag: 2 → CLASS -->
<p>{{ msg }}</p>             <!-- patchFlag: 1 → TEXT -->
<img :src="url" :alt="text"> <!-- patchFlag: 8 → PROPS -->
```

### 3. Block Tree

```html
<!-- 模板 -->
<div>
  <span>static</span>
  <p>{{ msg }}</p>
  <div v-if="ok">
    <span>{{ dynamic }}</span>
  </div>
</div>

<!-- 编译为 Block Tree -->
Block(div)
├── static(span)           <!-- 静态，跳过 -->
├── dynamic(p, TEXT)       <!-- 动态节点，记录 -->
└── Block(div, v-if)       <!-- 结构分支，动态节点 -->
    └── dynamic(span, TEXT)
```

Vue3 diff 只遍历 Block 中收集的动态节点，跳过所有静态内容。这让 diff 复杂度从 **O(模板大小)** 降为 **O(动态节点数)**。

### 4. 缓存事件处理函数

```js
// 编译前
<button @click="count++">+</button>

// 编译后——事件处理函数缓存，子组件不会因事件引用变化而重新渲染
function render(ctx, cache) {
  return createVNode("button", {
    onClick: cache[0] || (cache[0] = ($event) => ctx.count++)
  })
}
```

### 优化对比

| 优化 | Vue 2 | Vue 3 |
|------|-------|-------|
| 静态节点 | 每次重新创建 | 创建一次，之后复用 |
| 动态标记 | 无（全量 diff） | PatchFlags 精准标记 |
| 树结构 | 扁平 VNode 树 | Block Tree 结构 |
| 事件缓存 | 每次创建新函数 | 编译时缓存 |
| 渲染性能 | O(模板大小) | O(动态节点数) |

### 面试追问

- Q: 静态提升能提升多少性能？→ 静态内容越多的模板，提升越明显（如表格、长列表）
- Q: PatchFlags 中的 BAIL 是什么？→ 遇到动态 key 或复杂表达式时，退化为完整 diff
- Q: 手写 render 函数能得到这些优化吗？→ 不能，这些优化依赖编译器的模板分析
- Q: v-once 和静态提升有什么关系？→ v-once 是手动标记，静态提升是自动的
- Q: 虚拟 DOM 的优势在 Vue3 中还有多大？→ 由于优化，大部分更新只需要操作动态节点，虚拟 DOM 的跨平台优势仍然成立

## Q5: Vue3 的 Teleport 是什么？

### 基本用法

```html
<template>
  <button @click="open = true">Open Modal</button>

  <!-- 渲染到 body 下，脱离当前组件 DOM 层级 -->
  <Teleport to="body">
    <div class="modal" v-if="open">
      <p>Modal Content</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>
```

### to 的多种写法

```html
<!-- CSS 选择器 -->
<Teleport to="body">...</Teleport>
<Teleport to="#app">...</Teleport>
<Teleport to=".modal-container">...</Teleport>

<!-- DOM 元素（动态绑定） -->
<Teleport :to="targetElement">...</Teleport>
```

### 典型场景

```html
<!-- 场景 1：模态框（避免父组件 overflow:hidden 裁剪） -->
<Teleport to="body">
  <Modal v-if="showModal" />
</Teleport>

<!-- 场景 2：工具提示/弹出层（避免父组件 z-index 层级限制） -->
<Teleport to="body">
  <Tooltip :position="position" :content="content" />
</Teleport>

<!-- 场景 3：全局通知 -->
<Teleport to="body">
  <div class="notifications">
    <Notification v-for="n in notifications" :key="n.id" />
  </div>
</Teleport>

<!-- 场景 4：子组件渲染到父组件指定区域（如表格外部操作按钮） -->
<Teleport :to="`#action-${row.id}`">
  <button @click="edit(row)">Edit</button>
</Teleport>
```

### Teleport + 组件生命周期

```html
<script setup>
import { onMounted, onUnmounted } from 'vue'

// 即使 Teleport 把 DOM 送到 body，组件生命周期仍属于当前组件
onMounted(() => {
  console.log('modal mounted')
  // 父组件被销毁时，Teleport 内容也会被销毁
})
</script>
```

### 多个 Teleport 到同一目标

```html
<Teleport to="body">
  <p>First</p>
</Teleport>
<Teleport to="body">
  <p>Second</p>
</Teleport>
<!-- body 中顺序为 First, Second（按 Teleport 出现顺序追加） -->
```

### 禁用 Teleport

```html
<!-- disabled 为 true 时，内容保留在原位置 -->
<Teleport to="body" :disabled="isMobile">
  <Modal />
</Teleport>
```

### 面试追问

- Q: Teleport 和 Portal 是什么关系？→ 类似概念，React 有 createPortal，Vue 叫 Teleport
- Q: Teleport 在 SSR 中怎么处理？→ SSR 时 disabled（服务端没有 document.body）
- Q: Teleport 的事件冒泡怎么工作？→ 事件按实际 DOM 树冒泡（Teleport 的目标位置），不是按组件树
- Q: Teleport 可以嵌套吗？→ 可以，但要注意 DOM 层级关系
- Q: Teleport 中的 CSS 选择器性能？→ 用 body 或 #app 最安全，避免复杂选择器

## Q6: Suspense 在 Vue3 中怎么用？

### 基本用法

```html
<!-- 异步组件 -->
<script setup>
// 顶层 await 让组件变成异步
const data = await fetchData()
</script>

<template>
  <!-- 异步组件由 Suspense 包裹 -->
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
```

### 多个异步组件

```html
<Suspense>
  <template #default>
    <div>
      <AsyncUser />
      <AsyncPosts />
      <AsyncComments />
    </div>
  </template>
  <template #fallback>
    <Loading />
    <!-- 所有异步组件都加载完才显示 default，任一未加载显示 fallback -->
  </template>
</Suspense>
```

### 异步组件注册

```html
<script setup>
import { defineAsyncComponent } from 'vue'

// 方式 1：基本异步组件
const AsyncComp = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)

// 方式 2：带配置
const AsyncCompWithOptions = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingComponent,    // 加载中显示
  errorComponent: ErrorComponent,        // 加载失败显示
  delay: 200,                             // 延迟显示 loading（避免闪烁）
  timeout: 3000,                          // 超时显示 error
  suspensible: false,                     // 是否受 Suspense 控制
})
</script>
```

### 嵌套 Suspense

```html
<Suspense>
  <template #default>
    <div>
      <AsyncHeader />
      <Suspense>         <!-- 内部 Suspense 处理细节加载 -->
        <AsyncContent />
        <template #fallback>
          <ContentSkeleton />
        </template>
      </Suspense>
    </div>
  </template>
  <template #fallback>
    <FullPageLoading />
    <!-- 只等待外部 Suspense 的直接异步内容 -->
  </template>
</Suspense>
```

### 事件处理

```html
<Suspense @pending="onPending" @resolve="onResolve" @fallback="onFallback">
  <AsyncComponent />
  <template #fallback>
    <Loading />
  </template>
</Suspense>
```

### 实验性状态

Vue 3 中 Suspense 是**实验性**的，API 可能在后续版本变化。常见的使用限制：

```ts
// ❌ Suspense 的 default 插槽不能有 setup 中的同步副作用
// ❌ 不是所有异步场景都支持
// ✅ 推荐场景：defineAsyncComponent + 顶层 await
```

### 面试追问

- Q: Suspense 和 v-if + loading 的区别？→ Suspense 自动管理异步边界，不需要手动维护 loading 状态
- Q: 什么情况下 Suspense 会显示 fallback？→ default 插槽中的异步组件（顶层 await 或 defineAsyncComponent）未完成
- Q: Suspense 在 SSR 中有什么特殊作用？→ 服务端等所有异步完成后再发送 HTML，避免客户端再次请求
- Q: Suspense 的 resolve 事件什么时候触发？→ 所有异步操作完成后
- Q: 为什么 Suspense 还是实验性的？→ 异步边界处理复杂，与 transitions、嵌套等交互有未解决的问题

## Q7: 自定义指令的生命周期

### Vue3 指令钩子

```ts
// 注册全局指令
app.directive('focus', {
  // 指令绑定到元素时
  created(el, binding, vnode) {
    // Vue3 新增：元素创建时
  },
  // 元素挂载到父节点
  mounted(el, binding, vnode, prevVnode) {
    el.focus()
    binding.value // 指令的值
    binding.arg   // 指令的参数，如 v-focus:arg → 'arg'
    binding.modifiers // 修饰符，如 v-focus.prevent → { prevent: true }
  },
  // 元素更新前
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 元素更新后
  updated(el, binding, vnode, prevVnode) {},
  // 元素卸载前
  beforeUnmount(el) {},
  // 元素卸载后
  unmounted(el) {},
})

// 注册局部指令
export default {
  directives: {
    focus: { mounted(el) { el.focus() } }
  }
}
```

### Vue2 vs Vue3 指令钩子对比

| Vue 2 | Vue 3 | 说明 |
|-------|-------|------|
| bind | beforeMount | 元素挂载前 |
| inserted | mounted | 元素挂载后 |
| update | — | Vue2 中元素更新时，Vue3 移除了 |
| componentUpdated | updated | 组件更新后 |
| unbind | unmounted | 解绑时 |
| — | created | Vue3 新增 |
| — | beforeUpdate | Vue3 新增 |
| — | beforeUnmount | Vue3 新增 |

### 实战指令示例

```ts
// v-click-outside：点击外部关闭
const clickOutside = {
  mounted(el, binding) {
    el.__clickOutside = (event: MouseEvent) => {
      if (!el.contains(event.target)) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.__clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__clickOutside)
  }
}

// v-lazy：图片懒加载
const lazy = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.src = binding.value
        observer.unobserve(el)
      }
    })
    observer.observe(el)
    el.__observer = observer
  },
  unmounted(el) {
    el.__observer?.unobserve(el)
  }
}

// v-debounce：按钮防抖
const debounce = {
  mounted(el, binding) {
    const delay = binding.arg || 300
    let timer: number
    el.addEventListener('click', () => {
      clearTimeout(timer)
      timer = setTimeout(() => binding.value(), delay)
    })
  }
}
```

### 面试追问

- Q: 自定义指令和组件有什么区别？→ 指令操作底层 DOM，组件提供结构+逻辑+样式
- Q: 指令中怎么获取组件实例？→ binding.instance 获取指令所在组件实例
- Q: 自定义指令怎么传多个参数？→ 通过对象形式 `v-dir="{ color: 'red', delay: 300 }"`
- Q: 怎么让自定义指令支持修饰符？→ binding.modifiers 获取
- Q: v-memo 指令的作用？→ Vue 3.2+，条件跳过渲染（类似 React.memo）

## Q8: 插槽（Slot）的完整用法

### 三种插槽

```html
<!-- 子组件 BaseLayout -->
<div class="layout">
  <header><slot name="header" /></header>
  <main><slot /></main>              <!-- 默认插槽：未命名的 -->
  <footer><slot name="footer" /></footer>
</div>

<!-- 父组件：填充插槽 -->
<BaseLayout>
  <template #header>
    <h1>Header</h1>
  </template>
  <template #default>
    <p>Main Content</p>
  </template>
  <template #footer>
    <p>Footer</p>
  </template>
</BaseLayout>
```

### 作用域插槽

子组件向父组件传递数据：

```html
<!-- 子组件 List.vue -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    <slot :item="item" :index="index" :isLast="index === items.length - 1" />
  </li>
</ul>

<!-- 父组件：接收插槽数据 -->
<List :items="items">
  <template #default="{ item, index, isLast }">
    <span>{{ index }}.</span>
    <span>{{ item.name }}</span>
    <span v-if="isLast">(last)</span>
  </template>
</List>
```

### 动态插槽名（Vue 3）

```html
<!-- slotName 是动态的 ref 或变量 -->
<BaseLayout>
  <template #[slotName]>
    Dynamic slot content
  </template>
</BaseLayout>
```

### 插槽的默认内容

```html
<!-- 子组件：提供默认内容 -->
<button type="submit">
  <slot>Submit</slot> <!-- 如果父组件没提供内容，显示 "Submit" -->
</button>
```

### 插槽传值配合解构

```html
<!-- 子 -->
<slot :user="user" :status="status" />
<!-- 父：重命名 + 默认值 -->
<template #default="{ user: person, status = 'unknown' }">
  {{ person.name }} - {{ status }}
</template>
```

### render 函数中的插槽

```ts
// h 函数中使用插槽
import { h } from 'vue'
const Layout = (props, { slots }) => h('div', [
  slots.header?.(),    // 命名插槽
  slots.default?.(),   // 默认插槽
])

// 父组件使用
h(Layout, null, {
  header: () => h('h1', 'Header'),
  default: () => h('p', 'Content'),
})
```

### 面试追问

- Q: 插槽和 props 的区别？→ props 传数据，插槽传模板内容
- Q: 作用域插槽和普通插槽谁性能好？→ 普通插槽好，作用域插槽有额外的函数调用开销
- Q: 嵌套插槽怎么处理？→ 可以将插槽内容转发到更深层子组件
- Q: 插槽的编译时优化？→ Vue3 中插槽编译为函数，父组件更新时不重新执行子组件
- Q: 动态插槽名的边界情况？→ 只支持字符串类型，不支持表达式计算结果（会报错）

## Q9: 动态组件怎么用？

### 基本用法

```html
<component :is="currentComponent" />
```

```html
<script setup>
import { shallowRef } from 'vue'
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

const currentComponent = shallowRef(Home)

const tabs = [
  { name: 'Home', comp: Home },
  { name: 'About', comp: About },
  { name: 'Contact', comp: Contact },
]
</script>

<template>
  <button v-for="tab in tabs" :key="tab.name" @click="currentComponent = tab.comp">
    {{ tab.name }}
  </button>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>
```

### 字符串形式 vs 组件对象

```ts
// 方式 1：注册为全局组件，用字符串名
app.component('my-component', MyComponent)
// 模板：<component :is="'my-component'" />

// 方式 2：局部注册，用字符串名（Options API）
export default {
  components: { MyComponent },
  template: '<component :is="\'MyComponent\'" />'
}

// 方式 3（Vue3 推荐）：直接传组件对象
<script setup>
import MyComponent from './MyComponent.vue'
</script>
<template>
  <component :is="MyComponent" />
</template>
```

### 动态组件 + KeepAlive

```html
<KeepAlive :include="['Home', 'About']" :max="10">
  <component :is="currentComponent" />
</KeepAlive>
```

### 面试追问

- Q: 动态组件切换时生命周期怎么走？→ 不缓存的每次销毁重建，缓存的走 activated/deactivated
- Q: component :is 可以传入异步组件吗？→ 可以，配合 defineAsyncComponent
- Q: 动态组件和 v-if 多个组件的区别？→ 动态组件更简洁，逻辑集中

## Q10: KeepAlive 是什么？

### 基本用法

```html
<KeepAlive>
  <component :is="currentTab" />
</KeepAlive>
```

缓存组件状态，切换回来时**不重新创建**。被缓存的组件多了两个生命周期：`onActivated` / `onDeactivated`。

### 生命周期变化

```
首次进入：mounted → activated
切走：deactivated
切回：activated（不重新 mounted）
被销毁：beforeUnmount → unmounted
```

```ts
<script setup>
import { onMounted, onActivated, onDeactivated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('只执行一次——首次创建')
})
onActivated(() => {
  console.log('每次激活执行——恢复状态、重新请求数据')
})
onDeactivated(() => {
  console.log('每次切走执行——保存状态、暂停计时器')
})
onUnmounted(() => {
  console.log('被销毁时执行——KeepAlive 也包裹不住时才触发')
})
</script>
```

### 配置属性

```html
<!-- include：只有名称匹配的才缓存（支持字符串、正则、数组） -->
<KeepAlive :include="['Home', 'About']">
  <component :is="currentTab" />
</KeepAlive>

<!-- exclude：匹配的不缓存 -->
<KeepAlive :exclude="['Contact']">
  <component :is="currentTab" />
</KeepAlive>

<!-- max：最多缓存实例数，超过时淘汰最久未访问的 -->
<KeepAlive :max="10">
  <component :is="currentTab" />
</KeepAlive>
```

### 配合路由

```html
<!-- 方式 1：直接在 router-view 外层 -->
<router-view v-slot="{ Component }">
  <keep-alive :include="cachePages">
    <component :is="Component" />
  </keep-alive>
</router-view>

<!-- 方式 2：路由 meta 控制 -->
<router-view v-slot="{ Component, route }">
  <keep-alive>
    <component :is="Component" v-if="route.meta.keepAlive" />
  </keep-alive>
  <component :is="Component" v-if="!route.meta.keepAlive" />
</router-view>
```

```ts
// 路由配置
const routes = [
  { path: '/list', component: List, meta: { keepAlive: true } },
  { path: '/detail/:id', component: Detail, meta: { keepAlive: false } },
]
```

### 面试追问

- Q: KeepAlive 缓存的是组件实例还是 VNode？→ 缓存的是 VNode 和组件实例
- Q: 被 KeepAlive 缓存的组件，切换的时机从哪里获取最新数据？→ 在 onActivated 中获取
- Q: KeepAlive 的实现原理？→ LRU 缓存算法，内部用 Map 维护缓存 key → VNode
- Q: KeepAlive 在 SSR 中怎么处理？→ SSR 中 KeepAlive 被禁用（无状态缓存）

## Q11: Vue 的 diff 算法和 React 有什么不同？

### Vue3 双端 diff

```
Vue3：双端 diff
  → 同时从新旧列表的头尾向中间对比
  → 4 个指针：newStart, newEnd, oldStart, oldEnd
  → 每次对比两头，找到可复用节点直接移动
  → 适合稳定列表 + 首尾插入/删除
  
React：右端优先（单端 diff）
  → 从左到右遍历新列表，用 key 在旧列表中找
  → 找到后移动到对应位置（需要 Fiber 链表支持）
  → 适合列表整体变化不大的场景
```

### 详细对比

| 维度 | Vue 2 | Vue 3 | React |
|------|-------|-------|-------|
| 算法 | 双端 diff | 双端 diff + 最长递增子序列 | 单端 diff（Fiber reconcile） |
| 遍历方式 | 头尾向中间 | 头尾向中间 | 从左到右 |
| 移动优化 | 首尾移动高效 | 最长递增子序列减少移动 | Fiber 链表移动 |
| 列表尾部插入 | 高效（尾部直接复用） | 高效 | 需要遍历 |
| 节点复用 | 同层比较 | 同层比较 + key | 同层比较 + key |
| Fragment | 不支持 | 支持多个根节点 |

### 最长递增子序列优化（Vue3）

```ts
// Vue3 在乱序时使用最长递增子序列（LIS）算法
// 找出不需要移动的最长子序列，只移动其他节点
// 例子：旧 [A, B, C, D, E] → 新 [C, D, A, E, B]
// LIS = [C, D, E]（索引 2,3,4 不变）
// 只需要移动 A 和 B，减少 DOM 操作
```

### 性能对比场景

| 操作 | Vue 2 | Vue 3 | React |
|------|-------|-------|-------|
| 尾部插入 | O(1) | O(1) | O(n) |
| 头部插入 | O(n) | O(1) | O(n) |
| 列表反转 | O(n²) | O(n) | O(n) |
| 简单 update | O(n) | O(动态节点数) | O(n) |

### 面试追问

- Q: 为什么 Vue3 要引入最长递增子序列？→ 减少 DOM 移动次数，提高 patch 效率
- Q: 没有 key 时 diff 怎么工作？→ 按索引就地复用，只更新内容，不移动 DOM
- Q: patchFlag 和 diff 有什么关系？→ patchFlag 标记静态节点，diff 直接跳过
- Q: 双端 diff 为什么比单端好？→ 头尾操作不需要遍历整个列表找节点
- Q: diff 和 patch 有什么区别？→ diff 是比较差异，patch 是根据 diff 结果更新 DOM

## Q12: Vue 的异步组件和代码分割

### 基本用法

```html
<script setup>
import { defineAsyncComponent } from 'vue'

const HeavyComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
</script>

<template>
  <Suspense>
    <template #default>
      <HeavyComponent />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
```

### 完整配置

```ts
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./HeavyComponent.vue'),

  // 加载中显示的组件
  loadingComponent: LoadingComponent,

  // 加载失败显示的组件
  errorComponent: ErrorComponent,

  // 显示 loadingComponent 前的延迟（避免闪烁）
  delay: 200,

  // 超时时间（毫秒），超时显示 error
  timeout: 3000,

  // 是否可重试
  onError: (error, retry, fail, attempts) => {
    if (attempts < 3) {
      retry() // 重试
    } else {
      fail()  // 放弃
    }
  },

  // 是否受 Suspense 控制
  suspensible: false,
})
```

### 路由懒加载

```ts
// 路由级别代码分割
const routes = [
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin.vue'),
    // Webpack 中会单独打包为 Admin.[hash].js
    // Vite 自动 code splitting
  },
]

// 命名 chunk（Webpack）
const Admin = () => import(/* webpackChunkName: "admin" */ '@/views/Admin.vue')
```

### 预加载策略

```ts
// 预加载——用户 hover 时提前加载
const Admin = defineAsyncComponent(() => import('./Admin.vue'))
const adminLoader = () => import('./Admin.vue')

// 在适当时机预取
onMounted(() => {
  // 页面加载完成后再预取其他页面
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = '/assets/Admin.[hash].js'
  document.head.appendChild(link)
})
```

```html
<!-- Vite 支持注释预加载 -->
<template>
  <button @mouseenter="preloadAdmin">Admin</button>
</template>
<script setup>
function preloadAdmin() {
  import('./Admin.vue') // 实际加载，缓存起来
}
</script>
```

### 面试追问

- Q: defineAsyncComponent 和直接 import() 的区别？→ 前者是 Vue 组件包装器，处理加载/错误状态
- Q: 路由懒加载的原理？→ Webpack/Vite 遇到动态 import() 自动分割代码为单独 chunk
- Q: 代码分割到什么粒度合适？→ 按路由分割是基本要求，大型组件也可单独分割
- Q: 预加载和懒加载的关系？→ 懒加载是"需要时加载"，预加载是"提前加载但不用"

## Q13: Vue 的 $refs 是什么？

### 基本用法

```html
<template>
  <input ref="inputRef" placeholder="focus me" />
  <Child ref="childRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inputRef = ref(null)
const childRef = ref(null)

onMounted(() => {
  // DOM 元素：直接操作
  inputRef.value?.focus()

  // 组件：访问子组件实例（需子组件 expose）
  childRef.value?.reset()
})
</script>
```

### v-for 中的 refs

```html
<template>
  <li v-for="item in list" :key="item.id" :ref="setItemRef">
    {{ item.name }}
  </li>
</template>

<script setup>
const itemRefs = ref([])
function setItemRef(el) {
  if (el) itemRefs.value.push(el)
}
</script>
```

### 函数式 ref

```html
<input :ref="(el) => { /* el 为 DOM 元素或组件实例 */ }" />
```

### 子组件 expose（Vue 3）

```html
<!-- 子组件 -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
function reset() { count.value = 0 }

// 只暴露 reset，count 不暴露
defineExpose({ reset })
</script>

<!-- 父组件访问 -->
<script setup>
const childRef = ref(null)
onMounted(() => {
  childRef.value?.reset()     // ✅ 可以
  console.log(childRef.value?.count) // undefined，未暴露
})
</script>
```

### $refs 使用场景

| 场景 | 推荐 | 说明 |
|------|------|------|
| 聚焦输入 | ref | 直接调 DOM focus() |
| 测量元素尺寸 | ref | getBoundingClientRect |
| 集成第三方库 | ref | 如 Chart.js 需要 DOM 引用 |
| 调子组件方法 | ref + expose | 有限场景（表单重置等） |
| 获取多个 DOM | 函数式 ref | v-for 中 |

### 面试追问

- Q: ref 在什么生命周期可用？→ onMounted 之后，template 中拿到的是 proxy
- Q: 为什么 script setup 中组件默认不暴露内部？→ 封装性，不暴露内部实现
- Q: $refs 和 Pinia 有什么区别？→ refs 是直接引用实例，Pinia 是共享状态
- Q: refs 在 v-for 中怎么获取？→ 函数式 ref 或 ref 数组

## Q14: Vue 2 的 Object.defineProperty 有什么缺陷？

### 五大缺陷

```ts
// 1. 新增/删除属性检测不到
const vm = new Vue({ data: { obj: {} } })
vm.obj.newProp = 1  // 不触发更新
delete vm.obj.prop   // 不触发更新
// 解决：Vue.set(vm.obj, 'newProp', 1) / Vue.delete(vm.obj, 'prop')

// 2. 数组下标赋值检测不到
const vm = new Vue({ data: { arr: ['a', 'b'] } })
vm.arr[0] = 'new'    // 不触发更新
vm.arr.length = 0    // 不触发更新
// 解决：Vue.set(vm.arr, 0, 'new') 或 vm.arr.splice(0, 1, 'new')

// 3. 递归遍历所有属性，初始化性能开销大
const largeData = { /* 深度嵌套的巨量数据 */ }
// Vue2 会递归 Object.defineProperty 所有属性
// 即使有些属性在运行时从未被访问

// 4. Object.freeze 的对象不能代理
const frozen = Object.freeze({ value: 1 })
// Object.defineProperty 无法修改 frozen 的属性描述符

// 5. Set / Map 不支持
const map = new Map()
map.set('key', 'value') // Vue2 检测不到
```

### 重写的数组方法

```ts
// Vue2 通过修改数组原型实现部分响应
const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
methods.forEach(method => {
  const original = Array.prototype[method]
  Object.defineProperty(arrayProto, method, {
    value: function(...args) {
      const result = original.apply(this, args)
      let inserted
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args
          break
        case 'splice':
          inserted = args.slice(2)
          break
      }
      if (inserted) observeArray(inserted) // 新插入的值也需要响应式
      notifyUpdate()
      return result
    }
  })
})
```

### 受影响的功能

| 操作 | Vue 2 | Vue 3 |
|------|-------|-------|
| `obj.newKey = val` | 不响应 | 响应 |
| `delete obj.key` | 不响应 | 响应 |
| `arr[index] = val` | 不响应 | 响应 |
| `arr.length = n` | 不响应 | 响应 |
| `new Map().set(k, v)` | 不响应 | 响应 |
| `new Set().add(v)` | 不响应 | 响应 |
| 深度嵌套对象 | 递归定义，性能差 | 懒代理，按需访问 |

### Vue2 的变通方案

```ts
// 方案 1：Vue.set / Vue.delete（全局 API）
Vue.set(this.obj, 'key', value)
Vue.delete(this.obj, 'key')

// 方案 2：$set / $delete（实例方法）
this.$set(this.obj, 'key', value)

// 方案 3：数组专用——splice
this.arr.splice(index, 1, newValue)

// 方案 4：重新赋值整个属性
this.obj = { ...this.obj, newKey: value }
```

### 面试追问

- Q: Object.defineProperty 能监听数组变化吗？→ 能监听已有元素的 getter/setter，但新增下标和 length 不能
- Q: Vue3 中 Object.defineProperty 还有用吗？→ 有，响应式 API 中仍用于 ref 基本类型的 getter/setter
- Q: Vue2 为什么不直接用 Proxy？→ 发布时 Proxy 不支持 polyfill，IE11 不支持
- Q: Object.freeze 能优化 Vue2 性能吗？→ 能，冷冻的数据不进行响应式处理，减少初始化开销
- Q: Vue2 的缺陷在实际开发中踩过哪些坑？→ 最常见的就是数组下标赋值不更新、对象新增属性不更新
