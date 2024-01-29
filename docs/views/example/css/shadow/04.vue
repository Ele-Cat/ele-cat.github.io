<template>
  <div class="paper">
    <!-- <p>夜饮东坡醒复醉，归来仿佛三更</p>
    <p>家童鼻息已雷鸣</p>
    <p>敲门都不应，倚杖听江声</p>
    <p>长恨此身非我有，何时忘却营营</p>
    <p>夜阑风静縠纹平</p>
    <p>小舟从此逝，江海寄余生</p> -->

    <p>记承天寺夜游</p>
    <p>元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。</p>
    <p>念无与为乐者，遂至承天寺寻张怀民。</p>
    <p>怀民亦未寝，相与步于中庭。</p>
    <p>庭下如积水空明，水中藻、荇交横，盖竹柏影也。</p>
    <p>何夜无月？</p>
    <p>何处无竹柏？</p>
    <p>但少闲人如吾两人者耳。</p>
    <p class="end">丨丨苏轼</p>
  </div>
</template>

<style lang="scss" scoped>
.paper {
  width: 500px;
  height: 250px;
  position: relative;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #efefef;
  background-color: #FFFFFD;
  background-image: url(https://github.com/QiShaoXuan/css_tricks/blob/master/docs/.vuepress/public/images/paper.png);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
  writing-mode: tb-rl;

  &::before, &::after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 45%;
    height: 55%;
    max-height: 100px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: skew(-15deg) rotate(-4deg);
  }
  &::after {
    left: auto;
    right: 10px;
    transform: skew(15deg) rotate(4deg);
  }

  .end {
    float: right;
  }
}
</style>