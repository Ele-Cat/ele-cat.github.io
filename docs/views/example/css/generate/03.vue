<template>
  <div class="time-stamp">
    <a-row :gutter="10" type="flex" align="middle">
      <a-col class="time-label">现在：</a-col>
      <a-col :span="20">
        <span class="time-input time-change">{{nowTimeStamp}} ms</span>
        <span class="time-input time-change">{{nowTimeStamp.toString().substring(0, 10)}} s</span>
        <span class="time-input time-change">{{nowTime}}</span>
        <a-button type="primary" size="small" @click="stampClick">{{pause ? '继续' : '暂停'}}</a-button>
      </a-col>
    </a-row>
    <a-row :gutter="10" type="flex" align="middle" class="margin-top-sm">
      <a-col class="time-label">时间戳：</a-col>
      <a-col :span="20">
        <a-input class="time-input" v-model:value="inputTimeStamp" />
        <a-select v-model:value="inputTimeStampType" class="time-select">
          <a-select-option value="ms">毫秒</a-select-option>
          <a-select-option value="s">秒</a-select-option>
        </a-select>
        <a-button type="primary" class="margin-right-sm" @click="getTime">转换<double-right-outlined /></a-button>
        <a-input class="time-input" v-model:value="timeStampString" readonly />
      </a-col>
    </a-row>
    <a-row :gutter="10" type="flex" align="middle" class="margin-top-sm">
      <a-col class="time-label">时间：</a-col>
      <a-col :span="20">
        <a-date-picker class="time-input" v-model:value="inputTime" show-time placeholder="选择日期时间" />
        <a-button type="primary" class="margin-right-sm" @click="getTimeStamp">转换<double-right-outlined /></a-button>
        <a-input class="time-input" v-model:value="timeString" readonly />
        <a-select v-model:value="inputTimeType" class="time-select">
          <a-select-option value="ms">毫秒</a-select-option>
          <a-select-option value="s">秒</a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { DoubleRightOutlined } from '@ant-design/icons-vue';
import { ref, watch } from "vue";
import dayjs from 'dayjs';

// 现在时间戳
const nowTimeStamp = ref(new Date().getTime())
const nowTime = ref(dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'))
// 更新时间戳
let updateTime = setInterval(() => {
  nowTimeStamp.value = new Date().getTime()
  nowTime.value = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
}, 1000);
// 是否暂停
const pause = ref(false)
// 点击暂停|继续
const stampClick = () => {
  pause.value = !pause.value
  if (pause.value) {
    clearInterval(updateTime)
  } else {
    updateTime = setInterval(() => {
      nowTimeStamp.value = new Date().getTime()
      nowTime.value = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
    }, 1000);
  }
}

// 录入的时间戳
const inputTimeStamp = ref(new Date().getTime())
// 录入的时间戳格式
const inputTimeStampType = ref('ms')
const timeStampString = ref(null)
// 获取时间戳转时间
const getTime = () => {
  let unit = 1
  if (inputTimeStampType.value == 's') {
    unit = 1000
  }
  timeStampString.value = dayjs(Number(inputTimeStamp.value) * unit).format('YYYY-MM-DD HH:mm:ss')
}
// 切换时间戳转时间的单位
watch(inputTimeStampType, (newVal) => {
  getTime(newVal)
})

// 录入的日期
const inputTime = ref(dayjs(dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss'))
// 反显的时间戳格式
const inputTimeType = ref('ms')
const timeString = ref(null)
// 获取时间转时间戳
const getTimeStamp = () => {
  let unit = 1
  if (inputTimeType.value == 's') {
    unit = 1000
  }
  timeString.value = dayjs(inputTime.value).valueOf() / unit
}
// 切换时间转时间戳的单位
watch(inputTimeType, (newVal) => {
  getTimeStamp(newVal)
})
</script>

<style lang="scss">
.time-stamp {
  padding: 20px 0;
  .time-label {
    width: 80px;
    text-align: right;
  }
  .time-input {
    display: inline-block;
    width: 180px;
    margin-right: 4px;
  }
  .time-change {
    padding-left: 12px;
  }
  .time-select {
    width: 80px;
    margin-right: 4px;
  }
}
.ant-picker-date-panel {
  width: 350px !important;
  .ant-picker-content {
    width: 100%;
  }
}
.margin-top-sm {
  margin-top: 10px;
}
.margin-right-sm {
  margin-right: 10px;
}
</style>
