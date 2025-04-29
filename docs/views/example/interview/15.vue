<template>
  <div class="container">
    <div class="origin"></div>
    <div class="origin transform1">1</div>
    <div class="origin transform2">2</div>
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
  background-color: #e0e0e0;
}
.transform2 {
  transform: scale(1.2) translate(80px, 20px) rotate(30deg);
  background-color: #d0d0d0; 
}
</style>