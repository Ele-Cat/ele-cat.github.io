// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';
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
};