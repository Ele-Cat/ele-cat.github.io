<template>
  <div class="person">
    <h4>情况一：监视【ref】定义的【基本类型】数据</h4>
    <p>当前求和为：{{ sum }}</p>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
// 数据
let sum = ref(0);
// 方法
function changeSum() {
  sum.value += 1;
}
// 监视，情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log("sum变化了", newValue, oldValue);
  if (newValue >= 10) {
    stopWatch();
  }
});
</script>