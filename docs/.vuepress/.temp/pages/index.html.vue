<template><!-- git remote set-url origin https://gitee.com/ele-cat/ele-cat.git -->
<h4 id="本站点使用vuepress2搭建-了解更多请访问官方网站2-x" tabindex="-1"><a class="header-anchor" href="#本站点使用vuepress2搭建-了解更多请访问官方网站2-x" aria-hidden="true">#</a> 本站点使用VuePress2搭建，了解更多请访问<a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官方网站2.x<ExternalLinkIcon/></a></h4>
<details><summary>使用VuePress搭建博客的优势</summary>
<ul>
<li>内置 markdown 扩展，针对技术文档进行了优化</li>
<li>能够利用内嵌在 markdown 文件中的 Vue 代码</li>
<li>以 Vue 驱动的自定义主题系统</li>
<li>PWA 支持</li>
<li>Google Analytics 集成</li>
<li>内置强大插件
<ul>
<li>back-to-top 插件（回到头部）</li>
<li>页面滚动时自动激活侧边栏链接的插件</li>
<li>@vuepress/plugin-blog 博客插件</li>
<li>last-updated 插件</li>
<li>medium-zoom 插件</li>
<li>PWA 插件</li>
<li>Google Analytics 插件</li>
<li>一个基于 nprogress 的进度条插件</li>
<li>register-components plugin for VuePress</li>
<li>基于 Headers 的搜索插件</li>
</ul>
</li>
<li>一个默认主题：
<ul>
<li>响应式布局</li>
<li>可选的主页</li>
<li>简单、开箱即用、基于标题的搜索功能</li>
<li>可定制的导航栏和侧边栏</li>
<li>自动生成的 GitHub 链接和页面编辑链接</li>
</ul>
</li>
</ul>
</details>
<p> </p>
<h4 id="本站点的代码解析使用vuepress2-container插件-官方网站" tabindex="-1"><a class="header-anchor" href="#本站点的代码解析使用vuepress2-container插件-官方网站" aria-hidden="true">#</a> 本站点的代码解析使用VuePress2 Container插件，<a href="https://www.cjsound.cn/vuepress2-plugin/" target="_blank" rel="noopener noreferrer">官方网站<ExternalLinkIcon/></a></h4>
<details><summary>VuePress2 Container效果</summary>
<div style="max-width:500px">
<demo-block componentName="example-button" :options="JSON.parse(decodeURI('%7B%22components%22:%7B%7D,%22componentsDir%22:%22E:/demo/ele-cat/docs/views%22,%22componentsPatterns%22:%5B%22**/*.vue%22%5D%7D'))"
          description="%3Cp%3E%E5%BC%95%E7%94%A8Antd%E7%BB%84%E4%BB%B6%3C%2Fp%3E%0A"
          source="%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EPrimary%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDefault%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edashed%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDashed%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EText%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elink%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ELink%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3Cspan%20class%3D%22token%20selector%22%3E.ant-btn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%2010px%2010px%200%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"
          >
        <p>example/button</p>
</demo-block></div>
</details>
<p> </p>
<h4 id="欢迎体验由我个人开发的云开发工具小程序" tabindex="-1"><a class="header-anchor" href="#欢迎体验由我个人开发的云开发工具小程序" aria-hidden="true">#</a> 欢迎体验由我个人开发的云开发工具小程序</h4>
<div style="max-width:500px">
<p><img src="/images/001.png" alt="个人小程序"></p>
</div>
<p> </p>
<div class="img">
<p><img src="https://img.shields.io/node/v/next" alt="node-current">
<img src="https://img.shields.io/npm/v/n" alt="npm">
<img src="https://img.shields.io/npm/v/vue/next?color=green&amp;label=vue" alt="vue@next"></p>
</div>
<p> </p>
<h3 id="捐赠" tabindex="-1"><a class="header-anchor" href="#捐赠" aria-hidden="true">#</a> 捐赠 <img src="https://img.shields.io/badge/☕-Buy Me A Coffee-%23be4141.svg?style=flat-square&amp;colorB=00A862" alt="捐赠"></h3>
<p>如果你觉得本项目对你有帮助，或者想对我微小的工作表示一点资瓷，你可以请我喝一杯咖啡，感谢! 🙏 🖖</p>
<div class="appreciate">
<p><img src="/images/1651905141755.jpg" alt="微信赞赏码">
<img src="/images/1651905463193.jpg" alt="支付宝收款码"></p>
</div></template>
