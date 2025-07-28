---
outline: [2]
---

# Java

## 参考资料

- [廖雪峰 Java 教程](https://liaoxuefeng.com/books/java/introduction/index.html)（图文）
- [SpringBoot 官方指南](https://spring.io/guides/gs/spring-boot/)（英文）
- [SpringBoot 中文文档](https://springdoc.cn/)（部分翻译）
- [廖雪峰 SpringBoot 教程](https://liaoxuefeng.com/books/java/springboot/index.html)（图文）

## 01. 简介

Java 是全球排名第一的编程语言。

- 从互联网到企业平台，Java 是应用最广泛的编程语言，原因在于：

  - Java 是基于 JVM 虚拟机的跨平台语言，一次编写，到处运行；
  - Java 程序易于编写，而且有内置垃圾收集，不必考虑内存管理；
  - Java 虚拟机拥有工业级的稳定性和高度优化的性能，且经过了长时期的考验；
  - Java 拥有最广泛的开源社区支持，各种高质量组件随时可用。

- Java 语言常年霸占着三大市场：

  - 互联网和企业应用，这是 Java EE 的长期优势和市场地位；
  - 大数据平台，主要有 Hadoop、Spark、Flink 等，他们都是 Java 或 Scala（种运行于 JVM 的编程语言）开发的；
  - Android 移动平台。

这意味着 Java 拥有最广泛的就业市场。

## 02. 入门

### 2.1 学习路线

::: warning 版本

- Java SE：Standard Edition 标准版（包含标准的 JVM 和标准库）；
- Java EE：Enterprise Edition 企业版（包含企业级的应用服务器、数据库、消息队列等）；
- Java ME：Micro Edition 微型版（主要用于嵌入式设备，如智能手机、平板电脑等）。

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

1. 首先要学习 Java SE，掌握 Java 语言本身、Java 核心开发技术以及 Java 标准库的使用；
2. 如果继续学习 Java EE，那么 Spring 框架、数据库开发、分布式架构就是需要学习的；
3. 如果要学习大数据开发，那么 Hadoop、Spark、Flink 这些大数据平台就是需要学习的，他们都基于 Java 或 Scala 开发；
4. 如果想要学习移动开发，那么就深入 Android 平台，掌握 Android App 开发。

### 2.2 开发环境搭建

:::tip 名词解释

- JDK：Java Development Kit 开发工具包；
- JRE：Java Runtime Environment 运行环境。

JRE 是运行 Java 字节码的虚拟机。但是，如果只有 Java 源码，要编译成 Java 字节码，就需要 JDK，因为 JDK 除了包含 JRE，还提供了编译器、调试器等开发工具。不同的操作系统有不同的 JRE，所以 Java 程序可以在不同的操作系统上运行。

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

:::

#### 2.2.1 安装 JDK

从[Oracle 官网](https://www.oracle.com/java/technologies/downloads/)下载安装最新稳定版 JDK，选择合适的操作系统与安装包，Windows 系统直接选择`x64 MSI Installer`下载安装。

配置环境变量：

1. JDK 默认安装位置为`C:\Program Files\Java`，将`C:\Program Files\Java\jdk-*`添加到`PATH`环境变量中。
2. 在命令行工具中`java -version`就可以看到 java 版本输出。

:::tip Java 可执行文件
在`JAVA_HOME`的`bin`目录下找到很多可执行文件：

- java：这个可执行程序其实就是 JVM，运行 Java 程序，就是启动 JVM，然后让 JVM 执行指定的编译后的代码；
- javac：这是 Java 的编译器，它用于把 Java 源码文件（以.java 后缀结尾）编译为 Java 字节码文件（以.class 后缀结尾）；
- jar：用于把一组.class 文件打包成一个.jar 文件，便于发布；
- javadoc：用于从 Java 源码中自动提取注释并生成文档；
- jdb：Java 调试器，用于开发阶段的运行调试。

:::

#### 2.2.2 第一个 Java 程序

创建 Hello.java 文件并写入

```java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```

在命令行工具执行`java Hello.java`，可以看到正常输出`Hello, World!`。

:::tip 解释

- 语法`public class Hello {}`在 Java 中被称作`class(类)`
  - `public`表示这个类是公开的；
  - `public`、`class`是 Java 的关键字，必须小写；
  - `Hello`是类名且大小写敏感，按照习惯首字母`H`要大写。
- 语法`public static void main(String[] args) {}`是可执行代码块
  - `main`方法是 Java 程序的入口，`main`方法必须是`public static void`的，`args`参数是一个字符串数组，用来接收命令行参数；
  - `public`、`static`用来修饰方法，表示`main`是公开的静态方法；
  - `void`用来修饰方法，表示`main`没有返回值；
  - `{}`中则是方法的执行代码。
- `System.out.println("Hello, World!");`是方法调用，它用来打印字符
  - 在 java 中，可执行代码必须用`;`结尾。

:::

:::danger 注意
在实际项目中，单个且不依赖第三方库的 Java 程序几乎不存在，所以需要引入更高级的开发工具。
:::

#### 2.2.3 使用 IDE

:::tip 什么是 IDE
IDE 是集成开发环境：Integrated Development Environment 的缩写。使用 IDE 的好处在于，可以把编写代码、组织项目、编译、运行、调试等放到一个环境中运行，能极大地提高开发效率。
:::

直接上[IntelliJ Idea](https://www.jetbrains.com/idea/)，它是 Java 开发的首选 IDE。可以按如下步骤破解最新版，并成功激活到 2099 年！

1. 官网下载[IntelliJ Idea](https://www.jetbrains.com/idea/download/)，[备用地址](https://pan.quark.cn/s/8db2c68023d6)；
2. 一步一步的安装，安装结束后不要“立即运行”；
3. 下载[激活工具](https://pan.baidu.com/s/1px5_xV9jnpcTLZz1SJ2n6Q?pwd=3yxk)，[备用地址](https://pan.baidu.com/s/1i360HbSBlpTk2F6AqHHwtA?pwd=1lpf)；
4. 按照激活工具教程执行破解。

### 2.3 Java 基础

#### 2.3.1 Java 程序基本结构

1. Java 程序的基本结构：

   ```java
   public class Hello {
     public static void main(String[] args) {
       // 向屏幕输出文本:
       System.out.println("Hello, world!");
     }
   } // class定义结束
   ```

2. 因为 Java 是面向对象语言，一个程序的基本单位就是`class`，这里`class`的名字就是`Hello`：

   ```java
   public class Hello { // 类名是Hello
     // ...
   }
   ```

   类名要求：

   - 类名必须以英文字母开头，后接字母、数字和下划线的组合；
   - 习惯以大写字母开头。

3. 在`class`内部可以定义若干方法（method）：

   ```java
   public class Hello {
     public static void main(String[] args) { // 方法名是main
       // 方法代码...
     }
   }
   ```

   方法定义了一组执行语句，方法内部的代码将会依次顺序执行。这里的方法名是`main`，返回值是`void`，表示没有任何返回值。`public`既可以修饰`class`，也可以修饰方法，`static`表示静态方法。

   :::danger 注意
   Java 入口程序规定的方法必须是静态方法，方法名必须是`main`，括号内的参数必须是 String 数组。
   :::

4. 方法内部的语句才是真正的执行代码。Java 的每一行语句必须以分号结束：

   ```java
   System.out.println("Hello, World!"); // 语句
   ```

#### 2.3.2 变量

在 Java 中，变量必须先定义后使用，在定义变量时，可以给它一个初始值，例如：

```java
int x = 100;
```

上面的语句定义了一个整型`int`类型的变量 ，名称为`x`，初始值为`100`。

变量支持重新赋值，例如

```java
public class Main {
  public static void main (String[] args) {
    int x = 100;
    System.out.println(x);
    x = 200;
    System.out.println(x);
  }
}
```

打印结果为

```bash
100
200
```

:::danger 注意
注意到第一次定义变量`x`的时候，需要指定变量类型`int`，因此使用语句`int x = 100;`。而第二次重新赋值的时候，变量`x`已经存在了，不能再重复定义，因此不能指定变量类型`int`，必须使用语句`x = 200;`。
:::

变量不但可以重新赋值，还可以赋值给其他变量，例如：

```java
public class Main {
  public static void main (String[] args) {
    int x = 100;
    System.out.println("x=" + x); // 打印x的值
    x = 200;
    System.out.println("x=" + x); // 打印修改后x的值
    int y = x; // 变量赋值
    System.out.println("y=" + y); // 打印y的值
    y = y + 100; // 变量y修改
    System.out.println("y=" + y); // 打印y的值
    System.out.println("x=" + x); // 变量y修改后，x的值是否会受影响？
  }
}
```

:::details 执行后的打印结果为

```bash
x=100
x=200
y=200
y=300
x=200
```

:::

:::details 执行的流程与原理

执行 int x = 100;，该语句定义了变量 x，同时赋值为 100，因此，JVM 在内存中为变量 x 分配一个“存储单元”，填入值 100：

<pre>
      x
      │
      ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │100│   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┘
</pre>

执行 x = 200;时，JVM 把 200 写入变量 x 的存储单元，因此，原有的值被覆盖，现在 x 的值为 200：

<pre>
      x
      │
      ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┘
</pre>

执行 int y = x;时，定义了一个新的变量 y，同时对 y 赋值，因此，JVM 需要新分配一个存储单元给变量 y，并写入和变量 x 一样的值，结果是变量 y 的值也变为 200：

<pre>
      x           y
      │           │
      ▼           ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │200│   │   │
└───┴───┴───┴───┴───┴───┴───┘
</pre>

执行 y = y + 100;时，JVM 首先计算等式右边的值 y + 100，结果为 300（因为此刻 y 的值为 200），然后，将结果 300 写入 y 的存储单元，因此，变量 y 最终的值变为 300：

<pre>
      x           y
      │           │
      ▼           ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │300│   │   │
└───┴───┴───┴───┴───┴───┴───┘
</pre>

可见，变量可以反复赋值。注意，等号=是赋值语句，不是数学意义上的相等，否则无法解释 y = y + 100。
:::

#### 2.3.3 基本数据类型

:::tip 基础数据类型是 CPU 可以直接运算的类型：

1. 整数类型：byte、short、int、long
2. 浮点数类型：float、double
3. 字符类型：char
4. 布尔类型：boolean

:::

:::details 基本数据类型有什么区别
Java 定义的这些基本数据类型有什么区别呢？要了解这些区别，我们就必须简单了解一下计算机内存的基本结构。

计算机内存的最小存储单元是字节（byte），一个字节就是一个 8 位二进制数，即 8 个 bit。它的二进制表示范围从`00000000`~`11111111`，换算成十进制是 0~255，换算成十六进制是`00`~`ff`。

内存单元从 0 开始编号，称为内存地址。每个内存单元可以看作一间房间，内存地址就是门牌号。

<pre>
  0   1   2   3   4   5   6  ...
┌───┬───┬───┬───┬───┬───┬───┐
│   │   │   │   │   │   │   │...
└───┴───┴───┴───┴───┴───┴───┘
</pre>

一个字节是 1byte，1024 字节是 1K，1024K 是 1M，1024M 是 1G，1024G 是 1T。一个拥有 4T 内存的计算机的字节数量就是：

<pre>
4T = 4 x 1024G
   = 4 x 1024 x 1024M
   = 4 x 1024 x 1024 x 1024K
   = 4 x 1024 x 1024 x 1024 x 1024
   = 4398046511104
</pre>

不同的数据类型占用的字节数不一样。我们看一下 Java 基本数据类型占用的字节数：

<pre>
       ┌───┐
  byte │   │
       └───┘
       ┌───┬───┐
 short │   │   │
       └───┴───┘
       ┌───┬───┬───┬───┐
   int │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
  long │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┬───┬───┐
 float │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
double │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┐
  char │   │   │
       └───┴───┘
</pre>

byte 恰好就是一个字节，而 long 和 double 需要 8 个字节。
:::

1. 整型

   对于整型类型，Java 只定义了带符号的整型，因此，最高位的 bit 表示符号位（0 表示正数，1 表示负数）。各种整型能表示的最大范围如下：

   - byte：-128 ~ 127
   - short: -32768 ~ 32767
   - int: -2147483648 ~ 2147483647
   - long: -9223372036854775808 ~ 9223372036854775807

   ```java
   // 定义整型
   public class Main {
     public static void main(String[] args) {
       int i1 = 2147483647;
       System.out.println("i1=" + i1);
       int i2 = -2147483648;
       System.out.println("i2=" + i2);
       int i3 = 2_000_000_000; // 加下划线更容易识别
       System.out.println("i3=" + i3);
       int i4 = 0xff0000; // 十六进制表示的16711680
       System.out.println("i4=" + i4);
       int i5 = 0b1000000000; // 二进制表示的512
       System.out.println("i5=" + i5);

       long n1 = 9000000000000000000L; // long型的结尾需要加L
       System.out.println("n1=" + n1);
       long n2 = 900; // 没有加L，此处900为int，但int类型可以赋值给long
       System.out.println("n2=" + n2);
       // int i6 = 900L; // 错误：不能把long型赋值给int
     }
   }
   ```

   :::details 输出结果

   ```bash
   i1=2147483647
   i2=-2147483648
   i3=2000000000
   i4=16711680
   i5=512
   n1=9000000000000000000
   n2=900
   ```

   如果放开`int i6 = 900L;`的注释，再执行代码会直接报错，且不会输出前面的结果。
   :::

2. 浮点型

   :::tip 为什么叫浮点类型
   浮点类型的数就是小数，因为小数用科学计数法表示的时候，小数点是可以“浮动”的，如 1234.5 可以表示成 12.345x10^2，也可以表示成 1.2345x10^3，所以称为浮点数。
   :::

   ```java
   float f1 = 3.14f;
   float f2 = 3.14e38f; // 科学计数法表示的3.14x10^38
   float f3 = 1.0; // 错误：不带f结尾的是double类型，不能赋值给float

   double d = 1.79e308;
   double d2 = -1.79e308;
   double d3 = 4.9e-324; // 科学计数法表示的4.9x10^-324
   ```

   对于`float`类型，需要加上`f`后缀。

   浮点数可表示的范围非常大，`float`类型可最大表示 3.4x10^38，而`double`类型可最大表示 1.79x10^308。

3. 字符型

   字符类型`char`表示一个字符。Java 的`char`类型除了可表示标准的 ASCII 外，还可以表示一个 Unicode 字符：

   ```java
   // 字符类型
   public class Main {
     public static void main(String[] args) {
       char a = 'A';
       char zh = '中';
       System.out.println(a);
       System.out.println(zh);
     }
   }
   ```

   注意 char 类型使用单引号`'`，且仅有一个字符，要和双引号`"`的字符串类型区分开。

4. 布尔型

   布尔类型`boolean`只有`true`和`false`两个值，布尔类型总是关系运算的计算结果：

   ```java
   boolean b1 = true;
   boolean b2 = false;
   boolean isGreater = 5 > 3; // 计算结果为true
   int age = 12;
   boolean isAdult = age >= 18; // 计算结果为false
   ```

   Java 语言对布尔类型的存储并没有做规定，因为理论上存储布尔类型只需要 1 bit，但是通常 JVM 内部会把`boolean`表示为 4 字节整数。

5. 引用类型

   除了上述基本类型的变量，剩下的都是引用类型。例如，引用类型最常用的就是`String`字符串：

   ```java
   String s = "hello";
   ```

6. 常量

   定义变量的时候，如果加上`final`修饰符，这个变量就变成了常量：

   ```java
   final double PI = 3.14; // PI是一个常量
   double r = 5.0;
   double area = PI * r * r;
   PI = 300; // compile error!
   ```

   **常量在定义时进行初始化后就不可再次赋值**，再次赋值会导致编译错误。

   常量的作用是用有意义的变量名来避免魔术数字（Magic number），例如，不要在代码中到处写`3.14`，而是定义一个常量。如果将来需要提高计算精度，我们只需要在常量的定义处修改，例如，改成`3.1416`，而不必在所有地方替换`3.14`。

   _为了和变量区分开来，根据习惯，常量名通常全部大写。_

7. var 关键字

   有些时候，类型的名字太长，写起来比较麻烦。例如：

   ```java
   StringBuilder sb = new StringBuilder();
   ```

   这个时候，如果想省略变量类型，可以使用`var`关键字：

   ```java
   var sb = new StringBuilder();
   ```

   编译器会根据赋值语句自动推断出变量`sb`的类型是`StringBuilder`。对编译器来说，语句：

   ```java
   var sb = new StringBuilder();
   ```

   实际上会自动变成：

   ```java
   StringBuilder sb = new StringBuilder();
   ```

   因此，使用`var`定义变量，仅仅是少写了变量类型而已。

#### 2.3.4 整数运算

Java 的整数运算遵循四则运算规则：

```java
public class Main {
  public static void main(String[] args) {
    int i = (1 + 2) * (4 - 3); // 3
    int j = 7 * (i - 2); // 7
  }
}
```

:::danger 注意
整数的数值表示不但是精确的，而且整数运算永远是精确的，即使是除法也是精确的，因为两个整数相除只能得到结果的整数部分：

```
int x = 5 / 2; // 2
```

求余运算使用`%`：

```
int y = 5 % 2; // 5÷2的余数是1
```

特别注意：整数的除法对于除数为 0 时运行时将报错，但编译不会报错。
:::

:::details 整数运算的其他特性

1. 溢出

   由于存在范围限制，整数计算结果如果超出了范围，就会产生溢出，而溢出*不会出错*，却会得到一个奇怪的结果：

   ```java
   public class Hello {
     public static void main(String[] args) {
       int x = 2147483640;
       int y = 15;
       int sum = x + y;
       System.out.println("sum=" + sum); // -2147483641
     }
   }
   ```

   解释上述结果，需要把整数`2147483640`和`15`转换成二进制后做加法：

   <pre style="overflow:hidden;">
     0111 1111 1111 1111 1111 1111 1111 1000
   + 0000 0000 0000 0000 0000 0000 0000 1111
   -----------------------------------------
     1000 0000 0000 0000 0000 0000 0000 0111
   </pre>

   由于最高位计算结果为`1`，因此，加法结果变成了一个负数。

   要解决上面的问题，可以把`int`换成`long`类型，由于`long`可表示的整型范围更大，所以结果就不会溢出：

   ```java
   long x = 2147483640;
   long y = 15;
   long sum = x + y;
   System.out.println(sum); // 2147483655
   ```

2. 简写运算符

   ```java
   int n = 5;
   n += 5;
   System.out.println("n=" + n); // 10，相当于 n = n + 5;
   n *= 10;
   System.out.println("n=" + n); // 100，相当于 n = n * 10;
   ```

3. 自增/自减运算符

   ```java
   int n = 3300;
   n++; // 3301, 相当于 n = n + 1;
   n--; // 3300, 相当于 n = n - 1;
   int y = 100 + (++n); // 相当于 y = 100 + n + 1
   System.out.println(y);
   ```

   注意到上面的`++n`目测与`n++`结果一样，但其实是有区别的

   ```java
   int n = 3300;
   System.out.println("n++=" + n++); // 3300
   int m = 3300;
   System.out.println("++m=" + ++m); // 3301
   ```

   可以看出，**`n++`为先输出后计算，而`++n`为先计算后输出**。

4. 位移运算

   在计算机中，整数总是以二进制的形式表示。例如，`int`类型的整数`7`使用 4 字节表示的二进制如下：

   00000000 0000000 0000000 00000111

   可以对整数进行移位运算。对整数`7`左移 1 位将得到整数`14`，左移两位将得到整数`28`：

   ```java
   int n = 7;       // 00000000 00000000 00000000 00000111 = 7
   int a = n << 1;  // 00000000 00000000 00000000 00001110 = 14
   int b = n << 2;  // 00000000 00000000 00000000 00011100 = 28
   int c = n << 28; // 01110000 00000000 00000000 00000000 = 1879048192
   int d = n << 29; // 11100000 00000000 00000000 00000000 = -536870912
   ```

   左移 29 位时，由于最高位变成`1`，因此结果变成了负数。

   类似的，对整数 28 进行右移，结果如下：

   ```java
   int n = 7;       // 00000000 00000000 00000000 00000111 = 7
   int a = n >> 1;  // 00000000 00000000 00000000 00000011 = 3
   int b = n >> 2;  // 00000000 00000000 00000000 00000001 = 1
   int c = n >> 3;  // 00000000 00000000 00000000 00000000 = 0
   ```

   如果对一个负数进行右移，最高位的 1 不动，结果仍然是一个负数：

   ```java
   int n = -536870912;
   int a = n >> 1;  // 11110000 00000000 00000000 00000000 = -268435456
   int b = n >> 2;  // 11111000 00000000 00000000 00000000 = -134217728
   int c = n >> 28; // 11111111 11111111 11111111 11111110 = -2
   int d = n >> 29; // 11111111 11111111 11111111 11111111 = -1
   ```

   还有一种无符号的右移运算，使用`>>>`，它的特点是不管符号位，右移后高位总是补`0`，因此，对一个负数进行`>>>`右移，它会变成正数，原因是最高位的`1`变成了`0`：

   ```java
   int n = -536870912;
   int a = n >>> 1;  // 01110000 00000000 00000000 00000000 = 1879048192
   int b = n >>> 2;  // 00111000 00000000 00000000 00000000 = 939524096
   int c = n >>> 29; // 00000000 00000000 00000000 00000111 = 7
   int d = n >>> 31; // 00000000 00000000 00000000 00000001 = 1
   ```

   对`byte`和`short`类型进行移位时，会首先转换为`int`再进行位移。

   仔细观察可发现，**左移实际上就是不断地`×2`，右移实际上就是不断地`÷2`**。

5. 位运算

   位运算是按位进行与、或、非和异或的运算。我们先来看看针对单个 bit 的位运算。

   与运算的规则是，必须两个数同时为`1`，结果才为`1`：

   ```java
   n = 0 & 0; // 0
   n = 0 & 1; // 0
   n = 1 & 0; // 0
   n = 1 & 1; // 1
   ```

   或运算的规则是，只要任意一个为`1`，结果就为`1`：

   ```java
   n = 0 | 0; // 0
   n = 0 | 1; // 1
   n = 1 | 0; // 1
   n = 1 | 1; // 1
   ```

   非运算的规则是，`0`和`1`互换：

   ```java
   n = ~0; // -1
   n = ~1; // -2
   ```

   异或运算的规则是，如果两个数不同，结果为`1`，否则为`0`：

   ```java
   n = 0 ^ 0; // 0
   n = 0 ^ 1; // 1
   n = 1 ^ 0; // 1
   n = 1 ^ 1; // 0
   ```

   Java 没有单个 bit 的数据类型。在 Java 中，对两个整数进行位运算，实际上就是按位对齐，然后依次对每一位进行运算。例如：

   ```java
   // 位运算
   public class Main {
     public static void main(String[] args) {
       int i = 167776589; // 00001010 00000000 00010001 01001101
       int n = 167776512; // 00001010 00000000 00010001 00000000
                         // & -----------------------------------
                           // 00001010 00000000 00010001 00000000
       System.out.println(i & n); // 167776512
     }
   }
   ```

   上述按位与运算实际上可以看作两个整数表示的 IP 地址`10.0.17.77`和`10.0.17.0`，通过与运算，可以快速判断一个 IP 是否在给定的网段内。

6. 运算优先级

   在 Java 的计算表达式中，运算优先级从高到低依次是：

   - `()`
   - `!` `~` `++` `--`
   - `*` `/` `%`
   - `+` `-`
   - `<<` `>>` `>>>`
   - `&`
   - `|`
   - `+=` `-=` `*=` `/=`

7. 类型自动提升与强制转型

   在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为较大类型的整型。例如，`short`和`int`计算，结果总是`int`，原因是`short`首先自动被转型为`int`：

   ```java
   // 类型自动提升与强制转型
   public class Main {
     public static void main(String[] args) {
       short s = 1234;
       int i = 123456;
       int x = s + i; // s自动转型为int
       short y = s + i; // 编译错误!
     }
   }
   ```

   也可以将结果强制转型，即将大范围的整数转型为小范围的整数。强制转型使用`(类型)`，例如，将`int`强制转型为`short`：

   ```java
   int i = 12345;
   short s = (short) i; // 12345
   ```

   要注意，超出范围的强制转型会得到错误的结果，原因是转型时，`int`的两个高位字节直接被扔掉，仅保留了低位的两个字节：

   ```java
   // 强制转型
   public class Main {
     public static void main(String[] args) {
       int i1 = 1234567;
       short s1 = (short) i1; // -10617
       System.out.println(s1);
       int i2 = 12345678;
       short s2 = (short) i2; // 24910
       System.out.println(s2);
     }
   }
   ```

   因此，强制转型的结果很可能是错的。

:::

#### 2.3.5 浮点数运算

:::tip 浮点数运算差异

浮点数运算和整数运算相比，只能进行加减乘除这些数值计算，不能做位运算和移位运算。

在计算机中，浮点数虽然表示的范围大，但是，浮点数有个非常重要的特点，就是浮点数常常无法精确表示。

:::

浮点数`0.1`在计算机中就无法精确表示，因为十进制的`0.1`换算成二进制是一个无限循环小数，很显然，无论使用`float`还是`double`，都只能存储一个`0.1`的近似值。但是，`0.5`这个浮点数又可以精确地表示。

因为浮点数常常无法精确表示，因此，浮点数运算会产生误差：

```java
// 浮点数运算误差
public class Main {
  public static void main(String[] args) {
    double x = 1.0 / 10; // 0.1
    double y = 1 - 9.0 / 10; // 0.09999999999999998
  }
}

```

由于浮点数存在运算误差，所以比较两个浮点数是否相等常常会出现错误的结果。正确的比较方法是判断两个浮点数之差的绝对值是否小于一个很小的数：

```java
public class Hello {
  public static void main(String[] args) {
    double x = 1.0 / 10;
    double y = 1 - 9.0 / 10;
    double r = Math.abs(x - y);
    System.out.println(r < 0.00001); // true
  }
}
```

浮点数在内存的表示方法和整数比更加复杂。Java 的浮点数完全遵循[IEEE-754](https://standards.ieee.org/ieee/754/6210/)标准，这也是绝大多数计算机平台都支持的浮点数标准表示方法。

:::details 浮点数运算的其他特性

1. 类型提升

   如果参与运算的两个数其中一个是整型，那么整型可以自动提升到浮点型：

   ```java
   public class Hello {
     public static void main(String[] args) {
       int n = 5;
       double d = 1.2 + 24.0 / n; // 6.0
     }
   }
   ```

   需要特别注意，在一个复杂的四则运算中，两个整数的运算不会出现自动提升的情况。例如：

   ```java
   double d = 1.2 + 24 / 5; // 结果不是 6.0 而是 5.2
   ```

   计算结果为`5.2`，原因是编译器计算`24 / 5`这个子表达式时，按两个整数进行运算，结果仍为整数`4`。

   要修复这个计算结果，可以将`24 / 5`改为`24.0 / 5`。由于`24.0`是浮点数，因此，计算除法时自动将`5`提升为浮点数。

2. 溢出

   整数运算在除数为 0 时会报错，而浮点数运算在除数为 0 时，不会报错，但会返回几个特殊值：

   - NaN 表示 Not a Number
   - Infinity 表示无穷大
   - -Infinity 表示负无穷大

   例如：

   ```java
   double d1 = 0.0 / 0; // NaN
   double d2 = 1.0 / 0; // Infinity
   double d3 = -1.0 / 0; // -Infinity
   ```

   这三种特殊值在实际运算中很少碰到，我们只需要了解即可。

3. 强制转型

   可以将浮点数强制转型为整数。在转型时，浮点数的小数部分会被丢掉。如果转型后超过了整型能表示的最大范围，将返回整型的最大值。例如：

   ```java
   int n1 = (int) 12.3; // 12
   int n2 = (int) 12.7; // 12
   int n3 = (int) -12.7; // -12
   int n4 = (int) (12.7 + 0.5); // 13
   int n5 = (int) 1.2e20; // 2147483647
   ```

   如果要进行四舍五入，可以对浮点数加上`0.5`再强制转型：

   ```java
   // 四舍五入
   public class Main {
     public static void main(String[] args) {
       double d = 2.6;
       int n = (int) (d + 0.5);
       System.out.println(n);
     }
   }
   ```

:::

#### 2.3.6 布尔运算

对于布尔类型`boolean`，永远只有`true`和`false`两个值。

布尔运算是一种关系运算，包括以下几类：

- 比较运算符：`>`，`>=`，`<`，`<=`，`==`，`!=`
- 与运算 `&&`
- 或运算 `||`
- 非运算 `!`

下面是一些示例：

```java
boolean isGreater = 5 > 3; // true
int age = 12;
boolean isZero = age == 0; // false
boolean isNonZero = !isZero; // true
boolean isAdult = age >= 18; // false
boolean isTeenager = age > 6 && age < 18; // true
```

关系运算符的优先级从高到低依次是：

- `!`
- `>`，`>=`，`<`，`<=`
- `==`，`!=`
- `&&`
- `||`

:::details 布尔运算的其他特性

1. 短路运算

   布尔运算的一个重要特点是短路运算。如果一个布尔运算的表达式能提前确定结果，则后续的计算不再执行，直接返回结果。

   因为`false && x`的结果总是`false`，无论`x`是`true`还是`false`，因此，与运算在确定第一个值为` false``后，不再继续计算，而是直接返回 `false`。

   ```java
   // 短路运算
   public class Main {
     public static void main(String[] args) {
       boolean b = 5 < 3;
       boolean result = b && (5 / 0 > 0); // 此处 5 / 0 不会报错
       System.out.println(result);
     }
   }
   ```

   如果没有短路运算，`&&`后面的表达式会由于除数为`0`而报错，但实际上该语句并未报错，原因在于与运算是短路运算符，提前计算出了结果`false`。

   如果变量`b`的值为`true`，则表达式变为`true && (5 / 0 > 0)`。因为无法进行短路运算，该表达式必定会由于除数为`0`而报错，可以自行测试。

   类似的，对于`||`运算，只要能确定第一个值为`true`，后续计算也不再进行，而是直接返回`true`：

   ```java
   boolean result = true || (5 / 0 > 0); // true
   ```

2. 三元运算符

   Java 还提供一个三元运算符`b ? x : y`，它根据第一个布尔表达式的结果，分别返回后续两个表达式之一的计算结果。示例：

   ```java
   // 三元运算
   public class Main {
     public static void main(String[] args) {
       int n = -100;
       int x = n >= 0 ? n : -n;
       System.out.println(x); // 100
     }
   }
   ```

   上述语句的意思是，判断`n >= 0`是否成立，如果为`true`，则返回`n`，否则返回`-n`。这实际上是一个求绝对值的表达式。

   注意到三元运算`b ? x : y`会首先计算`b`，如果`b`为`true`，则只计算`x`，否则，只计算`y`。此外，`x`和`y`的类型必须相同，因为返回值不是`boolean`，而是`x`和`y`之一。

:::

#### 2.3.7 字符与字符串

> 在 Java 中，字符和字符串时两个不同的类型。

1. 字符类型

   字符类型`char`是基本数据类型，它是`character`的缩写。一个`char`保存一个 Unicode 字符：

   ```java
   char c1 = 'A';
   char c2 = '中';
   ```

   因为 Java 在内存中总是使用 Unicode 表示字符，所以，一个英文字符和一个中文字符都用一个`char`类型表示，它们都占用两个字节。要显示一个字符的`Unicode`编码，只需将`char`类型直接赋值给`int`类型即可：

   ```java
   int n1 = 'A'; // 字母“A”的 Unicodde 编码是 65
   int n2 = '中'; // 汉字“中”的 Unicode 编码是 20013
   ```

   还可以直接用转义字符`\u`+Unicode 编码来表示一个字符：

   ```java
   // 注意是十六进制:
   char c3 = '\u0041'; // 'A'，因为十六进制 0041 = 十进制 65
   char c4 = '\u4e2d'; // '中'，因为十六进制 4e2d = 十进制 20013
   ```

2. 字符串类型

   和`char`类型不同，字符串类型`String`是引用类型，我们用双引号`"..."`表示字符串。一个字符串可以存储 0 个到任意个字符：

   ```java
   String s = ""; // 空字符串，包含0个字符
   String s1 = "A"; // 包含一个字符
   String s2 = "ABC"; // 包含3个字符
   String s3 = "中文 ABC"; // 包含6个字符，其中有一个空格
   ```

   因为字符串使用双引号`"..."`表示开始和结束，那如果字符串本身恰好包含一个`"`字符怎么表示？例如，`"abc"xyz"`，编译器就无法判断中间的引号究竟是字符串的一部分还是表示字符串结束。这个时候，我们需要借助转义字符`\`：

   ```java
   String s = "abc\"xyz"; // 包含7个字符: a, b, c, ", x, y, z
   ```

   因为`\`是转义字符，所以，两个`\\`表示一个`\`字符：

   ```java
   String s = "abc\\xyz"; // 包含7个字符: a, b, c, \, x, y, z
   ```

   常见的转义字符包括：

   - `\"` 表示字符`"`
   - `\'` 表示字符`'`
   - `\\` 表示字符`\`
   - `\n` 表示换行符
   - `\r` 表示回车符
   - `\t` 表示 Tab
   - `\u####` 表示一个 Unicode 编码的字符
     例如：

   ```java
   String s = "ABC\n\u4e2d\u6587"; // 包含6个字符: A, B, C, 换行符, 中, 文
   ```

   :::details 字符串的其他特性

   1. 字符串连接

      Java 的编译器对字符串做了特殊照顾，可以使用+连接任意字符串和其他数据类型，这样极大地方便了字符串的处理。例如：

      ```java
      // 字符串连接
      public class Main {
        public static void main(String[] args) {
          String s1 = "Hello";
          String s2 = "world";
          String s = s1 + " " + s2 + "!";
          System.out.println(s); // Hello world!
        }
      }
      ```

      如果用+连接字符串和其他数据类型，会将其他数据类型先自动转型为字符串，再连接：

      ```java
      // 字符串连接
      public class Main {
        public static void main(String[] args) {
          int age = 25;
          String s = "age is " + age;
          System.out.println(s); // age is 25
        }
      }
      ```

   2. 多行字符串

      如果我们要表示多行字符串，使用`+`号连接会非常不方便：

      ```java
      String s = "first line \n"
              + "second line \n"
              + "end";
      ```

      从 Java 13 开始，字符串可以用`"""..."""`表示多行字符串（Text Blocks）了。举个例子：

      ```java
      // 多行字符串
      public class Main {
        public static void main(String[] args) {
          String s = """
                    SELECT * FROM
                      users
                    WHERE id > 100
                    ORDER BY name DESC""";
          System.out.println(s);
        }
      }
      ```

   3. 不可变特性

      Java 的字符串除了是一个引用类型外，还有个重要特点，就是字符串不可变。考察以下代码：

      ```java
      // 字符串不可变
      public class Main {
        public static void main(String[] args) {
          String s = "hello";
          System.out.println(s); // 显示 hello
          s = "world";
          System.out.println(s); // 显示 world
        }
      }
      ```

      观察执行结果，难道字符串`s`变了吗？其实变的不是字符串，而是变量`s`的“指向”。

      执行`String s = "hello";`时，JVM 虚拟机先创建字符串`"hello"`，然后，把字符串变量`s`指向它：

      <pre>
            s
            │
            ▼
      ┌───┬───────────┬───┐
      │   │  "hello"  │   │
      └───┴───────────┴───┘
      </pre>

      紧接着，执行`s = "world";时，JVM虚拟机先创建字符串`"world"，然后，把字符串变量`s`指向它：

      <pre>
            s ──────────────┐
                            │
                            ▼
      ┌───┬───────────┬───┬───────────┬───┐
      │   │  "hello"  │   │  "world"  │   │
      └───┴───────────┴───┴───────────┴───┘
      </pre>

      原来的字符串`"hello"`还在，只是我们无法通过变量`s`访问它而已。因此，字符串的不可变是指字符串内容不可变。至于变量，可以一会指向字符串`"hello"`，一会指向字符串`"world"`。

      理解了引用类型的“指向”后，试解释下面的代码输出：

      ```java
      // 字符串不可变
      public class Main {
        public static void main(String[] args) {
          String s = "hello";
          String t = s;
          s = "world";
          System.out.println(t); // t是"hello"还是"world"?
        }
      }
      ```

   4. 空值 null

      引用类型的变量可以指向一个空值`null`，它表示不存在，即该变量不指向任何对象。例如：

      ```java
      String s1 = null; // s1是null
      String s2 = s1; // s2也是null
      String s3 = ""; // s3指向空字符串，不是null
      ```

      注意要区分空值`null`和空字符串`""`，空字符串是一个有效的字符串对象，它不等于`null`。

   :::

#### 2.3.8 数组类型

:::tip 引子
如果我们有一组类型相同的变量，例如，5 位同学的成绩，可以这么写：

```java
public class Main {
  public static void main(String[] args) {
    // 5位同学的成绩:
    int n1 = 68;
    int n2 = 79;
    int n3 = 91;
    int n4 = 85;
    int n5 = 62;
  }
}
```

但其实没有必要定义 5 个 int 变量。可以使用数组来表示“一组”int 类型。代码如下：

```java
// 数组
public class Main {
  public static void main(String[] args) {
    // 5位同学的成绩:
    int[] ns = new int[5];
    ns[0] = 68;
    ns[1] = 79;
    ns[2] = 91;
    ns[3] = 85;
    ns[4] = 62;
  }
}
```

:::

定义一个数组类型的变量，使用数组类型“类型[]”，例如：`int[]`。和单个基本类型变量不同，数组变量类型初始化必须使用`new int[5]`表示创建一个可容纳 5 个`int`元素的数组。

Java 的数组有几个特点：

- 数组所有元素初始化为默认值，整型都是`0`，浮点型是`0.0`，布尔型是`false`；
- 数组一旦创建后，大小就不可改变。

要访问数组中的某个元素，需要使用索引。数组索引从`0`开始，例如，5 个元素的数组，索引范围是`0`~`4`。

可以修改数组中的某一个元素，使用赋值语句，例如，`ns[1] = 79;`。

可以使用`数组变量.length`获取数组大小。

```java
// 数组
public class Main {
  public static void main(String[] args) {
    // 5位同学的成绩:
    int[] ns = new int[5];
    System.out.println(ns.length); // 5
  }
}
```

数组是引用类型，在使用索引访问数组元素时，如果索引超出范围，运行时将报错：

```java
// 数组
public class Main {
  public static void main(String[] args) {
    // 5位同学的成绩:
    int[] ns = new int[5];
    int n = 5;
    System.out.println(ns[n]); // 索引n不能超出范围
  }
}
```

也可以在定义数组时直接指定初始化的元素，这样就不必写出数组大小，而是由编译器自动推算数组大小。例如：

```java
// 数组
public class Main {
  public static void main(String[] args) {
    // 5位同学的成绩:
    int[] ns = new int[] { 68, 79, 91, 85, 62 };
    // int[] ns = { 68, 79, 91, 85, 62 }
    System.out.println(ns.length); // 编译器自动推算数组大小为5
  }
}
```

:::details 字符串数组

如果数组元素不是基本类型，而是一个引用类型，那么，修改数组元素会有哪些不同？

字符串是引用类型，因此我们先定义一个字符串数组：

```java
String[] names = {
  "ABC", "XYZ", "zoo"
};
```

对于 String[]类型的数组变量 names，它实际上包含 3 个元素，但每个元素都指向某个字符串对象：

<pre>
          ┌─────────────────────────┐
    names │   ┌─────────────────────┼───────────┐
      │   │   │                     │           │
      ▼   │   │                     ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
</pre>

对 names[1]进行赋值，例如 names[1] = "cat";，效果如下：

<pre>
          ┌─────────────────────────────────────────────────┐
    names │   ┌─────────────────────────────────┐           │
      │   │   │                                 │           │
      ▼   │   │                                 ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │ "cat" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
</pre>

这里注意到原来`names[1]`指向的字符串`"XYZ"`并没有改变，仅仅是将`names[1]`的引用从指向`"XYZ"`改成了指向`"cat"`，其结果是字符串`"XYZ"`再也无法通过`names[1]`访问到了。

对“指向”有了更深入的理解后，试解释如下代码：

```java
// 数组
public class Main {
  public static void main(String[] args) {
    String[] names = {"ABC", "XYZ", "zoo"};
    String s = names[1];
    names[1] = "cat";
    System.out.println(s); // s是"XYZ"还是"cat"?
  }
}
```

:::

### 2.4 流程控制

在 Java 程序中，JVM 默认总是顺序执行以分号`;`结束的语句。但是，在实际的代码中，程序经常需要做条件判断、循环，因此，需要有多种流程控制语句，来实现程序的跳转和循环等功能。

#### 2.4.1 输入与输出

1. 输出

   在前面的代码中，我们总是使用`System.out.println()`来向屏幕输出一些内容。

   `println`是 print line 的缩写，表示输出并换行。因此，如果输出后不想换行，可以用`print()`：

   ```java
   public class Main {
     public static void main(String[] args) {
       System.out.print("A,");
       System.out.print("B,");
       System.out.print("C.");
       System.out.println();
       System.out.println("END");
       /**
        * A,B,C.
       * END
       */
     }
   }
   ```

   :::details 格式化输出

   Java 还提供了格式化输出的功能。为什么要格式化输出？因为计算机表示的数据不一定适合人来阅读：

   ```java
   // 格式化输出
   public class Main {
     public static void main(String[] args) {
       double d = 12900000;
       System.out.println(d); // 1.29E7
     }
   }
   ```

   如果要把数据显示成我们期望的格式，就需要使用格式化输出的功能。格式化输出使用`System.out.printf()`，通过使用占位符`%?`，`printf()`可以把后面的参数格式化成指定格式：

   ```java
   // 格式化输出
   public class Main {
     public static void main(String[] args) {
       double d = 3.1415926;
       System.out.printf("%.2f\n", d); // 显示两位小数3.14
       System.out.printf("%.4f\n", d); // 显示4位小数3.1416
     }
   }
   ```

   Java 的格式化功能提供了多种占位符，可以把各种数据类型“格式化”成指定的字符串：

   | 占位符 | 说明                             |
   | :----- | :------------------------------- |
   | %d     | 格式化输出整数                   |
   | %x     | 格式化输出十六进制整数           |
   | %f     | 格式化输出浮点数                 |
   | %e     | 格式化输出科学计数法表示的浮点数 |
   | %s     | 格式化字符串                     |

   注意，由于`%`表示占位符，因此，连续两个`%%`表示一个`%`字符本身。

   占位符本身还可以有更详细的格式化参数。下面的例子把一个整数格式化成十六进制，并用 0 补足 8 位：

   ```java
   // 格式化输出
   public class Main {
     public static void main(String[] args) {
       int n = 12345000;
       System.out.printf("n=%d, hex=%08x", n, n); // 注意，两个%占位符必须传入两个数
     }
   }
   ```

   详细的格式化参数请参考 JDK 文档[java.util.Formatter](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html#syntax)

   :::

2. 输入

   ```java
   import java.util.Scanner;

   public class Main {
     public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in); // 创建Scanner对象
       System.out.print("Input your name: "); // 打印提示
       String name = scanner.nextLine(); // 读取一行输入并获取字符串
       System.out.print("Input your age: "); // 打印提示
       int age = scanner.nextInt(); // 读取一行输入并获取整数
       System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
     }
   }
   ```

   :::details 解析

   首先，我们通过`import`语句导入`java.util.Scanner`，`import`是导入某个类的语句，必须放到 Java 源代码的开头。

   然后，创建`Scanner`对象并传入`System.in`。`System.out`代表标准输出流，而`System.in`代表标准输入流。直接使用`System.in`读取用户输入虽然是可以的，但需要更复杂的代码，而通过`Scanner`就可以简化后续的代码。

   有了``Scanner`对象后，要读取用户输入的字符串，使用`scanner.nextLine()`，要读取用户输入的整数，使用`scanner.nextInt()`。`Scanner`会自动转换数据类型，因此不必手动转换。

   编译成功后，执行：

   ```bash
   $ java Main
   Input your name: Bob ◀── 输入 Bob
   Input your age: 12   ◀── 输入 12
   Hi, Bob, you are 12  ◀── 输出
   ```

   :::

#### 2.4.2 if 条件判断

> 在 Java 程序中，如果要根据条件来决定是否执行某一段代码，就需要`if`语句。

```java
// if 语句的基本语法是：
if (条件) {
  // 条件满足时执行
}
```

根据`if`的计算结果（`true`还是`false`），JVM 决定是否执行`if`语句块（即花括号{}包含的所有语句）。

```java
// 条件判断
public class Main {
  public static void main(String[] args) {
    int n = 90;
    if (n >= 90) {
      System.out.println("优秀");
    } else if (n >= 60) {
      System.out.println("及格了");
    } else {
      System.out.println("挂科了");
    }
  }
}
```

:::danger 注意点

- 当且仅当`if`语句只有一行时，可以省略`{}`，不推荐；
- 使用时注意条件顺序与条件边界；
- 浮点数判断时不能直接使用`==`运算符；
- 引用类型判断内容时要使用`equals()`，要注意避免`NullPointerException`。

:::

#### 2.4.3 switch 多重选择

> `switch`语句根据`switch (表达式)`计算的结果，跳转到匹配的`case`结果，然后继续执行后续语句，直到遇到`break`结束执行。

```java
public class Main {
  public static void main(String[] args) {
    int option = 1;
    switch (option) {
      case 1:
        System.out.println("Selected 1");
        break;
      case 2:
        System.out.println("Selected 2");
        break;
      case 3:
        System.out.println("Selected 3");
        break;
      default:
        System.out.println("Selected other");
        break;
    }
  }
}
```

:::danger 注意点

- 不要忘记`switch`语句中每个`case`语句后都要添加`break`语句；
- 多个`case`语句执行同一组语句块，可以合并；
  ```java
  public class Main {
    public static void main(String[] args) {
      int i = 3;
      switch (i) {
        case 1:
          System.out.println("Selected 1");
          break;
        case 2:
        case 3:
          System.out.println("Selected 2 or 3");
          break;
        default:
          System.out.println("Selected other");
          break;
      }
    }
  }
  ```
- `switch`语句只要保证有`break`语句，`case`的顺序不影响程序逻辑；
- `switch`中可以匹配字符串，同`equals`方法；
- 不要忘记`default`语句；
- 从 Java 12 开始，`switch`语句升级为更简洁的表达式语法，且不需要`break`语句；
  ```java
  public class Main {
    public static void main(String[] args) {
      int i = 1;
      switch (i) {
        case 1 -> System.out.println("Selected 1");
        case 2,3 -> System.out.println("Selected 2 or 3");
        default -> System.out.println("Selected other");
      }
    }
  }
  ```
- 可以通过`yield`语句返回值；
  :::

#### 2.4.4 while 循环

> 循环语句就是让计算机根据条件做循环计算，在条件满足时继续循环，条件不满足时退出循环。

```java
// 基本用法：
while (条件表达式) {
  // 循环语句
}
// 继续执行后续代码
```

例如计算从 1 到 100 的和：

```bash
1+2+3+...+99+100=??
```

可以通过`while`循环实现：

```java
public class Main {
  public static void main(String[] args) {
    int i = 100;
    int sum = 0;
    while (i > 0) {
      sum += i;
      i--;
    }
    System.out.println(sum); // 5050
  }
}
```

> `while`循环是**先判断循环条件，再执行循环**，因此可能出现一次循环都不执行的情况。

#### 2.4.5 do while 循环

> 在 Java 中，`while`循环是先判断循环条件，再执行循环。而另一种`do while`循环则是**先执行循环，再判断条件，条件满足时继续循环，条件不满足时退出**。`do while`循环至少会执行一次循环，它的用法是：

```java
do {
    执行循环语句
} while (条件表达式);
```

通过`do while`循环实现计算从 1 到 100 的和：

```java
public class Main {
  public static void main(String[] args) {
    int i = 100;
    int sum = 0;
    do {
      sum += i;
      i--;
    } while (i > 0);
    System.out.println(sum); // 5050
  }
}
```

#### 2.4.6 for 循环

除了`while`和`do while`循环，Java 使用最广泛的是`for`循环。

> `for`循环的功能非常强大，它使用计数器实现循环。`for`循环会先初始化计数器，然后，在每次循环前检测循环条件，在每次循环后更新计数器。计数器变量通常命名为`i`。

我们把 1 到 100 求和用`for`循环改写一下：

```java
public class Main {
  public static void main(String[] args) {
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
      sum = sum + i;
    }
    System.out.println(sum);
  }
}
```

:::details 解析

在`for`循环执行前，会先执行初始化语句`int i=1`，它定义了计数器变量`i`并赋初始值为`1`，然后，循环前先检查循环条件`i<=100`，循环后自动执行`i++`，因此，和`while`循环相比，`for`循环把更新计数器的代码统一放到了一起。在`for`循环的循环体内部，不需要去更新变量`i`。

:::

:::details `for`循环的其他特性

1. `for`循环支持对数组的循环：

   ```java
   public class Main {
     public static void main(String[] args) {
       int sum = 0;
       int[] ns = {1, 4, 9, 16, 25};
       for (int i = 0; i < ns.length; i++) {
         sum += ns[i];
       }
       System.out.println(sum); // 55
     }
   }
   ```

   :::tip 解析

   上面代码的循环条件是`i<ns.length`。因为`ns`数组的长度是`5`，因此，当循环`5`次后，`i`的值被更新为`5`，就不满足循环条件，因此`for`循环结束。

   > 如果把`i < ns.length`改为`i <= ns.length`，会导致数组越界异常：`Index 5 out of bounds for length 5`

   > 注意不要在循环体内修改计数器！

2. `for`循环支持对字符串的循环：

   ```java
   public class Main {
     public static void main(String[] args) {
       String s = "Hello";
       for (int i = 0; i < s.length(); i++) {
         System.out.println(s.charAt(i));
       }
     }
   }
   ```

3. 灵活使用 for 循环

   `for`循环还可以缺少初始化语句、循环条件和每次循环更新语句，例如：

   ```java
   // 不设置结束条件:
   for (int i = 0; ; i++) {
     // ...
   }

   // 不设置结束条件和更新语句:
   for (int i = 0; ;) {
     // ...
   }

   // 什么都不设置:
   for (;;) {
     // ...
   }
   ```

   通常不推荐这样写，但是，某些情况下，是可以省略`for`循环的某些语句的。

4. for each 循环

   可以通过简写方法遍历数组：

   ```java
   public class Main {
     public static void main(String[] args) {
       int[] ns = {1, 4, 9, 16, 25};
       for (int n : ns) {
         System.out.println(n);
       }
     }
   }
   ```

   除了数组外，`for each`循环能够遍历所有“可迭代”的数据类型，包括`List`、`Map`等。

:::

#### 2.4.7 break 和 continue

无论是`while`循环还是`for`循环，有两个特别的语句可以使用，就是`break`语句和`continue`语句。

1. break

   > `break`语句用于跳出循环，执行循环后面的语句。

   ```java
   public class Main {
     public static void main(String[] args) {
       int sum = 0;
       for (int i = 0; ; i++) {
         sum += i;
         if (i == 100) break;
       }
       System.out.println(sum); // 5050
     }
   }
   ```

   :::danger 注意

   `break`语句总是跳出并结束自己所在的那一层循环。

   :::

2. continue

   > `continue`语句用于跳过当前循环，执行下一次循环。

   ```java
   public class Main {
     public static void main(String[] args) {
       for (int i = 1; i <= 10 ; i++) {
         if (i % 2 == 0) {
           continue;
         }
         System.out.println(i); // 1 3 5 7 9
       }
     }
   }
   ```

   :::danger 注意

   `continue`语句总是提前结束本次自己所在的循环。

   :::

### 2.5 数组操作

#### 2.5.1 遍历数组

可以使用`for`循环或者`for each`循环遍历数组：

```java
public class Main {
  public static void main(String[] args) {
    int[] ns = {1, 4, 9, 16, 25};
    // for (int i = 0; i < ns.length; i++) {
    //   System.out.println(ns[i]);
    // }
    for (int n : ns) {
      System.out.println(n);
    }
  }
}
```

:::danger 注意

使用`for each`循环更简洁，但在遍历数组时，无法获取元素索引。

:::

:::details 打印数组内容

1. 想要直接打印数组变量，会得到数组的内存地址：

   ```java
   public class Main {
     public static void main(String[] args) {
       int[] ns = {1, 4, 9, 16, 25};
       System.out.println(ns); // [I@37a71e93
     }
   }
   ```

   > `[I`表示这是一个`int`类型的数组，`@`后面的`37a71e93`是数组在内存中的地址。

2. 使用`Arrays.toString()`可以快速打印数组内容：

   ```java
   import java.util.Arrays;

   public class Main {
     public static void main(String[] args) {
       int[] ns = {1, 4, 9, 16, 25};
       System.out.println(Arrays.toString(ns)); // [1, 4, 9, 16, 25]
     }
   }
   ```

:::

#### 2.5.2 数组排序

常用的数组排序算法有**冒泡排序**、**选择排序**、**插入排序**、**快速排序**、**归并排序**等。

如何使用冒泡排序对数组进行从小到大排序，示例：

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
    for (int i = 0; i < ns.length; i++) {
      for (int j = 0; j < ns.length - i - 1; j++) {
        if (ns[j] > ns[j + 1]) {
          int temp = ns[j];
          ns[j] = ns[j + 1];
          ns[j + 1] = temp;
        }
      }
    }
    System.out.println(Arrays.toString(ns)); // [8, 12, 18, 28, 36, 50, 65, 73, 89, 96]
  }
}
```

Java 中内置了排序功能，可通过调用`Arrays.sort()`实现：

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
    Arrays.sort(ns);
    System.out.println(Arrays.toString(ns)); // [8, 12, 18, 28, 36, 50, 65, 73, 89, 96]
  }
}
```

:::details 注意，对数组排序实际上修改了数组本身

例如，排序前的数组是：

```java
int[] ns = { 9, 3, 6, 5 };
```

在内存中，这个整型数组表示如下：

<pre>
      ┌───┬───┬───┬───┐
ns───▶│ 9 │ 3 │ 6 │ 5 │
      └───┴───┴───┴───┘
</pre>

当我们调用`Arrays.sort(ns);`后，这个整型数组在内存中变为：

<pre>
      ┌───┬───┬───┬───┐
ns───▶│ 3 │ 5 │ 6 │ 9 │
      └───┴───┴───┴───┘
</pre>

即变量`ns`指向的数组内容已经被改变了。

如果对一个字符串数组进行排序，例如：

```java
String[] ns = { "banana", "apple", "pear" };
```

排序前，这个数组在内存中表示如下：

<pre>
                   ┌──────────────────────────────────┐
               ┌───┼──────────────────────┐           │
               │   │                      ▼           ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────▶│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                 ▲
           └─────────────────┘
</pre>

调用`Arrays.sort(ns);`排序后，这个数组在内存中表示如下：

<pre>
                   ┌──────────────────────────────────┐
               ┌───┼──────────┐                       │
               │   │          ▼                       ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────▶│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                              ▲
           └──────────────────────────────┘
</pre>

原来的 3 个字符串在内存中均没有任何变化，但是`ns`数组的每个元素指向变化了。

:::

#### 2.5.3 多维数组

1. 二维数组

   二维数组是一个特殊的一维数组，其每个元素都是一个一维数组。

   例如，一个`3 * 4`的二维数组可以表示为：

   ```java
   int[][] ns = {
     { 1, 2, 3, 4 },
     { 5, 6, 7, 8 },
     { 9, 10, 11, 12 }
   };
   ```

   :::details 二维数组解析

   在内存中，这个二维数组表示如下：

   <pre>
                       ┌───┬───┬───┬───┐
           ┌───┐  ┌──▶│ 1 │ 2 │ 3 │ 4 │
   ns ────▶│░░░│──┘   └───┴───┴───┴───┘
           ├───┤      ┌───┬───┬───┬───┐
           │░░░│─────▶│ 5 │ 6 │ 7 │ 8 │
           ├───┤      └───┴───┴───┴───┘
           │░░░│──┐   ┌───┬───┬───┬───┐
           └───┘  └──▶│ 9 │10 │11 │12 │
                       └───┴───┴───┴───┘
   </pre>

   1. 访问二维数组

      可以使用`ns[i][j]`访问二维数组的第`i`行第`j`列的元素。例如：

      ```java
      int n = ns[1][2]; // 7
      ```

   2. 遍历二维数组

      可以使用两层循环遍历二维数组。例如：

      ```java
      public class Main {
        public static void main(String[] args) {
          // 用二维数组表示的学生成绩:
          int[][] ns = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
          };
          for (int[] n : ns) {
            for (int i : n) {
              System.out.print(i + ",");
            }
            System.out.println();
          }
        }
      }
      ```

      也可以通过`Arrays.deepToString()`来打印二维数组。例如：

      ```java
      System.out.println(Arrays.deepToString(ns)); // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
      ```

   :::

2. 三维数组

   三维数组就是二维数组的数组。可以这么定义一个三维数组：

   ```java
   int[][][] ns = {
     {
       {1, 2, 3},
       {4, 5, 6},
       {7, 8, 9}
     },
     {
       {10, 11},
       {12, 13}
     },
     {
       {14, 15, 16},
       {17, 18}
     }
   };
   ```

   它在内存中的结构如下：

   <pre>
                                 ┌───┬───┬───┐
                     ┌───┐  ┌──▶│ 1 │ 2 │ 3 │
                 ┌──▶│░░░│──┘   └───┴───┴───┘
                 │   ├───┤      ┌───┬───┬───┐
                 │   │░░░│─────▶│ 4 │ 5 │ 6 │
                 │   ├───┤      └───┴───┴───┘
                 │   │░░░│──┐   ┌───┬───┬───┐
           ┌───┐  │   └───┘  └──▶│ 7 │ 8 │ 9 │
   ns ────▶│░░░│──┘              └───┴───┴───┘
           ├───┤      ┌───┐      ┌───┬───┐
           │░░░│─────▶│░░░│─────▶│10 │11 │
           ├───┤      ├───┤      └───┴───┘
           │░░░│──┐   │░░░│──┐   ┌───┬───┐
           └───┘  │   └───┘  └──▶│12 │13 │
                 │              └───┴───┘
                 │   ┌───┐      ┌───┬───┬───┐
                 └──▶│░░░│─────▶│14 │15 │16 │
                     ├───┤      └───┴───┴───┘
                     │░░░│──┐   ┌───┬───┐
                     └───┘  └──▶│17 │18 │
                                 └───┴───┘
   </pre>

   如果我们要访问三维数组的某个元素，例如，`ns[2][0][1]`，只需要顺着定位找到对应的最终元素`15`即可。

   理论上，我们可以定义任意的 N 维数组。但在实际应用中，除了二维数组在某些时候还能用得上，更高维度的数组很少使用。

## 03. 面向对象编程

### 3.1 面向对象基础

> 面向对象编程，是一种通过对象的方式，把现实世界映射到计算机模型的一种编程方法。

现实世界中，我们定义了“人”这种抽象概念，而具体的人则是“小明”、“小红”、“小军”等一个个具体的人。所以，“人”可以定义为一个类（class），而具体的人则是实例（instance）：

| 现实世界 | 计算机模型  | Java 代码                  |
| -------- | ----------- | -------------------------- |
| 人       | 类 / class  | class Person { }           |
| 小明     | 实例 / ming | Person ming = new Person() |
| 小红     | 实例 / hong | Person hong = new Person() |
| 小军     | 实例 / jun  | Person jun = new Person()  |

同样的，“书”也是一种抽象的概念，所以它是类，而《Java 核心技术》、《Java 编程思想》、《Java 学习笔记》则是实例：

| 现实世界      | 计算机模型   | Java 代码               |
| ------------- | ------------ | ----------------------- |
| 书            | 类 / class   | class Book { }          |
| Java 核心技术 | 实例 / book1 | Book book1 = new Book() |
| Java 编程思想 | 实例 / book2 | Book book2 = new Book() |
| Java 学习笔记 | 实例 / book3 | Book book3 = new Book() |

1. class 和 instance

   - class 是一种对象模版，它定义了如何创建实例，因此，class 本身就是一种数据类型；
   - instance 是对象实例，instance 是根据 class 创建的实例，可以创建多个 instance，每个 instance 类型相同，但各自属性可能不相同。

2. 定义 class

   在 Java 中，创建一个类，例如，给这个类命名为`Person`，就是定义一个`class`：

   ```java
   class Person {
     public String name;
     public int age;
   }
   ```

   一个`class`可以包含多个字段（`field`），字段用来描述一个类的特征。上面的`Person`类，我们定义了两个字段，一个是`String`类型的字段，命名为`name`，一个是`int`类型的字段，命名为`age`。因此，通过`class`，把一组数据汇集到一个对象上，实现了数据封装。

   `public`是用来修饰字段的，它表示这个字段可以被外部访问。

3. 创建实例

   定义了 class，只是定义了对象模版，而要根据对象模版创建出真正的对象实例，必须用 new 操作符。

   new 操作符可以创建一个实例，然后，我们需要定义一个引用类型的变量来指向这个实例：

   ```java
   Person ming = new Person();
   ```

   上述代码创建了一个 Person 类型的实例，并通过变量`ming`指向它。

   注意区分`Person ming`是定义`Person`类型的变量`ming`，而`new Person()`是创建`Person`实例。

   有了指向这个实例的变量，我们就可以通过这个变量来操作实例。访问实例变量可以用`变量.字段`，例如：

   ```java
   ming.name = "Xiao Ming"; // 对字段name赋值
   ming.age = 12; // 对字段age赋值
   System.out.println(ming.name); // 访问字段name

   Person hong = new Person();
   hong.name = "Xiao Hong";
   hong.age = 15;
   ```

   上述两个变量分别指向两个不同的实例，它们在内存中的结构如下：

   <pre>
               ┌──────────────────┐
   ming ──────▶│Person instance   │
               ├──────────────────┤
               │name = "Xiao Ming"│
               │age = 12          │
               └──────────────────┘
   </pre>
   <pre>
               ┌──────────────────┐
   hong ──────▶│Person instance   │
               ├──────────────────┤
               │name = "Xiao Hong"│
               │age = 15          │
               └──────────────────┘
   </pre>

   两个`instance`拥有`class`定义的`name`和`age`字段，且各自都有一份独立的数据，互不干扰。

#### 3.1.1 方法

:::details 引子

一个`class`可以包含多个`field`，例如，我们给`Person`类就定义了两个`field`：

```java
class Person {
  public String name;
  public int age;
}
```

但是，直接把`field`用`public`暴露给外部可能会破坏封装性。比如，代码可以这样写：

```java
Person ming = new Person();
ming.name = "Xiao Ming";
ming.age = -99; // age设置为负数
```

显然，直接操作`field`，容易造成逻辑混乱。为了避免外部代码直接去访问`field`，我们可以用`private`修饰`field`，拒绝外部访问：

```java
class Person {
  private String name;
  private int age;
}
```

试试`private`修饰的`field`有什么效果：

```java
// private field
public class Main {
  public static void main(String[] args) {
    Person ming = new Person();
    ming.name = "Xiao Ming"; // 对字段name赋值
    ming.age = 12; // 对字段age赋值
  }
}

class Person {
  private String name;
  private int age;
}
```

是不是编译报错？把访问``field`的赋值语句去了就可以正常编译了。

把`field`从`public`改成`private`，外部代码不能访问这些`field`，那我们定义这些`field`有什么用？怎么才能给它赋值？怎么才能读取它的值？

所以我们需要使用方法（`method`）来让外部代码可以间接修改`field`：

```java
// private field
public class Main {
  public static void main(String[] args) {
    Person ming = new Person();
    ming.setName("Xiao Ming"); // 设置name
    ming.setAge(12); // 设置age
    System.out.println(ming.getName() + ", " + ming.getAge());
  }
}

class Person {
  private String name;
  private int age;

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    if (age < 0 || age > 100) {
      throw new IllegalArgumentException("invalid age value");
    }
    this.age = age;
  }
}
```

虽然外部代码不能直接修改`private`字段，但是，外部代码可以调用方法`setName()`和`setAge()`来间接修改`private`字段。在方法内部，我们就有机会检查参数对不对。比如，`setAge()`就会检查传入的参数，参数超出了范围，直接报错。这样，外部代码就没有任何机会把`age`设置成不合理的值。

对`setName()`方法同样可以做检查，例如，不允许传入`null`和空字符串：

```java
public void setName(String name) {
  if (name == null || name.isBlank()) {
    throw new IllegalArgumentException("invalid name");
  }
  this.name = name.strip(); // 去掉首尾空格
}
```

同样，外部代码不能直接读取`private`字段，但可以通过`getName()`和`getAge()`间接获取`private`字段的值。

所以，一个类通过定义方法，就可以给外部代码暴露一些操作的接口，同时，内部自己保证逻辑一致性。

调用方法的语法是`实例变量.方法名(参数);`。一个方法调用就是一个语句，所以不要忘了在末尾加`;`。例如：`ming.setName("Xiao Ming");`。

:::

1. 定义方法

   从上面的代码可以看出，定义方法的语法是：

   ```java
   修饰符 方法返回类型 方法名(方法参数列表) {
     若干方法语句;
     return 方法返回值;
   }
   ```

   方法返回值通过`return`语句实现，如果没有返回值，返回类型设置为`void`，可以省略`return`。

2. private 方法

   有`public`方法，自然就有`private`方法。和`private`字段一样，`private`方法不允许外部调用，那我们定义`private`方法有什么用？

   定义`private`方法的理由是内部方法是可以调用`private`方法的。例如：

   ```java
   // private method
   public class Main {
     public static void main(String[] args) {
       Person ming = new Person();
       ming.setBirth(2008);
       System.out.println(ming.getAge());
     }
   }

   class Person {
     private String name;
     private int birth;

     public void setBirth(int birth) {
       this.birth = birth;
     }

     public int getAge() {
       return calcAge(2019); // 调用private方法
     }

     // private方法:
     private int calcAge(int currentYear) {
       return currentYear - this.birth;
     }
   }
   ```

   观察上述代码，`calcAge()`是一个`private`方法，外部代码无法调用，但是，内部方法`getAge()`可以调用它。

   此外，我们还注意到，这个`Person`类只定义了`birth`字段，没有定义`age`字段，获取`age`时，通过方法`getAge()`返回的是一个实时计算的值，并非存储在某个字段的值。这说明方法可以封装一个类的对外接口，调用方不需要知道也不关心`Person`实例在内部到底有没有`age`字段。

3. this 变量

   在方法内部，可以使用一个隐含的变量`this`，它始终指向当前实例。因此，通过`this.field`就可以访问当前实例的字段。

   如果没有命名冲突，可以省略`this`。例如：

   ```java
   class Person {
     private String name;

     public String getName() {
       return name; // 相当于this.name
     }
   }
   ```

   但是，如果有局部变量和字段重名，那么局部变量优先级更高，就必须加上 this：

   ```java
   class Person {
     private String name;

     public void setName(String name) {
       this.name = name; // 前面的this不可少，少了就变成局部变量name了
     }
   }
   ```

4. 方法参数

   方法可以包含 0 个或任意个参数。方法参数用于接收传递给方法的变量值。调用方法时，必须严格按照参数的定义一一传递。例如：

   ```java
   public class Main {
     public static void main(String[] args) {
       Person ming = new Person();
       ming.setNameAndAge("Xiao Ming", 12); // 设置name
       System.out.println(ming.getNameAndAge());
     }
   }

   class Person {
     private String name;
     private int age;

     public String getNameAndAge() {
       return name + "," + age;
     }

     public void setNameAndAge(String name, int age) {
       if (name ==null || name.isBlank()) {
         throw new IllegalArgumentException("name is null or empty");
       }
       if (age < 0 || age > 100) {
         throw new IllegalArgumentException("age is negative");
       }
       this.name = name.strip();
       this.age = age;
     }
   }
   ```

   调用这个`setNameAndAge()`方法时，必须有两个参数，且第一个参数必须为`String`，第二个参数必须为`int`：

   ```java
   Person ming = new Person();
   ming.setNameAndAge("Xiao Ming"); // 编译错误：参数个数不对
   ming.setNameAndAge(12, "Xiao Ming"); // 编译错误：参数类型不对
   ```

5. 可变参数

   可变参数用`类型...`定义，可变参数相当于数组类型：

   ```java
   class Group {
     private String[] names;

     public void setNames(String... names) {
       this.names = names;
     }
   }
   ```

   上面的`setNames()`就定义了一个可变参数。调用时，可以这么写：

   ```java
   Group g = new Group();
   g.setNames("Xiao Ming", "Xiao Hong", "Xiao Jun"); // 传入3个String
   g.setNames("Xiao Ming", "Xiao Hong"); // 传入2个String
   g.setNames("Xiao Ming"); // 传入1个String
   g.setNames(); // 传入0个String
   ```

   完全可以把可变参数改写为 String[]类型：

   ```java
   class Group {
     private String[] names;

     public void setNames(String[] names) {
       this.names = names;
     }
   }
   ```

   但是，调用方需要自己先构造`String[]`，比较麻烦。例如：

   ```java
   Group g = new Group();
   g.setNames(new String[] {"Xiao Ming", "Xiao Hong", "Xiao Jun"}); // 传入1个String[]
   ```

   另一个问题是，调用方可以传入 null：

   ```
   Group g = new Group();
   g.setNames(null);
   ```

   而可变参数可以保证无法传入`null`，因为传入 0 个参数时，接收到的实际值是一个空数组而不是`null`。

6. 参数绑定

   调用方把参数传递给实例方法时，调用时传递的值会按参数位置一一绑定。

   那什么是参数绑定？

   我们先观察一个基本类型参数的传递：

   ```java
   // 基本类型参数绑定
   public class Main {
     public static void main(String[] args) {
       Person p = new Person();
       int n = 15; // n的值为15
       p.setAge(n); // 传入n的值
       System.out.println(p.getAge()); // 15
       n = 20; // n的值改为20
       System.out.println(p.getAge()); // 15还是20?
     }
   }

   class Person {
     private int age;

     public int getAge() {
       return this.age;
     }

     public void setAge(int age) {
       this.age = age;
     }
   }
   ```

   运行代码，从结果可知，修改外部的局部变量`n`，不影响实例`p`的`age`字段，原因是`setAge()`方法获得的参数，复制了`n`的值，因此，`p.age`和局部变量`n`互不影响。

   > 结论：基本类型参数的传递，是调用方值的复制。双方各自的后续修改，互不影响。

   传递引用参数的例子：

   ```java
   // 引用类型参数绑定
   public class Main {
     public static void main(String[] args) {
       Person p = new Person();
       String[] fullname = new String[] { "Homer", "Simpson" };
       p.setName(fullname); // 传入fullname数组
       System.out.println(p.getName()); // "Homer Simpson"
       fullname[0] = "Bart"; // fullname数组的第一个元素修改为"Bart"
       System.out.println(p.getName()); // "Homer Simpson"还是"Bart Simpson"?
     }
   }

   class Person {
     private String[] name;

     public String getName() {
       return this.name[0] + " " + this.name[1];
     }

     public void setName(String[] name) {
       this.name = name;
     }
   }
   ```

   注意到`setName()`的参数现在是一个数组。一开始，把`fullname`数组传进去，然后，修改`fullname`数组的内容，结果发现，实例`p`的字段`p.name`也被修改了！

   > 引用类型参数的传递，调用方的变量，和接收方的参数变量，指向的是同一个对象。双方任意一方对这个对象的修改，都会影响对方（因为指向同一个对象嘛）。

   有了上面的结论，我们再看一个例子：

   ```java
   // 引用类型参数绑定
   public class Main {
     public static void main(String[] args) {
       Person p = new Person();
       String bob = "Bob";
       p.setName(bob); // 传入bob变量
       System.out.println(p.getName()); // "Bob"
       bob = "Alice"; // bob改名为Alice
       System.out.println(p.getName()); // "Bob"还是"Alice"?
     }
   }

   class Person {
     private String name;

     public String getName() {
       return this.name;
     }

     public void setName(String name) {
       this.name = name;
     }
   }
   ```

   不要怀疑引用参数绑定的机制，试解释为什么上面的代码两次输出都是`"Bob"`。

#### 3.1.2 构造方法

创建实例的时候，我们经常需要同时初始化这个实例的字段，例如：

```java
Person ming = new Person();
ming.setName("小明");
ming.setAge(12);
```

初始化对象实例需要 3 行代码，而且，如果忘了调用`setName()`或者`setAge()`，这个实例内部的状态就是不正确的。

能否在创建对象实例时就把内部字段全部初始化为合适的值？完全可以。

这时，我们就需要构造方法。

创建实例的时候，实际上是通过构造方法来初始化实例的。我们先来定义一个构造方法，能在创建`Person`实例的时候，一次性传入`name`和`age`，完成初始化：

```java
// 构造方法
public class Main {
  public static void main(String[] args) {
    Person p = new Person("Xiao Ming", 15);
    System.out.println(p.getName());
    System.out.println(p.getAge());
  }
}

class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return this.name;
  }

  public int getAge() {
    return this.age;
  }
}
```

由于构造方法是如此特殊，所以构造方法的名称就是类名。构造方法的参数没有限制，在方法内部，也可以编写任意语句。但是，和普通方法相比，构造方法没有返回值（也没有`void`），调用构造方法，必须用`new`操作符。

1. 默认构造方法

   任何 class 都有构造方法！

   那前面我们并没有为 Person 类编写构造方法，为什么可以调用`new Person()`？

   原因是如果一个类没有定义构造方法，编译器会自动为我们生成一个默认构造方法，它没有参数，也没有执行语句，类似这样：

   ```java
   class Person {
     public Person() {
     }
   }
   ```

   - 如果我们自定义了一个构造方法，那么，编译器就不再自动创建默认构造方法;
   - 如果既要能使用带参数的构造方法，又想保留不带参数的构造方法，那么只能把两个构造方法都定义出来;
   - 没有在构造方法中初始化字段时，引用类型的字段默认是`null`，数值类型的字段用默认值，`int`类型默认值是`0`，布尔类型默认值是`false`;
   - 也可以对字段直接进行初始化，初始化后，无参数的构造方法可以直接读取或覆盖初始值；带参构造方法会直接覆盖初始值。

2. 多个构造方法

   可以定义多个构造方法，在通过 new 操作符调用的时候，编译器通过构造方法的参数数量、位置和类型自动区分：

   ```java
   class Person {
     private String name = "Someone";
     private int age = 18;

     public Person(String name, int age) {
       this.name = name;
       this.age = age;
     }

     public Person(String name) {
       this.name = name;
     }

     public Person() {
     }
   }
   ```

   如果调用`new Person("Xiao Ming", 20);`，会自动匹配到构造方法`public Person(String, int)`。

   如果调用`new Person("Xiao Ming");`，会自动匹配到构造方法`public Person(String)`。

   如果调用`new Person();`，会自动匹配到构造方法`public Person()`。

   一个构造方法可以调用其他构造方法，这样做的目的是便于代码复用。调用其他构造方法的语法是`this(…)`：

   ```java
   class Person {
     private String name;
     private int age;

     public Person(String name, int age) {
       this.name = name;
       this.age = age;
     }

     public Person(String name) {
       this(name, 18); // 调用另一个构造方法Person(String, int)
     }

     public Person() {
       this("Someone"); // 调用另一个构造方法Person(String)
     }
   }
   ```

#### 3.1.3 方法重载

在一个类中，我们可以定义多个方法。如果有一系列方法，它们的功能都是类似的，只有参数有所不同，那么，可以把这一组方法名做成*同名*方法。例如，在`Hello`类中，定义多个`hello()`方法：

```java
class Hello {
  public void hello() {
    System.out.println("Hello, world!");
  }

  public void hello(String name) {
    System.out.println("Hello, " + name + "!");
  }

  public void hello(String name, int age) {
    if (age < 18) {
      System.out.println("Hi, " + name + "!");
    } else {
      System.out.println("Hello, " + name + "!");
    }
  }
}
```

> 这种方法名相同，但各自的参数不同，称为方法重载（`Overload`）。

注意：方法重载的返回值类型通常都是相同的。

方法重载的目的是，功能类似的方法使用同一名字，更容易记住，因此，调用起来更简单。

举个例子，`String`类提供了多个重载方法`indexOf()`，可以查找子串：

- `int indexOf(int ch)`：根据字符的 Unicode 码查找；
- `int indexOf(String str)`：根据字符串查找；
- `int indexOf(int ch, int fromIndex)`：根据字符查找，但指定起始位置；
- `int indexOf(String str, int fromIndex)`：根据字符串查找，但指定起始位置。

```java
// String.indexOf()
public class Main {
  public static void main(String[] args) {
    String s = "Test string";
    int n1 = s.indexOf('t');
    int n2 = s.indexOf("st");
    int n3 = s.indexOf("st", 4);
    System.out.println(n1); // 3
    System.out.println(n2); // 2
    System.out.println(n3); // 5
  }
}
```

#### 3.1.4 继承

:::tip 引子

我们已经定义了`Person`类：

```java
class Person {
  private String name;
  private int age;

  public String getName() {...}
  public void setName(String name) {...}
  public int getAge() {...}
  public void setAge(int age) {...}
}
```

现在，假设需要定义一个`Student`类，字段如下：

```java
class Student {
  private String name;
  private int age;
  private int score;

  public String getName() {...}
  public void setName(String name) {...}
  public int getAge() {...}
  public void setAge(int age) {...}
  public int getScore() { … }
  public void setScore(int score) { … }
}
```

仔细观察，发现`Student`类包含了`Person`类已有的字段和方法，只是多出了一个`score`字段和相应的`getScore()`、`setScore()`方法。

能不能在`Student`中不要写重复的代码？

这个时候，继承就派上用场了。

:::

**继承是面向对象编程中非常强大的一种机制，它首先可以复用代码**。当我们让`Student`从`Person`继承时，`Student`就获得了`Person`的所有功能，我们只需要为`Student`编写新增的功能。

Java 使用`extends`关键字来实现继承：

```java
class Person {
  private String name;
  private int age;

  public String getName() {...}
  public void setName(String name) {...}
  public int getAge() {...}
  public void setAge(int age) {...}
}

class Student extends Person {
  // 不要重复name和age字段/方法,
  // 只需要定义新增score字段/方法:
  private int score;

  public int getScore() { … }
  public void setScore(int score) { … }
}
```

可见，通过继承，`Student`只需要编写额外的功能，不再需要重复代码。

:::danger 注意

子类自动获得了父类的所有字段，严禁定义与父类重名的字段！

:::

在 OOP 的术语中，我们把`Person`称为超类（super class），父类（parent class），基类（base class），把`Student`称为子类（subclass），扩展类（extended class）。

1. 继承树

   注意到我们在定义`Person`的时候，没有写`extends`。在 Java 中，没有明确写`extends`的类，编译器会自动加上`extends Object`。所以，任何类，除了`Object`，都会继承自某个类。下图是`Person`、`Student`的继承树：

   <pre>
   ┌───────────┐
   │  Object   │
   └───────────┘
         ▲
         │
   ┌───────────┐
   │  Person   │
   └───────────┘
         ▲
         │
   ┌───────────┐
   │  Student  │
   └───────────┘
   </pre>

   Java 只允许一个`class`继承自一个类，因此，一个类有且仅有一个父类。只有`Object`特殊，它没有父类。

   类似的，如果我们定义一个继承自`Person`的`Teacher`，它们的继承树关系如下：

   <pre>
         ┌───────────┐
         │  Object   │
         └───────────┘
               ▲
               │
         ┌───────────┐
         │  Person   │
         └───────────┘
             ▲     ▲
             │     │
             │     │
   ┌───────────┐ ┌───────────┐
   │  Student  │ │  Teacher  │
   └───────────┘ └───────────┘
   </pre>

2. protected

   继承有个特点，就是子类无法访问父类的`private`字段或者`private`方法。例如，`Student`类就无法访问`Person`类的`name`和`age`字段：

   ```java
   class Person {
     private String name;
     private int age;
   }

   class Student extends Person {
     public String hello() {
       return "Hello, " + name; // 编译错误：无法访问name字段
     }
   }
   ```

   这使得继承的作用被削弱了。为了让子类可以访问父类的字段，我们需要把`private`改为`protected`。用`protected`修饰的字段可以被子类访问：

   ```java
   class Person {
     protected String name;
     protected int age;
   }

   class Student extends Person {
     public String hello() {
       return "Hello, " + name; // OK!
     }
   }
   ```

   因此，`protected`关键字可以把字段和方法的访问权限控制在继承树内部，一个`protected`字段和方法可以被其子类，以及子类的子类所访问，后面我们还会详细讲解。

3. super

   `super`关键字表示父类（超类）。子类引用父类的字段时，可以用`super.fieldName`。例如：

   ```java
   class Student extends Person {
     public String hello() {
       return "Hello, " + super.name;
     }
   }
   ```

   实际上，这里使用`super.name`，或者`this.name`，或者`name`，效果都是一样的。编译器会自动定位到父类的`name`字段。

   但是，在某些时候，就必须使用 super。我们来看一个例子：

   ```java
   // super
   public class Main {
     public static void main(String[] args) {
       Student s = new Student("Xiao Ming", 12, 89);
     }
   }

   class Person {
     protected String name;
     protected int age;

     public Person(String name, int age) {
       this.name = name;
       this.age = age;
     }
   }

   class Student extends Person {
     protected int score;

     public Student(String name, int age, int score) {
       this.score = score;
     }
   }
   ```

   运行上面的代码，会得到一个编译错误，大意是在`Student`的构造方法中，无法调用`Person`的构造方法。

   这是因为在 Java 中，任何`class`的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，编译器会帮我们自动加一句`super();`，所以，`Student`类的构造方法实际上是这样：

   ```java
   class Student extends Person {
     protected int score;

     public Student(String name, int age, int score) {
       super(); // 自动调用父类的构造方法
       this.score = score;
     }
   }
   ```

   但是，`Person`类并没有无参数的构造方法，因此，编译失败。

   解决方法是调用`Person`类存在的某个构造方法。例如：

   ```java
   class Student extends Person {
     protected int score;

     public Student(String name, int age, int score) {
       super(name, age); // 调用父类的构造方法Person(String, int)
       this.score = score;
     }
   }
   ```

   这样就可以正常编译了！

   因此我们得出结论：如果父类没有默认的构造方法，子类就必须显式调用`super()`并给出参数以便让编译器定位到父类的一个合适的构造方法。

   这里还顺带引出了另一个问题：即**子类不会继承任何父类的构造方法。子类默认的构造方法是编译器自动生成的，不是继承的**。

4. 阻止继承

   正常情况下，只要某个`class`没有`final`修饰符，那么任何类都可以从该`class`继承。

   从 Java 15 开始，允许使用`sealed`修饰`class`，并通过`permits`明确写出能够从该`class`继承的子类名称。

   例如，定义一个 Shape 类：

   ```java
   public sealed class Shape permits Rect, Circle, Triangle {
     ...
   }
   ```

   上述`Shape`类就是一个`sealed`类，它只允许指定的 3 个类继承它。如果写：

   ```java
   public final class Rect extends Shape {...}
   ```

   是没问题的，因为`Rect`出现在`Shape`的`permits`列表中。但是，如果定义一个`Ellipse`就会报错：

   ```java
   public final class Ellipse extends Shape {...}
   // Compile error: class is not allowed to extend sealed class: Shape
   ```

   原因是`Ellipse`并未出现在`Shape`的`permits`列表中。这种`sealed`类主要用于一些框架，防止继承被滥用。

5. 向上转型

   如果一个引用变量的类型是`Student`，那么它可以指向一个`Student`类型的实例：

   ```java
   Student s = new Student();
   ```

   如果一个引用类型的变量是`Person`，那么它可以指向一个`Person`类型的实例：

   ```java
   Person p = new Person();
   ```

   现在问题来了：如果`Student`是从`Person`继承下来的，那么，一个引用类型为`Person`的变量，能否指向`Student`类型的实例？

   ```java
   Person p = new Student(); // ???
   ```

   测试一下就可以发现，这种指向是允许的！

   这是因为`Student`继承自`Person`，因此，它拥有`Person`的全部功能。`Person`类型的变量，如果指向`Student`类型的实例，对它进行操作，是没有问题的！

   这种把一个子类类型安全地变为父类类型的赋值，被称为向上转型（upcasting）。

   向上转型实际上是把一个子类型安全地变为更加抽象的父类型：

   ```java
   Student s = new Student();
   Person p = s; // upcasting, ok
   Object o1 = p; // upcasting, ok
   Object o2 = s; // upcasting, ok
   ```

   注意到继承树是`Student > Person > Object`，所以，可以把`Student`类型转型为`Person`，或者更高层次的`Object`。

6. 向下转型

   和向上转型相反，如果把一个父类类型强制转型为子类类型，就是向下转型（downcasting）。例如：

   ```java
   Person p1 = new Student(); // upcasting, ok
   Person p2 = new Person();
   Student s1 = (Student) p1; // ok
   Student s2 = (Student) p2; // runtime error! ClassCastException!
   ```

   如果测试上面的代码，可以发现：

   `Person`类型`p1`实际指向`Student`实例，`Person`类型变量`p2`实际指向`Person`实例。在向下转型的时候，把`p1`转型为`Student`会成功，因为`p1`确实指向`Student`实例，把`p2`转型为`Student`会失败，因为`p2`的实际类型是`Person`，不能把父类变为子类，因为子类功能比父类多，多的功能无法凭空变出来。

   因此，向下转型很可能会失败。失败的时候，Java 虚拟机会报`ClassCastException`。

   为了避免向下转型出错，Java 提供了`instanceof`操作符，可以先判断一个实例究竟是不是某种类型：

   ```java
   Person p = new Person();
   System.out.println(p instanceof Person); // true
   System.out.println(p instanceof Student); // false

   Student s = new Student();
   System.out.println(s instanceof Person); // true
   System.out.println(s instanceof Student); // true

   Student n = null;
   System.out.println(n instanceof Student); // false
   ```

   `instanceof`实际上判断一个变量所指向的实例是否是指定类型，或者这个类型的子类。如果一个引用变量为`null`，那么对任何`instanceof`的判断都为`false`。

   利用`instanceof`，在向下转型前可以先判断：

   ```java
   Person p = new Student();
   if (p instanceof Student) {
     // 只有判断成功才会向下转型:
     Student s = (Student) p; // 一定会成功
   }
   ```

   从 Java 14 开始，判断`instanceof`后，可以直接转型为指定变量，避免再次强制转型。例如，对于以下代码：

   ```java
   Object obj = "hello";
   if (obj instanceof String) {
     String s = (String) obj;
     System.out.println(s.toUpperCase());
   }
   ```

   可以改写如下：

   ```java
   // instanceof variable:
   public class Main {
     public static void main(String[] args) {
       Object obj = "hello";
       if (obj instanceof String s) {
         // 可以直接使用变量s:
         System.out.println(s.toUpperCase());
       }
     }
   }
   ```

   这种使用`instanceof`的写法更加简洁。

7. 区分继承和组合

   在使用继承时，我们要注意逻辑一致性。

   考察下面的`Book`类：

   ```java
   class Book {
     protected String name;
     public String getName() {...}
     public void setName(String name) {...}
   }
   ```

   这个`Book`类也有`name`字段，那么，我们能不能让`Student`继承自`Book`呢？

   ```java
   class Student extends Book {
     protected int score;
   }
   ```

   显然，从逻辑上讲，这是不合理的，`Student`不应该从`Book`继承，而应该从`Person`继承。

   究其原因，是因为`Student`是`Person`的一种，它们是`is`关系，而`Student`并不是`Book`。实际上`Student`和`Book`的关系是`has`关系。

   具有`has`关系不应该使用继承，而是使用组合，即`Student`可以持有一个`Book`实例：

   ```java
   class Student extends Person {
     protected Book book;
     protected int score;
   }
   ```

   因此，继承是`is`关系，组合是`has`关系。

#### 3.1.5 多态

> 在继承关系中，子类如果定义了一个与父类方法签名完全相同的方法，被称为覆写（Override）。

例如，在`Person`类中，我们定义了`run()`方法：

```java
class Person {
  public void run() {
    System.out.println("Person.run");
  }
}
```

在子类`Student`中，覆写这个`run()`方法：

```java
class Student extends Person {
  @Override
  public void run() {
    System.out.println("Student.run");
  }
}
```

`Override`和`Overload`不同的是，如果方法签名不同，就是`Overload`，`Overload`方法是一个新方法；如果方法签名相同，并且返回值也相同，就是`Override`。

:::danger 注意

方法名相同，方法参数相同，但方法返回值不同，也是不同的方法。在 Java 程序中，出现这种情况，编译器会报错。

:::

```java
class Person {
  public void run() { … }
}

class Student extends Person {
  // 不是Override，因为参数不同:
  public void run(String s) { … }
  // 不是Override，因为返回值不同:
  public int run() { … }
}
```

加上`@Override`可以让编译器帮助检查是否进行了正确的覆写。希望进行覆写，但是不小心写错了方法签名，编译器会报错。

```java
// override
public class Main {
  public static void main(String[] args) {
  }
}

class Person {
  public void run() {}
}

public class Student extends Person {
  @Override // Compile error!
  public void run(String s) {}
}
```

但是`@Override`不是必需的。

在上一节中，我们已经知道，引用变量的声明类型可能与其实际类型不符，例如：

```java
Person p = new Student();
```

现在，我们考虑一种情况，如果子类覆写了父类的方法：

```java
// override
public class Main {
  public static void main(String[] args) {
    Person p = new Student();
    p.run(); // 应该打印Person.run还是Student.run?
  }
}

class Person {
  public void run() {
    System.out.println("Person.run");
  }
}

class Student extends Person {
  @Override
  public void run() {
    System.out.println("Student.run");
  }
}
```

那么，一个实际类型为`Student`，引用类型为`Person`的变量，调用其`run()`方法，调用的是`Person`还是`Student`的`run()`方法？

运行一下上面的代码就可以知道，实际上调用的方法是`Student`的`run()`方法。因此可得出结论：

> Java 的实例方法调用是**基于运行时的实际类型的动态调用**，而非变量的声明类型。

这个非常重要的特性在面向对象编程中称之为多态。它的英文拼写非常复杂：`Polymorphic`。

1. 多态

   > 多态是指，针对某个类型的方法调用，多态的特性就是，运行期才能动态决定调用的子类方法。对某个类型调用某个方法，执行的实际方法可能是某个子类的覆写方法。

   ```java
   public class Main {
     public static void main(String[] args) {
       Income[] incomes = new Income[] {
         new Income(3000),
         new Salary(7500),
         new StateCouncilSpecialAllowance(15000)
       };
       System.out.println(totalTax(incomes));
     }

     public static double totalTax(Income... incomes) {
       double total = 0;
       for (Income income: incomes) {
         total = total + income.getTax();
       }
       return total;
     }
   }

   class Income {
     protected double income;
     public Income(double income) {
       this.income = income;
     }
     public double getTax() {
       return income * 0.1;
     }
   }

   class Salary extends Income {
     public Salary(double income) {
       super(income);
     }
     @Override
     public double getTax() {
       if (income <= 5000) {
         return 0;
       }
       return (income - 5000) * 0.2;
     }
   }

   class StateCouncilSpecialAllowance extends Income {
     public StateCouncilSpecialAllowance(double income) {
       super(income);
     }
     @Override
     public double getTax() {
       return 0;
     }
   }
   ```

   观察`totalTax()`方法：利用多态，`totalTax()`方法只需要和`Income`打交道，它完全不需要知道`Salary`和`StateCouncilSpecialAllowance`的存在，就可以正确计算出总的税。如果我们要新增一种稿费收入，只需要从`Income`派生，然后正确覆写`getTax()`方法就可以。把新的类型传入`totalTax()`，不需要修改任何代码。

   > 可见，多态具有一个非常强大的功能，就是允许添加更多类型的子类实现功能扩展，却不需要修改基于父类的代码。

2. 覆写 Object 方法

   因为所有的`class`最终都继承自`Object`，而`Object`定义了几个重要的方法：

   - `toString()`：把`instance`输出为`String`；
   - `equals()`：判断两个`instance`是否逻辑相等；
   - `hashCode()`：计算一个`instance`的哈希值。

   在必要的情况下，我们可以覆写`Object`的这几个方法。例如：

   ```java
   class Person {
     ...
     // 显示更有意义的字符串:
     @Override
     public String toString() {
       return "Person:name=" + name;
     }

     // 比较是否相等:
     @Override
     public boolean equals(Object o) {
       // 当且仅当o为Person类型:
       if (o instanceof Person) {
         Person p = (Person) o;
         // 并且name字段相同时，返回true:
         return this.name.equals(p.name);
       }
       return false;
     }

     // 计算hash:
     @Override
     public int hashCode() {
       return this.name.hashCode();
     }
   }
   ```

3. 调用 super

   在子类的覆写方法中，如果要调用父类的被覆写的方法，可以通过`super`来调用。例如：

   ```java
   class Person {
     protected String name;
     public String hello() {
       return "Hello, " + name;
     }
   }

   class Student extends Person {
     @Override
     public String hello() {
       // 调用父类的hello()方法:
       return super.hello() + "!";
     }
   }
   ```

4. final

   继承可以允许子类覆写父类的方法。如果一个父类不允许子类对它的某个方法进行覆写，可以把该方法标记为`final`。用`final`修饰的方法不能被`Override`：

   ```java
   class Person {
     protected String name;
     public final String hello() {
       return "Hello, " + name;
     }
   }

   class Student extends Person {
     // compile error: 不允许覆写
     @Override
     public String hello() {
     }
   }
   ```

   如果一个类不希望任何其他类继承自它，那么可以把这个类本身标记为`final`。用`final`修饰的类不能被继承：

   ```java
   final class Person {
     protected String name;
   }

   // compile error: 不允许继承自Person
   class Student extends Person {
   }
   ```

   对于一个类的实例字段，同样可以用`final`修饰。用`final`修饰的字段在初始化后不能被修改。例如：

   ```java
   class Person {
     public final String name = "Unamed";
   }
   ```

   对`final`字段重新赋值会报错：

   ```java
   Person p = new Person();
   p.name = "New Name"; // compile error!
   ```

   可以在构造方法中初始化`final`字段：

   ```java
   class Person {
     public final String name;
     public Person(String name) {
       this.name = name;
     }
   }
   ```

   这种方法更为常用，因为可以保证实例一旦创建，其`final`字段就不可修改。

#### 3.1.6 抽象类

:::tip 引子

由于多态的存在，每个子类都可以覆写父类的方法，例如：

```java
class Person {
  public void run() { … }
}

class Student extends Person {
  @Override
  public void run() { … }
}

class Teacher extends Person {
  @Override
  public void run() { … }
}
```

从`Person`类派生的`Student`和`Teacher`都可以覆写`run()`方法。

如果父类`Person`的`run()`方法没有实际意义，能否去掉方法的执行语句？

```java
class Person {
  public void run(); // Compile Error!
}
```

答案是不行，会导致编译错误，因为定义方法的时候，必须实现方法的语句。

能不能去掉父类的`run()`方法？

答案还是不行，因为去掉父类的`run()`方法，就失去了多态的特性。例如，`runTwice()`就无法编译：

```java
public void runTwice(Person p) {
  p.run(); // Person没有run()方法，会导致编译错误
  p.run();
}
```

:::

**如果父类的方法本身不需要实现任何功能，仅仅是为了定义方法签名，目的是让子类去覆写它，那么，可以把父类的方法声明为抽象方法**：

```java
class Person {
  public abstract void run();
}
```

把一个方法声明为`abstract`，表示它是一个抽象方法，本身没有实现任何方法语句。因为这个抽象方法本身是无法执行的，所以，`Person`类也无法被实例化。编译器会告诉我们，无法编译`Person`类，因为它包含抽象方法。

必须把`Person`类本身也声明为`abstract`，才能正确编译它：

```java
abstract class Person {
  public abstract void run();
}
```

1. 抽象类

   如果一个`class`定义了方法，但没有具体执行代码，这个方法就是抽象方法，抽象方法用`abstract`修饰。

   因为无法执行抽象方法，因此这个类也必须申明为抽象类（abstract class）。

   使用`abstract`修饰的类就是抽象类。我们无法实例化一个抽象类：

   ```java
   Person p = new Person(); // 编译错误
   ```

   无法实例化的抽象类有什么用？

   因为抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”。

   例如，`Person`类定义了抽象方法`run()`，那么，在实现子类`Student`的时候，就必须覆写`run()`方法：

   ```java
   // abstract class
   public class Main {
     public static void main(String[] args) {
       Person p = new Student();
       p.run();
     }
   }

   abstract class Person {
     public abstract void run();
   }

   class Student extends Person {
     @Override
     public void run() {
       System.out.println("Student.run");
     }
   }
   ```

2. 面向抽象编程

   当我们定义了抽象类`Person`，以及具体的`Student`、`Teacher`子类的时候，我们可以通过抽象类`Person`类型去引用具体的子类的实例：

   ```java
   Person s = new Student();
   Person t = new Teacher();
   ```

   这种引用抽象类的好处在于，我们对其进行方法调用，并不关心`Person`类型变量的具体子类型：

   ```java
   // 不关心Person变量的具体子类型:
   s.run();
   t.run();
   ```

   同样的代码，如果引用的是一个新的子类，我们仍然不关心具体类型：

   ```java
   // 同样不关心新的子类是如何实现run()方法的：
   Person e = new Employee();
   e.run();
   ```

   这种尽量引用高层类型，避免引用实际子类型的方式，称之为面向抽象编程。

   面向抽象编程的本质就是：

   - 上层代码只定义规范（例如：abstract class Person）；
   - 不需要子类就可以实现业务逻辑（正常编译）；
   - 具体的业务逻辑由不同的子类实现，调用者并不关心。

#### 3.1.7 接口

在抽象类中，抽象方法本质上是定义接口规范：**即规定高层类的接口，从而保证所有子类都有相同的接口实现**，这样，多态就能发挥出威力。

如果一个抽象类没有字段，所有方法全部都是抽象方法：

```java
abstract class Person {
  public abstract void run();
  public abstract String getName();
}
```

就可以把该抽象类改写为接口：`interface`。

在 Java 中，使用`interface`可以声明一个接口：

```java
interface Person {
  void run();
  String getName();
}
```

所谓`interface`，就是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有。因为接口定义的所有方法默认都是`public abstract`的，所以这两个修饰符不需要写出来（写不写效果都一样）。

当一个具体的`class`去实现一个`interface`时，需要使用`implements`关键字。举个例子：

```java
class Student implements Person {
  private String name;

  public Student(String name) {
    this.name = name;
  }

  @Override
  public void run() {
    System.out.println(this.name + " run");
  }

  @Override
  public String getName() {
    return this.name;
  }
}
```

我们知道，在 Java 中，一个类只能继承自另一个类，不能从多个类继承。但是，一个类可以实现多个`interface`，例如：

```java
class Student implements Person, Hello { // 实现了两个interface
  ...
}
```

1. 术语

   注意区分术语：

   Java 的接口特指`interface`的定义，表示一个接口类型和一组方法签名，而编程接口泛指接口规范，如方法签名，数据格式，网络协议等。

   抽象类和接口的对比如下：

   |            | abstract class （抽象类） | interface （接口）             |
   | ---------- | ------------------------- | ------------------------------ |
   | 继承       | 只能 extends 一个 class   | 可以 implements 多个 interface |
   | 字段       | 可以定义实例字段          | 不能定义实例字段               |
   | 抽象方法   | 可以定义抽象方法          | 可以定义抽象方法               |
   | 非抽象方法 | 可以定义非抽象方法        | 可以定义 default 方法          |

2. 接口继承

   一个`interface`可以继承自另一个`interface`。`interface`继承自`interface`使用`extends`，它相当于扩展了接口的方法。例如：

   ```java
   interface Hello {
     void hello();
   }

   interface Person extends Hello {
       void run();
       String getName();
   }
   ```

   此时，`Person`接口继承自`Hello`接口，因此，`Person`接口现在实际上有 3 个抽象方法签名，其中一个来自继承的`Hello`接口。

3. 继承关系

   合理设计`interface`和`abstract class`的继承关系，可以充分复用代码。一般来说，公共逻辑适合放在`abstract class`中，具体逻辑放到各个子类，而接口层次代表抽象程度。可以参考`Java`的集合类定义的一组接口、抽象类以及具体子类的继承关系：

   <pre>
   ┌───────────────┐
   │   Iterable    │
   └───────────────┘
           ▲                ┌───────────────────┐
           │                │      Object       │
   ┌───────────────┐        └───────────────────┘
   │  Collection   │                  ▲
   └───────────────┘                  │
           ▲     ▲          ┌───────────────────┐
           │     └──────────│AbstractCollection │
   ┌───────────────┐        └───────────────────┘
   │     List      │                  ▲
   └───────────────┘                  │
                 ▲          ┌───────────────────┐
                 └──────────│   AbstractList    │
                            └───────────────────┘
                                   ▲     ▲
                                   │     │
                                   │     │
                       ┌────────────┐ ┌────────────┐
                       │ ArrayList  │ │ LinkedList │
                       └────────────┘ └────────────┘
   </pre>

   在使用的时候，实例化的对象永远只能是某个具体的子类，但总是通过接口去引用它，因为接口比抽象类更抽象：

   ```java
   List list = new ArrayList(); // 用List接口引用具体子类的实例
   Collection coll = list; // 向上转型为Collection接口
   Iterable it = coll; // 向上转型为Iterable接口
   ```

4. default 方法

   在接口中，可以定义`default`方法。例如，把`Person`接口的`run()`方法改为`default`方法：

   ```java
   // interface
   public class Main {
     public static void main(String[] args) {
       Person p = new Student("Xiao Ming");
       p.run();
     }
   }

   interface Person {
     String getName();
     default void run() {
       System.out.println(getName() + " run");
     }
   }

   class Student implements Person {
     private String name;

     public Student(String name) {
       this.name = name;
     }

     public String getName() {
       return this.name;
     }
   }
   ```

   实现类可以不必覆写`default`方法。`default`方法的目的是，当我们需要给接口新增一个方法时，会涉及到修改全部子类。如果新增的是`default`方法，那么子类就不必全部修改，只需要在需要覆写的地方去覆写新增方法。

   `default`方法和抽象类的普通方法是有所不同的。因为`interface`没有字段，`default`方法无法访问字段，而抽象类的普通方法可以访问实例字段。

#### 3.1.8 静态字段和静态方法

1. 静态字段

   在一个`class`中定义的字段，我们称之为实例字段。实例字段的特点是，每个实例都有独立的字段，各个实例的同名字段互不影响。

   还有一种字段，是用`static`修饰的字段，称为静态字段：`static field`。

   实例字段在每个实例中都有自己的一个独立“空间”，但是静态字段只有一个共享“空间”，所有实例都会共享该字段。举个例子：

   ```java
   class Person {
     public String name;
     public int age;
     // 定义静态字段number:
     public static int number;
   }
   ```

   我们来看看下面的代码：

   ```java
   // static field
   public class Main {
     public static void main(String[] args) {
       Person ming = new Person("Xiao Ming", 12);
       Person hong = new Person("Xiao Hong", 15);
       ming.number = 88;
       System.out.println(hong.number);
       hong.number = 99;
       System.out.println(ming.number);
     }
   }

   class Person {
     public String name;
     public int age;

     public static int number;

     public Person(String name, int age) {
       this.name = name;
       this.age = age;
     }
   }
   ```

   对于静态字段，无论修改哪个实例的静态字段，效果都是一样的：所有实例的静态字段都被修改了，原因是静态字段并不属于实例：

   <pre>
           ┌──────────────────┐
   ming ──▶│Person instance   │
           ├──────────────────┤
           │name = "Xiao Ming"│
           │age = 12          │
           │number ───────────┼──┐    ┌─────────────┐
           └──────────────────┘  │    │Person class │
                                 │    ├─────────────┤
                                 ├───▶│number = 99  │
           ┌──────────────────┐  │    └─────────────┘
   hong ──▶│Person instance   │  │
           ├──────────────────┤  │
           │name = "Xiao Hong"│  │
           │age = 15          │  │
           │number ───────────┼──┘
           └──────────────────┘
   </pre>

   虽然实例可以访问静态字段，但是它们指向的其实都是`Person class`的静态字段。所以，所有实例共享一个静态字段。

   因此，不推荐用`实例变量.静态字段`去访问静态字段，因为在 Java 程序中，实例对象并没有静态字段。在代码中，实例对象能访问静态字段只是因为编译器可以根据实例类型自动转换为`类名.静态字段`来访问静态对象。

   推荐用类名来访问静态字段。可以把静态字段理解为描述`class`本身的字段。对于上面的代码，更好的写法是：

   ```java
   Person.number = 99;
   System.out.println(Person.number);
   ```

2. 静态方法

   有静态字段，就有静态方法。用`static`修饰的方法称为静态方法。

   调用实例方法必须通过一个实例变量，而调用静态方法则不需要实例变量，通过类名就可以调用。静态方法类似其它编程语言的函数。例如：

   ```java
   // static method
   public class Main {
     public static void main(String[] args) {
       Person.setNumber(99);
       System.out.println(Person.number);
     }
   }

   class Person {
     public static int number;

     public static void setNumber(int value) {
       number = value;
     }
   }
   ```

   因为静态方法属于`class`而不属于实例，因此，静态方法内部，无法访问`this`变量，也无法访问实例字段，它只能访问静态字段。

   通过实例变量也可以调用静态方法，但这只是编译器自动帮我们把实例改写成类名而已。

   通常情况下，通过实例变量访问静态字段和静态方法，会得到一个编译警告。

   静态方法经常用于工具类。例如：

   - Arrays.sort()
   - Math.random()

   静态方法也经常用于辅助方法。注意到 Java 程序的入口`main()`也是静态方法。

3. 接口的静态字段

   因为`interface`是一个纯抽象类，所以它不能定义实例字段。但是，interface 是可以有静态字段的，并且静态字段必须为 final 类型：

   ```java
   public interface Person {
     public static final int MALE = 1;
     public static final int FEMALE = 2;
   }
   ```

   实际上，因为 interface 的字段只能是`public static final`类型，所以我们可以把这些修饰符都去掉，上述代码可以简写为：

   ```java
   public interface Person {
     // 编译器会自动加上public static final:
     int MALE = 1;
     int FEMALE = 2;
   }
   ```

   编译器会自动把该字段变为`public static final`类型。

#### 3.1.9 包

Java 定义了一种名字空间，称之为包：`package`。

1. 包作用域

   位于同一个包的类，可以访问包作用域的字段和方法。不用`public`、`protected`、`private`修饰的字段和方法就是包作用域。例如，`Person`类定义在`hello`包下面：

   ```java
   package hello;

   public class Person {
     // 包作用域:
     void hello() {
       System.out.println("Hello!");
     }
   }
   ```

   `Main`类也定义在`hello`包下面：

   ```java
   package hello;

   public class Main {
     public static void main(String[] args) {
       Person p = new Person();
       p.hello(); // 可以调用，因为Main和Person在同一个包
     }
   }
   ```

2. import

   在一个`class`中，我们可以用`import`语句导入其他类，然后直接使用导入的类名。例如：

   ```java
   import java.util.Scanner;

   public class Main {
     public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       int i = sc.nextInt();
       System.out.println(i);
     }
   }
   ```

   `import`语句的作用是导入指定类的完整路径，这样在代码中就可以直接使用导入的类名，而不需要写完整路径。

3. 编译查找完整类名

   Java 编译器最终编译出的`.class`文件只使用完整类名，因此，在代码中，当编译器遇到一个`class`名称时：

   - 如果是完整类名，就直接根据完整类名查找这个`class`；
   - 如果是简单类名，按下面的顺序依次查找：
     - 查找当前`package`是否存在这个`class`；
     - 查找`import`的包是否包含这个`class`；
     - 查找`java.lang`包是否包含这个`class`。

   如果按照上面的规则还无法确定类名，则编译报错。

   我们来看一个例子：

   ```java
   // Main.java
   package test;

   import java.text.Format;

   public class Main {
     public static void main(String[] args) {
       java.util.List list; // ok，使用完整类名 -> java.util.List
       Format format = null; // ok，使用import的类 -> java.text.Format
       String s = "hi"; // ok，使用java.lang包的String -> java.lang.String
       System.out.println(s); // ok，使用java.lang包的System -> java.lang.System
       MessageFormat mf = null; // 编译错误：无法找到MessageFormat: MessageFormat cannot be resolved to a type
     }
   }
   ```

   因此，编写`class`的时候，编译器会自动帮我们做两个`import`动作：

   - 默认自动 import 当前 package 的其他 class；
   - 默认自动 import java.lang.\*。

   :::danger 注意

   - 自动导入的是 java.lang 包，但类似 java.lang.reflect 这些包仍需要手动导入。
   - 如果有两个 class 名称相同，例如，mr.jun.Arrays 和 java.util.Arrays，那么只能 import 其中一个，另一个必须写完整类名。

   :::

#### 3.1.10 作用域

1. 访问作用域

   > 在 Java 中，我们经常看到`public`、`protected`、`private`这些修饰符。在 Java 中，这些修饰符可以用来限定访问作用域。

   - `public`：表示公共的，在任何地方都可以访问。
   - `protected`：表示受保护的，在当前类、子类和同包类中可以访问。
   - `private`：表示私有的，只有当前类可以访问。

2. 包作用域`package`

   包作用域是指一个类允许访问同一个`package`的没有`public`、`private`修饰的`class`，以及没有`public`、`protected`、`private`修饰的字段和方法。只要在同一个包，就可以访问`package`权限的`class`、`field`和`method`。

3. 局部变量

   在方法内部定义的变量称为局部变量，局部变量作用域从变量声明处开始到对应的块结束。方法参数也是局部变量。

4. final 修饰符

   Java 还提供了一个`final`修饰符。`final`与访问权限不冲突，它有很多作用。

   用`final`修饰`class`可以**阻止被继承**：

   ```java
   package abc;

   // 无法被继承:
   public final class Hello {
     private int n = 0;
     protected void hi(int t) {
       long i = t;
     }
   }
   ```

   用`final`修饰`method`可以**阻止被子类覆写**：

   ```java
   package abc;

   public class Hello {
     // 无法被覆写:
     protected final void hi() {
     }
   }
   ```

   用`final`修饰`field`可以**阻止被重新赋值**：

   ```java
   package abc;

   public class Hello {
     private final int n = 0;
     protected void hi() {
       this.n = 1; // error!
     }
   }
   ```

   用`final`修饰局部变量可以**阻止被重新赋值**：

   ```java
   package abc;

   public class Hello {
     protected void hi(final int t) {
       t = 1; // error!
     }
   }
   ```

:::tip 总结

- `public` 任何位置都可以
- `protected` 在同类、同包、不同包子类
- `package` 在同类，同包
- `private` 在同类

:::

#### 3.1.11 内部类

[java 内部类的四大作用](https://blog.csdn.net/u013728021/article/details/87358517)

- Java 的内部类可分为`Inner Class`、`Anonymous Class`和`Static Nested Class`三种；
- Inner Class 和 Anonymous Class 本质上是相同的，都必须依附于 Outer Class 的实例，即隐含地持有`Outer.this`实例，并拥有 Outer Class 的`private`访问权限；
- Static Nested Class 是独立类，但拥有 Outer Class 的`private`访问权限。

### 3.2 Java 核心类

#### 3.2.1 字符串和编码

##### 3.2.1.1 String

在 Java 中，`String`是一个引用类型，它本身也是一个`class`。但是，Java 编译器对`String`有特殊处理，即可以直接用`"..."`来表示一个字符串：

```java
String s1 = "Hello!";
```

实际上字符串在`String`内部是通过一个`char[]`数组表示的，因此，按下面的写法也是可以的：

```java
String s2 = new String(new char[] {'H', 'e', 'l', 'l', 'o', '!'});
```

因为`String`太常用了，所以 Java 提供了`"..."`这种字符串字面量表示方法。

Java 字符串的一个重要特点就是字符串*不可变*。这种不可变性是通过内部的`private final char[]`字段，以及没有任何修改 char[]的方法实现的。

我们来看一个例子：

```java
// String
public class Main {
  public static void main(String[] args) {
    String s = "Hello";
    System.out.println(s); // Hello
    s = s.toUpperCase();
    System.out.println(s); // HELLO
  }
}
```

根据上面代码的输出，试解释字符串内容是否改变。

1. 字符串比较

   当我们想要比较两个字符串是否相同时，要特别注意，我们实际上是想比较字符串的内容是否相同。必须使用`equals()`方法而不能用`==`。

   我们看下面的例子：

   ```java
   // String
   public class Main {
     public static void main(String[] args) {
       String s1 = "hello";
       String s2 = "hello";
       System.out.println(s1 == s2);
       System.out.println(s1.equals(s2));
     }
   }
   ```

   从表面上看，两个字符串用`==`和`equals()`比较都为`true`，但实际上那只是 Java 编译器在编译期，会自动把所有相同的字符串当作一个对象放入常量池，自然`s1`和`s2`的引用就是相同的。

   所以，这种`==`比较返回`true`纯属巧合。换一种写法，`==`比较就会失败：

   ```java
   // String
   public class Main {
     public static void main(String[] args) {
       String s1 = "hello";
       String s2 = "HELLO".toLowerCase();
       System.out.println(s1 == s2); // false
       System.out.println(s1.equals(s2)); // true
     }
   }
   ```

   结论：两个字符串比较，必须总是使用`equals()`方法。要忽略大小写比较，使用`equalsIgnoreCase()`方法。

2. 搜索、提取字符串

   `String`类还提供了多种方法来搜索子串、提取子串。常用的方法有：

   ```java
   // 是否包含子串:
   "Hello".contains("ll"); // true
   ```

   注意到`contains()`方法的参数是`CharSequence`而不是`String`，因为`CharSequence`是`String`实现的一个接口。

   搜索子串的更多的例子：

   ```java
   "Hello".indexOf("l"); // 2
   "Hello".lastIndexOf("l"); // 3
   "Hello".startsWith("He"); // true
   "Hello".endsWith("lo"); // true
   ```

   提取子串的例子：

   ```java
   "Hello".substring(2); // "llo"
   "Hello".substring(2, 4); "ll"
   ```

   注意索引号是从`0`开始的。

3. 去除收尾空白字符

   使用`trim()`方法可以移除字符串首尾空白字符。空白字符包括空格，`\t，\r，\n`：

   ```java
   "  \tHello\r\n ".trim(); // "Hello"
   ```

   注意：`trim()`并没有改变字符串的内容，而是返回了一个新字符串。

   另一个`strip()`方法也可以移除字符串首尾空白字符。它和`trim()`不同的是，类似中文的空格字符`\u3000`也会被移除：

   ```java
   "\u3000Hello\u3000".strip(); // "Hello"
   " Hello ".stripLeading(); // "Hello "
   " Hello ".stripTrailing(); // " Hello"
   ```

   `String`还提供了`isEmpty()`和`isBlank()`来判断字符串是否为空和空白字符串：

   ```java
   "".isEmpty(); // true，因为字符串长度为0
   "  ".isEmpty(); // false，因为字符串长度不为0
   "  \n".isBlank(); // true，因为只包含空白字符
   " Hello ".isBlank(); // false，因为包含非空白字符
   ```

4. 替换子串

   要在字符串中替换子串，有两种方法。一种是根据字符或字符串替换：

   ```java
   String s = "hello";
   s.replace('l', 'w'); // "hewwo"，所有字符'l'被替换为'w'
   s.replace("ll", "~~"); // "he~~o"，所有子串"ll"被替换为"~~"
   ```

   另一种是通过正则表达式替换：

   ```java
   String s = "A,,B;C ,D";
   s.replaceAll("[\\,\\;\\s]+", ","); // "A,B,C,D"
   ```

   上面的代码通过正则表达式，把匹配的子串统一替换为`","`。关于正则表达式的用法我们会在后面详细讲解。

5. 分割字符串

   要分割字符串，使用`split()`方法，并且传入的也是正则表达式：

   ```java
   String s = "A,B,C,D";
   String[] ss = s.split("\\,"); // {"A", "B", "C", "D"}
   ```

6. 拼接字符串

   拼接字符串使用静态方法`join()`，它用指定的字符串连接字符串数组：

   ```java
   String[] arr = {"A", "B", "C"};
   String s = String.join("***", arr); // "A***B***C"
   ```

7. 格式化字符串

   字符串提供了`formatted()`方法和`format()`静态方法，可以传入其他参数，替换占位符，然后生成新的字符串：

   ```java
   // String
   public class Main {
     public static void main(String[] args) {
       String s = "Hi %s, your score is %d!";
       System.out.println(s.formatted("Alice", 80)); // Hi Alice, your score is 80!
       System.out.println(String.format("Hi %s, your score is %.2f!", "Bob", 59.5)); // Hi Bob, your score is 59.50!
     }
   }
   ```

   有几个占位符，后面就传入几个参数。参数类型要和占位符一致。我们经常用这个方法来格式化信息。常用的占位符有：

   - `%s`：显示字符串；
   - `%d`：显示整数；
   - `%x`：显示十六进制整数；
   - `%f`：显示浮点数。

   占位符还可以带格式，例如`%.2f`表示显示两位小数。如果你不确定用啥占位符，那就始终用`%s`，因为`%s`可以显示任何数据类型。要查看完整的格式化语法，请参考[JDK 文档](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html#syntax)。

8. 类型转换

   要把任意基本类型或引用类型转换为字符串，可以使用静态方法`valueOf()`。这是一个重载方法，编译器会根据参数自动选择合适的方法：

   ```java
   String.valueOf(123); // "123"
   String.valueOf(45.67); // "45.67"
   String.valueOf(true); // "true"
   String.valueOf(new Object()); // 类似java.lang.Object@5305068a
   ```

   要把字符串转换为其他类型，就需要根据情况。例如，把字符串转换为`int`类型：

   ```java
   int n1 = Integer.parseInt("123"); // 123
   int n2 = Integer.parseInt("ff", 16); // 按十六进制转换，255
   ```

   把字符串转换为`boolean`类型：

   ```java
   boolean b1 = Boolean.parseBoolean("123"); // false
   boolean b1 = Boolean.parseBoolean("true"); // true
   boolean b2 = Boolean.parseBoolean("FALSE"); // false
   ```

9. 转换为 char[]

   `String`和`char[]`类型可以互相转换，方法是：

   ```java
   char[] cs = "Hello".toCharArray(); // String -> char[]
   String s = new String(cs); // char[] -> String
   ```

   如果修改了`char[]`数组，`String`并不会改变：

   ```java
   // String <-> char[]
   public class Main {
     public static void main(String[] args) {
       char[] cs = "Hello".toCharArray();
       String s = new String(cs);
       System.out.println(s);
       cs[0] = 'X';
       System.out.println(s);
     }
   }
   ```

   这是因为通过`new String(char[])`创建新的`String`实例时，它并不会直接引用传入的`char[]`数组，而是会复制一份，所以，修改外部的`char[]`数组不会影响`String`实例内部的`char[]`数组，因为这是两个不同的数组。

   从`String`的不变性设计可以看出，如果传入的对象有可能改变，我们需要复制而不是直接引用。

   例如，下面的代码设计了一个`Score`类保存一组学生的成绩：

   ```java
   // int[]
   import java.util.Arrays;

   public class Main {
     public static void main(String[] args) {
       int[] scores = new int[] { 88, 77, 51, 66 };
       Score s = new Score(scores);
       s.printScores();
       scores[2] = 99;
       s.printScores();
     }
   }

   class Score {
     private int[] scores;
     public Score(int[] scores) {
       this.scores = scores;
     }

     public void printScores() {
       System.out.println(Arrays.toString(scores));
     }
   }
   ```

   观察两次输出，由于`Score`内部直接引用了外部传入的`int[]`数组，这会造成外部代码对`int[]`数组的修改，影响到`Score`类的字段。如果外部代码不可信，这就会造成安全隐患。

   请修复`Score`的构造方法，使得外部代码对数组的修改不影响`Score`实例的`int[]`字段。

   :::details 修复

   ```java {17}
   // int[]
   import java.util.Arrays;

   public class Main {
     public static void main(String[] args) {
       int[] scores = new int[] { 88, 77, 51, 66 };
       Score s = new Score(scores);
       s.printScores();
       scores[2] = 99;
       s.printScores();
     }
   }

   class Score {
     private int[] scores;
     public Score(int[] scores) {
       this.scores = scores.clone();// [!code focus]
     }

     public void printScores() {
       System.out.println(Arrays.toString(scores));
     }
   }
   ```

   :::

##### 3.2.1.2 字符编码

在早期的计算机系统中，为了给字符编码，美国国家标准学会（American National Standard Institute：ANSI）制定了一套英文字母、数字和常用符号的编码，它占用一个字节，编码范围从`0`到`127`，最高位始终为`0`，称为`ASCII`编码。例如，字符`'A'`的编码是`0x41`，字符`'1'`的编码是`0x31`。

如果要把汉字也纳入计算机编码，很显然一个字节是不够的。`GB2312`标准使用两个字节表示一个汉字，其中第一个字节的最高位始终为`1`，以便和`ASCII`编码区分开。例如，汉字`'中'`的`GB2312`编码是`0xd6d0`。

类似的，日文有`Shift_JIS`编码，韩文有`EUC-KR`编码，这些编码因为标准不统一，同时使用，就会产生冲突。

为了统一全球所有语言的编码，全球统一码联盟发布了`Unicode`编码，它把世界上主要语言都纳入同一个编码，这样，中文、日文、韩文和其他语言就不会冲突。

`Unicode`编码需要两个或者更多字节表示，我们可以比较中英文字符在`ASCII`、`GB2312`和`Unicode`的编码：

英文字符`'A'`的`ASCII`编码和`Unicode`编码：

<pre>
         ┌────┐
ASCII:   │ 41 │
         └────┘
         ┌────┬────┐
Unicode: │ 00 │ 41 │
         └────┴────┘
</pre>

英文字符的`Unicode`编码就是简单地在前面添加一个`00`字节。

中文字符`'中'`的`GB2312`编码和`Unicode`编码：

<pre>
         ┌────┬────┐
GB2312:  │ d6 │ d0 │
         └────┴────┘
         ┌────┬────┐
Unicode: │ 4e │ 2d │
         └────┴────┘
</pre>

那我们经常使用的`UTF-8`又是什么编码呢？因为英文字符的`Unicode`编码高字节总是`00`，包含大量英文的文本会浪费空间，所以，出现了`UTF-8`编码，它是一种变长编码，用来把固定长度的`Unicode`编码变成 1 ～ 4 字节的变长编码。通过`UTF-8`编码，英文字符`'A'`的`UTF-8`编码变为`0x41`，正好和`ASCII`码一致，而中文`'中'`的`UTF-8`编码为 3 字节`0xe4b8ad`。

`UTF-8`编码的另一个好处是容错能力强。如果传输过程中某些字符出错，不会影响后续字符，因为`UTF-8`编码依靠高字节位来确定一个字符究竟是几个字节，它经常用来作为传输编码。

在 Java 中，`char`类型实际上就是两个字节的`Unicode`编码。如果我们要手动把字符串转换成其他编码，可以这样做：

```java
byte[] b1 = "Hello".getBytes(); // 按系统默认编码转换，不推荐
byte[] b2 = "Hello".getBytes("UTF-8"); // 按UTF-8编码转换
byte[] b3 = "Hello".getBytes("GBK"); // 按GBK编码转换
byte[] b4 = "Hello".getBytes(StandardCharsets.UTF_8); // 按UTF-8编码转换
```

注意：转换编码后，就不再是`char`类型，而是`byte`类型表示的数组。

如果要把已知编码的`byte[]`转换为`String`，可以这样做：

```java
byte[] b = ...
String s1 = new String(b, "GBK"); // 按GBK转换
String s2 = new String(b, StandardCharsets.UTF_8); // 按UTF-8转换
```

始终牢记：Java 的`String`和`char`在内存中总是以`Unicode`编码表示。

#### 3.2.2 StringBuilder

:::tip 引子

Java 编译器对`String`做了特殊处理，使得我们可以直接用`+`拼接字符串。

考察下面的循环代码：

```java
String s = "";
for (int i = 0; i < 1000; i++) {
  s = s + "," + i;
}
```

虽然可以直接拼接字符串，但是，在循环中，每次循环都会创建新的字符串对象，然后扔掉旧的字符串。这样，绝大部分字符串都是临时对象，不但浪费内存，还会影响 GC 效率。

:::

为了能高效拼接字符串，Java 标准库提供了`StringBuilder`，它是一个可变对象，可以预分配缓冲区，这样，往`StringBuilder`中新增字符时，不会创建新的临时对象：

```java
StringBuilder sb = new StringBuilder(1024);
for (int i = 0; i < 1000; i++) {
  sb.append(',');
  sb.append(i);
}
String s = sb.toString();
StringBuilder还可以进行链式操作：

// 链式操作
public class Main {
  public static void main(String[] args) {
    var sb = new StringBuilder(1024);
    sb.append("Mr ")
      .append("Bob")
      .append("!")
      .insert(0, "Hello, ");
    System.out.println(sb.toString());
  }
}
```

#### 3.2.3 StringJoiner

要高效拼接字符串，应该使用`StringBuilder`。

很多时候，我们拼接的字符串像这样：

```java
// 输出: Hello Bob, Alice, Grace!
public class Main {
  public static void main(String[] args) {
    String[] names = {"Bob", "Alice", "Grace"};
    var sb = new StringBuilder();
    sb.append("Hello ");
    for (String name : names) {
      sb.append(name).append(", ");
    }
    // 注意去掉最后的", ":
    sb.delete(sb.length() - 2, sb.length());
    sb.append("!");
    System.out.println(sb.toString()); // Hello Bob, Alice, Grace!
  }
}
```

类似用分隔符拼接数组的需求很常见，所以 Java 标准库还提供了一个`StringJoiner`来干这个事：

```java
import java.util.StringJoiner;
public class Main {
  public static void main(String[] args) {
    String[] names = {"Bob", "Alice", "Grace"};
    var sj = new StringJoiner(", ");
    for (String name : names) {
      sj.add(name);
    }
    System.out.println(sj.toString()); // Bob, Alice, Grace
  }
}
```

慢着！用 StringJoiner 的结果少了前面的`"Hello "`和结尾的`"!"`！遇到这种情况，需要给`StringJoiner`指定“开头”和“结尾”：

```java
import java.util.StringJoiner;
public class Main {
  public static void main(String[] args) {
    String[] names = {"Bob", "Alice", "Grace"};
    var sj = new StringJoiner(", ", "Hello ", "!");
    for (String name : names) {
      sj.add(name);
    }
    System.out.println(sj.toString()); // Hello Bob, Alice, Grace!
  }
}
```

**String.join()**

`String`还提供了一个静态方法`join()`，这个方法在内部使用了`StringJoiner`来拼接字符串，在不需要指定“开头”和“结尾”的时候，用`String.join()`更方便：

```java
String[] names = {"Bob", "Alice", "Grace"};
var s = String.join(", ", names);
```

#### 3.2.4 包装类型

:::tip 引子

Java 的数据类型分两种：

- 基本类型：`byte`、`short`、`int`、`long`、`float`、`double`、`boolean`、`char`;
- 引用类型：所有`class`和`interface`类型。

引用类型可以赋值为`null`，表示空，但基本类型不能赋值为`null`：

```java
String s = null;
int n = null; // compile error!
```

那么，如何把一个基本类型视为对象（引用类型）？

比如，想要把`int`基本类型变成一个引用类型，我们可以定义一个`Integer`类，它只包含一个实例字段`int`，这样，`Integer`类就可以视为`int`的包装类（Wrapper Class）：

```java
public class Integer {
  private int value;

  public Integer(int value) {
    this.value = value;
  }

  public int intValue() {
    return this.value;
  }
}
```

定义好了`Integer`类，我们就可以把`int`和`Integer`互相转换：

```java
Integer n = null;
Integer n2 = new Integer(99);
int n3 = n2.intValue();
```

:::

实际上，因为包装类型非常有用，Java 核心库为每种基本类型都提供了对应的包装类型：

| 基本类型 | 对应的引用类型      |
| -------- | ------------------- |
| boolean  | java.lang.Boolean   |
| byte     | java.lang.Byte      |
| short    | java.lang.Short     |
| int      | java.lang.Integer   |
| long     | java.lang.Long      |
| float    | java.lang.Float     |
| double   | java.lang.Double    |
| char     | java.lang.Character |

我们可以直接使用，并不需要自己去定义：

```java
// Integer:
public class Main {
  public static void main(String[] args) {
    int i = 100;
    // 通过new操作符创建Integer实例(不推荐使用,会有编译警告):
    Integer n1 = new Integer(i);
    // 通过静态方法valueOf(int)创建Integer实例:
    Integer n2 = Integer.valueOf(i);
    // 通过静态方法valueOf(String)创建Integer实例:
    Integer n3 = Integer.valueOf("100");
    System.out.println(n3.intValue());
  }
}
```

#### 3.2.5 JavaBean

在 Java 中，有很多`class`的定义都符合这样的规范：

- 若干`private`实例字段；
- 通过`public`方法来读写实例字段。

例如：

```java
public class Person {
  private String name;
  private int age;

  public String getName() { return this.name; }
  public void setName(String name) { this.name = name; }

  public int getAge() { return this.age; }
  public void setAge(int age) { this.age = age; }
}
```

如果读写方法符合以下这种命名规范：

```java
// 读方法:
public Type getXyz()
// 写方法:
public void setXyz(Type value)
```

那么这种`class`被称为`JavaBean`。

上面的字段是`xyz`，那么读写方法名分别以`get`和`set`开头，并且后接大写字母开头的字段名`Xyz`，因此两个读写方法名分别是`getXyz()`和`setXyz()`。

`boolean`字段比较特殊，它的读方法一般命名为`isXyz()`：

```java
// 读方法:
public boolean isChild()
// 写方法:
public void setChild(boolean value)
```

我们通常把一组对应的读方法（`getter`）和写方法（`setter`）称为属性（`property`）。例如，`name`属性：

- 对应的读方法是`String getName()`
- 对应的写方法是`setName(String)`

只有`getter`的属性称为只读属性（read-only），例如，定义一个 age 只读属性：

- 对应的读方法是`int getAge()`
- 无对应的写方法`setAge(int)`

类似的，只有`setter`的属性称为只写属性（write-only）。

很明显，只读属性很常见，只写属性不常见。

属性只需要定义`getter`和`setter`方法，不一定需要对应的字段。例如，`child`只读属性定义如下：

```java
public class Person {
  private String name;
  private int age;

  public String getName() { return this.name; }
  public void setName(String name) { this.name = name; }

  public int getAge() { return this.age; }
  public void setAge(int age) { this.age = age; }

  public boolean isChild() {
    return age <= 6;
  }
}
```

可以看出，`getter`和`setter`也是一种数据封装的方法。

#### 3.2.6 枚举类

:::tip 引子

在 Java 中，我们可以通过`static final`来定义常量。例如，我们希望定义周一到周日这 7 个常量，可以用 7 个不同的`int`表示：

```java
public class Weekday {
  public static final int SUN = 0;
  public static final int MON = 1;
  public static final int TUE = 2;
  public static final int WED = 3;
  public static final int THU = 4;
  public static final int FRI = 5;
  public static final int SAT = 6;
}
```

使用常量的时候，可以这么引用：

```java
if (day == Weekday.SAT || day == Weekday.SUN) {
  // TODO: work at home
}
```

也可以把常量定义为字符串类型，例如，定义 3 种颜色的常量：

```java
public class Color {
  public static final String RED = "r";
  public static final String GREEN = "g";
  public static final String BLUE = "b";
}
```

使用常量的时候，可以这么引用：

```java
String color = ...
if (Color.RED.equals(color)) {
  // TODO:
}
```

无论是`int`常量还是`String`常量，使用这些常量来表示一组枚举值的时候，有一个严重的问题就是，编译器无法检查每个值的合理性。例如：

```java
if (weekday == 6 || weekday == 7) {
  if (tasks == Weekday.MON) {
    // TODO:
  }
}
```

上述代码编译和运行均不会报错，但存在两个问题：

- 注意到`Weekday`定义的常量范围是`0~6`，并不包含`7`，编译器无法检查不在枚举中的`int`值；
- 定义的常量仍可与其他变量比较，但其用途并非是枚举星期值。

:::

1. enum

   为了让编译器能自动检查某个值在枚举的集合内，并且不同用途的枚举需要不同的类型标记，我们使用`enum`来定义枚举类：

   ```java
   public class Main {
     public static void main(String[] args) {
       Weekday day = Weekday.SUN;
       if (day == Weekday.SUN || day == Weekday.SAT) {
         System.out.println("今天是周末");
       }
     }
   }

   enum Weekday {
     SUN, MON, TUE, WED, THU, FRI, SAT;
   }
   ```

   注意到定义枚举类是通过关键字`enum`实现的，我们只需依次列出枚举的常量名。

   和`int`定义的常量相比，使用`enum`定义枚举有如下好处：

   首先，`enum`常量本身带有类型信息，即`Weekday.SUN`类型是`Weekday`，编译器会自动检查出类型错误。例如，下面的语句不可能编译通过：

   ```java
   int day = 1;
   if (day == Weekday.SUN) { // Compile error: bad operand types for binary operator '=='
   }
   ```

   其次，不可能引用到非枚举的值，因为无法通过编译。

   最后，不同类型的枚举不能互相比较或者赋值，因为类型不符。例如，不能给一个`Weekday`枚举类型的变量赋值为`Color`枚举类型的值：

   ```java
   Weekday x = Weekday.SUN; // ok!
   Weekday y = Color.RED; // Compile error: incompatible types
   ```

   这就使得编译器可以在编译期自动检查出所有可能的潜在错误。

2. enum 比较

   使用`enum`定义的枚举类是一种引用类型。前面我们讲到，引用类型比较，要使用`equals()`方法，如果使用`==`比较，它比较的是两个引用类型的变量是否是同一个对象。因此，引用类型比较，要始终使用`equals()`方法，但`enum`类型可以例外。

   这是因为`enum`类型的每个常量在 JVM 中只有一个唯一实例，所以可以直接用`==`比较：

   ```java
   if (day == Weekday.FRI) { // ok!
   }
   if (day.equals(Weekday.SUN)) { // ok, but more code!
   }
   ```

3. enum 类型

   通过`enum`定义的枚举类，和其他的`class`有什么区别？

   答案是没有任何区别。`enum`定义的类型就是`class`，只不过它有以下几个特点：

   - 定义的`enum`类型总是继承自`java.lang.Enum`，且无法被继承；
   - 只能定义出`enum`的实例，而无法通过`new`操作符创建`enum`的实例；
   - 定义的每个实例都是引用类型的唯一实例；
   - 可以将`enum`类型用于`switch`语句。

   例如，我们定义的 Color 枚举类：

   ```java
   public enum Color {
     RED, GREEN, BLUE;
   }
   ```

   编译器编译出的 class 大概就像这样：

   ```java
   public final class Color extends Enum { // 继承自Enum，标记为final class
     // 每个实例均为全局唯一:
     public static final Color RED = new Color();
     public static final Color GREEN = new Color();
     public static final Color BLUE = new Color();
     // private构造方法，确保外部无法调用new操作符:
     private Color() {}
   }
   ```

   所以，编译后的`enum`类和普通`class`并没有任何区别。但是我们自己无法按定义普通`class`那样来定义`enum`，必须使用`enum`关键字，这是 Java 语法规定的。

   因为`enum`是一个`class`，每个枚举的值都是`class`实例，因此，这些实例有一些方法：

   - name()

     返回常量名，例如：

     ```java
     String s = Weekday.SUN.name(); // "SUN"
     ```

   - ordinal()

     返回定义的常量的顺序，从 0 开始计数，例如：

     ```java
     int n = Weekday.MON.ordinal(); // 1
     ```

     改变枚举常量定义的顺序就会导致`ordinal()`返回值发生变化。例如：

     ```java
     public enum Weekday {
       SUN, MON, TUE, WED, THU, FRI, SAT;
     }
     ```

     和

     ```java
     public enum Weekday {
       MON, TUE, WED, THU, FRI, SAT, SUN;
     }
     ```

     的`ordinal`就是不同的。如果在代码中编写了类似`if(x.ordinal()==1)`这样的语句，就要保证`enum`的枚举顺序不能变。新增的常量必须放在最后。

   有些童鞋会想，`Weekday`的枚举常量如果要和`int`转换，使用`ordinal()`不是非常方便？比如这样写：

   ```java
   String task = Weekday.MON.ordinal() + "/ppt";
   saveToFile(task);
   ```

   但是，如果不小心修改了枚举的顺序，编译器是无法检查出这种逻辑错误的。要编写健壮的代码，就不要依靠`ordinal()`的返回值。因为`enum`本身是`class`，所以我们可以定义`private`的构造方法，并且，给每个枚举常量添加字段：

   ```java
   // enum
   public class Main {
     public static void main(String[] args) {
       Weekday day = Weekday.SUN;
       if (day.dayValue == 6 || day.dayValue == 0) {
         System.out.println("Work at home!");
       } else {
         System.out.println("Work at office!");
       }
     }
   }

   enum Weekday {
     MON(1), TUE(2), WED(3), THU(4), FRI(5), SAT(6), SUN(0);

     public final int dayValue;

     private Weekday(int dayValue) {
       this.dayValue = dayValue;
     }
   }
   ```

   这样就无需担心顺序的变化，新增枚举常量时，也需要指定一个`int`值。

   :::danger 注意

   枚举类的字段也可以是非 final 类型，即可以在运行期修改，但是不推荐这样做！

   :::

   默认情况下，对枚举常量调用`toString()`会返回和`name()`一样的字符串。但是，`toString()`可以被覆写，而`name()`则不行。我们可以给`Weekday`添加`toString()`方法：

   ```java
   // enum
   public class Main {
     public static void main(String[] args) {
       Weekday day = Weekday.SUN;
       if (day.dayValue == 6 || day.dayValue == 0) {
         System.out.println("Today is " + day + ". Work at home!");
       } else {
         System.out.println("Today is " + day + ". Work at office!");
       }
     }
   }

   enum Weekday {
     MON(1, "星期一"), TUE(2, "星期二"), WED(3, "星期三"), THU(4, "星期四"), FRI(5, "星期五"), SAT(6, "星期六"), SUN(0, "星期日");

     public final int dayValue;
     private final String chinese;

     private Weekday(int dayValue, String chinese) {
       this.dayValue = dayValue;
       this.chinese = chinese;
     }

     @Override
     public String toString() {
       return this.chinese;
     }
   }
   ```

   覆写`toString()`的目的是在输出时更有可读性。

   :::danger 注意

   判断枚举常量的名字，要始终使用`name()`方法，绝不能调用`toString()`！

   :::

4. switch

   最后，枚举类可以应用在`switch`语句中。因为枚举类天生具有类型信息和有限个枚举常量，所以比`int`、`String`类型更适合用在`switch`语句中：

   ```java
   // switch
   public class Main {
     public static void main(String[] args) {
       Weekday day = Weekday.SUN;
       switch(day) {
         case MON:
         case TUE:
         case WED:
         case THU:
         case FRI:
           System.out.println("Today is " + day + ". Work at office!");
           break;
         case SAT:
         case SUN:
           System.out.println("Today is " + day + ". Work at home!");
           break;
         default:
           throw new RuntimeException("cannot process " + day);
       }
     }
   }

   enum Weekday {
     MON, TUE, WED, THU, FRI, SAT, SUN;
   }
   ```

   加上`default`语句，可以在漏写某个枚举常量时自动报错，从而及时发现错误。

#### 3.2.7 记录类

:::tip 引子

使用`String`、`Integer`、`Long`、`Double`等类型的时候，这些类型都是不变类，一个不变类具有以下特点：

1. 定义 class 时使用`final`，无法派生子类；
2. 每个字段使用`final`，保证创建实例后无法修改任何字段。

假设我们希望定义一个`Point`类，有`x`、`y`两个变量，同时它是一个不变类，可以这么写：

```java
public final class Point {
  private final int x;
  private final int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int x() {
    return this.x;
  }

  public int y() {
    return this.y;
  }
}
```

这些代码写起来都非常简单，但是很繁琐。

:::

1. record

   从 Java 14 开始，引入了新的`Record`类。我们定义`Record`类时，使用关键字`record`。把上述`Point`类改写为`Record`类，代码如下：

   ```java
   // Record
   public class Main {
     public static void main(String[] args) {
       Point p = new Point(123, 456);
       System.out.println(p.x());
       System.out.println(p.y());
       System.out.println(p);
     }
   }

   record Point(int x, int y) {}
   ```

   仔细观察`Point`的定义：

   ```java
   record Point(int x, int y) {}
   ```

   把上述定义改写为 class，相当于以下代码：

   ```java
   final class Point extends Record {
     private final int x;
     private final int y;

     public Point(int x, int y) {
       this.x = x;
       this.y = y;
     }

     public int x() {
       return this.x;
     }

     public int y() {
       return this.y;
     }

     public String toString() {
       return String.format("Point[x=%s, y=%s]", x, y);
     }

     public boolean equals(Object o) {
       ...
     }
     public int hashCode() {
       ...
     }
   }
   ```

   除了用`final`修饰 class 以及每个字段外，编译器还自动为我们创建了构造方法，和字段名同名的方法，以及覆写`toString()`、`equals()`和`hashCode()`方法。

   换句话说，使用`record`关键字，可以一行写出一个不变类。

   和`enum`类似，我们自己不能直接从`Record`派生，只能通过`record`关键字由编译器实现继承。

2. 构造方法

   编译器默认按照`record`声明的变量顺序自动创建一个构造方法，并在方法内给字段赋值。那么问题来了，如果我们要检查参数，应该怎么办？

   假设`Point`类的`x`、`y`不允许负数，我们就得给`Point`的构造方法加上检查逻辑：

   ```java
   public record Point(int x, int y) {
     public Point {
       if (x < 0 || y < 0) {
         throw new IllegalArgumentException();
       }
     }
   }
   ```

   注意到方法`public Point {...}`被称为`Compact Constructor`，它的目的是让我们编写检查逻辑，编译器最终生成的构造方法如下：

   ```java
   public final class Point extends Record {
     public Point(int x, int y) {
       // 这是我们编写的Compact Constructor:
       if (x < 0 || y < 0) {
         throw new IllegalArgumentException();
       }
       // 这是编译器继续生成的赋值代码:
       this.x = x;
       this.y = y;
     }
     ...
   }
   ```

   作为`record`的`Point`仍然可以添加静态方法。一种常用的静态方法是`of()`方法，用来创建`Point`：

   ```java
   public record Point(int x, int y) {
     public static Point of() {
       return new Point(0, 0);
     }
     public static Point of(int x, int y) {
       return new Point(x, y);
     }
   }
   ```

   这样我们可以写出更简洁的代码：

   ```java
   var z = Point.of();
   var p = Point.of(123, 456);
   ```

#### 3.2.8 BigInteger

在 Java 中，由 CPU 原生提供的整型最大范围是 64 位`long`型整数。使用`long`型整数可以直接通过 CPU 指令进行计算，速度非常快。

如果我们使用的整数范围超过了`long`型怎么办？这个时候，就只能用软件来模拟一个大整数。`java.math.BigInteger`就是用来表示任意大小的整数。`BigInteger`内部用一个`int[]`数组来模拟一个非常大的整数：

```java
BigInteger bi = new BigInteger("1234567890");
System.out.println(bi.pow(5)); // 2867971860299718107233761438093672048294900000
```

对`BigInteger`做运算的时候，只能使用实例方法，例如，加法运算：

```java
BigInteger i1 = new BigInteger("1234567890");
BigInteger i2 = new BigInteger("12345678901234567890");
BigInteger sum = i1.add(i2); // 12345678902469135780
```

和`long`型整数运算比，`BigInteger`不会有范围限制，但缺点是速度比较慢。

也可以把`BigInteger`转换成`long`型：

```java
BigInteger i = new BigInteger("123456789000");
System.out.println(i.longValue()); // 123456789000
System.out.println(i.multiply(i).longValueExact()); // java.lang.ArithmeticException: BigInteger out of long range
```

使用`longValueExact()`方法时，如果超出了`long`型的范围，会抛出`ArithmeticException`。

`BigInteger`和`Integer`、`Long`一样，也是不可变类，并且也继承自`Number`类。因为`Number`定义了转换为基本类型的几个方法：

- 转换为`byte`：`byteValue()`
- 转换为`short`：`shortValue()`
- 转换为`int`：`intValue()`
- 转换为`long`：`longValue()`
- 转换为`float`：`floatValue()`
- 转换为`double`：`doubleValue()`

因此，通过上述方法，可以把`BigInteger`转换成基本类型。如果`BigInteger`表示的范围超过了基本类型的范围，转换时将丢失高位信息，即结果不一定是准确的。如果需要准确地转换成基本类型，可以使用`intValueExact()`、`longValueExact()`等方法，在转换时如果超出范围，将直接抛出`ArithmeticException`异常。

如果`BigInteger`的值甚至超过了`float`的最大范围（3.4x10e38），那么返回的 float 是什么呢？

```java
// BigInteger to float
import java.math.BigInteger;

public class Main {
  public static void main(String[] args) {
    BigInteger n = new BigInteger("999999").pow(99);
    float f = n.floatValue();
    System.out.println(f); // Infinity
  }
}
```

#### 3.2.9 BigDecimal

和`BigInteger`类似，`BigDecimal`可以表示一个任意大小且精度完全准确的浮点数。

```
BigDecimal bd = new BigDecimal("123.4567");
System.out.println(bd.multiply(bd)); // 15241.55677489
```

`BigDecimal`用`scale()`表示小数位数，例如：

```java
BigDecimal d1 = new BigDecimal("123.45");
BigDecimal d2 = new BigDecimal("123.4500");
BigDecimal d3 = new BigDecimal("1234500");
System.out.println(d1.scale()); // 2,两位小数
System.out.println(d2.scale()); // 4
System.out.println(d3.scale()); // 0
```

通过`BigDecimal的stripTrailingZeros()`方法，可以将一个`BigDecimal`格式化为一个相等的，但去掉了末尾 0 的`BigDecimal`：

```java
BigDecimal d1 = new BigDecimal("123.4500");
BigDecimal d2 = d1.stripTrailingZeros();
System.out.println(d1.scale()); // 4
System.out.println(d2.scale()); // 2,因为去掉了00

BigDecimal d3 = new BigDecimal("1234500");
BigDecimal d4 = d3.stripTrailingZeros();
System.out.println(d3.scale()); // 0
System.out.println(d4.scale()); // -2
```

如果一个`BigDecimal`的`scale()`返回负数，例如，-2，表示这个数是个整数，并且末尾有 2 个 0。

可以对一个`BigDecimal`设置它的`scale`，如果精度比原始值低，那么按照指定的方法进行四舍五入或者直接截断：

```java
import java.math.BigDecimal;
import java.math.RoundingMode;
----
public class Main {
  public static void main(String[] args) {
    BigDecimal d1 = new BigDecimal("123.456789");
    BigDecimal d2 = d1.setScale(4, RoundingMode.HALF_UP); // 四舍五入，123.4568
    BigDecimal d3 = d1.setScale(4, RoundingMode.DOWN); // 直接截断，123.4567
    System.out.println(d2);
    System.out.println(d3);
  }
}
```

对`BigDecimal`做加、减、乘时，精度不会丢失，但是做除法时，存在无法除尽的情况，这时，就必须指定精度以及如何进行截断：

```java
BigDecimal d1 = new BigDecimal("123.456");
BigDecimal d2 = new BigDecimal("23.456789");
BigDecimal d3 = d1.divide(d2, 10, RoundingMode.HALF_UP); // 保留10位小数并四舍五入
BigDecimal d4 = d1.divide(d2); // 报错：ArithmeticException，因为除不尽
```

还可以对`BigDecimal`做除法的同时求余数：

```java
import java.math.BigDecimal;
----
public class Main {
  public static void main(String[] args) {
    BigDecimal n = new BigDecimal("12.345");
    BigDecimal m = new BigDecimal("0.12");
    BigDecimal[] dr = n.divideAndRemainder(m);
    System.out.println(dr[0]); // 102
    System.out.println(dr[1]); // 0.105
  }
}
```

调用`divideAndRemainder()`方法时，返回的数组包含两个`BigDecimal`，分别是商和余数，其中商总是整数，余数不会大于除数。我们可以利用这个方法判断两个 BigDecimal 是否是整数倍数：

```java
BigDecimal n = new BigDecimal("12.75");
BigDecimal m = new BigDecimal("0.15");
BigDecimal[] dr = n.divideAndRemainder(m);
if (dr[1].signum() == 0) {
  // n是m的整数倍
}
```

比较`BigDecimal`

在比较两个`BigDecimal`的值是否相等时，要特别注意，使用`equals()`方法不但要求两个`BigDecimal`的值相等，还要求它们的`scale()`相等：

```java
BigDecimal d1 = new BigDecimal("123.456");
BigDecimal d2 = new BigDecimal("123.45600");
System.out.println(d1.equals(d2)); // false,因为scale不同
System.out.println(d1.equals(d2.stripTrailingZeros())); // true,因为d2去除尾部0后scale变为3
System.out.println(d1.compareTo(d2)); // 0 = 相等, -1 = d1 < d2, 1 = d1 > d2
```

必须使用`compareTo()`方法来比较，它根据两个值的大小分别返回负数、正数和`0`，分别表示小于、大于和等于。

:::danger 注意

总是使用`compareTo()`比较两个`BigDecimal`的值，不要使用`equals()`！

:::

如果查看`BigDecimal`的源码，可以发现，实际上一个`BigDecimal`是通过一个`BigInteger`和一个`scale`来表示的，即`BigInteger`表示一个完整的整数，而`scale`表示小数位数：

```java
public class BigDecimal extends Number implements Comparable<BigDecimal> {
  private final BigInteger intVal;
  private final int scale;
}
```

`BigDecimal`也是从`Number`继承的，也是不可变对象。

#### 3.2.10 常用工具类

1. Math

   顾名思义，`Math`类就是用来进行数学计算的，它提供了大量的静态方法来便于我们实现数学计算：

   求绝对值：

   ```java
   Math.abs(-100); // 100
   Math.abs(-7.8); // 7.8
   ```

   取最大或最小值：

   ```java
   Math.max(100, 99); // 100
   Math.min(1.2, 2.3); // 1.2
   ```

   计算 x^y 次方：

   ```java
   Math.pow(2, 10); // 1024.0
   ```

   计算 √x：

   ```java
   Math.sqrt(2); // 1.4142135623730951
   ```

   计算 e^x 次方：

   ```java
   Math.exp(2); // 7.38905609893065
   ```

   计算以 e 为底的对数：

   ```java
   Math.log(4); // 1.386...
   ```

   计算以 10 为底的对数：

   ```java
   Math.log10(100); // 2
   ```

   三角函数：

   ```java
   Math.sin(3.14); // 0.00159...
   Math.cos(3.14); // -0.9999...
   Math.tan(3.14); // -0.0015...
   Math.asin(1.0); // 1.57079...
   Math.acos(1.0); // 0.0
   ```

   Math 还提供了几个数学常量：

   ```java
   double pi = Math.PI; // 3.14159...
   double e = Math.E; // 2.7182818...
   Math.sin(Math.PI / 6); // sin(π/6) = 0.5
   ```

   生成一个随机数 x，x 的范围是`0 <= x < 1`：

   ```java
   Math.random(); // 0.53907... 每次都不一样
   ```

   如果我们要生成一个区间在[MIN, MAX)的随机数，可以借助 Math.random()实现，计算如下：

   ```java
   // 区间在[MIN, MAX)的随机数
   public class Main {
     public static void main(String[] args) {
       double x = Math.random(); // x的范围是[0,1)
       double min = 10;
       double max = 50;
       double y = x * (max - min) + min; // y的范围是[10,50)
       long n = (long) y; // n的范围是[10,50)的整数
       System.out.println(y);
       System.out.println(n);
     }
   }
   ```

   有些同学可能注意到 Java 标准库还提供了一个`StrictMath`类，它提供了和`Math`几乎一模一样的方法。这两个类的区别在于，由于浮点数计算存在误差，不同的平台（例如 x86 和 ARM）计算的结果可能不一致（指误差不同），因此，`StrictMath`保证所有平台计算结果都是完全相同的，而`Math`会尽量针对平台优化计算速度，所以，绝大多数情况下，使用`Math`就足够了。

2. HexFormat

   在处理`byte[]`数组时，我们经常需要与十六进制字符串转换，自己写起来比较麻烦，用 Java 标准库提供的`HexFormat`则可以方便地帮我们转换。

   要将`byte[]`数组转换为十六进制字符串，可以用`formatHex()`方法：

   ```java
   import java.util.HexFormat;

   public class Main {
     public static void main(String[] args) throws InterruptedException {
       byte[] data = "Hello".getBytes();
       HexFormat hf = HexFormat.of();
       String hexData = hf.formatHex(data); // 48656c6c6f
     }
   }
   ```

   如果要定制转换格式，则使用定制的 HexFormat 实例：

   ```java
   // 分隔符为空格，添加前缀0x，大写字母:
   HexFormat hf = HexFormat.ofDelimiter(" ").withPrefix("0x").withUpperCase();
   hf.formatHex("Hello".getBytes()); // 0x48 0x65 0x6C 0x6C 0x6F
   ```

   从十六进制字符串到`byte[]`数组转换，使用`parseHex()`方法：

   ```java
   byte[] bs = HexFormat.of().parseHex("48656c6c6f");
   System.out.println(new String(bs)); // Hello
   ```

3. Random

   `Random`用来创建伪随机数。所谓伪随机数，是指只要给定一个初始的种子，产生的随机数序列是完全一样的。

   要生成一个随机数，可以使用`nextInt()`、`nextLong()`、`nextFloat()`、`nextDouble()`：

   ```java
   Random r = new Random();
   r.nextInt(); // 2071575453,每次都不一样
   r.nextInt(10); // 5,生成一个[0,10)之间的int
   r.nextLong(); // 8811649292570369305,每次都不一样
   r.nextFloat(); // 0.54335...生成一个[0,1)之间的float
   r.nextDouble(); // 0.3716...生成一个[0,1)之间的double
   ```

   有童鞋问，每次运行程序，生成的随机数都是不同的，没看出伪随机数的特性来。

   这是因为我们创建`Random`实例时，如果不给定种子，就使用系统当前时间戳作为种子，因此每次运行时，种子不同，得到的伪随机数序列就不同。

   如果我们在创建`Random`实例时指定一个种子，就会得到完全确定的随机数序列：

   ```java
   import java.util.Random;

   public class Main {
     public static void main(String[] args) {
       Random r = new Random(12345);
       for (int i = 0; i < 10; i++) {
         System.out.println(r.nextInt(100));
       }
       // 51, 80, 41, 28, 55...
     }
   }
   ```

   前面我们使用的`Math.random()`实际上内部调用了`Random`类，所以它也是伪随机数，只是我们无法指定种子。

4. SecureRandom

   有伪随机数，就有真随机数。实际上真正的真随机数只能通过量子力学原理来获取，而我们想要的是一个不可预测的安全的随机数，`SecureRandom`就是用来创建安全的随机数的：

   ```java
   SecureRandom sr = new SecureRandom();
   System.out.println(sr.nextInt(100));
   ```

   `SecureRandom`无法指定种子，它使用 RNG（random number generator）算法。JDK 的`SecureRandom`实际上有多种不同的底层实现，有的使用安全随机种子加上伪随机数算法来产生安全的随机数，有的使用真正的随机数生成器。实际使用的时候，可以优先获取高强度的安全随机数生成器，如果没有提供，再使用普通等级的安全随机数生成器：

   ```java
   import java.util.Arrays;
   import java.security.SecureRandom;
   import java.security.NoSuchAlgorithmException;

   public class Main {
     public static void main(String[] args) {
       SecureRandom sr = null;
       try {
         sr = SecureRandom.getInstanceStrong(); // 获取高强度安全随机数生成器
       } catch (NoSuchAlgorithmException e) {
         sr = new SecureRandom(); // 获取普通的安全随机数生成器
       }
       byte[] buffer = new byte[16];
       sr.nextBytes(buffer); // 用安全随机数填充buffer
       System.out.println(Arrays.toString(buffer));
     }
   }
   ```

   `SecureRandom`的安全性是通过操作系统提供的安全的随机种子来生成随机数。这个种子是通过 CPU 的热噪声、读写磁盘的字节、网络流量等各种随机事件产生的“熵”。

   在密码学中，安全的随机数非常重要。如果使用不安全的伪随机数，所有加密体系都将被攻破。因此，时刻牢记必须使用`SecureRandom`来产生安全的随机数。

   :::danger 注意
   需要使用安全随机数的时候，必须使用`SecureRandom`，绝不能使用`Random`！
   :::
