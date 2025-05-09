<script setup>
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'


const props = defineProps({
  icon: "",
  title: "",
  desc: "",
  link: "",
})

const formatTitle = computed(() => {
  return props.title ? slugify(props.title) : '';
})

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})

const icoLink = 'https://ico.n3v.cn/get.php?url='
const realIcon = computed(() => {
  return `${icoLink}${props.link}`
})
</script>

<template>
  <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img :src="realIcon" :alt="title" onerror="this.parentElement.style.display='none'" />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc" :title="desc">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.m-nav-link {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  background-color: var(--vp-c-bg-elv);

  &:hover {
    background-color: var(--vp-c-green-soft);
    box-shadow: var(--vp-shadow-3);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 10px 12px 8px;
    height: 100%;
    color: var(--vp-c-text-1);

    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    font-size: 24px;
    background-color: var(--vp-c-mute);
    transition: background-color 0.25s;

    :deep(svg) {
      width: 24px;
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: 24px;
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 36px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: 8px 0 0;
    line-height: 20px;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    .box {
      padding: 8px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }

    .title {
      line-height: 40px;
      font-size: 14px;
    }
  }
}</style>
