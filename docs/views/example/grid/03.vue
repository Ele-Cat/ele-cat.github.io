<template>
  <div class="box">
    <span>1</span>
    <div class="wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
    </div>
    <span>2</span>
  </div>
  <hr />
  <div class="box">
    <span>1</span>
    <div class="wrapper inline-wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
    </div>
    <span>2</span>
  </div>
</template>

<style scoped>
.wrapper {
  /* 声明一个容器 */
  display: grid;
  /*  声明列的宽度  */
  grid-template-columns: repeat(3, 100px);
  /*  声明行间距和列间距  */
  grid-gap: 10px;
  /*  声明行的高度  */
  grid-template-rows: 50px 50px;
}

.inline-wrapper {
  display: inline-grid;
}

span {
  font-size: 200%;
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
</style>