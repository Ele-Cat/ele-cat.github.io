// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';

import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import {
  Button, Card, Carousel, Col, DatePicker, Form, FormItem,
  Input, InputNumber, Modal, Popover, Radio, RadioGroup,
  Row, Select, SelectOption, Slider, TabPane, Tabs, Textarea, Tooltip,
} from 'ant-design-vue';

import './styles/index.scss';

import VPDemo from './components/vp-demo/index.vue'
import VPExample from './components/vp-demo/example.vue'
import Comment from './components/Comment.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.use(Button).use(Card).use(Carousel).use(Col).use(DatePicker)
      .use(Form).use(FormItem).use(Input).use(InputNumber).use(Modal)
      .use(Popover).use(Radio).use(RadioGroup).use(Row).use(Select)
      .use(SelectOption).use(Slider).use(TabPane).use(Tabs).use(Textarea)
      .use(Tooltip)
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