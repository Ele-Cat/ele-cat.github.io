<template>
  <div class="container">
    <header>Header</header>
    <div class="main">
      <nav>Nav</nav>
      <article>Article</article>
      <aside>Aside</aside>
    </div>
    <footer>Footer</footer>
  </div>
</template>

<style scoped>
.container {
  height: 400px;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex: 1;
  background-color: #f0f0f0;
}
article {
  flex: 1;
}
header, footer {
  height: 60px;
  background-color: #e0e0e0; 
}
nav, aside {
  flex: 0 0 200px;
  background-color: #d0d0d0; 
}
</style>