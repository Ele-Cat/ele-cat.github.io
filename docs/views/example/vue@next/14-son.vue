<template>
  <div class="container">
    <h3>子组件 {{ money }} <button @click="fn">消费200</button></h3>
    <hr />
    <GrandSon />
  </div>
</template>
<script>
import { inject } from "vue";
import GrandSon from "./14-grandSon.vue";
export default {
  name: "Son",
  components: {
    GrandSon,
  },
  setup() {
    // 接收祖先组件提供的数据
    const money = inject("money");
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(200);
    };
    return { money, fn };
  },
};
</script>