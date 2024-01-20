<template>
  <div class="container">
    <h3>子组件</h3>
    <p>{{ money }}</p>
    <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "Son",
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
  setup(props, { emit }) {
    // 获取父组件数据money
    // console.log(props.money);
    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要-50
      emit("change-money", 50);
    };
    return { changeMoney };
  },
};
</script>
