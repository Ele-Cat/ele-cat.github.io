<template>
  <div class="container">
    <h2>子组件 {{ modelValue }} <button @click="fn">改变数据</button></h2>
  </div>
</template>
<script>
export default {
  name: "Son",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const fn = () => {
      // 改变数据
      emit("update:modelValue", 100);
    };
    return { fn };
  },
};
</script>
