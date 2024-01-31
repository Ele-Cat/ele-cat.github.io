<template>
  <div class="wrapper">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(300px, 2fr);
  grid-gap: 5px;
  grid-auto-rows: 50px;
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