import{_ as t,r as c,o as l,c as i,e as n,a as e,F as r,b as s,h as p}from"./app.0b740755.js";var o="/assets/1690699185775.ef00cb0f.png";const u={},b=n("h1",{id:"git-\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" Git \u64CD\u4F5C")],-1),m=s("\u5E73\u65F6\u4F7F\u7528 Git \u7684\u65F6\u5019\uFF0C\u5F88\u591A\u7684 Git \u547D\u4EE4\u4E0D\u662F\u5F88\u5E38\u7528\uFF0C\u5DE5\u4F5C\u4E2D\u4E00\u822C\u6211\u4EEC\u4F1A\u914D\u5408\u4E00\u4E9B\u53EF\u89C6\u5316\u5DE5\u5177\u3010"),d={href:"https://download.tortoisegit.org/tgit/",target:"_blank",rel:"noopener noreferrer"},k=s("TortoiseGit"),h=s("\u3001"),g={href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"},f=s("sourcetree"),$=s("\u3011\uFF0C\u6216\u8005\u7F16\u8F91\u5668\u3010VSCode\u3011\u81EA\u5E26\u7684\u4E00\u4E9B\u63D2\u4EF6\u53BB\u7EF4\u62A4 Git \u4ED3\u5E93\uFF0C\u4F46\u662F\u6211\u4EEC\u4E5F\u8981\u8BB0\u5F97\u4E00\u4E9B\u5E38\u7528 Git \u547D\u4EE4\u6765\u5E94\u53D8\u4E00\u4E9B\u7279\u6B8A\u7684\u573A\u666F\uFF0C\u4E0B\u9762\u662F\u6211\u6536\u5F55\u6574\u7406\u7684\u5E38\u7528\u548C\u4E0D\u5E38\u7528\u7684\u4E00\u4E9B Git \u547D\u4EE4\u3002"),_=p('<h2 id="_01-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_01-\u4ECB\u7ECD" aria-hidden="true">#</a> 01. \u4ECB\u7ECD</h2><p>Git \u662F\u76EE\u524D\u4E16\u754C\u4E0A\u6700\u5148\u8FDB\u7684\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u3002</p><p><img src="'+o+'" alt="\u5DE5\u4F5C\u539F\u7406 / \u6D41\u7A0B"></p><ul><li>Workspace\uFF1A\u5DE5\u4F5C\u533A</li><li>Index / Stage\uFF1A\u6682\u5B58\u533A</li><li>Repository\uFF1A\u4ED3\u5E93\u533A\uFF08\u6216\u672C\u5730\u4ED3\u5E93\uFF09</li><li>Remote\uFF1A\u8FDC\u7A0B\u4ED3\u5E93</li></ul><h2 id="_02-\u8D44\u6E90\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_02-\u8D44\u6E90\u4E0B\u8F7D" aria-hidden="true">#</a> 02. \u8D44\u6E90\u4E0B\u8F7D</h2>',5),v={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},x=s("Git"),w={href:"https://download.tortoisegit.org/tgit/",target:"_blank",rel:"noopener noreferrer"},y=s("TortoiseGit"),G={href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"},q=s("sourcetree"),E=p(`<h2 id="_03-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_03-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 03. \u5E38\u7528\u547D\u4EE4</h2><h3 id="_3-01-\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_3-01-\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> 3.01 \u521D\u59CB\u5316\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDC\u7A0B\u62C9\u53D6</span>
$ <span class="token function">git</span> clone \u4ED3\u5E93\u5730\u5740

<span class="token comment"># init\u547D\u4EE4</span>
$ <span class="token function">git</span> init

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u8BE5\u76EE\u5F55\u4F1A\u4F5C\u4E3Agit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init \u9879\u76EE\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-02-\u521B\u5EFA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_3-02-\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a> 3.02 \u521B\u5EFA\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9996\u5148\u6211\u4EEC\u53EF\u4EE5\u5148\u67E5\u770B\u4E00\u4E0B\u76EE\u524D\u6240\u6709\u7684\u5206\u652F</span>
$ <span class="token function">git</span> branch -a

<span class="token comment"># \u521B\u5EFA\u81EA\u5DF1\u7684\u5206\u652F</span>
$ <span class="token function">git</span> branch \u5206\u652F\u540D\u79F0

<span class="token comment"># \u5207\u6362\u5230\u81EA\u5DF1\u521B\u5EFA\u7684\u5206\u652F</span>
$ <span class="token function">git</span> checkout \u9700\u8981\u5207\u6362\u5230\u7684\u5206\u652F\u540D\u79F0

<span class="token comment"># \u4E0A\u8FF0\u4E24\u4E2A\u6307\u4EE4\u53EF\u4EE5\u5408\u5E76\u6210\u4E0B\u9762\u7684\u8FD9\u4E00\u4E2A\u6307\u4EE4\uFF0C\u300C\u521B\u5EFA\u5E76\u5207\u6362\u5230\u5206\u652F\u300D</span>
$ <span class="token function">git</span> checkout -b \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_3-03-\u63D0\u4EA4\u4EE3\u7801\u5230\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-03-\u63D0\u4EA4\u4EE3\u7801\u5230\u7F13\u5B58" aria-hidden="true">#</a> 3.03 \u63D0\u4EA4\u4EE3\u7801\u5230\u7F13\u5B58</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-04-\u67E5\u770B\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_3-04-\u67E5\u770B\u72B6\u6001" aria-hidden="true">#</a> 3.04 \u67E5\u770B\u72B6\u6001</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7248\u672C\u5386\u53F2</span>
$ <span class="token function">git</span> log

<span class="token comment"># \u663E\u793A\u63D0\u4EA4\u7684\u5386\u53F2\u548C\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> log --stat

<span class="token comment"># \u663E\u793A\u8FC7\u53BB5(n)\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># \u663E\u793A\u8BE5\u4ED3\u5E93\u6240\u6709\u63D0\u4EA4\u8FC7\u4EE3\u7801\u7684\u7528\u6237\uFF0C\u5E76\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u540D</span>
$ <span class="token function">git</span> shortlog -sn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-05-\u5220\u9664\u7F13\u5B58\u4E2D\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-05-\u5220\u9664\u7F13\u5B58\u4E2D\u7684\u6587\u4EF6" aria-hidden="true">#</a> 3.05 \u5220\u9664\u7F13\u5B58\u4E2D\u7684\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u6CA1\u8BBE\u7F6E.gitignore\u4E0D\u5C0F\u5FC3\u4E0A\u4F20\u4E86\u4E00\u4E9B\u4E0D\u60F3\u4E0A\u4F20\u7684\u4E1C\u897F\u53EF\u4EE5\u5220\u9664\u6389</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached \u6587\u4EF6\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-06-\u4EE3\u7801\u63D0\u4EA4\u7684\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_3-06-\u4EE3\u7801\u63D0\u4EA4\u7684\u6CE8\u91CA" aria-hidden="true">#</a> 3.06 \u4EE3\u7801\u63D0\u4EA4\u7684\u6CE8\u91CA</h3><p>\u4E00\u822C\u63D0\u4EA4\u4EE3\u7801\u7684\u65F6\u5019\u6211\u4EEC\u90FD\u8981\u5199\u4E0A\u6CE8\u91CA\uFF0C\u800C\u4E14\u5199\u6CE8\u91CA\u4E5F\u6709\u4E00\u5B9A\u7684\u89C4\u8303\uFF0C\u7136\u540E\u8FD9\u4E2A\u89C4\u8303\u8DDF\u81EA\u5DF1\u7684\u516C\u53F8\u6709\u5173\uFF0C\u6309\u7167\u81EA\u5DF1\u516C\u53F8\u7684\u89C4\u8303\u6765\u63D0\u4EA4\u5C31\u884C\u4E86\uFF0C\u53E6\u5916\u4E00\u822C\u6211\u4EEC\u4F7F\u7528\u7684\u63D0\u4EA4\u89C4\u8303\u6709\u6BD4\u5982\u8BF4\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u91CA\u7C7B\u578B</p><ul><li>feat\uFF1A\u589E\u52A0\u65B0\u529F\u80FD</li><li>fix\uFF1A\u4FEE\u590D bug</li><li>docs\uFF1A\u53EA\u6539\u52A8\u6587\u6863</li><li>style\uFF1A\u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u6539\u52A8\uFF09</li><li>refactor\uFF1A\u91CD\u6784</li><li>test\uFF1A\u589E\u52A0\u6D4B\u8BD5</li></ul></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit -m <span class="token string">&quot;\u6CE8\u91CA\u5185\u5BB9&quot;</span>
<span class="token comment"># eg. git commit -m &quot;feat: \u5B8C\u6210\u4E86\u8BA2\u5355\u6A21\u5757&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-07-\u4EE3\u7801\u62C9\u53D6" tabindex="-1"><a class="header-anchor" href="#_3-07-\u4EE3\u7801\u62C9\u53D6" aria-hidden="true">#</a> 3.07 \u4EE3\u7801\u62C9\u53D6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728push\u524D\u4E00\u5B9A\u5148\u62C9\u53D6\u4E0B</span>
$ <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-08-\u4EE3\u7801\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_3-08-\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a> 3.08 \u4EE3\u7801\u63D0\u4EA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin \u63D0\u4EA4\u7684\u5206\u652F\u540D\u5B57<span class="token punctuation">(</span>\u6BD4\u5982\u8BF4\u4E3B\u5206\u652Forigin master<span class="token punctuation">)</span>

<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
$ <span class="token function">git</span> push --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-09-\u4EE3\u7801\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_3-09-\u4EE3\u7801\u5408\u5E76" aria-hidden="true">#</a> 3.09 \u4EE3\u7801\u5408\u5E76</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> merge \u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-10-\u4EE3\u7801\u56DE\u6EDA" tabindex="-1"><a class="header-anchor" href="#_3-10-\u4EE3\u7801\u56DE\u6EDA" aria-hidden="true">#</a> 3.10 \u4EE3\u7801\u56DE\u6EDA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u9000\u5230\u4E0A\u4E2A\u7248\u672C</span>
$ <span class="token function">git</span> reset --hard HEAD^

<span class="token comment"># \u56DE\u9000\u5230n\u6B21\u63D0\u4EA4\u4E4B\u524D</span>
$ <span class="token function">git</span> reset --hard HEAD~n

<span class="token comment"># \u56DE\u9000\u5230\u6307\u5B9A\u63D0\u4EA4\u7248\u672C</span>
<span class="token function">git</span> reset --hard commit\u7684\u54C8\u5E0C\u503C
<span class="token comment">#\u8FD9\u4E2A\u54C8\u5E0C\u503C\u5C31\u662F\u8F93\u5165git log\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u7684\u4E00\u5927\u4E32\u5B57\u7B26</span>
<span class="token comment">#\u6BD4\u5982\u8BF4 git reset --hard 92f1eb5aa5db9e04753e75a37ffd76f793cb281e</span>

<span class="token comment"># \u56DE\u6EDA\u540E\u6709\u53EF\u80FD\u4EE3\u7801\u4F1A\u63D0\u4EA4\u5931\u8D25\uFF0C\u5FC5\u987B\u8FDB\u884C\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B</span>
$ <span class="token function">git</span> push origin HEAD --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-11-\u8FDC\u7A0B\u4ED3\u5E93\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_3-11-\u8FDC\u7A0B\u4ED3\u5E93\u63A7\u5236" aria-hidden="true">#</a> 3.11 \u8FDC\u7A0B\u4ED3\u5E93\u63A7\u5236</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># \u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote set-url origin \u4ED3\u5E93url

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin

<span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin \u4ED3\u5E93url
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_04-\u5168\u90E8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_04-\u5168\u90E8\u547D\u4EE4" aria-hidden="true">#</a> 04. \u5168\u90E8\u547D\u4EE4</h2><h3 id="_4-01-\u65B0\u5EFA-init" tabindex="-1"><a class="header-anchor" href="#_4-01-\u65B0\u5EFA-init" aria-hidden="true">#</a> 4.01 \u65B0\u5EFA-init</h3><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 git \u7248\u672C\u5E93\u3002\u8FD9\u4E2A\u7248\u672C\u5E93\u7684\u914D\u7F6E\u3001\u5B58\u50A8\u7B49\u4FE1\u606F\u4F1A\u88AB\u4FDD\u5B58\u5230.git \u6587\u4EF6\u5939\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316\u5F53\u524D\u9879\u76EE</span>
$ <span class="token function">git</span> init

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># \u5728\u6307\u5B9A\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Git \u4ED3\u5E93\u3002\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A directory\uFF0C\u53EA\u5305\u542B .git \u5B50\u76EE\u5F55\u7684\u7A7A\u76EE\u5F55\u3002</span>
$ <span class="token function">git</span> init --bare <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
<span class="token comment"># \u8FD9\u4E2A\u547D\u4EE4\u5C31\u662F\u5C06\u4E00\u4E2A\u7248\u672C\u5E93\u62F7\u8D1D\u5230\u53E6\u4E00\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u540C\u65F6\u4E5F\u5C06\u5206\u652F\u90FD\u62F7\u8D1D\u5230\u65B0\u7684\u7248\u672C\u5E93\u4E2D\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u65B0\u7684\u7248\u672C\u5E93\u4E2D\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># \u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA.gitignore\uFF0C\u914D\u7F6E\u4E0D\u9700\u8981git\u7BA1\u7406\u7684\u6587\u4EF6\u5939</span>
/node_modules
/dist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_4-02-\u914D\u7F6E-config" tabindex="-1"><a class="header-anchor" href="#_4-02-\u914D\u7F6E-config" aria-hidden="true">#</a> 4.02 \u914D\u7F6E-config</h3><p>\u66F4\u6539\u8BBE\u7F6E\u3002\u53EF\u4EE5\u662F\u7248\u672C\u5E93\u7684\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7CFB\u7EDF\u7684\u6216\u5168\u5C40\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span>
$ <span class="token function">git</span> config --list

<span class="token comment"># \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6</span>
$ <span class="token function">git</span> config -e <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># \u8F93\u51FA\u3001\u8BBE\u7F6E\u57FA\u672C\u7684\u5168\u5C40\u53D8\u91CF</span>
$ <span class="token function">git</span> config --global user.email
$ <span class="token function">git</span> config --global user.name

$ <span class="token function">git</span> config --global user.email <span class="token string">&quot;MyEmail@gmail.com&quot;</span>
$ <span class="token function">git</span> config --global user.name <span class="token string">&quot;My Name&quot;</span>

<span class="token comment"># \u67E5\u770B\u8D26\u6237\u4FE1\u606F</span>
$ <span class="token function">git</span> config user.name
$ <span class="token function">git</span> config user.email

<span class="token comment"># \u5B9A\u4E49\u5F53\u524D\u7528\u6237\u6240\u6709\u63D0\u4EA4\u4F7F\u7528\u7684\u4F5C\u8005\u90AE\u7BB1\u3002</span>
$ <span class="token function">git</span> config --global alias.<span class="token operator">&lt;</span>alias-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>git-command<span class="token operator">&gt;</span>

<span class="token comment"># \u4E3AGit\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u5FEB\u6377\u65B9\u5F0F\uFF08\u522B\u540D\uFF09\u3002</span>
$ <span class="token function">git</span> config --system core.editor <span class="token operator">&lt;</span>editor<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_4-03-\u5E2E\u52A9-help" tabindex="-1"><a class="header-anchor" href="#_4-03-\u5E2E\u52A9-help" aria-hidden="true">#</a> 4.03 \u5E2E\u52A9-help</h3><p>git \u5185\u7F6E\u4E86\u5BF9\u547D\u4EE4\u975E\u5E38\u8BE6\u7EC6\u7684\u89E3\u91CA\uFF0C\u53EF\u4EE5\u4F9B\u6211\u4EEC\u5FEB\u901F\u67E5\u9605</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u53EF\u7528\u547D\u4EE4</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span>

<span class="token comment"># \u67E5\u627E\u6240\u6709\u53EF\u7528\u547D\u4EE4</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> -a

<span class="token comment"># \u5728\u6587\u6863\u5F53\u4E2D\u67E5\u627E\u7279\u5B9A\u7684\u547D\u4EE4</span>
<span class="token comment"># git help &lt;\u547D\u4EE4&gt;</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token function">add</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> commit
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-04-\u72B6\u6001-status" tabindex="-1"><a class="header-anchor" href="#_4-04-\u72B6\u6001-status" aria-hidden="true">#</a> 4.04 \u72B6\u6001-status</h3><p>\u663E\u793A\u7D22\u5F15\u6587\u4EF6\uFF08\u4E5F\u5C31\u662F\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\uFF09\u548C\u5F53\u524D\u7684\u5934\u6307\u9488\u6307\u5411\u7684\u63D0\u4EA4\u7684\u4E0D\u540C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5206\u652F\uFF0C\u672A\u8DDF\u8E2A\u6587\u4EF6\uFF0C\u66F4\u6539\u548C\u5176\u4ED6\u4E0D\u540C</span>
$ <span class="token function">git</span> status

<span class="token comment"># \u67E5\u770B\u5176\u4ED6\u7684git status\u7684\u7528\u6CD5</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-05-\u4FE1\u606F-log" tabindex="-1"><a class="header-anchor" href="#_4-05-\u4FE1\u606F-log" aria-hidden="true">#</a> 4.05 \u4FE1\u606F-log</h3><p>\u83B7\u53D6\u67D0\u4E9B\u6587\u4EF6\uFF0C\u67D0\u4E9B\u5206\u652F\uFF0C\u67D0\u6B21\u63D0\u4EA4\u7B49 git \u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> log --stat

<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span>
$ <span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --pretty<span class="token operator">=</span>format:%s

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --grep feature

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span>
$ <span class="token function">git</span> log --follow <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
$ <span class="token function">git</span> log -p <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
$ <span class="token function">git</span> shortlog -sn

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># \u6BD4\u8F83\u6682\u5B58\u533A\u548C\u7248\u672C\u5E93\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --staged

<span class="token comment"># \u6BD4\u8F83\u6682\u5B58\u533A\u548C\u7248\u672C\u5E93\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># \u4EC5\u4EC5\u6BD4\u8F83\u7EDF\u8BA1\u4FE1\u606F</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --stat

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> reflog

<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> br -r

<span class="token comment"># \u521B\u5EFA\u65B0\u7684\u5206\u652F</span>
$ <span class="token function">git</span> br <span class="token operator">&lt;</span>new_branch<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u5404\u4E2A\u5206\u652F\u6700\u540E\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> br -v

<span class="token comment"># \u67E5\u770B\u5DF2\u7ECF\u88AB\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u7684\u5206\u652F</span>
$ <span class="token function">git</span> br --merged

<span class="token comment"># \u67E5\u770B\u5C1A\u672A\u88AB\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u7684\u5206\u652F</span>
$ <span class="token function">git</span> br --no-merged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h3 id="_4-06-\u6DFB\u52A0-add" tabindex="-1"><a class="header-anchor" href="#_4-06-\u6DFB\u52A0-add" aria-hidden="true">#</a> 4.06 \u6DFB\u52A0-add</h3><p>\u6DFB\u52A0\u6587\u4EF6\u5230\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u3002\u5982\u679C\u4F60\u4E0D\u4F7F\u7528 <code>git add</code> \u5C06\u6587\u4EF6\u6DFB\u52A0\u8FDB\u53BB\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u6587\u4EF6\u4E5F\u4E0D\u4F1A\u6DFB\u52A0\u5230\u4E4B\u540E\u7684\u63D0\u4EA4\u4E4B\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u4E00\u4E2A\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> test.js

<span class="token comment"># \u6DFB\u52A0\u4E00\u4E2A\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> /path/to/file/test.js

<span class="token comment"># \u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F</span>
$ <span class="token function">git</span> <span class="token function">add</span> ./*.js

<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span>
<span class="token comment"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> <span class="token function">add</span> -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_4-07-\u5220\u9664-rm" tabindex="-1"><a class="header-anchor" href="#_4-07-\u5220\u9664-rm" aria-hidden="true">#</a> 4.07 \u5220\u9664-rm</h3><p>rm \u548C\u4E0A\u9762\u7684 add \u547D\u4EE4\u76F8\u53CD\uFF0C\u4ECE\u5DE5\u4F5C\u7A7A\u95F4\u4E2D\u53BB\u6389\u67D0\u4E2A\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u79FB\u9664 HelloWorld.js</span>
$ <span class="token function">git</span> <span class="token function">rm</span> HelloWorld.js

<span class="token comment"># \u79FB\u9664\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">rm</span> /pather/to/the/file/HelloWorld.js

<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-08-\u5206\u652F-branch" tabindex="-1"><a class="header-anchor" href="#_4-08-\u5206\u652F-branch" aria-hidden="true">#</a> 4.08 \u5206\u652F-branch</h3><p>\u7BA1\u7406\u5206\u652F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u5217\u547D\u4EE4\u5BF9\u5206\u652F\u8FDB\u884C\u589E\u5220\u6539\u67E5\u5207\u6362\u7B49</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u7684\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -a

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u547D\u540D\u5206\u652F</span>
<span class="token comment"># git branch -m &lt;\u65E7\u540D\u79F0&gt; &lt;\u65B0\u540D\u79F0&gt;</span>
$ <span class="token function">git</span> branch -m <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>new-branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u7F16\u8F91\u5206\u652F\u7684\u4ECB\u7ECD</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span> --edit-description

<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch

<span class="token comment"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -r

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
$ <span class="token function">git</span> branch --track <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> checkout -

<span class="token comment"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
$ <span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u67D0\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> co <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u521B\u5EFA\u65B0\u7684\u5206\u652F\uFF0C\u5E76\u4E14\u5207\u6362\u8FC7\u53BB</span>
$ <span class="token function">git</span> co -b <span class="token operator">&lt;</span>new_branch<span class="token operator">&gt;</span>

<span class="token comment"># \u57FA\u4E8Ebranch\u521B\u5EFA\u65B0\u7684new_branch</span>
$ <span class="token function">git</span> co -b <span class="token operator">&lt;</span>new_branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u628A\u67D0\u6B21\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55checkout\u51FA\u6765\uFF0C\u4F46\u65E0\u5206\u652F\u4FE1\u606F\uFF0C\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F\u4F1A\u81EA\u52A8\u5220\u9664</span>
$ <span class="token function">git</span> co <span class="token variable">$id</span>

<span class="token comment"># \u628A\u67D0\u6B21\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55checkout\u51FA\u6765\uFF0C\u521B\u5EFA\u6210\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> co <span class="token variable">$id</span> -b <span class="token operator">&lt;</span>new_branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u67D0\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> br -d <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u5220\u9664\u67D0\u4E2A\u5206\u652F (\u672A\u88AB\u5408\u5E76\u7684\u5206\u652F\u88AB\u5220\u9664\u7684\u65F6\u5019\u9700\u8981\u5F3A\u5236)</span>
$ <span class="token function">git</span> br -D <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h3 id="_4-09-\u68C0\u51FA-checkout" tabindex="-1"><a class="header-anchor" href="#_4-09-\u68C0\u51FA-checkout" aria-hidden="true">#</a> 4.09 \u68C0\u51FA-checkout</h3><p>\u5C06\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\u66F4\u65B0\u5230\u7D22\u5F15\u6240\u6807\u8BC6\u7684\u6216\u8005\u67D0\u4E00\u7279\u5B9A\u7684\u5DE5\u4F5C\u7A7A\u95F4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u51FA\u4E00\u4E2A\u7248\u672C\u5E93\uFF0C\u9ED8\u8BA4\u5C06\u66F4\u65B0\u5230master\u5206\u652F</span>
$ <span class="token function">git</span> checkout
<span class="token comment"># \u68C0\u51FA\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u5206\u652F</span>
$ <span class="token function">git</span> checkout branchName
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u4E14\u5207\u6362\u8FC7\u53BB\uFF0C\u76F8\u5F53\u4E8E&quot;git branch &lt;\u540D\u5B57&gt;; git checkout &lt;\u540D\u5B57&gt;&quot;</span>
$ <span class="token function">git</span> checkout -b newBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-10-\u540C\u6B65-remote" tabindex="-1"><a class="header-anchor" href="#_4-10-\u540C\u6B65-remote" aria-hidden="true">#</a> 4.10 \u540C\u6B65-remote</h3><p>\u8FDC\u7A0B\u540C\u6B65\u7684\u8FDC\u7AEF\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u670D\u52A1\u5668\u5730\u5740\u548C\u4ED3\u5E93\u540D\u79F0</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@ github:xxx/xxx.git

<span class="token comment"># \u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740(\u7528\u4E8E\u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740)</span>
$ <span class="token function">git</span> remote set-url origin git@ github.com:xxx/xxx.git

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>repository<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token comment"># \u628A\u672C\u5730\u7684\u5206\u652F\u66F4\u65B0\u5230\u8FDC\u7AEForigin\u7684master\u5206\u652F\u4E0A</span>
<span class="token comment"># git push &lt;\u8FDC\u7AEF&gt; &lt;\u5206\u652F&gt;</span>
<span class="token comment"># git push \u76F8\u5F53\u4E8E git push origin master</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force

<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="_4-11-\u64A4\u9500-reset" tabindex="-1"><a class="header-anchor" href="#_4-11-\u64A4\u9500-reset" aria-hidden="true">#</a> 4.11 \u64A4\u9500-reset</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4</span>
$ <span class="token function">git</span> reset --hard

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span>
$ <span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit</span>
<span class="token comment"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u6062\u590D\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u7684\u72B6\u6001</span>
$ <span class="token function">git</span> revert HEAD

<span class="token comment"># \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165</span>
$ <span class="token function">git</span> stash
$ <span class="token function">git</span> stash pop

<span class="token comment"># \u5217\u6240\u6709stash</span>
$ <span class="token function">git</span> stash list

<span class="token comment"># \u6062\u590D\u6682\u5B58\u7684\u5185\u5BB9</span>
$ <span class="token function">git</span> stash apply

<span class="token comment"># \u5220\u9664\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_4-12-\u63D0\u4EA4-commit" tabindex="-1"><a class="header-anchor" href="#_4-12-\u63D0\u4EA4-commit" aria-hidden="true">#</a> 4.12 \u63D0\u4EA4-commit</h3><p>\u5C06\u5F53\u524D\u7D22\u5F15\u7684\u66F4\u6539\u4FDD\u5B58\u4E3A\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0C\u8FD9\u4E2A\u63D0\u4EA4\u5305\u62EC\u7528\u6237\u505A\u51FA\u7684\u66F4\u6539\u4E0E\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A\u9644\u5E26\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> commit -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit -a

<span class="token comment"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span>
$ <span class="token function">git</span> commit -v

<span class="token comment"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span>
$ <span class="token function">git</span> commit --amend <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-13-\u6BD4\u8F83-diff" tabindex="-1"><a class="header-anchor" href="#_4-13-\u6BD4\u8F83-diff" aria-hidden="true">#</a> 4.13 \u6BD4\u8F83-diff</h3><p>\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\u548C\u63D0\u4EA4\u7684\u4E0D\u540C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u76EE\u5F55\u548C\u7D22\u5F15\u7684\u4E0D\u540C</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u663E\u793A\u7D22\u5F15\u548C\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u7684\u4E0D\u540C</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u76EE\u5F55\u548C\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u7684\u4E0D\u540C</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-14-\u67E5\u627E-grep" tabindex="-1"><a class="header-anchor" href="#_4-14-\u67E5\u627E-grep" aria-hidden="true">#</a> 4.14 \u67E5\u627E-grep</h3><p>\u53EF\u4EE5\u5728\u7248\u672C\u5E93\u4E2D\u5FEB\u901F\u67E5\u627E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u884C\u53F7</span>
$ <span class="token function">git</span> config --global grep.lineNumber <span class="token boolean">true</span>

<span class="token comment"># \u662F\u641C\u7D22\u7ED3\u679C\u53EF\u8BFB\u6027\u66F4\u597D</span>
$ <span class="token function">git</span> config --global alias.g <span class="token string">&quot;grep --break --heading --line-number&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-15-\u4FE1\u606F-log" tabindex="-1"><a class="header-anchor" href="#_4-15-\u4FE1\u606F-log" aria-hidden="true">#</a> 4.15 \u4FE1\u606F-log</h3><p>\u663E\u793A\u8FD9\u4E2A\u7248\u672C\u5E93\u7684\u6240\u6709\u63D0\u4EA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4</span>
$ <span class="token function">git</span> log

<span class="token comment"># \u663E\u793A\u67D0\u51E0\u6761\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> log -n <span class="token number">10</span>

<span class="token comment"># \u4EC5\u663E\u793A\u5408\u5E76\u63D0\u4EA4</span>
$ <span class="token function">git</span> log --merges

<span class="token comment"># \u67E5\u770B\u8BE5\u6587\u4EF6\u6BCF\u6B21\u63D0\u4EA4\u8BB0\u5F55</span>
$ <span class="token function">git</span> log <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u6BCF\u6B21\u8BE6\u7EC6\u4FEE\u6539\u5185\u5BB9\u7684diff</span>
$ <span class="token function">git</span> log -p <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u6700\u8FD1\u4E24\u6B21\u8BE6\u7EC6\u4FEE\u6539\u5185\u5BB9\u7684diff</span>
$ <span class="token function">git</span> log -p -2

<span class="token comment">#\u67E5\u770B\u63D0\u4EA4\u7EDF\u8BA1\u4FE1\u606F</span>
$ <span class="token function">git</span> log --stat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_4-16-\u5408\u5E76-merge" tabindex="-1"><a class="header-anchor" href="#_4-16-\u5408\u5E76-merge" aria-hidden="true">#</a> 4.16 \u5408\u5E76-merge</h3><p>\u5408\u5E76\u5C31\u662F\u5C06\u5916\u90E8\u7684\u63D0\u4EA4\u5408\u5E76\u5230\u81EA\u5DF1\u7684\u5206\u652F\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u5176\u4ED6\u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> merge branchName

<span class="token comment"># \u5728\u5408\u5E76\u65F6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5408\u5E76\u540E\u7684\u63D0\u4EA4</span>
<span class="token comment"># \u4E0D\u8981 Fast-Foward \u5408\u5E76\uFF0C\u8FD9\u6837\u53EF\u4EE5\u751F\u6210 merge \u63D0\u4EA4</span>
$ <span class="token function">git</span> merge --no-ff branchName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-17-\u79FB\u52A8-mv" tabindex="-1"><a class="header-anchor" href="#_4-17-\u79FB\u52A8-mv" aria-hidden="true">#</a> 4.17 \u79FB\u52A8-mv</h3><p>\u91CD\u547D\u540D\u6216\u79FB\u52A8\u4E00\u4E2A\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u91CD\u547D\u540D</span>
$ <span class="token function">git</span> <span class="token function">mv</span> test.js test2.js

<span class="token comment"># \u79FB\u52A8</span>
$ <span class="token function">git</span> <span class="token function">mv</span> test.js ./new/path/test.js

<span class="token comment"># \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>

<span class="token comment"># \u5F3A\u5236\u91CD\u547D\u540D\u6216\u79FB\u52A8</span>
<span class="token comment"># \u8FD9\u4E2A\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5C06\u8981\u8986\u76D6\u6389</span>
$ <span class="token function">git</span> <span class="token function">mv</span> -f myFile existingFile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-18-\u6807\u7B7E-tag" tabindex="-1"><a class="header-anchor" href="#_4-18-\u6807\u7B7E-tag" aria-hidden="true">#</a> 4.18 \u6807\u7B7E-tag</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709tag</span>
$ <span class="token function">git</span> tag

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u672C\u5730tag</span>
$ <span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770Btag\u4FE1\u606F</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-19-\u62C9\u53D6-pull" tabindex="-1"><a class="header-anchor" href="#_4-19-\u62C9\u53D6-pull" aria-hidden="true">#</a> 4.19 \u62C9\u53D6-pull</h3><p>\u4ECE\u8FDC\u7AEF\u7248\u672C\u5E93\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u8FDC\u7AEForigin\u7684master\u5206\u652F\u66F4\u65B0\u7248\u672C\u5E93</span>
<span class="token comment"># git pull &lt;\u8FDC\u7AEF&gt; &lt;\u5206\u652F&gt;</span>
$ <span class="token function">git</span> pull origin master

<span class="token comment"># \u6293\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u6240\u6709\u5206\u652F\u66F4\u65B0\u5E76\u5408\u5E76\u5230\u672C\u5730\uFF0C\u4E0D\u8981\u5FEB\u8FDB\u5408\u5E76</span>
$ <span class="token function">git</span> pull --no-ff
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-20-\u64CD\u4F5C-ci" tabindex="-1"><a class="header-anchor" href="#_4-20-\u64CD\u4F5C-ci" aria-hidden="true">#</a> 4.20 \u64CD\u4F5C-ci</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> ci <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
$ <span class="token function">git</span> ci <span class="token builtin class-name">.</span>
<span class="token comment"># \u5C06git add, git rm\u548Cgit ci\u7B49\u64CD\u4F5C\u90FD\u5408\u5E76\u5728\u4E00\u8D77\u505A</span>
$ <span class="token function">git</span> ci -a
$ <span class="token function">git</span> ci -am <span class="token string">&quot;some comments&quot;</span>
<span class="token comment"># \u4FEE\u6539\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u8BB0\u5F55</span>
$ <span class="token function">git</span> ci --amend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-21-\u63D0\u4EA4-rebase-\u614E\u7528" tabindex="-1"><a class="header-anchor" href="#_4-21-\u63D0\u4EA4-rebase-\u614E\u7528" aria-hidden="true">#</a> 4.21 \u63D0\u4EA4-rebase (\u614E\u7528)</h3><p>\u5C06\u4E00\u4E2A\u5206\u652F\u4E0A\u6240\u6709\u7684\u63D0\u4EA4\u5386\u53F2\u90FD\u5E94\u7528\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A\u4E0D\u8981\u5728\u4E00\u4E2A\u5DF2\u7ECF\u516C\u5F00\u7684\u8FDC\u7AEF\u5206\u652F\u4E0A\u4F7F\u7528 rebase.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06experimentBranch\u5E94\u7528\u5230master\u4E0A\u9762</span>
<span class="token comment"># git rebase &lt;basebranch&gt; &lt;topicbranch&gt;</span>
$ <span class="token function">git</span> rebase master experimentBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-22-\u91CD\u7F6E-reset-\u614E\u7528" tabindex="-1"><a class="header-anchor" href="#_4-22-\u91CD\u7F6E-reset-\u614E\u7528" aria-hidden="true">#</a> 4.22 \u91CD\u7F6E-reset (\u614E\u7528)</h3><p>\u5C06\u5F53\u524D\u7684\u5934\u6307\u9488\u590D\u4F4D\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u72B6\u6001\u3002\u8FD9\u6837\u53EF\u4EE5\u4F7F\u4F60\u64A4\u9500 merge\u3001pull\u3001commits\u3001add \u7B49 \u8FD9\u662F\u4E2A\u5F88\u5F3A\u5927\u7684\u547D\u4EE4\uFF0C\u4F46\u662F\u5728\u4F7F\u7528\u65F6\u4E00\u5B9A\u8981\u6E05\u695A\u5176\u6240\u4EA7\u751F\u7684\u540E\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F staging \u533A\u57DF\u6062\u590D\u5230\u4E0A\u6B21\u63D0\u4EA4\u65F6\u7684\u72B6\u6001\uFF0C\u4E0D\u6539\u53D8\u73B0\u5728\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
$ <span class="token function">git</span> reset

<span class="token comment"># \u4F7F staging \u533A\u57DF\u6062\u590D\u5230\u4E0A\u6B21\u63D0\u4EA4\u65F6\u7684\u72B6\u6001\uFF0C\u8986\u76D6\u73B0\u5728\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
$ <span class="token function">git</span> reset --hard

<span class="token comment"># \u5C06\u5F53\u524D\u5206\u652F\u6062\u590D\u5230\u67D0\u6B21\u63D0\u4EA4\uFF0C\u4E0D\u6539\u53D8\u73B0\u5728\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token comment"># \u5728\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u6240\u6709\u7684\u6539\u53D8\u4ECD\u7136\u5B58\u5728</span>
$ <span class="token function">git</span> reset dha78as

<span class="token comment"># \u5C06\u5F53\u524D\u5206\u652F\u6062\u590D\u5230\u67D0\u6B21\u63D0\u4EA4\uFF0C\u8986\u76D6\u73B0\u5728\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token comment"># \u5E76\u4E14\u5220\u9664\u6240\u6709\u672A\u63D0\u4EA4\u7684\u6539\u53D8\u548C\u6307\u5B9A\u63D0\u4EA4\u4E4B\u540E\u7684\u6240\u6709\u63D0\u4EA4</span>
$ <span class="token function">git</span> reset --hard dha78as
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-23-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_4-23-\u5176\u4ED6" aria-hidden="true">#</a> 4.23 \u5176\u4ED6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u4E00\u4E2A\u53EF\u4F9B\u53D1\u5E03\u7684\u538B\u7F29\u5305</span>
$ <span class="token function">git</span> archive

<span class="token comment"># \u6253\u8865\u4E01</span>
$ <span class="token function">git</span> apply <span class="token punctuation">..</span>/sync.patch

<span class="token comment"># \u6D4B\u8BD5\u8865\u4E01\u80FD\u5426\u6210\u529F</span>
$ <span class="token function">git</span> apply --check <span class="token punctuation">..</span>/sync.patch

<span class="token comment"># \u67E5\u770BGit\u7684\u7248\u672C</span>
$ <span class="token function">git</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_05-\u5728\u7EBF\u5B66\u4E60-git-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_05-\u5728\u7EBF\u5B66\u4E60-git-\u64CD\u4F5C" aria-hidden="true">#</a> 05. \u5728\u7EBF\u5B66\u4E60 Git \u64CD\u4F5C</h2>`,92),H=s("\u5F3A\u70C8\u63A8\u8350\uFF1A"),j={href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"},D=s("\u5728\u7EBF\u5730\u5740"),N=n("div",{class:"iframe-box"},[n("iframe",{id:"iframe",style:{height:"600px"},src:"https://learngitbranching.js.org/"})],-1),A=n("h2",{id:"_06-\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_06-\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" 06. \u53C2\u8003\u8D44\u6599")],-1),B={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},F=s("\u5E38\u7528 Git \u547D\u4EE4\u6E05\u5355-\u962E\u4E00\u5CF0"),S={href:"https://github.com/guanguans/notes",target:"_blank",rel:"noopener noreferrer"},V=s("Linux\u3001MySQL\u3001Nginx\u3001PHP\u3001Git\u3001Shell \u7B49\u7B14\u8BB0"),L={href:"https://segmentfault.com/a/1190000022491558",target:"_blank",rel:"noopener noreferrer"},W=s("\u7ED9\u81EA\u5DF1\u70B9\u65F6\u95F4\u518D\u8BB0\u8BB0\u8FD9 200 \u6761 Git \u547D\u4EE4"),I={href:"https://www.kancloud.cn/kancloud/progit/70165",target:"_blank",rel:"noopener noreferrer"},M=s("Pro Git \u7B2C\u4E8C\u7248\uFF08\u4E2D\u6587\u7248\uFF09"),P={href:"https://developer.aliyun.com/article/200546",target:"_blank",rel:"noopener noreferrer"},T=s("\u6DF1\u5165\u7406\u89E3\u5B66\u4E60 Git \u5DE5\u4F5C\u6D41");function C(R,Q){const a=c("ExternalLinkIcon");return l(),i(r,null,[b,n("blockquote",null,[n("p",null,[m,n("a",d,[k,e(a)]),h,n("a",g,[f,e(a)]),$])]),_,n("ul",null,[n("li",null,[n("a",v,[x,e(a)])]),n("li",null,[n("a",w,[y,e(a)])]),n("li",null,[n("a",G,[q,e(a)])])]),E,n("ul",null,[n("li",null,[H,n("a",j,[D,e(a)])])]),N,A,n("ul",null,[n("li",null,[n("a",B,[F,e(a)])]),n("li",null,[n("a",S,[V,e(a)])]),n("li",null,[n("a",L,[W,e(a)])]),n("li",null,[n("a",I,[M,e(a)])]),n("li",null,[n("a",P,[T,e(a)])])])],64)}var J=t(u,[["render",C],["__file","Git.html.vue"]]);export{J as default};
