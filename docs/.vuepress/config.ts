const { path } = require('@vuepress/utils')

const navbar = require('./configs/navBar')
const sidebar = require('./configs/sidebar')
const head = require('./configs/head')

module.exports = {
  port: "9528",
  base: "/",
  lang: "zh-CN",
  title: "可樂の學習站點",
  description: "可樂の學習站點",
  // theme: "@vuepress/default",
  theme: path.resolve(__dirname, './theme'),
  head,
  plugins: [
    // 代码解析
    [
      require('vuepress-plugin-demo-container-vue3'),
      {
        componentsDir: path.resolve(__dirname, '../views')
      }
    ],
    // 全局组件
    [
      '@vuepress/plugin-register-components',
      // {
      //   components: {
      //     links: path.resolve(__dirname, './public/demo/links.vue')
      //   }
      // },
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],
    // 图片缩放
    [
      '@vuepress/plugin-medium-zoom',
      {
        delay: 1000
      },
    ],
    // 全站检索
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
            hotKeys: [],
            maxSuggestions: 10,
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    logoDark: "/images/logo.png",
    darkMode: true,
    // repo: "https://gitee.com/ele-cat",
    // editLink: false,
    navbar,
    sidebar,
    lastUpdated: false,
    lastUpdatedText: '更新时间',
    contributors: false,
    contributorsText: '作者',
    tip: '提示',
    warning: '警告',
    danger: '危险警告',
    notFound: ['妹找到哇', '我不到哇'],
    backToHome: '肘，跟我回屋',
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换模式',
    toggleSidebar: '切换侧边栏',
    displayAllHeaders: true,
    smoothScroll: true,
  },
};
