<template>
  <div class="flex">
    <div class="item item1">Item1</div>
    <div class="item item2">Item2：因为justify-content: space-between;向右对齐</div>
    <div class="item item3">Item3：因为flex-wrap: wrap;而换行</div>
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
  width: 200px;
  background-color: #f0f0f0;
}
.item2 {
  width: 400px;
  background-color: #e0e0e0;
}
.item3 {
  width: 600px;
  background-color: #d0d0d0;
}
</style>