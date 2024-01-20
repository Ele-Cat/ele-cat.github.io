<template>
  <div class="comments">
    <!-- <h3 id="评论" tabindex="-1">
      评论
      <a class="header-anchor" href="#评论" aria-hidden="true"></a>
    </h3> -->
    <Giscus v-if="showComment" :repo="giscusConfig.repo" :repo-id="giscusConfig.repoId" :category="giscusConfig.category"
      :category-id="giscusConfig.categoryId" :mapping="giscusConfig.mapping"
      :reactions-enabled="giscusConfig.reactionsEnabled" :emit-metadata="giscusConfig.emitMetadata"
      :input-position="giscusConfig.inputPosition" :theme="isDark ? 'dark' : 'light'" :lang="giscusConfig.lang"
      :loading="giscusConfig.loading" />
  </div>
</template>
<script setup>
import { reactive, ref, watch, nextTick } from "vue";
import { useData, useRoute } from "vitepress";
import Giscus from '@giscus/vue'

const route = useRoute();

const { isDark } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig = reactive({
  repo: "Ele-Cat/Ele-Cat",
  repoId: "MDEwOlJlcG9zaXRvcnkzNDE0NDYyMjI=",
  category: "Announcements",
  categoryId: "DIC_kwDOFFoOTs4CcXuJ",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  // theme: isDark.value ? "dark" : "light", // 需要写在页面里面才会有响应式
  lang: "zh-CN",
  loading: "lazy",
});

const showComment = ref(true);
watch(() => route.path, () => {
    showComment.value = false;
    nextTick(() => {
      showComment.value = true;
    })
  }, {
    immediate: true,
  }
);

</script>
<style lang="scss">
.comments {
  padding: 32px 0 12px;
  border-radius: 10px;
}
</style>