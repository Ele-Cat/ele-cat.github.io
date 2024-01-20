<template>
  <ClientOnly>
    <div class="example-demo">
      <div class="code-title" v-html="decodedDescription"></div>
      <div class="example">
        <Example :path="path" />
        <div class="op-btns">
          <a-tooltip title="复制代码">
            <div class="op-btn" @click="copyCode">
              <svg data-v-3918b681="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z">
                </path>
              </svg>
            </div>
          </a-tooltip>
          <a-tooltip :title="sourceVisible ? '收起代码' : '显示代码'">
            <div class="op-btn" @click="toggleSourceVisible()">
              <svg data-v-3918b681="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z">
                </path>
              </svg>
            </div>
          </a-tooltip>
        </div>
        <ElCollapseTransition>
          <SourceCode v-show="sourceVisible" :source="source" />
        </ElCollapseTransition>
        <Transition name="el-fade-in-linear">
          <div v-show="sourceVisible" class="example-float-control" @click="toggleSourceVisible(false)">
            <svg class="icon" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218"><path d="M512 320c-8.288 0-15.776 3.232-21.456 8.4l-0.064-0.08-352 320 0.08 0.08C132.112 654.256 128 662.608 128 672a32 32 0 0 0 32 32c8.288 0 15.76-3.232 21.456-8.4l0.08 0.08L512 395.248 842.464 695.68l0.08-0.08A31.776 31.776 0 0 0 864 704a32 32 0 0 0 32-32c0-9.376-4.112-17.744-10.544-23.6l0.08-0.08-352-320-0.08 0.08c-5.68-5.168-13.168-8.4-21.456-8.4z" p-id="4219"></path></svg>
            <span>收起代码</span>
          </div>
        </Transition>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import { message } from 'ant-design-vue';
import { useClipboard, useToggle } from '@vueuse/core'

import Example from './vp-example.vue'
import SourceCode from './vp-source-code.vue'

const props = defineProps({
  rawSource: String, // 源码
  source: String,
  path: String,
  description: String
})

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description)
)

const copyCode = async () => {
  if (!isSupported) {
    message.error('复制失败')
  }
  try {
    await copy()
    message.success('已复制')
  } catch (e) {
    message.error(e.message)
  }
}
</script>

<style lang="scss" scoped>
.code-title {
  font-size: 14px;
}
.example {
  border: 1px solid var(--vp-c-divider);
  // border-radius: 8px;

  .m-0 {
    margin: 0;
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-top: 1px solid var(--vp-c-divider);
    background-color: var(--vp-c-gray-soft);

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: var(--vp-c-brand-light);
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--vp-c-divider);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--vp-c-gray-1, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    .icon {
      fill: var(--vp-c-text-1);
    }

    &:hover {
      color: var(--vp-c-brand-light);
      .icon {
        fill: var(--vp-c-brand-light);
      }
    }
  }
}
</style>

<style lang="scss">
.example-demo {
  p {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    border: none;
  }
}
</style>