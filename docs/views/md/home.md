<div class="home-wrapper">
<div class="home-container">

<div class="version">

![node-current](https://img.shields.io/node/v/next)
![npm](https://img.shields.io/npm/v/n)
![vue@next](https://img.shields.io/npm/v/vue?color=green&label=vue)
</div>

&emsp;

#### 本站点使用 VitePress 搭建，了解更多请访问[官方网站](https://vitepress.dev/zh/)

<details><summary>使用VitePress搭建博客的优势</summary>

- 简单易用：使用 Markdown 语法编写博客非常容易上手，同时 VitePress 还提供了丰富的主题和插件，可以快速搭建出美观的博客网站。
- 高效快速：VitePress 使用了现代前端工具 Vite，能够快速地构建和生成静态网站，同时使用 Vue.js 前端框架，支持组件化开发，使得博客页面更加灵活高效。
- 自定义性强：VitePress 提供了丰富的配置选项，包括主题、插件等，可以根据个人需求进行自定义设置，让博客更符合个人风格和需求。
- SEO 友好：VitePress 提供了一些优化选项，如自动生成 sitemap.xml，以及自动生成 meta 标签等，使得博客更容易被搜索引擎收录和识别。
- 社区活跃：VitePress 是由 Vue.js 的作者尤雨溪开发的，因此得到了广泛的关注和支持，同时也有很多社区贡献的主题和插件，可以让开发者更加便捷地开发博客。
</details>

&emsp;

#### 本站点的代码解析器参考[博客](https://blog.csdn.net/cwin8951/article/details/130803402)

<details><summary>VuePress2 Container效果</summary>

<div style="max-width:500px">

::: demo 引用获取当前鼠标位置
example/vue3/02
:::
</div>
</details>

&emsp;

捐赠 ![捐赠](https://img.shields.io/badge/%E2%98%95-Buy%20Me%20A%20Coffee-%23be4141.svg?colorB=00A862) ![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=ele-cat.gitee.io&left_text=Contributors&left_color=%23595959&right_color=%231283c3&query_only=false&format=true)

<span class="donate">如果你觉得本项目对你有帮助，或者想对我微小的工作表示一点资瓷，你可以请我喝一杯可乐，感谢! :pray: :vulcan_salute:</span>

<div class="appreciate">

![微信赞赏码](/images/1651905141755.jpg){data-zoomable}
![支付宝收款码](/images/1651905463193.jpg){data-zoomable}

</div>
</div>
</div>

<style lang="scss" scoped>
.home-wrapper {
  padding: 24px 64px;
}
.home-container {
  max-width: 1152px;
  margin: 0 auto;
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

@media (max-width: 960px) {
  .home-wrapper {
    padding: 24px 48px;
  }
}

@media (max-width: 640px) {
  .home-wrapper {
    padding: 24px;
  }
}
</style>
