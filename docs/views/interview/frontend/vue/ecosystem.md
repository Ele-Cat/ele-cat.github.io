# Vue 生态 & 实战面试题

## Q1: Pinia 的核心概念

### 定义 Store

```ts
// stores/counter.ts —— 组合式 API 风格（推荐）
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubled = computed(() => count.value * 2)
  function increment() { count.value++ }

  return { count, doubled, increment }
})

// 选项式 API 风格（类似 Vuex）
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { doubled: (state) => state.count * 2 },
  actions: { increment() { this.count++ } },
})
```

### 组件中使用

```ts
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// ✅ 直接访问（响应式）
store.count
store.doubled
store.increment()

// ✅ 解构保持响应——必须用 storeToRefs
const { count, doubled } = storeToRefs(store)
// 直接解构 const { count } = store 会丢失响应性

// ❌ 解构 action 不需要 storeToRefs
const { increment } = store
```

### Pinia vs Vuex

| 维度 | Pinia | Vuex |
|------|-------|------|
| TS 支持 | 原生，类型推断完整 | 需要额外类型声明 |
| 结构 | 无 mutations，只有 state/getter/action | 有 mutations（冗余） |
| 体积 | ~1KB | 大 |
| 开发体验 | 更简洁，API 少 | 模板化，概念多 |
| Composition API | 天然支持 | Options API 风格 |
| 多个 store | 自动并行 | 模块化配置 |
| DevTools | 支持 | 支持 |
| 维护状态 | 官方推荐 | 不再维护 |

### 核心特性

```ts
// 1. 多个 store 互相调用
// stores/user.ts
export const useUserStore = defineStore('user', () => {
  const token = ref('')
  return { token }
})

// stores/order.ts
export const useOrderStore = defineStore('order', () => {
  const userStore = useUserStore() // 直接引用其他 store
  const orders = ref([])
  async function fetchOrders() {
    orders.value = await api.getOrders(userStore.token)
  }
  return { orders, fetchOrders }
})

// 2. $patch——批量更新
store.$patch({ count: store.count + 1, name: 'new' })
store.$patch((state) => { state.count++; state.name = 'new' })

// 3. $subscribe——监听变化
store.$subscribe((mutation, state) => {
  // mutation.type: 'direct' | 'patch' | 'action'
  localStorage.setItem('counter', JSON.stringify(state))
})

// 4. $reset——重置 state（仅选项式 API）
// 组合式 API 需手动实现
```

### 面试追问

- Q: Pinia 为什么去掉了 mutations？→ mutations 带来的样板代码大于收益，且 DevTools 能追踪 action
- Q: storeToRefs 的原理？→ 将 store 中的 ref/reactive 属性提取为 ref，非响应式属性不变
- Q: Pinia 怎么持久化？→ 配合 pinia-plugin-persistedstate 或手写 $subscribe 存 localStorage
- Q: Pinia 支持服务端渲染吗？→ 支持，SSR 中每个请求创建新的 store 实例
- Q: Pinia 和组件内的 reactive 有什么区别？→ Pinia 是全局单例（默认），reactive 是组件局部的

## Q2: Vue Router v4 核心概念

### 基本配置

```ts
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'), // 懒加载
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('@/views/User.vue'),
      props: true, // 把路由参数作为 props 传给组件
      beforeEnter: (to, from) => {
        // 路由独享守卫
        if (!isLoggedIn()) return '/login'
      },
    },
  ],
})

// 全局前置守卫
router.beforeEach((to, from) => {
  const isAuth = localStorage.getItem('token')
  if (to.meta.requireAuth && !isAuth) return '/login'
  return true
})

// 全局解析守卫
router.beforeResolve((to) => { /* 在导航确认前，所有组件内守卫执行后 */ })

// 全局后置钩子
router.afterEach((to, from) => {
  // 埋点、设置页面标题
  document.title = to.meta.title as string
})
```

### 组件中使用

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()    // 当前路由信息（响应式）
const router = useRouter()  // 路由实例

// 获取参数
console.log(route.params.id)     // /users/123 → '123'
console.log(route.query.page)    // /users?page=2 → '2'
console.log(route.hash)          // /users#section → '#section'
console.log(route.meta.title)    // 路由元信息

// 导航方法
router.push('/users/1')
router.push({ name: 'user', params: { id: '1' }, query: { tab: 'profile' } })
router.replace('/login')          // 不留下历史记录
router.go(-1)                    // 后退
router.back()                    // 后退
router.forward()                 // 前进
</script>

<template>
  <!-- 声明式导航 -->
  <router-link to="/users/1">User 1</router-link>
  <router-link :to="{ name: 'user', params: { id: user.id } }">
    {{ user.name }}
  </router-link>

  <!-- 路由出口 -->
  <router-view />
  <!-- 命名视图 -->
  <router-view name="sidebar" />
</template>
```

### 动态路由

```ts
// 动态添加路由——权限控制
const adminRoute = {
  path: '/admin',
  component: () => import('@/views/Admin.vue'),
  meta: { roles: ['admin'] },
}

// 添加
router.addRoute(adminRoute)
// 添加为某个路由的子路由
router.addRoute('parent', { path: 'child', component: Child })

// 移除
router.removeRoute('admin')

// 检查是否存在
router.hasRoute('admin')

// 获取所有路由记录
router.getRoutes()
```

### 导航守卫执行顺序

```
1. 失活组件的 beforeRouteLeave
2. 全局 beforeEach
3. 重用组件的 beforeRouteUpdate
4. 路由配置的 beforeEnter
5. 激活组件的 beforeRouteEnter
6. 全局 beforeResolve
7. 导航确认后，全局 afterEach
8. DOM 更新
9. beforeRouteEnter 中传给 next 的回调
```

### 面试追问

- Q: Hash 模式和 History 模式的区别？→ Hash 带/#/，无兼容性问题；History 需要服务端配置 fallback
- Q: 路由 params 变化时组件为什么不重新渲染？→ 同一组件复用，需要 watch route.params 或 beforeRouteUpdate
- Q: 怎么实现路由权限控制？→ beforeEach 中判断 meta.roles + addRoute 动态添加
- Q: 导航守卫中 next() 的用法？→ Vue4 中不传参数，Vue3 Router 中直接 return 目标路径
- Q: 路由懒加载和预加载怎么配合？→ 用 Vite 的 import.meta.glob 配合预取策略

## Q3: Nuxt 3 的核心特性

### 架构

```
Nuxt 3 = Vue 3 + Vite + Nitro（服务端引擎）

核心特性：
1. 自动导入——组件、composable、工具函数自动导入，无需手动 import
2. 文件路由——pages/ 目录自动生成路由
3. 服务端渲染——默认 SSG/SSR，可配置为 SPA
4. 数据获取——useFetch / useAsyncData 内置
5. 中间件——路由中间件（文件名即可）
6. 模块生态——@nuxt/content, @nuxt/image, @nuxt/ui 等
7. 自动导入 ref/computed 等——不用 import
```

### 文件路由

```html
<!-- pages/index.vue → / -->
<!-- pages/about.vue → /about -->
<!-- pages/users/[id].vue → /users/:id -->
<!-- pages/users/[id]/profile.vue → /users/:id/profile -->
<!-- pages/users/-index.vue → /users （Optional catch-all） -->
<!-- pages/[...slug].vue → /* （Catch-all） -->

<!-- pages/users/[id].vue -->
<script setup>
const route = useRoute()
const { data: user } = await useFetch(`/api/users/${route.params.id}`)
</script>
<template>
  <div>{{ user.name }}</div>
</template>
```

### 数据获取

```html
<script setup>
// useFetch——最常用，自动去重
const { data, pending, error, refresh } = await useFetch('/api/posts')

// useAsyncData——更灵活，自定义 fetcher
const { data: posts } = await useAsyncData('posts', () =>
  $fetch('/api/posts', { params: { page: 1 } })
)

// 带参数
const { data: user } = await useFetch(`/api/users/${id.value}`, {
  watch: [id], // id 变化时重新请求
  key: 'user', // 缓存 key
})

// 服务端不请求，只客户端请求
const { data } = await useFetch('/api/user', { server: false })
</script>
```

### 渲染模式

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,     // 默认：SSR 模式
  // ssr: false, // SPA 模式
  // target: 'static', // SSG（静态生成）
})
```

| 模式 | 特点 | 适用 |
|------|------|------|
| SSR | 服务器渲染 HTML，后续 SPA | SEO 重要，动态内容 |
| SSG | 构建时生成静态 HTML | SEO 重要，内容固定 |
| SPA | 纯客户端渲染 | 后台管理，登录后页面 |
| ISR | 增量静态生成 | 大型静态站（Nitro 支持） |

### 面试追问

- Q: Nuxt 3 和普通 Vue 3 + Vite 的区别？→ Nuxt 提供了约定式路由、SSR、自动导入、服务端 API 等
- Q: useFetch 和 $fetch 的区别？→ useFetch 在服务端预取数据并注水，$fetch 只是客户端请求
- Q: Nuxt 3 的中间件和路由守卫什么关系？→ middleware/ 下文件自动成为路由中间件，功能类似 beforeEach
- Q: 怎么在 Nuxt 3 中创建 API 路由？→ server/api/ 下创建文件自动成为 API 端点
- Q: Nuxt 3 怎么部署？→ Node 服务器、Vercel、Netlify、Cloudflare Workers 等

## Q4: Vue 项目目录结构最佳实践

### 推荐结构

```
src/
├── components/              # 通用组件（可复用的 UI 组件）
│   ├── ui/                 # 基础 UI：Button, Input, Modal, Table
│   ├── layout/             # 布局：Header, Sidebar, Footer
│   └── business/           # 业务组件：UserCard, PostItem
├── composables/             # 可复用逻辑（useAuth, useFetch, usePagination）
├── views/                   # 页面组件（路由级别）
│   ├── home/
│   ├── user/
│   │   ├── UserList.vue
│   │   └── UserDetail.vue
│   └── error/
│       ├── 404.vue
│       └── 403.vue
├── stores/                  # Pinia 状态管理
│   ├── counter.ts
│   └── user.ts
├── router/                  # 路由配置
│   └── index.ts
├── utils/                   # 工具函数（纯函数）
│   ├── format.ts
│   └── validation.ts
├── types/                   # TS 类型定义
│   ├── api.ts
│   └── models.ts
├── assets/                  # 静态资源（图片、全局样式）
│   ├── styles/
│   │   ├── variables.scss
│   │   └── global.scss
│   └── images/
├── layouts/                 # 布局组件（Nuxt 风格或手动路由嵌套）
│   ├── default.vue
│   └── auth.vue
├── middleware/              # 路由中间件（权限、重定向）
│   └── auth.ts
├── plugins/                 # 插件注册
│   ├── axios.ts
│   └── pinia.ts
├── api/                     # API 封装（可选，可放 composables 中）
│   └── user.ts
├── App.vue
└── main.ts
```

### 命名规范

```
组件文件：PascalCase（UserCard.vue）
路由文件：kebab-case（user-detail.vue）
组合函数：useXxx（useAuth.ts）
工具函数：camelCase（formatDate.ts）
类型文件：PascalCase 或 kebab-case
常量：UPPER_SNAKE_CASE
CSS 类：kebab-case 或 BEM
```

### 分层原则

```
pages/ → 组合组件 + 调用 composables + 调用 store
composables/ → 可复用逻辑，调用 api/utils
stores/ → 全局状态，调用 api
api/ → HTTP 请求封装
utils/ → 纯函数，无副作用
components/ → 展示组件，接收 props + emit
```

### 面试追问

- Q: 为什么要单独分 composables 文件夹？→ 逻辑复用 + 替代 mixins，每个 composable 单一职责
- Q: 组件大小有建议吗？→ 超过 200 行考虑拆分，超过 400 行必须拆分
- Q: 全局组件和局部组件的分布策略？→ 全局注册基础 UI 组件，业务组件按需局部注册
- Q: monorepo 怎么组织 Vue 项目？→ 用 pnpm workspace，packages/ 下分 app、shared、ui 等

## Q5: Vue 性能优化清单

### 模板编译优化

```html
<!-- 1. v-for 必须用 :key -->
<li v-for="item in items" :key="item.id">

<!-- 2. v-if 和 v-for 不要同时用 —— Vue3 中 v-if 优先级高 -->
<!-- ❌ 错误 -->
<li v-for="item in list" v-if="item.visible" :key="item.id">
<!-- ✅ 正确：用 computed 过滤 -->
<li v-for="item in visibleList" :key="item.id">

<!-- 3. 用计算属性代替方法调用 -->
<p>{{ fullName }}</p>       <!-- computed，缓存 -->
<p>{{ getFullName() }}</p>  <!-- methods，每次渲染都执行 -->

<!-- 4. v-once——静态内容只渲染一次 -->
<div v-once>
  <h1>Static title</h1>
  <p>This will never change</p>
</div>

<!-- 5. v-memo——条件跳过渲染（Vue 3.2+） -->
<div v-memo="[item.id]">
  <!-- 只有 item.id 变化时才更新 -->
</div>
```

### 响应式优化

```ts
// 1. markRaw——标记非响应式对象
const heavyData = markRaw(new Array(10000).fill({})) // 不做响应式

// 2. shallowRef——浅响应（只追踪 .value 变化）
const list = shallowRef([])
list.value = newArray // 触发更新
list.value[0] = item  // 不触发更新（内部不变）

// 3. shallowReactive——只响应第一层
const state = shallowReactive({ user: { name: 'Alice' } })
state.user.name = 'Bob' // 不触发（深层不变）

// 4. readonly——只读
const config = readonly({ apiUrl: '...' })

// 5. avoid deep watch
// ❌ 深度监听全部属性
watch(obj, handler, { deep: true })
// ✅ 精确监听
watch(() => obj.specificField, handler)
```

### 渲染优化

```html
<!-- 1. KeepAlive 缓存组件 -->
<KeepAlive :include="['Home', 'About']">
  <component :is="currentTab" />
</KeepAlive>

<!-- 2. 异步组件分割 -->
const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))

<!-- 3. 组件动态切换用 <component :is> -->
```

### 大数据列表

```html
<!-- 虚拟滚动（vue-virtual-scroller） -->
<RecycleScroller
  :items="items"
  :item-size="50"
  key-field="id"
  v-slot="{ item }"
>
  <div class="item">{{ item.text }}</div>
</RecycleScroller>
```

### 打包优化

```ts
// 1. 路由懒加载
const routes = [{ path: '/', component: () => import('./Home.vue') }]

// 2. 第三方库按需导入
// Element Plus 按需导入（unplugin-vue-components）

// 3. tree-shaking
import { debounce } from 'lodash-es' // ✅ 只导入 debounce
import _ from 'lodash'               // ❌ 全部导入
```

### 运行时优化

```ts
// 1. 及时清理
onMounted(() => {
  const timer = setInterval(/* ... */)
  window.addEventListener('resize', handler)
})
onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('resize', handler)
})

// 2. 释放大对象
function clearLargeData() {
  largeArray.value = null // 允许 GC 回收
}
```

### 性能检测工具

```
Vue DevTools —— 组件渲染性能分析
Chrome Performance —— 火焰图分析
Lighthouse —— 整体性能评分
Webpack/Vite Bundle Analyzer —— 打包体积分析
```

### 面试追问

- Q: 什么场景下 virtual scrolling 不适用？→ 每个 item 高度不固定且需要动画时
- Q: markRaw 和 shallowRef 哪个性能更好？→ markRaw 更好（完全不追踪），shallowRef 还有 .value 追踪
- Q: v-memo 的适用场景？→ 列表中有大量静态子组件，只有少量内容变化时
- Q: 首屏加载性能怎么优化？→ 路由懒加载 + 异步组件 + Gzip + CDN + 预加载关键资源

## Q6: Vue3 的 emits 和 defineEmits

### 类型声明

```html
<script setup lang="ts">
// 方式 1：字面量类型声明（Vue 3.3+）
const emit = defineEmits<{
  submit: [value: string]
  cancel: []
  change: [id: number, name: string]
  update: [value: string]
}>()

// 方式 2：调用签名语法
const emit = defineEmits<{
  (e: 'submit', value: string): void
  (e: 'cancel'): void
}>()

// 方式 3：运行时声明（无类型）
const emit = defineEmits(['submit', 'cancel', 'change'])

// 使用
emit('submit', formValue)
emit('update', 'new value')
</script>
```

### 验证 emits

```ts
// 带验证的 emit
const emit = defineEmits({
  submit(payload: string) {
    return payload.length > 0 // 返回 false 则验证失败
  },
  cancel() {
    return true
  },
})
emit('submit', '') // 验证失败，控制台警告
```

### 声明 emits 为什么要做

```html
<!-- 父组件 -->
<Child @custom-event="handle" @click="handleClick" />

<!-- 未声明 emits：click 作为原生事件透传（可能冒泡到父组件） -->
<!-- 声明 emits：Vue 知道 click 是自定义事件，不会透传 -->
```

### emits 对透传属性的影响

```html
<!-- 子组件 Child.vue -->
<script setup>
const emit = defineEmits(['close'])
</script>
<template>
  <div class="child">
    <slot />
  </div>
</template>

<!-- 父组件使用 -->
<Child @close="handleClose" class="extra" />
<!-- class="extra" 会透传到子组件的根元素 div.child -->
<!-- 但如果 Child 也声明了 props: ['class']，则不会透传 -->
```

### 面试追问

- Q: 不声明 emits 会怎样？→ 事件会作为透传属性，可能落到根元素上，且 Vue 给出警告
- Q: defineEmits 和 Options API 的 emits 有什么不同？→ 语法更简洁，类型推导更好
- Q: emit 验证失败会阻止事件触发吗？→ 不会阻止，只是控制台警告
- Q: 和 v-model 的 emit 有什么关系？→ v-model 底层就是 emit('update:modelValue', value)

## Q7: Vue3 的 expose 是什么？

### 基本使用

```html
<!-- 子组件 -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
const name = ref('secret')  // 不暴露
function reset() { count.value = 0 }
function increment() { count.value++ }

// 只暴露 reset 和 increment 给父组件
defineExpose({ reset, increment })
</script>

<!-- 父组件 -->
<script setup>
import { ref, onMounted } from 'vue'

const childRef = ref(null)

onMounted(() => {
  childRef.value?.reset()     // ✅ 可以
  childRef.value?.increment() // ✅ 可以
  console.log(childRef.value?.count) // ❌ undefined
})
</script>
<template>
  <Child ref="childRef" />
</template>
```

### Options API 的 proxy

```html
<script>
export default {
  data() { return { count: 0, name: 'secret' } },
  methods: { reset() { this.count = 0 } },
  // expose: ['reset'] // 显式指定暴露内容（Vue 3）
}
</script>
```

### 为什么需要显式 expose

```
Vue 3.0: <script setup> 默认关闭模板上下文暴露
Vue 3.3+: defineExpose 是唯一方式
原因：封装性——组件应通过 props/emits 通信，ref 是逃生舱
```

### 常见场景

```html
<!-- 场景 1：表单组件暴露验证方法 -->
<script setup>
const formRef = ref(null)
function validate() {
  return formRef.value?.validate()
}
function reset() {
  formRef.value?.resetFields()
}
defineExpose({ validate, reset })
</script>

<!-- 场景 2：动画组件暴露控制 -->
<script setup>
function play() { /* ... */ }
function pause() { /* ... */ }
defineExpose({ play, pause })
</script>
```

### 面试追问

- Q: expose 和 data 中直接暴露的区别？→ expose 是白名单控制，Options API 默认暴露所有
- Q: 多层组件 ref 传递怎么办？→ 通过 provide/inject 或从父到子层层传递 ref
- Q: defineExpose 在非 setup 语法中能行吗？→ 可以，使用 expose 选项
- Q: expose 的性能影响？→ 极小，只是属性访问的白名单过滤

## Q8: Vue 中怎么处理大量数据列表？

### 方案对比

| 方案 | 性能 | 适用场景 | 复杂度 |
|------|------|---------|--------|
| 分页 | 好 | 用户主动翻页（表格、搜索结果） | 低 |
| 虚拟滚动 | 极好 | 连续滚动（聊天记录、Feed 流） | 中 |
| 分批渲染 | 中 | 首屏优化（首次只渲染前 N 条） | 低 |
| 时间分片 | 好 | 大量 DOM 操作（批量插入） | 高 |

### 完整实现

```html
<!-- 方案 1：分页（最常用） -->
<Pagination :total="total" v-model:page="page" :page-size="20" />
<script setup>
const page = ref(1)
const pageSize = 20
const { data, total } = await useFetch(`/api/items?page=${page.value}&size=${pageSize}`)
</script>

<!-- 方案 2：虚拟滚动（vue-virtual-scroller） -->
<RecycleScroller
  :items="items"
  :item-size="50"
  key-field="id"
  v-slot="{ item }"
>
  <div class="item">{{ item.text }}</div>
</RecycleScroller>

<!-- 方案 3：分批渲染（IntersectionObserver） -->
<script setup>
const items = ref([]) // 全部数据
const visibleItems = ref([]) // 当前渲染的
const batchSize = 20
let index = 0

function loadMore() {
  const next = items.value.slice(index, index + batchSize)
  visibleItems.value.push(...next)
  index += batchSize
}

// 利用 IntersectionObserver 触发加载更多
const sentinelRef = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) loadMore()
  })
  observer.observe(sentinelRef.value)
  onUnmounted(() => observer.disconnect())
  loadMore() // 首次加载一批
})
</script>
<template>
  <div v-for="item in visibleItems" :key="item.id">{{ item.text }}</div>
  <div ref="sentinelRef" class="sentinel" />
</template>

<!-- 方案 4：时间分片（requestIdleCallback） -->
<script setup>
function processLargeData(data: any[]) {
  const chunkSize = 50
  let i = 0
  function processChunk() {
    const end = Math.min(i + chunkSize, data.length)
    for (; i < end; i++) {
      // 处理 data[i]
    }
    if (i < data.length) {
      requestIdleCallback(processChunk)
    }
  }
  requestIdleCallback(processChunk)
}
</script>
```

### 性能关键点

```ts
// 1. 使用 trackBy（Vue 虚拟滚动库 VV）或 key-field
// 2. 避免表格中每个单元格都响应式
// 3. 大数据列表用 markRaw 或 shallowRef
const list = shallowRef([]) // 只追踪整体替换，不追踪内部变化

// 4. 关闭不必要的响应式
const rawData = markRaw(hugeArray)

// 5. 分批更新
function batchUpdate() {
  nextTick(() => {
    list.value = newData // 批量更新，只触发一次渲染
  })
}
```

### 面试追问

- Q: 虚拟滚动的原理？→ 只渲染可视区域 + 上下缓冲区，滚动时计算偏移，更新渲染的 item
- Q: 虚拟滚动和分页怎么选？→ 用户主动翻页用分页，无限滚动用虚拟滚动
- Q: 大规模表格渲染卡顿怎么处理？→ 虚拟滚动 + 列固定 + 懒渲染（非可视单元格简易渲染）
- Q: 更新单条数据时怎么避免全量更新？→ 用 key 配合 trackBy，Vue 只 patch 修改的项

## Q9: Vue 测试策略

### 测试金字塔

```
E2E（Cypress / Playwright）
    ↑
集成测试（@vue/test-utils + Vitest）
    ↑
单元测试（Vitest）
```

### 单元测试

```ts
// utils/format.ts —— 测试纯函数
import { formatDate, capitalize } from '../utils/format'
import { describe, it, expect } from 'vitest'

describe('formatDate', () => {
  it('formats date correctly', () => {
    expect(formatDate('2024-01-01')).toBe('2024-01-01')
  })
  it('handles null', () => {
    expect(formatDate(null)).toBe('')
  })
})

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
  it('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })
})
```

### 组件测试

```ts
// Counter.vue —— 测试组件渲染和交互
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from '../Counter.vue'

describe('Counter', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('0')
  })

  it('increments on click', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })

  it('accepts props', () => {
    const wrapper = mount(Counter, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
  })

  it('emits event', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('.reset').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('reset')
  })
})
```

### 组件测试最佳实践

```ts
// 测试异步
import { flushPromises } from '@vue/test-utils'

it('fetches data on mount', async () => {
  const wrapper = mount(UserProfile, {
    props: { userId: '1' },
    global: {
      stubs: { 'router-link': true },
    },
  })

  // 等待异步更新
  await flushPromises()
  expect(wrapper.text()).toContain('User data')
})

// 测试 Pinia store
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })
})
```

### E2E 测试

```ts
// Cypress 示例
describe('Login flow', () => {
  it('logs in successfully', () => {
    cy.visit('/login')
    cy.get('[data-test=email]').type('user@example.com')
    cy.get('[data-test=password]').type('password123')
    cy.get('[data-test=submit]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome back')
  })
})
```

### 测试覆盖率目标

| 类型 | 覆盖率目标 | 重点 |
|------|-----------|------|
| 纯函数 | 100% | 逻辑正确性 |
| Composables | 90%+ | 逻辑分支 |
| 组件 | 80%+ | 渲染 + 交互 + 事件 |
| Store | 90%+ | Actions + Getters |
| E2E | 核心流程 | 3-5 个关键用户路径 |

### 面试追问

- Q: Vitest 和 Jest 的区别？→ Vitest 和 Vite 共享配置，更快，原生 ESM 支持
- Q: mount 和 shallowMount 的区别？→ shallowMount 不渲染子组件（适合隔离测试），mount 完整渲染
- Q: 怎么 Mock HTTP 请求？→ vitest-mock-fetch 或 MSW（Mock Service Worker）
- Q: TDD 在 Vue 项目中怎么实践？→ 先写测试再写组件，适合复杂逻辑和 composable

## Q10: Vue3 的 Transition 组件

### 基本用法

```html
<template>
  <button @click="show = !show">Toggle</button>

  <Transition name="fade">
    <p v-if="show">Hello</p>
  </Transition>
</template>

<style>
/* 进入和离开的过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
/* 进入起始和离开结束状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

### 6 个 transition class

| 阶段 | Class | 说明 |
|------|-------|------|
| 进入 | enter-from | 进入开始状态（初始） |
| 进入 | enter-active | 进入过渡中（transition/animation） |
| 进入 | enter-to | 进入结束状态 |
| 离开 | leave-from | 离开开始状态 |
| 离开 | leave-active | 离开过渡中 |
| 离开 | leave-to | 离开结束状态 |

### 使用 CSS animation

```html
<Transition name="bounce">
  <p v-if="show">Bouncing text</p>
</Transition>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0%   { transform: scale(0); }
  50%  { transform: scale(1.25); }
  100% { transform: scale(1); }
}
</style>
```

### Transition 的触发条件

```
Transition 包裹的内容必须满足以下条件之一才会触发动画：
- v-if / v-else
- v-show
- <component :is> 动态组件切换
- 根元素 is 属性切换
```

### 过渡模式

```html
<!-- out-in：先离开再进入（默认是同时） -->
<Transition name="fade" mode="out-in">
  <p :key="currentView">{{ currentView }}</p>
</Transition>

<!-- in-out：先进去再离开 -->
<Transition name="fade" mode="in-out">
  <p :key="currentView">{{ currentView }}</p>
</Transition>
```

### JavaScript 钩子

```html
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <div v-if="show">Content</div>
</Transition>

<script setup>
function onEnter(el, done) {
  // 手动控制动画
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })
  // 完成后调用 done
  setTimeout(done, 500)
}
function onLeave(el, done) {
  el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
  setTimeout(done, 300)
}
</script>
```

### TransitionGroup

```html
<!-- 列表动画 -->
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id" class="list-item">
    {{ item.text }}
    <button @click="remove(item.id)">x</button>
  </li>
</TransitionGroup>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* 让其他元素平滑移动 */
.list-move {
  transition: transform 0.5s ease;
}
</style>
```

### 自定义过渡类名（结合第三方动画库）

```html
<!-- 结合 Animate.css -->
<Transition
  name="custom"
  enter-from-class="animate__fadeInDown"
  enter-active-class="animate__animated"
  leave-to-class="animate__fadeOutUp"
  leave-active-class="animate__animated"
>
  <p v-if="show">Animated</p>
</Transition>
```

### 面试追问

- Q: Transition 和 TransitionGroup 的区别？→ Transition 单个元素，TransitionGroup 列表（含 move 过渡）
- Q: appear 属性是什么？→ `<Transition appear>` — 首次渲染也触发动画
- Q: 动态切换 key 和 Transition 的关系？→ 不同 key 触发 Transition（用 key 区分元素）
- Q: transition 在 SSR 中怎么处理？→ 仅在客户端生效，服务端直接渲染内容
- Q: 怎么和 Vue Router 配合做页面过渡？→ router-view 外层包 Transition，绑定路由 meta 的动画名
