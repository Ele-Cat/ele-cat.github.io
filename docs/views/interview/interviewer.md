---
layout: doc # 布局
sidebar: false # 侧边栏
aside: false # 侧边栏深度
footer: false # 页脚
prev: false # 上一页
next: false # 下一页
pageClass: interviewer-layout # 自定义页面类名
editLink: false # 编辑链接
---

<div class="iframe-box">
  <iframe src="https://vue3js.cn/interview/vue/vue.html"></iframe>
</div>

<style lang="scss">
.interviewer-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;

  /* 修改 layout 最大宽度 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
  }
  .content-container,
  .content {
    max-width: 100% !important;
    padding-bottom: 20px !important;
  }
  .iframe-box {
    overflow: hidden; 
    iframe {
      width: calc(100% + 20px) !important;
      height: calc(100vh - 140px) !important;
      border: none;
      #ad {
        display: none !important;
      }
    }
  }
}
</style>