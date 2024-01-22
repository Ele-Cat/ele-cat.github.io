<template><h1 id="微信对话生成器-👋" tabindex="-1"><a class="header-anchor" href="#微信对话生成器-👋" aria-hidden="true">#</a> 微信对话生成器 👋</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p>本程序是一款聊天记录制作工具，可以模拟微信聊天，可以管理不同用户角色进行对话，同时支持发送文字、图片、语音、红包、转账等类型信息。可以将聊天内容一键生成为图片、长图、动图和视频。【<a href="https://ele-cat.gitee.io/vue3-wechat-tool/" target="_blank" rel="noopener noreferrer">在线使用地址<ExternalLinkIcon/></a>】</p>
</blockquote>
<p><strong>注意：用户在使用本程序时所填写的文本、图片以及保存的图片均只会保存在用户本地！</strong></p>
<h2 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h2>
<h3 id="👉b-站视频教程" tabindex="-1"><a class="header-anchor" href="#👉b-站视频教程" aria-hidden="true">#</a> 👉<a href='https://www.bilibili.com/video/BV1Q84y1S7iA/?share_source=copy_web&vd_source=a365c12124cceb4ffcbdc878f6f2ef60' target="_blank">B 站视频教程</a></h3>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<ul>
<li>工具中的操作均会缓存在本地浏览器，刷新不会失效</li>
<li>切换浏览器访问时，数据不会同步，需要使用模板导入导出功能</li>
</ul>
</div>
<h3 id="_1-外观设置" tabindex="-1"><a class="header-anchor" href="#_1-外观设置" aria-hidden="true">#</a> 1. 外观设置</h3>
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do1nam.gif" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do1nam.gif" alt="外观设置效果预览"><ExternalLinkIcon/></a></p>
<p align=center>外观设置效果预览</p>
<br />
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do1tqh.gif" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do1tqh.gif" alt="上传背景并截图"><ExternalLinkIcon/></a></p>
<p align=center>上传背景并截图</p>
<h3 id="_2-对话设置" tabindex="-1"><a class="header-anchor" href="#_2-对话设置" aria-hidden="true">#</a> 2. 对话设置</h3>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<ul>
<li>对话设置中的发送者需要在顶部<strong>选择发送用户</strong>处选择</li>
<li>对话与用户是解耦的，选择其它用户只会切换用户信息</li>
</ul>
</div>
<h4 id="_2-1-用户管理" tabindex="-1"><a class="header-anchor" href="#_2-1-用户管理" aria-hidden="true">#</a> 2.1 用户管理</h4>
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do0fk3.jpg" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do0fk3.jpg" alt="用户管理"><ExternalLinkIcon/></a></p>
<ol>
<li>点击<strong>用户管理</strong>弹出用户管理界面</li>
<li>点击<strong>新增用户</strong>新增一条用户信息</li>
<li>点击<strong>用户头像</strong>可以重新上传裁剪</li>
<li>录入用户昵称</li>
<li>点击<strong>选择</strong>切换对方信息</li>
<li>点击<strong>删除</strong>可以移除该条用户信息</li>
</ol>
<h4 id="_2-2-发送对话" tabindex="-1"><a class="header-anchor" href="#_2-2-发送对话" aria-hidden="true">#</a> 2.2 发送对话</h4>
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do0zwt.gif" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do0zwt.gif" alt="发送对话"><ExternalLinkIcon/></a></p>
<p align=center>发送对话</p>
<h4 id="_2-3-手机界面操作" tabindex="-1"><a class="header-anchor" href="#_2-3-手机界面操作" aria-hidden="true">#</a> 2.3 手机界面操作</h4>
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do1g2t.gif" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do1g2t.gif" alt="右键菜单"><ExternalLinkIcon/></a></p>
<h4 id="_2-4-工具栏" tabindex="-1"><a class="header-anchor" href="#_2-4-工具栏" aria-hidden="true">#</a> 2.4 工具栏</h4>
<ul>
<li>重置外观：点击后可重置手机外观样式</li>
<li>清空对话：点击后清空当前对话记录</li>
<li>存为模板：在填写完模板标题后，可在<strong>模板管理</strong>中查看、应用</li>
<li>导出聊天：导出聊天为 JSON 文件</li>
<li>导入聊天：导入 JSON 文件为聊天，本操作会覆盖当前对话</li>
<li>生成图片：滚动到哪截到哪</li>
<li>生成长图：截取全部对话信息</li>
<li>配置：生成动图、视频配置</li>
<li>生成动图：生成动图</li>
<li>生成视频：当前方案为生成图片序列 zip 包，用户自行通过视频剪辑软件剪辑</li>
</ul>
<h3 id="_3-模板管理" tabindex="-1"><a class="header-anchor" href="#_3-模板管理" aria-hidden="true">#</a> 3. 模板管理</h3>
<p><a href="https://23img.com/l/?i=/i/2023/09/27/do1f30.jpg" target="_blank" rel="noopener noreferrer"><img src="https://23img.com/i/2023/09/27/do1f30.jpg" alt="模板管理"><ExternalLinkIcon/></a></p>
<ol>
<li><strong>预览</strong>模板截图</li>
<li><strong>应用</strong>当前模板到对话【注意会覆盖右侧的对话，请提前保存】</li>
<li><strong>删除</strong>所选模板</li>
</ol>
<h3 id="_4-使用说明" tabindex="-1"><a class="header-anchor" href="#_4-使用说明" aria-hidden="true">#</a> 4. 使用说明</h3>
<p><strong><em>使用前请详细阅读使用说明</em></strong></p>
<h2 id="开发教程" tabindex="-1"><a class="header-anchor" href="#开发教程" aria-hidden="true">#</a> 开发教程</h2>
<h3 id="_01-技术栈-插件" tabindex="-1"><a class="header-anchor" href="#_01-技术栈-插件" aria-hidden="true">#</a> 01. 技术栈/插件</h3>
<table>
<thead>
<tr>
<th style="text-align:right">技术栈/插件</th>
<th style="text-align:left">注释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">Vite4</td>
<td style="text-align:left">构建工具</td>
</tr>
<tr>
<td style="text-align:right">Vue3</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:right">Ant Design Vue</td>
<td style="text-align:left">组件库</td>
</tr>
<tr>
<td style="text-align:right">pinia</td>
<td style="text-align:left">状态管理</td>
</tr>
<tr>
<td style="text-align:right">pinia-plugin-persist</td>
<td style="text-align:left">数据持久化</td>
</tr>
<tr>
<td style="text-align:right">Less</td>
<td style="text-align:left">Css 预处理</td>
</tr>
<tr>
<td style="text-align:right">html2canvas</td>
<td style="text-align:left">Dom 转化为 Canvas、Blob</td>
</tr>
<tr>
<td style="text-align:right">file-saver</td>
<td style="text-align:left">文件存储到本地</td>
</tr>
<tr>
<td style="text-align:right">gif.js</td>
<td style="text-align:left">生成 Gif</td>
</tr>
<tr>
<td style="text-align:right">mitt</td>
<td style="text-align:left">消息分发</td>
</tr>
<tr>
<td style="text-align:right">jszip</td>
<td style="text-align:left">生成 Zip</td>
</tr>
<tr>
<td style="text-align:right">vue-advanced-cropper</td>
<td style="text-align:left">图像裁剪</td>
</tr>
<tr>
<td style="text-align:right">vue3-perfect-scrollbar</td>
<td style="text-align:left">优雅的滚动条</td>
</tr>
</tbody>
</table>
<h3 id="_02-下载-安装-运行" tabindex="-1"><a class="header-anchor" href="#_02-下载-安装-运行" aria-hidden="true">#</a> 02. 下载&amp;安装&amp;运行</h3>
<ul>
<li>
<h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://gitee.com/ele-cat/vue3-wechat-tool.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<h4 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<h4 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h4>
<p>打包前请注意将<code>.env.production</code>的<code>VITE_BASE_PATH</code>修改为<code>/</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="_03-关键技术点解析" tabindex="-1"><a class="header-anchor" href="#_03-关键技术点解析" aria-hidden="true">#</a> 03. 关键技术点解析</h3>
<ol>
<li>
<p>异步组件</p>
<ul>
<li>在加载手机窗口主体以及表情包组件时，由于相关代码加载静态文件，导致加载首页较慢，故引入异步组件。<code>src\App.vue</code>中示例：</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WtContent</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-spin</span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>加载中...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-spin</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token comment">// import WtContent from "@/components/WtContent.vue"</span>
<span class="token keyword">const</span> WtContent <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/components/WtContent.vue"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>
<li>
<p>右键菜单</p>
<ul>
<li>为方便用户操作，在聊天内容中添加右键菜单的弹出</li>
<li>首先添加右键菜单组件<code>src\components\common\ContextMenu.vue</code></li>
<li>在<code>src\store\modules\contextMenu.js</code>中定义<code>pinia</code></li>
<li>在<code>src\components\phone\PhoneBody.vue</code>中监听<code>contextmenu</code>事件，并在相应位置展示相应的菜单</li>
</ul>
</li>
<li>
<p>表情包</p>
<ul>
<li>表情包文件为<code>src\utils\emojiBase64.js</code>，里边都是base64格式的图片</li>
<li>渲染在<code>src\components\common\Emoji.vue</code>组件中</li>
<li>用户点击表情包，例如点击<code>微笑表情</code>会把相应的表情信息以<code>[微笑]</code>的格式添加到文本框中</li>
<li>最后，当发送文本到文本框是，将<code>[微笑]</code>转义为对应的表情包图片<code>src\utils\utils.js</code>中的<code>renderText</code>方法</li>
</ul>
</li>
</ol>
</template>
