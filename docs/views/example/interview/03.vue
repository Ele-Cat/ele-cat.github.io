<template>
  <div class="container">
    transform缩放:
    <div class="thin-line-1"></div>
    伪元素:
    <div class="thin-line-2"></div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}

/* 方法1: transform缩放 */
.thin-line-1 {
  height: 1px;
  background: black;
  transform: scaleY(0.5);
  transform-origin: 50% 100%;
  margin: 10px 0 20px;
}

/* 方法2: 伪元素 */
.thin-line-2 {
  position: relative;
  margin: 10px 0 20px;
}
.thin-line-2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: black;
  transform: scaleY(0.5);
}
</style>