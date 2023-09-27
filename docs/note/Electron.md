# Electron 从零开始

- [Electron 官网地址](https://www.electronjs.org/zh/)
- [Electron 文档地址](https://www.electronjs.org/zh/docs/latest/)
- [项目地址](https://gitee.com/ele-cat/electron-quick-start)

:::tip 参考博客

- [前端使用 electron+vue3+ts 搭建一个桌面端应用且可以热更新](https://blog.csdn.net/weixin_50307964/article/details/128675648)
- [electron+vue3+ts 开发了一个 JSON 工具桌面软件](https://juejin.cn/post/7187683140713283640)

:::

## 01. 介绍

> Electron 是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在 Windows 上运行的跨平台应用 macOS 和 Linux——不需要本地开发经验。

## 02. 技术栈

- [electron](https://www.electronjs.org/zh/)
- [vue3](https://cn.vuejs.org/)
- [element-plus](https://element-plus.gitee.io/zh-CN/guide/installation.html)
- vue-router
- vuex
- vuex-persistedstate

## 03. 起步

> 对应[项目](https://gitee.com/ele-cat/electron-quick-start)的[master 分支](https://gitee.com/ele-cat/electron-quick-start/tree/master/)，与 Vue 一致的开发体验

### 3.1 初始化 Vue3 项目

```sh
# 全局安装vue-cli
npm install -g @vue/cli
# 创建vue3项目
vue create electron-quick-start
# 启动项目
yarn serve
```

### 3.2 安装 Electron

```sh
# 安装依赖
vue add electron-builder
# 启动项目
yarn electron:serve
# 解决启动报错，安装
yarn add ts-loader@8.2.0
```

修改 background.ts

```ts
try {
  await installExtension(VUEJS3_DEVTOOLS);
} catch (e: any) {
  console.error("Vue Devtools failed to install:", e.toString());
}
```

### 3.3 配置 vue.config.js

1. appId/guid 需保持一致；
2. include 为热更新配置，不然你在卸载/更新后安装软件安装不上；主要原因注册机的问题。这个文件中有一句代码也是要和 appId 一致的；

```js
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 引入插件不使用时不报报错
  configureWebpack: {
    externals: {
      electron: 'require("electron")',
    },
  },

  // 第三方插件配置
  pluginOptions: {
    // vue-cli-plugin-electron-builder 配置
    electronBuilder: {
      nodeIntegration: true,
      // 设置应用主进程的入口
      mainProcessFile: "src/background.ts",
      // 设置应用渲染进程的入口
      rendererProcessFile: "src/main.ts",
      customFileProtocol: "../",
      // 打包选项
      builderOptions: {
        // 解决的问题：在安装到电脑后，系统通知无法工作
        appId: "com.ecat.vue3", // 软件id
        productName: "软件名称", // 打包后的名称
        // windows系统相关配置
        win: {
          // 应用图标路径（Windows 系统中 icon 需要 256 * 256 的 ico 格式图片）
          icon: "./src/assets/logo.png",
          target: {
            target: "nsis",
            // 支持 64 位的 Windows 系统
            arch: ["x64"],
          },
        },
        nsis: {
          // 如果为false，想要给电脑所有用户安装必须使用管理员权限
          allowElevation: true,
          // 是否一键安装
          oneClick: false,
          // 允许修改安装目录
          allowToChangeInstallationDirectory: true,
          guid: "com.ecat.vue3", // 软件id
          include: "./installer.nsh",
        },
      },
    },
  },
});
```

根目录创建 `installer.nsh`

```
!macro customInit

DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\com.ecat.vue3"

!macroend
```

### 3.4 安装 Element-Plus

```sh
npm install element-plus --save
npm install @element-plus/icons-vue
```

修改 `main.ts`

```ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
```

### 3.5 开启热更新

```sh
yarn add electron-updater
```

新建 `JSPatch.ts`

```ts
import { ipcMain } from "electron";
const { autoUpdater } = require("electron-updater");

autoUpdater.autoDownload = true; // 是否自动更新
autoUpdater.autoInstallOnAppQuit = true; // APP退出的时候自动安装

/*
 * 在开启更新监听事件之前设置
 * 一定要保证该地址下面包含lasted.yml文件和需要更新的exe文件
 */
autoUpdater.setFeedURL({
  provider: "generic",
  url: "https://",
});

export default (win: any) => {
  // autoUpdater.setFeedURL({
  //   provider: 'generic',
  //   url: process.env.VUE_APP_HOT_UPDATE,
  // })

  // 发送消息给渲染线程
  function sendStatusToWindow(status?: any, params?: any) {
    win.webContents.send(status, params);
  }

  autoUpdater.on("checking-for-update", () => {
    sendStatusToWindow("Checking for update...");
  });
  autoUpdater.on("update-available", (info: any) => {
    // 可以更新版本
    sendStatusToWindow("autoUpdater-canUpdate", info);
  });

  autoUpdater.on("error", (err: any) => {
    // 更新错误
    sendStatusToWindow("autoUpdater-error", err);
  });
  // 发起更新程序
  ipcMain.on("autoUpdater-toDownload", () => {
    autoUpdater.downloadUpdate();
  });
  autoUpdater.on("download-progress", (progressObj: any) => {
    // 正在下载的下载进度
    sendStatusToWindow("autoUpdater-progress", progressObj);
  });
  autoUpdater.on("update-downloaded", () => {
    // 下载完成
    sendStatusToWindow("autoUpdater-downloaded");
  });

  // 退出程序
  ipcMain.on("exit-app", () => {
    autoUpdater.quitAndInstall();
  });

  // 重新检查是否有新版本更新
  ipcMain.on("monitor-update-system", () => {
    autoUpdater.checkForUpdates();
  });

  // 检测是否有更新
  setTimeout(() => {
    autoUpdater.checkForUpdates();
  }, 5000);
};
```

检查更新组件 `jspatch.vue`

```vue
<template>
  <div class="jspatch">
    <el-dialog
      title="JSON工具更新中......"
      v-model="showUpdater"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      :show-close="false"
      width="40%"
      top="26vh"
      center
    >
      <template v-if="downloadProcess">
        <p>
          {{
            `当前：【${downloadProcess.transferred}】 / 共【${downloadProcess.total}】`
          }}
        </p>
        <el-progress
          :text-inside="true"
          :stroke-width="18"
          status="warning"
          :percentage="downloadProcess.percent"
        ></el-progress>
        <p>正在下载({{ downloadProcess.speed }})......</p>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ipcRenderer } from "electron";
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
  name: "Jspatch",
  setup(props: any, { emit }: { emit: any }) {
    const data = reactive({
      showUpdater: false,
      downloadProcess: {
        percent: 10,
        speed: 0,
        transferred: "1kb",
        total: "2M",
      },
    });
    // 发现新版本 once
    ipcRenderer.on("autoUpdater-canUpdate", (event, info) => {
      /*
       * 这儿会监听，如果info.version比现在版本小；就会触发；反之，不会触发
       */
      ElMessageBox.confirm(
        `发现有新版本【v${info.version}】，是否更新?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          closeOnClickModal: false,
          type: "warning",
        }
      ).then(() => {
        ipcRenderer.send("autoUpdater-toDownload");
      });
    });
    // 下载进度
    ipcRenderer.on("autoUpdater-progress", (event, process) => {
      if (process.transferred >= 1024 * 1024) {
        process.transferred =
          (process.transferred / 1024 / 1024).toFixed(2) + "M";
      } else {
        process.transferred = (process.transferred / 1024).toFixed(2) + "K";
      }
      if (process.total >= 1024 * 1024) {
        process.total = (process.total / 1024 / 1024).toFixed(2) + "M";
      } else {
        process.total = (process.total / 1024).toFixed(2) + "K";
      }
      if (process.bytesPerSecond >= 1024 * 1024) {
        process.speed =
          (process.bytesPerSecond / 1024 / 1024).toFixed(2) + "M/s";
      } else if (process.bytesPerSecond >= 1024) {
        process.speed = (process.bytesPerSecond / 1024).toFixed(2) + "K/s";
      } else {
        process.speed = process.bytesPerSecond + "B/s";
      }
      process.percent = process.percent.toFixed(2);
      data.downloadProcess = process;
      data.showUpdater = true;
    });
    // 下载更新失败
    ipcRenderer.once("autoUpdater-error", () => {
      ElMessage.error("更新失败！");
      data.showUpdater = false;
    });
    // 下载完成
    ipcRenderer.once("autoUpdater-downloaded", () => {
      data.showUpdater = false;
      ElMessageBox.confirm(`更新完成，是否关闭应用程序安装新版本?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnClickModal: false,
        type: "warning",
      }).then(() => {
        ipcRenderer.send("exit-app");
      });
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="less">
.jspatch {
  /deep/ .el-dialog__header {
    font-weight: 700;

    .el-dialog__title {
      color: #00adb5;
    }
  }
}
</style>
```

修改 `vue.config.js`，builderOptions 对象中添加

```js
publish: [
  {
    provider: "generic",
    url: 'https:', // 打包文件地址,与以上链接需相同
  },
],
```

## 04. 项目渐进式

> 对应[项目](https://gitee.com/ele-cat/electron-quick-start)的[master 分支](https://gitee.com/ele-cat/electron-quick-start/tree/master/)，与 Vue 一致的开发体验

### 4.1 Vuex 以及数据持久化

1. Vuex 安装

```sh
npm install vuex@next --save
```

2. 创建 `src\store\index.ts`

```ts
import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    countGetter(state) {
      return state.count + "【getters】";
    },
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    },
  },
  actions: {
    increment({ commit }, n) {
      commit("increment", n);
    },
  },
  modules: {},
});

export default store;
```

3. 在 `main.ts` 中引入

```ts
import store from "./store";
app.use(store);
```

4. 测试使用

```vue
<template>
  <div class="home">
    {{ count }}/ {{ store.getters.countGetter }}<br />
    <el-button type="primary" @click="handleAdd">添加</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Vuex",
  setup() {
    const store = useStore();
    const count = computed(() => {
      return store.state.count;
    });
    const handleAdd = () => {
      store.commit("increment", 1);
    };
    return {
      count,
      store,
      handleAdd,
    };
  },
});
</script>
```

:::warning 注意
这个时候刷新页面，数据就没了，需要引入数据持久化功能
:::

5. 数据持久化

```sh
# 安装
npm i vuex-persistedstate --save
```

```ts
import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    countGetter(state) {
      return state.count + "【getters】";
    },
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    },
  },
  actions: {
    increment({ commit }, n) {
      commit("increment", n);
    },
  },
  modules: {},
  plugins: [
    createPersistedstate({
      key: "system",
    }),
  ],
});

export default store;
```

### 4.2 主题切换、暗黑模式

1. 书接上题，已经做好全局状态管理以及数据持久化，那就可以开始扩展其他功能
2. 移除默认 frame，`background.ts` 中，设定 `frame: false`，electron 的默认顶部菜单就消失了
3. 添加 layout 样式，`src\layout\index.vue` `src\layout\common\header.vue` `src\layout\common\sidebar.vue`，并添加基础路由，这时候页面框架就出来了
4. 添加全局设定 `settings.vue` 组件，表单修改时，将数据保存至 Vuex 中，具体代码参考：[Settings.vue](https://gitee.com/ele-cat/electron-quick-start/blob/master/src/components/Settings.vue)
5. 同时配置 styles 相关样式，整体系统就支持主题切换、暗黑模式了

### 4.3 ipcRenderer事件总线

```js
import { ipcRenderer, ipcMain } from "electron";
// 发送
ipcRenderer.send("Fn", value);
// 获取
ipcMain.on("Fn", (event, value) => {});

win.webContents.send('Fn', data);
ipcRenderer.on("Fn", (event, value) => {});
```

### 4.4 其它渐进式【待补充】

## 05. Electron 的 API

> 学习一个框架最主要的就是看[官方文档](https://www.electronjs.org/zh/docs/latest/api/app)，对应[项目](https://gitee.com/ele-cat/electron-quick-start)的[feat-api 分支](https://gitee.com/ele-cat/electron-quick-start/tree/feat-api/)

### 5.1 app

## 06. 应用开发

### 6.1 即时提醒

1. [代码地址](https://gitee.com/ele-cat/electron-quick-start/tree/feat-remind/)