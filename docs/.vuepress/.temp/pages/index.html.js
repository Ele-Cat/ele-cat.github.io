export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo.png",
    "heroAlt": "可樂の學習站點",
    "heroText": "可樂の學習站點",
    "tagline": "一只站在树上的鸟儿，从不担心脚下树枝断裂，因为它相信的不是树枝，而是它的翅膀。",
    "actions": [
      {
        "text": "VuePress",
        "link": "/note/VuePress",
        "type": "primary"
      },
      {
        "text": "Vue@next",
        "link": "/note/Vue@next",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "VuePress2",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "组件化开发",
        "details": "在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "代码同步展示",
        "details": "使用组件化开发思想，结合Ant-Design-vue组件库，演示代码同时展示实际效果。"
      },
      {
        "title": "网址导航",
        "details": "丰富的书签导航，更加方便快捷的学习、查找资源。"
      },
      {
        "title": "个人资源存储",
        "details": "代码片段、CSS储备、JS逻辑，应有尽有。"
      },
      {
        "title": "休闲娱乐",
        "details": "包含图文、视频、小游戏等，码农休息站。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2023-present E-Cat"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "捐赠",
      "slug": "捐赠",
      "children": []
    }
  ],
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
