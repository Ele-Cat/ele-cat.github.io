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
