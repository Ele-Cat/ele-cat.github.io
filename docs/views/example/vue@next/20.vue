<template>
  <div class="flex align-center">
    <span>我的样式被动态修改了</span>
    <button @click="changeStyle">修改</button>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  color: "red",
  fontSize: "20px",
});
function getColor() {
  function getRandom(m, n) {
    var x = Math.max(m, n);
    var y = Math.min(m, n);
    return Math.floor(Math.random() * (x - y) + y);
  }
  var r = getRandom(0, 256);
  var g = getRandom(0, 256);
  var b = getRandom(0, 256);
  return `rgb(${r},${g},${b})`;
}
const changeStyle = () => {
  state.color = getColor();
};
</script>
<style scoped>
span {
  /* 使用v-bind绑定state中的变量 */
  color: v-bind("state.color");
  font-size: v-bind("state.fontSize");
  margin-right: 15px;
}
</style>
