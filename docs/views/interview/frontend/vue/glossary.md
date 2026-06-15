# Vue3 术语速查

| 术语 | 一句话 |
|------|--------|
| **Proxy** | ES6 内置，Vue3 用它代理整个对象，替代 defineProperty |
| **ref** | 包装基本类型为响应式对象，模板自动解包 |
| **reactive** | 直接代理对象，深层响应 |
| **computed** | 派生新值，懒计算 + 缓存 |
| **watch** | 监听响应式源变化，可拿到 oldValue |
| **watchEffect** | 自动追踪内部依赖，立即执行 |
| **Composition API** | 用 ref/computed/watch 组合逻辑，取代 Options API |
| **Options API** | Vue2 风格，data/computed/methods 分开写 |
| **SFC** | .vue 单文件组件 |
| **Vapor Mode** | 无虚拟 DOM，编译器直接生成 DOM 更新代码 |
| **PatchFlags** | 编译时标记动态节点，diff 只检查有 flag 的部分 |
| **Block Tree** | 区块树，只追踪动态节点 |
| **Static Hoisting** | 静态节点提到 render 外面，只创建一次 |
| **Template Compilation** | 模板编译为渲染函数 |
| **Effect System** | track 收集依赖，trigger 触发更新 |
| **script setup** | 语法糖，顶层变量直接在模板用 |
| **defineProps** | 定义 props，支持 TS 泛型 |
| **defineEmits** | 定义事件，支持 TS 约束 |
| **defineModel** | v-model 语法糖，展开为 prop + emit |
| **v-model** | 双向绑定指令 |
| **v-for** | 列表渲染 |
| **v-if / v-show** | 条件渲染——v-if 增删 DOM，v-show 切换 display |
