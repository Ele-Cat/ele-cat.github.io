<template>
  <h4>justify-self: start; -- 对齐单元格的起始边缘</h4>
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

  <h4>justify-self: end; -- 对齐单元格的结束边缘</h4>
  <div class="wrapper">
    <div class="one item-1">One</div>
    <div class="two item-1">Two</div>
    <div class="three item-1">Three</div>
    <div class="four item-1">Four</div>
    <div class="five item-1">Five</div>
    <div class="six item-1">Six</div>
    <div class="seven item-1">Seven</div>
    <div class="eight item-1">eight</div>
    <div class="nine item-1">Nine</div>
  </div>

  <h4>justify-self: center; -- 单元格内部居中</h4>
  <div class="wrapper">
    <div class="one item-2">One</div>
    <div class="two item-2">Two</div>
    <div class="three item-2">Three</div>
    <div class="four item-2">Four</div>
    <div class="five item-2">Five</div>
    <div class="six item-2">Six</div>
    <div class="seven item-2">Seven</div>
    <div class="eight item-2">eight</div>
    <div class="nine item-2">Nine</div>
  </div>

  <h4>justify-self: stretch; -- 拉伸，占满单元格的整个宽度（默认值）</h4>
  <div class="wrapper">
    <div class="one item-3">One</div>
    <div class="two item-3">Two</div>
    <div class="three item-3">Three</div>
    <div class="four item-3">Four</div>
    <div class="five item-3">Five</div>
    <div class="six item-3">Six</div>
    <div class="seven item-3">Seven</div>
    <div class="eight item-3">eight</div>
    <div class="nine item-3">Nine</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-gap: 5px;
  grid-auto-rows: 50px;
  margin: 20px 0;
}

.item,
.item-1,
.item-2,
.item-3 {
  font-size: 200%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: start;
}

.item-1 {
  justify-self: end;
}

.item-2 {
  justify-self: center;
}

.item-3 {
  justify-self: stretch;
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