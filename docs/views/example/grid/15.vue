<template>
  <h4>grid-auto-rows: xxx; -- 横向时生效</h4>
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

  <h4>grid-auto-columns: xxx; -- 纵向时生效</h4>
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
</template>

<style scoped>
.wrapper,
.wrapper-1 {
  display: grid;
  grid-gap: 10px 20px;
  margin: 20px 0;
}

.wrapper {
  grid-template-columns: 200px 100px;
  /*  只设置了两行，但实际的数量会超出两行，超出的行高会以 grid-auto-rows 算 */
  grid-template-rows: 100px 100px;
  grid-auto-rows: 50px;
}

.wrapper-1 {
  grid-auto-flow: column;
  grid-template-columns: 150px 100px;
  grid-auto-columns: 120px;
  grid-template-rows: 50px 50px;
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
}
</style>