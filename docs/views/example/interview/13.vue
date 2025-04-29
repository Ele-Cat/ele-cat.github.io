<template>
  <div class="flex">
    <div class="item">Item1</div>
    <div class="item">Item2</div>
    <div class="item">Item3</div>
  </div>
</template>

<style scoped>
.flex {
  height: 200px;
  display: flex;
  justify-content: center; /* 两端对齐 */
}
.item {
  flex: 1;
}
.item:nth-child(1) {
  background-color: #f0f0f0; 
}
.item:nth-child(2) {
  background-color: #e0e0e0; 
}
.item:nth-child(3) {
  background-color: #d0d0d0; 
}
</style>