<template>
  <div class="bg-white">
    <div class="box g-right">
      翘边
    </div>
    <div class="box g-both">
      托底
    </div>
    <div class="box g-slide">
      突出
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-white {
  position: relative;
  z-index: 0;
}
.box {
  position: relative;
  width: 60%;
  height: 80px;
  line-height: 80px;
  font-size: 1.8rem;
  text-align: center;
  color: #fff;
  margin: 50px auto;
  background: hsl(48, 100%, 50%);
  border-radius: 6px;
  box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);
}

.g-right::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 0;
  border-radius: 10px;
  background: hsl(48, 100%, 20%);
  transform: translate(0, -15%) rotate(3deg);
  transform-origin: center center;
  box-shadow: 0 0 20px 15px hsl(48, 100%, 20%);
  z-index: -1;
}

.g-both {
  background: hsl(199, 98%, 48%);
  box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
}

.g-both::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 15%;
  border-radius: 10px;
  background: hsl(199, 98%, 20%);
  transform: translate(0, -20%) rotate(-4deg);
  transform-origin: center center;
  box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
  z-index: -1;
}

.g-both::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 15%;
  border-radius: 10px;
  background: hsl(199, 98%, 20%);
  transform: translate(0, -20%) rotate(4deg);
  transform-origin: center center;
  box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
  z-index: -1;
}

.g-slide {
  background: hsl(150, 62%, 52%);
  box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
}

.g-slide::before {
  content: "";
  position: absolute;
  top: 15%;
  bottom: 20%;
  left: 90%;
  right: 5%;
  border-radius: 10px;
  background: hsl(150, 62%, 20%);
  transform: translate(105%, 10%) rotate(15deg);
  transform-origin: center center;
  box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
  z-index: -1;
}

.g-slide::after {
  content: "";
  position: absolute;
  top: 15%;
  bottom: 20%;
  left: 5%;
  right: 90%;
  border-radius: 10px;
  background: hsl(150, 62%, 20%);
  transform: translate(-105%, 10%) rotate(-15deg);
  transform-origin: center center;
  box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
  z-index: -1;
}
</style>