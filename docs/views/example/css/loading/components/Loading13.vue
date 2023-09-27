<template>
  <div class="box">
    <div class="g-container">
      <div class="g-first"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
      <div class="g-ball"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 主要使用了 blur、contrast 两个滤镜，它们的作用分别是：

// filter: blur()： 给图像设置高斯模糊效果。
// filter: contrast()： 调整图像的对比度。
// 但是，当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。
$count: 7;

.box {
  filter: blur(4px) contrast(8);
  background: #000;
  padding: 100px 0;
}
.g-container {
  margin: 0 auto;
  position: relative;
  width: 40px;
  height: 40px;
}

.g-ball,
.g-first {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
  // animation: move 3s infinite linear;
}

@for $i from 0 through $count {
  .g-ball:nth-child(#{$i}) {
    animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
  }
}

.g-first {
  animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }
  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>