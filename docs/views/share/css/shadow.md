---
outline: 3
---

## 阴影

### 单标签抖音 LOGO

- 主要借助了两个伪元素实现了整体结构，借助了 drop-shadow 生成一层整体阴影
- drop-shadow 只能是单层阴影，所以另一层阴影需要多尝试
- contrast(150%) brightness(110%) 则可以增强图像的对比度和亮度，更贴近抖音 LOGO 的效果

:::demo
example/css/shadow/01
:::

### 单标签 IE LOGO

- 关键在于类似星环的外围一圈使用了内阴影实现

:::demo
example/css/shadow/02
:::

### 立体投影

- 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
- 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。

:::demo
example/css/shadow/03
:::

### 纸页效果

:::demo
example/css/shadow/04
:::

<Comment />
