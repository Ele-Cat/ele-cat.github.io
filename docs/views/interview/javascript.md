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
```javascript
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

## 2、箭头函数与普通函数的区别？

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
```javascript
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // 输出undefined（this指向外层作用域）
  }
};
obj.greet();
```

**普通函数**：
```javascript
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
```javascript
const fn = (...args) => {
  console.log(args); // 使用剩余参数替代
  // console.log(arguments); // 报错：arguments未定义
};
fn(1, 2, 3);
```

**普通函数**：
```javascript
function fn() {
  console.log(arguments); // Arguments(3) [1, 2, 3]
}
fn(1, 2, 3);
```

#### 3. 构造函数能力
**箭头函数**：
```javascript
const Person = () => {};
const p = new Person(); // 报错：Person is not a constructor
```

**普通函数**：
```javascript
function Person(name) {
  this.name = name;
}
const p = new Person('Alice'); // 正常
```

### 3.适用场景

#### 1.适合箭头函数的场景
1. 需要保持this上下文的回调函数
   ```javascript
   button.addEventListener('click', () => {
     this.handleClick(); // this正确指向
   });
   ```
2. 简单的单行函数
   ```javascript
   const double = x => x * 2;
   ```
3. 函数式编程
   ```javascript
   const nums = [1, 2, 3].map(x => x * 2);
   ```

#### 2.适合普通函数的场景
1. 需要动态this的方法
   ```javascript
   const obj = {
     name: 'Alice',
     greet: function() {
       console.log(`Hello, ${this.name}`);
     }
   };
   ```
2. 构造函数
   ```javascript
   function Person(name) {
     this.name = name;
   }
   ```
3. 需要arguments对象的函数
   ```javascript
   function sum() {
     return [...arguments].reduce((a, b) => a + b);
   }
   ```

### 4.面试回答示例

"箭头函数和普通函数的主要区别在于：1) this绑定方式不同，箭头函数继承外层this，普通函数动态绑定；2) 箭头函数没有arguments对象和prototype，不能用作构造函数；3) 语法更简洁。实际开发中，箭头函数适合需要保持this上下文的场景，而普通函数更适合需要动态this或作为构造函数的情况。"

## 3、JS中null和undefined的判断方法和区别？

## 4、原型链

## 5、闭包的理解?

## 6、JS垃圾回收机制

## 7、列举和数组操作相关的方法

## 8、typeof和instanceof的区别是什么？ 

## 9、JS中 “==“和“===“的区别详解

## 10、如何用原生 JS给一个按钮绑定两个 onclick 事件？

## 11、var、let和const的区别？

## 12、讲解js的call、apply和bind区别？

## 13、谈谈你对webpack的理解？

## 14、 const定义的对象属性是否可以改变？

## 15、栈溢出及解决方法？

## 16、JS如何实现多线程？

## 17、浅拷贝和深拷贝区别概念常见情况？

## 18、事件循环，Promise和async/await的详解

## 19、JS中数组常用方法详解
