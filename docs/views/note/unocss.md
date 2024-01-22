---
outline: [2, 3]
---

# UnoCSS

## 01. UnoCSS 介绍

### 1.1 什么是 UnoCSS

> UnoCSS 是一个即时按需原子 CSS 引擎，它可以让你用简短的类名来控制元素的样式，而不需要写复杂的 CSS 代码。

> 当然，原子样式也有很多选择，最著名的就是 `Tailwind`。 但由于 Tailwind 会生成大量样式定义，会导致全量的 CSS 文件往往体积会多至数 MB，从而有性能上有一些不足。

::: details 什么是原子化

- 原子化 ​​CSS​​​ 是一种 ​​CSS​​ 架构方式，其支持小型、单一用途的类，其名称基于视觉功能。
- 更加通俗的来讲，原子化 ​​CSS​​​ 是一种新的 ​​CSS​​​ 编程思路，它倾向于创建小巧且单一用途的 ​​class​​，并且以视觉效果进行命名。
  :::

### 1.2 UnoCSS 的优点

- 它可以让你快速地开发和原型设计，而不需要考虑 CSS 的细节。
- 它可以让你的 CSS 文件更小，因为它只生成你用到的工具类。
- 它可以让你的 CSS 更一致，因为它遵循一套预设的规则和变量。
- 它可以让你的 CSS 更灵活，因为它支持自定义工具类，变体，指令和图标。
- 它可以让你的 CSS 更易于维护，因为它避免了样式冲突和重复代码。

### 1.3 资源地址

- [官网地址](https://unocss.dev/)
- [属性检索](https://unocss.dev/interactive)
- [CSS 转 UnoCSS](https://to-unocss.netlify.app/)
- [UnoCSS 在线编辑器](https://unocss.dev/play/?html=DwEwlgbgBAFgtAMwK4BsVQC4FMAeG4DGWAdtgE5QIq5QDOW1B%2BxA9sVlAIZoBcGZnYrTAYwbOABYADFIB8AKChRQkKAFtOCpUpXRseOAFYc6BAHcAjDK7EwG7HABGLJMSJxuGG3c4OCL0jgwYgRgkQ5BHwcQJAFRcQtaLW0lAFVWAGEAZSzFbWAAenAIZJ1iqBYABwBmKUxcfBQAc0ozWrq1C1LtABUYDmDaDEEvcRAsDWIQKABBDBY1MAIobKyoEibgrAA6PJ0iyG7ddQAmSmocKAArJCGwBABPQhJyeoMTkwqaupgWCCwyABeABEVQAHFJgd0dJw9ikoGBCJwyM5iHAUCwmiw4JsMDAkI44Sl9Phgv0yCIidoYGQsAgQTAMBhKrQeAUCrj8Y5tv41AVXCwCLRaPzWELaMCqUphmQmlgMCCAPqOFCCADWkvhUFkhU0cMKxWSBsO8mNJVN5U4jloLBQSGwUGcTIWcAshigFKajLgdWoCHwdRJz1IAK%2BtVa7WSYwmgmmAHaEUJhqQoAnkGgHlACLd5osAF5W6img4lIA&config=PTAEFMGcBsEsDsAuBaAJrSBDARtcz5wAPFOQ0eAe2QCcpEbYBjRcVZWAWwAdKbFIAKC69%2BoAN6DQoVOABmCcAGFK8BQHMANFNDc6kcIgCCiBrGwBXRLDkBPbdL1RDASSarID3fsMBVKtoAvqByNJScoADkFlRMkJCRgoLEoogy8pgW0GmyCoQqarDqABSS0jRZUABcoADaOtK1kUwWkIjhtJWRmhKg7tB8NZF0qJGggQC6XlM6kAAWfIgtAjVl0lEtbR3zi8uRQ6wkyNDqoIcofJjw6uCgCwBu4DRV58ismNDdOoFeTgYrdQa3mciH8lGKAEovI4fMZTIxLNY7JDocD-m4PKUgdJIEwPuAagBGAB0ACZUdImKh4EM5qZuJAqiAoJxifNgF91uMoToZoEIYIgA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA)

## 02. 在项目中使用

> 以 Vite + Vue3 为示例，[项目地址](https://gitee.com/ele-cat/unocss)

::: tip 在非Vite构建下
其他框架或环境下的安装请参考[博客](https://blog.csdn.net/halo1416/article/details/131162456)或[官网配置](https://unocss.dev/integrations/)
:::

### 2.1 安装

#### 2.1.1 初始化 Vite + Vue3 项目

```sh
npm create vite@latest unocss-demo
cd unocss-demo & npm install
```

#### 2.1.2 安装 UnoCSS

```sh
npm install unocss -D
```

#### 2.1.3 配置

1. `vite.config.js`配置

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite"; // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // [!code --]
  plugins: [vue(), UnoCSS()], // [!code ++]
});
```

2. 创建`uno.config.js`配置文件

```js
// uno.config.js
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
});
```

3. 引入样式

```js
// main.js
import 'virtual:uno.css'; // [!code ++]
```

### 2.2 使用

```vue
<template>
  <button class="h-32px flex justify-center items-center text-14px cursor-pointer select-none px-15pxpy-8px border-rd-4px border-none box-border text-#fff bg-#409eff m-auto hover-bg-#67c23a">按钮</button>
</template>

```

### 2.3 其他 // todo

1. 图标库[Pure CSS icons](https://unocss.dev/presets/icons)
2. 特有的属性模式[Attributify Mode](https://unocss.dev/presets/attributify)
3. 属性组的写法转换[Variant Groups](https://unocss.dev/transformers/variant-group)
4. 快捷写法[Shortcuts](https://unocss.dev/config/shortcuts)
5. 标记[Tagify](https://unocss.dev/presets/tagify)
6. 网页字体[Web fonts](https://unocss.dev/presets/web-fonts)
7. CDN运行时[CDN Runtime](https://unocss.dev/integrations/runtime)
8. 检查[Inspector](https://unocss.dev/tools/inspector)

## 03. 常见用法

### 3.1 交互式文档

> 对应刚入手 unocss 的同学来说，规则怎么写是不知道的，但不用着急，官方（大佬 antfu）给出了 [交互式文档](https://unocss.dev/interactive/)输入你想要的css样式，就可以获得对应的class名称。

### 3.2 基础用法

> UnoCSS支持用预设单位（预设单位是rem），也可以自定义单位

- `padding`相关用法

```css
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-10rpx {
  padding-left: 10rpx;
  padding-right: 10rpx;
}
.p-t-1 {
  padding-top: 0.25rem;
}
.p-b-1 {
  padding-bottom: 0.25rem;
}
.p-l-1 {
  padding-left: 0.25rem;
}
.p-r-1 {
  padding-right: 0.25rem;
}
.p-1 {
  padding: 10px;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
```

- `margin`相关用法 - margin 相关可以参照 padding

```css
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
```

- `flex`相关用法

```css
.flex {
  display: flex;
}
.flex-1 {
  flex: 1 1 0%;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
```

- `文本`相关

```css
.color-#999 {
  --un-text-opacity: 1;
  color: rgba(153, 153, 153, var(--un-text-opacity));
}
.text-12px {
  font-size: 12px;
}
.break-all {
  word-break: break-all;
}
```

在 unocss 中，自定义颜色想要给到 类名后面，并且 RGB 格式的颜色会被转成 RGBA 类型，如：

```css
.color-#999 {
  --un-text-opacity: 1;
  color: rgba(153, 153, 153, var(--un-text-opacity));
}

.bg-#fcc {
  --un-bg-opacity: 1;
  background-color: rgba(255, 204, 204, var(--un-bg-opacity));
}
```
## 04. 自定义规则

### 4.1 静态规则

```js
// uno.config.js
import { defineConfig } from "unocss";

export default defineConfig({
  rules: [ // [!code ++]
    ['m-1', { margin: '0.3rem' }] // 一个配置为一个数组 // [!code ++]
  ] // [!code ++]
});

// 伪代码： 如上配置之后，在css中检测到m-1就会编译成
.m-1 { margin: 0.3rem; }
```

### 4.2 动态规则

```js
export default defineConfig({
  rules: [ // [!code ++]
    /** match[1]代表获取到的值 */ // [!code ++]
    [/^m-(\d+)$/, match => ({ margin: `${+match[1] * 10}px` })], // [!code ++]
    [/^p-(\d+)$/, match => ({ padding: `${+match[1] * 10}px` })], // [!code ++]
  ] // [!code ++]
})

// 伪代码： 这样就可以修改unocss预设的大小，例如m-1会编译成
 .m-1 { margin: 10px; }

```

### 4.3 配置样式集合

```js
export default defineConfig({
  shortcuts: [
    {'flex-center': 'flex items-center justify-center',}, // 静态快捷方式，是一个对象，可配多个
  ]
})
```

```js
export default defineConfig({
 shortcuts: [
    [/^base-border-(.*)$/, match => `border-1 border-style-dashed border-${match[1]}`], // 动态快捷方式，一个配置为一个数组
  ]
})


// 伪代码： 编译结果
.base-border-red {
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(248, 113, 113, var(--un-border-opacity));
  border-style: dashed;
}
```

## 05. vscode插件

### 5.1 安装插件[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

> 安装启用后，页面上就能看出哪些 class 使用 unocss 提供 （带有虚线），并且能显示类名对应的样式内容。

### 5.2 代码提示

1. `ctrl + shift + p` => 输入 `open Setting` => 选择 `首选项：打开用户设置`
2. 添加以下配置
```json
"editor.quickSuggestions": {
  "strings": true,
  "other": true,
  "comments": true,
},
```
配置完成后，在输入类名时会对 unocss 中存在的 class 进行智能提示。

## 参考

- [官方文档](https://unocss.dev/)
- [UnoCSS 快速入门](https://blog.csdn.net/ASHIYI66/article/details/132617040)
- [UnoCSS 基础用法](https://blog.csdn.net/halo1416/article/details/131162456)

<Comment />
