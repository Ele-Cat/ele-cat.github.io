---
outline: [2, 3]
---

# Grid 详解

## Grid 概述

> Grid 布局即网格布局，较擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系，号称是最强大的的 CSS 布局方案，是目前唯一一种 CSS 二维布局。利用 Grid 布局，我们可以轻松实现类似下面的布局：

::: demo
example/grid/01
:::

## Grid VS Flex

讲到布局，我们就会想到 Flex 布局，甚至有人认为竟然有 Flex 布局了，似乎没有必要去了解 Grid 布局。但 Flex 布局和 Grid 布局有实质的区别，那就是 Flex 布局是一维布局，Grid 布局是二维布局。Flex 布局一次只能处理一个维度上的元素布局，一行或者一列。Grid 布局是将容器划分成了“行”和“列”，产生了一个个的网格，我们可以将网格元素放在与这些行和列相关的位置上，从而达到我们布局的目的。

Grid 布局远比 Flex 布局强大！

## Grid 基础概念

1. 容器和项目：我们通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个网格容器。一旦我们这样做，这个元素的所有**直系子元素**将成为网格项目。比如上面 `.wrapper` 所在的元素为一个网格容器，其直系子元素将成为网格项目。
2. 网格轨道：`grid-template-columns` 和 `grid-template-rows` 属性来定义网格中的行和列。容器内部的水平区域称为行，垂直区域称为列。下图中 `One`、`Two`、`Three` 组成了一行，`One`、`Four` 则是一列网格单元：一个网格单元是在一个网格元素中最小的单位， 从概念上来讲其实它和表格的一个单元格很像。下图中 `One`、`Two`、`Three`、`Four`...都是一个个的网格单元
3. 网格线：划分网格的线，称为"网格线"。应该注意的是，当我们定义网格时，我们定义的是**网格轨道**，而不是网格线。Grid 会为我们创建编号的网格线来让我们来定位每一个网格元素。m 列有 m + 1 根垂直的网格线，n 行有 n + 1 跟水平网格线。比如下图示例中就有 4 根垂直网格线。一般而言，是从左到右，从上到下，1，2，3 进行编号排序。当然也可以从右到左，从下到上，按照 -1，-2，-3...顺序进行编号排序
   ![网格线](/images/1706661514641.jpg){data-zoomable}
4. 示例&代码

::: demo
example/grid/02
:::

## 容器属性

### display

我们通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个网格容器。声明 `display：grid` 则该容器是一个块级元素，设置成 `display: inline-grid` 则容器元素为行内元素。

```css
.wrapper {
  display: grid;
}
.inline-wrapper {
  display: inline-grid;
}
```

::: demo
example/grid/03
:::

### grid-template-columns 和 grid-template-rows

`grid-template-columns` 属性设置列宽，`grid-template-rows` 属性设置行高。

1. 固定列宽和行高

```css
.wrapper {
  display: grid;
  /*  声明了三列，宽度分别为 200px 100px 200px */
  grid-template-columns: 200px 100px 200px;
  grid-gap: 10px;
  /*  声明了两行，行高分别为 50px 50px  */
  grid-template-rows: 50px 50px;
}
```

::: demo
example/grid/04
:::

2. repeat() 函数

repeat() 函数可以简化重复的值。该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。比如上面行高都是一样的，我们可以这么去实现，实际效果是一模一样的。

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 100px 200px;
  grid-gap: 10px;
  /*  2行，而且行高都为 50px  */
  grid-template-rows: repeat(2, 50);
}
```

::: demo
example/grid/05
:::

> `auto-fill` 关键字：表示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格。`grid-template-columns: repeat(auto-fill, 200px)` 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素，代码以及效果如下所示【拖动缩放浏览器宽度查看效果】：
>
> ```css
> .wrapper {
>   display: grid;
>   grid-template-columns: repeat(auto-fill, 200px);
>   grid-gap: 5px;
>   grid-auto-rows: 50px;
> }
> ```
>
> ::: demo
> example/grid/06
> :::

3. `fr` 关键字：Grid 布局还引入了一个另外的长度单位来帮助我们创建灵活的网格轨道。`fr` 单位代表网格容器中可用空间的一等份。`grid-template-columns: 200px 1fr 2fr` 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3。代码以及效果如下所示【拖动缩放浏览器宽度查看效果】：

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  grid-gap: 5px;
  grid-auto-rows: 50px;
}
```

::: demo
example/grid/07
:::

4. `minmax()` 函数：我们有时候想给网格元素一个最小和最大的尺寸，`minmax()` 函数产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。它接受两个参数，分别为最小值和最大值。`grid-template-columns: 1fr 1fr minmax(300px, 2fr)` 的意思是，第三个列宽最少也是要 300px，但是最大不能大于第一第二列宽的两倍。代码以及效果如下所示【拖动缩放浏览器宽度查看效果】：

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(300px, 2fr);
  grid-gap: 5px;
  grid-auto-rows: 50px;
}
```

::: demo
example/grid/08
:::

5. `auto` 由浏览器决定长度。通过 `auto` 关键字，我们可以轻易实现三列或者两列布局。`grid-template-columns: 100px auto 100px` 表示第一第三列为 100px，中间由浏览器决定长度，代码以及效果如下所示【拖动缩放浏览器宽度查看效果】：

```css
.wrapper {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-gap: 5px;
  grid-auto-rows: 50px;
}
```

::: demo
example/grid/09
:::

### grid-row-gap 、grid-column-gap 以及 grid-gap

grid-row-gap 属性、grid-column-gap 属性分别设置行间距和列间距。 grid-gap 属性是两者的简写形式。

::: warning
`grid-row-gap`、`grid-column-gap`、`grid-gap`都已被废弃，现在改成`row-gap`、`column-gap`和`gap`，当然之前的还能用。
:::

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 100px 100px;
  grid-auto-rows: 50px;
  gap: 10px 20px;
}
```
等同于
```css
.wrapper-1 {
  display: grid;
  grid-template-columns: 200px 100px 100px;
  grid-auto-rows: 50px;
  row-gap: 10px;
  column-gap: 20px;
}
```

::: demo
example/grid/10
:::

## 项目属性

## 实战示例

## 参考资料

- [最强大的 CSS 布局 —— Grid 布局](https://juejin.cn/post/6854573220306255880)

<!-- <Comment /> -->
