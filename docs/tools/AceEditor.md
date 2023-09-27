# Ace Editor

## 介绍

> Ace Editor 是一个用 JavaScript 编写的可嵌入代码编辑器。它与 Sublime，Vim 和 TextMate 等本机编辑器的功能和性能相匹配。它可以轻松地嵌入任何网页和 JavaScript 应用程序中。

- [官网地址](https://ace.c9.io/)
- [Github](https://github.com/ajaxorg/ace/)
- [Vue2 版本](https://github.com/chairuosen/vue2-ace-editor)

## 预览

- [代码地址](https://gitee.com/ele-cat/ace-editor)
- [演示地址](https://ele-cat.gitee.io/ace-editor)
- **效果演示**：

1. 基础功能为官方示例，仅用到 `vue2-ace-editor`
2. 在封装中，为了更好的展示 UI【Ps：懒得写样式】，引入了 `ant-design-vue@1.7.8`

<div class="iframe-box">
  <iframe style="height:520px;" src="https://ele-cat.gitee.io/ace-editor"></iframe>
</div>

## 安装

```sh
npm i vue2-ace-editor -D
# 额外依赖
npm i ant-design-vue@1.7.8 -S
npm i normalize.css -D
```

## 参数

- [地址](https://www.jianshu.com/p/8a4a5e273538)
<div class="iframe-box">
  <iframe style="height:520px;" src="https://www.jianshu.com/p/8a4a5e273538"></iframe>
</div>

## 使用

1. 基础使用

```vue
<template>
  <div>
    <editor
      v-model="content"
      @init="editorInit"
      lang="html"
      theme="chrome"
      width="100%"
      height="300"
    />
  </div>
</template>

<script>
export default {
  name: "Normal",
  data() {
    return {
      content: "",
    };
  },
  components: {
    editor: require("vue2-ace-editor"),
  },
  methods: {
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/javascript"); //language
      require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
  },
};
</script>

<style lang="less"></style>
```
2. 封装编辑器
- [代码地址](https://gitee.com/ele-cat/ace-editor/blob/master/src/components/Editor.vue)

## 参考资料

- [Ace editor 中文文档](https://www.jianshu.com/p/8a4a5e273538)
- [用vue2-ace-editor做个代码编辑界面](https://blog.csdn.net/YXXXYX/article/details/126218506)
- [ace-editor](https://www.cnblogs.com/scale/p/11983241.html)