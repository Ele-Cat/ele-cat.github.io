# Vue 面试题

## Vue2

## ​1、什么是前端构建工具，比如（Vue2 的 webpack，Vue3 的 Vite）

### 1、前端构建工具的定义

前端构建工具是指**用于自动化处理前端开发过程中各种重复性任务的工具集合**，它们能够将开发人员编写的源代码转换为生产环境可用的优化文件。

### 2、核心功能

#### 1. 代码转换与编译
- **JavaScript转换**：ES6+ → ES5（Babel）
- **CSS预处理器**：Sass/Less → CSS
- **模板编译**：Vue/React模板 → JavaScript

#### 2. 模块打包
- **依赖管理**：解析模块依赖关系
- **代码分割**：按需加载优化
- **Tree Shaking**：消除未使用代码

#### 3. 资源优化
- **文件压缩**：JS/CSS/HTML压缩
- **图片优化**：压缩、转WebP等
- **代码混淆**：保护源代码

#### 4. 开发辅助
- **热模块替换(HMR)**：实时预览修改
- **Source Map**：调试压缩代码
- **本地服务器**：开发环境搭建

### 3、主流构建工具对比

| 工具 | 特点 | 适用场景 |
|------|------|----------|
| **Webpack** | 功能全面、配置灵活、生态丰富 | 复杂SPA项目 |
| **Rollup** | 输出更简洁、适合库开发 | 类库/组件开发 |
| **Parcel** | 零配置、快速上手 | 简单项目/快速原型 |
| **Vite** | 基于ESM、极速启动 | 现代前端项目 |
| **Snowpack** | 无打包开发、ESM原生支持 | 模块化开发 |

### 4、现代构建工具演进

#### 1. 第一代：任务运行器
- **Grunt**：基于配置的任务运行器
- **Gulp**：基于代码的任务运行器

#### 2. 第二代：模块打包器
- **Webpack**：成为行业标准
- **Rollup**：专注于库打包

#### 3. 第三代：无打包开发
- **Vite**：利用浏览器ESM
- **Snowpack**：开发时不打包

### 5、面试回答要点

1. **定义清晰**：说明构建工具的核心目的和功能
2. **发展脉络**：了解构建工具的演进历史
3. **工具对比**：能比较主流工具的优缺点
4. **实际经验**：分享具体使用经验
5. **趋势把握**：关注ESM、无打包等新方向

示例回答：
"前端构建工具是自动化处理源代码到生产代码转换的工具链，主要功能包括代码转换、模块打包、资源优化等。从早期的Grunt/Gulp到Webpack成为主流，再到现代Vite等基于ESM的工具，构建工具不断演进。选择时需考虑项目需求，如Webpack适合复杂SPA，Vite能提供极速开发体验。"

## 2、简述 MVVM 和 MVC 的原理以及区别

### 1、MVC (Model-View-Controller)

#### 1. 基本原理
MVC 是一种经典的软件架构模式，将应用程序分为三个核心组件：

```
┌─────────┐    ┌──────────┐    ┌─────────┐
│   View  │ ←→ │Controller│ ←→ │  Model  │
└─────────┘    └──────────┘    └─────────┘
```

- **Model (模型)**: 负责数据和业务逻辑
- **View (视图)**: 负责UI展示
- **Controller (控制器)**: 接收用户输入，协调Model和View

#### 2. 工作流程
1. 用户操作View触发事件
2. Controller接收并处理事件
3. Controller更新Model状态
4. Model通知View更新显示
5. View从Model获取最新数据重新渲染

#### 3. 特点
- 单向数据流
- View和Model通过Controller间接通信
- 适合传统的服务端渲染应用

### 2、MVVM (Model-View-ViewModel)

#### 1. 基本原理
MVVM 是MVC的演进模式，特别适合现代前端开发：

```
┌─────────┐    ┌─────────────┐    ┌─────────┐
│   View  │ ←→ │  ViewModel  │ ←→ │  Model  │
└─────────┘    └─────────────┘    └─────────┘
```

- **Model (模型)**: 数据层
- **View (视图)**: UI展示层
- **ViewModel (视图模型)**: 连接View和Model的桥梁

#### 2. 核心机制
- **数据绑定**: View和ViewModel自动同步
- **命令绑定**: UI事件直接绑定到ViewModel方法
- **依赖追踪**: 自动检测数据变化并更新视图

#### 3. 特点
- 双向数据绑定
- View和ViewModel直接通信
- 适合数据驱动的现代前端框架(Vue/Angular等)

### 3、主要区别对比

| 特性                | MVC                          | MVVM                         |
|---------------------|------------------------------|------------------------------|
| **通信方式**        | 单向(通过Controller中介)      | 双向(数据绑定)                |
| **核心组件**        | Controller居中协调           | ViewModel实现数据绑定         |
| **耦合度**          | 视图与模型解耦                | 视图与视图模型高度绑定         |
| **数据流**          | 单向数据流                   | 双向数据绑定                  |
| **适用场景**        | 传统Web应用                  | 现代数据驱动型SPA             |
| **开发效率**        | 需要手动更新视图              | 自动同步提高开发效率           |
| **典型框架**        | Backbone.js, Ruby on Rails   | Vue.js, Angular, Knockout    |

### 4、现代框架中的实现

#### 1. Vue中的MVVM
```js
// Model
const data = { message: 'Hello' }

// View (模板)
<div id="app">
  {{ message }}
</div>

// ViewModel (Vue实例)
new Vue({
  el: '#app',
  data: data  // 自动建立绑定
})
```

#### 2. React的类MVVM模式
React虽然不严格遵循MVVM，但通过状态管理实现了类似效果：
```jsx
// Model (状态)
class MyComponent extends React.Component {
  state = { message: 'Hello' }
  
  // ViewModel逻辑
  handleClick = () => {
    this.setState({ message: 'Updated' })
  }
  
  // View (JSX)
  render() {
    return <div onClick={this.handleClick}>{this.state.message}</div>
  }
}
```

### 5、面试回答要点

1. **架构组成**：清晰说明各组件的职责
2. **数据流向**：强调MVC的单向和MVVM的双向特性
3. **实际应用**：举例说明在框架中的实现
4. **优劣对比**：分析两种模式的适用场景
5. **演进理解**：从MVC到MVVM的发展必要性

示例回答：
"MVC将应用分为Model、View、Controller三层，通过Controller协调实现单向数据流，适合传统Web开发。MVVM引入ViewModel替代Controller，通过数据绑定实现View和Model自动同步，提高了开发效率，适合现代数据驱动型应用。Vue是典型的MVVM实现，而React通过状态管理也实现了类似模式。选择架构时，简单项目可用MVC，复杂数据驱动型SPA更适合MVVM。"

## 3、Vue 生命周期八个阶段及适用场景

### 1、Vue 生命周期完整流程

```
创建阶段 → 挂载阶段 → 更新阶段 → 销毁阶段
```

### 2、八个生命周期钩子及适用场景

#### 1. 创建阶段 (Initialization)

##### beforeCreate
**触发时机**：实例初始化后，数据观测(data observer)和event/watcher事件配置之前

**适用场景**：
- 插件开发中需要在最早阶段添加全局功能
- 极少数需要在此阶段执行的操作

```js
beforeCreate() {
  // 此时无法访问data、computed、methods等
  console.log('beforeCreate:', this.$data); // undefined
}
```

##### created
**触发时机**：实例创建完成，数据观测、属性和方法的运算完成，但DOM未生成

**适用场景**：
- 异步数据请求（最早可获取数据的时机）
- 初始化非响应式变量
- 事件监听器的早期设置
- 计算属性的初始化

```js
created() {
  // 可以访问data、methods等，但$el未生成
  this.fetchData(); // 常用作数据请求
  this.timer = setInterval(...); // 初始化非响应式变量
}
```

#### 2. 挂载阶段 (DOM Mounting)

##### beforeMount
**触发时机**：模板编译/渲染函数编译完成，首次DOM挂载之前

**适用场景**：
- 很少直接使用
- 需要在渲染前最后一次修改数据的机会

```js
beforeMount() {
  // 极少在此处操作，通常用created代替
}
```

##### mounted
**触发时机**：实例挂载到DOM后调用

**适用场景**：
- 访问或操作DOM元素
- 初始化依赖DOM的第三方库
- 执行需要组件完全渲染后的操作

```js
mounted() {
  // 常用场景
  this.$refs.myInput.focus(); // DOM操作
  this.initChart(); // 初始化ECharts等库
  this.startAnimation(); // 启动动画
}
```

#### 3. 更新阶段 (Re-rendering)

##### beforeUpdate
**触发时机**：数据变化导致虚拟DOM重新渲染和打补丁之前

**适用场景**：
- 获取更新前的DOM状态
- 跟踪数据变化但不想立即更新视图的情况

```js
beforeUpdate() {
  // 记录滚动位置等更新前状态
  this.scrollTop = this.$refs.list.scrollTop;
}
```

##### updated
**触发时机**：虚拟DOM重新渲染和打补丁后

**适用场景**：
- 执行依赖更新后DOM的操作
- 根据新DOM状态调整第三方库

```js
updated() {
  // 恢复滚动位置
  this.$refs.list.scrollTop = this.scrollTop;
  // 更新图表数据
  this.updateChart();
}
```

#### 4. 销毁阶段 (Destruction)

##### beforeDestroy
**触发时机**：实例销毁之前，此时实例仍完全可用

**适用场景**：
- 清除定时器、事件监听器等资源
- 取消未完成的网络请求
- 保存用户数据到本地存储

```js
beforeDestroy() {
  // 清除定时器
  clearInterval(this.timer);
  // 取消事件监听
  window.removeEventListener('resize', this.handleResize);
  // 取消axios请求
  this.cancelToken && this.cancelToken.cancel();
}
```

##### destroyed
**触发时机**：实例销毁后调用，所有绑定和监听器被移除

**适用场景**：
- 极少直接使用（因为所有东西都已解绑）
- 最后的清理工作（但beforeDestroy更合适）

```js
destroyed() {
  console.log('组件已销毁');
}
```

### 3、特殊生命周期钩子

#### activated (keep-alive组件专属)
**适用场景**：缓存组件重新激活时恢复数据或状态

```js
activated() {
  this.fetchFreshData(); // 重新获取最新数据
}
```

#### deactivated (keep-alive组件专属)
**适用场景**：缓存组件停用时保存状态

```js
deactivated() {
  this.saveState(); // 保存组件状态
}
```

### 4、生命周期使用最佳实践

1. **数据请求**：优先使用`created`而非`mounted`（更早发起请求）
2. **DOM操作**：必须在`mounted`及之后进行
3. **资源清理**：在`beforeDestroy`中完成
4. **避免在`updated`中修改状态**：可能导致无限更新循环
5. **复杂逻辑拆分**：将不同职责的代码放入对应生命周期

### 5、面试回答要点

1. **阶段划分**：清晰描述四个主要阶段（创建、挂载、更新、销毁）
2. **关键钩子**：重点说明created、mounted、beforeDestroy的典型用法
3. **场景对应**：将生命周期与具体开发场景关联
4. **注意事项**：强调DOM操作时机和内存管理
5. **实践经验**：分享实际项目中的使用经验

示例回答：
"Vue生命周期分为创建、挂载、更新、销毁四个阶段共8个钩子。created阶段适合异步数据请求，此时可访问数据但DOM未生成；mounted是操作DOM和初始化第三方库的最佳时机；beforeUpdate/updated用于处理更新前后的DOM状态；beforeDestroy必须清理定时器、事件监听等资源。实际项目中，我通常在created请求数据，mounted初始化ECharts图表，beforeDestroy清除所有资源以避免内存泄漏。"

## 4、vue 中的 data 为什么是一个函数

### 1、核心原因：组件实例隔离

在 Vue 中，`data` 必须是一个函数而不是一个对象，**主要是为了保证每个组件实例都有独立的数据副本**，避免多个组件实例共享同一个数据对象导致的状态污染问题。

### 2、原理详解

#### 1. 对象形式的 data 会导致什么问题？

如果直接使用对象形式：
```js
data: {
  count: 0
}
```

当这个组件被复用时：
- 所有实例将共享同一个数据对象
- 一个实例修改数据会影响所有其他实例
- 完全违背了组件"独立"的设计原则

#### 2. 函数形式如何解决这个问题？

使用函数形式：
```js
data() {
  return {
    count: 0
  }
}
```

每次组件实例化时：
1. Vue 会调用这个 data 函数
2. 函数返回一个全新的数据对象
3. 每个实例获得自己独立的数据副本

### 3、底层实现机制

Vue 在初始化组件时的处理流程：

```js
function initData(vm) {
  let data = vm.$options.data
  // 判断data是否是函数
  data = vm._data = typeof data === 'function'
    ? getData(data, vm) // 执行函数获取新对象
    : data || {}
  
  // 代理data到实例上
  proxy(vm, '_data', key)
}
```

### 4、特殊场景说明

#### 1. 根实例可以是对象
```js
new Vue({
  data: { count: 0 } // 允许，因为根实例不会复用
})
```

#### 2. 为什么要返回全新对象？
```js
data() {
  return { ... } // 必须返回新对象，不能返回外部变量
}
```

如果返回外部引用：
```js
const sharedData = { count: 0 }

export default {
  data() {
    return sharedData // 错误！仍然会导致共享
  }
}
```

### 5、面试回答要点

1. **核心目的**：保证组件实例数据独立性
2. **问题场景**：说明对象形式会导致的状态共享问题
3. **解决方案**：函数每次返回新对象
4. **例外情况**：根实例可以使用对象形式
5. **实现原理**：简要说明Vue内部如何处理data函数

示例回答：
"Vue组件中的data必须是函数而不是对象，主要是为了防止多个组件实例共享同一份数据导致的状态污染。通过函数形式，每次组件实例化时都会调用data函数返回一个全新的数据对象，确保每个实例都有独立的数据副本。这是Vue组件设计的重要机制，只有根实例因为不会被复用，才允许直接使用对象形式的data。"

## 5、vue 常见指令

### 1、核心指令

#### 1. 数据绑定指令
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-text` | 更新元素的 textContent | `<span v-text="message"></span>` |
| `v-html` | 更新元素的 innerHTML | `<div v-html="rawHtml"></div>` |
| `v-bind` (简写 `:`) | 动态绑定属性 | `<img :src="imageSrc">` |

#### 2. 条件渲染指令
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-if` | 条件性渲染元素 | `<div v-if="seen"></div>` |
| `v-else` | 必须跟在 v-if/v-else-if 后 | `<div v-else></div>` |
| `v-else-if` | 充当 v-if 的 else-if 块 | `<div v-else-if="type === 'B'"></div>` |
| `v-show` | 基于条件切换 display 属性 | `<h1 v-show="ok"></h1>` |

#### 3. 列表渲染指令
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-for` | 基于源数据多次渲染元素 | `<li v-for="item in items" :key="item.id">` |

#### 4. 事件处理指令
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-on` (简写 `@`) | 监听 DOM 事件 | `<button @click="doThis"></button>` |

#### 5. 表单输入绑定
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-model` | 表单输入双向绑定 | `<input v-model="message">` |

### 2、特殊指令

#### 1. 动态参数
```html
<a v-bind:[attributeName]="url"></a>
<button @[eventName]="doSomething"></button>
```

#### 2. 自定义指令
```js
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
```
使用：`<input v-focus>`

#### 3. 其他指令
| 指令 | 说明 | 示例 |
|------|------|------|
| `v-pre` | 跳过编译 | `<div v-pre>{{ 这里不会被编译 }}</div>` |
| `v-cloak` | 隐藏未编译的 Mustache 标签 | `<div v-cloak>{{ message }}</div>` |
| `v-once` | 只渲染元素一次 | `<span v-once>{{ msg }}</span>` |

### 3、指令修饰符

#### 1. 事件修饰符
```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>
```

#### 2. 按键修饰符
```html
<!-- 只有在 `key` 是 Enter 时调用 `submit` -->
<input @keyup.enter="submit">
```

#### 3. 系统修饰键
```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething"></div>
```

#### 4. v-model 修饰符
```html
<!-- 在 "change" 事件后同步更新 -->
<input v-model.lazy="msg">

<!-- 自动将输入转为数字 -->
<input v-model.number="age">

<!-- 自动过滤首尾空白字符 -->
<input v-model.trim="msg">
```

### 4、面试回答要点

1. **分类清晰**：将指令分为数据绑定、条件渲染等类别
2. **重点突出**：强调 v-if/v-show 区别、v-for 的 key 重要性
3. **实际应用**：举例说明指令修饰符的使用场景
4. **扩展能力**：提及自定义指令的实现方式
5. **性能考量**：说明 v-once 等指令的优化作用

示例回答：
"Vue指令分为数据绑定(v-bind)、条件渲染(v-if)、列表渲染(v-for)、事件处理(v-on)和表单绑定(v-model)等类别。v-if和v-show的区别在于前者是真正的条件渲染，后者只是切换display属性；v-for必须使用key属性保证高效更新；v-model通过修饰符.lazy、.number等实现不同需求。此外Vue支持通过directive API创建自定义指令，扩展模板功能。"

## 6、v-show 与 v-if 的区别

### 1、核心区别对比

| 特性                | v-show                      | v-if                        |
|---------------------|----------------------------|----------------------------|
| **实现机制**         | 切换 CSS 的 display 属性     | 条件性地销毁/重建 DOM 元素   |
| **初始渲染成本**     | 较高（无论条件如何都会渲染） | 较低（条件为假时不渲染）      |
| **切换成本**         | 低（仅切换 CSS 属性）        | 高（涉及 DOM 操作）         |
| **编译阶段**         | 无论条件如何都会被编译       | 条件为假时不会编译           |
| **生命周期**         | 始终会触发生命周期钩子       | 切换时会触发完整生命周期      |
| **适用场景**         | 频繁切换的场景              | 运行时条件很少改变的场景      |

### 2、工作原理详解

#### 1. v-show 实现原理
```js
// 伪代码展示v-show实现
function vShow(el, value) {
  el.style.display = value ? '' : 'none';
}
```
- 始终渲染并保留在 DOM 中
- 只是简单地切换 `display: none` CSS 属性
- 组件生命周期钩子会始终执行

#### 2. v-if 实现原理
```js
// 伪代码展示v-if实现
function vIf(el, value) {
  if (value) {
    // 插入DOM并执行挂载
    mountComponent();
  } else {
    // 移除DOM并执行销毁
    unmountComponent();
  }
}
```
- 条件为真时才会渲染
- 涉及组件的创建/销毁过程
- 触发完整的生命周期钩子

### 3、性能对比图示

```
v-show 初始渲染:
┌─────────────┐     ┌──────────────┐
│  渲染组件    │───▶│ display:block│
└─────────────┘     └──────────────┘
        │
        ▼
┌─────────────┐     ┌──────────────┐
│  隐藏组件    │───▶│ display:none │
└─────────────┘     └──────────────┘

v-if 条件渲染:
┌─────────────┐     ┌─────────────┐
│ 条件为真     │───▶│ 创建并渲染   │
└─────────────┘     └─────────────┘
        │
        ▼
┌─────────────┐     ┌─────────────┐
│ 条件为假     │───▶│ 完全销毁     │
└─────────────┘     └─────────────┘
```

### 4、适用场景分析

#### 1. 推荐使用 v-show 的情况
- **频繁切换**（如选项卡切换）
- **初始条件不确定**（避免闪烁）
- **组件初始化成本高**（如复杂表单）

```html
<!-- 适合v-show的场景 -->
<div v-show="activeTab === 'profile'">
  用户资料内容...
</div>
```

#### 2. 推荐使用 v-if 的情况
- **条件很少改变**（如权限控制）
- **需要减少初始负载**（首屏优化）
- **组件包含大量子组件**

```html
<!-- 适合v-if的场景 -->
<admin-panel v-if="user.role === 'admin'"></admin-panel>
```

### 5、特殊注意事项

1. **与 v-for 一起使用时**：
   - `v-if` 有更高的优先级（Vue 2.x）
   - 推荐使用 `<template>` 标签包裹

2. **过渡动画效果**：
   - `v-show` 可以很好地与过渡动画配合
   - `v-if` 的切换也可以使用过渡效果

3. **服务器端渲染(SSR)**：
   - `v-if` 为 false 时不会出现在渲染输出中
   - `v-show` 始终会渲染在输出中

### 6、面试回答要点

1. **机制差异**：强调CSS切换 vs DOM操作
2. **性能对比**：初始渲染成本 vs 切换成本
3. **生命周期**：说明两者对生命周期的影响
4. **使用场景**：给出具体的适用场景示例
5. **实践经验**：分享实际项目中的选择经验

示例回答：
"v-show通过切换display属性控制显示隐藏，无论条件如何都会渲染DOM，适合频繁切换的场景；v-if是真正的条件渲染，通过销毁/重建DOM实现，适合条件不常改变的场景。v-show有较高的初始渲染成本但切换开销小，v-if则相反。实际项目中，选项卡内容常用v-show，权限控制组件多用v-if。"

## 7、Vue 组件之间的通信方式

### 1、父子组件通信

#### 1. Props 向下传递
**适用场景**：父组件向子组件传递数据

```js
// 父组件
<ChildComponent :message="parentMsg" />

// 子组件
export default {
  props: ['message']
}
```

#### 2. $emit 事件向上传递
**适用场景**：子组件向父组件传递数据

```js
// 子组件
this.$emit('update', newValue)

// 父组件
<ChildComponent @update="handleUpdate" />
```

#### 3. v-model 语法糖
**适用场景**：实现父子组件双向绑定

```js
// 父组件
<ChildComponent v-model="message" />

// 子组件
export default {
  props: ['value'],
  methods: {
    updateValue(val) {
      this.$emit('input', val)
    }
  }
}
```

### 2、非父子组件通信

#### 1. Event Bus 事件总线
**适用场景**：任意组件间通信

```js
// 创建事件总线（event-bus.js）
export const bus = new Vue()

// 发送事件组件
bus.$emit('event-name', data)

// 接收事件组件
bus.$on('event-name', data => {
  // 处理数据
})
```

#### 2. Vuex 状态管理
**适用场景**：中大型应用集中状态管理

```js
// store.js
export default new Vuex.Store({
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

// 组件中使用
this.$store.commit('increment')
```

### 3、高级通信方式

#### 1. $refs 访问组件实例
**适用场景**：父组件直接调用子组件方法

```js
// 父组件
<ChildComponent ref="child" />

methods: {
  callChildMethod() {
    this.$refs.child.childMethod()
  }
}
```

#### 2. $parent / $children
**适用场景**：直接访问父/子组件（不推荐，耦合性高）

```js
// 访问父组件
this.$parent.parentMethod()

// 访问子组件
this.$children[0].childMethod()
```

#### 3. provide / inject
**适用场景**：祖先组件向子孙组件跨级传递数据

```js
// 祖先组件
export default {
  provide() {
    return {
      theme: this.themeData
    }
  }
}

// 子孙组件
export default {
  inject: ['theme']
}
```

### 4、特殊场景通信

#### 1. $attrs / $listeners
**适用场景**：多层嵌套组件属性/事件透传

```js
// 父组件
<ChildComponent v-bind="$attrs" v-on="$listeners" />
```

#### 2. 插槽通信
**适用场景**：父组件通过插槽向子组件传递内容

```js
// 子组件
<slot :user="user"></slot>

// 父组件
<ChildComponent>
  <template v-slot:default="slotProps">
    {{ slotProps.user.name }}
  </template>
</ChildComponent>
```

### 5、面试回答要点

1. **分类清晰**：区分父子通信、跨级通信和全局通信
2. **场景对应**：说明每种方式的适用场景
3. **优缺点分析**：如Event Bus简单但难以维护，Vuex适合大型应用等
4. **实践经验**：分享实际项目中的使用经验
5. **Vue3变化**：提及Vue3中废弃的API（如$children）

示例回答：
"Vue2组件通信主要有三种场景：父子组件间通过props/$emit通信；非父子组件可通过Event Bus或Vuex；跨层级组件可用provide/inject。实际项目中，简单场景用props/$emit，复杂数据流用Vuex，临时需求可用Event Bus。需要注意$parent/$children会导致高耦合，Vue3中已废弃。"

## 8、Vuex 的理解及使用场景

### 1、Vuex 核心理解

Vuex 是 Vue.js 的**状态管理模式+库**，它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

#### 1. Vuex 的核心概念

| 概念 | 作用 | 示例 |
|------|------|------|
| **State** | 单一状态树，存储应用状态数据 | `state: { count: 0 }` |
| **Getters** | 从state派生的计算属性 | `getters: { doubleCount: state => state.count * 2 }` |
| **Mutations** | 唯一更改state的方法（同步） | `mutations: { increment(state) { state.count++ } }` |
| **Actions** | 提交mutation，可包含异步操作 | `actions: { asyncIncrement({ commit }) { setTimeout(() => commit('increment'), 1000) } }` |
| **Modules** | 将store分割成模块 | `modules: { user: userModule }` |

#### 2. Vuex 工作原理

```
组件 → Dispatch → Actions → Commit → Mutations → Mutate → State → Render → 组件
```

### 2、Vuex 的使用场景

#### 1. 适合使用 Vuex 的场景

1. **中大型单页应用**：需要多个组件共享状态时
2. **组件需要共享以下数据**：
   - 用户登录状态、权限信息
   - 购物车数据
   - 全局配置信息
   - 多组件共享的表单数据
3. **需要可预测的状态变更**：方便调试和时间旅行
4. **跨组件通信复杂**：避免过多的事件总线($emit/$on)

#### 2. 不适合使用 Vuex 的场景

1. 小型简单应用（可能增加不必要的复杂度）
2. 组件私有状态（应使用组件data）
3. 简单的父子组件通信（props/$emit足够）

### 3、Vuex 最佳实践

#### 1. 项目结构组织

```
store/
├── index.js          # 组装模块并导出store
├── actions.js        # 根级别的action
├── mutations.js      # 根级别的mutation
├── modules/
│   ├── user.js       # 用户模块
│   └── products.js   # 产品模块
```

#### 2. 代码示例

```js
// store/modules/user.js
const userModule = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    SET_USER_INFO(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await api.login(credentials)
      commit('SET_TOKEN', data.token)
      commit('SET_USER_INFO', data.user)
    },
    async logout({ commit }) {
      await api.logout()
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', null)
      localStorage.removeItem('token')
    }
  },
  getters: {
    isAuthenticated: state => !!state.token
  }
}
```

#### 3. 组件中使用

```js
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapGetters('user', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('user', ['login', 'logout']),
    handleLogin() {
      this.login(this.credentials)
        .then(() => this.$router.push('/dashboard'))
        .catch(error => alert(error.message))
    }
  }
}
```

### 4、面试回答要点

1. **核心概念**：清楚说明state、getters、mutations、actions的作用
2. **工作流程**：描述数据如何通过actions→mutations→state流动
3. **使用场景**：明确何时该用Vuex，何时不需要
4. **实践经验**：分享实际项目中的使用经验
5. **替代方案**：提及简单的provide/inject或事件总线

示例回答：
"Vuex是Vue的集中式状态管理方案，核心包含state存储数据、getters计算派生状态、mutations同步修改状态、actions处理异步操作。它适合中大型应用中多组件共享状态的场景，如用户信息、全局配置等。使用时应遵循单向数据流：组件dispatch actions→actions commit mutations→mutations修改state→state触发视图更新。在项目中我们按功能划分modules，配合namespaced避免命名冲突。对于小型项目，如果props/event或简单事件总线能满足需求，则不必引入Vuex。"

## 9、keep-alive 的作用及核心原理

### 1、核心作用
`keep-alive` 是 Vue 内置的抽象组件，用于**缓存组件实例**，主要解决以下问题：

1. **组件状态保留**：避免重复渲染导致的组件状态丢失
2. **性能优化**：减少不必要的 DOM 操作和生命周期触发
3. **流畅体验**：实现快速切换时的平滑过渡效果

### 2、核心特性

#### 1. 生命周期变化
| 常规生命周期 | keep-alive 特有生命周期 |
|-------------|----------------------|
| created     | activated (激活时调用) |
| mounted     | deactivated (失活时调用) |
| destroyed   | (不会立即销毁)        |

#### 2. 缓存机制
- 首次加载：完整执行 `created` → `mounted`
- 再次激活：仅触发 `activated`，跳过创建/挂载阶段
- 失活时：触发 `deactivated`，保留组件实例在内存中

### 3、使用场景

#### 1. 典型应用场景
- 标签页切换（如后台管理系统）
- 列表页 → 详情页 → 返回列表页（保留滚动位置和筛选状态）
- 表单内容缓存（避免输入内容丢失）
- 需要保持播放状态的媒体组件

#### 2. 代码示例
```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

### 4、高级配置

#### 1. 条件缓存
```html
<!-- 只缓存指定组件 -->
<keep-alive include="Home,Profile">
  <router-view/>
</keep-alive>

<!-- 排除特定组件 -->
<keep-alive exclude="Login">
  <router-view/>
</keep-alive>
```

#### 2. 动态缓存策略
```js
// 结合路由meta配置
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"/>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"/>
```

### 5、注意事项

1. **内存消耗**：缓存过多组件会占用内存，需合理设置 `max` 属性
2. **数据更新**：激活后可能需要手动刷新数据（在 `activated` 钩子中处理）
3. **组件唯一性**：需确保组件具有唯一 `key` 才能正确缓存
4. **不适用场景**：需要实时数据更新的组件（如实时监控）

### 6、面试回答要点

1. **核心价值**：强调状态保留和性能优化
2. **生命周期**：说明特有的 activated/deactivated 钩子
3. **实际应用**：举例典型使用场景
4. **注意事项**：提及内存管理和数据更新问题
5. **进阶用法**：条件缓存和动态策略

示例回答：
"keep-alive是Vue内置的缓存组件，通过保留不活跃的组件实例来优化性能。它会使组件触发特有的activated和deactivated钩子，而不是常规的销毁/重建过程。典型应用包括需要保持状态的页面切换，如后台系统的标签页或列表详情页的滚动位置保留。使用时需要注意合理控制缓存数量，并在activated钩子中处理必要的数据刷新。"

## 10、vue2 中 ref 的作用

### 1、核心作用

在 Vue2 中，`ref` 是一个特殊的属性，主要用于：

1. **获取 DOM 元素**：直接访问模板中的 DOM 节点
2. **访问子组件实例**：获取子组件的 Vue 实例
3. **注册元素/组件引用**：在父组件中引用子元素或子组件

### 2、基本使用方式

#### 1. 获取 DOM 元素

```html
<template>
  <input ref="myInput" type="text">
</template>

<script>
export default {
  mounted() {
    this.$refs.myInput.focus() // 直接操作DOM元素
  }
}
</script>
```

#### 2. 访问子组件实例

```html
<template>
  <child-component ref="myChild"></child-component>
</template>

<script>
export default {
  methods: {
    callChildMethod() {
      this.$refs.myChild.someMethod() // 调用子组件方法
      this.$refs.myChild.someData = 'new value' // 访问子组件数据
    }
  }
}
</script>
```

### 3、关键特性

| 特性 | 说明 |
|------|------|
| **引用注册** | 在组件渲染完成后填充 |
| **非响应式** | `$refs` 不是响应式的 |
| **唯一性** | 同一个 ref 名称只能对应一个元素/组件 |
| **生命周期** | 只能在 `mounted` 及之后访问 |

### 4、使用场景

#### 1. 表单操作
```js
// 聚焦输入框
this.$refs.emailInput.focus()

// 获取表单值
const value = this.$refs.myInput.value
```

#### 2. 组件通信
```js
// 父组件调用子组件方法
this.$refs.childComponent.submitForm()

// 访问子组件数据
const childData = this.$refs.childComponent.someData
```

#### 3. 动画控制
```js
// 触发元素动画
this.$refs.myElement.classList.add('animate')
```

### 5、注意事项

1. **非响应式**：`$refs` 不会触发视图更新
2. **异步性**：在初始渲染期间 `$refs` 为空
3. **避免滥用**：过度使用会导致代码难以维护
4. **组合使用**：可与 `v-for` 一起使用（返回数组）

```html
<div v-for="item in list" :ref="'item' + item.id"></div>

<script>
// 访问方式
this.$refs['item1'][0]
</script>
```

### 6、与 Vue3 的 ref 区别

| 特性 | Vue2 | Vue3 |
|------|------|------|
| **创建方式** | 模板属性 | `ref()` 函数 |
| **响应性** | 非响应式 | 响应式 |
| **访问方式** | `this.$refs.xxx` | `xxx.value` |
| **用途** | 仅引用 | 也可创建响应式数据 |

### 7、面试回答要点

1. **核心功能**：强调 DOM 操作和组件实例访问
2. **使用限制**：说明非响应式和生命周期限制
3. **典型场景**：举例表单操作和组件通信
4. **最佳实践**：避免过度使用
5. **版本差异**：简要对比 Vue3 的变化

示例回答：
"Vue2中的ref主要用于获取DOM元素和访问子组件实例，通过$refs对象访问注册的引用。需要注意的是refs不是响应式的，且只能在mounted及之后的生命周期中访问。典型应用包括表单元素操作和父子组件方法调用。与Vue3不同，Vue2的ref只是模板引用功能，不用于创建响应式数据。"

## 11、Vue 中 hash 和 history 路由模式的区别

### 1、核心区别对比

| 特性                | hash 模式                          | history 模式                      |
|---------------------|-----------------------------------|-----------------------------------|
| **URL 表现**         | 带 `#` 符号（如 `http://example.com/#/home`） | 普通 URL（如 `http://example.com/home`） |
| **实现原理**         | 基于 `window.location.hash` 和 `onhashchange` 事件 | 基于 HTML5 History API (`pushState`, `replaceState`) |
| **服务器配置**       | 不需要特殊配置                     | 需要服务器支持（配置重定向规则）       |
| **兼容性**           | 兼容所有浏览器（包括 IE9 及以下）    | 需要 IE10+ 或现代浏览器               |
| **SEO 友好性**       | 较差（搜索引擎可能忽略 # 后的内容）   | 较好（完整的 URL 路径）               |
| **刷新页面**         | 不会向服务器发送请求                | 会向服务器发送请求（可能导致 404）      |
| **部署要求**         | 可直接部署                         | 需要服务器配置 URL 重定向到 index.html |

### 2、实现原理详解

#### 1. hash 模式工作原理
```js
// 1. 监听 hash 变化
window.addEventListener('hashchange', () => {
  const path = window.location.hash.slice(1) // 获取 # 后的路径
  // 根据 path 渲染对应组件
})

// 2. 改变 hash（不会触发页面刷新）
window.location.hash = '/home'
```

#### 2. history 模式工作原理
```js
// 1. 使用 pushState 改变 URL（不会触发页面刷新）
history.pushState({}, '', '/home')

// 2. 监听 popstate 事件（浏览器前进/后退）
window.addEventListener('popstate', () => {
  const path = window.location.pathname // 获取完整路径
  // 根据 path 渲染对应组件
})
```

### 3、使用场景建议

#### 1. 推荐使用 hash 模式的情况
- 需要兼容旧浏览器（如 IE9 及以下）
- 没有后端支持或无法配置服务器
- 简单的静态网站部署

#### 2. 推荐使用 history 模式的情况
- 需要 SEO 友好的 URL
- 使用现代浏览器
- 有后端支持可配置 URL 重定向
- 企业级应用或对 URL 美观度有要求

### 4、服务器配置示例

#### 1. Nginx 配置（history 模式）
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### 2. Apache 配置（history 模式）
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5、Vue Router 中的配置

```js
const router = new VueRouter({
  mode: 'history', // 或 'hash'（默认）
  routes: [...]
})
```

### 6、常见问题解决方案

#### 1. history 模式刷新 404 问题
- **解决方案**：配置服务器将所有路由重定向到 `index.html`

#### 2. hash 模式微信分享问题
- **解决方案**：使用 `history` 模式或后端处理分享签名

#### 3. 两种模式切换注意事项
- 切换模式会导致当前路由行为变化
- 可能需要调整导航守卫逻辑
- 需要同步调整服务器配置

### 7 、面试回答要点

1. **核心区别**：强调 URL 表现、实现原理和服务器要求
2. **原理说明**：解释 hashchange 和 History API 的工作机制
3. **场景选择**：说明何时选择哪种模式
4. **部署知识**：展示服务器配置能力
5. **问题解决**：提及常见问题及解决方案

示例回答：
"Vue Router的hash模式通过`#`改变URL并监听hashchange事件，不需要服务器支持但URL不美观；history模式利用History API实现无`#`的URL，需要服务器配置但更友好SEO。选择时考虑浏览器兼容性、SEO需求和服务器支持情况，企业级应用推荐history模式但要确保服务器正确重定向。"

## 12、nextTick 的实现

### 1、核心作用

`nextTick` 是 Vue 提供的一个异步方法，用于**在 DOM 更新完成后执行回调函数**，主要解决以下问题：
1. 确保在 Vue 完成数据更新和 DOM 重新渲染后执行代码
2. 避免直接操作 DOM 时获取不到最新布局

### 2、实现原理

#### 1. 异步队列机制
Vue 采用异步队列的方式批量执行 DOM 更新，`nextTick` 就是将回调函数加入这个队列：

```js
// 简化版实现
const callbacks = []
let pending = false

function nextTick(cb) {
  callbacks.push(cb)
  
  if (!pending) {
    pending = true
    // 选择最优的异步方案
    if (typeof Promise !== 'undefined') {
      Promise.resolve().then(flushCallbacks)
    } else if (typeof MutationObserver !== 'undefined') {
      // MutationObserver 方案
    } else if (typeof setImmediate !== 'undefined') {
      setImmediate(flushCallbacks)
    } else {
      setTimeout(flushCallbacks, 0)
    }
  }
}

function flushCallbacks() {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
```

#### 2. 异步策略优先级
Vue 会按照以下优先级选择异步方案：
1. **Promise**（微任务）
2. **MutationObserver**（微任务）
3. **setImmediate**（宏任务，IE 专用）
4. **setTimeout**（宏任务，降级方案）

### 3、工作流程

```
数据变更 → 触发 Watcher 更新 → 将更新推入队列 → nextTick 回调加入队列 → 异步执行队列 → 执行回调
```

### 4、使用场景

#### 1. 获取更新后的 DOM
```js
this.message = 'updated'
this.$nextTick(() => {
  console.log(this.$el.textContent) // 获取更新后的内容
})
```

#### 2. 与第三方库集成
```js
this.showModal = true
this.$nextTick(() => {
  // 确保模态框已渲染
  $(this.$refs.modal).modal('show') 
})
```

### 5、源码解析（Vue 2.6+）

```js
// src/core/util/next-tick.js
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  
  if (!pending) {
    pending = true
    timerFunc()
  }
  
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

### 6、面试回答要点

1. **核心目的**：确保在 DOM 更新后执行回调
2. **实现机制**：异步队列 + 多种降级策略
3. **任务优先级**：微任务优先于宏任务
4. **使用场景**：DOM 操作、第三方库集成
5. **版本差异**：Vue3 使用 Promise 作为唯一实现

示例回答：
"Vue的nextTick通过异步队列机制确保回调在DOM更新后执行。实现上优先使用微任务(Promise/MutationObserver)，降级到宏任务(setImmediate/setTimeout)。典型应用包括获取更新后的DOM状态或与jQuery等库集成。在Vue2中它会返回Promise(如果支持)，方便使用async/await。"

## 13、混入 mixin 的原理

### 1、核心概念

Mixin（混入）是 Vue 提供的一种**代码复用机制**，允许将组件的选项逻辑"混合"到多个组件中。其核心原理可以概括为：**选项合并策略**。

### 2、实现原理

#### 1. 选项合并流程

当组件使用 mixin 时，Vue 会执行以下合并操作：

```
组件选项 + Mixin选项 → 合并策略处理 → 最终组件选项
```

#### 2. 合并策略类型

| 选项类型       | 合并策略                          | 示例 |
|----------------|----------------------------------|------|
| **data**       | 递归合并，组件数据优先            | `mixin: {data: {a:1}}` + `组件: {data: {a:2}}` → `{a:2}` |
| **生命周期**   | 合并为数组，按顺序执行            | `[mixin钩子, 组件钩子]` |
| **methods**    | 组件方法覆盖 mixin 方法            | 同名方法取组件版本 |
| **components** | 递归合并                          | 合并组件列表 |
| **自定义选项** | 可通过 `config.optionMergeStrategies` 自定义 | 如合并自定义 `myOption` |

### 3、源码解析

#### 1. 核心合并函数（Vue 2.x）

```js
// src/core/util/options.js
function mergeOptions(parent, child, vm) {
  // 标准化props、inject、directives等
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)
  
  // 处理extends和mixins
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }
  
  // 按策略合并各个选项
  const options = {}
  for (const key in parent) {
    mergeField(key)
  }
  for (const key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  
  function mergeField(key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  
  return options
}
```

#### 2. 生命周期合并策略

```js
// 生命周期钩子的合并策略是合并为数组
function mergeHook(parentVal, childVal) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

// 为所有生命周期设置合并策略
LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})
```

### 4、合并示例

#### 1. 生命周期合并

```js
const myMixin = {
  created() {
    console.log('mixin created')
  }
}

new Vue({
  mixins: [myMixin],
  created() {
    console.log('component created')
  }
})

// 执行顺序：
// 1. 'mixin created'
// 2. 'component created'
```

#### 2. 数据合并

```js
const myMixin = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [myMixin],
  data() {
    return {
      message: 'world',
      bar: 'def'
    }
  }
})

// 合并结果：
// { message: 'world', foo: 'abc', bar: 'def' }
```

### 5、注意事项

1. **命名冲突**：同名选项的覆盖规则需明确
2. **全局混入**：谨慎使用 `Vue.mixin()`（会影响所有组件）
3. **响应式问题**：混入的数据会成为响应式数据
4. **组合式API**：Vue3 推荐使用 Composition API 替代 mixin

### 6、面试回答要点

1. **核心机制**：强调选项合并策略
2. **合并规则**：说明不同选项类型的合并方式
3. **执行顺序**：生命周期钩子的执行顺序
4. **源码理解**：能简述合并流程
5. **实践建议**：指出潜在问题和替代方案

示例回答：
"Vue的mixin通过选项合并策略实现代码复用。对于data选项会递归合并（组件优先），生命周期钩子会合并为数组顺序执行，而methods/components等则是组件选项覆盖mixin选项。其核心实现是通过mergeOptions函数递归处理各个选项，不同选项类型有对应的合并策略。使用时需注意命名冲突问题，在Vue3中更推荐使用Composition API替代mixin。"

## Vue3

## 1、Vue2.0 与 Vue3.0 的核心区别

### 1、架构设计差异

| 特性                | Vue2.x                      | Vue3.x                      |
|---------------------|----------------------------|----------------------------|
| **响应式系统**       | 基于 Object.defineProperty | 基于 Proxy                  |
| **虚拟DOM**         | 全量对比                   | 静态标记 + 动态对比         |
| **代码组织**        | Options API                | Composition API             |
| **TypeScript支持**  | 需要额外适配               | 原生支持                   |
| **打包体积**        | 较大                       | 更小（Tree-shaking优化）   |

### 2、核心改进详解

#### 1. 响应式系统重写
**Vue2 实现**：
```js
// 基于Object.defineProperty
Object.defineProperty(obj, key, {
  get() { /*...*/ },
  set(newVal) { /*...*/ }
})
```
**局限性**：
- 无法检测对象属性的添加/删除
- 数组变异方法需要特殊处理
- 性能开销较大

**Vue3 实现**：
```js
// 基于Proxy
new Proxy(data, {
  get(target, key) { /*...*/ },
  set(target, key, value) { /*...*/ }
})
```
**优势**：
- 支持全对象操作（包括新增/删除属性）
- 更好的性能表现
- 无需特殊处理数组变化

#### 2. Composition API
**Vue2 Options API**：
```js
export default {
  data() { return { count: 0 } },
  methods: { increment() { this.count++ } },
  mounted() { console.log(this.count) }
}
```

**Vue3 Composition API**：
```js
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    
    onMounted(() => console.log(count.value))
    
    return { count, increment }
  }
}
```
**优势**：
- 更好的逻辑复用（替代mixins）
- 更灵活的代码组织
- 更好的TypeScript支持

#### 3. 性能优化
**Vue3改进**：
1. **编译时优化**：
   - 静态节点提升（HoistStatic）
   - 补丁标记（PatchFlag）
   - 树结构拍平（Tree Flattening）

2. **虚拟DOM重写**：
   - 动态节点标记减少对比范围
   - 事件缓存减少不必要的更新

### 3、新增特性

#### 1. Fragment（片段）
```html
<!-- Vue3支持多根节点 -->
<template>
  <header></header>
  <main></main>
  <footer></footer>
</template>
```

#### 2. Teleport（传送）
```html
<teleport to="#modal-container">
  <div class="modal">...</div>
</teleport>
```

#### 3. Suspense（异步组件）
```html
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <LoadingSpinner />
  </template>
</Suspense>
```

### 4、生命周期对比

| Vue2.x          | Vue3.x (Composition API) |
|-----------------|-------------------------|
| beforeCreate    | 使用 setup()            |
| created         | 使用 setup()            |
| beforeMount     | onBeforeMount           |
| mounted         | onMounted               |
| beforeUpdate    | onBeforeUpdate          |
| updated         | onUpdated               |
| beforeDestroy   | onBeforeUnmount         |
| destroyed       | onUnmounted             |
| errorCaptured   | onErrorCaptured         |
| -               | onRenderTracked         |
| -               | onRenderTriggered       |

### 5、迁移注意事项

1. **破坏性变更**：
   - v-model 语法变更
   - $children 移除
   - 过滤器(filter)移除
   - 事件API变更

2. **兼容方案**：
   - 提供兼容构建版本
   - 逐步迁移策略

### 6、面试回答要点

1. **核心改进**：强调响应式系统和Composition API
2. **性能优化**：说明编译时和运行时优化
3. **新特性**：列举Fragment、Teleport等
4. **迁移经验**：分享实际升级经验
5. **生态对比**：提及周边库支持情况

示例回答：
"Vue3相比Vue2有三大核心改进：1) 响应式系统改用Proxy实现，解决了数组和对象属性的监听限制；2) 引入Composition API，提供更好的逻辑复用和代码组织；3) 通过编译优化和虚拟DOM重写大幅提升性能。此外还新增了Fragment、Teleport等特性，并优化了TypeScript支持。实际项目中升级需要注意破坏性变更，推荐逐步迁移策略。"

## 2、vue3 的常用 Composition API 有哪些

### 1、响应式 API

#### 1. 基础响应式 API
| API | 作用 | 示例 |
|------|------|------|
| `ref` | 创建响应式基本类型数据 | `const count = ref(0)` |
| `reactive` | 创建响应式对象 | `const state = reactive({ count: 0 })` |
| `toRef` | 将响应式对象的属性转为 ref | `const countRef = toRef(state, 'count')` |
| `toRefs` | 解构响应式对象不丢失响应性 | `const { count } = toRefs(state)` |

```js
import { ref, reactive, toRefs } from 'vue'

const count = ref(0) // 基本类型
const state = reactive({ // 对象
  name: 'Vue3',
  version: '3.2'
})

// 解构保持响应性
const { name, version } = toRefs(state)
```

#### 2. 计算属性
| API | 作用 |
|------|------|
| `computed` | 创建计算属性 |

```js
const doubleCount = computed(() => count.value * 2)
const plusCount = computed({
  get: () => count.value + 1,
  set: val => { count.value = val - 1 }
})
```

### 2、生命周期钩子

| Vue2 选项式 API | Vue3 Composition API |
|----------------|---------------------|
| beforeCreate  | 使用 setup() 替代   |
| created       | 使用 setup() 替代   |
| beforeMount   | onBeforeMount       |
| mounted       | onMounted          |
| beforeUpdate  | onBeforeUpdate     |
| updated       | onUpdated          |
| beforeUnmount | onBeforeUnmount    |
| unmounted     | onUnmounted        |

```js
import { onMounted, onUpdated } from 'vue'

setup() {
  onMounted(() => console.log('组件挂载'))
  onUpdated(() => console.log('组件更新'))
}
```

### 3、依赖注入

| API | 作用 |
|------|------|
| `provide` | 提供依赖 |
| `inject` | 注入依赖 |

```js
// 父组件
import { provide } from 'vue'
setup() {
  provide('theme', 'dark')
}

// 子组件
import { inject } from 'vue'
setup() {
  const theme = inject('theme', 'light') // 默认值light
}
```

### 4、工具函数

#### 1. 响应式工具
| API | 作用 |
|------|------|
| `isRef` | 检查是否为 ref |
| `unref` | 解包 ref (val = isRef(val) ? val.value : val) |
| `toRaw` | 返回 reactive 或 readonly 代理的原始对象 |

#### 2. 副作用工具
| API | 作用 |
|------|------|
| `watch` | 侦听响应式数据变化 |
| `watchEffect` | 自动追踪依赖的副作用函数 |

```js
import { watch, watchEffect } from 'vue'

// 侦听单个ref
watch(count, (newVal, oldVal) => {})

// 侦听多个源
watch([count, name], ([newCount, newName]) => {})

// 自动追踪依赖
watchEffect(() => console.log(count.value))
```

### 5、组合式函数

#### 1. 自定义 Hook 示例
```js
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  
  return { x, y }
}

// 组件中使用
import { useMouse } from './useMouse'
setup() {
  const { x, y } = useMouse()
  return { x, y }
}
```

#### 2. 常用组合式函数模式
1. **状态管理**：创建可复用的状态逻辑
2. **副作用封装**：封装事件监听、定时器等
3. **异步操作**：封装数据请求逻辑

### 6、面试回答要点

1. **核心API分类**：响应式、生命周期、工具函数等
2. **重点API**：强调ref/reactive、computed、watch等
3. **组合式优势**：逻辑复用、代码组织、TS支持
4. **实践经验**：分享自定义Hook的使用经验
5. **对比Options API**：说明两种风格的差异

示例回答：
"Vue3 Composition API主要包括：1) 响应式API如ref/reactive创建响应式数据；2) 生命周期钩子如onMounted/onUpdated；3) 计算属性computed和侦听器watch/watchEffect；4) 依赖注入provide/inject。这些API使逻辑关注点更集中，便于提取复用逻辑为自定义Hook，如封装鼠标位置跟踪、异步请求等。相比Options API，组合式API在复杂组件中能提供更好的代码组织和类型推断。"