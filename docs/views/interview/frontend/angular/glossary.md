# Angular 术语速查

| 缩写/术语 | 全称 | 一句话 |
|-----------|------|--------|
| **DI** | Dependency Injection | 不自己 new 对象，声明依赖让框架注入 |
| **IoC** | Inversion of Control | 框架管生命周期 |
| **RxJS** | Reactive Extensions | Observable 处理异步事件流 |
| **Observable** | — | 随时间推送多个值的数据流 |
| **Signal** | — | 保存一个值，读时自动记依赖 |
| **computed** | — | 根据其他 signal 派生值 |
| **effect** | — | 监听 signal 变化自动执行 |
| **Zone.js** | — | 拦截异步 API 触发变更检测 |
| **Monkey-patch** | 猴子补丁 | 运行时替换原生方法 |
| **OnPush** | ChangeDetectionStrategy.OnPush | 输入属性引用变化才检查组件 |
| **Standalone** | 独立组件 | 不再需要 NgModule |
| **@for** | — | Angular 17 内置控制流，取代 *ngFor |
| **model** | — | 可写 signal + 自动展开为 input + output |
