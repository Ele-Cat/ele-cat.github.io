# Css 面试题

## 1、`link` 与 `@import` 的区别和用法

### 基本用法

#### link 标签
```html
<link rel="stylesheet" href="style.css">
```

#### @import 规则
```css
@import url("style.css");
/* 或者 */
@import "style.css";
```

### 主要区别

1. **加载时机**
   - `link` 是 HTML 标签，在页面加载时并行下载 CSS 文件
   - `@import` 是 CSS 语法，必须等页面加载完毕后才开始加载 CSS

2. **兼容性**
   - `link` 所有浏览器都支持
   - `@import` CSS2.1 才支持（IE5+）

3. **DOM 操作**
   - `link` 可以通过 JavaScript 操作 DOM 来动态插入或修改
   - `@import` 不能通过 JavaScript 直接操作

4. **权重**
   - `@import` 引用的样式表权重低于后面定义的样式
   - `link` 引入的样式权重取决于它们在文档中的位置

5. **页面渲染**
   - `link` 不会导致页面重新渲染
   - `@import` 可能导致页面重新渲染

6. **预加载**
   - `link` 支持 `preload` 等资源提示
   - `@import` 不支持资源预加载

### 使用建议

1. **优先使用 link**：性能更好，兼容性更佳
2. **@import 适用场景**：
   - 需要在特定条件下加载 CSS（如媒体查询）
   - 模块化 CSS 开发时用于组织文件结构
   - 需要覆盖第三方样式表时

```css
/* 媒体查询中使用 */
@import url("print.css") print;
```

在实际开发中，特别是在现代前端工程中，通常推荐使用 `link` 并结合构建工具（如 webpack）来处理 CSS 文件的组织和加载。

## 2、 `rgba()` 与 `opacity` 透明效果的区别

### 基本概念

#### rgba()
```css
color: rgba(red, green, blue, alpha);
/* 示例 */
background-color: rgba(255, 0, 0, 0.5); /* 半透明红色背景 */
```

#### opacity
```css
opacity: value; /* 0.0到1.0之间的值 */
/* 示例 */
opacity: 0.5; /* 元素半透明 */
```

### 核心区别

1. **作用范围不同**
   - `rgba()`：仅作用于**特定的颜色属性**（如color、background-color等）
   - `opacity`：作用于**整个元素及其所有内容**（包括子元素）

2. **继承性不同**
   - `rgba()`：不会影响子元素的透明度
   - `opacity`：会继承给所有子元素，且无法被子元素覆盖

3. **适用场景**
   - `rgba()`：适合仅需要改变某个颜色透明度的情况
   - `opacity`：适合需要整体改变元素透明度的情况

### 视觉效果对比

```html
<div class="box rgba">
  <p>rgba透明度效果</p>
</div>

<div class="box opacity">
  <p>opacity透明度效果</p>
</div>
```

```css
.box {
  width: 150px;
  height: 150px;
  margin: 20px;
}

.rgba {
  background-color: rgba(255, 0, 0, 0.5); /* 仅背景半透明 */
}

.opacity {
  background-color: rgb(255, 0, 0);
  opacity: 0.5; /* 整个元素半透明 */
}
```

::: demo
example/interview/01
:::

### 使用建议

1. **使用rgba()的情况**：
   - 只需要背景透明但文字保持不透明
   - 需要边框透明但内容保持不透明
   - 不希望影响子元素透明度时

2. **使用opacity的情况**：
   - 需要整个元素（包括内容和子元素）统一透明效果
   - 制作淡入淡出动画效果时
   - 需要隐藏元素但仍占据空间时（visibility: hidden的替代方案）

3. **性能考虑**：
   - `opacity`的动画性能通常优于其他透明实现方式
   - 现代浏览器对两者的硬件加速支持都很好

### 实际应用示例

```css
/* 仅按钮背景透明，文字保持不透明 */
.button {
  background-color: rgba(0, 0, 255, 0.7);
  color: white;
}

/* 整个模态框半透明，包括内容和子元素 */
.modal {
  opacity: 0.9;
  background-color: white;
}
```

## 3、 `display: none` 与 `visibility: hidden` 的区别

### 基本概念

#### `display: none`
```css
.element {
  display: none; /* 元素完全从文档流中移除 */
}
```

#### `visibility: hidden`
```css
.element {
  visibility: hidden; /* 元素不可见但仍占据空间 */
}
```

### 核心区别

| 特性                | `display: none`                  | `visibility: hidden`            |
|---------------------|----------------------------------|----------------------------------|
| **文档流中的表现**   | 元素完全从文档流中移除           | 元素仍占据原有空间               |
| **是否可见**         | 完全不可见                       | 不可见但保留空间                 |
| **子元素是否继承**   | 子元素也一起隐藏                 | 子元素可通过`visibility: visible`覆盖 |
| **是否影响布局**     | 会影响周围元素布局               | 不会影响周围元素布局             |
| **是否响应事件**     | 不响应任何事件                   | 默认不响应事件                   |
| **是否可动画化**     | 不支持过渡动画                   | 支持过渡动画                     |
| **性能影响**         | 导致重排(reflow)                 | 只导致重绘(repaint)              |

### 视觉效果对比

```html
<div class="box">正常元素</div>
<div class="box display-none">display: none的元素</div>
<div class="box">相邻元素</div>

<div class="box">正常元素</div>
<div class="box visibility-hidden">visibility: hidden的元素</div>
<div class="box">相邻元素</div>
```

```css
.box {
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 20px;
  border: 1px solid #000;
}

.display-none {
  display: none;
}

.visibility-hidden {
  visibility: hidden; 
}
```

::: demo
example/interview/02
:::

### 使用场景建议

#### 使用`display: none`的情况
1. 需要完全移除元素且不占用空间时
2. 切换标签页内容时
3. 响应式布局中在不同设备上隐藏元素时
4. 需要提高渲染性能（大量元素需要隐藏时）

#### 使用`visibility: hidden`的情况
1. 需要隐藏元素但仍保留其占位空间时
2. 需要实现淡入淡出效果时（结合`opacity`）
3. 实现hover效果时隐藏/显示子元素
4. 需要隐藏内容但保持布局稳定时

### 代码示例

```css
/* 切换显示/隐藏 - 会重新布局 */
.toggle-display {
  display: none;
}

/* 切换可见性 - 布局保持不变 */
.toggle-visibility {
  visibility: hidden;
  transition: visibility 0.3s; /* 支持动画 */
}

/* 子元素可以覆盖父元素的visibility */
.parent {
  visibility: hidden;
}
.parent .child {
  visibility: visible; /* 子元素仍然可见 */
}
```

### 性能考虑
- `display: none`会触发重排(reflow)，性能开销较大
- `visibility: hidden`只触发重绘(repaint)，性能更好
- 频繁切换显示/隐藏时，优先考虑`visibility: hidden`

## 4、定位布局 position中的relative、absolute、fixed、sticky它们之间的区别

### 1. 基本概念

#### static (默认值)
- 元素按照正常文档流排列
- top/right/bottom/left/z-index 属性无效

#### relative (相对定位)
- 相对于元素自身原始位置进行偏移
- 不会脱离文档流，原始空间保留

#### absolute (绝对定位)
- 相对于最近的非 static 定位祖先元素定位
- 完全脱离文档流，不占据空间

#### fixed (固定定位)
- 相对于浏览器视口(viewport)定位
- 脱离文档流，不随页面滚动而移动

#### sticky (粘性定位)
- 混合定位，在阈值范围内是相对定位，超过后变为固定定位
- 需指定阈值(top/right/bottom/left之一)

### 2. 核心区别对比

| 特性          | relative               | absolute               | fixed                  | sticky                 |
|---------------|------------------------|------------------------|------------------------|------------------------|
| **参考基准**   | 自身原始位置           | 最近非static祖先       | 浏览器视口             | 最近滚动容器           |
| **文档流**     | 保留原始空间           | 完全脱离               | 完全脱离               | 保留直到变为fixed      |
| **滚动影响**   | 随页面滚动             | 随页面滚动             | 不随页面滚动           | 在阈值内滚动，超过固定 |
| **常见用途**   | 微调元素位置           | 弹出层、菜单           | 固定导航栏、广告       | 吸顶效果               |
| **z-index**   | 可控制                 | 可控制                 | 可控制                 | 可控制                 |

### 3. 注意事项

1. **层叠上下文**：
   - relative/absolute/fixed/sticky都会创建新的层叠上下文
   - 影响z-index的表现

2. **性能考虑**：
   - fixed和sticky在滚动时可能引起重绘
   - 过多使用会影响页面性能

3. **兼容性**：
   - sticky在IE中不支持
   - 移动端浏览器对sticky的支持可能有差异

4. **边界情况**：
   - absolute元素在没有定位祖先时会相对于body定位
   - sticky元素的容器需要有足够高度才能看到效果

## 5、 如何用CSS3画一条0.5px的直线

在CSS中直接设置`border: 0.5px`在某些浏览器中可能不被支持或显示为1px，以下是几种可靠的方法来实现0.5px的细线效果：

### 1. 使用transform缩放（最常用方法）

```css
.thin-line {
  height: 1px;
  background-color: #000;
  transform: scaleY(0.5);
  transform-origin: 50% 100%; /* 防止模糊 */
}
```

### 2. 使用伪元素+缩放

```css
.element::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #000;
  transform: scaleY(0.5);
}
```

### 各方法优缺点比较

| 方法               | 优点                     | 缺点                     |
|--------------------|--------------------------|--------------------------|
| transform缩放      | 兼容性好，效果稳定       | 需要额外处理transform原点 |
| 伪元素+缩放        | 不破坏原有元素布局       | 代码稍复杂               |

### 最佳实践建议

1. **通用方案**：transform缩放方法兼容性最好，推荐作为首选方案
2. **注意事项**：
   - 确保父元素没有overflow: hidden，否则缩放效果可能被裁剪
   - 添加transform-origin防止线条模糊
   - 在Retina屏上测试效果

### 完整示例代码

```html
<div class="container">
  transform缩放:
  <div class="thin-line-1"></div>
  伪元素:
  <div class="thin-line-2"></div>
</div>
```

```css
.container {
  margin: 20px;
}

/* 方法1: transform缩放 */
.thin-line-1 {
  height: 1px;
  background: black;
  transform: scaleY(0.5);
  transform-origin: 50% 100%;
  margin: 10px 0 20px;
}

/* 方法2: 伪元素 */
.thin-line-2 {
  position: relative;
  margin: 10px 0 20px;
}
.thin-line-2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: black;
  transform: scaleY(0.5);
}
```

::: demo
example/interview/03
:::

## 6、使用CSS3绘制三角形的原理与方法

### 基本原理

CSS绘制三角形的核心原理是利用**边框(border)的特性**：当元素的宽度和高度为0时，边框会以斜角相接，形成对角线分割的三角形区域。

```css
.triangle {
  width: 0;
  height: 0;
  border: 50px solid;
  border-top-color: red; /* 上边框 */
  border-right-color: green; /* 右边框 */
  border-bottom-color: blue; /* 下边框 */
  border-left-color: orange; /* 左边框 */
}
```

:::demo
example/interview/04
:::


### 标准实现方法

```css
.triangle {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top-color: red; /* 只显示上边框，形成向下三角形 */
}
```

:::demo
example/interview/05
:::

### 四种方向的三角形

#### 1. 向上三角形
```css
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```

#### 2. 向右三角形
```css
.triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 100px solid green;
}
```

#### 3. 向下三角形
```css
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid blue;
}
```

#### 4. 向左三角形
```css
.triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 100px solid orange;
}
```

:::demo
example/interview/06
:::

### 原理详解

1. **零尺寸元素**：设置`width: 0; height: 0;`使元素没有内容区域
2. **透明边框**：将不需要显示的边框设置为`transparent`
3. **有色边框**：只给一个方向的边框设置颜色
4. **边框宽度控制**：
   - 相邻两边框宽度比决定三角形斜边角度
   - 如`border-left: 50px`和`border-right: 50px`配合`border-bottom: 100px`形成等腰三角形

### 进阶应用

#### 直角三角形
```css
.right-angle-triangle {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
}
.right-angle-triangle2 {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom: 50px solid red;
  border-right: 50px solid red;
}
```

:::demo
example/interview/07
:::

### 现代CSS替代方案

#### 使用clip-path（更灵活）
```css
.clip-triangle {
  width: 100px;
  height: 100px;
  background: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

:::demo
example/interview/08
:::

### 注意事项

1. **边框宽度**：决定了三角形的大小
2. **浏览器兼容性**：border方法所有浏览器都支持，clip-path需要现代浏览器
3. **像素对齐**：在高DPI屏幕上可能出现模糊，可考虑使用transform缩放
4. **可访问性**：纯CSS三角形对屏幕阅读器不可见，重要内容应使用真实文本

### 性能比较

| 方法        | 优点                   | 缺点                   |
|------------|------------------------|------------------------|
| border     | 兼容性好，实现简单     | 只能绘制简单三角形     |
| clip-path  | 可绘制任意形状         | 兼容性较差             |
| SVG        | 可缩放，支持复杂图形   | 需要额外标记           |
| canvas     | 最灵活                 | 需要JavaScript        |

在大多数UI场景中，border方法仍然是绘制简单三角形的最佳选择。[生成三角形](/views/share/css/generate.html#生成三角形)

## 7、CSS3盒子模型：标准盒模型、怪异盒模型

### 1. 基本概念

CSS 盒子模型定义了网页元素在布局时如何计算宽度和高度，以及如何处理内边距(padding)、边框(border)和外边距(margin)。

### 2. 标准盒模型 (W3C Box Model)

#### 特点：
- **默认模型**：现代浏览器默认使用标准盒模型
- **尺寸计算**：`width`和`height`只指定内容区域的尺寸
- **总宽度公式**：  
  `总宽度 = width + padding-left + padding-right + border-left + border-right`

#### 图示：
```
+-----------------------------------+
|              margin               |
|  +-----------------------------+ |
|  |           border            | |
|  |  +-----------------------+  | |
|  |  |        padding        |  | |
|  |  |  +-----------------+  |  | |
|  |  |  |    content      |  |  | |
|  |  |  |                 |  |  | |
|  |  |  +-----------------+  |  | |
|  |  +-----------------------+  | |
|  +-----------------------------+ |
+-----------------------------------+
```

#### 代码示例：
```css
.box {
  box-sizing: content-box; /* 默认值，标准盒模型 */
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
}
/* 
实际占用水平空间：
10 (margin-left) + 5 (border-left) + 20 (padding-left) + 200 (content) + 20 (padding-right) + 5 (border-right) + 10 (margin-right) = 270px
*/
```

### 3. 怪异盒模型 (IE Box Model / Border Box)

#### 特点：
- **历史背景**：IE5-6 的默认模型，现可通过`box-sizing: border-box`启用
- **尺寸计算**：`width`和`height`指定内容+内边距+边框的总尺寸
- **总宽度公式**：  
  `总宽度 = width (已包含padding和border) + margin`

#### 图示：
```
+-----------------------------------+
|              margin               |
|  +-----------------------------+ |
|  |    content + padding +     | |
|  |          border            | |
|  |                           | |
|  |                           | |
|  |                           | |
|  +-----------------------------+ |
+-----------------------------------+
```

#### 代码示例：
```css
.box {
  box-sizing: border-box; /* 怪异盒模型 */
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
}
/* 
实际占用水平空间：
10 (margin-left) + 200 (width包含padding和border) + 10 (margin-right) = 220px
内容区域实际宽度：
200 - 20*2 (padding) - 5*2 (border) = 150px
*/
```

### 4. 主要区别对比

| 特性                | 标准盒模型 (content-box)       | 怪异盒模型 (border-box)         |
|---------------------|-------------------------------|---------------------------------|
| **width/height定义** | 仅内容区域                    | 内容+内边距+边框                |
| **padding/border**  | 增加元素总尺寸                | 包含在width/height内            |
| **布局计算**        | 需要额外计算padding/border     | 直接使用width/height值          |
| **浏览器支持**      | 所有浏览器默认                | IE5-6默认，现代浏览器需显式设置 |
| **适用场景**        | 传统布局                      | 响应式布局、网格系统            |

### 5. 如何切换盒模型

```css
/* 全局设置为border-box模型（推荐做法） */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}

/* 或者单独设置特定元素 */
.element {
  box-sizing: content-box; /* 标准模型 */
}
.other-element {
  box-sizing: border-box; /* 怪异模型 */
}
```

### 6. 实际应用建议

1. **响应式布局**：`border-box`更易控制元素尺寸
2. **网格系统**：简化百分比宽度的计算
3. **表单元素**：保持一致的尺寸计算
4. **第三方组件**：注意不同盒模型可能导致的布局问题

### 7. 示例对比

```html
<div class="box standard-box">标准盒模型</div>
<div class="box weird-box">怪异盒模型</div>
```

```css
.box {
  margin: 20px;
  padding: 20px;
  border: 5px solid #333;
  background: #f0f0f0;
}

.standard-box {
  box-sizing: content-box;
  width: 200px;
  /* 总宽度: 200 + 20*2 + 5*2 = 250px */
}

.weird-box {
  box-sizing: border-box;
  width: 200px;
  /* 总宽度: 200px (内容宽度: 200 - 20*2 - 5*2 = 150px) */
}
```

:::demo
example/interview/09
:::

### 8. 兼容性说明

- 所有现代浏览器都支持两种模型
- IE6及以下版本默认使用怪异盒模型
- 使用`box-sizing: border-box`可以确保一致的行为
- 重置盒模型时注意可能影响第三方库的布局

## 8、浮动（float)以及清除浮动的方法

### 1.浮动(float)的基本概念

#### 1. 浮动的作用
浮动最初是为了实现文字环绕图片的效果，后来成为CSS布局的重要技术之一。

#### 2. 浮动的特性
- 元素会脱离普通文档流，但不完全脱离文本流
- 浮动元素会向左或向右移动，直到碰到包含框或另一个浮动元素
- 非浮动内容会环绕浮动元素排列

#### 3. 常用取值
```css
float: left;    /* 向左浮动 */
float: right;   /* 向右浮动 */
float: none;    /* 不浮动（默认值） */
```

### 2.浮动带来的问题

#### 1. 高度塌陷
当父元素包含浮动子元素时，父元素的高度会塌陷为0，影响后续布局。

#### 2. 布局混乱
浮动元素可能会影响非浮动元素的正常排列。

### 3.清除浮动的5种常用方法

#### 1. 空div清除法（不推荐）
```html
<div class="clear"></div>
```
```css
.clear {
  clear: both;
}
```
**缺点**：增加无意义的空标签，不符合语义化原则

### 2. 父元素overflow清除法
```css
.parent {
  overflow: hidden; /* 或 auto */
}
```
**原理**：触发BFC(块级格式化上下文)  
**缺点**：可能隐藏内容或出现滚动条

#### 3. 伪元素清除法（推荐）
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /* 兼容IE6/7 */
}
```
**优点**：语义化好，兼容性强

#### 4. 父元素浮动法
```css
.parent {
  float: left; /* 或 right */
}
```
**缺点**：父元素浮动会影响整体布局

#### 5. display: flow-root（现代方法）
```css
.parent {
  display: flow-root;
}
```
**优点**：专门用于清除浮动，不影响其他样式  
**缺点**：IE不支持

### 4.清除浮动的实际应用

#### 1. 两栏布局示例
```html
<div class="container">
  <div class="left">左浮动内容</div>
  <div class="right">右浮动内容</div>
  <!-- 清除浮动 -->
  <div style="clear:both;"></div>
</div>
```

#### 2. 现代布局替代方案
随着Flexbox和Grid布局的普及，浮动布局已逐渐被取代：
```css
.container {
  display: flex; /* 或 grid */
}
```

### 5. 最佳实践建议

1. **优先使用伪元素清除法**（.clearfix）
2. **新项目考虑使用Flex/Grid布局**替代浮动
3. **避免滥用浮动**，只在需要文字环绕效果时使用
4. **注意浏览器兼容性**，特别是旧版IE

## 9、Flex布局

### 1、Flex 布局基本概念

#### 1. 什么是 Flex 布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，是一种一维布局模型，为容器内的项目提供强大的空间分布和对齐能力。

#### 2. 核心特点
- 容器默认存在两根轴：**主轴**（main axis）和**交叉轴**（cross axis）
- 项目默认沿主轴排列
- 可以轻松实现各种对齐方式
- 项目的宽度/高度可以弹性变化

### 2、Flex 容器属性

#### 1. display
```css
.container {
  display: flex; /* 块级弹性容器 */
  /* 或 */
  display: inline-flex; /* 行内弹性容器 */
}
```

#### 2. flex-direction (主轴方向)
```css
.container {
  flex-direction: row; /* 默认值，水平方向，从左到右 */
  flex-direction: row-reverse; /* 水平方向，从右到左 */
  flex-direction: column; /* 垂直方向，从上到下 */
  flex-direction: column-reverse; /* 垂直方向，从下到上 */
}
```

#### 3. flex-wrap (换行)
```css
.container {
  flex-wrap: nowrap; /* 默认值，不换行 */
  flex-wrap: wrap; /* 换行，第一行在上方 */
  flex-wrap: wrap-reverse; /* 换行，第一行在下方 */
}
```

#### 4. justify-content (主轴对齐)
```css
.container {
  justify-content: flex-start; /* 默认值，起点对齐 */
  justify-content: flex-end; /* 终点对齐 */
  justify-content: center; /* 居中对齐 */
  justify-content: space-between; /* 两端对齐，项目间隔相等 */
  justify-content: space-around; /* 每个项目两侧间隔相等 */
  justify-content: space-evenly; /* 所有间隔完全相等 */
}
```

#### 5. align-items (交叉轴对齐)
```css
.container {
  align-items: stretch; /* 默认值，拉伸填满容器高度 */
  align-items: flex-start; /* 起点对齐 */
  align-items: flex-end; /* 终点对齐 */
  align-items: center; /* 居中对齐 */
  align-items: baseline; /* 基线对齐 */
}
```

#### 6. align-content (多轴线对齐)
```css
.container {
  align-content: stretch; /* 默认值，轴线占满交叉轴 */
  align-content: flex-start; /* 起点对齐 */
  align-content: flex-end; /* 终点对齐 */
  align-content: center; /* 居中对齐 */
  align-content: space-between; /* 两端对齐，轴线间隔相等 */
  align-content: space-around; /* 每个轴线两侧间隔相等 */
}
```

:::demo
example/interview/10
:::

### 3、Flex 项目属性

#### 1. order (排序)
```css
.item {
  order: <integer>; /* 默认0，数值越小排列越靠前 */
}
```

#### 2. flex-grow (放大比例)
```css
.item {
  flex-grow: <number>; /* 默认0，不放大 */
}
```

#### 3. flex-shrink (缩小比例)
```css
.item {
  flex-shrink: <number>; /* 默认1，空间不足时缩小 */
}
```

#### 4. flex-basis (初始大小)
```css
.item {
  flex-basis: <length> | auto; /* 默认auto，项目原始大小 */
}
```

#### 5. flex (简写)
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
/* 常用简写 */
flex: 1; /* 相当于 flex: 1 1 0% */
flex: auto; /* 相当于 flex: 1 1 auto */
flex: none; /* 相当于 flex: 0 0 auto */
```

#### 6. align-self (单个项目对齐)
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

:::demo
example/interview/11
:::

### 4、Flex 布局常见应用场景

#### 1. 水平垂直居中
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

:::demo
example/interview/12
:::

#### 2. 等分布局
```css
.container {
  display: flex;
}
.item {
  flex: 1;
}
```

:::demo
example/interview/13
:::

#### 3. 圣杯布局
```html
<div class="container">
  <header>Header</header>
  <div class="main">
    <nav>Nav</nav>
    <article>Article</article>
    <aside>Aside</aside>
  </div>
  <footer>Footer</footer>
</div>
```
```css
.container {
  height: 400px;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex: 1;
  background-color: #f0f0f0;
}
article {
  flex: 1;
}
header, footer {
  height: 60px;
  background-color: #e0e0e0;
}
nav, aside {
  flex: 0 0 200px;
  background-color: #d0d0d0;
}
```

:::demo
example/interview/14
:::

### 5、Flex 布局面试常见问题

1. **Flex 布局与 Grid 布局的区别？**
   - Flex 是一维布局，Grid 是二维布局
   - Flex 更适合组件和小规模布局，Grid 更适合整体页面布局

2. **flex: 1 代表什么？**
   - 等价于 flex: 1 1 0%
   - 表示项目可以放大缩小，初始大小为0%

3. **flex-basis 和 width 的区别？**
   - flex-basis 设置的是项目在主轴方向上的初始大小
   - 当同时设置时，flex-basis 优先级高于 width

4. **Flex 布局的兼容性如何？**
   - 现代浏览器全面支持
   - IE10-11 部分支持（需要-ms-前缀）
   - IE9 及以下不支持

## 10、CSS3 `transform` 属性详解（平面转换）

### 1、基本概念

`transform` 是 CSS3 提供的用于对元素进行**2D或3D转换**的属性，可以实现元素的旋转、缩放、移动、倾斜等效果，而不会影响文档流中的其他元素。

### 2、常用 2D 转换函数

#### 1. 位移（translate）
```css
transform: translateX(50px);  /* 水平移动 */
transform: translateY(20px);  /* 垂直移动 */
transform: translate(50px, 20px);  /* 同时设置X/Y */
```

#### 2. 旋转（rotate）
```css
transform: rotate(30deg);  /* 顺时针旋转30度 */
transform: rotate(-15deg); /* 逆时针旋转15度 */
```

#### 3. 缩放（scale）
```css
transform: scaleX(1.5);  /* 水平缩放1.5倍 */
transform: scaleY(0.8);  /* 垂直缩放0.8倍 */
transform: scale(1.5, 0.8);  /* 同时设置X/Y */
```

#### 4. 倾斜（skew）
```css
transform: skewX(20deg);  /* 水平倾斜20度 */
transform: skewY(10deg);  /* 垂直倾斜10度 */
transform: skew(20deg, 10deg);  /* 同时设置X/Y */
```

### 3、组合转换

可以同时应用多个转换函数：
```css
transform: translate(50px, 20px) rotate(30deg) scale(1.2);
```
**注意**：转换函数的顺序会影响最终效果（矩阵乘法不可交换）

:::demo
example/interview/15
:::

### 4、转换原点（transform-origin）

控制转换的基准点：
```css
transform-origin: 50% 50%;  /* 默认值，中心点 */
transform-origin: left top;  /* 左上角 */
transform-origin: 20px 30px;  /* 具体像素值 */
```

:::demo
example/interview/16
:::

### 5、重要特性

1. **不影响文档流**：转换后的元素仍占据原始空间
2. **性能优化**：适合用于动画（硬件加速）
3. **叠加性**：可以与transition配合实现平滑动画
4. **坐标系**：基于元素的本地坐标系

### 6、浏览器兼容性

- 现代浏览器全面支持
- 需要前缀的旧版浏览器：
  ```css
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg); /* IE9 */
  transform: rotate(30deg);
  ```

### 7、面试常见问题

1. **transform 和 position 定位的区别？**
   - transform 不影响文档流，position 会影响
   - transform 性能更好（硬件加速）

2. **为什么 transform 适合做动画？**
   - 能触发GPU加速
   - 不会引起回流(reflow)

3. **transform 的执行顺序重要吗？**
   - 非常重要，rotate(30deg) translateX(50px) 和 translateX(50px) rotate(30deg) 结果不同

4. **transform 会创建新的层叠上下文吗？**
   - 会，类似 position: relative

## 11、CSS3中有哪些新特性

### 1、布局

#### 1. Flexbox 弹性布局
```css
.container {
  display: flex;
  justify-content: space-between; /* 主轴对齐 */
  align-items: center; /* 交叉轴对齐 */
  flex-wrap: wrap; /* 换行控制 */
}
```
- 解决传统布局的三大痛点：垂直居中、等高分栏、自适应排列
- 典型应用：导航栏、卡片布局、表单排列

#### 2. Grid 网格布局
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* 替代margin的间隔方案 */
}
```
- 二维布局系统，比表格布局更灵活
- 关键功能：网格线命名、区域模板、自动填充

### 2、视觉呈现增强

#### 1. 过渡与动画
```css
/* 平滑过渡 */
.button {
  transition: transform 0.3s ease-out, box-shadow 0.2s linear;
}

/* 关键帧动画 */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); } 
}
```

#### 2. 变形变换
```css
.card {
  transform: 
    perspective(500px) 
    rotateY(15deg) 
    translateZ(50px);
  transform-style: preserve-3d;
}
```

### 3、响应式设计体系

#### 1. 媒体查询进阶
```css
/* 设备特性检测 */
@media (hover: hover) {
  .link { transition: opacity 0.3s; }
}

/* 区间检测 */
@media (300px <= width <= 768px) {
  .sidebar { display: none; }
}
```

#### 2. 容器查询
```css
.component {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .component__item { flex-direction: row; }
}
```

### 4、样式增强方案

#### 1. 自定义属性
```css
:root {
  --primary: #4285f4;
  --spacing: 16px;
}

.header {
  background: var(--primary);
  padding: var(--spacing);
}
```

#### 2. 现代选择器
```css
/* 关系选择器 */
.parent > .child { /*...*/ }

/* 逻辑组合 */
:is(section, article) h2 { /*...*/ }

/* 状态伪类 */
input:user-invalid { border-color: red; }
```

### 5、性能优化特性

#### 1. 内容可见性
```css
.long-list {
  content-visibility: auto;
  contain-intrinsic-size: 100px;
}
```

#### 2. 层叠上下文控制
```css
.modal {
  position: fixed;
  z-index: 10;
  will-change: transform; /* 性能提示 */
}
```

### 6、前沿特性展望

#### 1. 子网格
```css
.grid {
  display: grid;
  grid-template-columns: subgrid;
}
```

#### 2. 滚动驱动动画
```css
@keyframes reveal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: reveal linear;
  animation-timeline: scroll();
}
```

### 7、面试回答策略

1. **结构化表达**：按布局→样式→交互→性能分类说明
2. **对比演进**：对比CSS2的局限性说明CSS3的解决方案
3. **实际案例**：结合项目经验说明特性应用场景
4. **性能意识**：强调硬件加速、渲染优化等高级话题
5. **前瞻视角**：适当提及CSS4草案特性展示技术敏感度

示例回答：
"CSS3的核心革新体现在三个方面：首先，Flexbox和Grid彻底改变了网页布局方式，解决了传统浮动布局的维护难题；其次，过渡动画和变形变换使交互体验更加流畅；最后，媒体查询和容器查询构建了完整的响应式设计体系。在实际项目中，我使用CSS变量实现主题切换，配合层叠上下文优化渲染性能..."

## 12、CSS3选择器及其优先级

**对于选择器的优先级：**

- !important：999999999

```css
/* 示例 */
#id { color: red !important; }
```

- 内联样式：1000

```css
/* 示例 */
<div style="color: blue;"></div>
```

- id 选择器：100

```css
/* 示例 */
#id { color: green; }
```
- 类选择器、伪类选择器、属性选择器：10

```css
/* 示例 */
.class { color: yellow; }
a:hover { color: purple; }
input[type="text"] { border: 1px solid black; }
```

- 标签选择器、伪元素选择器：1

```css
/* 示例 */
div { background-color: gray; }
::before { content: "Before"; }
```

**注意事项：**

- !important声明的样式的优先级最高；
- 如果优先级相同，则最后出现的样式生效；
- 继承得到的样式的优先级最低；
- 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

## 13、CSS3中 “transition” 过渡属性

### 1、基本概念

`transition` 是 CSS3 提供的属性，用于在**元素状态改变时**创建平滑的动画效果，而不需要使用 JavaScript。

### 2、属性组成

`transition` 是以下四个属性的简写：

1. **transition-property**：指定应用过渡的 CSS 属性
2. **transition-duration**：过渡持续时间
3. **transition-timing-function**：过渡速度曲线
4. **transition-delay**：过渡延迟时间

### 3、语法格式

```css
transition: [property] [duration] [timing-function] [delay];
```

### 4、各属性详解

#### 1. transition-property
指定哪些属性变化时会有过渡效果
```css
transition-property: all; /* 所有可过渡属性 */
transition-property: none; /* 无过渡效果 */
transition-property: width, height; /* 指定多个属性 */
```

#### 2. transition-duration
过渡持续时间（必需属性）
```css
transition-duration: 0.5s; /* 秒 */
transition-duration: 200ms; /* 毫秒 */
```

#### 3. transition-timing-function
速度曲线函数（缓动效果）
```css
transition-timing-function: ease; /* 默认值，慢-快-慢 */
transition-timing-function: linear; /* 匀速 */
transition-timing-function: ease-in; /* 慢-快 */
transition-timing-function: ease-out; /* 快-慢 */
transition-timing-function: ease-in-out; /* 慢-快-慢 */
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); /* 贝塞尔曲线 */
transition-timing-function: steps(4, end); /* 分步过渡 */
```

### 4. transition-delay
过渡效果延迟时间
```css
transition-delay: 0.2s; /* 0.2秒后开始过渡 */
```

### 5、使用示例

#### 1. 基本用法
```css
.box {
  width: 100px;
  transition: width 0.5s ease-in-out;
}
.box:hover {
  width: 200px;
}
```

:::demo
example/interview/17
:::

#### 2. 多属性过渡
```css
.button {
  background-color: #d0d0d0;
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease-out 0.1s;
}
.button:hover {
  color: #fff;
  background-color: #3498db;
  transform: scale(1.05);
}
```

:::demo
example/interview/18
:::

#### 3. 全局过渡设置
```css
* {
  transition: all 0.3s ease;
}
```

### 6、面试回答要点

1. **组成要素**：说明四个子属性及其作用
2. **语法结构**：演示简写语法和完整写法
3. **实际应用**：举例说明常见使用场景
4. **对比animation**：简要说明与animation的区别

| 特性                | transition (过渡)                     | animation (动画)                     |
|---------------------|---------------------------------------|--------------------------------------|
| **触发方式**        | 需要状态改变（如:hover）               | 自动执行（通过关键帧定义）            |
| **控制粒度**        | 只能定义开始和结束状态                  | 可以定义多个关键帧状态                |
| **循环能力**        | 不能自动循环                           | 可以无限循环(infinite)                |
| **方向控制**        | 只能单向执行                           | 可以反向/交替播放(alternate)          |
| **暂停能力**        | 不能暂停                               | 可以暂停(paused)                      |
| **中间状态**        | 只有开始和结束两个状态                  | 可以定义任意多个中间状态(@keyframes)  |
| **自动执行**        | 必须依赖状态变化                        | 可以自动开始                          |
| **代码复杂度**      | 简单，适合简单效果                      | 复杂，适合复杂动画                    |

transition和animation虽然都能实现动画效果，但设计理念不同。transition是状态过渡的补充，需要状态变化触发，适合简单的交互效果；而animation通过关键帧定义完整动画序列，可以自动播放、循环控制，适合复杂动画场景。例如按钮悬停效果用transition，而加载动画这种需要循环的就用animation实现。

## 14、CSS display 属性：block、inline 和 inline-block 的区别

### 1、核心区别对比

| 特性                | block (块级元素)          | inline (行内元素)         | inline-block (行内块元素)  |
|--------------------|--------------------------|--------------------------|--------------------------|
| **宽度/高度设置**   | ✅ 可以设置               | ❌ 不可设置              | ✅ 可以设置              |
| **默认宽度**        | 父容器100%宽度           | 由内容决定               | 由内容决定               |
| **换行表现**        | 独占一行                 | 不换行                   | 不换行                   |
| **内外边距**        | 四个方向都有效           | 水平方向有效，垂直方向不影响行高 | 四个方向都有效           |
| **包含关系**        | 可包含其他块级和行内元素 | 通常只包含文本和其他行内元素 | 可包含其他元素           |
| **典型标签**        | `<div>`、`<p>`、`<h1>`   | `<span>`、`<a>`、`<strong>` | `<img>`、`<input>`      |

### 2、常见问题解答

#### Q: 为什么img、input默认是inline-block？
A: 这些是替换元素，需要保持行内排列特性，同时需要设置宽高来显示内容。

#### Q: 如何让多个div水平排列？
A: 设置`display: inline-block`，但需要注意HTML中的空白符会导致间隙，解决方案：
```css
.container {
  font-size: 0; /* 消除空白符间隙 */
}
.container > div {
  display: inline-block;
  font-size: 16px; /* 恢复字体大小 */
}
```

#### Q: 垂直对齐问题如何解决？
A: 使用`vertical-align`属性（对inline-block元素有效）：
```css
.inline-block {
  vertical-align: middle;
}
```

### 3、面试回答技巧

1. **分类对比**：从宽度、高度、排列方式等维度对比三者
2. **举例说明**：结合常用HTML标签说明
3. **实际问题**：提及常见的空白符间隙问题及解决方案
4. **使用场景**：说明各自适合的使用场景
5. **延伸扩展**：可提及flex/grid等现代布局方式

## 15、定位堆叠顺序z-index

### 1、z-index 基本概念

`z-index` 是 CSS 属性，用于控制**定位元素**在垂直于屏幕的 Z 轴上的堆叠顺序（即谁覆盖谁）。

### 2、核心特性

1. **仅对定位元素有效**：
   - 需要设置 `position` 为 `relative`、`absolute`、`fixed` 或 `sticky`
   - 默认 `static` 定位的元素不受 `z-index` 影响

2. **取值类型**：
   ```css
   z-index: auto;   /* 默认值，堆叠顺序与父元素相同 */
   z-index: 0;      /* 创建新的层叠上下文 */
   z-index: 1;      /* 正整数 */
   z-index: -1;     /* 负整数 */
   ```

3. **比较规则**：
   - 数值越大，元素越靠前（离用户越近）
   - 相同值时，DOM 中后出现的元素会覆盖前面的

### 3、层叠上下文（Stacking Context）

#### 1. 创建条件
以下情况会创建新的层叠上下文：
- 根元素 (`<html>`)
- `position` 非 static 且 `z-index` 非 auto
- `opacity` 小于 1
- `transform` 非 none
- `flex` 容器的子项且 `z-index` 非 auto
- `grid` 容器的子项且 `z-index` 非 auto
- `isolation: isolate`
- `will-change` 指定特定属性

#### 2. 层叠规则
1. 同一层叠上下文内比较 `z-index`
2. 不同层叠上下文比较**父级层叠上下文的 `z-index`**

### 4、常见应用场景

#### 1. 模态框覆盖
```css
.modal {
  position: fixed;
  z-index: 1000;
}
.overlay {
  position: fixed;
  z-index: 999;
}
```

#### 2. 导航菜单下拉
```css
.nav {
  position: relative;
  z-index: 10;
}
.dropdown {
  position: absolute;
  z-index: 11;
}
```

#### 3. 多元素层叠控制
```css
.card {
  position: relative;
}
.card:nth-child(1) { z-index: 3; }
.card:nth-child(2) { z-index: 2; }
.card:nth-child(3) { z-index: 1; }
```

### 5、常见问题与解决方案

#### 1. z-index 不生效
**原因**：
- 元素未设置定位（position 为 static）
- 父级创建了层叠上下文且 z-index 较低

**解决**：
```css
.element {
  position: relative; /* 确保是非 static 定位 */
  z-index: 1;
}
```

#### 2. 父级限制问题
**现象**：父元素 z-index 较低，子元素设置再高也无效

**示例**：
```html
<div class="parent" style="z-index: 1;">
  <div class="child" style="z-index: 9999;"></div>
</div>
<div class="other" style="z-index: 2;"></div>
```
此时 `.other` 会覆盖 `.child`，因为父级层叠上下文的 z-index 较低

#### 3. 合理取值范围
- 推荐使用 0-100 的区间
- 避免过度使用极大值（如 999999）
- 使用 CSS 变量管理：
  ```css
  :root {
    --z-modal: 100;
    --z-dropdown: 50;
    --z-tooltip: 30;
  }
  ```

### 6、面试回答要点

1. **明确前提**：强调仅对定位元素有效
2. **层叠上下文**：解释创建条件和比较规则
3. **实际应用**：举例模态框、下拉菜单等场景
4. **常见陷阱**：说明父级限制问题
5. **最佳实践**：推荐使用变量管理和合理取值范围