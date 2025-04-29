<template>
  <button class="button">hover</button>
</template>

<style scoped>
.button {
  background-color: #d0d0d0;
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease-out 0.1s;
}
.button:hover {
  color: #fff;
  background-color: #3498db;
  transform: scale(1.05);
}
</style>