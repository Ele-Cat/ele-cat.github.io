# CSS 进阶面试题

## Q1: CSS 动画

```css
/* transition — 状态过渡 */
.element {
  transition: all 0.3s ease;
}
.element:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

/* animation + @keyframes */
@keyframes slide-in {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.element {
  animation: slide-in 0.5s ease-out forwards;
}

/* 动画属性 */
animation-name
animation-duration        /* 持续时间 */
animation-timing-function /* 缓动函数 */
animation-delay           /* 延迟 */
animation-iteration-count /* 播放次数（infinite） */
animation-direction       /* 方向 */
animation-fill-mode       /* 结束状态 */
```

**深入理解**：CSS 动画分为两类——`transition`（过渡）和 `animation`（动画）。`transition` 是从一种状态到另一种状态的**隐式过渡**，需要触发条件（如 hover、class 变化）。`animation` 使用 `@keyframes` 定义多帧序列，可以自动播放、循环、倒放等，能力更强。二者核心差异在于：`transition` 由"状态变化"驱动，`animation` 由"时间轴"驱动。

**transition 的深入用法**：

```css
/* transition 属性拆分 */
.element {
  transition-property: transform, opacity;
  transition-duration: 0.3s, 0.6s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s, 0.1s;
}

/* 可过渡的属性列表 */
/* ✅ transform, opacity, color, background-color, border-color, box-shadow, filter, width, height */

/* ❌ display（无法过渡），font-size（一般不推荐），position */
/* 用 visibility + opacity 替代 display 动画 */
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}
.visible {
  visibility: visible;
  opacity: 1;
}
```

**animation 的完整用法**：

```css
/* 多阶段关键帧 */
@keyframes bounce {
  0%   { transform: translateY(0); }
  40%  { transform: translateY(-30px); }
  60%  { transform: translateY(-15px); }
  80%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

@keyframes progress {
  from { width: 0%; }
  to   { width: 100%; }
}

/* animation 简写 */
.element {
  animation: bounce 1s ease-in-out 0.5s 3 alternate forwards;
  /*         名称  时长   缓动    延迟  次数  方向  填充  */
}

/* animation-play-state —— 控制暂停/播放 */
.element:hover {
  animation-play-state: paused;
}
```

**timing-function 详解**：

```css
/* 缓动函数对比 */
.element {
  /* 内置缓动 */
  transition-timing-function: ease;        /* 慢快慢 */
  transition-timing-function: linear;      /* 匀速 */
  transition-timing-function: ease-in;     /* 慢到快 */
  transition-timing-function: ease-out;    /* 快到慢 */
  transition-timing-function: ease-in-out; /* 慢快慢（比 ease 更对称） */

  /* 自定义贝塞尔曲线 */
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* 弹跳效果 —— 超出目标值再回弹 */

  /* 阶跃函数 */
  transition-timing-function: steps(4, end);   /* 分 4 步跳跃 */
  /* 用于 sprite 动画或打字效果 */
}
```

**性能黄金法则**：

```css
/* ✅ 推荐：只对 transform 和 opacity 做动画 */
.card {
  transition: transform 0.3s, opacity 0.3s;
}
.card:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

/* ❌ 避免：改变宽高位置触发重排 */
.card {
  transition: width 0.3s, height 0.3s, left 0.3s;  /* 触发重排 */
}
.card:hover {
  width: 120%;
  height: 120%;
}

/* ✅ 替换方案：用 transform 代替 */
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.2);
}
```

**常见陷阱**：

```css
/* 1. display 无法过渡 */
.element {
  display: none;
  opacity: 0;
  transition: opacity 0.3s;
}
.element.visible {
  display: block;  /* 直接切换，opacity 过渡不生效 */
  opacity: 1;
}
/* ✅ 修复：用 visibility 替代，或用 requestAnimationFrame */

/* 2. 自动回弹动画 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
/* animation-fill-mode: forwards 使得动画结束保持在 100% 状态 */

/* 3. 高度从 0 到 auto 的过渡 */
.accordion {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.accordion.open {
  max-height: 500px;   /* 用 max-height 近似实现 */
}
```

**对比**：

| 特性 | transition | animation |
|------|-----------|-----------|
| 触发方式 | 状态变化驱动 | 时间轴驱动 |
| 循环 | 不支持 | 支持（infinite） |
| 中间控制 | 不支持 | 支持暂停/反转 |
| 多帧 | 仅两态 | 多关键帧 |
| 控制粒度 | 粗 | 细 |
| 使用场景 | hover、focus、class 切换 | 持续动画、加载动画 |

**面试追问**：
- CSS 动画和 JS 动画（requestAnimationFrame）各有什么优劣？CSS 动画可在合成线程运行（不占用主线程），JS 动画更灵活（可暂停、调速、绑定逻辑）。
- `transform: translateZ(0)` 或 `will-change: transform` 的触发原理？将元素提升到合成层，由 GPU 处理，避免重排。
- 硬件加速会有什么副作用？占用 GPU 内存，过度使用可能导致移动端崩溃或电池消耗。

## Q2: CSS 预处理器（Sass）

```scss
// 变量
$primary: #007bff;
$spacing: 16px;

// 嵌套
.nav {
  ul { display: flex; }
  li { margin: 0 $spacing; }
  a { color: $primary; }
}

// Mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 继承
%btn { padding: 8px 16px; border-radius: 4px; }
.btn-primary { @extend %btn; background: $primary; }

// 函数
@function px-to-rem($px) {
  @return $px / 16px * 1rem;
}
```

**预处理器 vs PostCSS vs CSS-in-JS**：
| | Sass/Less | PostCSS | CSS-in-JS |
|--|----------|---------|-----------|
| 变量 | ✅ | ✅ (var()) | ✅ |
| 嵌套 | ✅ | ❌ | ✅ |
| Mixin | ✅ | ❌ | ✅ (函数) |
| 运行时 | 编译时 | 编译时 | 运行时 |
| 组件隔离 | ❌ | ❌ | ✅ |
| 适用 | 传统项目 | 配合工具链 | React/Vue 组件 |

**深入理解**：CSS 预处理器（Sass/SCSS、Less、Stylus）是 CSS 的"超集"，通过编译将增强语法转为普通 CSS。它们解决了原生 CSS 缺少变量、嵌套、计算、函数等编程能力的问题。虽然现代原生 CSS 已逐步支持变量、嵌套等特性，但预处理器在大型项目中的 mixin、@extend、控制指令等功能仍有不可替代的价值。

**Sass 核心功能详解**：

```scss
// 变量作用域和默认值
$primary: #007bff !default;   // 可以被覆盖
$primary: #dc3545;            // 覆盖默认值

// 插值（Interpolation）
$side: left;
.border-#{$side} {
  border-#{$side}: 1px solid;
}

// @each 循环
$sizes: 4, 8, 12, 16, 24;
@each $size in $sizes {
  .p-#{$size} { padding: #{$size}px; }
}

// @if/@else 条件
@mixin button-variant($variant) {
  @if $variant == 'primary' {
    background: $primary;
    color: white;
  } @else if $variant == 'secondary' {
    background: #6c757d;
    color: white;
  } @else {
    background: transparent;
  }
}

// @content 插槽
@mixin mobile {
  @media (max-width: 768px) {
    @content;       // 允许传入额外样式
  }
}
.element {
  @include mobile {
    flex-direction: column;
  }
}
```

**@extend 与 Mixin 的本质区别**：

```scss
// @extend —— 合并选择器（输出更少代码）
%btn-shared {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
}
.btn-primary { @extend %btn-shared; background: blue; }
.btn-danger  { @extend %btn-shared; background: red; }
/* 编译输出：.btn-primary, .btn-danger { padding: 8px 16px; ... } */

// @mixin —— 复制代码（适合有参数时）
@mixin btn-variant($bg) {
  padding: 8px 16px;
  border-radius: 4px;
  background: $bg;
}
.btn-primary { @include btn-variant(blue); }
.btn-danger  { @include btn-variant(red); }
/* 编译输出：两组完整的代码片段 */
```

**嵌套的使用陷阱**：

```scss
// ❌ 过度嵌套 —— 编译出超长选择器
.wrapper {
  .container {
    .sidebar {
      .nav {
        .item {
          a { color: red; }
          /* 输出：.wrapper .container .sidebar .nav .item a {} */
        }
      }
    }
  }
}

// ✅ 用 &（父选择器引用）避免深层嵌套
.nav {
  &__item { }
  &__link {
    color: blue;
    &:hover { color: darkblue; }
  }
}
```

**Mixin 参数的 N 种写法**：

```scss
// 默认参数
@mixin size($w: 100%, $h: auto) {
  width: $w;
  height: $h;
}

// 命名参数 —— 不必按顺序
.hero { @include size($h: 100vh); }

// 不定参数（...）
@mixin box-shadow($shadow...) {
  box-shadow: $shadow;
}
.card { @include box-shadow(0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)); }
```

**面试追问**：
- 原生 CSS 变量（var()）能完全替代预处理器变量吗？不能。CSS 变量是动态的（可在运行时改变、继承），预处理器变量是静态的（编译时确定）。
- Sass 的 `@extend` 有什么风险？可能生成意料之外的选择器组合，导致 CSS 膨胀。推荐用 `@mixin` 替代。
- 现代 CSS 支持了嵌套后还要用预处理器吗？看需求。原生嵌套还有些限制（如不能深度嵌套 `&`），且缺少 `@mixin`、`@function`、循环等能力。

## Q3: CSS Modules

```css
/* Button.module.css */
.btn { padding: 8px 16px; }
.active { background: blue; }
```

```tsx
// React 中使用
import styles from './Button.module.css'
<button className={`${styles.btn} ${active && styles.active}`}>
```

**原理**：编译时给 class 名加哈希（如 `_btn_1a2b3`），实现局部作用域。

**深入理解**：CSS Modules 是"组件级 CSS 隔离"方案之一。它通过构建工具（webpack 的 css-loader、Vite）将每个 CSS 文件中的类名编译成唯一哈希值，从而避免全局命名冲突。与 CSS-in-JS 不同，CSS Modules 仍然是原生 CSS，没有运行时开销，只是在编译时做了类名改写。

**配置与自定义**：

```js
// webpack.config.js
{
  test: /\.module\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[name]__[local]--[hash:base64:5]',
          // 编译后：Button__btn--1a2b3
        }
      }
    }
  ]
}
```

**组合与继承**：

```css
/* Button.module.css */
.btn {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border-radius: 4px;
}

/* 组合其他类 */
.btnPrimary {
  composes: btn;                  /* 包含 .btn 所有样式 */
  background: #28a745;           /* 覆盖背景色 */
}

/* 从其他模块导入 */
.btnDanger {
  composes: btn from './BaseButton.module.css';
  background: #dc3545;
}
```

```tsx
// React 使用组合
import styles from './Button.module.css'

// composes 会将两个 class 编译到同一个元素
<button className={styles.btnPrimary}>
  Primary
</button>
// 实际渲染：class="Button__btnPrimary Button__btn"
```

**全局选择器与排除**：

```css
/* 全局选择器：不会被哈希 */
:global .container {
  max-width: 1200px;
}

/* 混合 */
.title {
  font-size: 24px;
}
:global .highlight {
  color: red;
}
/* .title 会被哈希，.highlight 保持原样 */
```

**与其他方案对比**：

| 特性 | CSS Modules | CSS-in-JS | 预处理器 | 原生 CSS |
|------|------------|-----------|---------|---------|
| 局部作用域 | ✅ | ✅ | ❌ | ❌ |
| 运行时开销 | 编译时 | 运行时有 | 编译时 | 无 |
| 动态样式 | 需通过 class 切换 | 直接支持 | 编译时静态 | 通过 CSS 变量 |
| TypeScript 支持 | 需类型声明 | 天然支持 | 不适用 | 不适用 |
| 学习成本 | 低 | 中 | 低 | 无 |

**TypeScript 类型补充**：

```ts
// global.d.ts 或 shims.d.ts
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

**面试追问**：
- CSS Modules 和 Vue Scoped CSS 有何不同？Vue Scoped 通过 `data-v-xxx` 属性选择器限制范围，CSS Modules 通过哈希类名。Vue Scoped 在父组件无法覆盖子组件根节点样式时有特殊穿透方法。
- CSS Modules 的调试困难吗？DevTools 中可以看到哈希后的类名，通过 `localIdentName` 配置保留可读前缀可解决。
- 如何处理第三方全局 CSS 库（如 Bootstrap）与 CSS Modules 共存？第三方库作为全局样式引入，自己的组件用 CSS Modules，通过 `:global` 覆盖。

## Q4: Tailwind CSS

```html
<!-- 原子化 CSS -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click
</button>
```

**优势**：
- 不用命名 class
- 小 bundle（PurgeCSS 摇掉未使用的）
- 设计系统一致性
- 响应式内置（`md:flex`、`lg:w-1/2`）

**争议**：
- HTML 看起来"丑"（class 很长）
- 学习曲线（需要记大量 class 名）
- 不是所有设计都能用 utility 表达

**深入理解**：Tailwind 是"原子化 CSS"（Utility-First CSS）框架的代表。它提供大量单一功能类（如 `p-4` 表示 `padding: 1rem`），开发者通过组合这些类来构建界面。核心理念是"约束下的创造力"——通过设计系统内置的颜色、间距、字号等 token 来保证一致性，同时避免命名焦虑。

**配置与扩展**：

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a5f',
        },
      },
      spacing: {
        18: '4.5rem',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
```

```html
<!-- 使用扩展后的类 -->
<div class="bg-brand-500 p-18 font-display">
  Custom Brand
</div>
```

**常用模式提取**：

```html
<!-- ❌ 原始：class 过长 -->
<button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Save
</button>
```

```html
<!-- ✅ 用 @apply 提取组件类（在 CSS 文件中） -->
<!-- styles/components.css -->
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md;
    @apply hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400;
  }
}
```

```html
<!-- 使用组件类 -->
<button class="btn-primary">
  Save
</button>
```

**响应式与状态变体**：

```html
<!-- 响应式前缀 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 手机 1 列，平板 2 列，桌面 4 列 -->
</div>

<!-- 状态前缀 -->
<button class="
  bg-blue-500 hover:bg-blue-600
  active:bg-blue-700
  focus:ring-2 focus:ring-blue-300
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Click
</button>

<!-- 暗黑模式 -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Themed Content
</div>
```

**PurgeCSS 工作流**：

```
输入：tailwind.css (数 MB，包含所有 utility)
                  ↓
PurgeCSS 扫描 content 配置中匹配的文件
                  ↓
输出：main.css (仅包含实际使用的类，通常 10KB-50KB)
```

```js
// tailwind.config.js
module.exports = {
  // 确保所有使用 Tailwind 类的文件都被扫描到
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
}
```

**Tailwind vs 传统框架**：

| | Tailwind | Bootstrap | 手写 CSS |
|--|---------|-----------|---------|
| 学习成本 | 中（需记 utility 名） | 低（组件开箱即用） | 低（但写起来慢） |
| 定制性 | 极高 | 中（需覆盖变量） | 极高 |
| 构建体积 | 小（Purge 后） | 大（完整组件库） | 最小 |
| 命名决策 | 无需命名 | 少量组件修饰 | 需要命名 |
| 一致性 | 设计系统强制 | 设计系统强制 | 靠自觉 |

**面试追问**：
- Tailwind 的 `@apply` 是否推荐使用？推荐适量使用，过度使用会失去原子化的优势（降低可复用性、增加 CSS 体积）。
- Tailwind 如何实现任意值（Arbitrary Values）？`w-[320px]`、`bg-[#1da1f2]`、`top-[calc(100%-2rem)]`。
- JIT（Just-In-Time）模式是什么？Tailwind v3 默认模式，按需生成 utility，不再有完整预编译的大文件，开发时实时生成。

## Q5: CSS 层叠层（@layer）

```css
/* 控制层叠顺序 */
@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer components {
  .card { padding: 1rem; border-radius: 8px; }
}

@layer utilities {
  .text-center { text-align: center; }
}

/* utilities 优先级高于 components，不受选择器权重影响 */
```

**深入理解**：`@layer` 是 CSS 的"层叠控制权"机制。传统 CSS 中，层叠顺序由"选择器权重 + 出现顺序"决定——想要覆盖一个高权重的选择器，你只能写更高的权重。`@layer` 改变了这个规则——你可以在声明周期中定义层的顺序，后定义的层优先级更高，**无论内部选择器权重如何**。这对组件库集成、第三方样式覆盖、CSS 架构分层有革命性意义。

**层的定义方式**：

```css
/* 方式一：先声明顺序，再填充内容 */
@layer base, theme, components, utilities;

@layer components {
  .card { background: white; }
}

/* 方式二：声明时直接定义 */
@layer base {
  body { margin: 0; line-height: 1.5; }
}

/* 方式三：匿名层 — 不在 @layer 块中的样式属于"匿名层" */
.btn { background: blue; }
/* 匿名层优先级高于所有已命名的 @layer */

/* 方式四：嵌套层 */
@layer components {
  @layer card {
    .card { padding: 1rem; }
  }
  @layer button {
    .btn { padding: 0.5rem 1rem; }
  }
}
```

**实际应用场景**：

```css
/* 场景 1：覆盖第三方 UI 库样式 */
@layer reset, base, vendor, components;

@layer vendor {
  /* 假设这是 Ant Design 或 Element Plus 的样式 */
  .ant-btn { background: #1890ff; padding: 4px 15px; }
}

@layer components {
  /* 不用提高权重就能覆盖 */
  .ant-btn-primary { background: #52c41a; }
}

/* 场景 2：拆分布局和组件 */
@layer layout {
  .grid { display: grid; gap: 16px; }
  .sidebar { grid-area: sidebar; }
}

@layer theme {
  .sidebar { background: #f5f5f5; }
}
```

**导入与层的顺序**：

```css
/* layer.css 中的内容可以分配到已有的层 */
@import url('reset.css') layer(reset);
@import url('components.css') layer(components);
@import url('utilities.css') layer(utilities);

/* 导入时不指定 layer，归入匿名层 */
@import url('theme.css');
```

**层叠规则变化**：

```
传统层叠：
  !important > 内联 > ID > 类 > 元素

加入 @layer 后：
  匿名层（无 layer） > @layer 排序中靠后的层 > @layer 排序中靠前的层

注意：
  - 同一 @layer 内部仍遵循选择器权重
  - !important 在 @layer 中同样作用，但层优先级反转
```

```css
/* !important 在 @layer 中的反转行为 */
@layer low {
  .text { color: red !important; }  /* 这个会被下面的覆盖 */
}
@layer high {
  #text { color: blue; }            /* 优先级更高：因为 high 比 low 靠后 */
}
/* 最终 blue，因为 !important 在同一来源（作者）中，layer 顺序优先 */
```

**面试追问**：
- `@layer` 和 CSS Modules 的隔离原理有何不同？`@layer` 控制层叠顺序而非命名隔离，CSS Modules 控制命名冲突而非层叠顺序。
- `@layer` 是否影响浏览器渲染性能？不影响，层叠顺序分析仅发生在样式计算阶段，没有额外运行时开销。
- 低版本浏览器如何处理 `@layer`？不支持 `@layer` 的浏览器会忽略此声明，所有样式升为匿名层。建议检查目标浏览器兼容性。

## Q6: CSS Container Queries

```css
/* 容器查询——根据容器大小而非视口响应 */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (max-width: 400px) {
  .card { flex-direction: column; }
}

/* 对比媒体查询 */
@media (max-width: 768px) {}      /* 基于视口 */
@container (max-width: 400px) {}  /* 基于容器 */
```

**深入理解**：Container Queries 解决了响应式设计中的一个根本问题——"组件响应式"：一个组件可能被放在窄侧边栏也可能被放在宽主区域，它的布局应该根据"实际容器宽度"而非"视口宽度"适配。Container Queries 让组件在任何容器中都能自适应，真正实现了组件级响应式。

**容器类型详解**：

```css
/* container-type 决定了可以查询的轴 */
.container {
  /* 只查询内联尺寸（宽度）—— 最常见 */
  container-type: inline-size;

  /* 查询块级尺寸（高度）—— 较少用，高度通常由内容决定 */
  container-type: block-size;

  /* 两个轴都可查询 */
  container-type: size;

  /* 默认值：不是容器 */
  container-type: normal;
}
```

**多个容器的命名和查询**：

```css
/* 命名容器方便精确查询 */
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}
.main {
  container-type: inline-size;
  container-name: main;
}

/* 精确指定查询哪个容器 */
@container sidebar (max-width: 300px) {
  .widget { display: none; }
}

/* 查询最近的任意容器 */
@container (max-width: 500px) {
  .card { padding: 0.5rem; }
}
```

**容器查询样式变体**：

```html
<div class="card-container">
  <div class="card">
    <img src="..." class="card-img">
    <div class="card-body">
      <h2 class="card-title">Title</h2>
      <p class="card-text">Description...</p>
    </div>
  </div>
</div>
```

```css
.card-container {
  container-type: inline-size;
}

/* 宽容器：水平排列 */
@container (min-width: 500px) {
  .card {
    display: flex;
    gap: 16px;
  }
  .card-img {
    width: 200px;
    height: auto;
  }
  .card-title { font-size: 1.5rem; }
}

/* 中等容器：垂直排列，字号适中 */
@container (min-width: 300px) and (max-width: 499px) {
  .card-title { font-size: 1.25rem; }
  .card-text { font-size: 0.875rem; }
}

/* 窄容器：简化展示 */
@container (max-width: 299px) {
  .card-img { display: none; }
  .card-title { font-size: 1rem; }
}
```

**容器查询长度单位**：

```css
/* 基于容器尺寸的相对单位 */
.card {
  /* 基于容器宽度的百分比 */
  font-size: 3cqw;          /* 容器宽度的 3% */
  padding: 2cqi;            /* 容器内联尺寸的 2% */
  margin: 2cqb;             /* 容器块级尺寸的 2% */
  width: 50cqmin;           /* 容器宽高中较小值的 50% */
  height: 50cqmax;          /* 容器宽高中较大值的 50% */
}
```

**媒体查询 vs 容器查询**：

| | 媒体查询 | 容器查询 |
|--|---------|---------|
| 参考基准 | 视口（viewport） | 父容器 |
| 适配层级 | 全局/页面级 | 组件级 |
| 复用性 | 组件在不同位置行为不同 | 组件在任何位置自适应 |
| 兼容性 | 所有浏览器 | Chrome 105+, Safari 16+, Firefox 110+ |
| 使用场景 | 页面布局变换 | 组件内部布局变换 |

**面试追问**：
- Container Queries 的 Polyfill 方案？`container-query-polyfill` 可用，但不适合生产环境的复杂场景。
- 容器查询中的"容器"是最近的什么元素？最近的、有 `container-type` 的非 `normal` 祖先元素。
- `container` 简写如何用？`container: card / inline-size` —— 同时设置 name 和 type。

## Q7: CSS 自定义属性（变量）

```css
:root {
  --primary: #007bff;
  --spacing: 16px;
  --radius: 8px;
}

.card {
  padding: var(--spacing);
  background: var(--primary, #default-color);
}

/* 运行时更改（JS） */
document.documentElement.style.setProperty('--primary', '#dc3545')

/* 主题切换 */
[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #eee;
}

/* CSS 变量和预处理器变量的区别：CSS 变量有级联、可在运行时改 */
```

**深入理解**：CSS 自定义属性（Custom Properties）是原生 CSS 的"动态变量"。与 Sass 等预处理器变量不同，CSS 变量是**动态的**——它们参与层叠、可继承、可在运行时通过 JS 修改。这一特性使得主题切换、动态样式、组件参数化等成为可能，是 CSS 从"声明式语言"向"可编程语言"演进的重要一步。

**变量作用域与层叠**：

```css
/* 全局变量：在 :root 中定义 */
:root {
  --color: blue;
}

/* 局部变量：在特定作用域覆盖 */
.dark-section {
  --color: #1a1a2e;
  --bg: #eee;
}

.card {
  color: var(--color);         /* 普通区域 = blue，暗区域 = #1a1a2e */
}

/* 层叠覆盖 */
.override {
  --color: red !important;     /* !important 也可用于自定义属性 */
}
```

**备用值与 fallback 链**：

```css
.card {
  /* 单个 fallback */
  background: var(--card-bg, #fff);

  /* 嵌套 fallback —— 第二个参数可以嵌套 var() */
  background: var(--card-bg, var(--default-bg, #fff));

  /* @supports 检测 */
  @supports (--custom: property) {
    /* 支持 CSS 变量的浏览器 */
  }
}
```

**高级用法**：

```css
/* 用于简写属性——CSS 变量可以表示任意值 */
:root {
  --shadow: 0 2px 4px rgba(0,0,0,0.1);
  --font-stack: 'Inter', system-ui, sans-serif;
  --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 动态计算 */
:root {
  --base-size: 16px;
  --scale-ratio: 1.25;
  --h1: calc(var(--base-size) * var(--scale-ratio) * var(--scale-ratio));
  --h2: calc(var(--base-size) * var(--scale-ratio));
}

/* 与 calc() 结合 —— 变量必须是数值（不带单位） */
:root {
  --gap: 8;
}
.card {
  gap: calc(var(--gap) * 1px);     /* 8px */
  padding: calc(var(--gap) * 2px); /* 16px */
}
```

**JS 交互示例**：

```js
// 读取
getComputedStyle(document.documentElement).getPropertyValue('--primary')

// 设置
document.documentElement.style.setProperty('--primary', '#28a745')

// 主题切换
function setTheme(theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.style.setProperty('--bg', '#1a1a2e')
    root.style.setProperty('--text', '#eee')
  } else {
    root.style.setProperty('--bg', '#fff')
    root.style.setProperty('--text', '#333')
  }
}
```

**和预处理器变量的对比**：

| | CSS 变量 | Sass/Less 变量 |
|--|---------|---------------|
| 作用域 | 级联（DOM 树） | 作用域（编译时） |
| 运行时修改 | ✅（JS 可改） | ❌（编译后固定） |
| 参与 calc() | ✅ | ❌（需编译计算） |
| 主题切换 | 天然支持 | 需编译多份 CSS |
| 类型 | 任意值 | 同 CSS 值类型 |
| 兼容性 | 现代浏览器 | 取决于编译器 |

**常见陷阱**：

```css
/* 1. 变量未定义时的行为 */
.card {
  background: var(--undefined-var);
  /* 背景变成 transparent（或 initial）—— 不是报错，是静默失败 */
}

/* 2. 变量值是字符串拼接而非计算 */
--ratio: 1.25;
font-size: var(--ratio) * 1rem;   /* ❌ 输出 "1.25 * 1rem" —— 不是 1.25rem */
font-size: calc(var(--ratio) * 1rem); /* ✅ 正确的计算 */

/* 3. 变量中带单位 */
--gap: 16px;
padding: var(--gap);                /* OK */
padding: calc(var(--gap) * 2);      /* OK */
```

**面试追问**：
- CSS 变量和 Sass 变量能混用吗？可以。Sass 变量编译时插入到 CSS 变量值中，但 Sass 变量要先于 CSS 变量被替换。
- CSS 变量会影响性能吗？极轻微。变量替换发生在样式计算阶段，通常不构成性能瓶颈。
- 如何用 CSS 变量实现颜色主题中的深浅色？用 `hsl()` + 变量控制色相、饱和度和亮度。

## Q8: 视口单位新特性

```css
/* 新视口单位（解决移动端地址栏滚动问题） */
100dvh   /* dynamic viewport height — 动态视口高度 */
100svh   /* small viewport height — 最小视口（有地址栏） */
100lvh   /* large viewport height — 最大视口（无地址栏） */
100dvw   /* dynamic viewport width */
```

**深入理解**：传统的 `100vh` 在移动浏览器中有个"老大难"问题——地址栏收起时视口高度变化，但 `100vh` 不会动态更新，导致元素底部被裁剪或出现空白。新视口单位（`svh`/`lvh`/`dvh`）将视口分为三种状态：`svh` = 地址栏展开时的高度（最小），`lvh` = 地址栏收起时的高度（最大），`dvh` = 动态跟随当前状态。`dvh` 最符合直觉，但某些场景下 `svh` 或 `lvh` 更合适。

**三种视口高度的表现**：

```
地址栏展开时：
  svh = lvh = dvh = 可用高度

地址栏滚动收起（部分/全部）：
  svh = 最小高度（固定）
  lvh = 最大高度（固定）
  dvh = 当前可用高度（动态变化）
```

**实际使用场景**：

```css
/* 全屏 Hero：使用 dvh 保证内容始终可见 */
.hero {
  height: 100dvh;
  /* 地址栏状态变化时高度平滑过渡 */
}

/* 固定底部栏 + 内容区域 */
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.footer {
  flex-shrink: 0;
}

/* 使用 svh 确保最小高度覆盖 */
.min-fullscreen {
  min-height: 100svh;   /* 即使地址栏展开，至少占满视口 */
}

/* 使用 lvh + 滚动防止布局跳动 */
.stable-hero {
  height: 100lvh;       /* 固定为大视口高度，内容滚动处理 */
  overflow-y: auto;
}
```

**降级方案**：

```css
/* 不支持新单位时退回到 100vh */
.hero {
  height: 100vh;
  height: 100dvh;       /* 浏览器支持则覆盖 */
}

/* @supports 检测 */
@supports (height: 100dvh) {
  .hero { height: 100dvh; }
}
```

**PC 端的使用**：

```css
/* 新视口单位在 PC 端等同于传统 vh/vw（因为无地址栏交互） */
/* 但在一些特殊场景仍然有用 */

/* 解决 100vw 滚动条宽度问题 */
.full-width {
  width: 100vw;
  width: 100dvw;        /* 动态宽度 */
}
```

**面试追问**：
- `dvh` 在滚动时会导致布局重排吗？会轻微触发，但现代浏览器做了优化处理。如果页面需要绝对稳定布局，考虑使用 `svh` 或 `lvh`。
- iOS Safari 的新视口单位支持情况？iOS 15+ Safari 支持，但早期版本行为有 bug（如 `100dvh` 在键盘弹出时错误计算）。
- 这个新单位在 iframe 中表现如何？取决于 iframe 的嵌入方式和父页面设置。

## Q9: 子网格（Subgrid）

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  display: grid;
  grid-template-columns: subgrid;  /* 继承父网格列数 */
  grid-column: 1 / -1;
}
```

**深入理解**：Subgrid 解决了嵌套 Grid 时"轨道对齐"的问题。当在一个 Grid 项内部再使用 Grid 时，默认情况下内部网格的轨道是独立的——内外网格的列宽和行高无法对齐。`grid-template-columns: subgrid` 让子网格继承父网格的轨道定义，从而实现完美的跨层级对齐。这对于复杂的表格布局、卡片列表等场景至关重要。

**实际用例**：

```html
<div class="product-grid">
  <div class="product">
    <img src="..." class="product-img">
    <h3 class="product-title">Title</h3>
    <p class="product-desc">Description...</p>
    <span class="product-price">$29.99</span>
  </div>
  <!-- 更多 product 项 -->
</div>
```

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.product {
  display: grid;
  grid-template-rows: subgrid;     /* 继承父网格的行 */
  grid-row: span 4;                /* 跨越 4 行（实际行数） */
  gap: 0;
  /* 每个 product 内部自动与同行其他 product 的行对齐 */
}
```

**Subgrid 继承的是轨道线，不是尺寸**：

```css
.parent {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 16px;
}

.child {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  /* 列数 = 父级的 3 列 */
  /* gap 从父级继承，但可以覆盖 */
  gap: 8px;
}

.grandchild {
  grid-column: 2;     /* 对齐到父网格的第 2 列 */
}
```

**多层嵌套**：

```css
.grid-1 {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.grid-2 {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

.grid-3 {
  display: grid;
  grid-column: 2;
  grid-template-columns: subgrid;   /* 可以链式继承 */
}
```

**支持的浏览器**：

| 浏览器 | 支持情况 |
|--------|---------|
| Firefox | 71+ 完整支持 |
| Safari | 16+ 完整支持 |
| Chrome | 117+ 完整支持 |
| Edge | 117+ 完整支持 |

**面试追问**：
- Subgrid 和嵌套 Grid 的主要区别？嵌套 Grid 创建独立轨道系统，Subgrid 共享父级轨道定义，实现列/行对齐。
- Subgrid 可以做"瀑布流"吗？不行。Subgrid 只是轨道继承，不改变元素的排列顺序。
- 为什么 Firefox 最早支持 Subgrid？Mozilla 是 CSS Grid 规范的主要推动者，Subgrid 是 Grid Level 2 规范的一部分。

## Q10: text-overflow 和 多行省略

```css
/* 单行 */
.single-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行 */
.multi-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;       /* 限制 3 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

**深入理解**：文本截断是前端高频需求。单行省略是 CSS 的"标准方案"——需要三个属性协作：`overflow: hidden` 裁剪溢出内容、`text-overflow: ellipsis` 显示省略号、`white-space: nowrap` 禁止换行。多行省略目前仍依赖非标准的 `-webkit-line-clamp`（虽然已进入规范，但前缀写法仍广泛使用）。

**单行省略的完整注意事项**：

```css
/* 必须同时设置三个属性，缺一不可 */
.text-cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* 可选：指定 max-width 确保在 flex 容器中生效 */
  max-width: 100%;
}

/* Flexbox 中的单行省略 */
.flex-container {
  display: flex;
}
.flex-item-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;        /* 重要！flex 子元素需要 min-width: 0 才能收缩 */
}
```

**多行省略的完整方案**：

```css
/* 标准方法（-webkit-line-clamp）—— 支持所有现代浏览器 */
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 通用于所有浏览器的方案（使用 @supports） */
.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* 降级方案（非 webkit 浏览器显示梯度渐变） */
@supports not (-webkit-line-clamp: 3) {
  .line-clamp {
    max-height: 4.5em;          /* 3 行 * 1.5em */
    position: relative;
  }
  .line-clamp::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1.5em;
    background: linear-gradient(to right, transparent, white);
  }
}
```

**不推荐的方法——JS 计算**：

```js
// 用 JS 实现多行省略（适用于需要动态行数控制的场景）
function clampText(element, maxLines) {
  const lineHeight = parseInt(getComputedStyle(element).lineHeight)
  const maxHeight = lineHeight * maxLines
  while (element.scrollHeight > maxHeight) {
    element.textContent = element.textContent.slice(0, -1)
  }
  element.textContent += '...'
}
// 弊端：操作 DOM 触发重排，长文本性能差
```

**对比**：

| 方案 | 兼容性 | 灵活度 | 说明 |
|------|--------|--------|------|
| 单行 `text-overflow` | 所有浏览器 | 仅单行 | 标准方法 |
| `-webkit-line-clamp` | 主流现代浏览器 | 有限行数 | 事实标准 |
| `@supports` 降级 | 所有浏览器 | 视觉近似 | 需额外处理 |
| JS 计算 | 所有浏览器 | 最灵活 | 性能开销 |

**面试追问**：
- `text-overflow: ellipsis` 的省略号位置可以自定义吗？标准不支持自定义，但可以通过 `text-overflow: '...'`（字符串值）在某些浏览器自定义。
- `-webkit-line-clamp` 在 flex/grid 布局中的兼容性？现代浏览器表现良好，但在非常旧的 Safari 中需要 `display: -webkit-box`。
- 如何实现"展开/收起"功能？将 `-webkit-line-clamp` 与 max-height 切换配合，用 class 控制显示或展开。

## Q11: position sticky 原理

```css
.sticky-header {
  position: sticky;
  top: 0;
}
```

sticky = relative + fixed 的混合。元素在父容器内相对定位，父容器滚动到超出视口时"粘"在视口上。

**生效条件**：
- 父容器必须有 overflow: visible（默认）
- 父容器必须有具体高度（非 auto）
- sticky 元素必须指定 top/left/bottom/right 之一

**深入理解**：`position: sticky` 是一种"粘滞定位"——元素在正常流中占位（类似 relative），但当滚动到某个阈值时，它变得像 fixed 一样固定在屏幕上。这个"粘"的范围受限于父容器的边界——当父容器完全滚出视口时，sticky 元素也随之离开。理解这个"容器边界约束"是掌握 sticky 的关键。

**滚动机制分解**：

```css
/* 三个阶段（以向下滚动为例） */
.sticky-element {
  position: sticky;
  top: 100px;
}

/*
  阶段 1 — 元素的原位置在视口中上方
          正常流中，随页面滚动

  阶段 2 — 元素触及 top: 100px 阈值
          固定在 top: 100px 处（像 fixed）

  阶段 3 — 父容器底部即将滚动到视口
          跟随父容器一起滚出（不在固定）
*/
```

**多 sticky 元素的堆叠**：

```css
/* 粘性章节标题 —— 相互推走 */
.section-title {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

/* 多个 sticky 元素在同一方向时，后 HTML 顺序的"推"走先出现的 */
/* 形成类似 iOS 通讯录的字母标题效果 */

/* 嵌套 sticky */
.outer-sticky {
  position: sticky;
  top: 0;
}
.inner-sticky {
  position: sticky;
  top: 48px;           /* 相对于 outer-sticky 继续粘滞 */
}
```

**sticky 不生效的排查清单**：

```css
/* ❌ 问题 1：父容器 overflow 不为 visible */
.parent {
  overflow: auto;               /* 破坏 sticky */
}
.sticky { position: sticky; top: 0; }

/* ❌ 问题 2：父容器没有具体高度 */
.parent {
  height: auto;                 /* 父容器高度仅由子元素撑开，无滚动空间 */
}
.sticky { position: sticky; top: 0; }

/* ❌ 问题 3：sticky 元素自身 display: none */
/* ❌ 问题 4：父元素的高度全部被 sticky 子元素占满，无滚动余地 */

/* ❌ 问题 5：浏览器兼容性 —— 旧浏览器不支持 */
@supports (position: sticky) {
  .sticky { position: sticky; top: 0; }
}
```

**sticky 与 fixed 对比**：

```css
/* fixed：始终相对视口 */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* 不占用文档流空间 */
}

/* sticky：相对父容器 + 视口 */
.sticky-header {
  position: sticky;
  top: 0;
  /* 占文档流空间 */
}

/* 二者视觉差异：fixed 会覆盖其他内容，sticky 不会 */
```

**面试追问**：
- 父容器设置了 `overflow: hidden` 后 sticky 不工作，除了去掉 overflow 还有别的办法吗？可以尝试把 overflow 移到其他层级的容器，或者用 `position: fixed` + scroll 监听模拟。
- sticky 在 `display: flex` 中的表现？Flex 子元素可以使用 sticky，但前提是父容器高度大于子元素，且存在滚动空间。
- sticky 在表格（`<thead>` 中 `<th>`）的粘性表头怎么用？`<th>` 设置 `position: sticky; top: 0;` 即可，注意 `border-collapse` 可能影响。

## Q12: CSS 滚动驱动动画

```css
/* 滚动驱动的动画（Chrome 115+） */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fade-in linear;
  animation-timeline: scroll();  /* 滚动驱动 */
  animation-range: entry 0% entry 100%; /* 进入视口时播放 */
}

/* 滚动进度条 */
@keyframes shrink {
  from { width: 100%; }
  to { width: 0%; }
}
.progress-bar {
  animation: shrink linear;
  animation-timeline: scroll(root);
}
```

**深入理解**：Scroll-driven Animations 让 CSS 动画与滚动进度绑定，不再需要 JS + IntersectionObserver。`scroll()` 函数创建一个"滚动时间线"，动画进度等于滚动进度。这是 CSS 动画能力的重大提升——过去只能用 JS 监听 scroll 事件手动映射进度，现在 CSS 可以原生处理，且滚动在主线程外的合成线程上执行，性能更好。

**滚动时间线的类型**：

```css
/* scroll() 函数参数 */
scroll()                            /* 默认：最近滚动容器 + 块级轴 */
scroll(root)                        /* 文档级滚动 */
scroll(nearest)                     /* 最近的父滚动容器 */
scroll(root, inline)                /* 文档级 + 内联轴（水平滚动） */
scroll(this, block)                 /* 元素自身 + 块级轴 */

/* 视图时间线：基于元素自身在视口中的可见度 */
.view-element {
  animation: fade-in linear;
  animation-timeline: view();       /* 基于元素自身在视口中的位置 */
  animation-range: entry 0% exit 0%; /* 从进入视口到离开视口 */
}
```

**不同阶段（animation-range）**：

```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 只在元素进入视口时播放 */
.enter-animate {
  animation: fade both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}

/* 在元素进入和离开的全过程播放 */
.through-animate {
  animation: fade both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

/* 覆盖(cover)：元素完全在视口外到完全在视口内（默认） */
/* entry：开始进入视口到完全进入 */
/* exit：开始离开视口到完全离开 */
/* contain：完全在视口内时 */
```

**实际用例**：

```css
/* 视差滚动效果 */
@keyframes parallax {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}
.parallax-element {
  animation: parallax linear;
  animation-timeline: scroll(root);
}

/* 滚动进度条 */
@keyframes progress {
  from { width: 0; }
  to { width: 100%; }
}
:root::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  animation: progress linear;
  animation-timeline: scroll(root);
}

/* 渐入 + 缩放 —— 进入时动画 */
@keyframes card-enter {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(40px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.card {
  animation: card-enter linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

**JS 控制**：

```js
// 获取滚动时间线
const element = document.querySelector('.animated')
const timeline = element.animationTimeline

// 通过 JS 控制滚动位置来控制动画
// 或者触发 CSS 动画的播放/暂停
element.style.animationPlayState = 'paused'
```

**兼容性说明**：

| 浏览器 | 支持情况 |
|--------|---------|
| Chrome | 115+（有 flag）→ 正式版已发布 |
| Edge | 115+ |
| Firefox | 未发布（在开发中） |
| Safari | 未发布 |

**面试追问**：
- 滚动驱动动画能否控制速度方向？可以。`animation-direction` 和滚动方向配合，但默认滚动配合 `normal`，内容向下滚动画向前播。
- 如果用 IntersectionObserver 实现类似效果有什么劣势？需要 JavaScript、可能触发主线程重排、需要处理滚动节流。CSS 方案在合成线程运行。
- `scroll(root)` 和 `scroll(nearest)` 的区别？`root` 是文档级滚动（`document.documentElement`），`nearest` 是最近的父 `overflow: scroll/auto` 容器。

## Q13: CSS 性能优化

```
1. 选择器优化
   - 避免 * 通配符
   - 避免过分嵌套
   - 用 class 代替标签选择器

2. 布局优化
   - 尽量用 Flex/Grid（比 float 性能好）
   - 避免触发重排（reflow）的属性
   - transform + opacity 只触发合成（composite）

3. 动画优化
   - 只用 transform 和 opacity 做动画
   - 用 will-change 提示浏览器优化

4. 资源优化
   - 压缩 CSS
   - 移除未使用的 CSS
   - 关键 CSS 内联

5. 渲染优化
   - contain 属性限制渲染范围
   - content-visibility: auto 懒渲染
```

**深入理解**：CSS 性能优化不只是在"写 CSS"时要注意——它贯穿整个页面生命周期。从样式加载（关键 CSS 内联）、样式计算（选择器效率）、布局（触发重排的属性）、绘制（合成层）、到渲染（GPU 加速），每个阶段都有优化空间。理解浏览器的渲染管线是做出优化决策的基础。

**渲染管线（Pipeline）**：

```
JavaScript → Style → Layout → Paint → Composite

优化的核心目标：
1. 避免不必要的 Layout（重排）
2. 减少 Paint（重绘）区域
3. 尽量在 Composite（合成）层操作
```

**触发重排 vs 仅重绘 vs 仅合成的属性**：

```css
/* ❌ 触发重排（Layout + Paint + Composite）*/
width, height, margin, padding, border, top, left, position
font-size, font-family, line-height
display, float, clear

/* ⚠️ 仅重绘（Paint + Composite）—— 不触发重排 */
color, background-color, visibility, box-shadow, border-radius
outline, text-decoration

/* ✅ 仅合成（Composite）—— GPU 加速，最佳性能 */
transform, opacity
filter（部分浏览器）
```

**具体优化技巧**：

```css
/* 1. 批量修改样式 —— 减少触发次数 */
/* ❌ 触发多次重排 */
element.style.width = '100px'
element.style.height = '200px'
element.style.margin = '10px'

/* ✅ 使用 class 批量修改 */
element.classList.add('new-size')

/* ✅ 或使用 cssText */
element.style.cssText = 'width: 100px; height: 200px; margin: 10px'

/* 2. 读写分离 —— 避免强制同步布局 */
/* ❌ 交替读写导致多次重排 */
const w = element.clientWidth
element.style.width = w + 10 + 'px'
const h = element.clientHeight
element.style.height = h + 10 + 'px'

/* ✅ 先读后写 */
const w = element.clientWidth
const h = element.clientHeight
element.style.width = w + 10 + 'px'
element.style.height = h + 10 + 'px'
```

**关键 CSS 内联**：

```html
<!-- 将首屏渲染所需的关键 CSS 直接内联到 head 中 -->
<head>
  <style>
    /* 首屏关键样式 —— 约 10-15KB */
    body { margin: 0; font-family: system-ui; }
    .header { position: fixed; top: 0; width: 100%; height: 56px; }
    .hero { display: flex; align-items: center; justify-content: center; height: 100vh; }
    /* ... */
  </style>
  <!-- 其余 CSS 异步加载 -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

**性能工具**：

```css
/* Chrome DevTools 分析 */
/*
  Performance 面板 → 录制 → 查看 Main 线程
  - 绿色：Paint
  - 紫色：Layout（重排）
  - 黄色：JS 执行
  - 灰色：空闲

  检查是否有大量紫色 Layout 事件
*/

/* Layers 面板 */
/*
  查看合成层数量
  过多合成层占用 GPU 内存
*/
```

**面试追问**：
- 什么是"强制同步布局"（Forced Synchronous Layout）？在 JS 中读取布局属性（如 `offsetHeight`）前如果修改了样式，浏览器会强制立即执行布局计算。
- 如何检测 CSS 性能瓶颈？Chrome DevTools Performance 面板记录，查看 Layout 事件的时间和频率；Layers 面板查看合成层数量。
- 过度使用 `will-change` 有什么坏处？创建过多合成层消耗 GPU 内存，移动设备上可能导致卡顿、发热、掉电。

## Q14: will-change 是什么？

```css
.element {
  will-change: transform, opacity;
  /* 提示浏览器提前创建合成层 */
}
```

**注意**：不要加在所有元素上（会占用 GPU 内存）。只在动画"即将执行"时加入，动画结束后移除（或通过 JS 管理）。

**深入理解**：`will-change` 是"提前告知浏览器"属性——告诉浏览器某个元素即将发生变化，让浏览器提前分配资源（如创建合成层）进行优化。相当于你在动画"执行前"就告诉浏览器做好准备，避免动画开始的瞬间才处理。它是一种"性能提示"，不改变元素的视觉表现。

**正确使用方式**：

```css
/* ✅ 正确：在 hover 时触发 */
.sidebar {
  will-change: transform;
  transition: transform 0.3s;
}
.sidebar:hover {
  transform: translateX(200px);
}
/* 注意：这里的 will-change 始终作用于 .sidebar，不太合适。更好的方法： */

/* ✅ 更好的：hover 时才提示 */
.sidebar {
  transition: transform 0.3s;
}
.sidebar:hover {
  will-change: transform;
  transform: translateX(200px);
}
```

```js
// ✅ 通过 JS 精确控制：动画开始时设置，结束后移除
const element = document.querySelector('.animated-element')

// 动画开始前
element.style.willChange = 'transform'

// 启动动画（使用 requestAnimationFrame）
requestAnimationFrame(() => {
  element.classList.add('animating')

  // 动画结束后移除
  element.addEventListener('transitionend', () => {
    element.style.willChange = 'auto'
  }, { once: true })
})
```

**❌ 错误用法**：

```css
/* ❌ 所有元素都加 —— GPU 内存爆炸 */
* { will-change: transform; }

/* ❌ 常规元素不需要 */
p { will-change: transform; }   /* 普通段落不需要合成层 */

/* ❌ 不必要的属性 */
.will-change-all {
  will-change: transform, opacity, left, top, width, height;
  /* 太多属性会触发重排，违背优化初衷 */
}
```

**will-change 与合成层**：

```css
/* 以下属性都会触发元素创建独立合成层 */
will-change: transform
transform: translateZ(0)           /* "零平移"骗合成层——旧技巧 */
transform: translate3d(0,0,0)     /* 同上 */
backface-visibility: hidden
opacity (部分浏览器)

/* 合成层的优劣 */
/*
  优势：
  - 动画在 GPU 上运行，不占用主线程
  - 不影响周围元素的重排/重绘

  劣势：
  - 占用 GPU 内存
  - 过多的合成层导致层压缩（layer squashing）
  - 可能导致移动端功耗增加
*/
```

**performance 影响评估**：

| 元素数量 | 是否加 will-change | 表现 |
|---------|------------------|------|
| 少量（<10） | 加 | 动画更流畅 |
| 中量（10-50） | 谨慎加 | 需要衡量内存 vs 流畅度 |
| 大量（>50） | 不建议加 | GPU 内存不足反而卡顿 |

**面试追问**：
- `will-change: scroll-position` 有什么用？提示浏览器滚动时优化滚动位置相关的重绘，但使用场景有限。
- 为什么 `translateZ(0)` 在 2024 年之后不再推荐？现代浏览器的合成策略更智能，显式创建合成层不再必要，且消耗内存。
- `will-change: auto` 和 `will-change: initial` 的区别？`auto` 表示浏览器自动管理，没有任何特殊提示；`initial` 是关键字重置，行为相同。

## Q15: contain 属性

```css
/* 告诉浏览器元素的渲染范围 */
.element {
  contain: layout;    /* 布局独立 */
  contain: paint;     /* 绘制独立 */
  contain: size;      /* 大小独立 */
  contain: content;   /* layout + paint */
  contain: strict;    /* 全部 */
}
```

用于性能优化——页面某部分变化时，浏览器只需要重新渲染该元素及其子元素，不影响外部。

**深入理解**：`contain` 属性让 CSS 告诉浏览器"这个元素内部的变化不会影响外部"。浏览器可以利用这个信息来优化渲染——当包含元素内部发生变化时，不需要重新计算外部元素的布局或绘制。这在大页面中非常有效，比如可折叠面板、小组件、无限滚动列表中的项目。

**各值的含义**：

```css
/* contain: layout —— 内部布局不影响外部 */
.panel {
  contain: layout;
  /*
    好处：内部元素添加/删除/改变不触发外部重排
    注意：元素自身的位置变化仍然影响外部
  */
}

/* contain: paint —— 裁剪子元素的绘制范围 */
.card {
  contain: paint;       /* 类似 overflow: hidden */
  /*
    好处：子元素的可视边界被裁剪到 padding box
    典型用途：浮层组件防止内容溢出
    注意：不会影响布局，只影响绘制
  */
}

/* contain: size —— 元素大小不影响外部 */
.widget {
  contain: size;
  /*
    好处：子元素变化时父元素大小不变
    注意：必须显式指定 width/height，否则可能变成 0x0
  */
}

/* contain: content —— layout + paint + style */
.sidebar {
  contain: content;
  /*
    最常用的组合——布局和绘制都独立
    适用于大部分"内部变化不影响外部"的场景
  */
}

/* contain: strict —— layout + paint + size + style */
.modal {
  contain: strict;
  /*
    最严格的隔离——大小也固定
    适用于弹窗、菜单等独立区域
    注意：需指定宽高
  */
}
```

**实际场景**：

```css
/* 无限滚动列表的每项 */
.list-item {
  contain: layout paint;    /* 内部变化不影响其他项 */
  content-visibility: auto; /* 配合懒渲染 */
}

/* 可折叠面板 */
.accordion-panel {
  contain: layout;
}
.accordion-content {
  /* 展开/收起时不会影响外部布局 */
}

/* 独立组件（如弹窗、工具提示） */
.tooltip {
  contain: paint;
  /* 防止子元素溢出影响其他区域 */
}
```

**contain 的浏览器影响**：

```
CSS 含有  →  渲染边界  →  渲染子树（Render Subtree）
                                    ↓
                    内部变化只需重绘子树，不影响主树
```

```css
/* 检测 contain 是否生效 —— 通过 DevTools Performance 面板 */
/*
  在 Performance 面板中录制：
  - 无 contain 时：内部变化触发大面积 Layout
  - 有 contain 时：Layout 被限制在子树内
*/
```

**contain vs overflow**：

| 特性 | contain: paint | overflow: hidden |
|------|---------------|-----------------|
| 裁剪 | 裁剪到 padding box 边界 | 裁剪到 padding box 边界 |
| 渲染优化 | 浏览器可以利用边界优化 | 无优化提示 |
| 启用 BFC | 是 | 是 |
| 影响滚动 | 不影响 | 阻止滚动 |
| 含义 | "告诉我不会溢出" | "把我溢出部分裁剪掉" |

**面试追问**：
- `contain: size` 的正确使用姿势是什么？必须指定 `width` 和 `height`，否则因为子元素不参与计算，元素可能缩为 0。
- `contain: style` 的作用？隔离计数器（`counter-increment`/`counter-reset`）和引号，防止内部计数器泄露到外部——极少使用。
- `contain` 和 `content-visibility` 的关系？`content-visibility: auto` 隐式包含 `contain: layout paint style`，但不会隐式包含 `contain: size`。

## Q16: content-visibility

```css
/* 懒渲染——元素不在视口时不渲染 */
.element {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* 占位高度 */
}
```

元素移入视口时才开始渲染。大幅提升长页面性能。

**深入理解**：`content-visibility: auto` 是 CSS 的"懒惰渲染"属性——告诉浏览器"这个元素如果不在视口中，就跳过它的渲染"。当用户滚动到该元素时，浏览器才会执行其样式计算、布局、绘制和合成。配合 `contain-intrinsic-size` 提供占位空间，避免页面出现空白和滚动跳动。这是对长页面（如博客文章、产品列表）性能提升最显著的新 CSS 属性之一。

**基本使用**：

```css
/* 长文章中的每个章节 */
.chapter {
  content-visibility: auto;
  contain-intrinsic-size: 300px;  /* 预估高度，防止滚动跳动 */
}

/* 或更精确：设置 block-size */
.chapter {
  content-visibility: auto;
  contain-intrinsic-block-size: 300px;
}
```

**contain-intrinsic-size 的多种写法**：

```css
/* 固定值 */
.element {
  content-visibility: auto;
  contain-intrinsic-size: 500px;       /* 宽高相同 */
}

/* 单独指定宽高 */
.element {
  content-visibility: auto;
  contain-intrinsic-width: 100%;
  contain-intrinsic-height: 500px;
}

/* 简写 */
.element {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;  /* auto：如果已渲染用实际大小，否则 500px */
}

/* 更精确的 auto fallback */
.element {
  content-visibility: auto;
  contain-intrinsic-size: auto none;   /* auto：渲染后用实际，否则无固有大小 */
}
```

**性能提升效果**：

```css
/* 无 content-visibility：首次渲染所有元素 */
/*
  100 个 card，每个有复杂样式
  首次渲染时间：350ms
*/

/* 有 content-visibility */
.card {
  content-visibility: auto;
  contain-intrinsic-size: 200px;
}
/*
  首次渲染：仅视口内的 card 渲染（比如 4-6 个）
  渲染时间：35ms（提升 90%）
  滚动时后续 card 逐步渲染
*/
```

**注意事项**：

```css
/* 1. 使用 auto 时元素初始高度为 0（无 contain-intrinsic-size） */
.item {
  content-visibility: auto;
  /* 没有 contain-intrinsic-size → 高度为 0 → 滚动跳动 */
}

/* 2. visibility: hidden 不影响 content-visibility */
.hidden-item {
  content-visibility: auto;
  visibility: hidden;
  /* 仍然会被跳过渲染 */
}

/* 3. 搜索功能可能找不到隐藏内容 */
.searchable-list .item {
  content-visibility: auto;
  /* 如果查找未渲染的内容，可能找不到 */
  /* 方案：渲染后搜索，或对搜索框周围区域强制渲染 */
}
```

**配合 IntersectionObserver 的 JS 方案**：

```js
// JS 替代方案（content-visibility 的 polyfill）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.contentVisibility = 'visible'
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('.lazy-item').forEach(el => {
  observer.observe(el)
})
```

**兼容性与 fallback**：

```css
/* content-visibility 不支持时的降级 */
.card {
  /* 第一种：不使用 content-visibility 时的样式 */
}
@supports (content-visibility: auto) {
  .card {
    content-visibility: auto;
    contain-intrinsic-size: 200px;
  }
}
```

**面试追问**：
- `content-visibility: auto` 和 `display: none` 有什么区别？`display: none` 元素完全不出现在 accessibility tree 中，`content-visibility: auto` 的元素在辅助技术中仍然可见，只是视觉上跳过了渲染。
- 对 SEO 有影响吗？Google 搜索结果表示 content-visibility 不会影响 SEO，因为爬虫仍然可以读取 DOM 内容。
- 使用 `content-visibility: auto` 后滚动跳动怎么解决？通过 `contain-intrinsic-size` 设置合理占位高度是关键。如果预估高度不准确，可以先用 JS 测量第一屏元素高度作为基准。
