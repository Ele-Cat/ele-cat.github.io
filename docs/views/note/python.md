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

5. `__call__`

### 9.5 枚举类

### 9.6 元类
