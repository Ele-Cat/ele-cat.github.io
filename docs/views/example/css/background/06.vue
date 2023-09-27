<template>
  <div class="bg flex justify-center">
    <div class="container">
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160"
          class="line"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160"
          class="line line2"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(#1a0f19, #16121c);
}

.container {
  position: relative;
  width: 400px;
  height: 400px;
  margin-left: -140px;
}

svg {
  position: absolute;
  width: 600px;
  height: 600px;
}

.line {
  --colorA: #f24983;
  fill: none;
  stroke-width: 10;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: #fff;
  stroke-dasharray: 328 600;
  animation: rotate 2s infinite linear;
  filter: drop-shadow(0 0 2px var(--colorA)) drop-shadow(0 0 5px var(--colorA))
    drop-shadow(0 0 10px var(--colorA)) drop-shadow(0 0 15px var(--colorA))
    drop-shadow(0 0 25px var(--colorA));
}

.line2 {
  animation: rotate 2s infinite -1s linear;
  --colorA: #37c1ff;
}

@keyframes rotate {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 928;
  }
}
</style>
