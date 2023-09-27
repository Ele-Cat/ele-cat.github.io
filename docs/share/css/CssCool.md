# Css样式Cool

## 生成

### 生成Flex

这里放置动态演示、生成Flex代码

### 生成三角形

这里放置动态生成三角形代码

## 文字

### SVG动态文字
:::demo SVG动态文字
example/css/text/01
:::

### 霓虹灯文字
<div class="hide-padding">

:::demo 多重阴影的过渡效果与白色字体的叠加
example/css/text/02
:::
</div>

### 3D氖灯文字
<div class="hide-padding">

:::demo 利用 text-shadow 叠加多层文字阴影、利用 animation 动态改变阴影颜色
example/css/text/03
:::
</div>

### 条纹立体阴影文字
:::demo 伪元素可以通过 attr 读取元素属性、通过生成**白色->透明色**的多重线性渐变叠加在黑色之上来实现条纹效果
example/css/text/04
:::

### 环形文字
:::demo SVG, transition
example/css/text/05
:::

### 立体文字阴影

:::demo text-shadow叠加
example/css/text/06
:::

### 流光文字

<div class="hide-padding">

:::demo background-clip
example/css/text/07
:::
</div>

### 故障文字
- 利用了伪元素生成了文字的两个副本
- 视觉效果由位移、遮罩、混合模式完成
- 配色借鉴了抖音 LOGO 的风格

<div class="hide-padding">

:::demo 故障文字
example/css/text/08
:::
</div>

### 波浪效果
- 传统的文字镂空展示背景更多的是使用 background-clip。
- 但是本效果文字的背景是动画效果，无法使用 background-clip 进行穿透展示，这里通过混合模式 mix-blend-mode 的特性实现。
<div class="hide-padding">

:::demo 波浪效果
example/css/text/09
:::
</div>

### 光影文字
<div class="hide-padding">

:::demo 光影文字
example/css/text/10
:::
</div>

## 阴影

### 单标签抖音 LOGO
- 主要借助了两个伪元素实现了整体结构，借助了 drop-shadow 生成一层整体阴影
- drop-shadow 只能是单层阴影，所以另一层阴影需要多尝试
- contrast(150%) brightness(110%) 则可以增强图像的对比度和亮度，更贴近抖音LOGO的效果

<div class="hide-padding">

:::demo 单标签抖音LOGO
example/css/shadow/01
:::
</div>

### 单标签IE LOGO
- 关键在于类似星环的外围一圈使用了内阴影实现
:::demo 单标签IE LOGO
example/css/shadow/02
:::

### 立体投影
- 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
- 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。
:::demo 单标签IE LOGO
example/css/shadow/03
:::

## 视觉&动效

### 充电
<div class="hide-padding">

:::demo 单标签滴水效果
example/css/effect/01
:::
</div>

## 边框&背景

::: tip 推荐
《CSS揭秘》作者[Lea Verou](https://lea.verou.me/about/)使用CSS3渐变实现的图案库[Patterns Gallery](https://projects.verou.me/css3patterns/)，还有它的SVG版本[SVG Patterns Gallery](https://philiprogers.com/svgpatterns/)，有兴趣的可以去研究一下作者的实现原理。
:::

### 渐变背景
- 使用 hue-rotate 实现渐变背景动画。

<div class="hide-padding">

:::demo 渐变背景
example/css/background/01
:::
</div>

### 条纹背景
- gradient, linear-gradient, radial-gradient, repeating-linear-gradient

:::demo 条纹背景
example/css/background/02
:::

### 斑马条纹
- linear-gradient
<div class="hide-padding">

:::demo 斑马条纹
example/css/background/03
:::
</div>

### 毛玻璃效果
<div class="hide-padding">

:::demo 斑马条纹
example/css/background/04
:::
</div>

### 光影border
<div class="hide-padding">

:::demo conic-gradient
example/css/background/05
:::
</div>

### 心形光影
<div class="hide-padding">

:::demo 心形光影
example/css/background/06
:::
</div>

### 气泡按钮

:::demo 气泡按钮
example/css/background/07
:::

### ColorUI 好看的渐变色

<div class="padding-tb">
  <div class="padding-xs shadow bg-gradual-red">bg-gradual-red</div>
  <div class="padding-xs margin-top shadow bg-gradual-orange">bg-gradual-orange</div>
  <div class="padding-xs margin-top shadow bg-gradual-green">bg-gradual-green</div>
  <div class="padding-xs margin-top shadow bg-gradual-purple">bg-gradual-purple</div>
  <div class="padding-xs margin-top shadow bg-gradual-pink">bg-gradual-pink</div>
  <div class="padding-xs margin-top shadow bg-gradual-blue">bg-gradual-blue</div>
</div>


## 用户体验

### 浮雕风格
- 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
- 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。
<div class="hide-padding">

:::demo 浮雕风格表单
example/css/experience/01
:::
</div>

### 进入边界判定
- 利用了伪元素生成了 4 个三角形组成了一个正方形，通过 hover 哪个透明的三角形来判断用户的操作方位。
:::demo 进入边界判定
example/css/experience/02
:::

### 鼠标样式

```css
// 在特定位置使用特定鼠标样式
some-ele {
  cursor: replace here;
}
```
- 单击即可复制
:::demo 浮雕风格表单
example/css/experience/03
:::

## Loading

<!-- [Loading01-Loading12](https://tobiasahlin.com/spinkit/) -->
<div class="hide-source">

:::demo Loading
example/css/loading/Index
:::
</div>

<details><summary>查看代码</summary>

:::: code-group
::: code-group-item 01
@[code vue](../../views/example/css/loading/components/Loading01.vue)
:::
::: code-group-item 02
@[code vue](../../views/example/css/loading/components/Loading02.vue)
:::
::: code-group-item 03
@[code vue](../../views/example/css/loading/components/Loading03.vue)
:::
::: code-group-item 04
@[code vue](../../views/example/css/loading/components/Loading04.vue)
:::
::: code-group-item 05
@[code vue](../../views/example/css/loading/components/Loading05.vue)
:::
::: code-group-item 06
@[code vue](../../views/example/css/loading/components/Loading06.vue)
:::
::: code-group-item 07
@[code vue](../../views/example/css/loading/components/Loading07.vue)
:::
::: code-group-item 08
@[code vue](../../views/example/css/loading/components/Loading08.vue)
:::
::: code-group-item 09
@[code vue](../../views/example/css/loading/components/Loading09.vue)
:::
::: code-group-item 10
@[code vue](../../views/example/css/loading/components/Loading10.vue)
:::
::: code-group-item 11
@[code vue](../../views/example/css/loading/components/Loading11.vue)
:::
::: code-group-item 12
@[code vue](../../views/example/css/loading/components/Loading12.vue)
:::
::: code-group-item 13
@[code vue](../../views/example/css/loading/components/Loading13.vue)
:::
::::
</details>

### Epic Spinners

[地址](https://epic-spinners.epicmax.co)

<div class="iframe-box">
  <iframe style="height:520px;" src="https://epic-spinners.epicmax.co"></iframe>
</div>

## 3D

### 视差效果
<div class="hide-padding">

:::demo 视差效果
example/css/3d/01
:::
</div>

### 文字出场
<div class="hide-padding">

:::demo 文字出场
example/css/3d/02
:::
</div>

### 无限延伸场景
- 四面墙壁的无限延伸的感觉塑造
- 视角的变动
- 远处最深处的遮罩
<div class="hide-padding">

:::demo 无限延伸
example/css/3d/03
:::
</div>

### 404
- 添加立方体的滚动动画
- 控制下落的缓动函数，及落地的震荡动画（为了效果更为逼真，运用了设计动画中的预备动作、跟随和重叠动画等技巧）
- 控制立方体及地面数字画面的平移
- 控制动画的无限循环
<div class="hide-padding">

:::demo 404
example/css/3d/04
:::
</div>

### 宇宙时空穿梭效果
- 选取一张合适的星空图
- 利用 5 个元素设定上述星空图，在 3D 效果的作用下，在上下左右中5个方向铺满一屏
- 父容器在极小的 perspective 值下，设定容器的 translateZ动画，实现效果
- 通过两组同样的动画，其中一组设置负延迟实现动画的衔接
<div class="hide-padding">

:::demo 宇宙时空穿梭效果
example/css/3d/05
:::
</div>

## 其他

> 一些有趣的CSS项目

### NES.css

NES红白机风格的 CSS 框架，主要的实现原理是通过将字体 Press+Start+2P 和 box-shadow 巧妙的结合，非常有意思，尤其是icon的实现，强烈建议大家看下源码~ :thumbsup:[演示地址](https://github.com/BcRikko/NES.css) [项目地址](https://github.com/BcRikko/NES.css)

<div class="iframe-box">
  <iframe src="https://bcrikko.github.io/NES.css/"></iframe>
</div>

### Shapes generated
用CSS渐变实现的形状，[演示地址](https://yuanchuan.dev/gradient-shapes/) [项目地址](https://github.com/yuanchuan/gradient-shapes)

<div class="iframe-box">
  <iframe src="https://yuanchuan.dev/gradient-shapes/"></iframe>
</div>

### A Single Div
只用一个HTML元素实现的CSS的绘图，[演示地址](https://a.singlediv.com) [项目地址](https://github.com/lynnandtonic/a-single-div)

<div class="iframe-box">
  <iframe src="https://a.singlediv.com"></iframe>
</div>