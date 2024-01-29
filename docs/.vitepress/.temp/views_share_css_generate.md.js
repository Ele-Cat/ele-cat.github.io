import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"outline":3},"headers":[],"relativePath":"views/share/css/generate.md","filePath":"views/share/css/generate.md","lastUpdated":1706444834000}');
const _sfc_main = { name: "views/share/css/generate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Example = resolveComponent("Example");
  const _component_Comment = resolveComponent("Comment");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><h3 id="时间戳转换" tabindex="-1">时间戳转换 <a class="header-anchor" href="#时间戳转换" aria-label="Permalink to &quot;时间戳转换&quot;">​</a></h3><blockquote><p>使用<a href="https://dayjs.fenxianglu.cn/" target="_blank" rel="noreferrer">dayjs</a>实现</p></blockquote>`);
  _push(ssrRenderComponent(_component_Example, { path: "example/css/generate/03" }, null, _parent));
  _push(`<h3 id="颜色转换" tabindex="-1">颜色转换 <a class="header-anchor" href="#颜色转换" aria-label="Permalink to &quot;颜色转换&quot;">​</a></h3><p>颜色转换示例</p><h3 id="生成-flex" tabindex="-1">生成 Flex <a class="header-anchor" href="#生成-flex" aria-label="Permalink to &quot;生成 Flex&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Example, { path: "example/css/generate/02" }, null, _parent));
  _push(`<h3 id="生成三角形" tabindex="-1">生成三角形 <a class="header-anchor" href="#生成三角形" aria-label="Permalink to &quot;生成三角形&quot;">​</a></h3><p>这里放置动态生成三角形代码</p><h3 id="图片滤镜-filter" tabindex="-1">图片滤镜 filter <a class="header-anchor" href="#图片滤镜-filter" aria-label="Permalink to &quot;图片滤镜 filter&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Example, { path: "example/css/generate/01" }, null, _parent));
  _push(ssrRenderComponent(_component_Comment, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/share/css/generate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const generate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  generate as default
};
