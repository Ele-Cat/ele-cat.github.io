// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';

import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import { Tooltip, message } from 'ant-design-vue';
import './styles/index.scss';
import 'ant-design-vue/dist/reset.css';

import VPDemo from './components/vp-demo/index.vue'
import VPExample from './components/vp-demo/example.vue'
import Comment from './components/Comment.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.use(Tooltip)
    app.config.globalProperties.$message = message

    app.component('Demo', VPDemo)
    app.component('Example', VPExample)
    app.component('Comment', Comment)
  },
  setup() {
    const route = useRoute();
    let zoom
    const initZoom = () => {
      zoom && zoom.detach()
      zoom = mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg-opacity)' })
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};