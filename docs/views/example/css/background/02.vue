<template>
  <div class="flex align-center">
    <div class="progress-outer">
      <!--更好的扩展-->
      <div class="progress-enter">
        <div class="progress-bg" :style="{'width': percent + '%'}"></div>
      </div>
    </div>
    <a-input-number v-model:value="percent" :min="1" :max="100" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const percent = ref(60)
</script>


<style scoped>
.progress-outer {
  width: 100%;
  height: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin-right: 15px;
}
.progress-enter {
  height: inherit;
  background: rgba(180, 160, 120, 0.2);
}
.progress-bg {
  width: 60%;
  height: inherit;
  border-radius: 6px;
  background: repeating-linear-gradient(
    -45deg,
    #d9cfbb 25%,
    #c3b393 0,
    #c3b393 50%,
    #d9cfbb 0,
    #d9cfbb 75%,
    #c3b393 0
  );
  background-size: 16px 16px;
  animation: panoramic 20s linear infinite;
}
@keyframes panoramic {
  to {
    background-position: 200% 0;
  }
}
</style>