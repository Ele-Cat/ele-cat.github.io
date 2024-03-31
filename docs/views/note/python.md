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

1. 函数作为返回值

   > 高阶函数不仅可以接受函数作为参数，还可以把函数作为结果值返回。

   通常情况下，求和函数这样编写：

   ```python
   def calc_sum(*args):
     sum = 0
     for n in args:
       sum = sum + n
     return sum

   print(calc_sum(1, 2, 3, 4, 5))
   # 15
   ```

   但是，如果不需要立刻求和，而是在后续代码中再计算，可以不反悔计算结果，而是返回求和函数：

   ```python
   def lazy_sum(*args):
     def sum():
       ax = 0
       for n in args:
         ax = ax + n
       return ax
     return sum

   f = lazy_sum(1, 2, 3, 4, 5)
   print(f)
   # <function lazy_sum.<locals>.sum at 0x0000025019869080>
   print(f())
   # 15
   ```

   可以看到在调用`lazy_sum()`函数时，并没有立刻计算，而是返回了`sum()`函数，在调用`f`时，才真正计算求和的结果。

   > 在这个例子中，我们在函数 `lazy_sum` 中又定义了函数 `sum`，并且，内部函数 `sum` 可以引用外部函数 `lazy_sum` 的参数和局部变量，当 `lazy_sum` 返回函数 `sum` 时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。

   :::warning 注意
   当我们在调用`lazy_sum()`时，每次都会返回一个新的函数，即使传入相同的参数：

   ```python
   def lazy_sum(*args):
     def sum():
       ax = 0
       for n in args:
         ax = ax + n
       return ax
     return sum

   f1 = lazy_sum(1, 2, 3, 4, 5)
   f2 = lazy_sum(1, 2, 3, 4, 5)
   print(f1 == f2)
   # False
   ```

   `f1()`和`f2()`的调用结果互不影响。

   :::

2. 闭包

   注意到返回的函数在其定义内部引用了局部变量 `args`，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。

   ```python
   def count():
     fs = []
     for i in range(1, 4):
       def f():
         return i*i
       fs.append(f)
     return fs

   f1, f2, f3 = count()

   print(f1())
   # 9
   print(f2())
   # 9
   print(f3())
   # 9
   ```

   上例中，每次循环，都会创建一个新的函数，然后把这三个函数都返回了，并且都返回`9`，原因在于返回的函数都引用了变量`i`，但它却没有立刻执行；等到 3 个函数都返回是，引用的变量`i`已经变成了`3`，因此最终结果为`9`。

   :::danger 特别注意
   返回闭包时，返回函数不要引用任何循环变量，或者后续会发生变化的变量。
   :::

   ```python
   def count():
     def f(j):
       def g():
         return j*j
       return g
     fs = []
     for i in range(1, 4):
       fs.append(f(i)) # f(i)立刻被执行，因此i的当前值被传入f()
     return fs

   f1, f2, f3 = count()

   print(f1())
   # 1
   print(f2())
   # 4
   print(f3())
   # 9
   ```

3. nonlocal

   使用闭包，就是内层函数引用了外层函数的局部变量，如果只是读外层变量的值，我们会发现返回的闭包函数调用一切正常：

   ```python
   def inc():
     x = 0
     def fn():
       # 仅读取x的值:
       return x + 1
     return fn

   f = inc()
   print(f()) # 1
   print(f()) # 1
   ```

   但是，如果对外层变量赋值，由于 Python 解释器会把 x 当作函数 fn()的局部变量，它会报错：

   ```python
   def inc():
     x = 0
     def fn():
       # nonlocal x
       x = x + 1
       return x
     return fn

   f = inc()
   print(f())
   print(f())
   Traceback (most recent call last):
     File "<stdin>", line 10, in <module>
     File "<stdin>", line 5, in fn
   UnboundLocalError: cannot access local variable 'x' where it is not associated with a value
   ```

   原因是 `x` 作为局部变量并没有初始化，直接计算 `x+1` 是不行的。但我们其实是想引用 `inc()`函数内部的 `x`，所以需要在 `fn()`函数内部加一个 `nonlocal x` 的声明。加上这个声明后，解释器把 `fn()`的 `x` 看作外层函数的局部变量，它已经被初始化了，可以正确计算 `x+1`。

   ```python
   def inc():
     x = 0
     def fn():
       nonlocal x
       x = x + 1
       return x
     return fn

   f = inc()
   print(f()) # 1
   print(f()) # 2
   ```

   > 使用闭包时，对外层变量赋值前，需要先使用 `nonlocal` 声明该变量不是当前函数的局部变量。

### 6.3 匿名函数

有时候，我们需要一个临时的函数，它只会用一次，定义一个函数然后立刻丢弃，这种需求可以通过匿名函数来满足：

```python
def calc(numbers):
  return list(map(lambda x: x * x, numbers))

print(calc([1, 3, 5, 7, 9]))
# [1, 9, 25, 49, 81]
```

由此可见，`lambda x: x * x`实际上就是：

```python
def f(x):
  return x * x
```

> 关键字`lambda`表示**匿名函数**，冒号前的`x`表示函数参数。需要注意匿名函数只能有一个表达式，且不用写`return`，返回值就是表达式的结果。

此外，匿名函数也是一个函数，可以将它赋值给一个变量，再利用变量来调用。

```python
f = lambda x: x * x

print(f)
<function <lambda> at 0x0000017BA9C28A40>
print(f(2))
# 4
```

同样的，也可以将`lambda`作为函数的返回值：

```python
def build(x, y):
  return lambda: x * x + y * y

print(build(3, 4)())
# 25
```

### 6.4 装饰器

_函数是一个对象且可以赋值给变量，通过变量也可以调用该函数。_

```python
from datetime import datetime
def now():
  return datetime.now()

f = now
print(f())
# 2024-02-25 21:19:53.044793
```

函数对象有一个`__name__`属性（**注意前后各是两个下划线**），可以拿到函数名字：

```python
from datetime import datetime
def now():
  return datetime.now()

f = now
print(now.__name)
# now
print(f.__name)
# now
```

现在，假设我们要增强 `now()`函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 `now()`函数的定义，这种在代码运行期间动态增加功能的方式，称之为“**装饰器**”（Decorator）。

本质上，decorator 就是一个返回函数的高阶函数。所以，我们要定义一个能打印日志的 decorator，可以定义如下：

```python
def log(func):
  def wrapper(*args, **kw):
    print('call %s():' % func.__name__)
    return func(*args, **kw)
  return wrapper

@log
def now():
  print('2025-3-25')

now()
# call now():
# 2025-3-25
```

把`@log` 放到 `now()`函数的定义处，相当于执行了语句：

```python
now = log(now)
```

::: details 解析

```python
def log(func):
  def wrapper(*args, **kw):
    print('call %s():' % func.__name__)
    return func(*args, **kw)
  return wrapper

def now():
  print('2025-3-25')

now = log(now)

now()
# call now():
# 2025-3-25
```

由于 `log()`是一个 decorator，返回一个函数，所以，原来的 `now()`函数仍然存在，只是现在同名的 `now` 变量指向了新的函数，于是调用 `now()`将执行新函数，即在 `log()`函数中返回的 `wrapper()`函数。

`wrapper()`函数的参数定义是`(*args, **kw)`，因此，`wrapper()`函数可以接受任意参数的调用。在 `wrapper()`函数内，首先打印日志，再紧接着调用原始函数。
:::

如果 decorator 本身需要传入参数，那就需要编写一个返回 decorator 的高阶函数，写出来会更复杂。比如，要自定义 log 的文本：

```python
def log(text):
  def decorator(func):
    def wrapper(*args, **kw):
      print('%s %s():' % (text, func.__name__))
      return func(*args, **kw)
    return wrapper
  return decorator

@log('execute')
def now():
  print('2025-3-25')

now()
# execute now():
# 2025-3-25
```

和两层嵌套的 decorator 相比，3 层嵌套的效果是这样的：

```python
now = log('execute')(now)
```

::: details 解析

```python
def log(text):
  def decorator(func):
    def wrapper(*args, **kw):
      print('%s %s():' % (text, func.__name__))
      return func(*args, **kw)
    return wrapper
  return decorator

def now():
  print('2025-3-25')

now = log('execute')(now)
now()
# execute now():
# 2025-3-25
```

我们来剖析上面的语句，首先执行 `log('execute')`，返回的是 `decorator` 函数，再调用返回的函数，参数是 `now` 函数，返回值最终是 `wrapper` 函数。

:::

函数也是对象，它有`__name__`等属性，但经过 decorator 装饰之后的函数，它们的`__name__`已经从原来的`'now'`变成了`'wrapper'`：

```python
def log(text):
  def decorator(func):
    def wrapper(*args, **kw):
      print('%s %s():' % (text, func.__name__))
      return func(*args, **kw)
    return wrapper
  return decorator

@log('execute')
def now():
  print('2015-3-25')

now()

print(now.__name__)
# execute now():
# 2025-3-25
# wrapper
```

因为返回的那个 `wrapper()`函数名字就是`'wrapper'`，所以，需要把原始函数的`__name__`等属性复制到 `wrapper()`函数中，否则，有些依赖函数签名的代码执行就会出错。

不需要编写 `wrapper.__name__ = func.__name__` 这样的代码，Python 内置的`functools.wraps`就是干这个事的，所以，一个完整的 decorator 的写法如下：

```python
import functools

def log(func):
  @functools.wraps(func)
  def wrapper(*args, **kw):
    print('call %s():' % func.__name__)
    return func(*args, **kw)
  return wrapper

@log
def now():
  print('2025-3-25')

now()
# call now():
# 2024-02-26 19:48:36.016319
print(now.__name__)
# wrapper
```

或带参的 decorator：

```python
import functools

def log(text):
  def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
      print('%s %s():' % (text, func.__name__))
      return func(*args, **kw)
    return wrapper
  return decorator

@log('execute')
def now():
  print('2025-3-25')

now()
# execute now():
# 2025-3-25
print(now.__name__)
# now
```

:::details 习题 1：请设计一个 decorator，它可作用于任何函数上，并打印该函数的执行时间。

```python
import time, functools

def metric(fn):
  @functools.wraps(fn)
  def wrapper(*args, **kw):
    start_time = time.time()
    func = fn(*args, **kw)
    end_time = time.time()
    duration = (end_time - start_time) * 1000
    print('%s executed in %.2f ms' % (fn.__name__, duration))
    return func
  return wrapper

# 测试
@metric
def fast(x, y):
  time.sleep(0.0012)
  return x + y;

@metric
def slow(x, y, z):
  time.sleep(0.1234)
  return x * y * z;

f = fast(11, 22)
s = slow(11, 22, 33)
if f != 33:
  print('测试失败!')
elif s != 7986:
  print('测试失败!')
else:
  print('测试成功!')
```

:::

:::details 习题 2：请编写一个 decorator，能在函数调用的前后打印出`'begin call'`和`'end call'`的日志。

```python
import time, functools

def metric(fn):
  @functools.wraps(fn)
  def wrapper(*args, **kw):
    print(fn.__name__, 'begin call')
    func = fn(*args, **kw)
    print(fn.__name__, 'end call')
    return func
  return wrapper

# 测试
@metric
def fast(x, y):
  time.sleep(0.0012)
  return x + y;

@metric
def slow(x, y, z):
  time.sleep(0.1234)
  return x * y * z;

f = fast(11, 22)
s = slow(11, 22, 33)
if f != 33:
  print('测试失败!')
elif s != 7986:
  print('测试失败!')
else:
  print('测试成功!')
```

:::

:::details 习题 3：装饰器兼容。

能否写出一个@log 的 decorator，使它既支持：

```python
@log
def f():
  pass
```

又支持：

```python
@log('execute')
def f():
  pass
```

解答：

```python
import functools

def log(arg = None):
  def metric(fn):
    @functools.wraps(fn)
    def decorator(*args, **kw):
      if not callable(arg):
        print(arg)
      print('begin call %s' % fn.__name__)
      k = fn(*args, **kw)
      print('end call %s' % fn.__name__)
      return k
    return decorator

  if callable(arg):
      return metric(arg)
  else:
      return metric

# 测试
@log
def f():
  print('2025-3-25')

@log('execute')
def f():
  print('2025-3-25')

f()
```

:::

### 6.5 偏函数

Python 的 `functools` 模块提供了很多有用的功能，其中一个就是**偏函数（Partial function）**。通过设定参数的默认值，可以降低函数的复杂度，偏函数也可以做到这一点。

:::tip 引子

`int()`函数可以把字符串转换为整数，当仅传入字符串时，`int()`函数默认按十进制转换：

```python
print(int('12345'))
# 12345
```

`int()`函数还提供额外的 `base` 参数，默认值为 `10`。如果传入 `base` 参数，就可以做 N 进制的转换：

```python
print(int('12345', base = 8))
# 5349
print(int('12345', 16))
# 74565
```

假设要转换大量的二进制字符串，每次都传入 `int(x, base=2)`非常麻烦，于是，我们想到，可以定义一个 `int2()`的函数，默认把 `base=2` 传进去：

```python
def int2(x, base = 2):
  return int(x, base)

print(int2('1000000'))
# 64
print(int2('1010101'))
# 85
```

使用 `partial` 也可以做到这一点：

```python
import functools
int2 = functools.partial(int, base = 2)

print(int2('1000000'))
# 64
print(int2('1010101'))
# 85
```

:::

简单总结 `functools.partial` 的作用就是，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。

注意到上面的新的 `int2` 函数，仅仅是把 base 参数重新设定默认值为 `2`，但也可以在函数调用时传入其他值：

```python
import functools
int2 = functools.partial(int, base = 2)

print(int2('1000000', base = 10))
# 1000000
```

最后，创建偏函数时，实际上可以接收函数对象、`*args`和`**kw`这 3 个参数，当传入：

```python
import functools

int2 = functools.partial(int, base=2)
# 实际上固定了 `int()`函数的关键字参数 `base`，也就是：
print(int2('10010'))
# 18
# 相当于：
kw = { 'base': 2 }
print(int('10010', **kw))
# 18
```

当传入：

```python
import functools

max2 = functools.partial(max, 10)
# 实际上会把10作为*args的一部分自动加到左边，也就是：
print(max2(5, 6, 7))
# 10
# 相当于：
args = (10, 5, 6, 7)
print(max(*args))
# 10
```

## 07. 模块

### 7.1 模块介绍

在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 `.py` 文件就称之为一个**模块（Module）**。在编写模块时，函数、变量名不要与 Python 的[内置函数](https://docs.python.org/zh-cn/3/library/functions.html)冲突。

不同的人编写的模块名相同怎么办？为了避免模块名冲突，Python 又引入了按目录来组织模块的方法，称为**包（Package）**。

举个例子，一个 `abc.py` 的文件就是一个名字叫 `abc` 的模块，一个 `xyz.py` 的文件就是一个名字叫 `xyz` 的模块。

现在，假设我们的 `abc` 和 `xyz` 这两个模块名字与其他模块冲突了，于是我们可以通过包来组织模块，避免冲突。方法是选择一个顶层包名，比如 `mycompany`，按照如下目录存放：

```
mycompany
├── __init__.py
├── abc.py
└── xyz.py
```

引入了包以后，只要顶层的包名不与别人冲突，那所有模块都不会与别人冲突。现在，`abc.py` 模块的名字就变成了 `mycompany.abc`，类似的，`xyz.py` 的模块名变成了 `mycompany.xyz`。

:::warning 注意
每一个包目录下面都会有一个 `__init__.py` 的文件，这个文件是必须存在的，否则，Python 就把这个目录当成普通目录，而不是一个包。 `__init__.py` 可以是空文件，也可以有 Python 代码，因为 `__init__.py` 本身就是一个模块，而它的模块名就是 `mycompany`。
:::

:::danger 关于命名
自己创建模块时要注意命名，不能和 Python 自带的模块名称冲突。例如，系统自带了 `sys` 模块，自己的模块就不可命名为 `sys.py`，否则将无法导入系统自带的 `sys` 模块。
:::

> 小结：
> 模块是一组 Python 代码的集合，可以使用其他模块，也可以被其他模块使用。创建自己的模块时，要注意：
>
> - 模块名要遵循 Python 变量命名规范，不要使用中文、特殊字符；
> - 模块名不要和系统模块名冲突，最好先查看系统是否已存在该模块，检查方法是在 Python 交互环境执行 `import abc`，若成功则说明系统存在此模块。

### 7.2 使用模块

Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。

我们以内建的 `sys` 模块为例，编写一个 `hello` 的模块：

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' a test module '

__author__ = 'Cola'

import sys

def test():
  args = sys.argv
  if len(args)==1:
    print('Hello, world!')
  elif len(args)==2:
    print('Hello, %s!' % args[1])
  else:
    print('Too many arguments!')

if __name__=='__main__':
  test()
# Hello, world!
```

:::tip 解析

- 第 1 行和第 2 行是标准注释，第 1 行注释可以让这个 `hello.py` 文件直接在 Unix/Linux/Mac 上运行，第 2 行注释表示 `.py` 文件本身使用标准 UTF-8 编码；
- 第 4 行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；
- 第 6 行使用`__author__`变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；

_以上就是 Python 模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。_

使用 `sys` 模块的第一步，就是导入该模块：

```python
import sys
```

导入 `sys` 模块后，我们就有了变量 `sys` 指向该模块，利用 `sys` 这个变量，就可以访问 `sys` 模块的所有功能。

`sys` 模块有一个 `argv` 变量，用 `list` 存储了命令行的所有参数。`argv` 至少有一个元素，因为第一个参数永远是该 `.py` 文件的名称，例如：

- 运行 `python hello.py` 获得的 `sys.argv` 就是`['hello.py']`；
- 运行 `python hello.py Cola` 获得的 `sys.argv` 就是`['hello.py', 'Cola']`。

最后，注意到这两行代码：

```python
if __name__=='__main__':
  test()
```

当我们在命令行运行 `hello` 模块文件时，Python 解释器把一个特殊变量`__name__`置为`__main__`，而如果在其他地方导入该 `hello` 模块时，`if` 判断将失败，因此，这种 `if` 测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。下面进行测试：

```sh
$ python hello.py
# Hello, world!
$ python hello.py Cola
# Hello, Cola!
```

在与`hello.py`同级目录下新建一个`test.py`文件，并录入：

```python
import hello
```

运行后无任何效果，因为没有执行`test()`函数。补全：

```python
import hello
hello.test()
# Hello, world!
```

:::

**作用域**

在一个模块中，我们可能会定义很多函数和变量，但有的函数和变量我们希望给别人使用，有的函数和变量我们希望仅仅在模块内部使用。在 Python 中，是通过 `_` 前缀来实现的。

- 正常的函数和变量名是公开的（public），可以被直接引用，比如：`abc`，`x123`，`PI` 等；
- 类似`__xxx__`这样的变量是特殊变量，可以被直接引用，但是有特殊用途，比如上面的`__author__`，`__name__`就是特殊变量，`hello` 模块定义的文档注释也可以用特殊变量`__doc__`访问，我们自己的变量一般不要用这种变量名；
- 类似`_xxx` 和`__xxx` 这样的函数或变量就是非公开的（private），不应该被直接引用，比如`_abc`，`__abc` 等；

之所以我们说，private 函数和变量“不应该”被直接引用，而不是“不能”被直接引用，是因为 Python 并没有一种方法可以完全限制访问 private 函数或变量，但是，从编程习惯上不应该引用 private 函数或变量。

```python
def _private_1(name):
  return 'Hello, %s' % name

def _private_2(name):
  return 'Hi, %s' % name

def greeting(name):
  if len(name) > 3:
    return _private_1(name)
  else:
    return _private_2(name)
```

使用：

```python
import greet

print(greet.greeting("Li"))
# Hi, Li
print(greet.greeting("Cola"))
# Hello, Cola
```

我们在模块里公开 `greeting()`函数，而把内部逻辑用 private 函数隐藏起来了，这样，调用 `greeting()`函数不用关心内部的 private 函数细节，这也是一种非常有用的代码封装和抽象的方法，即：

外部不需要引用的函数全部定义成 private，只有外部需要引用的函数才定义为 public。

### 7.3 第三方模块

在命令行中输入：

```sh
pip
# 可查看pip全部命令
```

**使用[清华源](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)安装会更快**

```sh
pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple
```

```python
import requests
print(requests.__version__)
# 2.31.0
```

当我们试图加载一个模块时，Python 会在指定的路径下搜索对应的.py 文件，如果找不到，就会报错。默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中：

```python
import sys

print(sys.path)
# ['<stdin>\\test.py', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\python312.zip', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\DLLs', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\Lib', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\site-packages']
```

有两种方法可以修改搜索目录：

1. 直接修改`sys.path`：

   ```python
   import sys

   sys.path.append('/Users/michael/my_py_scripts')
   # ['<stdin>\\test.py', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\python312.zip', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\DLLs', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\Lib', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312', 'C:<stdin>\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\site-packages','/Users/michael/my_py_scripts']
   ```

   这种方法是在运行时修改，运行结束后失效。

2. 修改环境变量`PYTHONPATH`。

## 08. 面向对象编程

> **面向对象编程**——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。
>
> - **面向过程**的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。
> - **面向对象**的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。

### 8.1 类和实例

面向对象最重要的概念就是类（Class）和实例（Instance），必须牢记类是抽象的模板，比如 Student 类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。

以 Student 类为例，在 Python 中，定义类是通过 `class` 关键字：

```python
class Student(object):
  pass
```

`class` 后面紧接着是类名，即 `Student`，类名通常是大写开头的单词，紧接着是`(object)`，表示该类是从哪个类**继承**下来的，继承的概念我们后面再讲，通常，如果没有合适的继承类，就使用 `object` 类，这是所有类最终都会继承的类。

定义好了 `Student` 类，就可以根据 `Student` 类创建出 `Student` 的实例，创建实例是通过类名+()实现的：

```python
class Student(object):
  pass

stu1 = Student()
print(stu1)
# <__main__.Student object at 0x0000022535EF9DF0>
stu2 = Student()
print(stu2)
# <__main__.Student object at 0x000001BFA1FD9EB0>
print(Student)
# <class '__main__.Student'>
```

可以看到，变量 `bart` 指向的就是一个 `Student` 的实例，后面的 `0x0000022535EF9DF0` 是内存地址，每个 `object` 的地址都不一样，而 `Student` 本身则是一个类。

可以自由地给一个实例变量绑定属性，比如，给实例 `stu1` 绑定一个 `name` 属性：

```python
class Student(object):
  pass

stu1 = Student()
stu1.name = 'Cola'
print(stu1.name)
# Cola
```

由于类可以起到模板的作用，因此，可以在创建实例的时候，把一些我们认为必须绑定的属性强制填写进去。通过定义一个特殊的 `__init__` 方法，在创建实例的时候，就把 `name`，`score` 等属性绑上去：

```python
class Student(object):
  def __init__(self, name, score):
    self.name = name
    self.score = score

stu1 = Student('Cola', 98)
print(stu1.name)
# Cola
print(stu1.score)
# 98
```

:::tip 注意

- 注意到 `__init__` 方法的第一个参数永远是 `self`，表示创建的实例本身，因此，在 `__init__` 方法内部，就可以把各种属性绑定到 `self`，因为 `self` 就指向创建的实例本身。
- 有了 `__init__` 方法，在创建实例的时候，就不能传入空的参数了，必须传入与 `__init__` 方法匹配的参数，但 `self` 不需要传，Python 解释器自己会把实例变量传进去。如果在对类实例化时不传与 `__init__` 方法匹配的参数，就会报错：

```python
class Student(object):
  def __init__(self, name, score):
    self.name = name
    self.score = score

stu1 = Student()
# Traceback (most recent call last):
#   File "<stdin>", line 6, in <module>
# TypeError: Student.__init__() missing 2 required positional arguments: 'name' and 'score'
```

:::

> 和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量 `self`，并且，调用时，不用传递该参数。除此之外，类的方法和普通函数没有什么区别，所以，你仍然可以用**默认参数**、**可变参数**、**关键字参数**和**命名关键字参数**。

### 8.2 访问限制

在 Class 内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，这样，就隐藏了内部的复杂逻辑。

在上一节中，可以通过外部代码，自由的修改实例的任意属性：

```python
class Student(object):
  def __init__(self, name, score):
    self.name = name
    self.score = score

stu1 = Student('Cola', 98)
print(stu1.name)
# Cola
stu1.name = 'Cat'
print(stu1.name)
# Cat
```

如果要让内部属性不被外部访问，可以把属性的名称前加上**两个下划线** `__` ，在 Python 中，实例的变量名如果以 `__` 开头，就变成了一个**私有变量（private）**，只有内部可以访问，外部不能访问，所以，我们把 `Student` 类改一改：

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

stu1 = Student('Cola', 98)
print(stu1.__name)
# Traceback (most recent call last):
#   File "<stdin>", line 7, in <module>
# AttributeError: 'Student' object has no attribute '__name'
```

这样就保证了外部代码无法随意获取、修改实例对象的内部状态。那如何在外部获取对象内部状态呢？可以给 Student 类增加获取内部状态的方法：

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def get_name(self):
    return self.__name

  def get_score(self):
    return self.__score

stu1 = Student('Cola', 98)
print(stu1.get_name())
# Cola
print(stu1.get_score())
# 98
```

如果想在外部修改`name`、`score`怎么办？一样的，可以给 Student 类增加`set_score`方法：

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def get_name(self):
    return self.__name

  def get_score(self):
    return self.__score

  def set_score(self, score):
    self.__score = score

stu1 = Student('Cola', 98)
print(stu1.get_score())
# 98
stu1.set_score(88)
print(stu1.get_score())
# 88
```

原先那种直接通过 stu1.score = 88 也可以修改啊，为什么要定义一个方法大费周折？因为在方法中，可以对参数做检查，避免传入无效的参数：

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def get_name(self):
    return self.__name

  def get_score(self):
    return self.__score

  def set_score(self, score):
    if 0 <= score <= 100:
      self.__score = score
    else:
      raise ValueError('bad score')

stu1 = Student('Cola', 98)
print(stu1.get_score())
# 98
stu1.set_score(120)
# Traceback (most recent call last):
#   File "<stdin>", line 20, in <module>
#     stu1.set_score(120)
#   File "<stdin>", line 16, in set_score
#     raise ValueError('bad score')
# ValueError: bad score
```

:::tip 注意

在 Python 中，变量名类似`__xxx__`的，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量，特殊变量是可以直接访问的，不是 private 变量，所以，不能用`__name__`、`__score__`这样的变量名。

有些时候，你会看到以一个下划线开头的实例变量名，比如`_name`，这样的实例变量外部是可以访问的，但是，按照约定俗成的规定，当你看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问”。

_以上两种变量命名方式自行测试_。

:::

双下划线开头的实例变量是不是一定不能从外部访问呢？其实也不是。不能直接访问`__name`是因为 Python 解释器对外把`__name`变量改成了`_Student__name`，所以，仍然可以通过`_Student__name`来访问`__name`变量：

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def get_name(self):
    return self.__name

stu1 = Student('Cola', 98)
print(stu1._Student__name)
# Cola
stu1._Student__name = 'Cat'
print(stu1._Student__name)
# Cat
```

但是强烈建议你不要这么干，因为不同版本的 Python 解释器可能会把`__name`改成不同的变量名。总的来说就是，Python 本身没有任何机制阻止你干坏事，一切全靠自觉。

:::danger 一种错误写法

```python
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def get_name(self):
    return self.__name

  def get_score(self):
    return self.__score

  def set_score(self, score):
    if 0 <= score <= 100:
      self.__score = score
    else:
      raise ValueError('bad score')

stu1 = Student('Cola', 98)
print(stu1.get_score())
# 98
stu1.__score = 88
print(stu1.__score)
# 88
print(stu1.get_score())
# 98
print(stu1._Student__score)
# 98
```

可以看到，通过`stu1.__score = 88`目测成功的修改了`score`的值，但实际上这个`__score`与 Student 类内部的`__score`变量不是同一个变量！内部的`__score`变量已经被 Python 解释器自动改成了`_Student__score`，而外部代码给 stu1 新增了一个`__score`变量。

:::

### 8.3 继承和多态

#### 8.3.1 继承

> 在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类（Subclass），而被继承的 class 称为基类、父类或超类（Base class、Super class）。

比如，我们已经编写了一个名为 `Animal` 的 `class`，有一个 `run()`方法可以直接打印：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

animal = Animal()
animal.run()
# Animal is running...
```

这时，我们新建`Dog`、`Cat`类，并直接从 `Animal`类继承：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Dog(Animal):
  pass

class Cat(Animal):
  pass

animal = Animal()
animal.run()
# Animal is running...
dog = Dog()
dog.run()
# Animal is running...
cat = Cat()
cat.run()
# Animal is running...
```

对于 `Dog` 来说，`Animal` 就是它的父类，对于 `Animal` 来说，`Dog` 就是它的子类。`Cat` 和 `Dog` 类似。

**继承最大的好处是子类获得了父类的全部功能**。由于 `Animial` 实现了 `run()`方法，因此，`Dog` 和 `Cat` 作为它的子类，什么事也没干，就自动拥有了 `run()`方法。

#### 8.3.2 多态

对上面代码进行改进：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Dog(Animal):
  def run(self):
    print('Dog is running...')

class Cat(Animal):
  def run(self):
    print('Cat is running...')

animal = Animal()
animal.run()
# Animal is running...
dog = Dog()
dog.run()
# Dog is running...
cat = Cat()
cat.run()
# Cat is running...
```

> 当子类和父类都存在相同的 `run()`方法时，我们说，子类的 `run()`覆盖了父类的 `run()`，在代码运行的时候，总是会调用子类的 `run()`。这样，我们就获得了继承的另一个好处：**多态**。

要理解什么是多态，我们首先要对数据类型再作一点说明。当我们定义一个 class 的时候，我们实际上就定义了一种数据类型。我们定义的数据类型和 Python 自带的数据类型，比如 str、list、dict 没什么两样：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Dog(Animal):
  pass

a = list()
b = Animal()
c = Dog()
print(isinstance(a, list))
# True
print(isinstance(b, Animal))
# True
print(isinstance(c, Dog))
# True
print(isinstance(c, Animal))
# True
print(isinstance(c, object))
# True
print(isinstance(b, Dog))
# False
```

:::tip 理解多态

因为 `Dog` 是从 `Animal` 继承下来的，当我们创建了一个 `Dog` 的实例 `c` 时，我们认为 `c` 的数据类型是 `Dog` 没错，但 `c` 同时也是 `Animal` 也没错，`Dog` 本来就是 `Animal` 的一种！

在继承关系中，如果一个实例的数据类型是某个子类，那它的数据类型也可以被看做是父类。但是，反过来就不行。`Dog` 可以看成 `Animal`，但 `Animal` 不可以看成 `Dog`。

:::

再编写一个后函数，这个函数只接受一个`Animal`类型的变量：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Cat(Animal):
  def run(self):
    print('Cat is running...')

class Dog(Animal):
  def run(self):
    print('Dog is running...')

def run_twice(animal):
  animal.run()
  animal.run()

run_twice(Animal())
# Animal is running...
# Animal is running...
run_twice(Cat())
# Cat is running...
# Cat is running...
run_twice(Dog())
# Dog is running...
# Dog is running...
```

乍一看没啥意思，如果我们再定义一个 `Tortoise` 类型，也从 `Animal` 派生：

```python
class Tortoise(Animal):
  def run(self):
    print('Tortoise is running slowly...')

run_twice(Tortoise())
# Tortoise is running slowly...
# Tortoise is running slowly...
```

会发现，新增一个 `Animal` 的子类，不必对 `run_twice()` 做任何修改，实际上，任何依赖 `Animal` 作为参数的函数或者方法都可以不加修改地正常运行，原因就在于**多态**。

:::tip 多态的好处

多态的好处就是，当我们需要传入 `Dog`、`Cat`、`Tortoise`……时，我们只需要接收 `Animal` 类型就可以了，因为 `Dog`、`Cat`、`Tortoise`……都是 `Animal` 类型，然后，按照 `Animal` 类型进行操作即可。由于 `Animal` 类型有 `run()`方法，因此，传入的任意类型，只要是 `Animal` 类或者子类，就会自动调用实际类型的 `run()`方法。

对于一个变量，我们只需要知道它是 `Animal` 类型，无需确切地知道它的子类型，就可以放心地调用 `run()`方法，而具体调用的 `run()`方法是作用在 `Animal`、`Dog`、`Cat` 还是 `Tortoise` 对象上，由运行时该对象的确切类型决定，这就是多态真正的威力：调用方只管调用，不管细节，而当我们新增一种 `Animal` 的子类时，只要确保 `run()`方法编写正确，不用管原来的代码是如何调用的。这就是著名的“开闭”原则：

- 对扩展开放：允许新增 `Animal` 子类；
- 对修改封闭：不需要修改依赖 `Animal` 类型的 `run_twice()`等函数。

:::

继承还可以一级一级地继承下来，就好比从爷爷到爸爸、再到儿子这样的关系。而任何类，最终都可以追溯到根类 object，这些继承关系看上去就像一颗倒着的树。比如如下的继承树：

<pre>
                ┌───────────────┐
                │    object     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Animal    │           │    Plant    │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Cat   │  │  Tree   │  │ Flower  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</pre>

:::warning 静态语言 VS 动态语言

对于静态语言（例如 Java）来说，如果需要传入 `Animal` 类型，则传入的对象必须是 `Animal` 类型或者它的子类，否则，将无法调用 `run()`方法。

对于 Python 这样的动态语言来说，则不一定需要传入 `Animal` 类型。我们只需要保证传入的对象有一个 `run()`方法就可以了：

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Dog(Animal):
  def run(self):
    print('Dog is running...')

class Timer(object):
  def run(self):
    print('Time start...')

def run_twice(animal):
  animal.run()
  animal.run()

run_twice(Animal())
# Animal is running...
# Animal is running...
run_twice(Dog())
# Dog is running...
# Dog is running...
run_twice(Timer())
# Time start...
# Time start...
```

可以看到，`Timer`类并没有继承`Animal`，而是自有`run()`方法，`run_twice()`函数仍然可以正常运行。

这就是动态语言的“鸭子类型”，它并不要求严格的继承体系，一个对象只要“看起来像鸭子，走起路来像鸭子”，那它就可以被看做是鸭子。

:::

:::details 继承与多态示例

```python
class Animal(object): # 编写Animal类
  def run(self):
    print("Animal is running...")

class Dog(Animal): # Dog类继承Amimal类，没有run方法
  pass

class Cat(Animal): # Cat类继承Animal类，有自己的run方法
  def run(self):
    print('Cat is running...')

class Car(object): # Car类不继承，有自己的run方法
  def run(self):
    print('Car is running fast...')

class Stone(object): # Stone类不继承，也没有run方法
  pass

def run_twice(animal):
  animal.run()
  animal.run()

run_twice(Animal())
# Animal is running...
# Animal is running...
run_twice(Dog())
# Animal is running...
# Animal is running...
run_twice(Cat())
# Cat is running...
# Cat is running...
run_twice(Car())
# Car is running...
# Car is running...
run_twice(Stone())
# Traceback (most recent call last):
#   File "<stdin>", line 27, in <module>
#   File "<stdin>", line 20, in run_twice
# AttributeError: 'Stone' object has no attribute 'run'
```

:::

### 8.4 获取对象信息

当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？

1. type()

   基本类型都可以用`type()`判断：

   ```python
   print(type(123))
   # <class 'int'>
   print(type('str'))
   # <class 'str'>
   print(type(None))
   # <class 'NoneType'>
   ```

   如果一个变量指向函数或类，也可以用`type()`判断：

   ```python
   print(type(abs))
   # <class 'builtin_function_or_method'>
   class Animal(object):
     pass
   a = Animal()
   print(type(a))
   # <class '__main__.Animal'>
   ```

   `type()`函数返回的是 Class 类型。如果我们要在`if`语句中判断，就需要比较两个变量的 type 类型是否相同：

   ```python
   print(type(123) == type(456))
   # True
   print(type(123) == int)
   # True
   print(type('str') == type('123'))
   # True
   print(type('str') == str)
   # True
   print(type('abc') == type(123))
   # False
   ```

   判断基本数据类型可以直接写 `int`，`str` 等，但如果要判断一个对象是否是函数怎么办？可以使用 `types` 模块中定义的常量：

   ```python
   import types

   def fn():
     pass

   print(type(fn) == types.FunctionType)
   # True
   print(type(abs) == types.BuiltinFunctionType)
   # True
   print(type(lambda x: x) == types.LambdaType)
   # True
   print(type((x for x in range(10))) == types.GeneratorType)
   # True
   ```

2. isinstance()

   对于 class 的继承关系来说，使用`type()`就很不方便。我们要判断 class 的类型，可以使用`isinstance()`函数。

   ```python
   class Animal(object):
     pass

   class Dog(Animal):
     pass

   class Husky(Dog):
     pass

   a = Animal()
   d = Dog()
   h = Husky()

   print(isinstance(h, Husky) and isinstance(h, Dog) and isinstance(h, Animal) and isinstance(h, object))
   # True
   print(isinstance(d, Dog) and isinstance(h, Animal))
   # True
   print(isinstance(d, Husky))
   # False
   ```

   能用`type()`判断的基本类型也可以用`isinstance()`判断：

   ```python
   print(isinstance('a', str))
   # True
   print(isinstance(123, int))
   # True
   print(isinstance(b'a', bytes))
   # True
   ```

   并且还可以判断一个变量是否是某些类型中的一种，比如下面的代码就可以判断是否是 `list` 或者 `tuple`：

   ```python
   print(isinstance([1, 2, 3], list))
   # True
   print(isinstance([1, 2, 3], tuple))
   # False
   print(isinstance([1, 2, 3], (list, tuple)))
   # True
   print(isinstance((1, 2, 3), (list, tuple)))
   # True
   ```

   > 总是优先使用`isinstance()`判断类型，可以将指定类型及其子类“一网打尽”。

3. dir()

   如果要获得一个对象的**所有属性和方法**，可以使用`dir()`函数，它返回一个包含字符串的`list`：

   ```python
   print(dir('ABC'))
   # ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
   print(dir(123))
   # ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'as_integer_ratio', 'bit_count', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'is_integer', 'numerator', 'real', 'to_bytes']
   ```

   类似`__xxx__`的属性和方法在 Python 中都是有特殊用途的，比如`__len__`方法返回长度。在 Python 中，如果你调用`len()`函数试图获取一个对象的长度，实际上，在`len()`函数内部，它自动去调用该对象的`__len__()`方法，所以，下面的代码是等价的：

   ```python
   print(len('ABC'))
   # 3
   print('ABC'.__len__())
   # 3
   ```

   我们自己写的类，如果也想用`len(myObj)`的话，就自己写一个`__len__()`方法：

   ```python
   class MyDog(object):
     def __len__(self):
       return 100

   dog = MyDog()
   print(len(dog))
   # 100
   ```

   仅仅把属性和方法列出来是不够的，配合`getattr()`、`setattr()`以及`hasattr()`，我们可以直接操作一个对象的状态：

   ```python
   class MyObject(object):
     def __init__(self):
       self.x = 9

     def power(self):
       return self.x * self.x

   obj = MyObject()

   print(hasattr(obj, 'x'))
   # True
   print(obj.x)
   # 9
   print(setattr(obj, 'y', 16))
   # None
   print(hasattr(obj, 'y'))
   # True
   print(getattr(obj, 'y'))
   # 16
   print(obj.y)
   # 16

   print(getattr(obj, 'z', 99))
   ```

   如果试图获取不存在的属性，会抛出 AttributeError 的错误：

   ```python
   class MyObject(object):
     def __init__(self):
       self.x = 9

     def power(self):
       return self.x * self.x

   obj = MyObject()

   print(hasattr(obj, 'z'))
   # False
   print(getattr(obj, 'z')) # 获取属性'z'
   # Traceback (most recent call last):
   #   File "<stdin>", line 11, in <module>
   # AttributeError: 'MyObject' object has no attribute 'z'
   ```

   可以传入一个 default 参数，如果属性不存在，就返回默认值：

   ```python
   class MyObject(object):
     def __init__(self):
       self.x = 9

     def power(self):
       return self.x * self.x

   obj = MyObject()

   print(hasattr(obj, 'z'))
   # False
   print(getattr(obj, 'z', 99))  # 获取属性'z'，如果不存在，返回默认值99
   # 99
   ```

   也可以获取对象的方法：

   ```python
   class MyObject(object):
     def __init__(self):
       self.x = 9

     def power(self):
       return self.x * self.x

   obj = MyObject()

   print(hasattr(obj, 'power')) # 是否有'power'属性
   # True
   print(getattr(obj, 'power')) # 获取'power'属性
   # <bound method MyObject.power of <__main__.MyObject object at 0x00000262BB66A0F0>>
   fn = getattr(obj, 'power') # 获取属性'power'并赋值到变量fn
   print(fn) # fn指向obj.power
   # <bound method MyObject.power of <__main__.MyObject object at 0x00000262BB66A0F0>>
   print(fn()) # 调用fn()与调用obj.power()是一样的
   # 81
   ```

### 8.5 实例属性和类属性

由于 Python 是动态语言，根据类创建的实例可以任意绑定属性。给实例绑定属性的方法是通过实例变量，或者通过`self`变量：

```python
class Student(object):
  def __init__(self, name):
    self.name = name

s = Student('Cola')
s.score = 98
print(s.name)
# Cola
print(s.score)
# 98
```

但是，如果`Student`类本身需要绑定一个属性呢？可以直接在 class 中定义属性，这种属性是类属性，归`Student`类所有：

```python
class Student(object):
  school = '一中'

s = Student() # 创建实例s
print(s.school) # 打印school属性，因为实例并没有school属性，所以会继续查找class的school属性
# 一中
print(Student.school) # 打印类的school属性
# 一中
s.school = '二中' # 给实例绑定school属性
print(s.school) # 由于实例属性优先级比类属性高，因此，它会屏蔽掉类的school属性
# 二中
print(Student.school) # 但是类属性并未消失，用Student.school仍然可以访问
# 一中
del s.school # 如果删除实例的school属性
print(s.school) # 再次调用s.school，由于实例的school属性没有找到，类的school属性就显示出来了
# 一中
print(Student.school) # 类属性仍然可以访问
# 一中
```

:::details 为了统计学生人数，可以给 Student 类增加一个类属性，每创建一个实例，该属性自动增加：

```python
class Student(object):
  count = 0

  def __init__(self, name):
    self.name = name
    Student.count += 1

# 测试:
if Student.count != 0:
  print('1测试失败!')
else:
  bart = Student('Bart')
  if Student.count != 1:
    print('2测试失败!')
  else:
    lisa = Student('Bart')
    if Student.count != 2:
      print('3测试失败!')
    else:
      print('Students:', Student.count)
      print('测试通过!')

```

:::

:::tip 小结

- 实例属性属于各个实例所有，互不干扰；
- 类属性属于类所有，所有实例共享一个属性；
- 不要对实例属性和类属性使用相同的名字，否则将产生难以发现的错误。

:::

## 09. 面向对象高级编程

### 9.1 使用`__slots__`

正常情况下，在定义一个类并创建了类的实例后，我们可以给该实例绑定任意属性和方法，这就是动态语言的灵活性。

```python
from types import MethodType

class Person():
  pass

def set_age(self, age):
  self.age = age

p = Person()
p.name = 'Cola'
print(p.name)
# Cola
p.set_age = MethodType(set_age, p)
p.set_age(20)
print(p.age)
# 20
```

但是，给一个实例绑定的属性和方法，对另一个实例是不起作用的：

```python
from types import MethodType

class Person():
  pass

def set_age(self, age):
  self.age = age

p = Person()
p.name = 'Cola'
p.set_age = MethodType(set_age, p)
p.set_age(20)

s = Person()
print(s.name)
# Traceback (most recent call last):
#   File "<stdin>", line 17, in <module>
# AttributeError: 'Person' object has no attribute 'name'
s.set_age(18)
# Traceback (most recent call last):
#   File "<stdin>", line 18, in <module>
# AttributeError: 'Person' object has no attribute 'set_age'
```

为了让所有类的实例化对象都可以使用属性或方法，可以**直接绑定在类上**：

```python
from types import MethodType

class Person():
  pass

def set_age(self, age):
  self.age = age

Person.canSpeak = True
Person.set_age = set_age
p = Person()
p.set_age(20)
print('p今年' + str(p.age) + '岁，' + '是否会说话：' + str(p.canSpeak))
# p今年20岁，是否会说话：True

s = Person()
s.set_age(0.2)
print('s今年' + str(s.age) + '岁，' + '是否会说话：' + str(not s.canSpeak))
# s今年0.2岁，是否会说话：False
```

通常情况下，上面的 `set_age` 方法可以直接定义在 class 中，但是动态绑定允许我们在程序运行的过程中动态给 class 加上功能，这在静态语言中很难实现。同时，想要限制在 class 上动态添加的属性和方法，就需要用到`__slots__`。

```python
class Student(object):
  __slots__ = ('name', 'age') # 用tuple定义允许绑定的属性名称
  pass

s = Student()
s.name = 'Cola'
print(s.name)
# Cola
s.age = 18
print(s.age)
# 18
s.score = 98
print(s.score)
# Traceback (most recent call last):
#   File "<stdin>", line 10, in <module>
# AttributeError: 'Student' object has no attribute 'score'
```

由于`'score'`没有被放到`__slots__`中，所以不能绑定 `score` 属性，试图绑定 `score` 将得到 `AttributeError` 的错误。

:::tip 注意

`__slots__`定义的属性仅对当前类实例起作用，对继承的子类是不起作用的：

```python
class Student(object):
  __slots__ = ('name', 'age')
  pass

class GraduateStudent(Student):
  pass

g = GraduateStudent()
g.score = 58
print(g.score)
# 58
```

除非在子类中也定义`__slots__`，这样，子类实例允许定义的属性就是自身的`__slots__`加上父类的`__slots__`：

```python
class Student(object):
  __slots__ = ('name', 'age')
  pass

class GraduateStudent(Student):
  __slots__ = ('score')
  pass

g = GraduateStudent()
g.name = 'Cola'
print(g.name)
# Cola
g.score = 58
print(g.score)
# 58
g.grade = 'A'
# Traceback (most recent call last):
#   File "<stdin>", line 14, in <module>
# AttributeError: 'GraduateStudent' object has no attribute 'grade'
```

:::

> 总结：
>
> - 当子类本身没有`__slots__`时，不管父类有没有`__slots__`，子类的实例化对象都可以随意添加属性和方法；
> - 当子类有`__slots__`定义的属性时，如果其父类没有`__slots__`，则该子类的实例化对象可以随意添加属性和方法；如果其父类有`__slots__`，则该子类与其父类`__slots__`并集的属性都可用作该子类的动态属性。

:::details 四种情况汇总

1. 父类没有`__slots__`，子类没有`__slots__`

   ```python
   class Parent(object):
     pass

   class Child(Parent):
     pass

   p = Parent()
   c = Child()
   p.age = 38 # 随意添加
   print(p.age)
   # 38
   c.gender = 'Female' # 随意添加
   print(c.gender)
   # Female
   ```

2. 父类有`__slots__`限制，子类没有`__slots__`

   ```python
   class Parent(object):
     __slots__ = ('age')

   class Child(Parent):
     pass

   p = Parent()
   c = Child()
   p.age = 38 # 只能添加__slots__的属性
   print(p.age)
   # 38
   # p.gender = 'Male' # 添加age以外的属性报错
   # print(p.gender)
   c.gender = 'Female' # 子类无限制
   print(c.gender)
   c.name = 'Cola' # 子类无限制
   print(c.name)
   ```

3. 父类没有`__slots__`，子类有`__slots__`

   ```python
   class Parent(object):
     pass

   class Child(Parent):
     __slots__ = ('gender')

   p = Parent()
   c = Child()
   p.age = 38 # 父类不做限制，随意添加属性
   print(p.age)
   # 38
   p.gender = 'Male' # 父类不做限制，随意添加属性
   print(p.gender)
   # Male
   c.gender = 'Female' # 子级做了限制，可添加__slots__属性
   print(c.gender)
   # Female
   c.name = 'Cola' # 子级做了限制，也可随意添加属性
   print(c.name)
   # Cola
   ```

4. 父类有`__slots__`，子类也有`__slots__`

   ```python
   class Parent(object):
     __slots__ = ('age')
     pass

   class Child(Parent):
     __slots__ = ('gender')

   p = Parent()
   c = Child()
   p.age = 38 # 父类做了限制，只可添加age属性
   print(p.age)
   # p.gender = 'Male' # 添加其他属性报错
   # print(p.gender)
   c.gender = 'Female' # 子类的限制属性可用
   print(c.gender)
   c.age = 12 # 父类的限制属性可用【并集】
   print(c.age)
   # c.name = 'Cola' # 非并集内的属性不可用，报错
   # print(c.name)
   ```

:::

### 9.2 使用@property

在绑定属性时，如果我们直接把属性暴露出去，虽然写起来很简单，但是，没办法检查参数，导致可以把成绩随便改：

```python
class Student(object):
  pass

s = Student()
s.score = 998
print(s.score)
# 998
```

这样显然不合理，外部可以随意设置成绩，为了给`score`一个范围，可以通过方法来执行：

```python
class Student(object):
  def get_score(self):
    return self._score
  def set_score(self, score):
    if not isinstance(score, int):
      raise TypeError('score must be an integer')
    if score < 0 or score > 100:
      raise ValueError('score must between 0 ~ 100!')
    else:
      self._score = score
  score = property(get_score, set_score)

s = Student()
s.set_score(98)
print(s.get_score())
# 98
s.set_score(998)
# Traceback (most recent call last):
#   File "<stdin>", line 16, in <module>
#     s.set_score(998)
#   File "<stdin>", line 8, in set_score
#     raise ValueError('score must between 0 ~ 100!')
# ValueError: score must between 0 ~ 100!
```

但是，上面的调用方法又略显复杂，没有直接用属性这么直接简单。有没有**既能检查参数，又可以用类似属性**这样简单的方式来访问类的变量呢？

还记得装饰器（decorator）可以给函数动态加上功能吗？对于类的方法，装饰器一样起作用。Python 内置的@property 装饰器就是负责把一个方法变成属性调用的：

```python
class Student(object):
  @property
  def score(self):
    return self._score
  @score.setter
  def score(self, score):
    if not isinstance(score, int):
      raise TypeError('score must be an integer')
    if score < 0 or score > 100:
      raise ValueError('score must between 0 ~ 100!')
    else:
      self._score = score

s = Student()
s.score = 98
print(s.score)
# 98
s.score = 998
# Traceback (most recent call last):
#   File "<stdin>", line 17, in <module>
#   File "<stdin>", line 10, in score
#     raise ValueError('score must between 0 ~ 100!')
# ValueError: score must between 0 ~ 100!
```

> 解析：`@property` 的实现比较复杂，我们先考察如何使用。把一个 `getter` 方法变成属性，只需要加上`@property` 就可以了，此时，`@property` 本身又创建了另一个装饰器`@score.setter`，负责把一个 `setter` 方法变成属性赋值，于是，我们就拥有一个可控的属性操作。

还可以定义**只读属性**：只定义 getter 方法，不定义 setter 方法：

```python
import datetime
class Student(object):
  @property
  def birth(self):
    return self._birth
  @birth.setter
  def birth(self, value):
    self._birth = value
  @property
  def age(self):
    return datetime.datetime.now().year - self._birth

s = Student()
s.birth = 2000
print(s.birth)
# 2000
print(s.age)
# 24
```

上面的 `birth` 是**可读写属性**，而 `age` 就是一个**只读属性**，因为 `age` 可以根据 `birth` 和当前年份计算出来。

:::danger 特别注意

属性的方法名**不要和**实例变量重名。例如，以下的代码是错误的：

```python
import datetime
class Student(object):
  @property
  def birth(self):
    return self.birth # RecursionError: maximum recursion depth exceeded
  @birth.setter
  def birth(self, value):
    self.birth = value
  @property
  def age(self):
    return datetime.datetime.now().year - self.birth

s = Student()
s.birth = 2000
print(s.birth)
print(s.age)
```

这是因为调用 `s.birth` 时，首先转换为方法调用，在执行 `return self.birth` 时，又视为访问 `self` 的属性，于是又转换为方法调用，造成无限递归，最终导致栈溢出报错 `RecursionError`。

:::

### 9.3 多重继承

继承是面向对象编程的一个重要方式，通过继承，子类可以扩展父类的功能。

:::tip 引子

假设有一个`Animal`类，要实现 4 种动物

- Dog - 狗
- Bat - 蝙蝠
- Parrot - 鹦鹉
- Ostrich - 鸵鸟

如果按照哺乳动物和鸟类归类，我们可以设计出这样的类的层次：

<pre style='ling-height:12px'>
                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Mammal    │           │    Bird     │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Bat   │  │ Parrot  │  │ Ostrich │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</pre>

但是如果按照“能跑”和“能飞”来归类，我们就应该设计出这样的类的层次：

<pre>
                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │  Runnable   │           │   Flyable   │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │ Ostrich │  │ Parrot  │  │   Bat   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</pre>

如果要把上面的两种分类都包含进来，我们就得设计更多的层次：

- 哺乳类：能跑的哺乳类，能飞的哺乳类；
- 鸟类：能跑的鸟类，能飞的鸟类。

<pre>
                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Mammal    │           │    Bird     │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  MRun   │  │  MFly   │  │  BRun   │  │  BFly   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
     │            │            │            │
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Bat   │  │ Ostrich │  │ Parrot  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</pre>

如果要再增加“宠物类”和“非宠物类”，这么搞下去，类的数量会呈指数增长，很明显这样设计是不行的。正确的做法是采用**多重继承**。

:::

```python
class Animal(object):
  pass

class Mammal(Animal):
  pass

class Bird(Animal):
  pass

class Runnable(object):
  def run(self):
    print('Running...')

class Flyable(object):
  def fly(self):
    print('Flying...')

class Dog(Mammal, Runnable):
  pass

class Bat(Mammal, Flyable):
  pass

class Parrot(Bird, Flyable):
  pass

class Ostrich(Bird, Runnable):
  pass
```

通过多重继承，一个子类就可以同时获得多个父类的所有功能。

**Mixin**

在设计类的继承关系时，通常，主线都是单一继承下来的，例如，`Ostrich` 继承自 `Bird`。但是，如果需要“混入”额外的功能，通过多重继承就可以实现，比如，让 `Ostrich` 除了继承自 `Bird` 外，再同时继承 `Runnable`。这种设计通常称之为 MixIn。

同时，为了更好地看出继承关系，我们把 `Runnable` 和 `Flyable` 改为 `RunnableMixIn` 和 `FlyableMixIn`。类似的，你还可以定义出肉食动物 `CarnivorousMixIn` 和植食动物 `HerbivoresMixIn`，让某个动物同时拥有好几个 MixIn：

```python
class Dog(Mammal, RunnableMixIn, CarnivorousMixIn):
  pass
```

> MixIn 的目的就是给一个类增加多个功能，这样，在设计类的时候，我们优先考虑通过多重继承来组合多个 MixIn 的功能，而不是设计多层次的复杂的继承关系。

:::details 多 Mixin 继承

```python
class Animal(object):
  def run(self):
    print('Animal is running...')

class Dog(Animal):
  def run(self):
    print('Dog is running...')

class Cat(Animal):
  def run(self):
    print('Cat is running...')

class Dc(Dog, Cat): # 继承列表又先后顺序
  def run1(self):
    self.run() # 继承自Dog的run方法
  def run2(self):
    super().run() # super()指向了优先级最高的Dog的run方法
  def run3(self):
    Cat.run(self) # 通过类名直接调用，已脱离继承的范畴
  def run4(self):
    super(Dog, self).run() # 表示在继承链中查找Dog下一个类的run()方法,也就是Cat
    super(Cat, self).run() # 同上，Cat后是Animal

dc = Dc()
dc.run()
# Dog is running...
dc.run1()
# Dog is running...
dc.run2()
# Dog is running...
dc.run3()
# Cat is running...
dc.run4()
# Cat is running...
# Animal is running...
```

得出继承查找顺序：**Dc → Dog → Cat → Animal**

:::

### 9.4 定制类

看到类似`__slots__`这种形如`__xxx__`的变量或者函数名就要注意，这些在 Python 中是有特殊用途的。`__slots__`我们已经知道怎么用了，`__len__()`方法我们也知道是为了能让 class 作用于 `len()`函数。

除此之外，Python 的 class 中还有许多这样有特殊用途的函数，可以帮助我们定制类。

1. `__str__`

   ```python
   class Student(object):
     def __init__(self, name):
       self.name = name

   print(Student('Cola'))
   # <__main__.Student object at 0x0000020473AF9DF0>
   ```

   打印出一堆`<__main__.Student object at 0x109afb190>`，不好看。只需要定义好`__str__()`方法，就可以返回一个好看的字符串了：

   ```python
   class Student(object):
     def __init__(self, name):
       self.name = name

     def __str__(self):
       return 'Student object (name: %s)' % self.name

   print(Student('Cola'))
   # Student object (name: Cola)
   ```

   这样打印出来的实例，不但好看，而且容易看出实例内部重要的数据。

2. `__iter__`

   如果一个类想被用于`for ... in`循环，类似`list`或`tuple`那样，就必须实现一个`__iter__()`方法，该方法返回一个迭代对象，然后，Python 的 for 循环就会不断调用该迭代对象的`__next__()`方法拿到循环的下一个值，直到遇到`StopIteration`错误时退出循环。我们以斐波那契数列为例，写一个 Fib 类，可以作用于 for 循环：

   ```python
   class Fib(object):
     def __init__(self):
       self.a, self.b = 0, 1  # 初始化两个计数器a，b
     def __iter__(self):
       return self # 实例本身就是迭代对象，故返回自己
     def __next__(self):
       self.a, self.b = self.b, self.a + self.b # 计算下一个值
       if self.a > 1000000: # 退出循环的条件
         raise StopIteration()
       return self.a # 返回下一个值

   for n in Fib():
     print(n)
   # 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040
   ```

3. `__getitem__`

   Fib 实例虽然能作用于 for 循环，看起来和 list 有点像，但是，把它当成 list 来使用还是不行，比如，取第 5 个元素：

   ```python
   print(Fib()[5])
   # Traceback (most recent call last):
   #   File "<stdin>", line 12, in <module>
   # TypeError: 'Fib' object is not subscriptable
   ```

   要表现得像 list 那样按照下标取出元素，需要实现`__getitem__()`方法：

   ```python
   class Fib(object):
     def __init__(self):
       self.a, self.b = 0, 1
     def __iter__(self):
       return self
     def __next__(self):
       self.a, self.b = self.b, self.a + self.b
       if self.a > 1000000:
         raise StopIteration()
       return self.a
     def __getitem__(self, n):
       a, b = 1, 1
       for x in range(n):
         a, b = b, a + b
       return a

   f = Fib()
   print(f[0])
   # 1
   print(f[1])
   # 1
   print(f[2])
   # 2
   print(f[3])
   # 3
   print(f[10])
   # 89
   print(f[100])
   # 573147844013817084101
   ```

   但是 list 有一个切片 slice 方法：

   ```python
   print(list(range(100))[5:10])
   # [5, 6, 7, 8, 9]
   ```

   对于 Fib 类却报错，原因是`__getitem__()`传入的参数可能是 int，也可能是切片对象`slice`，所以，我们需要做一些判断：

   ```python
   class Fib(object):
     def __init__(self):
       self.a, self.b = 0, 1
     def __iter__(self):
       return self
     def __next__(self):
       self.a, self.b = self.b, self.a + self.b
       if self.a > 1000000:
         raise StopIteration()
       return self.a
     def __getitem__(self, n):
       if isinstance(n, int):
         a, b = 1, 1
         for x in range(n):
           a, b = b, a + b
         return a
       if isinstance(n, slice):
         start = n.start
         stop = n.stop
         if start is None:
           start = 0
         a, b = 1, 1
         L = []
         for x in range(stop):
           if x >= start:
             L.append(a)
           a, b = b, a + b
         return L
       raise TypeError('fib index must be int or slice')

   f = Fib()
   print(f[0:5])
   # [1, 1, 2, 3, 5]
   print(f[:10])
   # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
   ```

   但是没有对 step 参数作处理：

   ```python
   print(f[:10:2])
   # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
   ```

   也没有对负数作处理，所以，要正确实现一个`__getitem__()`还是有很多工作要做的。

4. `__getattr__`

   正常情况下，当我们调用类的方法或属性时，如果不存在，就会报错。比如定义 Student 类：

   ```python
   class Student(object):
     def __init__(self):
       self.name = 'Cola'

   s = Student()
   print(s.name)
   # Cola
   print(s.score)
   # Traceback (most recent call last):
   #   File "<stdin>", line 7, in <module>
   # AttributeError: 'Student' object has no attribute 'score'
   ```

   调用 `name` 属性，没问题，但是，调用不存在的 `score` 属性，就有问题了：错误信息很清楚地告诉我们，没有找到 `score` 这个 attribute。

   要避免这个错误，除了可以加上一个 `score` 属性外，Python 还有另一个机制，那就是写一个`__getattr__()`方法，动态返回一个属性。修改如下：

   ```python
   class Student(object):
     def __init__(self):
       self.name = 'Cola'
     def __getattr__(self, attr):
       if attr == 'score':
         return 98

   s = Student()
   print(s.name)
   # Cola
   print(s.score)
   # 98
   ```

   当调用不存在的属性时，比如 `score`，Python 解释器会试图调用`__getattr__(self, 'score')`来尝试获得属性，这样，我们就有机会返回 `score` 的值。返回函数也是可以的：

   ```python
   class Student(object):
     def __init__(self):
       self.name = 'Cola'
     def __getattr__(self, attr):
       if attr == 'age':
         return lambda: 28

   s = Student()
   print(s.age()) # 调用方式要变为函数调用
   # 28
   ```

   :::tip 注意

   1. 只有在没有找到属性的情况下，才调用`__getattr__`，已有的属性，比如 `name`，不会在`__getattr__`中查找。

      ```python
      class Student(object):
        def __init__(self):
          self.name = 'Cola'
        def __getattr__(self, attr):
          if attr == 'name':
            return 'Cat'
          if attr == 'age':
            return lambda: 28

      s = Student()
      print(s.name) # name已经在初始化时定义好了，所以不会在__getattr__中查找
      # Cola
      print(s.age())
      # 28
      ```

   2. 注意到任意调用如 `s.abc` 都会返回 `None`，这是因为我们定义的`__getattr__`默认返回就是 `None`：

      ```python
      class Student(object):
        def __getattr__(self, attr):
          if attr == 'score':
            return 98

      s = Student()
      print(s.abc) # 默认返回就是None
      # None
      ```

      要让 class 只响应特定的几个属性，我们就要按照约定，抛出 `AttributeError` 的错误：

      ```python
      class Student(object):
        def __getattr__(self, attr):
          if attr == 'score':
            return 98
          raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)

      s = Student()
      print(s.score)
      # 98
      print(s.abc)
      # Traceback (most recent call last):
      #   File "<stdin>", line 8, in <module>
      #   File "<stdin>", line 5, in __getattr__
      #     raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
      # AttributeError: 'Student' object has no attribute 'abc'
      ```

      :::

5. `__call__`

一个对象实例可以有自己的属性和方法，当我们调用实例方法时，我们用 `instance.method()`来调用。能不能直接在实例本身上调用呢？在 Python 中，答案是肯定的。任何类，只需要定义一个`__call__()`方法，就可以直接对实例进行调用。请看示例：

```python
class Student(object):
  def __init__(self):
    self.name = 'Cola'
  def __call__(self):
    print('My name is %s.' % self.name)

s = Student()
s() # self参数不要传入
# My name is Cola.
```

`__call__()`还可以定义参数。对实例进行直接调用就好比对一个函数进行调用一样，所以你完全可以把对象看成函数，把函数看成对象，因为这两者之间本来就没啥根本的区别。

如果你把对象看成函数，那么函数本身其实也可以在运行期动态创建出来，因为类的实例都是运行期创建出来的，这么一来，我们就模糊了对象和函数的界限。

那么，怎么判断一个变量是对象还是函数呢？其实，更多的时候，我们需要判断一个对象是否能被调用，能被调用的对象就是一个 Callable 对象，比如函数和我们上面定义的带有`__call__()`的类实例：

```python
class Student(object):
  def __init__(self):
    self.name = 'Cola'
  def __call__(self):
    print('My name is %s.' % self.name)

print(callable(Student()))
# True
print(callable(max))
# True
print(callable([1, 2, 3]))
# False
print(callable(None))
# False
print(callable('str'))
# False
```

> 通过`callable()`函数，我们就可以判断一个对象是否是“可调用”对象。

### 9.5 枚举类

当我们需要定义常量时，一个办法是用大写变量通过整数来定义，例如月份：

```python
JAN = 1
FEB = 2
MAR = 3
# ...
NOV = 11
DEC = 12
```

更好的方法是为这样的枚举类型定义一个 class 类型，然后，每个常量都是 class 的一个唯一实例。Python 提供了`Enum`类来实现这个功能：

```python
from enum import Enum

Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))

print(Month.Jan)
# Month.Jan
print(Month.Jan.value)
# 1

for name, member in Month.__members__.items():
  print(name, '=>', member, ',', member.value)
# Jan => Month.Jan , 1
# Feb => Month.Feb , 2
# Mar => Month.Mar , 3
# Apr => Month.Apr , 4
# May => Month.May , 5
# Jun => Month.Jun , 6
# Jul => Month.Jul , 7
# Aug => Month.Aug , 8
# Sep => Month.Sep , 9
# Oct => Month.Oct , 10
# Nov => Month.Nov , 11
# Dec => Month.Dec , 12
```

`value` 属性则是自动赋给成员的 `int` 常量，默认从 `1` 开始计数。如果需要更精确地控制枚举类型，可以从 `Enum` 派生出自定义类：

```python
from enum import Enum, unique

@unique # @unique装饰器可以帮助我们检查保证没有重复值。
class Weekend(Enum):
  Sun = 0
  Mon = 1
  Tue = 2
  Wed = 3
  Thu = 4
  Fri = 5
  Sat = 6

# 访问这些枚举类型可以的若干种方法：
day1 = Weekend.Mon
print(day1)
#Weekend.Mon
print(Weekend.Tue)
#Weekend.Tue
print(Weekend.Tue.value)
#2
print(day1 == Weekend.Mon)
#True
print(day1 == Weekend.Tue)
#False
print(Weekend(1))
#Weekend.Mon
print(day1 == Weekend(1))
#True
print(Weekend(7))
# Traceback (most recent call last):
#   File "<stdin>", line 21, in <module>
# ValueError: 7 is not a valid Weekend
for name, member in Weekend.__members__.items():
  print(name, '=>', member, ',', member.value)
# Sun => Weekend.Sun , 0
# Mon => Weekend.Mon , 1
# Tue => Weekend.Tue , 2
# Wed => Weekend.Wed , 3
# Thu => Weekend.Thu , 4
# Fri => Weekend.Fri , 5
# Sat => Weekend.Sat , 6
```

> 枚举既可以用成员名称引用枚举常量，又可以直接根据 value 的值获得枚举常量。

### 9.6 元类

:::tip 引子

动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。

比方说我们要定义一个 `Hello` 的 class，就写一个 `hello.py` 模块：

```python
# hello.py
class Hello(object):
  def hello(self, name = 'world'):
    print("Hello " + name)
```

当 Python 解释器载入 `hello` 模块时，就会依次执行该模块的所有语句，执行结果就是动态创建出一个 `Hello` 的 class 对象，测试如下：

```python
from hello import Hello
h = Hello()
h.hello()
# Hello world
print(type(Hello))
# <class 'type'>
print(type(h))
# <class 'hello.Hello'>
```

`type()`函数可以查看一个类型或变量的类型，`Hello` 是一个 class，它的类型就是 `type`，而 `h` 是一个实例，它的类型就是 class `Hello`。

我们说 class 的定义是运行时动态创建的，而创建 class 的方法就是使用 `type()`函数。

`type()`函数既可以返回一个对象的类型，又可以创建出新的类型，比如，我们可以通过 `type()`函数创建出 `Hello` 类，而无需通过 `class Hello(object)...`的定义：

```python
def fn(self, name = 'world'):
  print(f"Hello {name}!")

Hello = type('Hello', (object,), dict(hello=fn))
h = Hello()
h.hello()
# Hello world!
print(type(Hello))
# <class 'type'>
print(type(h))
# <class '__main__.Hello'>
```

要创建一个 class 对象，`type()`函数依次传入 3 个参数：

1. class 的名称；
2. 继承的父类集合，注意 Python 支持多重继承，如果只有一个父类，别忘了 tuple 的单元素写法；
3. class 的方法名称与函数绑定，这里我们把函数 `fn` 绑定到方法名 `hello` 上。

通过 `type()`函数创建的类和直接写 class 是完全一样的，因为 Python 解释器遇到 class 定义时，仅仅是扫描一下 class 定义的语法，然后调用 `type()`函数创建出 class。

正常情况下，我们都用 `class Xxx...`来定义类，但是，`type()`函数也允许我们动态创建出类来，也就是说，动态语言本身支持运行期动态创建类，这和静态语言有非常大的不同，要在静态语言运行期创建类，必须构造源代码字符串再调用编译器，或者借助一些工具生成字节码实现，本质上都是动态编译，会非常复杂。

:::

除了使用 `type()`动态创建类以外，要控制类的创建行为，还可以使用 metaclass。

> metaclass，直译为元类，简单的解释就是：当我们定义了类以后，就可以根据这个类创建出实例，所以：先定义类，然后创建实例。

```python
class ListMetaclass(type): # metaclass是类的模板，所以必须从`type`类型派生：
  def __new__(cls, name, bases, attrs):
    attrs['add'] = lambda self, value: self.append(value)
    return type.__new__(cls, name, bases, attrs)

class MyList(list, metaclass=ListMetaclass):
  pass

L = MyList()
L.add(1)
print(L)
# [1]
```

## 10. 错误、调试和测试

在程序运行过程中，总会遇到各种各样的错误。

有的错误是程序编写有问题造成的，比如本来应该输出整数结果输出了字符串，这种错误我们通常称之为 bug，bug 是必须修复的。

有的错误是用户输入造成的，比如让用户输入 email 地址，结果得到一个空字符串，这种错误可以通过检查用户输入来做相应的处理。

还有一类错误是完全无法在程序运行过程中预测的，比如写入文件的时候，磁盘满了，写不进去了，或者从网络抓取数据，网络突然断掉了。这类错误也称为异常，在程序中通常是必须处理的，否则，程序会因为各种问题终止并退出。

Python 内置了一套异常处理机制，来帮助我们进行错误处理。此外，我们也需要跟踪程序的执行，查看变量的值是否正确，这个过程称为调试。Python 的 pdb 可以让我们以单步方式执行代码。

最后，编写测试也很重要。有了良好的测试，就可以在程序修改后反复运行，确保程序输出符合我们编写的测试。

### 10.1 错误处理

1. try

   当我们认为某些代码可能会出错时，就可以用 `try` 来运行这段代码，如果执行出错，则后续代码不会继续执行，而是直接跳转至错误处理代码，即 `except` 语句块，执行完 `except` 后，如果有 `finally` 语句块，则执行 `finally` 语句块，至此，执行完毕。

   ```python
   try:
     print('try...')
     r = 10 / 0
     print('result:', r)
   except ZeroDivisionError as e:
     print('except:', e)
   finally:
     print('finally')
   print('END')
   # try...
   # except: division by zero
   # finally
   # END
   ```

   从输出可以看到，当错误发生时，后续语句 `print('result:', r)`不会被执行，`except` 由于捕获到 `ZeroDivisionError`，因此被执行。最后，`finally` 语句被执行。然后，程序继续按照流程往下走。

   如果把除数 `0` 改为 `2`，执行结果如下：

   ```python
   try:
     print('try...')
     r = 10 / 2
     print('result:', r)
   except ZeroDivisionError as e:
     print('except:', e)
   finally:
     print('finally')

   print('END')
   # try...
   # result: 5.0
   # finally
   # END
   ```

   由于没有错误发生，所以 `except` 语句块不会被执行，但是 `finally` 如果有，则一定会被执行（可以没有 `finally` 语句）。

   当然，如果发生了不同类型的错误，应该由不同的 except 语句块捕获不同类型的错误：

   ```python
   try:
     print('try...')
     r = 10 / int(input('请输入一个数字: '))
     print('result:', r)
   except ValueError as e:
     print('ValueError:', e) # 如果输入非数字，ValueError会抛出
   except ZeroDivisionError as e:
     print('ZeroDivisionError:', e) # 如果除数为0，ZeroDivisionError会抛出
   else:
     print('no error') # 当没有错误发生时，会自动执行else语句
   finally:
     print('finally')

   print('END')

   # 输入a
   # try...
   # 请输入一个数字: a
   # ValueError: invalid literal for int() with base 10: 'a'
   # finally
   # END

   # 输入0
   # try...
   # 请输入一个数字: 0
   # ZeroDivisionError: division by zero
   # finally
   # END

   # 输入2
   # try...
   # 请输入一个数字: 2
   # result: 5.0
   # no error
   # finally
   # END
   ```

   `int()`函数可能会抛出 `ValueError`，所以我们用一个 `except` 捕获 `ValueError`，用另一个 `except` 捕获 `ZeroDivisionError`。此外，如果没有错误发生，可以在 `except` 语句块后面加一个 `else`，当没有错误发生时，会自动执行 `else` 语句。

   > 不需要在每个可能出错的地方去捕获错误，只要在合适的层次去捕获错误就可以了。这样一来，就大大减少了写 `try...except...finally` 的麻烦。

2. 调用栈

   如果错误没有被捕获，它就会一直往上抛，最后被 Python 解释器捕获，打印一个错误信息，然后程序退出：

   ```python
   def foo(s):
     return 10 / int(s)
   def bar(s):
     return foo(s) * 2
   def main():
     bar(0)

   main()
   print('END') # 出错后，程序退出不会打印这行
   # Traceback (most recent call last):
   #   File "<stdin>", line 8, in <module>
   #     main()
   #   File "<stdin>", line 6, in main
   #     bar(0)
   #   File "<stdin>", line 4, in bar
   #     return foo(s) * 2
   #   File "<stdin>", line 2, in foo
   #     return 10 / int(s)
   # ZeroDivisionError: division by zero
   ```

   :::tip 解析

   出错并不可怕，可怕的是不知道哪里出错了。解读错误信息是定位错误的关键。我们从上往下可以看到整个错误的调用函数链：

   错误信息第 1 行：

   ```python
   Traceback (most recent call last):
   ```

   告诉我们这是错误的跟踪信息。

   第 2~3 行：

   ```python
   File "<stdin>", line 8, in <module>
     main()
   ```

   调用 main()出错了，在代码文件的第 8 行代码，但原因是第 6 行：

   ```python
   File "<stdin>", line 6, in main
     bar('0')
   ```

   调用 bar('0')出错了，在代码文件的第 6 行代码，但原因是第 4 行：

   ```python
   File "<stdin>", line 4, in bar
     return foo(s) * 2
   ```

   原因是 return foo(s) \* 2 这个语句出错了，但这还不是最终原因，继续往下看：

   ```python
   File "<stdin>", line 2, in foo
     return 10 / int(s)
   ```

   原因是 return 10 / int(s)这个语句出错了，这是错误产生的源头，因为下面打印了：

   ```python
   ZeroDivisionError: division by zero
   ```

   根据错误类型 `ZeroDivisionError`，我们判断，`int(s)`本身并没有出错，但是 `int(s)`返回 `0`，在计算 `10 / 0` 时出错，至此，找到错误源头。

   :::

   > 出错的时候，一定要分析错误的调用栈信息，才能定位错误的位置。

3. 记录错误

   如果不捕获错误，自然可以让 Python 解释器来打印出错误堆栈，但程序也被结束了。既然我们能捕获错误，就可以把错误堆栈打印出来，然后分析错误原因，同时，让程序继续执行下去。

   Python 内置的 `logging` 模块可以非常容易地记录错误信息：

   ```python
   import logging

   def foo(s):
     return 10 / int(s)
   def bar(s):
     return foo(s) * 2
   def main():
     try:
       bar('0')
     except Exception as e:
       logging.exception(e)

   main()
   print('END')
   # ERROR:root:division by zero
   # Traceback (most recent call last):
   #   File "<stdin>", line 9, in main
   #     bar('0')
   #   File "<stdin>", line 6, in bar
   #     return foo(s) * 2
   #   File "<stdin>", line 4, in foo
   #     return 10 / int(s)
   # ZeroDivisionError: division by zero
   # END
   ```

   同样是出错，但程序打印完错误信息后会继续执行，并正常退出。通过配置，`logging` 还可以把错误记录到日志文件里，方便排查。

4. 抛出错误

   因为错误是 class，捕获一个错误就是捕获到该 class 的一个实例。因此，错误并不是凭空产生的，而是有意创建并抛出的。Python 的内置函数会抛出很多类型的错误，我们自己编写的函数也可以抛出错误。

   如果要抛出错误，首先根据需要，可以定义一个错误的 class，选择好继承关系，然后，用 `raise` 语句抛出一个错误的实例：

   ```python
   class FooError(ValueError):
     pass
   def foo(s):
     n = int(s)
     if n == 0:
       raise FooError('invalid value: %s' % s)
     return 10 / n
   foo('0')
   # Traceback (most recent call last):
   #   File "<stdin>", line 8, in <module>
   #     foo('0')
   #   File "<stdin>", line 6, in foo
   #     raise FooError('invalid value: %s' % s)
   # FooError: invalid value: 0
   ```

   只有在必要的时候才定义我们自己的错误类型。如果可以选择 Python 已有的内置的错误类型（比如`ValueError`，`TypeError`），尽量使用 Python 内置的错误类型。

### 10.2 调试

> 程序能一次写完并正常运行的概率很小，基本不超过 1%。总会有各种各样的 bug 需要修正。有的 bug 很简单，看看错误信息就知道，有的 bug 很复杂，我们需要知道出错时，哪些变量的值是正确的，哪些变量的值是错误的，因此，需要一整套调试程序的手段来修复 bug。

1. print

   第一种方法简单直接，就是使用 `print()` 把可能有问题的变量打印出来：

   ```python
   def foo(s):
     n = int(s)
     print('n =', n)
     return 10 / n
   def main():
     foo('0')
   main()
   # n = 0
   # Traceback (most recent call last):
   #   File "<stdin>", line 10, in <module>
   #     main()
   #   File "<stdin>", line 8, in main
   #     foo('0')
   #   File "<stdin>", line 5, in foo
   #     return 10 / n
   # ZeroDivisionError: division by zero
   ```

   :::warning

   用 `print()`最大的坏处是将来还得删掉它，想想程序里到处都是 `print()`，运行结果也会包含很多垃圾信息。

   :::

2. 断言

   凡是用 `print()` 辅助查看的地方，都可以用断言（assert）来替代：

   ```python
   def foo(s):
     n = int(s)
     assert n != 0, 'n is zero!'
     return 10 / n
   def main():
     foo('0')
   main()
   # Traceback (most recent call last):
   #   File "<stdin>", line 7, in <module>
   #     main()
   #   File "<stdin>", line 6, in main
   #     foo('0')
   #   File "<stdin>", line 3, in foo
   #     assert n != 0, 'n is zero!'
   # AssertionError: n is zero!
   ```

   `assert` 的意思是，表达式 `n != 0` 应该是 `True`，否则，根据程序运行的逻辑，后面的代码肯定会出错。如果断言失败，`assert` 语句本身就会抛出 `AssertionError`。

   :::warning

   程序中如果到处充斥着 `assert`，和 `print()`相比也好不到哪去。不过，启动 Python 解释器时可以用 `-O` 参数来关闭 `assert`：

   ```python
   $ python -O test.py

   # Traceback (most recent call last):
   #   File "<stdin>", line 7, in <module>
   #     main()
   #   File "<stdin>", line 6, in main
   #     foo('0')
   #   File "<stdin>", line 4, in foo
   #     return 10 / n
   # ZeroDivisionError: division by zero
   ```

   > 注意：断言的开关“-O”是英文大写字母 O，不是数字 0。关闭后，你可以把所有的 `assert` 语句当成 `pass` 来看。

   :::

3. logging

   把 `print()`替换为 `logging` 是第 3 种方式，和 `assert` 比，`logging` 不会抛出错误，而且可以输出到文件：

   ```python
   import logging

   s = '0'
   n = int(s)
   logging.info('n = %d', n)
   print(10 / n)
   # Traceback (most recent call last):
   #   File "<stdin>", line 6, in <module>
   #     print(10 / n)
   # ZeroDivisionError: division by zero
   ```

   `logging.info()`就可以输出一段文本。运行，发现除了 `ZeroDivisionError`，没有任何信息。怎么回事？别急，在`import logging`之后添加一行配置再试试：

   ```python
   import logging
   logging.basicConfig(level=logging.INFO)

   s = '0'
   n = int(s)
   logging.info('n = %d', n)
   print(10 / n)
   # INFO:root:n = 0
   # Traceback (most recent call last):
   #   File "E:\learn\learn-python\12\11.py", line 7, in <module>
   #     print(10 / n)
   # ZeroDivisionError: division by zero
   ```

   这就是 `logging` 的好处，它允许你指定记录信息的级别，有 `DEBUG`，`INFO`，`WARNING`，`ERROR` 等几个级别，当我们指定 `level=INFO` 时，`logging.debug` 就不起作用了。同理，指定 `level=WARNING` 后，`debug` 和 `info` 就不起作用了。这样一来，你可以放心地输出不同级别的信息，也不用删除，最后统一控制输出哪个级别的信息。

   `logging` 的另一个好处是通过简单的配置，一条语句可以同时输出到不同的地方，比如 `console` 和文件。

4. pdb

   第 4 种方式是启动 Python 的调试器 pdb，让程序以单步方式运行，可以随时查看运行状态。我们先准备好程序：

   ```python
   s = '0'
   n = int(s)
   print(10 / n)

   $ python -m pdb 12.py
   # > <stdin>(1)<module>()
   # -> s = '0'
   ```

   以参数 `-m pdb` 启动后，`pdb` 定位到下一步要执行的代码`-> s = '0'`。输入命令 `l` 来查看代码：

   ```python
   # (Pdb) l
   #   1  -> s = '0'
   #   2     n = int(s)
   #   3     print(10 / n)
   # [EOF]
   ```

   输入命令 `n` 可以单步执行代码：

   ```python
   # (Pdb) n
   # > <stdin>(2)<module>()
   # -> n = int(s)
   # (Pdb) n
   # > <stdin>(3)<module>()
   # -> print(10 / n)
   ```

   输入命令 `q` 结束调试，退出程序：

   ```python
   # (Pdb) q
   ```

   这种通过 pdb 在命令行调试的方法理论上是万能的，但实在是太麻烦了，如果有一千行代码，要运行到第 999 行得敲多少命令啊。还好，我们还有另一种调试方法 **pdb.set_trace()**。

   这个方法也是用 pdb，但是不需要单步执行，我们只需要 `import pdb`，然后，在可能出错的地方放一个 `pdb.set_trace()`，就可以设置一个断点：

   ```python
   import pdb

   s = '0'
   n = int(s)
   pdb.set_trace()
   print(10 / n)
   ```

   运行代码，程序会自动在 `pdb.set_trace()`暂停并进入 pdb 调试环境，可以用命令 `p` 查看变量，或者用命令 `c` 继续运行：

   ```python
   $ python err.py
   # > err.py(6)<module>()
   # -> print(10 / n)
   # (Pdb) p n
   # 0
   # (Pdb) c
   # Traceback (most recent call last):
   #   File "err.py", line 6, in <module>
   #     print(10 / n)
   # ZeroDivisionError: division by zero
   ```

   这个方式比直接启动 pdb 单步调试效率要高很多，但也高不到哪去。

### 10.3 单元测试

> 单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

:::tip 引子

比如对函数 abs()，我们可以编写出以下几个测试用例：

1. 输入正数，比如 1、1.2、0.99，期待返回值与输入相同；
2. 输入负数，比如-1、-1.2、-0.99，期待返回值与输入相反；
3. 输入 0，期待返回 0；
4. 输入非数值类型，比如 None、[]、{}，期待抛出 TypeError。

把上面的测试用例放到一个测试模块里，就是一个完整的单元测试。

如果单元测试通过，说明我们测试的这个函数能够正常工作。如果单元测试不通过，要么函数有 bug，要么测试条件输入不正确，总之，需要修复使单元测试能够通过。

单元测试通过后有什么意义呢？如果我们对 abs()函数代码做了修改，只需要再跑一遍单元测试，如果通过，说明我们的修改不会对 abs()函数原有的行为造成影响，如果测试不通过，说明我们的修改与原有行为不一致，要么修改代码，要么修改测试。

这种以测试为驱动的开发模式最大的好处就是确保一个程序模块的行为符合我们设计的测试用例。在将来修改的时候，可以极大程度地保证该模块行为仍然是正确的。

:::

我们来编写一个 Dict 类，这个类的行为和 dict 一致，但是可以通过属性来访问，用起来就像下面这样：

```python
class Dict(dict):
  def __init__(self, **kw):
    super().__init__(**kw)

  def __getattr__(self, key):
    try:
      return self[key]
    except KeyError:
      raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

  def __setattr__(self, key, value):
    self[key] = value

d = Dict(a = 1, b = 2)

print(d['a'])
# 1
print(d.a)
# 1
```

为了编写单元测试，我们需要引入 Python 自带的 `unittest` 模块，编写 `mydict_test.py` 如下：

```python
import unittest

from mydict import Dict

class TestDict(unittest.TestCase):
  def test_init(self):
    d = Dict(a=1, b='test')
    self.assertEqual(d.a, 1)
    self.assertEqual(d.b, 'test')
    self.assertTrue(isinstance(d, dict))

  def test_key(self):
    d = Dict()
    d['key'] = 'value'
    self.assertEqual(d.key, 'value')

  def test_attr(self):
    d = Dict()
    d.key = 'value'
    self.assertTrue('key' in d)
    self.assertEqual(d['key'], 'value')

  def test_keyerror(self):
    d = Dict()
    with self.assertRaises(KeyError):
      value = d['empty']

  def test_attrerror(self):
    d = Dict()
    with self.assertRaises(AttributeError):
      value = d.empty
```

编写单元测试时，我们需要编写一个测试类，从 `unittest.TestCase` 继承。

以 `test` 开头的方法就是测试方法，不以 `test` 开头的方法不被认为是测试方法，测试的时候不会被执行。

对每一类测试都需要编写一个 `test_xxx()`方法。由于 `unittest.TestCase` 提供了很多内置的条件判断，我们只需要调用这些方法就可以断言输出是否是我们所期望的。最常用的断言就是 `assertEqual()`：

```python
self.assertEqual(abs(-1), 1) # 断言函数返回的结果与1相等
```

另一种重要的断言就是期待抛出指定类型的 `Error`，比如通过 `d['empty']`访问不存在的 key 时，断言会抛出 `KeyError`：

```python
with self.assertRaises(KeyError):
  value = d['empty']
```

而通过 `d.empty` 访问不存在的 key 时，我们期待抛出 `AttributeError`：

```python
with self.assertRaises(AttributeError):
  value = d.empty
```

#### 运行单元测试

一旦编写好单元测试，我们就可以运行单元测试。

1. 最简单的运行方式是在 `mydict_test.py` 的最后加上两行代码：

   ```python
   if __name__ == '__main__':
     unittest.main()
   ```

   这样就可以把 `mydict_test.py` 当做正常的 python 脚本运行：

   ```sh
   $ python mydict_test.py
   ```

2. 另一种方法是在命令行通过参数-m unittest 直接运行单元测试：

   ```sh
   $ python -m unittest mydict_test.py
   ```

输出：

```python
# .....
# ----------------------------------------------------------------------
# Ran 5 tests in 0.001s
#
# OK
```

推荐第二种做法，因为这样可以一次批量运行很多单元测试，并且，有很多工具可以自动来运行这些单元测试。

#### setUp 和 tearDown

可以在单元测试中编写两个特殊的 `setUp()`和 `tearDown()`方法。这两个方法会分别在每调用一个测试方法的前后分别被执行。

`setUp()`和 `tearDown()`方法有什么用呢？设想你的测试需要启动一个数据库，这时，就可以在 `setUp()`方法中连接数据库，在 `tearDown()`方法中关闭数据库，这样，不必在每个测试方法中重复相同的代码：

```python
class TestDict(unittest.TestCase):
  def setUp(self):
    print('setUp...')

  def tearDown(self):
    print('tearDown...')
```

> - 单元测试可以有效地测试某个程序模块的行为，是未来重构代码的信心保证。
> - 单元测试的测试用例要覆盖常用的输入组合、边界条件和异常。
> - 单元测试代码要非常简单，如果测试代码太复杂，那么测试代码本身就可能有 bug。
> - 单元测试通过了并不意味着程序就没有 bug 了，但是不通过程序肯定有 bug。

### 10.4 文档测试

如果你经常阅读 Python 的官方文档，可以看到很多文档都有示例代码。比如 `re` 模块就带了很多示例代码：

```python
import re
m = re.search('(?<=abc)def', 'abcdef')
print(m.group(0))
# def
```

可以把这些示例代码在 Python 的交互式环境下输入并执行，结果与文档中的示例代码显示的一致。

这些代码与其他说明可以写在注释中，然后，由一些工具来自动生成文档。既然这些代码本身就可以粘贴出来直接运行，那么，可不可以自动执行写在注释中的这些代码呢？答案是肯定的。

当我们编写注释时，如果写上这样的注释：

```python
def abs(n):
  '''
  Function to get absolute value of number.
  Example:
  >>> abs(1)
  1
  >>> abs(-1)
  1
  >>> abs(0)
  0
  '''
  return n if n >= 0 else (-n)
```

无疑更明确地告诉函数的调用者该函数的期望输入和输出。

并且，Python 内置的“文档测试”（doctest）模块可以直接提取注释中的代码并执行测试。

doctest 严格按照 Python 交互式命令行的输入和输出来判断测试结果是否正确。只有测试异常的时候，可以用`...`表示中间一大段烦人的输出。

让我们用 doctest 来测试上次编写的 Dict 类：

```python
class Dict(dict):
  '''
  Simple dict but also support access as x.y style.

  >>> d1 = Dict()
  >>> d1['x'] = 100
  >>> d1.x
  100
  >>> d1.y = 200
  >>> d1['y']
  200
  >>> d2 = Dict(a=1, b=2, c='3')
  >>> d2.c
  '3'
  >>> d2['empty']
  Traceback (most recent call last):
      ...
  KeyError: 'empty'
  >>> d2.empty
  Traceback (most recent call last):
      ...
  AttributeError: 'Dict' object has no attribute 'empty'
  '''
  def __init__(self, **kw):
    super(Dict, self).__init__(**kw)

  def __getattr__(self, key):
    try:
      return self[key]
    except KeyError:
      raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

  def __setattr__(self, key, value):
    self[key] = value

if __name__=='__main__':
  import doctest
  doctest.testmod()
```

运行后发现无任何输出。这说明我们编写的 doctest 运行都是正确的。如果程序有问题，比如把 `__getattr__()`方法注释掉，再运行就会报错：

```python
# **********************************************************************
# File "E:\learn\learn-python\12\16.py", line 7, in __main__.Dict
# Failed example:
#     d1.x
# Exception raised:
#     Traceback (most recent call last):
#       File "C:\Users\DELL\AppData\Local\Programs\Python\Python312\Lib\doctest.py", line 1361, in __run
#         exec(compile(example.source, filename, "single",
#       File "<doctest __main__.Dict[2]>", line 1, in <module>
#         d1.x
#     AttributeError: 'Dict' object has no attribute 'x'
# **********************************************************************
# File "E:\learn\learn-python\12\16.py", line 13, in __main__.Dict
# Failed example:
#     d2.c
# Exception raised:
#     Traceback (most recent call last):
#       File "C:\Users\DELL\AppData\Local\Programs\Python\Python312\Lib\doctest.py", line 1361, in __run
#         exec(compile(example.source, filename, "single",
#       File "<doctest __main__.Dict[6]>", line 1, in <module>
#         d2.c
#     AttributeError: 'Dict' object has no attribute 'c'
# **********************************************************************
# 1 items had failures:
#    2 of   9 in __main__.Dict
# ***Test Failed*** 2 failures.
```

注意到最后 3 行代码。当模块正常导入时，doctest 不会被执行。只有在命令行直接运行时，才执行 doctest。所以，不必担心 doctest 会在非测试环境下执行。

:::details 小练习

```python
def fact(n):
  '''
  Calculate 1*2*...*n
  >>> fact(1)
  1
  >>> fact(10)
  3628800
  >>> fact(-1)
  Traceback (most recent call last):
    ...
  ValueError
  '''
  if n < 1:
    raise ValueError()
  if n == 1:
    return 1
  return n * fact(n - 1)

if __name__ == '__main__':
  import doctest
  doctest.testmod()
```

:::

> doctest 非常有用，不但可以用来测试，还可以直接作为示例代码。通过某些文档生成工具，就可以自动把包含 doctest 的注释提取出来。用户看文档的时候，同时也看到了 doctest。

## 11. IO 编程

> IO 在计算机中指 Input/Output，也就是输入和输出。由于程序和运行时数据是在内存中驻留，由 CPU 这个超快的计算核心来执行，涉及到数据交换的地方，通常是磁盘、网络等，就需要 IO 接口。

### 11.1 文件读写

读写文件是最常见的 IO 操作。Python 内置了读写文件的函数，用法和 C 是兼容的。

1. 读文件

   要以读文件的模式打开一个文件对象，使用 Python 内置的 open()函数，传入文件名和标示符：

   ```python
   f = open('./filePath.txt', 'r')
   ```

   标示符'r'表示读，这样，我们就成功地打开了一个文件。

   如果文件不存在，`open()`函数就会抛出一个 `IOError` 的错误，并且给出错误码和详细的信息告诉你文件不存在：

   ```python
   f = open('./errFilePath.txt', 'r')
   # Traceback (most recent call last):
   #   File "<stdin>", line 1, in <module>
   #     f = open('./errFilePath.txt', 'r')
   # FileNotFoundError: [Errno 2] No such file or directory: './errFilePath.txt'
   ```

   如果文件打开成功，接下来，调用 `read()` 方法可以一次读取文件的全部内容，Python 把内容读到内存，用一个 `str` 对象表示：

   ```python
   f = open('./filePath.txt', 'r')
   print(f.read())
   # 文件内容
   ```

   最后一步是调用`close()`方法关闭文件。文件使用完毕后必须关闭，因为文件对象会占用操作系统的资源，并且操作系统同一时间能打开的文件数量也是有限的：

   ```python
   f = open('./filePath.txt', 'r')
   print(f.read())
   # 文件内容
   f.close()
   ```

   由于文件读写时都有可能产生 `IOError`，一旦出错，后面的 `f.close()`就不会调用。所以，为了保证无论是否出错都能正确地关闭文件，我们可以使用 `try ... finally` 来实现：

   ```python
   f = open('./filePath.txt', 'r')
   try:
     print(f.read())
   finally:
     if f:
       f.close()
   # 文件内容
   ```

   但是每次都这么写实在太繁琐，所以，Python 引入了 `with` 语句来自动帮我们调用 `close()`方法：

   ```python
   with open('./filePath.txt', 'r') as f:
     print(f.read())
   # 文件内容
   ```

   这和前面的 `try ... finally` 是一样的，但是代码更佳简洁，并且不必调用 `f.close()`方法。

   调用 `read()`会一次性读取文件的全部内容，如果文件有 10G，内存就爆了，所以，要保险起见，可以反复调用 `read(size)`方法，每次最多读取 size 个字节的内容。另外，调用 `readline()`可以每次读取一行内容，调用 `readlines()`一次读取所有内容并按行返回 `list`。因此，要根据需要决定怎么调用。

   如果文件很小，`read()`一次性读取最方便；如果不能确定文件大小，反复调用 `read(size)`比较保险；如果是配置文件，调用 `readlines()`最方便：

   ```python
   with open('./filePath.txt', 'r') as f:
     # print(f.read())
     # print(f.readlines())
     for line in f.readlines():
       print(line.strip()) # 把末尾的'\n'删掉
   ```

   **读取二进制文件**

   前面讲的默认都是读取文本文件，并且是 UTF-8 编码的文本文件。要读取二进制文件，比如图片、视频等等，用`'rb'`模式打开文件即可：

   ```python
   with open('./filePath.txt', 'rb') as f:
     print(f.read())
   # b'123\r\n456\r\n789'
   ```

   **字符编码**

   要读取非 UTF-8 编码的文本文件，需要给 `open()`函数传入 `encoding` 参数，例如，读取 GBK 编码的文件：

   ```python
   with open('./filePath.txt', 'r', encoding='gbk') as f:
     print(f.read())
   ```

   **忽略非法编码报错**

   遇到有些编码不规范的文件，你可能会遇到 `UnicodeDecodeError`，因为在文本文件中可能夹杂了一些非法编码的字符。遇到这种情况，`open()`函数还接收一个 `errors` 参数，表示如果遇到编码错误后如何处理。最简单的方式是直接忽略：

   ```python
   with open('./filePath.txt', 'r', encoding='gbk', errors='ignore') as f:
     print(f.read())
   ```

2. 写文件

   写文件和读文件是一样的，唯一区别是调用 `open()`函数时，传入标识符`'w'`或者`'wb'`表示写文本文件或写二进制文件【没有文件会创建新文件并写入】：

   ```python
   f = open('./filePath.txt', 'w')
   f.write('Hello World!')
   f.close()
   ```

   你可以反复调用 `write()`来写入文件，但是务必要调用 `f.close()`来关闭文件。当我们写文件时，操作系统往往不会立刻把数据写入磁盘，而是放到内存缓存起来，空闲的时候再慢慢写入。只有调用 `close()`方法时，操作系统才保证把没有写入的数据全部写入磁盘。忘记调用 `close()`的后果是数据可能只写了一部分到磁盘，剩下的丢失了。所以，还是用 `with` 语句来得保险：

   ```python
   with open('./filePath.txt', 'w') as f:
     f.write('Test With')
   ```

   要写入特定编码的文本文件，请给 `open()`函数传入 `encoding` 参数，将字符串自动转换成指定编码。

   细心的童鞋会发现，以`'w'`模式写入文件时，如果文件已存在，会直接覆盖（相当于删掉后新写入一个文件）。如果我们希望追加到文件末尾怎么办？可以传入`'a'`以追加（append）模式写入。

   ```python
   with open('./filePath.txt', 'a') as f:
     f.write('\nTest Append')
   ```

   所有模式的定义及含义可以参考 Python 的[官方文档](https://docs.python.org/zh-cn/3/library/functions.html#open)。

### 11.2 StringIO 和 BytesIO

1. StringIO

   很多时候，数据读写不一定是文件，也可以在内存中读写。StringIO 顾名思义就是在内存中读写 str。

   要把 str 写入 StringIO，我们需要先创建一个 StringIO，然后，像文件一样写入即可：

   ```python
   from io import StringIO

   f = StringIO()
   f.write('Hello')
   f.write(' ')
   f.write('World!')
   print(f.getvalue())
   # Hello World!
   ```

   `getvalue()`方法用于获得写入后的 str。

   要读取 StringIO，也可以用一个 str 初始化 StringIO，然后，像读文件一样读取：

   ```python
   from io import StringIO

   f = StringIO('Hello!\nHi!\nGoodbye!')
   while True:
     s = f.readline()
     if s == '':
       break
     print(s.strip())
   # Hello!
   # Hi!
   # Goodbye!
   ```

2. BytesIO

   StringIO 操作的只能是 str，如果要操作二进制数据，就需要使用 BytesIO。

   BytesIO 实现了在内存中读写 bytes，我们创建一个 BytesIO，然后写入一些 bytes：

   ```python
   from io import BytesIO

   f = BytesIO()
   f.write('中文'.encode('utf-8'))
   print(f.getvalue())
   # b'\xe4\xb8\xad\xe6\x96\x87'
   ```

   请注意，写入的不是 str，而是经过 UTF-8 编码的 bytes。

   和 StringIO 类似，可以用一个 bytes 初始化 BytesIO，然后，像读文件一样读取：

   ```python
   from io import BytesIO

   f = BytesIO('中文'.encode('utf-8'))
   print(f.getvalue())
   # b'\xe4\xb8\xad\xe6\x96\x87'
   ```

### 11.3 操作文件和目录

:::tip 引子
如果我们要操作文件、目录，可以在命令行下面输入操作系统提供的各种命令来完成。比如 dir、cp 等命令。

如果要在 Python 程序中执行这些目录和文件的操作怎么办？其实操作系统提供的命令只是简单地调用了操作系统提供的接口函数，Python 内置的 os 模块也可以直接调用操作系统提供的接口函数。
:::

使用 os 模块的基本功能：

```python
import os
print(os.name)
# nt
```

如果是 `posix`，说明系统是 `Linux`、`Unix` 或 `Mac OS X`，如果是 `nt`，就是 `Windows` 系统。

要获取详细的系统信息，可以调用 uname()函数：

```python
import os
print(os.uname())
```

:::warning
注意 `uname()`函数在 Windows 上不提供，也就是说，`os` 模块的某些函数是跟操作系统相关的。
:::

1. 环境变量

   在操作系统中定义的环境变量，全部保存在`os.environ`这个变量中，可以直接查看：

   ```python
   import os
   print(os.environ)
   # environ({'123PAN': 'D:\\Program Files\\123pan\\123pan.exe', ...})
   ```

   要获取某个环境变量的值，可以调用 os.environ.get('key')：

   ```python
   import os
   print(os.environ.get('PATH'))
   # C:\ProgramData\Oracle\Java\javapath;...
   print(os.environ.get('x', 'default'))
   # default
   ```

2. 操作文件和目录

   操作文件和目录的函数一部分放在 `os` 模块中，一部分放在 `os.path` 模块中，这一点要注意一下。查看、创建和删除目录可以这么调用：

   ```python
   import os
   print(os.path.abspath('.')) # 获取当前文件所在目录
   os.path.join(os.path.abspath('.'), 'testdir') # 在此文件夹下创建新目录，把完整路径表示出来
   os.mkdir('testdir') # 创建目录
   os.rmdir('testdir') # 删除目录
   ```

   把两个路径合成一个时，不要直接拼字符串，而要通过 `os.path.join()`函数，这样可以正确处理不同操作系统的路径分隔符。在 Linux/Unix/Mac 下，`os.path.join()`返回这样的字符串：

   ```python
   # part-1/part-2
   ```

   而 Windows 下会返回这样的字符串：

   ```python
   # part-1\part-2
   ```

   同样的道理，要拆分路径时，也不要直接去拆字符串，而要通过 `os.path.split()`函数，这样可以把一个路径拆分为两部分，后一部分总是最后级别的目录或文件名：

   ```python
   import os
   print(os.path.split(os.path.realpath(__file__))) # 获取文件路径、名称
   # ('E:\\learn\\learn-python\\13', '19.py')
   ```

   `os.path.splitext()`可以直接让你得到文件扩展名，很多时候非常方便：

   ```python
   import os
   print(os.path.splitext(os.path.realpath(__file__))) # 获取文件路径、扩展名
   # ('E:\\learn\\learn-python\\13\\20', '.py')
   ```

   这些合并、拆分路径的函数并不要求目录和文件要真实存在，它们只对字符串进行操作。

   文件操作使用下面的函数。假定当前目录下有一个 test.txt 文件：

   ```python
   import os
   os.rename('test.txt', 'test.py') # 修改文件名称、类型
   ```

   Python 中并没有复制函数，原因是复制文件并非由操作系统提供的系统调用。理论上讲，我们通过上一节的读写文件可以完成文件复制，只不过要多写很多代码。

   `shutil` 模块提供了 `copyfile()`的函数，你还可以在 `shutil` 模块中找到很多实用函数，它们可以看做是 `os` 模块的补充。

   利用 Python 的特性来过滤文件。比如我们要列出当前目录下的所有目录，只需要一行代码：

   ```python
   import os
   print([x for x in os.listdir('.') if os.path.isdir(x)])
   # 打印当前目录下的所有一级子目录的列表
   ```

   要列出所有的`.py`文件，也只需一行代码：

   ```python
   import os
   print([x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py'])
   # 打印当前目录下所有.py文件的列表
   ```

### 11.4 序列化

:::tip 引子

在程序运行的过程中，所有的变量都是在内存中，比如，定义一个 dict：

```python
d = dict(name='Bob', age=20, score=88)
```

可以随时修改变量，比如把 name 改成'Bill'，但是一旦程序结束，变量所占用的内存就被操作系统全部回收。如果没有把修改后的'Bill'存储到磁盘上，下次重新运行程序，变量又被初始化为'Bob'。

我们把变量从内存中变成可存储或传输的过程称之为序列化，在 Python 中叫 pickling，在其他语言中也被称之为 serialization，marshalling，flattening 等等，都是一个意思。

序列化之后，就可以把序列化后的内容写入磁盘，或者通过网络传输到别的机器上。

反过来，把变量内容从序列化的对象重新读到内存里称之为反序列化，即 unpickling。

Python 提供了 `pickle` 模块来实现序列化。

:::

首先，我们尝试把一个对象序列化并写入文件：

```python
import pickle
d = dict(name='Bob', age=20, score=88)
print(pickle.dumps(d))
# b'\x80\x04\x95$\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x04name\x94\x8c\x03Bob\x94\x8c\x03age\x94K\x14\x8c\x05score\x94KXu.'
```

`pickle.dumps()`方法把任意对象序列化成一个 `bytes`，然后，就可以把这个 `bytes` 写入文件。或者用另一个方法 `pickle.dump()`直接把对象序列化后写入一个 file-like Object：

```python
import pickle
d = dict(name='Bob', age=20, score=88)
f = open("./dump.txt", "wb")
pickle.dump(d, f)
f.close()
```

写入的 `dump.txt` 文件是一堆乱七八糟的内容，这些都是 Python 保存的对象内部信息。

当我们要把对象从磁盘读到内存时，可以先把内容读到一个 `bytes`，然后用 `pickle.loads()`方法反序列化出对象，也可以直接用 `pickle.load()`方法从一个 `file-like Object` 中直接反序列化出对象。我们打开另一个 Python 命令行来反序列化刚才保存的对象：

```python
import pickle
f = open("./dump.txt", "rb")
d = pickle.load(f)
f.close()
print(d)
# {'name': 'Bob', 'age': 20, 'score': 88}
```

变量的内容又回来了！当然，这个变量和原来的变量是完全不相干的对象，它们只是内容相同而已。

Pickle 的问题和所有其他编程语言特有的序列化问题一样，就是它只能用于 Python，并且可能不同版本的 Python 彼此都不兼容，因此，只能用 Pickle 保存那些不重要的数据，不能成功地反序列化也没关系。

**JSON**

如果我们要在不同的编程语言之间传递对象，就必须把对象序列化为标准格式，比如 XML，但更好的方法是序列化为 JSON，因为 JSON 表示出来就是一个字符串，可以被所有语言读取，也可以方便地存储到磁盘或者通过网络传输。JSON 不仅是标准格式，并且比 XML 更快，而且可以直接在 Web 页面中读取，非常方便。

JSON 表示的对象就是标准的 JavaScript 语言的对象，JSON 和 Python 内置的数据类型对应如下：

| JSON 类型  | PYTHON 类型  |
| ---------- | ------------ |
| {}         | dict         |
| []         | list         |
| "string"   | str          |
| 1234.56    | int 或 float |
| true/false | True/False   |
| null       | None         |

Python 内置的 `json` 模块提供了非常完善的 Python 对象到 JSON 格式的转换。我们先看看如何把 Python 对象变成一个 JSON：

```python
import json
d = dict(name='Bob', age=20, score=88)
print(json.dumps(d))
# {"name": "Bob", "age": 20, "score": 88}
```

`dumps()`方法返回一个 `str`，内容就是标准的 JSON。类似的，`dump()`方法可以直接把 JSON 写入一个 `file-like Object`。

要把 JSON 反序列化为 Python 对象，用 `loads()`或者对应的 `load()`方法，前者把 JSON 的字符串反序列化，后者从 `file-like Object` 中读取字符串并反序列化：

```python
import json
json_str = '{"age": 20, "name": "Bob", "score": 88}'
print(json.loads(json_str))
# {'age': 20, 'name': 'Bob', 'score': 88}
```

由于 JSON 标准规定 JSON 编码是 UTF-8，所以我们总是能正确地在 Python 的 `str` 与 JSON 的字符串之间转换。

**JSON 进阶**

Python 的 `dict` 对象可以直接序列化为 JSON 的`{}`，不过，很多时候，我们更喜欢用 `class` 表示对象，比如定义 `Student` 类，然后序列化：

```python
import json

class Student(object):
  def __init__(self, name, age, score):
    self.name = name
    self.age = age
    self.score = score

s = Student('Bob', 20, 88)
print(json.dumps(s))
```

运行代码，毫不留情地得到一个 `TypeError`：

```python
# Traceback (most recent call last):
#   ...
# TypeError: Object of type Student is not JSON serializable
```

错误的原因是 `Student` 对象不是一个可序列化为 JSON 的对象。如果连 `class` 的实例对象都无法序列化为 JSON，这肯定不合理！我们仔细看看 `dumps()`方法的参数列表，可以发现，除了第一个必须的 `obj` 参数外，`dumps()`方法还提供了一大堆的可选参数：[dumps](https://docs.python.org/zh-cn/3/library/json.html#json.dumps)

这些可选参数就是让我们来定制 JSON 序列化。前面的代码之所以无法把 `Student` 类实例序列化为 JSON，是因为默认情况下，`dumps()`方法不知道如何将 `Student` 实例变为一个 JSON 的`{}`对象。

可选参数 `default` 就是把任意一个对象变成一个可序列为 JSON 的对象，我们只需要为 `Student` 专门写一个转换函数，再把函数传进去即可：

```python
import json

class Student(object):
  def __init__(self, name, age, score):
    self.name = name
    self.age = age
    self.score = score

def student2dict(std):
  return {
    'name': std.name,
    'age': std.age,
    'score': std.score
  }

s = Student('Bob', 20, 88)
print(json.dumps(s, default=student2dict))
# {"name": "Bob", "age": 20, "score": 88}
```

`Student` 实例首先被 `student2dict()`函数转换成 `dict`，然后再被顺利序列化为 JSON。

不过，下次如果遇到一个 `Teacher` 类的实例，照样无法序列化为 JSON。我们可以偷个懒，把任意 `class` 的实例变为 `dict`：

```python
print(json.dumps(s, default=lambda obj: obj.__dict__))
```

因为通常 class 的实例都有一个`__dict__`属性，它就是一个`dict`，用来存储实例变量。也有少数例外，比如定义了`__slots__`的 class。

同样的道理，如果我们要把 JSON 反序列化为一个`Student`对象实例，`loads()`方法首先转换出一个`dict`对象，然后，我们传入的`object_hook`函数负责把`dict`转换为`Student`实例：

```python
import json

class Student(object):
  def __init__(self, name, age, score):
    self.name = name
    self.age = age
    self.score = score

def dict2student(d):
  return Student(d['name'], d['age'], d['score'])

json_str = '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str, object_hook=dict2student))
# <__main__.Student object at 0x0000026F5C5D1340>
```

打印出的是反序列化的 `Student` 实例对象。

## 12. 进程和线程

很多同学都听说过，现代操作系统比如 Mac OS X，UNIX，Linux，Windows 等，都是支持“多任务”的操作系统。

什么叫“多任务”呢？简单地说，就是操作系统可以同时运行多个任务。打个比方，你一边在用浏览器上网，一边在听 MP3，一边在用 Word 赶作业，这就是多任务，至少同时有 3 个任务正在运行。还有很多任务悄悄地在后台同时运行着，只是桌面上没有显示而已。

现在，多核 CPU 已经非常普及了，但是，即使过去的单核 CPU，也可以执行多任务。由于 CPU 执行代码都是顺序执行的，那么，单核 CPU 是怎么执行多任务的呢？

答案就是操作系统轮流让各个任务交替执行，任务 1 执行 0.01 秒，切换到任务 2，任务 2 执行 0.01 秒，再切换到任务 3，执行 0.01 秒……这样反复执行下去。表面上看，每个任务都是交替执行的，但是，由于 CPU 的执行速度实在是太快了，我们感觉就像所有任务都在同时执行一样。

真正的并行执行多任务只能在多核 CPU 上实现，但是，由于任务数量远远多于 CPU 的核心数量，所以，操作系统也会自动把很多任务轮流调度到每个核心上执行。

对于操作系统来说，一个任务就是一个进程（Process），比如打开一个浏览器就是启动一个浏览器进程，打开一个记事本就启动了一个记事本进程，打开两个记事本就启动了两个记事本进程，打开一个 Word 就启动了一个 Word 进程。

有些进程还不止同时干一件事，比如 Word，它可以同时进行打字、拼写检查、打印等事情。在一个进程内部，要同时干多件事，就需要同时运行多个“子任务”，我们把进程内的这些“子任务”称为线程（Thread）。

由于每个进程至少要干一件事，所以，一个进程至少有一个线程。当然，像 Word 这种复杂的进程可以有多个线程，多个线程可以同时执行，多线程的执行方式和多进程是一样的，也是由操作系统在多个线程之间快速切换，让每个线程都短暂地交替运行，看起来就像同时执行一样。当然，真正地同时执行多线程需要多核 CPU 才可能实现。

我们前面编写的所有的 Python 程序，都是执行单任务的进程，也就是只有一个线程。如果我们要同时执行多个任务怎么办？

有两种解决方案：

一种是启动多个进程，每个进程虽然只有一个线程，但多个进程可以一块执行多个任务。

还有一种方法是启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务。

当然还有第三种方法，就是启动多个进程，每个进程再启动多个线程，这样同时执行的任务就更多了，当然这种模型更复杂，实际很少采用。

总结一下就是，多任务的实现有 3 种方式：

- 多进程模式；
- 多线程模式；
- 多进程+多线程模式。

同时执行多个任务通常各个任务之间并不是没有关联的，而是需要相互通信和协调，有时，任务 1 必须暂停等待任务 2 完成后才能继续执行，有时，任务 3 和任务 4 又不能同时执行，所以，多进程和多线程的程序的复杂度要远远高于我们前面写的单进程单线程的程序。

因为复杂度高，调试困难，所以，不是迫不得已，我们也不想编写多任务。但是，有很多时候，没有多任务还真不行。想想在电脑上看电影，就必须由一个线程播放视频，另一个线程播放音频，否则，单线程实现的话就只能先把视频播放完再播放音频，或者先把音频播放完再播放视频，这显然是不行的。

Python 既支持多进程，又支持多线程，我们会讨论如何编写这两种多任务程序。

> 线程是最小的执行单元，而进程由至少一个线程组成。如何调度进程和线程，完全由操作系统决定，程序自己不能决定什么时候执行，执行多长时间。
>
> 多进程和多线程的程序涉及到同步、数据共享的问题，编写起来更复杂。

### 12.1 多进程

:::tip
要让 Python 程序实现多进程（multiprocessing），我们先了解操作系统的相关知识。

Unix/Linux 操作系统提供了一个`fork()`系统调用，它非常特殊。普通的函数调用，调用一次，返回一次，但是`fork()`调用一次，返回两次，因为操作系统自动把当前进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回。

子进程永远返回`0`，而父进程返回子进程的 ID。这样做的理由是，一个父进程可以 fork 出很多子进程，所以，父进程要记下每个子进程的 ID，而子进程只需要调用`getppid()`就可以拿到父进程的 ID。
:::

Python 的`os`模块封装了常见的系统调用，其中就包括`fork`，可以在 Python 程序中轻松创建子进程：

```python
import os
print('Process (%s) start...' % os.getpid())
# Process (876) start...
pid = os.fork()
if pid == 0:
  print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
else:
  print('I (%s) just created a child process (%s).' % (os.getpid(), pid))
# I (876) just created a child process (877).
# I am child process (877) and my parent is 876.
```

:::danger 提醒
由于 Windows 没有 fork 调用，上面的代码在 Windows 上无法运行。
:::

有了 `fork` 调用，一个进程在接到新任务时就可以复制出一个子进程来处理新任务，常见的 Apache 服务器就是由父进程监听端口，每当有新的 http 请求时，就 fork 出子进程来处理新的 http 请求。

#### 12.1.1 multiprocessing

如果你打算编写多进程的服务程序，Unix/Linux 无疑是正确的选择。由于 Windows 没有 `fork` 调用，难道在 Windows 上无法用 Python 编写多进程的程序？

由于 Python 是跨平台的，自然也应该提供一个跨平台的多进程支持。`multiprocessing` 模块就是跨平台版本的多进程模块。

`multiprocessing` 模块提供了一个 `Process` 类来代表一个进程对象，下面的例子演示了启动一个子进程并等待其结束：

```python
from multiprocessing import Process
import os

def run_proc(name):
  print('Child process %s (%s) running...' % (name, os.getpid()))

if __name__ == '__main__':
  print('Parent process %s.' % os.getpid())
  p = Process(target=run_proc, args=('test',))
  print('Child process will start.')
  p.start()
  p.join()
  print('Child process end.')
# Parent process 16340.
# Child process will start.
# Child process test (19276) running...
# Child process end.
```

创建子进程时，只需要传入一个执行函数和函数的参数，创建一个 `Process` 实例，用 `start()`方法启动，这样创建进程比 `fork()`还要简单。

`join()`方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步。

#### 12.1.2 Pool

如果要启动大量的子进程，可以用进程池的方式批量创建子进程：

```python
from multiprocessing import Pool
import os, time, random

def long_time_task(name):
  print('Run task %s (%s)...' % (name, os.getpid()))
  start = time.time()
  time.sleep(random.random() * 3)
  end = time.time()
  print('Task %s runs %0.2f seconds.' % (name, (end - start)))

if __name__ == '__main__':
  print('Parent process %s.' % os.getpid())
  p = Pool(4)
  for i in range(5):
    p.apply_async(long_time_task, args=(i,))
  print('Waiting for all subprocesses done...')
  p.close()
  p.join()
  print('All subprocesses done.')
# Parent process 18472.
# Waiting for all subprocesses done...
# Run task 0 (17964)...
# Run task 1 (4120)...
# Run task 2 (12928)...
# Run task 3 (12780)...
# Task 3 runs 0.03 seconds.
# Run task 4 (12780)...
# Task 1 runs 0.95 seconds.
# Task 2 runs 1.16 seconds.
# Task 4 runs 2.47 seconds.
# Task 0 runs 2.69 seconds.
# All subprocesses done.
```

:::tip 代码解读
对 `Pool` 对象调用 `join()`方法会等待所有子进程执行完毕，调用 `join()`之前必须先调用 `close()`，调用 `close()`之后就不能继续添加新的 `Process` 了。

请注意输出的结果，task `0`，`1`，`2`，`3` 是立刻执行的，而 task `4` 要等待前面某个 task 完成后才执行，这是因为 `Pool` 的默认大小在我的电脑上是 4，因此，最多同时执行 4 个进程。这是 `Pool` 有意设计的限制，并不是操作系统的限制。如果改成：

p = Pool(5)
就可以同时跑 5 个进程。

由于 `Pool` 的默认大小是 CPU 的核数，如果你不幸拥有 8 核 CPU，你要提交至少 9 个子进程才能看到上面的等待效果。
:::

#### 12.1.3 子进程

很多时候，子进程并不是自身，而是一个外部进程。我们创建了子进程后，还需要控制子进程的输入和输出。

`subprocess` 模块可以让我们非常方便地启动一个子进程，然后控制其输入和输出。

下面的例子演示了如何在 Python 代码中运行命令 `nslookup www.python.org`，这和命令行直接运行的效果是一样的：

```python
import subprocess

print('$ nslookup www.python.org')
r = subprocess.call(['nslookup', 'www.python.org'])
print('Exit code:', r)
# $ nslookup www.python.org
# 服务器:  locahost
# Address:  fe80::1
#
# 非权威应答:
# 名称:    dualstack.python.map.fastly.net
# Addresses:  2a04:4e42:8c::223
#           146.75.112.223
# Aliases:  www.python.org
#
# Exit code: 0
```

如果子进程还需要输入，则可以通过`communicate()`方法输入：

```python
import subprocess

print('$ nslookup')
p = subprocess.Popen(['nslookup'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
output, err = p.communicate(b'set q=mx\npython.org\nexit\n')
print(output.decode('gbk'))
print('Exit code:', p.returncode)
# $ nslookup
# 默认服务器:  locahost
# Address:  fe80::1
#
# > > 服务器:  locahost
# Address:  fe80::1
#
# python.org      MX preference = 50, mail exchanger = mail.python.org
# >
# Exit code: 0
```

#### 12.1.4 进程间通信

`Process` 之间肯定是需要通信的，操作系统提供了很多机制来实现进程间的通信。Python 的 `multiprocessing` 模块包装了底层的机制，提供了 `Queue`、`Pipes` 等多种方式来交换数据。

我们以 `Queue` 为例，在父进程中创建两个子进程，一个往 `Queue` 里写数据，一个从 `Queue` 里读数据：

```python
from multiprocessing import Process, Queue
import os, time, random

# 写数据进程执行的代码:
def write(q):
  print('Process to write: %s' % os.getpid())
  for value in ['A', 'B', 'C']:
    print('Put %s to queue...' % value)
    q.put(value)
    time.sleep(random.random())

# 读数据进程执行的代码:
def read(q):
  print('Process to read: %s' % os.getpid())
  while True:
    value = q.get(True)
    print('Get %s from queue.' % value)

if __name__=='__main__':
  # 父进程创建Queue，并传给各个子进程：
  q = Queue()
  pw = Process(target=write, args=(q,))
  pr = Process(target=read, args=(q,))
  # 启动子进程pw，写入:
  pw.start()
  # 启动子进程pr，读取:
  pr.start()
  # 等待pw结束:
  pw.join()
  # pr进程里是死循环，无法等待其结束，只能强行终止:
  pr.terminate()
# Process to write: 6616
# Put A to queue...
# Process to read: 11548
# Get A from queue.
# Put B to queue...
# Get B from queue.
# Put C to queue...
# Get C from queue.
```

在 Unix/Linux 下，`multiprocessing` 模块封装了 `fork()`调用，使我们不需要关注 `fork()`的细节。由于 Windows 没有 `fork` 调用，因此，`multiprocessing` 需要“模拟”出 `fork` 的效果，父进程所有 Python 对象都必须通过 pickle 序列化再传到子进程去，所以，如果 `multiprocessing` 在 Windows 下调用失败了，要先考虑是不是 pickle 失败了。

> 小结
>
> - 在 Unix/Linux 下，可以使用 `fork()`调用实现多进程。
> - 要实现跨平台的多进程，可以使用 `multiprocessing` 模块。
> - 进程间通信是通过 `Queue`、`Pipes` 等实现的。

### 12.2 多线程

:::tip 引子
多任务可以由多进程完成，也可以由一个进程内的多线程完成，一个进程至少有一个线程。

由于线程是操作系统直接支持的执行单元，因此，高级语言通常都内置多线程的支持，Python 也不例外，并且，Python 的线程是真正的 Posix Thread，而不是模拟出来的线程。

Python 的标准库提供了两个模块：`_thread`和`threading`，`_thread`是低级模块，`threading`是高级模块，对`_thread`进行了封装。绝大多数情况下，我们只需要使用`threading`这个高级模块。
:::

启动一个线程就是把一个函数传入并创建`Thread`实例，然后调用`start()`开始执行：

```python
import time, threading

# 新线程执行的代码:
def loop():
  print('thread %s is running...' % threading.current_thread().name)
  n = 0
  while n < 5:
    n = n + 1
    print('thread %s >>> %s' % (threading.current_thread().name, n))
    time.sleep(1)
  print('thread %s ended.' % threading.current_thread().name)

print('thread %s is running...' % threading.current_thread().name)
t = threading.Thread(target=loop, name='LoopThread')
t.start()
t.join()
print('thread %s ended.' % threading.current_thread().name)
# thread MainThread is running...
# thread LoopThread is running...
# thread LoopThread >>> 1
# thread LoopThread >>> 2
# thread LoopThread >>> 3
# thread LoopThread >>> 4
# thread LoopThread >>> 5
# thread LoopThread ended.
# thread MainThread ended.
```

由于任何进程默认就会启动一个线程，我们把该线程称为主线程，主线程又可以启动新的线程，Python 的`threading`模块有个`current_thread()`函数，它永远返回当前线程的实例。主线程实例的名字叫`MainThread`，子线程的名字在创建时指定，我们用`LoopThread`命名子线程。名字仅仅在打印时用来显示，完全没有其他意义，如果不起名字 Python 就自动给线程命名为`Thread-1`，`Thread-2`……

#### 12.2.1 Lock

多线程和多进程最大的不同在于，多进程中，同一个变量，各自有一份拷贝存在于每个进程中，互不影响，而多线程中，所有变量都由所有线程共享，所以，任何一个变量都可以被任何一个线程修改，因此，线程之间共享数据最大的危险在于多个线程同时改一个变量，把内容给改乱了。多个线程同时操作一个变量怎么把内容给改乱了：

```python
import time, threading

# 假定这是你的银行存款:
balance = 0

def change_it(n):
  # 先存后取，结果应该为0:
  global balance
  balance = balance + n
  balance = balance - n

def run_thread(n):
  for i in range(2000000):
    change_it(n)

t1 = threading.Thread(target=run_thread, args=(5,))
t2 = threading.Thread(target=run_thread, args=(8,))
t1.start()
t2.start()
t1.join()
t2.join()
print(balance)
# 0
```

我们定义了一个共享变量`balance`，初始值为`0`，并且启动两个线程，先存后取，理论上结果应该为`0`，但是，由于线程的调度是由操作系统决定的，当 t1、t2 交替执行时，只要循环次数足够多，`balance`的结果就不一定是 0 了。

原因是因为高级语言的一条语句在 CPU 执行时是若干条语句，即使一个简单的计算：

```python
balance = balance + n
```

也分两步：

1. 计算 balance + n，存入临时变量中；
2. 将临时变量的值赋给 balance。

也就是可以看成：

```python
x = balance + n
balance = x
```

由于 x 是局部变量，两个线程各自都有自己的 x，当代码正常执行时：

```python
初始值 balance = 0

t1: x1 = balance + 5 # x1 = 0 + 5 = 5
t1: balance = x1     # balance = 5
t1: x1 = balance - 5 # x1 = 5 - 5 = 0
t1: balance = x1     # balance = 0

t2: x2 = balance + 8 # x2 = 0 + 8 = 8
t2: balance = x2     # balance = 8
t2: x2 = balance - 8 # x2 = 8 - 8 = 0
t2: balance = x2     # balance = 0

结果 balance = 0
```

但是 t1 和 t2 是交替运行的，如果操作系统以下面的顺序执行 t1、t2：

```python
初始值 balance = 0

t1: x1 = balance + 5  # x1 = 0 + 5 = 5

t2: x2 = balance + 8  # x2 = 0 + 8 = 8
t2: balance = x2      # balance = 8

t1: balance = x1      # balance = 5
t1: x1 = balance - 5  # x1 = 5 - 5 = 0
t1: balance = x1      # balance = 0

t2: x2 = balance - 8  # x2 = 0 - 8 = -8
t2: balance = x2      # balance = -8

结果 balance = -8
```

究其原因，是因为修改 `balance` 需要多条语句，而执行这几条语句时，线程可能中断，从而导致多个线程把同一个对象的内容改乱了。

两个线程同时一存一取，就可能导致余额不对，你肯定不希望你的银行存款莫名其妙地变成了负数，所以，我们必须确保一个线程在修改 `balance` 的时候，别的线程一定不能改。

如果我们要确保 `balance` 计算正确，就要给 `change_it()`上一把锁，当某个线程开始执行 `change_it()`时，我们说，该线程因为获得了锁，因此其他线程不能同时执行 `change_it()`，只能等待，直到锁被释放后，获得该锁以后才能改。由于锁只有一个，无论多少线程，同一时刻最多只有一个线程持有该锁，所以，不会造成修改的冲突。创建一个锁就是通过 `threading.Lock()`来实现：

```python
import time, threading

# 假定这是你的银行存款:
balance = 0
lock = threading.Lock()

def change_it(n):
  # 先存后取，结果应该为0:
  global balance
  balance = balance + n
  balance = balance - n

def run_thread(n):
  for i in range(2000000):
    # 先要获取锁:
    lock.acquire()
    try:
      # 放心地改吧:
      change_it(n)
    finally:
      # 改完了一定要释放锁:
      lock.release()

t1 = threading.Thread(target=run_thread, args=(5,))
t2 = threading.Thread(target=run_thread, args=(8,))
t1.start()
t2.start()
t1.join()
t2.join()
print(balance)
# 0
```

当多个线程同时执行`lock.acquire()`时，只有一个线程能成功地获取锁，然后继续执行代码，其他线程就继续等待直到获得锁为止。

获得锁的线程用完后一定要释放锁，否则那些苦苦等待锁的线程将永远等待下去，成为死线程。所以我们用`try...finally`来确保锁一定会被释放。

锁的好处就是确保了某段关键代码只能由一个线程从头到尾完整地执行，坏处当然也很多，首先是阻止了多线程并发执行，包含锁的某段代码实际上只能以单线程模式执行，效率就大大地下降了。其次，由于可以存在多个锁，不同的线程持有不同的锁，并试图获取对方持有的锁时，可能会造成死锁，导致多个线程全部挂起，既不能执行，也无法结束，只能靠操作系统强制终止。

#### 12.2.2 多核 CPU

如果你不幸拥有一个多核 CPU，你肯定在想，多核应该可以同时执行多个线程。如果写一个死循环的话，会出现什么情况呢？

打开 Mac OS X 的 Activity Monitor，或者 Windows 的 Task Manager，都可以监控某个进程的 CPU 使用率。

我们可以监控到一个死循环线程会 100%占用一个 CPU。

如果有两个死循环线程，在多核 CPU 中，可以监控到会占用 200%的 CPU，也就是占用两个 CPU 核心。

要想把 N 核 CPU 的核心全部跑满，就必须启动 N 个死循环线程。

试试用 Python 写个死循环：

```python
import threading, multiprocessing

def loop():
  x = 0
  while True:
    x = x ^ 1

for i in range(multiprocessing.cpu_count()):
  t = threading.Thread(target=loop)
  t.start()
```

启动与 CPU 核心数量相同的 N 个线程，在 4 核 CPU 上可以监控到 CPU 占用率仅有 102%，也就是仅使用了一核。

但是用 C、C++或 Java 来改写相同的死循环，直接可以把全部核心跑满，4 核就跑到 400%，8 核就跑到 800%，为什么 Python 不行呢？

因为 Python 的线程虽然是真正的线程，但解释器执行代码时，有一个 GIL 锁：Global Interpreter Lock，任何 Python 线程执行前，必须先获得 GIL 锁，然后，每执行 100 条字节码，解释器就自动释放 GIL 锁，让别的线程有机会执行。这个 GIL 全局锁实际上把所有线程的执行代码都给上了锁，所以，多线程在 Python 中只能交替执行，即使 100 个线程跑在 100 核 CPU 上，也只能用到 1 个核。

GIL 是 Python 解释器设计的历史遗留问题，通常我们用的解释器是官方实现的 CPython，要真正利用多核，除非重写一个不带 GIL 的解释器。

所以，在 Python 中，可以使用多线程，但不要指望能有效利用多核。如果一定要通过多线程利用多核，那只能通过 C 扩展来实现，不过这样就失去了 Python 简单易用的特点。

不过，也不用过于担心，Python 虽然不能利用多线程实现多核任务，但可以通过多进程实现多核任务。多个 Python 进程有各自独立的 GIL 锁，互不影响。

> 小结
>
> - 多线程编程，模型复杂，容易发生冲突，必须用锁加以隔离，同时，又要小心死锁的发生。
> - Python 解释器由于设计时有 GIL 全局锁，导致了多线程无法利用多核。多线程的并发在 Python 中无法实现。

### 12.3 ThreadLocal

在多线程环境下，每个线程都有自己的数据。一个线程使用自己的局部变量比使用全局变量好，因为局部变量只有线程自己能看见，不会影响其他线程，而全局变量的修改必须加锁。

但是局部变量也有问题，就是在函数调用的时候，传递起来很麻烦：

```python
def process_student(name):
  std = Student(name)
  # std是局部变量，但是每个函数都要用它，因此必须传进去：
  do_task_1(std)
  do_task_2(std)

def do_task_1(std):
  do_subtask_1(std)
  do_subtask_2(std)

def do_task_2(std):
  do_subtask_2(std)
  do_subtask_2(std)
```

每个函数一层一层调用都这么传参数那还得了？用全局变量？也不行，因为每个线程处理不同的 `Student` 对象，不能共享。

如果用一个全局 `dict` 存放所有的 `Student` 对象，然后以 `thread` 自身作为 `key` 获得线程对应的 `Student` 对象如何？

```python
global_dict = {}

def std_thread(name):
  std = Student(name)
  # 把std放到全局变量global_dict中：
  global_dict[threading.current_thread()] = std
  do_task_1()
  do_task_2()

def do_task_1():
  # 不传入std，而是根据当前线程查找：
  std = global_dict[threading.current_thread()]
  ...

def do_task_2():
  # 任何函数都可以查找出当前线程的std变量：
  std = global_dict[threading.current_thread()]
  ...
```

这种方式理论上是可行的，它最大的优点是消除了 `std` 对象在每层函数中的传递问题，但是，每个函数获取 `std` 的代码有点丑。

有没有更简单的方式？

`ThreadLocal` 应运而生，不用查找 `dict`，`ThreadLocal` 帮你自动做这件事：

```python
import threading

# 创建全局ThreadLocal对象:
local_school = threading.local()

def process_student():
  # 获取当前线程关联的student:
  std = local_school.student
  print('Hello, %s (in %s)' % (std, threading.current_thread().name))

def process_thread(name):
  # 绑定ThreadLocal的student:
  local_school.student = name
  process_student()

t1 = threading.Thread(target= process_thread, args=('Alice',), name='Thread-A')
t2 = threading.Thread(target= process_thread, args=('Bob',), name='Thread-B')
t1.start()
t2.start()
t1.join()
t2.join()
# Hello, Alice (in Thread-A)
# Hello, Bob (in Thread-B)
```

全局变量 `local_school` 就是一个 `ThreadLocal` 对象，每个 `Thread` 对它都可以读写 `student` 属性，但互不影响。你可以把 `local_school` 看成全局变量，但每个属性如 `local_school.student` 都是线程的局部变量，可以任意读写而互不干扰，也不用管理锁的问题，`ThreadLocal` 内部会处理。

可以理解为全局变量 `local_school` 是一个 `dict`，不但可以用 `local_school.student`，还可以绑定其他变量，如 `local_school.teacher` 等等。

`ThreadLocal` 最常用的地方就是为每个线程绑定一个数据库连接，HTTP 请求，用户身份信息等，这样一个线程的所有调用到的处理函数都可以非常方便地访问这些资源。

> 小结
>
> 一个 `ThreadLocal` 变量虽然是全局变量，但每个线程都只能读写自己线程的独立副本，互不干扰。`ThreadLocal` 解决了参数在一个线程中各个函数之间互相传递的问题。

### 12.4 进程 vs. 线程

我们介绍了多进程和多线程，这是实现多任务最常用的两种方式。现在，我们来讨论一下这两种方式的优缺点。

首先，要实现多任务，通常我们会设计 Master-Worker 模式，Master 负责分配任务，Worker 负责执行任务，因此，多任务环境下，通常是一个 Master，多个 Worker。

如果用多进程实现 Master-Worker，主进程就是 Master，其他进程就是 Worker。

如果用多线程实现 Master-Worker，主线程就是 Master，其他线程就是 Worker。

多进程模式最大的优点就是稳定性高，因为一个子进程崩溃了，不会影响主进程和其他子进程。（当然主进程挂了所有进程就全挂了，但是 Master 进程只负责分配任务，挂掉的概率低）著名的 Apache 最早就是采用多进程模式。

多进程模式的缺点是创建进程的代价大，在 Unix/Linux 系统下，用 fork 调用还行，在 Windows 下创建进程开销巨大。另外，操作系统能同时运行的进程数也是有限的，在内存和 CPU 的限制下，如果有几千个进程同时运行，操作系统连调度都会成问题。

多线程模式通常比多进程快一点，但是也快不到哪去，而且，多线程模式致命的缺点就是任何一个线程挂掉都可能直接造成整个进程崩溃，因为所有线程共享进程的内存。在 Windows 上，如果一个线程执行的代码出了问题，你经常可以看到这样的提示：“该程序执行了非法操作，即将关闭”，其实往往是某个线程出了问题，但是操作系统会强制结束整个进程。

在 Windows 下，多线程的效率比多进程要高，所以微软的 IIS 服务器默认采用多线程模式。由于多线程存在稳定性的问题，IIS 的稳定性就不如 Apache。为了缓解这个问题，IIS 和 Apache 现在又有多进程+多线程的混合模式，真是把问题越搞越复杂。

**线程切换**

无论是多进程还是多线程，只要数量一多，效率肯定上不去，为什么呢？

我们打个比方，假设你不幸正在准备中考，每天晚上需要做语文、数学、英语、物理、化学这 5 科的作业，每项作业耗时 1 小时。

如果你先花 1 小时做语文作业，做完了，再花 1 小时做数学作业，这样，依次全部做完，一共花 5 小时，这种方式称为单任务模型，或者批处理任务模型。

假设你打算切换到多任务模型，可以先做 1 分钟语文，再切换到数学作业，做 1 分钟，再切换到英语，以此类推，只要切换速度足够快，这种方式就和单核 CPU 执行多任务是一样的了，以幼儿园小朋友的眼光来看，你就正在同时写 5 科作业。

但是，切换作业是有代价的，比如从语文切到数学，要先收拾桌子上的语文书本、钢笔（这叫保存现场），然后，打开数学课本、找出圆规直尺（这叫准备新环境），才能开始做数学作业。操作系统在切换进程或者线程时也是一样的，它需要先保存当前执行的现场环境（CPU 寄存器状态、内存页等），然后，把新任务的执行环境准备好（恢复上次的寄存器状态，切换内存页等），才能开始执行。这个切换过程虽然很快，但是也需要耗费时间。如果有几千个任务同时进行，操作系统可能就主要忙着切换任务，根本没有多少时间去执行任务了，这种情况最常见的就是硬盘狂响，点窗口无反应，系统处于假死状态。

所以，多任务一旦多到一个限度，就会消耗掉系统所有的资源，结果效率急剧下降，所有任务都做不好。

**计算密集型 vs. IO 密集型**

是否采用多任务的第二个考虑是任务的类型。我们可以把任务分为计算密集型和 IO 密集型。

计算密集型任务的特点是要进行大量的计算，消耗 CPU 资源，比如计算圆周率、对视频进行高清解码等等，全靠 CPU 的运算能力。这种计算密集型任务虽然也可以用多任务完成，但是任务越多，花在任务切换的时间就越多，CPU 执行任务的效率就越低，所以，要最高效地利用 CPU，计算密集型任务同时进行的数量应当等于 CPU 的核心数。

计算密集型任务由于主要消耗 CPU 资源，因此，代码运行效率至关重要。Python 这样的脚本语言运行效率很低，完全不适合计算密集型任务。对于计算密集型任务，最好用 C 语言编写。

第二种任务的类型是 IO 密集型，涉及到网络、磁盘 IO 的任务都是 IO 密集型任务，这类任务的特点是 CPU 消耗很少，任务的大部分时间都在等待 IO 操作完成（因为 IO 的速度远远低于 CPU 和内存的速度）。对于 IO 密集型任务，任务越多，CPU 效率越高，但也有一个限度。常见的大部分任务都是 IO 密集型任务，比如 Web 应用。

IO 密集型任务执行期间，99%的时间都花在 IO 上，花在 CPU 上的时间很少，因此，用运行速度极快的 C 语言替换用 Python 这样运行速度极低的脚本语言，完全无法提升运行效率。对于 IO 密集型任务，最合适的语言就是开发效率最高（代码量最少）的语言，脚本语言是首选，C 语言最差。

**异步 IO**

考虑到 CPU 和 IO 之间巨大的速度差异，一个任务在执行的过程中大部分时间都在等待 IO 操作，单进程单线程模型会导致别的任务无法并行执行，因此，我们才需要多进程模型或者多线程模型来支持多任务并发执行。

现代操作系统对 IO 操作已经做了巨大的改进，最大的特点就是支持异步 IO。如果充分利用操作系统提供的异步 IO 支持，就可以用单进程单线程模型来执行多任务，这种全新的模型称为事件驱动模型，Nginx 就是支持异步 IO 的 Web 服务器，它在单核 CPU 上采用单进程模型就可以高效地支持多任务。在多核 CPU 上，可以运行多个进程（数量与 CPU 核心数相同），充分利用多核 CPU。由于系统总的进程数量十分有限，因此操作系统调度非常高效。用异步 IO 编程模型来实现多任务是一个主要的趋势。

对应到 Python 语言，单线程的异步编程模型称为协程，有了协程的支持，就可以基于事件驱动编写高效的多任务程序。我们会在后面讨论如何编写协程。

### 12.5 分布式进程

在 Thread 和 Process 中，应当优选 Process，因为 Process 更稳定，而且，Process 可以分布到多台机器上，而 Thread 最多只能分布到同一台机器的多个 CPU 上。

Python 的 `multiprocessing` 模块不但支持多进程，其中 `managers` 子模块还支持把多进程分布到多台机器上。一个服务进程可以作为调度者，将任务分布到其他多个进程中，依靠网络通信。由于 `managers` 模块封装很好，不必了解网络通信的细节，就可以很容易地编写分布式多进程程序。

举个例子：如果我们已经有一个通过 `Queue` 通信的多进程程序在同一台机器上运行，现在，由于处理任务的进程任务繁重，希望把发送任务的进程和处理任务的进程分布到两台机器上。怎么用分布式进程实现？

原有的 `Queue` 可以继续使用，但是，通过 `managers` 模块把 `Queue` 通过网络暴露出去，就可以让其他机器的进程访问 `Queue` 了。

## 13. 正则表达式

:::tip 引子
字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取`@`前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。

正则表达式是一种用来匹配字符串的强有力的武器。它的设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的。

所以我们判断一个字符串是否是合法的 Email 的方法是：

1. 创建一个匹配 Email 的正则表达式；
2. 用该正则表达式去匹配用户的输入来判断是否合法。

因为正则表达式也是用字符串表示的，所以，我们要首先了解如何用字符来描述字符。
:::

在正则表达式中，如果直接给出字符，就是精确匹配。用`\d`可以匹配一个数字，`\w`可以匹配一个字母或数字，所以：

- `'00\d'`可以匹配`'007'`，但无法匹配`'00A'`；
- `'\d\d\d'`可以匹配`'010'`；
- `'\w\w\d'`可以匹配`'py3'`；
- `.`可以匹配任意字符，所以：`'py.'`可以匹配`'pyc'`、`'pyo'`、`'py!'`等等。

要匹配变长的字符，在正则表达式中，用`*`表示任意个字符（包括 0 个），用`+`表示至少一个字符，用`?`表示 0 个或 1 个字符，用`{n}`表示 n 个字符，用`{n,m}`表示 n-m 个字符：

来看一个复杂的例子：`\d{3}\s+\d{3,8}`。

我们来从左到右解读一下：

- `\d{3}`表示匹配 3 个数字，例如`'010'`；
- `\s`可以匹配一个空格（也包括 Tab 等空白符），所以`\s+`表示至少有一个空格，例如匹配`' '`等；
- `\d{3,8}`表示 3-8 个数字，例如`'1234567'`。

综合起来，上面的正则表达式可以匹配以任意个空格隔开的带区号的电话号码。如果要匹配`'010-12345'`这样的号码呢？由于`'-'`是特殊字符，在正则表达式中，要用`'\'`转义，所以，上面的正则是`\d{3}\-\d{3,8}`。但是，仍然无法匹配`'010 - 12345'`，因为带有空格。所以我们需要更复杂的匹配方式。

1. 进阶

   要做更精确地匹配，可以用`[]`表示范围，比如：

   - `[0-9a-zA-Z\_]`可以匹配一个数字、字母或者下划线；
   - `[0-9a-zA-Z\_]`+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如`'a100'`，`'0_Z'`，`'Py3000'`等等；
   - `[a-zA-Z\_][0-9a-zA-Z\_]*`可以匹配由字母或下划线开头，后接任意个由一个数字、字母或者下划线组成的字符串，也就是 Python 合法的变量；
   - `[a-zA-Z\_][0-9a-zA-Z\_]{0, 19}`更精确地限制了变量的长度是 1-20 个字符（前面 1 个字符+后面最多 19 个字符）。

   `A|B`可以匹配 A 或 B，所以`(P|p)ython`可以匹配`'Python'`或者`'python'`。

   `^`表示行的开头，`^\d`表示必须以数字开头。

   `$`表示行的结束，`\d$`表示必须以数字结束。

   你可能注意到了，`py`也可以匹配`'python'`，但是加上`^py$`就变成了整行匹配，就只能匹配`'py'`了。

2. re 模块

   有了准备知识，我们就可以在 Python 中使用正则表达式了。Python 提供`re`模块，包含所有正则表达式的功能。由于 Python 的字符串本身也用`\`转义，所以要特别注意：

   ```python
   s = 'ABC\\-001' # Python的字符串
   # 对应的正则表达式字符串变成：
   # 'ABC\-001'
   ```

   因此我们强烈建议使用 Python 的`r`前缀，就不用考虑转义的问题了：

   ```python
   s = r'ABC\-001' # Python的字符串
   # 对应的正则表达式字符串不变：
   # 'ABC\-001'
   ```

   先看看如何判断正则表达式是否匹配：

   ```python
   import re
   print(re.match(r'^\d{3}\-\d{3,8}$','010-12345'))
   # <re.Match object; span=(0, 9), match='010-12345'>
   ```

   `match()`方法判断是否匹配，如果匹配成功，返回一个`Match`对象，否则返回`None`。常见的判断方法就是：

   ```python
   import re

   test = '用户输入的字符串'
   if re.match(r'正则表达式', test):
     print('ok')
   else:
     print('failed')
   ```

3. 切分字符串

   用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码：

   ```python
   print('a b   c'.split(' '))
   # ['a', 'b', '', '', 'c']
   ```

   嗯，无法识别连续的空格，用正则表达式试试：

   ```python
   import re
   print(re.split(r'\s+', 'a b   c'))
   # ['a', 'b', 'c']
   ```

   无论多少个空格都可以正常分割。加入`,`试试：

   ```python
   import re
   print(re.split(r'[\s\,]+', 'a,b, c  d'))
   # ['a', 'b', 'c', 'd']
   ```

   再加入`;`试试：

   ```python
   import re
   print(re.split(r'[\s\,\;]+', 'a,b;; c  d'))
   # ['a', 'b', 'c', 'd']
   ```

   如果用户输入了一组标签，下次记得用正则表达式来把不规范的输入转化成正确的数组。

4. 分组

   除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。用`()`表示的就是要提取的分组（Group）。比如：

   `^(\d{3})-(\d{3,8})$`分别定义了两个组，可以直接从匹配的字符串中提取出区号和本地号码：

   ```python
   import re
   m = re.match(r'^(\d{3})-(\d{3,8})$', '010-12345')
   print(m)
   # <_sre.SRE_Match object; span=(0, 9), match='010-12345'>
   print(m.group(0))
   # '010-12345'
   print(m.group(1))
   # '010'
   print(m.group(2))
   # '12345'
   ```

   如果正则表达式中定义了组，就可以在`Match`对象上用`group()`方法提取出子串来。

   注意到`group(0)`永远是与整个正则表达式相匹配的字符串，`group(1)`、`group(2)`……表示第 1、2、……个子串。

   提取子串非常有用。来看一个更凶残的例子：

   ```python
   import re
   t = '19:05:30'
   m = re.match(r'^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$', t)
   print(m.groups())
   # ('19', '05', '30')
   ```

   这个正则表达式可以直接识别合法的时间。但是有些时候，用正则表达式也无法做到完全验证，比如识别日期：

   ```python
   '^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$'
   ```

   对于`'2-30'`，`'4-31'`这样的非法日期，用正则还是识别不了，或者说写出来非常困难，这时就需要程序配合识别了。

5. 贪婪匹配

   最后需要特别指出的是，正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的`0`：

   ```python
   import re
   print(re.match(r'^(\d+)(0*)$', '102300').groups())
   # ('102300', '')
   ```

   由于`\d+`采用贪婪匹配，直接把后面的`0`全部匹配了，结果`0*`只能匹配空字符串了。

   必须让`\d+`采用非贪婪匹配（也就是尽可能少匹配），才能把后面的`0`匹配出来，加个`?`就可以让`\d+`采用非贪婪匹配：

   ```python
   import re
   print(re.match(r'^(\d+?)(0*)$', '102300').groups())
   # ('1023', '00')
   ```

6. 编译

   当我们在 Python 中使用正则表达式时，re 模块内部会干两件事情：

   编译正则表达式，如果正则表达式的字符串本身不合法，会报错；

   用编译后的正则表达式去匹配字符串。

   如果一个正则表达式要重复使用几千次，出于效率的考虑，我们可以预编译该正则表达式，接下来重复使用时就不需要编译这个步骤了，直接匹配：

   ```python
   import re
   # 编译:
   re_telephone = re.compile(r'^(\d{3})-(\d{3,8})$')
   # 使用：
   print(re_telephone.match('010-12345').groups())
   # ('010', '12345')
   print(re_telephone.match('010-8086').groups())
   # ('010', '8086')
   ```

   编译后生成 Regular Expression 对象，由于该对象自己包含了正则表达式，所以调用对应的方法时不用给出正则字符串。

## 14. 常用内建模块

Python 之所以自称“batteries included”，就是因为内置了许多非常有用的模块，无需额外安装和配置，即可直接使用。

### 14.1 datetime

datetime 是 Python 处理日期和时间的标准库。

#### 14.1.1 获取当前日期和时间

```python
from datetime import datetime
now = datetime.now()
print(now)
# 2024-03-24 21:24:22.103949
print(type(now))
# <class 'datetime.datetime'>
```

注意到`datetime`是模块，`datetime`模块还包含一个`datetime`类，通过`from datetime import datetime`导入的才是`datetime`这个类。

如果仅导入`import datetime`，则必须引用全名`datetime.datetime`。

`datetime.now()`返回当前日期和时间，其类型是`datetime`。

#### 14.1.2 获取指定日期和时间

要指定某个日期和时间，我们直接用参数构造一个 datetime：

```python
from datetime import datetime
dt = datetime(2015, 4, 19, 12, 20)
print(dt)
# 2015-04-19 12:20:00
```

#### 14.1.3 datetime 转换为 timestamp

在计算机中，时间实际上是用数字表示的。我们把 1970 年 1 月 1 日 00:00:00 UTC+00:00 时区的时刻称为 epoch time，记为`0`（1970 年以前的时间 timestamp 为负数），当前时间就是相对于 epoch time 的秒数，称为 timestamp。

你可以认为：

```python
timestamp = 0 = 1970-1-1 00:00:00 UTC+0:00
```

对应的北京时间是：

```python
timestamp = 0 = 1970-1-1 08:00:00 UTC+8:00
```

可见 timestamp 的值与时区毫无关系，因为 timestamp 一旦确定，其 UTC 时间就确定了，转换到任意时区的时间也是完全确定的，这就是为什么计算机存储的当前时间是以 timestamp 表示的，因为全球各地的计算机在任意时刻的 timestamp 都是完全相同的（假定时间已校准）。

把一个 `datetime` 类型转换为 timestamp 只需要简单调用 `timestamp()`方法：

```python
from datetime import datetime
dt = datetime(2015, 4, 19, 12, 20)
print(dt.timestamp())
# 1429417200.0
```

注意 Python 的 timestamp 是一个浮点数，整数位表示秒。

某些编程语言（如 Java 和 JavaScript）的 timestamp 使用整数表示毫秒数，这种情况下只需要把 timestamp 除以 1000 就得到 Python 的浮点表示方法。

#### 14.1.4 timestamp 转换为 datetime

要把 timestamp 转换为`datetime`，使用`datetime`提供的`fromtimestamp()`方法：

```python
from datetime import datetime
t = 1429417200.0
print(datetime.fromtimestamp(t))
# 2015-04-19 12:20:00
```

注意到 timestamp 是一个浮点数，它没有时区的概念，而 datetime 是有时区的。上述转换是在 timestamp 和本地时间做转换。

本地时间是指当前操作系统设定的时区。例如北京时区是东 8 区，则本地时间：

```python
# 2015-04-19 12:20:00
```

实际上就是 UTC+8:00 时区的时间：

```python
# 2015-04-19 12:20:00 UTC+8:00
```

而此刻的格林威治标准时间与北京时间差了 8 小时，也就是 UTC+0:00 时区的时间应该是：

```python
# 2015-04-19 04:20:00 UTC+0:00
```

timestamp 也可以直接被转换到 UTC 标准时区的时间：

```python
from datetime import datetime, timezone
t = 1429417200.0
print(datetime.fromtimestamp(t))
# 2015-04-19 12:20:00
print(datetime.fromtimestamp(t, tz=timezone.utc))
# 2015-04-19 04:20:00+00:00
```

#### 14.1.5 str 转换为 datetime

很多时候，用户输入的日期和时间是字符串，要处理日期和时间，首先必须把 str 转换为 datetime。转换方法是通过`datetime.strptime()`实现，需要一个日期和时间的格式化字符串：

```python
from datetime import datetime
cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
print(cday)
# 2015-06-01 18:19:59
```

字符串`'%Y-%m-%d %H:%M:%S'`规定了日期和时间部分的格式。详细的说明请参考[Python 文档](https://docs.python.org/zh-cn/3/library/datetime.html#strftime-strptime-behavior)。

注意转换后的 datetime 是没有时区信息的。

#### 14.1.6 datetime 转换为 str

如果已经有了 datetime 对象，要把它格式化为字符串显示给用户，就需要转换为 str，转换方法是通过`strftime()`实现的，同样需要一个日期和时间的格式化字符串：

```python
from datetime import datetime
now = datetime.now()
print(now.strftime('%Y-%m-%d %H:%M:%S'))
# 2024-03-24 22:11:24
print(now.strftime('%a, %b %d %H:%M'))
# Sun, Mar 24 22:11
```

#### 14.1.7 datetime 加减

对日期和时间进行加减实际上就是把 datetime 往后或往前计算，得到新的 datetime。加减可以直接用`+`和`-`运算符，不过需要导入`timedelta`这个类：

```python
from datetime import datetime, timedelta
now = datetime.now()
print(now)
# 2024-03-24 22:16:25.262783
print(now + timedelta(hours=10))
# 2024-03-25 08:16:25.262783
print(now - timedelta(days=1))
# 2024-03-23 22:16:25.262783
print(now + timedelta(days=2, hours=12))
# 2024-03-27 10:16:25.262783
```

可见，使用`timedelta`你可以很容易地算出前几天和后几天的时刻。

#### 14.1.8 本地时间转换为 UTC 时间

本地时间是指系统设定时区的时间，例如北京时间是 UTC+8:00 时区的时间，而 UTC 时间指 UTC+0:00 时区的时间。

一个`datetime`类型有一个时区属性`tzinfo`，但是默认为`None`，所以无法区分这个`datetime`到底是哪个时区，除非强行给`datetime`设置一个时区：

```python
from datetime import datetime, timedelta, timezone
tz_utc_8 = timezone(timedelta(hours=8))
now = datetime.now()
print(now)
# 2024-03-24 22:20:14.930211
dt = now.replace(tzinfo=tz_utc_8)
print(dt)
# 2024-03-24 22:20:14.930211+08:00
```

如果系统时区恰好是 UTC+8:00，那么上述代码就是正确的，否则，不能强制设置为 UTC+8:00 时区。

#### 14.1.9 时区转换

我们可以先通过`utcnow()`拿到当前的 UTC 时间，再转换为任意时区的时间：

```python
# 拿到UTC时间，并强制设置时区为UTC+0:00:
from datetime import datetime, timedelta, timezone
utc_dt = datetime.now(timezone.utc).replace(tzinfo=timezone.utc)
print(utc_dt)
# 2024-03-24 14:35:28.988413+00:00
# astimezone()将转换时区为北京时间:
bj_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
print(bj_dt)
# 2024-03-24 22:35:28.988413+08:00
# astimezone()将转换时区为东京时间:
tokyo_dt = utc_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt)
# 2024-03-24 23:35:28.988413+09:00
# astimezone()将bj_dt转换时区为东京时间:
tokyo_dt2 = bj_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt2)
# 2024-03-24 23:35:28.988413+09:00
```

时区转换的关键在于，拿到一个 `datetime` 时，要获知其正确的时区，然后强制设置时区，作为基准时间。利用带时区的 `datetime`，通过 `astimezone()`方法，可以转换到任意时区。

注：不是必须从 UTC+0:00 时区转换到其他时区，任何带时区的 `datetime` 都可以正确转换，例如上述 `bj_dt` 到 `tokyo_dt` 的转换。

### 14.2 collections

collections 是 Python 内建的一个集合模块，提供了许多有用的集合类。

#### 14.2.1 namedtuple

我们知道 `tuple` 可以表示不变集合，例如，一个点的二维坐标就可以表示成：

```python
p = (1, 2)
```

但是，看到`(1, 2)`，很难看出这个 `tuple` 是用来表示一个坐标的。

定义一个 class 又小题大做了，这时，`namedtuple` 就派上了用场：

```python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p.y)
# 1 2
print(p[0], p[1])
# 1 2
```

`namedtuple` 是一个函数，它用来创建一个自定义的 `tuple` 对象，并且规定了 `tuple` 元素的个数，并可以用属性而不是索引来引用 `tuple` 的某个元素。

这样一来，我们用 `namedtuple` 可以很方便地定义一种数据类型，它具备 tuple 的不变性，又可以根据属性来引用，使用十分方便。

可以验证创建的 `Point` 对象是 `tuple` 的一种子类：

```python
print(isinstance(p, Point))
# True
print(isinstance(p, tuple))
# True
```

类似的，如果要用坐标和半径表示一个圆，也可以用`namedtuple`定义：

```python
# namedtuple('名称', [属性list]):
Circle = namedtuple('Circle', ['x', 'y', 'r'])
```

#### 14.2.2 deque

使用`list`存储数据时，按索引访问元素很快，但是插入和删除元素就很慢了，因为`list`是线性存储，数据量大的时候，插入和删除效率很低。

deque 是为了高效实现插入和删除操作的双向列表，适合用于队列和栈：

```python
from collections import deque
q = deque(['a', 'b', 'c'])
q.append('x')
q.appendleft('y')
print(q)
# deque(['y', 'a', 'b', 'c', 'x'])
```

`deque`除了实现 list 的`append()`和`pop()`外，还支持`appendleft()`和`popleft()`，这样就可以非常高效地往头部添加或删除元素。

#### 14.2.3 defaultdict

使用`dict`时，如果引用的 Key 不存在，就会抛出`KeyError`。如果希望 key 不存在时，返回一个默认值，就可以用`defaultdict`：

```python
from collections import defaultdict
dd = defaultdict(lambda: 'N/A')
dd['key1'] = 'abc'
print(dd['key1'])
# 'abc'
print(dd['key2'])
# 'N/A'
print(isinstance(dd, defaultdict))
# True
print(isinstance(dd, dict))
# True
```

注意默认值是调用函数返回的，而函数在创建`defaultdict`对象时传入。

除了在 Key 不存在时返回默认值，`defaultdict`的其他行为跟`dict`是完全一样的。

#### 14.2.4 OrderedDict

使用`dict`时，Key 是无序的。在对`dict`做迭代时，我们无法确定 Key 的顺序。

如果要保持 Key 的顺序，可以用`OrderedDict`：

```python
from collections import OrderedDict
d = dict([('a', 1), ('b', 2), ('c', 3)])
print(d) # dict的Key是无序的
# {'a': 1, 'c': 3, 'b': 2}
od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])
print(od) # OrderedDict的Key是有序的
# OrderedDict([('a', 1), ('b', 2), ('c', 3)])
```

注意，`OrderedDict`的 Key 会按照插入的顺序排列，不是 Key 本身排序：

```python
from collections import OrderedDict
od = OrderedDict()
od['z'] = '1'
od['y'] = '2'
od['x'] = '3'
print(od)
# OrderedDict({'z': '1', 'y': '2', 'x': '3'})
print(od.keys())
# odict_keys(['z', 'y', 'x'])
print(list(od.keys()))
# ['z', 'y', 'x']
```

`OrderedDict`可以实现一个 FIFO（先进先出）的 dict，当容量超出限制时，先删除最早添加的 Key：

```python
from collections import OrderedDict
class LastUpdatedOrderedDict(OrderedDict):

  def __init__(self, capacity):
    super(LastUpdatedOrderedDict, self).__init__()
    self._capacity = capacity

  def __setitem__(self, key, value):
    containsKey = 1 if key in self else 0
    if len(self) - containsKey >= self._capacity:
      last = self.popitem(last=False)
      print('remove:', last)
    if containsKey:
      del self[key]
      print('set:', (key, value))
    else:
      print('add:', (key, value))
    OrderedDict.__setitem__(self, key, value)
```

#### 14.2.5 ChainMap

`ChainMap`可以把一组`dict`串起来并组成一个逻辑上的`dict`。`ChainMap`本身也是一个 dict，但是查找的时候，会按照顺序在内部的 dict 依次查找。

什么时候使用`ChainMap`最合适？举个例子：应用程序往往都需要传入参数，参数可以通过命令行传入，可以通过环境变量传入，还可以有默认参数。我们可以用`ChainMap`实现参数的优先级查找，即先查命令行参数，如果没有传入，再查环境变量，如果没有，就使用默认参数。

下面的代码演示了如何查找`user`和`color`这两个参数：

```python
from collections import ChainMap
import os, argparse

# 构造缺省参数:
defaults = {
  'color': 'red',
  'user': 'guest'
}

# 构造命令行参数:
parser = argparse.ArgumentParser()
parser.add_argument('-u', '--user')
parser.add_argument('-c', '--color')
namespace = parser.parse_args()
command_line_args = { k: v for k, v in vars(namespace).items() if v }

# 组合成ChainMap:
combined = ChainMap(command_line_args, os.environ, defaults)

# 打印参数:
print('color=%s' % combined['color'])
print('user=%s' % combined['user'])
```

没有任何参数时，打印出默认参数：

```sh
$ python use_chainmap.py
color=red
user=guest
```

当传入命令行参数时，优先使用命令行参数：

```sh
$ python use_chainmap.py -u bob -c green
color=green
user=bob
```

#### 14.2.6 Counter

`Counter`是一个简单的计数器，例如，统计字符出现的个数：

```python
from collections import Counter
c = Counter()
for ch in 'programming':
    c[ch] = c[ch] + 1
print(c)
# Counter({'r': 2, 'g': 2, 'm': 2, 'p': 1, 'o': 1, 'a': 1, 'i': 1, 'n': 1})
c.update('hello') # 也可以一次性update
print(c)
# Counter({'r': 2, 'o': 2, 'g': 2, 'm': 2, 'l': 2, 'p': 1, 'a': 1, 'i': 1, 'n': 1, 'h': 1, 'e': 1})
```

`Counter`实际上也是`dict`的一个子类，上面的结果可以看出每个字符出现的次数。

### 14.3 argparse

在命令行程序中，经常需要获取命令行参数。Python 内置的`sys.argv`保存了完整的参数列表，我们可以从中解析出需要的参数：

```python
import sys
print(sys.argv)
# ['*.py']
```

运行上述 copy.py，并传入参数，打印如下：

```
['copy.py', 'source.txt', 'copy.txt']
```

这种方式能应付简单的参数，但参数稍微复杂点，比如可以使用`-d`复制目录，使用`--filename *.py`过滤文件名等，解析起来就非常麻烦。

为了简化参数解析，我们可以使用内置的[argparse](https://docs.python.org/zh-cn/3/library/argparse.html)库，定义好各个参数类型后，它能直接返回有效的参数。

假设我们想编写一个备份 MySQL 数据库的命令行程序，需要输入的参数如下：

- host 参数：表示 MySQL 主机名或 IP，不输入则默认为`localhost`；
- port 参数：表示 MySQL 的端口号，int 类型，不输入则默认为`3306`；
- user 参数：表示登录 MySQL 的用户名，必须输入；
- password 参数：表示登录 MySQL 的口令，必须输入；
- gz 参数：表示是否压缩备份文件，不输入则默认为`False`；
- outfile 参数：表示备份文件保存在哪，必须输入。

其中，`outfile`是位置参数，而其他则是类似`--user root`这样的“关键字”参数。

用 argparse 来解析参数，一个完整的示例如下：

```python
# backup.py
import argparse

def main():
  # 定义一个ArgumentParser实例:
  parser = argparse.ArgumentParser(
    prog='backup', # 程序名
    description='Backup MySQL database.', # 描述
    epilog='Copyright(r), 2023' # 说明信息
  )
  # 定义位置参数:
  parser.add_argument('outfile')
  # 定义关键字参数:
  parser.add_argument('--host', default='localhost')
  # 此参数必须为int类型:
  parser.add_argument('--port', default='3306', type=int)
  # 允许用户输入简写的-u:
  parser.add_argument('-u', '--user', required=True)
  parser.add_argument('-p', '--password', required=True)
  parser.add_argument('--database', required=True)
  # gz参数不跟参数值，因此指定action='store_true'，意思是出现-gz表示True:
  parser.add_argument('-gz', '--gzcompress', action='store_true', required=False, help='Compress backup files by gz.')

  # 解析参数:
  args = parser.parse_args()

  # 打印参数:
  print('parsed args:')
  print(f'outfile = {args.outfile}')
  print(f'host = {args.host}')
  print(f'port = {args.port}')
  print(f'user = {args.user}')
  print(f'password = {args.password}')
  print(f'database = {args.database}')
  print(f'gzcompress = {args.gzcompress}')

if __name__ == '__main__':
  main()
```

输入有效的参数，则程序能解析出所需的所有参数：

```sh
$ python backup.py -u root -p 123456 -d testdb backup.sql
parsed args:
outfile = backup.sql
host = localhost
port = 3306
user = root
password = 123456
database = testdb
gzcompress = False
```

缺少必要的参数，或者参数不对，将报告详细的错误信息：

```sh
$ python 19.py -d testdb backup.sql
usage: backup [-h] [--host HOST] [--port PORT] -u USER -p PASSWORD -d DATABASE [-gz] outfile
backup: error: the following arguments are required: -u/--user, -p/--password
```

更神奇的是，如果输入-h，则打印帮助信息：

```sh
$ python 19.py -h
usage: backup [-h] [--host HOST] [--port PORT] -u USER -p PASSWORD -d DATABASE [-gz] outfile

Backup MySQL database.

positional arguments:
  outfile

options:
  -h, --help            show this help message and exit
  --host HOST
  --port PORT
  -u USER, --user USER
  -p PASSWORD, --password PASSWORD
  -d DATABASE, --database DATABASE
  -gz, --gzcompress     Compress backup files by gz.

Copyright(r), 2023
```

获取有效参数的代码实际上是这一行：

```python
args = parser.parse_args()
```

我们不必捕获异常，`parse_args()`非常方便的一点在于，如果参数有问题，则它打印出错误信息后，结束进程；如果参数是`-h`，则它打印帮助信息后，结束进程。只有当参数全部有效时，才会返回一个[NameSpace](https://docs.python.org/zh-cn/3/library/argparse.html#argparse.Namespace)对象，获取对应的参数就把参数名当作属性获取，非常方便。

可见，使用`argparse`后，解析参数的工作被大大简化了，我们可以专注于定义参数，然后直接获取到有效的参数输入。

### 14.4 base64

Base64 是一种用 64 个字符来表示任意二进制数据的方法。

用记事本打开`exe`、`jpg`、`pdf`这些文件时，我们都会看到一大堆乱码，因为二进制文件包含很多无法显示和打印的字符，所以，如果要让记事本这样的文本处理软件能处理二进制数据，就需要一个二进制到字符串的转换方法。Base64 是一种最常见的二进制编码方法。

Base64 的原理很简单，首先，准备一个包含 64 个字符的数组：

```python
['A', 'B', 'C', ... 'a', 'b', 'c', ... '0', '1', ... '+', '/']
```

然后，对二进制数据进行处理，每 3 个字节一组，一共是 `3x8=24`bit，划为 4 组，每组正好 6 个 bit：

![1711372813837](/images/1711372813837.jpg){data-zoomable}

这样我们得到 4 个数字作为索引，然后查表，获得相应的 4 个字符，就是编码后的字符串。

所以，Base64 编码会把 3 字节的二进制数据编码为 4 字节的文本数据，长度增加 33%，好处是编码后的文本数据可以在邮件正文、网页等直接显示。

如果要编码的二进制数据不是 3 的倍数，最后会剩下 1 个或 2 个字节怎么办？Base64 用`\x00`字节在末尾补足后，再在编码的末尾加上 1 个或 2 个`=`号，表示补了多少字节，解码的时候，会自动去掉。

Python 内置的`base64`可以直接进行 base64 的编解码：

```python
import base64
print(base64.b64encode(b'binary\x00string'))
# b'YmluYXJ5AHN0cmluZw=='
print(base64.b64decode(b'YmluYXJ5AHN0cmluZw=='))
# b'binary\x00string'
```

由于标准的 Base64 编码后可能出现字符`+`和`/`，在 URL 中就不能直接作为参数，所以又有一种"url safe"的 base64 编码，其实就是把字符`+`和`/`分别变成`-`和`_`：

```python
import base64
print(base64.b64encode(b'i\xb7\x1d\xfb\xef\xff'))
# b'abcd++//'
print(base64.urlsafe_b64encode(b'i\xb7\x1d\xfb\xef\xff'))
# b'abcd--__'
print(base64.urlsafe_b64decode('abcd--__'))
# b'i\xb7\x1d\xfb\xef\xff'
```

还可以自己定义 64 个字符的排列顺序，这样就可以自定义 Base64 编码，不过，通常情况下完全没有必要。

Base64 是一种通过查表的编码方法，不能用于加密，即使使用自定义的编码表也不行。

Base64 适用于小段内容的编码，比如数字证书签名、Cookie 的内容等。

由于`=`字符也可能出现在 Base64 编码中，但`=`用在 URL、Cookie 里面会造成歧义，所以，很多 Base64 编码后会把`=`去掉：

```python
# 标准Base64:
'abcd' -> 'YWJjZA=='
# 自动去掉=:
'abcd' -> 'YWJjZA'
```

去掉`=`后怎么解码呢？因为 Base64 是把 3 个字节变为 4 个字节，所以，Base64 编码的长度永远是 4 的倍数，因此，需要加上`=`把 Base64 字符串的长度变为 4 的倍数，就可以正常解码了。

```python
import base64
def safe_base64_decode(s):
  s += "=" * (4 - len(s) % 4)
  return base64.b64decode(s)

assert b'abcd' == safe_base64_decode('YWJjZA=='), safe_base64_decode('YWJjZA==')
assert b'abcd' == safe_base64_decode('YWJjZA'), safe_base64_decode('YWJjZA')
print('ok')
```

### 14.5 struct

:::tip 引子
准确地讲，Python 没有专门处理字节的数据类型。但由于`b'str'`可以表示字节，所以，字节数组＝二进制 str。而在 C 语言中，我们可以很方便地用 struct、union 来处理字节，以及字节和 int，float 的转换。

在 Python 中，比方说要把一个 32 位无符号整数变成字节，也就是 4 个长度的`bytes`，你得配合位运算符这么写：

```python
n = 10240099
b1 = (n & 0xff000000) >> 24
b2 = (n & 0xff0000) >> 16
b3 = (n & 0xff00) >> 8
b4 = n & 0xff
bs = bytes([b1, b2, b3, b4])
print(bs)
# b'\x00\x9c@c'
```

非常麻烦。如果换成浮点数就无能为力了。好在 Python 提供了一个`struct`模块来解决`bytes`和其他二进制数据类型的转换。
:::

`struct` 的 `pack` 函数把任意数据类型变成 `bytes`：

```python
import struct
print(struct.pack('>I',10240099))
# b'\x00\x9c@c'
```

`pack` 的第一个参数是处理指令，`'>I'`的意思是：

`>` 表示字节顺序是 big-endian，也就是网络序，`I` 表示 4 字节无符号整数。后面的参数个数要和处理指令一致。

`unpack`把`bytes`变成相应的数据类型：

```python
import struct
print(struct.unpack('>IH', b'\xf0\xf0\xf0\xf0\x80\x80'))
# (4042322160, 32896)
```

根据`>IH`的说明，后面的`bytes`依次变为`I`：4 字节无符号整数和`H`：2 字节无符号整数。

所以，尽管 Python 不适合编写底层操作字节流的代码，但在对性能要求不高的地方，利用`struct`就方便多了。

`struct`模块定义的数据类型可以参考[Python 官方文档](https://docs.python.org/zh-cn/3/library/struct.html#format-characters)。

Windows 的位图文件（.bmp）是一种非常简单的文件格式，我们来用`struct`分析一下。

首先找一个 bmp 文件，没有的话用“画图”画一个。

读入前 30 个字节来分析：

```python
s = b'\x42\x4d\x38\x8c\x0a\x00\x00\x00\x00\x00\x36\x00\x00\x00\x28\x00\x00\x00\x80\x02\x00\x00\x68\x01\x00\x00\x01\x00\x18\x00'
```

BMP 格式采用小端方式存储数据，文件头的结构按顺序如下：

两个字节：`'BM'`表示 Windows 位图，`'BA'`表示 OS/2 位图； 一个 4 字节整数：表示位图大小； 一个 4 字节整数：保留位，始终为 0； 一个 4 字节整数：实际图像的偏移量； 一个 4 字节整数：Header 的字节数； 一个 4 字节整数：图像宽度； 一个 4 字节整数：图像高度； 一个 2 字节整数：始终为 1； 一个 2 字节整数：颜色数。

所以，组合起来用`unpack`读取：

```python
import struct
s = b'\x42\x4d\x38\x8c\x0a\x00\x00\x00\x00\x00\x36\x00\x00\x00\x28\x00\x00\x00\x80\x02\x00\x00\x68\x01\x00\x00\x01\x00\x18\x00'
print(struct.unpack('<ccIIIIIIHH', s))
# (b'B', b'M', 691256, 0, 54, 40, 640, 360, 1, 24)
```

结果显示，`b'B'`、`b'M'`说明是 Windows 位图，位图大小为 640x360，颜色数为 24。

### 14.6 hashlib

#### 14.6.1 摘要算法简介

Python 的 hashlib 提供了常见的摘要算法，如 MD5，SHA1 等等。

什么是摘要算法呢？摘要算法又称哈希算法、散列算法。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用 16 进制的字符串表示）。

举个例子，你写了一篇文章，内容是一个字符串`'how to use python hashlib - by Michael'`，并附上这篇文章的摘要是`'2d73d4f15c0db7f5ecb321b6a65e5d6d'`。如果有人篡改了你的文章，并发表为`'how to use python hashlib - by Bob'`，你可以一下子指出 Bob 篡改了你的文章，因为根据`'how to use python hashlib - by Bob'`计算出的摘要不同于原始文章的摘要。

可见，摘要算法就是通过摘要函数`f()`对任意长度的数据`data`计算出固定长度的摘要`digest`，目的是为了发现原始数据是否被人篡改过。

摘要算法之所以能指出数据是否被篡改过，就是因为摘要函数是一个单向函数，计算`f(data)`很容易，但通过`digest`反推`data`却非常困难。而且，对原始数据做一个 bit 的修改，都会导致计算出的摘要完全不同。

我们以常见的摘要算法 MD5 为例，计算出一个字符串的 MD5 值：

```python
import hashlib

md5 = hashlib.md5()
md5.update('how to use python hashlib - by Michael'.encode('utf-8'))
print(md5.hexdigest())
# 2d73d4f15c0db7f5ecb321b6a65e5d6d
```

如果数据量很大，可以分块多次调用 update()，最后计算的结果是一样的：

```python
import hashlib

md5 = hashlib.md5()
md5.update('how to use python hashlib'.encode('utf-8'))
md5.update(' - by Michael'.encode('utf-8'))
print(md5.hexdigest())
# 2d73d4f15c0db7f5ecb321b6a65e5d6d
```

试试改动一个字母，看看计算的结果是否完全不同。

MD5 是最常见的摘要算法，速度很快，生成结果是固定的 128 bit/16 字节，通常用一个 32 位的 16 进制字符串表示。

另一种常见的摘要算法是 SHA1，调用 SHA1 和调用 MD5 完全类似：

```python
import hashlib

sha1 = hashlib.sha1()
sha1.update('how to use python hashlib'.encode('utf-8'))
sha1.update(' - by Michael'.encode('utf-8'))
print(sha1.hexdigest())
# a25d46b6323c18e119f19660b7ba61e770bb2109
```

SHA1 的结果是 160 bit/20 字节，通常用一个 40 位的 16 进制字符串表示。

比 SHA1 更安全的算法是 SHA256 和 SHA512，不过越安全的算法不仅越慢，而且摘要长度更长。

有没有可能两个不同的数据通过某个摘要算法得到了相同的摘要？完全有可能，因为任何摘要算法都是把无限多的数据集合映射到一个有限的集合中。这种情况称为碰撞，比如 Bob 试图根据你的摘要反推出一篇文章`'how to learn hashlib in python - by Bob'`，并且这篇文章的摘要恰好和你的文章完全一致，这种情况也并非不可能出现，但是非常非常困难。

#### 14.6.2 摘要算法应用

摘要算法能应用到什么地方？举个常用例子：

任何允许用户登录的网站都会存储用户登录的用户名和口令。如何存储用户名和口令呢？方法是存到数据库表中：

| name    | password  |
| ------- | --------- |
| michael | 123456    |
| bob     | abc999    |
| alice   | alice2008 |

如果以明文保存用户口令，如果数据库泄露，所有用户的口令就落入黑客的手里。此外，网站运维人员是可以访问数据库的，也就是能获取到所有用户的口令。

正确的保存口令的方式是不存储用户的明文口令，而是存储用户口令的摘要，比如 MD5：

| name    | password                         |
| ------- | -------------------------------- |
| michael | e10adc3949ba59abbe56e057f20f883e |
| bob     | 878ef96e86145580c38c87f0410ad153 |
| alice   | 99b1c2188db85afee403b1536010c2c9 |

当用户登录时，首先计算用户输入的明文口令的 MD5，然后和数据库存储的 MD5 对比，如果一致，说明口令输入正确，如果不一致，口令肯定错误。

### 14.7 hmac

通过哈希算法，我们可以验证一段数据是否有效，方法就是对比该数据的哈希值，例如，判断用户口令是否正确，我们用保存在数据库中的`password_md5`对比计算`md5(password)`的结果，如果一致，用户输入的口令就是正确的。

为了防止黑客通过彩虹表根据哈希值反推原始口令，在计算哈希的时候，不能仅针对原始输入计算，需要增加一个 salt 来使得相同的输入也能得到不同的哈希，这样，大大增加了黑客破解的难度。

如果 salt 是我们自己随机生成的，通常我们计算 MD5 时采用`md5(message + salt)`。但实际上，把 salt 看做一个“口令”，加 salt 的哈希就是：计算一段 message 的哈希时，根据不同口令计算出不同的哈希。要验证哈希值，必须同时提供正确的口令。

这实际上就是 Hmac 算法：Keyed-Hashing for Message Authentication。它通过一个标准算法，在计算哈希的过程中，把 key 混入计算过程中。

和我们自定义的加 salt 算法不同，Hmac 算法针对所有哈希算法都通用，无论是 MD5 还是 SHA-1。采用 Hmac 替代我们自己的 salt 算法，可以使程序算法更标准化，也更安全。

Python 自带的 hmac 模块实现了标准的 Hmac 算法。我们来看看如何使用 hmac 实现带 key 的哈希。

我们首先需要准备待计算的原始消息 message，随机 key，哈希算法，这里采用 MD5，使用 hmac 的代码如下：

```python
import hmac
message = b'Hello, world!'
key = b'secret'
h = hmac.new(key, message, digestmod='MD5')
print(h.hexdigest())
# fa4ee7d173f2d97ee79022d1a7355bcf
```

### 14.8 itertools

Python 的内建模块`itertools`提供了非常有用的用于操作迭代对象的函数。

首先，我们看看`itertools`提供的几个“无限”迭代器：

```python
import itertools
natuals = itertools.count(1)
for n in natuals:
  print(n)
# 1
# 2
# 3
# ...
```

因为`count()`会创建一个无限的迭代器，所以上述代码会打印出自然数序列，根本停不下来，只能按`Ctrl+C`退出。

`cycle()`会把传入的一个序列无限重复下去：

```python
import itertools
cs = itertools.cycle('ABC')
for c in cs:
  print(c)
# A
# B
# C
# A
# B
# C
# ...
```

同样停不下来。

`repeat()`负责把一个元素无限重复下去，不过如果提供第二个参数就可以限定重复次数：

```python
import itertools
ns = itertools.repeat('A', 3)
for n in ns:
  print(n)
# A
# A
# A
```

无限序列只有在`for`迭代时才会无限地迭代下去，如果只是创建了一个迭代对象，它不会事先把无限个元素生成出来，事实上也不可能在内存中创建无限多个元素。

无限序列虽然可以无限迭代下去，但是通常我们会通过`takewhile()`等函数根据条件判断来截取出一个有限的序列：

```python
import itertools
natuals = itertools.count(1)
ns = itertools.takewhile(lambda x: x <= 10, natuals)
print(list(ns))
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

itertools 提供的几个迭代器操作函数更加有用：

1. chain()

   chain()可以把一组迭代对象串联起来，形成一个更大的迭代器：

   ```python
   import itertools
   for c in itertools.chain('ABC', 'XYZ'):
     print(c)
   # 迭代效果：'A' 'B' 'C' 'X' 'Y' 'Z'
   ```

2. groupby()

   groupby()把迭代器中相邻的重复元素挑出来放在一起：

   ```python
   import itertools
   for key, group in itertools.groupby('AAABBBCCAAA'):
     print(key, list(group))
   # A ['A', 'A', 'A']
   # B ['B', 'B', 'B']
   # C ['C', 'C']
   # A ['A', 'A', 'A']
   ```

   实际上挑选规则是通过函数完成的，只要作用于函数的两个元素返回的值相等，这两个元素就被认为是在一组的，而函数返回值作为组的 key。如果我们要忽略大小写分组，就可以让元素`'A'`和`'a'`都返回相同的 key：

   ```python
   import itertools
   for key, group in itertools.groupby('AaaBBbcCAAa', lambda c: c.upper()):
     print(key, list(group))
   # A ['A', 'a', 'a']
   # B ['B', 'B', 'b']
   # C ['c', 'C']
   # A ['A', 'A', 'a']
   ```

### 14.9 contextlib

在 Python 中，读写文件这样的资源要特别注意，必须在使用完毕后正确关闭它们。正确关闭文件资源的一个方法是使用`try...finally`：

```python
try:
  f = open('/path/to/file', 'r')
  print(f.read())
finally:
  if f:
    f.close()
```

写`try...finally`非常繁琐。Python 的`with`语句允许我们非常方便地使用资源，而不必担心资源没有关闭，所以上面的代码可以简化为：

```python
with open('/path/to/file', 'r') as f:
  print(f.read())
```

并不是只有`open()`函数返回的 fp 对象才能使用`with`语句。实际上，任何对象，只要正确实现了上下文管理，就可以用于`with`语句。

实现上下文管理是通过`__enter__`和`__exit__`这两个方法实现的。例如，下面的 class 实现了这两个方法：

```python
class Query(object):
  def __init__(self, name):
    self.name = name
  def __enter__(self):
    print('Begin')
    return self
  def __exit__(self, exc_type, exc_value, traceback):
    if exc_type:
      print('Error')
    else:
      print('End')

  def query(self):
    print('Query info about %s...' % self.name)

with Query('Bob') as q:
  q.query()
# Begin
# Query info about Bob...
# End
```

**@contextmanager**

编写`__enter__`和`__exit__`仍然很繁琐，因此 Python 的标准库`contextlib`提供了更简单的写法，上面的代码可以改写如下：

```python
from contextlib import contextmanager

class Query(object):
  def __init__(self, name):
    self.name = name
  def query(self):
    print('Query info about %s...' % self.name)

@contextmanager
def create_query(name):
  print('Begin')
  q = Query(name)
  yield q
  print('End')

with create_query('Bob') as q:
  q.query()
# Begin
# Query info about Bob...
# End
```

`@contextmanager`这个 decorator 接受一个 generator，用`yield`语句把`with ... as var`把变量输出出去，然后，`with`语句就可以正常地工作了。

很多时候，我们希望在某段代码执行前后自动执行特定代码，也可以用@contextmanager 实现。例如：

```python
from contextlib import contextmanager

@contextmanager
def tag(name):
  print("<%s>" % name)
  yield
  print("</%s>" % name)

with tag("h1"):
  print("hello")
  print("world")
# <h1>
# hello
# world
# </h1>
```

代码的执行顺序是：

1. `with`语句首先执行`yield`之前的语句，因此打印出`<h1>`；
2. `yield`调用会执行`with`语句内部的所有语句，因此打印出`hello`和`world`；
3. 最后执行`yield`之后的语句，打印出`</h1>`。

因此，`@contextmanager`让我们通过编写 generator 来简化上下文管理。

**@closing**

如果一个对象没有实现上下文，我们就不能把它用于`with`语句。这个时候，可以用`closing()`来把该对象变为上下文对象。例如，用`with`语句使用`urlopen()`：

```python
from contextlib import closing
from urllib.request import urlopen

with closing(urlopen('https://www.python.org')) as page:
  for line in page:
    print(line)
```

`closing`也是一个经过@contextmanager 装饰的 generator，这个 generator 编写起来其实非常简单：

```python
@contextmanager
def closing(thing):
  try:
    yield thing
  finally:
    thing.close()
```

它的作用就是把任意对象变为上下文对象，并支持`with`语句。

`@contextlib`还有一些其他 decorator，便于我们编写更简洁的代码。

### 14.10 urllib

urllib 提供了一系列用于操作 URL 的功能。

#### 14.10.1 Get

urllib 的 request 模块可以非常方便地抓取 URL 内容，也就是发送一个 GET 请求到指定的页面，然后返回 HTTP 的响应：

例如，对豆瓣的一个 URLhttps://api.douban.com/v2/book/2129650进行抓取，并返回响应：

```python
from urllib import request

with request.urlopen('https://v.api.aa1.cn/api/yiyan/index.php') as f:
  data = f.read()
  print('Status:', f.status, f.reason)
  for k, v in f.getheaders():
    print('%s: %s' % (k, v))
  print('Data:', data.decode('utf-8'))

# Status: 200 OK
# Server: nginx
# Date: Thu, 28 Mar 2024 14:31:44 GMT
# Content-Type: text/html; charset=utf-8
# Transfer-Encoding: chunked
# Connection: close
# Vary: Accept-Encoding
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Headers: x-requested-with,content-type
# Strict-Transport-Security: max-age=31536000
# Data:
#
# <p>自古英雄出少年，似水红颜惹人怜。</p>
```

如果我们要想模拟浏览器发送 GET 请求，就需要使用`Request`对象，通过往`Request`对象添加 HTTP 头，我们就可以把请求伪装成浏览器。例如，模拟 iPhone 6 去请求豆瓣首页：

```python
from urllib import request

req = request.Request('http://www.douban.com/')
req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
with request.urlopen(req) as f:
  print('Status:', f.status, f.reason)
  for k, v in f.getheaders():
    print('%s: %s' % (k, v))
  print('Data:', f.read().decode('utf-8'))
```

这样豆瓣会返回适合 iPhone 的移动版网页：

```html
...
<meta
  name="viewport"
  content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
/>
<meta name="format-detection" content="telephone=no" />
...
```

#### 14.10.2 Post

如果要以 POST 发送一个请求，只需要把参数`data`以 bytes 形式传入。

我们模拟一个微博登录，先读取登录的邮箱和口令，然后按照 weibo.cn 的登录页的格式以`username=xxx&password=xxx`的编码传入：

```python
from urllib import request, parse

print('Login to weibo.cn...')
email = input('Email: ')
passwd = input('Password: ')
login_data = parse.urlencode([
  ('username', email),
  ('password', passwd),
  ('entry', 'mweibo'),
  ('client_id', ''),
  ('savestate', '1'),
  ('ec', ''),
  ('pagerefer', 'https://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F')
])

req = request.Request('https://passport.weibo.cn/sso/login')
req.add_header('Origin', 'https://passport.weibo.cn')
req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
req.add_header('Referer', 'https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F')

with request.urlopen(req, data=login_data.encode('utf-8')) as f:
  print('Status:', f.status, f.reason)
  for k, v in f.getheaders():
    print('%s: %s' % (k, v))
  print('Data:', f.read().decode('utf-8'))
```

如果登录成功，我们获得的响应如下：

```
Status: 200 OK
Server: nginx/1.2.0
...
Set-Cookie: SSOLoginState=1432620126; path=/; domain=weibo.cn
...
Data: {"retcode":20000000,"msg":"","data":{...,"uid":"1658384301"}}
```

如果登录失败，我们获得的响应如下：

```
...
Data: {"retcode":50011015,"msg":"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef","data":{"username":"example@python.org","errline":536}}
```

如果还需要更复杂的控制，比如通过一个 Proxy 去访问网站，我们需要利用`ProxyHandler`来处理，示例代码如下：

```python
proxy_handler = urllib.request.ProxyHandler({'http': 'http://www.example.com:3128/'})
proxy_auth_handler = urllib.request.ProxyBasicAuthHandler()
proxy_auth_handler.add_password('realm', 'host', 'username', 'password')
opener = urllib.request.build_opener(proxy_handler, proxy_auth_handler)
with opener.open('http://www.example.com/login.html') as f:
  pass
```

:::tip 小结
urllib 提供的功能就是利用程序去执行各种 HTTP 请求。如果要模拟浏览器完成特定功能，需要把请求伪装成浏览器。伪装的方法是先监控浏览器发出的请求，再根据浏览器的请求头来伪装，`User-Agent` 头就是用来标识浏览器的。
:::

### 14.11 XML

XML 虽然比 JSON 复杂，在 Web 中应用也不如以前多了，不过仍有很多地方在用，所以，有必要了解如何操作 XML。

操作 XML 有两种方法：DOM 和 SAX。DOM 会把整个 XML 读入内存，解析为树，因此占用内存大，解析慢，优点是可以任意遍历树的节点。SAX 是流模式，边读边解析，占用内存小，解析快，缺点是我们需要自己处理事件。

正常情况下，优先考虑 SAX，因为 DOM 实在太占内存。

在 Python 中使用 SAX 解析 XML 非常简洁，通常我们关心的事件是`start_element`，`end_element`和`char_data`，准备好这 3 个函数，然后就可以解析 xml 了。

举个例子，当 SAX 解析器读到一个节点时：

```html
<a href="/">python</a>
```

会产生 3 个事件：

1. `start_element`事件，在读取`<a href="/">`时；
2. char_data 事件，在读取`python`时；
3. end_element 事件，在读取`</a>`时。

用代码实验一下：

```python
from xml.parsers.expat import ParserCreate

class DefaultSaxHandler(object):
  def start_element(self, name, attrs):
    print('sax:start_element: %s, attrs: %s' % (name, str(attrs)))

  def end_element(self, name):
    print('sax:end_element: %s' % name)

  def char_data(self, text):
    print('sax:char_data: %s' % text)

xml = r'''<?xml version="1.0"?>
<ol>
  <li><a href="/python">Python</a></li>
  <li><a href="/ruby">Ruby</a></li>
</ol>
'''

handler = DefaultSaxHandler()
parser = ParserCreate()
parser.StartElementHandler = handler.start_element
parser.EndElementHandler = handler.end_element
parser.CharacterDataHandler = handler.char_data
parser.Parse(xml)

# sax:start_element: ol, attrs: {}
# sax:char_data: \n
# sax:char_data:
# sax:start_element: li, attrs: {}
# sax:start_element: a, attrs: {'href': '/python'}
# sax:char_data: Python
# sax:end_element: a
# sax:end_element: li
# sax:char_data: \n
# sax:char_data:
# sax:start_element: li, attrs: {}
# sax:start_element: a, attrs: {'href': '/ruby'}
# sax:char_data: Ruby
# sax:end_element: a
# sax:end_element: li
# sax:char_data: \n
# sax:end_element: ol
```

需要注意的是读取一大段字符串时，`CharacterDataHandler`可能被多次调用，所以需要自己保存起来，在`EndElementHandler`里面再合并。

除了解析 XML 外，如何生成 XML 呢？99%的情况下需要生成的 XML 结构都是非常简单的，因此，最简单也是最有效的生成 XML 的方法是拼接字符串：

```python
L = []
L.append(r'<?xml version="1.0"?>')
L.append(r'<root>')
L.append(encode('some & data'))
L.append(r'</root>')
return ''.join(L)
```

如果要生成复杂的 XML 呢？建议不要用 XML，改成 JSON。

### 14.12 HTMLParser

如果我们要编写一个搜索引擎，第一步是用爬虫把目标网站的页面抓下来，第二步就是解析该 HTML 页面，看看里面的内容到底是新闻、图片还是视频。

假设第一步已经完成了，第二步应该如何解析 HTML 呢？

HTML 本质上是 XML 的子集，但是 HTML 的语法没有 XML 那么严格，所以不能用标准的 DOM 或 SAX 来解析 HTML。

好在 Python 提供了 HTMLParser 来非常方便地解析 HTML，只需简单几行代码：

```python
from html.parser import HTMLParser
from html.entities import name2codepoint

class MyHTMLParser(HTMLParser):
  def handle_starttag(self, tag, attrs):
    print('<%s>' % tag)
  def handle_endtag(self, tag):
    print('</%s>' % tag)
  def handle_startendtag(self, tag, attrs):
    print('<%s/>' % tag)
  def handle_data(self, data):
    print(data)
  def handle_comment(self, data):
    print('<!--', data, '-->')
  def handle_entityref(self, name):
    print('&%s;' % name)
  def handle_charref(self, name):
    print('&#%s;' % name)
parser = MyHTMLParser()
parser.feed('''<html>
<head></head>
<body>
<!-- test html parser -->
  <p>Some <a href=\"#\">html</a> HTML&nbsp;tutorial...<br>END</p>
</body></html>''')
```

`feed()`方法可以多次调用，也就是不一定一次把整个 HTML 字符串都塞进去，可以一部分一部分塞进去。

特殊字符有两种，一种是英文表示的`&nbsp;`，一种是数字表示的`&#1234;`，这两种字符都可以通过 Parser 解析出来。

## 15. 常用第三方模块

除了内建的模块外，Python 还有大量的第三方模块。

基本上，所有的第三方模块都会在 [PyPI - the Python Package Index](https://pypi.python.org/) 上注册，只要找到对应的模块名字，即可用 pip 安装。

此外，在[安装第三方模块](https://www.liaoxuefeng.com/wiki/1016959663602400/1017493741106496)一节中，我们强烈推荐安装 [Anaconda](https://www.anaconda.com/)，安装后，数十个常用的第三方模块就已经就绪，不用 pip 手动安装。

### 15.1 Pillow

PIL：Python Imaging Library，已经是 Python 平台事实上的图像处理标准库了。PIL 功能非常强大，但 API 却非常简单易用。

由于 PIL 仅支持到 Python 2.7，加上年久失修，于是一群志愿者在 PIL 的基础上创建了兼容的版本，名字叫[Pillow](https://github.com/python-pillow/Pillow)，支持最新 Python 3.x，又加入了许多新特性，因此，我们可以直接安装使用 Pillow。

**安装 Pillow**

如果安装了 Anaconda，Pillow 就已经可用了。否则，需要在命令行下通过 pip 安装：

```sh
$ pip install pillow
# 使用清华镜像源： 有时候使用清华镜像源可以解决安装问题：
$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pillow
```

**操作图像**

来看看最常见的图像缩放操作，只需三四行代码：

```python
from PIL import Image

# 打开一个jpg图像文件，注意是当前路径:
im = Image.open('./001.jpg')
# 获得图像尺寸:
w, h = im.size
print('Original image size: %sx%s' % (w, h))
# 缩放到50%:
im.thumbnail((w//2, h//2))
print('Resize image to: %sx%s' % (w//2, h//2))
# 把缩放后的图像用jpeg格式保存:
im.save('thumbnail.jpg', 'jpeg')
```

其他功能如切片、旋转、滤镜、输出文字、调色板等一应俱全。

比如，模糊效果也只需几行代码：

```python
from PIL import Image, ImageFilter

# 打开一个jpg图像文件，注意是当前路径:
im = Image.open('./001.jpg')
# 应用模糊滤镜:
im2 = im.filter(ImageFilter.BLUR)
im2.save('blur.jpg', 'jpeg')
```

PIL 的`ImageDraw`提供了一系列绘图方法，让我们可以直接绘图。比如要生成字母验证码图片：

```python
from PIL import Image, ImageDraw, ImageFont, ImageFilter

import random

# 随机字母:
def rndChar():
  return chr(random.randint(65, 90))

# 随机颜色1:
def rndColor():
  return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))

# 随机颜色2:
def rndColor2():
  return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

# 240 x 60:
width = 60 * 4
height = 60
image = Image.new('RGB', (width, height), (255, 255, 255))
# 创建Font对象:
font = ImageFont.truetype('arial.ttf', 36)
# 创建Draw对象:
draw = ImageDraw.Draw(image)
# 填充每个像素:
for x in range(width):
  for y in range(height):
    draw.point((x, y), fill=rndColor())
# 输出文字:
codes = ''
for t in range(4):
  code = rndChar()
  draw.text((60 * t + 10, 10), code, font=font, fill=rndColor2())
  codes += code
# 模糊:
image = image.filter(ImageFilter.BLUR)
print(codes)
image.save('code.jpg', 'jpeg')
```

我们用随机颜色填充背景，再画上文字，最后对图像进行模糊，得到验证码图片如下：

![1711722671508](/images/1711722671508.jpg){data-zoomable}

要详细了解 PIL 的强大功能，请请参考[Pillow 官方文档](https://pillow.readthedocs.org/)。

### 15.2 requests

我们已经讲解了 Python 内置的 urllib 模块，用于访问网络资源。但是，它用起来比较麻烦，而且，缺少很多实用的高级功能。

更好的方案是使用 requests。它是一个 Python 第三方库，处理 URL 资源特别方便。

**安装 requests**

如果安装了 Anaconda，requests 就已经可用了。否则，需要在命令行下通过 pip 安装：

```sh
$ pip install requests
# 使用清华镜像源： 有时候使用清华镜像源可以解决安装问题：
$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests
```

**使用 requests**

要通过 GET 访问一个页面，只需要几行代码：

```python
import requests

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}
url = 'https://www.douban.com/'
r = requests.get(url, headers=headers)
print(r.status_code)
# 200
print(r.text)
# <!DOCTYPE HTML>
# <html lang="zh-cmn-Hans" class="ua-windows ua-webkit">
# <head>
# <meta charset="UTF-8">
# <meta name="google-site-verification" content="ok0wCgT20tBBgo9_zat2iAcimtN4Ftf5ccsh092Xeyw" />
# <meta name="description" content="提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活。">
# ...
```

对于带参数的 URL，传入一个 dict 作为`params`参数：

```python
import requests

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}
url = 'https://www.douban.com/search'
params = {'q': 'python', 'cat': '1001'}
r = requests.get(url, params = params, headers=headers)
print(r.url) # 实际请求的URL
# https://www.douban.com/search?q=python&cat=1001
print(r.encoding) # requests自动检测编码
# utf-8
print(r.content) # 用content属性获得bytes对象
# b'<!DOCTYPE html>\n<html lang="zh-CN" class="ua-windows ua-webkit">\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n...
```

requests 的方便之处还在于，对于特定类型的响应，例如 JSON，可以直接获取：

```python
import requests

url = 'https://v.api.aa1.cn/api/yiyan/index.php?type=json'
r = requests.get(url)
print(r.json())
# {'yiyan': '问君能有几多愁，恰似一群太监上青楼。', 'from': '一言'}
```

要发送 POST 请求，只需要把`get()`方法变成`post()`，然后传入`data`参数作为 POST 请求的数据：

```python
import requests

url = 'https://accounts.douban.com/login'
data = {'form_email': 'abc@example.com', 'form_password': '123456'}
r = requests.post(url, data)
```

requests 默认使用`application/x-www-form-urlencoded`对 POST 数据编码。如果要传递 JSON 数据，可以直接传入 json 参数：

```python
params = {'key': 'value'}
r = requests.post(url, json=params) # 内部自动序列化为JSON
```

类似的，上传文件需要更复杂的编码格式，但是 requests 把它简化成`files`参数：

```python
upload_files = {'file': open('report.xls', 'rb')}
r = requests.post(url, files=upload_files)
```

在读取文件时，注意务必使用`'rb'`即二进制模式读取，这样获取的`bytes`长度才是文件的长度。

把`post()`方法替换为`put()`，`delete()`等，就可以以 PUT 或 DELETE 方式请求资源。

除了能轻松获取响应内容外，requests 对获取 HTTP 响应的其他信息也非常简单。例如，获取响应头：

```python
print(r.headers)
# {Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked', 'Content-Encoding': 'gzip', ...}
print(r.headers['Content-Type'])
# 'text/html; charset=utf-8'
```

requests 对 Cookie 做了特殊处理，使得我们不必解析 Cookie 就可以轻松获取指定的 Cookie：

```python
print(r.cookies['ts'])
# 'example_cookie_12345'
```

要在请求中传入 Cookie，只需准备一个 dict 传入 cookies 参数：

```python
cs = {'token': '12345', 'status': 'working'}
r = requests.get(url, cookies=cs)
```

最后，要指定超时，传入以秒为单位的 timeout 参数：

```python
r = requests.get(url, timeout=2.5) # 2.5秒后超时
```

### 15.3 chardet

字符串编码一直是令人非常头疼的问题，尤其是我们在处理一些不规范的第三方网页的时候。虽然 Python 提供了 Unicode 表示的 str 和 bytes 两种数据类型，并且可以通过`encode()`和`decode()`方法转换，但是，在不知道编码的情况下，对`bytes`做`decode()`不好做。

对于未知编码的`bytes`，要把它转换成`str`，需要先“猜测”编码。猜测的方式是先收集各种编码的特征字符，根据特征字符判断，就能有很大概率“猜对”。

当然，我们肯定不能从头自己写这个检测编码的功能，这样做费时费力。chardet 这个第三方库正好就派上了用场。用它来检测编码，简单易用。

**安装 chardet**

如果安装了 Anaconda，chardet 就已经可用了。否则，需要在命令行下通过 pip 安装：

```sh
$ pip install chardet
# 使用清华镜像源： 有时候使用清华镜像源可以解决安装问题：
$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple chardet
```

**使用 chardet**

当我们拿到一个`bytes`时，就可以对其检测编码。用 chardet 检测编码，只需要一行代码：

```python
import chardet

print(chardet.detect(b'Hello, world!'))
# {'encoding': 'ascii', 'confidence': 1.0, 'language': ''}
```

检测出的编码是`ascii`，注意到还有个`confidence`字段，表示检测的概率是 1.0（即 100%）。

我们来试试检测 GBK 编码的中文：

```python
import chardet

data = '离离原上草，一岁一枯荣'.encode('gbk')
print(chardet.detect(data))
# {'encoding': 'GB2312', 'confidence': 0.7407407407407407, 'language': 'Chinese'}
```

检测的编码是`GB2312`，注意到 GBK 是 GB2312 的超集，两者是同一种编码，检测正确的概率是 74%，`language`字段指出的语言是`'Chinese'`。

对 UTF-8 编码进行检测：

```python
import chardet

data = '离离原上草，一岁一枯荣'.encode('utf-8')
print(chardet.detect(data))
# {'encoding': 'utf-8', 'confidence': 0.99, 'language': ''}
```

我们再试试对日文进行检测：

```python
import chardet

data = '最新の主要ニュース'.encode('euc-jp')
print(chardet.detect(data))
# {'encoding': 'EUC-JP', 'confidence': 0.99, 'language': 'Japanese'}
```

可见，用 chardet 检测编码，使用简单。获取到编码后，再转换为`str`，就可以方便后续处理。

chardet 支持检测的编码列表请参考官方文档[Supported encodings](https://chardet.readthedocs.io/en/latest/supported-encodings.html)。

### 15.4 psutil

用 Python 来编写脚本简化日常的运维工作是 Python 的一个重要用途。在 Linux 下，有许多系统命令可以让我们时刻监控系统运行的状态，如`ps`，`top`，`free`等等。要获取这些系统信息，Python 可以通过`subprocess`模块调用并获取结果。但这样做显得很麻烦，尤其是要写很多解析代码。

在 Python 中获取系统信息的另一个好办法是使用`psutil`这个第三方模块。顾名思义，psutil = process and system utilities，它不仅可以通过一两行代码实现系统监控，还可以跨平台使用，支持 Linux／UNIX／OSX／Windows 等，是系统管理员和运维小伙伴不可或缺的必备模块。

#### 15.4.1 安装 psutil

如果安装了 Anaconda，psutil 就已经可用了。否则，需要在命令行下通过 pip 安装：

```sh
$ pip install psutil
# 使用清华镜像源： 有时候使用清华镜像源可以解决安装问题：
$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple psutil
```

#### 15.4.2 获取 CPU 信息

我们先来获取 CPU 的信息：

```python
import psutil

print(psutil.cpu_count()) # CPU逻辑数量
# 8
print(psutil.cpu_count(logical=False)) # CPU物理核心
# 4
```

统计 CPU 的用户／系统／空闲时间：

```python
import psutil

print(psutil.cpu_times())
# scputimes(user=16961.515625, system=11126.875, idle=179432.78125, interrupt=835.234375, dpc=457.46875)
```

再实现类似`top`命令的 CPU 使用率，每秒刷新一次，累计 10 次：

```python
import psutil

for x in range(10):
  print(psutil.cpu_percent(interval=1, percpu=True))
# [33.3, 6.2, 27.7, 10.9, 19.7, 7.8, 12.5, 17.2]
# [10.6, 9.4, 10.9, 9.5, 14.1, 7.8, 14.1, 12.5]
# [18.2, 10.9, 14.1, 14.3, 17.2, 12.5, 9.4, 17.2]
# [16.4, 7.9, 4.7, 6.2, 10.8, 6.3, 7.9, 12.7]
# [14.9, 10.9, 7.8, 1.6, 9.4, 1.5, 3.1, 9.4]
# [12.3, 7.7, 4.7, 0.0, 6.2, 0.0, 3.1, 10.9]
# [10.6, 4.7, 9.4, 1.6, 10.9, 6.2, 3.1, 14.1]
# [27.9, 10.9, 32.3, 12.5, 25.0, 15.6, 14.1, 14.1]
# [21.7, 3.1, 15.6, 9.4, 18.8, 7.8, 15.6, 7.8]
# [18.2, 7.8, 6.2, 9.4, 9.4, 6.2, 14.1, 18.8]
```

#### 15.4.3 获取内存信息

使用 psutil 获取物理内存和交换内存信息，分别使用：

```python
import psutil

print(psutil.virtual_memory())
# svmem(total=17017184256, available=4252200960, percent=75.0, used=12764983296, free=4252200960)
print(psutil.swap_memory())
# sswap(total=9663676416, used=666046464, free=8997629952, percent=6.9, sin=0, sout=0)
```

返回的是字节为单位的整数，可以看到，总内存大小是 17017184256 = 16 GB，已用 12764983296 = 12 GB，使用了 75.0%。

而交换区大小是 9663676416 = 9 GB。

#### 15.4.4 获取磁盘信息

可以通过psutil获取磁盘分区、磁盘使用率和磁盘IO信息：

```python
import psutil

print(psutil.disk_partitions()) # 磁盘分区信息
# [sdiskpart(device='C:\\', mountpoint='C:\\', fstype='NTFS', opts='rw,fixed', maxfile=255, maxpath=260), sdiskpart(device='D:\\', mountpoint='D:\\', fstype='NTFS', opts='rw,fixed', maxfile=255, maxpath=260), sdiskpart(device='E:\\', mountpoint='E:\\', fstype='NTFS', opts='rw,fixed', maxfile=255, maxpath=260)]
print(psutil.disk_usage('/')) # 磁盘使用情况
# sdiskusage(total=500912091136, used=117538414592, free=383373676544, percent=23.5)
print(psutil.disk_io_counters()) # 磁盘IO
# sdiskio(read_count=469167, write_count=498359, read_bytes=16005703680, write_bytes=13544224768, read_time=2301, write_time=534)
```

可以看到，磁盘`'/'`的总容量是500912091136 = 466 GB，使用了23.5%。文件格式是HFS，`opts`中包含`rw`表示可读写，`journaled`表示支持日志。

#### 15.4.5 获取网络信息

psutil可以获取网络接口和网络连接信息：

```python
import psutil

print(psutil.net_io_counters()) # 获取网络读写字节／包的个数
# snetio(bytes_sent=120359855, bytes_recv=3105930685, packets_sent=1331352, packets_recv=2190432, errin=0, errout=0, dropin=0, dropout=0)
print(psutil.net_if_addrs()) # 获取网络接口信息
# {'WLAN': [snicaddr(family=<AddressFamily.AF_LINK: -1>, address='8C-C8-4B-9D-FA-BD', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET: 2>, address='169.254.51.81', netmask='255.255.0.0', broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='fe80::b828:89cd:82e1:3351', netmask=None, broadcast=None, ptp=None)], '本地连接* 1': [snicaddr(family=<AddressFamily.AF_LINK: -1>, address='8E-C8-4B-9D-FA-BD', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET: 2>, address='169.254.156.133', netmask='255.255.0.0', broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='fe80::712d:1bde:39c3:9c85', netmask=None, broadcast=None, ptp=None)], '本地连接* 2': [snicaddr(family=<AddressFamily.AF_LINK: -1>, address='9E-C8-4B-9D-FA-BD', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET: 2>, address='169.254.29.25', netmask='255.255.0.0', broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='fe80::b1b5:3073:6a0a:1d19', netmask=None, broadcast=None, ptp=None)], '以太网': [snicaddr(family=<AddressFamily.AF_LINK: -1>, address='70-B5-E8-8F-ED-77', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET: 2>, address='192.168.1.4', netmask='255.255.255.0', broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='2409:8a02:3033:3a20:d130:f27d:9908:35fd', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='2409:8a02:3033:3a20:9038:8e2a:a73b:d8f7', netmask=None, broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='fe80::d130:f27d:9908:35fd', netmask=None, broadcast=None, ptp=None)], 'Loopback Pseudo-Interface 1': [snicaddr(family=<AddressFamily.AF_INET: 2>, address='127.0.0.1', netmask='255.0.0.0', broadcast=None, ptp=None), snicaddr(family=<AddressFamily.AF_INET6: 23>, address='::1', netmask=None, broadcast=None, ptp=None)]}
print(psutil.net_if_stats()) # 获取网络接口状态
# {'以太网': snicstats(isup=True, duplex=<NicDuplex.NIC_DUPLEX_FULL: 2>, speed=100, mtu=1500, flags=''), 'Loopback Pseudo-Interface 1': snicstats(isup=True, duplex=<NicDuplex.NIC_DUPLEX_FULL: 2>, speed=1073, mtu=1500, flags=''), 'WLAN': snicstats(isup=False, duplex=<NicDuplex.NIC_DUPLEX_FULL: 2>, speed=0, mtu=1500, flags=''), '本地连接* 1': snicstats(isup=False, duplex=<NicDuplex.NIC_DUPLEX_FULL: 2>, speed=0, mtu=1500, flags=''), '本地连接* 2': snicstats(isup=False, duplex=<NicDuplex.NIC_DUPLEX_FULL: 2>, speed=0, mtu=1500, flags='')}
```

要获取当前网络连接信息，使用`net_connections()`：

```python
import psutil

print(psutil.net_connections())
# [sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='127.0.0.1', port=9210), raddr=(), status='LISTEN', pid=16884), sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='0.0.0.0', port=49666), raddr=(), status='LISTEN', pid=1840), sconn(fd=-1, family=<AddressFamily.AF_INET6: 23>, type=<SocketKind.SOCK_DGRAM: 2>, laddr=addr(ip='::', port=63892), raddr=(), status='NONE', pid=17252), sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='192.168.1.4', port=57307), raddr=addr(ip='40.70.161.7', port=443), status='CLOSE_WAIT', pid=10532), sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_DGRAM: 2>, laddr=addr(ip='0.0.0.0', port=63131), raddr=(), status='NONE', pid=6036), sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='127.0.0.1', port=8884), raddr=(), status='LISTEN', pid=4), ...
```

#### 15.4.6 获取进程信息

通过psutil可以获取到所有进程的详细信息：

```python
import psutil

print(psutil.pids()) # 所有进程ID
# [0, 4, 124, 288, 584, 608, 624, 688, 768, ..., 23020, 23080, 23216, 23224, 23256, 23324, 23336, 23748, 24648, 24656]
p = psutil.Process(23080) # 获取指定进程ID=23080
print(p.name()) # 进程名称
# node.exe
print(p.exe()) # 进程exe路径
# C:\Users\DELL\AppData\Roaming\nvm\v16.17.0\node.exe
print(p.cwd()) # 进程工作目录
# E:\learn\ele-cat
print(p.cmdline()) # 进程启动的命令行
# ['C:\\Program Files\\nodejs\\node.exe', 'E:\\learn\\ele-cat\\node_modules\\.bin\\\\..\\vitepress\\bin\\vitepress.js', 'dev', 'docs', '--port', '9527']
print(p.ppid()) # 父进程ID
# 23224
print(p.parent()) # 父进程
# psutil.Process(pid=23224, name='cmd.exe', status='running', started='16:15:19')
print(p.children()) # 子进程列表
# [psutil.Process(pid=17136, name='esbuild.exe', status='running', started='16:15:21')]
print(p.status()) # 进程状态
# running
print(p.username()) # 进程用户名
# DESKTOP-O7HH2ET\DELL
print(p.create_time()) # 进程创建时间
# 1711872919.9083652
print(p.cpu_times()) # 进程使用的CPU时间
# pcputimes(user=42.46875, system=2.625, children_user=0.0, children_system=0.0)
print(p.memory_info()) # 进程使用的内存
# pmem(rss=861229056, vms=874156032, num_page_faults=694267, peak_wset=1134194688, wset=861229056, peak_paged_pool=345528, paged_pool=283512, peak_nonpaged_pool=4527496, nonpaged_pool=305120, pagefile=874156032, peak_pagefile=1160323072, private=874156032)
print(p.open_files()) # 进程打开的文件
# [popenfile(path='C:\\Windows\\System32\\en-US\\KernelBase.dll.mui', fd=-1)]
print(p.connections()) # 进程相关网络连接
# [pconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='127.0.0.1', port=9527), raddr=(), status='LISTEN'), pconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='127.0.0.1', port=9527), raddr=addr(ip='127.0.0.1', port=49668), status='ESTABLISHED')]
print(p.num_threads()) # 进程的线程数量
# 13
print(p.threads())
# [pthread(id=24152, user_time=25.03125, system_time=1.546875), pthread(id=25056, user_time=0.0, system_time=0.0), pthread(id=20088, user_time=0.0, system_time=0.0), pthread(id=3640, user_time=0.0, system_time=0.0), pthread(id=18264, user_time=4.453125, system_time=0.15625), pthread(id=19280, user_time=4.125, system_time=0.21875), pthread(id=25552, user_time=4.515625, system_time=0.171875), pthread(id=23604, user_time=4.265625, system_time=0.1875), pthread(id=14464, user_time=0.03125, system_time=0.078125), pthread(id=11744, user_time=0.046875, system_time=0.078125), pthread(id=24244, user_time=0.0, system_time=0.109375), pthread(id=21708, user_time=0.0, system_time=0.078125), pthread(id=13400, user_time=0.0, system_time=0.0)]
print(p.environ())
# {'123PAN': 'D:\\Program Files\\123pan\\123pan.exe', 'ALLUSERSPROFILE': 'C:\\ProgramData', 'APPDATA': 'C:\\Users\\DELL\\AppData\\Roaming', 'CHROME_CRASHPAD_PIPE_NAME': '\\\\.\\pipe\\crashpad_12768_PBZOGYKGXPYQFVHG', 'CLASSPATH': '.;...}
print(p.terminate()) # 结束进程
# Terminated: 22544 <-- 自己把自己结束了
```

和获取网络连接类似，获取一个root用户的进程需要root权限，启动Python交互环境或者`.py`文件时，需要`sudo`权限。

psutil还提供了一个`test()`函数，可以模拟出`ps`命令的效果：

```python
import psutil

print(psutil.test())
# USER         PID  %MEM     VSZ     RSS  NICE STATUS  START   TIME  CMDLINE
# SYSTEM         0   0.0   60.0K    8.0K        runni         39:04  System Idle Process
# SYSTEM         4   0.0  196.0K  148.0K        runni         20:53  System
#              124   0.6    9.4M   91.9M        runni  Mar31  00:00  Registry
#              288   0.1    2.4M    8.8M        runni  Mar31  00:00  svchost.exe
#              584   0.0    1.0M    1.0M        runni  Mar31  00:00  smss.exe
#              608   0.0   11.8M    4.6M        runni  Mar31  00:00  fontdrvhost.exe
# ...
# None
```

:::tip 小结
psutil使得Python程序获取系统信息变得易如反掌。

psutil还可以获取用户信息、Windows服务等很多有用的系统信息，具体请参考[psutil官网](https://psutil.readthedocs.io/en/latest/)。
:::