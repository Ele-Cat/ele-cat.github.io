<template>
  <div class="container">
    <h2>父组件</h2>
    <p>{{ money }}</p>
    <hr />
    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>
<script>
import { ref } from "vue";
import Son from "./13-son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  // 父组件的数据传递给子组件
  setup() {
    const money = ref(100);
    const updateMoney = (newMoney) => {
      money.value -= newMoney;
    };
    return { money, updateMoney };
  },
};
</script>
