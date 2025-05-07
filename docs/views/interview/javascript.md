# Javascript 面试题

## 1、JS基础数据类型和复杂数据类型

### 1.基础类型（Primitive Types）
1. **存储方式**：直接存储在栈内存中
2. **包含类型**：
   - `Number`（数字）
   - `String`（字符串）
   - `Boolean`（布尔值）
   - `Undefined`（未定义）
   - `Null`（空值）
   - `Symbol`（唯一值，ES6+）
   - `BigInt`（大整数，ES2020+）

3. **特点**：
   - 赋值时复制值本身
   - 不可变（immutable）
   - 比较时比较值
   - `typeof` 返回具体类型（除 `typeof null` 返回 "object"）

### 2.复杂类型（Reference Types）
1. **存储方式**：数据存储在堆内存中，栈内存存储引用地址
2. **包含类型**：
   - `Object`（对象）
   - `Array`（数组）
   - `Function`（函数）
   - `Date`、`RegExp` 等内置对象

3. **特点**：
   - 赋值时复制引用地址
   - 可变（mutable）
   - 比较时比较引用地址
   - `typeof` 返回 "object"（函数返回 "function"）

### 3.关键区别示例
```js
// 基础类型
let a = 10;
let b = a;  // 值复制
a = 20;
console.log(b); // 10（不受影响）

// 复杂类型
let obj1 = { count: 1 };
let obj2 = obj1;  // 引用复制
obj1.count = 2;
console.log(obj2.count); // 2（同步修改）
```

### 4. 开发注意事项
1. 函数参数传递时，基础类型传值，复杂类型传引用
2. 修改复杂类型会影响所有指向该引用的变量
3. 深度比较复杂类型需要使用 `JSON.stringify()` 或递归比较
4. 复制复杂类型需要深拷贝（如 `JSON.parse(JSON.stringify(obj))` 或扩展运算符 `...`）

## 2、null 和 undefined 的判断方法与区别

### 1、基本概念

#### 1. undefined
- **含义**：表示变量已声明但未赋值
- **产生场景**：
  - 变量声明未初始化
  - 函数参数未传递
  - 访问对象不存在的属性
  - 函数没有返回值

#### 2. null
- **含义**：表示"无"的对象（空对象指针）
- **产生场景**：
  - 显式赋值为 null
  - DOM 获取不存在的元素
  - 作为对象属性的空值

### 2、判断方法对比

#### 1. 松散相等判断（==）
```js
undefined == null  // true（历史遗留问题）
undefined === null // false（类型不同）
```

#### 2. typeof 运算符
```js
typeof undefined // "undefined"
typeof null      // "object"（历史遗留bug）
```

#### 3. 全等判断（推荐）
```js
let x;
x === undefined  // true（判断undefined）
let y = null;
y === null       // true（判断null）
```

#### 4. void 0 用法
```js
let x;
x === void 0     // true（void 0 始终返回undefined）
```

#### 5. 现代API判断
```js
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null)     // "[object Null]"
```

### 3、核心区别

| 特性                | undefined                      | null                          |
|---------------------|-------------------------------|-------------------------------|
| **类型**            | Undefined 类型                | Object 类型（历史遗留）       |
| **含义**            | 未定义                        | 空对象引用                    |
| **默认值**          | 变量默认初始值                | 需要显式赋值                  |
| **JSON序列化**      | 被忽略（不包含在JSON中）      | 保留为null                    |
| **数值转换**        | NaN `Number(undefined)`       | 0 `Number(null)`             |
| **使用建议**        | 表示"缺少值"                  | 表示"空值"                    |

### 4、实用判断方法

#### 1. 判断undefined的推荐方法
```js
if (typeof x === 'undefined') { /*...*/ }
// 或
if (x === void 0) { /*...*/ }
```

#### 2. 判断null的推荐方法
```js
if (x === null) { /*...*/ }
```

#### 3. 同时判断null或undefined
```js
if (x == null) { /*...*/ }  // 注意用==
// 或（现代JS）
if (x === undefined || x === null) { /*...*/ }
// 或（ES2020）
if (x ?? 'default' !== 'default') { /*...*/ }
```

### 5、开发中的使用场景

#### 1. undefined 典型场景
```js
let name;                 // name是undefined
function foo(x) { /* x可能是undefined */ }
obj.notExistProp;         // 访问不存在的属性
```

#### 2. null 典型场景
```js
let element = document.getElementById('nonexistent'); // null
let obj = { value: null }; // 显式设置为空值
```

### 6、面试回答要点

1. **类型区别**：undefined是Undefined类型，null是Object类型
2. **产生原因**：undefined是系统自动分配，null是主动赋值
3. **判断方法**：强调===判断最可靠
4. **使用场景**：undefined表示未定义，null表示空对象
5. **注意事项**：typeof null的bug和==的隐式转换问题

示例回答：
"undefined表示变量未赋值，是Undefined类型；null表示空对象引用，是Object类型（这是历史遗留问题）。判断时推荐使用===，undefined == null为true但类型不同。实际开发中，undefined通常表示系统级的缺失值，而null表示开发者主动设置的空值。"

## 3、箭头函数与普通函数的区别

### 1.核心区别对比

| 特性                | 箭头函数                          | 普通函数                          |
|---------------------|----------------------------------|----------------------------------|
| **this绑定**        | 继承自外层作用域（词法作用域）     | 动态绑定（取决于调用方式）         |
| **arguments对象**   | 没有自己的arguments               | 有自己的arguments对象             |
| **构造函数**        | 不能用作构造函数（无prototype）    | 可以用作构造函数                   |
| **原型属性**        | 没有prototype属性                 | 有prototype属性                   |
| **yield关键字**     | 不能用作生成器函数                 | 可以用作生成器函数                 |
| **简写语法**        | 总是匿名函数                      | 可以是命名函数或匿名函数           |
| **super绑定**       | 没有super                         | 有super绑定                       |

### 2.详细解析

#### 1. this绑定（最关键区别）
**箭头函数**：
```js
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // 输出undefined（this指向外层作用域）
  }
};
obj.greet();
```

**普通函数**：
```js
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name); // 输出'Alice'（this指向调用对象）
  }
};
obj.greet();
```

#### 2. arguments对象
**箭头函数**：
```js
const fn = (...args) => {
  console.log(args); // 使用剩余参数替代
  // console.log(arguments); // 报错：arguments未定义
};
fn(1, 2, 3);
```

**普通函数**：
```js
function fn() {
  console.log(arguments); // Arguments(3) [1, 2, 3]
}
fn(1, 2, 3);
```

#### 3. 构造函数能力
**箭头函数**：
```js
const Person = () => {};
const p = new Person(); // 报错：Person is not a constructor
```

**普通函数**：
```js
function Person(name) {
  this.name = name;
}
const p = new Person('Alice'); // 正常
```

### 3.适用场景

#### 1.适合箭头函数的场景
1. 需要保持this上下文的回调函数
   ```js
   button.addEventListener('click', () => {
     this.handleClick(); // this正确指向
   });
   ```
2. 简单的单行函数
   ```js
   const double = x => x * 2;
   ```
3. 函数式编程
   ```js
   const nums = [1, 2, 3].map(x => x * 2);
   ```

#### 2.适合普通函数的场景
1. 需要动态this的方法
   ```js
   const obj = {
     name: 'Alice',
     greet: function() {
       console.log(`Hello, ${this.name}`);
     }
   };
   ```
2. 构造函数
   ```js
   function Person(name) {
     this.name = name;
   }
   ```
3. 需要arguments对象的函数
   ```js
   function sum() {
     return [...arguments].reduce((a, b) => a + b);
   }
   ```

### 4.面试回答示例

箭头函数和普通函数的主要区别在于：
1. this绑定方式不同，箭头函数继承外层this，普通函数动态绑定；
2. 箭头函数没有arguments对象和prototype，不能用作构造函数；
3. 语法更简洁。实际开发中，箭头函数适合需要保持this上下文的场景，而普通函数更适合需要动态this或作为构造函数的情况。"

## 4、JavaScript 原型链详解

### 1、基本概念

#### 1. 原型（Prototype）
- 每个 JavaScript 对象（除 null 外）都有一个 `__proto__` 属性，指向它的原型对象
- 函数对象除了 `__proto__` 外还有一个 `prototype` 属性（用于构造函数）

#### 2. 原型链
当访问一个对象的属性时，如果该对象没有这个属性，JavaScript 会沿着 `__proto__` 向上查找，直到找到该属性或到达原型链末端（null），这种链式结构称为原型链。

### 2、核心组成部分

1. **构造函数（Constructor）**：用于创建对象的函数
2. **原型对象（Prototype）**：构造函数拥有的 `prototype` 属性
3. **实例（Instance）**：通过构造函数创建的对象
4. **`__proto__`**：实例指向原型对象的链接

### 3、原型链关系图

```
实例对象
  │
  ├── __proto__ → 构造函数的prototype
  │                 │
  │                 ├── constructor → 构造函数本身
  │                 │
  │                 └── __proto__ → Object.prototype
  │                                     │
  │                                     └── __proto__ → null
  │
  └── constructor → 构造函数
```

### 4、创建对象与原型链

#### 1. 构造函数模式

```js
function Person(name) {
  this.name = name;
}

// 在原型上添加方法
Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p = new Person('Alice');

// 原型链关系：
// p.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null
```

#### 2. class 语法（ES6）

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// 底层实现仍然是基于原型链
```

### 5、关键验证方法

1. **instanceof**：检测构造函数的 prototype 是否出现在实例的原型链上
   ```js
   p instanceof Person // true
   ```

2. **Object.getPrototypeOf()**：获取对象的原型
   ```js
   Object.getPrototypeOf(p) === Person.prototype // true
   ```

3. **isPrototypeOf()**：检查一个对象是否存在于另一个对象的原型链中
   ```js
   Person.prototype.isPrototypeOf(p) // true
   ```

4. **hasOwnProperty()**：检测属性是否为对象自身属性（非继承）
   ```js
   p.hasOwnProperty('name') // true
   p.hasOwnProperty('sayHello') // false
   ```

### 6、原型链继承

#### 1. 组合继承（最常用）

```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 继承属性
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype); // 继承方法
Child.prototype.constructor = Child; // 修复构造函数指向
```

#### 2. class 继承（ES6）

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

### 7、面试回答要点

1. **定义清晰**：说明原型链是JS实现继承的机制
2. **关系明确**：描述构造函数、原型对象和实例的关系
3. **验证方法**：提及instanceof和原型相关方法
4. **继承实现**：能说明至少一种继承方式
5. **现代语法**：提及class与原型的关系

示例回答：
"JavaScript通过原型链实现继承。每个对象都有__proto__指向其原型，而构造函数的prototype属性就是实例的原型。访问属性时会沿着这条链向上查找直到null。ES6的class本质也是基于原型链的语法糖。实际开发中常用组合继承或class继承来实现代码复用。"

## 5、JavaScript 闭包的理解

### 1、闭包的定义

闭包(Closure)是指**能够访问自由变量的函数**（自由变量是指在函数中使用的，既不是函数参数也不是函数局部变量的变量）。

简单说：**闭包 = 函数 + 函数能够访问的外部变量**

### 2、闭包的形成条件

1. 函数嵌套函数
2. 内部函数引用了外部函数的变量
3. 内部函数被外部函数返回或在外部被引用

### 3、闭包的核心特性

1. **记忆性**：闭包可以记住创建时的环境
2. **封装性**：可以创建私有变量和方法
3. **持久性**：闭包中的变量会一直存在内存中，不会被垃圾回收

### 4、闭包示例

#### 1. 基础示例
```js
function outer() {
  let count = 0; // 自由变量
  
  function inner() {
    count++;
    console.log(count);
  }
  
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

#### 2. 模块模式（实现私有变量）
```js
const module = (function() {
  let privateVar = 0;
  
  function privateMethod() {
    privateVar++;
  }
  
  return {
    publicMethod: function() {
      privateMethod();
      console.log(privateVar);
    }
  };
})();

module.publicMethod(); // 1
module.publicMethod(); // 2
```

### 5、闭包的应用场景

1. **封装私有变量**：创建只能通过特定方法访问的变量
2. **函数工厂**：创建相似但配置不同的函数
3. **回调函数**：保持回调函数执行时的上下文
4. **防抖/节流**：保持计时器状态
5. **模块化开发**：实现模块模式

### 6、闭包的优缺点

#### 优点：
1. 实现数据私有化
2. 延长局部变量的生命周期
3. 实现函数式编程中的柯里化等特性

#### 缺点：
1. **内存泄漏风险**：闭包变量不会被自动回收
2. **性能影响**：闭包比普通函数占用更多内存

### 7、面试回答要点

1. **定义准确**：说明闭包是函数+可访问的外部变量
2. **形成条件**：明确三点必要条件
3. **特性说明**：强调记忆性和封装性
4. **应用举例**：给出实际开发中的使用场景
5. **注意事项**：提及内存管理问题

示例回答：
"闭包是指能够访问自由变量的函数，它有三个形成条件：函数嵌套、内部函数引用外部变量、内部函数被外部引用。闭包具有记忆性和封装性特点，常用于实现私有变量和模块化开发。但要注意闭包可能导致内存泄漏，需要合理使用。"

## 6、JavaScript 垃圾回收机制

### 1、垃圾回收基本概念

JavaScript 使用**自动内存管理**，通过垃圾回收器（Garbage Collector）自动释放不再使用的内存，开发者不需要手动释放内存。

### 2、内存泄漏常见场景

1. **意外的全局变量**
   ```js
   function leak() {
       name = 'Global Leak'; // 未使用var/let/const
   }
   ```

2. **遗忘的定时器/回调**
   ```js
   const timer = setInterval(() => {...}, 1000);
   // 忘记clearInterval(timer)
   ```

3. **DOM引用未释放**
   ```js
   const elements = {
       button: document.getElementById('myButton')
   };
   // 即使DOM被移除，elements.button仍保留引用
   ```

4. **闭包滥用**
   ```js
   function outer() {
       const bigData = new Array(1000000);
       return function inner() {
           console.log('Hello');
           // bigData一直被闭包引用
       };
   }
   ```

### 3、内存管理最佳实践

1. **及时解除引用**
   ```js
   let data = getHugeData();
   processData(data);
   data = null; // 处理完后解除引用
   ```

2. **使用弱引用**
   ```js
   const weakMap = new WeakMap();
   weakMap.set(element, {someData});
   // 当element被移除时自动回收
   ```

3. **避免内存泄漏模式**
   - 谨慎使用全局变量
   - 及时清理定时器/事件监听
   - 避免不必要的闭包

### 4、面试回答要点

1. **内存泄漏**：列举常见场景和解决方案
2. **实践建议**：强调解除引用和弱引用的使用
3. **调试工具**：可提及Chrome DevTools Memory面板

示例回答：
"JS采用自动垃圾回收机制，常见内存泄漏包括全局变量、未清理的定时器等。开发时应及时解除无用引用，必要时使用WeakMap。"

## 7、JavaScript 数组操作方法

### 1、基础操作方法

#### 1. 增删元素
| 方法 | 描述 | 返回值 | 是否改变原数组 |
|------|------|--------|--------------|
| `push()` | 末尾添加元素 | 新长度 | ✅ |
| `pop()` | 删除末尾元素 | 删除的元素 | ✅ |
| `unshift()` | 开头添加元素 | 新长度 | ✅ |
| `shift()` | 删除开头元素 | 删除的元素 | ✅ |

```js
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
arr.pop();   // [1, 2]
arr.unshift(0); // [0, 1, 2]
arr.shift();  // [1, 2]
```

#### 2. 合并拆分
| 方法 | 描述 | 返回值 | 是否改变原数组 |
|------|------|--------|--------------|
| `concat()` | 合并数组 | 新数组 | ❌ |
| `join()` | 数组转字符串 | 字符串 | ❌ |
| `slice(start, end)` | 截取子数组 | 新数组 | ❌ |
| `splice(start, delCount, ...items)` | 删除/插入元素 | 被删除元素数组 | ✅ |

```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
['a', 'b'].join('-');  // "a-b"
[1, 2, 3, 4].slice(1, 3); // [2, 3]
[1, 2, 3].splice(1, 1, 4); // [2]
```

### 2、高阶函数方法

#### 1. 遍历方法
| 方法 | 描述 | 返回值 |
|------|------|--------|
| `forEach()` | 遍历执行函数 | undefined |
| `map()` | 映射新数组 | 新数组 |
| `filter()` | 过滤元素 | 新数组 |
| `reduce()` | 累计计算 | 累计值 |
| `reduceRight()` | 从右累计 | 累计值 |

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
[1, 2, 3].filter(x => x > 1); // [2, 3]
```

#### 2. 查找方法
| 方法 | 描述 | 返回值 |
|------|------|--------|
| `find()` | 查找首个符合条件的元素 | 元素或undefined |
| `findIndex()` | 查找首个符合条件的索引 | 索引或-1 |
| `indexOf()` | 查找元素首次出现位置 | 索引或-1 |
| `lastIndexOf()` | 查找元素最后出现位置 | 索引或-1 |
| `includes()` | 是否包含某元素 | boolean |

```js
[1, 2, 3].find(x => x > 1); // 2
[1, 2, 3].findIndex(x => x > 1); // 1
[1, 2, 3].indexOf(2); // 1
[1, 2, 3, 2].lastIndexOf(2); // 3
['a', 'b', 'c'].includes('b'); // true
```

### 3、排序和操作

#### 1. 排序方法
| 方法 | 描述 | 是否改变原数组 |
|------|------|--------------|
| `sort()` | 排序数组 | ✅ |
| `reverse()` | 反转数组 | ✅ |

```js
[3, 1, 2].sort(); // [1, 2, 3]
[1, 2, 3].reverse(); // [3, 2, 1]
```

#### 2. 其他操作
| 方法 | 描述 | 返回值 |
|------|------|--------|
| `flat()` | 数组扁平化 | 新数组 |
| `flatMap()` | 映射后扁平化 | 新数组 |
| `fill(value, start, end)` | 填充数组 | 修改后的数组 |
| `copyWithin(target, start, end)` | 复制元素 | 修改后的数组 |

```js
[1, [2, 3]].flat(); // [1, 2, 3]
[1, 2, 3].fill(0, 1); // [1, 0, 0]
[1, 2, 3, 4, 5].copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]
```

### 4、判断方法

| 方法 | 描述 | 返回值 |
|------|------|--------|
| `some()` | 是否有元素满足条件 | boolean |
| `every()` | 是否所有元素满足条件 | boolean |
| `Array.isArray()` | 是否为数组 | boolean |

```js
[1, 2, 3].some(x => x > 2); // true
[1, 2, 3].every(x => x > 2); // false
Array.isArray([1, 2, 3]); // true
```

### 5、ES6+ 新增方法

| 方法 | 描述 | 返回值 |
|------|------|--------|
| `Array.from()` | 类数组转数组 | 新数组 |
| `Array.of()` | 创建数组 | 新数组 |
| `findLast()` | 查找最后一个符合条件的元素 | 元素或undefined |
| `findLastIndex()` | 查找最后一个符合条件的索引 | 索引或-1 |

```js
Array.from('123'); // ['1', '2', '3']
Array.of(1, 2, 3); // [1, 2, 3]
```

### 6、性能对比

| 操作 | 时间复杂度 | 适用场景 |
|------|------------|--------|
| `push/pop` | O(1) | 频繁增删末尾元素 |
| `shift/unshift` | O(n) | 少量操作开头元素 |
| `indexOf/includes` | O(n) | 小规模数据查找 |
| `find/filter` | O(n) | 需要复杂条件查找 |

### 7、面试回答要点

1. **分类清晰**：将方法分为增删、遍历、查找等类别
2. **重点突出**：强调map/filter/reduce等高阶函数
3. **对比说明**：比较相似方法的区别（如find vs filter）
4. **性能意识**：提及时间复杂度差异
5. **现代特性**：介绍ES6+新增方法

示例回答：
"JS数组方法可分为增删操作、遍历转换、查找判断等类别。push/pop操作末尾效率最高，而shift/unshift操作开头效率较低。高阶函数如map/filter/reduce是函数式编程的核心，ES6新增的find/findIndex提供了更便捷的查找方式。实际开发中应根据场景选择合适方法，如大数据量查找可用some替代find。"

## 8、typeof和instanceof的区别是什么

### 1、核心区别对比

| 特性          | typeof 运算符                     | instanceof 运算符                 |
|---------------|----------------------------------|----------------------------------|
| **作用**       | 检测变量的数据类型                 | 检测对象是否为某个构造函数的实例    |
| **返回值**     | 字符串（"number", "string"等）    | 布尔值（true/false）              |
| **操作对象**   | 适用于所有数据类型                 | 只适用于对象（不适用于原始值）      |
| **原理**       | 检查值的类型标签                   | 检查原型链                        |
| **ES模块**     | 可以检测import导入                 | 不能检测ES模块                    |

### 2、typeof 详细解析

#### 1. 返回值对应表
```js
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object" (历史遗留问题)
typeof {}              // "object"
typeof []              // "object"
typeof function() {}   // "function"
typeof Symbol()        // "symbol"
typeof 123n            // "bigint"
```

#### 2. 特殊案例
- `typeof null` 返回 "object"（JavaScript 设计错误）
- 数组和普通对象都返回 "object"
- 函数返回 "function"（尽管函数也是对象）

#### 3. 实用场景
```js
// 检查变量是否定义
if (typeof variable === 'undefined') {
  // 处理未定义情况
}

// 检查函数是否存在
if (typeof myFunction === 'function') {
  myFunction();
}
```

### 3、instanceof 详细解析

#### 1. 基本用法
```js
[] instanceof Array      // true
{} instanceof Object     // true
new Date() instanceof Date // true

function Person() {}
const p = new Person();
p instanceof Person      // true
```

#### 2. 原型链检查
```js
[] instanceof Object    // true (Array继承自Object)
```

#### 3. 局限性
```js
42 instanceof Number     // false (原始值)
"hello" instanceof String // false
true instanceof Boolean // false

// 使用对象包装器
new Number(42) instanceof Number // true
```

#### 4. 实用场景
```js
// 检查数组类型（比typeof更准确）
if (arr instanceof Array) {
  // 安全使用数组方法
}

// 自定义类型检查
if (animal instanceof Dog) {
  animal.bark();
}
```

### 4、原理剖析

#### 1. typeof 实现原理
- JavaScript 引擎在底层为每个值存储一个类型标签
- typeof 检查这个标签值
- null 的标签值为0（与对象相同），导致错误判断

#### 2. instanceof 实现原理
```js
// instanceof的近似实现
function myInstanceof(obj, constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

### 5、现代替代方案（ES6+）

#### 1. Array.isArray()
```js
Array.isArray([]) // true
Array.isArray({}) // false
```

#### 2. Object.prototype.toString()
```js
Object.prototype.toString.call(null)     // "[object Null]"
Object.prototype.toString.call([])       // "[object Array]"
Object.prototype.toString.call(new Date()) // "[object Date]"
```

#### 3. 类型判断函数推荐
```js
function getType(obj) {
  return Object.prototype.toString.call(obj)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase();
}

getType([])    // "array"
getType(null)  // "null"
```

### 6、面试回答要点

1. **功能区分**：typeof检测数据类型，instanceof检测实例关系
2. **返回值差异**：typeof返回字符串，instanceof返回布尔值
3. **适用范围**：typeof适用所有值，instanceof只适用对象
4. **特殊案例**：解释typeof null的问题
5. **现代替代**：提及Array.isArray等更精确的方法

示例回答：
"typeof用于检测变量数据类型，返回类型字符串，能处理所有值但会将null错误判断为'object'。instanceof用于检测对象是否为某构造函数的实例，通过检查原型链实现，但不适用于原始值。实际开发中，检查数组推荐使用Array.isArray()，更精确的类型判断可用Object.prototype.toString.call()。"

## 9、"==" 和 "===" 的区别详解

### 1、核心区别对比

| 特性          | 松散相等 (`==`)                 | 严格相等 (`===`)                |
|---------------|--------------------------------|--------------------------------|
| **比较方式**   | 允许类型转换后进行值比较          | 不允许类型转换，类型和值都必须相同 |
| **性能**       | 稍慢（需要类型转换）             | 更快（直接比较）                |
| **使用建议**   | 不建议使用                      | 推荐使用                       |
| **null/undefined比较** | `null == undefined` 为 true | `null === undefined` 为 false |

### 2、`==` 的类型转换规则（松散相等）

#### 1. 基本类型比较规则
```js
// 数字 vs 字符串：字符串转数字
5 == '5'      // true，'5'转为数字5

// 布尔值 vs 非布尔：布尔值转数字
true == 1     // true，true转为1
false == 0    // true，false转为0

// null vs undefined
null == undefined  // true（特殊规则）
```

#### 2. 对象 vs 基本类型
```js
// 对象会调用valueOf()或toString()转换为基本类型
[1,2] == '1,2'    // true，数组调用toString()
new String('hi') == 'hi' // true，包装对象拆箱
```

#### 3. 复杂案例
```js
'' == '0'          // false（都是字符串，直接比较）
0 == ''            // true（''转为0）
false == 'false'   // false（false转为0，'false'转为NaN）
```

### 3、`===` 的比较规则（严格相等）

#### 1. 基本规则
```js
5 === 5        // true（同类型同值）
5 === '5'      // false（类型不同）
true === 1     // false（类型不同）
null === undefined // false（类型不同）
```

#### 2. 特殊情况
```js
NaN === NaN     // false（NaN不等于任何值，包括自身）
+0 === -0       // true（数值零相等）
```

#### 3. 对象比较
```js
const a = {};
const b = {};
a === b         // false（比较引用地址）
a === a         // true（同一对象）
```

### 4、类型转换的详细过程

#### `==` 的比较算法步骤：
1. 如果类型相同，直接按 `===` 比较
2. 如果一方是 `null` 另一方是 `undefined`，返回 `true`
3. 数字 vs 字符串 → 字符串转数字
4. 有布尔值 → 布尔值转数字（true→1，false→0）
5. 对象 vs 基本类型 → 对象转为基本类型（优先 `valueOf()`，然后 `toString()`）
6. 其他情况返回 `false`

### 5、使用建议

#### 推荐使用 `===` 的情况：
1. 所有新代码中都应该使用 `===`
2. 需要精确比较类型和值时
3. 比较可能为 `null` 或 `undefined` 的值时
4. 性能敏感的场景

#### 可以谨慎使用 `==` 的情况：
1. 明确需要类型转换时（如检查 `null` 或 `undefined`）
```js
if (value == null) {
  // 同时匹配null和undefined
}
```

### 6、特殊案例解析

#### 1. 与 `false` 的比较
```js
false == '0'    // true（两边都转为0）
false == ''      // true（两边都转为0）
false == []      // true（[]转为''再转为0）
false == {}      // false（{}转为"[object Object]"）
```

#### 2. 空数组比较
```js
[] == ![]        // true（![]转为false，再比较[] == false）
[] == 0          // true（[]转为''再转为0）
[] == ''         // true（[]转为''）
```

### 7、面试回答要点

1. **核心区别**：强调类型转换与否
2. **转换规则**：解释 `==` 的自动类型转换过程
3. **性能差异**：说明 `===` 更高效
4. **使用建议**：推荐优先使用 `===`
5. **特殊案例**：准备几个典型例子（如 `null == undefined`）

示例回答：
"`==`是松散相等，会进行类型转换后比较值，如`5 == '5'`为true。`===`是严格相等，要求类型和值都相同，更安全高效。建议大多数情况使用`===`，仅在需要特殊类型转换时（如检查null/undefined）谨慎使用`==`。注意`NaN === NaN`为false等特殊情况。"

## 10、var、let和const的区别

### 1、核心区别对比

| 特性          | var                      | let                      | const                    |
|--------------|--------------------------|--------------------------|--------------------------|
| **作用域**    | 函数作用域               | 块级作用域               | 块级作用域               |
| **变量提升**  | 会提升，初始化为undefined | 会提升但不初始化(TDZ)    | 会提升但不初始化(TDZ)    |
| **重复声明**  | 允许                     | 不允许                   | 不允许                   |
| **初始赋值**  | 可不初始化               | 可不初始化               | 必须初始化               |
| **值可变性**  | 可修改                   | 可修改                   | 不可重新赋值(对象属性可修改) |

### 2、详细解析

#### 1. 作用域差异

**var - 函数作用域**
```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 同一个变量
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```

**let/const - 块级作用域**
```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 不同变量
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

#### 2. 变量提升与暂时性死区(TDZ)

**var 的提升**
```js
console.log(x); // undefined
var x = 5;
```

**let/const 的暂时性死区**
```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

#### 3. 重复声明

**var 允许重复声明**
```js
var x = 1;
var x = 2; // 允许
```

**let/const 不允许重复声明**
```js
let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared
```

#### 4. const 的特殊性

**基本类型不可变**
```js
const PI = 3.14;
PI = 3.1415; // TypeError: Assignment to constant variable
```

**对象属性可变**
```js
const person = { name: 'Alice' };
person.name = 'Bob'; // 允许
person = {}; // TypeError: Assignment to constant variable
```

### 3、使用场景建议

1. **默认使用 const**：除非确定变量需要重新赋值
2. **需要重新赋值时用 let**：如循环计数器等
3. **避免使用 var**：除非需要特殊的老旧浏览器兼容性
4. **对象冻结**：如需完全不可变对象，可使用`Object.freeze()`
```js
const obj = Object.freeze({ prop: 'value' });
obj.prop = 'new value'; // 静默失败或TypeError(严格模式)
```

### 4、面试回答要点

1. **作用域**：强调函数作用域与块级作用域的区别
2. **提升机制**：解释TDZ概念
3. **可变性**：区分const变量和对象属性的可变性
4. **最佳实践**：推荐const优先的现代JS开发方式
5. **历史背景**：可提及ES6引入let/const的原因

示例回答：
"var是函数作用域，会变量提升且允许重复声明；let和const是块级作用域，有暂时性死区，不允许重复声明。const必须初始化且不能重新赋值，但对象属性可修改。现代JS开发推荐默认使用const，需要重新赋值时用let，避免使用var。"
console.log();

## 11、call、apply和bind的区别

### 1、核心功能对比

| 方法       | 调用方式           | 参数传递形式       | 执行时机       | 返回值        |
|------------|--------------------|--------------------|----------------|---------------|
| **call**   | 立即调用函数       | 参数列表（逗号分隔）| 立即执行       | 函数返回值    |
| **apply**  | 立即调用函数       | 参数数组           | 立即执行       | 函数返回值    |
| **bind**   | 不调用函数，返回新函数 | 参数列表（逗号分隔）| 需要手动调用   | 绑定后的新函数 |

### 2、详细解析

#### 1. call 方法
**功能**：立即调用函数，并指定函数内部的 `this` 值和参数列表

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

// 使用call
greet.call(person, 'Hello', '!'); // 输出: "Hello, Alice!"
```

#### 2. apply 方法
**功能**：与 `call` 类似，但参数以数组形式传递

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Bob' };

// 使用apply
greet.apply(person, ['Hi', '!!']); // 输出: "Hi, Bob!!"
```

#### 3. bind 方法
**功能**：创建一个新函数，绑定指定的 `this` 值和初始参数，但不立即执行

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };

// 使用bind
const boundGreet = greet.bind(person, 'Hey');
boundGreet('!!!'); // 输出: "Hey, Charlie!!!"
```

### 3、关键区别

#### 1. 执行时机
- `call` 和 `apply` 会**立即执行**函数
- `bind` **不会立即执行**，而是返回一个绑定后的新函数

#### 2. 参数传递
- `call` 和 `bind` 接受**参数列表**（多个参数，逗号分隔）
- `apply` 接受**参数数组**（单个数组参数）

#### 3. 使用场景
- **call**：明确知道参数数量时使用
- **apply**：参数数量不确定或已有数组时使用
- **bind**：需要延迟执行或创建偏函数时使用

### 4、特殊应用场景

#### 1. 借用方法（方法复用）
```js
// 类数组对象借用数组方法
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.push.call(arrayLike, 'c'); 
// arrayLike变为 { 0: 'a', 1: 'b', 2: 'c', length: 3 }
```

#### 2. 参数转换
```js
// 将参数对象转为真实数组
function convertArgs() {
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr); // 参数转为数组
}
```

#### 3. 组合使用
```js
// bind与call/apply组合
function log(time, message) {
  console.log(time + ': ' + message + ' by ' + this.name);
}

const person = { name: 'David' };
const logPerson = log.bind(person);

logPerson.call(null, '10:00', 'Hello'); // 仍然使用person作为this
```

### 5、面试回答要点

1. **核心区别**：强调执行时机和参数传递形式的不同
2. **this绑定**：三者都能改变函数内部的this指向
3. **应用场景**：举例说明各自适合的使用场景
4. **性能影响**：简要提及性能考量
5. **现代替代**：可提及箭头函数对this绑定的影响

示例回答：
"call、apply和bind都能改变函数this指向，区别在于：call和apply立即执行，前者传参列表后者传数组；bind返回绑定后的新函数不立即执行。call适合参数明确时，apply适合参数为数组时，bind适合需要延迟执行或创建偏函数场景。现代开发中，箭头函数的固定this特性减少了对这些方法的需求。"

## 12、JavaScript 栈溢出及解决方法

### 1、栈溢出基本概念

#### 1. 什么是栈溢出
栈溢出(Stack Overflow)是指调用栈(Call Stack)中的函数调用超过了最大调用栈大小限制，导致程序崩溃的现象。

#### 2. 调用栈工作原理
- JavaScript 使用**调用栈**管理函数调用
- 每次函数调用会在栈顶添加一个栈帧(Stack Frame)
- 函数执行完毕，栈帧被弹出
- 栈空间有限(浏览器通常约1MB)

### 2、常见栈溢出场景

#### 1. 无限递归
```js
function infiniteRecursion() {
  infiniteRecursion(); // 无限调用自身
}
infiniteRecursion(); // 栈溢出
```

#### 2. 深层递归
```js
function deepRecursion(n) {
  if (n === 0) return;
  deepRecursion(n - 1);
}
deepRecursion(100000); // 足够大的n会导致栈溢出
```

#### 3. 相互递归
```js
function a(n) { b(n - 1); }
function b(n) { a(n - 1); }
a(10000); // 相互调用导致栈溢出
```

### 3、栈溢出解决方案

#### 1. 尾调用优化(Tail Call Optimization, TCO)
**原理**：如果函数的最后一步是调用自身(尾递归)，引擎可以复用当前栈帧

```js
// 普通递归(会栈溢出)
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // 不是尾调用
}

// 尾递归优化版本
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total); // 尾调用
}
```

**注意**：ES6规范支持TCO，但多数浏览器未实现

#### 2. 循环替代递归
```js
// 递归版本
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

// 循环版本(不会栈溢出)
function sum(n) {
  let result = 0;
  while (n > 0) {
    result += n;
    n--;
  }
  return result;
}
```

#### 3. 分块处理(异步递归)
```js
function asyncRecursion(n, callback) {
  if (n === 0) return callback();
  
  // 使用setTimeout释放调用栈
  setTimeout(() => {
    asyncRecursion(n - 1, callback);
  }, 0);
}
```

#### 4. 蹦床函数(Trampoline)
```js
function trampoline(fn) {
  return (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}

// 使用
const factorial = trampoline(function myself(n, acc = 1) {
  return n <= 1 ? acc : () => myself(n - 1, n * acc);
});

factorial(100000); // 不会栈溢出
```

### 4、调试与预防

#### 1. 调试方法
- 浏览器开发者工具：Sources面板查看调用栈
- Node.js：使用`--stack-size`参数调整栈大小
- 错误捕获：
  ```js
  try {
    recursiveFunction();
  } catch (e) {
    if (e instanceof RangeError) {
      console.log('栈溢出错误');
    }
  }
  ```

#### 2. 预防措施
1. 避免深层递归，改用循环
2. 使用尾递归形式编写代码
3. 对大问题分块处理
4. 设置合理的递归终止条件
5. 监控调用栈深度

### 5、面试回答要点

1. **定义清晰**：解释栈溢出是调用栈超过限制导致的错误
2. **场景全面**：列举递归、相互递归等常见场景
3. **解决方案**：重点说明尾递归优化和循环替代
4. **实际经验**：分享调试和预防的具体方法
5. **现代发展**：提及ES6尾调用优化现状

示例回答：
"JS栈溢出常见于深层递归调用，当调用栈超过限制(约1MB)时发生。解决方案包括：1)尾递归优化，但多数浏览器未实现ES6的TCO；2)用循环替代递归；3)异步分块处理释放调用栈；4)蹦床函数技术。实际开发中应优先考虑迭代算法，对必须递归的场景要严格控制深度并设置终止条件。"

## 13、JavaScript 多线程实现方案

### 1、JavaScript 单线程本质

JavaScript 在设计上是**单线程**语言，这意味着它只有一个调用栈，同一时间只能执行一个任务。这种设计避免了多线程环境中的复杂同步问题，但也带来了性能限制。

### 2、伪多线程实现方案

#### 1. Web Workers（浏览器环境）
**真正的多线程解决方案**，允许在后台线程中运行脚本

```js
// 主线程
const worker = new Worker('worker.js');

worker.postMessage('Hello Worker'); // 发送数据

worker.onmessage = function(e) {
  console.log('Received:', e.data); // 接收数据
};

// worker.js
self.onmessage = function(e) {
  console.log('Worker received:', e.data);
  self.postMessage('Message received');
};
```

**特点**：
- 独立全局环境，与主线程隔离
- 不能直接操作DOM
- 通过postMessage通信
- 适合CPU密集型任务

#### 2. Worker Threads（Node.js环境）
Node.js中的多线程解决方案

```js
const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', (msg) => {
    parentPort.postMessage(msg + ' processed');
  });
`, { eval: true });

worker.on('message', (msg) => {
  console.log(msg); // "Hello processed"
});

worker.postMessage('Hello');
```

#### 3. 异步编程模型
虽然非真正多线程，但通过事件循环实现并发

```js
// 利用Promise实现异步
function asyncTask() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Done'), 1000);
  });
}

asyncTask().then(console.log);
```

### 3、多线程使用限制

1. **DOM限制**：Worker线程不能直接访问DOM
2. **通信成本**：线程间通信需要序列化/反序列化
3. **内存隔离**：每个Worker有独立内存空间
4. **启动开销**：创建Worker有一定性能成本

### 4、适用场景对比

| 场景                | 推荐方案           |
|---------------------|-------------------|
| 大量数据计算         | Web Workers       |
| 图像/视频处理        | Web Workers       |
| 长时间运行的CPU任务  | Worker Threads    |
| I/O密集型操作        | 异步I/O           |
| UI更新              | 主线程 + 异步技巧 |

### 5、高级多线程模式

#### 1. 线程池模式
```js
// 创建Worker池
class WorkerPool {
  constructor(size, workerFile) {
    this.size = size;
    this.workers = [];
    this.queue = [];
    
    for (let i = 0; i < size; i++) {
      const worker = new Worker(workerFile);
      worker.onmessage = (e) => {
        this.handleResponse(worker, e.data);
      };
      this.workers.push(worker);
    }
  }
  
  handleResponse(worker, data) {
    const callback = this.queue.shift().resolve;
    callback(data);
    if (this.queue.length) {
      const { task } = this.queue[0];
      worker.postMessage(task);
    }
  }
  
  runTask(task) {
    return new Promise((resolve) => {
      this.queue.push({ task, resolve });
      const idleWorker = this.workers.find(w => !this.queue.some(j => j.worker === w));
      if (idleWorker) {
        idleWorker.postMessage(task);
      }
    });
  }
}
```

#### 2. SharedArrayBuffer（共享内存）
**注意**：需要安全上下文(HTTPS)和COOP/COEP头

```js
// 主线程
const sharedBuffer = new SharedArrayBuffer(16);
const arr = new Int32Array(sharedBuffer);

const worker = new Worker('worker.js');
worker.postMessage({ buffer: sharedBuffer });

// worker.js
self.onmessage = function(e) {
  const sharedArray = new Int32Array(e.data.buffer);
  Atomics.add(sharedArray, 0, 1); // 原子操作
};
```

### 6、面试回答要点

1. **核心概念**：明确JS单线程本质和Web Workers的关系
2. **环境区分**：浏览器(Web Workers)和Node.js(Worker Threads)的不同实现
3. **通信机制**：强调postMessage的通信方式
4. **使用限制**：说明DOM访问和内存隔离等限制
5. **实际应用**：举例适合多线程处理的场景

示例回答：
"JavaScript虽然是单线程语言，但可以通过Web Workers和Worker Threads实现多线程。Web Workers是浏览器提供的API，能创建独立线程执行耗时任务，通过postMessage与主线程通信，但不能访问DOM。Node.js中可使用worker_threads模块。多线程适合CPU密集型任务，但要注意通信成本和内存隔离问题。实际开发中，对于图像处理、大数据计算等场景可以考虑使用。"

## 14、JavaScript 浅拷贝与深拷贝详解


### 1、核心概念对比

| 特性        | 浅拷贝                          | 深拷贝                          |
|------------|--------------------------------|--------------------------------|
| **定义**    | 只复制对象的第一层属性           | 递归复制对象的所有层级属性        |
| **引用处理** | 嵌套对象保持引用关系             | 完全创建新的引用                 |
| **修改影响** | 修改嵌套属性会影响原对象         | 修改任何属性都不会影响原对象      |
| **性能**    | 较快                           | 较慢（需要递归遍历）             |
| **内存占用** | 较少                           | 较多                           |

### 2、常见实现方式

#### 1. 浅拷贝方法
```js
// 1. 展开运算符
const shallowCopy1 = {...original};

// 2. Object.assign()
const shallowCopy2 = Object.assign({}, original);

// 3. Array.prototype.slice()
const shallowCopy3 = array.slice();

// 4. Array.from()
const shallowCopy4 = Array.from(array);
```

#### 2. 深拷贝方法
```js
// 1. JSON.parse(JSON.stringify())
const deepCopy1 = JSON.parse(JSON.stringify(original));

// 2. 递归实现
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

// 3. 使用第三方库(lodash)
const deepCopy3 = _.cloneDeep(original);
```

### 3、典型应用场景

#### 1. 适合浅拷贝的情况
- 对象只有一层属性，没有嵌套引用
- 需要高性能拷贝简单数据结构
- 明确知道只需要第一层拷贝

```js
const user = { name: 'Alice', age: 25 };
const userCopy = {...user}; // 浅拷贝足够
```

#### 2. 必须深拷贝的情况
- 对象有多层嵌套结构
- 需要完全隔离拷贝对象与原对象
- 不确定对象结构的深度

```js
const config = {
  db: { host: 'localhost', port: 3306 },
  cache: { enabled: true }
};
const configCopy = deepClone(config); // 需要深拷贝
```

### 4、特殊案例处理

#### 1. 循环引用问题
```js
const obj = { a: 1 };
obj.self = obj; // 循环引用

// JSON方法会报错
JSON.parse(JSON.stringify(obj)); // TypeError

// 需要特殊处理的深拷贝
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (map.has(obj)) return map.get(obj);
  
  const result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}
```

#### 2. 特殊对象类型
- Date对象
- RegExp对象
- Set/Map等ES6数据结构

```js
// 处理Date和RegExp
function deepClone(obj) {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // ...其他处理
}
```

### 5、性能优化建议

1. **按需选择**：根据实际需求选择浅拷贝或深拷贝
2. **避免过度深拷贝**：对大型对象深拷贝会影响性能
3. **结构化克隆**：考虑使用`MessageChannel`或`history.pushState`的克隆机制
4. **不可变数据**：对于频繁更新的数据，考虑使用Immutable.js等库

### 6、面试回答要点

1. **概念清晰**：明确区分拷贝的层级和引用关系
2. **方法全面**：列举常见的浅拷贝和深拷贝实现方式
3. **场景分析**：说明不同场景下的选择依据
4. **特殊处理**：提及循环引用等边界情况
5. **性能意识**：强调根据实际需求合理选择

示例回答：
"浅拷贝只复制对象的第一层属性，嵌套对象仍保持引用，修改会影响原对象；深拷贝递归复制所有层级，完全创建新引用，修改不会影响原对象。开发中应根据数据结构复杂度选择，简单结构用浅拷贝({...obj})，复杂嵌套结构用深拷贝(如lodash.cloneDeep)。注意处理循环引用等特殊情况。"

## 15、事件循环，Promise和async/await的详解

### 1、事件循环 (Event Loop)

#### 1. 基本概念
JavaScript 是单线程语言，通过事件循环机制实现异步操作。事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。

#### 2. 执行模型
```
调用栈 (Call Stack) → 微任务队列 (Microtask Queue) → 宏任务队列 (Macrotask Queue)
```

#### 3. 任务分类
- **宏任务 (Macrotasks)**:
  - script整体代码
  - setTimeout/setInterval
  - I/O操作
  - UI渲染
  - setImmediate (Node.js)

- **微任务 (Microtasks)**:
  - Promise回调
  - MutationObserver
  - process.nextTick (Node.js)

#### 4. 执行顺序
1. 执行当前宏任务（如script整体代码）
2. 执行所有微任务
3. 执行下一个宏任务
4. 重复上述过程

### 2、Promise

#### 1. 基本概念
Promise 是异步编程的一种解决方案，表示一个异步操作的最终完成或失败及其结果值。

#### 2. 三种状态
- **pending**: 初始状态
- **fulfilled**: 操作成功完成
- **rejected**: 操作失败

#### 3. 基本用法
```js
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise
  .then(value => { /* 处理成功 */ })
  .catch(error => { /* 处理失败 */ })
  .finally(() => { /* 无论成功失败都执行 */ });
```

#### 4. Promise 链
```js
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => console.log(finalResult))
  .catch(failureCallback);
```

#### 5. 静态方法
- `Promise.resolve(value)`: 返回一个已解决的Promise
- `Promise.reject(reason)`: 返回一个已拒绝的Promise
- `Promise.all(iterable)`: 所有Promise都成功时返回结果数组
- `Promise.race(iterable)`: 第一个完成的Promise的结果
- `Promise.allSettled(iterable)`: 所有Promise完成后返回结果数组

### 3、async/await

#### 1. 基本概念
async/await 是基于Promise的语法糖，使异步代码看起来像同步代码。

#### 2. 基本用法
```js
async function asyncFunc() {
  try {
    const result = await somePromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

#### 3. 特点
- `async`函数总是返回Promise
- `await`只能在`async`函数中使用
- `await`会暂停函数执行，直到Promise解决
- 可以使用try/catch处理错误

#### 4. 执行顺序示例
```js
console.log('script start');

setTimeout(() => console.log('setTimeout'), 0);

Promise.resolve()
  .then(() => console.log('promise1'))
  .then(() => console.log('promise2'));

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

async1();

console.log('script end');
```

:::details 点击查看答案
```js
/* 
输出顺序:
script start
async1 start
async2
script end
promise1
promise2
async1 end
setTimeout
*/
```
:::

### 4、三者关系

1. **事件循环**是JavaScript处理异步的基础机制
2. **Promise**是管理异步操作的对象
3. **async/await**是基于Promise的语法糖，使异步代码更易读

### 5、常见面试问题

#### 1. setTimeout vs Promise
```js
console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('promise'));

console.log('end');
```
:::details 点击查看答案
```js
/*
输出顺序:
start
end
promise
timeout
*/
```
:::

#### 2. async/await 执行顺序
```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => console.log('setTimeout'), 0);

async1();

new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => console.log('promise2'));

console.log('script end');
```

:::details 点击查看答案
```js
/*
输出顺序:
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
```
:::

#### 3. 错误处理
```js
// Promise错误处理
fetch(url)
  .then(response => response.json())
  .catch(error => console.error('Error:', error));

// async/await错误处理
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### 6、最佳实践

1. 优先使用async/await编写异步代码
2. 避免在async函数中混用.then()
3. 始终处理Promise拒绝情况
4. 对于并行操作，使用Promise.all
5. 避免过深的Promise链，使用async/await扁平化代码