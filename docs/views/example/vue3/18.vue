<template>
  <div class="container">
    <div>姓名：{{name}}</div>
    <div>年龄：{{age}} <button @click="ageAdd">年龄+1</button></div>
    <div>今天：{{dateFormat()}}</div>
  </div>
</template>
<script setup>
import { dateFormat } from './utils'
import { ref } from 'vue'

const name = ref('李四')

const age = ref(18)
const ageAdd = () => {
  age.value++
}
</script>
