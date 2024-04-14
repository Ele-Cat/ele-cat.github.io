---
layout: page # 布局
navbar: false
sidebar: false # 侧边栏
outline: 0 # 侧边栏深度
footer: false # 页脚
prev: false # 上一页
next: false # 下一页
pageClass: girls-layout # 自定义页面类名
editLink: false
lastUpdated: false
---

<Girls />

<!-- <Comment /> -->

<script setup>
import Girls from './components/Girls.vue'
</script>

<style lang="scss">
.girls-layout {
  .VPContent {
    padding-top: 0;
    margin: 0;
    .VPHome {
      padding-bottom: 0 !important;
    }
  }
}
</style>