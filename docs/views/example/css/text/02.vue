<template>
  <div class="bg-dark">
    <p class="pink">PINK</p>
    <p class="orange">Box-Shadow</p>
    <p class="yellow">YELLOW</p>
  </div>
</template>

<style lang="scss" scoped>
.bg-dark {
  font-family: "黑体", sans-serif;
  padding: 40px 0;
}

p {
  text-align: center;
  text-align: center;
  font-size: 44px;
  line-height: 80px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
}

.pink {
  filter: brightness(110%);
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #e91e63,
    0 0 35px #e91e63, 0 0 40px #e91e63, 0 0 50px #e91e63, 0 0 75px #e91e63;
  animation: pink 1.5s ease-in-out infinite alternate;
}

.orange {
  color: #ff5722;
}

.orange:hover {
  animation: orange 1.5s ease-in-out infinite alternate;
}

.yellow {
  color: #ffeb3b;
}

.yellow:hover {
  animation: yellow 1.5s ease-in-out infinite alternate;
}

@keyframes pink {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e91e63,
      0 0 70px #e91e63, 0 0 80px #e91e63, 0 0 100px #e91e63, 0 0 150px #e91e63;
  }
}

@keyframes orange {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722,
      0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722,
      0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}

@keyframes yellow {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffeb3b,
      0 0 70px #ffeb3b, 0 0 80px #ffeb3b, 0 0 100px #ffeb3b, 0 0 150px #ffeb3b;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffeb3b,
      0 0 35px #ffeb3b, 0 0 40px #ffeb3b, 0 0 50px #ffeb3b, 0 0 75px #ffeb3b;
  }
}
</style>