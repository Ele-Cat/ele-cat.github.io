---
layout: doc # 布局
sidebar: false # 侧边栏
outline: [2, 3, 4] # 侧边栏深度
footer: false # 页脚
prev: false # 上一页
next: false # 下一页
pageClass: nav-layout # 自定义页面类名
---

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

::: info 轻提示
本页面参考 [基于 VitePress 的个人前端导航页面模板](https://github.com/maomao1996/vitepress-nav-template) 开发
:::

<Comment />

<script setup>
import { NAV_DATA } from './data.js'
</script>

<style src="./index.scss"></style>