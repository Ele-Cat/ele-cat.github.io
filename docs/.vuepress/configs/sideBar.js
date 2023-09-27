module.exports = {
  "/guide/vue/": ["test01", "test02", "test03", "test04"],
  "/note/TypeScript/": [
    {
      text: "TypeScript学习",
      collapsable: true,
      children: ["test01", "test02", "test03"],
    },
  ],
  "/share/css/": [
    {
      text: "Css样式Cool",
      collapsable: false,
      children: [
        {
          text: "工具",
          link: "generate",
        },
        {
          text: "文字",
          link: "text",
        },
        {
          text: "视觉动效",
          link: "effect",
        },
        {
          text: "阴影",
          link: "shadow",
        },
        {
          text: "边框&背景",
          link: "background",
        },
        {
          text: "用户体验",
          link: "experience",
        },
        {
          text: "Loading",
          link: "loading",
        },
        {
          text: "3D",
          link: "3d",
        },
        {
          text: "其他",
          link: "other",
        },
      ],
    },
  ],
  "/": [""],
};
