---
outline: 3
---

## 用户体验

### 浮雕风格

- 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
- 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。

:::demo
example/css/experience/01
:::

### 进入边界判定

- 利用了伪元素生成了 4 个三角形组成了一个正方形，通过 hover 哪个透明的三角形来判断用户的操作方位。

:::demo
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

:::demo
example/css/experience/03
:::

<Comment />
