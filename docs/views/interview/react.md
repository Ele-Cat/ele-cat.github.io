# React 面试题

## 1、什么是 JSX

JSX 是 JavaScript XML 的缩写，是一种 JavaScript 的语法扩展，主要用于 React 框架中描述用户界面。

### 1、JSX 的核心概念

1. **类似 HTML 的语法**：JSX 允许你在 JavaScript 代码中编写类似 HTML 的标记，使 UI 组件的结构更直观。

2. **不是字符串也不是 HTML**：JSX 最终会被编译为普通的 JavaScript 函数调用（通常是 `React.createElement()`）。

3. **表达式嵌入**：可以在 JSX 中使用花括号 `{}` 嵌入任何有效的 JavaScript 表达式。

```js
class MyComponent extends React.Component {
  render() {
    let props = this.props;
    return (
      <div className="my-component">
        <a href={props.url}>{props.name}</a>
      </div>
    );
  }
}
```

### 2、JSX 的特点

- **声明式**：描述 UI 应该是什么样子，而不是如何构建它
- **组件化**：可以创建可复用的 UI 组件
- **类型安全**：与 TypeScript 配合良好，提供更好的类型检查

### 3、JSX 编译示例

```jsx
// JSX 代码
const element = <h1 className="greeting">Hello, world!</h1>;

// 编译后的 JavaScript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### 4、JSX 的注意事项

1. **必须有一个根元素**：JSX 表达式必须有一个父元素，或者使用 Fragment (`<></>`)

2. **属性命名**：使用 camelCase 命名属性（如 `className` 而不是 `class`）

3. **闭合标签**：所有标签必须显式闭合（如 `<img />`）

4. **防止注入攻击**：React DOM 在渲染前会转义 JSX 中的值，防止 XSS 攻击

JSX 使 React 组件的编写更加直观和高效，是 React 开发中的核心概念之一。

## 2、React 的生命周期方法

React 组件的生命周期可以分为三个主要阶段：**挂载阶段（Mounting）**、**更新阶段（Updating）** 和 **卸载阶段（Unmounting）**。以下是类组件的主要生命周期方法：

### 1、 挂载阶段（Mounting）

- **`constructor(props)`**  
  组件初始化时调用，用于设置初始 state 和绑定方法

- **`static getDerivedStateFromProps(props, state)`**  
  在渲染前调用，用于 state 依赖于 props 的情况

- **`render()`**  
  必须实现的方法，返回 JSX 或 null

- **`componentDidMount()`**  
  组件挂载到 DOM 后调用，适合进行网络请求、DOM 操作等

### 2、 更新阶段（Updating）

- **`static getDerivedStateFromProps(props, state)`**  
  在 props 或 state 变化时调用

- **`shouldComponentUpdate(nextProps, nextState)`**  
  决定组件是否需要重新渲染，可用于性能优化

- **`render()`**  
  重新渲染组件

- **`getSnapshotBeforeUpdate(prevProps, prevState)`**  
  在 DOM 更新前调用，可以获取 DOM 更新前的信息

- **`componentDidUpdate(prevProps, prevState, snapshot)`**  
  组件更新后调用，适合进行 DOM 操作或网络请求

### 3、 卸载阶段（Unmounting)

- **`componentWillUnmount()`**  
  组件卸载前调用，用于清理定时器、取消网络请求等

### 4、 错误处理

- **`static getDerivedStateFromError(error)`**  
  子组件抛出错误时调用，用于渲染备用 UI

- **`componentDidCatch(error, info)`**  
  子组件抛出错误时调用，用于记录错误信息

### 生命周期图示

```
Mounting:
constructor → getDerivedStateFromProps → render → componentDidMount

Updating:
getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate

Unmounting:
componentWillUnmount
```

> **注意**：React 16.3+ 引入了一些新的生命周期方法，并标记了一些旧方法为不推荐使用（如 `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate`）。在函数式组件中，可以使用 `useEffect` Hook 来模拟生命周期行为。

## 3、React Hooks 详解

Hooks 是 React 16.8 引入的重大特性，它允许你在函数组件中使用 state 和其他 React 特性，而无需编写 class。

### 核心 Hooks

#### 1. useState
用于在函数组件中添加局部 state。

```jsx
const [state, setState] = useState(initialState);
```

**特点**：
- 返回当前 state 和更新 state 的函数
- 初始 state 只在第一次渲染时使用
- 可以多次调用 useState 来声明多个 state 变量

#### 2. useEffect
用于处理副作用操作（数据获取、订阅、手动修改 DOM 等）。

```jsx
useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理函数（可选）
  };
}, [dependencies]); // 依赖数组
```

**执行时机**：
- 无依赖数组：每次渲染后都执行
- 空依赖数组 `[]`：仅在组件挂载和卸载时执行
- 有依赖项：依赖项变化时执行

#### 3. useContext
用于订阅 React 的 Context 对象。

```jsx
const value = useContext(MyContext);
```

### 额外 Hooks

### 4. useReducer
useState 的替代方案，适合复杂 state 逻辑。

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

#### 5. useCallback
返回一个 memoized 回调函数。

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // 依赖项
);
```

#### 6. useMemo
返回一个 memoized 值。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### 7. useRef
返回一个可变的 ref 对象。

```jsx
const refContainer = useRef(initialValue);
```

**用途**：
- 访问 DOM 节点
- 保存可变值（不会触发重新渲染）

#### 8. useImperativeHandle
自定义暴露给父组件的实例值。

```jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  }
}));
```

#### 9. useLayoutEffect
与 useEffect 相同，但在所有 DOM 变更后同步触发。

#### 10. useDebugValue
用于在 React 开发者工具中显示自定义 hook 的标签。

### Hooks 规则

1. **只在最顶层调用 Hook**：不要在循环、条件或嵌套函数中调用 Hook
2. **只在 React 函数组件或自定义 Hook 中调用 Hook**

### 自定义 Hook

通过组合现有 Hook 可以创建自定义 Hook，用于共享组件间的状态逻辑。

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // 订阅好友状态
    return () => {
      // 取消订阅
    };
  }, [friendID]);

  return isOnline;
}
```

### Hooks 优势

1. **简化组件逻辑**：解决了 class 组件中生命周期函数经常包含不相关的逻辑的问题
2. **复用状态逻辑**：无需修改组件结构就能复用状态逻辑
3. **更直观的代码**：避免了 class 中的 this 绑定问题
4. **更小的打包体积**：函数组件比 class 组件更轻量

Hooks 代表了 React 的未来发展方向，官方推荐在新代码中使用函数组件和 Hooks。

## 4、React和Vue.js的相似性和差异性是什么

# React 和 Vue.js 的相似性与差异性

### 相似性

1. **组件化开发**：两者都采用组件化架构，支持构建可复用的 UI 组件
2. **虚拟 DOM**：都使用虚拟 DOM 来提高渲染性能
3. **响应式数据**：都实现了数据驱动视图的响应式更新机制
4. **生态系统**：都有丰富的生态系统和社区支持
5. **单文件组件**：都支持将模板、逻辑和样式放在一个文件中（React 的 JSX 和 Vue 的 .vue 文件）
6. **CLI 工具**：都有官方脚手架工具（create-react-app 和 vue-cli）

### 差异性

#### 1. 设计理念

- **React**：专注于 UI 渲染的库，主张"单向数据流"，其他功能通过生态系统扩展
- **Vue**：渐进式框架，提供更多开箱即用的功能（如路由、状态管理等）

#### 2. 模板 vs JSX

- **React**：使用 JSX（JavaScript XML），将 HTML 和 JavaScript 混合编写
  ```jsx
  function Greeting() {
    return <h1>Hello, {name}!</h1>;
  }
  ```

- **Vue**：主要使用基于 HTML 的模板语法，也支持 JSX
  ```html
  <template>
    <h1>Hello, {{ name }}!</h1>
  </template>
  ```

#### 3. 数据绑定

- **React**：单向数据绑定，通过 setState 或 useState 显式更新状态
  ```jsx
  const [name, setName] = useState('World');
  <input value={name} onChange={(e) => setName(e.target.value)} />
  ```

- **Vue**：双向数据绑定（v-model 指令）
  ```html
  <input v-model="name" />
  ```

#### 4. 状态管理

- **React**：需要第三方库（如 Redux、MobX）或 Context API + useReducer
- **Vue**：内置 Vuex（官方状态管理库），Vue 3 引入了 Composition API 的响应式系统

#### 5. 样式处理

- **React**：通常使用 CSS-in-JS 方案（如 styled-components）或 CSS Modules
- **Vue**：原生支持 scoped CSS 和 CSS Modules

#### 6. 学习曲线

- **React**：概念较少但需要理解 JavaScript 较深（如 this 绑定、Hooks 规则）
- **Vue**：API 较多但模板语法对新手更友好

#### 7. 性能优化

- **React**：手动优化（React.memo、useMemo、useCallback）
- **Vue**：自动追踪依赖关系，组件级响应式更新

#### 8. 最新特性对比

| 特性         | React (18+)              | Vue (3.x)                |
|-------------|-------------------------|-------------------------|
| 组合式 API    | Hooks                  | Composition API        |
| 异步渲染      | Concurrent Mode        | Suspense               |
| 全局状态      | Context API            | provide/inject         |
| 代码分割      | React.lazy            | defineAsyncComponent   |

## 5、React 的核心功能

React 是一个用于构建用户界面的 JavaScript 库，主要提供以下核心功能：

### 1、 声明式 UI 开发
- **描述 UI 应该是什么样子**，而不是如何实现（imperative）
- 通过 JSX 语法直观地描述界面结构
- 数据变化时自动高效更新 DOM

```jsx
// 声明式示例
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 2、 组件化架构
- **可复用组件**：将 UI 拆分为独立、可复用的组件
- **组合模式**：通过组件嵌套构建复杂界面
- **隔离性**：每个组件管理自己的状态和逻辑

```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

### 3、 虚拟 DOM (Virtual DOM)
- **高效渲染**：通过虚拟 DOM 最小化实际 DOM 操作
- **差异算法 (Diffing Algorithm)**：智能计算最小更新集
- **批量更新**：合并多个状态更新为单次渲染

### 4、 单向数据流
- **自上而下的数据流**：父组件通过 props 向子组件传递数据
- **状态提升**：共享状态提升到最近的共同祖先组件
- **明确的数据流向**：使应用行为更可预测

### 5、 状态管理
- **组件状态 (useState/this.state)**：管理组件内部状态
- **Context API**：跨组件层级共享数据
- **与 Redux/MobX 集成**：支持复杂状态管理方案

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}
```

### 6、 副作用处理 (Effects)
- **useEffect Hook**：处理数据获取、订阅等副作用
- **生命周期控制**：替代类组件的生命周期方法
- **清理机制**：防止内存泄漏

```jsx
useEffect(() => {
  const subscription = dataSource.subscribe();
  return () => subscription.unsubscribe(); // 清理函数
}, []);
```

### 7、 跨平台能力
- **React DOM**：用于 Web 开发
- **React Native**：构建原生移动应用
- **React 360**：VR/AR 应用开发
- **Electron 集成**：开发桌面应用

### 8、 丰富的生态系统
- **路由**：React Router
- **状态管理**：Redux, MobX, Recoil
- **UI 库**：Material-UI, Ant Design
- **服务端渲染**：Next.js
- **静态站点**：Gatsby

### 9、 性能优化工具
- **React.memo**：组件记忆化
- **useMemo/useCallback**：值/函数记忆化
- **Profiler API**：性能检测
- **并发模式 (Concurrent Mode)**：非阻塞渲染

### 10、 类型支持
- **PropTypes**：运行时类型检查
- **TypeScript 集成**：优秀的类型支持
- **Flow 支持**：Facebook 的类型检查器

React 的核心设计目标是让开发者能够高效地构建可维护的大型应用，其功能设计始终围绕"组件化"和"声明式"这两个核心理念展开。通过虚拟 DOM 和高效的差异算法，React 在保持开发体验的同时提供了优秀的性能表现。

## 6、如何理解React State不可变性原则

React 中的状态不可变性(Immutability)是一个核心概念，指的是不应该直接修改 state 的值，而是应该创建新的对象或数组来替换旧的状态。

### 1、为什么需要保持 State 不可变？

1. **性能优化**：
   - React 使用浅比较(shallow comparison)来检测状态变化
   - 直接修改现有对象会导致引用不变，React 无法检测到变化
   - 不可变更新确保每次状态变化都生成新引用

2. **可预测性**：
   - 保持状态不可变使应用行为更可预测
   - 避免共享引用导致的意外副作用

3. **时间旅行调试**：
   - 支持保存和恢复历史状态
   - 是 Redux 等状态管理库的基础

### 2、不可变更新的正确方式

#### 1. 基本类型（无需特殊处理）
```jsx
const [count, setCount] = useState(0);
// 正确
setCount(count + 1); 
// 错误
count += 1; // 直接修改
```

#### 2. 对象
```jsx
const [user, setUser] = useState({ name: 'Alice', age: 25 });

// 正确 - 创建新对象
setUser({ ...user, age: 26 });

// 错误 - 直接修改
user.age = 26;
setUser(user); // 不会触发重新渲染
```

#### 3. 数组
```jsx
const [items, setItems] = useState(['a', 'b', 'c']);

// 添加元素 - 正确
setItems([...items, 'd']);

// 删除元素 - 正确
setItems(items.filter(item => item !== 'b'));

// 更新元素 - 正确
setItems(items.map(item => 
  item === 'a' ? 'A' : item
));

// 错误 - 直接修改
items.push('d'); // 不会触发重新渲染
```

### 3、深层嵌套结构的更新

对于复杂状态，可以使用以下方法：

1. **展开运算符 + 手动合并**：
```jsx
setUser({
  ...user,
  profile: {
    ...user.profile,
    address: 'New Address'
  }
});
```

2. **使用 Immer 等库**：
```jsx
import produce from 'immer';

setUser(produce(user, draft => {
  draft.profile.address = 'New Address'; 
  // Immer 会帮你处理不可变更新
}));
```

3. **结构化工具函数**：
```jsx
function updateNestedState(state, path, value) {
  return {
    ...state,
    [path]: {
      ...state[path],
      ...value
    }
  };
}
```

### 4、React 如何检测状态变化？

React 使用 `Object.is` 比较算法进行浅比较：

```javascript
// 伪代码
function shouldUpdate(prevState, nextState) {
  return !Object.is(prevState, nextState);
}
```

直接修改现有对象会导致：
```javascript
const obj = { a: 1 };
const newObj = obj;
newObj.a = 2;

Object.is(obj, newObj); // true - React 认为没有变化
```

### 5、性能考虑

1. **避免过度创建新对象**：
   - 对于大型对象/数组，创建副本可能有性能开销
   - 在性能关键路径考虑使用 Immutable.js 等专门库

2. **useState vs useReducer**：
   - 复杂状态逻辑更适合使用 useReducer
   - Reducer 天然适合不可变更新模式

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

### 6、常见误区

1. **认为 const 保证不可变性**：
   ```javascript
   const obj = { a: 1 };
   obj.a = 2; // 合法 - const 只防止重新赋值，不防止属性修改
   ```

2. **错误使用数组方法**：
   ```javascript
   // 这些方法会修改原数组：
   push, pop, shift, unshift, splice, sort, reverse
   
   // 这些方法返回新数组：
   concat, filter, map, slice
   ```

3. **深度克隆不必要**：
   ```javascript
   // 不推荐 - 深度克隆成本高且不必要
   JSON.parse(JSON.stringify(state))
   ```

保持 state 不可变是 React 高效工作的基础，遵循这一原则可以避免许多难以追踪的 bug，并使你的应用更容易维护和优化。

## 7、React的特点和关键版本区别

### 1、React 的核心特点

1. **声明式编程**：
   - 开发者只需描述 UI 应该是什么样子
   - React 负责处理 DOM 更新

2. **组件化架构**：
   - 构建可复用、独立的 UI 组件
   - 组合式开发模式

3. **虚拟 DOM**：
   - 内存中的轻量级 DOM 表示
   - 高效的差异算法 (diffing algorithm)

4. **单向数据流**：
   - 数据自上而下通过 props 传递
   - 状态提升机制

5. **跨平台能力**：
   - React DOM (Web)
   - React Native (移动端)
   - React 360 (VR)

6. **丰富的生态系统**：
   - 官方支持的路由、状态管理方案
   - 庞大的第三方库生态

### 2、React 关键版本演进与区别

#### 1. React 14 (2015)
- **分离 React 和 React DOM**
- **引入无状态函数组件**
- **支持 refs 回调**

#### 2. React 15 (2016)
- **重写核心算法** (Stack Reconciler)
- **改进错误处理** (更清晰的错误消息)
- **支持自定义 DOM 属性**

#### 3. React 16 (2017) - "Fiber" 架构
- **完全重写核心架构** (Fiber Reconciler)
- **新增特性**：
  - Fragments (<> </>)
  - Error Boundaries
  - Portals
  - 自定义 DOM 属性
  - 改进的服务器端渲染
- **性能大幅提升**
- **减小包体积**

#### 4. React 16.3 (2018)
- **新的生命周期方法**：
  - `getDerivedStateFromProps`
  - `getSnapshotBeforeUpdate`
- **正式引入 Context API**
- **创建 Refs 的新方式** (`React.createRef`)

#### 5. React 16.8 (2019) - Hooks 革命
- **引入 Hooks**：
  - `useState`, `useEffect` 等
  - 允许函数组件使用状态和生命周期
- **新增 Hook 规则**：
  - 只能在函数组件顶层调用
  - 不能在条件或循环中使用

#### 6. React 17 (2020) - "过渡版本"
- **无新特性**，专注升级平滑性
- **新的 JSX 转换** (无需显式导入 React)
- **事件委托变更** (不再附加到 document)
- **为未来版本铺路**

#### 7. React 18 (2022) - 并发特性
- **自动批处理** (Automatic Batching)
- **并发渲染** (Concurrent Rendering)
- **新 API**：
  - `startTransition`
  - `useId`
  - `useSyncExternalStore`
  - `useInsertionEffect`
- **改进的 Suspense**：
  - 支持服务器端渲染
  - 更好的加载状态处理

### 3、版本对比表

| 特性/版本 | 15及之前 | 16.x | 17 | 18 |
|-----------|---------|------|----|----|
| **架构** | Stack Reconciler | Fiber Reconciler | Fiber优化 | 并发模式 |
| **组件类型** | 主要是类组件 | 类组件+函数组件 | 函数组件兴起 | 函数组件主流 |
| **状态管理** | this.setState | Hooks引入 | Hooks成熟 | 并发安全Hooks |
| **生命周期** | 传统生命周期 | 新生命周期+废弃警告 | 逐步淘汰旧生命周期 | 专注Hooks |
| **SSR** | 基础支持 | 改进支持 | 稳定 | Suspense SSR |
| **性能** | 中等 | 显著提升 | 进一步优化 | 并发渲染优势 |

### 4、现代 React 开发趋势

1. **函数组件主导**：Hooks 已成为主流开发模式
2. **类组件逐步淘汰**：新项目很少使用类组件
3. **并发特性采用**：React 18 特性逐渐被采用
4. **服务器组件兴起**：Next.js 等框架推动的演进
5. **编译优化**：React Forget (未来自动记忆化)

React 的版本演进体现了从"视图库"到"全功能框架"的转变，每个主要版本都解决了特定问题并引入了新的开发范式。理解这些差异有助于选择适合项目需求的版本和开发方式。