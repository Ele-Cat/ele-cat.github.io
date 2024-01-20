<template>
  <div class="container">
    <div>{{ obj.name }}</div>
    <div>{{ obj.age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 普通数据
    // const obj = {
    //   name: 'ls',
    //   age: 18
    // }
    const obj = reactive({
      name: "李四",
      age: 18,
    });

    // 修改名字
    const updateName = () => {
      // console.log("updateName");
      obj.name = "王五";
      obj.age = 30;
    };

    return { obj, updateName };
  },
};
</script>
