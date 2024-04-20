<template>
  <div class="heart">
    <div class="cube">
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
      <div>
        <img src="https://v2.api-m.com/api/heisi?return=302" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from "vue";

nextTick(() => {
  let heart = document.getElementsByClassName("heart")[0];

  // 随机色
  let getRandomColor = function () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  for (let i = 0; i < 36; i++) {
    let oDiv = document.createElement("div");
    oDiv.className = "rib";
    // 画36条心形曲线
    oDiv.style.transform =
      "rotateY(" + 10 * i + "deg) rotateZ(45deg) translateX(30px)";

    setInterval(() => {
      oDiv.style.borderColor = getRandomColor();
    }, 1000);

    heart.appendChild(oDiv);
  }
});
</script>

<style lang="scss">
.heart {
  width: 200px;
  height: 300px;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 800px;
  animation: rot 15s linear infinite;
  .rib {
    position: absolute;
    width: 200px;
    height: 260px;
    border: solid red;
    border-width: 1px 1px 0 0;
    border-radius: 100% 100% 0/40% 100% 0;
    transition: all 1s;
  }
  .cube {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    color: red;
    transform-style: preserve-3d;
    transform: translateZ(50px);
    div {
      position: absolute;
      width: 100px;
      height: 100px;
      overflow: hidden;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      &:nth-child(1) {
        left: 0;
        top: -100px;
        transform-origin: bottom;
        transform: rotateX(90deg);
      }
      &:nth-child(2) {
        left: 0;
        top: 100px;
        transform-origin: top;
        transform: rotateX(-90deg);
      }
      &:nth-child(3) {
        left: -100px;
        top: 0px;
        transform-origin: right;
        transform: rotateY(-90deg);
      }
      &:nth-child(4) {
        left: 100px;
        top: 0px;
        transform-origin: left;
        transform: rotateY(90deg);
      }
      &:nth-child(5) {
        left: 0;
        top: 0px;
      }
      &:nth-child(6) {
        left: 0;
        top: 0px;
        transform: translateZ(-100px);
      }
    }
  }
}
@keyframes rot {
  from {
    transform: rotateY(0deg) rotateX(0deg);
  }
  to {
    transform: rotateY(360deg) rotateX(360deg);
  }
}
</style>
