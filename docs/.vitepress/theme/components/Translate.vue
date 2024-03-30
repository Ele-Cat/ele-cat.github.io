<template>
  <div class="translate-box">
    <a-form
      :model="translateForm"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-row :gutter="20">
        <a-col :span="6">
          <a-form-item label="译文模式">
            <a-select
              v-model:value="translateForm.mode"
              :options="modeOptions"
              @change="handleModeChange"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="自动复制译文">
            <a-radio-group
              v-model:value="translateForm.autoCopy"
              :options="autoCopyOptions"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <a-row :gutter="20">
      <a-col :span="12">
        原文：
        <a-textarea
          v-model:value="sourceText"
          placeholder="请输入、粘贴需要翻译的内容"
          @change="handleSourceTextChange"
          :autoSize="{ minRows: 10, maxRows: 16 }"
        ></a-textarea>
        <a-button
          @click="handleCopy(sourceText)"
          type="primary"
          class="copy-btn"
          >复制原文</a-button
        >
        <a-button
          @click="handleClear(sourceText)"
          type="primary"
          danger
          class="copy-btn"
          >清空</a-button
        >
      </a-col>
      <a-col :span="12">
        译文：
        <a-textarea
          v-model:value="targetText"
          placeholder="自动识别并翻译"
          readonly
          :autoSize="{ minRows: 10, maxRows: 16 }"
        ></a-textarea>
        <a-button
          @click="handleCopy(targetText)"
          type="primary"
          class="copy-btn"
          >复制译文</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useFetch, useClipboard, useStorage } from "@vueuse/core";
import { message } from "ant-design-vue";

const translateDefault = {
  mode: "1",
  autoCopy: true,
};
const translateForm = useStorage("translate", translateDefault);
const modeOptions = reactive([
  {
    value: "1",
    label: "小驼峰",
  },
  {
    value: "2",
    label: "大驼峰",
  },
  {
    value: "3",
    label: "小写+下划线",
  },
  {
    value: "4",
    label: "大写+下划线",
  },
  {
    value: "5",
    label: "不做处理",
  },
]);
const autoCopyOptions = reactive([
  {
    value: true,
    label: "是",
  },
  {
    value: false,
    label: "否",
  },
]);
const sourceText = ref("");
const targetText = ref("");
let targetTextCopy = "";
const { text, copy, copied, isSupported } = useClipboard();

const handleModeChange = () => {
  targetText.value = resolveTarget(targetTextCopy);
  if (targetText.value && translateForm.value.autoCopy) {
    handleCopy(targetText.value);
  }
};

const handleSourceTextChange = async (e) => {
  if (!sourceText.value) {
    targetText.value = "";
    return;
  }
  targetText.value = await requestTarget();
  if (targetText.value && translateForm.value.autoCopy) {
    handleCopy(targetText.value);
  }
};

const requestTarget = async () => {
  const url = `https://api.oioweb.cn/api/txt/QQFanyi?sourceText=${sourceText.value}`;
  const { isFetching, error, data } = await useFetch(url).get().json();
  const { code, result, msg } = data?.value;
  if (code === 200) {
    targetTextCopy = result?.targetText.split("/")[0].replace(/\./g, "");
    return resolveTarget(targetTextCopy) || "";
  } else {
    message.error(msg || "翻译失败");
  }
};

const resolveTarget = (text) => {
  const { mode } = translateForm.value;
  if (mode === "1") {
    return toLowerCamelCase(text);
  } else if (mode === "2") {
    return toUpperCamelCase(text);
  } else if (mode === "3") {
    return toLowerCaseWithUnderscore(text);
  } else if (mode === "4") {
    return toUpperCaseWithUnderscore(text);
  } else if (mode === "5") {
    return text;
  }
  return text;
};

const handleCopy = (text) => {
  copy(text);
  copied && message.success("复制成功");
};

const handleClear = () => {
  sourceText.value = "";
  targetText.value = "";
};

function toLowerCamelCase(str) {
  // 将字符串中的空格和下划线替换为驼峰分隔符
  const camelCaseStr = str.replace(/[\s_]+(\w)/g, (_, char) =>
    char.toUpperCase()
  );
  // 将首字母转换为小写
  const lowerCamelCaseStr =
    camelCaseStr.charAt(0).toLowerCase() + camelCaseStr.slice(1);
  return lowerCamelCaseStr;
}

function toUpperCamelCase(str) {
  // 将字符串中的空格和下划线替换为驼峰分隔符
  const camelCaseStr = str.replace(/[\s_]+(\w)/g, (_, char) =>
    char.toUpperCase()
  );
  // 将首字母转换为大写
  const upperCamelCaseStr =
    camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
  return upperCamelCaseStr;
}

function toLowerCaseWithUnderscore(str) {
  // 将字符串中的空格和驼峰分隔符替换为下划线
  const underscoreStr = str.replace(
    /[\sA-Z]/g,
    (match) => "_" + match.toLowerCase()
  );

  // 将首字符转换为小写
  const lowerCaseWithUnderscoreStr = underscoreStr
    .toLowerCase()
    .replace(/\s/g, "");

  return lowerCaseWithUnderscoreStr;
}

function toUpperCaseWithUnderscore(str) {
  // 将字符串中的空格和驼峰分隔符替换为下划线
  const underscoreStr = str.replace(
    /[\sA-Z]/g,
    (match) => "_" + match.toUpperCase()
  );

  // 将字符串转换为大写形式
  const upperCaseWithUnderscoreStr = underscoreStr
    .toUpperCase()
    .replace(/\s/g, "");

  return upperCaseWithUnderscoreStr;
}
</script>

<style lang="scss" scoped>
.translate-box {
  padding-top: 20px;
  .copy-btn {
    margin-top: 6px;
    padding: 0 18px;
  }
}
</style>
