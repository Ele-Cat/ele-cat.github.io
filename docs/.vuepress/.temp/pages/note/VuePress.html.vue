<template><h1 id="使用vuepress2搭建博客" tabindex="-1"><a class="header-anchor" href="#使用vuepress2搭建博客" aria-hidden="true">#</a> 使用VuePress2搭建博客</h1>
<h2 id="一、项目初始化安装" tabindex="-1"><a class="header-anchor" href="#一、项目初始化安装" aria-hidden="true">#</a> 一、项目初始化安装</h2>
<h3 id="_01-创建一个空目录" tabindex="-1"><a class="header-anchor" href="#_01-创建一个空目录" aria-hidden="true">#</a> 01-创建一个空目录</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> blog
<span class="token builtin class-name">cd</span> blog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_02-初始化项目" tabindex="-1"><a class="header-anchor" href="#_02-初始化项目" aria-hidden="true">#</a> 02-初始化项目</h3>
<CodeGroup>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="_03-安装vuepress依赖" tabindex="-1"><a class="header-anchor" href="#_03-安装vuepress依赖" aria-hidden="true">#</a> 03-安装VuePress依赖</h3>
<CodeGroup>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="_04-添加脚本" tabindex="-1"><a class="header-anchor" href="#_04-添加脚本" aria-hidden="true">#</a> 04-添加脚本</h3>
<p>在根目录的<code>package.json</code>中添加脚本</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"vuepress"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta.39"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_05-添加git忽略" tabindex="-1"><a class="header-anchor" href="#_05-添加git忽略" aria-hidden="true">#</a> 05-添加git忽略</h3>
<p>在根目录创建<code>.gitignore</code>文件，并录入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node_modules
.temp
.cache
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_06-创建第一篇博客" tabindex="-1"><a class="header-anchor" href="#_06-创建第一篇博客" aria-hidden="true">#</a> 06-创建第一篇博客</h3>
<p>创建<code>docs</code>目录，并在其下创建<code>README.md</code>文件，录入</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Hello VuePress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时的项目结构</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Blog
├── .vuepress
│
├── docs
│   └── README.md
│   
├── node_modules
│      
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_07-启动服务" tabindex="-1"><a class="header-anchor" href="#_07-启动服务" aria-hidden="true">#</a> 07-启动服务</h3>
<CodeGroup>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="_08-访问" tabindex="-1"><a class="header-anchor" href="#_08-访问" aria-hidden="true">#</a> 08-访问</h3>
<p>这个时候，在浏览器地址栏输入<a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a>就可以查看到刚刚录入的博文了。当我们修改<code>docs/README.md</code>中内容时，浏览器也会同步热更新。</p>
<h3 id="_09-部署" tabindex="-1"><a class="header-anchor" href="#_09-部署" aria-hidden="true">#</a> 09-部署</h3>
<CodeGroup>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>这时候，在<code>.vuepress</code>目录下就会生成一个<code>dist</code>目录（与vue一致），把它放在服务器中即可。当然可以把整个项目推送至<a href="https://github.com" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a>或<a href="https://gitee.com" target="_blank" rel="noopener noreferrer">gitee<ExternalLinkIcon/></a>做为<a href="https://gitee.com/help/articles/4136" target="_blank" rel="noopener noreferrer">Single Page<ExternalLinkIcon/></a>，更多的部署请详情参考<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">官方网站<ExternalLinkIcon/></a>.</p>
<h2 id="二、项目配置" tabindex="-1"><a class="header-anchor" href="#二、项目配置" aria-hidden="true">#</a> 二、项目配置</h2>
<h3 id="_01-配置config-ts" tabindex="-1"><a class="header-anchor" href="#_01-配置config-ts" aria-hidden="true">#</a> 01-配置<code>config.ts</code></h3>
<p>在<code>.vuepress</code>文件夹下创建<code>config.ts</code>文件，vuepress2中推荐使用<strong>TypeScript</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'我的博客'</span><span class="token punctuation">,</span> <span class="token comment">// 设置网站标题</span>
  description<span class="token operator">:</span> <span class="token string">'描述：我的博客'</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token comment">//默认路径</span>
  theme<span class="token operator">:</span> <span class="token string">"@vuepress/default"</span><span class="token punctuation">,</span> <span class="token comment">// 默认主题</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 主题设置</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token comment">// 右上导航航条 docs/.vuepress/README.md</span>
        text<span class="token operator">:</span> <span class="token string">'主页'</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">'/'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">'学习笔记'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>text<span class="token operator">:</span><span class="token string">'笔记'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/guide/note/test01.md'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 可不写后缀 .md</span>
          <span class="token punctuation">{</span>text<span class="token operator">:</span><span class="token string">'其它链接'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'https://www.baidu.com/'</span><span class="token punctuation">}</span><span class="token comment">// 外部链接</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">'技术分享'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>text<span class="token operator">:</span><span class="token string">'笔记'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/guide/share/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 以 ‘/’结束，默认读取 README.md</span>
          <span class="token punctuation">{</span>text<span class="token operator">:</span><span class="token string">'其它链接'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'https://www.baidu.com/'</span><span class="token punctuation">}</span> <span class="token comment">// 外部链接</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//左侧列表</span>
      <span class="token string-property property">'/guide/note/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token comment">// 对应导航中的link文件夹路径，注意这里是 ‘/’结束</span>
          text<span class="token operator">:</span> <span class="token string">'学习笔记'</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'/guide/note/test01.md'</span><span class="token punctuation">,</span>
            <span class="token string">'/guide/note/test02.md'</span><span class="token punctuation">,</span>
            <span class="token string">'/guide/note/test03.md'</span> 
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/guide/ts/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">'技术分享'</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'/guide/share/test01.md'</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// fallback 侧边栏被最后定义</span>
      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//不能放在数组第一个，否则会导致右侧栏无法使用 </span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><ul>
<li>在<code>themeConfig</code>外部的配置项属于<strong>站点配置</strong>，而在<code>themeConfig</code>内部的配置项则属于<strong>主题配置</strong>。</li>
<li>这时候启动项目，就可以查看到顶部标题、右上角的导航和左侧侧边栏效果了。这里<em>link</em>、<em>children</em>里的地址就是从项目<code>docs</code>目录起的<strong>路径+文件</strong>地址。</li>
</ul>
<h3 id="_02-修改启动ip-端口" tabindex="-1"><a class="header-anchor" href="#_02-修改启动ip-端口" aria-hidden="true">#</a> 02-修改启动ip+端口</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span> <span class="token comment">// ip</span>
  port<span class="token operator">:</span> <span class="token string">'9527'</span><span class="token punctuation">,</span> <span class="token comment">//端口号</span>
  title<span class="token operator">:</span> <span class="token string">'我的博客'</span><span class="token punctuation">,</span> <span class="token comment">// 设置网站标题</span>
  description<span class="token operator">:</span> <span class="token string">'描述：我的博客'</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_03-配置ico-logo" tabindex="-1"><a class="header-anchor" href="#_03-配置ico-logo" aria-hidden="true">#</a> 03-配置ico+logo</h3>
<p>资源一般都存放在<code>docs/.vuepress/public</code>目录下，<code>public</code>需要自己创建。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span> <span class="token comment">// ip</span>
  port<span class="token operator">:</span> <span class="token string">'9527'</span><span class="token punctuation">,</span> <span class="token comment">//端口号</span>
  title<span class="token operator">:</span> <span class="token string">'我的博客'</span><span class="token punctuation">,</span> <span class="token comment">// 设置网站标题</span>
  description<span class="token operator">:</span> <span class="token string">'描述：我的博客'</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token comment">//默认路径</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 设置 favor.ico，docs/.vuepress/public 下</span>
    <span class="token punctuation">[</span>
      <span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'/images/logo.png'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 主题设置</span>
    logo<span class="token operator">:</span> <span class="token string">'/images/logo.png'</span><span class="token punctuation">,</span><span class="token comment">// 注意图片放在 public 文件夹下</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_04-样式覆盖" tabindex="-1"><a class="header-anchor" href="#_04-样式覆盖" aria-hidden="true">#</a> 04-样式覆盖</h3>
<ul>
<li>可以看到<a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>的主题色为<span style="color:#3eaf7c;"><strong>#3eaf7c</strong></span>，而我的博客主题色为<span style="color:#1890ff;"><strong>#1890ff</strong></span>。这里可以参考官网的<a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html" target="_blank" rel="noopener noreferrer">样式覆盖指南<ExternalLinkIcon/></a>。</li>
<li>简单来说，就是在<code>.vuepress</code>目录下创建<code>styles</code>目录，vuepress2是默认支持sass语法的。我们可以在<code>styles</code>目录下创建<code>palette.scss</code> <code>index.scss</code>来达成样式覆盖。</li>
<li>比如此时，我们在index.scss文件中写入</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #40a9ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>此时的站点主题色就变为了<span style="color:#1890ff;"><strong>ant-design-vue主题蓝</strong></span>。</p>
<ul>
<li>比如在<code>palette.scss</code>文件中写入</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// 滚动条样式</span>
<span class="token comment">/* 设置滚动条的样式 */</span>
<span class="token selector">::-webkit-scrollbar </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 外层轨道 */</span>
<span class="token selector">::-webkit-scrollbar-track </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.03<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条滑块 */</span>
<span class="token selector">::-webkit-scrollbar-thumb </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 5px #314659<span class="token punctuation">;</span>
  <span class="token comment">// background: rgba(0, 0, 0, 0.06);</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #314659<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>就可以实现与我的博客同样的滚动条</p>
<ul>
<li>当然我们也可以修改<code>config.ts</code>文件的head属性，来实现在html头部引入stylesheet，<a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#head" target="_blank" rel="noopener noreferrer">参考官网<ExternalLinkIcon/></a>。</li>
<li>还有，审查站点元素后，通过在<code>palette.scss</code>中进行样式修改，也可以实现对站点样式的覆盖（注意优先级）。</li>
</ul>
<h2 id="三、插件使用" tabindex="-1"><a class="header-anchor" href="#三、插件使用" aria-hidden="true">#</a> 三、插件使用</h2>
<h3 id="_01-使用vue组件" tabindex="-1"><a class="header-anchor" href="#_01-使用vue组件" aria-hidden="true">#</a> 01-使用vue组件</h3>
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>VuePress2.x不会再将<code>.vuepress/components</code>目录下的vue文件自动注册为Vue组件，<a href="https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-components" target="_blank" rel="noopener noreferrer">点击查看<ExternalLinkIcon/></a>。</p>
</div>
<ol>
<li>因此需要手动安装<code>@vuepress/plugin-register-components</code>依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-register-components@2.0.0-beta.23
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>新建文件<code>docs/.vuepress/components/TestComponent.vue</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>{{tip}}-{{is}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      测试组件-{{is}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tooltip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">is</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tip <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'我支持Vue@next'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> is <span class="token operator">=</span> props<span class="token punctuation">.</span>is
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      tip<span class="token punctuation">,</span>
      is
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这里我使用到了<code>ant-design-vue</code>的tooltip组件（后续会在杂项中演示），同时可以看到<code>VuePress</code>支持<strong>Vue@next</strong>语法</p>
</div>
<ol start="3">
<li>对<code>docs/.vuepress/config.ts</code>配置</li>
</ol>
<ul>
<li>单个组件配置</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-register-components'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          MyExample<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components/TestComponent.vue'</span><span class="token punctuation">)</span>                    
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>多组件配置，就是把<code>docs/.vuepress/components</code>目录下的所有vue文件都配置为全局组件（<strong>推荐</strong>）</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-register-components'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        componentsDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="4">
<li>使用时，直接在<code>*.md</code>文件中插入组件即可</li>
</ol>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TestComponent</span> <span class="token punctuation">/></span></span>
或
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>test-component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><TestComponent />
<hr>
<test-component :is="1" />
<hr>
<wheather />
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>在插入自定义Vue组件后，可能会报找不到组件的warning <code>Failed to resolve component</code>，（重启试试😂<code>:joy:</code>）<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji<ExternalLinkIcon/></a></p>
</div>
<h3 id="_02-使用search插件" tabindex="-1"><a class="header-anchor" href="#_02-使用search插件" aria-hidden="true">#</a> 02-使用search插件</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在之前的VuePress版本中，search插件是自带的功能，新版本中需要自行配置。</p>
</div>
<p>这里官方给出了两套解决办法：</p>
<ol>
<li><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">search参考地址<ExternalLinkIcon/></a></li>
<li><a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#locales" target="_blank" rel="noopener noreferrer">docsearch参考地址<ExternalLinkIcon/></a></li>
</ol>
<h3 id="_03-其它官方插件" tabindex="-1"><a class="header-anchor" href="#_03-其它官方插件" aria-hidden="true">#</a> 03-其它官方插件</h3>
<p>其它官方插件，可参考<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a>，可以查看其安装、配置方式。</p>
<h3 id="_04-自定义插件" tabindex="-1"><a class="header-anchor" href="#_04-自定义插件" aria-hidden="true">#</a> 04-自定义插件</h3>
<p>当然，官方也给出了自定义插件的开发方式，<a href="https://v2.vuepress.vuejs.org/zh/advanced/plugin.html" target="_blank" rel="noopener noreferrer">Jump<ExternalLinkIcon/></a>，本系统中的代码演示功能就用到了<a href="https://www.cjsound.cn/vuepress2-plugin/" target="_blank" rel="noopener noreferrer">VuePress2 Container插件<ExternalLinkIcon/></a>。</p>
<h2 id="四、杂项" tabindex="-1"><a class="header-anchor" href="#四、杂项" aria-hidden="true">#</a> 四、杂项</h2>
<h3 id="_01-引入第三方组件库" tabindex="-1"><a class="header-anchor" href="#_01-引入第三方组件库" aria-hidden="true">#</a> 01-引入第三方组件库</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>既然是Vue编写的项目，当然可以用包管理工具来安装第三方组件喽，这里以<code>ant-design-vue</code>为例（默认安装ant-design-vue@3.x版本）</p>
</div>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -S ant-design-vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>引入<code>ant-design-vue</code></li>
</ol>
<p><s>这时候就有人会问了，没有main.js(ts)，我引个毛哦，不要慌。</s></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在VuePress@1.x版本中，可以在<code>.vuepress</code>文件夹下创建<code>enhanceApp.js</code>来实现类main.js{ts}的效果，但是在2.x版本中，约定文件有<a href="https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-enhanceapp-js" target="_blank" rel="noopener noreferrer">变更<ExternalLinkIcon/></a></p>
</div>
<p>在<code>.vuepress</code>目录下创建<code>clientAppEnhance.ts</code>文件，<s>（为什么不用js就不赘述了）</s></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/dist/antd.css'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>其中的<code>defineClientAppEnhance</code>方法解构出了个<code>app</code>，就是Vue的<code>app</code>，当然也可以用它来注册全局组件。</p>
<p>当然，它还包含其它参数，<code>router</code> <code>siteData</code>，具体<a href="https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-app-enhance.html#client-app-enhance-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a>。</p>
<p>这时，就可以在<code>*.md</code> <code>*.vue</code>文件中直接使用<code>ant-design-vue</code>组件了。</p>
<a-row :gutter="20" style="margin-top:20px">
  <a-col :span="12">
    <a-card title="a-card">
      <template #extra><a>more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </a-col>
  <a-col :span="12">
    a-skeleton
    <a-skeleton />
  </a-col>
</a-row>
<demo-block componentName="example-button" :options="JSON.parse(decodeURI('%7B%22components%22:%7B%7D,%22componentsDir%22:%22E:/demo/ele-cat/docs/views%22,%22componentsPatterns%22:%5B%22**/*.vue%22%5D%7D'))"
          description="%3Cp%3E%E5%BC%95%E7%94%A8Antd%E7%BB%84%E4%BB%B6%3C%2Fp%3E%0A"
          source="%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EPrimary%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDefault%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edashed%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDashed%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EText%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elink%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ELink%20Button%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3Cspan%20class%3D%22token%20selector%22%3E.ant-btn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%2010px%2010px%200%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"
          >
        <p>example/button</p>
</demo-block><h3 id="_02-引入iframe" tabindex="-1"><a class="header-anchor" href="#_02-引入iframe" aria-hidden="true">#</a> 02-引入iframe</h3>
<p>VuePress支持直接在<code>.md</code>文件中引入iframe标签</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iframe<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width:100%;height:500px<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>0</span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.bilibili.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="iframe-box">
  <iframe id="iframe" style="height:500px" src="https://www.bilibili.com/"></iframe>
</div>
<h3 id="_03-frontmatter" tabindex="-1"><a class="header-anchor" href="#_03-frontmatter" aria-hidden="true">#</a> 03-Frontmatter</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>大家可以看到，我的<RouterLink to="/">首页</RouterLink>是没有左侧侧边栏的，这是怎么做到的呢？自己先看<a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#frontmatter" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
</div>
<h3 id="_04-想到再补充" tabindex="-1"><a class="header-anchor" href="#_04-想到再补充" aria-hidden="true">#</a> 04-想到再补充</h3>
</template>
