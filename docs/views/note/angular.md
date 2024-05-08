---
outline: [2, 3, 4] # 侧边栏深度
---

# Angular

- [Angular 官网](https://angular.cn/quick-start)
- [Material Design 组件库](https://material.angular.cn/)
- [跟随项目](https://github.com/ele-cat/learn-angular)

## 01. Angular 简介

### 1.1 什么是 Angular

Angular 是一个基于 [TypeScript](https://www.typescriptlang.org/) 构建的开发平台。它包括：

- 一个基于组件的框架，用于构建可伸缩的 Web 应用
- 一组完美集成的库，涵盖各种功能，包括路由、表单管理、客户端-服务器通信等
- 一套开发工具，可帮助你开发、构建、测试和更新代码

### 1.2 知识要点

#### 1.2.1 组件

组件是构成应用的砖块。组件包括三个部分：带有 `@Component()` 装饰器的 TypeScript 类、HTML 模板和样式文件。`@Component()` 装饰器会指定如下 Angular 专属信息：

- 一个 CSS 选择器，用于定义如何在模板中使用组件。模板中与此选择器匹配的 HTML 元素将成为该组件的实例。
- 一个 HTML 模板，用于指示 Angular 如何渲染此组件
- 一组可选的 CSS 样式，用于定义模板中 HTML 元素的外观

::: details Angular 组件示例

组件：

```js
import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

使用时：

```html
<hello-world></hello-world>
```

渲染时：

```html
<hello-world>
  <h2>Hello World</h2>
  <p>This is my first component!</p>
</hello-world>
```

:::

#### 1.2.2 模板

每个组件都有一个 HTML 模板，用于声明该组件的渲染方式。你可以内联它或用文件路径定义此模板。

Angular 添加了一些语法元素以扩展 HTML，让你可以从组件中插入动态值。当组件的状态更改时，Angular 会自动更新已渲染的 DOM。此功能的应用之一是插入动态文本。

::: details 插入动态文本示例

动态文本：

```html
<p>{{ message }}</p>
```

这里 message 的值来自组件类：

```js
import { Component } from "@angular/core";

@Component({
  selector: "hello-world-interpolation",
  templateUrl: "./hello-world-interpolation.component.html",
})
export class HelloWorldInterpolationComponent {
  message = "Hello, World!";
}
```

当应用加载组件及其模板时，用户将看到以下内容：

```html
<p>Hello, World!</p>
```

:::

Angular 还支持属性绑定，以帮助你设置 HTML 元素的 Property 和 Attribute 的值，并将这些值传给应用的展示逻辑。

- 双花括号 —— 它们指示 Angular 对其中的内容进行插值
- 方括号 —— 该语法表明你正在将 Property 或 Attribute 绑定到组件类中的值
- 圆括号 —— 指定事件名称来声明一个事件（比如按键、鼠标移动、单击和触摸等）监听器

::: details Angular 模板中插值和绑定的例子

:::code-group

```ts [bindings.component.ts]
import { Component } from "@angular/core";

@Component({
  selector: "app-bindings",
  templateUrl: "./bindings.component.html",
})
export class BindingsComponent {
  fontColor = "blue";
  sayHelloId = 1;
  canClick = false;
  message = "Hello, World";

  sayMessage() {
    alert(this.message);
  }
}
```

```html [bindings.component.html]
<button type="button" [disabled]="canClick" (click)="sayMessage()">
  Trigger alert message
</button>

<p [id]="sayHelloId" [style.color]="fontColor">
  You can set my color in the component!
</p>

<p>My color is {{ fontColor }}</p>
```

:::

可以用[指令](https://angular.cn/guide/built-in-directives)来为模板添加额外功能。Angular 中最常用的指令是 [\*ngIf](https://angular.cn/api/common/NgIf) 和 [\*ngFor](https://angular.cn/api/common/NgFor)。你可以使用指令执行各种任务，比如动态修改 DOM 结构。你还可以用自定义指令来创建出色的用户体验。

::: details `ngIf` 指令示例

:::code-group

```ts [ngif.component.ts]
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-ngif",
  templateUrl: "./ngif.component.html",
  imports: [CommonModule],
})
export class NgifComponent {
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = "You can edit me!";
    } else {
      this.message = "I'm read only!";
    }
  }
}
```

```html [ngif.component.html]
<h2>Hello World: ngIf!</h2>

<button type="button" (click)="onEditClick()">Make text editable!</button>

<div *ngIf="canEdit; else noEdit">
  <p>You can edit the following paragraph.</p>
</div>

<ng-template #noEdit>
  <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

<p [contentEditable]="canEdit">{{ message }}</p>
```

:::

#### 1.2.3 依赖注入

1. 定义依赖项：首先，需要定义要注入的依赖项。这可以是服务、组件、管道或其他可注入的对象。
2. 提供依赖项：然后，需要在应用程序的某个地方提供这些依赖项。通常，在 Angular 中使用提供商（Provider）来提供依赖项。提供商告诉 Angular 如何创建和获取依赖项的实例。
3. 注入依赖项：最后，在需要使用依赖项的地方，通过依赖注入将其注入到目标对象中。Angular 会自动解析依赖项并将其传递给目标对象。

### 1.3 Angular CLI

> Angular CLI 是开发 Angular 应用的最快、最简单和推荐的方式。Angular CLI 能简化许多任务。

1. 全局安装

```sh
npm install -g @angular/cli
# 查看脚手架版本
ng version
```

2. 基础命令

`ng` **<命令名> <必选参数> [可选参数]** `[选项]`

| 命令        | 详情                                                        |
| ----------- | ----------------------------------------------------------- |
| ng serve    | 构建你的应用并启动开发服务器，当有文件变化时就重新构建。    |
| ng build    | 把 Angular 应用编译到一个输出目录中。                       |
| ng generate | 基于原理图（schematic）生成或修改某些文件。                 |
| ng test     | 在指定的项目上运行单元测试。                                |
| ng e2e      | 构建一个 Angular 应用并启动开发服务器，然后运行端到端测试。 |

3. [命令概览](https://angular.cn/cli#command-overview)

### 1.4 生态库

| 库                                                            | 详情                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Angular 路由器 ](https://angular.cn/guide/router)            | 高级的客户侧导航功能与基于 Angular 组件的路由机制。支持惰性加载、嵌套路由、自定义路径匹配规则等。 |
| [Angular 表单 ](https://angular.cn/guide/forms-overview)      | 统一的表单填报与验证体系。                                                                        |
| [Angular HttpClient](https://angular.cn/guide/http)           | 健壮的 HTTP 客户端库，它可以支持更高级的客户端-服务器通讯。                                       |
| [Angular 动画 ](https://angular.cn/guide/animations)          | 丰富的动画体系，用于驱动基于应用状态的动画。                                                      |
| [Angular PWA ](https://angular.cn/guide/service-worker-intro) | 一些用于构建渐进式 Web 应用（PWA）的工具，包括 Service Worker 和 Web 应用清单（Manifest）。       |
| [Angular 原理图 ](https://angular.cn/guide/schematics)        | 一些搭建脚手架、重构和升级的自动化工具。用于简化大规模应用的开发。                                |

### 1.5 小练习

> 跟随[Angular 入门](https://angular.cn/start)，学习基础

## 02. 组件

组件是 Angular 应用的主要构造块。每个组件包括如下部分：

- 一个 HTML 模板，用于声明页面要渲染的内容
- 一个用于定义行为的 TypeScript 类
- 一个 CSS 选择器，用于定义组件在模板中的使用方式
- （可选）要应用在模板上的 CSS 样式

### 2.1 组件创建

#### 2.1.1 使用 `Angular CLI` 创建组件

```sh
ng generate component <component-name>
```

#### 2.1.2 手动创建组件

1. 创建目录`<component-name>`，在该目录下创建 `<component-name>.component.ts` 文件
2. 在文件顶部添加

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-<component-name>',
  templateUrl: './<component-name>.component.html',
  styleUrls: ['./<component-name>.component.css']
})

export class ComponentOverviewComponent {

}
```

<!-- <Comment /> -->
