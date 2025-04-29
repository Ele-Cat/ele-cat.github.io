<template>
  <div class="outer">
    <div class="box">正常元素</div>
    <div class="box display-none">display: none的元素</div>
    <div class="box">相邻元素</div>
  </div>

  <div class="outer">
    <div class="box">正常元素</div>
    <div class="box visibility-hidden">visibility: hidden的元素</div>
    <div class="box">相邻元素</div>
  </div>
</template>

<style scoped>
.outer {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
}

.box {
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 20px;
  background-color: rgba(255, 0, 0, 0.5); /* 仅背景半透明 */
}

.display-none {
  display: none;
}

.visibility-hidden {
  visibility: hidden; 
}
</style>