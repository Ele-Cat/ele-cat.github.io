const nav = [
  { text: "主页", link: "/" },
  { text: "导航", link: "/views/nav/nav" },
  {
    text: "笔记",
    items: [
      { text: "博客", link: "/views/daily-notes/daily-notes", activeMatch: '^/views/daily-notes' },
      {
        text: "工具",
        items: [
          { text: "Git", link: "/views/note/git" },
          { text: "VuePress2", link: "/views/note/vuePress" },
          { text: "VitePress", link: "/views/note/vitePress" },
        ],
      },
      {
        text: "前端",
        items: [
          { text: "Sass", link: "/views/note/sass" },
          { text: "UnoCSS", link: "/views/note/unocss" },
          { text: "Vue3", link: "/views/note/vue3" },
          { text: "React", link: "/views/note/react" },
          // { text: "Angular", link: "/views/note/angular" },
          { text: "Electron", link: "/views/note/electron" },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "Node",
            link: "/views/note/node",
          },
          {
            text: "Python",
            link: "/views/note/python",
          },
        ],
      },
    ],
  },
  {
    text: "分享",
    items: [
      {
        text: "插件",
        items: [
          { text: "Moment", link: "/views/tools/moment" },
          { text: "Vue Doc Preview", link: "/views/tools/vueDocPreview" },
          { text: "Ace Editor", link: "/views/tools/aceEditor" },
        ],
      },
      {
        text: "Javascript",
        items: [
          { text: "ES6-ES12", link: "/views/share/javascript/skill" },
          { text: "数据处理", link: "/views/share/javascript/process" },
          { text: "工具函数", link: "/views/share/javascript/tool" },
        ],
      },
      {
        text: "Css",
        items: [{ text: "样式Cool", link: "/views/share/css/generate", activeMatch: '^/views/share/css' }],
      },
      {
        text: "应用",
        items: [{ text: "翻译", link: "/views/apps/translate" }],
      },
    ],
  },
  { 
    text: "面试",
    items: [
      {
        text: "Html",
        link: "/views/interview/html",
      },
      {
        text: "Css",
        link: "/views/interview/css",
      },
      {
        text: "Javascript",
        link: "/views/interview/javascript",
      },
      {
        text: "Vue",
        link: "/views/interview/vue",
      },
      {
        text: "React",
        link: "/views/interview/react",
      },
      {
        text: "Node",
        link: "/views/interview/node",
      },
      {
        text: "Git",
        link: "/views/interview/git",
      },
      {
        text: "Webpack",
        link: "/views/interview/webpack",
      },
      {
        text: "Vite",
        link: "/views/interview/vite",
      },
      {
        text: "Typescript",
        link: "/views/interview/typescript",
      },
      {
        text: "Http",
        link: "/views/interview/http",
      },
      {
        text: "微信小程序",
        link: "/views/interview/weapp",
      },
      {
        text: "算法与数据结构",
        link: "/views/interview/algorithm",
      },
      {
        text: "设计模式",
        link: "/views/interview/design-pattern",
      }
    ]
  },
  { text: "关于", link: "/views/about/about" },
];

export default nav;
