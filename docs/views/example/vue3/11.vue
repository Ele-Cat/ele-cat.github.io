<template>
  <div class="container">
    <div>
      <p>count的值：{{ count }}</p>
      <button @click="add">改数据</button>
    </div>
    <hr />
    <div>
      <p>{{ obj.name }}</p>
      <p>{{ obj.age }}</p>
      <p>{{ obj.brand.name }}</p>
      <button @click="updateName">改名字</button>
      <button @click="updateBrandName">改品牌名字</button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    // 当你需要监听数据的变化就可以使用watch
    // 1. 监听一个ref数据
    // 1.1 第一个参数  需要监听的目标
    // 1.2 第二个参数  改变后触发的函数
    // watch(count, (newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })

    const obj = reactive({
      name: "ls",
      age: 10,
      brand: {
        id: 1,
        name: "宝马",
      },
    });
    const updateName = () => {
      obj.name = "zs";
    };
    const updateBrandName = () => {
      obj.brand.name = "奔驰";
    };
    // 2. 监听一个reactive数据
    // watch(obj, () => {
    //   console.log("数据改变了");
    // });

    // 3. 监听多个数据的变化
    // watch([count, obj], ()=>{
    //   console.log('监听多个数据改变了')
    // })

    // 4. 此时监听对象中某一个属性的变化 例如：obj.name
    // 需要写成函数返回该属性的方式才能监听到
    // watch(() => obj.name, ()=>{
    //   console.log('监听obj.name改变了')
    // })

    // 5. 深度监听 & 默认触发
    watch(
      () => obj.brand,
      () => {
        // console.log("brand数据改变了");
      },
      {
        // 6. 需要深度监听
        deep: true,
        // 7. 想默认触发
        immediate: true,
      }
    );

    return { count, add, obj, updateName, updateBrandName };
  },
};
</script>
