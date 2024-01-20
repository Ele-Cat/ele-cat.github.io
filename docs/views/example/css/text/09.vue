<template>
  <div class="bg">
    <div class="g-container">
      <p>TEXT WAVE</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 160px;
  display: flex;
}

.g-container {
  margin: auto;
}

p {
  position: relative;
  font-size: 120px;
  line-height: 120px;
  font-weight: bold;
  background: #fff;
  color: #000;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -923px;
    left: 50%;
    width: 2000px;
    height: 2000px;
    border-radius: 45% 48% 43% 47%;
    transform: translate(-50%, -50%);
    background: rgba(3, 169, 244, 0.85);
    animation: rotate 10s infinite linear;
    z-index: 1;
    mix-blend-mode: lighten;
  }

  &::after {
    border-radius: 43% 47% 44% 48%;
    animation: rotate 10s infinite 0.5s linear;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
