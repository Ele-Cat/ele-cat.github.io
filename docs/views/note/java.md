---
outline: [2, 3]
---

# Java

## 参考资料

- [廖雪峰 Java 教程](https://liaoxuefeng.com/books/java/introduction/index.html)（图文）
- [SpringBoot 官方指南](https://spring.io/guides/gs/spring-boot/)（英文）
- [SpringBoot 中文文档](https://springdoc.cn/)（部分翻译）
- [廖雪峰 SpringBoot 教程](https://liaoxuefeng.com/books/java/springboot/index.html)（图文）

## 01. 简介

Java是全球排名第一的编程语言。

- 从互联网到企业平台，Java是应用最广泛的编程语言，原因在于：

  - Java是基于JVM虚拟机的跨平台语言，一次编写，到处运行；
  - Java程序易于编写，而且有内置垃圾收集，不必考虑内存管理；
  - Java虚拟机拥有工业级的稳定性和高度优化的性能，且经过了长时期的考验；
  - Java拥有最广泛的开源社区支持，各种高质量组件随时可用。

- Java语言常年霸占着三大市场：

  - 互联网和企业应用，这是Java EE的长期优势和市场地位；
  - 大数据平台，主要有Hadoop、Spark、Flink等，他们都是Java或Scala（种运行于JVM的编程语言）开发的；
  - Android移动平台。

这意味着Java拥有最广泛的就业市场。

## 02. 入门

### 2.1 学习路线

::: warning 版本
- Java SE：Standard Edition 标准版（包含标准的JVM和标准库）
- Java EE：Enterprise Edition 企业版（包含企业级的应用服务器、数据库、消息队列等）
- Java ME：Micro Edition 微型版（主要用于嵌入式设备，如智能手机、平板电脑等）

<pre>
┌───────────────────────────┐
│Java EE                    │
│    ┌────────────────────┐ │
│    │Java SE             │ │
│    │    ┌─────────────┐ │ │
│    │    │   Java ME   │ │ │
│    │    └─────────────┘ │ │
│    └────────────────────┘ │
└───────────────────────────┘
</pre>
:::

1. 首先要学习Java SE，掌握Java语言本身、Java核心开发技术以及Java标准库的使用；
2. 如果继续学习Java EE，那么Spring框架、数据库开发、分布式架构就是需要学习的；
3. 如果要学习大数据开发，那么Hadoop、Spark、Flink这些大数据平台就是需要学习的，他们都基于Java或Scala开发；
4. 如果想要学习移动开发，那么就深入Android平台，掌握Android App开发。

### 2.2 名词解释

- JDK：Java Development Kit 开发工具包
- JRE：Java Runtime Environment 运行环境

JRE是运行Java字节码的虚拟机。但是，如果只有Java源码，要编译成Java字节码，就需要JDK，因为JDK除了包含JRE，还提供了编译器、调试器等开发工具。不同的操作系统有不同的JRE，所以Java程序可以在不同的操作系统上运行。

<pre>
  ┌─    ┌──────────────────────────────────┐
  │     │     Compiler, debugger, etc.     │
  │     └──────────────────────────────────┘
 JDK ┌─ ┌──────────────────────────────────┐
  │  │  │                                  │
  │ JRE │      JVM + Runtime Library       │
  │  │  │                                  │
  └─ └─ └──────────────────────────────────┘
        ┌───────┐┌───────┐┌───────┐┌───────┐
        │Windows││ Linux ││ macOS ││others │
        └───────┘└───────┘└───────┘└───────┘
</pre>