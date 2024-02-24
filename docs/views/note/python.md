---
outline: [2, 3]
---

# Python

## 参考资料

- [廖雪峰 Python 教程](https://www.liaoxuefeng.com/wiki/1016959663602400)
- [Python 3](https://docs.python.org/zh-cn/3/index.html)

## 01. 简介

### 1.1 Python 是什么？

- Python 是一门易于学习、功能强大的编程语言。它提供了高效的高级数据结构，还能简单有效地**面向对象编程**。
- Python 是一种解释型语言，也被称为动态语言，它的解释器可以运行在多种平台（如 Windows、Linux、Mac OS X）上。
- Python 是一种开源的语言，这意味着，Python 的源代码是开放的，你可以从 [Python 官网](https://www.python.org/)下载到。

### 1.2 Python 与其他语言的比较

Python 作为一种高级编程语言，在全球范围内广泛应用于网站开发、数据分析、人工智能、科学计算等多个领域。它以简洁的语法、强大的标准库和广泛的社区支持著称。与其他编程语言相比，Python 在某些方面表现出独特的优势，同时也存在一些局限性。以下是 Python 与其他几种流行编程语言（如 Java、C/C++、JavaScript、Ruby）的比较：

1. 与 `Java` 的比较
   - **语法简洁性**：Python 的语法更简洁、更易于阅读和编写。Java 语言因其强类型和冗长的语法，相比之下代码量通常更多。
   - **运行速度**：Java 程序在运行时经过 JVM（Java 虚拟机）编译成机器码，因此在执行速度上往往优于 Python 的解释执行方式。Python 的运行速度是其常被诟病的一点，尽管通过实现如 PyPy 等可以有所改善。
   - **跨平台性**：两者都具有很好的跨平台性，都能在多种操作系统上运行。
   - **应用领域**：Java 在企业级应用、安卓应用开发等领域更加普遍，而 Python 在数据科学、人工智能、网络爬虫等领域更加受欢迎。
2. 与 `C/C++` 的比较
   - **性能**：C/C++ 为编译型语言，执行效率高，适合对性能要求极高的应用程序开发，如系统软件、游戏开发等。Python 作为解释型语言，其执行效率相对较低。
   - **语法难度**：Python 的语法更为简单和直观，学习曲线较平缓，适合初学者。C/C++ 语法复杂，涉及指针等概念，学习难度较大。
   - **内存管理**：Python 自动进行内存管理，无需手动处理。C/C++ 需要程序员手动管理内存，这既是其强大之处也是容易出错的地方。
3. 与 `JavaScript` 的比较
   - **应用领域**：JavaScript 主要用于网页和服务器端开发（Node.js），是 Web 开发的核心技术之一。Python 虽然也能进行 Web 开发（如使用 Django、Flask 框架），但它的应用范围更广，包括数据分析、机器学习等。
   - **环境运行**：JavaScript 最初设计为一种客户端脚本语言，运行在浏览器中。Python 主要运行在服务器或者个人电脑的操作系统上。
   - **异步编程**：JavaScript 强调异步编程，尤其是在 Node.js 中，采用事件驱动的方式处理并发，这使得 JavaScript 在处理高并发、I/O 密集型应用时表现出色。Python 通过 asyncio 库也支持异步编程，但这不是其最初设计的核心。

## 02. 安装&运行

### 2.1 安装 Python

1. 下载适合自己环境的 `Python` 版本，[下载地址](https://www.python.org/downloads/)
2. 安装时，**特别要注意**勾上`Add Python 3.x to PATH`，然后点“Install Now”即可完成安装。安装成功后在命令行中运行：

   ```sh
   python
   ```

   <pre>
   ┌────────────────────────────────────────────────────────┐
   │Command Prompt                                    - □ x │
   ├────────────────────────────────────────────────────────┤
   │$ python                                                │
   │Python 3.12.x ...                                       │
   │[MSC v... 64 bit (AMD64)] on win32                      │
   │Type "help", "copyright", "credits" or "license"...     │
   │>>> _                                                   │
   │                                                        │
   └────────────────────────────────────────────────────────┘
   </pre>

   ::: tip
   当出现`>>>`提示符时，就表明已经进入 Python 交互式环境中，可以输入任何 Python 代码，回车后会立刻得到执行结果。输入`exit()`或`quit()`并回车，就可以退出 Python 交互式环境（直接关掉命令行窗口也可以）。
   :::

### 2.2 Python 解释器

> 当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以`.py` 为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行`.py` 文件。

- CPyhton：
  当我们从 Python 官方网站下载并安装好 Python 3.x 后，我们就直接获得了一个官方版本的解释器：`CPython`。这个解释器是用 C 语言开发的，所以叫 `CPython`。在命令行下运行 `python` 就是启动 CPython 解释器。

- [其他解释器](https://www.liaoxuefeng.com/wiki/1016959663602400/1016966024263840)

### 2.3 第一个 Python 程序

1. 在**Python 交互式环境**中，输入以下代码并回车：

   ```sh
   >>> 100+200
   # 输出：300
   ```

   ```sh
   >>> print('hello, world')
   # 输出：hello, world
   ```

   ```sh
   >>> exit()
   # 退出 Python 交互式环境
   ```

   ::: tip
   但是上述的代码并未保存下来，下次还想用的时候，还得再敲一遍！这时候就要用到`.py`文件了。
   :::

2. 创建`.py`文件，并运行。在目录下创建`print.py`文件，写入：

   ```py
   print(100 + 200 + 300)
   print("Hello World")
   print('The quick brown fox', 'jumps over', 'the lazy dog')
   print('100 + 200 + 300 =', 100 + 200 + 300)
   ```

   并在该目录下的命令行中执行：

   ```sh
   python calc.py
   # 输出
   # 600
   # Hello World
   # The quick brown fox jumps over the lazy dog
   # 100 + 200 + 300 = 600
   ```

### 2.4 输出&输入

> 上小节[2.3](#_2-3-第一个-python-程序) 中我们在`.py`文件中写入了一些代码，并得到了相应的输出。得知可以用`print()`输出你想要的结果。

#### 2.4.1 输出

1. 基本打印：直接使用 print()函数，括号内填写你想要输出的内容。

   ```python
   print("Hello, World!")
   ```

   :::details 查看输出：

   ```sh
   Hello World
   ```

   :::

2. 打印变量：将变量作为 print()函数的参数，可以输出变量的值。

   ```python
   message = "Hello, Python!"
   print(message)
   ```

   :::details 查看输出：

   ```sh
   Hello, Python!
   ```

   :::

3. 打印多个项：`print()`函数可以接收多个参数，使用逗号`,`分隔，它们会依次打印，参数之间默认以空格分隔。

   ```python
   name = "Alice"
   age = 30
   print(name, "is", age, "years old.")
   ```

   :::details 查看输出：

   ```sh
   Jim is 30 years old.
   ```

   :::

4. 修改分隔符：通过关键字参数 sep，可以修改 print()函数输出时各参数之间的分隔符，默认是空格。

   ```python
   print("Hello", "Python", sep="-")
   ```

   :::details 查看输出：

   ```sh
   Hello-Python
   ```

   :::

5. 结尾处理：`print()`函数默认在打印结束后会换行，这是因为其有一个 end 参数，默认值为\n。可以修改 end 参数来改变结束字符。

   ```python
   print("Hello, Python", end="!")
   print("This is on the same line.")
   ```

   :::details 查看输出：

   ```sh
   Hello Python!This is on the same line.
   ```

   :::

6. 格式化输出：Python 提供了多种字符串格式化的方法，`print()`函数可以结合这些方法输出格式化后的字符串。

   - 使用%操作符：

   ```python
   name = "Alice"
   age = 30
   print("%s is %d years old." % (name, age))
   ```

   | 占位符 | 替换内容     |
   | -----: | ------------ |
   |     %d | 整数         |
   |     %f | 浮点数       |
   |     %s | 字符串       |
   |     %x | 十六进制整数 |

   - 使用.format()方法：

   ```python
   print("{} is {} years old.".format(name, age))
   print("{0} is {1} years old.".format(name, age))
   ```

   - 使用 f-string（Python 3.6+）：

   ```python
   print(f"{name} is {age} years old.")
   ```

   :::details 以上几种情况都输出：

   ```sh
   Jim is 30 years old.
   ```

   :::

7. 打印到文件：`print()`函数还可以通过 file 参数将内容输出到文件而非标准输出。

   ```python
   with open('output.txt', 'w') as f:
     print("Hello, file!", file=f)
   ```

   :::details 执行结果：

   在当前目录下创建`output.txt`文件，文件内容：

   ```sh
   Hello, file!
   ```

   :::

::: tip 小结
这些是 print()函数的一些基本用法，根据不同的需求选择合适的方式进行输出。
:::

#### 2.4.2 输入

> 输入函数：`input()`函数用于获取用户输入的内容。

1. 在**Python 交互式环境**中输入：

   ```sh
   >>> name = input("请输入你的名字：")
   Jim
   ```

   当在输入`name = input("请输入你的名字：")`并按下回车后，Python 交互命令行就在等待用户输入了，输入`Jim`后回车，会发现无任何输出且 Python 交互命令行又恢复至`>>>`状态，那我们刚刚输入的 Jim 到哪里去了呢？答案是：存储到变量`name`中，验证：

   ```sh
   print(name)
   # 输出
   # Jim
   ```

2. 创建`input.py`文件，写入：

   ```python
   name = input("请输入你的名字：")
   print("Hello,", name)
   ```

   运行`input.py`文件

   ```sh
   python input.py
   ```

   执行文件后，命令行会提示**请输入你的名字：**，在命令行中输入`Jim`并回车，会输出：

   ```sh
   Hello, Jim
   ```

## 03. Python 基础

::: warning 运行提醒
以下示例均为`.py`文件示例。
:::

### 3.1 基础数据类型

> Python 基础数据类型包含`整数 int`、`浮点数 float`、`字符串 str`、`布尔值 bool`、`空值 None`。

1. **整数**（**int**）

   - Python 可以处理任意大小的整数，当然包括负整数，在程序中的表示方法和数学上的写法一模一样，例如：`1`，`100`，`-8080`，`0`等等。
   - 计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用 `0x` 前缀和 `0-9`，`a-f` 表示，例如：`0xff00`，`0xa5b4c3d2`，等等。
   - 对于很大的数，例如 `10000000000`，很难数清楚 0 的个数。Python 允许在数字中间以`_`分隔，因此，写成 `10_000_000_000` 和 `10000000000` 是完全一样的。十六进制数也可以写成 `0xa1b2_c3d4`。

2. **浮点数**（**float**）

   - 浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，比如，`1.23x10^9` 和 `12.3x10^8` 是完全相等的。浮点数可以用数学写法，如 `1.23`，`3.14`，`-9.01`，等等。但是对于很大或很小的浮点数，就必须用科学计数法表示，把 10 用 e 替代，1.23x10^9 就是 `1.23e9`，或者 `12.3e8`， 0.000012 可以写成 `1.2e-5`，等等。

   - 整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的（除法难道也是精确的？是的！），而浮点数运算则可能会有四舍五入的误差。

3. **字符串**（**str**）

   - 字符串可以用单引号`'`，双引号`"`，三引号表示`"""`。
   - 如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，如下所示：

   ```python
   print('I\'m \"OK\"!')
   # I'm "OK"!
   ```

   - 转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`，如下所示：

   ```python
   print('I\'m ok.')
   # I'm ok.
   print('I\'m learning\nPython.')
   # I'm learning
   # Python.
   print('\\\n\\')
   # \
   # \
   ```

   - 如果字符串里面有很多字符都需要转义，就需要加很多`\`，为了简化，Python 还允许用 `r''`表示`''`内部的字符串默认不转义（原样输出），如下所示：

   ```python
   print('\\\t\\')
   # \       \
   print(r'\\\t\\')
   # \\\t\\
   ```

   - 单引号和双引号表示的字符串是完全一样的，三引号表示的字符串可以由多行组成，编写多行字符串时，三引号的第一行和最后一行都需要加上三引号，如下所示：

   ```python
   message = '''这是一个多行字符串，
   第一行。
   第二行。
   第三行。'''
   print(message)
   # 这是一个多行字符串，
   # 第一行。
   # 第二行。
   # 第三行。
   ```

   ```python
   print('''hello,\n
   world''')
   # hello,
   #
   # world

   print(r'''hello,\n
   world''')
   # hello,\n
   # world
   ```

4. **布尔值**（**bool**）

   > 布尔值有两个取值：`True`和`False`。

   - 布尔值可以用 `True` 和 `False` 表示，也可以通过布尔运算计算出来，如下所示：

   ```python
   print(True)
   # True
   print(False)
   # False
   print(1 > 2)
   # False
   print(3 > 2)
   # True
   ```

   - 布尔值可以直接赋值给变量，如下所示：

   ```python
   is_ok = True
   is_not_ok = False
   print(is_ok)
   # True
   print(is_not_ok)
   # False
   ```

   - 布尔值也可以和逻辑运算符`and`、`or`和`not`运算，如下所示：

     - `and` 运算是`与运算`，只有所有都为 `True`，`and` 运算结果才是 `True`：

     ```python
     print(True and True)
     # True
     print(True and False)
     # False
     print(False and True)
     # False
     print(False and False)
     # False
     print(1 > 2 and 3 > 2)
     # False
     ```

     - `or` 运算是`或运算`，只要其中有一个为`True`，`or`运算结果就是`True`：

     ```python
     print(True or True)
     # True
     print(True or False)
     # True
     print(False or True)
     # True
     print(False or False)
     # False
     print(5 > 4 or 3 < 2)
     # True
     ```

     - `not`运算是`非运算`，它是一个单目运算符，把`True`变成`False`，`False`变成`True`：

     ```python
     print(not True)
     # False
     print(not False)
     # True
     print(not 1 > 2)
     # True
     ```

   :::tip 小结
   布尔值经常用在条件判断中，比如：

   ```python
   age = input("How old are you? ")
   if int(age) >= 18:
      print("adult")
   else:
      print("teenager")
   ```

   :::

5. **空值**（**None**）

   空值是 Python 里一个特殊的值，用`None`表示。`None`不能理解为`0`，因为`0`是有意义的，而`None`是一个特殊的空值。

### 3.2 变量 & 常量

1. 变量在程序中就是用一个变量名来表示，变量名由字母、数字、下划线组成，且不能以数字开头。变量不仅可以储存数字，还可以是任意数据类型。

```python
a = 1
# 变量a是一个整数。

t_007 = 'T007'
# 变量t_007是一个字符串。

Answer = True
# 变量Answer是一个布尔值True。
```

```python
a = '123'
b = a
a = '456'
print(b)
# 123
```

2. Python 中没有真正的常量，所谓的常量实际上是可被重新赋值的变量。比如常用的数学常数`π`就是一个常量。在 Python 中，通常用全部大写的变量名表示常量：

```python
PI = 3.14159265359
print(PI)
```

### 3.3 列表 & 元组

1. **列表**（**list**）

   - 列表是 Python 中最常用的一种数据类型，列表用`[]`表示，列表中的元素用`,`分割开，如下所示：

   ```python
   a = [1, 2, 3]
   # 列表a中有3个元素，分别是1、2、3。
   ```

   - 列表长度用`len()`函数计算，如下所示：

   ```python
   a = [1, 2, 3]
   print(len(a))
   # 3
   ```

   - 可以通过索引来访问列表的每个元素，索引是从`0`开始的：

   ```python
   a = [1, 2, 3]
   print(a[0])
   # 1
   print(a[1])
   # 2
   print(a[2])
   # 3
   print(a[3])
   # Traceback (most recent call last):
   # File "<stdin>", line x, in <module>
   # IndexError: list index out of range
   ```

   ::: warning 索引越界
   当索引超出范围时，Python 会报一个`IndexError`的错误，所以要确保索引不要越界。
   :::

   也可以通过`-1`作为索引，取最后一个元素，以此类推：

   ```python
   a = [1, 2, 3]
   print(a[-1])
   # 3
   print(a[-2])
   # 2
   print(a[-3])
   # 1
   print(a[-4])
   # Traceback (most recent call last):
   # File "<stdin>", line x, in <module>
   # IndexError: list index out of range
   ```

   - 列表中的元素可以是任意数据类型，甚至可以包含列表：

   ```python
   a = [1, "你好", [2, 3]]
   # 列表a中有3个元素，分别是1、"你好"、[2, 3]。
   ```

   - 列表的元素是可以修改的，如下所示：

   ```python
   a = [1, 2, 3]
   # 列表a中有3个元素，分别是1、2、3。
   a[0] = 100
   # 列表a中第一个元素的值修改为100。
   print(a)
   # [100, 2, 3]
   ```

   - 列表数据末尾追加`append()`、指定位置插入`insert()`、末尾或指定位置删除`pop()`、删除指定元素`remove()`、排序`sort()`、倒序`reverse()`、清空`clear()`等等方法，如下所示：

   ```python
   a = [1, 2, 3]
   print(a)
   # [1, 2, 3]
   a.append(4)
   print(a)
   # [1, 2, 3, 4]
   a.insert(0, 0)
   print(a)
   # [0, 1, 2, 3, 4]
   a.pop(0)
   print(a)
   # [1, 2, 3, 4]
   a.insert(2, 5)
   print(a)
   # [1, 2, 5, 3, 4]
   a.remove(4)
   print(a)
   # [1, 2, 5, 3]
   a.sort()
   print(a)
   # [1, 2, 3, 5]
   a.reverse()
   print(a)
   # [5, 3, 2, 1]
   a.clear()
   print(a)
   # []
   ```

2. **元组**（**tuple**）

   - 元组是另一种有序列表，用`()`表示，元组中的元素用`,`分割开。tuple 和 list 非常类似，但是 tuple 一旦初始化就不能修改，如下所示：

   ```python
   a = (1, 2, 3)
   # 元组a中有3个元素，分别是1、2、3。
   ```

   - 元组的元素不可修改，如下所示：

   ```python
   a = (1, 2, 3)
   # 元组a中有3个元素，分别是1、2、3。
   a[0] = 100
   print(a)
   # Traceback (most recent call last):
   # File "<stdin>", line x, in <module>
   # TypeError: 'tuple' object does not support item assignment
   ```

   ::: warning 不可变的`tuple`有什么意义？
   因为`tuple`不可变，所以代码更安全。如果可能，能用`tuple`代替`list`就尽量用`tuple`。
   :::

   ::: details `tuple`陷阱
   当你定义一个`tuple`时，在定义的时候，`tuple`的元素就必须被确定下来，比如：

   ```python
   a = (1, 2, 3)
   print(a)
   # (1, 2, 3)
   ```

   想要定义一个空`tuple`，可以写成`()`：

   ```python
   a = ()
   print(a)
   # ()
   ```

   但是，想要定义只有一个元素的`tuple`，如果这样写：

   ```python
   a = (1)
   print(a)
   # 1
   ```

   > 可以看到打印`a = (1)`的结果是`1`这个数！这是因为括号`()`既可以表示 tuple，又可以表示数学公式中的小括号，这就产生了歧义，因此，Python 规定，这种情况下，按小括号进行计算，计算结果自然是`1`。

   所以，只有 1 个元素的 tuple 定义时必须加一个逗号`,`，来消除歧义：

   ```python
   b = (1,)
   print(b)
   # (1,)
   ```

   :::

   - 可变`tuple`，`tuple`所谓的“不变”是说，`tuple`的每个元素，指向永远不变。

   ```python
   a = (1, 2, [3, 4])
   a[2][0] = "x"
   a[2][1] = "y"
   print(a)
   # (1, 2, ['x', 'y'])
   ```

### 3.4 字典 & 集合

1. **字典**（**dict**）

   - 字典是 Python 中最常用的一种数据类型，字典用`{}`表示，以 `key: value` 方式存储，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25}
   # 字典a中有2个元素，分别是name和age。
   ```

   - 字典的键必须是不可变的，比如`int`、`float`、`str`、`tuple`等等，而不能是`list`、`dict`、`set`等等，字典的值可以是任意数据类型，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   # 字典a中有3个元素，分别是name、age和hobby。
   ```

   - 字典的元素是可以修改的，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   # 字典a中有3个元素，分别是name、age和hobby。
   a['name'] = 'T008'
   a['age'] = 20
   a['hobby'].append('pingpang')
   # 字典a中name的值修改为T008。
   print(a)
   # {'name': 'T008', 'age': 20, 'hobby': ['football', 'basketball', 'pingpang']}
   ```

   - 如果字典的`key`不存在，`dict`就会报错，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   print(a['address'])
   # Traceback (most recent call last):
   # File "<stdin>", line x, in <module>
   # KeyError: 'address'
   ```

   ::: tip 避免 key 不存在引起的报错：

   1. 通过`in`判断字典`key`是否存在，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   # print(a['address'])
   print('address' in a)
   # False
   ```

   2. 使用`dict`提供`get()`的方法，如果 key 不存在，可以返回`None`，或者自己指定的`value`，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   # print(a['address'])
   print(a.get('address'))
   # None
   print(a.get('address', 'unknown'))
   # unknown
   ```

   :::

   - 字典的`key`是可以重复的，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball'], 'name': 'T008'}
   print(a)
   # {'name': 'T008', 'age': 25, 'hobby': ['football', 'basketball']}
   ```

   - 字典的元素是可以删除的，如下所示：

   ```python
   a = {'name': 'T007', 'age': 25, 'hobby': ['football', 'basketball']}
   a.pop('name')
   # 字典a中name的值删除。
   print(a)
   # {'age': 25, 'hobby': ['football', 'basketball']}
   ```

2. **集合**（**set**）

   - 集合是无序的，集合中不包含重复元素，集合使用`{}`表示，如下所示：

   ```python
   a = {1, 2, 3}
   print(a)
   # {1, 2, 3}
   a = {3, 2, 1}
   print(a)
   # {1, 2, 3}
   b = set([4, 5, 6])
   print(b)
   # {4, 5, 6}
   ```

   - 重复元素在`set`中被自动过滤：

   ```python
   a = {1, 2, 3, 1, 4, 3}
   print(a)
   # {1, 2, 3, 4}
   ```

   - 集合的元素是可以修改的，如下所示：

   ```python
   a = {1, 2, 3}
   print(a)
   # {1, 2, 3}
   a.add(4)
   # 集合a中添加元素4。
   print(a)
   # {1, 2, 3, 4}
   ```

   - 集合的元素是可以删除的，如下所示：

   ```python
   a = {1, 2, 3}
   print(a)
   # {1, 2, 3}
   a.remove(2)
   # 集合a中删除元素2。
   print(a)
   # {1, 3}
   ```

   - 集合的元素是可以清空的，如下所示：

   ```python
   a = {1, 2, 3}
   print(a)
   # {1, 2, 3}
   a.clear()
   # 集合a中所有元素清空。
   print(a)
   # set()
   ```

   - 集合的元素是可以判断是否存在的，如下所示：

   ```python
   a = {1, 2, 3}
   print(2 in a)
   # True
   print(4 in a)
   # False
   ```

   - `set`可以看成数学意义上的无序和无重复元素的集合，因此，两个`set`可以做数学意义上的交集、并集等操作：

   ```python
   a = {1, 2, 3}
   b = {2, 3, 4}
   print(a & b)
   # {2, 3}
   print(a | b)
   # {1, 2, 3, 4}
   ```

### 3.5 条件判断 & 模式匹配

> 计算机之所以能做很多自动化的任务，因为它可以自己做条件判断与模式匹配。

#### 3.5.1 `if`语句

1. 使用`if`语句判断用户输入的年龄并输出不同内容，也可以给`if`添加一个`else`语句，意思是，如果`if`判断是`False`，不要执行`if`的内容，去把`else`执行了：

```python
age = int(input("请输入你的年龄："))

print("你的年龄是：", age)
if age >= 18:
  print("你成年了")
else:
  print("你还未成年")
```

2. 使用`elif`语句，可以将判断变得更加细致：

```python
age = int(input("请输入你的年龄："))

print("你的年龄是：", age)
if age >= 18:
  print("你成年了")
elif age >= 8:
  print("你还未成年")
else:
  print("你还是小孩")
```

:::tip 关于 elif
`elif`是`else if`的缩写，完全可以有多个`elif`，所以`if`语句的完整形式就是：

```python
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```

:::

> `if`语句执行有个特点，它是从上往下判断，如果在某个判断上是`True`，把该判断对应的语句执行后，就忽略掉剩下的`elif`和`else`。

::: details 小练习
小明身高 1.75，体重 80.5kg。请根据 BMI 公式（体重除以身高的平方）帮小明计算他的 BMI 指数，并根据 BMI 指数：

- 低于 18.5：过轻
- 18.5-25：正常
- 25-28：过重
- 28-32：肥胖
- 高于 32：严重肥胖

```python
height = 1.75
weight = 80.5

bmi = weight / (height ** 2)
print(bmi)
if bmi < 18.5:
   print("过轻")
elif bmi < 25:
   print("正常")
elif bmi < 28:
   print("过重")
elif bmi < 32:
   print("肥胖")
else:
   print("严重肥胖")
```

:::

#### 3.5.2 `match`语句

::: tip 使用`elif`可能引发的问题
当我们用 if ... elif ... elif ... else ...判断时，会写很长一串代码，可读性较差。针对某个变量匹配若干种情况，可以使用`match`语句。
:::

1. 简单匹配

例如，我们判断某学生成绩，使用`if`、`elif`、`else`语句：

```python
score = input("请输入学生成绩：")

if score == 'A':
  print("优秀")
elif score == 'B':
  print("良好")
elif score == 'C':
  print("合格")
elif score == 'D':
  print("及格")
else:
  print("不及格")
```

使用`match`语句，则可改写为：

```python
score = input("请输入学生成绩：")

match score:
  case 'A':
    print("优秀")
  case 'B':
    print("良好")
  case 'C':
    print("合格")
  case 'D':
    print("及格")
  case _:
    print("不及格")
```

::: danger 特别注意
匹配语句需要 Python 3.10 或更高版本 Pylance！
:::

2. 复杂匹配

`match`语句除了可以匹配简单的单个值外，还可以匹配多个值、匹配一定范围，并且把匹配后的值绑定到变量：

```python
age = 15

match age:
  case x if x < 10:
    print(f'< 10 years old: {x}')
  case 10:
    print('10 years old.')
  case 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18:
    print('11~18 years old.')
  case 19:
    print('19 years old.')
  case _:
    print('not sure.')
```

::: details 解析

- 第一个`case x if x < 10`表示当`age < 10`成立时匹配，且赋值给变量`x`
- 第二个`case 10`仅匹配单个值，第三个`case 11|12|...|18`能匹配多个值，用`|`分隔
- 最后一个`_`表示匹配其他所有情况。

:::

3. 匹配列表

```python
args = ['gcc', 'hello.c', 'world.c']
# args = ['clean']
# args = ['gcc']

match args:
  # 如果仅出现gcc，报错:
  case ['gcc']:
    print('gcc: missing source file(s).')
  # 出现gcc，且至少指定了一个文件:
  case ['gcc', file1, *files]:
    print('gcc compile: ' + file1 + ', ' + ', '.join(files))
  # 仅出现clean:
  case ['clean']:
    print('clean')
  case _:
    print('invalid command.')
```

::: details 解析

- 第一个 `case ['gcc']`表示列表仅有`'gcc'`一个字符串，没有指定文件名，报错；
- 第二个 `case ['gcc', file1, *files]`表示列表第一个字符串是`'gcc'`，第二个字符串绑定到变量 `file1`，后面的任意个字符串绑定到`*files`（符号`*`的作用将在函数的参数中讲解），它实际上表示至少指定一个文件；
- 第三个 `case ['clean']`表示列表仅有`'clean'`一个字符串；
- 最后一个 `case _`表示其他所有情况。
  :::

### 3.6 循环

::: tip 引子
要计算 1+2+3，我们可以直接写表达式：

```python
print(1 + 2 + 3)
# 6
```

那如果计算 1 + 2 + 3 + ... + 10000 呢，直接写加法运算就不合适了，这就用到了循环方法。
:::

#### 3.6.1 `for x in ...` 循环

> `for x in ...` 循环就是将列表或元组中的每个元素依次迭代展开

```python
sum = 0
for x in list(range(10001)):
  sum += x
print(sum)
# 50005000
```

::: details 解析
从 1 写到 10000 有点困难，幸好 Python 提供一个`range()`函数，可以生成一个整数序列，再通过`list()`函数可以转换为 list。比如`range(5)`生成的序列是从 0 开始小于 5 的整数，即[0, 1, 2, 3, 4]，因此想要生成`1 - 10000`，的整数列表可以使用`list(range(10001))`。
:::

#### 3.6.2 `while` 循环

> 只要条件满足，就不断循环，条件不满足时退出循环。

```python
sum = 0
n = 1

while n < 10001:
  sum += n
  n += 1
print(sum)
# 50005000
```

::: details 解析
设定初始总和为 0，当`n`小于`10001`时，进入循环叠加到总和中并`自增1`，直到`n`的值`不小于10001`时，退出循环。
:::

1. `break`语句

> 在循环中，`break`可以中断并退出循环

```python
sum = 0
n = 1

while n < 10001:
  if n >= 101:
    break
  sum += n
  n += 1
print(sum)
# 5050
```

::: details 解析
本来是要计算 0~10000 的总和，但是加入`n >= 101`时退出循环的逻辑后，只会计算 0~100 的总和。
:::

2. `continue`语句

> 在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环。

```python
n = 0
while n < 10:
  n += 1
  print(n)
# 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

上例中，我们可以成功打印出`1`到`10`，但是如果我们只想打印奇数，该如何操作呢：

```python
n = 0
while n < 10:
  n += 1
  if n % 2 == 0: # 如果n是偶数，执行continue语句
    continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
  print(n)
# 1，3，5，7，9
```

## 04. 函数

::: tip 引子：
我们知道，求圆面积的计算公式为：`S = PI * r^2`，当我们知道半径`r`的值时，就可以根据公式计算不同半径大小的圆的面积：

```python
r1 = 12.34
r2 = 9.08
r3 = 73.1
s1 = 3.14 * r1 * r1
s2 = 3.14 * r2 * r2
s3 = 3.14 * r3 * r3
print(s1)
# 478.145384
print(s2)
# 258.88169600000003
print(s3)
# 16778.9354
```

可以看到每次求面积时，都需要重复`3.11 * x * x`，且我们替换`3.14`为`3.14159265359`时全都得替换（ps：如果要求 100 个圆的面积呢，工作量巨大）。因此得出，**当代码有规律的重复时，我们就可以将其抽象为函数方法**。

有了`函数`，我们就可以定义函数：

```python
def area_of_circle(x):
  return 3.14 * x * x

s1 = area_of_circle(12.34)
s2 = area_of_circle(9.08)
s3 = area_of_circle(73.1)
print(s1)
# 478.145384
print(s2)
# 258.88169600000003
print(s3)
# 16778.9354
```

我们只需要修改函数体，就可以实现多次调用。

:::

### 4.1 调用函数

Python 内置了很多有用的[内置函数](https://docs.python.org/zh-cn/3/library/functions.html)，我们可以直接调用。

要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数`abs`，只有一个参数。可以直接从 Python 的官方网站[查看文档](http://docs.python.org/3/library/functions.html#abs)。也可以在交互式命令行通过`help(abs)`查看`abs`函数的帮助信息。

调用 abs 函数：

```python
a = abs(20)
b = abs(-120)
c = abs(0)

print(a)
# 20
print(b)
# 120
print(c)
# 0
```

1. 调用函数时，需要了解传入的参数数量是否正确，如果参数数量不对，会报`TypeError`的错误，并且 Python 会明确地告诉你：`abs()`有且仅有 1 个参数，但给出了两个：

   ```python
   print(abs(1, 2))

   # Traceback (most recent call last):
   #   File "<stdin>", line 1, in <module>
   #     print(abs(1, 2))
   #           ^^^^^^^^^
   # TypeError: abs() takes exactly one argument (2 given)
   ```

2. 如果参数数量正确，但是参数类型不对，也会报`TypeError`的错误，并且给出错误信息：`str`是错误的参数类型：

   ```python
   print(abs('a'))

   # Traceback (most recent call last):
   #   File "<stdin>", line 1, in <module>
   #     print(abs('a'))
   #           ^^^^^^^^
   # TypeError: bad operand type for abs(): 'str'
   ```

> 不管是调用内置函数还是自定义函数，在调用时都可以查看文档或研读函数内部代码确定函数的参数与返回值，或根据报错信息修复问题。

### 4.2 自定义函数

> 在 Python 中，定义一个函数要使用`def`语句，依次写出函数名、括号、括号中的参数和冒号`:`，然后，在缩进块中编写函数体，函数的返回值用`return`语句返回。

1. 示例，自定义一个求绝对值的`my_abs`函数：

   ```python
   def my_abs(x):
     if x >= 0:
       return x
     else:
       return -x

   print(my_abs(10))
   # 10
   print(my_abs(-20))
   # 20
   print(my_abs(0))
   # 0
   print(my_abs(-1.34))
   # 1.34
   ```

2. 参数检查

   - 调用函数时，如果参数个数不对，Python 解释器会自动检查出来，并抛出`TypeError`：

   ```python
   print(my_abs(1, 2))
   # Traceback (most recent call last):
   # File "<stdin>", line 3, in <module>
   # TypeError: my_abs() takes 1 positional argument but 2 were given
   ```

   - 但是如果参数类型不对，Python 解释器就无法帮我们检查。试试 `my_abs` 和内置函数 `abs` 的差别：

   ```python
   print(my_abs('A'))
   # Traceback (most recent call last):
   # File "<stdin>", line 6, in <module>
   # File "<stdin>", line 4, in my_abs
   # TypeError: '>=' not supported between instances of 'str' and 'int'

   print(abs('A'))
   # Traceback (most recent call last):
   # File "<stdin>", line 5, in <module>
   # TypeError: bad operand type for abs(): 'str'
   ```

   > - 当传入了不恰当的参数时，内置函数 `abs` 会检查出参数错误，而我们定义的 `my_abs` 没有参数检查，会导致 `if` 语句出错，出错信息和 `abs` 不一样。所以，这个函数定义不够完善。
   > - 让我们修改一下 my_abs 的定义，对参数类型做检查，只允许整数和浮点数类型的参数。数据类型检查可以用内置函数 `isinstance()`实现：

   ```python
   def my_abs(x):
    if not isinstance(x, (int, float)):
      raise TypeError('bad operand type')
    if x >= 0:
      return x
    else:
      return -x

   print(my_abs(10))
   # 10
   print(my_abs(-20))
   # 20
   print(my_abs(0))
   # 0
   print(my_abs(-1.34))
   # 1.34
   print(my_abs('A'))
   # Traceback (most recent call last):
   #   File "<stdin>", line 1, in <module>
   #   File "<stdin>", line 3, in my_abs
   # TypeError: bad operand type
   ```

3. 返回多个值

   > 函数可以返回多个值

   示例，游戏中，从一个点移动到另一个点，给出初始坐标、步数以及角度，就可以得出新的坐标：

   ```python
   import math
   def move(x, y, step, angle = 0):
     nx = x + step * math.cos(angle)
     ny = y - step * math.sin(angle)
     return nx, ny

   x, y = move(100, 100, 60, math.pi / 6)
   print(x, y)
   # 151.96152422706632 70.0
   ```

   :::warning 注意
   但其实这只是一种假象。Python 函数返回的依然是单一值：

   ```python
   poi = move(100, 100, 60, math.pi / 6)
   print(poi)
   # (151.96152422706632, 70.0)
   ```

   > 原来返回值是一个 `tuple`！但是，在语法上，返回一个 `tuple` 可以省略括号，而多个变量可以同时接收一个 `tuple`，按位置赋给对应的值，所以，Python 的函数返回多值其实就是返回一个 `tuple`，但写起来更方便。

   :::

::: tip 小结

- 定义函数时，需要确定函数名和参数个数；
- 如果有必要，可以先对参数的数据类型做检查；
- 函数体内部可以用 `return` 随时返回函数结果；
- 函数执行完毕也没有 `return` 语句时，自动 `return None`。
- 函数可以同时返回多个值，但其实就是一个 `tuple`。

:::

### 4.3 函数的参数

> 定义函数的时候，我们把参数的名字和位置确定下来，函数的接口定义就完成了。Python 的函数定义非常简单，但灵活度却非常大。除了正常定义的必选参数外，还可以使用默认参数、可变参数和关键字参数，使得函数定义出来的接口，不但能处理复杂的参数，还可以简化调用者的代码。

1. 位置参数

   定义一个计算`x^2`的函数：

   ```python
   def power(x):
     return x * x
   ```

   对于`power(x)`来说，参数`x`就是一个位置参数。当我们调用`power`函数时，必须传入有且仅有的一个参数`x`：

   ```python
   print(power(2))
   # 4
   print(power(-3))
   # 9
   ```

   但如果我们计算`x^3`、`x^4`、、、`x^n`呢，我们不能定义无限个函数（ps：在创建函数时，要考虑函数方法的可扩展性）。我们将`power`函数修改为：

   ```python
   def power(x, n):
     if not isinstance(x, (int, float)) or not isinstance(n, (int, float)):
       raise TypeError('bad operand type')
     return x ** n

   print(power(2, 3))
   # 8
   print(power(2, 10))
   # 1024
   print(power(2, 0))
   # 1
   print(power(0, 2))
   # 0
   ```

   修改后的`power(x, n)`函数有两个参数：`x`和`n`，这两个参数都是位置参数，调用函数时，传入的两个值按照位置顺序依次赋给参数`x`和`n`。

2. 默认参数

   上例中，新定义的`power(x, n)`在传入两个参数时是没有问题的，但是没有兼容之间一个参数时的写法：

   ```python
   print(power(2))

   # Traceback (most recent call last):
   #   File "<stdin>", line 11, in <module>
   # TypeError: power() missing 1 required positional argument: 'n'
   ```

   Python 的错误信息很明确：调用函数`power()`缺少了一个位置参数`n`。

   这个时候，默认参数就派上了用场，由于我们是兼容之前`x^2`的写法，因此给参数`n`默认值设定为`2`：

   ```python
   def power(x, n = 2):
     if not isinstance(x, (int, float)) or not isinstance(n, (int, float)):
       raise TypeError('bad operand type')
     return x ** n

   print(power(2, 3))
   # 8
   print(power(2))
   # 4
   ```

   ::: tip 注意

   - 一是必选参数在前，默认参数在后，否则 Python 的解释器会报错；
   - 二是当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。
     :::

3. 可变参数

   > 在 Python 函数中，还可以定义可变参数。顾名思义，可变参数就是传入的参数个数是可变的，可以是 1 个、2 个到任意个，还可以是 0 个。

   ::: tip 引子
   我们以不定参数 a,b,c...，求 a² + b² + c² + ...为例，因为入参个数未知，我们可以用列表`list`或元组`tuple`传进来：

   ```python
   def calc(numbers):
     sum = 0
     for n in numbers:
       sum = sum + n * n
     return sum

   print(calc([1, 2, 3]))
   # 14
   print(calc((1, 2, 3, 4)))
   # 30
   ```

   :::

   上例中，传入的参数为我们提前组装好的`list`或者`tuple`，要想使用**可变参数**，可以将函数稍作修改：

   ```python
   def calc(*numbers):
     sum = 0
     for n in numbers:
       sum = sum + n * n

     return sum

   print(calc(1, 2, 3))
   # 14
   print(calc(1, 2, 3, 4))
   # 30
   print(calc())
   # 0
   ```

   ::: warning `*`的作用

   Python 允许在 list 或 tuple 前面加一个\*号，把 list 或 tuple 的元素变成可变参数传进去：

   ```python
   print([1, 2, 3])
   # [1, 2, 3]
   print(*[1, 2, 3])
   # 1 2 3
   ```

   > `*`表示把`nums`这个`list`的所有元素作为可变参数传进去。这种写法相当有用，而且很常见。

   :::

4. 关键字参数

   > 可变参数允许你传入 0 个或任意个参数，这些可变参数在函数调用时自动组装为一个`tuple`。而关键字参数允许你传入 0 个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个`dict`。请看示例：

   ```python
   def person(name, age, **kw):
     print('name:', name, 'age:', age, 'other:', kw)

   # 函数person除了必选参数name和age外，还接受关键字参数kw。在调用该函数时，可以只传入必选参数：
   person('Michael', 30)
   # name: Michael age: 30 other: {}

   # 也可以传入任意个数的关键字参数：
   person('Bob', 35, city='Beijing')
   # name: Bob age: 35 other: {'city': 'Beijing'}
   person('Adam', 45, gender='M', job='Dev')
   # name: Adam age: 45 other: {'gender': 'M', 'job': 'Dev'}
   ```

   ::: tip 关键字参数有什么用？
   它可以扩展函数的功能。比如，在 `person` 函数里，我们保证能接收到 `name` 和 `age` 这两个参数，但是，如果调用者愿意提供更多的参数，我们也能收到。试想你正在做一个用户注册的功能，除了用户名和年龄是必填项外，其他都是可选项，利用关键字参数来定义这个函数就能满足注册的需求。
   :::

   和可变参数类似，也可以先组装出一个 dict，然后，把该 dict 转换为关键字参数传进去：

   ```python
   extra = {'city': 'Beijing', 'job': 'Engineer'}
   person('Jack', 24, city = extra['city'], job = extra['job'])
   # name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}
   ```

   当然，上面复杂的调用可以用简化的写法：

   ```python
   extra = {'city': 'Beijing', 'job': 'Engineer'}
   person('Jack', 24, **extra)
   # name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}
   ```

   > `**extra`表示把 `extra` 这个 `dict` 的所有 `key-value` 用关键字参数传入到函数的`**kw` 参数，`kw` 将获得一个 `dict`，注意 `kw` 获得的 `dict` 是 `extra` 的一份拷贝，对 `kw` 的改动不会影响到函数外的 `extra`。

5. 命名关键字参数

   对于关键字参数，函数的调用者可以传入任意不受限制的关键字参数。至于到底传入了哪些，就需要在函数内部通过`kw`检查。仍以`person()`函数为例，我们希望检查是否有 `city` 和 `job` 参数：

   ```python
   def person(name, age, **kw):
     if 'city' in kw:
       pass
     if 'job' in kw:
       pass
     print('name:', name, 'age:', age, 'other:', kw)

   # 调用者仍可以传入不受限制的关键字参数：
   person('Jack', 24, city='Beijing', addr='Chaoyang', zipcode=123456)
   # name: Jack age: 24 other: {'city': 'Beijing', 'addr': 'Chaoyang', 'zipcode': 123456}
   ```

   如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收 `city` 和 `job` 作为关键字参数。这种方式定义的函数如下：

   ```python
   def person(name, age, *, city, job):
     print(name, age, city, job)
   ```

   和关键字参数`**kw`不同，命名关键字参数需要一个特殊分隔符`*`，`*`后面的参数被视为命名关键字参数。调用方式如下：

   ```python
   person('Jack', 24, city='Beijing', job='Engineer')
   # Jack 24 Beijing Engineer
   ```

   如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符`*`了：

   ```python
   def person(name, age, *args, city, job):
     print(name, age, args, city, job)
   ```

   命名关键字参数必须传入参数名，这和位置参数不同。如果没有传入参数名，调用将报错：

   ```python
   person('Jack', 24, 'Beijing', 'Engineer')
   # Traceback (most recent call last):
   #   File "<stdin>", line 4, in <module>
   # TypeError: person() missing 2 required keyword-only arguments: 'city' and 'job'
   ```

   由于调用时缺少参数名`city`和`job`，Python 解释器把前两个参数视为位置参数，后两个参数传给`*args`，但缺少命名关键字参数导致报错。传入正确参数：

   ```python
   person('Jack', 24, city = 'Beijing', job = 'Engineer')
   # Jack 24 () Beijing Engineer
   ```

   命名关键字参数可以有缺省值，从而简化调用：

   ```python
   def person(name, age, *, city = 'Beijing', job):
     print(name, age, city, job)

   person('Jack', 24, job = 'Engineer')
   # Jack 24 Beijing Engineer
   ```

   ::: warning 特别注意
   使用命名关键字参数时，要特别注意，如果没有可变参数，就必须加一个`*`作为特殊分隔符。如果缺少`*`，Python 解释器将无法识别位置参数和命名关键字参数：

   ```python
   def person(name, age, city, job):
     # 缺少 *，city和job被视为位置参数
     pass
   ```

   :::

6. 参数组合

   > 在 Python 中定义函数，可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这 5 种参数都可以组合使用。但是请注意，参数定义的顺序必须是：**必选参数**、**默认参数**、**可变参数**、**命名关键字参数**和**关键字参数**。

   比如定义一个函数，包含上述若干种参数：

   ```python
   def f1(a, b, c=0, *args, **kw):
     print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

   def f2(a, b, c=0, *, d, **kw):
     print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)

   f1(1, 2)
   # a = 1 b = 2 c = 0 args = () kw = {}
   f1(1, 2, c=3)
   # a = 1 b = 2 c = 3 args = () kw = {}
   f1(1, 2, 3, 'a', 'b')
   # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
   f1(1, 2, 3, 'a', 'b', x=99)
   # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
   f2(1, 2, d=99, ext=None)
   # a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}

   # 最神奇的是通过一个tuple和dict，你也可以调用上述函数：
   args = (1, 2, 3, 4)
   kw = {'d': 99, 'x': '#'}
   f1(*args, **kw)
   # a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}
   args = (1, 2, 3)
   kw = {'d': 88, 'x': '#'}
   f2(*args, **kw)
   # a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
   ```

   > 所以，对于任意函数，都可以通过类似`func(*args, **kw)`的形式调用它，无论它的参数是如何定义的。

   ::: warning 注意
   虽然可以组合多达 5 种参数，但不要同时使用太多的组合，否则函数接口的可理解性很差。
   :::

### 4.4 递归函数

> 在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是**递归函数**。

::: tip 引子
举个例子，我们来计算阶乘`n! = 1 x 2 x 3 x ... x n`，用函数`fact(n)`表示，可以看出：

fact(n) = n! = 1 x 2 x 3 x ... x (n-1) x n = (n-1)! x n = fact(n-1) x n

所以，fact(n)可以表示为 n x fact(n-1)，只有 n=1 时需要特殊处理。

于是，fact(n)用递归的方式写出来就是：

```python
def fact(n):
  if not isinstance(n, int):
    return '需为整数'
  if n <= 0:
    return '需大于0的整数'
  if n == 1:
    return 1
  return n * fact(n - 1)

print(fact('a'))
# 需为整数
print(fact(0))
# 需大于0的整数
print(fact(-1))
# 需大于0的整数
print(fact(1))
# 1
print(fact(5))
# 120
print(fact(100))
# 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
```

:::

递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。

::: warning 栈溢出问题
使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试 fact(1000)：

```python
print(fact(1000))
# Traceback (most recent call last):
#   File "<stdin>", line *, in <module>
#   File "<stdin>", line *, in fact
#   File "<stdin>", line *, in fact
#   File "<stdin>", line *, in fact
#   [Previous line repeated 996 more times]
# RecursionError: maximum recursion depth exceeded
```

:::

解决递归调用栈溢出的方法是通过**尾递归**优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。

::: tip 尾递归
尾递归是指，**在函数返回的时候，调用自身，且 return 语句不能包含表达式**。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。
:::

优化**引子**中的**递归函数**为**尾递归**：

```python
def fact(n):
  return fact_iter(n, 1)

def fact_iter(num, product):
  if not isinstance(num, int):
    return '需为整数'
  if num < 0:
    return '需大于0的整数'
  if num == 0:
    return product
  return fact_iter(num - 1, num * product)
```

可以看到，`return fact_iter(num - 1, num * product)`仅返回递归函数本身，`num - 1`和`num * product`在函数调用前就会被计算，不影响函数调用。

::: tip 小结

- 使用递归函数的优点是逻辑简单清晰，缺点是过深的调用会导致栈溢出。
- 针对尾递归优化的语言可以通过尾递归防止栈溢出。尾递归事实上和循环是等价的，没有循环语句的编程语言只能通过尾递归实现循环。
- Python 标准的解释器没有针对尾递归做优化，任何递归函数都存在栈溢出的问题。

练习：使用递归函数现实[**汉诺塔的移动**](https://baike.baidu.com/item/汉诺塔/3468295)

```python
def move(n, a, b, c):
  if n == 1:
    print(a, '->', c)
  else:
    move(n - 1, a, c, b)
    print(a, '->', c)
    move(n - 1, b, a, c)

move(3, 'A', 'B', 'C')
# ...
move(4, 'A', 'B', 'C')
# ...
```

解析：当 N==1 时，直接将 A 移动到 C；当 N>=2 时，我们想要把所有的盘从 A 通过 B 移到 C，那么需要先把 A 上面 N-1 个盘通过 C 转移到 B，再把最下面的那个最大的盘从 A 直接转移到 C，然后再把 B 上面的所有盘通过 A 转移到 C。

:::

## 05. 高级特性

:::tip 引子

掌握了 Python 的数据类型、语句和函数后，基本上就可以编写出很多有用的程序了。

比如构造一个`1， 3， 5， 7， ...， 99`的列表，可以通过循环实现：

```python
numbers = []
n = 1
while n < 100:
  numbers.append(n)
  n += 2

print(numbers)
# [1, 3, 5, 7, 9, ..., 99]
```

但是，**在 Python 中，能用一行代码实现的功能，绝不用两行！**

:::

### 5.1 切片

取`list`或`tuple`中的部分元素是非常常见的操作，比如，一个`list`如下：

```python
list = ['张三', '李四', '王五', '赵六', '孙七']

# 取前三个元素的笨方法：
print([list[0], list[1], list[2]])
# ['张三', '李四', '王五']

# 取前三个元素的循环方法：
nList = []
for i in range(3):
  nList.append(list[i])
print(nList)
# ['张三', '李四', '王五']
```

对于这种取指定索引范围内元素的操作，使用循环时分繁琐，Python 提供了切片操作符（slice）来简化操作：

```python
list = ['张三', '李四', '王五', '赵六', '孙七']

# 使用切片实现取前三元素
print(list[0:3])
# ['张三', '李四', '王五']
```

`L[0:3]`表示，从索引`0`开始取，直到索引`3`为止，但不包括索引`3`。即索引`0`，`1`，`2`，正好是 3 个元素。如果索引是从`0`开始的，还可以省略：

```python
list = ['张三', '李四', '王五', '赵六', '孙七']

print(list[:3])
# ['张三', '李四', '王五']
print(list[1:3])
# ['李四', '王五']
```

类似从数组取后几个元素【_list[-1]_】，Python 也支持倒数切片：

```python
list = ['张三', '李四', '王五', '赵六', '孙七']

print(list[-2:])
# ['赵六', '孙七']
print(list[-2:5])
# ['赵六', '孙七']
print(list[-3:5])
# ['王五', '赵六', '孙七']
print(list[-3:4])
# ['王五', '赵六']
print(list[-3:-1])
# ['王五', '赵六']
```

通过切片操作，我们可以快速获取列表指定数据：

```python
L = list(range(100))

print(L)
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...99]

# 取前十个数：
print(L[:10])
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 取后十个数：
print(L[-10:])
# [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

# 取前11-20个数：
print(L[10:20])
# [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# 取前10个数，且每两个取一个：
print(L[:10:2])
# [0, 2, 4, 6, 8]

# 所有数，每5个取一个：
print(L[::5])
# [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]

# 复制：
print(L[:])
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...99]
```

同样的，元组和字符串也可以进行切片操作：

```python
L = (0, 1, 2, 3, 5)
print(L[:3])
# (0, 1, 2)

S = 'ABCDEFG'
print(S[:3])
# ABC
print(S[::2])
# ACEG
```

### 5.2 迭代

> 如果给定一个 `list` 或 `tuple`，我们可以通过 `for` 循环来遍历这个 `list` 或 `tuple`，这种遍历我们称为迭代（Iteration）。

在 Python 中，是通过`for ... in ...`来完成迭代的，其不止可以作用于`list`或`tuple`，还可以作用在其他可迭代对象上。

```python
# 对数组迭代
l = [1, 2, 3, 4, 5]
for i in l:
  print(i)
# 1 2 3 4 5

# 对字典迭代
d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
  print(key, d[key])
for key, val in d.items():
  print(key, val)
# a 1
# b 2
# c 3

# 对字符串迭代
s = 'abcdefg'
for i in s:
  print(i)
# a b c d e f g
```

那么如何判断一个对象是否可迭代呢？方法是通过`collections.abc`模块的`Iterable`类型判断：

```python
from collections.abc import Iterable

print(isinstance('abc', Iterable))
# True
print(isinstance([1, 2, 3], Iterable))
# True
print(isinstance((1, 2, 3), Iterable))
# True
print(isinstance({'a': 1, 'b': 2, 'c': 3}, Iterable))
# True
print(isinstance(123, Iterable))
# False
```

### 5.3 列表生成式

> 列表生成式即 List Comprehensions，是 Python 内置的非常简单却强大的可以用来创建 list 的生成式。

::: tip 引子
要生成`list[1, 2, 3, ..., 10]`可以使用`list(range(1, 11))`：

```python
print(list(range(1, 11)))
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

但是要生成`[1x1, 2x2, 3x3, ..., 10x10]`要怎么做呢？循环是一种方法：

```python
L= []
for x in range(1, 11):
  L.append(x * x)

print(L)
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

但是循环的方法太繁琐，这就用到了 Python 的列表生成式。

:::

1. 使用**列表生成式**实现引子中的功能：

```python
print([x * x for x in range(1, 11)])
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

写列表生成式时，把要生成的元素 `x * x` 放到前面，后面跟 for 循环，就可以把 `list` 创建出来。

2. 在 `for` 循环之后还可以加 `if` 判断，这样我们就可以添加筛选条件：

```python
# 筛选仅为偶数的平方：
print([x ** 2 for x in range(1, 11) if x % 2 == 0])
# [4, 16, 36, 64, 100]
```

3. 使用两层循环，实现全排列：

```python
print([m + n for m in 'ABC' for n in 'XYZ'])
# ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
```

4. 运用列表生成式，可以写出非常简洁的代码。例如，列出当前目录下的所有文件和目录名，可以通过一行代码实现：

```python
import os # 导入os模块
print([d for d in os.listdir('.')]) # os.listdir可以列出文件和目录
# 输出[文件列表]
```

5. 实现将 `list` 中的所有字符转换为小写：

```python
L = ['Hello', 'World', 'IBM', 'Apple']
print([s.lower() for s in L])
# ['hello', 'world', 'ibm', 'apple']
```

:::warning 列表生成式中的`if...else`
使用列表生成式输出 1~10 之间的偶数：

```python
print([x for x in range(1, 11) if x % 2 == 0])
# [2, 4, 6, 8, 10]
```

但是，我们不能在最后的 `if` 加上 `else` 语句：

```python
print([x for x in range(1, 11) if x % 2 == 0 else 0])
# File "<stdin>", line 1
#   print([x for x in range(1, 11) if x % 2 == 0 else 0])
# SyntaxError: invalid syntax
```

会抛出一个语法错误，这是因为在 `for` 之后的 `if` 是一个筛选条件，而不是 `if...else` 语句。

需要注意的是，在 `for` 语句之前的 `if` 为`if...else`语句，可以使用 `else` 语句：

```python
print([x if x % 2 == 0 else -x for x in range(1, 11)])
# [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
```

> 可见，在一个列表生成式中，`for` 前面的 `if ... else` 是表达式，而 `for` 后面的 `if` 是过滤条件，不能带 `else`。

:::

### 5.4 生成器

:::tip 引子
通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。

所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的 `list`，从而节省大量的空间。在 Python 中，这种一边循环一边计算的机制，称为**生成器：generator**。
:::

1. 想创建一个 `generator` 很简单，只要把列表生成式的 `[]` 改成 `()` 即可：

   ```python
   L = [x * x for x in range(4)]
   g = (x * x for x in range(4))

   print(L)
   # [0, 1, 4, 9]
   print(g)
   # <generator object <genexpr> at 0x000002B38FD1DD80>
   ```

   可以看到，`L` 是一个 `list`，而 `g` 是一个 `generator`。我们可以打印出 `list` 的每一个元素，但我们怎么打印出 `generator` 的每一个元素呢？

   可以通过 `next()` 函数获得 `generator` 的下一个返回值：

   ```python
   g = (x * x for x in range(4))

   print(next(g))
   # 0
   print(next(g))
   # 1
   print(next(g))
   # 4
   print(next(g))
   # 9
   print(next(g))
   # Traceback (most recent call last):
   #   File "<stdin>", line 7, in <module>
   # StopIteration
   ```

   > `generator` 保存的是算法，每次调用 `next(g)`，就计算出 `g` 的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出 `StopIteration` 的错误。

   当然，上面这种不断调用 `next(g)`实在是太不方便了，正确的方法是使用 `for` 循环，因为 `generator` 也是可迭代对象：

   ```python
   from collections.abc import Iterable

   g = (x * x for x in range(4))
   print(isinstance(g, Iterable))
   # True

   for n in g:
     print(n)
   # 0
   # 1
   # 4
   # 9
   ```

   所以，我们创建了一个 `generator` 后，基本上永远不会调用 `next()`，而是通过 `for` 循环来迭代它，并且不需要关心 `StopIteration` 的错误。

2. 使用 `yield` 关键字

   ::: tip 引子
   `generator` 非常强大。如果推算的算法比较复杂，用类似列表生成式的 `for` 循环无法实现的时候，还可以用函数来实现。

   比如，著名的斐波拉契数列（Fibonacci），除第一个和第二个数外，任意一个数都可由前两个数相加得到：`1, 1, 2, 3, 5, 8, 13, 21, 34, ...`，斐波拉契数列用列表生成式写不出来，但是，用函数把它打印出来却很容易：

   ```python
   def fib(max):
     n, a, b = 0, 0, 1
     while n < max:
       print(b)
       # t = (b, a + b) # t是一个tuple
       # a = t[0]
       # b = t[1]
       a, b = b, a + b
       n = n + 1
     print('done')

   fib(10)
   # 1 1 2 3 5 8 13 21 34 55 done
   ```

   这里可以看出， `fib` 函数定义了斐波拉契数列的推算规则，可以从第一个元素开始，推算出后续任意位的元素，而要把 `fib` 函数变成 `generator` 函数只需要将 `print(b)` 修改为 `yield b`就可以了：

   ```python
   def fib(max):
     n, a, b = 0, 0, 1
     while n < max:
       yield b
       a, b = b, a + b
       n = n + 1
     return 'done'

   f = fib(6)
   print(f)
   # <generator object fib at 0x00000225A14792A0>
   ```

   > 由此可见，如果一个函数定义中包含 `yield` 关键字，那么这个函数就不再是一个普通函数，而是一个 `generator` 函数，调用一个 `generator` 函数将返回一个 `generator`。

   :::

   > 引子中，最难理解的就是 generator 函数和普通函数的执行流程。普通函数是顺序执行，遇到 `return` 语句或者最后一行函数语句就返回。而变成 generator 的函数，在每次调用 `next()` 的时候执行，遇到 `yield` 语句返回，再次执行时从上次返回的 `yield` 语句后继续执行。示例：

   ```python
   def odd():
     print('step 1')
     yield 1
     print('step 2')
     yield(3)
     print('step 3')
     yield(5)

   o = odd()
   print(next(o))
   # step 1
   # 1
   print(next(o))
   # step 2
   # 2
   print(next(o))
   # step 3
   # 3
   print(next(o))
   # Traceback (most recent call last):
   #   File "<stdin>", line 13, in <module>
   # StopIteration
   ```

   可以看到，`odd` 不是普通函数，而是 `generator` 函数，在执行过程中，遇到 `yield` 就中断，下次又继续执行。执行 3 次 `yield` 后，已经没有 `yield` 可以执行了，所以，第 4 次调用 `next(o)`就报错。

   ::: warning 特别注意

   > 调用 generator 函数会创建一个 generator 对象，多次调用 generator 函数会创建多个相互独立的 generator。

   ```python
   def odd():
     print('step 1')
     yield 1
     print('step 2')
     yield(3)
     print('step 3')
     yield(5)

   print(next(o))
   # step 1
   # 1
   print(next(o))
   # step 1
   # 1
   print(next(o))
   # step 1
   # 1
   ```

   上例中，每次结果都返回`1`，原因在于 `odd()`会创建一个新的 `generator` 对象，上述代码实际上创建了 3 个完全独立的 `generator`，对 3 个 `generator` 分别调用 `next()` 当然每个都会返回第一个值。正确的写法是创建一个 generator 对象，然后不断对这一个 generator 对象调用 `next()`。

   :::

> generator 是非常强大的工具，在 Python 中，可以简单地把列表生成式改成 generator，也可以通过函数实现复杂逻辑的 generator。

### 5.5 迭代器

:::tip 引子
我们已经知道，可以直接作用于 `for` 循环的数据类型有以下几种：

1. 一类是集合数据类型，如 `list`、`tuple`、`dict`、`set`、`str`等；
2. 一类是`generator`，包括生成器和带 `yield`的 generator function。

这些可以直接作用于`for`循环的对象统称为可迭代对象：`Iterable`。可使用`isinstance()`判断一个对象是否是`Interable`对象。

```python
from collections.abc import Iterable

print(isinstance([], Iterable))
# True
print(isinstance((), Iterable))
# True
print(isinstance({}, Iterable))
# True
print(isinstance('abc', Iterable))
# True
print(isinstance((x for x in range(10)), Iterable))
# True
print(isinstance(100, Iterable))
# False
```

而生成器不但可以作用于 `for` 循环，还可以被 `next()`函数不断调用并返回下一个值，直到最后抛出 `StopIteration` 错误表示无法继续返回下一个值了。

可以被 `next()`函数调用并不断返回下一个值的对象称为迭代器：`Iterator`。

:::

可以被 `isinstance()`判断一个对象是否是`Iterator`对象：

```python
from collections.abc import Iterator

print(isinstance((x for x in range(10)), Iterator))
# True
print(isinstance([], Iterator))
# False
print(isinstance((), Iterator))
# False
print(isinstance({}, Iterator))
# False
print(isinstance('abc', Iterator))
# False
print(isinstance(100, Iterator))
# False
```

:::warning 为什么 `list`、`dict`、`str` 等数据类型不是 Iterator？
这是因为 Python 的 `Iterator` 对象表示的是一个数据流，`Iterator` 对象可以被 `next()`函数调用并不断返回下一个数据，直到没有数据时抛出 `StopIteration` 错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过 `next()`函数实现按需计算下一个数据，所以 `Iterator` 的计算是惰性的，只有在需要返回下一个数据时它才会计算。

`Iterator` 甚至可以表示一个无限大的数据流，例如全体自然数。而使用 `list` 是永远不可能存储全体自然数的。
:::

> - 凡是可作用于 `for` 循环的对象都是 `Iterable` 类型；
> - 凡是可作用于 `next()`函数的对象都是 `Iterator` 类型，它们表示一个惰性计算的序列；
> - 集合数据类型如 `list`、`dict`、`str` 等是 `Iterable` 但不是 `Iterator`，不过可以通过 `iter()`函数获得一个 `Iterator` 对象。

## 06. 函数式编程

> 函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。
>
> 函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数！

### 6.1 高阶函数

:::details 引子

1. **变量可以指向函数**

   以 Python 内置的求绝对值的函数 `abs()`为例，调用该函数用以下代码：

   ```python
   print(abs(-10))
   # 10
   print(abs)
   # <built-in function abs>
   ```

   将函数赋值给变量：

   ```python
   a = abs(-10)
   print(a)
   # 10
   b = abs
   print(b)
   # <built-in function abs>
   ```

   由此可见，函数本身也是可以赋值给变量的，即：**变量可以指向函数**。那如果变量指向了函数，是否可以通过该变量来调用函数？

   ```python
   f = abs
   print(f(-10))
   # 10
   ```

   > 由此可见，变量可以指向函数本身，直接调用函数和调用指向该函数的变量完全相同。

2. **函数名也是变量**

   **函数名实际上就是指向函数的变量**，对于 `abs()`函数，完全可以把`abs`看做变量，它指向一个可以计算绝对值的函数！

   那如果把`abs`指向其他对象，会发生什么情况？

   ```python
   abs = 10
   print(abs(-10))
   # Traceback (most recent call last):
   #   File "<stdin>", line 2, in <module>
   # TypeError: 'int' object is not callable
   ```

   把 `abs` 指向 `10` 后，就无法通过 `abs(-10)`调用该函数了！因为 `abs` 这个变量已经不指向求绝对值函数而是指向一个整数 `10`！

3. **传入函数**

   > 既然变量可以指向函数，函数的参数可以接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为**高阶函数**。

   一个简单的高阶函数：

   ```
   def add(x, y, f):
     return f(x) + f(y)

   print(add(5, -6, abs))
   # 11
   ```

小结：把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。

:::

#### 6.1.1 map/reduce

1. map

   `map()`函数接收两个参数，一个是函数，一个是`Iterable`，`map`将传入的函数一次作用到系列的每个元素，并把结果作为新的`Iterator`返回。

   ```python
   def f(x):
     return x ** 2

   r = map(f, [1, 2, 3, 4, 5])
   print(list(r))
   # [1, 4, 9, 16, 25]
   ```

   `map()`传入的第一个参数是 `f`，即函数对象本身。由于结果 `r` 是一个 `Iterator`，`Iterator` 是惰性序列，因此通过 `list()`函数让它把整个序列都计算出来并返回一个 `list`。

2. reduce

   `reduce()`函数接收两个参数，`reduce`把结果继续和序列的下一个元素做累计计算，其效果为：

   ```python
   reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
   ```

   一个求序列之和的示例：

   ```python
   from functools import reduce

   def sum (x, y):
     return x + y

   print(reduce(sum, [1, 3, 5, 7, 9]))
   # 25
   ```

   求序列之和可以直接使用`sum()`函数，没必要使用`reduce()`函数。但是如果想要把序列`[1, 3, 5, 7, 9]`变换成整数`13579`，`reduce`就会派上用场：

   ```python
   from functools import reduce

   def sum_list(x, y):
     return x * 10 + y

   print(reduce(sum_list, [1, 3, 5, 7, 9]))
   # 13579
   ```

3. map & reduce

   可以将`reduce()`函数配合`map()`函数，写出把`str`转换为`int`的函数：

   ```python
   from functools import reduce
   def fn(x, y):
     return x * 10 + y
   def char2num(s):
     digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
     return digits[s]

   print(reduce(fn, map(char2num, '13579')))
   # 13579
   ```

   进一步封装：

   ```python
   from functools import reduce
   DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
   def str2int(s):
     def fn(x, y):
       return x * 10 + y
     def char2num(s):
       return DIGITS[s]
     return reduce(fn, map(char2num, s))

   print(str2int('13579'))
   # 13579
   ```

#### 6.1.2 filter

> 在 Python 中，`filter()`函数用于过滤序列。

和 `map()`类似，`filter()`也接收一个函数和一个序列。和 `map()`不同的是，`filter()`把传入的函数依次作用于每个元素，然后根据返回值是 `True` 还是 `False` 决定**保留**还是**丢弃**该元素。

将一个序列中的偶数剔除：

```python
def is_odd(n):
  return n % 2 == 1

print(list(filter(is_odd, [1, 2, 3, 4, 5, 6, 7])))
# [1, 3, 5, 7]
```

将一个序列中的空字符串剔除：

```python
def is_empty(s):
  return s and s.strip()

print(list(filter(is_empty, ['A', '', 'B', None, 'C', '  '])))
# ['A', 'B', 'C']
```

使用`filter()`函数写出一个计算`素数`的方法：

```python
def odd_iter():
  n = 1
  while True:
    n = n + 2
    yield n

def _not_divisible(n):
  return lambda x: x % n > 0

def primes():
  yield 2

  it = odd_iter()
  while True:
    n = next(it)
    yield n
    it = filter(_not_divisible(n), it)

for n in primes():
  if n < 1000:
    print(n)
  else:
    break
# 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```

> `filter()`的作用是从一个序列中筛出符合条件的元素。由于 `filter()`使用了惰性计算，所以只有在取 `filter()`结果的时候，才会真正筛选并每次返回下一个筛出的元素。

#### 6.1.3 sorted

排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢？直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。

> Python 中内置的`sorted()`函数可以直接对`list`进行排序：

```python
print(sorted([36, 5, -12, 9, -21]))
# [-21, -12, 5, 9, 36]
```

此外，`sorted()`函数也是一个高阶函数，它还可以接收一个 `key` 函数来实现自定义的排序，例如按绝对值大小排序：

```python
print(sorted([36, 5, -12, 9, -21], key = abs))
[5, 9, -12, -21, 36]
```

使用`sorted()`函数对字符串进行排序：

```python
print(sorted(['bob', 'about', 'Zoo', 'Credit']))
# ['Credit', 'Zoo', 'about', 'bob']
```

默认情况下，对字符串排序，是按照 `ASCII` 的大小比较的，由于`'Z'` < `'a'`，结果，大写字母 `Z` 会排在小写字母 `a` 的前面。通过传入`key`函数，实现忽略大小写的排序：

```python
print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower))
# ['about', 'bob', 'Credit', 'Zoo']
```

通过传入第三个参数`reverse = True`实现反向排序：

```python
print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse = True))
# ['Zoo', 'Credit', 'bob', 'about']
```

### 6.2 返回函数

### 6.3 匿名函数

### 6.4 装饰器

### 6.5 偏函数
