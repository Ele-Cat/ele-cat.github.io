export const data = {
  "key": "v-0b8f8f0e",
  "path": "/guide/vue/test04.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": false,
    "pageClass": "full-width"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/vue/test04.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
