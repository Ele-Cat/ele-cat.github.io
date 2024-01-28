// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';

import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import Antd from 'ant-design-vue';
import './styles/index.scss';
import 'ant-design-vue/dist/reset.css';

import VPDemo from './components/vp-demo/index.vue'
import VPExample from './components/vp-demo/example.vue'
import NavLinks from './components/NavLinks.vue'
import Comment from './components/Comment.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.use(Antd)

    app.component('Demo', VPDemo)
    app.component('Example', VPExample)
    app.component('NavLinks', NavLinks)
    app.component('Comment', Comment)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 
      // mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
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