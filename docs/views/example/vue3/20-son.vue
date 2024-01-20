<template>
  <div class="container">
    <h3>子组件{{props.money}} or {{money}} <button @click="costMoney">花20</button></h3>
  </div>
</template>
<script setup>
// import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  money: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits()

const costMoney = () => {
  emit('cost-money', 20)
}
</script>
