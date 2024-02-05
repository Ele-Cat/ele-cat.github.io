<template>
  <div class="person">
    <h4>情况三：监视【reactive】定义的【对象类型】数据</h4>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr />
    <p>测试：{{ obj.a.b.c }}</p>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
// 数据
let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
// 方法
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changePerson() {
  Object.assign(person, { name: "李四", age: 80 });
}
function test() {
  obj.a.b.c = 888;
}

// 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
watch(person, (newValue, oldValue) => {
  console.log("person变化了", newValue, oldValue);
});
watch(obj, (newValue, oldValue) => {
  console.log("Obj变化了", newValue, oldValue);
});
</script>