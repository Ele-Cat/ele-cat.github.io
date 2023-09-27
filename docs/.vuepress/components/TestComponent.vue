<template>
  <div>
    <a-tooltip>
      <template #title>{{tip}}-{{is}}</template>
      测试组件-{{is}}
    </a-tooltip>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    is: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const tip = ref('我支持Vue@next')
    const is = props.is
    return {
      tip,
      is
    }
  }
}
</script>

<style>

</style>