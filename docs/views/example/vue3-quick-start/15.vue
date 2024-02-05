<template>
  <div class="person">
    <h4>需求：水温达到50℃，或水位达到20cm，则警报</h4>
    <p id="demo">水温：{{ temp }}</p>
    <p>水位：{{ height }}</p>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+5</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from "vue";
// 数据
let temp = ref(0);
let height = ref(0);

// 方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 5;
}

// 用watch实现，需要明确的指出要监视：temp、height
watch([temp, height], (value) => {
  // 从value中获取最新的temp值、height值
  const [newTemp, newHeight] = value;
  // 室温达到50℃，或水位达到20cm，立刻警报
  if (newTemp >= 50 || newHeight >= 20) {
    console.log("警报1");
  }
});

// 用watchEffect实现，不用
const stopWtach = watchEffect(() => {
  // 室温达到50℃，或水位达到20cm，立刻警报
  if (temp.value >= 50 || height.value >= 20) {
    console.log(document.getElementById("demo")?.innerText);
    console.log("警报2");
  }
  // 水温达到100，或水位达到50，取消监视
  if (temp.value === 100 || height.value === 50) {
    console.log("清理了");
    stopWtach();
  }
});
</script>