<template>
  <div class="box">hover</div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #d0d0d0;
  transition: width 0.5s ease-in-out;
}
.box:hover {
  width: 200px;
}
</style>