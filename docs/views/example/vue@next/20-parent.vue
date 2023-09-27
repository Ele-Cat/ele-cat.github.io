<template>
  <div class="container">
    <h2>父组件{{money}}</h2>
    <hr />
    <Son :money="money" @cost-money="costMoney" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Son from "./20-son.vue"

const money = ref(100)

const costMoney = (e) => {
  money.value -= e
}
</script>
