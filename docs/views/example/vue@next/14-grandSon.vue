<template>
  <div class="container">
    <h4>孙组件 {{ money }} <button @click="fn">消费20</button></h4>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "GrandSon",
  setup() {
    const money = inject("money");
    // 孙组件，消费50，通知父组件App.vue组件，进行修改
    // 不能自己修改数据，遵循单选数据流原则，大白话：数据谁定义谁修改
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(20);
    };
    return { money, fn };
  },
};
</script>