<template>
  <div class="language-css extra-class">
    <pre><code ref="listStyleOptionsRef"></code></pre>
  </div>
  <p>同：</p>
  <div class="language-css extra-class">
    <pre><code ref="listStyleRef"></code></pre>
  </div>
  <div class="flex">
    <ul
      :style="{ listStyleType: typeValue, listStylePosition: positionValue, listStyleImage: imageValue && `url(${imageValue})` }">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>

    <div class="radio-group">
      <h4>list-style-type 配置：</h4>
      <a-radio-group v-model:value="typeValue">
        <a-radio v-for="item in types" :key="item.value" :value="item.value">{{ item.value }} - {{ item.label }}</a-radio>
      </a-radio-group>
      <h4>list-style-position 配置：</h4>
      <a-radio-group v-model:value="positionValue">
        <a-radio v-for="item in positions" :key="item.value" :value="item.value">{{ item.label }}</a-radio>
      </a-radio-group>
      <h4>list-style-image 配置：</h4>
      <a-radio-group v-model:value="imageValue">
        <a-radio v-for="item in yesOrNo" :key="item.value" :value="item.value">{{ item.label }}</a-radio>
      </a-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import Prism from "prismjs";

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

const positions = [
  {
    value: "inside",
    label: "inside"
  },
  {
    value: "outside",
    label: "outside"
  },
]

const yesOrNo = [
  {
    value: "",
    label: "不使用图片"
  },
  {
    value: "https://qishaoxuan.github.io/css_tricks/assets/img/arrow.0ad29aea.svg",
    label: "使用图片"
  },
]

const typeValue = ref("disc");
const positionValue = ref("inside");
const imageValue = ref("");
const listStyleOptionsRef = ref(null);
const listStyleRef = ref(null);

watch([typeValue, positionValue, imageValue], () => {
  const listStyleOptionsCssStr = imageValue.value ? `.list {
  list-style-position: ${positionValue.value};
  list-style-image: url("${imageValue.value}");
  list-style-type: ${typeValue.value};
}` : `.list {
  list-style-position: ${positionValue.value};
  list-style-type: ${typeValue.value};
}`;
  const listStyleCssStr = imageValue.value ? `.list {
  list-style: ${positionValue.value} url("${imageValue.value}") ${typeValue.value};
}` : `.list {
  list-style: ${positionValue.value} ${typeValue.value};
}`;
  nextTick(() => {
    listStyleOptionsRef.value.innerHTML = Prism.highlight(listStyleOptionsCssStr, Prism.languages.css);
    listStyleRef.value.innerHTML = Prism.highlight(listStyleCssStr, Prism.languages.css);
  })
}, {
  immediate: true,
})

</script>

<style lang="scss">
.flex {
  display: flex;

  ul {
    width: 140px;
    padding: 0;

    li {
      margin-top: 0;
      background-color: var(--c-gray);
    }
  }

  .radio-group {
    flex: 1;
    margin-left: 12px;

    .ant-radio-group {
      width: 100%;
      padding: 4px;
    }

    h4 {
      margin: 6px 0 4px;
    }
  }

  .ant-radio-wrapper {
    width: 48.5%;
  }
}</style>