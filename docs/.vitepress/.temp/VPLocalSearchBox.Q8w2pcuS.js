var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, shallowRef, markRaw, computed, ref, watchEffect, watch, createApp, nextTick, onMounted, onBeforeUnmount, unref, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { computedAsync, useSessionStorage, useLocalStorage, debouncedWatch, onKeyStroke, useEventListener, useScrollLock } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import Mark from "mark.js/src/vanilla.js";
import MiniSearch from "minisearch";
import { f as dataSymbol, p as pathToFile, h as useRouter, a as inBrowser, j as escapeRegExp } from "./Content.Elbf6Wuc.js";
import { u as useData, c as createSearchTranslate } from "./app.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "medium-zoom";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "dayjs";
import "@mdit-vue/shared";
import "@giscus/vue";
const localSearchIndex = { "root": () => import("./@localSearchIndexroot.kYsd2wbi.js") };
class LRUCache {
  constructor(max = 10) {
    __publicField(this, "max");
    __publicField(this, "cache");
    this.max = max;
    this.cache = /* @__PURE__ */ new Map();
  }
  get(key) {
    let item = this.cache.get(key);
    if (item !== void 0) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }
  set(key, val) {
    if (this.cache.has(key))
      this.cache.delete(key);
    else if (this.cache.size === this.max)
      this.cache.delete(this.first());
    this.cache.set(key, val);
  }
  first() {
    return this.cache.keys().next().value;
  }
  clear() {
    this.cache.clear();
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPLocalSearchBox",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const emit = __emit;
    const el = shallowRef();
    const resultsEl = shallowRef();
    const searchIndexData = shallowRef(localSearchIndex);
    const vitePressData = useData();
    const { activate } = useFocusTrap(el, {
      immediate: true,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      escapeDeactivates: true
    });
    const { localeIndex, theme } = vitePressData;
    const searchIndex = computedAsync(
      async () => {
        var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
        return markRaw(
          MiniSearch.loadJSON(
            (_c = await ((_b2 = (_a2 = searchIndexData.value)[localeIndex.value]) == null ? void 0 : _b2.call(_a2))) == null ? void 0 : _c.default,
            {
              fields: ["title", "titles", "text"],
              storeFields: ["title", "titles"],
              searchOptions: {
                fuzzy: 0.2,
                prefix: true,
                boost: { title: 4, text: 2, titles: 1 },
                ...((_d = theme.value.search) == null ? void 0 : _d.provider) === "local" && ((_f = (_e = theme.value.search.options) == null ? void 0 : _e.miniSearch) == null ? void 0 : _f.searchOptions)
              },
              ...((_g = theme.value.search) == null ? void 0 : _g.provider) === "local" && ((_i = (_h = theme.value.search.options) == null ? void 0 : _h.miniSearch) == null ? void 0 : _i.options)
            }
          )
        );
      }
    );
    const disableQueryPersistence = computed(() => {
      var _a2, _b2;
      return ((_a2 = theme.value.search) == null ? void 0 : _a2.provider) === "local" && ((_b2 = theme.value.search.options) == null ? void 0 : _b2.disableQueryPersistence) === true;
    });
    const filterText = disableQueryPersistence.value ? ref("") : useSessionStorage("vitepress:local-search-filter", "");
    const showDetailedList = useLocalStorage(
      "vitepress:local-search-detailed-list",
      ((_a = theme.value.search) == null ? void 0 : _a.provider) === "local" && ((_b = theme.value.search.options) == null ? void 0 : _b.detailedView) === true
    );
    const disableDetailedView = computed(() => {
      var _a2, _b2, _c;
      return ((_a2 = theme.value.search) == null ? void 0 : _a2.provider) === "local" && (((_b2 = theme.value.search.options) == null ? void 0 : _b2.disableDetailedView) === true || ((_c = theme.value.search.options) == null ? void 0 : _c.detailedView) === false);
    });
    const buttonText = computed(() => {
      var _a2, _b2, _c, _d, _e, _f, _g;
      const options = ((_a2 = theme.value.search) == null ? void 0 : _a2.options) ?? theme.value.algolia;
      return ((_e = (_d = (_c = (_b2 = options == null ? void 0 : options.locales) == null ? void 0 : _b2[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e.buttonText) || ((_g = (_f = options == null ? void 0 : options.translations) == null ? void 0 : _f.button) == null ? void 0 : _g.buttonText) || "Search";
    });
    watchEffect(() => {
      if (disableDetailedView.value) {
        showDetailedList.value = false;
      }
    });
    const results = shallowRef([]);
    const enableNoResults = ref(false);
    watch(filterText, () => {
      enableNoResults.value = false;
    });
    const mark = computedAsync(async () => {
      if (!resultsEl.value)
        return;
      return markRaw(new Mark(resultsEl.value));
    }, null);
    const cache = new LRUCache(16);
    debouncedWatch(
      () => [searchIndex.value, filterText.value, showDetailedList.value],
      async ([index, filterTextValue, showDetailedListValue], old, onCleanup) => {
        var _a2, _b2, _c, _d;
        if ((old == null ? void 0 : old[0]) !== index) {
          cache.clear();
        }
        let canceled = false;
        onCleanup(() => {
          canceled = true;
        });
        if (!index)
          return;
        results.value = index.search(filterTextValue).slice(0, 16);
        enableNoResults.value = true;
        const mods = showDetailedListValue ? await Promise.all(results.value.map((r) => fetchExcerpt(r.id))) : [];
        if (canceled)
          return;
        for (const { id, mod } of mods) {
          const mapId = id.slice(0, id.indexOf("#"));
          let map = cache.get(mapId);
          if (map)
            continue;
          map = /* @__PURE__ */ new Map();
          cache.set(mapId, map);
          const comp = mod.default ?? mod;
          if ((comp == null ? void 0 : comp.render) || (comp == null ? void 0 : comp.setup)) {
            const app = createApp(comp);
            app.config.warnHandler = () => {
            };
            app.provide(dataSymbol, vitePressData);
            Object.defineProperties(app.config.globalProperties, {
              $frontmatter: {
                get() {
                  return vitePressData.frontmatter.value;
                }
              },
              $params: {
                get() {
                  return vitePressData.page.value.params;
                }
              }
            });
            const div = document.createElement("div");
            app.mount(div);
            const headings = div.querySelectorAll("h1, h2, h3, h4, h5, h6");
            headings.forEach((el2) => {
              var _a3;
              const href = (_a3 = el2.querySelector("a")) == null ? void 0 : _a3.getAttribute("href");
              const anchor = (href == null ? void 0 : href.startsWith("#")) && href.slice(1);
              if (!anchor)
                return;
              let html = "";
              while ((el2 = el2.nextElementSibling) && !/^h[1-6]$/i.test(el2.tagName))
                html += el2.outerHTML;
              map.set(anchor, html);
            });
            app.unmount();
          }
          if (canceled)
            return;
        }
        const terms = /* @__PURE__ */ new Set();
        results.value = results.value.map((r) => {
          const [id, anchor] = r.id.split("#");
          const map = cache.get(id);
          const text = (map == null ? void 0 : map.get(anchor)) ?? "";
          for (const term in r.match) {
            terms.add(term);
          }
          return { ...r, text };
        });
        await nextTick();
        if (canceled)
          return;
        await new Promise((r) => {
          var _a3;
          (_a3 = mark.value) == null ? void 0 : _a3.unmark({
            done: () => {
              var _a4;
              (_a4 = mark.value) == null ? void 0 : _a4.markRegExp(formMarkRegex(terms), { done: r });
            }
          });
        });
        const excerpts = ((_a2 = el.value) == null ? void 0 : _a2.querySelectorAll(".result .excerpt")) ?? [];
        for (const excerpt of excerpts) {
          (_b2 = excerpt.querySelector('mark[data-markjs="true"]')) == null ? void 0 : _b2.scrollIntoView({ block: "center" });
        }
        (_d = (_c = resultsEl.value) == null ? void 0 : _c.firstElementChild) == null ? void 0 : _d.scrollIntoView({ block: "start" });
      },
      { debounce: 200, immediate: true }
    );
    async function fetchExcerpt(id) {
      const file = pathToFile(id.slice(0, id.indexOf("#")));
      try {
        if (!file)
          throw new Error(`Cannot find file for id: ${id}`);
        return { id, mod: await import(
          /*@vite-ignore*/
          file
        ) };
      } catch (e) {
        console.error(e);
        return { id, mod: {} };
      }
    }
    const searchInput = ref();
    const disableReset = computed(() => {
      var _a2;
      return ((_a2 = filterText.value) == null ? void 0 : _a2.length) <= 0;
    });
    function focusSearchInput(select = true) {
      var _a2, _b2;
      (_a2 = searchInput.value) == null ? void 0 : _a2.focus();
      select && ((_b2 = searchInput.value) == null ? void 0 : _b2.select());
    }
    onMounted(() => {
      focusSearchInput();
    });
    const selectedIndex = ref(-1);
    const disableMouseOver = ref(false);
    watch(results, (r) => {
      selectedIndex.value = r.length ? 0 : -1;
      scrollToSelectedResult();
    });
    function scrollToSelectedResult() {
      nextTick(() => {
        const selectedEl = document.querySelector(".result.selected");
        if (selectedEl) {
          selectedEl.scrollIntoView({
            block: "nearest"
          });
        }
      });
    }
    onKeyStroke("ArrowUp", (event) => {
      event.preventDefault();
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
      disableMouseOver.value = true;
      scrollToSelectedResult();
    });
    onKeyStroke("ArrowDown", (event) => {
      event.preventDefault();
      selectedIndex.value++;
      if (selectedIndex.value >= results.value.length) {
        selectedIndex.value = 0;
      }
      disableMouseOver.value = true;
      scrollToSelectedResult();
    });
    const router = useRouter();
    onKeyStroke("Enter", (e) => {
      if (e.target instanceof HTMLButtonElement && e.target.type !== "submit")
        return;
      const selectedPackage = results.value[selectedIndex.value];
      if (e.target instanceof HTMLInputElement && !selectedPackage) {
        e.preventDefault();
        return;
      }
      if (selectedPackage) {
        router.go(selectedPackage.id);
        emit("close");
      }
    });
    onKeyStroke("Escape", () => {
      emit("close");
    });
    const defaultTranslations = {
      modal: {
        displayDetails: "Display detailed list",
        resetButtonTitle: "Reset search",
        backButtonTitle: "Close search",
        noResultsText: "No results for",
        footer: {
          selectText: "to select",
          selectKeyAriaLabel: "enter",
          navigateText: "to navigate",
          navigateUpKeyAriaLabel: "up arrow",
          navigateDownKeyAriaLabel: "down arrow",
          closeText: "to close",
          closeKeyAriaLabel: "escape"
        }
      }
    };
    const $t = createSearchTranslate(defaultTranslations);
    onMounted(() => {
      window.history.pushState(null, "", null);
    });
    useEventListener("popstate", (event) => {
      event.preventDefault();
      emit("close");
    });
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    onMounted(() => {
      nextTick(() => {
        isLocked.value = true;
        nextTick().then(() => activate());
      });
    });
    onBeforeUnmount(() => {
      isLocked.value = false;
    });
    function formMarkRegex(terms) {
      return new RegExp(
        [...terms].sort((a, b) => b.length - a.length).map((term) => `(${escapeRegExp(term)})`).join("|"),
        "gi"
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        var _a2, _b2, _c, _d;
        _push2(`<div role="button"${ssrRenderAttr("aria-owns", ((_a2 = results.value) == null ? void 0 : _a2.length) ? "localsearch-list" : void 0)} aria-expanded="true" aria-haspopup="listbox" aria-labelledby="localsearch-label" class="VPLocalSearchBox" data-v-bb5b2894><div class="backdrop" data-v-bb5b2894></div><div class="shell" data-v-bb5b2894><form class="search-bar" data-v-bb5b2894><label${ssrRenderAttr("title", buttonText.value)} id="localsearch-label" for="localsearch-input" data-v-bb5b2894><svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" data-v-bb5b2894><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-bb5b2894><circle cx="11" cy="11" r="8" data-v-bb5b2894></circle><path d="m21 21l-4.35-4.35" data-v-bb5b2894></path></g></svg></label><div class="search-actions before" data-v-bb5b2894><button class="back-button"${ssrRenderAttr("title", unref($t)("modal.backButtonTitle"))} data-v-bb5b2894><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7 7l-7-7l7-7" data-v-bb5b2894></path></svg></button></div><input${ssrRenderAttr("value", unref(filterText))}${ssrRenderAttr("placeholder", buttonText.value)} id="localsearch-input" aria-labelledby="localsearch-label" class="search-input" data-v-bb5b2894><div class="search-actions" data-v-bb5b2894>`);
        if (!disableDetailedView.value) {
          _push2(`<button type="button" class="${ssrRenderClass([{ "detailed-list": unref(showDetailedList) }, "toggle-layout-button"])}"${ssrRenderAttr("title", unref($t)("modal.displayDetails"))} data-v-bb5b2894><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 14h7v7H3zM3 3h7v7H3zm11 1h7m-7 5h7m-7 6h7m-7 5h7" data-v-bb5b2894></path></svg></button>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<button class="clear-button" type="reset"${ssrIncludeBooleanAttr(disableReset.value) ? " disabled" : ""}${ssrRenderAttr("title", unref($t)("modal.resetButtonTitle"))} data-v-bb5b2894><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 5H9l-7 7l7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2 4l-6 6m0-6l6 6" data-v-bb5b2894></path></svg></button></div></form><ul${ssrRenderAttr("id", ((_b2 = results.value) == null ? void 0 : _b2.length) ? "localsearch-list" : void 0)}${ssrRenderAttr("role", ((_c = results.value) == null ? void 0 : _c.length) ? "listbox" : void 0)}${ssrRenderAttr("aria-labelledby", ((_d = results.value) == null ? void 0 : _d.length) ? "localsearch-label" : void 0)} class="results" data-v-bb5b2894><!--[-->`);
        ssrRenderList(results.value, (p, index) => {
          _push2(`<li role="option"${ssrRenderAttr("aria-selected", selectedIndex.value === index ? "true" : "false")} data-v-bb5b2894><a${ssrRenderAttr("href", p.id)} class="${ssrRenderClass([{
            selected: selectedIndex.value === index
          }, "result"])}"${ssrRenderAttr("aria-label", [...p.titles, p.title].join(" > "))} data-v-bb5b2894><div data-v-bb5b2894><div class="titles" data-v-bb5b2894><span class="title-icon" data-v-bb5b2894>#</span><!--[-->`);
          ssrRenderList(p.titles, (t, index2) => {
            _push2(`<span class="title" data-v-bb5b2894><span class="text" data-v-bb5b2894>${t}</span><svg width="18" height="18" viewBox="0 0 24 24" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6" data-v-bb5b2894></path></svg></span>`);
          });
          _push2(`<!--]--><span class="title main" data-v-bb5b2894><span class="text" data-v-bb5b2894>${p.title}</span></span></div>`);
          if (unref(showDetailedList)) {
            _push2(`<div class="excerpt-wrapper" data-v-bb5b2894>`);
            if (p.text) {
              _push2(`<div class="excerpt" inert data-v-bb5b2894><div class="vp-doc" data-v-bb5b2894>${p.text}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="excerpt-gradient-bottom" data-v-bb5b2894></div><div class="excerpt-gradient-top" data-v-bb5b2894></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></a></li>`);
        });
        _push2(`<!--]-->`);
        if (unref(filterText) && !results.value.length && enableNoResults.value) {
          _push2(`<li class="no-results" data-v-bb5b2894>${ssrInterpolate(unref($t)("modal.noResultsText"))} &quot;<strong data-v-bb5b2894>${ssrInterpolate(unref(filterText))}</strong>&quot; </li>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</ul><div class="search-keyboard-shortcuts" data-v-bb5b2894><span data-v-bb5b2894><kbd${ssrRenderAttr("aria-label", unref($t)("modal.footer.navigateUpKeyAriaLabel"))} data-v-bb5b2894><svg width="14" height="14" viewBox="0 0 24 24" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m-7 7l7-7l7 7" data-v-bb5b2894></path></svg></kbd><kbd${ssrRenderAttr("aria-label", unref($t)("modal.footer.navigateDownKeyAriaLabel"))} data-v-bb5b2894><svg width="14" height="14" viewBox="0 0 24 24" data-v-bb5b2894><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7 7l-7-7" data-v-bb5b2894></path></svg></kbd> ${ssrInterpolate(unref($t)("modal.footer.navigateText"))}</span><span data-v-bb5b2894><kbd${ssrRenderAttr("aria-label", unref($t)("modal.footer.selectKeyAriaLabel"))} data-v-bb5b2894><svg width="14" height="14" viewBox="0 0 24 24" data-v-bb5b2894><g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-bb5b2894><path d="m9 10l-5 5l5 5" data-v-bb5b2894></path><path d="M20 4v7a4 4 0 0 1-4 4H4" data-v-bb5b2894></path></g></svg></kbd> ${ssrInterpolate(unref($t)("modal.footer.selectText"))}</span><span data-v-bb5b2894><kbd${ssrRenderAttr("aria-label", unref($t)("modal.footer.closeKeyAriaLabel"))} data-v-bb5b2894>esc</kbd> ${ssrInterpolate(unref($t)("modal.footer.closeText"))}</span></div></div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VPLocalSearchBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb5b2894"]]);
export {
  VPLocalSearchBox as default
};
