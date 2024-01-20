const sidebar = {
  // 当用户位于 `guide` 目录时，会显示此侧边栏
  "/views/note/": [
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
        { text: "Vue3", link: "/views/note/vue3" },
        { text: "React", link: "/views/note/react" },
        { text: "Electron", link: "/views/note/electron" },
      ],
    },
    {
      text: "后端",
      items: [{ text: "Node", link: "/views/note/node" }],
    },
  ],
  // 当用户位于 `tools` 目录时，会显示此侧边栏
  "/views/tools/": [
    {
      text: "实用插件",
      items: [
        { text: "Moment", link: "/views/tools/moment" },
        { text: "Vue Doc Preview", link: "/views/tools/vueDocPreview" },
        { text: "Ace Editor", link: "/views/tools/aceEditor" },
        { text: "Html to Md", link: "/views/tools/html2Md" },
      ],
    },
  ],
  // 当用户位于 `share/javascript` 目录时，会显示此侧边栏
  "/views/share/javascript/": [
    {
      text: "Javascript",
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
      text: "Css",
      items: [
        {
          text: "工具",
          link: "/views/share/css/generate",
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
};

export default sidebar;
