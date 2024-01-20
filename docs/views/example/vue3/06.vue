<template>
  <div class="container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: "李四",
      age: 10,
    });
    // console.log(obj);
    // 2. 解构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age)
    // const obj2 = {...obj}
    // console.log(obj2)
    // 以上方式导致数据就不是响应式数据了
    const obj3 = toRefs(obj);
    // console.log(obj3);

    const updateName = () => {
      // obj3.name.value = '张三'
      obj.name = "张三";
      obj3.age.value = 20;
    };

    return { ...obj3, updateName };
  },
};
</script>