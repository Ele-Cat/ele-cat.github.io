<template>
  <Person ref="ren" />
  <button @click="test">测试</button>
</template>

<script lang="ts" setup name="App">
import { ref } from "vue";
import Person from "./17-son.vue";

let ren = ref();

function test() {
  console.log(ren.value.name);
  console.log(ren.value.age);
}
</script>