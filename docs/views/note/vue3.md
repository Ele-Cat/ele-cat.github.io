---
outline: [2, 3]
---

# Vue3 学习笔记

- [Vue3 快速上手](./vue3-quick-start.md)

## 01. 为什么学 vue3

> 目标：了解 vue3 现状，以及它的优点，展望它的未来

Vue3 现状：

- [vue-next](https://github.com/vuejs/vue-next/) 2020 年 09 月 18 日，正式发布 vue3.0 版本。但是由于刚发布周边生态不支持，大多数开发者处于观望。
- 现在主流组件库都已经发布了支持 vue3.0 的版本，其他生态也在不断地完善中，这是趋势。
  - [Element Plus](https://element-plus.gitee.io/zh-CN/) 基于 Vue 3.0 的桌面端组件库
  - [vant 3](https://vant-contrib.gitee.io/vant/v3/#/zh-CN) vant3.0 版本，有赞前端团队开源移动端组件库
  - [ant-design-vue 3.x](https://www.antdv.com/components/overview-cn) Ant Design Vue 3.x 版本，社区根据蚂蚁 ant design 开发

Vue3 优点：

- 最火框架，它是国内最火的前端框架之一，[官方文档](https://v3.vuejs.org/) [中文文档](https://v3.cn.vuejs.org/)
- 性能提升，运行速度事 vue2.x 的 1.5 倍左右
- 体积更小，按需编译体积比 vue2.x 要更小
- 类型推断，更好的支持 Ts（typescript）这个也是趋势
- 高级给予，暴露了更底层的 API 和提供更先进的内置组件
- **★ 组合 API (composition api)**，能够更好的组织逻辑，封装逻辑，复用逻辑

Vue3 展望：

- 这是趋势，越来越多的企业将来肯定会升级到 Vue3.0
- 大型项目，由于对 Ts 的友好越来越多大型项目可以用 Vue3.0

**总结：** 为什么要学 vue3 ?

- 适应市场学习流行的技术提高提升自己竞争力，给自己加薪。

## 02. vite 基本使用

> 目标：了解 vite 是什么，使用 vite 创建 vue 项目，用来学习 vue3 知识

vite 是什么：[官方文档](https://cn.vitejs.dev/)

- 它是一个更加轻量（热更新速度快，打包构建速度快）的 vue 项目脚手架工具。
- 相对于 vue-cli 它默认安装的插件非常少，随着开发过程依赖增多，需要自己额外配置。
- **所以：** 在单纯学习 vue3 语法会使用它，后面做项目的时候我们还是使用 vue-cli

vite 基本使用：

- 创建项目 `npm create vite@latest my-vue-app`
- 安装依赖 `npm i` 或者 `yarn `
- 启动项目 `npm run dev` 或者 `yarn dev`

**总结：** vite 是什么？

- 使用 vite 创建项目学习 vue3 语法，使用 vue-cli 创建项目正式开发。

```js
{
  root: process.cwd(), // 项目根目录（index.html 文件所在的位置）,
  base: '/', // 开发或生产环境服务的公共基础路径 配置引入相对路径
  mode: 'development', // 模式
  plugins: [vue()], // 需要用到的插件数组
  publicDir: 'public', // 静态资源服务的文件夹
  cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
  resolve: {
    alias: [ // 文件系统路径别名
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ],
    dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本
    conditions: [], // 解决程序包中 情景导出 时的其他允许条件
    mainFields: [], // 解析包入口点尝试的字段列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要忽略的扩展名列表
    preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径确定文件身份
  },
  css: {
    modules: {
      scopeBehaviour: 'global' | 'local',
      // ...
    },
    postcss: '', // 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
    preprocessorOptions: { // css的预处理器选项
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  json: {
    namedExports: true, // 是否支持从.json文件中进行按名导入
    stringify: false, //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
  },
  esbuild: { // 最常见的用例是自定义 JSX
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  assetsInclude: ['**/*.gltf'], // 指定额外的 picomatch 模式 作为静态资源处理
  logLevel: 'info', // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  envDir: '/', // 用于加载 .env 文件的目录
  envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
  server: {
    host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
    port: 5000, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    https: false, // 启用 TLS + HTTP/2
    open: true, // 启动时自动在浏览器中打开应用程序
    proxy: { // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true, // 配置 CORS
    force: true, // 强制使依赖预构建
    hmr: { // 禁用或配置 HMR 连接
      // ...
    },
    watch: { // 传递给 chokidar 的文件系统监听器选项
      // ...
    },
    middlewareMode: '', // 以中间件模式创建 Vite 服务器
    fs: {
      strict: true, // 限制为工作区 root 路径以外的文件的访问
      allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
      deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
    },
    origin: 'http://127.0.0.1:8080/', // 用于定义开发调试阶段生成资产的 origin
  },
  build: {
    target: ['modules'], // 设置最终构建的浏览器兼容目标
    polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态文件目录
    assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为 base64 编码
    cssCodeSplit: true, // 启用 CSS 代码拆分
    cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {}, // 自定义底层的 Rollup 打包配置
    lib: {}, // 构建为库
    manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
    ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
    ssr: undefined, // 生成面向 SSR 的构建
    minify: 'esbuild', // 指定使用哪种混淆器
    terserOptions: {}, // 传递给 Terser 的更多 minify 选项
    write: true, // 启用将构建后的文件写入磁盘
    emptyOutDir: true, // 构建时清空该目录
    brotliSize: true, // 启用 brotli 压缩大小报告
    chunkSizeWarningLimit: 500, // chunk 大小警告的限制
    watch: null, // 设置为 {} 则会启用 rollup 的监听器
  },
  preview: {
    port: 5000, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    https: false, // 启用 TLS + HTTP/2
    open: true, // 启动时自动在浏览器中打开应用程序
    proxy: { // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true, // 配置 CORS
  },
  optimizeDeps: {
    entries: [], // 指定自定义条目——该值需要遵循 fast-glob 模式
    exclude: [], // 在预构建中强制排除的依赖项
    include: [], // 可强制预构建链接的包
    keepNames: false, // true 可以在函数和类上保留 name 属性
  },
  ssr: {
    external: [], // 列出的是要为 SSR 强制外部化的依赖,
    noExternal: '', // 列出的是防止被 SSR 外部化依赖项
    target: 'node', // SSR 服务器的构建目标
  }
}
```

## 03. 创建 vue 应用

> 目标：掌握如何创建 vue3 应用实例

基本步骤：

- 在 main.js 中导入 createApp 函数
- 定义 App.vue 组件，导入 main.js
- 使用 createApp 函数基于 App.vue 组件创建应用实例
- 挂载至 index.html 的#app 容器

逻辑代码：

`App.vue`

```vue
<template>
  <div class="container">我是根组件</div>
</template>
<script>
export default {
  name: "App",
};
</script>
```

`main.js`

```js
// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```

**总结：** 如何创建 vue 应用实例？

- 通过 createApp 创建应用实例--->扩展功能将来都是在 app 上进行。

## 04. 选项 API 和组合 API

> 目标：理解什么是选项 API 写法，什么是组合 API 写法。

![1619278203339](/images/1619277945556.png){data-zoomable}

什么是选项 API 写法：`Options API`

- 咱们在 vue2.x 项目中使用的就是 `选项API` 写法
  - 代码风格：data 选项写数据，methods 选项写函数...，一个功能逻辑的代码分散。
- 优点：易于学习和使用，写代码的位置已经约定好
- 缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读。
- 补充：虽然提供 mixins 用来封装逻辑，但是出现数据函数覆盖的概率很大，不好维护。

::: demo 测试 Vue2 监听鼠标坐标
example/vue3/01
:::

什么是组合 API 写法：`Compositon API`

- 咱们在 vue3.0 项目中将会使用 `组合API` 写法
  - 代码风格：一个功能逻辑的代码组织在一起（包含数据，函数...）
- 优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护
- 缺点：需要有良好的代码组织能力和拆分逻辑能力，PS：大家没问题。
- 补充：为了能让大家较好的过渡到 vue3.0 的版本来，`也支持vue2.x选项API写法`

::: demo 测试 Vue3 监听鼠标坐标
example/vue3/02
:::

**总结：**

- 知道选项 API 和组合 API 的写法区别，建议大家使用组合 API 在 vue3.0 项目中。

## 05. 组合 API-setup 函数

> 目标：掌握 setup 函数的基本使用

使用细节：

- `setup` 是一个新的组件选项，作为组件中使用组合 API 的起点。
- 从组件生命周期来看，它的执行在组件实例创建之前`vue2.x的beforeCreate`执行。
- 这就意味着在`setup`函数中 `this` 还不是组件实例，`this` 此时是 `undefined`
- 在模版中需要使用的数据和函数，需要在 `setup` 返回。

演示代码：

::: demo 测试 setup 执行
example/vue3/03
:::

**总结：** `setup` 组件初始化之前执行，它返回的数据和函数可在模版使用。

## 06. 组合 API-生命周期

> 目标：掌握使用组合 API 写法的生命周期钩子函数

回顾 vue2.x 生命周期钩子函数：

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

认识 vue3.0 生命周期钩子函数

- `setup` 创建实例前
- `onBeforeMount` 挂载 DOM 前
- `onMounted` 挂载 DOM 后
- `onBeforeUpdate` 更新组件前
- `onUpdated` 更新组件后
- `onBeforeUnmount` 卸载销毁前
- `onUnmounted` 卸载销毁后

演示代码：

```vue
<template>
  <div class="container">container</div>
</template>
<script>
import { onBeforeMount, onMounted } from "vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log("DOM渲染前", document.querySelector(".container"));
    });
    onMounted(() => {
      console.log("DOM渲染后1", document.querySelector(".container"));
    });
    onMounted(() => {
      console.log("DOM渲染后2", document.querySelector(".container"));
    });
  },
};
</script>
```

![1619283131573](/images/1619283131573.png){data-zoomable}

**总结：** 组合 API 的生命周期钩子有 7 个，可以多次使用同一个钩子，执行顺序和书写顺序相同。

## 07. 组合 API-reactive 函数

> 目标：掌握使用 reactive 函数定义响应式数据

定义响应式数据：

- reactive 是一个函数，它可以定义一个复杂数据类型，成为响应式数据。

演示代码：

::: demo 测试 reactive 函数
example/vue3/04
:::

**总结：** 通常是用来定义响应式**对象数据**

## 08. 组合 API-toRef 函数

> 目标：掌握使用 toRef 函数转换响应式对象中**某个**属性为单独响应式数据，并且值是关联的。

定义响应式数据：

- toRef 是函数，转换**响应式对象**中**某个**属性为单独响应式数据，并且**值是关联的**。

演示代码：

::: demo 测试 API-toRef 函数
example/vue3/05
:::

**使用场景**：有一个响应式对象数据，但是模版中只需要使用其中一项数据。

## 09. 组合 API-toRefs 函数

> 目标：掌握使用 toRefs 函数定义转换响应式中**所有**属性为响应式数据，通常用于解构|展开 reactive 定义对象。

定义响应式数据：

- toRefs 是函数，转换**响应式对象**中所有属性为单独响应式数据，对象成为普通对象，并且**值是关联的**

演示代码：

::: demo 测试 API-toRefs 函数
example/vue3/06
:::

**使用场景**：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。

## 10. 组合 API-ref 函数

> 目标：掌握使用 ref 函数定义响应式数据，一般用于简单类型数据

定义响应式数据：

- ref 函数，常用于简单数据类型定义为响应式数据
  - 再修改值，获取值的时候，需要.value
  - 在模板中使用 ref 申明的响应式数据，可以省略.value

演示代码：

::: demo 测试 API-ref 函数
example/vue3/07
:::

**使用场景：**

- **当你明确知道需要的是一个响应式数据 _对象_ 那么就使用 reactive 即可**
- **其他情况使用 ref**

## 11. 知识运用案例

> 目标：利用所学知识完成组合 API 实例

基本步骤：

- 记录鼠标坐标
  - 定义一个响应式数据对象，包含 x 和 y 属性。
  - 在组件渲染完毕后，监听 document 的鼠标移动事件
  - 指定 move 函数为事件对应方法，在函数中修改坐标
  - 在 setup 返回数据，模版中使用
- 累加 1 功能
  - 定义一个简单数据类型的响应式数据
  - 定义一个修改数字的方法
  - 在 setup 返回数据和函数，模板中使用

演示代码：

::: demo 知识运用案例
example/vue3/08
:::

**总结：** 体会组合 API 的写法，尝试组织可读性高的代码。

## 12. 组合 API-computed 函数

> 目标：掌握使用 computed 函数定义计算属性

定义计算属性：

- computed 函数，是用来定义计算属性的，计算属性不能修改。

基本使用：

::: demo 测试 API-computed 函数
example/vue3/09
:::

高级用法：

::: demo 测试 API-computed 函数-高级
example/vue3/10
:::

目的：让计算属性支持双向数据绑定。

总结：计算属性两种用法

- 给 computed 传入函数，返回值就是计算属性的值
- 给 computed 传入对象，get 获取计算属性的值，set 监听计算属性改变。

## 13. 组合 API-watch 函数

> 目标：掌握使用 watch 函数定义侦听器

定义计算属性：

- watch 函数，是用来定义侦听器的
  - 监听 ref 定义的响应式数据
  - 监听多个响应式数据数据
  - 监听 reactive 定义的响应式数据
  - 监听 reactive 定义的响应式数据，某一个属性
  - 深度监听
  - 默认执行

::: demo 测试 API-watch 函数
example/vue3/11
:::

**总结：** 掌握 watch 的各种用法。

## 14. 组合 API-ref 属性

> 目标：掌握使用 ref 属性绑定 DOM 或组件

获取 DOM 或者组件实例可以使用 ref 属性，写法和 vue2.0 需要区分开

- 获取单个 DOM 或者组件
- 获取 v-for 遍历的 DOM 或者组件

::: demo 测试 API-ref 属性
example/vue3/12
:::

**总结：**

- 单个元素：先申明 ref 响应式数据，返回给模版使用，通过 ref 绑定数据。
- 遍历的元素：先定义一个空数组，定义一个函数获取元素，返回给模版使用，通过 ref 绑定这个函数。
  - 有一个边界问题：组件更新的时候会重复的设置 dom 元素给数组：
  ```js
  // ref获取v-for遍历的DOM元素，需要在组件更新的时候重置接受dom元素的数组。
  onBeforeUpdate(() => {
    domList = [];
  });
  ```

## 15. 组合 API-父子通讯

> 目标：掌握使用 props 选项和 emits 选项完成父子组件通讯

父传子：
::: demo 父传子
example/vue3/13-parent
:::

::: details 子传父：
<<< ../example/vue3/13-son.vue
:::

扩展：

- 在 vue2.x 的时候 `.sync` 除去 v-model 实现双向数据绑定的另一种方式

```vue
<!-- <Son :money='money' @update:money="fn"  /> -->
<Son :money.sync="money" />
```

- 在 vue3.0 的时候，使用 `v-model:money="money"` 即可

```vue
<!-- <Son :money="money" @update:money="updateMoney" /> -->
<Son v-model:money="money" />
```

**总结：**

- 父传子：在 setup 种使用 props 数据 `setup(props){ // props就是父组件数据  }`
- 子传父：触发自定义事件的时候 emit 来自 `setup(props,{emit}){ // emit 就是触发事件函数 }`
- 在 vue3.0 中 `v-model` 和 `.sync` 已经合并成 `v-model` 指令

## 16. 组合 API-依赖注入

> 目标：掌握使用 provide 函数和 inject 函数完成后代组件数据通讯

使用场景：有一个父组件，里头有子组件，有孙组件，有很多后代组件，共享父组件数据。

演示代码：

::: demo 父组件
example/vue3/14-parent
:::

::: details 子组件
<<< ../example/vue3/14-son.vue
:::

::: details 孙组件
<<< ../example/vue3/14-grandSon.vue
:::

**总结：**

- **provide 函数** 提供数据和函数给后代组件使用
- **inject 函数** 给当前组件注入**provide**提供的数据和函数

## 17. v-model 语法糖

> 目标：掌握 vue3.0 的 v-model 语法糖原理

在 vue2.0 中 v-mode 语法糖简写的代码 `<Son :value="msg"  @input="msg=$event" />`

在 vue3.0 中 v-model 语法糖有所调整：`<Son :modelValue="msg"  @update:modelValue="msg=$event" />`

演示代码：

::: demo 父组件
example/vue3/15-parent
:::

::: details 子组件
<<< ../example/vue3/15-son.vue
:::

**总结：** vue3.0 封装组件支持 v-model 的时候，父传子`:modelValue` 子传父 `@update:modelValue`

**补充：** vue2.0 的 `xxx.sync` 语法糖解析 父传子 `:xxx` 子传父 `@update:xxx` 在 vue3.0 使用 `v-model:xxx` 代替。

## 18. mixins 语法

> 目标：掌握 mixins 语法的基本使用，vue2.x 封装逻辑的方式，vue3.0 建议使用组合 API

::: tip 官方话术：
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
:::

- 理解**全局混入**：**所有组件**混入了这些逻辑代码

::: details 全局 mixin
<<< ../example/vue3/16-mixin.js
:::

- 理解**局部混入**：通过 **mixins 选项** 进行混入

::: demo 父组件
example/vue3/16-parent
:::

::: details 子组件
<<< ../example/vue3/16-son.vue
:::

::: details followMixin
<<< ../example/vue3/16-followMixin.js
:::

**总结：** 在 vue2.0 中一些可复用的逻辑可以使用 mixins 来封装，但是需要考虑逻辑代码冲突问题。vue3.0 的组合 API 很好的解决了这个问题，就不在推荐使用 mixins 了。

## 19. vuex

### 19.1 根模块中使用定义

定义`/store/index.js`

```js
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    username: "zs",
  },
  getters: {
    newName(state) {
      return state.username + "!!!";
    },
  },
  mutations: {
    updateName(state) {
      state.username = "ls";
    },
  },
  actions: {
    updateName(ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit("updateName");
      }, 1000);
    },
  },
  modules: {},
});
```

使用`*.vue`

```vue {13}
<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 Fragment -->
  <div>
    App
    <!-- 1. 使用根模块state的数据   -->
    <p>{{ $store.state.username }}</p>
    <!-- 2. 使用根模块getters的数据   -->
    <p>{{ $store.getters["newName"] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    // 使用vuex仓库
    const store = useStore();
    // 1. 使用根模块state的数据
    console.log(store.state.username);
    // 2. 使用根模块getters的数据
    console.log(store.getters.newName);
    const mutationsFn = () => {
      // 3. 提交根模块mutations函数
      // store.commit('updateName')
      // 4. 调用根模块actions函数
      store.dispatch("updateName");
    };
    return { mutationsFn };
  },
};
</script>
```

### 19.2 modules(分模块)

- 存在两种情况
  - 默认的模块，`state` 区分模块，其他 `getters` `mutations` `actions` 都在全局。
  - 带命名空间 `namespaced: true` 的模块，所有功能区分模块，更高封装度和复用。

定义

```js
import { createStore } from "vuex";

const moduleA = {
  // 子模块state建议写成函数
  state: () => {
    return {
      username: "模块A",
    };
  },
  getters: {
    changeName(state) {
      return state.username + "AAAAAA";
    },
  },
};

const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  // 子模块state建议写成函数
  state: () => {
    return {
      username: "模块B",
    };
  },
  getters: {
    changeName(state) {
      return state.username + "BBBBBB";
    },
  },
  mutations: {
    // 修改名字的mutation
    update(state) {
      state.username = "BBBB" + state.username;
    },
  },
  actions: {
    update({ commit }) {
      // 假设请求
      setTimeout(() => {
        commit("update");
      }, 2000);
    },
  },
};

// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
    person: [
      { id: 1, name: "tom", gender: "男" },
      { id: 2, name: "lucy", gender: "女" },
      { id: 3, name: "jack", gender: "男" },
    ],
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    a: moduleA,
    b: moduleB,
  },
  getters: {
    // vuex的计算属性
    boys: (state) => {
      return state.person.filter((p) => p.gender === "男");
    },
  },
});
```

使用

```vue
<template>
  <div>APP组件</div>
  <ul>
    <li v-for="item in $store.getters.boys" :key="item.id">{{ item.name }}</li>
  </ul>
  <!-- 使用模块A的username -->
  <p>A的username --- {{ $store.state.a.username }}</p>
  <p>A的changeName --- {{ $store.getters.changeName }}</p>
  <hr />
  <p>B的username --- {{ $store.state.b.username }}</p>
  <p>B的changeName --- {{ $store.getters["b/changeName"] }}</p>
  <button @click="$store.commit('b/update')">修改username</button>
  <button @click="$store.dispatch('b/update')">异步修改username</button>
</template>
```

### 19.3 vuex 数据持久化

- 在项目中安装 `vuex-persistedstate` 插件

```bash
cnpm i vuex-persistedstate -S
```

- 在 `createStore` 的 `plugins` 中加入：

```js
import { createStore } from 'vuex'
+import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import cart from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
+  plugins: [
+    createPersistedstate({
+      key: 'shop',
+      paths: ['user', 'cart']
+    })
+  ]
})
```

::: tip 注意

- 默认是存储在 localStorage 中

- key 是存储数据的键名

- paths 是存储 state 中的那些数据，如果是模块下具体的数据需要加上模块名称，如 user.token

- 修改 state 后触发才可以看到本地存储数据的的变化。
  :::

## 20. pinia

### 20.1 介绍

> pinia 同样是一个 Vue 状态管理工具，它和 vuex 有很多相似的地方。本质上他是 vuex 团队核心成员开发的，在 vuex 上面提出了一些改进。与 vuex 相比，pinia 去除了 vuex 中对于同步函数 Mutations 和异步函数 Actions 的区分。直接在 Actions 中便能够使用同步和异步方法（在 vuex 的开发计划中也将会除去同步和异步的区分）。其次相比于 vuex，pinia 对于 typescript 的支持性更好，友好的 devTools 支持，pinia 只有 1kb，简化了很多方法的写法。

### 20.2 安装、使用

1. 安装

```sh
npm i pinia -S
npm i pinia-plugin-persist -S
```

2. 定义`/store/pinia.js`

```js
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

// 创建pinia实例
const pinia = createPinia();
// pinia持久化
pinia.use(piniaPluginPersist);

export default pinia;
```

3. 在`main.js`中引入

```js
import { createApp } from "vue";
import pinia from "@/store/pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

4. 定义模块`src\store\modules\user.js`

```js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {
        name: "",
        age: "",
      },
      token: "",
      noSave: "",
    };
  },
  getters: {
    getUserInfo(store) {
      const { name, age } = store.userInfo;
      return `${name}今年${age}岁了`;
    },
  },
  actions: {
    changeUserInfo({ name, age }) {
      this.userInfo = { name, age };
    },
    changeName(name) {
      this.userInfo.name = name;
    },
    changeAge(age) {
      this.userInfo.age = age;
    },
    changeToken(token) {
      this.token = token;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["userInfo", "token"], // 在state定义的其他属性不会被缓存
      },
    ],
  },
});
```

5. 统一在`src\store\index.js`进行分发

```js
import { useUSerStore } from "./modules/user";

const useStore = () => ({
  useUSerStore: useUSerStore(),
});

export default useStore;
```

6. 在页面中使用

```vue
<template>
  <div>
    <div>
      <span>用户名：{{ useUserStore.userInfo.name }}</span>
      <button @click="useUserStore.userInfo.name = '张三'">修改名字1</button>
      <button @click="useUserStore.changeName('王五')">修改名字2</button>
    </div>
    <div>
      <span>年龄：{{ useUserStore.userInfo.age }}</span>
      <button @click="useUserStore.userInfo.age = 16">修改年龄1</button>
      <button @click="useUserStore.changeAge(26)">修改年龄2</button>
    </div>
    <div>
      <span>用户token：{{ token }}</span>
      <button @click="useUserStore.token = 'abc'">修改token1</button>
      <button @click="useUserStore.changeToken('defg')">修改token2</button>
    </div>
    <div>
      <span>用户信息：{{ useUserStore.getUserInfo }}</span>
      <button @click="useUserStore.changeUserInfo({ name: '李四', age: 21 })">
        修改用户信息
      </button>
    </div>
    <div>
      <span>noSave信息：{{ useUserStore.noSave }}</span>
      <button @click="useUserStore.noSave = '我不会被缓存'">
        修改noSave，一刷新就没了
      </button>
    </div>
  </div>
</template>

<script setup>
import useStore from "@/store";
const { useUserStore } = useStore();
import { storeToRefs } from "pinia";

// 如果直接从pinia中解构数据，会丢失响应式， 使用storeToRefs可以保证解构出来的数据也是响应式的
const { token } = storeToRefs(useUserStore);
</script>
```

## 21. setup 语法糖

::: tip 为什么要用 setup 语法糖
我们在使用 Vue3 的 `composition API` 时，会将定义的响应式变量与自定义方法通过 `return` 的方式返回给 `template` 使用，当页面代码量足够庞大时，就会回到 vue2.0 的苦恼，来回切换去添加 **return**，而且忘记添加了也不报错。
:::

示例：

```vue
<script setup>
// 这里的代码会在每次组件实例被创建的时候执行
</script>
```

> setup 的语法糖，其实就是在 vue 代码的 `script` 标签上，添加一个 `setup`。[官方文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)

> 优势
>
> - 更少的样板内容，更简洁的代码。
> - 能够使用纯 Typescript 声明 props 和抛出事件。
> - 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
> - 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

### 21.1 属性、方法无需返回

> 繁琐的 `return` 被移除，任何在 script setup 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的组件、方法等内容) 都能在模板中直接使用

::: demo 引入 setup
example/vue3/18
:::

::: details utils.js
<<< ../example/vue3/utils.js
:::

### 21.2 自动注册组件

> 在原有的 vue2.0 或者 vue3 中，子组件想要在父组件使用，必须 import 引入，并在 components 中注册，才可以在模板中使用。而使用 `setup语法糖` 后，则可以直接引入使用，无需注册。

父组件
::: demo 引入 setup
example/vue3/17-parent
:::

::: details 子组件
<<< ../example/vue3/17-son.vue
:::

### 21.3 支持 props、emit

::: warning 问题来了
原有 Vue3 的父子组件传值时，都是在 `setup` 中传入 `props` 和 `emit` ，现在怎么办呢

```js
setup(props, {emit}) {

}
```

:::

::: tip 注意
在 `<script setup>` 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，它们具备完整的类型推断并且在 `<script setup>` 中是直接可用的，[官方文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits)
:::

父组件
::: demo 引入 setup
example/vue3/20-parent
:::

::: details 子组件
<<< ../example/vue3/20-son.vue
:::

### 21.4 支持动态 css

::: demo 支持动态 css
example/vue3/20
:::

### 21.5 路由跳转

```vue
<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

// 获取query
console.log(route.query);
// 获取params
console.log(route.params);

const jump = () => {
  router.push("/xxx");
};
</script>
```

> 有关 `setup语法糖` 更多高级用法，请参考[官方文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

## 22. api 方法总结

### 22.1 ref 与 toRef、toRefs

1. `ref` 函数包装了一个响应式的数据对象。
2. `toRef` 是将某个对象中的某个值转化为响应式数据，其接收两个参数，第一个参数为 `obj` 对象；第二个参数为对象中的属性名。
3. `toRefs` 其作用就是将传入的对象里所有的属性的值都转化为响应式数据对象，该函数支持一个参数，即 `obj` 对象
4. `ref` 是对传入数据的拷贝；`toRef` 是对传入数据的引用
5. `ref` 的值改变会更新视图；`toRef` 的值改变不会更新视图

### 22.2 reactive 与 shallowReactive

1. `reactive` 方法是用来创建一个响应式的数据对象，可以是嵌套的对象，会给内部的每一个对像都加入一个 Proxy 包裹着
2. `shallowReactive` 代表一个浅层的 `reactive`,意思就是监听了第一层属性的值，一旦发生改变，则更新视图。代表着当使用时只给第一层加入了 `Proxy`

### 22.3 toRaw 和 markRaw

1. `toRaw` 方法是用于获取 `ref` 或 `reactive` 对象的原始数据的;

```vue
<script>
import { reactive, toRaw } from "vue";
export default {
  setup() {
    const obj = {
      name: "哈哈哈哈哈哈哈",
      age: 35,
    };

    const state = reactive(obj);
    const raw = toRaw(state);
    console.log(state); // Proxy对象
    console.log(raw); // 原始对象
    console.log(obj === raw); // true
  },
};
</script>
```

2. `markRaw` 方法可以将原始数据标记为非响应式的，即使用 `ref` 或 `reactive` 将其包装，仍无法实现数据响应式，其接收一个参数，即原始数据，并返回被标记后的数据。

```vue
<script>
import { reactive, toRaw, markRaw } from "vue";
export default {
  setup() {
    const obj = {
      name: "哈哈哈哈哈哈哈",
      age: 35,
    };
    markRaw(obj);
    const state = reactive(obj);
    console.log(obj);
    console.log(state); // 无法响应式
  },
};
</script>
```

### 22.4 useRoute 和 useRouter

```vue
<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/test">Test</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      console.log(route); // 用来接收路由参数
      console.log(router); // 用来执行路由方法
    });

    return {};
  },
};
</script>
```

### 22.5 watch 和 watchEffect

`watch` 和 `watchEffect` 都是用来监视某项数据变化从而执行指定的操作的,但是他们之间在用法上还是有区别的:

1. watch( source, cb, [options] )
   - source：可以是表达式或函数，用于指定监听的依赖对象
   - cb：依赖对象变化后执行的回调函数
   - options：可参数，可以配置的属性有 immediate（立即触发回调函数）、deep（深度监听）

```vue
<template></template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    // 当ref时
    const state1 = ref(0);
    watch(state1, (newValue, oldValue) => {
      console.log(`原值为${oldValue}`);
      console.log(`新值为${newValue}`);
      /* 1秒后打印结果：
        原值为0
        新值为1
      */
    });
    // 1秒后将state值+1
    setTimeout(() => {
      state1.value++;
    }, 1000);

    // 当reactive时
    const state2 = reactive({ count: 0 });
    watch(
      () => state2.count,
      (newValue, oldValue) => {
        console.log(`原值为${oldValue}`);
        console.log(`新值为${newValue}`);
        /* 1秒后打印结果：
          原值为0
          新值为1
        */
      }
    );
    // 1秒后将state.count的值+1
    setTimeout(() => {
      state2.count++;
    }, 1000);

    // 监听多个值：
    const state3 = reactive({ count: 0, name: "zs" });
    watch(
      [() => state3.count, () => state3.name],
      ([newCount, newName], [oldvCount, oldName]) => {
        console.log(oldvCount); // 旧的 count 值
        console.log(newCount); // 新的 count 值
        console.log(oldName); // 旧的 name 值
        console.log(newName); // 新的 name 值
      }
    );

    setTimeout(() => {
      state3.count++;
      state3.name = "ls";
    }, 1000);

    return {};
  },
};
</script>
```

2. `watchEffect` 与 `watch` 的区别主要有以下几点：
   - 不需要手动传入依赖
   - 每次初始化时会执行一次回调函数来自动获取依赖
   - 无法获取到原值，**只能得到变化后的值**

```vue
<template></template>

<script>
import { reactive, watchEffect } from "vue";
export default {
  setup() {
    const state = reactive({ count: 0, name: "zs" });
    watchEffect(() => {
      console.log(state.count);
      console.log(state.name);
      /*  初始化时打印：
          0
          zs

          1秒后打印：
          1
          ls
      */
    });

    setTimeout(() => {
      state.count++;
      state.name = "ls";
    }, 1000);
  },
};
</script>
```

### 22.6 computed 返回 ref 对象

```vue
<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const x = computed(() => {
      return "jjjjj";
    });
    console.log(x.value); // jjjjj
    const count = ref(1);
    const plusOne = computed({
      get: () => {
        console.log("---------Get", count.value); //
        return count.value + 1;
      },
      set: (val) => {
        console.log("---------Set", val); // 1
        count.value = val - 1;
      },
    });
    plusOne.value = 1;
    console.log(count.value); // 0
  },
};
</script>
```

### 22.7 provide 和 inject

1. `provide` ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 `key`，即数据的名称；第二个参数为 `value`，即数据的值

2. `inject` ：接收父组件或祖先组件传递过来的数据。接收一个参数 `key`，即父组件或祖先组件传递的数据名称

```vue
//a.vue
<script>
import { provide } from "vue";
export default {
  setup() {
    const obj = {
      name: "哈哈哈哈哈哈",
      age: 22,
    };

    // 向子组件以及子孙组件传递名为info的数据
    provide("info", obj);
  },
};
</script>

//b.vue
<script>
import { inject } from "vue";
export default {
  setup() {
    // 接收a.vue传递过来的数据
    inject("info"); // {name: '哈哈哈哈哈哈', age: 22}
  },
};
</script>

//c.vue
<script>
import { inject } from "vue";
export default {
  setup() {
    // 接收a.vue传递过来的数据
    inject("info"); // {name: '哈哈哈哈哈哈', age: 22}
  },
};
</script>
```

### 22.8 vue2 与 vue3 生命周期对比

```vue
<template>
  <div id="app"></div>
</template>
<script>
// 1. 从 vue 中引入 多个生命周期函数
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  unMounted,
} from "vue";
export default {
  name: "App",
  setup() {
    onBeforeMount(() => {
      // 在挂载前执行某些代码
    });
    onMounted(() => {
      // 在挂载后执行某些代码
    });
    onBeforeUpdate(() => {
      // 在更新前前执行某些代码
    });
    onUpdated(() => {
      // 在更新后执行某些代码
    });
    onBeforeUnmount(() => {
      // 在组件销毁前执行某些代码
    });
    unMounted(() => {
      // 在组件销毁后执行某些代码
    });
    return {};
  },
};
</script>
```

### 22.9 setup(props,context)

1. 执行时机

   > setup 的执行时机在：beforeCreate 之后 created 之前

   ```vue
   <script>
   setup(props, ctx) {
    console.log('setup')
   },
   beforeCreate() {
    console.log('beforeCreate')
   },
   created() {
    console.log('created')
   },
   </script>
   ```

2. props:

   - 组件传递的参数,是响应式的,可以通过使用 watchEffect 或 watch 进行观测和响应
   - 不要直接使用解构赋值,会使得参数失去响应性
   - 若要解构:const { title } = toRefs(props)

3. context:

   | vue3          | vue2        | 解释                           |
   | ------------- | ----------- | ------------------------------ |
   | context.attrs | this.$attrs | 组件标签上的属性(非响应式对象) |
   | context.slots | this.$slots | 插槽(非响应式对象)             |
   | context.emit  | this.$emit  | 标签上自定义的触发事件(方法)   |

   - context 是一个普通的 JavaScript 对象,也就是说,它不是响应式的,可以直接解构
   - attrs 和 slots 是内部组件实例上相应值的代理。这样可以确保它们即使在更新后也始终会显示最新值,以便我们可以对它们进行结构分解,而不必担心访问老的引用：但避免对内部的属性进行解构,并始终以 attrs.x 或 slots.x 的方式使用
   - emit: ƒ ()
   - listeners: Object
   - parent: VueComponent
   - refs: Object
   - root: Vue

4. this 指向问题:
   > 因为 setup()是在解析其它组件选项之前被调用的,所以 setup()内部的 this 的行为与其它选项中的 this 完全不同

<Comment />
