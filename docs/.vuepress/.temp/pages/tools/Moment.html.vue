<template><h1 id="moment" tabindex="-1"><a class="header-anchor" href="#moment" aria-hidden="true">#</a> Moment</h1>
<blockquote>
<p>整理一些平时工作中常用的 <code>Momentjs</code> 函数方法，省的老查官网！</p>
</blockquote>
<ul>
<li><a href="http://momentjs.cn/" target="_blank" rel="noopener noreferrer">官方中文文档<ExternalLinkIcon/></a></li>
<li><a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">官方英文文档<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_01-使用" tabindex="-1"><a class="header-anchor" href="#_01-使用" aria-hidden="true">#</a> 01. 使用</h2>
<h3 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍" aria-hidden="true">#</a> 1.1 介绍</h3>
<blockquote>
<p>Moment.js：在 JavaScript 中解析、校验、操作、显示日期和时间。</p>
</blockquote>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> moment --save
<span class="token function">yarn</span> <span class="token function">add</span> moment
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-3-范例" tabindex="-1"><a class="header-anchor" href="#_1-3-范例" aria-hidden="true">#</a> 1.3 范例</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 首先需引入moment</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">"moment"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>格式化日期</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"MMMM Do YYYY, h:mm:ss a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 六月 26日 2023, 5:48:38 下午</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"dddd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 星期一</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"MMM Do YY"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6月 26日 23</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY [escaped] YYYY"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023 escaped 2023</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023-06-26T17:48:38+08:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>相对时间</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"20111031"</span><span class="token punctuation">,</span> <span class="token string">"YYYYMMDD"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12 年前</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"20120620"</span><span class="token punctuation">,</span> <span class="token string">"YYYYMMDD"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11 年前</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18 小时前</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endOf</span><span class="token punctuation">(</span><span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6 小时后</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"hour"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 小时前</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3">
<li>日历时间</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023/06/16</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上周二17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上周五17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 昨天17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 今天17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 明天17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 本周四17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023/07/06</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li>多语言环境支持</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// zh-cn</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"LT"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"LTS"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 17:49:23</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023/06/26</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023/6/26</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"LL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"ll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"LLL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日下午5点49分</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"lll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日 17:49</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"LLLL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日星期一下午5点49分</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"llll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023年6月26日星期一 17:49</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_02-基础" tabindex="-1"><a class="header-anchor" href="#_02-基础" aria-hidden="true">#</a> 02. 基础</h2>
<h3 id="_2-1-时间格式化" tabindex="-1"><a class="header-anchor" href="#_2-1-时间格式化" aria-hidden="true">#</a> 2.1 时间格式化</h3>
<h4 id="_2-1-1-简单格式化" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简单格式化" aria-hidden="true">#</a> 2.1.1 简单格式化</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单格式化，具体含义见下表</span>
<span class="token comment">// 切记这里的时间戳是int类型的数据</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2022-12-12 12:12:12</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1687859049000</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1687859049000</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2023-06-27 17:44:09</span>
<span class="token comment">// 时间戳（毫秒）</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY/MM/DD HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2022/12/12 12:12:12</span>
<span class="token comment">// 时间戳（秒）</span>
moment<span class="token punctuation">.</span><span class="token function">unix</span><span class="token punctuation">(</span><span class="token number">1670818332</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2022-12-12 12:12:12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><details><summary>查看参数含义</summary>
<table>
<thead>
<tr>
<th style="text-align:right">输入</th>
<th>例子</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">YYYY</td>
<td>2014</td>
<td>4 或 2 位数年份。 注意： strict 模式只能解析 4 位</td>
</tr>
<tr>
<td style="text-align:right">YY</td>
<td>14</td>
<td>2 位数年份</td>
</tr>
<tr>
<td style="text-align:right">Y</td>
<td>-25</td>
<td>带有任意数字和符号的年份</td>
</tr>
<tr>
<td style="text-align:right">Q</td>
<td>1..4</td>
<td>季度。 将月份设置为季度的第一个月。</td>
</tr>
<tr>
<td style="text-align:right">M MM</td>
<td>1..12</td>
<td>月份</td>
</tr>
<tr>
<td style="text-align:right">MMM MMMM</td>
<td>Jan..December</td>
<td>moment.locale() 设置的语言环境中的月份名称</td>
</tr>
<tr>
<td style="text-align:right">D DD</td>
<td>1..31</td>
<td>一个月中的第几天</td>
</tr>
<tr>
<td style="text-align:right">Do</td>
<td>1st..31st</td>
<td>带序号的月份中的第几天</td>
</tr>
<tr>
<td style="text-align:right">DDD DDDD</td>
<td>1..365</td>
<td>一年中的某一天</td>
</tr>
<tr>
<td style="text-align:right">X</td>
<td>1410715640.579</td>
<td>Unix 时间戳</td>
</tr>
<tr>
<td style="text-align:right">x</td>
<td>1410715640579</td>
<td>Unix 毫秒时间戳</td>
</tr>
<tr>
<td style="text-align:right">w</td>
<td>ww 1..53</td>
<td>一年中的语言环境周</td>
</tr>
<tr>
<td style="text-align:right">e</td>
<td>0..6</td>
<td>星期几</td>
</tr>
<tr>
<td style="text-align:right">E</td>
<td>1..7</td>
<td>ISO 星期几</td>
</tr>
<tr>
<td style="text-align:right">ddd dddd</td>
<td>Mon...Sunday</td>
<td>moment.locale() 设置的语言环境中的日期名称</td>
</tr>
<tr>
<td style="text-align:right">H HH</td>
<td>0..23</td>
<td>小时（24 小时制）</td>
</tr>
<tr>
<td style="text-align:right">h hh</td>
<td>1..12</td>
<td>小时（与 a A 一起使用的 12 小时时间。）</td>
</tr>
<tr>
<td style="text-align:right">k kk</td>
<td>1..24</td>
<td>小时（24 小时制，从 1 到 24）</td>
</tr>
<tr>
<td style="text-align:right">a A</td>
<td>am pm</td>
<td>子午线前后（注意一个字符 a p 也被认为是有效的）</td>
</tr>
<tr>
<td style="text-align:right">m mm</td>
<td>0..59</td>
<td>分钟</td>
</tr>
<tr>
<td style="text-align:right">s ss</td>
<td>0..59</td>
<td>秒</td>
</tr>
<tr>
<td style="text-align:right">Z ZZ</td>
<td>+12:00</td>
<td>与 UTC 的偏移量为 +-HH:mm、+-HHmm 或 Z</td>
</tr>
</tbody>
</table>
</details>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1670818332000为2022-12-12 12:12:12的时间戳</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"Q"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4，指代第4季度</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 51，指代第51周</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"E"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1，指代星期1</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">1670818332000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pm，指代下午</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_2-1-2-复杂格式化" tabindex="-1"><a class="header-anchor" href="#_2-1-2-复杂格式化" aria-hidden="true">#</a> 2.1.2 复杂格式化</h4>
<blockquote>
<p>上面只是把时间转换成普通模式，如<code>2023-12-12 12:12:12</code>，下面是人性化的格式化</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 先设定语言环境</span>
moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-12-12 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"[今天是]dddd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 今天是星期二</span>
<span class="token comment">// 过去距离现在的时间</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-2-12 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 具体展现见下方细目</span>
<span class="token comment">// 未来距离现在的时间</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-12-12 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 具体展现见下方细目</span>
<span class="token comment">// 过去距离 X 的时间</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-12-11 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">"2023-12-12 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 天前</span>
<span class="token comment">// 未来距离 X 的时间</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-12-11 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">"2023-12-12 12:12:12"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 天后</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><details><summary>每个时间长度显示哪个字符串的细目</summary>
<table>
<thead>
<tr>
<th style="text-align:right">范围</th>
<th>Key</th>
<th style="text-align:left">示例输出</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0 到 44 秒</td>
<td>s</td>
<td style="text-align:left">几秒钟前</td>
</tr>
<tr>
<td style="text-align:right">取消设置</td>
<td>SS</td>
<td style="text-align:left">44 秒前</td>
</tr>
<tr>
<td style="text-align:right">45 至 89 秒</td>
<td>m</td>
<td style="text-align:left">一分钟前</td>
</tr>
<tr>
<td style="text-align:right">90 秒到 44 分钟</td>
<td>mm</td>
<td style="text-align:left">2 分钟前... 44 分钟前</td>
</tr>
<tr>
<td style="text-align:right">45 至 89 分钟</td>
<td>h</td>
<td style="text-align:left">一小时前</td>
</tr>
<tr>
<td style="text-align:right">90 分钟到 21 小时</td>
<td>hh</td>
<td style="text-align:left">2 小时前 ... 21 小时前</td>
</tr>
<tr>
<td style="text-align:right">22 至 35 小时</td>
<td>d</td>
<td style="text-align:left">一天前</td>
</tr>
<tr>
<td style="text-align:right">36 小时至 25 天</td>
<td>dd</td>
<td style="text-align:left">2 天前 ... 25 天前</td>
</tr>
<tr>
<td style="text-align:right">26 至 45 天</td>
<td>M</td>
<td style="text-align:left">一个月前</td>
</tr>
<tr>
<td style="text-align:right">45 至 319 天</td>
<td>MM</td>
<td style="text-align:left">2 个月前 ... 10 个月前</td>
</tr>
<tr>
<td style="text-align:right">320 至 547 天（1.5 年）</td>
<td>y</td>
<td style="text-align:left">一年前</td>
</tr>
<tr>
<td style="text-align:right">548 天+</td>
<td>yy</td>
<td style="text-align:left">2 年前 ... 20 年前</td>
</tr>
</tbody>
</table>
</details>
<h3 id="_2-2-取值、赋值" tabindex="-1"><a class="header-anchor" href="#_2-2-取值、赋值" aria-hidden="true">#</a> 2.2 取值、赋值</h3>
<blockquote>
<p>以上是以<code>format</code>函数获取时间相关信息，下面通过一系列方法来获取，会更加灵活</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// moment().Fn() 均可实现取值+赋值操作</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Number获取小时</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hour</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置小时</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details><summary>查看全部配置函数</summary>
<table>
<thead>
<tr>
<th>主题</th>
<th>函数</th>
<th>例子</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>获取或设置<strong>年份</strong></td>
<td>year</td>
<td>moment().year()</td>
<td>接受从 -270,000 到 270,000 的数字。</td>
</tr>
<tr>
<td>获取或设置<strong>月份</strong></td>
<td>month</td>
<td>moment().month()</td>
<td>接受从 0 到 11 的数字。 如果超出范围，它将冒泡到年份。</td>
</tr>
<tr>
<td>获取或设置<strong>月中的第几天</strong></td>
<td>date</td>
<td>moment().date()</td>
<td>接受从 1 到 31 的数字。 如果超出范围，它将冒泡到几个月。</td>
</tr>
<tr>
<td>获取或设置<strong>星期几</strong></td>
<td>day/days</td>
<td>moment().day()</td>
<td>该方法可用于设置星期几，星期日为 0，星期六为 6。</td>
</tr>
<tr>
<td>获取或设置<strong>一年中的第几周</strong></td>
<td>week/weeks</td>
<td>moment().week()</td>
<td></td>
</tr>
<tr>
<td>获取或设置<strong>一年中的第几天</strong></td>
<td>dayOfYear</td>
<td>moment().dayOfYear()</td>
<td>接受从 1 到 366 的数字。 如果超出范围，它将冒泡到年份。</td>
</tr>
<tr>
<td>获取或设置<strong>小时</strong></td>
<td>hour/hours</td>
<td>moment().hour()</td>
<td>接受从 0 到 23 的数字。 如果超出范围，它将冒泡到当天。</td>
</tr>
<tr>
<td>获取或设置<strong>分钟</strong></td>
<td>minute/minutes</td>
<td>moment().minute()</td>
<td>接受从 0 到 59 的数字。 如果超出范围，它将冒泡到小时。</td>
</tr>
<tr>
<td>获取或设置<strong>秒数</strong></td>
<td>second/seconds</td>
<td>moment().second()</td>
<td>接受从 0 到 59 的数字。 如果超出范围，它将冒泡到分钟。</td>
</tr>
<tr>
<td>获取或设置<strong>毫秒数</strong></td>
<td>millisecond/milliseconds</td>
<td>moment().millisecond()</td>
<td>接受从 0 到 999 的数字。 如果超出范围，它将冒泡到秒。</td>
</tr>
</tbody>
</table>
</details>
<div class="custom-container tip"><p class="custom-container-title">当然也可以通过 get()方法获取对应值</p>
<p><code>moment().get(unit) === moment()[unit]()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"month"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 to 11</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"date"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"hour"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"minute"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"second"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"millisecond"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">可以通过 set()方法赋值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"year"</span><span class="token punctuation">,</span> <span class="token number">2013</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"month"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// April</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"date"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"hour"</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"minute"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"second"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"millisecond"</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2013</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div>
<h3 id="_2-3-开始、结束时间" tabindex="-1"><a class="header-anchor" href="#_2-3-开始、结束时间" aria-hidden="true">#</a> 2.3 开始、结束时间</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// moment().startOf(String);</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to January 1st, 12:00 am this year</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"month"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to the first of this month, 12:00 am</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"quarter"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to the beginning of the current quarter, 1st day of months, 12:00 am</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"week"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to the first day of this week, 12:00 am</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"isoWeek"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to the first day of this week according to ISO 8601, 12:00 am</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to 12:00 am today</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"date"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to 12:00 am today</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"hour"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to now, but with 0 mins, 0 secs, and 0 ms</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"minute"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set to now, but with 0 seconds and 0 milliseconds</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">"second"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// same as moment().milliseconds(0);</span>

<span class="token comment">// moment().endOf(String);</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endOf</span><span class="token punctuation">(</span><span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_03-计算" tabindex="-1"><a class="header-anchor" href="#_03-计算" aria-hidden="true">#</a> 03. 计算</h2>
<h3 id="_3-1-添加、减去" tabindex="-1"><a class="header-anchor" href="#_3-1-添加、减去" aria-hidden="true">#</a> 3.1 添加、减去</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加</span>
<span class="token comment">// moment().add(Number, String);</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 简写</span>
<span class="token comment">// moment().add(Duration);</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// moment().add(Object);</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">days</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">months</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 特殊</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// January 31</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"months"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// February 28</span>

<span class="token comment">// 减去【与添加同理】</span>
<span class="token comment">// moment().subtract(Number, String);</span>
<span class="token comment">// moment().subtract(Duration);</span>
<span class="token comment">// moment().subtract(Object);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><details><summary>查看简写速记</summary>
<table>
<thead>
<tr>
<th>Key</th>
<th>速记</th>
</tr>
</thead>
<tbody>
<tr>
<td>年</td>
<td>y</td>
</tr>
<tr>
<td>季度</td>
<td>Q</td>
</tr>
<tr>
<td>几个月</td>
<td>M</td>
</tr>
<tr>
<td>周</td>
<td>w</td>
</tr>
<tr>
<td>天</td>
<td>d</td>
</tr>
<tr>
<td>小时</td>
<td>h</td>
</tr>
<tr>
<td>分钟</td>
<td>m</td>
</tr>
<tr>
<td>秒</td>
<td>s</td>
</tr>
<tr>
<td>毫秒</td>
<td>ms</td>
</tr>
</tbody>
</table>
</details>
<h3 id="_3-2-时间差" tabindex="-1"><a class="header-anchor" href="#_3-2-时间差" aria-hidden="true">#</a> 3.2 时间差</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// moment().diff(Moment|String|Number|Date|Array, String, Boolean);</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2007</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2007</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 86400000</span>
a<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
b<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token string">"years"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
c<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token string">"years"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1.75</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_3-3-多日期时间比较" tabindex="-1"><a class="header-anchor" href="#_3-3-多日期时间比较" aria-hidden="true">#</a> 3.3 多日期时间比较</h3>
<ul>
<li>最大</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// moment.max(Moment[,Moment...]);</span>
<span class="token comment">// moment.max(Moment[]);</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
moment<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b</span>

<span class="token keyword">let</span> friends <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Dan"</span><span class="token punctuation">,</span> <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token string">"11.12.1977"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mary"</span><span class="token punctuation">,</span> <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token string">"11.12.1986"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Stephan"</span><span class="token punctuation">,</span> <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token string">"11.01.1993"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> friendsBirthDays <span class="token operator">=</span> friends<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">friend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">moment</span><span class="token punctuation">(</span>friend<span class="token punctuation">.</span>birthday<span class="token punctuation">,</span> <span class="token string">"DD.MM.YYYY"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
moment<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>friendsBirthDays<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '11.01.1993'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>最小</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// moment.min(Moment[,Moment...]);</span>
<span class="token comment">// moment.min(Moment[]);</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
moment<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
moment<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-4-两日期时间比较" tabindex="-1"><a class="header-anchor" href="#_3-4-两日期时间比较" aria-hidden="true">#</a> 3.4 两日期时间比较</h3>
<div class="custom-container tip"><p class="custom-container-title">方法传参</p>
<p>isSame、isBefore、isAfter 方法中，第一个参数为日期信息，第二个为可选参数（year、y、month、M、day、d、h、m、s）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Fn</span><span class="token punctuation">(</span>Moment <span class="token operator">|</span> String <span class="token operator">|</span> Number <span class="token operator">|</span> Date <span class="token operator">|</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Fn</span><span class="token punctuation">(</span>Moment <span class="token operator">|</span> String <span class="token operator">|</span> Number <span class="token operator">|</span> Date <span class="token operator">|</span> Array<span class="token punctuation">,</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>
<ul>
<li>是否相同 <code>isSame</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSame</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSame</span><span class="token punctuation">(</span><span class="token string">"2023-10-22"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSame</span><span class="token punctuation">(</span><span class="token string">"2023-10-22"</span><span class="token punctuation">,</span> <span class="token string">"month"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSame</span><span class="token punctuation">(</span><span class="token string">"2022-12-31"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSame</span><span class="token punctuation">(</span><span class="token string">"2023-01-01"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>是否之前 <code>isBefore</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span><span class="token string">"2023-10-21"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span><span class="token string">"2023-12-31"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span><span class="token string">"2024-01-01"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>是否之后 <code>isAfter</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-21"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAfter</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAfter</span><span class="token punctuation">(</span><span class="token string">"2023-12-31"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2024-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAfter</span><span class="token punctuation">(</span><span class="token string">"2023-01-01"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>
<p>是否相同或之前 <code>isSameOrBefore</code></p>
</li>
<li>
<p>是否相同或之后 <code>isSameOrAfter</code></p>
</li>
<li>
<p>是否之间 <code>isBetween</code></p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span>moment <span class="token operator">-</span> like<span class="token punctuation">,</span> moment <span class="token operator">-</span> like<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span>moment <span class="token operator">-</span> like<span class="token punctuation">,</span> moment <span class="token operator">-</span> like<span class="token punctuation">,</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span>moment <span class="token operator">-</span> like<span class="token punctuation">,</span> moment <span class="token operator">-</span> like<span class="token punctuation">,</span> String<span class="token punctuation">,</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2023-10-19"</span><span class="token punctuation">,</span> <span class="token string">"2023-10-25"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2022-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2022-10-19"</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true, since moment(undefined) evaluates as moment()</span>

<span class="token comment">// isBetween的参数中，小值应该在前边</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2023-10-19"</span><span class="token punctuation">,</span> <span class="token string">"2023-10-25"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2023-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2023-10-25"</span><span class="token punctuation">,</span> <span class="token string">"2023-10-19"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2021-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2021-01-01"</span><span class="token punctuation">,</span> <span class="token string">"2023-01-01"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2021-10-20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBetween</span><span class="token punctuation">(</span><span class="token string">"2020-12-31"</span><span class="token punctuation">,</span> <span class="token string">"2023-01-01"</span><span class="token punctuation">,</span> <span class="token string">"year"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-5-判断是否" tabindex="-1"><a class="header-anchor" href="#_3-5-判断是否" aria-hidden="true">#</a> 3.5 判断是否</h3>
<ul>
<li>时间是否有效 <code>isValid</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 判断是否有效时间</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"2013-02-08 09+09:00"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">"this is not a timestamp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>是否 Moment <code>isMoment</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>moment<span class="token punctuation">.</span><span class="token function">isMoment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
moment<span class="token punctuation">.</span><span class="token function">isMoment</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
moment<span class="token punctuation">.</span><span class="token function">isMoment</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>是否日期 <code>isDate</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>moment<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
moment<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
moment<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>是否闰年 <code>isLeapYear</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2000</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2001</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
