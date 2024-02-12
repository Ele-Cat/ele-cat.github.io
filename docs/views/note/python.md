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

### 3.3 列表与元组

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

### 3.4 字典与集合

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

> 在Python函数中，还可以定义可变参数。顾名思义，可变参数就是传入的参数个数是可变的，可以是1个、2个到任意个，还可以是0个。

4. 关键字参数

5. 命名关键字参数

6. 参数组合

### 4.4 递归函数
