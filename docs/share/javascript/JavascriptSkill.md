# Javascript开发技巧

> 总结了37个ES6-ES12的开发技巧

## ES6
### 01-let 和 const
为了开发的代码规范而出现的,我们要逐渐放弃var，在项目中多用let和const。

::: tip 与var的区别：
- var有变量提升，有初始化提升，值可变
- let有变量提升，没有初始化提升，值可变
- const有变量提升，没有初始化提升，值不可变，但如果是定义对象，则属性可变
- 暂时性死区问题说明：其实let和const是有变量提升的，但是没有初始化提升：
:::

```js
var name = '张三'
function fn () {
  console.log(name)
  let name = '李四'
}
fn() // Cannot access 'name' before initialization
```

> 块级作用域解决问题：

```js
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  })
} // 5 5 5 5 5

for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  })
} // 0 1 2 3 4
```


### 02-默认参数

> 如果参数不传进来，就需要设置默认参数

```js
function fn (name, age) {
  var name = name || '张三'
  var age = age || 18
  console.log(name, age)
}
fn() // 张三 18
```
> 但是这么写确实不优雅，可以使用ES6的默认参数

```js
function fn (name = '张三', age = 18) {
  console.log(name, age)
}
fn() // 张三 18
fn('李四', 22) // 李四 22
```


### 03-扩展运算符

> 拼接多个数组

```js
const arr1 = [1, 2, 4]
const arr2 = [4, 5, 7]
const arr3 = [7, 8, 9]

const arr = arr1.concat(arr2).concat(arr3)
console.log(arr) // [1, 2, 4, 4, 5, 7, 7, 8, 9]
```

> 更优雅地进行拼接

```js
const arr1 = [1, 2, 4]
const arr2 = [4, 5, 7]
const arr3 = [7, 8, 9]

const arr = [...arr1, ...arr2, ...arr3]
console.log(arr) // [1, 2, 4, 4, 5, 7, 7, 8, 9]
```

### 04-剩余参数

> 一个函数，传入参数的个数是不确定的，这就可以用ES6的剩余参数

```js
function fn(name, ...params) {
  console.log(name)
  console.log(params)
}
fn ('张三', 1, 2) // 张三 [ 1, 2 ]
fn ('张三', 1, 2, 3, 4, 5) // 张三 [ 1, 2, 3, 4, 5 ]
```


### 05-模板字符串

```js
const name = '张三'
const age = '22'
console.log(name + '今年' + age + '岁啦') // 张三今年22岁啦
```
> 现在可以这么做，会更优雅

```js
const name = '张三'
const age = '22'
console.log(`${name}今年${age}岁啦`) // 张三今年22岁啦
```


### 06-Object.keys

> 可以用来获取对象的key的集合，进而可以获得对应key的value

```js
const obj = {
  name: '张三',
  age: 22,
  gender: '男'
}
const keys = Object.keys(obj)
console.log(keys) // [ 'name', 'age', 'gender' ]
```

### 07-箭头函数

普通函数

```js
function fn () {}

const fn = function () {}
```
ES6新加了箭头函数

```js
const fn = (a, b) => {}

// 如果只有一个参数，可以省略括号
const fn = name => {}

// 如果函数体里只有一句return
const fn = name => {
    return 2 * name
}
// 可简写为
const fn = name => 2 * name

// 如果返回的是对象
const fn = name => ({ name: name })
```

::: tip 普通函数和箭头函数的区别：
1. 箭头函数不可作为构造函数，不能使用new
2. 箭头函数没有自己的this
3. 箭头函数没有arguments对象
4. 箭头函数没有原型对象
:::


### 08-Array.forEach

> ES6新加的数组遍历方法

```js
const eachArr = [1, 2, 3, 4, 5]
// 三个参数：遍历项 索引 数组本身
// 配合箭头函数
eachArr.forEach((item, index, arr) => {
  console.log(item, index, arr)
})
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]
```


### 09-Array.map

> 常用于返回一个处理过后的新数组

```js
const mapArr = [1, 2, 3, 4, 5]

// 三个参数：遍历项 索引 数组本身
// 配合箭头函数，对每一个元素进行翻倍
const mapArr2 = mapArr.map((num, index, arr) => 2 * num)
console.log(mapArr2) // [ 2, 4, 6, 8, 10 ]
```


### 10-Array.filter
> 顾名思义，用来过滤的方法

```js
const filterArr = [1, 2, 3, 4, 5]

// 三个参数：遍历项 索引 数组本身
// 配合箭头函数，返回大于3的集合
const filterArr2 = filterArr.filter((num, index, arr) => num > 3)
console.log(filterArr2) // [ 4, 5 ]
```


### 11-Array.some

> some，意思就是只有一个是真，那就返回真

```js
const someArr = [false, true, false, true, false]

// 三个参数：遍历项 索引 数组本身
// 配合箭头函数，只要有一个为true，就返回true，一个都true都没有，就返回false
const someArr2 = someArr.some((bol, index, arr) => bol)
console.log(someArr2) // true
```


### 12-Array.every

> every跟some是相反的，some是只有一个就行，every是要所有为真才返回真

```js
const everyArr = [false, true, false, true, false]

// 三个参数：遍历项 索引 数组本身
// 配合箭头函数，需要所有为true，才返回true，否则返回false
const everyArr2 = everyArr.every((bol, index, arr) => bol)
console.log(everyArr2) // false
```


### 13-Array.reduce

> 1. 第一个参数callback函数： pre为上次return的值，next为数组的本次遍历的项
> 2. 第二个参数为初始值，也是第一个pre

举两个例子：

```js
// 计算 1 + 2 + 3 + 4 + 5
const reduceArr = [1, 2, 3, 4, 5]
const sum = reduceArr.reduce((pre, next) => {
  return pre + next
}, 0)
console.log(sum) // 15
```

```js
// 统计元素出现个数
const nameArr = ['张三', '李四', '张三', '张三', '王五', '李四']
const totalObj = nameArr.reduce((pre, next) => {
  if (pre[next]) {
    pre[next]++
  } else {
    pre[next] = 1
  }
  return pre
}, {})
console.log(totalObj) // { '张三': 3, 李四: 2, '王五': 1 }
```


### 14-对象属性同名简写

> 以前同名属性需要这么写

```js
const name = '张三'
const age = '22'

const obj = {
  name: name,
  age: age
}
console.log(obj) // { name: '张三', age: '22' }
```

> ES6新增语法，只需这么写

```js
const name = '张三'
const age = '22'

// 属性同名可简写
const obj = {
  name,
  age
}
console.log(obj) // { name: '张三', age: '22' }
```


### 15-Promise

> Promise，中文名为承诺，承诺在哪呢？承诺在，一旦他的状态改变，就不会再改。

```js
// 成功状态
function requestData () {
  // 模拟请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('张三')
    }, 1000)
  })
}

requestData().then(res => {
  console.log(res) // 一秒钟后输出 '张三'
}, err => {
  console.error(err)
})
```

```js
// 失败状态
function requestData () {
  // 模拟请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('错误啦')
    }, 1000)
  })
}

requestData().then(res => {
  console.log(res)
}, err => {
  console.error(err) // 一秒钟后输出 '错误啦'
})
```

::: tip all方法
- 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
- 如果所有Promise都成功，则返回成功结果数组
- 如果有一个Promise失败，则返回这个失败结果
:::

```js
// 如果全都为成功
function fn(time) {
  return new Promise((resolve, reject) => {
    console.log('立即输出', time)
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

Promise.all([fn(2000), fn(3000), fn(1000)]).then(res => {
  // 3秒后输出 [ '2000毫秒后我成功啦！！！', '3000毫秒后我成功啦！！！', '1000毫秒后我成功啦！！！' ]
  console.log(res) 
}, err => {
  console.error(err)
})
```

```js
// 如果有一个失败
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.all([fn(2000, true), fn(3000), fn(1000, true)]).then(res => {
  console.log(res)
}, err => {
  console.error(err) // 3秒后输出 '3000毫秒后我失败啦！！！'
})
```

::: tip race方法
- 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
- 哪个Promise最快得到结果，就返回那个结果，无论成功失败
:::

```js
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.race([fn(2000, true), fn(3000), fn(1000)]).then(res => {
  console.log(res)
}, err => {
  console.error(err) // 1秒后输出
})
```

### 16-class
以前使用构造函数生成对象，这么做

```js
function Person(name) {
  this.name = name
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

const zhangsan = new Person('张三')
zhangsan.sayName() // 张三
```

而有了ES6的class可以这么做

```js
class Person {
  constructor(name) {
    // 构造器
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }
}

const zhangsan = new Person('张三')
zhangsan.sayName() // 张三
```

> 值得一提的是，class本质也是function，class是function的语法糖

```js
class Person {}

console.log(typeof Person) // function
```

::: tip 除了以上，还需要知道class的以下知识点
静态属性和静态方法，使用static定义的属性和方法只能class自己用，实例用不了
:::

```js
class Person {
  constructor(name) {
    this.name = name
  }

  static age = 22

  static fn() {
    console.log('哈哈')
  }
}
console.log(Person.age) // 22
Person.fn() // 哈哈

const sunshine_lin = new Person('张三')
console.log(sunshine_lin.age) // undefined
sunshine_lin.fn() // fn is not a function
```

> extend继承

```js
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Cat extends Animal {
  say() {
    console.log(this.name, this.age)
  }
}

const cat = new Cat('ketty', 5) // 继承了Animal的构造器
cat.say() // ketty 5
```


### 17-解构赋值

> 以前提取对象里的属性需要这么做

```js
const obj = {
  name: '张三',
  age: 22,
  gender: '男'
}

const name = obj.name
const age = obj.age
const gender = obj.gender
console.log(name, age, gender) // 张三 22 男
```

ES6新增了解构赋值的语法

> 对象解构
```js
const obj = {
  name: '张三',
  age: 22,
  gender: '男',
  doing: {
    morning: '摸鱼',
    afternoon: '摸鱼',
    evening: 'sleep'
  }
}

const { name, age, gender } = obj
console.log(name, age, gender) // 张三 22 男

// 解构重名
const { name: myname } = obj
console.log(myname) // 张三

// 嵌套解构
const { doing: { evening } } = obj
console.log(evening) // sleep
```

> 数组解构
```js
const arr = [1, 2, 3]

const [a, b, c] = arr
console.log(a, b, c) // 1 2 3

// 默认赋值
const [a, b, c, d = 5] = arr
console.log(a, b, c, d) // 1 2 3 5

// 乱序解构
const { 1: a, 0: b, 2: c } = arr
console.log(a, b, c) // 2 1 3
```


### 18-find 和 findIndex
- find：找到返回被找元素，找不到返回undefined
- findIndex：找到返回被找元素索引，找不到返回-1

```js
const findArr = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 18 }
]

const zhangsan = findArr.find(({ name }) => name === '张三')
const ageIndex = findArr.findIndex(({ age }) => age === 20)
console.log(zhangsan) // {name: "张三", age: 18}
console.log(ageIndex) // 1
```


### 19-for of 和 for in

- for in ：遍历方法，可遍历对象和数组

```js
const obj = { name: '张三', age: 22, gender: '男' }
for (let key in obj) {
  console.log(key)
}
// name
// age
// gender

const arr = [1, 2, 3, 4, 5]
for (let index in arr) {
  console.log(index)
}
// 0 1 2 3 4
```

- for of ：遍历方法，只能遍历数组，不能遍历对象


```js
const arr = [1, 2, 3, 4, 5]
for(let item of arr) {
  console.log(item)
}
// 1 2 3 4 5
```

### 20-Set 和 Map

::: tip Set

- 先说说Set的基本用法

```js
// 可不传数组
const set1 = new Set()
set1.add(1)
set1.add(2)
console.log(set1) // Set(2) { 1, 2 }

// 也可传数组
const set2 = new Set([1, 2, 3])
// 增加元素 使用 add
set2.add(4)
set2.add('张三')
console.log(set2) // Set(5) { 1, 2, 3, 4, '张三' }
// 是否含有某个元素 使用 has
console.log(set2.has(2)) // true
// 查看长度 使用 size
console.log(set2.size) // 5
// 删除元素 使用 delete
set2.delete(2)
console.log(set2) // Set(4) { 1, 3, 4, '张三' }
```

- 再说说Set的不重复性

```js
// 增加一个已有元素，则增加无效，会被自动去重
const set1 = new Set([1])
set1.add(1)
console.log(set1) // Set(1) { 1 }

// 传入的数组中有重复项，会自动去重
const set2 = new Set([1, 2, '张三', 3, 3, '张三'])
console.log(set2) // Set(4) { 1, 2, '张三', 3 }
```

- Set的不重复性中，要注意引用数据类型和NaN

```js
// 两个对象都是不用的指针，所以没法去重
const set1 = new Set([1, {name: '张三'}, 2, {name: '张三'}])
console.log(set1) // Set(4) { 1, { name: '张三' }, 2, { name: '张三' } }

// 如果是两个对象是同一指针，则能去重
const obj = {name: '张三'}
const set2 = new Set([1, obj, 2, obj])
console.log(set2) // Set(3) { 1, { name: '张三' }, 2 }

// 我们都知道 NaN !== NaN，NaN是自身不等于自身的，但是在Set中他还是会被去重
const set = new Set([1, NaN, 1, NaN])
console.log(set) // Set(2) { 1, NaN }
```

- 利用Set的不重复性，可以实现数组去重

```js
const arr = [1, 2, 3, 4, 4, 5, 5, 66, 9, 1]

// Set可利用扩展运算符转为数组哦
const quchongArr = [...new Set(arr)]
console.log(quchongArr) // [1,  2, 3, 4, 5, 66, 9]
```
:::

::: tip Map
- Map对比object最大的好处就是，key不受类型限制

```js
// 定义map
const map1 = new Map()
// 新增键值对 使用 set(key, value)
map1.set(true, 1)
map1.set(1, 2)
map1.set('哈哈', '嘻嘻嘻')
console.log(map1) // Map(3) { true => 1, 1 => 2, '哈哈' => '嘻嘻嘻' }

// 判断map是否含有某个key 使用 has(key)
console.log(map1.has('哈哈')) // true

// 获取map中某个key对应的value 使用 get(key)
console.log(map1.get(true)) // 1

// 删除map中某个键值对 使用 delete(key)
map1.delete('哈哈')
console.log(map1) // Map(2) { true => 1, 1 => 2 }

// 定义map，也可传入键值对数组集合
const map2 = new Map([[true, 1], [1, 2], ['哈哈', '嘻嘻嘻']])
console.log(map2) // Map(3) { true => 1, 1 => 2, '哈哈' => '嘻嘻嘻' }
```
:::

## ES7

### 21-Array.includes

- 传入元素，如果数组中能找到此元素，则返回true，否则返回false

```js
const includeArr = [1, 2 , 3, '张三', '李四']

const isLisi = includeArr.includes('李四')
console.log(isLisi) // true
```

- 跟indexOf很像，但还是有区别的
```js
const arr = [1, 2, NaN]

console.log(arr.indexOf(NaN)) // -1  indexOf找不到NaN
console.log(arr.includes(NaN)) // true includes能找到NaN
```


### 22-求幂运算符

- 以前求幂，我们需要这么写

```js
const num = Math.pow(3, 2)
console.log(num) // 9
```

- ES7提供了求幂运算符：**

```js
const num = 3 ** 2
console.log(num) // 9
```

## ES8

### 23-Object.values

- 可以用来获取对象的value的集合

```js
const obj = {
  name: '张三',
  age: 22,
  gender: '男'
}

const values = Object.values(obj)
console.log(values) // [ '张三', 22, '男' ]
```


### 24-Object.entries

- 可以用来获取对象的键值对集合[entries：条目]

```js
const obj = {
  name: '张三',
  age: 22,
  gender: '男'
}

const entries = Object.entries(obj)
console.log(entries)
// [ [ 'name', '张三' ], [ 'age', 22 ], [ 'gender', '男' ] ]
```


### 25-async/await

> 以同步方式执行异步操作

- 我们平时可能会遇到这种场景，接口一，请求到数据一，而数据一被当做请求二的参数去请求数据二，我们会用Promise这么做

```js
function fn() {
  // 模拟第一次请求
  return new Promise((resolve, reject) => {
    console.log('模拟第一次请求')
    setTimeout(() => {
      resolve(5)
    }, 1000)
  }).then(res => {
    // 模拟第二次请求
    new Promise((resolve, reject) => {
      console.log('模拟第二次请求')
      setTimeout(() => {
        // 拿第一次请求的数据去乘10，当做第二次请求的数据
        resolve(res * 10)
      }, 2000)
    }).then(sres => {
      console.log(sres)
    })

  })
}
fn() // 1 + 2 = 3 3秒后输出 50
```

- 这样的嵌套是不美观的，如果有很多个接口，那就会嵌套很多层，此时我们可以使用async/await来以同步方式执行异步，注意以下几点：
  - await只能在async函数里使用
  - await后面最好接Promise，如果后面接的是普通函数则会直接执行
  - async函数返回的是一个Promise

```js
function fn1 () {
  return new Promise((resolve, reject) => {
    console.log('模拟第一次请求')
    setTimeout(() => {
      resolve(5)
    }, 1000)
  })
}

function fn2 (data) {
  return new Promise((resolve, reject) => {
    console.log('模拟第二次请求')
    setTimeout(() => {
      resolve(data * 10)
    }, 2000)
  })
}

async function req () {
  console.log('模拟请求')
  // 同步方式执行异步，像排队一样
  const data1 = await fn1() // 等待1秒后返回数据再往下执行
  const data2 = await fn2(data1) // 拿data1去请求2秒后，往下走
  console.log(data2) // 总共3秒后 输出 50
}
req()
```

## ES9

### 26-for await of

- 我们来看以下场景哈

```js
function fn (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

fn(3000).then(res => console.log(res))
fn(1000).then(res => console.log(res))
fn(2000).then(res => console.log(res))

// 结果是
// 1000毫秒后我成功啦！！！
// 2000毫秒后我成功啦！！！
// 3000毫秒后我成功啦！！！

// 但是我想要这个结果

// 3000毫秒后我成功啦！！！
// 1000毫秒后我成功啦！！！
// 2000毫秒后我成功啦！！！
```

- 第一时间我们肯定想到的是async/await

```js
function fn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

async function asyncFn() {
  // 排队
  const data1 = await fn(3000)
  console.log(data1) // 3秒后 3000毫秒后我成功啦！！！
  const data2 = await fn(1000)
  console.log(data2) // 再过1秒 1000毫秒后我成功啦！！！
  const data3 = await fn(2000)
  console.log(data3) // 再过2秒 2000毫秒后我成功啦！！！
}
asyncFn()
```

- 但是上面代码也是有缺点的，如果有几十个，那不是得写几十个await，有没有一种方法可以通过循环来输出呢？

```js {11}
function fn (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

async function asyncFn () {
  const arr = [fn(3000), fn(1000), fn(1000), fn(2000), fn(500)]
  for await (let x of arr) {
    console.log(x)
  }
}

asyncFn()
// 3000毫秒后我成功啦！！！
// 1000毫秒后我成功啦！！！
// 1000毫秒后我成功啦！！！
// 2000毫秒后我成功啦！！！
// 500毫秒后我成功啦！！！
```


### 27-Promise.finally

- 新增的Promise方法，无论失败或者成功状态，都会执行这个函数

```js
new Promise((resolve, reject) => {
  resolve('成功喽')
}).then(
  res => { console.log(res) },
  err => { console.error(err) }
).finally(() => { console.log('我是finally') })

new Promise((resolve, reject) => {
  reject('失败喽')
}).then(
  res => { console.log(res) },
  err => { console.error(err) }
).finally(() => { console.log('我是finally') })
```

## ES10

### 28-Array.flat

- 有一个二维数组，我想让他变成一维数组：

```js
const arr = [1, 2, 3, [4, 5, 6]]
console.log(arr.flat()) // [ 1, 2, 3, 4, 5, 6 ]
```

- 还可以传参数，参数为降维的次数

```js
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
console.log(arr.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

- 如果传的是一个无限大的数字，那么就实现了多维数组(无论几维)降为一维数组

```js
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
console.log(arr.flat(Infinity)) // [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]
```

### 29-Array.flatMap

- 现在给你一个需求
```js
let arr = ["张三 詹姆斯 安东尼", "利拉德 罗斯 麦科勒姆"];
// 将上面数组转为
[ '张三', '詹姆斯', '安东尼', '利拉德', '罗斯', '麦科勒姆' ]

console.log(arr.map(x => x.split(" ")).flat());
// [ '张三', '詹姆斯', '安东尼', '利拉德', '罗斯', '麦科勒姆' ]
// flatMap就是flat + map，一个方法顶两个

console.log(arr.flatMap(x => x.split(" ")));
// [ '张三', '詹姆斯', '安东尼', '利拉德', '罗斯', '麦科勒姆' ]
```


### 30-BigInt

> BigInt是ES10新加的一种JavaScript数据类型，用来表示表示大于 2^53 - 1 的整数，2^53 - 1是ES10之前，JavaScript所能表示最大的数字

```js
const theBiggestInt = 9007199254740991n;
console.log(theBiggestInt)

const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge) // 9007199254740991n

const hugeString = BigInt("9007199254740991");
console.log(hugeString) // 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
console.log(hugeHex) // 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
console.log(hugeBin) // 9007199254740991n
```

- 哦对了，既然是JavaScript新的数据类型，那他的typeof是啥？

```js
const bigNum = BigInt(1728371927189372189739217)
console.log(typeof bigNum) // bigint
```

> 所以以后面试官问你JavaScript有多少种数据类型，别傻傻答6种了，要答8种，把ES6的Symbol和ES10的BigInt也加上去


### 31-Object.fromEntries

- 前面ES8的[Object.entries](#_24-object-entries)是把对象转成键值对数组，而Object.fromEntries则相反，是把键值对数组转为对象

```js
const arr = [
  ['name', '张三'],
  ['age', 22],
  ['gender', '男']
]

console.log(Object.fromEntries(arr)) // { name: '张三', age: 22, gender: '男' }
```

- 他还有一个用处，就是把Map转为对象

```js
const map = new Map()
map.set('name', '张三')
map.set('age', 22)
map.set('gender', '男')
console.log(map) // Map(3) { 'name' => '张三', 'age' => 22, 'gender' => '男' }

const obj = Object.fromEntries(map)
console.log(obj) // { name: '张三', age: 22, gender: '男' }
```


### 32-String.trimStart && String.trimEnd

- JavaScript有个trim方法，可以清除字符串首尾的空格

```js
const str = '    张三    '
console.log(str.trim()) // '张三'
```

- trimStart和trimEnd用来单独去除字符串的首和尾的空格

```js
const str = '    张三    '
// 去除首部空格
console.log(str.trimStart()) // '张三   '
// 去除尾部空格
console.log(str.trimEnd()) // '   张三'
```

## ES11

### 33-Promise.allSettled

:::tip ES11新增的Promise的方法
- 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
- 把每一个Promise的结果，集合成数组，返回
:::

```js
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.allSettled([fn(2000, true), fn(3000), fn(1000)]).then(res => {
  console.log(res)
  // 3秒后输出 
  // [
  //   { status: 'fulfilled', value: '2000毫秒后我成功啦！！！' },
  //   { status: 'rejected', reason: '3000毫秒后我失败啦！！！' },
  //   { status: 'rejected', reason: '1000毫秒后我失败啦！！！' }
  // ]
})
```


### 34-?. 和 ??

::: danger 提示
部分浏览器不支持，会报 `Unexpected token '.'`
:::

::: tip ?.  [中文名为可选链]
- 比如我们需要一个变量，是数组且有长度，才做某些操作

```js
const list = [1, 2, 3]
if (list && list.length) {
  console.log(list)
}

// 使用可选链
const list2 = [1, 2, 3]
if (list2?.length) {
  console.log(list2)
}
```

- 比如有一个对象，我要取一个可能不存在的值，甚至我们都不确定obj是否存在

```js
const obj1 = {
  cat: {
    name: '哈哈'
  }
}
console.log(obj1 && obj1.dog && obj1.dog.name) // undefined
console.log(obj1 && obj1.cat && obj1.cat.name) // '哈哈'

// 可选链
const obj2 = {
  cat: {
    name: '哈哈'
  }
}
console.log(obj2?.dog?.name)  // undefined
console.log(obj2?.cat?.name)  // '哈哈'
```

- 比如有一个数组，我不确定它存不存在，存在的话就取索引为1的值

```js
const arr1 = [1, 2, 3]
console.log(arr1 && arr1[1]) // 2
console.log(arr1 && arr1[3]) // undefined

// 可选链
const arr2 = [1, 2, 3]
console.log(arr2?.[1]) // 2
console.log(arr2?.[3]) // undefined
```

比如有一个函数，我们不确定它存不存在，存在的话就执行它

```js
const fn = null
const res = fn && fn()

// 可选链
const fn = null
const res = fn?.()
```
:::

::: tip ?? [空位合并运算符]

- 以下代码，咱们使用||运算符，只要左边是假值，就会返回右边的数据

```js
console.log(0 || '张三') // 张三
console.log('' || '张三') // 张三
console.log(false || '张三') // 张三
console.log(undefined || '张三') // 张三
console.log(null || '张三') // 张三
```

而??和||最大的区别是，在??这，只有undefined和null才算假值

```js
console.log(0 ?? '张三') // 0
console.log('' ?? '张三') // ''
console.log(false ?? '张三') // false
console.log(undefined ?? '张三') // 张三
console.log(null ?? '张三') // 张三
```
:::

## ES12

### 35-Promise.any

::: tip E12新增的Promise的方法
- 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
- 如果有一个Promise成功，则返回这个成功结果
- 如果所有Promise都失败，则报错
:::

```js
// 当有成功的时候，返回最快那个成功
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.any([fn(2000, true), fn(3000), fn(1000, true)]).then(res => {
  console.log(res) // 1秒后 输出  1000毫秒后我成功啦
}, err => {
  console.error(err)
})

// 当全都失败时
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.any([fn(2000), fn(3000), fn(1000)]).then(res => {
  console.log(res)
}, err => {
  console.error(err) // 3秒后 报错 All promises were rejected
})
```


### 36-数字分隔符

- 数字分隔符可以让你在定义长数字时，更加地一目了然

```js
const num1 = 1000000000
console.log(num1) // 1000000000

// 使用数字分隔符
const num2 = 1_000_000_000
console.log(num2) // 1000000000
```

### 37-属性表达式

- 我们经常碰到这样的问题，无论是在微信小程序还是React中，我们需要根据某个条件去修改某个数据

```js
if (type === 'boy') {
  this.setData({
    boyName: name
  })
} else if (type === 'girl') {
  this.setData({
    girlName: name
  })
}

// 可以写为：
this.setData({
  [`${type}Name`]: name
})
```