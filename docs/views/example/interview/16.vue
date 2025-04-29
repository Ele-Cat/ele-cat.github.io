<template>
  <div class="container">
    <div class="origin"></div>
    <div class="origin transform1">1</div>
    <div class="origin transform2">2</div>
    <div class="origin transform3">3</div>
  </div>
</template>

<style scoped>
.container {
  height: 100px;
  position: relative;
}
.origin {
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  position: absolute;
}
.transform1 {
  transform: translate(80px, 20px) rotate(30deg) scale(1.2);
  transform-origin: 50% 50%;
  background-color: #e0e0e0;
}
.transform2 {
  transform: translate(80px, 20px) rotate(30deg) scale(1.2);
  transform-origin: left top;
  background-color: #d0d0d0; 
}
.transform3 {
  transform: translate(80px, 20px) rotate(30deg) scale(1.2);
  transform-origin: -20px -30px;
  background-color: #c0c0c0; 
}
</style>