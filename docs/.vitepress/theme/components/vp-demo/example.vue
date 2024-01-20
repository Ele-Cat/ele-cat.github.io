<template>
  <ClientOnly>
    <div class="example-app">
      <Example :path="path" />
    </div>
  </ClientOnly>
</template>

<script setup>
import Example from './vp-example.vue'

const props = defineProps({
  rawSource: String, // 源码
  source: String,
  path: String,
  description: String
})
</script>

<style lang="scss">
.example-app {
  .example-component {
    padding: 0;
  }
  p {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    border: none;
  }
}
</style>