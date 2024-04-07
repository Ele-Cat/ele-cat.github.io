---
outline: [2, 3]
---

# Javascript 数据处理

## 数字

### 01-数字转换

使用`parseInt()`、`parseFloat()`或`Number()`等方法将字符串转换为数字。

```js
let str = "123";
console.log(parseInt(str)); // 123

let floatStr = "3.14";
console.log(parseFloat(floatStr)); // 3.14

console.log(Number(str)); // 123
console.log(Number(floatStr)); // 3.14

console.log(str * 1); // 123
console.log(floatStr * 1); // 3.14
```

### 02-数字格式化

使用`toFixed()`、`toPrecision()`、`toExponential()`等方法。

```js
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toPrecision(3)); // "3.14"
console.log(num.toExponential(2)); // "3.14e+0"
```

### 03-数学计算

使用 Math 对象提供的方法，如 `​Math.round()`​（四舍五入）、`​Math.floor()`​（向下取整）、`​Math.ceil()`​（向上取整）、`​Math.abs()`​（绝对值）等。

```js
console.log(Math.round(3.4)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.floor(3.9)); // 3
console.log(Math.ceil(3.1)); // 4
console.log(Math.abs(-4)); // 4
```

## 字符串

### 01-获取字符串长度

使用字符串的 `length` 属性。

```js
let str = "Hello World";
console.log(str.length); // 11
```

### 02-字符串连接

使用`+`运算符、`concat()`、`${}`方法。

```js
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World"
```

```js
let str1 = "Hello";
let str2 = " ";
let str3 = "World";
console.log(str1.concat(str2, str3)); // "Hello World"
```

```js
let str1 = "Hello";
let str2 = "World";
console.log(`${str1} ${str2}`); // "Hello World"
```

### 03-字符串截取

使用 `substring()`、`substr()`或 `slice()`方法。

```js
let str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substr(6, 5)); // "World"
console.log(str.slice(-5)); // "World"
```

:::tip 区别

1. `substring(startIndex, endIndex) `方法：

   - 描述：返回一个新的字符串，包括从 `startIndex` 到 `endIndex - 1`（不包括 `endIndex`）之间所有的字符。
   - 参数：
     - `startIndex`：必需，要提取的子字符串的起始位置的索引。如果是负数，则视为 0。
     - `endIndex`：可选，要提取的子字符串的结束位置的索引。如果省略该参数，则提取到字符串的末尾。
   - 返回值：返回截取的子字符串。

2. `substr(startIndex, length) `方法：

   - 描述：返回一个新的字符串，从 `startIndex` 开始，长度为 `length` 的字符子串。
   - 参数：
     - `startIndex`：必需，要从该索引开始提取子字符串。如果是负数，则表示从末尾倒数索引。
     - `length`：可选，指定要提取的字符数。如果省略或超出字符串长度，则提取到字符串的末尾。
   - 返回值：返回截取的子字符串。

3. `slice(startIndex, endIndex) `方法：

   - 描述：返回一个新的字符串，包括从 `startIndex` 到 `endIndex - 1`（不包括 `endIndex`）之间所有的字符。
   - 参数：
     - `startIndex`：可选，要提取的子字符串的起始位置的索引。如果是负数，则从末尾开始计数。
     - `endIndex`：可选，要提取的子字符串的结束位置的索引。如果省略该参数，则提取到字符串的末尾。
   - 返回值：返回截取的子字符串。

这三个方法有一些区别：

- `substring()` 方法将 `startIndex` 和 `endIndex` 作为参数，并根据这两个索引提取字符。如果 `startIndex` 大于 `endIndex`，则交换这两个值。
- `substr()` 方法将 `startIndex` 和 `length` 作为参数，并提取从 `startIndex` 开始指定长度的字符。
- `slice()` 方法使用 `startIndex` 和 `endIndex` 作为参数，并提取从 `startIndex` 到 `endIndex - 1`（不包括 `endIndex`）之间的字符。

:::

### 04-字符串查找

使用`indexOf()`、`lastIndexOf()`、`startsWith()`、`endsWith()`或`includes()`等方法。

```js
let str = "Hello World";
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 7
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true
console.log(str.includes("llo")); // true
```

:::tip

- **indexOf(searchValue, startIndex)​:** 返回指定字符或子字符串在原字符串中从 startIndex 开始第一次出现的位置的索引。如果未找到，则返回-1。
- **​lastIndexOf(searchValue, startIndex)​:** 返回指定字符或子字符串在原字符串中从 startIndex 开始最后一次出现的位置的索引。如果未找到，则返回-1。
- ​**​startsWith(searchValue, startIndex)​:** 检查字符串是否以指定的字符或子字符串在 startIndex 位置开始。返回布尔值。
- **endsWith(searchValue, endIndex)​:** 检查字符串是否以指定的字符或子字符串在 endIndex 位置结尾。返回布尔值。
- **​includes(searchValue, startIndex):​** 检查字符串是否包含指定的字符或子字符串。返回布尔值。
  :::

### 05-字符串替换

使用`replace()`或正则表达式的`replace()`方法。

```js
let str = "Hello World";
console.log(str.replace("Hello", "Hi")); // "Hi World"
console.log(str.replace(/o/g, "e")); // "Helle Werld"
```

:::tip

`replace()` 方法用于在字符串中替换指定的字符或子字符串。

语法：`string.replace(searchValue, replaceValue)`

参数：

- `searchValue`：必需，要被替换的字符或子字符串。
- `replaceValue`：必需，替换 `searchValue` 的新字符或子字符串。

返回值：一个新的字符串，其中所有的 `searchValue` 都被 `replaceValue` 替换。

注意事项：

- `replace()` 方法只会替换第一个匹配到的字符或子字符串。如果需要替换所有匹配到的字符或子字符串，可以使用正则表达式，并且使用全局(g)标志。
- `replace()` 方法不会修改原始字符串，而是返回一个新的字符串作为结果。

:::

### 06-字符串分割

使用`split()`方法将字符串拆分成数组。

```js
let str = "Hello,World";
console.log(str.split(",")); // ["Hello", "World"]
```

## 数组

### 01-数组去重

1、Array.from()叠加 new Set()方法

字符串或数值型数组的去重可以直接使用 from 方法。

```js
let arr = [1, 2, 3, 4, 5, 2, 6, 4];
let uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]
```

2、spread 操作符(…)

扩展运算符是 ES6 的一大创新，还有很多强大的功能。

```js
let arr = [1, 2, 3, 4, 5, 2, 6, 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]
```

### 02-数组合并

当然你会想到 concat()方法，但是哦，spread 操作符(...)也很香的，这也是扩展运算符的另一个应用。

```js
let arr1 = [1, 2, 4, 5];
let arr2 = [4, 5, 6, 7];
console.log([...arr1, ...arr2]); // [1, 2, 4, 5, 4, 5, 6, 7]
```

### 03-数组交集

要求两个数组的交集，首先确保数组不重复，然后使用 filter()方法和 includes()方法。

```js
let arr1 = [1, 2, 4, 5];
let arr2 = [4, 5, 6, 7];
let aloneArrs = [...new Set(arr1)].filter((item) => arr2.includes(item));
console.log(aloneArrs); // [4, 5]
```

### 04-数组并集

```js
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const unionArrs = [...new Set([...arr1, ...arr2])];
console.log(unionArrs); // [1, 2, 3, 4, 5]
```

### 05-数组置空

如果要清空一个数组，将数组的长度设置为 0 即可，额，这个有点简单。

```js
let arr = [1, 2, 3, 4, 5, 2, 6, 4];
arr.length = 0;
console.log(arr); // []
```

### 06-数组填充数据

如果我们需要用一些数据来填充数组，或者需要一个具有相同值的数据，我们可以用 fill()方法。

```js
let nums = new Array(8).fill("8");
console.log(nums); // ['8', '8', '8','8', '8', '8','8', '8']
```

### 07-数组对象排序

sort()方法

```js
let arr = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 120,
  },
  {
    name: "王五",
    age: 14,
  },
  {
    name: "赵四",
    age: 18,
  },
];
function compare(property) {
  return function (a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return value2 - value1;
    // 降序
  };
}
console.log(arr.sort(compare("age")));
```

### 08-替换数组的特定值

splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组。特别需要注意插入值的位置！

```js
// arrayObject.splice(index,howmany,item1,.....,itemX)
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.splice(2, 1, "https://ele-cat.github.io/");
console.log(arr); // [1, 2, 'https://ele-cat.github.io/', 4, 5, 6]
console.log(result); // [3]
```

### 09-数组映射

我们先介绍一下 map 方法。map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，它会按照原始数组元素顺序依次处理元素。注意： map()不会改变原始数组，也不会对空数组进行检测。
下面我们来实现一个没有 map 的数组映射：

```js
// array.map(function(currentValue,index,arr), thisValue)
let counts = [{ num: 1 }, { num: 2 }, { num: 4 }, { num: 5 }];
let nums = Array.from(counts, ({ num }) => num);
console.log(nums); // [1, 2, 4, 5]
```

### 10-数组转换对象

如果要将数组转换为对象，最快的方法莫过于 spread 运算符(...)。

```js
let users = ["张三", "李四", "王五", "赵四"];
let usersObj = { ...users };
console.log(usersObj); // {0: '张三', 1: '李四', 2: '王五', 3: '赵四'}
```

### 11-删除数组中的假值

我们时常需要在处理数据的时候要去掉假值。在 Javascript 中，假值是 false, 0， " "， null, NaN, undefined。

```js
let users = ["张三", "李四", null, undefined, false, "", NaN, "王五", "赵四"];
let trueArr = users.filter(Boolean);
console.log(trueArr); // ['张三', '李四', '王五', '赵四']
```

### 12-获取数组中的随机值

我们可以根据数组长度获得一个随机索引号。

```js
let users = ["张三", "李四", "王五", "赵四"];
console.log(users[Math.floor(Math.random() * (users.length + 1))]);
```

### 13-lastIndexOf()方法

lastIndexOf()可以帮助我们查找元素最后一次出现的索引。

```js
let users = ["张三", "李四", "王五", "赵四", "王五"];
console.log(users.lastIndexOf("王五")); // 4
```

### 14-数组所有值累加

reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

```js
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((x, y) => x + y);
console.log(sum); // 15
```

## 对象

> 对象是 Javascript 最常见的概念之一，它为我们提供了处理数据的许多可能性，熟悉对象的一些常用操作是很有必要的。

### 对象操作

<Comment />
