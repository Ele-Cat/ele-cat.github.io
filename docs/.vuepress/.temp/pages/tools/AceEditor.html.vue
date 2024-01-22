<template><h1 id="ace-editor" tabindex="-1"><a class="header-anchor" href="#ace-editor" aria-hidden="true">#</a> Ace Editor</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p>Ace Editor 是一个用 JavaScript 编写的可嵌入代码编辑器。它与 Sublime，Vim 和 TextMate 等本机编辑器的功能和性能相匹配。它可以轻松地嵌入任何网页和 JavaScript 应用程序中。</p>
</blockquote>
<ul>
<li><a href="https://ace.c9.io/" target="_blank" rel="noopener noreferrer">官网地址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/ajaxorg/ace/" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/chairuosen/vue2-ace-editor" target="_blank" rel="noopener noreferrer">Vue2 版本<ExternalLinkIcon/></a></li>
</ul>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li><a href="https://gitee.com/ele-cat/ace-editor" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></li>
<li><a href="https://ele-cat.gitee.io/ace-editor" target="_blank" rel="noopener noreferrer">演示地址<ExternalLinkIcon/></a></li>
<li><strong>效果演示</strong>：</li>
</ul>
<ol>
<li>基础功能为官方示例，仅用到 <code>vue2-ace-editor</code></li>
<li>在封装中，为了更好的展示 UI【Ps：懒得写样式】，引入了 <code>ant-design-vue@1.7.8</code></li>
</ol>
<div class="iframe-box">
  <iframe style="height:520px;" src="https://ele-cat.gitee.io/ace-editor"></iframe>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue2-ace-editor -D
<span class="token comment"># 额外依赖</span>
<span class="token function">npm</span> i ant-design-vue@1.7.8 -S
<span class="token function">npm</span> i normalize.css -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<ul>
<li><a href="https://www.jianshu.com/p/8a4a5e273538" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a></li>
</ul>
<div class="iframe-box">
  <iframe style="height:520px;" src="https://www.jianshu.com/p/8a4a5e273538"></iframe>
</div>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<ol>
<li>基础使用</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>editor</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span>
      <span class="token attr-name">@init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editorInit<span class="token punctuation">"</span></span>
      <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>html<span class="token punctuation">"</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chrome<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Normal"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"vue2-ace-editor"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">editorInit</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/ext/language_tools"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//language extension prerequsite...</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/mode/html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/mode/javascript"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//language</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/mode/less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/theme/chrome"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"brace/snippets/javascript"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//snippet</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><ol start="2">
<li>封装编辑器</li>
</ol>
<ul>
<li><a href="https://gitee.com/ele-cat/ace-editor/blob/master/src/components/Editor.vue" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ul>
<li><a href="https://www.jianshu.com/p/8a4a5e273538" target="_blank" rel="noopener noreferrer">Ace editor 中文文档<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/YXXXYX/article/details/126218506" target="_blank" rel="noopener noreferrer">用vue2-ace-editor做个代码编辑界面<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/scale/p/11983241.html" target="_blank" rel="noopener noreferrer">ace-editor<ExternalLinkIcon/></a></li>
</ul>
</template>
