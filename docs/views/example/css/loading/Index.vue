<template>
  <div class="padding-tb carousel-box">
    <a-carousel
      effect="fade"
      dotsClass="carousel-dots"
      arrows
      :speed="500"
      :afterChange="afterCarouselChange"
    >
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <span><Loading01 /></span>
      <span><Loading02 /></span>
      <span><Loading03 /></span>
      <span><Loading04 /></span>
      <span><Loading05 /></span>
      <span><Loading06 /></span>
      <span><Loading07 /></span>
      <span><Loading08 /></span>
      <span><Loading09 /></span>
      <span><Loading10 /></span>
      <span><Loading11 /></span>
      <span><Loading12 /></span>
      <span><Loading13 /></span>
    </a-carousel>
    <div class="current">{{ currentLoading }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import Loading01 from "./components/Loading01.vue";
import Loading02 from "./components/Loading02.vue";
import Loading03 from "./components/Loading03.vue";
import Loading04 from "./components/Loading04.vue";
import Loading05 from "./components/Loading05.vue";
import Loading06 from "./components/Loading06.vue";
import Loading07 from "./components/Loading07.vue";
import Loading08 from "./components/Loading08.vue";
import Loading09 from "./components/Loading09.vue";
import Loading10 from "./components/Loading10.vue";
import Loading11 from "./components/Loading11.vue";
import Loading12 from "./components/Loading12.vue";
import Loading13 from "./components/Loading13.vue";

const currentLoading = ref("01");

const afterCarouselChange = (e) => {
  currentLoading.value = e + 1 > 9 ? e + 1 : "0" + (e + 1);
};
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 240px;
  line-height: 240px;
  background: var(--c-cyan);
  overflow: hidden;
  color: #fff;
  p {
    line-height: 20px;
  }
}

.ant-carousel :deep(.carousel-dots) {
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    overflow: hidden;
    &.slick-active {
      width: 10px;
    }
    button {
      height: 100%;
    }
  }
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  opacity: 0.5;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.8;
}
.carousel-box {
  position: relative;
  .current {
    position: absolute;
    top: 20px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
</style>

<style lang="scss">
.slick-dots {
  li + li {
    margin-top: 0;
  }
}
</style>