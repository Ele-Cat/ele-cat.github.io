# DI（依赖注入）的原理

## 一句话

DI = 你不自己 new 对象，**声明依赖**，框架自动创建并注入进来。Angular 的 DI 是一个独立的、层次化的容器系统。

## 基本用法

```ts
// 定义服务——注册到根注入器
@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos = signal<Todo[]>([])
}

// 注入使用
@Component({...})
export class AppComponent {
  private todoService = inject(TodoService) // 直接声明，不用 new
}
```

## DI 树

```
root 注入器
  └─ TodoService（单例）
      └─ AppComponent
          ├─ inject(TodoService) → 从 root 获取
          └─ ChildComponent
             └─ inject(TodoService) → 也是同一个实例
```

每个组件可以声明自己的 providers，子组件优先使用最近的提供者。比 React 的 Context 链更灵活——可以 **按需覆盖**。

## vs React / Vue

| | Angular | React | Vue3 |
|--|---------|-------|------|
| DI 机制 | 内置容器，层次化 | 无，手动 props | provide/inject |
| 服务实例 | 单例（root 级） | 无 | 同（provide/inject 树） |
| 生命周期 | 组件树绑定 | Hooks | 组合式 API |

React/Vue 传递"服务"的本质是 **手动传递引用**。Angular 的 DI 是一个独立容器层，组件只需要声明依赖的类型。

## 面试追问

**Q: @Injectable 的 providedIn 有哪些选项？**
- `'root'` — 应用级单例（最常用）
- `'platform'` — 跨应用共享（多个 Angular 应用共享实例）
- `null` — 必须手动添加到 providers 数组，靠 NgModule 或组件声明

**Q: DI 和多级注入有什么关系？**
组件可以覆盖祖先的 provider，创建子树专用的服务实例。React Context 也能做到，但 Angular 的类型安全和自动注入更方便。
