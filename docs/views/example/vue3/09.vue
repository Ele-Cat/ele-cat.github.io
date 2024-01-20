<template>
  <div class="container">
    <div>今年：{{ age }}岁</div>
    <div>后年：{{ newAge }}岁</div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16);
    // 得到后年的年龄
    const newAge = computed(() => {
      // 该函数的返回值就是计算属性的值
      return age.value + 2;
    });

    return { age, newAge };
  },
};
</script>
