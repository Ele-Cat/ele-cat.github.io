<template>
  <div class="bg">
    <div class="rail">
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
    </div>
    <div class="world">
      <div class="forward">
        <div class="box">
          <div class="wall" v-for="i in 6" :key="i"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  perspective: 1000px;
}

.bg {
  background: #fff;
  height: 60vh;
  overflow: hidden;
  display: flex;
  font-family: "Anton", sans-serif;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}

$wallSize: 200px;

div {
  transform-style: preserve-3d;
}
.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(-30deg) rotateY(-30deg);
  .stamp {
    position: absolute;
    width: $wallSize;
    height: $wallSize;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 20, 20, 1);
    color: #fff;
    font-size: 7rem;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation: stampSlide 20 * 2000ms ($i * -2000) - 300ms linear infinite;
      }
    }
  }
}
@keyframes stampSlide {
  0% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize)
      translateY(130px);
  }
  100% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize)
      translateY(130 - 200 * 20px);
  }
}
.world {
  transform: rotateX(-30deg) rotateY(-30deg);
  .forward {
    position: absolute;
    animation: slide 2000ms linear infinite;
  }
  .box {
    width: $wallSize;
    height: $wallSize;
    transform-origin: 100% 100%;
    animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
    .wall {
      position: absolute;
      width: $wallSize;
      height: $wallSize;
      background: rgba(10, 10, 10, 0.8);
      border: 1px solid rgba(250, 250, 250, 1);
      box-sizing: border-box;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 7rem;
      }
      &:nth-child(1) {
        transform: translateZ(calc($wallSize / 2));
      }
      &:nth-child(2) {
        transform: rotateX(180deg) translateZ(calc($wallSize / 2));
      }
      &:nth-child(3) {
        transform: rotateX(90deg) translateZ(calc($wallSize / 2));
        &::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(4) {
        transform: rotateX(-90deg) translateZ(calc($wallSize / 2));
        &::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(5) {
        transform: rotateY(90deg) translateZ(calc($wallSize / 2));
        &::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
      &:nth-child(6) {
        transform: rotateY(-90deg) translateZ(calc($wallSize / 2));
        &::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
    }
  }
}

@keyframes zeroFour {
  0% {
    content: "4";
  }
  100% {
    content: "0";
  }
}

@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(90deg);
  }
  87% {
    transform: rotateZ(88deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-$wallSize);
  }
}
</style>