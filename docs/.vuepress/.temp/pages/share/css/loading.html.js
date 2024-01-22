export const data = {
  "key": "v-cdf23fdc",
  "path": "/share/css/loading.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Loading",
      "slug": "loading",
      "children": [
        {
          "level": 3,
          "title": "Epic Spinners",
          "slug": "epic-spinners",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "share/css/loading.md"
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
