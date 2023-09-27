// 全局混入 全局mixin
// vue2.0 写法  Vue.mixin({})
app.mixin({
  methods: {
    say() {
      console.log(this.$el, "在mounted中调用say函数");
    },
  },
  mounted() {
    this.say();
  },
});
