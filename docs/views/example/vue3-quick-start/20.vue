<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="increment">点我+1</button>
  <button @click="decrement">点我-1</button>
  <hr />
  <img v-for="(u, index) in dogList" :key="index" :src="(u as string)" />
  <span v-show="isLoading">加载中......</span><br />
  <button @click="getDog">再来一只狗</button>
  <button @click="clearDog">清空狗狗</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<script setup lang="ts">
import useSum from "./hooks/useSum";
import useDog from "./hooks/useDog";

let { sum, increment, decrement } = useSum();
let { dogList, getDog, clearDog, isLoading } = useDog();
</script>