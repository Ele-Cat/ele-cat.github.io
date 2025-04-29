<template>
  <div class="container">
    <div class="clip-triangle"></div>
  </div>
</template>

<style scoped>
.clip-triangle {
  width: 100px;
  height: 100px;
  background: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>