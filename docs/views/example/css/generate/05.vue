<template>
  <a-button type="primary" @click="modalVisible = true">优质背景色</a-button>
  <a-row :gutter="10" class="color-picker">
    <a-col :xs="24" :sm="12">
      <a-card :style="{ background: rgb2hexRes }" title="RGB颜色值转HEX" size="small">
        <div class="rgb-box">
          <div>
            <p>R</p>
            <a-input-number placeholder="R" v-model:value="rgb.r" :min="0" :max="255" />
          </div>
          <div>
            <p>G</p>
            <a-input-number placeholder="G" v-model:value="rgb.g" :min="0" :max="255" />
          </div>
          <div>
            <p>B</p>
            <a-input-number placeholder="B" v-model:value="rgb.b" :min="0" :max="255" />
          </div>
        </div>
        <div class="res-box">
          <p class="res-text">转换结果：{{ rgb2hexRes }}</p>
          <a-button type="primary" @click="copyText(rgb2hexRes)">复制</a-button>
        </div>
      </a-card>
    </a-col>
    <a-col :xs="24" :sm="12">
      <a-card :style="{ background: hex2rgbRes }" title="HEX颜色值转RGB" size="small">
        <div class="rgb-box">
          <div>
            <p>HEX</p>
            <div style="display:flex;">
              <a-input placeholder="请输入HEX值" maxlength="7" v-model:value="hex" class="hex-input"
                @input="hexadecimal"></a-input>
              <a-input type="color" class="a-input-color" v-model:value="hex" :predefine="predefineColors"></a-input>
            </div>
          </div>
        </div>
        <div class="res-box">
          <p class="res-text">转换结果：{{ hex2rgbRes }}</p>
          <a-button type="primary" @click="copyText(hex2rgbRes)">复制</a-button>
        </div>
      </a-card>
    </a-col>
  </a-row>
  <a-modal :width="1200" v-model:open="modalVisible" title="优质背景色" :footer="null">
    <a-tabs type="border-card" v-model:model:activeKey="activeName" class="gradient-colors">
      <a-tab-pane tab="渐变色背景" key="first">
        <div class="gradient-box">
          <div class="gradient-item" v-for="(item, index) in gradientColors" :key="index">
            <div class="gradient-color" :style="gradientStyle(item)">
              <div class="gradient-handler">
                <CopyOutlined title="复制" @click="handleCopy(item)" />
                <DownloadOutlined title="下载" @click="handleDownload(item)" />
              </div>
            </div>
            <div class="gradient-info">
              <p>{{ item[0] }}</p>
              <p :style="{ color: item[1] }">{{ item[1] }}</p>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane tab="不要用纯色背景" key="second">
        也就是不要直接用#000或#fff
        <div class="gradient-box">
          <div class="gradient-item" v-for="(item, index) in singleColors" :key="index">
            <div class="gradient-color" :style="singleStyle(item)"></div>
            <div class="gradient-info">
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons-vue'
import { gradientColors, singleColors } from "./colors"

const hex = ref("#FFFFFF");
const rgb = reactive({
  r: 255,
  g: 255,
  b: 255,
})
const rgb2hexRes = computed(() => {
  const hex1 = ('00' + rgb.r.toString(16).toUpperCase()).slice(-2);
  const hex2 = ('00' + rgb.g.toString(16).toUpperCase()).slice(-2);
  const hex3 = ('00' + rgb.b.toString(16).toUpperCase()).slice(-2);
  return `#${hex1}${hex2}${hex3}`
})

const hex2rgbRes = computed(() => {
  function isValidInt(str) {
    const hexRegex = /^[0-9]+$/g;
    return hexRegex.test(str);
  }
  hex.value = hex.value || '#FFFFFF'
  let hexList = hex.value.substring(1).match(/.{1,2}/g);
  let r, g, b
  if (hexList && hexList.length == 3) {
    r = parseInt(hexList[0], 16)
    g = parseInt(hexList[1], 16)
    b = parseInt(hexList[2], 16)
  }
  let resText = "HEX不合法"
  if (isValidInt(r) && isValidInt(g) && isValidInt(b)) {
    resText = `rgb(${r}, ${g}, ${b})`
  }
  return resText
})

const hexadecimal = () => {
  hex.value.substring(1)
  hex.value = '#' + hex.value.replace(/[^0-9a-fA-F]/g, "");
}

const copyText = async (text) => {
  const { copy, isSupported } = useClipboard({
    source: `${text};`,
    read: false,
  })

  if (!isSupported) {
    message.error('复制失败')
  }
  try {
    await copy()
    message.success('已复制')
  } catch (e) {
    message.error(e.message)
  }
}

const modalVisible = ref(false);
const activeName = ref("first");
const gradientStyle = (item) => {
  return {
    backgroundImage: `linear-gradient(135deg, ${item[0]} 10%, ${item[1]} 100%)`
  }
}
const singleStyle = (item) => {
  return {
    background: `${item}`
  }
}
const handleCopy = async (item) => {
  const text = `background-image: linear-gradient(135deg, ${item[0]} 10%, ${item[1]} 100%);`

  const { copy, isSupported } = useClipboard({
    source: `${text}`,
    read: false,
  })

  if (!isSupported) {
    message.error('复制失败')
  }
  try {
    await copy()
    message.success('已复制')
  } catch (e) {
    message.error(e.message)
  }
}
const handleDownload = (item) => {
  // 创建一个新的 Canvas 元素
  const canvas = document.createElement("canvas");
  canvas.width = 1000; // 设置画布宽度
  canvas.height = 1000; // 设置画布高度

  // 获取 Canvas 的 2D 上下文
  const context = canvas.getContext("2d");

  // 创建渐变对象
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, item[0]); // 起始颜色为红色
  gradient.addColorStop(1, item[1]); // 终止颜色为蓝色

  // 将渐变对象填充到 Canvas
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 将 Canvas 转换为 base64 格式的图片数据
  const dataUrl = canvas.toDataURL();

  // 创建一个下载链接
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `gradient-${item[0]}-${item[1]}.png`; // 下载文件名
  a.click(); // 触发下载
}
</script>

<style lang="scss" scoped>
.color-picker {
  margin-top: 12px;

  .rgb-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    div:not(:nth-last-of-type(1)) {
      margin-right: 10px;
    }

    p {
      margin: 0 0 4px 4px;
      font-weight: bold;
    }

    .ant-input-number {
      width: 100%;
    }

    .a-input-color {
      width: 46px;
      margin-left: 10px;
    }
  }

  .res-box {
    display: flex;
    margin-top: 14px;

    .res-text {
      padding: 8px 14px;
      background-color: #eee;
      border-radius: 4px;
      font-size: 14px;
      flex: 1;
      line-height: 16px !important;
      margin: 0 10px 0 0;
    }
  }
}

.gradient-colors {

  .gradient-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .gradient-item {
      width: 180px;
      margin: 24px;
      box-shadow: 0px 0px 51px 0px rgb(0 0 0 / 8%), 0px 6px 18px 0px rgb(0 0 0 / 5%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(0px);

      &:hover {
        box-shadow: 0px 0px 114px 0px rgb(0 0 0 / 8%), 0px 30px 25px 0px rgb(0 0 0 / 5%);
        transform: translateY(-5px);

        .gradient-color .gradient-handler {
          display: block;
          opacity: 1;
          bottom: 10px;
        }
      }

      .gradient-color {
        position: relative;
        height: 180px;

        .gradient-handler {
          position: absolute;
          right: 10px;
          bottom: 5px;
          color: #FFF;
          opacity: 0;
          transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          .anticon {
            font-size: 24px;
            opacity: .8;
            transform: translateY(0px);
            transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            margin-left: 10px;
            font-weight: bolder;

            &:hover {
              opacity: 1;
              transform: translateY(-4px);
            }
          }
        }
      }

      .gradient-info {
        padding: 12px;
        line-height: 1.6;
        color: #929197;

        p {
          margin: 0;
          font-family: 'Source Sans Pro', sans-serif;
        }
      }
    }
  }
}
</style>