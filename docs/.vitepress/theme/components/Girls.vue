<template>
  <div class="cute-girl">
    <div class="box-height box-height-full" v-show="onlyImg">
      <img :src="picSourceValue" onerror="next()" />
    </div>

    <div v-show="!onlyImg">
      <div class="box-height" v-show="activeTab === '0'">
        <video
          id="player"
          ref="player"
          :muted="videoOptions.isMuted"
          :src="videoSource"
          :poster="picSourceOptions[0].value"
          autoplay
          :loop="videoOptions.isLoop"
          webkit-playsinline
          playsinline
        ></video>
      </div>

      <div class="box-height" v-show="activeTab === '1'">
        <img :src="picSourceValue" />
      </div>

      <a-tabs
        v-model:activeKey="activeTab"
        tab-position="top"
        tabBarGutter="0"
        centered
        @change="activeTabChange"
      >
        <a-tab-pane key="0">
          <template #tab> <VideoCameraFilled />视频 </template>
        </a-tab-pane>
        <a-tab-pane key="1">
          <template #tab> <FileImageFilled />图片 </template>
        </a-tab-pane>
      </a-tabs>
    </div>

    <div class="btns">
      <!-- 换源按钮 -->
      <a-tooltip placement="left">
        <template #title>
          <span>换源</span>
        </template>
        <a-popover
          placement="topRight"
          trigger="click"
          :overlayStyle="{ width: '210px' }"
          width="210"
          v-model:open="sourceVisible"
          v-if="activeTab == '1'"
        >
          <template #title>
            <div style="margin: 10px 0 10px">换源</div>
            <a-select
              size="mini"
              style="width: 100%"
              v-model:value="picSourceValue"
              placeholder="请选择"
              @change="sourceChange"
            >
              <a-select-option
                v-for="item in picSourceOptions"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
              >
                {{ item.label }}
              </a-select-option>
            </a-select>
          </template>
          <a-button type="primary" shape="circle">
            <template #icon>
              <FolderOpenOutlined />
            </template>
          </a-button>
        </a-popover>
      </a-tooltip>
      <!--循环模式？ -->
      <a-tooltip placement="left">
        <template #title>
          <span>{{ videoOptions.isLoop ? "循环模式" : "随机模式" }}</span>
        </template>
        <a-button
          type="primary"
          shape="circle"
          v-if="activeTab == '0'"
          @click="loopClick()"
        >
          <template #icon>
            <RedoOutlined v-if="videoOptions.isLoop" />
            <DoubleRightOutlined v-else />
          </template>
        </a-button>
      </a-tooltip>
      <!-- 下一个 -->
      <a-tooltip placement="left">
        <template #title>
          <span>下一个</span>
        </template>
        <a-button id="next" type="primary" shape="circle" @click="next()">
          <template #icon>
            <ArrowRightOutlined />
          </template>
        </a-button>
      </a-tooltip>
      <!-- 暂停/继续 -->
      <a-tooltip placement="left">
        <template #title>
          <span>{{ videoOptions.isPlaying ? "点击暂停" : "点击播放" }}</span>
        </template>
        <a-button
          type="primary"
          shape="circle"
          v-if="activeTab == '0'"
          @click="playClick()"
        >
          <template #icon>
            <PauseCircleOutlined v-if="videoOptions.isPlaying" />
            <PlayCircleOutlined v-else />
          </template>
        </a-button>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import {
  VideoCameraFilled,
  FileImageFilled,
  ArrowRightOutlined,
  FolderOpenOutlined,
  RedoOutlined,
  DoubleRightOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref, reactive, computed, onMounted, nextTick } from "vue";

// 樱道 https://img.r10086.com/
// 买家秀 http://jiuli.xiaoapi.cn/i/img/ikmjx.php

const onlyImg = ref(true);
const activeTab = useStorage("activeTab", "1");

// https://imgapi.cn/
// const videoSource = ref("https://tucdn.wpon.cn/api-girl/index.php");
// const videoSource = ref("http://api.yujn.cn/api/zzxjj.php?type=video");
// const videoSource = ref("https://777.cam/api/M/?type=302");
const videoSource = ref("http://lx.linxi.icu/API/xjj.php");

const picSourceOptions = reactive([
  {
    label: "小姐姐1",
    value: "https://imgapi.cn/api.php?fl=meizi",
  },
  {
    label: "小姐姐2",
    value: "https://tuapi.eees.cc/api.php?category=meinv",
  },
  {
    label: "cosplay1",
    value: "https://imgapi.cn/cos.php",
  },
  {
    label: "cosplay2",
    value: "https://imgapi.cn/cos2.php",
  },
  {
    label: "听风过畔",
    value: "https://api.osgz.com",
  },
  {
    label: "嗨丝",
    value: "https://v2.api-m.com/api/heisi?return=302",
  },
]);
const picSourceIdx = useStorage("picSourceIdx", 0);
const sourceVisible = ref(false);
const picSourceValue = computed(() => {
  return picSourceOptions[picSourceIdx.value]['value'];
});

let videoOptions = reactive({
  isLoop: true,
  isPlaying: false,
  isMuted: false,
})

const next = () => {
  if (activeTab.value == "0") {
    getVideos();
    // bind(get("next"), "click", randomm(player.value));
  } else {
    let picSourceValue = picSourceOptions[picSourceIdx.value]['value']
    if (picSourceValue.indexOf("_t") >= 0) {
      let flag = picSourceValue.indexOf("?_t") >= 0 ? '?' : '&';
      picSourceValue =  `${picSourceValue.split(flag)[0]}${flag}_t=${new Date().getTime()}`;
    } else {
      picSourceValue += `${picSourceValue.indexOf("?") >= 0 ? '&' : '?'}_t=${Date.now()}`;
    }
    picSourceOptions.map((item, index) => {
      if (picSourceIdx.value === index) {
        item.value = picSourceValue;
      }
    });
  }
};

const key = "updatable";
const sourceChange = (e) => {
  picSourceIdx.value = picSourceOptions.findIndex(item => item.value === e)
  message.loading({ content: "切换中...", key });
  setTimeout(() => {
    message.success({ content: "切换成功", key, duration: 2 });
  }, 1000);
  sourceVisible.value = false;
};

const player = ref(null);

const get = (id) => {
  return document.getElementById(id);
};
const bind = (element, event, callback) => {
  return element && element.addEventListener(event, callback);
};

onMounted(() => {
  nextTick(() => {
    getVideos();
  });
  document.onkeydown = function (e) {
    const { keyCode } = e;
    if (keyCode === 32) {
      playClick();
    } else if (keyCode === 37) {
      if (activeTab.value == "0") return;
      activeTab.value = "0";
      player.value.play();
    } else if (keyCode === 39) {
      if (activeTab.value == "1") return;
      activeTab.value = "1";
      player.value.pause();
    } else if (keyCode === 40) {
      next();
    } else if (keyCode === 77) {
      loopClick();
    }
  };
});

const randomm = function (videoPlayer) {
  videoPlayer["src"] = `${videoSource.value}?_t=${new Date().getTime()}`;
  videoPlayer.load();
  bind(videoPlayer, "canplay", () => {
    videoPlayer.play();
    videoOptions.isMuted = false;
  });
};

// 获取视频
const getVideos = () => {
  if (onlyImg.value) activeTab.value = "1"
  if (activeTab.value == "1") {
    player.value.pause();
    return
  };

  const videoPlayer = player.value;
  randomm(videoPlayer);

  bind(videoPlayer, "error", () => {
    console.log("error");
    if (activeTab.value == "1") return;
    randomm(videoPlayer);
  });
  bind(videoPlayer, "ended", () => {
    if (activeTab.value == "1") return;
    if (!videoOptions.isLoop) randomm(videoPlayer);
  });
  bind(videoPlayer, "playing", () => {
    videoOptions.isPlaying = true;
  });
  bind(videoPlayer, "pause", () => {
    videoOptions.isPlaying = false;
  });
};

// 播放、暂停
const playClick = () => {
  videoOptions.isPlaying = !videoOptions.isPlaying;
  if (videoOptions.isPlaying) {
    player.value.play();
  } else {
    player.value.pause();
  }
};

// 切换循环模式
const loopClick = () => {
  videoOptions.isLoop = !videoOptions.isLoop;
  message.success(videoOptions.isLoop ? "已开启循环模式" : "已开启随机模式");
};

// Tab切换
const activeTabChange = (e) => {
  if (e == 1) {
    player.value.pause();
  } else {
    player.value.play();
  }
};
</script>

<style lang="scss" scoped>
.cute-girl {
  height: 100vh;
  overflow: hidden;
  .box-height {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 46px);
    background: var(--c-bg-light);
    #player {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .box-height-full {
    height: 100vh;
    background-color: transparent;
  }
  :deep(
      .ant-tabs-top > .ant-tabs-nav,
      .ant-tabs-bottom > .ant-tabs-nav,
      .ant-tabs-top > div > .ant-tabs-nav,
      .ant-tabs-bottom > div > .ant-tabs-nav
    ) {
    margin: 0 !important;
    .ant-tabs-nav-list {
      width: 100%;
      .ant-tabs-tab {
        width: 50%;
        text-align: center;
        .ant-tabs-tab-btn {
          width: 100%;
        }
      }
    }
  }
}

.btns {
  position: fixed;
  z-index: 9999999999999999;
  right: 10px;
  bottom: 66px;
  display: flex;
  flex-direction: column;
  .ant-btn {
    margin-top: 15px;
    outline: none;
    font-size: 1rem;
    &.is-circle {
      padding: 4px;
    }
  }
  .ant-btn + .ant-btn {
    margin-left: 0;
  }
}
</style>
