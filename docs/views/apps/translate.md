---
layout: doc # 布局
sidebar: false # 侧边栏
outline: 0 # 侧边栏深度
footer: false # 页脚
prev: false # 上一页
next: false # 下一页
pageClass: translate-layout # 自定义页面类名
editLink: false
lastUpdated: false
---

# 翻译

<Translate />

<!-- <Comment /> -->

<script setup>
import Translate from './components/Translate.vue'
</script>

<style lang="scss">
.translate-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;

  /* 修改 layout 最大宽度 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
    .aside {
      display: none;
    }
  }
  .content-container,
  .content {
    max-width: 100% !important;
    padding-bottom: 0;
  }
}
</style>