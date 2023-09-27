# 微信对话生成器 👋

## 介绍

> 本程序是一款聊天记录制作工具，可以模拟微信聊天，可以管理不同用户角色进行对话，同时支持发送文字、图片、语音、红包、转账等类型信息。可以将聊天内容一键生成为图片、长图、动图和视频。【[在线使用地址](https://ele-cat.gitee.io/vue3-wechat-tool/)】

**注意：用户在使用本程序时所填写的文本、图片以及保存的图片均只会保存在用户本地！**

## 使用教程

### 👉<a href='https://www.bilibili.com/video/BV1Q84y1S7iA/?share_source=copy_web&vd_source=a365c12124cceb4ffcbdc878f6f2ef60' target="_blank">B 站视频教程</a>

:::tip 注意

- 工具中的操作均会缓存在本地浏览器，刷新不会失效
- 切换浏览器访问时，数据不会同步，需要使用模板导入导出功能

:::

### 1. 外观设置

[![外观设置效果预览](https://23img.com/i/2023/09/27/do1nam.gif)](https://23img.com/l/?i=/i/2023/09/27/do1nam.gif)

<p align=center>外观设置效果预览</p>
<br />

[![上传背景并截图](https://23img.com/i/2023/09/27/do1tqh.gif)](https://23img.com/l/?i=/i/2023/09/27/do1tqh.gif)

<p align=center>上传背景并截图</p>

### 2. 对话设置

:::tip 注意

- 对话设置中的发送者需要在顶部**选择发送用户**处选择
- 对话与用户是解耦的，选择其它用户只会切换用户信息

:::

#### 2.1 用户管理

[![用户管理](https://23img.com/i/2023/09/27/do0fk3.jpg)](https://23img.com/l/?i=/i/2023/09/27/do0fk3.jpg)

1. 点击**用户管理**弹出用户管理界面
2. 点击**新增用户**新增一条用户信息
3. 点击**用户头像**可以重新上传裁剪
4. 录入用户昵称
5. 点击**选择**切换对方信息
6. 点击**删除**可以移除该条用户信息

#### 2.2 发送对话

[![发送对话](https://23img.com/i/2023/09/27/do0zwt.gif)](https://23img.com/l/?i=/i/2023/09/27/do0zwt.gif)

<p align=center>发送对话</p>

#### 2.3 手机界面操作

[![右键菜单](https://23img.com/i/2023/09/27/do1g2t.gif)](https://23img.com/l/?i=/i/2023/09/27/do1g2t.gif)

#### 2.4 工具栏

- 重置外观：点击后可重置手机外观样式
- 清空对话：点击后清空当前对话记录
- 存为模板：在填写完模板标题后，可在**模板管理**中查看、应用
- 导出聊天：导出聊天为 JSON 文件
- 导入聊天：导入 JSON 文件为聊天，本操作会覆盖当前对话
- 生成图片：滚动到哪截到哪
- 生成长图：截取全部对话信息
- 配置：生成动图、视频配置
- 生成动图：生成动图
- 生成视频：当前方案为生成图片序列 zip 包，用户自行通过视频剪辑软件剪辑

### 3. 模板管理

[![模板管理](https://23img.com/i/2023/09/27/do1f30.jpg)](https://23img.com/l/?i=/i/2023/09/27/do1f30.jpg)

1. **预览**模板截图
2. **应用**当前模板到对话【注意会覆盖右侧的对话，请提前保存】
3. **删除**所选模板

### 4. 使用说明

**_使用前请详细阅读使用说明_**

## 开发教程

### 01. 技术栈/插件

|            技术栈/插件 | 注释                    |
| ---------------------: | :---------------------- |
|                  Vite4 | 构建工具                |
|                   Vue3 |                         |
|         Ant Design Vue | 组件库                  |
|                  pinia | 状态管理                |
|   pinia-plugin-persist | 数据持久化              |
|                   Less | Css 预处理              |
|            html2canvas | Dom 转化为 Canvas、Blob |
|             file-saver | 文件存储到本地          |
|                 gif.js | 生成 Gif                |
|                   mitt | 消息分发                |
|                  jszip | 生成 Zip                |
|   vue-advanced-cropper | 图像裁剪                |
| vue3-perfect-scrollbar | 优雅的滚动条            |

### 02. 下载&安装&运行

- #### 下载

  ```
  git clone https://gitee.com/ele-cat/vue3-wechat-tool.git
  ```

- #### 安装

  ```
  npm install
  ```

- #### 运行

  ```
  npm run serve
  ```

- #### 打包

  打包前请注意将`.env.production`的`VITE_BASE_PATH`修改为`/`

  ```
  npm run build
  ```

### 03. 关键技术点解析

1. 异步组件

   - 在加载手机窗口主体以及表情包组件时，由于相关代码加载静态文件，导致加载首页较慢，故引入异步组件。`src\App.vue`中示例：

   ```vue
   <template>
     <Suspense>
       <template #default>
         <WtContent />
       </template>
       <template #fallback>
         <div class="default-loading">
           <a-spin tip="加载中..."></a-spin>
         </div>
       </template>
     </Suspense>
   </template>
   <script setup>
   import { defineAsyncComponent } from "vue";
   // import WtContent from "@/components/WtContent.vue"
   const WtContent = defineAsyncComponent(() =>
     import("@/components/WtContent.vue")
   );
   </script>
   ```

2. 右键菜单

   - 为方便用户操作，在聊天内容中添加右键菜单的弹出
   - 首先添加右键菜单组件`src\components\common\ContextMenu.vue`
   - 在`src\store\modules\contextMenu.js`中定义`pinia`
   - 在`src\components\phone\PhoneBody.vue`中监听`contextmenu`事件，并在相应位置展示相应的菜单

3. 表情包

   - 表情包文件为`src\utils\emojiBase64.js`，里边都是base64格式的图片
   - 渲染在`src\components\common\Emoji.vue`组件中
   - 用户点击表情包，例如点击`微笑表情`会把相应的表情信息以`[微笑]`的格式添加到文本框中
   - 最后，当发送文本到文本框是，将`[微笑]`转义为对应的表情包图片`src\utils\utils.js`中的`renderText`方法
