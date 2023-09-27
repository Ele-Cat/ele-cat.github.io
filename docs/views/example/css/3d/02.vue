<template>
  <div class="bg">
    <div class="text">
      <span class="C">C</span>
      <span class="S">S</span>
      <span class="S">S</span>
      <span></span>
      <span class="3">3</span>
      <span class="D">D</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bright: #afa695;
$gold: #867862;
$dark: #746853;

$duration: 8s;

.bg {
  width: 100%;
  height: 100%;
  display: flex;
  background: #000;
  overflow: hidden;
}

.text {
  margin: auto;
  perspective: 2000px;
  transform-style: preserve-3d;
  font-size: 10vw;
  animation: fade $duration infinite;

  span {
    position: relative;
    display: inline-block;
    min-width: 0.5em;
    text-align: center;
    transform-style: preserve-3d;
    transform: rotateY(25deg);
    animation: rotate $duration infinite ease-in;
    color: black;

    &:after,
    &:before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: attr(class);
      color: $gold;
      z-index: -1;
      animation: shadow $duration infinite;
    }

    &:before {
      transform: translateZ(-14px);
    }
    &:after {
      transform: translateZ(-7px);
    }
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotateY(65deg);
  }
  50%,
  100% {
    color: $dark;
    transform: rotateY(5deg);
  }
  100% {
    color: $gold;
  }
}

@keyframes shadow {
  from {
    color: shade($gold, 50%);
  }
  25% {
    color: $bright;
  }
  50%,
  100% {
    color: tint($gold, 100%);
  }
}
</style>