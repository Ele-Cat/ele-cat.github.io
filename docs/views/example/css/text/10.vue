<template>
  <div class="g-container">
    <p>Magic Text</p>
  </div>
</template>

<style lang="scss" scoped>
.g-container {
  margin: auto;
  background-color: #000;
}

p {
  font-family: "黑体";
  position: relative;
  font-size: 12vmin;
  line-height: 2;
  text-align: center;
  color: #9a9acc;
  overflow: hidden;
  -webkit-text-stroke: 3px #7272a5;

  &::before {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
    mix-blend-mode: multiply;
  }

  &::after {
    content: "";
    background: radial-gradient(circle, #fff, #000 50%);
    background-size: 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: mix 8s linear infinite;
  }
}

@keyframes mix {
  to {
    transform: translate(50%, 50%);
  }
}
</style>
