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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}

.item {
  font-size: 200%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.one {
  grid-column: 1 / 2;
  grid-row: 1;
  background: var(--c-red);
}

.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  background: var(--c-orange);
}

.three {
  grid-row: 2 / 5;
  grid-column: 1;
  background: var(--c-yellow);
}

.four {
  grid-column: 3;
  grid-row: 3;
  background: var(--c-olive);
}

.five {
  grid-column: 2;
  grid-row: 3/5;
  background: var(--c-cyan);
}

.six {
  grid-column: 3;
  grid-row: 4;
  background: var(--c-blue);
}
</style>