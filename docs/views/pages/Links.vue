<template>
  <div class="padding">
    <a-input-group compact>
      <a-input v-model:value="searchContent" placeholder="请输入搜索内容" style="width: calc(100% - 64px)" @pressEnter="search">
        <template #addonBefore>
          <a-select v-model:value="searchBefore" style="width: 120px">
            <a-select-option value="https://www.baidu.com">百度</a-select-option>
            <a-select-option value="https://www.google.com">谷歌</a-select-option>
            <a-select-option value="https://cn.bing.com">必应</a-select-option>
            <a-select-option value="https://juejin.cn">掘金</a-select-option>
            <a-select-option value="https://zzk.cnblogs.com">博客园</a-select-option>
            <a-select-option value="https://github.com">GitHub</a-select-option>
            <a-select-option value="https://search.gitee.com">Gitee</a-select-option>
            <a-select-option value="https://www.zhihu.com">知乎</a-select-option>
          </a-select>
        </template>
        <template #addonAfter v-if="searchBefore == 'https://www.baidu.com'">
          <a-select v-model:value="searchAfter" style="width: 120px">
            <a-select-option value="">不屏蔽</a-select-option>
            <a-select-option value="-csdn">屏蔽CSDN</a-select-option>
          </a-select>
        </template>
      </a-input>
      <a-button type="primary" @click="search">搜索</a-button>
    </a-input-group>
    
    <div class="guide margin-top">
      <div class="margin-bottom flex justify-between">
        <div>
          打开方式：
          <a-radio-group v-model:value="openType" button-style="solid" size="small">
            <a-radio-button :value="true">新页签</a-radio-button>
            <a-radio-button :value="false">本页签</a-radio-button>
          </a-radio-group>
        </div>
        <div v-if="!openType">
          <a-button type="primary" size="small" :disabled="!iframeSrc" @click="openInNewTab">新页签打开</a-button>
        </div>
        <!-- <a-switch v-model:checked="openType" checked-children="新页签" un-checked-children="本页签" /> -->
      </div>
      <a-row :gutter="20">
        <a-col :span="openType ? 24 : 6">
          <div :class="[!openType ? 'scroll-box' : '']">
            <div v-for="(item, index) in guideLinks" :key="index" class="margin-bottom">
              <a-card size="small">
                <template #title>
                  <span class="text-shadow -red text-bold">{{item.title}}</span>
                </template>
                <a-row :gutter="10">
                  <a-col :xs="24" :sm="!openType ? 24 : 8" :md="!openType ? 24 : 6" :lg="!openType ? 12 : 4" v-for="(sItem, sIndex) in item.children" :key="sIndex">
                    <a-tooltip placement="topLeft">
                      <template #title v-if="sItem.tip">{{sItem.tip}}</template>
                      <a @click="jump(sItem)" target="_blank" class="block href padding-sm text-shadow -blue">
                        <img :src="sItem.icon" v-if="sItem.icon" style="height:16px;">
                        <img :src="iconResolveUrl + resolveLink(sItem.link)" v-else style="height:16px;">
                        {{sItem.title}}
                      </a>
                    </a-tooltip>
                  </a-col>
                </a-row>
              </a-card>
            </div>
          </div>
        </a-col>
        <a-col :span="openType ? 0 : 18">
          <span v-if="!iframeSrc">点击左侧导航即可在此处预览，<span class="bg-yellow padding-lr-xs">部分网址不支持iframe，请使用新页签打开</span></span>
          <div v-else id="iframe-box">
            <iframe style="height:calc(100vh - 11.2rem)" :src="iframeSrc" onError="alert('ss')"></iframe>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import guideLinks from '../../.vuepress/assets/guideLinks'
import { ref } from 'vue'

export default {
  setup() {
    const searchContent = ref<string>('')
    const searchBefore = ref<string>('https://www.baidu.com')
    const searchAfter = ref<string>('-csdn')

    const iconResolveUrl = 'https://icon.7udh.com/'
    // const iconResolveUrl = 'https://ico.hnysnet.com/get.php?url='
    // const iconResolveUrl = 'https://imgapi.cn/ico.php?url='
    

    const search = () => {
      console.log(searchContent)
      console.log(searchBefore)
      console.log(searchAfter)
      if (!searchContent) {
        window.open(searchBefore.value, "_blank"); 
      } else {
        let searchQuery = '/s?wd='
        if (['https://www.google.com', 'https://cn.bing.com', 'https://github.com', 'https://www.zhihu.com'].indexOf(searchBefore.value) >= 0) {
          searchQuery = '/search?q='
        } else if (['https://juejin.cn'].indexOf(searchBefore.value) >= 0) {
          searchQuery = '/search?query='
        } else if (['https://zzk.cnblogs.com'].indexOf(searchBefore.value) >= 0) {
          searchQuery = '/s?w='
        } else if (['https://search.gitee.com'].indexOf(searchBefore.value) >= 0) {
          searchQuery = '/?q='
        }
        if (searchBefore.value == 'https://www.baidu.com') {
          window.open(`${searchBefore.value}${searchQuery}${searchContent.value} ${searchAfter.value}`, "_blank"); 
        } else {
          window.open(`${searchBefore.value}${searchQuery}${searchContent.value}`, "_blank"); 
        }
      }
    }

    const openType = ref<boolean>(true)
    const iframeSrc = ref<string>('')

    const jump = (e) => {
      if (!openType.value) {
        iframeSrc.value = e.link
        document.body.scrollTop = document.documentElement.scrollTop = 0
      } else {
        window.open(e.link, "_blank"); 
      }
    }

    const openInNewTab = () => {
      window.open(iframeSrc.value, "_blank"); 
    }

    const resolveLink = (link) => {
      let returnLink = link.replace("https://","").replace("http://","").split('/')[0] + '.png'
      return returnLink
    }

    return {
      searchContent,
      searchBefore,
      searchAfter,
      search,
      openType,
      iframeSrc,
      jump,
      openInNewTab,
      iconResolveUrl,
      resolveLink,
    }
  },
  data() {
    return {
      guideLinks
    }
  },
};
</script>

<style lang="scss">
.ant-card {
  background-color: var(--c-bg);
  transition: background-color var(--t-color);
  .ant-card-head {
    color: var(--c-text);
  }
  .href {
    color: var(--c-text);
    &:hover {
      background-color: rgb(235, 243, 255);
    }
    img {
      position: relative;
      top: -1px;
    }
  }
}
html.dark {
  .bg-grey {
    background-color: var(--c-bg);
    transition: background-color var(--t-color);
  }
}
.scroll-box {
  height: calc(100vh - 11.2rem);
  overflow-y: scroll;
}
</style>