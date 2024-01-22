<template><h1 id="git-操作" tabindex="-1"><a class="header-anchor" href="#git-操作" aria-hidden="true">#</a> Git 操作</h1>
<blockquote>
<p>平时使用 Git 的时候，很多的 Git 命令不是很常用，工作中一般我们会配合一些可视化工具【<a href="https://download.tortoisegit.org/tgit/" target="_blank" rel="noopener noreferrer">TortoiseGit<ExternalLinkIcon/></a>、<a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">sourcetree<ExternalLinkIcon/></a>】，或者编辑器【VSCode】自带的一些插件去维护 Git 仓库，但是我们也要记得一些常用 Git 命令来应变一些特殊的场景，下面是我收录整理的常用和不常用的一些 Git 命令。</p>
</blockquote>
<h2 id="_01-介绍" tabindex="-1"><a class="header-anchor" href="#_01-介绍" aria-hidden="true">#</a> 01. 介绍</h2>
<p>Git 是目前世界上最先进的分布式版本控制系统。</p>
<p><img src="@source/.vuepress/public/images/1690699185775.png" alt="工作原理 / 流程"></p>
<ul>
<li>Workspace：工作区</li>
<li>Index / Stage：暂存区</li>
<li>Repository：仓库区（或本地仓库）</li>
<li>Remote：远程仓库</li>
</ul>
<h2 id="_02-资源下载" tabindex="-1"><a class="header-anchor" href="#_02-资源下载" aria-hidden="true">#</a> 02. 资源下载</h2>
<ul>
<li><a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a></li>
<li><a href="https://download.tortoisegit.org/tgit/" target="_blank" rel="noopener noreferrer">TortoiseGit<ExternalLinkIcon/></a></li>
<li><a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">sourcetree<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_03-常用命令" tabindex="-1"><a class="header-anchor" href="#_03-常用命令" aria-hidden="true">#</a> 03. 常用命令</h2>
<h3 id="_3-01-初始化项目" tabindex="-1"><a class="header-anchor" href="#_3-01-初始化项目" aria-hidden="true">#</a> 3.01 初始化项目</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 远程拉取</span>
$ <span class="token function">git</span> clone 仓库地址

<span class="token comment"># init命令</span>
$ <span class="token function">git</span> init

<span class="token comment"># 新建一个目录，该目录会作为git代码库</span>
$ <span class="token function">git</span> init 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-02-创建分支" tabindex="-1"><a class="header-anchor" href="#_3-02-创建分支" aria-hidden="true">#</a> 3.02 创建分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 首先我们可以先查看一下目前所有的分支</span>
$ <span class="token function">git</span> branch -a

<span class="token comment"># 创建自己的分支</span>
$ <span class="token function">git</span> branch 分支名称

<span class="token comment"># 切换到自己创建的分支</span>
$ <span class="token function">git</span> checkout 需要切换到的分支名称

<span class="token comment"># 上述两个指令可以合并成下面的这一个指令，「创建并切换到分支」</span>
$ <span class="token function">git</span> checkout -b 分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_3-03-提交代码到缓存" tabindex="-1"><a class="header-anchor" href="#_3-03-提交代码到缓存" aria-hidden="true">#</a> 3.03 提交代码到缓存</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-04-查看状态" tabindex="-1"><a class="header-anchor" href="#_3-04-查看状态" aria-hidden="true">#</a> 3.04 查看状态</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> status

<span class="token comment"># 显示当前分支版本历史</span>
$ <span class="token function">git</span> log

<span class="token comment"># 显示提交的历史和发生变更的文件</span>
$ <span class="token function">git</span> log --stat

<span class="token comment"># 显示过去5(n)次提交</span>
$ <span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># 显示该仓库所有提交过代码的用户，并按提交次数排名</span>
$ <span class="token function">git</span> shortlog -sn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-05-删除缓存中的文件" tabindex="-1"><a class="header-anchor" href="#_3-05-删除缓存中的文件" aria-hidden="true">#</a> 3.05 删除缓存中的文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 如果没设置.gitignore不小心上传了一些不想上传的东西可以删除掉</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-06-代码提交的注释" tabindex="-1"><a class="header-anchor" href="#_3-06-代码提交的注释" aria-hidden="true">#</a> 3.06 代码提交的注释</h3>
<p>一般提交代码的时候我们都要写上注释，而且写注释也有一定的规范，然后这个规范跟自己的公司有关，按照自己公司的规范来提交就行了，另外一般我们使用的提交规范有比如说像下面这样：</p>
<div class="custom-container tip"><p class="custom-container-title">注释类型</p>
<ul>
<li>feat：增加新功能</li>
<li>fix：修复 bug</li>
<li>docs：只改动文档</li>
<li>style：格式（不影响代码运行的改动）</li>
<li>refactor：重构</li>
<li>test：增加测试</li>
</ul>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> commit -m <span class="token string">"注释内容"</span>
<span class="token comment"># eg. git commit -m "feat: 完成了订单模块"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-07-代码拉取" tabindex="-1"><a class="header-anchor" href="#_3-07-代码拉取" aria-hidden="true">#</a> 3.07 代码拉取</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在push前一定先拉取下</span>
$ <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-08-代码提交" tabindex="-1"><a class="header-anchor" href="#_3-08-代码提交" aria-hidden="true">#</a> 3.08 代码提交</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> push origin 提交的分支名字<span class="token punctuation">(</span>比如说主分支origin master<span class="token punctuation">)</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
$ <span class="token function">git</span> push --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-09-代码合并" tabindex="-1"><a class="header-anchor" href="#_3-09-代码合并" aria-hidden="true">#</a> 3.09 代码合并</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> merge 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-10-代码回滚" tabindex="-1"><a class="header-anchor" href="#_3-10-代码回滚" aria-hidden="true">#</a> 3.10 代码回滚</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 回退到上个版本</span>
$ <span class="token function">git</span> reset --hard HEAD^

<span class="token comment"># 回退到n次提交之前</span>
$ <span class="token function">git</span> reset --hard HEAD~n

<span class="token comment"># 回退到指定提交版本</span>
<span class="token function">git</span> reset --hard commit的哈希值
<span class="token comment">#这个哈希值就是输入git log之后可以看到的一大串字符</span>
<span class="token comment">#比如说 git reset --hard 92f1eb5aa5db9e04753e75a37ffd76f793cb281e</span>

<span class="token comment"># 回滚后有可能代码会提交失败，必须进行强制推送到远程</span>
$ <span class="token function">git</span> push origin HEAD --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-11-远程仓库控制" tabindex="-1"><a class="header-anchor" href="#_3-11-远程仓库控制" aria-hidden="true">#</a> 3.11 远程仓库控制</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看远程仓库地址</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># 修改远程仓库地址</span>
$ <span class="token function">git</span> remote set-url origin 仓库url

<span class="token comment"># 删除远程仓库地址</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin

<span class="token comment"># 添加远程仓库地址</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin 仓库url
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_04-全部命令" tabindex="-1"><a class="header-anchor" href="#_04-全部命令" aria-hidden="true">#</a> 04. 全部命令</h2>
<h3 id="_4-01-新建-init" tabindex="-1"><a class="header-anchor" href="#_4-01-新建-init" aria-hidden="true">#</a> 4.01 新建-init</h3>
<p>创建一个新的 git 版本库。这个版本库的配置、存储等信息会被保存到.git 文件夹中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化当前项目</span>
$ <span class="token function">git</span> init

<span class="token comment"># 新建一个目录，将其初始化为Git代码库</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 在指定目录创建一个空的 Git 仓库。运行这个命令会创建一个名为 directory，只包含 .git 子目录的空目录。</span>
$ <span class="token function">git</span> init --bare <span class="token operator">&lt;</span>directory<span class="token operator">></span>

<span class="token comment"># 下载一个项目和它的整个代码历史</span>
<span class="token comment"># 这个命令就是将一个版本库拷贝到另一个目录中，同时也将分支都拷贝到新的版本库中。这样就可以在新的版本库中提交到远程分支</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 项目根目录下新建.gitignore，配置不需要git管理的文件夹</span>
/node_modules
/dist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_4-02-配置-config" tabindex="-1"><a class="header-anchor" href="#_4-02-配置-config" aria-hidden="true">#</a> 4.02 配置-config</h3>
<p>更改设置。可以是版本库的设置，也可以是系统的或全局的</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示当前的Git配置</span>
$ <span class="token function">git</span> config --list

<span class="token comment"># 编辑Git配置文件</span>
$ <span class="token function">git</span> config -e <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># 输出、设置基本的全局变量</span>
$ <span class="token function">git</span> config --global user.email
$ <span class="token function">git</span> config --global user.name

$ <span class="token function">git</span> config --global user.email <span class="token string">"MyEmail@gmail.com"</span>
$ <span class="token function">git</span> config --global user.name <span class="token string">"My Name"</span>

<span class="token comment"># 查看账户信息</span>
$ <span class="token function">git</span> config user.name
$ <span class="token function">git</span> config user.email

<span class="token comment"># 定义当前用户所有提交使用的作者邮箱。</span>
$ <span class="token function">git</span> config --global alias.<span class="token operator">&lt;</span>alias-name<span class="token operator">></span> <span class="token operator">&lt;</span>git-command<span class="token operator">></span>

<span class="token comment"># 为Git命令创建一个快捷方式（别名）。</span>
$ <span class="token function">git</span> config --system core.editor <span class="token operator">&lt;</span>editor<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_4-03-帮助-help" tabindex="-1"><a class="header-anchor" href="#_4-03-帮助-help" aria-hidden="true">#</a> 4.03 帮助-help</h3>
<p>git 内置了对命令非常详细的解释，可以供我们快速查阅</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查找可用命令</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span>

<span class="token comment"># 查找所有可用命令</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> -a

<span class="token comment"># 在文档当中查找特定的命令</span>
<span class="token comment"># git help &lt;命令></span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token function">add</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> commit
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-04-状态-status" tabindex="-1"><a class="header-anchor" href="#_4-04-状态-status" aria-hidden="true">#</a> 4.04 状态-status</h3>
<p>显示索引文件（也就是当前工作空间）和当前的头指针指向的提交的不同</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示分支，未跟踪文件，更改和其他不同</span>
$ <span class="token function">git</span> status

<span class="token comment"># 查看其他的git status的用法</span>
$ <span class="token function">git</span> <span class="token builtin class-name">help</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-05-信息-log" tabindex="-1"><a class="header-anchor" href="#_4-05-信息-log" aria-hidden="true">#</a> 4.05 信息-log</h3>
<p>获取某些文件，某些分支，某次提交等 git 信息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
$ <span class="token function">git</span> log --stat

<span class="token comment"># 搜索提交历史，根据关键词</span>
$ <span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --pretty<span class="token operator">=</span>format:%s

<span class="token comment"># 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --grep feature

<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
$ <span class="token function">git</span> log --follow <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件相关的每一次diff</span>
$ <span class="token function">git</span> log -p <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示过去5次提交</span>
$ <span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
$ <span class="token function">git</span> shortlog -sn

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示暂存区和工作区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 显示暂存区和上一个commit的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># 显示两次提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 显示今天你写了多少行代码</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">"@{0 day ago}"</span>

<span class="token comment"># 比较暂存区和版本库差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --staged

<span class="token comment"># 比较暂存区和版本库差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># 仅仅比较统计信息</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --stat

<span class="token comment"># 显示某次提交的元数据和内容变化</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交发生变化的文件</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交时，某个文件的内容</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># 显示当前分支的最近几次提交</span>
$ <span class="token function">git</span> reflog

<span class="token comment"># 查看远程分支</span>
$ <span class="token function">git</span> br -r

<span class="token comment"># 创建新的分支</span>
$ <span class="token function">git</span> br <span class="token operator">&lt;</span>new_branch<span class="token operator">></span>

<span class="token comment"># 查看各个分支最后提交信息</span>
$ <span class="token function">git</span> br -v

<span class="token comment"># 查看已经被合并到当前分支的分支</span>
$ <span class="token function">git</span> br --merged

<span class="token comment"># 查看尚未被合并到当前分支的分支</span>
$ <span class="token function">git</span> br --no-merged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h3 id="_4-06-添加-add" tabindex="-1"><a class="header-anchor" href="#_4-06-添加-add" aria-hidden="true">#</a> 4.06 添加-add</h3>
<p>添加文件到当前工作空间中。如果你不使用 <code>git add</code> 将文件添加进去，那么这些文件也不会添加到之后的提交之中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 添加一个文件</span>
$ <span class="token function">git</span> <span class="token function">add</span> test.js

<span class="token comment"># 添加一个子目录中的文件</span>
$ <span class="token function">git</span> <span class="token function">add</span> /path/to/file/test.js

<span class="token comment"># 支持正则表达式</span>
$ <span class="token function">git</span> <span class="token function">add</span> ./*.js

<span class="token comment"># 添加指定文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 添加每个变化前，都会要求确认</span>
<span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span>
$ <span class="token function">git</span> <span class="token function">add</span> -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_4-07-删除-rm" tabindex="-1"><a class="header-anchor" href="#_4-07-删除-rm" aria-hidden="true">#</a> 4.07 删除-rm</h3>
<p>rm 和上面的 add 命令相反，从工作空间中去掉某个文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 移除 HelloWorld.js</span>
$ <span class="token function">git</span> <span class="token function">rm</span> HelloWorld.js

<span class="token comment"># 移除子目录中的文件</span>
$ <span class="token function">git</span> <span class="token function">rm</span> /pather/to/the/file/HelloWorld.js

<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-08-分支-branch" tabindex="-1"><a class="header-anchor" href="#_4-08-分支-branch" aria-hidden="true">#</a> 4.08 分支-branch</h3>
<p>管理分支，可以通过下列命令对分支进行增删改查切换等</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看所有的分支和远程分支</span>
$ <span class="token function">git</span> branch -a

<span class="token comment"># 创建一个新的分支</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 重命名分支</span>
<span class="token comment"># git branch -m &lt;旧名称> &lt;新名称></span>
$ <span class="token function">git</span> branch -m <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>new-branch-name<span class="token punctuation">]</span>

<span class="token comment"># 编辑分支的介绍</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span> --edit-description

<span class="token comment"># 列出所有本地分支</span>
$ <span class="token function">git</span> branch

<span class="token comment"># 列出所有远程分支</span>
$ <span class="token function">git</span> branch -r

<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，并切换到该分支</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，指向指定commit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
$ <span class="token function">git</span> branch --track <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 切换到指定分支，并更新工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 切换到上一个分支</span>
$ <span class="token function">git</span> checkout -

<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 合并指定分支到当前分支</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除分支</span>
$ <span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
$ <span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>

<span class="token comment"># 切换到某个分支</span>
$ <span class="token function">git</span> co <span class="token operator">&lt;</span>branch<span class="token operator">></span>

<span class="token comment"># 创建新的分支，并且切换过去</span>
$ <span class="token function">git</span> co -b <span class="token operator">&lt;</span>new_branch<span class="token operator">></span>

<span class="token comment"># 基于branch创建新的new_branch</span>
$ <span class="token function">git</span> co -b <span class="token operator">&lt;</span>new_branch<span class="token operator">></span> <span class="token operator">&lt;</span>branch<span class="token operator">></span>

<span class="token comment"># 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除</span>
$ <span class="token function">git</span> co <span class="token variable">$id</span>

<span class="token comment"># 把某次历史提交记录checkout出来，创建成一个分支</span>
$ <span class="token function">git</span> co <span class="token variable">$id</span> -b <span class="token operator">&lt;</span>new_branch<span class="token operator">></span>

<span class="token comment"># 删除某个分支</span>
$ <span class="token function">git</span> br -d <span class="token operator">&lt;</span>branch<span class="token operator">></span>

<span class="token comment"># 强制删除某个分支 (未被合并的分支被删除的时候需要强制)</span>
$ <span class="token function">git</span> br -D <span class="token operator">&lt;</span>branch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h3 id="_4-09-检出-checkout" tabindex="-1"><a class="header-anchor" href="#_4-09-检出-checkout" aria-hidden="true">#</a> 4.09 检出-checkout</h3>
<p>将当前工作空间更新到索引所标识的或者某一特定的工作空间</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 检出一个版本库，默认将更新到master分支</span>
$ <span class="token function">git</span> checkout
<span class="token comment"># 检出到一个特定的分支</span>
$ <span class="token function">git</span> checkout branchName
<span class="token comment"># 新建一个分支，并且切换过去，相当于"git branch &lt;名字>; git checkout &lt;名字>"</span>
$ <span class="token function">git</span> checkout -b newBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-10-同步-remote" tabindex="-1"><a class="header-anchor" href="#_4-10-同步-remote" aria-hidden="true">#</a> 4.10 同步-remote</h3>
<p>远程同步的远端分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 显示所有远程仓库</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># 显示某个远程仓库的信息</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 查看远程服务器地址和仓库名称</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># 添加远程仓库地址</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@ github:xxx/xxx.git

<span class="token comment"># 设置远程仓库地址(用于修改远程仓库地址)</span>
$ <span class="token function">git</span> remote set-url origin git@ github.com:xxx/xxx.git

<span class="token comment"># 删除远程仓库</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>repository<span class="token operator">></span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
<span class="token comment"># 把本地的分支更新到远端origin的master分支上</span>
<span class="token comment"># git push &lt;远端> &lt;分支></span>
<span class="token comment"># git push 相当于 git push origin master</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force

<span class="token comment"># 推送所有分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="_4-11-撤销-reset" tabindex="-1"><a class="header-anchor" href="#_4-11-撤销-reset" aria-hidden="true">#</a> 4.11 撤销-reset</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 恢复暂存区的指定文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
$ <span class="token function">git</span> reset --hard

<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
$ <span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
$ <span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 恢复最后一次提交的状态</span>
$ <span class="token function">git</span> revert HEAD

<span class="token comment"># 暂时将未提交的变化移除，稍后再移入</span>
$ <span class="token function">git</span> stash
$ <span class="token function">git</span> stash pop

<span class="token comment"># 列所有stash</span>
$ <span class="token function">git</span> stash list

<span class="token comment"># 恢复暂存的内容</span>
$ <span class="token function">git</span> stash apply

<span class="token comment"># 删除暂存区</span>
$ <span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_4-12-提交-commit" tabindex="-1"><a class="header-anchor" href="#_4-12-提交-commit" aria-hidden="true">#</a> 4.12 提交-commit</h3>
<p>将当前索引的更改保存为一个新的提交，这个提交包括用户做出的更改与信息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 提交暂存区到仓库区附带提交信息</span>
$ <span class="token function">git</span> commit -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交暂存区的指定文件到仓库区</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
$ <span class="token function">git</span> commit -a

<span class="token comment"># 提交时显示所有diff信息</span>
$ <span class="token function">git</span> commit -v

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
$ <span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
$ <span class="token function">git</span> commit --amend <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-13-比较-diff" tabindex="-1"><a class="header-anchor" href="#_4-13-比较-diff" aria-hidden="true">#</a> 4.13 比较-diff</h3>
<p>显示当前工作空间和提交的不同</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示工作目录和索引的不同</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 显示索引和最近一次提交的不同</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># 显示工作目录和最近一次提交的不同</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-14-查找-grep" tabindex="-1"><a class="header-anchor" href="#_4-14-查找-grep" aria-hidden="true">#</a> 4.14 查找-grep</h3>
<p>可以在版本库中快速查找</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在搜索结果中显示行号</span>
$ <span class="token function">git</span> config --global grep.lineNumber <span class="token boolean">true</span>

<span class="token comment"># 是搜索结果可读性更好</span>
$ <span class="token function">git</span> config --global alias.g <span class="token string">"grep --break --heading --line-number"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-15-信息-log" tabindex="-1"><a class="header-anchor" href="#_4-15-信息-log" aria-hidden="true">#</a> 4.15 信息-log</h3>
<p>显示这个版本库的所有提交</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示所有提交</span>
$ <span class="token function">git</span> log

<span class="token comment"># 显示某几条提交信息</span>
$ <span class="token function">git</span> log -n <span class="token number">10</span>

<span class="token comment"># 仅显示合并提交</span>
$ <span class="token function">git</span> log --merges

<span class="token comment"># 查看该文件每次提交记录</span>
$ <span class="token function">git</span> log <span class="token operator">&lt;</span>file<span class="token operator">></span>

<span class="token comment"># 查看每次详细修改内容的diff</span>
$ <span class="token function">git</span> log -p <span class="token operator">&lt;</span>file<span class="token operator">></span>

<span class="token comment"># 查看最近两次详细修改内容的diff</span>
$ <span class="token function">git</span> log -p -2

<span class="token comment">#查看提交统计信息</span>
$ <span class="token function">git</span> log --stat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_4-16-合并-merge" tabindex="-1"><a class="header-anchor" href="#_4-16-合并-merge" aria-hidden="true">#</a> 4.16 合并-merge</h3>
<p>合并就是将外部的提交合并到自己的分支中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将其他分支合并到当前分支</span>
$ <span class="token function">git</span> merge branchName

<span class="token comment"># 在合并时创建一个新的合并后的提交</span>
<span class="token comment"># 不要 Fast-Foward 合并，这样可以生成 merge 提交</span>
$ <span class="token function">git</span> merge --no-ff branchName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-17-移动-mv" tabindex="-1"><a class="header-anchor" href="#_4-17-移动-mv" aria-hidden="true">#</a> 4.17 移动-mv</h3>
<p>重命名或移动一个文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重命名</span>
$ <span class="token function">git</span> <span class="token function">mv</span> test.js test2.js

<span class="token comment"># 移动</span>
$ <span class="token function">git</span> <span class="token function">mv</span> test.js ./new/path/test.js

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>

<span class="token comment"># 强制重命名或移动</span>
<span class="token comment"># 这个文件已经存在，将要覆盖掉</span>
$ <span class="token function">git</span> <span class="token function">mv</span> -f myFile existingFile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-18-标签-tag" tabindex="-1"><a class="header-anchor" href="#_4-18-标签-tag" aria-hidden="true">#</a> 4.18 标签-tag</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
$ <span class="token function">git</span> tag

<span class="token comment"># 新建一个tag在当前commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 新建一个tag在指定commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地tag</span>
$ <span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 删除远程tag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># 查看tag信息</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交指定tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交所有tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags

<span class="token comment"># 新建一个分支，指向某个tag</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-19-拉取-pull" tabindex="-1"><a class="header-anchor" href="#_4-19-拉取-pull" aria-hidden="true">#</a> 4.19 拉取-pull</h3>
<p>从远端版本库合并到当前分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 从远端origin的master分支更新版本库</span>
<span class="token comment"># git pull &lt;远端> &lt;分支></span>
$ <span class="token function">git</span> pull origin master

<span class="token comment"># 抓取远程仓库所有分支更新并合并到本地，不要快进合并</span>
$ <span class="token function">git</span> pull --no-ff
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-20-操作-ci" tabindex="-1"><a class="header-anchor" href="#_4-20-操作-ci" aria-hidden="true">#</a> 4.20 操作-ci</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> ci <span class="token operator">&lt;</span>file<span class="token operator">></span>
$ <span class="token function">git</span> ci <span class="token builtin class-name">.</span>
<span class="token comment"># 将git add, git rm和git ci等操作都合并在一起做</span>
$ <span class="token function">git</span> ci -a
$ <span class="token function">git</span> ci -am <span class="token string">"some comments"</span>
<span class="token comment"># 修改最后一次提交记录</span>
$ <span class="token function">git</span> ci --amend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-21-提交-rebase-慎用" tabindex="-1"><a class="header-anchor" href="#_4-21-提交-rebase-慎用" aria-hidden="true">#</a> 4.21 提交-rebase (慎用)</h3>
<p>将一个分支上所有的提交历史都应用到另一个分支上不要在一个已经公开的远端分支上使用 rebase.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将experimentBranch应用到master上面</span>
<span class="token comment"># git rebase &lt;basebranch> &lt;topicbranch></span>
$ <span class="token function">git</span> rebase master experimentBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-22-重置-reset-慎用" tabindex="-1"><a class="header-anchor" href="#_4-22-重置-reset-慎用" aria-hidden="true">#</a> 4.22 重置-reset (慎用)</h3>
<p>将当前的头指针复位到一个特定的状态。这样可以使你撤销 merge、pull、commits、add 等 这是个很强大的命令，但是在使用时一定要清楚其所产生的后果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 使 staging 区域恢复到上次提交时的状态，不改变现在的工作目录</span>
$ <span class="token function">git</span> reset

<span class="token comment"># 使 staging 区域恢复到上次提交时的状态，覆盖现在的工作目录</span>
$ <span class="token function">git</span> reset --hard

<span class="token comment"># 将当前分支恢复到某次提交，不改变现在的工作目录</span>
<span class="token comment"># 在工作目录中所有的改变仍然存在</span>
$ <span class="token function">git</span> reset dha78as

<span class="token comment"># 将当前分支恢复到某次提交，覆盖现在的工作目录</span>
<span class="token comment"># 并且删除所有未提交的改变和指定提交之后的所有提交</span>
$ <span class="token function">git</span> reset --hard dha78as
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-23-其他" tabindex="-1"><a class="header-anchor" href="#_4-23-其他" aria-hidden="true">#</a> 4.23 其他</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 生成一个可供发布的压缩包</span>
$ <span class="token function">git</span> archive

<span class="token comment"># 打补丁</span>
$ <span class="token function">git</span> apply <span class="token punctuation">..</span>/sync.patch

<span class="token comment"># 测试补丁能否成功</span>
$ <span class="token function">git</span> apply --check <span class="token punctuation">..</span>/sync.patch

<span class="token comment"># 查看Git的版本</span>
$ <span class="token function">git</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_05-在线学习-git-操作" tabindex="-1"><a class="header-anchor" href="#_05-在线学习-git-操作" aria-hidden="true">#</a> 05. 在线学习 Git 操作</h2>
<ul>
<li>强烈推荐：<a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">在线地址<ExternalLinkIcon/></a></li>
</ul>
<div class="iframe-box">
  <iframe id="iframe" style="height:600px" src="https://learngitbranching.js.org/"></iframe>
</div>
<h2 id="_06-参考资料" tabindex="-1"><a class="header-anchor" href="#_06-参考资料" aria-hidden="true">#</a> 06. 参考资料</h2>
<ul>
<li><a href="https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noopener noreferrer">常用 Git 命令清单-阮一峰<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/guanguans/notes" target="_blank" rel="noopener noreferrer">Linux、MySQL、Nginx、PHP、Git、Shell 等笔记<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000022491558" target="_blank" rel="noopener noreferrer">给自己点时间再记记这 200 条 Git 命令<ExternalLinkIcon/></a></li>
<li><a href="https://www.kancloud.cn/kancloud/progit/70165" target="_blank" rel="noopener noreferrer">Pro Git 第二版（中文版）<ExternalLinkIcon/></a></li>
<li><a href="https://developer.aliyun.com/article/200546" target="_blank" rel="noopener noreferrer">深入理解学习 Git 工作流<ExternalLinkIcon/></a></li>
</ul>
</template>
