const nav = [
  { text: "主页", link: "/" },
  { text: "导航", link: "/views/nav/nav" },
  {
    text: "笔记",
    items: [
      {
        text: "博客",
        link: "/views/daily-notes/daily-notes",
        activeMatch: "^/views/daily-notes",
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
          { text: "Java", link: "/views/note/java" },
          { text: "Node", link: "/views/note/node" },
          { text: "Python", link: "/views/note/python" },
          { text: "MySQL", link: "/views/note/mysql" },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "Git", link: "/views/note/git" },
          { text: "VuePress2", link: "/views/note/vuePress" },
          { text: "VitePress", link: "/views/note/vitePress" },
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
          { text: "常用正则", link: "/views/share/javascript/regular" },
          { text: "ES6-ES12", link: "/views/share/javascript/skill" },
          { text: "数据处理", link: "/views/share/javascript/process" },
          { text: "工具函数", link: "/views/share/javascript/tool" },
        ],
      },
      {
        text: "Css",
        items: [
          {
            text: "样式Cool",
            link: "/views/share/css/generate",
            activeMatch: "^/views/share/css",
          },
        ],
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
        text: "前端框架",
        items: [
          { text: "React", link: "/views/interview/frontend/react/" },
          { text: "Vue", link: "/views/interview/frontend/vue/" },
          { text: "Angular", link: "/views/interview/frontend/angular/" },
        ],
      },
      {
        text: "前端基础",
        items: [
          { text: "JS/TS", link: "/views/interview/frontend/js/" },
          { text: "CSS", link: "/views/interview/frontend/css/" },
          { text: "HTML", link: "/views/interview/frontend/html/" },
          { text: "构建工具", link: "/views/interview/frontend/build-tools/" },
          { text: "跨平台/小程序", link: "/views/interview/frontend/cross-platform/" },
        ],
      },
      { text: "后端 & DevOps", link: "/views/interview/backend/" },
      { text: "网络协议", link: "/views/interview/network/" },
      { text: "AI & 系统设计", link: "/views/interview/ai/" },
      { text: "算法与数据结构", link: "/views/interview/algorithm/" },
      { text: "设计模式", link: "/views/interview/design-pattern/" },
      { text: "框架对比", link: "/views/interview/comparisons/framework-comparison" },
      {
        text: "进阶",
        items: [{ text: "面试官系列", link: "/views/interview/interviewer" }],
      },
    ],
  },
  { text: "关于", link: "/views/about/about" },
];

export default nav;
