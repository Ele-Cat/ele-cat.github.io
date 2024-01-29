import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./index.scss_vue_type_style_index_0_src_true_lang.w40geAFS.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc","sidebar":false,"outline":[2,3],"prev":false,"next":false,"pageClass":"nav-layout"},"headers":[],"relativePath":"views/about/about.md","filePath":"views/about/about.md","lastUpdated":1705824987000}');
const _sfc_main = { name: "views/about/about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Comment = resolveComponent("Comment");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="关于本项目" tabindex="-1">关于本项目 <a class="header-anchor" href="#关于本项目" aria-label="Permalink to &quot;关于本项目&quot;">​</a></h2><p>本项目使用 Vitepress 开发，基于 Vue3+Vite，搭建教程参考<a href="/views/note/vitePress.html">本站教程</a>、<a href="https://vitepress.dev/zh/guide/getting-started" target="_blank" rel="noreferrer">Vitepress 官方文档</a>。</p><h2 id="关于我" tabindex="-1">关于我 <a class="header-anchor" href="#关于我" aria-label="Permalink to &quot;关于我&quot;">​</a></h2><h3 id="个人信息" tabindex="-1">个人信息 <a class="header-anchor" href="#个人信息" aria-label="Permalink to &quot;个人信息&quot;">​</a></h3><ul><li>我是可樂加冰c</li><li>一个前端开发者</li><li>喜欢<code>编码</code>、热爱<code>探索</code></li></ul><h3 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h3><ul><li>前端 <ul><li>基础：HTML、CSS、JS</li><li>样式：BootStrap、Scss、Less</li><li>框架：JQuery、Vue2、Vue3、React、Angular</li><li>构建：Vite、Rollup、Webpack</li><li>库：Echart、Lodash、Momentjs...</li></ul></li><li>后端 <ul><li>语言：Node、PHP、Python</li><li>框架：Express、Koa2、Egg、ThinkPHP</li><li>数据库：MySQL、MongoDB、Redis</li></ul></li><li>其它 <ul><li>技能：PS、AI、Pr、Axure</li><li>爱好：Singing、Coding</li></ul></li></ul><h3 id="个人项目" tabindex="-1">个人项目 <a class="header-anchor" href="#个人项目" aria-label="Permalink to &quot;个人项目&quot;">​</a></h3><ul><li><a href="https://ele-cat.gitee.io/comp-gpt" target="_blank" rel="noreferrer">聚合 GPT</a> - 整合在线可用、免注册、免费的 GPT 网站</li><li><a href="https://ele-cat.gitee.io/ifish/" target="_blank" rel="noreferrer">爱摸鱼</a> - 使用 Vite + Vue3 + AntDesignVue + Pinia 搭建的在线摸鱼网站</li><li><a href="https://ele-cat.gitee.io/vue3-wechat-tool/" target="_blank" rel="noreferrer">在线微信对话生成器</a> - 使用 Vite + Vue3 + AntDesignVue + Pinia 搭建的在线微信对话生成器</li><li><a href="https://ele-cat.gitee.io/vue3-wechat/" target="_blank" rel="noreferrer">仿网页版微信</a> - 使用 Vite + Vue3 + AntDesignVue + Pinia + MockJS 搭建的复刻微信客户端项目</li><li><a href="https://ele-cat.gitee.io/color-select/" target="_blank" rel="noreferrer">Color Select</a> - RGB 与 HEX 互转工具，还有好看的背景色</li><li><a href="https://ele-cat.gitee.io/ace-editor/" target="_blank" rel="noreferrer">Node 爬虫</a> - 使用 nodejs + axios + cheerio 搭建的爬取情侣头像、套图、短视频的脚本</li></ul><h3 id="联系我" tabindex="-1">联系我 <a class="header-anchor" href="#联系我" aria-label="Permalink to &quot;联系我&quot;">​</a></h3><ul><li><a href="https://gitee.com/ele-cat" target="_blank" rel="noreferrer">Gitee</a></li><li><a href="https://github.com/Ele-Cat" target="_blank" rel="noreferrer">Github</a></li><li><a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&amp;k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&amp;authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&amp;noverify=0&amp;group_code=887911914" target="_blank" rel="noreferrer">一键加q群</a></li></ul>`);
  _push(ssrRenderComponent(_component_Comment, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/about/about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  about as default
};
