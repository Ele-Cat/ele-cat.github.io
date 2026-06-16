const sidebar = {
  "/views/daily-notes/": [
    { text: "返回目录", link: "/views/daily-notes/daily-notes" },
    {
      text: "2025",
      collapsed: false,
      items: [
        { text: "开发环境搭建", link: "/views/daily-notes/2025/001" },
      ],
    },
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
        {
          text: "禁止右键、审查元素、复制功能",
          link: "/views/daily-notes/2021/001",
        },
      ],
    },
    {
      text: "2020",
      collapsed: false,
      items: [
        {
          text: "VSCode 编辑器插件整理",
          link: "/views/daily-notes/2020/002",
        },
        {
          text: "设定浏览器滚动条样式",
          link: "/views/daily-notes/2020/001",
        },
      ],
    },
    {
      text: "2019",
      collapsed: false,
      items: [
        {
          text: "纯 JS 实现 3D 心形+图片旋转",
          link: "/views/daily-notes/2019/001",
        },
      ],
    },
    {
      text: "2018",
      collapsed: false,
      items: [
        { text: "Vue 打包后本地预览", link: "/views/daily-notes/2018/004" },
        {
          text: "CSS 实现单行、多行文本溢出显示省略号",
          link: "/views/daily-notes/2018/003",
        },
        { text: "常用正则表达式", link: "/views/daily-notes/2018/002" },
        {
          text: "原生 js 去掉所有的 html 标签",
          link: "/views/daily-notes/2018/001",
        },
      ],
    },
  ],
  "/views/note/": [
    {
      text: "前端",
      collapsed: false,
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
      collapsed: false,
      items: [
        { text: "Java", link: "/views/note/java" },
        { text: "Node", link: "/views/note/node" },
        { text: "Python", link: "/views/note/python" },
        { text: "MySQL", link: "/views/note/mysql" },
      ],
    },
    {
      text: "工具",
      collapsed: false,
      items: [
        { text: "Git", link: "/views/note/git" },
        { text: "VuePress2", link: "/views/note/vuePress" },
        { text: "VitePress", link: "/views/note/vitePress" },
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
        { text: "常用正则", link: "/views/share/javascript/regular" },
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
        { text: "Flex 详解", link: "/views/share/css/flex" },
        { text: "Grid 详解", link: "/views/share/css/grid" },
      ],
    },
    {
      text: "Css效果",
      collapsed: false,
      items: [
        { text: "工具", link: "/views/share/css/generate" },
        { text: "样式重置", link: "/views/share/css/reset" },
        { text: "文字", link: "/views/share/css/text" },
        { text: "视觉动效", link: "/views/share/css/effect" },
        { text: "阴影", link: "/views/share/css/shadow" },
        { text: "边框&背景", link: "/views/share/css/background" },
        { text: "用户体验", link: "/views/share/css/experience" },
        { text: "Loading", link: "/views/share/css/loading" },
        { text: "3D", link: "/views/share/css/3d" },
        { text: "其他", link: "/views/share/css/other" },
      ],
    },
  ],
  "/views/interview/": [
    {
      text: "前端",
      collapsed: false,
      items: [
        { text: "Vue", link: "/views/interview/frontend/vue/" },
        { text: "React", link: "/views/interview/frontend/react/" },
        { text: "Angular", link: "/views/interview/frontend/angular/" },
        { text: "JS/TS", link: "/views/interview/frontend/js/" },
        { text: "CSS", link: "/views/interview/frontend/css/" },
        { text: "HTML", link: "/views/interview/frontend/html/" },
        { text: "构建工具", link: "/views/interview/frontend/build-tools/" },
        { text: "跨平台/小程序", link: "/views/interview/frontend/cross-platform/" },
      ],
    },
    {
      text: "后端 & DevOps",
      collapsed: false,
      items: [
        { text: "总览", link: "/views/interview/backend/" },
        { text: "Node.js", link: "/views/interview/backend/node/" },
        { text: "DevOps", link: "/views/interview/backend/devops/" },
      ],
    },
    {
      text: "网络协议",
      collapsed: false,
      items: [
        { text: "HTTP", link: "/views/interview/network/http/" },
      ],
    },
    {
      text: "AI & 系统设计",
      collapsed: false,
      items: [
        { text: "AI 总览", link: "/views/interview/ai/" },
        { text: "系统设计", link: "/views/interview/ai/system-design/" },
      ],
    },
    {
      text: "算法与数据结构",
      collapsed: false,
      items: [
        { text: "总览", link: "/views/interview/algorithm/" },
      ],
    },
    {
      text: "设计模式",
      collapsed: false,
      items: [
        { text: "总览", link: "/views/interview/design-pattern/" },
      ],
    },
    {
      text: "框架对比",
      collapsed: false,
      items: [
        { text: "React vs Vue vs Angular", link: "/views/interview/comparisons/framework-comparison" },
      ],
    },
    {
      text: "进阶",
      collapsed: false,
      items: [
        { text: "面试官系列", link: "/views/interview/interviewer" },
      ],
    },
  ],
  "/views/interview/frontend/react/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "React 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/react/" },
        { text: "基础篇", link: "/views/interview/frontend/react/foundation" },
        { text: "进阶篇", link: "/views/interview/frontend/react/advanced" },
        { text: "生态篇", link: "/views/interview/frontend/react/ecosystem" },
        { text: "Fiber 架构", link: "/views/interview/frontend/react/fiber" },
        { text: "Hooks 原理", link: "/views/interview/frontend/react/hooks" },
        { text: "Concurrent Mode", link: "/views/interview/frontend/react/concurrent" },
        { text: "Server Components", link: "/views/interview/frontend/react/rsc" },
        { text: "术语速查", link: "/views/interview/frontend/react/glossary" },
      ],
    },
  ],
  "/views/interview/frontend/vue/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "Vue 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/vue/" },
        { text: "基础篇", link: "/views/interview/frontend/vue/foundation" },
        { text: "进阶篇", link: "/views/interview/frontend/vue/advanced" },
        { text: "生态篇", link: "/views/interview/frontend/vue/ecosystem" },
        { text: "版本对比", link: "/views/interview/frontend/vue/versions" },
        { text: "响应式原理", link: "/views/interview/frontend/vue/reactivity" },
        { text: "编译器优化", link: "/views/interview/frontend/vue/compiler" },
        { text: "Vapor Mode", link: "/views/interview/frontend/vue/vapor" },
        { text: "Composition API", link: "/views/interview/frontend/vue/composition" },
        { text: "术语速查", link: "/views/interview/frontend/vue/glossary" },
      ],
    },
  ],
  "/views/interview/frontend/angular/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "Angular 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/angular/" },
        { text: "基础篇", link: "/views/interview/frontend/angular/foundation" },
        { text: "进阶篇", link: "/views/interview/frontend/angular/advanced" },
        { text: "实战篇", link: "/views/interview/frontend/angular/practice" },
        { text: "DI 原理", link: "/views/interview/frontend/angular/di" },
        { text: "Zone.js", link: "/views/interview/frontend/angular/zone" },
        { text: "RxJS vs Signals", link: "/views/interview/frontend/angular/rxjs-signals" },
        { text: "术语速查", link: "/views/interview/frontend/angular/glossary" },
      ],
    },
  ],
  "/views/interview/frontend/js/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "JS/TS 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/js/" },
        { text: "基础篇", link: "/views/interview/frontend/js/foundation" },
        { text: "进阶篇", link: "/views/interview/frontend/js/advanced" },
        { text: "TypeScript 篇", link: "/views/interview/frontend/js/typescript" },
      ],
    },
  ],
  "/views/interview/frontend/css/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "CSS 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/css/" },
        { text: "基础篇", link: "/views/interview/frontend/css/foundation" },
        { text: "进阶篇", link: "/views/interview/frontend/css/advanced" },
        { text: "扩展篇", link: "/views/interview/frontend/css/extra" },
      ],
    },
  ],
  "/views/interview/frontend/html/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "HTML 面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/html/" },
        { text: "基础篇", link: "/views/interview/frontend/html/foundation" },
      ],
    },
  ],
  "/views/interview/frontend/build-tools/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "构建工具",
      items: [
        { text: "总览", link: "/views/interview/frontend/build-tools/" },
        { text: "Webpack", link: "/views/interview/frontend/build-tools/webpack" },
      ],
    },
  ],
  "/views/interview/frontend/cross-platform/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "跨端面试题",
      items: [
        { text: "总览", link: "/views/interview/frontend/cross-platform/" },
        { text: "基础篇", link: "/views/interview/frontend/cross-platform/foundation" },
        { text: "微信小程序", link: "/views/interview/frontend/cross-platform/weapp" },
      ],
    },
  ],
  "/views/interview/backend/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "后端 & DevOps",
      items: [
        { text: "总览", link: "/views/interview/backend/" },
        { text: "Node.js", link: "/views/interview/backend/node/" },
        { text: "DevOps", link: "/views/interview/backend/devops/" },
      ],
    },
  ],
  "/views/interview/backend/node/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "Node.js",
      items: [
        { text: "总览", link: "/views/interview/backend/node/" },
      ],
    },
  ],
  "/views/interview/backend/devops/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "DevOps",
      items: [
        { text: "总览", link: "/views/interview/backend/devops/" },
        { text: "Git", link: "/views/interview/backend/devops/git" },
      ],
    },
  ],
  "/views/interview/ai/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "AI & 系统设计",
      items: [
        { text: "总览", link: "/views/interview/ai/" },
        { text: "系统设计", link: "/views/interview/ai/system-design/" },
      ],
    },
  ],
  "/views/interview/network/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "网络协议",
      items: [
        { text: "概览", link: "/views/interview/network/" },
        { text: "HTTP", link: "/views/interview/network/http/" },
      ],
    },
  ],
  "/views/interview/algorithm/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "算法与数据结构",
      items: [
        { text: "总览", link: "/views/interview/algorithm/" },
      ],
    },
  ],
  "/views/interview/design-pattern/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "设计模式",
      items: [
        { text: "总览", link: "/views/interview/design-pattern/" },
      ],
    },
  ],
  "/views/interview/comparisons/": [
    {
      text: "← 面试总览",
      link: "/views/interview/",
    },
    {
      text: "资料",
      items: [
        { text: "总览", link: "/views/interview/comparisons/" },
        { text: "前端框架对比", link: "/views/interview/comparisons/framework-comparison" },
      ],
    },
  ],
};

export default sidebar;
