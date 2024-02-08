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

   - 集合的元素是可以排序的，如下所示：
