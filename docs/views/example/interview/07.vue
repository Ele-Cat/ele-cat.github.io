<template>
  <div class="container">
    <div class="right-angle-triangle"></div>
    <div class="right-angle-triangle2"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center; 
}
.right-angle-triangle {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
}
.right-angle-triangle2 {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom: 50px solid red;
  border-right: 50px solid red;
}
</style>