<template>
  <div class="flex">
    <ul :style="{listStyle: typeValue}">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>

    <a-radio-group v-model:value="typeValue" @change="handleRadioChange">
      <a-radio v-for="item in types" :key="item.value" :value="item.value">{{ item.value }} - {{ item.label }}</a-radio>
    </a-radio-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue';

const list = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Angular",
  "Vue.js",
  "TypeScript",
  "Webpack",
  "Babel",
  "Sass/Less",
  "Node.js",
  "Express.js",
  "GraphQL",
  "RESTful APIs",
]

const types = [
  {
    value: "disc",
    label: "实心圆点 (默认值)"
  },
  {
    value: "circle",
    label: "空心圆点"
  },
  {
    value: "square",
    label: "实心方块"
  },
  {
    value: "decimal",
    label: "十进制阿拉伯数字"
  },
  {
    value: "cjk-decimal",
    label: "中日韩十进制数"
  },
  {
    value: "decimal-leading-zero",
    label: "十进数"
  },
  {
    value: "lower-roman",
    label: "小写罗马数字"
  },
  {
    value: "upper-roman",
    label: "大写罗马数字"
  },
  {
    value: "lower-greek",
    label: "小写希腊数字"
  },
  {
    value: "lower-alpha",
    label: "小写 ASCII"
  },
  {
    value: "lower-latin",
    label: "小写 ASCII（IE7 以下不支持）"
  },
  {
    value: "upper-alpha",
    label: "大写 ASCII"
  },
  {
    value: "upper-latin",
    label: "大写 ASCII（IE7 以下不支持）"
  },
  {
    value: "armenian",
    label: "传统美式数字"
  },
  {
    value: "georgian",
    label: "传统英式数字"
  },
  {
    value: "hebrew",
    label: "传统希伯来数字"
  },
  {
    value: "ethiopic-numeric",
    label: " 埃塞俄比亚数字"
  },
  {
    value: "hiragana",
    label: "平假名数字（日语）"
  },
  {
    value: "katakana",
    label: "片假名数字（日语）"
  },
  {
    value: "hiragana-iroha",
    label: "旧式平假名数字（日语）"
  },
  {
    value: "katakana-iroha",
    label: "旧式平假名数字（日语）"
  },
  {
    value: "japanese-informal",
    label: "日语非正式数字"
  },
  {
    value: "japanese-formal",
    label: "日语数字 "
  },
  {
    value: "korean-hangul-formal",
    label: "韩文数字"
  },
  {
    value: "korean-hanja-informal",
    label: "韩式数字"
  },
  {
    value: "korean-hanja-formal",
    label: "韩式数字（繁体）"
  },
  {
    value: "simp-chinese-informal",
    label: "中文数字"
  },
  {
    value: "cjk-ideographic",
    label: "中文数字"
  },
  {
    value: "simp-chinese-formal",
    label: "大写繁体中文数字"
  },
  {
    value: "trad-chinese-informal",
    label: "繁体中文数字"
  },
  {
    value: "trad-chinese-formal",
    label: "大写繁体中文数字"
  },
]

const typeValue = ref("disc");
const handleRadioChange = async (e) => {
  const { copy, isSupported } = useClipboard({
    source: `list-style: ${e.target.value};`,
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
</script>

<style lang="scss">
.flex {
  display: flex;
  ul {
    width: 140px;
    li {
      margin-top: 0;
    }
  }
  .ant-radio-group {
    flex: 1;
  }
  .ant-radio-wrapper {
    width: 48.5%;
  }
}
</style>