<template>
  <a-row :gutter="12" type="flex" align="bottom">
    <a-col
      :xl="8"
      :md="12"
      :sm="24"
      v-for="(item, index) in lists"
      :key="index"
    >
      <a-card size="small" class="filter-box" hoverable>
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
        <img
          src="/images/1652260251187.jpg"
          alt=""
          class="margin-bottom-sm"
          :style="{ filter: `${item.attribute}(${item.val}${item.unit})` }"
        />
        <a-row :gutter="10" type="flex" justify="space-around">
          <a-col :span="16">
            <a-slider v-model:value="item.val" :min="item.min" :max="item.max" />
          </a-col>
          <a-col :span="8">
            <a-input-number
              v-model:value="item.val"
              :min="item.min"
              :max="item.max"
              style="width: 100%"
            />
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref } from "vue";

// const inputValue1 = ref(20);
const lists = ref([
  {
    title: "blur(px)",
    content:
      "给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。",
    min: 0,
    max: 40,
    val: 0,
    attribute: "blur",
    unit: "px",
  },
  {
    title: "hue-rotate(deg)",
    content: "给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。",
    min: 0,
    max: 100,
    val: 0,
    attribute: "hue-rotate",
    unit: "deg",
  },
  {
    title: "opacity(%)",
    content: "转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。",
    min: 0,
    max: 100,
    val: 100,
    attribute: "opacity",
    unit: "%",
  },
  {
    title: "grayscale(%)",
    content:
      "将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。",
    min: 0,
    max: 100,
    val: 0,
    attribute: "grayscale",
    unit: "%",
  },
  {
    title: "sepia(%)",
    content: "将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0",
    min: 0,
    max: 100,
    val: 0,
    attribute: "sepia",
    unit: "%",
  },
  {
    title: "invert(%)",
    content: "反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。",
    min: 0,
    max: 100,
    val: 0,
    attribute: "invert",
    unit: "%",
  },
  {
    title: "contrast(%)",
    content:
      "调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。",
    min: 0,
    max: 500,
    val: 100,
    attribute: "contrast",
    unit: "%",
  },
  {
    title: "saturate(%)",
    content: "转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。",
    min: 0,
    max: 200,
    val: 100,
    attribute: "saturate",
    unit: "%",
  },
  {
    title: "brightness(%)",
    content: "给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。",
    min: 0,
    max: 500,
    val: 100,
    attribute: "brightness",
    unit: "%",
  },
]);
</script>

<style lang="scss">
.filter-box {
  margin-bottom: 20px;
  height: 100%;
}
.margin-bottom-sm {
  margin-bottom: 10px;
}
</style>