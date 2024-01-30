::: details Flex 详解

- Flex 练习小游戏
- [塔防游戏](http://www.flexboxdefense.com/)
- [青蛙回家](https://flexboxfroggy.com/)

#### Flex 概述

Flexbox 布局也叫 Flex 布局，弹性盒子布局。它决定了元素如何在页面上排列，使它们能在不同的屏幕尺寸和设备下可预测地展现出来，更简便、完整、响应式地实现各种页面布局。

它的主要思想是使父元素能够调整子元素的宽度、高度、排列方式，从而更好的适应可用的布局空间。

#### 开启 Flex

```css
.box {
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.box {
  display: inline-flex;
}
```

> 注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。当布局涉及到不定宽度，分布对⻬的场景时，我们可以优先考虑弹性盒布局。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有 `子元素`（注意是子元素，不是全部后代元素）自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

#### 容器属性

- **flex-direction** 属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

| 属性值         | 含义                                                           |
| -------------- | -------------------------------------------------------------- |
| row            | _默认值_，主轴为水平方向（水平布局），起点在左端，从左向右排列 |
| row-reverse    | 主轴为水平方向（水平布局），起点在右端，从右向左排列           |
| column         | 主轴为垂直方向（垂直布局），起点在上沿，从上往下排列           |
| column-reverse | 主轴为垂直方向（垂直布局），起点在下沿，从下往上排列           |

- **flex-wrap** 属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

| 属性         | 值含义               |
| ------------ | -------------------- |
| nowrap       | _默认值_，表示不换行 |
| wrap         | 换行                 |
| wrap-reverse | 换行，第一行在下方   |

- **flex-flow** 属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

- **justify-content** 属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

| 属性值        | 含义                                                                 |
| ------------- | -------------------------------------------------------------------- |
| flex-start    | _默认值_，左对齐                                                     |
| flex-end      | 右对齐                                                               |
| center        | 居中                                                                 |
| space-between | 两端对齐，项目之间的间隔都相等                                       |
| space-around  | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 |

- **align-items** 属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

| 属性值     | 含义                                                          |
| ---------- | ------------------------------------------------------------- |
| flex-start | 交叉轴的起点对齐                                              |
| flex-end   | 交叉轴的终点对齐                                              |
| center     | 交叉轴的中点对齐                                              |
| baseline   | 项目的第一行文字的基线对齐                                    |
| stretch    | _默认值_，如果项目未设置高度或设为 auto，将占满整个容器的高度 |

- **align-content** 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

| 属性值        | 含义                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| flex-start    | 与交叉轴的起点对齐                                                     |
| flex-end      | 与交叉轴的终点对齐                                                     |
| center        | 与交叉轴的中点对齐                                                     |
| space-between | 与交叉轴两端对齐，轴线之间的间隔平均分布                               |
| space-around  | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍 |
| stretch       | _默认值_，轴线占满整个交叉轴                                           |

#### 项目属性

- **order** 属性用来定义项目的排列顺序。数值越小，排列越靠前，默认为 0 。

```css
.item {
  order: <integer>;
}
```

- **flex-grow** 属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>;
}
```

- **flex-shrink** 属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>;
}
```

- **flex-basis** 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto;
}
```

> 当主轴设置为水平时，当设置了`flex-basis`，设置的项目宽度值会失效，`flex-basis`需要跟`flex-grow`和`flex-shrink`配合使用才能生效。有两种特殊的值:
>
> - 当 flex-basis 值为 0 % 时，项目尺寸会被认为是 0，因此无论项目尺寸设置多少都没用；
> - 当 flex-basis 值为 auto 时，则跟根据尺寸的设定值来设置大小。

- **flex** 属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为 0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" >];
}
```

该属性有两个快捷值`auto (1 1 auto)` 和 `none (0 0 auto)`。

| 属性值         | 含义                                                                     |
| -------------- | ------------------------------------------------------------------------ |
| 0 1 auto       | _默认值_，在有剩余空间时，只缩小不放大                                   |
| none(0 0 auto) | 剩余空间时，不放大也不缩小，最终尺寸通常表现为最大内容宽度               |
| 0(0 1 0%)      | 当有剩余空间时，项目宽度为其内容的宽度，最终尺寸表现为最小内容宽度       |
| auto(1 1 auto) | 元素尺寸可以弹性增大，也可以弹性变小，但在尺寸不足时会优先最大化内容尺寸 |
| 1(1 1 0%)      | 元素尺寸可以弹性增大，也可以弹性变小，但在尺寸不足时会优先最小化内容尺寸 |

- **align-self** 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

:::
