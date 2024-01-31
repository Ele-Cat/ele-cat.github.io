<template>
  <div class="wrapper">
    <div class="box header">Header</div>
    <div class="box side-bar">Sidebar</div>
    <div class="box content">Content</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  margin: 50px;
  grid-gap: 10px;
  grid-template-columns: 120px 120px 120px;
  grid-template-areas:
    ". header header"
    "side-bar content content";
  background-color: #fff;
  color: #444;
}

.box {
  background-color: var(--c-red);
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.header {
  background-color: var(--c-orange);
  grid-area: header;
}

.side-bar {
  grid-area: side-bar;
}

.content {
  grid-area: content;
}
</style>