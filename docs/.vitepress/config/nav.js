const nav = [
  { text: "主页", link: "/" },
  { text: "导航", link: "/views/nav/nav" },
  {
    text: "笔记",
    items: [
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
          { text: "Angular", link: "/views/note/angular" },
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
        ],
      },
    ],
  },
  {
    text: "插件",
    items: [
      { text: "Moment", link: "/views/tools/moment" },
      { text: "Vue Doc Preview", link: "/views/tools/vueDocPreview" },
      { text: "Ace Editor", link: "/views/tools/aceEditor" },
    ],
  },
  {
    text: "分享",
    items: [
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
        items: [{ text: "样式Cool", link: "/views/share/css/generate" }],
      },
    ],
  },
  { text: "关于", link: "/views/about/about" },
];

export default nav;
