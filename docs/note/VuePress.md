# 使用VuePress2搭建博客

## 一、项目初始化安装
### 01-创建一个空目录
```bash
mkdir blog
cd blog
```

### 02-初始化项目
:::: code-group
::: code-group-item YARN
```bash
git init
yarn init
```
:::
::: code-group-item NPM
```bash
git init
npm init
```
:::
::::

### 03-安装VuePress依赖
:::: code-group
::: code-group-item YARN
```bash
yarn add -D vuepress@next
```
:::
::: code-group-item NPM
```bash
npm install -D vuepress@next
```
:::
::::

### 04-添加脚本
在根目录的`package.json`中添加脚本
```json{2-5}
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "^2.0.0-beta.39",
  },
}

```

### 05-添加git忽略
在根目录创建`.gitignore`文件，并录入
```bash
node_modules
.temp
.cache
```

### 06-创建第一篇博客
创建`docs`目录，并在其下创建`README.md`文件，录入
```md
# Hello VuePress
```
此时的项目结构
```
Blog
├── .vuepress
│
├── docs
│   └── README.md
│   
├── node_modules
│      
└── package.json
```

### 07-启动服务
:::: code-group
::: code-group-item YARN
```bash
yarn docs:dev
```
:::
::: code-group-item NPM
```bash
npm run docs:dev
```
:::
::::

### 08-访问

这个时候，在浏览器地址栏输入[http://localhost:8080](http://localhost:8080)就可以查看到刚刚录入的博文了。当我们修改`docs/README.md`中内容时，浏览器也会同步热更新。

### 09-部署
:::: code-group
::: code-group-item YARN
```bash
yarn docs:build
```
:::
::: code-group-item NPM
```bash
npm run docs:build
```
:::
::::
这时候，在`.vuepress`目录下就会生成一个`dist`目录（与vue一致），把它放在服务器中即可。当然可以把整个项目推送至[github](https://github.com)或[gitee](https://gitee.com)做为[Single Page](https://gitee.com/help/articles/4136)，更多的部署请详情参考[官方网站](https://v2.vuepress.vuejs.org/zh/guide/deployment.html).

## 二、项目配置
### 01-配置`config.ts`
在`.vuepress`文件夹下创建`config.ts`文件，vuepress2中推荐使用**TypeScript**
```ts
module.exports = {
  title: '我的博客', // 设置网站标题
  description: '描述：我的博客',
  base: '/', //默认路径
  theme: "@vuepress/default", // 默认主题
  themeConfig: {// 主题设置
    navbar: [
      { // 右上导航航条 docs/.vuepress/README.md
        text: '主页',
        link: '/'
      }, 
      {
        text: '学习笔记',
        children:[
          {text:'笔记', link: '/guide/note/test01.md'}, // 可不写后缀 .md
          {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
        ]
      }, 
      {
        text: '技术分享',
        children:[
          {text:'笔记', link: '/guide/share/'},// 以 ‘/’结束，默认读取 README.md
          {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
        ]
      }
    ],
    sidebar: {//左侧列表
      '/guide/note/': [
        { // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
          text: '学习笔记',
          children: [
            '/guide/note/test01.md',
            '/guide/note/test02.md',
            '/guide/note/test03.md' 
          ]
        }
      ],
      '/guide/ts/': [
        {
          text: '技术分享',
          children: [
            '/guide/share/test01.md'
          ]
        }
      ],
      // fallback 侧边栏被最后定义
      '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
    }
  }
}
```
- 在`themeConfig`外部的配置项属于**站点配置**，而在`themeConfig`内部的配置项则属于**主题配置**。
- 这时候启动项目，就可以查看到顶部标题、右上角的导航和左侧侧边栏效果了。这里*link*、*children*里的地址就是从项目`docs`目录起的**路径+文件**地址。

### 02-修改启动ip+端口
```ts
module.exports = {
  host: 'localhost', // ip
  port: '9527', //端口号
  title: '我的博客', // 设置网站标题
  description: '描述：我的博客',
  themeConfig: {
    ...
  }
}
```

### 03-配置ico+logo
资源一般都存放在`docs/.vuepress/public`目录下，`public`需要自己创建。
```ts
module.exports = {
  host: 'localhost', // ip
  port: '9527', //端口号
  title: '我的博客', // 设置网站标题
  description: '描述：我的博客',
  base: '/', //默认路径
  head: [
    // 设置 favor.ico，docs/.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/images/logo.png' }
    ]
  ],
  themeConfig: {// 主题设置
    logo: '/images/logo.png',// 注意图片放在 public 文件夹下
    navbar: [...]
  }
}
```

### 04-样式覆盖
- 可以看到[官网](https://v2.vuepress.vuejs.org/zh/)的主题色为<span style="color:#3eaf7c;">**#3eaf7c**</span>，而我的博客主题色为<span style="color:#1890ff;">**#1890ff**</span>。这里可以参考官网的[样式覆盖指南](https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html)。
- 简单来说，就是在`.vuepress`目录下创建`styles`目录，vuepress2是默认支持sass语法的。我们可以在`styles`目录下创建`palette.scss` `index.scss`来达成样式覆盖。
- 比如此时，我们在index.scss文件中写入
```scss
:root {
  // brand colors
  --c-brand: #1890ff;
  --c-brand-light: #40a9ff;
}
```
此时的站点主题色就变为了<span style="color:#1890ff;">**ant-design-vue主题蓝**</span>。
- 比如在`palette.scss`文件中写入
```scss
// 滚动条样式
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 8px;
}
/* 外层轨道 */
::-webkit-scrollbar-track {
  box-shadow: rgba(255, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  border-radius: 1px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  box-shadow: inset 0 0 5px #314659;
  // background: rgba(0, 0, 0, 0.06);
  background: #314659;
}
```
就可以实现与我的博客同样的滚动条
- 当然我们也可以修改`config.ts`文件的head属性，来实现在html头部引入stylesheet，[参考官网](https://v2.vuepress.vuejs.org/zh/reference/config.html#head)。
- 还有，审查站点元素后，通过在`palette.scss`中进行样式修改，也可以实现对站点样式的覆盖（注意优先级）。

## 三、插件使用
### 01-使用vue组件
::: warning
VuePress2.x不会再将`.vuepress/components`目录下的vue文件自动注册为Vue组件，[点击查看](https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-components)。
:::
1. 因此需要手动安装`@vuepress/plugin-register-components`依赖
```bash
npm i -D @vuepress/plugin-register-components@2.0.0-beta.23
```
2. 新建文件`docs/.vuepress/components/TestComponent.vue`
```vue
<template>
  <div>
    <a-tooltip>
      <template #title>{{tip}}-{{is}}</template>
      测试组件-{{is}}
    </a-tooltip>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    is: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const tip = ref('我支持Vue@next')
    const is = props.is
    return {
      tip,
      is
    }
  }
}
</script>

<style>

</style>
```
::: tip
这里我使用到了`ant-design-vue`的tooltip组件（后续会在杂项中演示），同时可以看到`VuePress`支持**Vue@next**语法
:::
3. 对`docs/.vuepress/config.ts`配置
- 单个组件配置
```ts{5-15}
const { path } = require('@vuepress/utils')
 
module.exports = {
  ...
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        components: {
          MyExample: path.resolve(__dirname, './components/TestComponent.vue')                    
        }
      }
    ]
  ]
  ...
}
```

- 多组件配置，就是把`docs/.vuepress/components`目录下的所有vue文件都配置为全局组件（**推荐**）
```ts{5-12}
const { path } = require('@vuepress/utils')
 
module.exports = {
  ...
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ]
  ...
}
```
4. 使用时，直接在`*.md`文件中插入组件即可
```md
<TestComponent />
或
<test-component :is="1" />
```

<TestComponent />

------
<test-component :is="1" />

------
<wheather />

::: warning
在插入自定义Vue组件后，可能会报找不到组件的warning `Failed to resolve component`，（重启试试:joy:`:joy:`）[emoji](https://github.com/ikatyang/emoji-cheat-sheet)
:::
### 02-使用search插件
::: tip
在之前的VuePress版本中，search插件是自带的功能，新版本中需要自行配置。
:::

这里官方给出了两套解决办法：
1. [search参考地址](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html)
2. [docsearch参考地址](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#locales)

### 03-其它官方插件
其它官方插件，可参考[地址](https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html)，可以查看其安装、配置方式。

### 04-自定义插件
当然，官方也给出了自定义插件的开发方式，[Jump](https://v2.vuepress.vuejs.org/zh/advanced/plugin.html)，本系统中的代码演示功能就用到了[VuePress2 Container插件](https://www.cjsound.cn/vuepress2-plugin/)。


## 四、杂项
### 01-引入第三方组件库
::: tip
既然是Vue编写的项目，当然可以用包管理工具来安装第三方组件喽，这里以`ant-design-vue`为例（默认安装ant-design-vue@3.x版本）
:::
1. 安装依赖
```bash
npm i -S ant-design-vue
```
2. 引入`ant-design-vue`

~~这时候就有人会问了，没有main.js(ts)，我引个毛哦，不要慌。~~
::: tip
在VuePress@1.x版本中，可以在`.vuepress`文件夹下创建`enhanceApp.js`来实现类main.js{ts}的效果，但是在2.x版本中，约定文件有[变更](https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-enhanceapp-js)
:::

在`.vuepress`目录下创建`clientAppEnhance.ts`文件，~~（为什么不用js就不赘述了）~~
```ts
import { defineClientAppEnhance } from '@vuepress/client'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export default defineClientAppEnhance(({ app }) => {
  app.use(Antd)
})
```
其中的`defineClientAppEnhance`方法解构出了个`app`，就是Vue的`app`，当然也可以用它来注册全局组件。

当然，它还包含其它参数，`router` `siteData`，具体[参考](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-app-enhance.html#client-app-enhance-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)。

这时，就可以在`*.md` `*.vue`文件中直接使用`ant-design-vue`组件了。

<a-row :gutter="20" style="margin-top:20px">
  <a-col :span="12">
    <a-card title="a-card">
      <template #extra><a>more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </a-col>
  <a-col :span="12">
    a-skeleton
    <a-skeleton />
  </a-col>
</a-row>

::: demo 引用Antd组件
  example/button
:::

### 02-引入iframe
VuePress支持直接在`.md`文件中引入iframe标签
```md
<iframe id="iframe" style="width:100%;height:500px" frameborder=0 allowfullscreen="true" src="https://www.bilibili.com/"></iframe>
```
<div class="iframe-box">
  <iframe id="iframe" style="height:500px" src="https://www.bilibili.com/"></iframe>
</div>

### 03-Frontmatter
::: tip
大家可以看到，我的[首页](/)是没有左侧侧边栏的，这是怎么做到的呢？自己先看[官网](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#frontmatter)
:::

### 04-想到再补充