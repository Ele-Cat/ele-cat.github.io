<template>
  <div class="bg-white">
    <div class="IE"></div>
  </div>
</template>

<style lang="scss" scoped>
.bg-white {
  position: relative;
  padding: 120px 0;
}

.IE {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-image: radial-gradient(#fff 38%, transparent 38%),
    radial-gradient(#09c 0%, #09c 100%);
}
.IE:before {
  content: "";
  width: 285px;
  height: 122px;
  background: none;
  border-radius: 100%;
  position: absolute;
  top: 33px;
  left: -45px;
  margin: auto;
  box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
  transform: rotate(-35deg);
}
.IE:after {
  content: "";
  width: 120px;
  height: 25px;
  background: #09c;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 50px 23px 0 -2px #fff;
}
</style>