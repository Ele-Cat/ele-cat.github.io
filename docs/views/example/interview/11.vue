<template>
  <div class="flex">
    <div class="item item1">Item1：order最大，所以显示在最后面；设置flex-grow: 1;所以撑开</div>
    <div class="item item2">Item2：设置flex-basis: 200px;所以宽度定为200</div>
    <div class="item item3">Item3：没设置order，所以在前面；设置flex-grow: 1;所以撑开</div>
  </div>
</template>

<style scoped>
.flex {
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: row; /* 主轴方向为水平方向 */
  flex-wrap: wrap; /* 换行 */
  justify-content: space-between; /* 两端对齐 */
  align-items: stretch;
}
.item1 {
  order: 2;
  flex-grow: 1;
  width: 200px;
  background-color: #f0f0f0;
}
.item2 {
  order: 1;
  flex-shrink: 1;
  flex-basis: 200px;
  width: 400px;
  background-color: #e0e0e0;
}
.item3 {
  width: 600px;
  flex-grow: 1;
  background-color: #d0d0d0;
}
</style>