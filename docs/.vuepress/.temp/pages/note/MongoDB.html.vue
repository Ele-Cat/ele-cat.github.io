<template><h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1>
<h2 id="_01-nosql-简介" tabindex="-1"><a class="header-anchor" href="#_01-nosql-简介" aria-hidden="true">#</a> 01.NoSQL 简介</h2>
<blockquote>
<p>NoSQL(NoSQL = Not Only SQL )，意即&quot;不仅仅是 SQL&quot;。</p>
</blockquote>
<h3 id="_1-1-什么是-nosql" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-nosql" aria-hidden="true">#</a> 1.1 什么是 NoSQL？</h3>
<ul>
<li>NoSQL，指的是非关系型的数据库。NoSQL 有时也称作 Not Only SQL 的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。</li>
<li>NoSQL 用于超大规模数据的存储。（例如谷歌或 Facebook 每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。</li>
</ul>
<h3 id="_1-2-nosql-的优点-缺点" tabindex="-1"><a class="header-anchor" href="#_1-2-nosql-的优点-缺点" aria-hidden="true">#</a> 1.2 NoSQL 的优点/缺点</h3>
<ul>
<li>优点
<ul>
<li>高可扩展性</li>
<li>分布式计算</li>
<li>低成本</li>
<li>架构的灵活性，半结构化数据</li>
<li>没有复杂的关系</li>
</ul>
</li>
<li>缺点
<ul>
<li>没有标准化</li>
<li>有限的查询功能（到目前为止）</li>
<li>最终一致是不直观的程序</li>
</ul>
</li>
</ul>
<h2 id="_02-mongodb-是什么" tabindex="-1"><a class="header-anchor" href="#_02-mongodb-是什么" aria-hidden="true">#</a> 02.MongoDB 是什么</h2>
<ul>
<li>MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。</li>
<li>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。</li>
</ul>
<h3 id="_2-1-主要特点" tabindex="-1"><a class="header-anchor" href="#_2-1-主要特点" aria-hidden="true">#</a> 2.1 主要特点</h3>
<ul>
<li>MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。</li>
<li>你可以在 MongoDB 记录中设置任何属性的索引 (如：FirstName=&quot;Sameer&quot;,Address=&quot;8 Gandhi Road&quot;)来实现更快的排序。</li>
<li>你可以通过本地或者网络创建数据镜像，这使得 MongoDB 有更强的扩展性。</li>
<li>如果负载的增加（需要更多的存储空间和更强的处理能力），它可以分布在计算机网络中的其他节点上这就是所谓的分片。</li>
<li>Mongo 支持丰富的查询表达式。查询指令使用 JSON 形式的标记，可轻易查询文档中内嵌的对象及数组。</li>
<li>MongoDb 使用 update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。</li>
<li>Mongodb 中的 Map/reduce 主要是用来对数据进行批量处理和聚合操作。</li>
<li>Map 和 Reduce。Map 函数调用 emit(key,value)遍历集合中所有的记录，将 key 与 value 传给 Reduce 函数进行处理。</li>
<li>Map 函数和 Reduce 函数是使用 Javascript 编写的，并可以通过 db.runCommand 或 mapreduce 命令来执行 MapReduce 操作。</li>
<li>GridFS 是 MongoDB 中的一个内置功能，可以用于存放大量小文件。</li>
<li>MongoDB 允许在服务端执行脚本，可以用 Javascript 编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。</li>
<li>MongoDB 支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。</li>
<li>MongoDB 安装简单。</li>
</ul>
<h3 id="_2-2-下载-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-下载-安装" aria-hidden="true">#</a> 2.2 下载&amp;安装</h3>
<ul>
<li><a href="https://www.mongodb.com/try/download/shell" target="_blank" rel="noopener noreferrer">MongoDB Shell<ExternalLinkIcon/></a></li>
<li><a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noopener noreferrer">MongoDB Compass(GUI)<ExternalLinkIcon/></a></li>
<li><a href="https://www.runoob.com/mongodb/mongodb-window-install.html" target="_blank" rel="noopener noreferrer">Windows MongoDB<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_03-mongodb-概念解析" tabindex="-1"><a class="header-anchor" href="#_03-mongodb-概念解析" aria-hidden="true">#</a> 03.MongoDB 概念解析</h2>
<h3 id="_3-1-基础概念" tabindex="-1"><a class="header-anchor" href="#_3-1-基础概念" aria-hidden="true">#</a> 3.1 基础概念</h3>
<table>
<thead>
<tr>
<th>SQL 术语/概念</th>
<th>MongoDB 术语/概念</th>
<th>解释/说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>database</td>
<td>database</td>
<td>数据库</td>
</tr>
<tr>
<td>table</td>
<td>collection</td>
<td>数据库表/集合</td>
</tr>
<tr>
<td>row</td>
<td>document</td>
<td>数据记录行/文档</td>
</tr>
<tr>
<td>column</td>
<td>field</td>
<td>数据字段/域</td>
</tr>
<tr>
<td>index</td>
<td>index</td>
<td>索引</td>
</tr>
<tr>
<td>table joins</td>
<td></td>
<td>表连接,MongoDB 不支持</td>
</tr>
<tr>
<td>primary key</td>
<td>primary key</td>
<td>主键,MongoDB 自动将_id 字段设置为主键</td>
</tr>
</tbody>
</table>
<h4 id="_3-1-1-数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-1-数据库" aria-hidden="true">#</a> 3.1.1 数据库</h4>
<ul>
<li>一个 mongodb 中可以建立多个数据库。</li>
<li>MongoDB 的默认数据库为&quot;db&quot;，该数据库存储在 data 目录中。</li>
<li>MongoDB 的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。</li>
</ul>
<h4 id="_2-1-2-集合" tabindex="-1"><a class="header-anchor" href="#_2-1-2-集合" aria-hidden="true">#</a> 2.1.2 集合</h4>
<ul>
<li>集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。</li>
<li>集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。</li>
</ul>
<h4 id="_2-1-3-文档-document" tabindex="-1"><a class="header-anchor" href="#_2-1-3-文档-document" aria-hidden="true">#</a> 2.1.3 文档(Document)</h4>
<p>文档是一组键值(key-value)对(即 BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。</p>
<h3 id="_3-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-2-数据类型" aria-hidden="true">#</a> 3.2 数据类型</h3>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>String</td>
<td>字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。</td>
</tr>
<tr>
<td>Integer</td>
<td>整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。</td>
</tr>
<tr>
<td>Boolean</td>
<td>布尔值。用于存储布尔值（真/假）。</td>
</tr>
<tr>
<td>Double</td>
<td>双精度浮点值。用于存储浮点值。</td>
</tr>
<tr>
<td>Min/Max keys</td>
<td>将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。</td>
</tr>
<tr>
<td>Array</td>
<td>用于将数组或列表或多个值存储为一个键。</td>
</tr>
<tr>
<td>Timestamp</td>
<td>时间戳。记录文档修改或添加的具体时间。</td>
</tr>
<tr>
<td>Object</td>
<td>用于内嵌文档。</td>
</tr>
<tr>
<td>Null</td>
<td>用于创建空值。</td>
</tr>
<tr>
<td>Symbol</td>
<td>符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。</td>
</tr>
<tr>
<td>Date</td>
<td>日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。</td>
</tr>
<tr>
<td>Object ID</td>
<td>对象 ID。用于创建文档的 ID。</td>
</tr>
<tr>
<td>Binary Data</td>
<td>二进制数据。用于存储二进制数据。</td>
</tr>
<tr>
<td>Code</td>
<td>代码类型。用于在文档中存储 JavaScript 代码。</td>
</tr>
<tr>
<td>Regular expression</td>
<td>正则表达式类型。用于存储正则表达式。</td>
</tr>
</tbody>
</table>
<h2 id="_04-数据库连接" tabindex="-1"><a class="header-anchor" href="#_04-数据库连接" aria-hidden="true">#</a> 04.数据库连接</h2>
<ul>
<li>安装依赖</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> mongoose
<span class="token function">npm</span> i -S mongoose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>创建连接 /db/index.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mongoose"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  mongoose
    <span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">"mongodb://127.0.0.1:27017/learn"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// useNewUrlParser: true,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"数据库连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"数据库连接失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>连接数据库 /app.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MongoConnect <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./db"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">MongoConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_05-数据库操作" tabindex="-1"><a class="header-anchor" href="#_05-数据库操作" aria-hidden="true">#</a> 05.数据库操作</h2>
<h3 id="_5-1-创建数据库" tabindex="-1"><a class="header-anchor" href="#_5-1-创建数据库" aria-hidden="true">#</a> 5.1 创建数据库</h3>
</template>
