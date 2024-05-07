# vue-doc-preview

## 介绍

> 一个 vue 文档预览组件，可以查看 office、markdown、code、text 等格式文档。

:::warning 使用前请注意
`vue-doc-preview` 目前仅支持 Vue2 版本【在 Vue3 中会报错】，但是其源码具有参考性，稍微修改下就可以应用到其他环境
:::

- [官方 npm 地址](https://www.npmjs.com/package/vue-doc-preview)
- [官方 git 地址](https://github.com/cainsyake/vue-doc-preview)
- [官方演示地址](https://vdp.cainsyake.com/)

## 预览

- [代码地址](https://gitee.com/ele-cat/vue-doc-preview)
- [演示地址](https://ele-cat.github.io/vue-doc-preview)
- **效果演示**：

<div class="iframe-box">
  <iframe style="height:520px;" src="https://ele-cat.github.io/vue-doc-preview"></iframe>
</div>

## 安装

```sh
npm i vue-doc-preview -S
or
yarn add vue-doc-preview
```

## 参数

| 参数          | 说明                                                                                | 类型   | 可选值                                                                                                                                   | 默认值 |
| ------------- | ----------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| value         | 文档内容或 Office 文档的 url                                                        | String |                                                                                                                                          | ''     |
| type          | 文档类型                                                                            | String | 'markdown'、'office'、'text'、'code'                                                                                                     | 'md'   |
| language      | 代码语言(当文档类型为'code'时它才生效)                                              | String | javascript(js)、html、css、java、json、typescript(ts)、cpp、xml、bash、less、nginx、php、powershell、python、scss、shell、sql、yaml、ini | ''     |
| height        | 当 height > 100 时，它意味着组件的将使用绝对高度(px), 否则组件的高度将为相对高度(%) | Number |                                                                                                                                          | 90     |
| mdStyle       | Markdown 视图自定义样式(当文档类型为'markdown'、'code'时它才生效)                   | Object | pre, code, ul, ol, li, hr, blockquote, img, a, table, tr, th, td                                                                         | null   |
| textStyle     | Text 视图自定义样式(当文档类型为'text'时它才生效)                                   | Object |                                                                                                                                          | null   |
| url           | 文档的 url，但是它仅在我们不设置属性 value 时生效（office 文档也可使用此属性读取）  | String |                                                                                                                                          | ''     |
| requestConfig | [axios config](https://github.com/axios/axios#request-config)                       | Object |                                                                                                                                          | {}     |

## 使用

在页面中直接使用

````vue
<template>
  <div class="prev-wrapper">
    <button
      v-for="item in types"
      :key="item"
      @click="renderPreview(item)"
      :class="{ active: item === type }"
    >
      {{ item }}
    </button>
    <VueDocPreview
      :value="docValue"
      :type="docType"
      :mdStyle="mdStyle"
      :language="language"
      :url="docUrl"
    />
  </div>
</template>

<script>
import VueDocPreview from "vue-doc-preview";

export default {
  components: {
    VueDocPreview,
  },
  data() {
    return {
      types: ["markdown", "office", "code", "text", "url"],
      type: "",
      docValue: "",
      docType: "",
      mdStyle: {
        pre: {
          "background-color": "rgb(248, 248, 248)",
        },
        code: {
          "background-color": "rgb(248, 248, 248)",
          "line-height": "28px",
        },
      },
      language: "javascript",
      docUrl: "https://static-1252421604.cosgz.myqcloud.com/test/README-CN.md",
    };
  },
  created() {
    this.renderPreview("markdown");
  },
  methods: {
    renderPreview(type) {
      const renderValues = {
        office:
          "https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.docx",
        // office: "https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.pptx",
        markdown:
          "# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```",
        code:
          "import Marked from 'marked'\n" +
          "import HLJS from '../lib/highlight'\n" +
          "watch: {\n" +
          "  value: function (val) {\n" +
          "    this.updateContent(val)\n" +
          "  }\n" +
          "},\n" +
          "mounted: function () {\n" +
          "  this.updateContent(this.value)\n" +
          "},\n" +
          "updateContent: function (val) {\n" +
          "  if (val) {\n" +
          "    const parseMarked = Marked(val)\n" +
          "    this.content = parseMarked\n" +
          "    let self = this\n" +
          "    this.$nextTick(() => {\n" +
          "      self.parseHtml()\n" +
          "      console.log('Hello VueDocPreview')\n" +
          "    })\n" +
          "  }\n" +
          "}",
        text: "排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!",
      };

      this.type = type;
      if (type === "url") {
        this.docValue = "";
        return;
      }
      this.docType = type;
      this.docValue = renderValues[type];
    },
  },
};
</script>

<style>
.prev-wrapper button {
  margin: 0 6px 10px 0;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  user-select: none;
  padding: 5px 15px 6px;
  font-size: 12px;
  border-radius: 4px;
}
.prev-wrapper button.active {
  background-color: orange;
  border-color: orange;
}
</style>
````

<Comment />
