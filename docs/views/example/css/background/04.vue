<template>
  <div class="bg">
    <div class="box">
      <p>
        使用 <br />background-attachment: fixed <br />filter: bulr()
        <br />实现毛玻璃效果
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$img: "https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=";

.bg {
  width: 100%;
  height: 100%;
  background-image: url($img);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  overflow: hidden;
}

.box {
  position: relative;
  width: 80%;
  height: 40vh;
  background: inherit;
  margin: 50px auto;
  padding: 5vmin;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  // transform: translate(-50%, -50%);
  // left: 50%;
  // top: 50%;

  p {
    position: relative;
    color: #fff;
    z-index: 10;
    font-size: 24px;
    line-height: 1.5;
  }

  &::after {
    position: absolute;
    content: "";
    background: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(10px);
    z-index: 0;
  }
}
</style>
