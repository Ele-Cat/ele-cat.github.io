export const themeData = {
  "logo": "/images/logo.png",
  "logoDark": "/images/logo.png",
  "darkMode": true,
  "navbar": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "网址导航",
      "link": "/guide/links/"
    },
    {
      "text": "学习笔记",
      "children": [
        {
          "text": "工具",
          "children": [
            {
              "text": "Git",
              "link": "/note/Git"
            }
          ]
        },
        {
          "text": "前端",
          "children": [
            {
              "text": "Sass",
              "link": "/note/Sass"
            },
            {
              "text": "VuePress2",
              "link": "/note/VuePress"
            },
            {
              "text": "Vue@next",
              "link": "/note/Vue@next"
            },
            {
              "text": "React",
              "link": "/note/React"
            },
            {
              "text": "Electron",
              "link": "/note/Electron"
            }
          ]
        },
        {
          "text": "后端",
          "children": [
            {
              "text": "Node",
              "link": "/note/Node"
            },
            {
              "text": "MongoDB",
              "link": "/note/MongoDB"
            }
          ]
        },
        {
          "text": "实用插件",
          "children": [
            {
              "text": "Moment",
              "link": "/tools/Moment"
            },
            {
              "text": "Vue Doc Preview",
              "link": "/tools/VueDocPreview"
            },
            {
              "text": "Ace Editor",
              "link": "/tools/AceEditor"
            }
          ]
        }
      ]
    },
    {
      "text": "使用教程",
      "children": [
        {
          "text": "在线工具",
          "children": [
            {
              "text": "微信对话生成",
              "link": "/tools/Vue3WechatTool"
            }
          ]
        }
      ]
    },
    {
      "text": "技术分享",
      "children": [
        {
          "text": "Javascript",
          "children": [
            {
              "text": "开发技巧",
              "link": "/share/javascript/JavascriptSkill"
            },
            {
              "text": "数据处理",
              "link": "/share/javascript/JavascriptProcess"
            },
            {
              "text": "工具函数",
              "link": "/share/javascript/JavascriptTool"
            }
          ]
        },
        {
          "text": "Css",
          "children": [
            {
              "text": "样式Cool",
              "link": "/share/css/generate"
            }
          ]
        }
      ]
    },
    {
      "text": "关于我",
      "link": "https://ele-cat.gitee.io/home/"
    }
  ],
  "sidebar": {
    "/guide/vue/": [
      "test01",
      "test02",
      "test03",
      "test04"
    ],
    "/note/TypeScript/": [
      {
        "text": "TypeScript学习",
        "collapsable": true,
        "children": [
          "test01",
          "test02",
          "test03"
        ]
      }
    ],
    "/share/css/": [
      {
        "text": "Css样式Cool",
        "collapsable": false,
        "children": [
          {
            "text": "工具",
            "link": "generate"
          },
          {
            "text": "文字",
            "link": "text"
          },
          {
            "text": "视觉动效",
            "link": "effect"
          },
          {
            "text": "阴影",
            "link": "shadow"
          },
          {
            "text": "边框&背景",
            "link": "background"
          },
          {
            "text": "用户体验",
            "link": "experience"
          },
          {
            "text": "Loading",
            "link": "loading"
          },
          {
            "text": "3D",
            "link": "3d"
          },
          {
            "text": "其他",
            "link": "other"
          }
        ]
      }
    ],
    "/": [
      ""
    ]
  },
  "lastUpdated": false,
  "lastUpdatedText": "更新时间",
  "contributors": false,
  "contributorsText": "作者",
  "tip": "提示",
  "warning": "警告",
  "danger": "危险警告",
  "notFound": [
    "妹找到哇",
    "我不到哇"
  ],
  "backToHome": "肘，跟我回屋",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换模式",
  "toggleSidebar": "切换侧边栏",
  "displayAllHeaders": true,
  "smoothScroll": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
