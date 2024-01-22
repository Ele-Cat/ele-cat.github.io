<template><h1 id="sass-学习笔记" tabindex="-1"><a class="header-anchor" href="#sass-学习笔记" aria-hidden="true">#</a> Sass 学习笔记</h1>
<p><a href="https://www.runoob.com/sass/sass-tutorial.html" target="_blank" rel="noopener noreferrer">菜鸟学习地址<ExternalLinkIcon/></a>
<a href="https://www.sass.hk/guide/" target="_blank" rel="noopener noreferrer">官方快速入门<ExternalLinkIcon/></a></p>
<h2 id="_01-sass-是什么" tabindex="-1"><a class="header-anchor" href="#_01-sass-是什么" aria-hidden="true">#</a> 01. Sass 是什么</h2>
<blockquote>
<p>Sass (英文全称：Syntactically Awesome Stylesheets) 是一个最初由 Hampton Catlin 设计并由 Natalie Weizenbaum 开发的层叠样式表语言。</p>
</blockquote>
<ul>
<li>Sass 是一个 CSS 预处理器。</li>
<li>Sass 是 CSS 扩展语言，可以帮助我们减少 CSS 重复的代码，节省开发时间。</li>
<li>Sass 完全兼容所有版本的 CSS。</li>
<li>Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性。</li>
<li>Sass 生成良好格式化的 CSS 代码，易于组织和维护。</li>
<li>Sass 文件后缀为 .scss。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">为什么使用 Sass</p>
<ol>
<li>CSS 本身语法不够强大，导致重复编写一些代码，无法实现复用，而且在代码也不方便维护。</li>
<li>Sass 引入合理的样式复用机制，增加了规则、变量、混入、选择器、继承、内置函数等等特性。</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">/* 定义颜色变量，要修改颜色值，修改这里就可以了 */</span>
<span class="token property"><span class="token variable">$primary_1</span></span><span class="token punctuation">:</span> #a2b9bc<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary_2</span></span><span class="token punctuation">:</span> #b2ad7f<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary_3</span></span><span class="token punctuation">:</span> #878f99<span class="token punctuation">;</span>

<span class="token comment">/* 使用变量 */</span>
<span class="token selector">.main-header </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary_1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.menu-left </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary_2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.menu-right </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary_3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Sass 是如何工作的</p>
<p>浏览器并不支持 Sass 代码。因此，你需要使用一个 Sass 预处理器将 Sass 代码转换为 CSS 代码。</p>
</div>
<h2 id="_02-sass-的安装与使用" tabindex="-1"><a class="header-anchor" href="#_02-sass-的安装与使用" aria-hidden="true">#</a> 02. Sass 的安装与使用</h2>
<h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装" aria-hidden="true">#</a> 2.1 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g sass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sass --version
<span class="token comment"># 1.53.0 compiled with dart2js 2.17.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-2-使用" tabindex="-1"><a class="header-anchor" href="#_2-2-使用" aria-hidden="true">#</a> 2.2 使用</h3>
<ol>
<li>新建 <code>runoob-test.scss</code> 文件</li>
<li>录入以下代码</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">/* 定义变量与值 */</span>
<span class="token property"><span class="token variable">$bgcolor</span></span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$textcolor</span></span><span class="token punctuation">:</span> darkblue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$fontsize</span></span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>

<span class="token comment">/* 使用变量 */</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$bgcolor</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textcolor</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$fontsize</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3">
<li>将 <code>scss</code> 转换为 <code>css</code> 【在命令行里展示】</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sass runoob-test.scss
<span class="token comment"># @charset "UTF-8";</span>
<span class="token comment"># /* 定义变量与值 */</span>
<span class="token comment"># /* 使用变量 */</span>
<span class="token comment"># body {</span>
<span class="token comment">#   background-color: lightblue;</span>
<span class="token comment">#   color: darkblue;</span>
<span class="token comment">#   font-size: 18px;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="4">
<li>将 <code>scss</code> 转换为 <code>css</code> 【自动生成 css 文件】</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sass runoob-test.scss test.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>test.css</code></p>
<div class="custom-container tip"><p class="custom-container-title">生成的 test.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span>
<span class="token comment">/* 定义变量与值 */</span>
<span class="token comment">/* 使用变量 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> darkblue<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*# sourceMappingURL=test.css.map */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div>
<h3 id="_2-3-在线使用" tabindex="-1"><a class="header-anchor" href="#_2-3-在线使用" aria-hidden="true">#</a> 2.3 在线使用</h3>
<p><a href="https://www.sassmeister.com" target="_blank" rel="noopener noreferrer">在线地址<ExternalLinkIcon/></a></p>
<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/56b04238c591c794bf0def0a98f0e5a5"></iframe>
</div>
<h2 id="_03-sass-变量" tabindex="-1"><a class="header-anchor" href="#_03-sass-变量" aria-hidden="true">#</a> 03. Sass 变量</h2>
<h3 id="_3-1-变量" tabindex="-1"><a class="header-anchor" href="#_3-1-变量" aria-hidden="true">#</a> 3.1 变量</h3>
<p>Sass 变量可以存储以下信息：</p>
<ul>
<li>字符串</li>
<li>数字</li>
<li>颜色值</li>
<li>布尔值</li>
<li>列表</li>
<li>null 值</li>
</ul>
<p>Sass 变量使用 <code>$</code> 符号：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$variablename</span></span><span class="token punctuation">:</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/e2b8eb6b9069d4363bfe8b156aeedbf2"></iframe>
</div>
<h3 id="_3-2-作用域" tabindex="-1"><a class="header-anchor" href="#_3-2-作用域" aria-hidden="true">#</a> 3.2 作用域</h3>
<p>Sass 变量的作用域只能在当前的层级上有效果，如下所示 h1 的样式为它内部定义的 green，p 标签则是为 red。</p>
<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/2b55d1f9e74b051e6b912124c3ae219f"></iframe>
</div>
<blockquote>
<p>!global【当然 Sass 中我们可以使用 !global 关键词来设置变量是全局的】</p>
</blockquote>
<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/1aee87adab465d39eb56edda1cc66bec"></iframe>
</div>
<h2 id="_04-嵌套规则" tabindex="-1"><a class="header-anchor" href="#_04-嵌套规则" aria-hidden="true">#</a> 04. 嵌套规则</h2>
<blockquote>
<p>Sass 嵌套 CSS 选择器类似于 HTML 的嵌套规则。</p>
</blockquote>
<div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/9bac018d8abe6f2d3238562b2d3022e7"></iframe>
</div>
<h2 id="_05-导入-import" tabindex="-1"><a class="header-anchor" href="#_05-导入-import" aria-hidden="true">#</a> 05. 导入@import</h2>
<blockquote>
<p>Sass 可以帮助我们减少 CSS 重复的代码，节省开发时间。
我们可以安装不同的属性来创建一些代码文件，如：变量定义的文件、颜色相关的文件、字体相关的文件等。</p>
</blockquote>
<ol>
<li>类似 CSS，Sass 支持 @import 指令。</li>
<li>@import 指令可以让我们导入其他文件等内容。</li>
<li>CSS @import 指令在每次调用时，都会创建一个额外的 HTTP 请求。但，Sass @import 指令将文件包含在 CSS 中，不需要额外的 HTTP 请求。</li>
</ol>
<p>Sass @import 指令语法如下：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> filename<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意：<strong>包含文件时不需要指定文件后缀，Sass 会自动添加后缀 .scss。</strong></p>
<h2 id="_06-mixin-与-include" tabindex="-1"><a class="header-anchor" href="#_06-mixin-与-include" aria-hidden="true">#</a> 06. @mixin 与 @include</h2>
<blockquote>
<p>@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。</p>
</blockquote>
<blockquote>
<p>@include 指令可以将混入（mixin）引入到文档中。</p>
</blockquote>
<h3 id="_6-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_6-1-基础使用" aria-hidden="true">#</a> 6.1 基础使用</h3>
<ol>
<li>定义一个混入
混入(mixin)通过 @mixin 指令来定义。 @mixin mixin-name { property: value; property: value; ... }</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">mixin-name </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>使用混入
@include 指令可用于包含一混入：</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">selector </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> mixin-name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="iframe-box">
  <iframe id="iframe" style="height:350px" src="https://www.sassmeister.com/gist/84b11fdef15b6563c51b35bfb5ddc512"></iframe>
</div>
<h3 id="_6-2-混入包含混入" tabindex="-1"><a class="header-anchor" href="#_6-2-混入包含混入" aria-hidden="true">#</a> 6.2 混入包含混入</h3>
<div class="iframe-box">
  <iframe id="iframe" style="height:600px" src="https://www.sassmeister.com/gist/180ae5951818c379a4366c4633faa37a"></iframe>
</div>
<h3 id="_6-3-向混入传递参数" tabindex="-1"><a class="header-anchor" href="#_6-3-向混入传递参数" aria-hidden="true">#</a> 6.3 向混入传递参数</h3>
<blockquote>
<p>我们可以向混入传递变量。(参数可添加默认值)</p>
</blockquote>
<div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/cd91141d69a1ebdf687f5bddede9e5d3"></iframe>
</div>
<blockquote>
<p>可变参数【不能确定一个混入（mixin）或者一个函数（function）使用多少个参数，这时我们就可以使用 <code>...</code> 来设置可变参数】</p>
</blockquote>
<p>用于创建盒子阴影（box-shadow）的一个混入（mixin）可以采取任何数量的 box-shadow 作为参数。</p>
<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/039f21e5f8747d761bac71893e66dcaf"></iframe>
</div>
<h2 id="_07-extend-与-继承" tabindex="-1"><a class="header-anchor" href="#_07-extend-与-继承" aria-hidden="true">#</a> 07. @extend 与 继承</h2>
<ol>
<li>@extend 指令告诉 Sass 一个选择器的样式从另一选择器继承。</li>
<li>如果一个样式与另外一个样式几乎相同，只有少量的区别，则使用 @extend 就显得很有用。</li>
</ol>
<div class="iframe-box">
  <iframe id="iframe" style="height:450px" src="https://www.sassmeister.com/gist/7744d4a70c3901ea99ce70b81399e3f9"></iframe>
</div>
<ol start="3">
<li>使用 @extend 后，我们在 HTML 按钮标签中就不需要指定多个类 class=&quot;button-basic button-report&quot; ，只需要设置 class=&quot;button-report&quot; 类就好了。</li>
<li>@extend 很好的体现了代码的复用。</li>
</ol>
<h2 id="_08-sass-函数" tabindex="-1"><a class="header-anchor" href="#_08-sass-函数" aria-hidden="true">#</a> 08. Sass 函数</h2>
<blockquote>
<p>Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：</p>
</blockquote>
<ul>
<li>字符串函数</li>
<li>数字函数</li>
<li>列表函数</li>
<li>Introspection 函数</li>
<li>条件函数</li>
<li>Map 函数</li>
<li>颜色函数</li>
</ul>
<div class="iframe-box">
  <iframe id="iframe" style="height:350px" src="https://www.sassmeister.com/gist/1931a52da8ae10d1d60eb18063fb5fc1"></iframe>
</div>
<h3 id="_8-1-字符串函数" tabindex="-1"><a class="header-anchor" href="#_8-1-字符串函数" aria-hidden="true">#</a> 8.1 字符串函数</h3>
<blockquote>
<p>字符串函数主要提供了字符串类型的相关操作，就像在 javascript 中一样，Sass 提供的字符串函数可以获取字符串的长度，字符串的下标以及字符串中的大小写字母转换等等。</p>
</blockquote>
<h4 id="_8-1-1-quote-string-和-unquote-string" tabindex="-1"><a class="header-anchor" href="#_8-1-1-quote-string-和-unquote-string" aria-hidden="true">#</a> 8.1.1 quote ($ string) 和 unquote($ string)</h4>
<p>这两个函数我们放在一起讲解，它们都接收 1 个参数，参数是字符串类型，quote($string) 函数的返回结果是 以带引号的形式返回你传入的字符串，反之 unquote($string) 函数的返回结果是以不带引号的形式返回你传入的字符串</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>string.<span class="token function">quote</span><span class="token punctuation">(</span>aaa<span class="token punctuation">)</span> <span class="token comment">//=> "aaa"</span>
<span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span>  <span class="token comment">//=> bbb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-1-2-str-index-string-substring" tabindex="-1"><a class="header-anchor" href="#_8-1-2-str-index-string-substring" aria-hidden="true">#</a> 8.1.2 str-index($string, $substring)</h4>
<p>str-index($string, $substring) 函数接收 2 个参数，返回 $substring 在 $string 中的第一次出现的索引，如果在 $string 中不包含 $substring 则返回 null</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">str-index</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">)</span> <span class="token comment">//=> 1</span>
<span class="token function">str-index</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span> <span class="token comment">//=> 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-1-3-str-insert-string-insert-index" tabindex="-1"><a class="header-anchor" href="#_8-1-3-str-insert-string-insert-index" aria-hidden="true">#</a> 8.1.3 str-insert($string, $insert, $index)</h4>
<p>这个函数是用于字符串的插入，str-insert($string, $insert, $index) 函数接收 3 个参数，第 1 个参数是一个字符串，第 2 个参数是要插入的字符串，第 3 个参数是插入的位置，返回结果是插入后的字符串</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"j"</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span>  <span class="token comment">//=> "jabcde"</span>
<span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"j"</span><span class="token punctuation">,</span> 4<span class="token punctuation">)</span>  <span class="token comment">//=> "abcjde"</span>
<span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"j"</span><span class="token punctuation">,</span> 100<span class="token punctuation">)</span>  <span class="token comment">//=> "abcdej"</span>
<span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> <span class="token string">"j"</span><span class="token punctuation">,</span> -20<span class="token punctuation">)</span>  <span class="token comment">//=> "jabcde"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_8-1-4-str-length-string" tabindex="-1"><a class="header-anchor" href="#_8-1-4-str-length-string" aria-hidden="true">#</a> 8.1.4 str-length($string)</h4>
<p>这个函数用于获取传入的字符串的长度，只接收一个字符串参数，返回值是它的长度，返回值是 number 类型</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">)</span>  <span class="token comment">//=> 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_8-1-5-str-slice-string-start-at-end-at" tabindex="-1"><a class="header-anchor" href="#_8-1-5-str-slice-string-start-at-end-at" aria-hidden="true">#</a> 8.1.5 str-slice($string, $start-at, $end-at)</h4>
<p>这个函数用于字符串的截取，str-slice($string, $start-at, $end-at) 函数接收 3 个参数，第 1 个参数是一个字符串，第 2 个参数是要截取的开始位置，第 3 个参数是要截取的结束位置，返回结果是截取到的字符串；要记住 Sass 的字符串截取函数返回的字符串是包含截取的开始和结束位置字符的</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 2<span class="token punctuation">)</span>  <span class="token comment">//=> "ab"</span>
<span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 4<span class="token punctuation">)</span>  <span class="token comment">//=> "bcd"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-1-6-to-upper-case-string-和-to-lower-case-string" tabindex="-1"><a class="header-anchor" href="#_8-1-6-to-upper-case-string-和-to-lower-case-string" aria-hidden="true">#</a> 8.1.6 to-upper-case($string) 和 to-lower-case($string)</h4>
<p>这两个函数我们放在一起来讲解，它们都接收 1 个字符串参数；to-upper-case($string) 函数 将传入的字符串转换为大写并返回，to-lower-case($string) 函数将传入的字符串转换为小写并返回</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token string">"abcde"</span><span class="token punctuation">)</span> <span class="token comment">//=> "ABCDE"  转为大写</span>
<span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token string">"Abc"</span><span class="token punctuation">)</span>  <span class="token comment">//=> "ABC"  转为大写</span>
<span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token string">"ABC"</span><span class="token punctuation">)</span>  <span class="token comment">//=> "abc"  转为小写</span>
<span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token string">"Abc"</span><span class="token punctuation">)</span>  <span class="token comment">//=> "abc"  转为小写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_8-1-7-unique-id" tabindex="-1"><a class="header-anchor" href="#_8-1-7-unique-id" aria-hidden="true">#</a> 8.1.7 unique-id()</h4>
<p>unique-id() 函数会返回一个随机的字符串，并且这个字符串在 Sass 编译中是唯一的，这个我们用得不多，不过当你需要生成一个唯一的字符串标识的时候你可以使用它</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">unique-id</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//=> urgdjis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_8-2-数字函数" tabindex="-1"><a class="header-anchor" href="#_8-2-数字函数" aria-hidden="true">#</a> 8.2 数字函数</h3>
<p>Sass 提供了很多数字函数来提供计算和数值转换等功能，在 Sass 中我们也称之为 Math 函数，就像 javascript 中提供的 Math 函数一样，为我们提供了很多数学上的计算，首先我们先举例看一下简单的仅有数学计算意义的数字函数：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>math.<span class="token variable">$e</span>  <span class="token comment">//=> 2.7182818285  返回数学常数 e 的值</span>
math.<span class="token variable">$pi</span> <span class="token comment">//=> 3.1415926536  返回数学常数 π 的值</span>
<span class="token function">ceil</span><span class="token punctuation">(</span>4.2<span class="token punctuation">)</span>  <span class="token comment">//=> 5  向上取整</span>
<span class="token function">floor</span><span class="token punctuation">(</span>4.8<span class="token punctuation">)</span>  <span class="token comment">//=> 4  向下取整</span>
<span class="token function">round</span><span class="token punctuation">(</span>4.3<span class="token punctuation">)</span>  <span class="token comment">//=> 4  四舍五入取近似值</span>
<span class="token function">round</span><span class="token punctuation">(</span>4.7<span class="token punctuation">)</span>  <span class="token comment">//=> 5  四舍五入取近似值</span>
<span class="token function">abs</span><span class="token punctuation">(</span>-10px<span class="token punctuation">)</span>  <span class="token comment">//=> 10px  取绝对值</span>
math.<span class="token function">cos</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span>  <span class="token comment">//=> -0.1736481777 返回余弦值，单位必须与deg兼容或无单位</span>
math.<span class="token function">sin</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span> <span class="token comment">//=> 0.984807753  返回正弦值，单位必须与deg兼容或无单位</span>
math.<span class="token function">tan</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span> <span class="token comment">//=> -5.6712818196  返回正切值，单位必须与deg兼容或无单位</span>
math.<span class="token function">acos</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span> <span class="token comment">//=> 60deg  返回反余弦值，传入的参数不可带单位</span>
math.<span class="token function">asin</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span> <span class="token comment">//=> 30deg  返回反正弦值，传入的参数不可带单位</span>
math.<span class="token function">atan</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span> <span class="token comment">//=> 84.2894068625deg  返回反正切值，传入的参数不可带单位</span>
<span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//=> 返回一个 0~1 之间的随机数</span>
<span class="token function">percentage</span><span class="token punctuation">(</span>0.2<span class="token punctuation">)</span>  <span class="token comment">//=> 20%  将无单位的小数转换为百分比数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="_8-2-1-math-log-number-base" tabindex="-1"><a class="header-anchor" href="#_8-2-1-math-log-number-base" aria-hidden="true">#</a> 8.2.1 math.log($number, $base)</h4>
<p>这个函数用于计算对数，它会返回 $number 相对于 $base 的对数，这两个参数是不可以带有单位的。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>math.<span class="token function">log</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span>  <span class="token comment">//=> 2.302585093</span>
math.<span class="token function">log</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span> 10<span class="token punctuation">)</span>  <span class="token comment">//=> 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-2-2-math-pow-base-exponent" tabindex="-1"><a class="header-anchor" href="#_8-2-2-math-pow-base-exponent" aria-hidden="true">#</a> 8.2.2 math.pow($base, $exponent)</h4>
<p>math.pow($base, $exponent) 函数用于计算 $base 的 $exponent 次幂，是用于幂运算的。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>math.<span class="token function">pow</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span> 2<span class="token punctuation">)</span>  <span class="token comment">//=> 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_8-2-3-math-sqrt-number" tabindex="-1"><a class="header-anchor" href="#_8-2-3-math-sqrt-number" aria-hidden="true">#</a> 8.2.3 math.sqrt($number)</h4>
<p>math.sqrt($number) 函数返回传入参数的平方根。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>math.<span class="token function">sqrt</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span>  <span class="token comment">//=> 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_8-2-4-comparable-number1-number2" tabindex="-1"><a class="header-anchor" href="#_8-2-4-comparable-number1-number2" aria-hidden="true">#</a> 8.2.4 comparable($number1, $number2)</h4>
<p>comparable($number1, $number2) 用来判断两个数值的单位是否兼容，它的返回结果是布尔值，这个在你需要对单位进行要求的时候很有用</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">comparable</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10<span class="token punctuation">)</span>  <span class="token comment">//=> true</span>
<span class="token function">comparable</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span>  <span class="token comment">//=> true</span>
<span class="token function">comparable</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10em<span class="token punctuation">)</span>  <span class="token comment">//=> false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-2-5-unitless-number" tabindex="-1"><a class="header-anchor" href="#_8-2-5-unitless-number" aria-hidden="true">#</a> 8.2.5 unitless($number)</h4>
<p>unitless($number) 用于判断传入的数值是否没有单位，返回结果是布尔值，如果没带单位返回 true，带单位则返回 false。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">unitless</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span>  <span class="token comment">//=> true</span>
<span class="token function">unitless</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span>  <span class="token comment">//=> false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-2-6-unit-number" tabindex="-1"><a class="header-anchor" href="#_8-2-6-unit-number" aria-hidden="true">#</a> 8.2.6 unit($number)</h4>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">unit</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span>  <span class="token comment">//=> ""</span>
<span class="token function">unit</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span>  <span class="token comment">//=> "px"</span>
<span class="token function">unit</span><span class="token punctuation">(</span>8em<span class="token punctuation">)</span>  <span class="token comment">//=> "em"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-2-7-max-katex-parse-error-expected-eof-got-和-at-position-12-number-和-min-number" tabindex="-1"><a class="header-anchor" href="#_8-2-7-max-katex-parse-error-expected-eof-got-和-at-position-12-number-和-min-number" aria-hidden="true">#</a> 8.2.7 max(KaTeX parse error: Expected 'EOF', got '和' at position 12: number...) 和 ̲ min(number…)</h4>
<p>这两个函数分别接收以逗号分隔的数值，并且分别返回其中最大的值和最小的值。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>math.<span class="token function">max</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 4<span class="token punctuation">)</span>  <span class="token comment">//=>  8</span>
math.<span class="token function">min</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 4<span class="token punctuation">)</span>  <span class="token comment">//=>  4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">数字函数</p>
<p>这些函数是辅助你来对数字类型的值进行一些操作，很像 javascript 中提供的 Math 函数，你不需要死记硬背，这些函数需要用到的时候再查也可以</p>
</div>
<h3 id="_8-3-列表函数" tabindex="-1"><a class="header-anchor" href="#_8-3-列表函数" aria-hidden="true">#</a> 8.3 列表函数</h3>
<h4 id="_8-3-1-append-list-val-separator" tabindex="-1"><a class="header-anchor" href="#_8-3-1-append-list-val-separator" aria-hidden="true">#</a> 8.3.1 append($list, $val, $separator)</h4>
<p>append($list, $val, $separator) 函数用于向一个列表的末尾插入元素，它接收 3 个参数，第 1 个参数是一个列表（以空格或者逗号分隔），第 2 个参数是要插入的值（也可以是一个列表），第 3 个参数 $separator 表示返回的列表是否使用与 $list 相同的分隔符，这个默认是 auto （ 使用与$list 相同的分隔符），这个函数的返回值也是一个列表。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">append</span><span class="token punctuation">(</span>10 11 12<span class="token punctuation">,</span> 13<span class="token punctuation">)</span>  <span class="token comment">//=> 10 11 12 13</span>
<span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span>11<span class="token punctuation">,</span>12<span class="token punctuation">)</span><span class="token punctuation">,</span> 13<span class="token punctuation">)</span>  <span class="token comment">//=> 10, 11, 12, 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这里需要注意的是，如果第 1 个参数你是使用逗号分隔的列表，那么你要将这个列表使用括号括起来！</p>
<h4 id="_8-3-2-join-list1-list2-separator-bracketed" tabindex="-1"><a class="header-anchor" href="#_8-3-2-join-list1-list2-separator-bracketed" aria-hidden="true">#</a> 8.3.2 join($list1, $list2, $separator, $bracketed)</h4>
<p>join($list1, $list2, $separator, $bracketed) 函数用于连接两个列表，上面我们讲到向列表默认插入元素，如果插入的元素是一个列表，那么请你使用 join 函数。</p>
<p>这个函数接收 4 个参数，第 1 个参数是一个列表，第 2 个参数是要插入的列表，第 3 个参数是返回列表的分隔符，默认是 auto （列表将使用与$list1相同的分隔符（如果有分隔符），否则使用与$list2 相同的分隔符，或者使用空格。不允许使用其他值），第 4 个参数是布尔值，用来设置返回的列表是否包含方括号。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">join</span><span class="token punctuation">(</span>5 6<span class="token punctuation">,</span> 7 8<span class="token punctuation">)</span>  <span class="token comment">//=> 5 6 7 8</span>
<span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span>6<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>7<span class="token punctuation">,</span>8<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//=> 5, 6, 7, 8</span>
<span class="token function">join</span><span class="token punctuation">(</span>5 6<span class="token punctuation">,</span> 7 8<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bracketed</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">//=> [5 6 7 8]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-3-3-index-list-value" tabindex="-1"><a class="header-anchor" href="#_8-3-3-index-list-value" aria-hidden="true">#</a> 8.3.3 index($list, $value)</h4>
<p>index($list, $value) 函数用于返回 $value 在列表 $list 中的索引，如果在 $list 中没有 $value 则返回 null。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">index</span><span class="token punctuation">(</span>a b solid<span class="token punctuation">,</span> b<span class="token punctuation">)</span>  <span class="token comment">//=> 2</span>
<span class="token function">index</span><span class="token punctuation">(</span>a b solid<span class="token punctuation">,</span> solid<span class="token punctuation">)</span>  <span class="token comment">//=> 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-3-4-length-list" tabindex="-1"><a class="header-anchor" href="#_8-3-4-length-list" aria-hidden="true">#</a> 8.3.4 length($list)</h4>
<p>这个函数比较简单，就是返回列表的长度。返回的值是 number 类型。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">length</span><span class="token punctuation">(</span>a b solid<span class="token punctuation">)</span>  <span class="token comment">//=> 3</span>
<span class="token function">length</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>  <span class="token comment">//=> 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-3-5-list-separator-list" tabindex="-1"><a class="header-anchor" href="#_8-3-5-list-separator-list" aria-hidden="true">#</a> 8.3.5 list-separator($list)</h4>
<p>这个函数用来返回列表的分隔符，如果没有分隔符就返回空格 space 。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">list-separator</span><span class="token punctuation">(</span>a b<span class="token punctuation">)</span>  <span class="token comment">//=> space</span>
<span class="token function">list-separator</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//=> comma</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-3-6-nth-list-n" tabindex="-1"><a class="header-anchor" href="#_8-3-6-nth-list-n" aria-hidden="true">#</a> 8.3.6 nth($list, $n)</h4>
<p>nth($list, $n) 这个函数用于通过索引在列表中取元素，第 1 个参数是一个列表，第 2 个参数 $n 是索引位置，如果 $n 为负数，则从列表的末尾开始计数。如果索引 $n 处没有元素，则引发错误。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">nth</span><span class="token punctuation">(</span>a b c d<span class="token punctuation">,</span> 2<span class="token punctuation">)</span>  <span class="token comment">//=> b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_8-4-introspection-函数" tabindex="-1"><a class="header-anchor" href="#_8-4-introspection-函数" aria-hidden="true">#</a> 8.4 Introspection 函数</h3>
<p>Introspection 函数实际在样式中写的非常少，一般用于代码的调试以及做一些判断。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">type-of</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span>  <span class="token comment">//=> number 用于判断数据的类型，返回数据的类型</span>
<span class="token function">type-of</span><span class="token punctuation">(</span>10px 20px 30px<span class="token punctuation">)</span> <span class="token comment">//=> list 用于判断数据的类型，返回数据的类型</span>
<span class="token function">variable-exists</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span> <span class="token comment">//=> false  用于判断当前范围中一个变量是否存在，这里是判断变量 $a 是否存在</span>
meta.<span class="token function">module-variables</span><span class="token punctuation">(</span><span class="token variable">$module</span><span class="token punctuation">)</span>  <span class="token comment">//=> 用于返回一个模块中定义的所有变量</span>
<span class="token function">call</span><span class="token punctuation">(</span><span class="token variable">$function</span><span class="token punctuation">,</span> <span class="token variable">$args</span>...<span class="token punctuation">)</span>  <span class="token comment">//=> 使用 $args 调用 $function，这个很像 javascript 中的 call</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_8-5-条件函数" tabindex="-1"><a class="header-anchor" href="#_8-5-条件函数" aria-hidden="true">#</a> 8.5 条件函数</h3>
<p>if($condition, $if-true, $if-false) 函数是 Sass 中的条件函数，它接收 3 个参数，第 1 个参数是一个判断条件或者布尔值，第 2 个参数是当判断条件为真时的返回值，第 3 个参数是当判断条件为假时的返回值</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 16px<span class="token punctuation">)</span>  <span class="token comment">//=> 18px</span>
<span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 16px<span class="token punctuation">)</span>  <span class="token comment">//=> 16px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_8-6-map-函数" tabindex="-1"><a class="header-anchor" href="#_8-6-map-函数" aria-hidden="true">#</a> 8.6 Map 函数</h3>
<h4 id="_8-6-1-map-get-map-key" tabindex="-1"><a class="header-anchor" href="#_8-6-1-map-get-map-key" aria-hidden="true">#</a> 8.6.1 map-get($map, $key)</h4>
<p>map-get($map, $key) 函数是从 $map 中取出 key 为 $key 的值，第 1 个参数是 Maps 类型的数据</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义 maps 类型的数据</span>
<span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">)</span>  <span class="token comment">//=> 1</span>
<span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>  <span class="token comment">//=> 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-6-2-map-has-key-map-key" tabindex="-1"><a class="header-anchor" href="#_8-6-2-map-has-key-map-key" aria-hidden="true">#</a> 8.6.2 map-has-key($map, $key)</h4>
<p>map-has-key($map, $key) 这个函数返回在 $map 中是否有 $key，返回的值是布尔类型</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义 maps 类型的数据</span>
<span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>  <span class="token comment">//=> true</span>
<span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">,</span> <span class="token string">"e"</span><span class="token punctuation">)</span>  <span class="token comment">//=> false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-6-3-map-keys-map" tabindex="-1"><a class="header-anchor" href="#_8-6-3-map-keys-map" aria-hidden="true">#</a> 8.6.3 map-keys($map)</h4>
<p>map-keys($map) 函数返回传入的 map 中所有的 key，并且会以逗号分隔为一个列表返回</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义 maps 类型的数据</span>
<span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">)</span>  <span class="token comment">//=> "a","b","c"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-6-4-map-merge-map1-map2" tabindex="-1"><a class="header-anchor" href="#_8-6-4-map-merge-map1-map2" aria-hidden="true">#</a> 8.6.4 map-merge($map1, $map2)</h4>
<p>map-merge($map1, $map2) 函数用于合并两个 maps 类型的数据 $map1 和 $map2，并且会返回一个新的 map，如果 $map1 和 $map2 中有相同的 key ，那么 $map2 中的数据会覆盖 $map1 中的这条数据，这个函数和 javascript 中合并两个对象的方法很类似</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map1</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$val_map2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">:</span> 4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$val_map1</span><span class="token punctuation">,</span> <span class="token variable">$val_map2</span><span class="token punctuation">)</span>
<span class="token comment">// => 返回的数据</span>
<span class="token comment">// (</span>
<span class="token comment">//   "a": 1,</span>
<span class="token comment">//   "b": 2,</span>
<span class="token comment">//   "c": 3,</span>
<span class="token comment">//   "d": 4</span>
<span class="token comment">// )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_8-6-5-map-remove-map-keys" tabindex="-1"><a class="header-anchor" href="#_8-6-5-map-remove-map-keys" aria-hidden="true">#</a> 8.6.5 map-remove($map, $keys…)</h4>
<p>看到 remove 我们就知道这个是用来删除的，map-remove($map, $keys…) 函数用来删除 $map 中的一个或多个与 $keys 关联的值，并且返回删除后的 map。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义 maps 类型的数据</span>
<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>  <span class="token comment">//=> ("c": 3)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-6-6-map-values-map" tabindex="-1"><a class="header-anchor" href="#_8-6-6-map-values-map" aria-hidden="true">#</a> 8.6.6 map-values($map)</h4>
<p>前面讲到一个函数可以返回 map 中所有的 key ，map-values($map) 这个函数与其类似是用来返回 map 中所有的 value，同样会以逗号分隔为一个列表返回</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$val_map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义 maps 类型的数据</span>
<span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$val_map</span><span class="token punctuation">)</span>  <span class="token comment">//=> 1,2,3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_8-7-颜色函数" tabindex="-1"><a class="header-anchor" href="#_8-7-颜色函数" aria-hidden="true">#</a> 8.7 颜色函数</h3>
<h4 id="_8-7-1-用于获取通道色值的函数" tabindex="-1"><a class="header-anchor" href="#_8-7-1-用于获取通道色值的函数" aria-hidden="true">#</a> 8.7.1 用于获取通道色值的函数</h4>
<p>Sass 提供了可以获取一个色值中红色通道、绿色通道和蓝色通道色值的函数，它们分别是 red($color) 、green($color) 和 blue($color)。你可能还不太了解这三种通道是什么，不要紧，只要知道这三种函数和它的使用就可以</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">blue</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=> 211</span>
<span class="token function">red</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=> 186</span>
<span class="token function">green</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=> 85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_8-7-2-saturate-color-amount" tabindex="-1"><a class="header-anchor" href="#_8-7-2-saturate-color-amount" aria-hidden="true">#</a> 8.7.2 saturate($color, $amount)</h4>
<p>saturate($color, $amount) 函数用于调整 $color 的饱和度，第 1 个参数 $color 是一个颜色值，第 2 个参数是 0% ～ 100% 之间的百分数，其返回值也是一个颜色值。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">saturate</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span>  <span class="token comment">//=> #c740e8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_8-7-3-scale-color" tabindex="-1"><a class="header-anchor" href="#_8-7-3-scale-color" aria-hidden="true">#</a> 8.7.3 scale-color(…)</h4>
<p>这是一个非常强大的颜色函数，它接收很多个参数，可以调整一个色值的很多属性，包括这个颜色的红、绿、蓝通道，以及亮度等等</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=> #c455d3  调整红色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$blue</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=> #ba55da  调整蓝色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> -10%<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$saturation</span></span><span class="token punctuation">:</span> 10%<span class="token punctuation">)</span>  <span class="token comment">//=> #b338d2 调整亮度和饱和度</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$alpha</span></span><span class="token punctuation">:</span> -30%<span class="token punctuation">)</span>  <span class="token comment">//=> rgba(186, 85, 211, 0.7)  调整不透明度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>通过上面的例子可以看到颜色函数提供了非常强大的用于调色的函数，驾驭它的前提是你要有非常丰富的调色知识以及一定的美术基础。在实际的项目中我们非常少的用到颜色函数，因为一般都是由公司的 UI 设计师来进行调色，所以作为入门教程，你只需要了解 Sass 中的颜色函数就好。</p>
<h3 id="_8-8-自定义函数" tabindex="-1"><a class="header-anchor" href="#_8-8-自定义函数" aria-hidden="true">#</a> 8.8 自定义函数</h3>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// 定义函数</span>
<span class="token keyword">@function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token string">"a"</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用函数</span>
<span class="token selector">.p</span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// 截取字符串的后半部分</span>
<span class="token keyword">@function</span> <span class="token function">middleStr</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$leng</span></span><span class="token punctuation">:</span> <span class="token function">str-length</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$start</span></span><span class="token punctuation">:</span> <span class="token variable">$leng</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span>
  <span class="token keyword">@return</span> <span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">,</span> <span class="token variable">$start</span><span class="token punctuation">,</span> <span class="token variable">$leng</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断class长度范围</span>
<span class="token keyword">@function</span> <span class="token function">classLong</span><span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">,</span> <span class="token variable">$max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$leng</span></span><span class="token punctuation">:</span> <span class="token function">str-length</span><span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$leng</span> > <span class="token variable">$max</span></span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token keyword">@return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 大小写转换</span>
<span class="token keyword">@function</span> <span class="token function">upperOrLower</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span> <span class="token selector">== "string"</span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == "upper"</span><span class="token punctuation">{</span>
      <span class="token keyword">@return</span> <span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
      <span class="token keyword">@return</span> <span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>
