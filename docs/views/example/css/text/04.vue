<template>
  <div data-name="Solid Shadow Word">Solid Shadow Word</div>
</template>

<style lang="scss" scoped>
div {
  font-family: Times New Roman, "serif";
  position: relative;
  font-size: 60px;
  line-height: 50px;
  margin: 10px auto;
  text-align: center;
  letter-spacing: 4px;
  text-shadow: 3px 3px 1px #333;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -45deg,
      #fff 0%,
      #fff 25%,
      transparent 25%,
      transparent 50%,
      #fff 50%,
      #fff 75%,
      transparent 75%,
      transparent 100%
    );
    background-size: 6px 6px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: attr(data-name);
    top: -4px;
    left: -2px;
    right: 6px;
    bottom: 6px;
    color: #333;
    z-index: 2;
    text-shadow: 3px 3px #fff;
  }
}
</style>