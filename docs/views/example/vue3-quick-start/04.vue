<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<!-- 下面的写法是setup语法糖 -->
<script setup lang="ts">
console.log(this); //undefined

// 数据（注意：此时的name、age、tel都不是响应式数据）
let name = "张三";
let age = 18;
let tel = "13888888888";

// 方法
function changName() {
  name = "李四"; //注意：此时这么修改name页面是不变化的
}
function changAge() {
  console.log(age);
  age += 1; //注意：此时这么修改age页面是不变化的
}
function showTel() {
  alert(tel);
}
</script>