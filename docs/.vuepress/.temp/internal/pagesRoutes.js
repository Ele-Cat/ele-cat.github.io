import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-f455d314","/apps/cuteGirl.html",{"title":""},["/apps/cuteGirl","/apps/cuteGirl.md"]],
  ["v-0df18373","/note/Electron.html",{"title":"Electron 从零开始"},["/note/Electron","/note/Electron.md"]],
  ["v-fb19d8ea","/note/Git.html",{"title":"Git 操作"},["/note/Git","/note/Git.md"]],
  ["v-8e72ee2a","/note/MongoDB.html",{"title":"MongoDB"},["/note/MongoDB","/note/MongoDB.md"]],
  ["v-55559d53","/note/Node.html",{"title":"Node.js 从零开始"},["/note/Node","/note/Node.md"]],
  ["v-2ea40cfe","/note/React.html",{"title":"React全家桶（技术栈）"},["/note/React","/note/React.md"]],
  ["v-8486b4b2","/note/Sass.html",{"title":"Sass 学习笔记"},["/note/Sass","/note/Sass.md"]],
  ["v-2bb6da70","/note/Vue@next.html",{"title":"Vue@next 学习笔记"},["/note/Vue@next","/note/Vue@next.md"]],
  ["v-75995fd8","/note/VuePress.html",{"title":"使用VuePress2搭建博客"},["/note/VuePress","/note/VuePress.md"]],
  ["v-5689ba56","/tools/AceEditor.html",{"title":"Ace Editor"},["/tools/AceEditor","/tools/AceEditor.md"]],
  ["v-993dff70","/tools/Html2Md.html",{"title":""},["/tools/Html2Md","/tools/Html2Md.md"]],
  ["v-18561aac","/tools/Moment.html",{"title":"Moment"},["/tools/Moment","/tools/Moment.md"]],
  ["v-8e91513e","/tools/Vue3WechatTool.html",{"title":"微信对话生成器 👋"},["/tools/Vue3WechatTool","/tools/Vue3WechatTool.md"]],
  ["v-0cceb1d0","/tools/VueDocPreview.html",{"title":"vue-doc-preview"},["/tools/VueDocPreview","/tools/VueDocPreview.md"]],
  ["v-af9dc2c8","/apps/resume/baidu.html",{"title":""},["/apps/resume/baidu","/apps/resume/baidu.md"]],
  ["v-540500fc","/guide/links/",{"title":""},["/guide/links/index.html","/guide/links/README.md"]],
  ["v-fac05db8","/guide/ts/",{"title":"默认README"},["/guide/ts/index.html","/guide/ts/README.md"]],
  ["v-503d11fc","/guide/ts/test01.html",{"title":"test01*ts"},["/guide/ts/test01","/guide/ts/test01.md"]],
  ["v-4cd360be","/guide/ts/test02.html",{"title":"test02*ts"},["/guide/ts/test02","/guide/ts/test02.md"]],
  ["v-4969af80","/guide/ts/test03.html",{"title":"test03*ts"},["/guide/ts/test03","/guide/ts/test03.md"]],
  ["v-06710531","/guide/vue/test01.html",{"title":"test01"},["/guide/vue/test01","/guide/vue/test01.md"]],
  ["v-0825ddd0","/guide/vue/test02.html",{"title":"test02"},["/guide/vue/test02","/guide/vue/test02.md"]],
  ["v-09dab66f","/guide/vue/test03.html",{"title":"test03"},["/guide/vue/test03","/guide/vue/test03.md"]],
  ["v-0b8f8f0e","/guide/vue/test04.html",{"title":""},["/guide/vue/test04","/guide/vue/test04.md"]],
  ["v-597a665a","/share/css/3d.html",{"title":""},["/share/css/3d","/share/css/3d.md"]],
  ["v-54d6fd56","/share/css/background.html",{"title":""},["/share/css/background","/share/css/background.md"]],
  ["v-6e335782","/share/css/CssCool.html",{"title":"Css样式Cool"},["/share/css/CssCool","/share/css/CssCool.md"]],
  ["v-629c0c53","/share/css/effect.html",{"title":""},["/share/css/effect","/share/css/effect.md"]],
  ["v-f5e382cc","/share/css/experience.html",{"title":""},["/share/css/experience","/share/css/experience.md"]],
  ["v-1089902f","/share/css/generate.html",{"title":""},["/share/css/generate","/share/css/generate.md"]],
  ["v-cdf23fdc","/share/css/loading.html",{"title":""},["/share/css/loading","/share/css/loading.md"]],
  ["v-1386fffe","/share/css/other.html",{"title":""},["/share/css/other","/share/css/other.md"]],
  ["v-bb3aa3b8","/share/css/shadow.html",{"title":""},["/share/css/shadow","/share/css/shadow.md"]],
  ["v-762f00f7","/share/css/text.html",{"title":""},["/share/css/text","/share/css/text.md"]],
  ["v-4ef79d90","/share/javascript/JavascriptProcess.html",{"title":"Javascript 数据处理"},["/share/javascript/JavascriptProcess","/share/javascript/JavascriptProcess.md"]],
  ["v-12bcc86e","/share/javascript/JavascriptSkill.html",{"title":"Javascript开发技巧"},["/share/javascript/JavascriptSkill","/share/javascript/JavascriptSkill.md"]],
  ["v-af6ee38a","/share/javascript/JavascriptTool.html",{"title":"自定义工具函数库"},["/share/javascript/JavascriptTool","/share/javascript/JavascriptTool.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
