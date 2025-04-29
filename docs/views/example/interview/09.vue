<template>
  <div class="box standard-box">标准盒模型</div>
  <div class="box weird-box">怪异盒模型</div>
</template>

<style scoped>
.box {
  margin: 20px;
  padding: 20px;
  border: 5px solid #333;
  background: #f0f0f0;
}

.standard-box {
  box-sizing: content-box;
  width: 200px;
  /* 总宽度: 200 + 20*2 + 5*2 = 250px */
}

.weird-box {
  box-sizing: border-box;
  width: 200px;
  /* 总宽度: 200px (内容宽度: 200 - 20*2 - 5*2 = 150px) */
}
</style>