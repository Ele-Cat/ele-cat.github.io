<template>
  <div class="person">
    <h4 id="title1" ref="title1">尚硅谷</h4>
    <h5 ref="title2">前端</h5>
    <h6 ref="title3">Vue</h6>
    <input type="text" ref="inpt" /> <br /><br />
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from "vue";

let title1 = ref();
let title2 = ref();
let title3 = ref();

function showLog() {
  // 通过id获取元素
  const t1 = document.getElementById("title1");
  // 打印内容
  console.log((t1 as HTMLElement).innerText);
  console.log((<HTMLElement>t1).innerText);
  console.log(t1?.innerText);

  /************************************/

  // 通过ref获取元素
  console.log(title1.value);
  console.log(title2.value);
  console.log(title3.value);
}
</script>