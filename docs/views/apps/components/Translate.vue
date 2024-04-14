<template>
  <div class="translate-box">
    <a-form
      :model="translateForm"
      :label-col="{ style: { width: '140px' } }"
      :wrapper-col="{ span: 16 }"
    >
      <a-row :gutter="20">
        <a-col :span="6">
          <a-form-item
            label="自动粘贴至原文"
            tooltip="开启后，当鼠标聚焦至原文输入框时，会自动识别剪切板，将剪切板内容粘贴至原文处"
          >
            <a-radio-group
              v-model:value="translateForm.autoPaste"
              :options="autoCopyOptions"
              @change="handleAutoPasteChange"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="译文模式" tooltip="以何种格式输出译文">
            <a-select
              v-model:value="translateForm.mode"
              :options="modeOptions"
              @change="handleChange"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="自动复制译文"
            tooltip="开启后，在切换模式、修改前后缀时，会自动复制译文到剪贴板"
          >
            <a-radio-group
              v-model:value="translateForm.autoCopy"
              :options="autoCopyOptions"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="译文前后缀"
            tooltip="拼接在译文前后的内容，请酌情添加"
          >
            <a-row :gutter="6">
              <a-col :span="12">
                <a-input
                  v-model:value="translateForm.prefix"
                  placeholder="输入前缀"
                  @change="handleChange"
                ></a-input>
              </a-col>
              <a-col :span="12">
                <a-input
                  v-model:value="translateForm.suffix"
                  placeholder="输入后缀"
                  @change="handleChange"
                ></a-input>
              </a-col>
            </a-row>
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
          :autoSize="{ minRows: 10, maxRows: 16 }"
          @change="handleSourceTextChange"
          @focus="handleSourceTextFocus"
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
import { message, notification } from "ant-design-vue";

const translateDefault = {
  mode: "1",
  autoCopy: true,
  autoPaste: false,
  hasSelectedPaste: false,
  prefix: "",
  suffix: "",
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

// 切换是否自动粘贴至原文
const handleAutoPasteChange = (e) => {
  if (e.target.value && !translateForm.value.hasSelectedPaste) {
    translateForm.value.hasSelectedPaste = true;
    notification.warning({
      message: "通知",
      description: "请在浏览器中允许查看复制到剪贴板的文本和图像",
      duration: 10,
    });
    navigator.clipboard.readText();
  }
};

// 切换选项
const handleChange = () => {
  targetText.value = resolveTarget(targetTextCopy);
  if (targetText.value && translateForm.value.autoCopy) {
    handleCopy(targetText.value);
  }
};

// 原文输入框聚焦时
const handleSourceTextFocus = async () => {
  if (!translateForm.value.autoPaste) return;
  try {
    const clipboardText = await navigator.clipboard.readText();
    if (clipboardText) {
      sourceText.value = clipboardText;
      handleSourceTextChange();
    }
  } catch (err) {
    console.error("无法读取剪贴板内容:", err);
  }
};

// 原文修改
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

// 调用接口
const requestTarget = async () => {
  try {
    const url = `https://api.oioweb.cn/api/txt/QQFanyi?sourceText=${sourceText.value}`;
    const { isFetching, error, data } = await useFetch(url).get().json();
    const { code, result, msg } = data?.value;
    if (code === 200) {
      targetTextCopy = result?.targetText.split("/")[0].replace(/[.-]/g, " ");
      return resolveTarget(targetTextCopy) || "";
    } else {
      message.error(msg || "翻译失败，请检查重试");
    }
  } catch (error) {
    message.error("翻译失败，请检查重试");
  }
};

// 翻译结果处理
const resolveTarget = (text) => {
  text = resolveFix(text);
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

// 处理前后缀
const resolveFix = (text) => {
  const { prefix, suffix } = translateForm.value;
  const trimPrefix = prefix.replace(/\./g, "");
  const trimSuffix = suffix.replace(/\./g, "");
  if (trimPrefix && trimSuffix) {
    return `${trimPrefix} ${text} ${trimSuffix}`;
  } else if (trimPrefix) {
    return `${trimPrefix} ${text}`;
  } else if (trimSuffix) {
    return `${text} ${trimSuffix}`;
  } else {
    return text;
  }
};

// 复制
const handleCopy = (text) => {
  copy(text);
  copied && message.success("复制成功");
};

// 清空
const handleClear = () => {
  sourceText.value = "";
  targetText.value = "";
};

// 小驼峰
function toLowerCamelCase(str) {
  const camelCaseStr = str.replace(/[\s_]+(\w)/g, (_, char) =>
    char.toUpperCase()
  );
  const lowerCamelCaseStr =
    camelCaseStr.charAt(0).toLowerCase() + camelCaseStr.slice(1);
  return lowerCamelCaseStr;
}

// 大驼峰
function toUpperCamelCase(str) {
  const camelCaseStr = str.replace(/[\s_]+(\w)/g, (_, char) =>
    char.toUpperCase()
  );
  const upperCamelCaseStr =
    camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
  return upperCamelCaseStr;
}

// 小写+下划线
function toLowerCaseWithUnderscore(str) {
  const lowerCaseWithUnderscoreStr = str.toLowerCase().replace(/\s+/g, "_");
  return lowerCaseWithUnderscoreStr;
}

// 大写+下划线
function toUpperCaseWithUnderscore(str) {
  const upperCaseWithUnderscoreStr = str.toUpperCase().replace(/\s+/g, "_");
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
