<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{ x }}</div>
    <div>Y轴：{{ y }}</div>
    <hr />
    <div>{{ count }} <button @click="add()">自增</button></div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 鼠标移动逻辑
    const mouse = reactive({
      x: 0,
      y: 0,
    });
    const move = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    };
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });
    onUnmounted(() => {
      document.removeEventListener("mousemove", move);
    });

    // 累加逻辑
    const count = ref(0);
    const add = () => {
      count.value++;
    };

    // 返回数据
    return {
      ...toRefs(mouse),
      count,
      add,
    };
  },
};
</script>
