---
outline: 3
---

## 文字

### 文字截断

::: demo
example/css/text/11
:::

### SVG 动态文字

::: demo
example/css/text/01
:::

### 霓虹灯文字

::: demo
example/css/text/02
:::

### 3D 氖灯文字

- 利用 text-shadow 叠加多层文字阴影、利用 animation 动态改变阴影颜色

::: demo
example/css/text/03
:::

### 条纹立体阴影文字

- 伪元素可以通过 attr 读取元素属性、通过生成**白色->透明色**的多重线性渐变叠加在黑色之上来实现条纹效果

:::demo
example/css/text/04
:::

### 环形文字

- SVG, transition

::: demo
example/css/text/05
:::

### 立体文字阴影

- text-shadow 叠加

::: demo
example/css/text/06
:::

### 流光文字

- background-clip

:::demo
example/css/text/07
:::

### 故障文字

- 利用了伪元素生成了文字的两个副本
- 视觉效果由位移、遮罩、混合模式完成
- 配色借鉴了抖音 LOGO 的风格

:::demo
example/css/text/08
:::

### 波浪效果

- 传统的文字镂空展示背景更多的是使用 background-clip。
- 但是本效果文字的背景是动画效果，无法使用 background-clip 进行穿透展示，这里通过混合模式 mix-blend-mode 的特性实现。

:::demo
example/css/text/09
:::

### 光影文字

::: demo
example/css/text/10
:::

<Comment />
