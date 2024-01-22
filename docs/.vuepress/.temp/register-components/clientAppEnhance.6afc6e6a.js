import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("TestComponent", defineAsyncComponent(() => import("E:/demo/ele-cat/docs/.vuepress/components/TestComponent.vue"))),
  app.component("wheather", defineAsyncComponent(() => import("E:/demo/ele-cat/docs/.vuepress/components/wheather.vue")))
}
