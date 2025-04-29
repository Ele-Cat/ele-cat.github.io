<template>
  <div class="box rgba">
    <p>rgba透明度效果</p>
  </div>

  <div class="box opacity">
    <p>opacity透明度效果</p>
  </div>
</template>

<style scoped>
.box {
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 20px;
}

.rgba {
  background-color: rgba(255, 0, 0, 0.5); /* 仅背景半透明 */
}

.opacity {
  background-color: rgb(255, 0, 0);
  opacity: 0.5; /* 整个元素半透明 */
}
</style>