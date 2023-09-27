<template>
  <div></div>
</template>

<style scoped>
div {
  /* width: 80%; */
  height: 180px;
  margin: 0 auto;
  background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
  animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>