<template><h1 id="electron-从零开始" tabindex="-1"><a class="header-anchor" href="#electron-从零开始" aria-hidden="true">#</a> Electron 从零开始</h1>
<ul>
<li><a href="https://www.electronjs.org/zh/" target="_blank" rel="noopener noreferrer">Electron 官网地址<ExternalLinkIcon/></a></li>
<li><a href="https://www.electronjs.org/zh/docs/latest/" target="_blank" rel="noopener noreferrer">Electron 文档地址<ExternalLinkIcon/></a></li>
<li><a href="https://gitee.com/ele-cat/electron-quick-start" target="_blank" rel="noopener noreferrer">项目地址<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">参考博客</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_50307964/article/details/128675648" target="_blank" rel="noopener noreferrer">前端使用 electron+vue3+ts 搭建一个桌面端应用且可以热更新<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7187683140713283640" target="_blank" rel="noopener noreferrer">electron+vue3+ts 开发了一个 JSON 工具桌面软件<ExternalLinkIcon/></a></li>
</ul>
</div>
<h2 id="_01-介绍" tabindex="-1"><a class="header-anchor" href="#_01-介绍" aria-hidden="true">#</a> 01. 介绍</h2>
<blockquote>
<p>Electron 是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在 Windows 上运行的跨平台应用 macOS 和 Linux——不需要本地开发经验。</p>
</blockquote>
<h2 id="_02-技术栈" tabindex="-1"><a class="header-anchor" href="#_02-技术栈" aria-hidden="true">#</a> 02. 技术栈</h2>
<ul>
<li><a href="https://www.electronjs.org/zh/" target="_blank" rel="noopener noreferrer">electron<ExternalLinkIcon/></a></li>
<li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue3<ExternalLinkIcon/></a></li>
<li><a href="https://element-plus.gitee.io/zh-CN/guide/installation.html" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a></li>
<li>vue-router</li>
<li>vuex</li>
<li>vuex-persistedstate</li>
</ul>
<h2 id="_03-起步" tabindex="-1"><a class="header-anchor" href="#_03-起步" aria-hidden="true">#</a> 03. 起步</h2>
<blockquote>
<p>对应<a href="https://gitee.com/ele-cat/electron-quick-start" target="_blank" rel="noopener noreferrer">项目<ExternalLinkIcon/></a>的<a href="https://gitee.com/ele-cat/electron-quick-start/tree/master/" target="_blank" rel="noopener noreferrer">master 分支<ExternalLinkIcon/></a>，与 Vue 一致的开发体验</p>
</blockquote>
<h3 id="_3-1-初始化-vue3-项目" tabindex="-1"><a class="header-anchor" href="#_3-1-初始化-vue3-项目" aria-hidden="true">#</a> 3.1 初始化 Vue3 项目</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 全局安装vue-cli</span>
<span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># 创建vue3项目</span>
vue create electron-quick-start
<span class="token comment"># 启动项目</span>
<span class="token function">yarn</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-2-安装-electron" tabindex="-1"><a class="header-anchor" href="#_3-2-安装-electron" aria-hidden="true">#</a> 3.2 安装 Electron</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
vue <span class="token function">add</span> electron-builder
<span class="token comment"># 启动项目</span>
<span class="token function">yarn</span> electron:serve
<span class="token comment"># 解决启动报错，安装</span>
<span class="token function">yarn</span> <span class="token function">add</span> ts-loader@8.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>修改 background.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">installExtension</span><span class="token punctuation">(</span><span class="token constant">VUEJS3_DEVTOOLS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Vue Devtools failed to install:"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-3-配置-vue-config-js" tabindex="-1"><a class="header-anchor" href="#_3-3-配置-vue-config-js" aria-hidden="true">#</a> 3.3 配置 vue.config.js</h3>
<ol>
<li>appId/guid 需保持一致；</li>
<li>include 为热更新配置，不然你在卸载/更新后安装软件安装不上；主要原因注册机的问题。这个文件中有一句代码也是要和 appId 一致的；</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vue/cli-service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 引入插件不使用时不报报错</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">electron</span><span class="token operator">:</span> <span class="token string">'require("electron")'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 第三方插件配置</span>
  <span class="token literal-property property">pluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue-cli-plugin-electron-builder 配置</span>
    <span class="token literal-property property">electronBuilder</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置应用主进程的入口</span>
      <span class="token literal-property property">mainProcessFile</span><span class="token operator">:</span> <span class="token string">"src/background.ts"</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置应用渲染进程的入口</span>
      <span class="token literal-property property">rendererProcessFile</span><span class="token operator">:</span> <span class="token string">"src/main.ts"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customFileProtocol</span><span class="token operator">:</span> <span class="token string">"../"</span><span class="token punctuation">,</span>
      <span class="token comment">// 打包选项</span>
      <span class="token literal-property property">builderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 解决的问题：在安装到电脑后，系统通知无法工作</span>
        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">"com.ecat.vue3"</span><span class="token punctuation">,</span> <span class="token comment">// 软件id</span>
        <span class="token literal-property property">productName</span><span class="token operator">:</span> <span class="token string">"软件名称"</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的名称</span>
        <span class="token comment">// windows系统相关配置</span>
        <span class="token literal-property property">win</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 应用图标路径（Windows 系统中 icon 需要 256 * 256 的 ico 格式图片）</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"./src/assets/logo.png"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">"nsis"</span><span class="token punctuation">,</span>
            <span class="token comment">// 支持 64 位的 Windows 系统</span>
            <span class="token literal-property property">arch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"x64"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">nsis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果为false，想要给电脑所有用户安装必须使用管理员权限</span>
          <span class="token literal-property property">allowElevation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 是否一键安装</span>
          <span class="token literal-property property">oneClick</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// 允许修改安装目录</span>
          <span class="token literal-property property">allowToChangeInstallationDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">guid</span><span class="token operator">:</span> <span class="token string">"com.ecat.vue3"</span><span class="token punctuation">,</span> <span class="token comment">// 软件id</span>
          <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token string">"./installer.nsh"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>根目录创建 <code>installer.nsh</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>!macro customInit

DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\com.ecat.vue3"

!macroend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-4-安装-element-plus" tabindex="-1"><a class="header-anchor" href="#_3-4-安装-element-plus" aria-hidden="true">#</a> 3.4 安装 Element-Plus</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> element-plus --save
<span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>修改 <code>main.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">"element-plus"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">"@element-plus/icons-vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"element-plus/dist/index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-5-开启热更新" tabindex="-1"><a class="header-anchor" href="#_3-5-开启热更新" aria-hidden="true">#</a> 3.5 开启热更新</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> electron-updater
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>新建 <code>JSPatch.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ipcMain <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"electron"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> autoUpdater <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"electron-updater"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

autoUpdater<span class="token punctuation">.</span>autoDownload <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 是否自动更新</span>
autoUpdater<span class="token punctuation">.</span>autoInstallOnAppQuit <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// APP退出的时候自动安装</span>

<span class="token comment">/*
 * 在开启更新监听事件之前设置
 * 一定要保证该地址下面包含lasted.yml文件和需要更新的exe文件
 */</span>
autoUpdater<span class="token punctuation">.</span><span class="token function">setFeedURL</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  provider<span class="token operator">:</span> <span class="token string">"generic"</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">"https://"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>win<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// autoUpdater.setFeedURL({</span>
  <span class="token comment">//   provider: 'generic',</span>
  <span class="token comment">//   url: process.env.VUE_APP_HOT_UPDATE,</span>
  <span class="token comment">// })</span>

  <span class="token comment">// 发送消息给渲染线程</span>
  <span class="token keyword">function</span> <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span>status<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    win<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>status<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  autoUpdater<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"checking-for-update"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span><span class="token string">"Checking for update..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  autoUpdater<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"update-available"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以更新版本</span>
    <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-canUpdate"</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  autoUpdater<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新错误</span>
    <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-error"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 发起更新程序</span>
  ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-toDownload"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    autoUpdater<span class="token punctuation">.</span><span class="token function">downloadUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  autoUpdater<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"download-progress"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>progressObj<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 正在下载的下载进度</span>
    <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-progress"</span><span class="token punctuation">,</span> progressObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  autoUpdater<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"update-downloaded"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 下载完成</span>
    <span class="token function">sendStatusToWindow</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-downloaded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 退出程序</span>
  ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"exit-app"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    autoUpdater<span class="token punctuation">.</span><span class="token function">quitAndInstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 重新检查是否有新版本更新</span>
  ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"monitor-update-system"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    autoUpdater<span class="token punctuation">.</span><span class="token function">checkForUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 检测是否有更新</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    autoUpdater<span class="token punctuation">.</span><span class="token function">checkForUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>检查更新组件 <code>jspatch.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jspatch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JSON工具更新中......<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showUpdater<span class="token punctuation">"</span></span>
      <span class="token attr-name">:close-on-click-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token attr-name">:close-on-press-escape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:show-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40%<span class="token punctuation">"</span></span>
      <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>26vh<span class="token punctuation">"</span></span>
      <span class="token attr-name">center</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>downloadProcess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
          {{
            `当前：【${downloadProcess.transferred}】 / 共【${downloadProcess.total}】`
          }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-progress</span>
          <span class="token attr-name">:text-inside</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
          <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18<span class="token punctuation">"</span></span>
          <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
          <span class="token attr-name">:percentage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>downloadProcess.percent<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-progress</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>正在下载({{ downloadProcess.speed }})......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ipcRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"electron"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-plus"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jspatch"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">emit</span><span class="token operator">:</span> any <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">showUpdater</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">downloadProcess</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">transferred</span><span class="token operator">:</span> <span class="token string">"1kb"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token string">"2M"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 发现新版本 once</span>
    ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-canUpdate"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">/*
       * 这儿会监听，如果info.version比现在版本小；就会触发；反之，不会触发
       */</span>
      ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">发现有新版本【v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">】，是否更新?</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token string">"提示"</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">"确定"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">closeOnClickModal</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-toDownload"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 下载进度</span>
    ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-progress"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> process</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>transferred <span class="token operator">>=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>transferred <span class="token operator">=</span>
          <span class="token punctuation">(</span>process<span class="token punctuation">.</span>transferred <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"M"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>transferred <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>transferred <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"K"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>total <span class="token operator">>=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>total <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"M"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>total <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"K"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>bytesPerSecond <span class="token operator">>=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>speed <span class="token operator">=</span>
          <span class="token punctuation">(</span>process<span class="token punctuation">.</span>bytesPerSecond <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"M/s"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>bytesPerSecond <span class="token operator">>=</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>bytesPerSecond <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"K/s"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span>speed <span class="token operator">=</span> process<span class="token punctuation">.</span>bytesPerSecond <span class="token operator">+</span> <span class="token string">"B/s"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      process<span class="token punctuation">.</span>percent <span class="token operator">=</span> process<span class="token punctuation">.</span>percent<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>downloadProcess <span class="token operator">=</span> process<span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>showUpdater <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 下载更新失败</span>
    ipcRenderer<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-error"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"更新失败！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>showUpdater <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 下载完成</span>
    ipcRenderer<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">"autoUpdater-downloaded"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>showUpdater <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">更新完成，是否关闭应用程序安装新版本?</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">"提示"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">"确定"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">closeOnClickModal</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"exit-app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.jspatch</span> <span class="token punctuation">{</span>
  <span class="token selector">/deep/ .el-dialog__header</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>

    <span class="token selector">.el-dialog__title</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #00adb5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br></div></div><p>修改 <code>vue.config.js</code>，builderOptions 对象中添加</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">publish</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">"generic"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https:'</span><span class="token punctuation">,</span> <span class="token comment">// 打包文件地址,与以上链接需相同</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_04-项目渐进式" tabindex="-1"><a class="header-anchor" href="#_04-项目渐进式" aria-hidden="true">#</a> 04. 项目渐进式</h2>
<blockquote>
<p>对应<a href="https://gitee.com/ele-cat/electron-quick-start" target="_blank" rel="noopener noreferrer">项目<ExternalLinkIcon/></a>的<a href="https://gitee.com/ele-cat/electron-quick-start/tree/master/" target="_blank" rel="noopener noreferrer">master 分支<ExternalLinkIcon/></a>，与 Vue 一致的开发体验</p>
</blockquote>
<h3 id="_4-1-vuex-以及数据持久化" tabindex="-1"><a class="header-anchor" href="#_4-1-vuex-以及数据持久化" aria-hidden="true">#</a> 4.1 Vuex 以及数据持久化</h3>
<ol>
<li>Vuex 安装</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>创建 <code>src\store\index.ts</code></li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">countGetter</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">"【getters】"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">+=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"increment"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  modules<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="3">
<li>在 <code>main.ts</code> 中引入</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4">
<li>测试使用</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ count }}/ {{ store.getters.countGetter }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleAdd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>添加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Vuex"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"increment"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      store<span class="token punctuation">,</span>
      handleAdd<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这个时候刷新页面，数据就没了，需要引入数据持久化功能</p>
</div>
<ol start="5">
<li>数据持久化</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> i vuex-persistedstate --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createPersistedstate <span class="token keyword">from</span> <span class="token string">"vuex-persistedstate"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">countGetter</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">"【getters】"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">+=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"increment"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  modules<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createPersistedstate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token operator">:</span> <span class="token string">"system"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="_4-2-主题切换、暗黑模式" tabindex="-1"><a class="header-anchor" href="#_4-2-主题切换、暗黑模式" aria-hidden="true">#</a> 4.2 主题切换、暗黑模式</h3>
<ol>
<li>书接上题，已经做好全局状态管理以及数据持久化，那就可以开始扩展其他功能</li>
<li>移除默认 frame，<code>background.ts</code> 中，设定 <code>frame: false</code>，electron 的默认顶部菜单就消失了</li>
<li>添加 layout 样式，<code>src\layout\index.vue</code> <code>src\layout\common\header.vue</code> <code>src\layout\common\sidebar.vue</code>，并添加基础路由，这时候页面框架就出来了</li>
<li>添加全局设定 <code>settings.vue</code> 组件，表单修改时，将数据保存至 Vuex 中，具体代码参考：<a href="https://gitee.com/ele-cat/electron-quick-start/blob/master/src/components/Settings.vue" target="_blank" rel="noopener noreferrer">Settings.vue<ExternalLinkIcon/></a></li>
<li>同时配置 styles 相关样式，整体系统就支持主题切换、暗黑模式了</li>
</ol>
<h3 id="_4-3-ipcrenderer事件总线" tabindex="-1"><a class="header-anchor" href="#_4-3-ipcrenderer事件总线" aria-hidden="true">#</a> 4.3 ipcRenderer事件总线</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ipcRenderer<span class="token punctuation">,</span> ipcMain <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"electron"</span><span class="token punctuation">;</span>
<span class="token comment">// 发送</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Fn"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取</span>
ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"Fn"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

win<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Fn'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"Fn"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-4-其它渐进式【待补充】" tabindex="-1"><a class="header-anchor" href="#_4-4-其它渐进式【待补充】" aria-hidden="true">#</a> 4.4 其它渐进式【待补充】</h3>
<h2 id="_05-electron-的-api" tabindex="-1"><a class="header-anchor" href="#_05-electron-的-api" aria-hidden="true">#</a> 05. Electron 的 API</h2>
<blockquote>
<p>学习一个框架最主要的就是看<a href="https://www.electronjs.org/zh/docs/latest/api/app" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>，对应<a href="https://gitee.com/ele-cat/electron-quick-start" target="_blank" rel="noopener noreferrer">项目<ExternalLinkIcon/></a>的<a href="https://gitee.com/ele-cat/electron-quick-start/tree/feat-api/" target="_blank" rel="noopener noreferrer">feat-api 分支<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="_5-1-app" tabindex="-1"><a class="header-anchor" href="#_5-1-app" aria-hidden="true">#</a> 5.1 app</h3>
<h2 id="_06-应用开发" tabindex="-1"><a class="header-anchor" href="#_06-应用开发" aria-hidden="true">#</a> 06. 应用开发</h2>
<h3 id="_6-1-即时提醒" tabindex="-1"><a class="header-anchor" href="#_6-1-即时提醒" aria-hidden="true">#</a> 6.1 即时提醒</h3>
<ol>
<li><a href="https://gitee.com/ele-cat/electron-quick-start/tree/feat-remind/" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></li>
</ol>
</template>
