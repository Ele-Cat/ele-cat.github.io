# JavaScript 基础面试题

## Q1: JavaScript 的数据类型有哪些？

**基本类型（7 种）**：`string` / `number` / `boolean` / `null` / `undefined` / `symbol` / `bigint`
**引用类型（1 种）**：`object`（含 array、function、Date、RegExp、Map、Set 等）

**两问差异**：
- 基本类型 -> 值传递，存栈上，比较值
- 引用类型 -> 引用传递，存堆上，比较引用

**根本原因**：基本类型大小固定，存储在栈内存中，访问速度快；引用类型的值大小不固定，存储在堆内存中，栈上只保存内存地址指针。赋值时基本类型复制整个值，引用类型只复制引用地址。

```js
// 值传递 vs 引用传递
let a = 10
let b = a
b = 20
console.log(a) // 10 — 不受影响

let obj1 = { x: 1 }
let obj2 = obj1
obj2.x = 2
console.log(obj1.x) // 2 — 共享引用

// 基本类型比较值，引用类型比较引用
console.log(1 === 1)           // true
console.log({} === {})         // false（不同对象）
```

**typeof 结果**：
```js
typeof undefined   // "undefined"
typeof null        // "object" （历史遗留 bug）
typeof 1           // "number"
typeof 'a'         // "string"
typeof true        // "boolean"
typeof Symbol()    // "symbol"
typeof 1n          // "bigint"
typeof {}          // "object"
typeof []          // "object"
typeof (() => {})  // "function"
```

**包装类型**：基本类型在使用方法时会临时包装为对象：
```js
'hello'.toUpperCase() // 临时创建 String 对象
// 等价于 new String('hello').toUpperCase()
```

**边缘情况**：
```js
typeof NaN           // "number"（NaN 是 number 类型）
typeof document.all  // "undefined"（浏览器历史遗留）
typeof null          // "object"（这是 JS 的知名 bug，无法修复）
```

**判断 null 的正确方式**：
```js
const val = null
val === null                    // ✅
Object.is(val, null)            // ✅
typeof val === 'object' && !val // ✅ 但不推荐
```

**性能注意事项**：频繁的装箱拆箱（基本类型与对象之间转换）有性能开销，避免显式使用 `new Number()`、`new String()`、`new Boolean()`。

**面试追问**：
- `typeof null` 为什么是 `"object"`？JS 最初实现中类型标记低位为 000 表示对象，null 的空指针也是 000，导致误判。
- 如何判断一个值是 `NaN`？用 `Number.isNaN()`，全局 `isNaN()` 会做类型转换。
- `BigInt` 和 `number` 能混用吗？不能，必须显式转换。

## Q2: == 和 === 的区别

`===`：**严格相等**，先比较类型，类型不同直接 false，类型相同再比较值。不进行任何类型转换。

`==`：**抽象相等**，类型不同时做 **隐式类型转换**，遵循 ECMAScript 的 Abstract Equality Comparison 算法：

```js
1 == '1'          // true（'1' 转 1）
null == undefined // true（特殊规则：两者相等但不等其他值）
0 == false        // true（false 转 0）
'' == false       // true（'' 转 0）
[] == false       // true（[] 转 '' 转 0）
[] == ![]         // true（[] -> 0, ![] -> false -> 0）
' ' == 0          // true（字符串转数字）
[1] == 1          // true（[1] 转 '1' 转 1）
```

**转换规则**：
1. null == undefined -> true（特殊）
2. string vs number -> string 转 number
3. boolean vs any -> boolean 转 number
4. object vs string/number -> 调用 valueOf/toString 转基本类型

**Object.is**（ES6）：
```js
Object.is(NaN, NaN)     // true（=== 返回 false）
Object.is(0, -0)        // false（=== 返回 true）
Object.is('1', 1)       // false（同 ===）
```

**边缘情况**：
```js
NaN === NaN  // false（IEEE 754 规范如此）
-0 === 0     // true
null == 0    // false（null 只在 == undefined 时为 true）
undefined == 0 // false
```

| 特性 | === | == | Object.is |
|------|-----|-----|-----------|
| 类型检查 | 严格 | 会转换 | 严格 |
| NaN === NaN | false | false | true |
| +0 === -0 | true | true | false |
| 性能 | 最快（无转换） | 略慢（需转换） | 中等 |

**原则**：始终用 `===`，除非你明确需要类型转换。判断 null/undefined 时可以用 `val == null`（同时匹配两者）。

**面试追问**：
- `[] == ![]` 为什么是 true？两边转为数字都是 0。
- `Object.is` 比 `===` 更严格吗？不，它在 NaN 和 -0 处理上不同，但整体不是"更严格"的关系。

## Q3: 什么是闭包？有什么用？

**闭包** = 函数 + 函数能访问的外部变量引用（即使外部函数已返回）。闭包的核心机制是 **词法环境** —— 函数创建时保存其所在作用域的变量引用链，即使外层函数执行完毕，内层函数仍然持有这些变量的引用。

```js
function createCounter() {
  let count = 0          // 闭包变量
  return function() {    // 闭包函数
    return ++count
  }
}

const counter = createCounter()
counter() // 1
counter() // 2
// count 不会被垃圾回收——闭包持有引用
```

**更多示例**：

```js
// 1. 私有变量（模块模式）
function createUser(name) {
  let _password = ''
  return {
    getName: () => name,
    setPassword: (pw) => { _password = pw },
    checkPassword: (pw) => _password === pw,
  }
}
const user = createUser('Alice')
user.setPassword('123')
user.checkPassword('123') // true
console.log(user._password) // undefined（不可访问）

// 2. 柯里化（预填充参数）
function multiply(a) {
  return function(b) {
    return a * b
  }
}
const double = multiply(2)
const triple = multiply(3)
console.log(double(5))  // 10
console.log(triple(5))  // 15

// 3. 防抖（保留 timer 引用）
function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
```

**闭包陷阱 —— 循环中的经典问题**：
```js
// ❌ 问题：所有 i 都输出 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100) // 3, 3, 3
}

// ✅ 解法 1：let 块级作用域
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100) // 0, 1, 2
}

// ✅ 解法 2：IIFE 创建闭包
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log(j), 100))(i)
}
```

**React 闭包陷阱**：
```jsx
function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1) // ❌ count 始终是初始值 0
    }, 1000)
    return () => clearInterval(timer)
  }, []) // 空依赖
  // ✅ 用函数式更新：setCount(c => c + 1)
}
```

| 使用场景 | 作用 | 风险 |
|---------|------|------|
| 私有变量 | 封装内部状态 | 内存泄漏 |
| 柯里化 | 函数式编程 | 层级过深难调试 |
| 防抖/节流 | 性能优化 | 忘记清理 timer |
| 模块模式 | 信息隐藏 | 调试困难 |

**性能注意事项**：闭包会阻止其引用的变量被 GC 回收，在创建大量闭包时（如循环中）会有额外内存开销。使用闭包管理大对象时要小心，用完后主动赋 null 释放引用。

**面试追问**：
- 闭包会造成内存泄漏吗？会，如果闭包长期持有大对象的引用且不再需要，应手动释放。
- var 和 let 在循环中的行为差异本质是什么？let 每次迭代创建新的块级作用域绑定，var 只创建一个函数级绑定。
- 闭包和普通函数的区别是什么？闭包能访问外部函数的变量（即使外部函数已返回），普通函数只能访问当前作用域和全局变量。

## Q4: 什么是作用域链？

JavaScript 是 **词法作用域**（静态作用域）—— 作用域在**书写时**决定，不是调用时。这意味着函数的作用域取决于它在代码中定义的位置，而非调用的位置。

```js
const x = 1
function outer() {
  const x = 2
  function inner() {
    console.log(x) // 2（从 inner -> outer -> 全局 逐级查找）
  }
  inner()
}
outer()

// 词法作用域 vs 动态作用域（如果 JS 是动态的，这里会输出 1）
const value = 'global'
function test() {
  console.log(value) // 'global'（词法上 value 指向全局变量）
}
function run() {
  const value = 'local'
  test() // 词法作用域：test 定义时 value 是全局的
}
run() // 输出 'global'
```

**作用域链**：当前作用域 -> 父级作用域 -> ... -> 全局作用域（变量查找路径）

```js
function A() {
  const a = 'A'
  function B() {
    const b = 'B'
    function C() {
      const c = 'C'
      console.log(a, b, c) // 沿作用域链查找：C -> B -> A -> 全局
    }
    C()
  }
  B()
}
A()
```

**作用域分类**：
- **全局作用域**：代码最外层，任何地方都能访问
- **函数作用域**：function 内部，var 声明的变量
- **块级作用域**（ES6）：`{}` 内部，let/const 声明的变量
- **模块作用域**（ES Module）：每个模块独立作用域

```js
// 块级作用域示例
{
  let x = 1
  const y = 2
  var z = 3
}
console.log(z) // 3（var 无视块级作用域）
console.log(x) // ReferenceError（let 块级作用域）
console.log(y) // ReferenceError（const 块级作用域）

// 注意：for 循环括号内也是块级作用域
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0) // 0, 1, 2（每个迭代独立绑定）
}
```

| 作用域类型 | 创建方式 | 变量类型 |
|-----------|---------|---------|
| 全局 | script 顶层 | var/let/const/function |
| 函数 | function 声明/表达式 | var/let/const |
| 块级 | {} | let/const |
| 模块 | ES Module | export/import |

**区别：作用域 vs 执行上下文**：
- **作用域**（Scope）：代码区域，决定变量的可见性，编译时确定
- **执行上下文**（Context）：代码执行环境，包括 this、变量对象、作用域链，运行时创建

**面试追问**：
- 作用域链和作用域的区别？作用域是静态的区域定义，作用域链是变量查找时的执行路径。
- `with` 语句怎么影响作用域？with 在运行时将对象属性压入作用域链前端，会影响性能并导致优化失效，严格模式下禁用。
- catch 块有自己的作用域吗？`catch(e)` 中的 e 仅在 catch 块内可访问。

## Q5: var / let / const 的区别

| | var | let | const |
|--|-----|-----|-------|
| 作用域 | 函数级 | 块级 | 块级 |
| 变量提升（hoisting） | 是（undefined） | 是（TDZ） | 是（TDZ） |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 |
| 全局声明 | window.xxx | 不挂 window | 不挂 window |
| 初始化 | 可选 | 可选 | 必须初始化 |

**TDZ（暂时性死区）**：
```js
console.log(a) // undefined（var 提升）
var a = 1

console.log(b) // ReferenceError（TDZ，未初始化之前不可访问）
let b = 1

{
  // TDZ 从块开始到声明语句之间
  console.log(c) // ReferenceError
  let c = 1
}
```

**const 详解**：
```js
const PI = 3.14159
PI = 3 // TypeError: Assignment to constant variable

// const 保证的是引用不可变，对象内容可以改
const obj = { name: 'Alice' }
obj.name = 'Bob'  // ✅ 属性可以修改
// obj = {}       // ❌ 不能重新赋值

// 真正冻结对象：Object.freeze（浅冻结）
const frozen = Object.freeze({ x: 1 })
frozen.x = 2      // 严格模式报错，非严格静默失败
```

**循环中的差异**：
```js
// var — 全局同一个 i
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0) // 3, 3, 3
}

// let — 每次迭代创建新的绑定
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0) // 0, 1, 2
}

// for-in / for-of 中 var 也有同样问题
for (var key of ['a', 'b', 'c']) {
  setTimeout(() => console.log(key), 0) // c, c, c
}
```

**边缘情况**：
```js
// typeof 在 TDZ 中也会抛错
typeof x // ReferenceError
let x = 1

// const 声明时必须赋值
const foo // SyntaxError: Missing initializer in const declaration

// 块级作用域中的函数声明（不同浏览器行为不同）
if (true) {
  function f() {} // 非严格模式下行为不确定
}
```

**性能注意事项**：let/const 在块级作用域中比 var 更符合直觉，避免意外全局和变量污染。现代 JS 引擎对 let/const 的优化已经非常好，性能差异可忽略。优先使用 const，需要重新赋值时用 let，避免使用 var。

**面试追问**：
- let 到底有没有变量提升？有提升，但处于 TDZ 中，提升后不能访问，这与 var 的初始化为 undefined 不同。
- 为什么推荐 const 而不是 let？语义上表示"不会被重新赋值"，减少心智负担，防止意外覆盖。
- for 循环中用 let 每次都会创建新变量吗？每次迭代都会创建新的词法环境绑定，这是规范要求。

## Q6: 什么是变量提升（Hoisting）？

**变量提升**是 JS 引擎在代码执行前将变量/函数声明提升到所在作用域顶部的行为。本质上是编译阶段将声明注册到词法环境的过程。

```js
// 直觉以为会报错，实际输出 undefined
console.log(foo) // undefined
var foo = 1

// 等价于
var foo          // 声明提升到顶部
console.log(foo)
foo = 1

// function 声明整体提升
bar()            // 可以调用
function bar() {}

// let/const 也有提升，但在 TDZ 中（上面已解释）
```

**函数声明 vs 函数表达式**：
```js
// ✅ 函数声明整体提升
hello() // 'hello'
function hello() { console.log('hello') }

// ❌ 函数表达式（var）只提升声明
hi() // TypeError: hi is not a function（hi 是 undefined）
var hi = function() { console.log('hi') }

// ❌ 函数表达式（let/const）TDZ
greet() // ReferenceError
let greet = function() { console.log('hi') }
```

**类（class）的提升**：
```js
// class 声明有提升但不初始化（TDZ）
const p = new Person() // ReferenceError
class Person {}

// 类表达式同样 TDZ
const p2 = new Animal() // ReferenceError
const Animal = class {}
```

**提升优先级（同名时）**：
```js
// 函数声明优先级高于 var 声明（函数声明先被提升）
console.log(foo) // function foo() {}
var foo = 'value'
function foo() {}
// foo 最终是 'value'（赋值覆盖了函数）
```

| 声明类型 | 提升行为 | 初始值 |
|---------|---------|--------|
| var | 声明提升，赋值不提升 | undefined |
| let/const | 声明提升，处于 TDZ | 不初始化 |
| function | 整体提升（声明+定义） | 函数本身 |
| class | 提升但 TDZ | 不初始化 |
| import | 提升并自动 hoist | 模块引用 |

**面试追问**：
- 为什么要有变量提升？最初 JS 为了支持函数互相调用和递归而设计的机制，现在被认为是一个设计缺陷。
- 提升和 TDZ 的关系？let/const 也被提升，但提升后处于"未初始化"状态（TDZ），直到执行到声明语句才初始化。var 提升后初始化为 undefined。
- 多个同名 var 声明会怎样？后面的声明会被忽略（如果没赋值），但赋值会覆盖前面的值。

## Q7: this 指向规则

**this** 是函数执行时的上下文，取决于 **调用方式**（不是定义方式）。箭头函数除外——它的 this 由定义时的外层作用域决定。

```js
// 规则 1：默认绑定（独立函数调用）
function foo() { console.log(this) }
foo() // window（浏览器）/ global（Node）（严格模式 undefined）

// 规则 2：隐式绑定（对象上的方法）
const obj = { name: 'obj', foo }
obj.foo() // obj

// 规则 3：显式绑定（call / apply / bind）
foo.call(obj) // obj
foo.apply(obj) // obj
const bound = foo.bind(obj)
bound() // obj

// 规则 4：new 绑定
function Foo(name) {
  this.name = name
}
new Foo('test') // Foo { name: 'test' }

// 规则 5：箭头函数
const arrow = () => { console.log(this) }
arrow() // 定义时的外层 this，不随调用改变
```

**优先级**：new > 显式绑定 > 隐式绑定 > 默认绑定

```js
// 验证优先级：显式 > 隐式
const obj = { name: 'obj', foo }
obj.foo.call({ name: 'explicit' }) // { name: 'explicit' }

// bind 的优先级高于隐式
const boundFoo = foo.bind({ name: 'bind' })
const obj2 = { name: 'obj2', foo: boundFoo }
obj2.foo() // { name: 'bind' }

// new 高于 bind（箭头函数除外）
function Bar(name) { this.name = name; console.log(this) }
const BoundBar = Bar.bind({ fake: true })
new BoundBar('real') // Bar { name: 'real' } — bind 的 this 被忽略
```

**常见问题**：
```js
// 1. setTimeout 中 this 丢失
const obj = {
  name: 'obj',
  log() {
    setTimeout(function() {
      console.log(this.name) // undefined（this -> window）
    }, 100)
    // ✅ 解法
    setTimeout(() => console.log(this.name), 100) // 'obj'
  }
}

// 2. 事件处理中的 this
button.addEventListener('click', function() {
  console.log(this) // button 元素
  // ✅ 箭头函数则指向外层（如类实例）
})

// 3. 隐式丢失
const obj = {
  name: 'obj',
  foo
}
const ref = obj.foo
ref() // window（引用丢失了 obj 上下文）
```

**严格模式影响**：
```js
'use strict'
function strictFoo() { console.log(this) }
strictFoo() // undefined（默认绑定不指向 window）
// 显式传 null/undefined 时 this 为 null/undefined（不转 window）
strictFoo.call(null) // null
```

**面试追问**：
- 箭头函数的 this 能改变吗？不能，call/apply/bind 对箭头函数无效（第一个参数被忽略）。
- 如何实现一个 bind 函数？通过保存 this 和参数，返回新函数，兼容 new 操作。
- this 和词法作用域的关系？this 是调用时决定，词法作用域是定义时决定，两者独立。

## Q8: 原型和原型链

JavaScript 的继承机制基于 **原型链**：每个对象都有一个内部属性 `[[Prototype]]`（可通过 `__proto__` 或 `Object.getPrototypeOf` 访问），指向其原型对象。访问属性时，先从自身找，没找到则沿着原型链向上查找，直到 `null`。

```js
function Person(name) {
  this.name = name
}
Person.prototype.say = function() { console.log(this.name) }

const p = new Person('Alice')
p.say() // Alice

// 查找过程
// p.say -> p 自身有 say 吗？没有
//         -> p.__proto__ (= Person.prototype) 有 say 吗？有！
// 如果没找到 -> Person.prototype.__proto__ (= Object.prototype) -> null

// 原型链：
// p -> Person.prototype -> Object.prototype -> null
```

**更完整的原型链示例**：
```js
const arr = [1, 2, 3]
// arr -> Array.prototype -> Object.prototype -> null

const str = 'hello'
// str -> String.prototype -> Object.prototype -> null

function fn() {}
// fn -> Function.prototype -> Object.prototype -> null

// checked
console.log(arr.__proto__ === Array.prototype)         // true
console.log(Array.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__)                 // null
```

**原型方法 vs 实例方法**：
```js
function Animal(type) {
  this.type = type
  this.eat = function() { // 实例方法（每个实例都有副本）
    console.log(`${this.type} is eating`)
  }
}
Animal.prototype.sleep = function() { // 原型方法（所有实例共享）
  console.log(`${this.type} is sleeping`)
}

const cat = new Animal('cat')
const dog = new Animal('dog')
console.log(cat.eat === dog.eat)   // false（各自独立）
console.log(cat.sleep === dog.sleep) // true（共享同一函数）
```

**hasOwnProperty vs in**：
```js
console.log(p.hasOwnProperty('name')) // true（自身属性）
console.log(p.hasOwnProperty('say'))  // false（原型上的方法）
console.log('say' in p)              // true（in 会检查原型链）
console.log('toString' in p)         // true（来自 Object.prototype）
```

| 特性 | hasOwnProperty | in 操作符 |
|------|---------------|-----------|
| 自身属性 | ✅ | ✅ |
| 原型链属性 | ❌ | ✅ |
| 不可枚举属性 | ✅ | ✅ |
| Symbol key | ✅ | ✅ |

**Object.create**：
```js
const proto = { greet() { console.log('hello') } }
const obj = Object.create(proto)
obj.greet() // 'hello'
console.log(obj.__proto__ === proto) // true

// 创建无原型的对象
const bare = Object.create(null)
console.log(bare.toString) // undefined（没有 Object.prototype）
```

**性能注意事项**：原型链查找比自身属性查找慢（引擎有内联缓存优化）。查找链越长性能越差，保持原型层级不要太深。`hasOwnProperty` 比 `in` 快（不需要查原型链）。

**面试追问**：
- `__proto__` 和 `prototype` 的区别？`__proto__` 是每个对象都有的属性，`prototype` 是函数才有的属性（函数作为构造函数时用）。
- `Function.prototype` 是什么？是函数自己的原型对象，`fn.__proto__ === Function.prototype`，`Function.prototype.__proto__ === Object.prototype`。
- ES6 class 是语法糖吗？本质还是原型链，但提供了更清晰的语法和严格模式支持。

## Q9: Promise 是什么？

Promise 是 **异步操作的结果容器**，三个状态：

```
pending（等待中） -> fulfilled（成功）/ rejected（失败）
```

状态一旦改变就不可逆 —— 要么 fulfilled，要么 rejected，不会来回切换。

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000)
})

promise
  .then(result => console.log(result))   // 'done'
  .catch(error => console.error(error))
  .finally(() => console.log('complete'))
```

**Promise 链**：每次 `.then` 返回新的 Promise，可串联。

```js
// 链式调用
fetch('/user')
  .then(res => res.json())
  .then(user => fetch(`/posts/${user.id}`))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error('Any error in chain', err))
  // catch 捕获链中任意一个 rejected

// then 的返回值决定后续
Promise.resolve(1)
  .then(v => v * 2)          // 返回 2（简单值）
  .then(v => Promise.resolve(v * 2)) // 返回 4（Promise）
  .then(v => { throw new Error('fail') }) // 抛异常 -> rejected
  .catch(e => console.log(e.message)) // 'fail'
  .then(() => console.log('after catch')) // 继续执行
```

**静态方法**：
```js
// Promise.all — 全部成功则成功，一个失败则整体失败
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json()),
])

// Promise.allSettled — 等所有完成（不论成功失败）
const results = await Promise.allSettled([
  fetch('/ok'),
  fetch('/fail'),
])
// results = [{ status: 'fulfilled', value: Response }, { status: 'rejected', reason: Error }]

// Promise.race — 第一个完成的结果
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('timeout')), 5000)
)
const data = await Promise.race([fetch('/api'), timeout])

// Promise.any — 第一个成功的结果（全失败才 AggregateError）
const firstSuccess = await Promise.any([
  fetch('/mirror1'),
  fetch('/mirror2'),
])
```

**边缘情况**：
```js
// 返回 thenable 对象
const thenable = {
  then(resolve) { resolve(42) }
}
Promise.resolve(thenable).then(v => console.log(v)) // 42

// 错误未捕获
const noCatch = new Promise((_, reject) => reject('error'))
// 未绑定 catch -> unhandledrejection 事件

// then 中的错误被后续 catch 捕获
Promise.resolve(1)
  .then(() => { throw new Error('err') })
  // .catch 没有 -> 错误被吞掉？不会，会触发 unhandledrejection

// 在 then 里 return promise 时，下一个 then 等它 resolve
```

| 方法 | 触发条件 | 短路行为 |
|------|---------|---------|
| Promise.all | 全部 fulfilled / 任一 rejected | 任一 rejected 立即短路 |
| Promise.allSettled | 全部 settled | 不短路 |
| Promise.race | 任一 settled | 第一个结果 |
| Promise.any | 任一 fulfilled / 全部 rejected | 第一个 fulfilled 或全部 rejected |

**面试追问**：
- Promise 为什么不可取消？规范设计如此，需要取消可以借助 AbortController（fetch 的 abort）或第三方库。
- then 中 return 一个普通值和 return 一个 Promise 有什么区别？Promise 会展开（flatten）thenable 和 Promise，普通值直接传给下一个 then。
- 微任务和宏任务的关系？Promise 的回调是微任务，在宏任务之前执行。

## Q10: async/await

async/await 是 Promise 的语法糖，使异步代码看起来像同步代码。async 函数始终返回一个 Promise，await 等待 Promise 完成。

```js
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Failed:', err)
    throw err
  }
}
// 返回值自动包装为 Promise
fetchData().then(data => console.log(data))
```

**本质**：`async` 函数返回一个 Promise，`await` 是 `.then` 的语法糖。

```js
// 以下两种写法等价
async function foo() { return 42 }
// 等价于
function foo() { return Promise.resolve(42) }

async function bar() {
  const val = await somePromise
  return val * 2
}
// 等价于
function bar() {
  return somePromise.then(val => val * 2)
}
```

**串行 vs 并行**：
```js
// ❌ 串行（一个接一个）— 慢
const a = await fetchA()
const b = await fetchB() // 等 fetchA 完成才发起

// ✅ 并行（同时发起）
const [a, b] = await Promise.all([fetchA(), fetchB()])

// 或者先发起请求再 await
const promiseA = fetchA()
const promiseB = fetchB()
const a = await promiseA
const b = await promiseB // 此时 B 可能已经完成
```

**错误处理模式**：
```js
// 1. try/catch（推荐）
async function safe() {
  try {
    return await risky()
  } catch (err) {
    console.error(err)
    return fallbackValue
  }
}

// 2. .catch + await
async function safe2() {
  const result = await risky().catch(err => {
    console.error(err)
    return fallbackValue
  })
  return result
}

// 3. 顶层 await（ES2022，只能在 Module 中使用）
const config = await fetch('/config.json').then(r => r.json())

// 4. 并发错误隔离
async function fetchAll() {
  const results = await Promise.allSettled([
    fetchA().catch(e => ({ error: e })),
    fetchB().catch(e => ({ error: e })),
  ])
  return results
}
```

**边缘情况**：
```js
// await 非 Promise 值
const x = await 42 // 等价于 await Promise.resolve(42)

// async 函数中不写 await
async function noAwait() {
  return fetch('/api') // 返回 Promise，不是 Response
}
noAwait() // Promise（不是 Response）

// 立即执行 async 函数
;(async () => {
  const data = await fetch('/api')
  console.log(data)
})()

// for...of 中的 await（串行迭代）
async function process(items) {
  for (const item of items) {
    await processItem(item) // 一次处理一个
  }
}
// forEach 中的 await 不生效
items.forEach(async (item) => {
  await processItem(item) // 并发执行！不会等前一个完成
})
```

| 场景 | 写法 | 行为 |
|------|------|------|
| 串行 | await A; await B | 顺序执行，总耗时为和 |
| 并行 | Promise.all | 并发执行，总耗时取最大 |
| 分批 | for...of + await | 控制并发数，一次一个 |
| 乱序 | forEach + async | 不等待，全部并发 |

**面试追问**：
- async/await 和 Promise.then 哪个性能更好？Promise.then 略快（少一层 Generator 包装），但差异微乎其微，优先考虑可读性。
- await 在 forEach 中为什么不生效？forEach 的回调是普通函数，async 函数返回的 Promise 不会被 await。
- 如何并发限制？使用 `Promise.all` + 分块或第三方库（如 p-limit）。

## Q11: 事件循环（Event Loop）

JS 是单线程语言，通过事件循环实现异步不阻塞。事件循环不断检查调用栈是否为空，为空则从任务队列取出任务执行。

```
JS 是单线程语言，通过事件循环实现异步。

执行顺序：
1. 同步代码（call stack）
2. 微任务（microtask）：Promise.then / queueMicrotask / MutationObserver
3. 宏任务（macrotask）：setTimeout / setInterval / I/O / UI 渲染
```

```js
console.log(1)                // 1. 同步
setTimeout(() => console.log(2)) // 4. 宏任务
Promise.resolve().then(() => console.log(3)) // 3. 微任务
console.log(4)                // 2. 同步
// 输出：1, 4, 3, 2
```

**每轮宏任务前清空所有微任务**：
```js
console.log('start')

setTimeout(() => console.log('timeout1'), 0)

Promise.resolve().then(() => {
  console.log('promise1')
  Promise.resolve().then(() => console.log('promise2'))
})

setTimeout(() => console.log('timeout2'), 0)

Promise.resolve().then(() => console.log('promise3'))

console.log('end')

// 输出：start, end, promise1, promise2, promise3, timeout1, timeout2
```

**浏览器 vs Node.js**：
```js
// 浏览器事件循环
// 1. 执行同步代码
// 2. 清空微任务队列
// 3. 取一个宏任务执行
// 4. 可能执行 UI 渲染
// 5. 回到步骤 2

// Node.js 事件循环（Libuv）
// timers -> pending callbacks -> idle/prepare -> poll -> check -> close callbacks
// 每个阶段之间执行微任务
```

**requestAnimationFrame**：
```js
// rAF 在浏览器渲染前执行（介于宏任务和渲染之间）
requestAnimationFrame(() => {
  console.log('before paint')
})
// 适合动画和 DOM 测量
```

**边缘情况**：
```js
// 微任务递归导致主线程卡死
function recursiveMicrotask() {
  queueMicrotask(recursiveMicrotask) // 无限微任务排满，宏任务永远无法执行
}

// async/await 也是微任务
async function asyncFn() {
  console.log('async start')
  await 0
  console.log('async after await')
}
asyncFn()
console.log('sync')
// async start, sync, async after await
```

| 任务类型 | 例子 | 优先级 |
|---------|------|--------|
| 同步代码 | 普通语句、函数调用 | 最高（立即执行） |
| 微任务 | Promise.then, queueMicrotask, MutationObserver, process.nextTick(Node) | 高（每轮清空） |
| 宏任务 | setTimeout, setInterval, I/O, UI 渲染, setImmediate(Node) | 低（逐个执行） |
| requestAnimationFrame | 动画回调 | 渲染前执行 |

**面试追问**：
- Promise 和 setTimeout 哪个先执行？Promise 回调是微任务，先于 setTimeout（宏任务）。
- 为什么需要微任务？为了在 UI 渲染前完成状态更新，避免不必要的渲染。
- Node.js 的 process.nextTick 和 Promise 哪个先？nextTick 优先级高于 Promise 微任务（Node 特有）。

## Q12: 深拷贝和浅拷贝

**浅拷贝**：只复制第一层属性，嵌套对象复制引用。**深拷贝**：完全复制所有层级，新旧对象完全独立。

```js
// 浅拷贝：只拷贝一层
const original = { a: 1, b: { c: 2 } }
const shallow1 = { ...original }
const shallow2 = Object.assign({}, original)

console.log(shallow1.b === original.b) // true（嵌套对象共享引用）

// 深拷贝：全部递归拷贝
const deep = JSON.parse(JSON.stringify(original))
console.log(deep.b === original.b) // false（完全独立）
```

**JSON.parse(JSON.stringify(obj)) 局限**：
```js
const problematic = {
  fn: () => {},
  undef: undefined,
  sym: Symbol('test'),
  date: new Date(),
  regex: /hello/g,
  nan: NaN,
  infinity: Infinity,
  circular: null,
}
problematic.circular = problematic // 循环引用

JSON.parse(JSON.stringify(problematic))
// ❌ 函数/undefined/Symbol 被移除
// ❌ Date 变成字符串
// ❌ RegExp 变成空对象
// ❌ NaN -> null
// ❌ Infinity -> null
// ❌ 循环引用 -> 抛错
```

**手写深拷贝（支持循环引用）**：
```js
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Map) {
    const clone = new Map()
    map.set(obj, clone)
    obj.forEach((v, k) => clone.set(k, deepClone(v, map)))
    return clone
  }
  if (obj instanceof Set) {
    const clone = new Set()
    map.set(obj, clone)
    obj.forEach(v => clone.add(deepClone(v, map)))
    return clone
  }
  if (map.has(obj)) return map.get(obj) // 处理循环引用

  const clone = Array.isArray(obj) ? [] : {}
  map.set(obj, clone)

  // 遍历所有 key（包括 Symbol）
  ;[...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(key => {
    clone[key] = deepClone(obj[key], map)
  })
  return clone
}

// 测试
const obj = { a: 1, b: { c: 2 }, d: [1, 2, { e: 3 }] }
obj.self = obj // 循环引用
const cloned = deepClone(obj)
console.log(cloned.self === cloned) // true（循环引用保持）
console.log(cloned.b === obj.b)     // false（深拷贝）
```

**structuredClone**（浏览器内置，ES2023）：
```js
// 现代浏览器内置的深拷贝
const cloned = structuredClone(original)
// 支持：循环引用、Date、RegExp、Map、Set、ArrayBuffer
// 不支持：函数、Symbol、WeakMap、WeakSet、DOM 节点
```

| 方法 | 支持循环引用 | 支持函数 | 支持 Date | 支持 Map/Set | 性能 |
|------|------------|---------|----------|-------------|------|
| 展开运算符 | ❌（浅拷贝） | ✅ | ✅(引用) | ✅(引用) | 最快 |
| JSON.stringify | ❌ | ❌ | ❌(变字符串) | ❌ | 快 |
| 递归深拷贝 | ✅(WeakMap) | ✅ | ✅ | ✅ | 中等 |
| structuredClone | ✅ | ❌ | ✅ | ✅ | 快（C++ 实现） |

**性能注意事项**：深拷贝在对象层级深、数据量大时耗时明显。在性能敏感场景（如 React 状态更新）应避免深拷贝，优先使用不可变数据模式。

**面试追问**：
- 为什么 JSON.parse(JSON.stringify()) 不能拷贝函数？JSON 标准不支持函数，序列化时被忽略。
- 如何拷贝一个带有循环引用的对象？使用递归 + WeakMap 记录已拷贝的对象，遇到直接返回。
- structuredClone 的兼容性？现代浏览器和 Node 17+ 支持，是推荐的深拷贝方案。

## Q13: 防抖（Debounce）和节流（Throttle）

**防抖**：连续触发只执行最后一次（搜索框输入）。**节流**：固定间隔内只执行一次（滚动、resize）。

```js
// 防抖：连续触发只执行最后一次（搜索框输入）
function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

// 节流：固定间隔内只执行一次（滚动、resize）
function throttle(fn, interval) {
  let last = 0
  return function(...args) {
    const now = Date.now()
    if (now - last >= interval) {
      last = now
      fn.apply(this, args)
    }
  }
}
```

**带 leading 的防抖**：
```js
// leading（立即执行）+ trailing（延迟执行）
function debounce(fn, delay, options = { leading: false, trailing: true }) {
  let timer = null
  let leadingCalled = false

  return function(...args) {
    const context = this

    if (options.leading && !leadingCalled) {
      fn.apply(context, args)
      leadingCalled = true
    }

    clearTimeout(timer)
    timer = setTimeout(() => {
      if (options.trailing && options.leading) leadingCalled = false
      if (options.trailing && !(options.leading && !leadingCalled)) {
        fn.apply(context, args)
      }
    }, delay)
  }
}
```

**带 leading 的节流**：
```js
// 时间戳 + setTimeout 版（保证最后执行一次）
function throttle(fn, interval, options = { leading: true, trailing: true }) {
  let last = 0
  let timer = null

  return function(...args) {
    const context = this
    const now = Date.now()

    if (!last && options.leading === false) last = now

    const remaining = interval - (now - last)

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      last = now
      fn.apply(context, args)
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        last = options.leading ? Date.now() : 0
        timer = null
        fn.apply(context, args)
      }, remaining)
    }
  }
}
```

**requestAnimationFrame 节流**：
```js
function rafThrottle(fn) {
  let ticking = false
  return function(...args) {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        fn.apply(this, args)
        ticking = false
      })
    }
  }
}
// 适用于动画场景（约 16.6ms 一次）
```

**实际应用场景**：

| 场景 | 使用 | 理由 |
|------|------|------|
| 搜索框输入 | 防抖 | 等用户输入完再搜索，减少请求数 |
| 窗口 resize | 节流 | 固定频率计算布局，避免卡顿 |
| 滚动加载更多 | 节流 | 控制加载频率 |
| 按钮提交 | 防抖(leading) | 首次立即执行，防止重复提交 |
| 拖拽事件 | 节流(rAF) | 与刷新率同步，保证动画流畅 |

**边缘情况**：
```js
// 防抖的 this 指向
const obj = {
  value: 1,
  update: debounce(function() {
    console.log(this.value) // this 指向 obj（因为箭头函数保留了 this）
  }, 100)
}
obj.update() // 1

// 防抖取消
function debounce(fn, delay) {
  let timer = null
  const debounced = function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
  debounced.cancel = () => clearTimeout(timer) // 提供取消方法
  return debounced
}
```

**面试追问**：
- 防抖和节流的区别？防抖以"最后一次"为准适合输入，节流以"固定频率"为准适合滚动。
- 什么时候用 leading 防抖？需要首次立即响应的场景（如"保存"按钮，首次立即保存，后续防抖）。
- 如何实现一个带取消的防抖？返回的函数挂载 cancel 方法，调用 clearTimeout。

## Q14: call / apply / bind

call 和 apply 立即执行函数并指定 this，区别在参数形式。bind 返回绑定 this 后的新函数，不立即执行。

```js
// call：立即执行，参数列表
fn.call(thisArg, arg1, arg2)

// apply：立即执行，参数数组
fn.apply(thisArg, [arg1, arg2])

// bind：返回新函数，不执行
const bound = fn.bind(thisArg, arg1)
bound()
```

**手写 call**：
```js
Function.prototype.myCall = function(context, ...args) {
  context = context ?? window // null/undefined 时指向 window（非严格模式）
  const key = Symbol()
  context[key] = this  // this = 调用的函数
  const result = context[key](...args)
  delete context[key]
  return result
}
```

**手写 apply**：
```js
Function.prototype.myApply = function(context, args) {
  context = context ?? window
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
```

**手写 bind**：
```js
Function.prototype.myBind = function(context, ...bindArgs) {
  const fn = this
  return function Fn(...callArgs) {
    // 如果作为构造函数，this 指向新对象，忽略 context
    if (this instanceof Fn) {
      return new fn(...bindArgs, ...callArgs)
    }
    return fn.apply(context, bindArgs.concat(callArgs))
  }
}
```

**实际应用**：
```js
// 1. 借用数组方法
const args = arguments
const arr = Array.prototype.slice.call(args) // 类数组转数组
const has = Array.prototype.includes.call(args, 'test')

// 2. 借用 toString 判断类型
const type = Object.prototype.toString.call([]) // '[object Array]'

// 3. 柯里化 + bind
function multiply(a, b, c) { return a * b * c }
const double = multiply.bind(null, 2)
const triple = multiply.bind(null, 3)
double(3, 4) // 2 * 3 * 4 = 24
triple(3, 4) // 3 * 3 * 4 = 36

// 4. 事件处理绑定 this
class Button {
  constructor(text) {
    this.text = text
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() { console.log(this.text) }
}
```

| 方法 | 执行时机 | 参数形式 | 返回值 |
|------|---------|---------|--------|
| call | 立即 | 列表 | 函数返回值 |
| apply | 立即 | 数组 | 函数返回值 |
| bind | 延迟 | 列表（可分多次传） | 新函数 |

**边缘情况**：
```js
// thisArg 传 null/undefined
function foo() { console.log(this) }
foo.call(null)    // window（非严格）/ undefined（严格）
foo.call(undefined) // window（非严格）/ undefined（严格）

// 原始值作为 thisArg
foo.call(1)       // Number 对象（原始值被包装为对象）
foo.call('hello') // String 对象

// bind 的 new 行为
function Person(name) { this.name = name }
const BoundPerson = Person.bind({ fake: true })
const p = new BoundPerson('Alice')
console.log(p.name) // 'Alice'（bind 的 this 被忽略）
console.log(p instanceof Person) // true
```

**面试追问**：
- bind 和 call/apply 的核心区别？bind 返回新函数（闭包），可以延迟执行；call/apply 立即执行。
- 手写 bind 为什么要考虑 new？因为 bind 返回的函数可能被 new 调用，此时 bind 绑定的 this 应被忽略。
- call 和 apply 什么时候选择？参数个数确定用 call，参数是数组或个数不确定用 apply（或展开运算符）。

## Q15: new 关键字做了什么？

new 运算符创建用户定义的对象类型的实例或内置对象类型的实例。它执行以下 4 步：

```js
function myNew(Constructor, ...args) {
  // 1. 创建空对象
  const obj = {}
  // 2. 原型链连接
  Object.setPrototypeOf(obj, Constructor.prototype)
  // 3. 绑定 this 并执行构造函数
  const result = Constructor.apply(obj, args)
  // 4. 返回对象（如果构造函数返回对象则用它，否则用新对象）
  return result instanceof Object ? result : obj
}
```

**使用示例**：
```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`)
  }
}
Person.prototype.species = 'Homo sapiens'

// 等价于 new Person('Alice', 25)
const alice = myNew(Person, 'Alice', 25)
console.log(alice.name)    // 'Alice'
console.log(alice.species) // 'Homo sapiens'（原型链）
console.log(alice instanceof Person) // true
```

**构造函数返回值的特性**：
```js
function ReturnsObject() {
  this.name = 'internal'
  return { name: 'external' } // 返回对象 -> 替换新对象
}
console.log(new ReturnsObject().name) // 'external'

function ReturnsPrimitive() {
  this.name = 'internal'
  return 42 // 返回原始值 -> 忽略，返回新创建的对象
}
console.log(new ReturnsPrimitive().name) // 'internal'

function ReturnsNull() {
  this.name = 'internal'
  return null // null 是对象？typeof null === 'object' -> 但规范特殊处理
}
// 规范中 return 如果是 null 或 undefined 视为没有返回值
console.log(new ReturnsNull().name) // 'internal'
```

**ES6 class 和 new**：
```js
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() { console.log(`${this.name} speaks`) }
}

// class 必须用 new 调用
Animal('cat') // TypeError: Class constructor Animal cannot be invoked without 'new'

// 检查是否被 new 调用
function SafeConstructor(name) {
  if (!new.target) throw new Error('Must use new')
  this.name = name
}
// new.target 在箭头函数中不可用
```

**Object.create 和 new 的关系**：
```js
// Object.create 只做原型连接（不执行构造函数）
const proto = { greet() { console.log('hello') } }
const obj = Object.create(proto)
// obj 的原型是 proto，但构造函数未执行

// 手动模拟 new
function simulateNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype)
  const result = Constructor.apply(obj, args)
  return result instanceof Object ? result : obj
}
```

**面试追问**：
- new 和 Object.create 的区别？new 会执行构造函数，Object.create 只做原型连接不执行函数。
- 如果一个构造函数返回了对象，new 的结果是什么？使用返回的对象，而不是新创建的对象。
- 箭头函数为什么不能作为构造函数？箭头函数没有 [[Construct]] 内部方法，也没有 prototype 属性。

## Q16: Map 和 Object 的区别

Map 和 Object 都用于存储键值对，但设计目的和行为有本质差异：

| | Object | Map |
|--|--------|-----|
| key 类型 | 只能 string / symbol | 任意类型（对象、函数） |
| 有序 | 不保证（ES6 后部分有序） | 保持插入顺序 |
| 大小 | 手动计算 `Object.keys(o).length` | `map.size` |
| 遍历 | `for...in`（需 hasOwnProperty） | `for...of` 直接 |
| 性能 | 增删差 | 增删好（大数据量） |
| 原型链 | 有（可能冲突） | 无 |
| 序列化 | JSON.stringify 支持 | 不支持（需转换） |

```js
// key 类型对比
const obj = {}
obj[1] = 'number'
obj['1'] = 'string' // 覆盖上一条（数字 key 转字符串）
console.log(obj) // { 1: 'string' }

const map = new Map()
map.set(1, 'number')
map.set('1', 'string')
console.log(map.get(1))  // 'number'（数字和字符串 key 独立）
console.log(map.get('1')) // 'string'

// 对象作为 key
const key = { id: 1 }
map.set(key, 'object key')
console.log(map.get(key)) // 'object key'

// 对象作为 Object 的 key
const obj2 = {}
obj2[key] = 'value'
console.log(obj2[key]) // 'value'
console.log(obj2['[object Object]']) // 'value'（被转成字符串）
```

**遍历方式**：
```js
// Object 遍历
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj).forEach(key => console.log(key, obj[key]))
Object.values(obj).forEach(value => console.log(value))
Object.entries(obj).forEach(([key, value]) => console.log(key, value))

// Map 遍历
const map = new Map([['a', 1], ['b', 2], ['c', 3]])
map.forEach((value, key) => console.log(key, value))
for (const [key, value] of map) console.log(key, value)
for (const key of map.keys()) console.log(key)
for (const value of map.values()) console.log(value)
```

**性能对比**：
```js
// Map 频繁增删更快（引擎专门优化）
const iterations = 100000
const obj = {}
const map = new Map()

// 插入
console.time('Object set')
for (let i = 0; i < iterations; i++) obj[i] = i
console.timeEnd('Object set')

console.time('Map set')
for (let i = 0; i < iterations; i++) map.set(i, i)
console.timeEnd('Map set')

// 查找
console.time('Object get')
for (let i = 0; i < iterations; i++) obj[i]
console.timeEnd('Object get')

console.time('Map get')
for (let i = 0; i < iterations; i++) map.get(i)
console.timeEnd('Map get')
// 大数据量下 Map 插入和查找通常更快
```

**Map 与 JSON 互转**：
```js
function mapToObj(map) {
  return Object.fromEntries(map)
}
function objToMap(obj) {
  return new Map(Object.entries(obj))
}

const m = new Map([['name', 'Alice'], ['age', 30]])
console.log(JSON.stringify(mapToObj(m))) // '{"name":"Alice","age":30}'
```

**面试追问**：
- 什么时候用 Map 代替 Object？需要非字符串 key、频繁增删、关注插入顺序、不确定大小时。
- WeakMap 和 Map 的区别？WeakMap key 弱引用，不阻止 GC，不可遍历，适合存储 DOM 节点关联数据。
- Object 能安全存储多少属性？不同引擎上限不同，通常在百万级别后性能急剧下降。

## Q17: Set 和数组的区别

- Set 元素是**唯一**的（自动去重）
- Set 有 `has()` 方法（O(1) vs 数组的 includes O(n)）
- Set 保持插入顺序
- Set 不能通过索引访问

```js
// 转换：去重
const arr = [1, 2, 2, 3, 3, 4]
const unique = [...new Set(arr)] // [1, 2, 3, 4]

// 集合操作
const setA = new Set([1, 2, 3, 4])
const setB = new Set([3, 4, 5, 6])

// 并集
const union = new Set([...setA, ...setB]) // {1, 2, 3, 4, 5, 6}

// 交集
const intersection = new Set([...setA].filter(x => setB.has(x))) // {3, 4}

// 差集（A - B）
const difference = new Set([...setA].filter(x => !setB.has(x))) // {1, 2}

// 对称差集
const symmetricDiff = new Set([
  ...[...setA].filter(x => !setB.has(x)),
  ...[...setB].filter(x => !setA.has(x)),
]) // {1, 2, 5, 6}
```

**性能对比**：
```js
const size = 100000
const arr = Array.from({ length: size }, (_, i) => i)
const set = new Set(arr)

// 查找
console.time('Array includes - found')
arr.includes(size - 1) // O(n)
console.timeEnd('Array includes - found')

console.time('Set has - found')
set.has(size - 1) // O(1)
console.timeEnd('Set has - found')

console.time('Array includes - not found')
arr.includes(-1) // O(n) 遍历全部
console.timeEnd('Array includes - not found')

console.time('Set has - not found')
set.has(-1) // O(1)
console.timeEnd('Set has - not found')
// 大数据量下 Set 查找远快于数组
```

**边缘情况**：
```js
// NaN 在 Set 中视为相等
const s = new Set([NaN, NaN])
console.log(s.size) // 1（NaN === NaN 是 false，但 Set 内部用 Same-value-zero）

// 对象引用
const s2 = new Set([{}, {}])
console.log(s2.size) // 2（不同对象引用，即使内容相同）

// 删除和添加
const s3 = new Set([1, 2, 3])
s3.delete(2) // true
s3.delete(10) // false（不存在）
s3.add(2) // Set {1, 3, 2}（添加回末尾）

// Set 转数组的其他方式
Array.from(set)
[...set]
```

| 操作 | 数组 | Set | 备注 |
|------|------|-----|------|
| 查找 | O(n) includes | O(1) has | Set 用哈希表 |
| 删除 | O(n) splice/filter | O(1) delete | 数组要重新索引 |
| 插入 | O(n) push/unshift | O(1) add | 数组中间插入慢 |
| 去重 | 需要写逻辑 | 自动 | Set 本质是集合 |
| 索引访问 | O(1) arr[i] | ❌ | Set 无索引 |

**面试追问**：
- Set 的内部实现？哈希表（或类似结构），查找 O(1)，插入有序。
- 如何用 Set 做交集？遍历较小的 Set 用 has 检查，复杂度为 O(min(m,n))。
- WeakSet 和 Set 的区别？WeakSet 只能存对象、弱引用、不能遍历、没有 size。

## Q18: 箭头函数和普通函数的区别

1. 没有自己的 `this`（继承外层作用域的 this）
2. 没有 `arguments` 对象
3. 不能 new（不是构造函数）
4. 没有 `prototype`
5. 不能用作 generator（没有 `yield`）

```js
// 1. this 继承
const obj = {
  name: 'obj',
  regular: function() {
    console.log(this.name) // 'obj'（调用时 this 指向 obj）
    const inner = () => console.log(this.name) // 'obj'（继承外层 this）
    inner()
  },
  arrow: () => {
    console.log(this.name) // undefined（外层作用域的 this，这里是全局）
  }
}

// 2. 没有 arguments
function regular() { console.log(arguments) }
regular(1, 2, 3) // Arguments(3) [1, 2, 3]

const arrow = () => { console.log(arguments) }
arrow(1, 2, 3) // ReferenceError（或继承外层 arguments）

// 用剩余参数替代
const arrow2 = (...args) => console.log(args)
arrow2(1, 2, 3) // [1, 2, 3]

// 3. 不能 new
const Fn = () => {}
new Fn() // TypeError: Fn is not a constructor
console.log(Fn.prototype) // undefined

// 4. 不能 yield
// const gen = () => { yield 1 } // SyntaxError
```

**使用场景选择**：

```js
// ✅ 适合箭头函数
// 回调函数（setTimeout、事件绑定）
setTimeout(() => console.log(this.name), 100)

// 数组方法
arr.map(item => item * 2)
arr.filter(x => x > 0)

// React 类组件（自动绑定）
// 避免 prototype 方法手动 bind

// React 函数组件中
const MyComp = () => <div>...</div>

// ❌ 不适合箭头函数
// 对象方法（需要动态 this）
const obj = {
  name: 'obj',
  greet: () => console.log(this.name) // ❌ 指向全局
}

// 原型方法
function Person(name) { this.name = name }
Person.prototype.say = () => console.log(this.name) // ❌ 指向全局

// 需要动态 this 的事件处理
button.addEventListener('click', function() {
  console.log(this) // button 元素
})
button.addEventListener('click', () => {
  console.log(this) // 外层 this（可能是 window）
})

// 构造函数
const Person = (name) => { this.name = name } // ❌ 不能 new
```

**箭头函数的 return 简写**：
```js
// 隐式返回
const add = (a, b) => a + b

// 返回对象需要括号
const getObj = () => ({ name: 'test' })

// 多行需要大括号和 return
const multi = (a, b) => {
  const result = a + b
  return result * 2
}
```

| 特性 | 普通函数 | 箭头函数 |
|------|---------|---------|
| this | 调用时动态 | 定义时静态（词法） |
| arguments | 有 | 无（用 rest 参数） |
| new | 可以 | 不可以 |
| prototype | 有 | 无 |
| generator | 可以 | 不可以 |
| call/apply/bind | 改变 this | 忽略 this 参数 |

**面试追问**：
- 箭头函数为什么不能 new？内部没有 [[Construct]] 方法，也没有 prototype 属性。
- 箭头函数中的 this 能改变吗？不能，call/apply/bind 第一个参数会被忽略。
- 什么时候绝对不用箭头函数？需要动态 this 的对象方法、原型方法、构造函数、需要 arguments 时。

## Q19: DOM 事件流

DOM 事件传播分为三个阶段：捕获阶段、目标阶段、冒泡阶段。

```
捕获阶段（capture phase）：window -> document -> ... -> 目标元素
目标阶段（target phase）：事件到达目标元素
冒泡阶段（bubble phase）：目标元素 -> ... -> window
```

```js
// 冒泡 phase（默认）
el.addEventListener('click', handler)               // phase = 3 (bubble)
// 捕获 phase
el.addEventListener('click', handler, true)          // phase = 1 (capture)
// 阻止传播
e.stopPropagation()                                   // stop 冒泡
e.stopImmediatePropagation()                          // stop 冒泡 + 其他同元素 handler
```

**事件委托**：
```js
// ❌ 为每个 li 绑定（性能差）
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => console.log(li.textContent))
})

// ✅ 事件委托（利用冒泡，一个父元素处理所有）
document.querySelector('ul').addEventListener('click', e => {
  const li = e.target.closest('li')
  if (li) console.log(li.textContent)
})
// 动态添加的 li 不需要重新绑定
```

**stopImmediatePropagation vs stopPropagation**：
```js
el.addEventListener('click', e => {
  console.log('handler 1')
  // e.stopPropagation() // 阻止冒泡，但 handler 2 仍执行
  // e.stopImmediatePropagation() // 阻止冒泡 + 阻止同元素其他 handler
})
el.addEventListener('click', e => {
  console.log('handler 2') // stopImmediate 后不执行
})
```

**自定义事件**：
```js
// 创建
const event = new CustomEvent('user:login', {
  detail: { userId: 123 },
  bubbles: true,
  cancelable: true,
})

// 监听
document.addEventListener('user:login', e => {
  console.log('user logged in:', e.detail.userId)
})

// 触发
document.dispatchEvent(event)
```

**passive 事件监听**：
```js
// passive: true 告诉浏览器不调用 preventDefault
// 提升滚动性能（Chrome 中 touchstart/touchmove 如果是 passive，可以不等待监听器）
document.addEventListener('touchstart', handler, { passive: true })
// ❌ 如果 passive: true 的监听器调用 preventDefault 会被忽略（控制台警告）
```

**事件对象的属性和方法**：
```js
el.addEventListener('click', e => {
  e.target       // 触发事件的元素（点击的精确元素）
  e.currentTarget // 绑定事件监听的元素
  e.eventPhase   // 1=捕获, 2=目标, 3=冒泡
  e.preventDefault() // 阻止默认行为
  e.stopPropagation() // 阻止传播
  e.stopImmediatePropagation() // 阻止传播 + 其他 handler
})
```

**面试追问**：
- 事件委托的原理？利用事件冒泡，在父级挂一个监听器处理所有子元素事件，节省内存、支持动态元素。
- 怎么阻止默认事件？`e.preventDefault()`，但 passive 监听器中无效。
- addEventListener 和 onclick 的区别？addEventListener 可以绑定多个、可以指定捕获/冒泡，onclick 只能一个且会覆盖。

## Q20: 常见数组方法

```js
// 遍历
forEach((item, index, arr) => {})    // 不返回
map(item => item * 2)                // 返回新数组
filter(item => item > 0)             // 返回过滤后的数组

// 查找
find(item => item.id === 1)          // 返回第一个匹配元素（或 undefined）
findIndex(item => item.id === 1)     // 返回索引
includes(1)                          // 返回 boolean

// 归并
reduce((acc, item) => acc + item, 0)

// 判断
every(item => item > 0)              // 所有满足
some(item => item > 0)               // 有一个满足

// 扁平
flat(Infinity)                        // 拍平嵌套数组
flatMap(item => [item, item * 2])    // map + flat(1)
```

**更多方法和对比**：

```js
// 新增方法 (ES2023)
const arr = [3, 1, 2]

// toSorted — 返回新数组（不修改原数组）
const sorted = arr.toSorted()   // [1, 2, 3]
console.log(arr)                // [3, 1, 2]（原数组不变）

// toReversed — 返回反转新数组
const reversed = arr.toReversed() // [2, 1, 3]

// toSpliced — 返回修改后的新数组
const spliced = arr.toSpliced(0, 1, 99) // [99, 1, 2]

// with — 替换指定索引元素返回新数组
const withReplaced = arr.with(0, 99) // [99, 1, 2]

// findLast / findLastIndex — 从后往前找
const nums = [1, 2, 3, 4, 5]
nums.findLast(n => n % 2 === 0)    // 4
nums.findLastIndex(n => n % 2 === 0) // 3
```

**注意：at 方法**：
```js
// at — 支持负索引
const arr = [10, 20, 30, 40]
arr.at(0)   // 10
arr.at(-1)  // 40
arr.at(-2)  // 30
arr[arr.length - 1] // 40（传统写法）
```

**reduce 高级用法**：
```js
// 数组分组
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
]
const grouped = people.reduce((acc, person) => {
  const key = person.age
  if (!acc[key]) acc[key] = []
  acc[key].push(person)
  return acc
}, {})
// { 25: [Alice, Charlie], 30: [Bob] }

// 数组转对象
const arr = ['a', 'b', 'c']
const obj = arr.reduce((acc, item, i) => ({ ...acc, [item]: i }), {})
// { a: 0, b: 1, c: 0 }

// 管道函数组合
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
```

**性能对比：for vs forEach vs map**：
```js
const large = Array.from({ length: 1000000 }, (_, i) => i)

console.time('for')
for (let i = 0; i < large.length; i++) { large[i] * 2 }
console.timeEnd('for')

console.time('forEach')
large.forEach(v => v * 2)
console.timeEnd('forEach')

console.time('map')
large.map(v => v * 2)
console.timeEnd('map')

// for > forEach > map（map 创建新数组开销）
// 但差异通常不显著，优先选择语义清晰的方法
```

**边缘情况**：
```js
// 稀疏数组（empty slots）
const sparse = [1, , , 4]
console.log(sparse.length) // 4

sparse.forEach(v => console.log(v)) // 1, 4（跳过空位）
sparse.map(v => v * 2) // [2, empty × 2, 8]
sparse.filter(v => true) // [1, 4]（跳过空位）
sparse.find(v => v === undefined) // undefined（索引 1 和 2 是 empty，不是 undefined）

// 类数组转数组
Array.from(arguments)
Array.from({ length: 3 }, (_, i) => i) // [0, 1, 2]

// 数组空位 vs undefined
const arr1 = [1, undefined, 3]
const arr2 = [1, , 3]
console.log(1 in arr1) // true（有值）
console.log(1 in arr2) // false（空位）
```

| 方法 | 是否修改原数组 | 返回值 | 跳过空位 |
|------|--------------|--------|---------|
| forEach | 否 | undefined | 是 |
| map | 否 | 新数组 | 是 |
| filter | 否 | 新数组 | 是 |
| reduce | 否 | 累积值 | 否 |
| sort | 是 | 原数组 | N/A |
| reverse | 是 | 原数组 | N/A |
| splice | 是 | 删除元素 | N/A |
| toSorted | 否 | 新数组 | N/A |

**面试追问**：
- forEach 和 map 的区别？forEach 不返回新数组用于副作用，map 返回新转换数组。
- 空位（empty）和 undefined 的区别？空位索引 in 操作符返回 false，forEach 跳过空位。
- reduce 第二个参数不传会怎样？默认用第一个元素作为初始值，空数组不传初始值会报错。
