import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"outline":3},"headers":[],"relativePath":"views/share/css/other.md","filePath":"views/share/css/other.md","lastUpdated":1705759986000}');
const _sfc_main = { name: "views/share/css/other.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Comment = resolveComponent("Comment");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><blockquote><p>一些有趣的 CSS 项目</p></blockquote><h3 id="nes-css" tabindex="-1">NES.css <a class="header-anchor" href="#nes-css" aria-label="Permalink to &quot;NES.css&quot;">​</a></h3><p>NES 红白机风格的 CSS 框架，主要的实现原理是通过将字体 Press+Start+2P 和 box-shadow 巧妙的结合，非常有意思，尤其是 icon 的实现，强烈建议大家看下源码~ 👍<a href="https://github.com/BcRikko/NES.css" target="_blank" rel="noreferrer">演示地址</a> <a href="https://github.com/BcRikko/NES.css" target="_blank" rel="noreferrer">项目地址</a></p><div class="iframe-box"><iframe src="https://bcrikko.github.io/NES.css/"></iframe></div><h3 id="shapes-generated" tabindex="-1">Shapes generated <a class="header-anchor" href="#shapes-generated" aria-label="Permalink to &quot;Shapes generated&quot;">​</a></h3><p>用 CSS 渐变实现的形状，<a href="https://yuanchuan.dev/gradient-shapes/" target="_blank" rel="noreferrer">演示地址</a> <a href="https://github.com/yuanchuan/gradient-shapes" target="_blank" rel="noreferrer">项目地址</a></p><div class="iframe-box"><iframe src="https://yuanchuan.dev/gradient-shapes/"></iframe></div><h3 id="a-single-div" tabindex="-1">A Single Div <a class="header-anchor" href="#a-single-div" aria-label="Permalink to &quot;A Single Div&quot;">​</a></h3><p>只用一个 HTML 元素实现的 CSS 的绘图，<a href="https://a.singlediv.com" target="_blank" rel="noreferrer">演示地址</a> <a href="https://github.com/lynnandtonic/a-single-div" target="_blank" rel="noreferrer">项目地址</a></p><div class="iframe-box"><iframe src="https://a.singlediv.com"></iframe></div>`);
  _push(ssrRenderComponent(_component_Comment, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/share/css/other.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const other = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  other as default
};
