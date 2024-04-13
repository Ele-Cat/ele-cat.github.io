---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 可樂の學習站點
titleTemplate: 由 Vite 和 Vue 驱动的静态站点生成器
pageClass: homepage-layout # 自定义页面类名
hero:
  name: "可樂の學習站點"
  tagline: 一只站在树上的鸟儿，从不担心脚下树枝断裂，因为它相信的不是树枝，而是它的翅膀。
  actions:
    - theme: brand
      text: Vue3
      link: /views/note/vue3
    - theme: alt
      text: 样式Cool
      link: /views/share/css/generate
  image:
    src: /images/logo.png
    alt: VitePress

features:
  - icon: 📝
    link: https://vitepress.dev/zh/
    title: VitePress
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><defs><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>
    link: https://cn.vitejs.dev/
    title: 享受 Vite 无可比拟的体验
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    link: https://cn.vuejs.org/
    title: 使用 Vue 自定义组件化开发
    details: 在 Markdown 中使用 Vue 组件，同时使用 Vue 组件构建自定义主题。
  - icon: 🚀
    link: https://cn.vitejs.dev/
    title: 速度真的很快！
    details: 采用静态 HTML 实现快速的页面初次加载，实现快速的页面切换导航。
  - icon: 🏋️
    link: https://blog.csdn.net/cwin8951/article/details/130803402
    title: 代码同步展示
    details: 使用组件化开发思想，演示代码同时展示实际效果。
  - icon: 📇
    link: https://ele-cat.gitee.io/views/nav/nav.html
    title: 网址导航
    details: 丰富的书签导航，更加方便快捷的学习、查找资源。
  - icon: 🛠️
    link: https://ele-cat.gitee.io/views/share/css/generate.html
    title: 个人资源存储
    details: 代码片段、CSS储备、JS逻辑，应有尽有。
  - icon: 📺
    link: https://ele-cat.gitee.io/views/nav/nav.html#%E6%91%B8%E9%B1%BC%E4%B8%93%E7%94%A8
    title: 休闲娱乐
    details: 包含图文、视频、小游戏等，码农休息站。
---

<div class="home-wrapper">

<div class="version">

![node-current](https://img.shields.io/node/v/next)
![npm](https://img.shields.io/npm/v/n)
![vue@next](https://img.shields.io/npm/v/vue?color=green&label=vue)

</div>

#### 本站点使用 VitePress 搭建，了解更多请访问[官方网站](https://vitepress.dev/zh/)

<details><summary>使用VitePress搭建博客的优势</summary>

- 简单易用：使用 Markdown 语法编写博客非常容易上手，同时 VitePress 还提供了丰富的主题和插件，可以快速搭建出美观的博客网站。
- 高效快速：VitePress 使用了现代前端工具 Vite，能够快速地构建和生成静态网站，同时使用 Vue.js 前端框架，支持组件化开发，使得博客页面更加灵活高效。
- 自定义性强：VitePress 提供了丰富的配置选项，包括主题、插件等，可以根据个人需求进行自定义设置，让博客更符合个人风格和需求。
- SEO 友好：VitePress 提供了一些优化选项，如自动生成 sitemap.xml，以及自动生成 meta 标签等，使得博客更容易被搜索引擎收录和识别。
- 社区活跃：VitePress 是由 Vue.js 的作者尤雨溪开发的，因此得到了广泛的关注和支持，同时也有很多社区贡献的主题和插件，可以让开发者更加便捷地开发博客。
</details>

#### 本站点的代码解析器参考[博客](https://blog.csdn.net/cwin8951/article/details/130803402)

<details><summary>VuePress2 Container效果</summary>

<div style="max-width:500px">

::: demo 引用获取当前鼠标位置
example/vue3/02
:::

</div>
</details>

捐赠 ![捐赠](https://img.shields.io/badge/%E2%98%95-Buy%20Me%20A%20Coffee-%23be4141.svg?colorB=00A862) ![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=ele-cat.gitee.io&left_text=Contributors&left_color=%23595959&right_color=%231283c3&query_only=false&format=true)

<span class="donate">如果你觉得本项目对你有帮助，或者想对我微小的工作表示一点资瓷，你可以请我喝一杯可乐，感谢! :pray: :vulcan_salute:</span>

<div class="appreciate">

![微信赞赏码](/images/1651905141755.jpg){data-zoomable}
![支付宝收款码](/images/1651905463193.jpg){data-zoomable}

</div>
</div>

<style lang="scss">
.homepage-layout {
  .image-src {
    &:hover {
      transform: translate(-50%, -50%) rotate(666turn);
      transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
    }
  }
  .home-wrapper {
    padding: 24px 12px;
  }
  ul {
    margin-left: 20px;
    list-style: auto;
  }
  .version {
    p {
      width: 100%;
      display: flex;
      img {
        margin-right: 8px;
      }
    }
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
  .donate {
    font-size: 14px;
  }
  .appreciate {
    p {
      width: 100%;
      display: flex;
      img {
        max-height: 280px;
        margin-right: 8px;
      }
    }
  }
}

@media(max-width: 640px) {
  .homepage-layout {
    .appreciate {
      p {
        img {
          max-width: 48%;
          max-height: 180px;
          margin-right: 2%;
        }
      }
    }
  }
}
</style>

