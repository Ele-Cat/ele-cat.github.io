<template>
  <div class="flex">
    <div class="flash-container">
      <img src="https://qishaoxuan.github.io/css_tricks/assets/img/bg7.af68deb6.jpeg" alt="">
    </div>
    <div class="flash-container hover-container">
      <img src="https://qishaoxuan.github.io/css_tricks/assets/img/bg7.af68deb6.jpeg" alt="">
    </div>
  </div>
</template>

<style lang="scss">
.flex {
  display: flex;
}
.flash-container {
  width: 300px;
  height: 500px;
  background: #333333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    height: 200%;
    width: 25px;
    background: #fff;
    position: absolute;
    left: -25px;
    right: 0;
    top: 0;
    bottom:0;
    margin-top: -50%;
    // margin: auto;
    opacity: .6;
    filter: blur(6px);
    animation: move 2s infinite ease-out;
  }
}

.hover-container {
  &::after {
    animation: none;
    opacity: 0;
  }
  &:hover::after {
    opacity: .6;
    animation: move 1s ease-out;
  }
}

@keyframes move {
  0% {
    transform: translate(-200px, -200px) rotate(45deg);
  }
  100% {
    transform: translate(250px, 250px) rotate(45deg);
  }
}
</style>