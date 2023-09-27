# Sass 学习笔记

[菜鸟学习地址](https://www.runoob.com/sass/sass-tutorial.html)
[官方快速入门](https://www.sass.hk/guide/)

## 01. Sass 是什么

> Sass (英文全称：Syntactically Awesome Stylesheets) 是一个最初由 Hampton Catlin 设计并由 Natalie Weizenbaum 开发的层叠样式表语言。

- Sass 是一个 CSS 预处理器。
- Sass 是 CSS 扩展语言，可以帮助我们减少 CSS 重复的代码，节省开发时间。
- Sass 完全兼容所有版本的 CSS。
- Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性。
- Sass 生成良好格式化的 CSS 代码，易于组织和维护。
- Sass 文件后缀为 .scss。

::: tip 为什么使用 Sass

1. CSS 本身语法不够强大，导致重复编写一些代码，无法实现复用，而且在代码也不方便维护。
2. Sass 引入合理的样式复用机制，增加了规则、变量、混入、选择器、继承、内置函数等等特性。

```scss
/* 定义颜色变量，要修改颜色值，修改这里就可以了 */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;

/* 使用变量 */
.main-header {
  background-color: $primary_1;
}
.menu-left {
  background-color: $primary_2;
}
.menu-right {
  background-color: $primary_3;
}
```

:::
::: tip Sass 是如何工作的
浏览器并不支持 Sass 代码。因此，你需要使用一个 Sass 预处理器将 Sass 代码转换为 CSS 代码。
:::

## 02. Sass 的安装与使用

### 2.1 安装

```sh
npm install -g sass
```

查看版本

```sh
sass --version
# 1.53.0 compiled with dart2js 2.17.3
```

### 2.2 使用

1. 新建 `runoob-test.scss` 文件
2. 录入以下代码

```scss
/* 定义变量与值 */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* 使用变量 */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```

3. 将 `scss` 转换为 `css` 【在命令行里展示】

```sh
sass runoob-test.scss
# @charset "UTF-8";
# /* 定义变量与值 */
# /* 使用变量 */
# body {
#   background-color: lightblue;
#   color: darkblue;
#   font-size: 18px;
# }
```

4. 将 `scss` 转换为 `css` 【自动生成 css 文件】

```sh
sass runoob-test.scss test.css
```

`test.css`
::: tip 生成的 test.css

```css
@charset "UTF-8";
/* 定义变量与值 */
/* 使用变量 */
body {
  background-color: lightblue;
  color: darkblue;
  font-size: 18px;
}

/*# sourceMappingURL=test.css.map */
```

:::

### 2.3 在线使用

[在线地址](https://www.sassmeister.com)

<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/56b04238c591c794bf0def0a98f0e5a5"></iframe>
</div>

## 03. Sass 变量

### 3.1 变量

Sass 变量可以存储以下信息：

- 字符串
- 数字
- 颜色值
- 布尔值
- 列表
- null 值

Sass 变量使用 `$` 符号：

```scss
$variablename: value;
```

<div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/e2b8eb6b9069d4363bfe8b156aeedbf2"></iframe>
</div>

### 3.2 作用域

Sass 变量的作用域只能在当前的层级上有效果，如下所示 h1 的样式为它内部定义的 green，p 标签则是为 red。

<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/2b55d1f9e74b051e6b912124c3ae219f"></iframe>
</div>

> !global【当然 Sass 中我们可以使用 !global 关键词来设置变量是全局的】

<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/1aee87adab465d39eb56edda1cc66bec"></iframe>
</div>

## 04. 嵌套规则

> Sass 嵌套 CSS 选择器类似于 HTML 的嵌套规则。

<div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/9bac018d8abe6f2d3238562b2d3022e7"></iframe>
</div>

## 05. 导入@import

> Sass 可以帮助我们减少 CSS 重复的代码，节省开发时间。
> 我们可以安装不同的属性来创建一些代码文件，如：变量定义的文件、颜色相关的文件、字体相关的文件等。

1. 类似 CSS，Sass 支持 @import 指令。
2. @import 指令可以让我们导入其他文件等内容。
3. CSS @import 指令在每次调用时，都会创建一个额外的 HTTP 请求。但，Sass @import 指令将文件包含在 CSS 中，不需要额外的 HTTP 请求。

Sass @import 指令语法如下：

```scss
@import filename;
```

注意：**包含文件时不需要指定文件后缀，Sass 会自动添加后缀 .scss。**

## 06. @mixin 与 @include

> @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。

> @include 指令可以将混入（mixin）引入到文档中。

### 6.1 基础使用

1. 定义一个混入
   混入(mixin)通过 @mixin 指令来定义。 @mixin mixin-name { property: value; property: value; ... }

```scss
@mixin mixin-name {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

2. 使用混入
   @include 指令可用于包含一混入：

```scss
selector {
  @include mixin-name;
}
```

<div class="iframe-box">
  <iframe id="iframe" style="height:350px" src="https://www.sassmeister.com/gist/84b11fdef15b6563c51b35bfb5ddc512"></iframe>
</div>

### 6.2 混入包含混入

<div class="iframe-box">
  <iframe id="iframe" style="height:600px" src="https://www.sassmeister.com/gist/180ae5951818c379a4366c4633faa37a"></iframe>
</div>

### 6.3 向混入传递参数

> 我们可以向混入传递变量。(参数可添加默认值)

<div class="iframe-box">
  <iframe id="iframe" style="height:400px" src="https://www.sassmeister.com/gist/cd91141d69a1ebdf687f5bddede9e5d3"></iframe>
</div>

> 可变参数【不能确定一个混入（mixin）或者一个函数（function）使用多少个参数，这时我们就可以使用 `...` 来设置可变参数】

用于创建盒子阴影（box-shadow）的一个混入（mixin）可以采取任何数量的 box-shadow 作为参数。

<div class="iframe-box">
  <iframe id="iframe" style="height:300px" src="https://www.sassmeister.com/gist/039f21e5f8747d761bac71893e66dcaf"></iframe>
</div>

## 07. @extend 与 继承

1. @extend 指令告诉 Sass 一个选择器的样式从另一选择器继承。
2. 如果一个样式与另外一个样式几乎相同，只有少量的区别，则使用 @extend 就显得很有用。

<div class="iframe-box">
  <iframe id="iframe" style="height:450px" src="https://www.sassmeister.com/gist/7744d4a70c3901ea99ce70b81399e3f9"></iframe>
</div>

3. 使用 @extend 后，我们在 HTML 按钮标签中就不需要指定多个类 class="button-basic button-report" ，只需要设置 class="button-report" 类就好了。
4. @extend 很好的体现了代码的复用。

## 08. Sass 函数

> Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：

- 字符串函数
- 数字函数
- 列表函数
- Introspection 函数
- 条件函数
- Map 函数
- 颜色函数

<div class="iframe-box">
  <iframe id="iframe" style="height:350px" src="https://www.sassmeister.com/gist/1931a52da8ae10d1d60eb18063fb5fc1"></iframe>
</div>

### 8.1 字符串函数

> 字符串函数主要提供了字符串类型的相关操作，就像在 javascript 中一样，Sass 提供的字符串函数可以获取字符串的长度，字符串的下标以及字符串中的大小写字母转换等等。

#### 8.1.1 quote ($ string) 和 unquote($ string)

这两个函数我们放在一起讲解，它们都接收 1 个参数，参数是字符串类型，quote($string) 函数的返回结果是 以带引号的形式返回你传入的字符串，反之 unquote($string) 函数的返回结果是以不带引号的形式返回你传入的字符串

```scss
string.quote(aaa) //=> "aaa"
unquote("bbb")  //=> bbb
```

#### 8.1.2 str-index($string, $substring)

str-index($string, $substring) 函数接收 2 个参数，返回 $substring 在 $string 中的第一次出现的索引，如果在 $string 中不包含 $substring 则返回 null

```scss
str-index("abcde", "a") //=> 1
str-index("abcde", "c") //=> 3
```

#### 8.1.3 str-insert($string, $insert, $index)

这个函数是用于字符串的插入，str-insert($string, $insert, $index) 函数接收 3 个参数，第 1 个参数是一个字符串，第 2 个参数是要插入的字符串，第 3 个参数是插入的位置，返回结果是插入后的字符串

```scss
str-insert("abcde", "j", 1)  //=> "jabcde"
str-insert("abcde", "j", 4)  //=> "abcjde"
str-insert("abcde", "j", 100)  //=> "abcdej"
str-insert("abcde", "j", -20)  //=> "jabcde"
```

#### 8.1.4 str-length($string)

这个函数用于获取传入的字符串的长度，只接收一个字符串参数，返回值是它的长度，返回值是 number 类型

```scss
str-length("abcde")  //=> 5
```

#### 8.1.5 str-slice($string, $start-at, $end-at)

这个函数用于字符串的截取，str-slice($string, $start-at, $end-at) 函数接收 3 个参数，第 1 个参数是一个字符串，第 2 个参数是要截取的开始位置，第 3 个参数是要截取的结束位置，返回结果是截取到的字符串；要记住 Sass 的字符串截取函数返回的字符串是包含截取的开始和结束位置字符的

```scss
str-slice("abcde", 1, 2)  //=> "ab"
str-slice("abcde", 2, 4)  //=> "bcd"
```

#### 8.1.6 to-upper-case($string) 和 to-lower-case($string)

这两个函数我们放在一起来讲解，它们都接收 1 个字符串参数；to-upper-case($string) 函数 将传入的字符串转换为大写并返回，to-lower-case($string) 函数将传入的字符串转换为小写并返回

```scss
to-upper-case("abcde") //=> "ABCDE"  转为大写
to-upper-case("Abc")  //=> "ABC"  转为大写
to-lower-case("ABC")  //=> "abc"  转为小写
to-lower-case("Abc")  //=> "abc"  转为小写
```

#### 8.1.7 unique-id()

unique-id() 函数会返回一个随机的字符串，并且这个字符串在 Sass 编译中是唯一的，这个我们用得不多，不过当你需要生成一个唯一的字符串标识的时候你可以使用它

```scss
unique-id()  //=> urgdjis
```

### 8.2 数字函数

Sass 提供了很多数字函数来提供计算和数值转换等功能，在 Sass 中我们也称之为 Math 函数，就像 javascript 中提供的 Math 函数一样，为我们提供了很多数学上的计算，首先我们先举例看一下简单的仅有数学计算意义的数字函数：

```scss
math.$e  //=> 2.7182818285  返回数学常数 e 的值
math.$pi //=> 3.1415926536  返回数学常数 π 的值
ceil(4.2)  //=> 5  向上取整
floor(4.8)  //=> 4  向下取整
round(4.3)  //=> 4  四舍五入取近似值
round(4.7)  //=> 5  四舍五入取近似值
abs(-10px)  //=> 10px  取绝对值
math.cos(100deg)  //=> -0.1736481777 返回余弦值，单位必须与deg兼容或无单位
math.sin(100deg) //=> 0.984807753  返回正弦值，单位必须与deg兼容或无单位
math.tan(100deg) //=> -5.6712818196  返回正切值，单位必须与deg兼容或无单位
math.acos(0.5) //=> 60deg  返回反余弦值，传入的参数不可带单位
math.asin(0.5) //=> 30deg  返回反正弦值，传入的参数不可带单位
math.atan(10) //=> 84.2894068625deg  返回反正切值，传入的参数不可带单位
random()  //=> 返回一个 0~1 之间的随机数
percentage(0.2)  //=> 20%  将无单位的小数转换为百分比数
```

#### 8.2.1 math.log($number, $base)

这个函数用于计算对数，它会返回 $number 相对于 $base 的对数，这两个参数是不可以带有单位的。

```scss
math.log(10)  //=> 2.302585093
math.log(10, 10)  //=> 1
```

#### 8.2.2 math.pow($base, $exponent)

math.pow($base, $exponent) 函数用于计算 $base 的 $exponent 次幂，是用于幂运算的。

```scss
math.pow(10, 2)  //=> 100
```

#### 8.2.3 math.sqrt($number)

math.sqrt($number) 函数返回传入参数的平方根。

```scss
math.sqrt(100)  //=> 10
```

#### 8.2.4 comparable($number1, $number2)

comparable($number1, $number2) 用来判断两个数值的单位是否兼容，它的返回结果是布尔值，这个在你需要对单位进行要求的时候很有用

```scss
comparable(10px, 10)  //=> true
comparable(10px, 10px)  //=> true
comparable(10px, 10em)  //=> false
```

#### 8.2.5 unitless($number)

unitless($number) 用于判断传入的数值是否没有单位，返回结果是布尔值，如果没带单位返回 true，带单位则返回 false。

```scss
unitless(100)  //=> true
unitless(100px)  //=> false
```

#### 8.2.6 unit($number)

```scss
unit(8)  //=> ""
unit(8px)  //=> "px"
unit(8em)  //=> "em"
```

#### 8.2.7 max(KaTeX parse error: Expected 'EOF', got '和' at position 12: number...) 和 ̲ min(number…)

这两个函数分别接收以逗号分隔的数值，并且分别返回其中最大的值和最小的值。

```scss
math.max(8, 4)  //=>  8
math.min(8, 4)  //=>  4
```

:::warning 数字函数
这些函数是辅助你来对数字类型的值进行一些操作，很像 javascript 中提供的 Math 函数，你不需要死记硬背，这些函数需要用到的时候再查也可以
:::

### 8.3 列表函数

#### 8.3.1 append($list, $val, $separator)

append($list, $val, $separator) 函数用于向一个列表的末尾插入元素，它接收 3 个参数，第 1 个参数是一个列表（以空格或者逗号分隔），第 2 个参数是要插入的值（也可以是一个列表），第 3 个参数 $separator 表示返回的列表是否使用与 $list 相同的分隔符，这个默认是 auto （ 使用与$list 相同的分隔符），这个函数的返回值也是一个列表。

```scss
append(10 11 12, 13)  //=> 10 11 12 13
append((10,11,12), 13)  //=> 10, 11, 12, 13
```

这里需要注意的是，如果第 1 个参数你是使用逗号分隔的列表，那么你要将这个列表使用括号括起来！

#### 8.3.2 join($list1, $list2, $separator, $bracketed)

join($list1, $list2, $separator, $bracketed) 函数用于连接两个列表，上面我们讲到向列表默认插入元素，如果插入的元素是一个列表，那么请你使用 join 函数。

这个函数接收 4 个参数，第 1 个参数是一个列表，第 2 个参数是要插入的列表，第 3 个参数是返回列表的分隔符，默认是 auto （列表将使用与$list1相同的分隔符（如果有分隔符），否则使用与$list2 相同的分隔符，或者使用空格。不允许使用其他值），第 4 个参数是布尔值，用来设置返回的列表是否包含方括号。

```scss
join(5 6, 7 8)  //=> 5 6 7 8
join((5,6), (7,8))  //=> 5, 6, 7, 8
join(5 6, 7 8, $bracketed: true)  //=> [5 6 7 8]
```

#### 8.3.3 index($list, $value)

index($list, $value) 函数用于返回 $value 在列表 $list 中的索引，如果在 $list 中没有 $value 则返回 null。

```scss
index(a b solid, b)  //=> 2
index(a b solid, solid)  //=> 3
```

#### 8.3.4 length($list)

这个函数比较简单，就是返回列表的长度。返回的值是 number 类型。

```scss
length(a b solid)  //=> 3
length("")  //=> 1
```

#### 8.3.5 list-separator($list)

这个函数用来返回列表的分隔符，如果没有分隔符就返回空格 space 。

```scss
list-separator(a b)  //=> space
list-separator((a,b))  //=> comma
```

#### 8.3.6 nth($list, $n)

nth($list, $n) 这个函数用于通过索引在列表中取元素，第 1 个参数是一个列表，第 2 个参数 $n 是索引位置，如果 $n 为负数，则从列表的末尾开始计数。如果索引 $n 处没有元素，则引发错误。

```scss
nth(a b c d, 2)  //=> b
```

### 8.4 Introspection 函数

Introspection 函数实际在样式中写的非常少，一般用于代码的调试以及做一些判断。

```scss
type-of(10px)  //=> number 用于判断数据的类型，返回数据的类型
type-of(10px 20px 30px) //=> list 用于判断数据的类型，返回数据的类型
variable-exists("a") //=> false  用于判断当前范围中一个变量是否存在，这里是判断变量 $a 是否存在
meta.module-variables($module)  //=> 用于返回一个模块中定义的所有变量
call($function, $args...)  //=> 使用 $args 调用 $function，这个很像 javascript 中的 call
```

### 8.5 条件函数

if($condition, $if-true, $if-false) 函数是 Sass 中的条件函数，它接收 3 个参数，第 1 个参数是一个判断条件或者布尔值，第 2 个参数是当判断条件为真时的返回值，第 3 个参数是当判断条件为假时的返回值

```scss
if(true, 18px, 16px)  //=> 18px
if(true, 18px, 16px)  //=> 16px
```

### 8.6 Map 函数

#### 8.6.1 map-get($map, $key)

map-get($map, $key) 函数是从 $map 中取出 key 为 $key 的值，第 1 个参数是 Maps 类型的数据

```scss
$val_map: ("a": 1, "b": 2, "c": 3); // 定义 maps 类型的数据
map-get($val_map, "a")  //=> 1
map-get($val_map, "b")  //=> 2
```

#### 8.6.2 map-has-key($map, $key)

map-has-key($map, $key) 这个函数返回在 $map 中是否有 $key，返回的值是布尔类型

```scss
$val_map: ("a": 1, "b": 2, "c": 3); // 定义 maps 类型的数据
map-has-key($val_map, "b")  //=> true
map-has-key($val_map, "e")  //=> false
```

#### 8.6.3 map-keys($map)

map-keys($map) 函数返回传入的 map 中所有的 key，并且会以逗号分隔为一个列表返回

```scss
$val_map: ("a": 1, "b": 2, "c": 3); // 定义 maps 类型的数据
map-keys($val_map)  //=> "a","b","c"
```

#### 8.6.4 map-merge($map1, $map2)

map-merge($map1, $map2) 函数用于合并两个 maps 类型的数据 $map1 和 $map2，并且会返回一个新的 map，如果 $map1 和 $map2 中有相同的 key ，那么 $map2 中的数据会覆盖 $map1 中的这条数据，这个函数和 javascript 中合并两个对象的方法很类似

```scss
$val_map1: ("a": 1, "b": 2);
$val_map2: ("c": 3, "d": 4);
map-merge($val_map1, $val_map2)
// => 返回的数据
// (
//   "a": 1,
//   "b": 2,
//   "c": 3,
//   "d": 4
// )
```

#### 8.6.5 map-remove($map, $keys…)

看到 remove 我们就知道这个是用来删除的，map-remove($map, $keys…) 函数用来删除 $map 中的一个或多个与 $keys 关联的值，并且返回删除后的 map。

```scss
$val_map: ("a": 1, "b": 2, "c": 3); // 定义 maps 类型的数据
map-remove($val_map, "a", "b")  //=> ("c": 3)
```

#### 8.6.6 map-values($map)

前面讲到一个函数可以返回 map 中所有的 key ，map-values($map) 这个函数与其类似是用来返回 map 中所有的 value，同样会以逗号分隔为一个列表返回

```scss
$val_map: ("a": 1, "b": 2, "c": 3); // 定义 maps 类型的数据
map-values($val_map)  //=> 1,2,3
```

### 8.7 颜色函数

#### 8.7.1 用于获取通道色值的函数

Sass 提供了可以获取一个色值中红色通道、绿色通道和蓝色通道色值的函数，它们分别是 red($color) 、green($color) 和 blue($color)。你可能还不太了解这三种通道是什么，不要紧，只要知道这三种函数和它的使用就可以

```scss
blue(#BA55D3)  //=> 211
red(#BA55D3)  //=> 186
green(#BA55D3)  //=> 85
```

#### 8.7.2 saturate($color, $amount)

saturate($color, $amount) 函数用于调整 $color 的饱和度，第 1 个参数 $color 是一个颜色值，第 2 个参数是 0% ～ 100% 之间的百分数，其返回值也是一个颜色值。

```scss
saturate(#BA55D3, 20%)  //=> #c740e8
```

#### 8.7.3 scale-color(…)

这是一个非常强大的颜色函数，它接收很多个参数，可以调整一个色值的很多属性，包括这个颜色的红、绿、蓝通道，以及亮度等等

```scss
scale-color(#BA55D3, $red: 15%)  //=> #c455d3  调整红色通道
scale-color(#BA55D3, $blue: 15%)  //=> #ba55da  调整蓝色通道
scale-color(#BA55D3, $lightness: -10%, $saturation: 10%)  //=> #b338d2 调整亮度和饱和度
scale-color(#BA55D3, $alpha: -30%)  //=> rgba(186, 85, 211, 0.7)  调整不透明度
```

通过上面的例子可以看到颜色函数提供了非常强大的用于调色的函数，驾驭它的前提是你要有非常丰富的调色知识以及一定的美术基础。在实际的项目中我们非常少的用到颜色函数，因为一般都是由公司的 UI 设计师来进行调色，所以作为入门教程，你只需要了解 Sass 中的颜色函数就好。

### 8.8 自定义函数

```scss
// 定义函数
@function a() {
  @return "a"
}
// 使用函数
.p{
  font: a();
}
```

```scss
// 截取字符串的后半部分
@function middleStr($str) {
  $leng: str-length($str);
  $start: $leng / 2;
  @return str-slice($str, $start, $leng);
}

// 判断class长度范围
@function classLong($class, $max) {
  $leng: str-length($class);
  @if $leng > $max{
    @return true;
  } @else {
    @return false;
  }
}

// 大小写转换
@function upperOrLower($str, $type) {
  @if type-of($str) == "string"{
    @if $type == "upper"{
      @return to-upper-case($str);
    } @else {
      @return to-lower-case($str)
    }
  }
}
```