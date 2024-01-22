export const data = {
  "key": "v-0825ddd0",
  "path": "/guide/vue/test02.html",
  "title": "test02",
  "lang": "zh-CN",
  "frontmatter": {
    "navBar": "false,"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/vue/test02.md"
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
