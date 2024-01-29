<template>
  <a-row :gutter="10">
    <a-col :span="24">
      <div class="flex-box padding-xs">
        <div class="flex" :style="boxFormState">
          <div v-for="(item, index) in lists" :key="index" class="flex-item">
            item - {{ index + 1 }}
          </div>
        </div>
      </div>
    </a-col>
    <a-col :span="24">
      <h4>flex box配置</h4>
      <div class="flex-box">
        <a-form
          v-for="(item, index) in flexBoxOptions"
          :key="index"
          :model="boxFormState"
          :label-col="{style: {width: '120px'}}"
          :wrapper-col="{span: 20}"
        >
          <a-form-item :label="item.attributeName">
            <a-radio-group v-model:value="boxFormState[item.attributeName]">
              <a-radio :value="sItem" v-for="(sItem, sIndex) in item.options" :key="sIndex">{{sItem}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </div>
      <div class="example-source-wrapper">
        <div class="language-css">
          <pre>
  flex-direction: {{boxFormState["flex-direction"]}};
  flex-wrap: {{boxFormState["flex-wrap"]}};
  justify-content: {{boxFormState["justify-content"]}};
  align-items: {{boxFormState["align-items"]}};
  align-content: {{boxFormState["align-content"]}};</pre>
        </div>
      </div>
      <!-- <h4>flex item配置</h4> -->
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, reactive } from "vue";

const flexBoxOptions = ref([
  {
    attributeName: "flex-direction",
    options: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    attributeName: "flex-wrap",
    options: ["nowrap", "wrap", "wrap-reverse"],
  },
  {
    attributeName: "justify-content",
    options: ["flex-start", "flex-end", "center", "space-between", "space-around"],
  },
  {
    attributeName: "align-items",
    options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
  },
  {
    attributeName: "align-content",
    options: ["flex-start", "flex-end", "center", "space-between", "space-around"],
  },
]);

const boxFormState = reactive({
  [flexBoxOptions.value[0].attributeName]: flexBoxOptions.value[0].options[0],
  [flexBoxOptions.value[1].attributeName]: flexBoxOptions.value[1].options[0],
  [flexBoxOptions.value[2].attributeName]: flexBoxOptions.value[2].options[0],
  [flexBoxOptions.value[3].attributeName]: flexBoxOptions.value[3].options[0],
  [flexBoxOptions.value[4].attributeName]: flexBoxOptions.value[4].options[0],
})

const lists = ref([
  {
    order: 1,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
  {
    order: 1,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
  {
    order: 1,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
  {
    order: 1,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
  {
    order: 1,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
]);
</script>

<style lang="scss">
.flex-box {
  border: 1px solid #ccc;
  .ant-form-item {
    margin-bottom: 4px;
  }
  .flex {
    display: flex;
  }
  .flex-item {
    border: 1px solid #fff;
    line-height: 100%;
    text-align: center;
    color: #fff;
    &:nth-of-type(1) {
      width: 70px;
      height: 70px;
      background-color: var(--c-red);
    }
    &:nth-of-type(2) {
      width: 150px;
      height: 30px;
      background-color: var(--c-orange);
    }
    &:nth-of-type(3) {
      width: 250px;
      height: 100px;
      background-color: var(--c-blue);
    }
    &:nth-of-type(4) {
      width: 300px;
      height: 140px;
      background-color: var(--c-green);
    }
    &:nth-of-type(5) {
      width: 150px;
      height: 100px;
      background-color: var(--c-pink);
    }
  }
}
</style>
