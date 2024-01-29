import { defineComponent, mergeProps, useSSRContext, ref, computed, onMounted, unref, watch, watchEffect, onUnmounted, watchPostEffect, onUpdated, resolveComponent, shallowRef, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, inject, openBlock, createBlock, createCommentVNode, readonly, Fragment, renderList, defineAsyncComponent, provide, toHandlers, withKeys, useSlots, reactive, toRefs, toRef, onBeforeMount, withDirectives, vShow, Transition, nextTick, h, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { u as useData$1, i as isExternal, t as treatAsHtml, w as withBase, a as inBrowser, b as isActive, o as onContentUpdated, E as EXTERNAL_URL_RE, c as useRoute, d as createTitle, m as mergeHead, p as pathToFile, R as RouterSymbol, e as initData, f as dataSymbol, C as Content, s as siteDataRef, g as createRouter } from "./Content.Elbf6Wuc.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import { useMediaQuery, onClickOutside, onKeyStroke, useWindowScroll, useScrollLock, useClipboard, useToggle } from "@vueuse/core";
import mediumZoom from "medium-zoom";
import Antd, { message } from "ant-design-vue";
import { LockFilled, ArrowLeftOutlined, TagsFilled, SettingFilled, SearchOutlined, DoubleRightOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import dayjs from "dayjs";
import { slugify } from "@mdit-vue/shared";
import Giscus from "@giscus/vue";
const _sfc_main$2u = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$2u = _sfc_main$2u.setup;
_sfc_main$2u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$2u ? _sfc_setup$2u(props, ctx) : void 0;
};
const _sfc_main$2t = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-c79a1216></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2t = _sfc_main$2t.setup;
_sfc_main$2t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$2t ? _sfc_setup$2t(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$2t, [["__scopeId", "data-v-c79a1216"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hashRef.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$2s = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-f87ff6e4><p class="code" data-v-f87ff6e4>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-f87ff6e4>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-f87ff6e4></div><blockquote class="quote" data-v-f87ff6e4>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-f87ff6e4><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-f87ff6e4>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const _sfc_setup$2s = _sfc_main$2s.setup;
_sfc_main$2s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$2s ? _sfc_setup$2s(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$2s, [["__scopeId", "data-v-f87ff6e4"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  resolvedHeaders.length = 0;
  for (const { element, link: link2 } of headers) {
    resolvedHeaders.push({ element, link: link2 });
  }
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const offsetDocTop = (() => {
      var _a;
      const container2 = (_a = document.querySelector("#VPContent .VPDoc")) == null ? void 0 : _a.firstElementChild;
      if (container2)
        return getAbsoluteTop(container2);
      else
        return 78;
    })();
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link: link2 }) => ({
      link: link2,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link: link2, top } of headers) {
      if (top > scrollY + offsetDocTop) {
        break;
      }
      activeLink = link2;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
const _sfc_main$2r = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-b933a997><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-b933a997><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-b933a997>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$2r = _sfc_main$2r.setup;
_sfc_main$2r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$2r ? _sfc_setup$2r(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$2r, [["__scopeId", "data-v-b933a997"]]);
const _sfc_main$2q = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container,
        role: "navigation"
      }, _attrs))} data-v-935f8a84><div class="content" data-v-935f8a84><div class="outline-marker" data-v-935f8a84></div><div class="outline-title" role="heading" aria-level="2" data-v-935f8a84>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-935f8a84><span class="visually-hidden" id="doc-outline-aria-label" data-v-935f8a84> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const _sfc_setup$2q = _sfc_main$2q.setup;
_sfc_main$2q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$2q ? _sfc_setup$2q(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$2q, [["__scopeId", "data-v-935f8a84"]]);
const _sfc_main$2p = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2p = _sfc_main$2p.setup;
_sfc_main$2p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$2p ? _sfc_setup$2p(props, ctx) : void 0;
};
const _sfc_main$2o = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-3f215769>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-3f215769></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$2p, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2o = _sfc_main$2o.setup;
_sfc_main$2o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$2o ? _sfc_setup$2o(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$2o, [["__scopeId", "data-v-3f215769"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text: text2 = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text: text2 };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
const _sfc_main$2n = {};
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$2n = _sfc_main$2n.setup;
_sfc_main$2n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$2n ? _sfc_setup$2n(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2n, [["ssrRender", _sfc_ssrRender$18]]);
const _sfc_main$2m = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$2m = _sfc_main$2m.setup;
_sfc_main$2m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$2m ? _sfc_setup$2m(props, ctx) : void 0;
};
const _sfc_main$2l = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter, lang } = useData();
    const date = computed(
      () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-7e05ebdb>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-7e05ebdb>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const _sfc_setup$2l = _sfc_main$2l.setup;
_sfc_main$2l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$2l ? _sfc_setup$2l(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$2l, [["__scopeId", "data-v-7e05ebdb"]]);
const _sfc_main$2k = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-48f9bb55>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-48f9bb55>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-48f9bb55>`);
            _push(ssrRenderComponent(_sfc_main$2m, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-48f9bb55>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" data-v-48f9bb55><div class="pager" data-v-48f9bb55>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(ssrRenderComponent(_sfc_main$2m, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-48f9bb55${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"}</span><span class="title" data-v-48f9bb55${_scopeId}>${unref(control).prev.text}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.prev) || "Previous page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).prev.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-48f9bb55>`);
          if ((_d = unref(control).next) == null ? void 0 : _d.link) {
            _push(ssrRenderComponent(_sfc_main$2m, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-48f9bb55${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"}</span><span class="title" data-v-48f9bb55${_scopeId}>${unref(control).next.text}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.next) || "Next page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).next.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2k = _sfc_main$2k.setup;
_sfc_main$2k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$2k ? _sfc_setup$2k(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2k, [["__scopeId", "data-v-48f9bb55"]]);
const _sfc_main$2j = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-ad5bd23b>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-ad5bd23b>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-ad5bd23b><div class="aside-curtain" data-v-ad5bd23b></div><div class="aside-container" data-v-ad5bd23b><div class="aside-content" data-v-ad5bd23b>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-ad5bd23b><div class="content-container" data-v-ad5bd23b>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-ad5bd23b>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2j = _sfc_main$2j.setup;
_sfc_main$2j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$2j ? _sfc_setup$2j(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$2j, [["__scopeId", "data-v-ad5bd23b"]]);
const _sfc_main$2i = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$2i = _sfc_main$2i.setup;
_sfc_main$2i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$2i ? _sfc_setup$2i(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$2i, [["__scopeId", "data-v-c1c5efc1"]]);
const _sfc_main$2h = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-8426fc1a>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2h = _sfc_main$2h.setup;
_sfc_main$2h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$2h ? _sfc_setup$2h(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$2h, [["__scopeId", "data-v-8426fc1a"]]);
const _sfc_main$2g = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-da5d1713><div class="container" data-v-da5d1713><div class="main" data-v-da5d1713>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-da5d1713><span class="clip" data-v-da5d1713>${_ctx.name}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-da5d1713>${_ctx.text}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-da5d1713>${_ctx.tagline}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-da5d1713><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-da5d1713>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-da5d1713><div class="image-container" data-v-da5d1713><div class="image-bg" data-v-da5d1713></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2g = _sfc_main$2g.setup;
_sfc_main$2g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$2g ? _sfc_setup$2g(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$2g, [["__scopeId", "data-v-da5d1713"]]);
const _sfc_main$2f = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2f = _sfc_main$2f.setup;
_sfc_main$2f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$2f ? _sfc_setup$2f(props, ctx) : void 0;
};
const _sfc_main$2e = {};
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$2e = _sfc_main$2e.setup;
_sfc_main$2e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$2e ? _sfc_setup$2e(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2e, [["ssrRender", _sfc_ssrRender$17]]);
const _sfc_main$2d = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2m, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-33204567${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-33204567${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-33204567${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-33204567${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-33204567${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-33204567${_scopeId}><p class="link-text-value" data-v-33204567${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: _ctx.icon,
                    alt: _ctx.icon.alt,
                    height: _ctx.icon.height || 48,
                    width: _ctx.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2d = _sfc_main$2d.setup;
_sfc_main$2d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$2d ? _sfc_setup$2d(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$2d, [["__scopeId", "data-v-33204567"]]);
const _sfc_main$2c = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-a6181336><div class="container" data-v-a6181336><div class="items" data-v-a6181336><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-a6181336>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2c = _sfc_main$2c.setup;
_sfc_main$2c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$2c ? _sfc_setup$2c(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$2c, [["__scopeId", "data-v-a6181336"]]);
const _sfc_main$2b = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2b = _sfc_main$2b.setup;
_sfc_main$2b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$2b ? _sfc_setup$2b(props, ctx) : void 0;
};
const _sfc_main$2a = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-d82743a8>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2f, null, {
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2b, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2a = _sfc_main$2a.setup;
_sfc_main$2a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$2a ? _sfc_setup$2a(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$2a, [["__scopeId", "data-v-d82743a8"]]);
const _sfc_main$29 = {};
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$29, [["ssrRender", _sfc_ssrRender$16]]);
const _sfc_main$28 = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-669faec9>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$28, [["__scopeId", "data-v-669faec9"]]);
const _sfc_main$27 = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-e315a0ad><div class="container" data-v-e315a0ad>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-e315a0ad>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-e315a0ad>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$27, [["__scopeId", "data-v-e315a0ad"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _sfc_main$26 = {};
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$26, [["ssrRender", _sfc_ssrRender$15]]);
const _sfc_main$25 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    onClickOutside(main, () => {
      open.value = false;
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-af18c0d5>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-af18c0d5>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-af18c0d5>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-af18c0d5><div class="header" data-v-af18c0d5><a class="top-link" href="#" data-v-af18c0d5>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-af18c0d5>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$25, [["__scopeId", "data-v-af18c0d5"]]);
const _sfc_main$24 = {};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$24, [["ssrRender", _sfc_ssrRender$14]]);
const _sfc_main$23 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-0282ae07><div class="container" data-v-0282ae07>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-0282ae07>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-0282ae07>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$23, [["__scopeId", "data-v-0282ae07"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$22 = {};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-b1685198><span class="check" data-v-b1685198>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-b1685198>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$22, [["ssrRender", _sfc_ssrRender$13], ["__scopeId", "data-v-b1685198"]]);
const _sfc_main$21 = {};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$21, [["ssrRender", _sfc_ssrRender$12]]);
const _sfc_main$20 = {};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$20, [["ssrRender", _sfc_ssrRender$11]]);
const _sfc_main$1$ = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = computed(() => {
      return isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1$ = _sfc_main$1$.setup;
_sfc_main$1$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$1$ ? _sfc_setup$1$(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1$, [["__scopeId", "data-v-1736f215"]]);
const _sfc_main$1_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-e6aabb21>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1_ = _sfc_main$1_.setup;
_sfc_main$1_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$1_ ? _sfc_setup$1_(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1_, [["__scopeId", "data-v-e6aabb21"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$1Z = {};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$1Z = _sfc_main$1Z.setup;
_sfc_main$1Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$1Z ? _sfc_setup$1Z(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$1Z, [["ssrRender", _sfc_ssrRender$10]]);
const _sfc_main$1Y = {};
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$1Y = _sfc_main$1Y.setup;
_sfc_main$1Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$1Y ? _sfc_setup$1Y(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$1Y, [["ssrRender", _sfc_ssrRender$$]]);
const _sfc_main$1X = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-43f1e123>`);
      _push(ssrRenderComponent(_sfc_main$2m, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1X = _sfc_main$1X.setup;
_sfc_main$1X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$1X ? _sfc_setup$1X(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1X, [["__scopeId", "data-v-43f1e123"]]);
const _sfc_main$1W = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-69e747b5>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-69e747b5>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1W = _sfc_main$1W.setup;
_sfc_main$1W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$1W ? _sfc_setup$1W(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1W, [["__scopeId", "data-v-69e747b5"]]);
const _sfc_main$1V = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-e7ea1737>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-e7ea1737><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1V = _sfc_main$1V.setup;
_sfc_main$1V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$1V ? _sfc_setup$1V(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1V, [["__scopeId", "data-v-e7ea1737"]]);
const _sfc_main$1U = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-9c007e85><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-9c007e85>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-9c007e85>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-9c007e85>${_ctx.button}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-9c007e85>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1U = _sfc_main$1U.setup;
_sfc_main$1U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$1U ? _sfc_setup$1U(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$1U, [["__scopeId", "data-v-9c007e85"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
  x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$1T = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-f80f8133>${svg.value}</a>`);
    };
  }
});
const _sfc_setup$1T = _sfc_main$1T.setup;
_sfc_main$1T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$1T ? _sfc_setup$1T(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$1T, [["__scopeId", "data-v-f80f8133"]]);
const _sfc_main$1S = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-7bc22406><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1S = _sfc_main$1S.setup;
_sfc_main$1S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$1S ? _sfc_setup$1S(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1S, [["__scopeId", "data-v-7bc22406"]]);
const _sfc_main$1R = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-d0bd9dde${_scopeId}><p class="trans-title" data-v-d0bd9dde${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark") {
                _push2(`<div class="group" data-v-d0bd9dde${_scopeId}><div class="item appearance" data-v-d0bd9dde${_scopeId}><p class="label" data-v-d0bd9dde${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-d0bd9dde${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-d0bd9dde${_scopeId}><div class="item social-links" data-v-d0bd9dde${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1R = _sfc_main$1R.setup;
_sfc_main$1R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$1R ? _sfc_setup$1R(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$1R, [["__scopeId", "data-v-d0bd9dde"]]);
const _sfc_main$1Q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-e5dd9c1c><span class="container" data-v-e5dd9c1c><span class="top" data-v-e5dd9c1c></span><span class="middle" data-v-e5dd9c1c></span><span class="bottom" data-v-e5dd9c1c></span></span></button>`);
    };
  }
});
const _sfc_setup$1Q = _sfc_main$1Q.setup;
_sfc_main$1Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$1Q ? _sfc_setup$1Q(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1Q, [["__scopeId", "data-v-e5dd9c1c"]]);
const _sfc_main$1P = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2m, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-42ef59de${_scopeId}>${_ctx.item.text}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1P = _sfc_main$1P.setup;
_sfc_main$1P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$1P ? _sfc_setup$1P(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1P, [["__scopeId", "data-v-42ef59de"]]);
const _sfc_main$1O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          ) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1O = _sfc_main$1O.setup;
_sfc_main$1O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$1O ? _sfc_setup$1O(props, ctx) : void 0;
};
const _sfc_main$1N = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-7f418b0f><span id="main-nav-aria-label" class="visually-hidden" data-v-7f418b0f>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$1O, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1N = _sfc_main$1N.setup;
_sfc_main$1N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$1N ? _sfc_setup$1N(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1N, [["__scopeId", "data-v-7f418b0f"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$1M = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const $t = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref($t)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref($t)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const _sfc_setup$1M = _sfc_main$1M.setup;
_sfc_main$1M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$1M ? _sfc_setup$1M(props, ctx) : void 0;
};
const _sfc_main$1L = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import("./VPLocalSearchBox.Q8w2pcuS.js"));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$1M, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$1M, { onClick: load }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1L = _sfc_main$1L.setup;
_sfc_main$1L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1L ? _sfc_setup$1L(props, ctx) : void 0;
};
const _sfc_main$1K = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1K = _sfc_main$1K.setup;
_sfc_main$1K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$1K ? _sfc_setup$1K(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["__scopeId", "data-v-0394ad82"]]);
const _sfc_main$1J = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link2 = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-8460f0a8><a class="title"${ssrRenderAttr("href", link2.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-8460f0a8>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$1J = _sfc_main$1J.setup;
_sfc_main$1J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1J ? _sfc_setup$1J(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1J, [["__scopeId", "data-v-8460f0a8"]]);
const _sfc_main$1I = {};
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$1I = _sfc_main$1I.setup;
_sfc_main$1I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$1I ? _sfc_setup$1I(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$1I, [["ssrRender", _sfc_ssrRender$_]]);
const _sfc_main$1H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-74abcbb9${_scopeId}><p class="title" data-v-74abcbb9${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1H = _sfc_main$1H.setup;
_sfc_main$1H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$1H ? _sfc_setup$1H(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["__scopeId", "data-v-74abcbb9"]]);
const _sfc_main$1G = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { hasLocalNav } = useLocalNav();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "has-local-nav": hasLocalNav.value,
        top: frontmatter.value.layout === "home" && y.value === 0
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-19c990f1><div class="wrapper" data-v-19c990f1><div class="container" data-v-19c990f1><div class="title" data-v-19c990f1>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-19c990f1><div class="content-body" data-v-19c990f1>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1L, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-19c990f1><div class="divider-line" data-v-19c990f1></div></div></div>`);
    };
  }
});
const _sfc_setup$1G = _sfc_main$1G.setup;
_sfc_main$1G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$1G ? _sfc_setup$1G(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1G, [["__scopeId", "data-v-19c990f1"]]);
const _sfc_main$1F = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-2d7af913><p class="text" data-v-2d7af913>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1F = _sfc_main$1F.setup;
_sfc_main$1F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$1F ? _sfc_setup$1F(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1F, [["__scopeId", "data-v-2d7af913"]]);
const _sfc_main$1E = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2m, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1E, [["__scopeId", "data-v-05f27b2a"]]);
const _sfc_main$1D = {};
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["ssrRender", _sfc_ssrRender$Z]]);
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2m, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-19976ae1"]]);
const _sfc_main$1B = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-8133b170>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-8133b170>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["__scopeId", "data-v-8133b170"]]);
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-65ef89ca><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-65ef89ca><span class="button-text" data-v-65ef89ca>${_ctx.text}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-65ef89ca><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-65ef89ca>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-65ef89ca>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["__scopeId", "data-v-65ef89ca"]]);
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const _sfc_main$1y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-d72aa483><button class="title" data-v-d72aa483>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-d72aa483><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-d72aa483>`);
          _push(ssrRenderComponent(_sfc_main$2m, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["__scopeId", "data-v-d72aa483"]]);
const _sfc_main$1w = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-cc5739dd><div class="container" data-v-cc5739dd>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$1z, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1y, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["__scopeId", "data-v-cc5739dd"]]);
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-ae24b3ad>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["__scopeId", "data-v-ae24b3ad"]]);
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-e31bd47b${_scopeId}><div class="indicator" data-v-e31bd47b${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$2m, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-e31bd47b${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-e31bd47b${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$2m, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["__scopeId", "data-v-e31bd47b"]]);
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else
          isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-575e6a36><div class="curtain" data-v-575e6a36></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-575e6a36><span class="visually-hidden" id="sidebar-aria-label" data-v-575e6a36> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-575e6a36>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["__scopeId", "data-v-575e6a36"]]);
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-0f60ec36></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-0f60ec36> Skip to content </a><!--]-->`);
    };
  }
});
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["__scopeId", "data-v-0f60ec36"]]);
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-5a346dfe>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["__scopeId", "data-v-5a346dfe"]]);
const _sfc_main$1q = {};
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["ssrRender", _sfc_ssrRender$Y]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$1p, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-96bd69d5><div class="container" data-v-96bd69d5><div class="header" data-v-96bd69d5><div class="love" data-v-96bd69d5>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-96bd69d5>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-96bd69d5>`);
      _push(ssrRenderComponent(_sfc_main$1o, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-96bd69d5>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1o, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const _sfc_main$1l = {};
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const _sfc_main$1k = {};
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const _sfc_main$1j = {};
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-0d3d0d4d><div class="profile" data-v-0d3d0d4d><figure class="avatar" data-v-0d3d0d4d><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-0d3d0d4d></figure><div class="data" data-v-0d3d0d4d><h1 class="name" data-v-0d3d0d4d>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-0d3d0d4d>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-0d3d0d4d>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-0d3d0d4d> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$2m, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-0d3d0d4d>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-0d3d0d4d>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-0d3d0d4d>`);
        _push(ssrRenderComponent(_sfc_main$2m, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.member.actionText || "Sponsor")}`);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-0d3d0d4d"]]);
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-6cb0dbc4><div class="container" data-v-6cb0dbc4><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-6cb0dbc4>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$2u);
  }
};
const _sfc_main$1g = {};
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-40789e34><div class="card" data-v-40789e34><div class="card-content" data-v-40789e34><h1 data-v-40789e34>Just Be Yourself</h1><p data-v-40789e34>translateZ 3D</p><p class="related" data-v-40789e34>3D视差</p></div></div></div>`);
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/3d/01.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const _01$6 = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$X], ["__scopeId", "data-v-40789e34"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1f = {};
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-6508660d><div class="text" data-v-6508660d><span class="C" data-v-6508660d>C</span><span class="S" data-v-6508660d>S</span><span class="S" data-v-6508660d>S</span><span data-v-6508660d></span><span class="3" data-v-6508660d>3</span><span class="D" data-v-6508660d>D</span></div></div>`);
}
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/3d/02.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _02$5 = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["ssrRender", _sfc_ssrRender$W], ["__scopeId", "data-v-6508660d"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1e = {};
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-097cdc42><div class="main-box" data-v-097cdc42><div class="t" data-v-097cdc42></div><div class="r" data-v-097cdc42></div><div class="b" data-v-097cdc42></div><div class="l" data-v-097cdc42></div></div></div>`);
}
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/3d/03.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const _03$5 = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["ssrRender", _sfc_ssrRender$V], ["__scopeId", "data-v-097cdc42"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1d = {};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-5d90f75f><div class="rail" data-v-5d90f75f><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div><div class="stamp four" data-v-5d90f75f>4</div><div class="stamp zero" data-v-5d90f75f>0</div></div><div class="world" data-v-5d90f75f><div class="forward" data-v-5d90f75f><div class="box" data-v-5d90f75f><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(`<div class="wall" data-v-5d90f75f></div>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/3d/04.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const _04$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["ssrRender", _sfc_ssrRender$U], ["__scopeId", "data-v-5d90f75f"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _04$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1c = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-f3dab6a7><div class="g-container" data-v-f3dab6a7><div class="g-group" data-v-f3dab6a7><div class="item item-right" data-v-f3dab6a7></div><div class="item item-left" data-v-f3dab6a7></div><div class="item item-top" data-v-f3dab6a7></div><div class="item item-bottom" data-v-f3dab6a7></div><div class="item item-middle" data-v-f3dab6a7></div></div><div class="g-group" data-v-f3dab6a7><div class="item item-right" data-v-f3dab6a7></div><div class="item item-left" data-v-f3dab6a7></div><div class="item item-top" data-v-f3dab6a7></div><div class="item item-bottom" data-v-f3dab6a7></div><div class="item item-middle" data-v-f3dab6a7></div></div></div></div>`);
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/3d/05.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const _05$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$T], ["__scopeId", "data-v-f3dab6a7"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _05$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1b = {};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d3433776></div>`);
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/01.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const _01$5 = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$S], ["__scopeId", "data-v-d3433776"]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1a = {
  __name: "02",
  __ssrInlineRender: true,
  setup(__props) {
    const percent = ref(60);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_input_number = resolveComponent("a-input-number");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex align-center" }, _attrs))} data-v-8eadf3f9><div class="progress-outer" data-v-8eadf3f9><div class="progress-enter" data-v-8eadf3f9><div class="progress-bg" style="${ssrRenderStyle({ "width": percent.value + "%" })}" data-v-8eadf3f9></div></div></div>`);
      _push(ssrRenderComponent(_component_a_input_number, {
        value: percent.value,
        "onUpdate:value": ($event) => percent.value = $event,
        min: 1,
        max: 100
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/02.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const _02$4 = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-8eadf3f9"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$19 = {};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-c3521891><pre data-v-c3521891>      <code class="language-js" data-v-c3521891>
const pull = (arr, ...args) =&gt; {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) =&gt; !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v =&gt; arr.push(v));
};
let myArray = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
pull(myArray, &#39;a&#39;, &#39;c&#39;);
console.log(myArray); // [&#39;b&#39;, &#39;b&#39;]
      </code>
    </pre></div>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/03.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _03$4 = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$R], ["__scopeId", "data-v-c3521891"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$18 = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-49df0ee8><div class="box" data-v-49df0ee8><p data-v-49df0ee8> 使用 <br data-v-49df0ee8>background-attachment: fixed <br data-v-49df0ee8>filter: bulr() <br data-v-49df0ee8>实现毛玻璃效果 </p></div></div>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/04.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _04$2 = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$Q], ["__scopeId", "data-v-49df0ee8"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _04$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$17 = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-fc572e3c><div class="conic" data-v-fc572e3c></div><div class="conic conic-demo" data-v-fc572e3c></div></div>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/05.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const _05$2 = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$P], ["__scopeId", "data-v-fc572e3c"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _05$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$16 = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg flex justify-center" }, _attrs))} data-v-04fa6675><div class="container" data-v-04fa6675><svg xmlns="http://www.w3.org/2000/svg" data-v-04fa6675><path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" class="line" data-v-04fa6675></path></svg><svg xmlns="http://www.w3.org/2000/svg" data-v-04fa6675><path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" class="line line2" data-v-04fa6675></path></svg></div></div>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/06.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const _06$2 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$O], ["__scopeId", "data-v-04fa6675"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _06$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$15 = {
  __name: "07",
  __ssrInlineRender: true,
  setup(__props) {
    var animateButton = function(e) {
      e.preventDefault;
      e.target.classList.remove("animate");
      e.target.classList.add("animate");
      setTimeout(function() {
        e.target.classList.remove("animate");
      }, 700);
    };
    var classname = document.getElementsByClassName("bubbly-button");
    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener("click", animateButton, false);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "bubbly-button" }, _attrs))} data-v-49ed2e96>Click me!</button>`);
    };
  }
};
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/background/07.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const _07$2 = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-49ed2e96"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _07$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$14 = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray" }, _attrs))} data-v-278617a7><div class="container" data-v-278617a7><div class="header" data-v-278617a7></div><div class="battery" data-v-278617a7></div><div class="battery-copy" data-v-278617a7><div class="g-wave" data-v-278617a7></div><div class="g-wave" data-v-278617a7></div><div class="g-wave" data-v-278617a7></div></div></div></div>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/effect/01.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const _01$4 = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$N], ["__scopeId", "data-v-278617a7"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$13 = {
  __name: "01",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-64fc209f><form data-v-64fc209f><div class="segment" data-v-64fc209f>Sign up</div><label data-v-64fc209f><input type="text" placeholder="Email Address" data-v-64fc209f></label><label data-v-64fc209f><input type="password" placeholder="Password" data-v-64fc209f></label><button class="red" type="button" data-v-64fc209f>`);
      _push(ssrRenderComponent(unref(LockFilled), null, null, _parent));
      _push(` Log in</button><div class="segment" data-v-64fc209f><button class="unit" type="button" data-v-64fc209f>`);
      _push(ssrRenderComponent(unref(ArrowLeftOutlined), null, null, _parent));
      _push(`</button><button class="unit" type="button" data-v-64fc209f>`);
      _push(ssrRenderComponent(unref(TagsFilled), null, null, _parent));
      _push(`</button><button class="unit" type="button" data-v-64fc209f>`);
      _push(ssrRenderComponent(unref(SettingFilled), null, null, _parent));
      _push(`</button></div><div class="input-group" data-v-64fc209f><label data-v-64fc209f><input type="text" placeholder="Email Address" data-v-64fc209f></label><button class="unit" type="button" data-v-64fc209f>`);
      _push(ssrRenderComponent(unref(SearchOutlined), null, null, _parent));
      _push(`</button></div></form></div>`);
    };
  }
};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/experience/01.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _01$3 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-64fc209f"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$12 = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))} data-v-edfd3103><div class="box__right" data-v-edfd3103>Right → Left</div><div class="box__left" data-v-edfd3103>Left → Right</div><div class="box__top" data-v-edfd3103>Top → Bottom</div><div class="box__bottom" data-v-edfd3103>Bottom → Top</div><div class="box__center" data-v-edfd3103>Hover from any side</div></div>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/experience/02.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const _02$3 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$M], ["__scopeId", "data-v-edfd3103"]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$11 = {
  __name: "03",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-32919dd2><span data-v-32919dd2>default</span><span data-v-32919dd2>crosshair</span><span data-v-32919dd2>help</span><span data-v-32919dd2>move</span><span data-v-32919dd2>pointer</span><span data-v-32919dd2>progress</span><span data-v-32919dd2>text</span><span data-v-32919dd2>wait</span><span data-v-32919dd2>e-resize</span><span data-v-32919dd2>ne-resize</span><span data-v-32919dd2>nw-resize</span><span data-v-32919dd2>n-resize</span><span data-v-32919dd2>se-resize</span><span data-v-32919dd2>sw-resize</span><span data-v-32919dd2>s-resizes</span><span data-v-32919dd2>w-resize</span><span data-v-32919dd2>context-menu</span><span data-v-32919dd2>none</span><span data-v-32919dd2>cell</span><span data-v-32919dd2>vertical-text</span><span data-v-32919dd2>alias</span><span data-v-32919dd2>copy</span><span data-v-32919dd2>no-drop</span><span data-v-32919dd2>not-allowed</span><span data-v-32919dd2>ew-resize</span><span data-v-32919dd2>ns-resize</span><span data-v-32919dd2>nesw-resize</span><span data-v-32919dd2>nwse-resize</span><span data-v-32919dd2>col-resive</span><span data-v-32919dd2>row-resize</span><span data-v-32919dd2>all-scroll</span><span data-v-32919dd2>zoom-in</span><span data-v-32919dd2>zoom-out</span><span data-v-32919dd2>grab</span><span data-v-32919dd2>grabbing</span></div>`);
    };
  }
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/experience/03.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _03$3 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-32919dd2"]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03$3
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/images/1652260251187.jpg";
const _sfc_main$10 = {
  __name: "01",
  __ssrInlineRender: true,
  setup(__props) {
    const lists = ref([
      {
        title: "blur(px)",
        content: "给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。",
        min: 0,
        max: 40,
        val: 0,
        attribute: "blur",
        unit: "px"
      },
      {
        title: "hue-rotate(deg)",
        content: "给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。",
        min: 0,
        max: 100,
        val: 0,
        attribute: "hue-rotate",
        unit: "deg"
      },
      {
        title: "opacity(%)",
        content: "转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。",
        min: 0,
        max: 100,
        val: 100,
        attribute: "opacity",
        unit: "%"
      },
      {
        title: "grayscale(%)",
        content: "将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。",
        min: 0,
        max: 100,
        val: 0,
        attribute: "grayscale",
        unit: "%"
      },
      {
        title: "sepia(%)",
        content: "将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0",
        min: 0,
        max: 100,
        val: 0,
        attribute: "sepia",
        unit: "%"
      },
      {
        title: "invert(%)",
        content: "反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。",
        min: 0,
        max: 100,
        val: 0,
        attribute: "invert",
        unit: "%"
      },
      {
        title: "contrast(%)",
        content: "调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。",
        min: 0,
        max: 500,
        val: 100,
        attribute: "contrast",
        unit: "%"
      },
      {
        title: "saturate(%)",
        content: "转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。",
        min: 0,
        max: 200,
        val: 100,
        attribute: "saturate",
        unit: "%"
      },
      {
        title: "brightness(%)",
        content: "给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。",
        min: 0,
        max: 500,
        val: 100,
        attribute: "brightness",
        unit: "%"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_card = resolveComponent("a-card");
      const _component_a_slider = resolveComponent("a-slider");
      const _component_a_input_number = resolveComponent("a-input-number");
      _push(ssrRenderComponent(_component_a_row, mergeProps({
        gutter: 12,
        type: "flex",
        align: "bottom"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (item, index) => {
              _push2(ssrRenderComponent(_component_a_col, {
                xl: 8,
                md: 12,
                sm: 24,
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_card, {
                      size: "small",
                      class: "filter-box",
                      hoverable: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h4${_scopeId3}>${ssrInterpolate(item.title)}</h4><p${_scopeId3}>${ssrInterpolate(item.content)}</p><img${ssrRenderAttr("src", _imports_0)} alt="" class="margin-bottom-sm" style="${ssrRenderStyle({ filter: `${item.attribute}(${item.val}${item.unit})` })}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_a_row, {
                            gutter: 10,
                            type: "flex",
                            justify: "space-around"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_col, { span: 16 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_slider, {
                                        value: item.val,
                                        "onUpdate:value": ($event) => item.val = $event,
                                        min: item.min,
                                        max: item.max
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_slider, {
                                          value: item.val,
                                          "onUpdate:value": ($event) => item.val = $event,
                                          min: item.min,
                                          max: item.max
                                        }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_a_col, { span: 8 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_input_number, {
                                        value: item.val,
                                        "onUpdate:value": ($event) => item.val = $event,
                                        min: item.min,
                                        max: item.max,
                                        style: { "width": "100%" }
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_input_number, {
                                          value: item.val,
                                          "onUpdate:value": ($event) => item.val = $event,
                                          min: item.min,
                                          max: item.max,
                                          style: { "width": "100%" }
                                        }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_col, { span: 16 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_slider, {
                                        value: item.val,
                                        "onUpdate:value": ($event) => item.val = $event,
                                        min: item.min,
                                        max: item.max
                                      }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_a_col, { span: 8 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_input_number, {
                                        value: item.val,
                                        "onUpdate:value": ($event) => item.val = $event,
                                        min: item.min,
                                        max: item.max,
                                        style: { "width": "100%" }
                                      }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("h4", null, toDisplayString(item.title), 1),
                            createVNode("p", null, toDisplayString(item.content), 1),
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "margin-bottom-sm",
                              style: { filter: `${item.attribute}(${item.val}${item.unit})` }
                            }, null, 4),
                            createVNode(_component_a_row, {
                              gutter: 10,
                              type: "flex",
                              justify: "space-around"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_col, { span: 16 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_slider, {
                                      value: item.val,
                                      "onUpdate:value": ($event) => item.val = $event,
                                      min: item.min,
                                      max: item.max
                                    }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_a_col, { span: 8 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_input_number, {
                                      value: item.val,
                                      "onUpdate:value": ($event) => item.val = $event,
                                      min: item.min,
                                      max: item.max,
                                      style: { "width": "100%" }
                                    }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_card, {
                        size: "small",
                        class: "filter-box",
                        hoverable: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", null, toDisplayString(item.title), 1),
                          createVNode("p", null, toDisplayString(item.content), 1),
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "margin-bottom-sm",
                            style: { filter: `${item.attribute}(${item.val}${item.unit})` }
                          }, null, 4),
                          createVNode(_component_a_row, {
                            gutter: 10,
                            type: "flex",
                            justify: "space-around"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_col, { span: 16 }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_slider, {
                                    value: item.val,
                                    "onUpdate:value": ($event) => item.val = $event,
                                    min: item.min,
                                    max: item.max
                                  }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_a_col, { span: 8 }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_input_number, {
                                    value: item.val,
                                    "onUpdate:value": ($event) => item.val = $event,
                                    min: item.min,
                                    max: item.max,
                                    style: { "width": "100%" }
                                  }, null, 8, ["value", "onUpdate:value", "min", "max"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (item, index) => {
                return openBlock(), createBlock(_component_a_col, {
                  xl: 8,
                  md: 12,
                  sm: 24,
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_card, {
                      size: "small",
                      class: "filter-box",
                      hoverable: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", null, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.content), 1),
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "margin-bottom-sm",
                          style: { filter: `${item.attribute}(${item.val}${item.unit})` }
                        }, null, 4),
                        createVNode(_component_a_row, {
                          gutter: 10,
                          type: "flex",
                          justify: "space-around"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_col, { span: 16 }, {
                              default: withCtx(() => [
                                createVNode(_component_a_slider, {
                                  value: item.val,
                                  "onUpdate:value": ($event) => item.val = $event,
                                  min: item.min,
                                  max: item.max
                                }, null, 8, ["value", "onUpdate:value", "min", "max"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_a_col, { span: 8 }, {
                              default: withCtx(() => [
                                createVNode(_component_a_input_number, {
                                  value: item.val,
                                  "onUpdate:value": ($event) => item.val = $event,
                                  min: item.min,
                                  max: item.max,
                                  style: { "width": "100%" }
                                }, null, 8, ["value", "onUpdate:value", "min", "max"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/generate/01.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$$ = {
  __name: "02",
  __ssrInlineRender: true,
  setup(__props) {
    const flexBoxOptions = ref([
      {
        attributeName: "flex-direction",
        options: ["row", "row-reverse", "column", "column-reverse"]
      },
      {
        attributeName: "flex-wrap",
        options: ["nowrap", "wrap", "wrap-reverse"]
      },
      {
        attributeName: "justify-content",
        options: ["flex-start", "flex-end", "center", "space-between", "space-around"]
      },
      {
        attributeName: "align-items",
        options: ["flex-start", "flex-end", "center", "baseline", "stretch"]
      },
      {
        attributeName: "align-content",
        options: ["flex-start", "flex-end", "center", "space-between", "space-around"]
      }
    ]);
    const boxFormState = reactive({
      [flexBoxOptions.value[0].attributeName]: flexBoxOptions.value[0].options[0],
      [flexBoxOptions.value[1].attributeName]: flexBoxOptions.value[1].options[0],
      [flexBoxOptions.value[2].attributeName]: flexBoxOptions.value[2].options[0],
      [flexBoxOptions.value[3].attributeName]: flexBoxOptions.value[3].options[0],
      [flexBoxOptions.value[4].attributeName]: flexBoxOptions.value[4].options[0]
    });
    const lists = ref([
      {
        order: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
      },
      {
        order: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
      },
      {
        order: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
      },
      {
        order: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
      },
      {
        order: 1,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_form = resolveComponent("a-form");
      const _component_a_form_item = resolveComponent("a-form-item");
      const _component_a_radio_group = resolveComponent("a-radio-group");
      const _component_a_radio = resolveComponent("a-radio");
      _push(ssrRenderComponent(_component_a_row, mergeProps({ gutter: 10 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-box padding-xs"${_scopeId2}><div class="flex" style="${ssrRenderStyle(boxFormState)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(lists.value, (item, index) => {
                    _push3(`<div class="flex-item"${_scopeId2}> item - ${ssrInterpolate(index + 1)}</div>`);
                  });
                  _push3(`<!--]--></div></div> ${ssrInterpolate(boxFormState)}`);
                } else {
                  return [
                    createVNode("div", { class: "flex-box padding-xs" }, [
                      createVNode("div", {
                        class: "flex",
                        style: boxFormState
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex-item"
                          }, " item - " + toDisplayString(index + 1), 1);
                        }), 128))
                      ], 4)
                    ]),
                    createTextVNode(" " + toDisplayString(boxFormState), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4${_scopeId2}>flex box配置</h4><div class="flex-box"${_scopeId2}><!--[-->`);
                  ssrRenderList(flexBoxOptions.value, (item, index) => {
                    _push3(ssrRenderComponent(_component_a_form, {
                      key: index,
                      model: boxFormState,
                      "label-col": { style: { width: "120px" } },
                      "wrapper-col": { span: 20 }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_form_item, {
                            label: item.attributeName
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_radio_group, {
                                  value: boxFormState[item.attributeName],
                                  "onUpdate:value": ($event) => boxFormState[item.attributeName] = $event
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.options, (sItem, sIndex) => {
                                        _push6(ssrRenderComponent(_component_a_radio, {
                                          value: sItem,
                                          key: sIndex
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(sItem)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(sItem), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.options, (sItem, sIndex) => {
                                          return openBlock(), createBlock(_component_a_radio, {
                                            value: sItem,
                                            key: sIndex
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(sItem), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_radio_group, {
                                    value: boxFormState[item.attributeName],
                                    "onUpdate:value": ($event) => boxFormState[item.attributeName] = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.options, (sItem, sIndex) => {
                                        return openBlock(), createBlock(_component_a_radio, {
                                          value: sItem,
                                          key: sIndex
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(sItem), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_form_item, {
                              label: item.attributeName
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_radio_group, {
                                  value: boxFormState[item.attributeName],
                                  "onUpdate:value": ($event) => boxFormState[item.attributeName] = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.options, (sItem, sIndex) => {
                                      return openBlock(), createBlock(_component_a_radio, {
                                        value: sItem,
                                        key: sIndex
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(sItem), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onUpdate:value"])
                              ]),
                              _: 2
                            }, 1032, ["label"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><h4${_scopeId2}>flex item配置</h4>`);
                } else {
                  return [
                    createVNode("h4", null, "flex box配置"),
                    createVNode("div", { class: "flex-box" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(flexBoxOptions.value, (item, index) => {
                        return openBlock(), createBlock(_component_a_form, {
                          key: index,
                          model: boxFormState,
                          "label-col": { style: { width: "120px" } },
                          "wrapper-col": { span: 20 }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: item.attributeName
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_radio_group, {
                                  value: boxFormState[item.attributeName],
                                  "onUpdate:value": ($event) => boxFormState[item.attributeName] = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.options, (sItem, sIndex) => {
                                      return openBlock(), createBlock(_component_a_radio, {
                                        value: sItem,
                                        key: sIndex
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(sItem), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onUpdate:value"])
                              ]),
                              _: 2
                            }, 1032, ["label"])
                          ]),
                          _: 2
                        }, 1032, ["model"]);
                      }), 128))
                    ]),
                    createVNode("h4", null, "flex item配置")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-box padding-xs" }, [
                    createVNode("div", {
                      class: "flex",
                      style: boxFormState
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex-item"
                        }, " item - " + toDisplayString(index + 1), 1);
                      }), 128))
                    ], 4)
                  ]),
                  createTextVNode(" " + toDisplayString(boxFormState), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("h4", null, "flex box配置"),
                  createVNode("div", { class: "flex-box" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(flexBoxOptions.value, (item, index) => {
                      return openBlock(), createBlock(_component_a_form, {
                        key: index,
                        model: boxFormState,
                        "label-col": { style: { width: "120px" } },
                        "wrapper-col": { span: 20 }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_form_item, {
                            label: item.attributeName
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_radio_group, {
                                value: boxFormState[item.attributeName],
                                "onUpdate:value": ($event) => boxFormState[item.attributeName] = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.options, (sItem, sIndex) => {
                                    return openBlock(), createBlock(_component_a_radio, {
                                      value: sItem,
                                      key: sIndex
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(sItem), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["value", "onUpdate:value"])
                            ]),
                            _: 2
                          }, 1032, ["label"])
                        ]),
                        _: 2
                      }, 1032, ["model"]);
                    }), 128))
                  ]),
                  createVNode("h4", null, "flex item配置")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/generate/02.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$$
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = {
  __name: "03",
  __ssrInlineRender: true,
  setup(__props) {
    const nowTimeStamp = ref((/* @__PURE__ */ new Date()).getTime());
    const nowTime = ref(dayjs((/* @__PURE__ */ new Date()).getTime()).format("YYYY-MM-DD HH:mm:ss"));
    let updateTime = setInterval(() => {
      nowTimeStamp.value = (/* @__PURE__ */ new Date()).getTime();
      nowTime.value = dayjs((/* @__PURE__ */ new Date()).getTime()).format("YYYY-MM-DD HH:mm:ss");
    }, 1e3);
    const pause = ref(false);
    const stampClick = () => {
      pause.value = !pause.value;
      if (pause.value) {
        clearInterval(updateTime);
      } else {
        updateTime = setInterval(() => {
          nowTimeStamp.value = (/* @__PURE__ */ new Date()).getTime();
          nowTime.value = dayjs((/* @__PURE__ */ new Date()).getTime()).format("YYYY-MM-DD HH:mm:ss");
        }, 1e3);
      }
    };
    const inputTimeStamp = ref((/* @__PURE__ */ new Date()).getTime());
    const inputTimeStampType = ref("ms");
    const timeStampString = ref(null);
    const getTime = () => {
      let unit = 1;
      if (inputTimeStampType.value == "s") {
        unit = 1e3;
      }
      timeStampString.value = dayjs(Number(inputTimeStamp.value) * unit).format("YYYY-MM-DD HH:mm:ss");
    };
    watch(inputTimeStampType, (newVal) => {
      getTime();
    });
    const inputTime = ref(dayjs(dayjs((/* @__PURE__ */ new Date()).getTime()).format("YYYY-MM-DD HH:mm:ss"), "YYYY-MM-DD HH:mm:ss"));
    const inputTimeType = ref("ms");
    const timeString = ref(null);
    const getTimeStamp = () => {
      let unit = 1;
      if (inputTimeType.value == "s") {
        unit = 1e3;
      }
      timeString.value = dayjs(inputTime.value).valueOf() / unit;
    };
    watch(inputTimeType, (newVal) => {
      getTimeStamp();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_input = resolveComponent("a-input");
      const _component_a_select = resolveComponent("a-select");
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_a_date_picker = resolveComponent("a-date-picker");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "time-stamp" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_a_row, {
        gutter: 10,
        type: "flex",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { class: "time-label" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`现在：`);
                } else {
                  return [
                    createTextVNode("现在：")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="time-input time-change"${_scopeId2}>${ssrInterpolate(nowTimeStamp.value)} ms</span><span class="time-input time-change"${_scopeId2}>${ssrInterpolate(nowTimeStamp.value.toString().substring(0, 10))} s</span><span class="time-input time-change"${_scopeId2}>${ssrInterpolate(nowTime.value)}</span>`);
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    size: "small",
                    onClick: stampClick
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(pause.value ? "继续" : "暂停")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(pause.value ? "继续" : "暂停"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTimeStamp.value) + " ms", 1),
                    createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTimeStamp.value.toString().substring(0, 10)) + " s", 1),
                    createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTime.value), 1),
                    createVNode(_component_a_button, {
                      type: "primary",
                      size: "small",
                      onClick: stampClick
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(pause.value ? "继续" : "暂停"), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { class: "time-label" }, {
                default: withCtx(() => [
                  createTextVNode("现在：")
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 20 }, {
                default: withCtx(() => [
                  createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTimeStamp.value) + " ms", 1),
                  createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTimeStamp.value.toString().substring(0, 10)) + " s", 1),
                  createVNode("span", { class: "time-input time-change" }, toDisplayString(nowTime.value), 1),
                  createVNode(_component_a_button, {
                    type: "primary",
                    size: "small",
                    onClick: stampClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(pause.value ? "继续" : "暂停"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        gutter: 10,
        type: "flex",
        align: "middle",
        class: "margin-top-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { class: "time-label" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`时间戳：`);
                } else {
                  return [
                    createTextVNode("时间戳：")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    class: "time-input",
                    value: inputTimeStamp.value,
                    "onUpdate:value": ($event) => inputTimeStamp.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_select, {
                    value: inputTimeStampType.value,
                    "onUpdate:value": ($event) => inputTimeStampType.value = $event,
                    class: "time-select"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_select_option, { value: "ms" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`毫秒`);
                            } else {
                              return [
                                createTextVNode("毫秒")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_select_option, { value: "s" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`秒`);
                            } else {
                              return [
                                createTextVNode("秒")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_select_option, { value: "ms" }, {
                            default: withCtx(() => [
                              createTextVNode("毫秒")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_select_option, { value: "s" }, {
                            default: withCtx(() => [
                              createTextVNode("秒")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    class: "margin-right-sm",
                    onClick: getTime
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`转换`);
                        _push4(ssrRenderComponent(unref(DoubleRightOutlined), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode("转换"),
                          createVNode(unref(DoubleRightOutlined))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_input, {
                    class: "time-input",
                    value: timeStampString.value,
                    "onUpdate:value": ($event) => timeStampString.value = $event,
                    readonly: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      class: "time-input",
                      value: inputTimeStamp.value,
                      "onUpdate:value": ($event) => inputTimeStamp.value = $event
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_a_select, {
                      value: inputTimeStampType.value,
                      "onUpdate:value": ($event) => inputTimeStampType.value = $event,
                      class: "time-select"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_select_option, { value: "ms" }, {
                          default: withCtx(() => [
                            createTextVNode("毫秒")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_select_option, { value: "s" }, {
                          default: withCtx(() => [
                            createTextVNode("秒")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_a_button, {
                      type: "primary",
                      class: "margin-right-sm",
                      onClick: getTime
                    }, {
                      default: withCtx(() => [
                        createTextVNode("转换"),
                        createVNode(unref(DoubleRightOutlined))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_input, {
                      class: "time-input",
                      value: timeStampString.value,
                      "onUpdate:value": ($event) => timeStampString.value = $event,
                      readonly: ""
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { class: "time-label" }, {
                default: withCtx(() => [
                  createTextVNode("时间戳：")
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 20 }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    class: "time-input",
                    value: inputTimeStamp.value,
                    "onUpdate:value": ($event) => inputTimeStamp.value = $event
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(_component_a_select, {
                    value: inputTimeStampType.value,
                    "onUpdate:value": ($event) => inputTimeStampType.value = $event,
                    class: "time-select"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_select_option, { value: "ms" }, {
                        default: withCtx(() => [
                          createTextVNode("毫秒")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_select_option, { value: "s" }, {
                        default: withCtx(() => [
                          createTextVNode("秒")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"]),
                  createVNode(_component_a_button, {
                    type: "primary",
                    class: "margin-right-sm",
                    onClick: getTime
                  }, {
                    default: withCtx(() => [
                      createTextVNode("转换"),
                      createVNode(unref(DoubleRightOutlined))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_input, {
                    class: "time-input",
                    value: timeStampString.value,
                    "onUpdate:value": ($event) => timeStampString.value = $event,
                    readonly: ""
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        gutter: 10,
        type: "flex",
        align: "middle",
        class: "margin-top-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { class: "time-label" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`时间：`);
                } else {
                  return [
                    createTextVNode("时间：")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_date_picker, {
                    class: "time-input",
                    value: inputTime.value,
                    "onUpdate:value": ($event) => inputTime.value = $event,
                    "show-time": "",
                    placeholder: "选择日期时间"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    class: "margin-right-sm",
                    onClick: getTimeStamp
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`转换`);
                        _push4(ssrRenderComponent(unref(DoubleRightOutlined), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode("转换"),
                          createVNode(unref(DoubleRightOutlined))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_input, {
                    class: "time-input",
                    value: timeString.value,
                    "onUpdate:value": ($event) => timeString.value = $event,
                    readonly: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_select, {
                    value: inputTimeType.value,
                    "onUpdate:value": ($event) => inputTimeType.value = $event,
                    class: "time-select"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_select_option, { value: "ms" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`毫秒`);
                            } else {
                              return [
                                createTextVNode("毫秒")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_select_option, { value: "s" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`秒`);
                            } else {
                              return [
                                createTextVNode("秒")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_select_option, { value: "ms" }, {
                            default: withCtx(() => [
                              createTextVNode("毫秒")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_select_option, { value: "s" }, {
                            default: withCtx(() => [
                              createTextVNode("秒")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_date_picker, {
                      class: "time-input",
                      value: inputTime.value,
                      "onUpdate:value": ($event) => inputTime.value = $event,
                      "show-time": "",
                      placeholder: "选择日期时间"
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_a_button, {
                      type: "primary",
                      class: "margin-right-sm",
                      onClick: getTimeStamp
                    }, {
                      default: withCtx(() => [
                        createTextVNode("转换"),
                        createVNode(unref(DoubleRightOutlined))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_input, {
                      class: "time-input",
                      value: timeString.value,
                      "onUpdate:value": ($event) => timeString.value = $event,
                      readonly: ""
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_a_select, {
                      value: inputTimeType.value,
                      "onUpdate:value": ($event) => inputTimeType.value = $event,
                      class: "time-select"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_select_option, { value: "ms" }, {
                          default: withCtx(() => [
                            createTextVNode("毫秒")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_select_option, { value: "s" }, {
                          default: withCtx(() => [
                            createTextVNode("秒")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { class: "time-label" }, {
                default: withCtx(() => [
                  createTextVNode("时间：")
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 20 }, {
                default: withCtx(() => [
                  createVNode(_component_a_date_picker, {
                    class: "time-input",
                    value: inputTime.value,
                    "onUpdate:value": ($event) => inputTime.value = $event,
                    "show-time": "",
                    placeholder: "选择日期时间"
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(_component_a_button, {
                    type: "primary",
                    class: "margin-right-sm",
                    onClick: getTimeStamp
                  }, {
                    default: withCtx(() => [
                      createTextVNode("转换"),
                      createVNode(unref(DoubleRightOutlined))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_input, {
                    class: "time-input",
                    value: timeString.value,
                    "onUpdate:value": ($event) => timeString.value = $event,
                    readonly: ""
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(_component_a_select, {
                    value: inputTimeType.value,
                    "onUpdate:value": ($event) => inputTimeType.value = $event,
                    class: "time-select"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_select_option, { value: "ms" }, {
                        default: withCtx(() => [
                          createTextVNode("毫秒")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_select_option, { value: "s" }, {
                        default: withCtx(() => [
                          createTextVNode("秒")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/generate/03.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$_
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Z = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-6b460233></div>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading01.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const Loading01 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$L], ["__scopeId", "data-v-6b460233"]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading01
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Y = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sk-chase" }, _attrs))} data-v-70bf5312><div class="sk-chase-dot" data-v-70bf5312></div><div class="sk-chase-dot" data-v-70bf5312></div><div class="sk-chase-dot" data-v-70bf5312></div><div class="sk-chase-dot" data-v-70bf5312></div><div class="sk-chase-dot" data-v-70bf5312></div><div class="sk-chase-dot" data-v-70bf5312></div></div>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading02.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const Loading02 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$K], ["__scopeId", "data-v-70bf5312"]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading02
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-25b30a79><div class="double-bounce1" data-v-25b30a79></div><div class="double-bounce2" data-v-25b30a79></div></div>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading03.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const Loading03 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$J], ["__scopeId", "data-v-25b30a79"]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading03
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-3f8a2b99><div class="rect1" data-v-3f8a2b99></div><div class="rect2" data-v-3f8a2b99></div><div class="rect3" data-v-3f8a2b99></div><div class="rect4" data-v-3f8a2b99></div><div class="rect5" data-v-3f8a2b99></div></div>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading04.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const Loading04 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$I], ["__scopeId", "data-v-3f8a2b99"]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading04
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-2b23b6e3><div class="cube1" data-v-2b23b6e3></div><div class="cube2" data-v-2b23b6e3></div></div>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading05.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const Loading05 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$H], ["__scopeId", "data-v-2b23b6e3"]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading05
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-7ec7c636></div>`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading06.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Loading06 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$G], ["__scopeId", "data-v-7ec7c636"]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading06
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-9e677124><div class="dot1" data-v-9e677124></div><div class="dot2" data-v-9e677124></div></div>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading07.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const Loading07 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$F], ["__scopeId", "data-v-9e677124"]]);
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading07
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-1db7045d><div class="bounce1" data-v-1db7045d></div><div class="bounce2" data-v-1db7045d></div><div class="bounce3" data-v-1db7045d></div></div>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading08.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const Loading08 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$E], ["__scopeId", "data-v-1db7045d"]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading08
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sk-circle" }, _attrs))} data-v-3b9565f4><div class="sk-circle1 sk-child" data-v-3b9565f4></div><div class="sk-circle2 sk-child" data-v-3b9565f4></div><div class="sk-circle3 sk-child" data-v-3b9565f4></div><div class="sk-circle4 sk-child" data-v-3b9565f4></div><div class="sk-circle5 sk-child" data-v-3b9565f4></div><div class="sk-circle6 sk-child" data-v-3b9565f4></div><div class="sk-circle7 sk-child" data-v-3b9565f4></div><div class="sk-circle8 sk-child" data-v-3b9565f4></div><div class="sk-circle9 sk-child" data-v-3b9565f4></div><div class="sk-circle10 sk-child" data-v-3b9565f4></div><div class="sk-circle11 sk-child" data-v-3b9565f4></div><div class="sk-circle12 sk-child" data-v-3b9565f4></div></div>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading09.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const Loading09 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$D], ["__scopeId", "data-v-3b9565f4"]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading09
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sk-cube-grid" }, _attrs))} data-v-27c8511e><div class="sk-cube sk-cube1" data-v-27c8511e></div><div class="sk-cube sk-cube2" data-v-27c8511e></div><div class="sk-cube sk-cube3" data-v-27c8511e></div><div class="sk-cube sk-cube4" data-v-27c8511e></div><div class="sk-cube sk-cube5" data-v-27c8511e></div><div class="sk-cube sk-cube6" data-v-27c8511e></div><div class="sk-cube sk-cube7" data-v-27c8511e></div><div class="sk-cube sk-cube8" data-v-27c8511e></div><div class="sk-cube sk-cube9" data-v-27c8511e></div></div>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading10.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Loading10 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$C], ["__scopeId", "data-v-27c8511e"]]);
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sk-fading-circle" }, _attrs))} data-v-5a068383><div class="sk-circle1 sk-circle" data-v-5a068383></div><div class="sk-circle2 sk-circle" data-v-5a068383></div><div class="sk-circle3 sk-circle" data-v-5a068383></div><div class="sk-circle4 sk-circle" data-v-5a068383></div><div class="sk-circle5 sk-circle" data-v-5a068383></div><div class="sk-circle6 sk-circle" data-v-5a068383></div><div class="sk-circle7 sk-circle" data-v-5a068383></div><div class="sk-circle8 sk-circle" data-v-5a068383></div><div class="sk-circle9 sk-circle" data-v-5a068383></div><div class="sk-circle10 sk-circle" data-v-5a068383></div><div class="sk-circle11 sk-circle" data-v-5a068383></div><div class="sk-circle12 sk-circle" data-v-5a068383></div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading11.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const Loading11 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$B], ["__scopeId", "data-v-5a068383"]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading11
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sk-folding-cube" }, _attrs))} data-v-9184498a><div class="sk-cube1 sk-cube" data-v-9184498a></div><div class="sk-cube2 sk-cube" data-v-9184498a></div><div class="sk-cube4 sk-cube" data-v-9184498a></div><div class="sk-cube3 sk-cube" data-v-9184498a></div></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading12.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Loading12 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$A], ["__scopeId", "data-v-9184498a"]]);
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading12
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))} data-v-9f8a8dfa><div class="g-container" data-v-9f8a8dfa><div class="g-first" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div><div class="g-ball" data-v-9f8a8dfa></div></div></div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/components/Loading13.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const Loading13 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$z], ["__scopeId", "data-v-9f8a8dfa"]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading13
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLoading = ref("01");
    const afterCarouselChange = (e) => {
      currentLoading.value = e + 1 > 9 ? e + 1 : "0" + (e + 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_carousel = resolveComponent("a-carousel");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "padding-tb carousel-box" }, _attrs))} data-v-9aeead68>`);
      _push(ssrRenderComponent(_component_a_carousel, {
        effect: "fade",
        dotsClass: "carousel-dots",
        arrows: "",
        speed: 500,
        afterChange: afterCarouselChange
      }, {
        prevArrow: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-slick-arrow" style="${ssrRenderStyle({ "left": "10px", "z-index": "1" })}" data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(unref(LeftCircleOutlined), null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "custom-slick-arrow",
                style: { "left": "10px", "z-index": "1" }
              }, [
                createVNode(unref(LeftCircleOutlined))
              ])
            ];
          }
        }),
        nextArrow: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-slick-arrow" style="${ssrRenderStyle({ "right": "10px" })}" data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(unref(RightCircleOutlined), null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "custom-slick-arrow",
                style: { "right": "10px" }
              }, [
                createVNode(unref(RightCircleOutlined))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading01, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading02, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading03, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading04, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading05, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading06, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading07, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading08, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading09, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading10, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading11, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading12, null, null, _parent2, _scopeId));
            _push2(`</span><span data-v-9aeead68${_scopeId}>`);
            _push2(ssrRenderComponent(Loading13, null, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode(Loading01)
              ]),
              createVNode("span", null, [
                createVNode(Loading02)
              ]),
              createVNode("span", null, [
                createVNode(Loading03)
              ]),
              createVNode("span", null, [
                createVNode(Loading04)
              ]),
              createVNode("span", null, [
                createVNode(Loading05)
              ]),
              createVNode("span", null, [
                createVNode(Loading06)
              ]),
              createVNode("span", null, [
                createVNode(Loading07)
              ]),
              createVNode("span", null, [
                createVNode(Loading08)
              ]),
              createVNode("span", null, [
                createVNode(Loading09)
              ]),
              createVNode("span", null, [
                createVNode(Loading10)
              ]),
              createVNode("span", null, [
                createVNode(Loading11)
              ]),
              createVNode("span", null, [
                createVNode(Loading12)
              ]),
              createVNode("span", null, [
                createVNode(Loading13)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="current" data-v-9aeead68>${ssrInterpolate(currentLoading.value)}</div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/loading/Index.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-9aeead68"]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))} data-v-96dda15c><div class="tiktok" data-v-96dda15c></div></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/shadow/01.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _01$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$y], ["__scopeId", "data-v-96dda15c"]]);
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-c49337e8><div class="IE" data-v-c49337e8></div></div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/shadow/02.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _02$2 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$x], ["__scopeId", "data-v-c49337e8"]]);
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-b814da70><div class="box g-right" data-v-b814da70> 翘边 </div><div class="box g-both" data-v-b814da70> 托底 </div><div class="box g-slide" data-v-b814da70> 突出 </div></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/shadow/03.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _03$2 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$w], ["__scopeId", "data-v-b814da70"]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "svg-text" }, _attrs))}><svg width="100%" height="100"><text text-anchor="middle" x="50%" y="50%" class="text text-1"> SVG动态文字 </text><text text-anchor="middle" x="50%" y="50%" class="text text-2"> SVG动态文字 </text><text text-anchor="middle" x="50%" y="50%" class="text text-3"> SVG动态文字 </text><text text-anchor="middle" x="50%" y="50%" class="text text-4"> SVG动态文字 </text></svg></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/01.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _01$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$v]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))} data-v-17991522><p class="pink" data-v-17991522>PINK</p><p class="orange" data-v-17991522>Box-Shadow</p><p class="yellow" data-v-17991522>YELLOW</p></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/02.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _02$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$u], ["__scopeId", "data-v-17991522"]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))} data-v-5f547903><div class="container" data-v-5f547903><p class="a" data-v-5f547903>CSS 3D</p><p class="b" data-v-5f547903>NEON</p><p class="a" data-v-5f547903>EFFECT</p></div></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/03.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _03$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$t], ["__scopeId", "data-v-5f547903"]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ "data-name": "Solid Shadow Word" }, _attrs))} data-v-643879f0>Solid Shadow Word</div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/04.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _04$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$s], ["__scopeId", "data-v-643879f0"]]);
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _04$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-18e93a3a><svg viewBox="0 0 100 100" data-v-18e93a3a><path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" data-v-18e93a3a></path><text data-v-18e93a3a><textPath xlink:href="#circle" data-v-18e93a3a> 不会真有人能看到这儿吧，我的微信号是、、、，哈哈哈。 </textPath></text></svg></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/05.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _05$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-18e93a3a"]]);
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _05$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "padding-bottom-lg" }, _attrs))} data-v-94db86e0><div data-v-94db86e0>Txt Shadow</div><div class="left" data-v-94db86e0>TxT Long Shadow</div></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/06.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _06$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-94db86e0"]]);
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _06$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg padding" }, _attrs))} data-v-511bbc12><p data-text="Lorem ipsum dolor" data-v-511bbc12>Lorem ipsum dolor</p></div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/07.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _07$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-511bbc12"]]);
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _07$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-f92dc6af><div class="text-magic" data-word="出现故障，请查修" data-v-f92dc6af> 出现故障，请查修 <div class="white" data-v-f92dc6af></div></div></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/08.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _08$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-f92dc6af"]]);
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _08$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-cc5ce346><div class="g-container" data-v-cc5ce346><p data-v-cc5ce346>TEXT WAVE</p></div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/09.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _09$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$n], ["__scopeId", "data-v-cc5ce346"]]);
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _09$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "g-container" }, _attrs))} data-v-66489dc1><p data-v-66489dc1>Magic Text</p></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/10.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _10$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-66489dc1"]]);
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _10$1
}, Symbol.toStringTag, { value: "Module" }));
const text = `豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？呜乎！胜地不常，盛筵难再；兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔：滕王高阁临江渚，佩玉鸣鸾罢歌舞。画栋朝飞南浦云，珠帘暮卷西山雨。闲云潭影日悠悠，物换星移几度秋。阁中帝子今何在？槛外长江空自流。`;
const _sfc_main$y = {
  __name: "11",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p>单行文字：</p><div class="single-line">${ssrInterpolate(text)}</div><p>多行文字：</p><div class="multiline-line">${ssrInterpolate(text)}</div><!--]-->`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/css/text/11.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  name: "App",
  data() {
    return {
      x: 0,
      y: 0,
      count: 0
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.move);
  },
  methods: {
    move(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
    add() {
      this.count++;
    }
  },
  destroyed() {
    document.removeEventListener("mousemove", this.move);
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>鼠标位置：</div><div>X轴：${ssrInterpolate($data.x)}</div><div>Y轴：${ssrInterpolate($data.y)}</div><hr><div>${ssrInterpolate($data.count)} <button>自增</button></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/01.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _01 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  name: "App",
  setup() {
    const mouse = reactive({
      x: 0,
      y: 0
    });
    const move = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    };
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });
    onUnmounted(() => {
      document.removeEventListener("mousemove", move);
    });
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return {
      ...toRefs(mouse),
      count,
      add
    };
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>鼠标位置：</div><div>X轴：${ssrInterpolate(_ctx.x)}</div><div>Y轴：${ssrInterpolate(_ctx.y)}</div><hr><div>${ssrInterpolate($setup.count)} <button>自增</button></div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/02.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _02 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$k]]);
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  setup() {
    const msg = "hi vue3";
    const say = () => {
      console.log(msg);
    };
    return { msg, say };
  }
  // beforeCreate() {
  //   console.log("beforeCreate执行了");
  //   console.log(this);
  // },
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>${ssrInterpolate($setup.msg)}</h1></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/03.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _03 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$j]]);
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  name: "App",
  setup() {
    const obj = reactive({
      name: "李四",
      age: 18
    });
    const updateName = () => {
      obj.name = "王五";
      obj.age = 30;
    };
    return { obj, updateName };
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>${ssrInterpolate($setup.obj.name)}</div><div>${ssrInterpolate($setup.obj.age)}</div><button>修改数据</button></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/04.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _04 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _04
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  name: "App",
  setup() {
    const obj = reactive({
      name: "李四",
      age: 10
    });
    const name = toRef(obj, "name");
    const updateName = () => {
      name.value = "张三";
    };
    return { name, updateName };
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>${ssrInterpolate($setup.name)} <button>修改数据</button></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/05.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _05 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _05
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  name: "App",
  setup() {
    const obj = reactive({
      name: "李四",
      age: 10
    });
    const obj3 = toRefs(obj);
    const updateName = () => {
      obj.name = "张三";
      obj3.age.value = 20;
    };
    return { ...obj3, updateName };
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>${ssrInterpolate(_ctx.name)}</div><div>${ssrInterpolate(_ctx.age)}</div><button>修改数据</button></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/06.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _06 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _06
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  name: "App",
  setup() {
    const name = ref("李四");
    const updateName = () => {
      name.value = "张三";
    };
    const age = ref(10);
    return { name, age, updateName };
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>${ssrInterpolate($setup.name)}</div><div>${ssrInterpolate($setup.age)}</div><button>修改数据</button></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/07.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _07 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _07
}, Symbol.toStringTag, { value: "Module" }));
const useMouse = () => {
  const mouse = reactive({
    x: 0,
    y: 0
  });
  const move = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("mousemove", move);
  });
  onUnmounted(() => {
    document.removeEventListener("mousemove", move);
  });
  return mouse;
};
const _sfc_main$q = {
  name: "App",
  setup() {
    const mouse = useMouse();
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return { ...toRefs(mouse), count, add };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>坐标</div><div>x: ${ssrInterpolate(_ctx.x)}</div><div>y: ${ssrInterpolate(_ctx.y)}</div><hr><div>${ssrInterpolate($setup.count)} <button>累加1</button></div></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/08.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _08 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _08
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  name: "App",
  setup() {
    const age = ref(16);
    const newAge = computed(() => {
      return age.value + 2;
    });
    return { age, newAge };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>今年：${ssrInterpolate($setup.age)}岁</div><div>后年：${ssrInterpolate($setup.newAge)}岁</div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/09.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _09 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$d]]);
const __vite_glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _09
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  name: "App",
  setup() {
    const age = ref(16);
    const newAge = computed({
      // get函数，获取计算属性的值
      get() {
        return age.value + 2;
      },
      // set函数，当你给计算属性设置值的时候触发
      set(value) {
        age.value = value - 2;
      }
    });
    return { age, newAge };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>今年：${ssrInterpolate($setup.age)}岁</div><div>后年：${ssrInterpolate($setup.newAge)}岁</div><input type="text"${ssrRenderAttr("value", $setup.newAge)}></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/10.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _10 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  name: "App",
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const obj = reactive({
      name: "ls",
      age: 10,
      brand: {
        id: 1,
        name: "宝马"
      }
    });
    const updateName = () => {
      obj.name = "zs";
    };
    const updateBrandName = () => {
      obj.brand.name = "奔驰";
    };
    watch(
      () => obj.brand,
      () => {
      },
      {
        // 6. 需要深度监听
        deep: true,
        // 7. 想默认触发
        immediate: true
      }
    );
    return { count, add, obj, updateName, updateBrandName };
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div><p>count的值：${ssrInterpolate($setup.count)}</p><button>改数据</button></div><hr><div><p>${ssrInterpolate($setup.obj.name)}</p><p>${ssrInterpolate($setup.obj.age)}</p><p>${ssrInterpolate($setup.obj.brand.name)}</p><button>改名字</button><button>改品牌名字</button></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/11.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _11 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$b]]);
const __vite_glob_0_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _11
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  name: "App",
  setup() {
    const dom = ref(null);
    const setDom = (el) => {
    };
    return { dom, setDom };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>我是box</div><ul><!--[-->`);
  ssrRenderList(4, (i) => {
    _push(`<li>第${ssrInterpolate(i)}LI</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/12.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _12 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _12
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  name: "Son",
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
  setup(props, { emit }) {
    const changeMoney = () => {
      emit("change-money", 50);
    };
    return { changeMoney };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h3>子组件</h3><p>${ssrInterpolate($props.money)}</p><button>花50元</button></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/13-son.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Son$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Son$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  name: "App",
  components: {
    Son: Son$4
  },
  // 父组件的数据传递给子组件
  setup() {
    const money = ref(100);
    const updateMoney = (newMoney) => {
      money.value -= newMoney;
    };
    return { money, updateMoney };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Son = resolveComponent("Son");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h2>父组件</h2><p>${ssrInterpolate($setup.money)}</p><hr>`);
  _push(ssrRenderComponent(_component_Son, {
    money: $setup.money,
    onChangeMoney: $setup.updateMoney
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/13-parent.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _13Parent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _13Parent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  name: "GrandSon",
  setup() {
    const money = inject("money");
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(20);
    };
    return { money, fn };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h4>孙组件 ${ssrInterpolate($setup.money)} <button>消费20</button></h4></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/14-grandSon.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const GrandSon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GrandSon
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  name: "Son",
  components: {
    GrandSon
  },
  setup() {
    const money = inject("money");
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(200);
    };
    return { money, fn };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GrandSon = resolveComponent("GrandSon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h3>子组件 ${ssrInterpolate($setup.money)} <button>消费200</button></h3><hr>`);
  _push(ssrRenderComponent(_component_GrandSon, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/14-son.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Son$3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_63 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Son$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  name: "App",
  components: {
    Son: Son$3
  },
  setup() {
    const money = ref(100);
    const changeMoney = (saleMoney) => {
      money.value = money.value - saleMoney;
    };
    provide("money", money);
    provide("changeMoney", changeMoney);
    return { money };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Son = resolveComponent("Son");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h2>父组件 ${ssrInterpolate($setup.money)} <button>发钱1000</button></h2><hr>`);
  _push(ssrRenderComponent(_component_Son, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/14-parent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _14Parent = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _14Parent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  name: "Son",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const fn = () => {
      emit("update:modelValue", 100);
    };
    return { fn };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h2>子组件 ${ssrInterpolate($props.modelValue)} <button>改变数据</button></h2></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/15-son.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Son$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_65 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Son$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  name: "App",
  components: {
    Son: Son$2
  },
  setup() {
    const count = ref(10);
    return { count };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Son = resolveComponent("Son");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>父组件 ${ssrInterpolate($setup.count)}</h1><hr>`);
  _push(ssrRenderComponent(_component_Son, {
    modelValue: $setup.count,
    "onUpdate:modelValue": ($event) => $setup.count = $event
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/15-parent.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _15Parent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_64 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _15Parent
}, Symbol.toStringTag, { value: "Module" }));
const followMixin = {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    followFn() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2e3);
    }
  }
};
const _sfc_main$e = {
  name: "Son",
  mixins: [followMixin]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container2" }, _attrs))}><h3> 作者：周杰伦 <button>${ssrInterpolate(_ctx.loading ? "loading..." : "关注")}</button></h3></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/16-son.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Son$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_67 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Son$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  name: "App",
  components: {
    Son: Son$1
  },
  mixins: [followMixin]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Son = resolveComponent("Son");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container1" }, _attrs))}><h2> 作者：周杰伦 <a href="javascript:;">${ssrInterpolate(_ctx.loading ? "请求中..." : "关注")}</a></h2><hr>`);
  _push(ssrRenderComponent(_component_Son, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/16-parent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _16Parent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_66 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _16Parent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h3>子组件</h3></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/17-son.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Son = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_69 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Son
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "17-parent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h2>父组件</h2><hr>`);
      _push(ssrRenderComponent(Son, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/17-parent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_68 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
function dateFormat() {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}
const _sfc_main$a = {
  __name: "18",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("李四");
    const age = ref(18);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>姓名：${ssrInterpolate(name.value)}</div><div>年龄：${ssrInterpolate(age.value)} <button>年龄+1</button></div><div>今天：${ssrInterpolate(unref(dateFormat)())}</div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/18.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_70 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "20-son",
  __ssrInlineRender: true,
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h3>子组件${ssrInterpolate(props.money)} or ${ssrInterpolate(__props.money)} <button>花20</button></h3></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/20-son.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_72 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "20-parent",
  __ssrInlineRender: true,
  setup(__props) {
    const money = ref(100);
    const costMoney = (e) => {
      money.value -= e;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h2>父组件${ssrInterpolate(money.value)}</h2><hr>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        money: money.value,
        onCostMoney: costMoney
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/20-parent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_71 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "20",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      color: "red",
      fontSize: "20px"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--35bb23ac": state.color,
        "--460dce6e": state.fontSize
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex align-center" }, _attrs, _cssVars))} data-v-61393e0c><span data-v-61393e0c>我的样式被动态修改了</span><button data-v-61393e0c>修改</button></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/example/vue3/20.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _20 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-61393e0c"]]);
const __vite_glob_0_73 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _20
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "vp-example",
  __ssrInlineRender: true,
  props: {
    path: String
  },
  setup(__props) {
    const props = __props;
    let dynamicComponent = shallowRef(null);
    onBeforeMount(() => {
      const modules = /* @__PURE__ */ Object.assign({
        "../../../../views/example/css/3d/01.vue": __vite_glob_0_0,
        "../../../../views/example/css/3d/02.vue": __vite_glob_0_1,
        "../../../../views/example/css/3d/03.vue": __vite_glob_0_2,
        "../../../../views/example/css/3d/04.vue": __vite_glob_0_3,
        "../../../../views/example/css/3d/05.vue": __vite_glob_0_4,
        "../../../../views/example/css/background/01.vue": __vite_glob_0_5,
        "../../../../views/example/css/background/02.vue": __vite_glob_0_6,
        "../../../../views/example/css/background/03.vue": __vite_glob_0_7,
        "../../../../views/example/css/background/04.vue": __vite_glob_0_8,
        "../../../../views/example/css/background/05.vue": __vite_glob_0_9,
        "../../../../views/example/css/background/06.vue": __vite_glob_0_10,
        "../../../../views/example/css/background/07.vue": __vite_glob_0_11,
        "../../../../views/example/css/effect/01.vue": __vite_glob_0_12,
        "../../../../views/example/css/experience/01.vue": __vite_glob_0_13,
        "../../../../views/example/css/experience/02.vue": __vite_glob_0_14,
        "../../../../views/example/css/experience/03.vue": __vite_glob_0_15,
        "../../../../views/example/css/generate/01.vue": __vite_glob_0_16,
        "../../../../views/example/css/generate/02.vue": __vite_glob_0_17,
        "../../../../views/example/css/generate/03.vue": __vite_glob_0_18,
        "../../../../views/example/css/loading/Index.vue": __vite_glob_0_19,
        "../../../../views/example/css/loading/components/Loading01.vue": __vite_glob_0_20,
        "../../../../views/example/css/loading/components/Loading02.vue": __vite_glob_0_21,
        "../../../../views/example/css/loading/components/Loading03.vue": __vite_glob_0_22,
        "../../../../views/example/css/loading/components/Loading04.vue": __vite_glob_0_23,
        "../../../../views/example/css/loading/components/Loading05.vue": __vite_glob_0_24,
        "../../../../views/example/css/loading/components/Loading06.vue": __vite_glob_0_25,
        "../../../../views/example/css/loading/components/Loading07.vue": __vite_glob_0_26,
        "../../../../views/example/css/loading/components/Loading08.vue": __vite_glob_0_27,
        "../../../../views/example/css/loading/components/Loading09.vue": __vite_glob_0_28,
        "../../../../views/example/css/loading/components/Loading10.vue": __vite_glob_0_29,
        "../../../../views/example/css/loading/components/Loading11.vue": __vite_glob_0_30,
        "../../../../views/example/css/loading/components/Loading12.vue": __vite_glob_0_31,
        "../../../../views/example/css/loading/components/Loading13.vue": __vite_glob_0_32,
        "../../../../views/example/css/shadow/01.vue": __vite_glob_0_33,
        "../../../../views/example/css/shadow/02.vue": __vite_glob_0_34,
        "../../../../views/example/css/shadow/03.vue": __vite_glob_0_35,
        "../../../../views/example/css/text/01.vue": __vite_glob_0_36,
        "../../../../views/example/css/text/02.vue": __vite_glob_0_37,
        "../../../../views/example/css/text/03.vue": __vite_glob_0_38,
        "../../../../views/example/css/text/04.vue": __vite_glob_0_39,
        "../../../../views/example/css/text/05.vue": __vite_glob_0_40,
        "../../../../views/example/css/text/06.vue": __vite_glob_0_41,
        "../../../../views/example/css/text/07.vue": __vite_glob_0_42,
        "../../../../views/example/css/text/08.vue": __vite_glob_0_43,
        "../../../../views/example/css/text/09.vue": __vite_glob_0_44,
        "../../../../views/example/css/text/10.vue": __vite_glob_0_45,
        "../../../../views/example/css/text/11.vue": __vite_glob_0_46,
        "../../../../views/example/vue3/01.vue": __vite_glob_0_47,
        "../../../../views/example/vue3/02.vue": __vite_glob_0_48,
        "../../../../views/example/vue3/03.vue": __vite_glob_0_49,
        "../../../../views/example/vue3/04.vue": __vite_glob_0_50,
        "../../../../views/example/vue3/05.vue": __vite_glob_0_51,
        "../../../../views/example/vue3/06.vue": __vite_glob_0_52,
        "../../../../views/example/vue3/07.vue": __vite_glob_0_53,
        "../../../../views/example/vue3/08.vue": __vite_glob_0_54,
        "../../../../views/example/vue3/09.vue": __vite_glob_0_55,
        "../../../../views/example/vue3/10.vue": __vite_glob_0_56,
        "../../../../views/example/vue3/11.vue": __vite_glob_0_57,
        "../../../../views/example/vue3/12.vue": __vite_glob_0_58,
        "../../../../views/example/vue3/13-parent.vue": __vite_glob_0_59,
        "../../../../views/example/vue3/13-son.vue": __vite_glob_0_60,
        "../../../../views/example/vue3/14-grandSon.vue": __vite_glob_0_61,
        "../../../../views/example/vue3/14-parent.vue": __vite_glob_0_62,
        "../../../../views/example/vue3/14-son.vue": __vite_glob_0_63,
        "../../../../views/example/vue3/15-parent.vue": __vite_glob_0_64,
        "../../../../views/example/vue3/15-son.vue": __vite_glob_0_65,
        "../../../../views/example/vue3/16-parent.vue": __vite_glob_0_66,
        "../../../../views/example/vue3/16-son.vue": __vite_glob_0_67,
        "../../../../views/example/vue3/17-parent.vue": __vite_glob_0_68,
        "../../../../views/example/vue3/17-son.vue": __vite_glob_0_69,
        "../../../../views/example/vue3/18.vue": __vite_glob_0_70,
        "../../../../views/example/vue3/20-parent.vue": __vite_glob_0_71,
        "../../../../views/example/vue3/20-son.vue": __vite_glob_0_72,
        "../../../../views/example/vue3/20.vue": __vite_glob_0_73
      });
      for (const modulesKey in modules) {
        const module = modules[modulesKey];
        if (modulesKey.split(".vue")[0].endsWith(props.path)) {
          dynamicComponent.value = module.default;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="example-component" data-v-44e857dc${_scopeId}>`);
            if (unref(dynamicComponent)) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(dynamicComponent)), _ctx.$attrs, null), _parent2, _scopeId);
            } else {
              _push2(`<div class="example-component--spin" data-v-44e857dc${_scopeId}><div data-v-44e857dc${_scopeId}></div><div data-v-44e857dc${_scopeId}></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "example-component" }, [
                unref(dynamicComponent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(dynamicComponent)), mergeProps({ key: 0 }, _ctx.$attrs), null, 16)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "example-component--spin"
                }, [
                  createVNode("div"),
                  createVNode("div")
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vp-demo/vp-example.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Example = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-44e857dc"]]);
const _sfc_main$5 = {
  __name: "vp-source-code",
  __ssrInlineRender: true,
  props: {
    source: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const decoded = computed(() => {
      return decodeURIComponent(props.source);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-source-wrapper" }, _attrs))} data-v-e8414ef9><div class="example-source language-vue" data-v-e8414ef9>${decoded.value}</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vp-demo/vp-source-code.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SourceCode = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e8414ef9"]]);
const _sfc_main$4 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    rawSource: String,
    // 源码
    source: String,
    path: String,
    description: String
  },
  setup(__props) {
    const props = __props;
    const { copy, isSupported } = useClipboard({
      source: decodeURIComponent(props.rawSource),
      read: false
    });
    const [sourceVisible, toggleSourceVisible] = useToggle(false);
    const decodedDescription = computed(
      () => decodeURIComponent(props.description)
    );
    const copyCode = async () => {
      if (!isSupported) {
        message.error("复制失败");
      }
      try {
        await copy();
        message.success("已复制");
      } catch (e) {
        message.error(e.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_a_tooltip = resolveComponent("a-tooltip");
      const _component_ElCollapseTransition = resolveComponent("ElCollapseTransition");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="example-demo" data-v-fcb84cea${_scopeId}><div class="code-title" data-v-fcb84cea${_scopeId}>${decodedDescription.value}</div><div class="example" data-v-fcb84cea${_scopeId}>`);
            _push2(ssrRenderComponent(Example, { path: __props.path }, null, _parent2, _scopeId));
            _push2(`<div class="op-btns" data-v-fcb84cea${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_tooltip, { title: "复制代码" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="op-btn" data-v-fcb84cea${_scopeId2}><svg data-v-3918b681="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-fcb84cea${_scopeId2}><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z" data-v-fcb84cea${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "op-btn",
                      onClick: copyCode
                    }, [
                      (openBlock(), createBlock("svg", {
                        "data-v-3918b681": "",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_tooltip, {
              title: unref(sourceVisible) ? "收起代码" : "显示代码"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="op-btn" data-v-fcb84cea${_scopeId2}><svg data-v-3918b681="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-fcb84cea${_scopeId2}><path fill="currentColor" d="m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z" data-v-fcb84cea${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "op-btn",
                      onClick: ($event) => unref(toggleSourceVisible)()
                    }, [
                      (openBlock(), createBlock("svg", {
                        "data-v-3918b681": "",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElCollapseTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SourceCode, {
                    style: unref(sourceVisible) ? null : { display: "none" },
                    source: __props.source
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(SourceCode, { source: __props.source }, null, 8, ["source"]), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(unref(sourceVisible) ? null : { display: "none" })}" class="example-float-control" data-v-fcb84cea${_scopeId}><svg class="icon" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" data-v-fcb84cea${_scopeId}><path d="M512 320c-8.288 0-15.776 3.232-21.456 8.4l-0.064-0.08-352 320 0.08 0.08C132.112 654.256 128 662.608 128 672a32 32 0 0 0 32 32c8.288 0 15.76-3.232 21.456-8.4l0.08 0.08L512 395.248 842.464 695.68l0.08-0.08A31.776 31.776 0 0 0 864 704a32 32 0 0 0 32-32c0-9.376-4.112-17.744-10.544-23.6l0.08-0.08-352-320-0.08 0.08c-5.68-5.168-13.168-8.4-21.456-8.4z" p-id="4219" data-v-fcb84cea${_scopeId}></path></svg><span data-v-fcb84cea${_scopeId}>收起代码</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "example-demo" }, [
                createVNode("div", {
                  class: "code-title",
                  innerHTML: decodedDescription.value
                }, null, 8, ["innerHTML"]),
                createVNode("div", { class: "example" }, [
                  createVNode(Example, { path: __props.path }, null, 8, ["path"]),
                  createVNode("div", { class: "op-btns" }, [
                    createVNode(_component_a_tooltip, { title: "复制代码" }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "op-btn",
                          onClick: copyCode
                        }, [
                          (openBlock(), createBlock("svg", {
                            "data-v-3918b681": "",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "currentColor",
                              d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"
                            })
                          ]))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_tooltip, {
                      title: unref(sourceVisible) ? "收起代码" : "显示代码"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "op-btn",
                          onClick: ($event) => unref(toggleSourceVisible)()
                        }, [
                          (openBlock(), createBlock("svg", {
                            "data-v-3918b681": "",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "currentColor",
                              d: "m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ]),
                  createVNode(_component_ElCollapseTransition, null, {
                    default: withCtx(() => [
                      withDirectives(createVNode(SourceCode, { source: __props.source }, null, 8, ["source"]), [
                        [vShow, unref(sourceVisible)]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, { name: "el-fade-in-linear" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("div", {
                        class: "example-float-control",
                        onClick: ($event) => unref(toggleSourceVisible)(false)
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "icon",
                          width: "1em",
                          height: "1em",
                          viewBox: "0 0 1024 1024",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "p-id": "4218"
                        }, [
                          createVNode("path", {
                            d: "M512 320c-8.288 0-15.776 3.232-21.456 8.4l-0.064-0.08-352 320 0.08 0.08C132.112 654.256 128 662.608 128 672a32 32 0 0 0 32 32c8.288 0 15.76-3.232 21.456-8.4l0.08 0.08L512 395.248 842.464 695.68l0.08-0.08A31.776 31.776 0 0 0 864 704a32 32 0 0 0 32-32c0-9.376-4.112-17.744-10.544-23.6l0.08-0.08-352-320-0.08 0.08c-5.68-5.168-13.168-8.4-21.456-8.4z",
                            "p-id": "4219"
                          })
                        ])),
                        createVNode("span", null, "收起代码")
                      ], 8, ["onClick"]), [
                        [vShow, unref(sourceVisible)]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vp-demo/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VPDemo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fcb84cea"]]);
const _sfc_main$3 = {
  __name: "example",
  __ssrInlineRender: true,
  props: {
    rawSource: String,
    // 源码
    source: String,
    path: String,
    description: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="example-app"${_scopeId}>`);
            _push2(ssrRenderComponent(Example, { path: __props.path }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "example-app" }, [
                createVNode(Example, { path: __props.path }, null, 8, ["path"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vp-demo/example.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    icon: "",
    title: "",
    desc: "",
    link: ""
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      return props.title ? slugify(props.title) : "";
    });
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return "";
    });
    const realIcon = computed(() => {
      return `https://icon.7udh.com/${props.link.replace("http://", "").replace("https://", "").split("/")[0]}.png`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.link) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: "m-nav-link",
          href: __props.link,
          target: "_blank",
          rel: "noreferrer"
        }, _attrs))} data-v-7ae11b7a><article class="box" data-v-7ae11b7a><div class="box-header" data-v-7ae11b7a>`);
        if (svg.value) {
          _push(`<div class="icon" data-v-7ae11b7a>${svg.value}</div>`);
        } else if (__props.icon && typeof __props.icon === "string") {
          _push(`<div class="icon" data-v-7ae11b7a><img${ssrRenderAttr("src", realIcon.value)}${ssrRenderAttr("alt", __props.title)} onerror="this.parentElement.style.display=&#39;none&#39;" data-v-7ae11b7a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.title) {
          _push(`<h5${ssrRenderAttr("id", formatTitle.value)} class="title" data-v-7ae11b7a>${ssrInterpolate(__props.title)}</h5>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.desc) {
          _push(`<p class="desc"${ssrRenderAttr("title", __props.desc)} data-v-7ae11b7a>${ssrInterpolate(__props.desc)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article></a>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7ae11b7a"]]);
const _sfc_main$1 = {
  __name: "NavLinks",
  __ssrInlineRender: true,
  props: {
    title: "",
    items: []
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      return props.title ? slugify(props.title) : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.title) {
        _push(`<h2${ssrRenderAttr("id", formatTitle.value)} tabindex="-1" data-v-1086d8e1>${ssrInterpolate(__props.title)} <a class="header-anchor"${ssrRenderAttr("href", `#${formatTitle.value}`)} aria-hidden="true" data-v-1086d8e1></a></h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="m-nav-links" data-v-1086d8e1><!--[-->`);
      ssrRenderList(__props.items, ({ icon, title, desc, link: link2 }) => {
        _push(ssrRenderComponent(NavLink, {
          key: link2,
          icon,
          title,
          desc,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/NavLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1086d8e1"]]);
const _sfc_main = {
  __name: "Comment",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { isDark } = useData$1();
    const giscusConfig = reactive({
      repo: "Ele-Cat/Ele-Cat",
      repoId: "MDEwOlJlcG9zaXRvcnkzNDE0NDYyMjI=",
      category: "Announcements",
      categoryId: "DIC_kwDOFFoOTs4CcXuJ",
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top",
      // theme: isDark.value ? "dark" : "light", // 需要写在页面里面才会有响应式
      lang: "zh-CN",
      loading: "lazy"
    });
    const showComment = ref(true);
    watch(
      () => route.path,
      () => {
        showComment.value = false;
        nextTick(() => {
          showComment.value = true;
        });
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "comments" }, _attrs))}>`);
      if (showComment.value) {
        _push(ssrRenderComponent(unref(Giscus), {
          repo: giscusConfig.repo,
          "repo-id": giscusConfig.repoId,
          category: giscusConfig.category,
          "category-id": giscusConfig.categoryId,
          mapping: giscusConfig.mapping,
          "reactions-enabled": giscusConfig.reactionsEnabled,
          "emit-metadata": giscusConfig.emitMetadata,
          "input-position": giscusConfig.inputPosition,
          theme: unref(isDark) ? "dark" : "light",
          lang: giscusConfig.lang,
          loading: giscusConfig.loading
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Comment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RawTheme = {
  ...theme,
  enhanceApp({ app, router }) {
    app.use(Antd);
    app.component("Demo", VPDemo);
    app.component("Example", _sfc_main$3);
    app.component("NavLinks", NavLinks);
    app.component("Comment", _sfc_main);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg-opacity)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text2 = clone.textContent || "";
        if (isShell) {
          text2 = text2.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text2).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text2) {
  try {
    return navigator.clipboard.writeText(text2);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text2;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text2.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadElements = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (true) {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath + "?t=" + Date.now()
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  createSearchTranslate as c,
  render,
  useData as u
};
