<template>
  <div class="bg">
    <div class="text-magic" data-word="出现故障，请查修">
      出现故障，请查修
      <div class="white"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  height: 200px;
  background-color: #000;
}
.text-magic {
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%) scale(2.4);
  width: 300px;
  font-size: 32px;
  font-family: Raleway, Verdana, Arial;
  color: #fff;
}
.white {
  position: absolute;
  left: -3px;
  width: 88%;
  height: 3px;
  background: #000;
  z-index: 4;
  animation: whiteMove 3s ease-out infinite;
}

.text-magic::before {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: 0.5px;
  height: 0px;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 2;
  animation: redShadow 1s ease-in infinite;
  filter: contrast(200%);
  text-shadow: 1px 0 0 red;
}

.text-magic::after {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: -3px;
  height: 36px;
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  z-index: 3;
  background: rgba(0, 0, 0, 0.9);
  animation: redHeight 1.5s ease-out infinite;
  filter: contrast(200%);
  text-shadow: -1px 0 0 cyan;
  mix-blend-mode: darken;
}

@keyframes redShadow {
  20% {
    height: 32px;
  }
  60% {
    height: 6px;
  }
  100% {
    height: 42px;
  }
}

@keyframes redHeight {
  20% {
    height: 42px;
  }
  35% {
    height: 12px;
  }
  50% {
    height: 40px;
  }
  60% {
    height: 20px;
  }
  70% {
    height: 34px;
  }
  80% {
    height: 22px;
  }
  100% {
    height: 0px;
  }
}

@keyframes whiteMove {
  8% {
    top: 38px;
  }
  14% {
    top: 8px;
  }
  20% {
    top: 42px;
  }
  32% {
    top: 2px;
  }
  99% {
    top: 30px;
  }
}
</style>
