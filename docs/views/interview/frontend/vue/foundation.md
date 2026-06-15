# Vue 基础面试题

## Q1: Vue 实例挂载过程发生了什么？

### 完整挂载流程

```
创建 Vue 实例
  → init（初始化生命周期、事件、data、computed、watch）
  → 数据响应式处理（Observer）
  → 模板编译（编译/运行时）
  → mount（挂载到 DOM）
  → render → createElement → 虚拟 DOM
  → patch → diff → 更新真实 DOM
  → mounted 生命周期
```

### 各阶段详解

| 阶段 | 操作 | 细节 |
|------|------|------|
| init | 初始化选项 | 初始化生命周期钩子、事件系统、data、props、computed、watch |
| Observer | 响应式处理 | 遍历 data 属性，Vue2 用 Object.defineProperty，Vue3 用 Proxy 递归代理 |
| 编译 | 模板 → render | 解析模板为 AST → 优化（标记静态节点）→ 生成 render 函数 |
| mount | 挂载 | 创建 $el，替换 el 占位符 |
| render | 执行 render | 调用 render() 生成虚拟 DOM 树 |
| patch | 对比更新 | 首次渲染是直接创建，更新时走 diff 算法对比新旧 VNode |

### 编译方式选择

```ts
// 方式 1：完整版（运行时 + 编译器）—— 包含 template 编译
import { createApp } from 'vue/dist/vue.esm-bundler'
const app = createApp({ template: '<div>{{ msg }}</div>' })

// 方式 2：运行时版本（推荐）—— 预编译，体积小 30%
// 使用 .vue 文件中的 <template> 会在构建时由 vue-loader 预编译
import { createApp } from 'vue'
createApp(App).mount('#app')

// 方式 3：手动 render 函数
import { h } from 'vue'
createApp({ render() { return h('div', 'hello') } }).mount('#app')
```

### 挂载性能对比

| 方式 | 体积 | 运行时开销 | 适用场景 |
|------|------|-----------|---------|
| 完整版 | 大（含编译器） | 模板编译在浏览器执行 | CDN 引入、无构建步骤 |
| 运行时版 | 小 | 编译提前到构建时 | 工程化项目（Vite/Webpack） |
| render 函数 | 最小 | 无编译 | 动态渲染、JSX 场景 |

### 面试追问

- Q: mount 之前能访问 DOM 吗？→ 不能，$el 在 mounted 之后才存在
- Q: 同一个 Vue 实例可以 mount 多次？→ 不能，每个实例只挂载一次
- Q: 虚拟 DOM 是在 mount 阶段创建的吗？→ 是在 render 阶段创建的
- Q: runtime-only 版本挂载流程有什么不同？→ 跳过编译阶段，直接执行 render

## Q2: Vue 的模板语法有哪些？

### 完整分类

```html
<template>
  <!-- === 插值 === -->
  <p>{{ message }}</p>                          <!-- 文本插值，自动 HTML 转义 -->
  <p v-text="message"></p>                      <!-- 等价于 {{ message }}，覆盖子节点 -->
  <p v-html="rawHtml"></p>                     <!-- 渲染 HTML，警惕 XSS -->

  <!-- === 属性绑定 === -->
  <img :src="url" />                            <!-- v-bind 缩写 -->
  <div :class="{ active: isActive }"></div>     <!-- 对象语法 class -->
  <div :class="[baseClass, activeClass]"></div> <!-- 数组语法 class -->
  <div :style="{ color: activeColor, fontSize: size + 'px' }"></div> <!-- style 绑定 -->

  <!-- === 事件绑定 === -->
  <button @click="handleClick">Click</button>           <!-- v-on 缩写 -->
  <button @click="handle($event, 1)">Param</button>     <!-- 传参 + $event -->
  <button @click="count++">内联</button>                <!-- 内联语句 -->

  <!-- === 条件渲染 === -->
  <p v-if="ok">条件</p>
  <p v-else-if="maybe">可能</p>
  <p v-else>否则</p>

  <!-- === 列表渲染 === -->
  <ul><li v-for="(item, index) in list" :key="item.id">{{ index }}: {{ item }}</li></ul>
  <li v-for="(value, key) in obj" :key="key">{{ key }}: {{ value }}</li>
  <li v-for="n in 10">{{ n }}</li>                      <!-- 数字范围 1~10 -->

  <!-- === 双向绑定 === -->
  <input v-model="text" />
  <textarea v-model="desc"></textarea>
  <select v-model="selected">
    <option v-for="o in options" :key="o.id">{{ o.name }}</option>
  </select>

  <!-- === 显示控制 === -->
  <div v-show="visible">显示</div>

  <!-- === 一次性渲染 === -->
  <div v-once>{{ msg }}</div>                     <!-- 只渲染一次，不再更新 -->
</template>
```

### 动态参数

```html
<!-- 动态属性名 -->
<div :[attributeName]="value"></div>

<!-- 动态事件名 -->
<button @[eventName]="handler"></button>

<!-- 注意：动态参数必须是字符串，null 会移除绑定 -->
```

### 模板中的 JavaScript 表达式

```html
<!-- 支持单个表达式 -->
<p>{{ number + 1 }}</p>
<p>{{ ok ? 'YES' : 'NO' }}</p>
<p>{{ message.split('').reverse().join('') }}</p>

<!-- 不支持语句和声明 -->
<!-- var a = 1 错误 -->
<!-- if (ok) return 'yes' 错误 -->
```

### 面试追问

- Q: v-html 有什么安全风险？→ XSS 攻击，永远不要用于用户输入的内容，可用 DOMPurify 清理
- Q: &#123;&#123; &#125;&#125; 闪烁怎么处理？→ 用 v-cloak + CSS `[v-cloak] { display: none }`
- Q: 模板中能访问全局变量吗？→ 不能直接访问 window，只能访问有限的全局白名单（如 Math, Date, JSON）

## Q3: v-if 和 v-show 的区别？

### 核心区别

| | v-if | v-show |
|--|------|-------|
| 渲染时机 | 条件为真才渲染 DOM | 首次就渲染，切换 CSS display |
| 切换代价 | 销毁/重建 DOM 和组件，运行完整生命周期 | 只切换 display:none ↔ block/其他 |
| 初始化代价 | 小（条件假时完全不渲染） | 大（即使隐藏也创建 DOM，执行 mounted） |
| 适用场景 | 运行时极少切换（权限控制） | 频繁切换（Tab 切换、折叠面板） |
| 编译优化 | Vue3 下条件不变时直接跳过 | 无特殊优化 |
| v-else 支持 | ✅ 配合 v-if 链 | ❌ 不支持 |
| template 支持 | ✅ 可用 `<template v-if>` | ❌ 只能用于单个元素 |

### 原理层面

v-if 是真正的条件渲染——模板编译时生成分支函数。条件变化时触发卸载/挂载流程，涉及组件的 `beforeUnmount`/`unmounted` 或 `mounted` 生命周期。子组件会被完全销毁和重建。

v-show 只是 CSS 控制——`display: none`。元素始终保留在 DOM 中。组件始终是 mounted 状态。

### 使用建议

| 推荐 v-if | 推荐 v-show |
|-----------|-------------|
| 权限控制（管理员/普通用户面板） | Tab 切换 |
| 条件在首次渲染后不再变化 | 折叠/展开面板 |
| 包含大量子组件的条件块 | 轻量条件块（一个按钮或图标） |
| 首次加载性能敏感 | 极端频繁切换（毫秒级） |

### 陷阱与注意

```html
<!-- 陷阱 1：v-show 在 template 上无效 -->
<template v-show="ok">    <!-- 不会生效 -->
  <p>content</p>
</template>

<!-- 解决方法：用包裹元素 -->
<div v-show="ok">
  <p>content</p>
</div>

<!-- 陷阱 2：v-show 的 display 影响 -->
<div v-show="ok" style="display: inline-flex"> <!-- v-show 会覆盖为 display: none -->
```

### 面试追问

- Q: v-if 和 v-for 同时用会怎样？→ Vue2 中 v-for 优先级更高，Vue3 中 v-if 优先级更高
- Q: v-show 对 input 元素的影响？→ 隐藏时 input 仍然存在于 DOM，表单验证仍然运行，需要额外处理 disabled
- Q: v-show 能不能用在组件上？→ 可以，但组件始终被创建（mounted），只是隐藏显示
- Q: 怎么实现类似 v-show 但用 visibility:hidden？→ 自定义指令实现
- Q: 频繁切换时 v-show 真的比 v-if 快吗？→ 切换本身快（无 DOM 操作），但要注意重排/重绘成本

## Q4: v-for 为什么需要 key？

### 核心原理

Vue 的虚拟 DOM diff 算法通过 key 判断节点是否可复用。没有 key 时采用"就地复用"策略（按索引对比），会导致状态错乱。

```html
<!-- 不加 key 的问题 -->
<li v-for="item in items">
  <input v-model="item.text" />
</li>
<!-- 当 items 从 [A, B] 变为 [B, A] 时（逆转），输入框内容不会跟随 -->
```

### Key 的最佳选择

```html
<!-- 推荐：用唯一 ID -->
<li v-for="item in items" :key="item.id">

<!-- 不推荐：用 index（数组变化后 index 错位） -->
<li v-for="(item, index) in items" :key="index">

<!-- 危险：用随机数（每次渲染都是新 key，全部销毁重建） -->
<li v-for="item in items" :key="Math.random()">
```

### 各种 key 的性能对比

| Key 类型 | 稳定性 | 复用率 | 影响 |
|----------|--------|--------|------|
| 唯一 ID | 稳定 | 最高 | 最佳实践 |
| index | 不稳定（增删时） | 中等 | 可能导致输入错位 |
| 随机数/Math.random | 不稳定 | 最低 | 全部重建，性能最差 |
| 联合键（index + id） | 较稳定 | 高 | 特殊场景可用 |

### 不传 key 时的行为

```ts
// Vue 默认行为：就地复用
// 新旧列表相同位置如果 tag 一致，直接 patch 内容，不移除/移动 DOM
// 后果：列表排序或错位时，输入框内容不会跟随数据一起移动
```

### 面试追问

- Q: key 用 index 什么时候没问题？→ 列表是静态数据、不排序、不增删、不用作表单输入时
- Q: key 能不能用组件本身的属性？→ 能，只要是稳定且唯一的
- Q: 同层级两个相同 tag 元素切换，key 有什么用？→ 用不同 key 强制替换（如 Transition 动画）
- Q: React 和 Vue 的 key 机制有什么不同？→ 原理一致，但 Vue 的双端 diff 在移动节点时策略不同

## Q5: 事件修饰符有哪些？

### 完整事件修饰符

```html
<!-- === 通用修饰符 === -->
<button @click.stop="handleClick">        <!-- 阻止冒泡（stopPropagation） -->
<form @submit.prevent="onSubmit">          <!-- 阻止默认行为（preventDefault） -->
<button @click.once="handleClick">         <!-- 只触发一次，触发后自动解绑 -->
<div @click.capture="handleClick">         <!-- 捕获模式触发 -->
<div @click.self="handleClick">            <!-- 只有 event.target 是自身才触发 -->
<div @click.self.stop.prevent="handle">    <!-- 可串联 -->

<!-- === 按键修饰符 === -->
<input @keyup.enter="submit" />            <!-- 回车键 -->
<input @keyup.esc="cancel" />              <!-- Esc 键 -->
<input @keyup.tab="next" />                <!-- Tab 键 -->
<input @keyup.delete="clear" />            <!-- 删除/退格键 -->
<input @keyup.space="select" />            <!-- 空格键 -->
<input @keyup.up="prev" />                 <!-- 方向键 -->
<input @keyup.a="handleA" />               <!-- 具体字母键 -->

<!-- === 鼠标修饰符 === -->
<button @click.left="handle">              <!-- 左键 -->
<button @click.right="handleContext">      <!-- 右键（弹出菜单） -->
<button @click.middle="handle">            <!-- 中键 -->

<!-- === 系统修饰符 === -->
<div @click.ctrl="handle">                 <!-- Ctrl + 点击 -->
<div @click.shift="handle">                <!-- Shift + 点击 -->
<div @click.alt="handle">                  <!-- Alt + 点击 -->
<div @click.meta="handle">                 <!-- Meta/Command + 点击 -->

<!-- === exact 修饰符 === -->
<button @click.ctrl.exact="handle">        <!-- 只有 Ctrl 被按下，无其他修饰键 -->
```

### 修饰符串联

```html
<!-- 多个修饰符顺序有含义：从左到右 -->
<button @click.stop.prevent="handle">
<!-- 等价于：先 stopPropagation，再 preventDefault -->

<!-- 按键修饰符 + 系统修饰符 -->
<input @keyup.ctrl.enter="submit" />       <!-- Ctrl + Enter -->
```

### 自定义事件无原生修饰符

```html
<!-- 组件上不能用原生修饰符 -->
<Child @click.stop="handle" />             <!-- 无效，自定义事件没有 stop -->

<!-- 组件上要用修饰符，需在组件内对原生事件绑定 -->
<!-- 子组件：--><button @click.stop="$emit('click')">
<!-- 父组件：--><Child @click="handle" />
```

### 面试追问

- Q: .passive 修饰符是什么？→ `@touchmove.passive` 告诉浏览器不阻止默认行为，优化滚动性能
- Q: .native 修饰符的作用？→ Vue2 中在组件上监听原生 DOM 事件（Vue3 已移除，直接写在组件根元素）
- Q: 修饰符顺序影响执行顺序吗？→ 影响，`.self.stop` 和 `.stop.self` 执行顺序不同
- Q: 怎么自定义修饰符？→ 通过 v-model 的自定义修饰符功能

## Q6: v-model 的本质是什么？

### 基本用法

```html
<!-- 语法糖 -->
<input v-model="text" />

<!-- 本质展开（input 元素）：绑定 value + 监听 input 事件 -->
<input :value="text" @input="text = $event.target.value" />

<!-- 组件上（Vue 3）：prop + emit -->
<Child v-model="value" />
<!-- 展开为 -->
<Child :modelValue="value" @update:modelValue="value = $event" />
```

### Vue 2 vs Vue 3 差异

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 默认 prop | `value` | `modelValue` |
| 默认 event | `input` | `update:modelValue` |
| .sync | `<Child :foo.sync="x" />` | 用多个 `v-model:foo="x"` |
| 多个绑定 | ❌ 只能一个 v-model | ✅ `v-model:title="x" v-model:content="y"` |
| 修饰符 | `.lazy` / `.number` / `.trim` | 同上 + 自定义修饰符 |
| 自定义 model | `model: { prop: 'checked', event: 'change' }` | 直接 `v-model:checked` |

### 不同表单元素的展开

```html
<!-- text / textarea -->
<input v-model="text" />
<input :value="text" @input="text = $event.target.value" />

<!-- checkbox -->
<input type="checkbox" v-model="checked" />
<input type="checkbox" :checked="checked" @change="checked = $event.target.checked" />

<!-- radio -->
<input type="radio" v-model="selected" value="a" />
<input type="radio" :checked="selected === 'a'" @change="selected = 'a'" />

<!-- select -->
<select v-model="selected">
  <option value="a">A</option>
</select>
<select :value="selected" @change="selected = $event.target.value">
  <option value="a">A</option>
</select>
```

### 多个 v-model（Vue 3）

```html
<Child v-model:title="title" v-model:content="content" />
<!-- 展开为 -->
<Child :title="title" @update:title="title = $event"
       :content="content" @update:content="content = $event" />
```

### defineModel（Vue 3.4+）

```html
<script setup>
// 子组件——等效于 defineProps + defineEmits 的语法糖
const model = defineModel({ type: String, default: '' })
model.value = 'new' // 自动触发 update:modelValue
</script>
<template>
  <input v-model="model" />
</template>
```

### 自定义修饰符

```html
<Child v-model.capitalize="text" />
<!-- 子中获取 -->
<script setup>
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) return value.charAt(0).toUpperCase() + value.slice(1)
    return value
  }
})
</script>
```

### 陷阱与注意

```html
<!-- 陷阱 1：v-model 和 computed setter -->
<input v-model="fullName" />
<script setup>
// 需要提供 getter + setter
const fullName = computed({
  get: () => firstName.value + ' ' + lastName.value,
  set: (val) => { [firstName.value, lastName.value] = val.split(' ') }
})
</script>

<!-- 陷阱 2：对象/数组类型——直接修改不会触发 -->
<script setup>
const form = reactive({ name: '' })
// v-model 绑定了 form.name，不要直接 v-model="form" 然后认为修改键名会生效
</script>
```

### 面试追问

- Q: v-model.lazy 做了什么？→ 从 input 事件改为 change 事件触发（失焦或回车才更新）
- Q: v-model.number 的原理？→ 用 parseFloat 转换输入值，转换失败返回原值
- Q: v-model.trim 做了什么？→ 自动去除首尾空格
- Q: Vue2 的 .sync 和 Vue3 的多个 v-model 有什么区别？→ Vue3 统一了语法，更直观
- Q: 自定义组件怎么实现类似 v-model 的行为？→ defineModel 或手动 defineProps + defineEmits

## Q7: computed 和 watch 的区别？

### 核心区别

```ts
// computed：依赖不变就返回缓存，必须 return 一个值
const fullName = computed(() => firstName.value + ' ' + lastName.value)

// watch：监听变化后执行副作用，不返回值
watch(userId, async (newId, oldId) => {
  const user = await fetchUser(newId)
  userData.value = user
})
```

| | computed | watch |
|--|---------|-------|
| 缓存 | 是（只有依赖变化才重算） | 否（每次变化都执行） |
| 返回值 | 有（派生值） | 无（执行副作用） |
| 异步 | 不支持 | 支持（async/await） |
| 默认执行 | 懒计算（访问时才算） | 不执行（可设置 immediate: true） |
| 有无回调参数 | 无 | 有 (newVal, oldVal) |
| 监听多个源 | 自动追踪内部依赖 | 支持数组 `watch([a,b], fn)` |
| 深度监听 | 自动（响应式系统追踪） | 需手动 deep: true |

### computed 详解

```ts
// 只读 computed
const doubled = computed(() => count.value * 2)

// 可写 computed（需要 getter + setter）
const fullName = computed({
  get: () => `${first.value} ${last.value}`,
  set: (val) => {
    [first.value, last.value] = val.split(' ')
  }
})

// computed 的缓存机制
const now = computed(() => Date.now())
// 注意：Date.now() 不是响应式依赖，所以多次访问返回相同值
```

### watch 详解

```ts
// 监听单个 ref
watch(count, (newVal, oldVal) => { ... })

// 监听 getter
watch(() => x.value + y.value, (sum) => { ... })

// 监听多个源
watch([count, name], ([newCount, newName], [oldCount, oldName]) => { ... })

// 深度监听
watch(obj, (newVal, oldVal) => {
  // 注意：深度监听时 newVal 和 oldVal 是同一个对象
}, { deep: true })

// 立即执行
watch(source, (newVal, oldVal) => { ... }, { immediate: true })

// 一次性监听（Vue 3.4+）
watch(source, (newVal, oldVal) => { ... }, { once: true })
```

### watchEffect

```ts
// watchEffect：自动追踪内部所有响应式依赖
watchEffect(() => {
  console.log(count.value, name.value) // 自动追踪 count 和 name
})
// 立即执行一次，然后依赖变化时重新执行
// 无法获取旧值
```

| watch | watchEffect |
|-------|-------------|
| 需指定监听源 | 自动追踪内部依赖 |
| 可获新旧值 | 只能获新值 |
| 懒执行（默认） | 立即执行 |
| 适合需要旧值的场景 | 适合日志、持久化等 |

### 性能对比

```ts
// ❌ 错误：methods 中计算值，每次渲染都重算
<p>{{ getFullName() }}</p>
methods: { getFullName() { return this.first + this.last } }

// ✅ 正确：computed 有缓存
<p>{{ fullName }}</p>
computed: { fullName() { return this.first + ' ' + this.last } }

// ❌ 错误：用 watch 修改衍生数据
watch([first, last], () => { fullName.value = first.value + ' ' + last.value })

// ✅ 正确：衍生数据用 computed
const fullName = computed(() => first.value + ' ' + last.value)
```

### 面试追问

- Q: computed 里可以写异步吗？→ 不能，computed 必须是同步的，因为需要返回值
- Q: watch deep: true 的性能影响？→ 递归遍历所有嵌套属性，大数据量可能卡顿，建议转为 getter 精确监听
- Q: watch 中 newVal 和 oldVal 在 deep 模式下为什么是同一个引用？→ 因为修改的是同一个对象的内部属性
- Q: computed 和 watch 哪个适合做搜索防抖？→ watch，因为可以配合 debounce 做异步操作
- Q: computed 的缓存是怎么实现的？→ 内部用 dirty flag + effect runner，依赖变化时 flag 置 true，下次访问才重算

## Q8: 组件间通信方式有哪些？

### 通信方式全景

```html
<!-- ① props + emit（父子通信）—— 最常用 -->
<Child :title="title" @update="handleUpdate" />

<!-- ② v-model（父子双向） -->
<Child v-model="value" />

<!-- ③ provide / inject（祖先 → 后代，跨多级） -->
<!-- 祖先 -->
<script setup>
provide('theme', 'dark')
provide('user', reactive({ name: 'Alice' }))
</script>
<!-- 后代 -->
<script setup>
const theme = inject('theme')          // 'dark'
const user = inject('user', defaultUser) // 支持默认值
</script>

<!-- ④ event bus（任何组件）—— Vue3 不推荐，建议用 mitt -->
<script setup>
import mitt from 'mitt'
const emitter = mitt()
emitter.on('event', handler)
emitter.emit('event', data)
</script>

<!-- ⑤ 状态管理（Pinia）—— 跨组件/全局 -->
<!-- ⑥ $parent / $children —— 耦合，不推荐 -->
<!-- ⑦ $refs（父访问子实例） -->
<!-- ⑧ attrs（透传属性） -->
```

### 通信方式对比

| 方式 | 方向 | 耦合度 | 推荐场景 |
|------|------|--------|---------|
| props + emit | 父子双向 | 低 | 所有父子通信 |
| v-model | 父子双向 | 低 | 表单绑定、双向数据 |
| provide/inject | 祖先 → 后代 | 中 | 主题、语言、全局配置 |
| event bus | 任意 | 高 | 不推荐，可用 Pinia 替代 |
| Pinia | 任意 | 低 | 全局状态、跨组件 |
| $refs | 父 → 子 | 高 | 应急、第三方库集成 |
| attrs | 父 → 子 | 中 | 高阶组件、组件包装 |
| slot | 父 → 子（内容分发） | 低 | 布局、模板定制 |

### provide/inject 使用注意

```ts
// 响应式注入——必须传 ref/reactive，而不是传值
// ❌ 非响应式
provide('count', count.value) // 只是数字，后续变化不传导

// ✅ 响应式
provide('count', count) // 传 ref 本身

// 如果需要修改，最好提供修改方法
provide('count', count)
provide('increment', () => count.value++)
```

### 面试追问

- Q: props 能不能直接修改？→ 不能，单向数据流，修改会报错（Vue 会警告）
- Q: provide/inject 和 props 有什么区别？→ provide/inject 可跨层级，但来源不明确
- Q: 兄弟组件怎么通信？→ 通过共同父组件中转，或 Pinia
- Q: 跨 tab/iframe 怎么通信？→ postMessage、BroadcastChannel
- Q: attrs 和 props 的区别？→ attrs 是未声明为 props 的属性透传

## Q9: Vue 的生命周期有哪些？

### 选项式 API

```html
<script>
export default {
  beforeCreate() { /* data、methods 未初始化 */ },
  created() { /* data 可用，可请求数据，$el 不可用 */ },
  beforeMount() { /* 模板已编译，未挂载 */ },
  mounted() { /* DOM 可用，可操作 DOM、绑定事件、获取尺寸 */ },
  beforeUpdate() { /* 数据变化，DOM 还未更新 */ },
  updated() { /* DOM 已更新，避免在此改数据（死循环） */ },
  beforeUnmount() { /* 实例销毁前，清理定时器、取消订阅 */ },
  unmounted() { /* 实例已销毁，所有指令解绑 */ },
  errorCaptured() { /* 后代组件错误捕获 */ },
  activated() { /* KeepAlive 缓存激活 */ },
  deactivated() { /* KeepAlive 缓存失活 */ },
}
</script>
```

### 组合式 API

```html
<script setup>
import { onMounted, onUnmounted, onActivated, onUpdated, onBeforeUnmount } from 'vue'

onMounted(() => {
  // 获取 DOM、fetch 数据、绑定原生事件
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  // 清理（定时器、事件监听、取消订阅）
  window.removeEventListener('resize', handleResize)
})
onActivated(() => {
  // KeepAlive 组件激活时
})
onUpdated(() => {
  // 响应式数据变化导致 DOM 更新后
})
</script>
```

### Vue 2 vs Vue 3 生命周期对比

| Vue 2 | Vue 3 选项式 | Vue 3 组合式 |
|-------|-------------|-------------|
| beforeCreate | beforeCreate | setup() |
| created | created | setup() |
| beforeMount | beforeMount | onBeforeMount |
| mounted | mounted | onMounted |
| beforeUpdate | beforeUpdate | onBeforeUpdate |
| updated | updated | onUpdated |
| beforeDestroy | beforeUnmount | onBeforeUnmount |
| destroyed | unmounted | onUnmounted |
| activated | activated | onActivated |
| deactivated | deactivated | onDeactivated |

### 生命周期执行顺序

```
父 beforeCreate → 父 created → 父 beforeMount
  → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted
→ 父 mounted

更新时：
父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated

卸载时：
父 beforeUnmount → 子 beforeUnmount → 子 unmounted → 父 unmounted
```

### 常见错误

```ts
// ❌ mounted 中用定时器但 unmounted 不清理
onMounted(() => {
  timer.value = setInterval(() => { ... }, 1000)
})
// 组件卸载后定时器还在运行，可能触发已卸载组件的状态更新

// ✅ 正确做法
onMounted(() => {
  timer.value = setInterval(() => { ... }, 1000)
})
onUnmounted(() => {
  clearInterval(timer.value)
})
```

### 面试追问

- Q: created 和 mounted 哪个能获取 DOM？→ mounted，created 时 $el 还不存在
- Q: 为什么不在 beforeCreate 里请求数据？→ data、props 都不可用，无法赋值
- Q: 服务端渲染时哪些生命周期不执行？→ beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted
- Q: 父子组件生命周期执行顺序？→ 父 beforeMount → 子 mounted → 父 mounted（挂载从内到外完成）
- Q: errorCaptured 的作用？→ 捕获后代组件抛出的错误，避免影响父组件

## Q10: `<script setup>` 是什么？

### 核心特性

Vue 3.2+ 的组合式 API 语法糖，比普通 `<script>` 更简洁：

```html
<script setup lang="ts">
// ① 顶层变量和函数可直接在模板中使用
const count = ref(0)
const doubled = computed(() => count.value * 2)
function handleClick() { count.value++ }

// ② 导入的组件自动注册，无需 components 选项
import Child from './Child.vue'
import { IconButton } from '@/components'

// ③ defineProps + defineEmits —— 编译时宏，无需导入
const props = defineProps<{ title: string; count?: number }>()
const emit = defineEmits<{
  update: [value: string]
  delete: [id: number]
}>()

// ④ 顶层 await（配合 Suspense 使用）
const data = await fetchData()

// ⑤ 使用运行时默认值
interface Props { title: string; count?: number }
const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
<template>
  <p>{{ count }} - {{ doubled }}</p>
  <Child :title="title" @click="handleClick" />
</template>
```

### 普通 script vs script setup

| 特性 | 普通 `<script>` | `<script setup>` |
|------|----------------|-----------------|
| 组件注册 | 需 `components: { Child }` | import 即可用 |
| props 声明 | `props: { title: String }` | `defineProps()` |
| emits 声明 | `emits: ['update']` | `defineEmits()` |
| 暴露给父组件 | 所有属性 | 只有 `defineExpose` 的 |
| 顶层 await | 不支持 | 支持 |
| TypeScript | 需写类型注解 | 泛型语法更简洁 |
| 执行时机 | export default 对象 | setup 函数，beforeCreate 之前 |

### 限制

```html
<!-- 不能使用选项式 API 特性 -->
<script setup>
// ❌ 不支持 filters、name（可通过额外 script 定义 name）
// ❌ 不支持 inheritAttrs: false（通过 defineOptions，Vue 3.3+）
</script>

<script>
// 可以定义 name 和 inheritAttrs
export default { name: 'MyComponent', inheritAttrs: false }
</script>
<script setup>
// 组合式 API 逻辑
</script>
```

### defineOptions（Vue 3.3+）

```html
<script setup>
defineOptions({
  name: 'MyComponent',
  inheritAttrs: false,
})
</script>
```

### 面试追问

- Q: `<script setup>` 和普通 setup 函数有什么不同？→ 更简洁，编译时优化，自动注册组件
- Q: 能在 `<script setup>` 中使用选项式 API 吗？→ 不能混用，但可以额外加一个普通 `<script>` 块
- Q: defineProps 的泛型语法和支持的 TS 类型？→ 支持 interface 和字面量类型，不支持复杂导入类型
- Q: 多个同名组件 import 会怎样？→ 需要别名避免冲突
- Q: setup 语法和 Options API 性能上有区别吗？→ 无性能差异，只是语法糖

## Q11: methods 和 computed 的区别？

### 核心区别

```html
<script>
export default {
  data() { return { count: 0 } },
  computed: {
    doubled() { return this.count * 2 } // 缓存——只有 count 变化时才重算
  },
  methods: {
    double() { return this.count * 2 }  // 每次调用都重新计算
  }
}
</script>
```

| | computed | methods |
|--|---------|---------|
| 缓存 | 是（响应式依赖不变，返回值不变） | 否（每次都执行函数体） |
| 触发时机 | 依赖变化时自动更新 | 手动调用时执行 |
| 返回值 | 必须 return 一个值 | 可选 return |
| 在模板中 | 作为属性使用 &#123;&#123; doubled &#125;&#125; | 作为方法调用 &#123;&#123; double() &#125;&#125; |
| 有参 | 不支持传参（getter） | 支持传参 |
| 异步 | 不支持 | 支持 |

### 性能影响

```html
<!-- ❌ 模板中调用方法，每次渲染都执行 -->
<p>{{ double() }}</p>
<!-- 即使 count 没变，任何数据变化引发重新渲染，double() 都会执行 -->

<!-- ✅ computed 只依赖变化时重算 -->
<p>{{ doubled }}</p>
<!-- 只有 count 变了才重算，其他数据变化不影响 -->

<!-- 多次使用，computed 只算一次 -->
<p>{{ doubled }}</p>    <!-- 第一次，计算 -->
<p>{{ doubled }}</p>    <!-- 直接返回缓存 -->
<p>{{ doubled }}</p>    <!-- 直接返回缓存 -->

<!-- methods 每次使用都执行 -->
<p>{{ double() }}</p>   <!-- 第一次，执行 -->
<p>{{ double() }}</p>   <!-- 第二次，执行 -->
<p>{{ double() }}</p>   <!-- 第三次，执行 -->
```

### 使用场景

```ts
// ✅ 用 computed：派生数据
const fullName = computed(() => first.value + ' ' + last.value)
const taxPrice = computed(() => price.value * taxRate.value)
const isValid = computed(() => email.value.includes('@') && email.value.length > 3)

// ✅ 用 methods：事件处理、有参计算
methods: {
  formatDate(date, fmt) { /* 参数化格式化 */ },
  filterByStatus(list, status) { return list.filter(item => item.status === status) },
}

// ⚠️ 需要传参但又想缓存的场景——可以用 computed 返回函数
const getStatusColor = computed(() => (status: string) => {
  return status === 'active' ? 'green' : 'gray'
})
```

### 面试追问

- Q: computed 可以调用 methods 吗？→ 可以，但不推荐，这样就绕过了缓存检查
- Q: 什么时候 methods 比 computed 更合适？→ 需要参数传递、事件处理、非派生数据（如路由跳转）
- Q: computed 返回的函数有缓存吗？→ 函数本身是缓存的，但函数每次调用都会执行
- Q: 多个 computed 依赖同一个值时，计算几次？→ 只计算一次，下一个直接读缓存
- Q: computed 和 watch 哪个做搜索建议更合适？→ watch 结合 debounce 做异步搜索，computed 做同步过滤

## Q12: mixins 有什么问题？为什么 composition API 更好？

### mixins 的三个核心问题

```html
<script>
// 问题 1：命名冲突
const userMixin = { data() { return { user: null, loading: false } } }
const profileMixin = { data() { return { user: 'conflict!', loading: true } } }
// 两个 mixin 定义了同名的 user 和 loading，后面的覆盖前面的

// 问题 2：来源不明确
const userMixin = { methods: { fetchData() { ... } } }
const postMixin = { methods: { fetchData() { ... } } }
// this.fetchData()——不知道调用的是哪个 mixin 的

// 问题 3：逻辑耦合
const authMixin = { data() { return { token: '' } } }
const requestMixin = { methods: { apiGet(url) { /* 依赖 authMixin 的 token */ } } }
// requestMixin 隐式依赖 authMixin，组合时顺序错了就崩溃
</script>
```

### Composition API 的解法

```html
<script setup>
// ✅ 每个组合函数返回明确的命名对象，无冲突
function useUser() {
  const user = ref(null)
  const loading = ref(false)
  async function fetchUser(id) { ... }
  return { user, loading, fetchUser }
}

function useProfile() {
  const profile = ref(null)
  async function fetchProfile(id) { ... }
  return { profile, fetchProfile }
}

// 组件中各自解构，名称明确
const { user, loading, fetchUser } = useUser()
const { profile, fetchProfile } = useProfile()
// 无冲突，来源清晰
</script>
```

### 完整对比

| 维度 | mixins | Composition API |
|------|--------|----------------|
| 命名冲突 | 同名字段静默覆盖 | 解构时自定义名称 |
| 来源追溯 | this.xxx 不知来自哪里 | 从哪个函数返回就来自哪 |
| 逻辑复用 | 只能整体注入 | 按需组合，按函数拆分 |
| TypeScript | 推断困难 | 天然类型安全 |
| 可测试性 | 依赖组件上下文 | 纯函数调用，易于测试 |
| 逻辑拆分 | 一个 mixin 只能一个文件 | 一个 composable 一个关注点 |
| 生命周期 | mixin 和组件生命周期合并 | composable 内部用 onMounted 等 |

### mixins 的隐藏合并规则

```ts
// data：深合并，组件优先级最高
// 生命周期钩子：合并为数组，全部执行，mixin 先执行
// methods/computed：同名时组件覆盖 mixin
// watch：合并为数组，全部执行
```

### 迁移建议

```ts
// 从 mixin 迁移为 composable
// Before:
const searchMixin = {
  data() { return { keyword: '', results: [], loading: false } },
  methods: { async search() { ... } }
}

// After:
function useSearch() {
  const keyword = ref('')
  const results = ref([])
  const loading = ref(false)
  async function search() { ... }
  return { keyword, results, loading, search }
}
```

### 面试追问

- Q: Vue3 中 mixins 还能用吗？→ 能用但不推荐，Composition API 是更好的替代
- Q: 如果非要复用逻辑除了 composable 还有什么？→ custom hooks（就是 composable）、自定义指令、插件
- Q: composable 之间可以互相调用吗？→ 可以，这是优势之一（如 useAuth 在 useFetch 中调用）
- Q: composable 的生命周期在哪里执行？→ 在组件 setup 或 script setup 中执行，遵循组件生命周期
- Q: react hooks 和 vue composable 有什么不同？→ Vue composable 不限制调用顺序，没有闭包陷阱

## Q13: Vue 的 nextTick 原理

### 使用场景

```ts
const count = ref(0)
count.value = 1
console.log(count.value) // 1（内存中数据已更新，DOM 未更新）

// DOM 尚未更新，需要等下一个 tick
nextTick(() => {
  console.log(document.querySelector('.count')!.textContent) // 1
})
```

### 典型场景

```ts
// 场景 1：数据变化后操作 DOM
const list = ref([1, 2, 3])
function addItem() {
  list.value.push(4)
  nextTick(() => {
    // 列表 DOM 已更新，可以滚动到底部
    scrollToBottom()
  })
}

// 场景 2：获取更新后的元素尺寸
const expanded = ref(false)
function toggle() {
  expanded.value = true
  nextTick(() => {
    const height = el.value.offsetHeight // 拿到展开后的高度
    animateTo(height)
  })
}

// 场景 3：在 created 中操作 DOM
created() {
  nextTick(() => {
    // 此时 DOM 已挂载，可以操作
    this.$refs.input?.focus()
  })
}
```

### 原理机制

Vue 的数据更新是异步的（微任务）。当数据变化时，不会立即更新 DOM，而是将更新推入一个队列（去重后）。`nextTick` 把回调推迟到 DOM 更新后执行。

```
数据变化 → 推入异步队列 → 微任务执行 → DOM 更新 → nextTick 回调执行
```

### 降级策略

```
Promise.then（微任务，优先）
  → MutationObserver（微任务）
    → setImmediate（宏任务，IE 专用）
      → setTimeout（宏任务，最后兜底）
```

### 常见误区

```ts
// ❌ 错误：在 nextTick 中修改数据
nextTick(() => {
  count.value = 2 // 这会在下一个微任务中触发另一次更新
})

// ❌ 错误：认为 nextTick 是同步的
let updated = false
nextTick(() => { updated = true })
console.log(updated) // false，nextTick 的回调是异步的
```

### 面试追问

- Q: nextTick 和 setTimeout 哪个先执行？→ nextTick（微任务）先于 setTimeout（宏任务）
- Q: 连续修改数据，nextTick 执行几次？→ 一次，Vue 会批量合并更新，只执行一次 DOM 更新
- Q: Vue3 的 nextTick 和 Vue2 有什么不同？→ 底层一致，Vue3 优先用 Promise
- Q: 不用 nextTick 怎么知道 DOM 更新了？→ watch 的回调或 updated 生命周期
- Q: await nextTick() 是什么用法？→ Vue3 的 nextTick 返回 Promise，可用 await 等待
