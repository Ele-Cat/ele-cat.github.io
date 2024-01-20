<template>
  <div class="padding-bottom-lg">
    <div>Txt Shadow</div>
    <div class="left">TxT Long Shadow</div>
  </div>
</template>

<style lang="scss" scoped>
@function makelongrightshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 50 {
    $color: fade-out(desaturate($color, 1%), 0.02);
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }
  @return $val;
}

@function makelongleftshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 50 {
    $color: fade-out(desaturate($color, 1%), 0.02);
    $val: #{$val}, -#{$i}px #{$i}px #{$color};
  }
  @return $val;
}

div {
  text-align: center;
  font-size: 60px;
  line-height: 100px;
  text-shadow: makelongrightshadow(hsla(14, 100%, 30%, 1));
  color: hsl(14, 100%, 60%);
}

.left {
  text-shadow: makelongleftshadow(hsla(231, 50%, 30%, 1));
  color: hsl(231, 50%, 60%);
}

.padding-bottom-lg {
  padding-bottom: 30px;
}
</style>
