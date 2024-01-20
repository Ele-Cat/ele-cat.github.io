<template>
  <div class="bg padding">
    <p data-text="Lorem ipsum dolor">Lorem ipsum dolor</p>
  </div>
</template>

<style lang="scss" scoped>
.padding {
  padding: 15px;
}
.bg {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    ellipse farthest-side at 40% 0%,
    #455a64 0%,
    #263238 60%,
    #1a2327 100%
  );
  display: flex;
}

p {
  position: relative;
  margin: auto;
  font-size: 40px;
  word-spacing: 0.2em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  color: transparent;
  background-color: #e8a95b;
  background-clip: text;
  -webkit-background-clip: text;
}

p::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 6rem,
    white 11rem,
    transparent 11.15rem,
    transparent 15rem,
    rgba(255, 255, 255, 0.3) 20rem,
    transparent 25rem,
    transparent 27rem,
    rgba(255, 255, 255, 0.6) 32rem,
    white 33rem,
    rgba(255, 255, 255, 0.3) 33.15rem,
    transparent 38rem,
    transparent 40rem,
    rgba(255, 255, 255, 0.3) 45rem,
    transparent 50rem,
    transparent 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 150% 100%;
  background-repeat: no-repeat;
  animation: shine 5s infinite linear;
}

@keyframes shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -190% 0;
  }
}
</style>
