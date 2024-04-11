<template>
  <div class="cute-girl">
    <div class="box-height box-height-full">
      <img :src="picSourceValue" />
    </div>

    <!-- <div class="box-height" v-show="activeTab === '0'">
      <video
        id="player"
        ref="player"
        :muted="isMuted"
        src="https://lx.linxi.icu/API/xjj.php"
        :poster="picSourceOptions[0].value"
        autoplay
        :loop="isLoop"
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
    </a-tabs> -->

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
              @change="sourceChange()"
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
          <span>{{ isLoop ? "循环模式" : "随机模式" }}</span>
        </template>
        <a-button
          type="primary"
          shape="circle"
          v-if="activeTab == '0'"
          @click="loopClick()"
        >
          <template #icon>
            <RedoOutlined v-if="isLoop" />
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
          <span>{{ isPlaying ? "点击暂停" : "点击播放" }}</span>
        </template>
        <a-button
          type="primary"
          shape="circle"
          v-if="activeTab == '0'"
          @click="playClick()"
        >
          <template #icon>
            <PauseCircleOutlined v-if="isPlaying" />
            <PlayCircleOutlined v-else />
          </template>
        </a-button>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
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
import { ref, onMounted, nextTick } from "vue";

// 樱道 https://img.r10086.com/

// Tab的位置
const activeTab = ref("0");

// https://imgapi.cn/

const picSourceOptions = [
  {
    label: "小姐姐1",
    value: "https://imgapi.cn/api.php?fl=meizi",
  },
  {
    label: "小姐姐2",
    value: "https://tuapi.eees.cc/api.php?category=meinv",
  },
  // {
  //   label: '买家秀1',
  //   value: 'http://jiuli.xiaoapi.cn/i/img/ikmjx.php'
  // },
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
  // {
  //   label: '二次元',
  //   value: 'https://api.nmb.show/1985acg.php'
  // },
];
// 图片地址
const picSourceValue = ref(picSourceOptions[0].value);

const isLoop = ref(true);
const isPlaying = ref(false);
const sourceVisible = ref(false);
const isMuted = ref(false);

const next = () => {
  if (activeTab.value == "0") {
    getVideos();
    // bind(get("next"), "click", randomm(player.value));
  } else {
    let newPicSourceValue =
      picSourceValue.value.indexOf("?") >= 0
        ? picSourceValue.value.split("?")[0]
        : picSourceValue.value;
    picSourceValue.value = newPicSourceValue + "?id=" + Math.random();
    picSourceOptions.map((item) => {
      let picItemValue =
        item.value.indexOf("?") >= 0 ? item.value.split("?")[0] : item.value;
      if (picItemValue == newPicSourceValue) {
        item.value = picSourceValue.value;
      }
    });
  }
};

const key = "updatable";

const sourceChange = () => {
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
  videoPlayer["src"] = "http://lx.linxi.icu/API/xjj.php?_t=" + Math.random();
  videoPlayer.load();
  videoPlayer.play();
  isMuted.value = false;
};

// 获取视频
const getVideos = () => {
  if (activeTab.value == "1") return;

  const videoPlayer = player.value;
  randomm(videoPlayer);
  // console.log(videoPlayer)

  bind(videoPlayer, "error", () => {
    console.log("error");
    if (activeTab.value == "1") return;
    randomm(videoPlayer);
  });
  bind(videoPlayer, "ended", () => {
    if (!isLoop.value) randomm(videoPlayer);
  });
  bind(videoPlayer, "playing", () => {
    isPlaying.value = true;
  });
  bind(videoPlayer, "pause", () => {
    isPlaying.value = false;
  });
};

// 播放、暂停
const playClick = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    player.value.play();
  } else {
    player.value.pause();
  }
};

// 切换循环模式
const loopClick = () => {
  isLoop.value = !isLoop.value;
  message.success(isLoop.value ? "已开启循环模式" : "已开启随机模式");
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
.box-height-full {
  height: 100vh;
  background-color: transparent;
}
</style>
