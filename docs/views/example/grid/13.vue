<template>
  <h4>justify-items: start; -- 对齐单元格的起始边缘</h4>
  <div class="wrapper">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">Eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-items: end; -- 对齐单元格的结束边缘</h4>
  <div class="wrapper-1">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">Eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-items: center; -- 单元格内部居中</h4>
  <div class="wrapper-2">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">Eight</div>
    <div class="nine item">Nine</div>
  </div>

  <h4>justify-items: stretch; -- 拉伸，占满单元格的整个宽度（默认值）</h4>
  <div class="wrapper-3">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">Eight</div>
    <div class="nine item">Nine</div>
  </div>
</template>

<style scoped>
.wrapper,
.wrapper-1,
.wrapper-2,
.wrapper-3 {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-gap: 5px;
  grid-auto-rows: 50px;
  justify-items: start;
  margin: 20px 10px;
}

.wrapper-1 {
  justify-items: end;
}

.wrapper-2 {
  justify-items: center;
}

.wrapper-3 {
  justify-items: stretch;
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