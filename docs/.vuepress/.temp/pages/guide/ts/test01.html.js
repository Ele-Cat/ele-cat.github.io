export const data = {
  "key": "v-503d11fc",
  "path": "/guide/ts/test01.html",
  "title": "test01*ts",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题",
      "children": [
        {
          "level": 3,
          "title": "三级标题",
          "slug": "三级标题",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/ts/test01.md"
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
