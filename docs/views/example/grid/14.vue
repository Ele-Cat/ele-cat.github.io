<template>
  <h4>justify-content: start; -- 对齐容器的起始边框</h4>
  <div class="wrapper">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content: end; -- 对齐容器的结束边框</h4>
  <div class="wrapper-1">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content: center; -- 容器内部居中</h4>
  <div class="wrapper-2">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content: space-around; -- 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍</h4>
  <div class="wrapper-3">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content:space-between; -- 项目与项目的间隔相等，项目与容器边框之间没有间隔</h4>
  <div class="wrapper-4">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content: space-evenly; -- 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔</h4>
  <div class="wrapper-5">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-content: stretch; -- 项目大小没有指定时，拉伸占据整个网格容器</h4>
  <div class="wrapper-6">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>
</template>

<style scoped>
.wrapper,
.wrapper-1,
.wrapper-2,
.wrapper-3,
.wrapper-4,
.wrapper-5,
.wrapper-6 {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-gap: 5px;
  grid-auto-rows: 50px;
  justify-content: start;
  margin: 20px 0;
}

.wrapper-1 {
  justify-content: end;
}

.wrapper-2 {
  justify-content: center;
}

.wrapper-3 {
  justify-content: space-around;
}

.wrapper-4 {
  justify-content: space-between;
}

.wrapper-5 {
  justify-content: space-evenly;
}

.wrapper-6 {
  justify-content: stretch;
}

.item {
  font-size: 200%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.one {
  background: var(--c-red);
}

.two {
  background: var(--c-orange);
}

.three {
  background: var(--c-yellow);
}

.four {
  background: var(--c-olive);
}

.five {
  background: var(--c-cyan);
}

.six {
  background: var(--c-blue);
}

.seven {
  background: var(--c-purple);
}

.eight {
  background: var(--c-mauve);
}

.nine {
  background: var(--c-pink);
}</style>