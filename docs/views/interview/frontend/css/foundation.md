# CSS 基础面试题

## Q1: CSS 选择器优先级

```
!important > 内联样式 > ID 选择器 > 类/属性/伪类 > 元素/伪元素 > 通配符

权重计算：
- ID 选择器（#id）        → 0,1,0,0
- 类/属性/伪类（.class）   → 0,0,1,0
- 元素/伪元素（div）       → 0,0,0,1
- 通配符（*）              → 0,0,0,0
- 内联样式                  → 1,0,0,0
- !important                → 最高
```

```css
/* 权重比较 */
#nav .item a:hover  /* 0,1,2,1 */
.foo .bar .baz     /* 0,0,3,0 */
div ul li          /* 0,0,0,3 */
```

**深入理解**：优先级（Specificity）是浏览器决定"哪个规则生效"的核心算法。当多个选择器匹配同一元素时，按权重四位数逐位比较，高位优先。注意这里的四位是"分组计数"而非真正的进制数——`0,1,0,0` 永远大于 `0,0,99,99`，无论类选择器有多少个都无法超过一个 ID 选择器。

**完整权重计算规则**：

```css
/* :is() 和 :not() 使用参数中最高的权重 */
:is(#id, .class) div {}   /* 权重 = 0,1,0,1（按 #id 算） */
:not(.class) div {}       /* 权重 = 0,0,1,1 */

/* :where() 权重始终为 0，无论里面是什么 */
:where(#id) div {}        /* 权重 = 0,0,0,1 */

/* :has() 也取参数中最高权重 */
.parent:has(.child) {}    /* 权重 = 0,0,1,0 */
```

**层叠层（@layer）的影响**：即使选择器权重更高，如果位于更早的 `@layer` 中，也会被后面 layer 中权重更低的规则覆盖。

```css
@layer base {
  .btn { background: blue; }  /* 权重 0,0,1,0 */
}
@layer components {
  button { background: red; } /* 权重 0,0,0,1，但 layer 优先级更高 */
}
/* 最终 button 背景是红色 */
```

**常见陷阱**：

| 情况 | 示例 | 说明 |
|------|------|------|
| 链式选择器过度指定 | `nav ul li a {}` | 权重累加 `0,0,0,4`，不如一个类简洁 |
| 复合选择器权重误解 | `.class1.class2 {}` | 权重 `0,0,2,0`，不是 `0,0,1,1` |
| `!important` 滥用 | `color: red !important;` | 破坏层叠，难以覆盖 |
| 内联样式 | `style="color: red"` | 权重 `1,0,0,0`，只有 `!important` 可覆盖 |

**性能**：选择器优先级不影响性能（匹配是从右向左进行的），真正影响性能的是选择器的匹配方式和 DOM 大小。通配符 `*` 慢不是因为权重低，而是因为每个元素都需要检查。

**面试追问**：
- 如何覆盖第三方库中带 `!important` 的样式？在同一层叠层中用更具体的 `!important` 或用 `@layer` 调整层叠顺序。
- `:is()` 和 `:where()` 的区别是什么？`:where()` 权重始终为 0，适合做基础样式重置。
- 两次相同选择器的 `!important` 又该如何判断？看来源和出现顺序——作者样式中的 `!important` 以出现顺序靠后者为准。

## Q2: 盒模型

```css
/* content-box（默认）：width = content 宽度 */
/* border-box（推荐）：width = content + padding + border */
box-sizing: border-box;
```

```
content-box:
  width 只包含 content
  实际占用 = content + padding + border + margin

border-box:
  width 包含 content + padding + border
  更容易计算布局
```

**全局 reset**：
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

**深入理解**：盒模型是 CSS 布局的基石。标准盒子模型（`content-box`）中 `width` 仅指内容的宽度，当你设置了 `width: 200px; padding: 20px; border: 2px;` 时，实际渲染宽度是 `244px`，这在响应式设计中会导致布局溢出。替代盒模型（`border-box`）将 `padding` 和 `border` 计算在 `width` 内，这使得百分比布局更可控。

**实际计算对比**：

```css
/* content-box — 宽高不可预测 */
.card {
  width: 100%;           /* 假设父容器 500px */
  padding: 20px;
  border: 1px solid;
  /* 实际占用 500 + 40 + 2 = 542px —— 溢出父容器！ */
}

/* border-box — 宽高包含 padding + border */
.card {
  box-sizing: border-box;
  width: 100%;           /* 父容器 500px */
  padding: 20px;
  border: 1px solid;
  /* content 宽度 = 500 - 40 - 2 = 458px，不溢出 */
}
```

**不同元素的表现差异**：

```css
/* input/textarea/select 的默认 box-sizing 是 border-box */
/* 但 button 在某些浏览器中是 content-box */
input, textarea, select, button {
  box-sizing: border-box;
}

/* 表单元素对齐 */
.form-row > * {
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}
```

**margin 的特殊性**：`margin` 始终不参与盒模型计算（不影响 `width`），但影响实际占用空间。`margin` 可以取负值来产生重叠效果：

```css
.overlap {
  margin-left: -20px;  /* 向左拉出，与其他元素重叠 */
}
```

**Performance**：`border-box` 本身无性能影响。但频繁改变盒模型相关属性（`width`、`padding`、`border`）会触发重排（reflow）。在动画中使用 `transform` 代替 `width`/`margin` 可避免重排。

**对比**：

| 属性 | content-box | border-box |
|------|-------------|------------|
| width 含义 | 仅 content | content + padding + border |
| 响应式适配难度 | 较高（需手动计算 padding） | 较低 |
| 表单元素兼容性 | 部分元素默认不一致 | 统一后一致 |
| 嵌套百分比宽度 | 可能溢出 | 安全 |

**面试追问**：
- `calc()` 与盒模型如何配合？`calc(100% - 40px)` 在 `border-box` 下会重复扣减，常见于 `content-box` 场景。
- 伪元素 `::before`/`::after` 为什么也需要设 `border-box`？因为它们参与布局，统一行为避免意外。
- `box-sizing` 是否可继承？不可，需显式设置全局 reset。

## Q3: 块级元素和行内元素

| | 块级 | 行内 | 行内块 |
|--|------|------|--------|
| 独占一行 | ✅ | ❌ | ❌ |
| 设置宽高 | ✅ | ❌ | ✅ |
| margin/padding | 四边有效 | 左右有效 | 四边有效 |
| 默认宽 | 100% | 内容撑开 | 内容撑开 |
| 垂直对齐 | 不支持 | vertical-align | vertical-align |

常见块级：`div`、`p`、`h1-h6`、`ul`、`li`、`section`
常见行内：`span`、`a`、`strong`、`em`、`img`（其实是行内块）

**深入理解**：`display` 决定了元素在正常流中的行为方式。块级元素默认在垂直方向堆叠，占据整行宽度；行内元素在水平方向排列，宽高由内容决定。但通过 `display` 可以改变任何元素的视觉表现类型，这是 CSS 布局能力的基础。

**行内元素的边距特性**：

```css
/* 行内元素上下 margin/padding 不起作用（视觉上） */
a {
  margin-top: 20px;      /* 无效，不影响布局 */
  margin-bottom: 20px;   /* 无效，不影响布局 */
  padding-top: 20px;     /* 背景区域扩大，但不影响上下元素位置 —— 可能溢出重叠 */
  padding-bottom: 20px;  /* 同上 */
}

/* 行内元素 padding 导致内容外溢 */
.inline-padding {
  display: inline;
  padding: 20px;         /* 背景撑大但高度不改变，可能覆盖其他行 */
}
```

**行内块与行内元素的典型问题**：

```css
/* 幽灵空白：行内块之间和内部的换行符会产生 ~4px 间隙 */
.nav {
  font-size: 0;          /* 方式一：父元素 font-size: 0 */
}
.nav-item {
  display: inline-block;
  font-size: 16px;       /* 子元素再设回字号 */
}

/* 方式二：使用 flex 替代 inline-block */
.nav {
  display: flex;
}
.nav-item {
  /* 无间隙 */
}
```

**display 属性与元素语义无关**：

```html
<!-- 将 div 变为行内，语义不变，视觉变 -->
<div style="display: inline">行内化的块级元素</div>

<!-- 将 span 变为块级 -->
<span style="display: block">块级化的行内元素</span>
```

**替换元素（Replaced Elements）**：`img`、`video`、`input` 等替换元素比较特殊——它们本质是行内元素，但可以设置宽高（类似行内块）。`img` 默认是 `display: inline`，但其 `width`/`height` 有效。

```css
/* img 的垂直对齐问题 */
img {
  vertical-align: middle;  /* 修正图片底部 3px 间隙（基线对齐问题） */
}
```

**对比**：

| 特性 | inline | inline-block | block |
|------|--------|-------------|-------|
| 换行 | 不换行 | 不换行 | 换行 |
| width/height | 无效 | 有效 | 有效 |
| vertical-align | 有效 | 有效 | 无效 |
| 空白间隙 | 受空白符影响 | 受空白符影响 | 不受影响 |
| 用途 | 文字内修饰 | 水平排列的块 | 页面大区块 |

**面试追问**：
- `display: none` 和 `visibility: hidden` 的区别？前者脱离文档流，后者保留空间但不可见。
- 如何让一个块级元素不换行？设置 `display: inline` 或 `display: inline-block`，或用 `float`。
- 替换元素为什么能设宽高？因为替换元素有自己的内部尺寸（intrinsic size），与普通行内元素不同。

## Q4: BFC（块级格式化上下文）

**触发 BFC 的条件**：
```css
overflow: hidden / auto / scroll
display: flex / inline-block / grid / flow-root
position: absolute / fixed
float: left / right
```

**BFC 的特性**：
1. 内部浮动不会影响外部
2. 垂直 margin 不会折叠
3. 自包含（内部和外部隔离）

```css
/* 清除浮动 */
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
/* 或触发 BFC */
.parent { overflow: hidden; }
```

**深入理解**：BFC 是 CSS 渲染过程中的一块独立区域。块级元素在正常流中的布局规则统称为"块格式化上下文"。触发 BFC 的元素创建了一个封闭空间——内部元素无论如何浮动、margin 变多大，都不会影响到外部元素。理解 BFC 是解决 float 布局、margin 折叠、自适应两栏布局等问题的关键。

**更多实际应用**：

```css
/* 自适应两栏布局（经典 BFC 应用） */
.left {
  float: left;
  width: 200px;
}
.right {
  overflow: hidden;  /* 触发 BFC，不与 float 元素重叠 */
}

/* 利用 display: flow-root（最安全，无副作用） */
.parent {
  display: flow-root;  /* 创建 BFC，且无 overflow: hidden 的裁剪问题 */
}

/* margin 折叠的 BFC 解法 */
.outer {
  overflow: hidden;    /* 创建 BFC */
}
.inner {
  margin-top: 50px;    /* 不会溢出到 .outer 外部 */
}
```

**BFC 与 IFC 的区别**：

```css
/* IFC（行内格式化上下文）— 内部元素水平排列 */
.text-line {
  /* 默认就产生 IFC */
}
.text-line span {
  vertical-align: middle;
  white-space: nowrap;
}

/* BFC 与 IFC 不能共存——元素要么触发 BFC 要么触发 IFC */
```

**边界情况**：

```css
/* overflow: visible 不触发 BFC —— 这是常见错误 */
.parent {
  overflow: visible;   /* 不触发 BFC，浮动仍然会溢出 */
}

/* position: relative 不触发 BFC —— 容易混淆 */
.relative {
  position: relative;  /* ❌ 不触发 BFC */
}

/* 根元素 html 自带 BFC */
```

**flex/grid 子元素与 BFC**：Flex 或 Grid 容器的子元素会自动成为 BFC 成员，无需额外触发。

**破坏性副作用**：

```css
/* overflow: hidden 会裁剪子元素阴影或下拉菜单 */
.dropdown-trigger {
  overflow: hidden;    /* BFC 触发正确，但下拉菜单可能被裁剪！ */
}
.dropdown-trigger {
  display: flow-root;  /* 推荐：BFC 不会裁剪内容 */
}
```

**对比**：

| 触发方式 | 副作用 | 推荐度 |
|----------|--------|--------|
| `overflow: hidden` | 裁剪超出内容 | 谨慎使用 |
| `display: flow-root` | 无明显副作用 | 最推荐 |
| `display: flex/grid` | 改变子元素布局 | 仅用于布局时 |
| `float` | 元素脱流 | 不推荐仅为了 BFC |

**面试追问**：
- BFC 一定会让垂直 margin 不折叠吗？是的，两个相邻的 BFC 之间的 margin 不会折叠。
- `display: flow-root` 的兼容性如何？现代浏览器支持良好，IE 不支持，可配合 fallback。
- FFC（Flex Formatting Context）和 BFC 有什么关系？Flex 容器生成 FFC，但其子元素遵循 flex 规则而非 BFC 规则。

## Q5: Flexbox 基础

```css
.container {
  display: flex;
  flex-direction: row | column;         /* 主轴方向 */
  justify-content: center;               /* 主轴对齐 */
  align-items: center;                   /* 交叉轴对齐 */
  flex-wrap: wrap;                       /* 换行 */
  gap: 16px;                             /* 间距 */
}

.item {
  flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  align-self: center; /* 覆盖 align-items */
  order: -1;          /* 排序 */
}
```

**深入理解**：Flexbox 是为"一维布局"而生的 CSS 布局模式。核心概念有两个轴——主轴（main axis）和交叉轴（cross axis），方向由 `flex-direction` 控制。Flexbox 的核心能力是"弹性"——子元素可以伸缩以填充可用空间或适应缩小空间，解决传统布局中垂直居中、等高列、自适应宽度等痛点。

**主轴与交叉轴的完整控制**：

```css
/* 主轴对齐方式对比 */
.container {
  display: flex;
  justify-content: flex-start;    /* 默认：左对齐 */
  justify-content: flex-end;      /* 右对齐 */
  justify-content: center;        /* 居中 */
  justify-content: space-between; /* 两侧贴边，中间等距 */
  justify-content: space-around;  /* 每个项目两侧间距相等 */
  justify-content: space-evenly;  /* 所有间距完全相等 */
}

/* 交叉轴对齐 */
.container {
  align-items: stretch;     /* 默认：拉伸填充 */
  align-items: flex-start;  /* 顶部对齐 */
  align-items: flex-end;    /* 底部对齐 */
  align-items: center;      /* 居中 */
  align-items: baseline;    /* 基线对齐 */
}

/* 多行交叉轴控制 */
.container {
  flex-wrap: wrap;
  align-content: center;    /* 多行整体居中 */
  align-content: stretch;   /* 多行拉伸 */
  align-content: space-between;
}
```

**flex 属性详解**：

```css
/* flex: 缩写规则 */
.item {
  /* flex-grow | flex-shrink | flex-basis */
  flex: 1;              /* 1 1 0% */
  flex: auto;           /* 1 1 auto */
  flex: none;           /* 0 0 auto */
  flex: 0 0 200px;      /* 不伸缩，固定 200px */
  flex: 1 1 200px;      /* 可伸缩，基础 200px */
}

/* 弹性比的实际效果 */
.item1 { flex: 1; }     /* 占剩余空间的 1/3 */
.item2 { flex: 2; }     /* 占剩余空间的 2/3 */
```

**min-width 陷阱**：

```css
/* flex 子元素内容溢出导致容器撑大 */
.flex-container {
  display: flex;
  width: 400px;
}
.item {
  flex: 1;
  min-width: 0;           /* 解决：允许内容收缩到小于内容最小宽度 */
  /* 或 */
  overflow: hidden;       /* 方式二 */
}

/* 长单词不换行的问题 */
.item {
  word-break: break-all;  /* 强制断词 */
  /* 或 */
  overflow-wrap: break-word;
}
```

**gap 与 margin 的区别**：

```css
/* gap（推荐）— 只在 flex/grid 中有效 */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;          /* row-gap column-gap */
}

/* margin（传统）— 需要处理首尾 */
.item + .item {
  margin-left: 16px;       /* 需要排除第一个 */
}
```

**常见布局模式**：

```css
/* 圣杯布局（header + footer + 三列中间自适应） */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  display: flex;
  flex: 1;
}
.nav {
  width: 200px;
}
.main {
  flex: 1;
}
.side {
  width: 200px;
}

/* 底部粘性 footer */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;                /* 撑满，footer 被挤到底部 */
}
```

**面试追问**：
- Flexbox 和 Grid 各自适合什么场景？Flexbox 适合一维布局（行或列），Grid 适合二维布局（行列同时）。
- `flex-basis` 和 `width` 谁优先？`flex-basis` 在主轴方向覆盖 `width`，但 `min-width`/`max-width` 始终优先。
- `flex-shrink` 为 0 时会有什么问题？容器空间不足时内容溢出。

## Q6: Grid 布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 等分列 */
  grid-template-rows: auto 200px;          /* 两行 */
  gap: 16px;                               /* 间距 */
}

.item {
  grid-column: 1 / 3;    /* 跨 1-2 列 */
  grid-row: 1 / -1;       /* 跨所有行 */
}

/* 命名区域 */
.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
```

**深入理解**：CSS Grid 是第一个真正意义上的二维布局系统，可以同时处理行和列。它将容器划分为行和列的网格，子元素可以放置在网格中的任意单元格，也可以跨越多行多列。与 Flexbox 的一维流动不同，Grid 是"先框架后填充"——先定义网格轨道，再放置元素。

**网格线的深入使用**：

```css
/* 命名网格线 */
.container {
  display: grid;
  grid-template-columns:
    [sidebar-start] 200px
    [sidebar-end main-start] 1fr
    [main-end];
}
.sidebar {
  grid-column: sidebar-start / sidebar-end;
}
.main {
  grid-column: main-start / main-end;
}

/* 隐式网格轨道 */
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);  /* 隐式行至少 100px */
  grid-auto-flow: dense;                /* 填充空位，不按顺序 */
}
```

**fr 单位与百分比的区别**：

```css
/* fr 只分剩余空间，百分比基于容器总宽 */
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;   /* 固定 200px，剩余分 2 份 */
  grid-template-columns: 200px 50% 50%;   /* 可能溢出！200px + 50% + 50% > 100% */
}

/* 使用 minmax 控制范围 */
.container {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* 自动填充，每列至少 250px，自适应列数 */
}
```

**Grid 的对齐家族**：

```css
.container {
  display: grid;
  /* 容器内对齐 */
  justify-items: center;    /* 水平（列轴）对齐单元格内容 */
  align-items: center;      /* 垂直（行轴）对齐单元格内容 */
  place-items: center;      /* 简写 */
  
  /* 轨道对齐（有额外空间时） */
  justify-content: center;  /* 水平对齐整个网格 */
  align-content: center;    /* 垂直对齐整个网格 */
  place-content: center;    /* 简写 */
}

.item {
  /* 单个子元素覆盖 */
  justify-self: end;
  align-self: start;
  place-self: center;
}
```

**auto-fill 与 auto-fit 的区别**：

```css
/* auto-fill：保留空轨道 */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
/* 如果只有 3 项但容器能放 5 列，会保留 2 个空列 */

/* auto-fit：折叠空轨道 */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
/* 空轨道宽度为 0，实际项扩展到剩余空间 */
```

**子网格（旧语法 vs Subgrid）**：

```css
/* 没有 subgrid 时，嵌套 grid 无法对齐到父网格 */
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
.child {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 不对齐到父网格 */
}
```

**经典布局**：

```css
/* 12 列网格系统 */
.grid-system {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}
.col-span-3 { grid-column: span 3; }
.col-span-6 { grid-column: span 6; }

/* 覆盖层叠效果 */
.overlay-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.overlay-item {
  grid-column: 1 / -1;
  grid-row: 1;
}
.overlay-item:first-child {
  z-index: 1;              /* 文字在上层 */
}
```

**面试追问**：
- Grid 和 Flexbox 混合使用的场景？Grid 做页面骨架，Flexbox 做组件内排列。
- `grid-template-rows: masonry` 目前支持情况？Firefox 实验性功能，标准尚未落地。
- Grid 实现瀑布流有哪些限制？Grid 无法像 Masonry 库那样动态交错排列，适合 `subgrid` 或 JS 方案。

## Q7: 定位

```css
/* static（默认） */
position: static;

/* relative：相对自身原来位置偏移 */
position: relative; top: 10px;

/* absolute：相对最近的定位祖先（非 static） */
position: absolute; top: 0; left: 0;

/* fixed：相对视口 */
position: fixed; bottom: 0;

/* sticky：滚动时粘在视口 */
position: sticky; top: 0;
/* 父容器滚动到顶部时元素"粘住" */
```

**深入理解**：CSS `position` 控制元素的"定位上下文"。除了默认的 `static`（正常流），其他四个值都会改变元素的行为。核心区别在于：
- `static`/`relative`：元素仍占文档流空间
- `absolute`/`fixed`：元素脱离文档流（不再撑开父容器）
- `sticky`：介于 relative 和 fixed 之间的混合体

**absolute 的定位参考**：

```css
/* position: absolute 不设置偏移时的行为 */
.absolute-no-offset {
  position: absolute;
  /* top/left 不设时，保持在原位置，但已脱离文档流 */
}

/* 用 absolute 做全屏覆盖 */
.overlay {
  position: absolute;
  inset: 0;               /* top: 0; right: 0; bottom: 0; left: 0; ——新语法 */
  background: rgba(0,0,0,0.5);
}

/* 子绝父相经典模式 */
.card {
  position: relative;     /* 父容器成为定位祖先 */
}
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
}
```

**fixed 的陷阱**：

```css
/* 特殊情况：父元素有 transform 时，fixed 会退化为 absolute */
.parent {
  transform: translateZ(0);    /* 创建新的包含块 */
}
.child {
  position: fixed;             /* 相对 .parent 而非视口！ */
  top: 0;
}

/* 移动端 fixed 与键盘弹出 */
.mobile-fixed-footer {
  position: fixed;
  bottom: 0;
  /* 键盘弹出时，iOS Safari 的行为不确定——工具栏可能遮挡 */
}
```

**sticky 的完整工作机制**：

```css
/* sticky 的多个"粘"点 */
.sticky-nav {
  position: sticky;
  top: 0;                /* 距视口顶部 0px 时粘住 */
}

/* 多个 sticky 元素会依次堆叠，不能同时粘在同一位置 */
.sticky-section {
  position: sticky;
  top: 0;
  height: 100vh;
  /* 每个 section 占满视口，滚动时下一个 section 推走上一个 */
}

/* sticky 受父容器高度限制 */
.parent {
  height: 200px;         /* 父容器必须有具体高度 */
  overflow: visible;     /* 必须！overflow: hidden/auto 破坏 sticky */
}
.sticky-item {
  position: sticky;
  top: 0;
  /* 只在父容器可见范围内粘滞 */
}
```

**z-index 与层叠上下文**：

```css
/* 层叠上下文 —— 影响 z-index 生效范围 */
.relative-parent {
  position: relative;
  z-index: 1;            /* 创建层叠上下文 */
}
.child {
  position: absolute;
  z-index: 9999;         /* 但最大只能在这个上下文内有效 */
}

/* 以下属性也会创建层叠上下文 */
opacity: 0.99;
transform: translateZ(0);
filter: blur(0);
will-change: transform;
isolation: isolate;      /* 显式创建 */
```

**对比**：

| 属性 | 脱离文档流 | 定位参考 | 场景 |
|------|-----------|---------|------|
| static | 否 | 无 | 默认 |
| relative | 否（保留空间） | 自身 | 微调位置 |
| absolute | 是 | 最近非 static 祖先 | 浮层、角标 |
| fixed | 是 | 视口（大部分情况） | 导航、弹窗 |
| sticky | 半脱离 | 视口 + 父容器 | 粘性导航、表头 |

**面试追问**：
- `position: sticky` 不生效的常见原因有哪些？父容器 `overflow` 不为 `visible`；父容器高度不够；缺少 `top` 等阈值。
- 如何让 `fixed` 元素在父容器 `transform` 下仍相对视口？没法直接做到，可以用 `position: sticky` 模拟或重新调整 HTML 结构。
- 层叠上下文可以无限嵌套吗？可以，但 z-index 只在同一上下文中比较，跨上下文无法直接比较。

## Q8: 居中方法

```css
/* 水平居中 */
text-align: center;        /* 行内元素 */
margin: 0 auto;            /* 块级元素 + 定宽 */
justify-content: center;   /* flex */

/* 垂直居中 */
align-items: center;       /* flex */

/* 完全居中 */
/* Flex */
display: flex;
justify-content: center;
align-items: center;

/* Grid */
display: grid;
place-items: center;  /* 简写 */

/* Absolute + transform */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

**深入理解**：居中是 CSS 中看似简单但实际复杂的问题。没有单一的"完美居中"方法——每种方式都有特定的适用条件和局限。关键在于理解元素的 display 类型、父容器的高度是否已知、元素尺寸是否确定等条件。

**每种方法的适用边界**：

```css
/* 1. margin: auto —— 需要定宽且元素在正常流中 */
.block-center {
  width: 300px;           /* 必须指定宽度 */
  margin-left: auto;
  margin-right: auto;
}
/* 垂直 margin: auto 在正常流中无效 */

/* 2. 行内居中 + 行高 */
.text-center-vertical {
  height: 100px;
  line-height: 100px;     /* line-height 等于 height */
  text-align: center;
}

/* 3. 表格法 */
.table-center {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 300px;
  height: 200px;
}

/* 4. absolute + margin: auto（需已知宽高） */
.center-known {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 200px;
  height: 100px;
  margin: auto;           /* 四边 margin 均为 auto */
}

/* 5. absolute + transform（无需已知宽高，但精度可能受 sub-pixel 影响） */
.center-unknown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 可能出现 0.5px 的模糊 —— 某些场景下 */
}
```

**不同场景的最佳选择**：

| 场景 | 推荐方法 | 原因 |
|------|---------|------|
| 文字在按钮中居中 | `flex + align-items/justify-content` | 简单可靠 |
| 弹窗居中 | `absolute + transform` | 不受宽高限制 |
| 图片在容器中居中 | `flex` 或 `object-fit + margin` | 兼容性好 |
| 未知高度的元素 | `grid + place-items` | 最简洁 |
| 需要在滚动容器中居中 | `flex` | 不会因偏移导致边界问题 |

**现代 CSS 居中技巧**：

```css
/* 使用 margin-inline（逻辑属性） */
.ltr-center {
  margin-inline: auto;        /* 等同 margin-left/right: auto */
}

/* 使用 inset + margin: auto（现代浏览器） */
.modern-center {
  position: absolute;
  inset: 0;
  margin: auto;
}

/* Grid 的对齐简写 */
.grid-center {
  display: grid;
  place-content: center;     /* 内容整体居中 */
}

/* 未知高度垂直居中 —— flex + margin auto */
.flex-center {
  display: flex;
}
.flex-center .child {
  margin: auto;              /* 水平垂直都居中 */
}
```

**面试追问**：
- 为什么 `margin: auto` 只能水平居中不能垂直居中？在正常流中垂直方向没有可用空间分配机制，flex/grid 可以。
- `transform: translate(-50%, -50%)` 会有模糊问题吗？是的，当元素宽度为奇数时计算可能产生 0.5px，可用 `calc` 或保证偶数尺寸。
- 如何在滚动容器中让内容始终居中且不产生边缘裁剪？使用 `flex` 带 `justify-content: center` 且 `flex-wrap: wrap`。

## Q9: 响应式设计

```css
/* 媒体查询 */
@media (max-width: 768px) {
  .container { flex-direction: column; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* 平板 */
}

/* 常见断点 */
--xs: 480px;    /* 手机 */
--sm: 768px;    /* 大屏手机/小平板 */
--md: 1024px;   /* 平板 */
--lg: 1280px;   /* 桌面 */
--xl: 1440px;   /* 大屏 */

/* 使用 rem 做响应式字号 */
html { font-size: 16px; }
@media (max-width: 768px) {
  html { font-size: 14px; }
}

/* viewport 单位 */
width: 100vw;    /* 视口宽度 */
height: 100vh;   /* 视口高度 */
font-size: calc(14px + 0.5vw);  /* 动态字号 */
```

**深入理解**：响应式设计不是简单的"堆媒体查询"，而是一套完整的策略——用 `flex`/`grid` 做弹性布局，用相对单位替代固定单位，用媒体查询处理特定断点。核心原则是"Mobile First"——先写移动端样式，再通过 `min-width` 逐级增强。

**Mobile First 正确做法**：

```css
/* ❌ 桌面优先 */
.button { font-size: 18px; padding: 16px 32px; }
@media (max-width: 768px) {
  .button { font-size: 14px; padding: 12px 24px; }
}

/* ✅ 移动优先 */
.button { font-size: 14px; padding: 12px 24px; }
@media (min-width: 768px) {
  .button { font-size: 16px; padding: 14px 28px; }
}
@media (min-width: 1024px) {
  .button { font-size: 18px; padding: 16px 32px; }
}
```

**媒体查询的进阶用法**：

```css
/* 基于容器而非视口（Container Queries） */
.card-container {
  container-type: inline-size;
}
@container (max-width: 400px) {
  .card { flex-direction: column; }
}

/* 基于设备特性 */
@media (hover: none) {          /* 触摸设备 */
  .button:active { transform: scale(0.95); }
}
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
@media (pointer: coarse) {      /* 触摸操作 */
  .button { min-height: 44px; min-width: 44px; }
}
```

**图片的响应式处理**：

```css
/* 响应式图片 */
img {
  max-width: 100%;             /* 图片不溢出容器 */
  height: auto;                /* 保持宽高比 */
}

/* 不同分辨率提供不同图片 */
<picture>
  <source srcset="large.webp" media="(min-width: 1024px)" type="image/webp">
  <source srcset="small.webp" media="(max-width: 768px)" type="image/webp">
  <img src="fallback.jpg" alt="responsive">
</picture>

/* 使用 srcset 做分辨率切换 */
<img
  src="small.jpg"
  srcset="medium.jpg 768w, large.jpg 1280w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="responsive"
>
```

**常用响应式技术对比**：

| 技术 | 原理 | 推荐场景 |
|------|------|---------|
| 媒体查询 | 基于视口 | 整体布局变化 |
| 容器查询 | 基于父容器 | 可复用组件 |
| 弹性单位（%/vw/vh） | 基于容器/视口 | 字号、宽度 |
| clamp()/min()/max() | 函数计算 | 动态值范围控制 |

**clamp() 动态值**：

```css
/* 字号在 14px~18px 之间随视口变化 */
font-size: clamp(14px, 2vw + 10px, 18px);

/* 宽度在 280px~1200px 之间 */
width: clamp(280px, 50%, 1200px);

/* 间距自适应 */
padding: clamp(8px, 3vw, 24px);
```

**常见陷阱**：

```css
/* 1. rem 基准被用户浏览器字号覆盖 */
html { font-size: 62.5%; }      /* 16px * 0.625 = 10px，便于计算 */
/* 问题：用户放大浏览器后布局错乱。建议用 rem 做间距，px 做边框 */

/* 2. 100vw 出现水平滚动条 */
.full-width {
  width: 100vw;                  /* 包括滚动条宽度！可能溢出 */
  margin-left: calc(-50vw + 50%); /* 真正跨越视口的技巧 */
}

/* 3. 断点数量失控 */
/* 建议：不超过 3-5 个断点，以内容决定断点而非设备 */
```

**面试追问**：
- 如何测试响应式设计？浏览器 DevTools 模拟、真实设备测试、远程调试。
- `@media (min-width: 768px)` 和 `@media (width >= 768px)` 有何区别？后者是 Media Queries Level 4 的区间语法，更直观，兼容性逐渐提升。
- 如何实现容器查询降级？用媒体查询作为备用方案，`@supports` 检测 `container-type` 支持情况。

## Q10: CSS 单位

```css
/* 绝对 */
px           /* 像素 */

/* 相对字体 */
em           /* 父元素 font-size */
rem          /* 根元素 font-size */

/* 相对视口 */
vw           /* 视口宽度的 1% */
vh           /* 视口高度的 1% */
vmin         /* vw/vh 中较小的 */
vmax         /* vw/vh 中较大的 */

/* 百分比 */
%            /* 父元素的对应属性百分比 */

/* 相对父元素 */
ch           /* 字符 0 的宽度 */
ex           /* 字符 x 的高度 */

/* 比例 */
fr           /* grid 剩余空间比例 */
```

**深入理解**：CSS 单位分为绝对单位和相对单位。px 是绝对单位——1px 就是 1 个设备像素点（实际上在高 DPI 屏上可能对应多个物理像素）。相对单位的值则依赖于上下文——父元素、根元素、视口或容器。理解每种单位的行为是构建可伸缩布局的关键。

**em 的嵌套陷阱**：

```css
/* em 随父元素 font-size 变化 —— 嵌套会导致复合增长 */
.parent { font-size: 20px; }
.child { font-size: 0.8em; }     /* 20px * 0.8 = 16px */
.grandchild {
  font-size: 0.8em;              /* 16px * 0.8 = 12.8px —— 不是 16px！ */
}

/* 用于 padding 时也基于父元素的 font-size */
.button {
  font-size: 16px;
  padding: 0.5em 1em;            /* 8px 16px */
  border-radius: 0.25em;         /* 4px */
}
```

**rem 与 em 的最佳实践**：

```css
/* rem：用于全局统一尺寸 */
html { font-size: 16px; }
.title { font-size: 2rem; }      /* 32px */
.subtitle { font-size: 1.5rem; } /* 24px */
.body { font-size: 1rem; }       /* 16px */

/* em：用于需要随字号缩放的元素 */
.btn {
  font-size: 1rem;               /* 基准 */
  padding: 0.5em 1em;            /* 随 font-size 缩放 */
}
.btn-small { font-size: 0.875rem; }
.btn-large { font-size: 1.25rem; }
/* padding 自适应，不用重复声明 */
```

**视口单位的实际应用**：

```css
/* vh 用于全屏展示 */
.hero {
  height: 100vh;                 /* 全屏高度 */
  /* 问题：移动端地址栏会影响 100vh，导致底部被截断 */
  height: 100dvh;                /* 修复：动态视口单位 */
}

/* vw 用于全宽背景 */
.full-width-bg {
  width: 100vw;
  margin-left: calc(-50vw + 50%); /* 不受父容器 padding 限制 */
}

/* 视口单位用于排版 */
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
```

**百分比（%）的参考对象误区**：

```css
/* % 的参考对象取决于属性 */
.parent {
  width: 500px;
  padding: 10%;                  /* 50px —— 参考父容器宽度（不是高度！） */
  margin: 10%;                   /* 50px —— 也是参考父容器宽度 */
  font-size: 110%;               /* 参考父元素 font-size */
  line-height: 150%;             /* 参考自身 font-size（非父元素！） */
  top: 10%;                      /* 参考包含块的高度 */
}

/* transform: translate() 的 % 参考自身 */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 参考自身宽高，不是父容器 */
}
```

**相对单位对照表**：

| 单位 | 参考对象 | 推荐用途 |
|------|---------|---------|
| px | 设备像素 | 边框、阴影、1px 分割线 |
| em | 父元素/自身 font-size | 按钮内边距、需要缩放的装饰 |
| rem | 根元素 font-size | 字号、间距、全局设计系统 |
| % | 父元素（属性不同参考不同） | 宽度、布局比例 |
| vw/vh | 视口 | 全屏区、大标题 |
| vmin/vmax | 视口最小/最大边 | 保持正方形可见 |
| ch | 字符 0 宽度 | 行长控制（max-width: 60ch） |
| lh | 元素 line-height | 行高对齐 |
| cqw/cqh | 容器宽/高 | 容器查询内的响应式 |

**面试追问**：
- 为什么 `line-height: 1.5` 比 `line-height: 150%` 更推荐？前者相对自身 font-size，后者相对父元素 font-size，继承行为不同。
- `100vw` 在移动端会导致什么问题？包含滚动条宽度，可能导致水平滚动。可以 `${100vw - scrollbar-width}` 或使用 `100dvw`。
- 什么是 CSS 像素比？设备像素与 CSS 像素的比值（DPR），Retina 屏常见为 2 或 3。

## Q11: 伪类和伪元素

```css
/* 伪类（:）— 状态 */
:hover       /* 鼠标悬停 */
:focus       /* 获得焦点 */
:active      /* 按下时 */
:first-child  /* 第一个子元素 */
:last-child   /* 最后一个子元素 */
:nth-child(2n) /* 偶数子元素 */
:not(.active) /* 排除 */
:is(header, main)  /* 选择器组 */
:has(.child) /* 父选择器（包含子元素的父元素）Safari 15.4+ */

/* 伪元素（::）— 虚拟元素 */
::before   /* 元素前插入内容 */
::after    /* 元素后插入内容 */
::first-letter /* 首字母 */
::selection   /* 选中文本 */
::placeholder /* 占位符 */
```

**深入理解**：伪类（Pseudo-class）和伪元素（Pseudo-element）是 CSS 选择器的两类扩展。伪类以 `:` 开头，描述元素的**特定状态**（如悬停、第几个子元素等）；伪元素以 `::` 开头，创建**虚拟元素**（如 `::before` 在元素内容前插入一个"伪子元素"）。理解它们的区别有助于正确使用。

**伪类的精妙用法**：

```css
/* 结构化伪类 */
ul li:nth-child(2n+1) { }      /* 奇数项 */
ul li:nth-child(-n+3) { }      /* 前 3 项 */
ul li:nth-last-child(2) { }    /* 倒数第 2 项 */

/* n + 1 选择每组的首项 */
.grid-3 > *:nth-child(3n+1) { clear: both; }

/* :has() 的实际场景 */
.card:has(img) { grid-column: span 2; }        /* 有图片的卡片更大 */
.form-field:has(:invalid) { border-color: red; } /* 校验不通过高亮 */
.parent:has(> .active) { background: #f0f0f0; }  /* 有激活子项的父元素 */

/* 表单状态伪类 */
input:required { border-left: 3px solid orange; }
input:valid { border-color: green; }
input:invalid:not(:placeholder-shown) { border-color: red; }
input:in-range,
input:out-of-range { }         /* 数字范围 */
```

**伪元素深入用法**：

```css
/* ::before/::after 必须设置 content（可以为空） */
.divider::before {
  content: '';                    /* 空 content 也必须有 */
  display: block;
  width: 100%;
  height: 1px;
  background: #ddd;
}

/* 用伪元素做图标 */
.icon-download::after {
  content: '↓';
  margin-left: 4px;
}

/* ::first-letter 做首字下沉 */
.dropcap::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
  margin-right: 8px;
  color: #c00;
}

/* ::selection 定制选中样式 */
::selection {
  background: #b3d4fc;
  color: #000;
}

/* ::backdrop 全屏背景 */
video::backdrop {
  background: #000;
}
```

**关键区别和陷阱**：

```css
/* 区别说明 */
/*
  :first-child — 选择作为第一个子元素的元素（伪类）
  ::first-letter — 选择元素内第一个字符（伪元素）
  
  :before — 旧标准中伪元素也可用单冒号
  ::before — 新标准要求双冒号，但浏览器兼容旧写法
*/

/* 容易混淆的选择器 */
li:first-child {}      /* 选择是第一个子元素的 li */
li:first-of-type {}    /* 选择同类元素的第一个 li */
li:only-child {}       /* 选择是唯一子元素的 li */
li:only-of-type {}     /* 选择同类唯一子元素 */

/* 对伪元素应用 hover */
.button::after {
  content: '→';
  transition: margin-left 0.3s;
}
.button:hover::after {
  margin-left: 8px;    /* 伪元素可以响应父元素 hover */
}
```

**性能**：伪类如 `:nth-child` 计算开销略高，但现代浏览器已高度优化。伪元素 `::before`/`::after` 不会显著影响性能，但滥用（大量 DOM 元素都使用）可能增加渲染层。

**面试追问**：
- `:first-child` 和 `:first-of-type` 的区别是什么？前者要求该元素必须是父元素的第一个子元素（不考虑类型），后者要求它是同类元素的第一个。
- `::after` 后面的元素能选中吗？不能，`::after` 是最后一个伪子元素，但实际 DOM 中不存在，JS 无法直接操作。
- `:has()` 目前兼容性如何？Chrome 105+, Safari 15.4+, Firefox 121+，基本可用，但复杂嵌套下可能有性能问题。

## Q12: 层叠（Cascading）规则

CSS 的全称是 **Cascading Style Sheets**（层叠样式表）。

**解决冲突的规则**（优先级从高到低）：
1. **来源**：浏览器默认 < 用户样式 < 作者样式 < !important
2. **选择器特殊性**（前面已讲）
3. **出现顺序**：后面的覆盖前面的（同权重时）
4. **继承**：某些属性从父元素继承（color、font），某些不继承（margin、padding、border、width、height）

```css
/* 继承控制 */
inherit  /* 强制继承父值 */
initial  /* 使用浏览器默认值 */
unset    /* 如果可继承=inherit，否则=initial */
revert   /* 恢复层叠值 */
```

**深入理解**："层叠"是 CSS 名称中 C 的含义，是整个 CSS 引擎最核心的机制。当多个规则作用于同一元素时，CSS 通过"层叠"来决定哪个生效。这个过程分为四步：对比来源 → 对比选择器特殊性 → 对比出现顺序 → 考虑继承。理解层叠规则是写好 CSS 的基础——让你能预判哪个样式最终生效。

**层叠各步骤的详细说明**：

```css
/* 第一步：来源优先级 */
/*
  低 ──────────────────────────────── 高
  用户代理（浏览器默认） < 用户 < 作者 < 作者 !important < 用户 !important
*/

/* 第二步：特殊性（权重）已经讲过，注意 @layer 在此步骤影响 */
@layer base {
  .btn { background: blue; }    /* 0,0,1,0 */
}
@layer components {
  .btn { background: red; }     /* 0,0,1,0 —— 权重相同但 layer 靠后，胜出 */
}

/* 第三步：出现顺序 */
/* 同权重、同来源时，后定义的覆盖先定义的 */
.style1 { color: red; }
.style1 { color: blue; }       /* blue 胜出（后出现的） */

/* 第四步：继承 */
.parent { color: green; }
.child { /* 没有声明 color，从父级继承 green */ }
```

**@layer 改变层叠游戏规则**：

```css
/* @layer 可以在不提高选择器权重的情况下覆盖样式 */
/* 这在覆盖第三方组件样式时尤其有用 */

/* 未显式声明 layer 的样式归入"匿名层"，优先级高于所有命名层 */
.btn {
  background: green;           /* 匿名层，优先级最高（无 !important 时） */
}

@layer vendor {
  .btn { background: orange; } /* 命名层，优先级低于匿名层 */
}

/* 调整 layer 顺序 */
@layer vendor, base, components;
/* 后声明的 layer 优先级更高 */
```

**inherit/initial/unset/revert 的完整行为**：

```css
/* inherit：强制继承，即使该属性默认不继承 */
.child {
  border: inherit;             /* 通常 border 不继承，此例强制继承父级 border */
}

/* initial：使用规范定义的初始值（非浏览器默认样式） */
.reset {
  display: initial;            /* display 的初始值是 inline，不是浏览器默认的 block */
}

/* unset：智能模式——可继承属性用 inherit，不可用 initial */
.unset {
  all: unset;                  /* 重置所有属性，常用于 UI 库的 reset */
}

/* revert：恢复到该属性在无任何作者样式时的值 */
.no-style {
  all: revert;                 /* 只移除作者样式，保留浏览器默认样式 */
}

/* all 关键字：一次性操作所有属性 */
.reset-all {
  all: unset;                  /* 清除所有样式 */
}
```

**常见层叠问题**：

```css
/* 1. 选择器权重相同但期望某个覆盖 */
/* 解决方案：加一个额外选择器提高权重，或用 @layer */
.container .btn { background: #333; }     /* 0,0,2,0 */
.page .btn { background: #666; }          /* 0,0,2,0 —— 后者胜出（html 顺序） */

/* 2. 需要覆盖第三方组件 */
/* 用 @layer 将第三方样式放前面 */
@layer vendor;
@layer components;
/* vendor 层优先级低于 components 层 */
```

**面试追问**：
- 什么是 `all: unset` 的实际用途？在组件开发中完全重置内部样式，做样式隔离的"逃生舱"。
- `revert` 和 `unset` 的核心区别是什么？`revert` 恢复浏览器默认，`unset` 按继承特性回归初始值或继承父值。
- 如何查看层叠最终结果？浏览器 DevTools 的 Computed 面板显示所有来源和最终值。

## Q13: CSS 选择器性能

```
ID > 类 > 元素 > 通配符 > 组合器

最佳实践：
- 避免过分嵌套（.nav ul li a）
- 用类而不是标签选择器
- 避免通配符 * 作为关键选择器
- 用 BEM 减少嵌套深度

/* ❌ 慢 */
html body .wrapper .content .sidebar ul li a {}
/* ✅ 快 */
.nav-link {}
```

**深入理解**：CSS 选择器性能的核心原理是浏览器的**从右向左匹配**（Right-to-Left matching）。浏览器解析选择器时，先从最右侧的"关键选择器"开始，在 DOM 中找到匹配的元素，然后逐级向左验证父级是否匹配。这意味着最右侧的选择器决定了匹配范围——如果关键选择器是 `*`，每个元素都要检查，性能最差。

**匹配机制详解**：

```css
/* 选择器解析过程 */
.container .nav .item a {}
/*
  1. 浏览器先找到所有 <a> 元素（关键选择器）
  2. 检查每个 <a> 的最近祖先是否有 .item
  3. 再检查是否有 .nav
  4. 最后检查是否有 .container
  5. 如果任意一级不匹配，丢弃
*/
```

**性能对比实验**：

| 选择器 | 匹配方式 | 性能评价 |
|--------|---------|---------|
| `* { }` | 匹配所有元素 | 最慢，大数据量明显 |
| `div { }` | 匹配所有 div | 页面 div 多时一般 |
| `.class { }` | 哈希匹配 | 最快 |
| `#id { }` | 唯一匹配 | 极快（但 id 不应用于样式） |
| `ul li a { }` | 逐层验证 | 嵌套越多越慢 |
| `.nav > .item { }` | 直接子代 | 比后代选择器快 |
| `.nav .item:first-child { }` | 额外匹配状态 | 增加的检查很少 |

**BEM 的优化价值**：

```css
/* ❌ 非 BEM — 嵌套深，依赖标签 */
.card {
  background: #fff;
}
.card .card-header {
  font-size: 18px;
}
.card .card-body .card-body-text {
  color: #333;
}

/* ✅ BEM — 扁平选择器，避免嵌套 */
.card { background: #fff; }
.card__header { font-size: 18px; }
.card__text { color: #333; }
/* 所有选择器都是一层，性能最佳 */
```

**其他优化技巧**：

```css
/* 避免在关键选择器中使用通配符 */
/* ❌ 差 */
.wrapper * { color: red; }      /* 所有元素都检查 */

/* ✅ 好 */
.wrapper .text { color: red; }  /* 只检查有 .text 的元素 */

/* 避免标签-类组合 */
/* ❌ 多余 */
div.nav { }                     /* 增加检查但无收益 */

/* ✅ 简练 */
.nav { }                        /* 类选择器已足够 */

/* 必要时用 :where() 降低选择器权重 */
:where(.card) .btn { }          /* 权重仅 0,0,0,1 */
```

**关键指标**：选择器匹配通常在微秒级完成，DOM 大小（元素数量）对性能影响远大于选择器复杂度。真正影响页面性能的是重排和重绘，而非选择器解析本身。因此，优先关注代码可维护性，过度追求选择器性能通常是不必要的微优化。

**面试追问**：
- 为什么浏览器要从右向左匹配？从右向左能快速缩小范围——先定位最小匹配集，再验证父级。从左向右则会枚举所有可能的路径，效率低。
- 5000 个元素页面中，选择器复杂度的影响有多大？通常在 1-2ms 内，影响可忽略。真正需要关注的是样式计算（Style Recalculation）的总量。
- `:is()` 选择器的性能如何？`:is()` 本身性能良好，但参数中如果包含大量复杂选择器可能增加匹配开销。

## Q14: CSS Reset 和 Normalize

```css
/* Reset：彻底清除所有默认样式 */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Normalize：统一不同浏览器的默认差异 */
/* 保留有用的默认值，只修复不一致 */
/* 使用 normalize.css 库 */
```

**深入理解**：不同浏览器（Chrome、Firefox、Safari 等）对 HTML 元素有各自的默认样式——例如 `body` 有 `8px margin`，`h1` 有默认字号和 margin，`ul` 有 `padding-left` 和列表样式。Reset 和 Normalize 都是为了"抹平"这些差异，让开发从一致的基础开始。但二者的哲学不同：Reset 激进地全部清零（"从零开始"），Normalize 保守地只修复差异（"保留有用的默认值"）。

**完整的 Reset 方案**：

```css
/* 现代 Reset 推荐（基于 Andy Bell 的版本） */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 移除默认列表样式 */
ul, ol {
  list-style: none;
}

/* 移除默认链接下划线 */
a {
  text-decoration: none;
  color: inherit;
}

/* 图片默认自适应 */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 表单继承父级字号 */
input, button, textarea, select {
  font: inherit;
}

/* 移除多余间距 */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 根元素平滑滚动 */
html {
  scroll-behavior: smooth;
}
```

**Normalize 的保留做法**：

```css
/* Normalize 不会移除 h1-h6 的字号差、不会移除列表样式 */
/* 它修复的是跨浏览器的不一致性，例如： */

/* 修复 HTML5 元素在旧浏览器的 display */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, nav, section {
  display: block;
}

/* 统一表单元素的字体继承 */
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}

/* 修复 webkit 中搜索输入框的样式 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/* 统一 hr 元素 */
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
```

**对比**：

| | Reset | Normalize | 现代 Reset |
|--|-------|----------|-----------|
| 理念 | 全部清零 | 保留有用样式 | 平衡二者 |
| h1 字号 | 无（与普通文字相同） | 保留较大字号 | 无（由设计系统控制） |
| 列表样式 | 无 | 保留圆点 | 无 |
| 代码量 | 小 | 更大 | 中等 |
| 风险 | 需要重建所有样式 | 部分浏览器差异未处理 | 需要配合设计系统 |
| 当前推荐度 | 不再推荐 | 仍可用 | 最推荐 |

**不用 Reset 的替代方案**：

```css
/* 1. Tailwind 的 preflight —— 基于 modern-normalize */
/* Tailwind 内置了 preflight，文档说了如何禁用 */

/* 2. CSS 层叠层隔离 */
@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}
@layer base {
  /* 你的基础样式 */
}
/* 不会污染组件层 */
```

**面试追问**：
- CSS Reset 加上 `* { box-sizing: border-box }` 会导致什么问题？第三方组件（如对话框遮罩）可能被意外影响，可改用 `:root` 层级或排除特定类。
- Normalize.css 现在还有必要吗？现代浏览器差异已经缩小，许多项目只用 `box-sizing: border-box` 的简单 reset 就够了。
- 什么是 CSS 层叠层（@layer）与 reset 的结合？将 reset 放在 `@layer reset` 中，确保它不会意外覆盖后续组件样式。
