<template>
  <div class="container1">
    <h2>
      作者：周杰伦
      <a href="javascript:;" @click="followFn">{{
        loading ? "请求中..." : "关注"
      }}</a>
    </h2>
    <hr />
    <Son />
  </div>
</template>
<script>
import Son from "./16-son.vue";
import { followMixin } from "./16-followMixin";
export default {
  name: "App",
  components: {
    Son,
  },
  mixins: [followMixin],
};
</script>