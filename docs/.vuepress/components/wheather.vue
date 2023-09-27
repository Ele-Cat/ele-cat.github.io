<template>
  <div class="weather">
    <div id="he-plugin-simple"></div>
  </div>
</template>

<script>

export default {
  name: 'Wheather',
  props: {
    padding: {
      type: String,
      default: '10px'
    },
  },
  mounted() {
    this.weather();
  },
  methods: {
    // 获取天气
    weather() {
      // 到和风天气官网设计和下载 https://widget.qweather.com/
      window.WIDGET = {
        "CONFIG": {
          "modules": "01234",
          "background": "1",
          "tmpColor": "FFFFFF",
          "tmpSize": "16",
          "cityColor": "FFFFFF",
          "citySize": "16",
          "aqiColor": "FFFFFF",
          "aqiSize": "16",
          "weatherIconSize": "24",
          "alertIconSize": "18",
          "padding": this.padding,
          "shadow": "0",
          "language": "auto",
          "fixed": "false",
          "vertical": "top",
          "horizontal": "left",
          "key": "837b810600fb46d481bc6b12dc6120b8"
        }
      }
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0';
      document.getElementsByTagName('head')[0].appendChild(script);
    },
  }
};
</script>

<style lang="scss">
</style>