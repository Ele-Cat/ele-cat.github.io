# 跨平台面试题

## Q1: 跨平台方案对比

### 方案详细对比

| 方案 | 原理 | 渲染方式 | 性能 | 学习成本 | 包体积 | 适用场景 |
|------|------|---------|------|---------|--------|---------|
| **React Native** | JS 桥接原生组件 | 原生组件映射 | 中 | 中 | 中等 | 跨端 App |
| **Flutter** | Skia 自绘引擎 | GPU 自绘 | 高 | 中 | 较大 | 跨端 App |
| **Taro** | 编译到多端 | 各平台原生 | 中 | 低 | 较小 | 小程序 + H5 |
| **uni-app** | Vue 编译到多端 | 各平台原生 | 中 | 低 | 较小 | 小程序 + H5 |
| **Ionic** | WebView 壳 | Web 渲染 | 低 | 低 | 较小 | 简单 App |
| **Kotlin Multiplatform** | 共享业务逻辑 | 原生 UI | 高 | 高 | 小 | 原生 App 团队 |

### 各方案代码示例

```tsx
// React Native — 声明式 UI，JS 驱动原生
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(c => c + 1)} />
    </View>
  );
};
```

```dart
// Flutter — 组件即代码，一切皆 Widget
class App extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Hello Flutter'),
        ),
      ),
    );
  }
}
```

```vue
<!-- uni-app — 写一次，多端运行 -->
<template>
  <view>
    <text>&#123;&#123; count &#125;&#125;</text>
    <button @click="add">+</button>
  </view>
</template>
```

### 核心区别

- **React Native / Flutter**：跨端 App 的主力方案，RN 复用 React 生态，Flutter 性能更优但 Dart 语言门槛存在
- **Taro / uni-app**：面向小程序生态，编译到多端平台，适合以小程序为主的业务
- **Ionic**：本质是 WebView 中的 SPA，性能受限但开发最快
- **KMP**：不共享 UI，只共享业务逻辑层，适合已有原生项目的团队

### 面试追问

- 你们的项目为什么选这个方案？遇到过哪些坑？
- 如何评估一个跨平台方案是否适合团队？
- 如果产品要求同时覆盖 App、小程序、H5，你会怎么选？

---

## Q2: React Native 的核心原理

### 老架构 Bridge

```
JS 线程（业务逻辑）
  → JSON 序列化（桥接）
  → 原生线程（UI 渲染）

React Native Bridge：
1. JS 线程执行 React 代码
2. 通过 Bridge 把 UI 描述序列化为 JSON
3. 原生线程反序列化并渲染原生组件
```

Bridge 是异步的，JS 和原生之间传递消息必须经过 JSON 序列化/反序列化，这意味着：

- 每次通信都有开销（序列化 + 拷贝）
- 不支持同步调用（如原生模块返回数据必须通过回调）
- 大量频繁通信会导致队列积压

```js
// Bridge 模式——异步通信
import { NativeModules } from 'react-native';
NativeModules.MyModule.doSomething((result) => {
  // 必须通过回调获取结果，无法直接 return
  console.log(result);
});
```

### 新架构 JSI (JavaScript Interface)

```
JSI（C++ 层）直接持有 JS 对象的引用
JS → C++ → Native，无需序列化
支持同步调用
```

```js
// JSI 模式——直接持有引用，同步调用
// 底层通过 C++ 直接操作 JS 对象，无需 JSON 中转
const result = MyModule.doSomethingSync();
console.log(result); // 同步返回
```

### Fabric 渲染器

Fabric 是新架构的渲染引擎，核心改动：

- **异步渲染**：不阻塞 JS 线程
- **优先级机制**：区分 urgent/non-urgent 更新，保证动画等高优任务
- **C++ 共享层**：Android/iOS 共用同一套 C++ 核心，减少平台差异

### TurboModules

```js
// 传统 Native Modules——启动时全部加载
import { MyModule } from 'react-native';
MyModule.doSomething();

// TurboModules——懒加载，按需初始化
// 只有真正调用时才初始化原生模块
const { MyModule } = require('react-native');
const result = await MyModule.doSomething();
```

### 常见坑

| 坑 | 原因 | 解决 |
|---|------|------|
| 启动白屏 | JS Bundle 加载慢 | 使用 Hermes 引擎、Code Splitting |
| 列表卡顿 | FlatList 未优化 | 使用 `getItemLayout`、`windowSize` |
| 手势冲突 | JS 手势和原生手势争抢 | 使用 `react-native-gesture-handler` |
| 内存泄漏 | 原生模块未正确释放 | 检查 addListener 清理 |

### 面试追问

- JSI 相比 Bridge 解决了哪些核心问题？
- 为什么新架构需要 Fabric 和 TurboModules 一起升级？
- 你们在实际项目中使用过新架构吗？迁移成本如何？
- React Native 和 Flutter 在渲染链路上有什么本质区别？

---

## Q3: Flutter 的核心原理

### 自绘引擎架构

```
Dart 代码
  → Flutter Framework（Widget、Render、Animation）
  → Skia 引擎（Canvas 绘制）
  → GPU（渲染到屏幕）
```

与 React Native 不同，Flutter **不依赖平台原生组件**。它在 iOS 上用 Impeller（自研引擎），Android 上用 Skia，直接通过 GPU 绘制 UI。这意味着：

- 跨平台 UI 表现**完全一致**（没有平台差异）
- 不需要平台组件映射层，**少了桥接开销**
- 但包体积会大（内置引擎约 5-10MB）

```dart
// Flutter 绘制自定义形状——直接操作 Canvas
class CustomPainterWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _CirclePainter(),
    );
  }
}

class _CirclePainter extends CustomPainter {
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.blue
      ..style = PaintingStyle.fill;
    canvas.drawCircle(Offset(100, 100), 50, paint);
  }

  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
```

### 三棵树架构

```
Widget Tree（配置不可变）
  → Element Tree（实例化，持有 BuildContext）
  → RenderObject Tree（布局 & 渲染）
```

```dart
// Widget 只是配置描述，轻量级
// 每次 build() 会创建新的 Widget 实例
// 但 Element 和 RenderObject 会复用

// Widget 是不可变的——每次 rebuild 都创建新 Widget
Container(
  width: 100,  // 这一行每次 build 都 new 一个新的 Container Widget
  height: 100,
  color: Colors.red,
);

// Element 才是"活"的——持有 context、关联状态
// RenderObject 负责 layout + paint——真正的渲染对象
```

### 关键机制

| 概念 | 作用 | 特点 |
|------|------|------|
| Widget | UI 配置描述 | 轻量、不可变、频繁重建 |
| Element | Widget 实例化的桥梁 | 可复用、持有 BuildContext |
| RenderObject | 布局和绘制 | 重量级、需要时才创建 |
| BuildContext | Element 的引用 | 用于查找父级、主题等 |

### 优势与劣势

**优势**：
- 60fps 稳定（自绘引擎 + 避免桥接）
- 自定义 UI 灵活（Canvas 直接绘制）
- 跨平台一致性好（同套渲染引擎）

**劣势**：
- 包体积大（约 5-10MB 引擎）
- 平台特性需要 Channel 调用
- Dart 语言相对小众，生态不如 JS
- 页面内存占用偏高

### 平台通道 (MethodChannel)

```dart
// Flutter 端调用原生
import 'package:flutter/services.dart';

final channel = MethodChannel('com.example/battery');
final batteryLevel = await channel.invokeMethod('getBatteryLevel');
```

```java
// Android 原生处理
new MethodChannel(getFlutterEngine().getDartExecutor(), "com.example/battery")
  .setMethodCallHandler((call, result) -> {
    if (call.method.equals("getBatteryLevel")) {
      result.success(batteryLevel + "%");
    }
  });
```

```swift
// iOS 原生处理
let channel = FlutterMethodChannel(name: "com.example/battery", binaryMessenger: controller.binaryMessenger)
channel.setMethodCallHandler { (call, result) in
  if call.method == "getBatteryLevel" {
    result("\(batteryLevel)%")
  }
}
```

### 性能陷阱

- **避免在 `build()` 中执行耗时操作**——build 可能被频繁调用
- **Widget 重建过度**——合理使用 `const Widget`、`RepaintBoundary`
- **Platform Channel 高频调用**——每次是异步序列化通信，频繁调用会有性能损耗
- **图片内存**——需要使用 `cached_network_image` 配合平台缓存

### 面试追问

- Flutter 三棵树解决了什么问题？为什么需要 Element 层？
- 对比 Flutter 和 RN 的渲染链路，本质区别在哪里？
- Impeller 相比 Skia 做了哪些优化？
- Flutter 在桌面端和 Web 端的表现如何？

---

## Q4: Flutter 的 Widget

### 基础分类

```dart
// StatelessWidget — 无状态，不可变
class MyWidget extends StatelessWidget {
  const MyWidget({super.key}); // 推荐使用 const 构造函数

  Widget build(BuildContext context) {
    return Text('Hello');
  }
}

// StatefulWidget — 有状态，可变
class Counter extends StatefulWidget {
  const Counter({super.key});

  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;

  void _increment() {
    setState(() {
      count++;
    });
  }

  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _increment,
      child: Text('$count'),
    );
  }
}
```

### Stateless vs Stateful 的抉择

```dart
// 错误示范：StatelessWidget 里试图改变状态
class BadWidget extends StatelessWidget {
  int count = 0; // ❌ StatelessWidget 的属性不会被持久化

  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        count++; // 这是无效的，不会触发 rebuild
      },
      child: Text('$count'),
    );
  }
}

// 正确做法：把状态交给父级或使用 StatefulWidget
class GoodWidget extends StatelessWidget {
  final int count;
  final VoidCallback onPressed;

  const GoodWidget({required this.count, required this.onPressed, super.key});

  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text('$count'),
    );
  }
}
```

### Widget 生命周期对比

```dart
// StatefulWidget 生命周期
class _LifecycleState extends State<MyWidget> {
  @override
  void initState() {
    super.initState();
    // 1. 初始化，只会调用一次
    // 注意：此处不能使用 context 中的 InheritedWidget
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // 2. 依赖的 InheritedWidget 变化时调用
    // 适合在此处加载 Theme、MediaQuery 等
  }

  @override
  void didUpdateWidget(covariant MyWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    // 3. 父级 rebuild 导致此 Widget 配置更新时调用
    // 可以比较 oldWidget 和 widget 的属性做增量更新
  }

  @override
  void dispose() {
    // 4. 销毁，清理资源
    // 记得取消 StreamSubscription、Timer 等
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // 每次需要重建 UI 时调用，应保持轻量
    return const SizedBox.shrink();
  }
}
```

### Widget 树上的通信

```dart
// InheritedWidget——跨组件共享数据
class ThemeProvider extends InheritedWidget {
  final String themeName;

  const ThemeProvider({
    required this.themeName,
    required super.child,
  });

  static ThemeProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ThemeProvider>()!;
  }

  bool updateShouldNotify(ThemeProvider oldWidget) {
    return themeName != oldWidget.themeName;
  }
}

// 使用
final theme = ThemeProvider.of(context).themeName;
```

### 常见陷阱

| 陷阱 | 现象 | 解决 |
|------|------|------|
| `setState` 后无变化 | 误在 StatelessWidget 中修改状态 | 改用 StatefulWidget 或外部状态管理 |
| build 过于频繁 | 性能下降 | 使用 `const` 构造函数、`RepaintBoundary` |
| Context 不可用 | `initState` 中获取 Theme | 使用 `didChangeDependencies` |
| Key 缺失 | 列表 item 复用错乱 | 给列表项添加 `ValueKey` 或 `ObjectKey` |
| dispose 未清理 | 内存泄漏 | 在 `dispose` 中释放所有订阅 |

```dart
// Key 的重要性
// 错误——无 Key，列表刷新时 Widget 可能错误复用
ListView.builder(
  itemCount: items.length,
  itemBuilder: (_, i) => TodoItem(item: items[i]),
);

// 正确——加 Key 保证正确匹配
ListView.builder(
  itemCount: items.length,
  itemBuilder: (_, i) => TodoItem(item: items[i], key: ValueKey(items[i].id)),
);
```

### 面试追问

- `const` Widget 和普通 Widget 区别是什么？为什么 Flutter 鼓励 const？
- `BuildContext` 的本质是什么？为什么要在 `didChangeDependencies` 而非 `initState` 中访问 InheritedWidget？
- 手写一个 `ConsumerWidget` 模拟 Provider 的监听能力。
- Flutter 中 Widget 不可变性设计是从 React 借鉴的吗？有哪些异同？

---

## Q5: Taro 的核心原理

### 编译时方案 (Taro 1/2)

```
源码（JSX）→ Babel AST → 各平台转换插件
  → 微信小程序代码
  → 支付宝小程序代码
  → H5 代码
  → React Native 代码
```

```jsx
// 源代码 (JSX)
function App() {
  const [list, setList] = useState([]);
  return (
    <View>
      {list.map(item => <Text key={item.id}>{item.name}</Text>)}
    </View>
  );
}

// 编译后微信小程序 wxml
// <view>
//   <text wx:for="&#123;&#123;list&#125;&#125;" wx:key="id">&#123;&#123;item.name&#125;&#125;</text>
// </view>

// 编译后 H5
// <div>
//   <span>item.name</span>
// </div>
```

**编译时方案的核心问题**：

```jsx
// 问题 1：动态语法受限
const Component = someCondition ? View : Text;
<Component>Hello</Component> // ❌ 编译时无法确定目标组件

// 问题 2：动态 props 受限
const props = { className: 'red', onClick: handler };
<View {...props} /> // ❌ 展开运算符难编译

// 问题 3：高阶组件
withRouter(App) // ❌ HOC 包装后静态分析困难
```

### 运行时方案 (Taro 3)

```
Taro 3 在目标平台模拟 React/Vue 运行时。

小程序端——引入一个 DOM 模拟层 (taro-runtime)：
  - 在逻辑层模拟 DOM/BOM API
  - JSX 执行结果同步到渲染层
  - 通过 setData 更新视图

优势：支持完整的 React/Vue 语法
代价：包体积增大，性能略低
```

```jsx
// Taro 3 可以正常使用动态语法
const Tag = isSpecial ? 'View' : 'Text';
return <Tag>Dynamic</Tag>; // ✅ 运行时方案支持

// Hooks 全面支持
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  return <View>{data}</View>;
}
```

### 运行时方案的内存与性能

| 对比项 | 编译时 (Taro 1/2) | 运行时 (Taro 3) |
|--------|-------------------|----------------|
| 包体积 | 小 | 大（多了 DOM 模拟层） |
| 动态语法 | 不支持 | 支持 |
| 启动速度 | 快 | 慢（需初始化运行时） |
| 运行性能 | 高 | 中 |
| 调试体验 | 难（代码被转换） | 好（源码映射完整） |

### Taro 的小程序优化技巧

```js
// 1. 合并 setData，减少通信次数
// 差
this.setState({ a: 1 });
this.setState({ b: 2 });

// 好
this.setState({ a: 1, b: 2 });

// 2. 大数据量分页传递
// 差——一次性传递大量数据会阻塞渲染
this.setState({ longList: hugeArray });

// 好——分批传递
const chunks = chunkArray(hugeArray, 20);
for (const chunk of chunks) {
  this.setState({ list: [...this.state.list, ...chunk] });
  await nextTick(); // 等待渲染完成
}
```

### 面试追问

- Taro 的编译时和运行时方案，你更倾向于哪种？为什么？
- Taro 3 如何在模拟 DOM 的同时保持小程序性能？
- Taro 和 uni-app 在技术思路上有什么本质区别？
- 如何在小程序平台上实现 React 的 SyntheticEvent 系统？

---

## Q6: 小程序双线程架构

### 架构图

```
渲染层（WebView） ←→  Native 桥接  ←→  逻辑层（JS Core / V8）

渲染层：WXML + WXSS → 页面渲染
逻辑层：JS 代码 → 数据处理、API 调用
```

### 为什么采用双线程

- **安全隔离**：逻辑层不能直接操作 DOM，防止恶意脚本修改页面
- **性能隔离**：渲染层卡顿不影响逻辑层计算，逻辑层耗时任务不阻塞渲染
- **跨平台抽象**：渲染层可以是 WebView（微信）或原生渲染（支付宝）

### setData 的工作原理

```
逻辑层：
  this.setData({ key: value })
    → 序列化为 JSON
    → Native 桥接传输
    → 渲染层反序列化
    → 对比差异 → 更新视图
```

```js
// setData 的性能陷阱

// 差——频繁调用
for (let i = 0; i < 100; i++) {
  this.setData({ [`item.${i}`]: data[i] });
}
// 每次 setData 都要跨线程通信，100 次通信开销极大

// 好——合并调用
const update = {};
for (let i = 0; i < 100; i++) {
  update[`item.${i}`] = data[i];
}
this.setData(update); // 一次通信

// 极差——传递大量不必要的数据
this.setData({ wholeList: massiveArray });
// 即使只修改了一个字段，也要序列化整个数组

// 好——只传递变化的数据
this.setData({ 'wholeList[3].name': newName });
```

### setData 最佳实践

| 问题 | 建议 |
|------|------|
| 频繁 setData | 合并更新，不要循环 setData |
| 数据量过大 | 只传变化字段，不传整个对象 |
| 高频场景（拖动） | 降低频率，使用节流 |
| 大数据列表 | 分页加载，虚拟列表 |
| 深层对象更新 | 使用路径表达式 `'a.b.c': value` |

```js
// 虚拟列表在微信小程序中的实现思路
Page({
  data: {
    visibleItems: [],
    scrollTop: 0,
    itemHeight: 50,
    bufferSize: 5,
  },

  onScroll(e) {
    const { scrollTop } = e.detail;
    const start = Math.floor(scrollTop / this.data.itemHeight) - this.data.bufferSize;
    const end = start + this.data.bufferSize * 2 + 10;
    this.setData({
      visibleItems: this._allData.slice(Math.max(0, start), end),
      scrollTop,
    });
  },
});
```

### Native 桥接能力

```js
// 小程序通过 wx API 调用原生能力
wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    console.log(res.latitude, res.longitude);
  },
});

wx.scanCode({
  success: (res) => {
    console.log(res.result);
  },
});

wx.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: (res) => {
    this.setData({ data: res.data });
  },
});
```

### 面试追问

- 为什么微信小程序不直接使用 DOM 操作？
- setData 数据量大会有什么后果？如何量化这个"大"？
- 小程序的双线程架构和 React Native 的 Bridge 有什么异同？
- 支付宝、字节小程序和微信小程序的架构差异在哪？

---

## Q7: 跨端方案的性能对比

### 多维度对比

```
渲染性能（原生 100% 基准）：
  原生 = KMP > Flutter (~95%) > RN (~85%) > Taro/uni-app (~75%) > Ionic/H5 (~60%)

包体积增量（空项目）：
  原生 APK: ~5MB
  Flutter: ~15MB（含引擎）
  RN: ~10MB（含 JS Engine）
  Ionic: ~2MB（WebView 系统自带）

启动速度：
  原生: ~200ms
  Flutter: ~400ms（Dart VM 初始化）
  RN: ~800ms（JS Bundle 加载 + 解析）
  H5: ~1.5s（WebView 初始化 + 资源加载）
```

### 详细对比表

| 维度 | Flutter | RN | Taro | Ionic |
|------|---------|---|------|-------|
| 渲染方式 | Skia GPU 自绘 | 原生组件映射 | 小程序 WebView | WebView |
| 帧率稳定性 | 稳定 60fps | 偶有掉帧 | 受限于小程序 | 受限于 WebView |
| 大列表性能 | 好（ListView 复用） | 好（FlatList） | 中（setData 瓶颈） | 差（DOM 开销） |
| 动画性能 | 优秀（GPU 直接驱动） | 中（桥接开销） | 中（Native 动画） | 差（CSS 动画） |
| 内存占用 | 偏高（引擎常驻） | 中等 | 低（小程序隔离） | 低（系统 WebView） |
| 热重载 | 优秀 | 好 | 一般 | 一般 |

### 开发效率对比

```
快速迭代场景排名：
  H5 > Taro/uni-app > RN > Flutter > KMP > 原生

理由：
  - H5 即时刷新，无需编译
  - Taro/uni-app 一份代码三端发布
  - RN/Futter 需要编译 + 打包
  - KMP 需配置原生开发环境
```

### 一致性对比

```
UI 一致性排名：
  Flutter > RN > Taro/uni-app > Ionic/H5

理由：
  - Flutter 自绘引擎，全平台相同像素级渲染
  - RN 使用原生组件，iOS/Android 有视觉差异
  - Taro/uni-app 依赖各小程序组件库
  - Ionic 在 WebView 中渲染，表现取决于浏览器
```

### 什么时候选择什么

| 场景 | 推荐方案 | 原因 |
|------|---------|------|
| 高保真 UI 一致性 | Flutter | 自绘，无平台差异 |
| 需调用大量原生 SDK | RN / KMP | 原生模块生态丰富 |
| 以小程序为主 | Taro / uni-app | 原生小程序体验 |
| 团队前端为主 | RN (React) / uni-app (Vue) | 复用现有技术栈 |
| 已有原生应用 | KMP | 只共享逻辑层 |
| MVP 快速验证 | Ionic / H5 | 开发速度最快 |

### 面试追问

- Flutter 性能接近原生，为什么没有完全取代 RN？
- 如何量化评估一个跨平台方案的性能？具体看哪些指标？
- 在 Hybrid 场景中，JS 和 Native 的通信瓶颈如何突破？
- Flutter 的 Impeller 引擎相比 Skia 在性能上提升在哪？

---

## Q8: 跨端开发经验总结

### 方案选择决策树

```
你的目标用户是谁？
  ├─ 只有微信用户 → 微信小程序 (原生 / Taro / uni-app)
  ├─ 只有海外用户 → PWA / React Native / Flutter
  └─ 既要国内又要海外
       ├─ 团队有 React 经验 → React Native
       ├─ 要求极致性能 → Flutter
       ├─ 主要做小程序 → Taro / uni-app
       └─ 已有原生 App → KMP 共享业务逻辑
```

### 通用问题与解决方案

| 问题 | 示例 | 解决方案 |
|------|------|---------|
| 平台差异 UI | iOS 返回手势 vs Android 物理返回键 | 统一封装 Navigation 层 |
| 调试困难 | JS-Native 桥接问题定位难 | Flipper / Safari DevTools / Chrome DevTools |
| 性能瓶颈 | 大列表/动画卡顿 | 虚拟列表、GPU 动画、离屏渲染 |
| 第三方库 | 原生 SDK 需封装，更新慢 | 抽象接口层 + 平台适配 |
| 发版节奏 | Native 发版慢，JS 可热更新 | 降级方案 + CodePush |
| 内存泄漏 | 长页面未释放 | 定期检查、工具分析 |

### 平台差异实战

```tsx
// React Native — 处理平台差异
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 44 : 0, // iOS 状态栏
    ...Platform.select({
      ios: { shadowColor: '#000' },
      android: { elevation: 4 },
    }),
  },
});
```

```dart
// Flutter — 处理平台差异
import 'dart:io' show Platform;

Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: const Text('App'),
      leading: Platform.isIOS
          ? const BackButton() // iOS 风格返回
          : const IconButton(   // Android 风格
              icon: Icon(Icons.arrow_back),
              onPressed: () {},
            ),
    ),
  );
}
```

### 原生模块封装示例

```swift
// iOS — 封装原生支付 SDK
@objc(PaymentModule)
class PaymentModule: RCTEventEmitter {
  @objc func pay(_ amount: NSNumber, resolver resolve: @escaping RCTPromiseResolveBlock,
                  rejecter reject: @escaping RCTPromiseRejectBlock) {
    // 调用原生支付 SDK
    SomeSDK.pay(amount: amount.doubleValue) { result in
      resolve(result)
    }
  }
}
```

```java
// Android — 封装原生支付 SDK
public class PaymentModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void pay(double amount, Promise promise) {
    // 调用原生支付 SDK
    SomeSDK.pay(amount, new Callback() {
      void onSuccess(String result) {
        promise.resolve(result);
      }
    });
  }
}
```

### 性能优化 checklist

- [ ] 大列表使用虚拟列表（FlatList / ListView.builder）
- [ ] 图片使用 CDN + 缓存策略，合理设置尺寸
- [ ] 动画使用 GPU 加速（Flutter 的 AnimatedBuilder / RN 的 useNativeDriver）
- [ ] 减少跨线程通信（合并 setData、批量调用）
- [ ] 代码分包 / 懒加载（首屏只加载必要代码）
- [ ] 使用 Profiling 工具定位瓶颈（Flutter DevTools / React DevTools / Xcode Instruments）

### 团队管理建议

- **统一技术栈**：前后端复用类型定义，减少沟通成本
- **渐进式迁移**：新功能用新方案，老功能逐步重构，不要一刀切
- **自动化测试**：跨端项目 UI 差异多，推荐使用截图对比测试
- **灰度发布**：跨端方案的兼容性问题往往在线上才暴露，小流量验证
- **持续关注社区**：Flutter 和 RN 都在快速迭代，适时跟进新架构

### 面试追问

- 描述一个你在跨平台项目中遇到的真正困难以及如何解决的。
- 如何衡量一个跨平台项目的成功？从哪些指标评估？
- 如果现在要启动一个新项目，你会如何做技术选型？
- 跨平台方案解决的是"开发效率"还是"用户体验"问题？两者如何权衡？
- 你如何看待 Web 标准化趋势（PWA、WebAssembly）对跨平台开发的冲击？
