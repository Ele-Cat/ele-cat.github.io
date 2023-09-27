<template>
  <div class="main">
    <svg viewBox="0 0 100 100">
      <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
      <text>
        <textPath xlink:href="#circle">
          不会真有人能看到这儿吧，我的微信号是、、、，哈哈哈。
        </textPath>
      </text>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  font-size: 12px;
}
.main svg {
  overflow: visible;
  animation: circular-text-rotate 5s linear paused infinite;
}
.main svg:hover {
  animation-play-state: running;
}
.main path {
  fill: none;
}
.main text {
  fill: var(--c-yellow);
}
@keyframes circular-text-rotate {
  to {
    transform: rotate(-1turn);
  }
}
</style>
