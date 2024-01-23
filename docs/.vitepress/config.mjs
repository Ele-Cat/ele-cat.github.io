import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";
import path from 'path';
import { mdPlugin } from "./config/plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/", // 部署到github pages时需要配置
  title: "可樂の學習站點", // 网站标题
  description: "A VitePress Blog", // 网站描述
  markdown: {
    config: (md) => mdPlugin(md),
    lineNumbers: true, // 代码块显示行
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  vite: {
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../')
      }
    },
  },
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", href: "/images/logo.png" },
    ],
    ["meta", { name: "theme-color", content: "#f00" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/images/logo.png", width: 24, height: 24 },
    nav,
    sidebar,
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Ele-Cat" },
      {
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>',
        },
        link: "https://gitee.com/ele-cat",
        ariaLabel: "cool link",
      },
    ],
    editLink: {
      pattern: "https://gitee.com/ele-cat/ele-cat/edit/master/docs/:path",
      text: "在Gitee上编辑此页",
    },
    footer: {
      message: "<a href='https://gitee.com/ele-cat/ele-cat/blob/master/LICENSE' target='_blank'>MIT Licensed</a>",
      copyright: "Copyright © 2023-present <a href='https://gitee.com/ele-cat' target='_blank'>Cola</a>",
    },
    outline: {
      label: "目录",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    // externalLinkIcon: true, // 外部链接旁显示外部链接图标
  },
});
