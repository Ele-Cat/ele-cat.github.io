# Vue 2 vs Vue 3 核心差异

## 一、创建应用

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 实例化 | `new Vue({ el: '#app' })` | `createApp(App).mount('#app')` |
| 多实例 | 一个页面只能一个 Vue 实例 | 支持多个应用实例共存 |
| 全局 API | `Vue.mixin()` / `Vue.directive()` | `app.mixin()` / `app.directive()` — 按应用隔离 |

## 二、响应式系统

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 核心 | `Object.defineProperty` | `Proxy` |
| 新增属性 | ❌ 检测不到，需 `Vue.set()` | ✅ 自动追踪 |
| 删除属性 | ❌ 检测不到，需 `Vue.delete()` | ✅ 自动追踪 |
| 数组下标 | ❌ 检测不到，需 `splice()` | ✅ 原生支持 |
| 初始化开销 | 递归遍历所有属性 | 懒代理（访问到才代理） |
| Set/Map | ❌ 不支持 | ✅ 支持 |
| 多个响应式副本 | — | `ref` / `reactive` / `shallowRef` / `shallowReactive` |

## 三、API 风格

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 默认 | Options API | Options API + Composition API |
| 逻辑复用 | mixins（命名冲突、来源不清） | composables（无冲突，来源明确） |
| setup() | ❌ | ✅ |
| `<script setup>` | ❌ | ✅（3.2+） |
| TypeScript | 勉强支持（装饰器方案） | 一流支持 |

## 四、生命周期对照

| Vue 2 | Vue 3 Options | Vue 3 Composition |
|-------|---------------|-------------------|
| `beforeCreate` | `beforeCreate` | `setup()` |
| `created` | `created` | `setup()` |
| `beforeMount` | `beforeMount` | `onBeforeMount` |
| `mounted` | `mounted` | `onMounted` |
| `beforeUpdate` | `beforeUpdate` | `onBeforeUpdate` |
| `updated` | `updated` | `onUpdated` |
| `beforeDestroy` | `beforeUnmount` | `onBeforeUnmount` |
| `destroyed` | `unmounted` | `onUnmounted` |
| `errorCaptured` | `errorCaptured` | `onErrorCaptured` |
| — | `renderTracked`（开发） | `onRenderTracked` |
| — | `renderTriggered`（开发） | `onRenderTriggered` |

> Vue 3 重命名了销毁相关的生命周期，语义更清晰。

## 五、组件通信

| 方式 | Vue 2 | Vue 3 |
|-----|-------|-------|
| props + emit | ✅ | ✅（支持 `defineEmits` 类型声明） |
| v-model | 一个组件只能一个 `.sync` 修饰符 | 支持多个 `v-model:xxx` |
| provide / inject | ✅ 非响应式 | ✅ 可通过 `ref`/`reactive` 传递响应式数据 |
| event bus | `new Vue()` 实例做总线 | 推荐 `mitt` 库（3KB） |
| $attrs | 包含 class/style | 默认不包含 class/style（inheritAttrs 控制） |
| $listeners | 独立存在 | 合并到 `$attrs` |

## 六、渲染与模板

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 根元素 | 必须**一个**根节点 | 支持**多个**根节点（Fragment） |
| Teleport | ❌ | ✅ `<Teleport to="body">` |
| Suspense | ❌ | ✅（实验性 → 稳定） |
| v-memo | ❌ | ✅（3.2+，条件跳过渲染） |
| 静态提升 | ❌ | ✅ 编译时优化 |
| PatchFlags | ❌ | ✅ 标记动态节点 |
| Block Tree | ❌ | ✅ 摊平模板追踪 |
| v-if 优先级 | 比 v-for 低 | 比 v-for 高⚠️ |
| `key` 在 template | ❌ | ✅ |

## 七、生态与工具

| | Vue 2 | Vue 3 |
|--|-------|-------|
| 路由 | vue-router 3 | vue-router 4 |
| 状态管理 | Vuex 3/4 | Pinia（推荐，替代 Vuex） |
| 构建工具 | Vue CLI (Webpack) | Vite（默认） |
| DevTools | Vue Devtools 6 | Vue Devtools 7 |
| 脚手架 | `vue init` | `create-vue` |
| 组件库 | Element UI / Vant 2 | Element Plus / Vant 4 |
| 服务端渲染 | Nuxt 2 | Nuxt 3 |
| 测试 | Jest + @vue/test-utils 1 | Vitest + @vue/test-utils 2 |

## 八、升级路径要点

```
1. 生命周期：beforeDestroy → beforeUnmount, destroyed → unmounted
2. 全局 API：Vue.mixin() → app.mixin()（按应用隔离）
3. v-model：.sync 改为多个 v-model:xxx
4. 过滤器（filters）：删除，改用 computed/methods
5. 事件 API：$on/$off 删除（event bus 用 mitt）
6. v-if/v-for 优先级：反过来（3 中 v-if 优先级更高）
7. 异步组件：Vue.component() → defineAsyncComponent()
8. 函数式组件：functional: true 删除，函数组件就是普通函数
9. key 在 template 可用
10. `$listeners` 合并到 `$attrs`
```
