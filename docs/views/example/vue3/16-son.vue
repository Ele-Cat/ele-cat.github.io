<template>
  <div class="container2">
    <h3>
      作者：周杰伦
      <button @click="followFn">{{ loading ? "loading..." : "关注" }}</button>
    </h3>
  </div>
</template>
<script>
import { followMixin } from "./16-followMixin";
export default {
  name: "Son",
  mixins: [followMixin],
};
</script>