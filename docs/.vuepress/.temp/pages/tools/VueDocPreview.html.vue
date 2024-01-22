<template><h1 id="vue-doc-preview" tabindex="-1"><a class="header-anchor" href="#vue-doc-preview" aria-hidden="true">#</a> vue-doc-preview</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p>一个 vue 文档预览组件，可以查看 office、markdown、code、text 等格式文档。</p>
</blockquote>
<div class="custom-container warning"><p class="custom-container-title">使用前请注意</p>
<p><code>vue-doc-preview</code> 目前仅支持 Vue2 版本【在 Vue3 中会报错】，但是其源码具有参考性，稍微修改下就可以应用到其他环境</p>
</div>
<ul>
<li><a href="https://www.npmjs.com/package/vue-doc-preview" target="_blank" rel="noopener noreferrer">官方 npm 地址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/cainsyake/vue-doc-preview" target="_blank" rel="noopener noreferrer">官方 git 地址<ExternalLinkIcon/></a></li>
<li><a href="https://vdp.cainsyake.com/" target="_blank" rel="noopener noreferrer">官方演示地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li><a href="https://gitee.com/ele-cat/vue-doc-preview" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></li>
<li><a href="https://ele-cat.gitee.io/vue-doc-preview" target="_blank" rel="noopener noreferrer">演示地址<ExternalLinkIcon/></a></li>
<li><strong>效果演示</strong>：</li>
</ul>
<div class="iframe-box">
  <iframe style="height:520px;" src="https://ele-cat.gitee.io/vue-doc-preview"></iframe>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue-doc-preview -S
or
<span class="token function">yarn</span> <span class="token function">add</span> vue-doc-preview
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>文档内容或 Office 文档的 url</td>
<td>String</td>
<td></td>
<td>''</td>
</tr>
<tr>
<td>type</td>
<td>文档类型</td>
<td>String</td>
<td>'markdown'、'office'、'text'、'code'</td>
<td>'md'</td>
</tr>
<tr>
<td>language</td>
<td>代码语言(当文档类型为'code'时它才生效)</td>
<td>String</td>
<td>javascript(js)、html、css、java、json、typescript(ts)、cpp、xml、bash、less、nginx、php、powershell、python、scss、shell、sql、yaml、ini</td>
<td>''</td>
</tr>
<tr>
<td>height</td>
<td>当 height &gt; 100 时，它意味着组件的将使用绝对高度(px), 否则组件的高度将为相对高度(%)</td>
<td>Number</td>
<td></td>
<td>90</td>
</tr>
<tr>
<td>mdStyle</td>
<td>Markdown 视图自定义样式(当文档类型为'markdown'、'code'时它才生效)</td>
<td>Object</td>
<td>pre, code, ul, ol, li, hr, blockquote, img, a, table, tr, th, td</td>
<td>null</td>
</tr>
<tr>
<td>textStyle</td>
<td>Text 视图自定义样式(当文档类型为'text'时它才生效)</td>
<td>Object</td>
<td></td>
<td>null</td>
</tr>
<tr>
<td>url</td>
<td>文档的 url，但是它仅在我们不设置属性 value 时生效（office 文档也可使用此属性读取）</td>
<td>String</td>
<td></td>
<td>''</td>
</tr>
<tr>
<td>requestConfig</td>
<td><a href="https://github.com/axios/axios#request-config" target="_blank" rel="noopener noreferrer">axios config<ExternalLinkIcon/></a></td>
<td>Object</td>
<td></td>
<td>{}</td>
</tr>
</tbody>
</table>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>在页面中直接使用</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prev-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in types<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>renderPreview(item)<span class="token punctuation">"</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: item === type }<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      {{ item }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueDocPreview</span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>docValue<span class="token punctuation">"</span></span>
      <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>docType<span class="token punctuation">"</span></span>
      <span class="token attr-name">:mdStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdStyle<span class="token punctuation">"</span></span>
      <span class="token attr-name">:language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>language<span class="token punctuation">"</span></span>
      <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>docUrl<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> VueDocPreview <span class="token keyword">from</span> <span class="token string">"vue-doc-preview"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    VueDocPreview<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"markdown"</span><span class="token punctuation">,</span> <span class="token string">"office"</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">docValue</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">docType</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mdStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"background-color"</span><span class="token operator">:</span> <span class="token string">"rgb(248, 248, 248)"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"background-color"</span><span class="token operator">:</span> <span class="token string">"rgb(248, 248, 248)"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"line-height"</span><span class="token operator">:</span> <span class="token string">"28px"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">"javascript"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">docUrl</span><span class="token operator">:</span> <span class="token string">"https://static-1252421604.cosgz.myqcloud.com/test/README-CN.md"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderPreview</span><span class="token punctuation">(</span><span class="token string">"markdown"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">renderPreview</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> renderValues <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">office</span><span class="token operator">:</span>
          <span class="token string">"https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.docx"</span><span class="token punctuation">,</span>
        <span class="token comment">// office: "https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.pptx",</span>
        <span class="token literal-property property">markdown</span><span class="token operator">:</span>
          <span class="token string">"# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span>
          <span class="token string">"import Marked from 'marked'\n"</span> <span class="token operator">+</span>
          <span class="token string">"import HLJS from '../lib/highlight'\n"</span> <span class="token operator">+</span>
          <span class="token string">"watch: {\n"</span> <span class="token operator">+</span>
          <span class="token string">"  value: function (val) {\n"</span> <span class="token operator">+</span>
          <span class="token string">"    this.updateContent(val)\n"</span> <span class="token operator">+</span>
          <span class="token string">"  }\n"</span> <span class="token operator">+</span>
          <span class="token string">"},\n"</span> <span class="token operator">+</span>
          <span class="token string">"mounted: function () {\n"</span> <span class="token operator">+</span>
          <span class="token string">"  this.updateContent(this.value)\n"</span> <span class="token operator">+</span>
          <span class="token string">"},\n"</span> <span class="token operator">+</span>
          <span class="token string">"updateContent: function (val) {\n"</span> <span class="token operator">+</span>
          <span class="token string">"  if (val) {\n"</span> <span class="token operator">+</span>
          <span class="token string">"    const parseMarked = Marked(val)\n"</span> <span class="token operator">+</span>
          <span class="token string">"    this.content = parseMarked\n"</span> <span class="token operator">+</span>
          <span class="token string">"    let self = this\n"</span> <span class="token operator">+</span>
          <span class="token string">"    this.$nextTick(() => {\n"</span> <span class="token operator">+</span>
          <span class="token string">"      self.parseHtml()\n"</span> <span class="token operator">+</span>
          <span class="token string">"      console.log('Hello VueDocPreview')\n"</span> <span class="token operator">+</span>
          <span class="token string">"    })\n"</span> <span class="token operator">+</span>
          <span class="token string">"  }\n"</span> <span class="token operator">+</span>
          <span class="token string">"}"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">"url"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>docValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>docType <span class="token operator">=</span> type<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>docValue <span class="token operator">=</span> renderValues<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.prev-wrapper button</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 6px 10px 0<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #2d8cf0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #2d8cf0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">touch-action</span><span class="token punctuation">:</span> manipulation<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px 15px 6px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.prev-wrapper button.active</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br></div></div></template>
