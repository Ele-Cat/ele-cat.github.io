---
title: Markdown 扩展 # 标题
titleTemplate: 模版 # 标题模版
description: 描述 # 描述
layout: doc # 布局
navbar: true # 顶栏
sidebar: true # 侧边栏
aside: right # 侧边栏
outline: [2, 3] # 侧边栏深度
editLink: true # 编辑链接
footer: true # 页脚
pageClass: custom-page-class-123 # 自定义页面类名
---

# VitePress {#my-anchor}

## 01. 安装&运行

### 1.1 初始化项目

::: code-group

``` [npm]
$ npx vitepress init
```
``` [pnpm]
$ pnpm vitepress init
```
``` [bun]
$ bunx vitepress init
```
:::

### 1.2 运行

::: code-group

``` [npm]
$ npm run docs:dev
```
``` [pnpm]
$ pnpm run docs:dev
```
``` [yarn]
$ yarn docs:dev
```
``` [bun]
$ bunx run docs:dev
```
:::

### 1.3 打包

```
$ npm run docs:build
```

输出目录`docs/.vitepress/dist`

## 02. Markdown 语法

> 参考[官网](https://vitepress.dev/zh/guide/markdown)

### 标题锚点 {#my-anchor1}

#### 自定义锚点

```md
# 使用自定义锚点 {#my-anchor}
```

### 链接

#### 内部链接

#### 外部链接

### frontmatter

参见[frontmatter](https://vitepress.dev/zh/reference/frontmatter-config)

### GitHub 风格的表格

输入

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

输出
| Tables | Are | Cool |
| ------------- | :-----------: | ----: |
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

### Emoji 🎉

输入

```md
:tada: :100:
```

输出

:tada: :100:

这里可以找到[所有支持的 emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。

### 目录表（TOC）

输入

```
[[toc]]
```

输出

[[toc]]

### 自定义容器

#### 默认标题

输入

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

输出

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

#### 自定义标题

输入

````md
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::
````

输出

::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::

### 代码块中的语法高亮

输入

````md
```js
export default {
  name: "MyComponent",
  // ...
};
```
````

````md
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```
````

输出

```js
export default {
  name: "MyComponent",
  // ...
};
```

```vue
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

在 Shikiji 的代码仓库中，可以找到[合法的编程语言列表](https://github.com/antfu/shikiji/blob/main/docs/languages.md)。

### 在代码块中实现行高亮

#### 单行高亮

输入

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

#### 多行高亮

除了单行之外，还可以指定多个单行、多行，或两者均指定：

- 多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 多行与单行：例如 `{4,7-13,16,23-27,40}`

输入

````md
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

输出

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

#### 注释高亮

使用 // [!code hl] 注释实现行高亮。

输入

````md
```js
export default {
  data() {
    return {
      msg: "Highlighted!", // [!code  hl]
    };
  },
};
```
````

输出

```js
export default {
  data() {
    return {
      msg: "Highlighted!", // [!code hl]
    };
  },
};
```

### 代码块中聚焦

输入

````md
```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code  focus]
    };
  },
};
```
````

输出

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
    };
  },
};
```

### 代码块中的颜色差异

输入

````md
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

输出

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### 高亮“错误”和“警告”

输入

````md
```js
export default {
  data() {
    return {
      msg: "Error", // [!code  error]
      msg: "Warning", // [!code  warning]
    };
  },
};
```
````

输出

```js
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

### 行号

可以通过以下配置为每个代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true,
  },
};
```

输入

````md
```ts {1}
// 默认禁用行号
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

输出

```ts {1}
// 默认禁用行号
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

### 导入代码片段

输入

```md
<<< ./snippet-with-region.js#snippet {1,2,4-6 js:line-numbers}
```

输出

<<< ./snippet-with-region.js#snippet {1,2,4-6 js:line-numbers}

./snippet-with-region.js

<<< ./snippet-with-region.js {js:line-numbers}

### 代码组

输入

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::
````

输出

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

在代码组中[导入代码片段](#导入代码片段)

输入

```md
::: code-group

<!-- 文件名默认用作标题 -->

<<< ./snippet-with-region.js [snippet]

<!-- 也可以提供定制的代码组 -->

<<< ./snippet-with-region.js#snippet {1,2,4-6 js:line-numbers} [snippet with region]

:::
```

输出

::: code-group

<!-- 文件名默认用作标题 -->

<<< ./snippet-with-region.js [snippet]

<!-- 也可以提供定制的代码组 -->

<<< ./snippet-with-region.js#snippet {1,2,4-6 js:line-numbers} [snippet with region]

:::

### 包含 markdown 文件

::: tip
所选行范围的格式可以是： `{3,}`、 `{,10}`、`{1,10}`
:::

输入： `<!--` `@include: ./vitePress-import.md{3,}` `-->`

./vitePress-import.md 3-结尾 内容：
```md
<!--@include: ./vitePress-import.md{3,}-->
```

输出：

<!--@include: ./vitePress-import.md{3,}-->

### 数学方程

[数学方程-参考官网](https://vitepress.dev/zh/guide/markdown#math-equations)

### 图片懒加载

```js
export default {
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
};
```

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
const { page } = useData()

const count = ref(0)
</script>

### 在 Markdown 中使用 Vue

{{ 1 + 1 }}
<br />
<span v-for="i in 3">{{ i }}</span>
<br />
The count is: {{ count }}
<br />
<button :class="$style.button" @click="count++">Increment</button>

<pre>{{ page }}</pre>

<style module>
.button {
  color: red;
  font-weight: bold;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

<Comment />
