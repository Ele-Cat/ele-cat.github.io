<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{ x }}</div>
    <div>Y轴：{{ y }}</div>
    <hr />
    <div>{{ count }} <button @click="add()">自增</button></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      x: 0,
      y: 0,
      count: 0,
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.move);
  },
  methods: {
    move(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
    add() {
      this.count++;
    },
  },
  destroyed() {
    document.removeEventListener("mousemove", this.move);
  },
};
</script>
