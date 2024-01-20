export const followMixin = {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    followFn() {
      this.loading = true;
      // 模拟请求
      setTimeout(() => {
        // 省略请求代码
        this.loading = false;
      }, 2000);
    },
  },
};
