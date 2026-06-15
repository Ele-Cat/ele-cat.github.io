# 前端框架对比

> React / Vue3 / Angular 核心差异速查
> 基于 W1 D1~D3 实战沉淀

## 设计哲学

| 维度 | React | Vue3 | Angular |
|------|-------|------|---------|
| 范式 | 函数式 + 不可变 | 响应式 + 可变 | 响应式 + DI |
| 类型 | TS 推荐 | TS 推荐 | TS 必选 |
| 模板 | JSX | SFC 模板 + JSX | HTML 模板 |
| 组件模型 | 函数组件 | SFC (script setup) | Class + 函数 (17+ 也支持函数) |
| 状态管理 | Hooks + Context | ref/reactive + Pinia | Signals + RxJS |
| DI | 无（手动 props） | 无（provide/inject） | 内置 DI 容器 |
| 模块化 | ES modules | ES modules | NgModule / Standalone (17+) |

## 响应式原理

| | React | Vue3 | Angular |
|--|-------|------|---------|
| **机制** | Fiber 链表 + 不可变引用对比 | Proxy 代理对象，拦截 get/set | Zone.js 拦截异步 + Signal |
| **数据修改** | 不可变，必须返回新引用 | 可变，直接改属性 | 不可变（Signal 自动检测） |
| **依赖追踪** | 手动 deps 数组 | 自动（effect 系统） | Signal 自动 / Zone.js 全量 |
| **闭包陷阱** | 常见（过期闭包） | 不存在 | 不存在（Signal + effect） |

React 的 `useState` → 返回 `[value, setter]`，必须用 setter 传新值。
Vue3 的 `ref` → 返回响应式对象，直接改 `.value`。
Angular 的 `signal` → 返回 getter 函数，`.set()` / `.update()` 更新。

## 渲染机制

| | React | Vue3 | Angular |
|--|-------|------|---------|
| **虚拟 DOM** | 全量创建 + 全量 diff | 只创建动态节点（PatchFlags） | 无虚拟 DOM（模板编译直接操作 DOM） |
| **编译优化** | 几乎没有（JSX 全动态） | 静态提升 + Block Tree + PatchFlags | AOT 编译，模板直接生成指令 |
| **优化手段** | memo / useCallback / useMemo | 默认已优化 | OnPush 策略 + trackBy |
| **渲染触发** | 整个组件重渲染 → diff | 精确到动态节点 | Zone.js 拦截异步 → 全树检查 |
| **diff 算法** | 右端优先（React 16+） | 双端 diff | 无（无虚拟 DOM） |

## 性能优化策略

| 场景 | React | Vue3 | Angular |
|------|-------|------|---------|
| 避免子组件重渲染 | `React.memo` + `useCallback` | 默认跳过 | `OnPush` 策略 |
| 派生状态缓存 | `useMemo` | `computed` | `computed` (Signal) |
| 大列表优化 | `key` + 虚拟滚动 | `:key` + 虚拟滚动 | `track` (`@for`) + 虚拟滚动 |
| 条件渲染 | `{cond && <A/>}` | `v-if / v-show` | `@if / @else` |
| 避免闭包陷阱 | `useCallback` + deps | 不存在 | 不存在 |

## 开发体验

| | React | Vue3 | Angular |
|--|-------|------|---------|
| **TS 集成** | 泛型组件需额外工作 | `defineProps<{}>()` 原生支持 | 强制 TS，原生支持最完善 |
| **双向绑定** | 手动 `value + onChange` | `v-model` / `defineModel` | `[(ngModel)]` / `model()` |
| **表单处理** | 受控 / 非受控 | `v-model` | `FormsModule` / `ReactiveForms` |
| **子传父** | 回调 props | `emit` | `output()` |
| **插槽** | `{children}` / render props | `<slot>` | `<ng-content>` |
| **样式** | className / CSS-in-JS | `<style scoped>` | `[class.active]` / `:host` |
| **HTTP** | fetch / axios | fetch / axios | HttpClient（内置） |
| **路由** | React Router | Vue Router | Router（内置） |

## 变更检测对比

```
Angular: Zone.js 拦截 setTimeout/Promise/事件 → 全树检查
         ↓ OnPush 缩到只检查当前组件（类似 React.memo）
         ↓ Signal 精确到消费者

React:   setState → 当前组件 + 整个子树递归 diff
         ↓ memo/useCallback 控制子组件跳不跳过

Vue3:    ref.value = x → 精确到动态节点
         ↓ 不需要任何手动优化
```

## 编译策略

| | React | Vue3 | Angular |
|--|-------|------|---------|
| **编译时机** | 运行时 | 构建时 + 运行时 | AOT 编译（构建时） |
| **模板** | JSX = JS | SFC 模板 | HTML 模板 |
| **产物** | createElement 调用 | 带 PatchFlags 的 render 函数 | 直接操作 DOM 的指令 |
| **优化空间** | 小（JSX 全动态） | 大（模板可静态分析） | 大（AOT + 模板） |

```
Angular 没有虚拟 DOM：模板编译成直接操作 DOM 的指令
Vue3 有虚拟 DOM：但编译优化了动态节点追踪
React 有虚拟 DOM：全量 diff，靠 Fiber 分片缓解
```

## 何时用什么

| 场景 | 推荐框架 |
|------|---------|
| 大型企业应用 | Angular（结构化/类型安全/内置齐全） |
| 快速迭代 + 灵活 | React（生态最大/社区最活跃） |
| 中小型 + 快速上手 | Vue3（学习曲线最低/渐进式） |
| 全栈 SSR | Next.js (React) / Nuxt (Vue3) / Angular Universal |
| 跨端移动 | RN (React) / uni-app (Vue) |
| 微前端 | 三者均可（MF / qiankun） |
