const sidebar = {
  "/views/daily-notes/": [
    { text: "返回目录", link: "/views/daily-notes/daily-notes" },
    {
      text: "2024",
      collapsed: false,
      items: [
        { text: "Github Actions部署项目", link: "/views/daily-notes/2024/002" },
        { text: "从零快速编写油猴脚本", link: "/views/daily-notes/2024/001" },
      ],
    },
    {
      text: "2021",
      collapsed: false,
      items: [
        { text: "禁止右键、审查元素、复制功能", link: "/views/daily-notes/2021/001.md" },
      ],
    },
    {
      text: "2020",
      collapsed: false,
      items: [
        { text: "VSCode 编辑器插件整理", link: "/views/daily-notes/2020/002.md" },
        { text: "设定浏览器滚动条样式", link: "/views/daily-notes/2020/001.md" },
      ],
    },
    {
      text: "2019",
      collapsed: false,
      items: [
        { text: "纯 JS 实现 3D 心形+图片旋转", link: "/views/daily-notes/2019/001.md" },
      ],
    },
    {
      text: "2018",
      collapsed: false,
      items: [
        { text: "Vue 打包后本地预览", link: "/views/daily-notes/2018/004.md" },
        { text: "CSS 实现单行、多行文本溢出显示省略号", link: "/views/daily-notes/2018/003.md" },
        { text: "常用正则表达式", link: "/views/daily-notes/2018/002.md" },
        { text: "原生 js 去掉所有的 html 标签", link: "/views/daily-notes/2018/001.md" },
      ],
    },
  ],
  "/views/note/": [
    {
      text: "工具",
      collapsed: false,
      items: [
        { text: "Git", link: "/views/note/git" },
        { text: "VuePress2", link: "/views/note/vuePress" },
        { text: "VitePress", link: "/views/note/vitePress" },
      ],
    },
    {
      text: "前端",
      collapsed: false,
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
      collapsed: false,
      items: [
        { text: "Node", link: "/views/note/node" },
        { text: "Python", link: "/views/note/python" },
      ],
    },
  ],
  // 当用户位于 `tools` 目录时，会显示此侧边栏
  "/views/tools/": [
    {
      text: "实用插件",
      collapsed: false,
      items: [
        { text: "Moment", link: "/views/tools/moment" },
        { text: "Vue Doc Preview", link: "/views/tools/vueDocPreview" },
        { text: "Ace Editor", link: "/views/tools/aceEditor" },
      ],
    },
  ],
  // 当用户位于 `share/javascript` 目录时，会显示此侧边栏
  "/views/share/javascript/": [
    {
      text: "Javascript",
      collapsed: false,
      items: [
        { text: "ES6-ES12", link: "/views/share/javascript/skill" },
        { text: "数据处理", link: "/views/share/javascript/process" },
        { text: "工具函数", link: "/views/share/javascript/tool" },
      ],
    },
  ],
  // 当用户位于 `share/css` 目录时，会显示此侧边栏
  "/views/share/css/": [
    {
      text: "Css知识点",
      collapsed: false,
      items: [
        {
          text: "Flex 详解",
          link: "/views/share/css/flex",
        },
        {
          text: "Grid 详解",
          link: "/views/share/css/grid",
        },
      ]
    },
    {
      text: "Css效果",
      collapsed: false,
      items: [
        {
          text: "工具",
          link: "/views/share/css/generate",
        },
        {
          text: "样式重置",
          link: "/views/share/css/reset",
        },
        {
          text: "文字",
          link: "/views/share/css/text",
        },
        {
          text: "视觉动效",
          link: "/views/share/css/effect",
        },
        {
          text: "阴影",
          link: "/views/share/css/shadow",
        },
        {
          text: "边框&背景",
          link: "/views/share/css/background",
        },
        {
          text: "用户体验",
          link: "/views/share/css/experience",
        },
        {
          text: "Loading",
          link: "/views/share/css/loading",
        },
        {
          text: "3D",
          link: "/views/share/css/3d",
        },
        {
          text: "其他",
          link: "/views/share/css/other",
        },
      ],
    },
  ],
  "/views/interview": [
    { text: "Html", link: "/views/interview/html" },
    { text: "Css", link: "/views/interview/css" },
    { text: "Javascript", link: "/views/interview/javascript" },
    { text: "Vue", link: "/views/interview/vue" },
    { text: "React", link: "/views/interview/react" },
    { text: "Node", link: "/views/interview/node" },
    { text: "Git", link: "/views/interview/git" },
    { text: "Webpack", link: "/views/interview/webpack" },
    { text: "Vite", link: "/views/interview/vite" },
    { text: "Typescript", link: "/views/interview/typescript" },
    { text: "Http", link: "/views/interview/http" },
  ],
};

export default sidebar;
