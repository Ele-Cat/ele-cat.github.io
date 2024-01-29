<template>
  <div class="scroll-container">
    <p>海客談瀛洲，煙濤微茫信難求</p>
    <p>越人語天姥，雲霞明滅或可覩</p>
    <p>天姥連天向天橫，勢拔五嶽掩赤城</p>
    <p>天台四萬八千丈，對此欲倒東南傾</p>
    <p>我欲因之夢吳越，一夜飛渡鏡湖月</p>
    <p>湖月照我影，送我至剡溪</p>
    <p>謝公宿處今尚在，淥水蕩漾清猨啼</p>
    <p>腳著謝公屐，身登青雲梯</p>
    <p>半壁見海日，空中聞天雞</p>
    <p>千巖萬轉路不定，迷花倚石忽已暝</p>
    <p>熊咆龍吟殷巖泉，慄深林兮驚層巔</p>
    <p>雲青青兮欲雨，水澹澹兮生煙</p>
    <p>列缺霹靂，丘巒崩摧</p>
    <p>洞天石扉，訇然中開</p>
    <p>青冥浩蕩不見底，日月照耀金銀臺</p>
    <p>霓爲衣兮風爲馬，雲之君兮紛紛而來下</p>
    <p>虎鼓瑟兮鸞迴車，仙之人兮列如麻</p>
    <p>忽魂悸以魄動，怳驚起而長嗟</p>
    <p>惟覺時之枕席，失向來之煙霞</p>
    <p>世間行樂亦如此，古來萬事東流水</p>
    <p>別君去兮何時還？且放白鹿青崖間，須行即騎訪名山</p>
    <p>安能摧眉折腰事權貴，使我不得開心顏</p>
  </div>
</template>

<style lang="scss">
.scroll-container {
  height: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-corner, &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background: rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    border-radius: 10px;
    background: rgb(95, 96, 98);
  }
}
</style>