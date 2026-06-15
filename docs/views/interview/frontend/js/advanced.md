# JavaScript 进阶面试题

## Q1: 如何判断数组？

```js
Array.isArray([])            // ✅ 推荐
[] instanceof Array          // ✅ 可跨 iframe（直接比较原型）
[].constructor === Array     // ❌ constructor 可改
Object.prototype.toString.call([]) // '[object Array]' ✅ 通用
typeof []                    // 'object' ❌
```

**各方法深入分析**：

```js
// 1. Array.isArray — 最推荐（ES5+）
// 内部通过 [[Class]] 检查，不受原型修改影响
Array.isArray([])    // true
Array.isArray({})    // false
Array.isArray('[]')  // false

// 2. instanceof — 跨 iframe 时会失效？不一定
// 不同 iframe 的 Array 构造函数不同
const iframe = document.createElement('iframe')
document.body.appendChild(iframe)
const iframeArray = iframe.contentWindow.Array
const arr = new iframeArray(1, 2, 3)
console.log(arr instanceof Array)      // false（不同全局环境）
console.log(Array.isArray(arr))        // true（正确检测）
// 但如果直接比较原型而非构造函数：
console.log(Object.getPrototypeOf(arr) === Array.prototype) // false（跨 iframe）
// 注意：instanceof 检查原型链，跨 iframe 时 Array.prototype 不同

// 3. constructor — 可以修改，不可靠
const fakeArray = { __proto__: Array.prototype }
console.log(fakeArray.constructor === Array) // true（但 fakeArray 不是数组）

// 4. Object.prototype.toString — 最通用
function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
// 但可以重写 Symbol.toStringTag
const fake = { [Symbol.toStringTag]: 'Array' }
console.log(Object.prototype.toString.call(fake)) // '[object Array]' ❌
console.log(Array.isArray(fake)) // false ✅
```

**边缘情况**：
```js
// arguments 不是数组
function test() {
  console.log(Array.isArray(arguments)) // false
  console.log(Array.isArray([...arguments])) // true
}

// NodeList 不是数组
console.log(Array.isArray(document.querySelectorAll('div'))) // false

// TypedArray 不是普通数组
console.log(Array.isArray(new Uint8Array(5))) // false

// 子类
class MyArray extends Array {}
const myArr = new MyArray(1, 2, 3)
console.log(Array.isArray(myArr)) // true（子类实例也是数组）
```

| 方法 | 可靠性 | 跨 iframe | 可覆盖 |
|------|--------|-----------|--------|
| Array.isArray | 最高 | 可靠 | 不可覆盖 |
| instanceof | 中等 | 不可靠 | 可改原型 |
| constructor | 低 | 不可靠 | 直接可改 |
| toString | 中等 | 可靠 | 可改 Symbol.toStringTag |
| typeof | 不可用 | N/A | N/A |

**面试追问**：
- Array.isArray 和 instanceof 在跨 iframe 场景下的区别？Array.isArray 不依赖当前全局的 Array 构造函数，跨 iframe 也正确。
- 为什么 typeof [] 是 'object'？数组是对象的一种，typeof 的设计只区分基本类型和 object。
- 如何判断一个对象是类数组？检查 length 属性类型和范围。

## Q2: 数组去重的方式

```js
// 1. Set（推荐）
[...new Set(arr)]

// 2. filter
arr.filter((item, index) => arr.indexOf(item) === index)

// 3. Map（对象类型去重）
const seen = new Map()
arr.filter(item => !seen.has(item.id) && seen.set(item.id, true))
```

**各方案详情**：

```js
// 1. Set — 最简洁，适用于基本类型
const arr = [1, 2, 2, 3, 3, 4, NaN, NaN]
const unique1 = [...new Set(arr)]
console.log(unique1) // [1, 2, 3, 4, NaN]
// Set 中 NaN 视为相等（Same-value-zero）

// 2. filter + indexOf — 只保留第一次出现
const unique2 = arr.filter((item, index) => arr.indexOf(item) === index)

// 3. filter + findIndex — 适用于对象数组（自定义比较）
const objects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
]
const unique3 = objects.filter(
  (item, index, self) => index === self.findIndex(t => t.id === item.id)
)
```

**去重进阶**：

```js
// 4. Map — 对象去重（指定 key）
function uniqueBy(arr, key) {
  const seen = new Map()
  return arr.filter(item => {
    const k = typeof key === 'function' ? key(item) : item[key]
    return !seen.has(k) && seen.set(k, true)
  })
}
const items = [
  { id: 1, type: 'a' },
  { id: 2, type: 'b' },
  { id: 3, type: 'a' },
]
uniqueBy(items, 'type') // [{ id: 1 }, { id: 2 }]

// 5. reduce — 通用的去重
const unique4 = arr.reduce((acc, item) => {
  return acc.includes(item) ? acc : [...acc, item]
}, [])

// 6. 对象属性标记（基本类型）
function uniqueBasic(arr) {
  const hash = {}
  return arr.filter(item => {
    if (hash[item]) return false
    hash[item] = true
    return true
  })
}
```

**边缘情况**：

```js
// 空值
const withNull = [null, null, undefined, undefined, 1]
console.log([...new Set(withNull)]) // [null, undefined, 1]

// 对象引用 — Set 按引用去重，不按内容
const objs = [{ a: 1 }, { a: 1 }, { a: 2 }]
console.log(new Set(objs).size) // 3（所有引用不同）

// NaN 去重
const withNaN = [NaN, NaN, 1]
console.log([...new Set(withNaN)]) // [NaN, 1]（Set 中 NaN === NaN）

// 混合类型
const mixed = [1, '1', 1, '1']
console.log([...new Set(mixed)]) // [1, '1']（类型不同视为不同）
```

| 方法 | 适用场景 | 复杂度 | 是否保留顺序 |
|------|---------|--------|------------|
| Set | 基本类型 | O(n) | 是 |
| filter + indexOf | 基本类型 | O(n^2) | 是 |
| filter + findIndex | 对象数组（自定义比较） | O(n^2) | 是 |
| Map | 对象数组（指定 key） | O(n) | 是 |
| reduce | 任意（简单） | O(n^2) | 是 |

**面试追问**：
- Set 去重的原理？Set 内部使用 Same-value-zero 比较，类似 Object.is 但 NaN 视为相等。
- 大数据量去重推荐什么方式？Set 或 Map，O(n) 复杂度，不适合 filter + indexOf（O(n^2)）。
- 如何对深度嵌套的对象去重？转化为 JSON 字符串作为 key（JSON.stringify），但要注意 key 顺序不同的问题。

## Q3: 类型判断的方式

```js
typeof x                       // 基本类型
x instanceof ClassName         // 实例判断
Object.prototype.toString.call(x) // '[object Type]' 最准确
Array.isArray(x)               // 数组判断
Number.isNaN(x)                // NaN 判断（⚠ 全局 isNaN 会做类型转换）
```

```js
function getType(x) {
  return Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
}
getType([])     // 'array'
getType(null)   // 'null'
getType(new Date()) // 'date'
```

**各方法深入分析**：

```js
// typeof 的局限
typeof null          // 'object'（设计 bug）
typeof []            // 'object'（无法区分数组和对象）
typeof new Date()    // 'object'
typeof /regex/       // 'object'

// instanceof 的局限
[] instanceof Array  // true
[] instanceof Object // true（原型链跨级）
// 基本类型不行
'string' instanceof String // false
true instanceof Boolean    // false

// constructor 属性（可被修改）
const arr = []
arr.constructor = Object
console.log(arr.constructor === Array) // false

// Object.prototype.toString — 最通用
Object.prototype.toString.call(1)          // '[object Number]'
Object.prototype.toString.call('hello')    // '[object String]'
Object.prototype.toString.call(true)       // '[object Boolean]'
Object.prototype.toString.call(null)       // '[object Null]'
Object.prototype.toString.call(undefined)  // '[object Undefined]'
Object.prototype.toString.call(Symbol())   // '[object Symbol]'
Object.prototype.toString.call(1n)         // '[object BigInt]'
```

**完整类型判断函数**：

```js
function strictTypeOf(value) {
  const type = typeof value
  // typeof 能处理的
  if (type !== 'object') return type
  // null 的特殊处理
  if (value === null) return 'null'
  // 对象类型
  const tag = Object.prototype.toString.call(value).slice(8, -1)
  if (tag === 'Object') return 'object'
  return tag.toLowerCase()
}

strictTypeOf([])           // 'array'
strictTypeOf(new Map())    // 'map'
strictTypeOf(new Set())    // 'set'
strictTypeOf(new Date())   // 'date'
strictTypeOf(/a/)          // 'regexp'
strictTypeOf(Promise.resolve()) // 'promise'
```

**NaN 判断**：
```js
// 全局 isNaN — 会做类型转换（不推荐）
isNaN('hello')   // true（'hello' 转 number 是 NaN）
isNaN(undefined) // true

// Number.isNaN — 不转换（推荐）
Number.isNaN('hello')  // false（先判断类型，不是 number 直接 false）
Number.isNaN(undefined) // false

// Object.is
Object.is(NaN, NaN) // true

// 自己实现
function myIsNaN(x) {
  return typeof x === 'number' && x !== x
}
// NaN 是唯一不等于自身的值
```

**面试追问**：
- typeof null 为什么是 object？JS 最初用类型标记低位 000 表示对象，null 是空指针（全 0），被误判。
- Object.prototype.toString 为什么可靠？返回内部 [[Class]] 属性，但 Symbol.toStringTag 可以改写它。
- 如何判断一个变量是否是 Promise？`obj && typeof obj.then === 'function'`（thenable 判断）。

## Q4: 什么是 currying（柯里化）？

柯里化是把一个多参数函数转换为一系列单参数函数的过程。每次调用返回一个新函数，直到所有参数收集完毕才执行原函数。

```js
// 基本柯里化：把多参数函数转为单参数函数链
function add(a) {
  return function(b) {
    return a + b
  }
}
add(1)(2) // 3

// 通用柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}

const curriedAdd = curry((a, b, c) => a + b + c)
curriedAdd(1)(2)(3) // 6
curriedAdd(1, 2)(3) // 6
```

**高级柯里化实现**：

```js
// 占位符支持
function curryWithPlaceholder(fn) {
  const _ = curryWithPlaceholder.placeholder

  return function curried(...args) {
    const hasPlaceholder = args.includes(_)

    if (!hasPlaceholder && args.length >= fn.length) {
      return fn.apply(this, args)
    }

    return function(...args2) {
      // 替换占位符
      const merged = args.map(arg =>
        arg === _ && args2.length ? args2.shift() : arg
      ).concat(args2)
      return curried.apply(this, merged)
    }
  }
}
curryWithPlaceholder.placeholder = Symbol('placeholder')

const curriedJoin = curryWithPlaceholder((a, b, c) => `${a}_${b}_${c}`)
const _ = curryWithPlaceholder.placeholder
curriedJoin(_, _, 'C')(_, 'B')('A') // 'A_B_C'
```

**柯里化实际应用**：

```js
// 1. 日志系统
function log(level) {
  return (message) => console.log(`[${level.toUpperCase()}] ${message}`)
}
const info = log('info')
const error = log('error')
info('User logged in')   // [INFO] User logged in
error('Something broke') // [ERROR] Something broke

// 2. URL 构建
const makeURL = (base) => (path) => (params) => {
  const query = Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')
  return `${base}${path}?${query}`
}
const api = makeURL('https://api.example.com')
const users = api('/users')
users({ page: 1, limit: 10 }) // 'https://api.example.com/users?page=1&limit=10'

// 3. 表单验证
function validate(rules) {
  return (value) => rules.every(rule => rule(value))
}
const isEmail = validate([
  v => v.includes('@'),
  v => v.includes('.'),
])
console.log(isEmail('test@example.com')) // true

// 4. 中间件组合
function pipe(...fns) {
  return (initial) => fns.reduce((acc, fn) => fn(acc), initial)
}
```

**偏函数应用（Partial Application）**：

```js
// 柯里化 vs 偏函数
// 柯里化：add(1)(2)(3) — 每次一个参数
// 偏函数：partial(add, 1)(2, 3) — 一次预填部分参数

function partial(fn, ...preset) {
  return function(...later) {
    return fn.apply(this, preset.concat(later))
  }
}

const multiply = (a, b, c) => a * b * c
const double = partial(multiply, 2)
double(3, 4) // 24（2 * 3 * 4）
```

| 概念 | 输入 | 输出 | 应用场景 |
|------|------|------|---------|
| 柯里化 | 多参数函数 | 一元函数链 | 函数式编程、参数预填 |
| 偏函数 | 多参数函数 + 部分参数 | 少参数函数 | React setState、配置函数 |
| 完整应用 | 柯里化函数 | 完全执行 | 延迟计算 |

**面试追问**：
- 柯里化和偏函数的区别？柯里化严格固定一次一个参数；偏函数可以一次传多个预填参数，没有固定的参数个数。
- 柯里化的优缺点？优点是参数复用、延迟计算、函数组合；缺点是创建闭包消耗内存、多层调用不直观。
- curry 函数的 length 有什么作用？fn.length 是函数的形参个数，用于判断参数是否收齐。

## Q5: 什么是 Proxy？和 defineProperty 的区别？

Proxy 用于创建对象的代理，可以拦截并自定义对象的基本操作（如属性查找、赋值、枚举、函数调用等）。提供了 13 种拦截器。

```js
const proxy = new Proxy(target, {
  get(target, key, receiver) {
    console.log(`Getting ${String(key)}`)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(`Setting ${String(key)} = ${value}`)
    return Reflect.set(target, key, value, receiver)
  },
})
```

**13 种拦截操作**：

```js
const handler = {
  // 属性读取
  get(target, key, receiver) {},
  // 属性设置
  set(target, key, value, receiver) {},
  // in 操作符
  has(target, key) {},
  // delete 操作符
  deleteProperty(target, key) {},
  // for...in / Object.keys
  ownKeys(target) {},
  // 获取属性描述符
  getOwnPropertyDescriptor(target, key) {},
  // 定义属性
  defineProperty(target, key, descriptor) {},
  // 阻止扩展
  preventExtensions(target) {},
  // 判断是否可扩展
  isExtensible(target) {},
  // 设置原型
  setPrototypeOf(target, proto) {},
  // 获取原型
  getPrototypeOf(target) {},
  // 函数调用
  apply(target, thisArg, args) {},
  // new 操作
  construct(target, args) {},
}
```

**实用示例**：

```js
// 1. 负数索引数组
const negativeArray = (arr) => new Proxy(arr, {
  get(target, key) {
    const index = Number(key)
    if (Number.isInteger(index) && index < 0) {
      return target[target.length + index]
    }
    return target[key]
  }
})
const arr = negativeArray([10, 20, 30, 40])
console.log(arr[-1]) // 40
console.log(arr[-2]) // 30

// 2. 验证
const validatedUser = new Proxy({}, {
  set(target, key, value) {
    if (key === 'age' && (typeof value !== 'number' || value < 0)) {
      throw new Error('Invalid age')
    }
    target[key] = value
    return true
  }
})
validatedUser.age = 25  // ✅
validatedUser.age = -5  // ❌ Error

// 3. 默认值/虚拟属性
const defaults = (target, defaultValues) => new Proxy(target, {
  get(target, key) {
    return key in target ? target[key] : defaultValues[key]
  }
})
const user = defaults({}, { name: 'Guest', role: 'viewer' })
console.log(user.name) // 'Guest'
console.log(user.role) // 'viewer'

// 4. 缓存/惰性计算
const lazy = new Proxy({}, {
  get(target, key) {
    if (!(key in target)) {
      target[key] = expensiveComputation(key)
    }
    return target[key]
  }
})
```

```js
// 5. 函数调用拦截
const measure = (fn) => new Proxy(fn, {
  apply(target, thisArg, args) {
    const start = performance.now()
    const result = Reflect.apply(target, thisArg, args)
    console.log(`${target.name} took ${performance.now() - start}ms`)
    return result
  }
})
const measured = measure((x, y) => {
  // heavy computation
  return x + y
})
measured(1, 2) // logs timing
```

**和 defineProperty 的比较**：

```js
// defineProperty — 逐个属性拦截
const obj = {}
Object.defineProperty(obj, 'name', {
  get() { return 'Alice' },
  set(v) { console.log('set name:', v) },
})

// Proxy — 整个对象拦截
const proxy = new Proxy(obj, {
  get(target, key) { return target[key] ?? 'default' },
  set(target, key, value) {
    console.log(`set ${String(key)}`)
    target[key] = value
    return true
  }
})

// Proxy 能拦截 defineProperty 不能的操作
delete proxy.name // 触发 deleteProperty
'name' in proxy   // 触发 has
Object.keys(proxy) // 触发 ownKeys
```

| | Object.defineProperty | Proxy |
|--|----------------------|-------|
| 作用范围 | 单个属性 | 整个对象 |
| 新增/删除属性 | 检测不到 | ✅ |
| 数组索引修改 | 检测不到 | ✅ |
| 拦截操作 | get/set | 13 种操作 |
| 性能 | 好（单个属性） | 好（整对象） |
| Polyfill | 可以（Vue2） | 不可 polyfill |

**代理陷阱和注意事项**：
```js
// 1. receiver 参数用于解决继承时的 this 问题
const parent = { x: 1 }
const child = Object.create(new Proxy(parent, {
  get(target, key, receiver) {
    console.log(`Get ${String(key)} from ${receiver === child ? 'child' : 'parent'}`)
    return target[key]
  }
}))
child.x // 通过 child 访问，但代理在 parent 上

// 2. 代理的性能开销
const proxyTest = new Proxy({}, {
  get(t, k) { return t[k] }
})
// 每次属性访问都比直接对象多一层函数调用

// 3. 代理对象的 this 指向问题
const wrapped = new Proxy({
  getThis() { return this }
}, {})
wrapped.getThis() // 返回 proxy，不是原始 target（某些情况下要小心）
```

**面试追问**：
- Vue3 为什么用 Proxy 替代 defineProperty？Proxy 可以拦截数组索引变化和新增/删除属性，不需要特殊的数组 hack。
- Proxy 能 polyfill 吗？不能，Proxy 是对对象底层操作的拦截，没有 ES5 等价物。
- Reflect 和 Proxy 的关系？Reflect 是 Proxy 拦截器的默认行为，两者通常一起使用保证正确性。

## Q6: 什么是 WeakMap 和 WeakSet？

- **WeakMap**：key 必须是对象，**弱引用**（不阻止垃圾回收）
- **WeakSet**：值必须是对象，弱引用
- 没有 `size`、没有 `keys()`、没有 `clear()`、不可遍历

```js
// 用途：DOM 节点关联数据
const wm = new WeakMap()
const el = document.getElementById('btn')
wm.set(el, { count: 0 })
// el 被移除时，关联数据自动 GC（不用手动清理）
```

**深入理解弱引用**：

```js
// 强引用 vs 弱引用
let obj = { data: 'important' }
const map = new Map()
map.set(obj, 'metadata')
obj = null // obj 不会被 GC！因为 Map 仍然持有对 {data: 'important'} 的强引用

// WeakMap — 弱引用 key
let weakObj = { data: 'temp' }
const wm = new WeakMap()
wm.set(weakObj, 'metadata')
weakObj = null // 下次 GC 时，{data: 'temp'} 和它的元数据都被回收
```

**实际应用场景**：

```js
// 1. DOM 节点关联数据
const domData = new WeakMap()
function setData(el, data) {
  domData.set(el, data)
}
function getData(el) {
  return domData.get(el)
}

// 2. 私有属性模拟（ES6 class）
const privateData = new WeakMap()
class Person {
  constructor(name) {
    privateData.set(this, { name })
  }
  getName() {
    return privateData.get(this).name
  }
}

// 3. 缓存计算结果
const cache = new WeakMap()
function process(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, expensiveComputation(obj))
  }
  return cache.get(obj)
}
// 对象被回收后缓存自动清理

// 4. 防止内存泄漏的监听器
const listeners = new WeakMap()
function addListener(obj, event, handler) {
  if (!listeners.has(obj)) listeners.set(obj, new Map())
  listeners.get(obj).set(event, handler)
  obj.addEventListener(event, handler)
}
function removeAllListeners(obj) {
  const objListeners = listeners.get(obj)
  if (objListeners) {
    objListeners.forEach((handler, event) => {
      obj.removeEventListener(event, handler)
    })
    listeners.delete(obj)
  }
}
```

**WeakSet 的应用**：

```js
// 标记/防止重复处理
const processed = new WeakSet()
function processObject(obj) {
  if (processed.has(obj)) return // 已经处理过
  processed.add(obj)
  // 处理逻辑...
}

// 类实例标记
const initialized = new WeakSet()
class Widget {
  initialize() {
    if (initialized.has(this)) return
    initialized.add(this)
    this._init()
  }
}
```

| 特性 | Map | WeakMap |
|------|-----|---------|
| key 类型 | 任意 | 只能对象 |
| 引用方式 | 强引用 | 弱引用 |
| 可遍历 | ✅ | ❌ |
| 有 size | ✅ | ❌ |
| 有 clear | ✅ | ❌ |
| GC 影响 | 阻止 key 被回收 | 不阻止 |
| 内存泄漏风险 | 高（忘删） | 低（自动） |

**面试追问**：
- WeakMap 为什么不能遍历？遍历需要知道所有 keys，但 keys 可能随时因 GC 而消失，导致迭代器不一致。
- Map 和 WeakMap 的内存表现？WeakMap key 为 null 后值自动回收，Map 会常驻内存直到删除。
- WeakSet 能添加原始值吗？不能，WeakSet 的值必须是对象，原始值不能添加。

## Q7: 什么是 generator？

Generator 函数可以暂停执行并在之后恢复，通过 `function*` 定义，每次调用 `next()` 返回 `{ value, done }`。

```js
function* gen() {
  yield 1
  yield 2
  return 3
}

const g = gen()
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.next() // { value: 3, done: true }

// 用 for...of 遍历（忽略 return）
for (const val of gen()) { console.log(val) } // 1, 2
```

**Generator 是双向通道**：

```js
function* interactive() {
  const a = yield '输入 a'
  console.log('收到 a:', a)
  const b = yield '输入 b'
  console.log('收到 b:', b)
  return Number(a) + Number(b)
}

const g = interactive()
g.next()          // { value: '输入 a', done: false }
g.next(10)        // { value: '输入 b', done: false } — 向内部传值
g.next(20)        // { value: 30, done: true }

// 错误注入
function* safe() {
  try {
    yield 'try this'
  } catch (err) {
    console.log('Generator caught:', err.message)
  }
}
const g2 = safe()
g2.next()
g2.throw(new Error('injected error')) // Generator caught: injected error
```

**实际应用**：

```js
// 1. 无限序列（不用创建无限数组）
function* fibonacci() {
  let a = 0, b = 1
  while (true) {
    yield a
    [a, b] = [b, a + b]
  }
}
const fib = fibonacci()
fib.next().value // 0
fib.next().value // 1
fib.next().value // 1
fib.next().value // 2
// 取前 10 个
const first10 = [...Array.from({ length: 10 }, () => fib.next().value)]

// 2. 状态机
function* trafficLight() {
  while (true) {
    yield 'green'
    yield 'yellow'
    yield 'red'
  }
}
const light = trafficLight()
light.next().value // 'green'
light.next().value // 'yellow'

// 3. 控制异步流程（co 库的底层原理）
function* asyncFlow() {
  const user = yield fetch('/user')    // yield Promise
  const posts = yield fetch(`/posts/${user.id}`)
  return { user, posts }
}

// 4. 自定义迭代器
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i
  }
}
console.log([...range(1, 5)]) // [1, 2, 3, 4]
```

**yield* 委托**：

```js
function* inner() {
  yield 'a'
  yield 'b'
}
function* outer() {
  yield 'start'
  yield* inner() // 委托给 inner
  yield 'end'
}
console.log([...outer()]) // ['start', 'a', 'b', 'end']

// 递归遍历树
function* traverse(tree) {
  yield tree.value
  if (tree.children) {
    for (const child of tree.children) {
      yield* traverse(child)
    }
  }
}
const tree = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 4 }] },
    { value: 3 },
  ]
}
console.log([...traverse(tree)]) // [1, 2, 4, 3]
```

**面试追问**：
- next() 传入的参数给谁？传给上一个 yield 表达式的返回值（第一个 next 不能传参）。
- generator 和 async/await 的关系？async/await 本质上是 Generator + Promise 的语法糖。
- 为什么 for...of 忽略 return 的 value？for...of 只迭代 done: false 的值，return 表示迭代结束。

## Q8: 什么是 async generator？

Async Generator 是 Generator 和异步函数的结合，可以 yield 异步值，用 `for await...of` 消费。

```js
async function* fetchPages(urls) {
  for (const url of urls) {
    const response = await fetch(url)
    yield response.json()
  }
}

for await (const page of fetchPages(urls)) {
  console.log(page)
}
```

**更多示例**：

```js
// 1. 分页数据加载
async function* paginatedFetch(baseUrl, pageSize = 10) {
  let page = 1
  let hasMore = true

  while (hasMore) {
    const url = `${baseUrl}?page=${page}&limit=${pageSize}`
    const response = await fetch(url)
    const data = await response.json()
    yield data.items
    hasMore = data.hasMore
    page++
  }
}

// 消费
(async () => {
  for await (const items of paginatedFetch('/api/users')) {
    renderItems(items)
    if (shouldStop()) break // 可提前中断
  }
})()

// 2. 流式数据处理（大文件逐行读取）
async function* readLines(filePath) {
  const stream = fs.createReadStream(filePath, { encoding: 'utf8' })
  let remaining = ''

  for await (const chunk of stream) {
    remaining += chunk
    const lines = remaining.split('\n')
    remaining = lines.pop() // 最后一个可能不完整
    for (const line of lines) {
      yield line
    }
  }
  if (remaining) yield remaining
}

// 3. 定时生成
async function* interval(delay) {
  let count = 0
  while (true) {
    await new Promise(r => setTimeout(r, delay))
    yield count++
  }
}

// 4. 事件流转换
async function* fromEvent(element, eventName) {
  const queue = []
  let resolve = null

  element.addEventListener(eventName, e => {
    if (resolve) {
      resolve(e)
      resolve = null
    } else {
      queue.push(e)
    }
  })

  while (true) {
    if (queue.length) {
      yield queue.shift()
    } else {
      yield new Promise(r => { resolve = r })
    }
  }
}
```

**Async Generator 和普通 Generator 的区别**：

```js
// 普通 Generator — yield 同步值
function* syncGen() {
  yield 1
  yield 2
}

// Async Generator — yield Promise（自动 await）
async function* asyncGen() {
  yield await fetch('/api/1').then(r => r.json())
  yield await fetch('/api/2').then(r => r.json())
}

// 消费方式不同
for (const v of syncGen()) // 同步
for await (const v of asyncGen()) // 异步
```

| 特性 | Generator | Async Generator |
|------|-----------|----------------|
| 定义 | function* | async function* |
| yield 值 | 任意 | 任意（支持 await） |
| 消费 | for...of | for await...of |
| 返回值 | Generator | AsyncGenerator |
| next() 返回 | 同步的 { value, done } | Promise<{ value, done }> |

**面试追问**：
- for await...of 遇到 rejected Promise 会怎样？循环抛出错误，可以用 try/catch 包裹。
- async generator 能用在 Array.from 中吗？不能，Array.from 只接受同步可迭代对象，需要用 for await...of。
- 如何提前终止 async generator？使用 break 或在 generator 内 return。

## Q9: 什么是 Iterator（迭代器）？

迭代器是提供 `next()` 方法的对象，返回 `{ value, done }`。可迭代对象实现了 `Symbol.iterator` 方法。

```js
// 可迭代协议：Symbol.iterator
const iterable = {
  data: ['a', 'b', 'c'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => ({
        value: this.data[index++],
        done: index > this.data.length,
      })
    }
  }
}

for (const item of iterable) { console.log(item) }
```

**内置可迭代对象**：Array、Map、Set、String、TypedArray、arguments、NodeList。

```js
// 字符串可迭代（支持 Unicode）
for (const char of 'hello') console.log(char) // h, e, l, l, o
for (const char of '你好') console.log(char)  // 你, 好

// Map 的迭代
const map = new Map([['a', 1], ['b', 2]])
for (const [key, value] of map) console.log(key, value)
for (const key of map.keys()) console.log(key)
for (const value of map.values()) console.log(value)

// Set 的迭代
const set = new Set([1, 2, 3])
for (const value of set) console.log(value)
console.log([...set]) // [1, 2, 3]

// arguments
function () {
  console.log([...arguments]) // [1, 2, 3]
}(1, 2, 3)
```

**自定义迭代器**：

```js
// 1. 范围迭代器
class Range {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
  [Symbol.iterator]() {
    let current = this.start
    return {
      next: () => ({
        value: current,
        done: current++ > this.end,
      })
    }
  }
}
console.log([...new Range(1, 5)]) // [1, 2, 3, 4, 5]

// 2. 双向迭代器
class BidirectionalList {
  constructor(items) {
    this.items = items
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => ({
        value: this.items[index++],
        done: index > this.items.length,
      }),
      // 反向迭代
      prev: () => ({
        value: this.items[--index],
        done: index < 0,
      })
    }
  }
}

// 3. 惰性计算迭代器
class LazySequence {
  constructor(...fns) {
    this.fns = fns
  }
  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => {
        if (i >= this.fns.length) return { done: true }
        const result = this.fns[i++]()
        return { value: result, done: false }
      }
    }
  }
}
```

**迭代器设计模式**：

```js
// 迭代器简化遍历
function each(iterable, fn) {
  const iterator = iterable[Symbol.iterator]()
  let result = iterator.next()
  while (!result.done) {
    fn(result.value)
    result = iterator.next()
  }
}

// 迭代器适配器
function take(iterable, count) {
  const iterator = iterable[Symbol.iterator]()
  return {
    [Symbol.iterator]() { return this },
    next() {
      if (count-- > 0) return iterator.next()
      return { done: true }
    }
  }
}
console.log([...take([1, 2, 3, 4, 5], 3)]) // [1, 2, 3]
```

**面试追问**：
- for...of 和 for...in 的区别？for...of 遍历迭代器返回的值，for...in 遍历对象的可枚举属性名（包括原型链）。
- 普通对象为什么不能用 for...of？对象默认没有实现 Symbol.iterator，可以用 `Object.keys()` 或 `Object.entries()`。
- 如何判断一个对象是可迭代的？检查 `obj[Symbol.iterator]` 是否为函数。

## Q10: 什么是模块化？

模块化是将代码拆分为独立文件，每个文件有自己作用域，通过导入导出共享功能。

```js
// ES Module（推荐，ES6 标准）
// math.js
export const add = (a, b) => a + b
export default class Calculator {}

// app.js
import Calculator, { add } from './math.js'

// 浏览器原生支持：
<script type="module" src="app.js"></script>
```

**命名导出 vs 默认导出**：

```js
// 1. 命名导出（export）
// utils.js
export const pi = 3.14159
export function circleArea(r) { return pi * r * r }
export class Shape {}
// 或者统一导出
const square = (x) => x * x
export { square }

// 导入时用解构
import { pi, circleArea, Shape, square } from './utils.js'
// 重命名
import { circleArea as area } from './utils.js'
// 整体导入
import * as utils from './utils.js'

// 2. 默认导出（export default）
// Calc.js
export default class Calc {
  add(a, b) { return a + b }
}
// 导入时可以任意命名
import Calculator from './Calc.js'
import MyCalc from './Calc.js' // 同样有效

// 3. 混合使用
// advanced.js
export default class MainClass {}
export function helper() {}
// 导入
import MainClass, { helper } from './advanced.js'
```

**import 的特性**：

```js
// 动态导入（代码分割）
const module = await import('./dynamic.js')
module.someFunction()

// 重导出
export { default } from './Component.js'
export * from './utils.js'
export { specific } from './lib.js'

// 引入类型（TypeScript）
import type { User } from './types'
import { type User } from './types' // inline type import
```

**CommonJS（Node.js）**：

```js
// module.exports — 导出
// math.cjs
module.exports = {
  add: (a, b) => a + b,
  PI: 3.14159,
}
// 或 exports.add = (a, b) => a + b

// require — 导入
const math = require('./math.cjs')
console.log(math.add(1, 2))
```

| | CommonJS (Node) | ES Module |
|--|----------------|-----------|
| 语法 | require / module.exports | import / export |
| 加载 | 同步 | 异步 |
| 值 | 拷贝 | 引用（live binding） |
| 静态分析 | 否 | 是（tree-shaking） |
| 浏览器 | 不支持 | 支持 |
| 循环依赖 | 可能返回空对象 | 引用未初始化的绑定（报错） |

**模块化历史**：

```js
// AMD（RequireJS）— 浏览器端早前方案
define(['dep1', 'dep2'], function(dep1, dep2) {
  return { /* module */ }
})

// UMD — 兼容多种规范
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['dep'], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('dep'))
  } else {
    root.MyModule = factory(root.dep)
  }
})(this, function(dep) {
  return { /* module */ }
})

// IIFE — 早期模块模式
const MyModule = (function() {
  const _private = 'secret'
  function publicMethod() { return _private }
  return { publicMethod }
})()
```

**面试追问**：
- ES Module 和 CommonJS 的主要区别？ESM 是静态的（编译时解析）、支持 tree-shaking、异步加载；CJS 动态运行时、同步、拷贝导出值。
- import 为什么不能写在条件语句中？ESM 是静态的，必须在顶层，动态导入用 import()。
- 循环依赖怎么处理？ESM 中的循环依赖，import 是"实时绑定"只读引用，CJS 可能在循环中拿到未完成导出的空对象。

## Q11: 什么是 Web Worker？

Web Worker 允许在后台线程运行脚本，不阻塞主线程。计算在独立线程进行，通过消息传递通信。

```js
// worker.js
self.onmessage = function(e) {
  const result = heavyComputation(e.data)
  self.postMessage(result)
}

// main.js
const worker = new Worker('worker.js')
worker.postMessage(data)
worker.onmessage = function(e) { console.log(e.data) }
worker.terminate()
```

**用途**：大量计算、图像处理、数据处理——不阻塞主线程。不能访问 DOM。

**详细示例**：

```js
// main.js
const worker = new Worker('heavy-task.js')

// 发送数据
worker.postMessage({ type: 'process', data: largeArray })

// 接收结果
worker.onmessage = (e) => {
  console.log('Result:', e.data)
}

// 错误处理
worker.onerror = (e) => {
  console.error('Worker error:', e.message)
  worker.terminate()
}

// 超时处理
const timeout = setTimeout(() => {
  console.warn('Worker timeout, terminating')
  worker.terminate()
}, 5000)

// 通信完成后清除
const cleanup = () => {
  clearTimeout(timeout)
  worker.terminate()
}
```

```js
// heavy-task.js
// 没有 window/document，没有 DOM API
// 有：navigator, location, setTimeout, fetch, XMLHttpRequest, IndexedDB

self.onmessage = async (e) => {
  const { type, data } = e.data

  switch (type) {
    case 'process':
      const result = data.map(item => expensiveTransform(item))
      self.postMessage({ type: 'result', data: result })
      break

    case 'calculate':
      // 密集型计算
      let sum = 0
      for (let i = 0; i < data; i++) sum += Math.sqrt(i)
      self.postMessage({ type: 'done', data: sum })
      break

    case 'fetch':
      try {
        const response = await fetch(data.url)
        const json = await response.json()
        self.postMessage({ type: 'fetched', data: json })
      } catch (err) {
        self.postMessage({ type: 'error', data: err.message })
      }
      break
  }
}

// 导入其他脚本
importScripts('some-utility.js', 'another-helper.js')
```

**专用 Worker vs Shared Worker**：

```js
// Shared Worker — 多个页面共享
// shared-worker.js
self.onconnect = (e) => {
  const port = e.ports[0]
  port.onmessage = (e) => {
    port.postMessage('Received: ' + e.data)
  }
}

// main.js
const worker = new SharedWorker('shared-worker.js')
worker.port.postMessage('Hello from page 1')
worker.port.onmessage = (e) => console.log(e.data)
```

**Transferable Objects**：

```js
// 传递大对象而不拷贝（零拷贝）
// main.js
const buffer = new ArrayBuffer(1024 * 1024 * 100) // 100MB
worker.postMessage({ data: buffer }, [buffer])
// 发送后，主线程的 buffer 变为空（所有权转移）

// 对于 ImageBitmap、OffscreenCanvas 也适用
const canvas = document.getElementById('canvas')
const offscreen = canvas.transferControlToOffscreen()
worker.postMessage({ canvas: offscreen }, [offscreen])
```

| 特性 | 主线程 | Web Worker |
|------|--------|-----------|
| DOM 访问 | ✅ | ❌ |
| 阻塞问题 | 会阻塞 UI | 不阻塞主线程 |
| 数据传递 | N/A | 克隆/Transferable |
| 线程通信 | N/A | postMessage |
| 生命周期 | 页面生命周期 | 独立的 |

**面试追问**：
- Worker 能访问哪些 API？支持 XMLHttpRequest、fetch、setTimeout、IndexedDB、navigator、location 等，但无 DOM、无 window、无 parent。
- 大量 Worker 线程有性能问题吗？每个 Worker 有自己的 JS 引擎实例，内存开销大，建议使用线程池模式复用。
- postMessage 传递大数据时要注意什么？默认是结构化克隆（structured clone），大数据量有序列化开销，用 Transferable Objects 避免拷贝。

## Q12: 什么是内存泄漏？怎么预防？

内存泄漏是程序不再使用的内存没有被正确释放，导致进程占用的内存持续增长，最终可能导致性能下降甚至崩溃。

**常见泄漏场景**：
1. **全局变量**：未声明的变量挂到 window
2. **闭包**：闭包持有大对象引用
3. **定时器未清理**：setInterval 未 clear
4. **DOM 引用**：JS 持有已移除 DOM 的引用
5. **事件监听未移除**：addEventListener 未 remove
6. **控制台**：console.log 的对象不会被 GC

**详细示例**：

```js
// 1. 意外的全局变量
function leak() {
  leaked = 'global'  // 没有 var/let/const -> 挂在 window 上
}
// 严格模式下会报错
'use strict'
function safe() {
  leaked = 'error' // ReferenceError

// 2. 闭包持有大对象
function createLeak() {
  const largeData = new Array(1000000).fill('data')
  return function() {
    console.log('still referencing largeData')
    // 只要返回的函数存在，largeData 不会被回收
  }
}

// 3. 定时器未清理
function startTimer() {
  const largeData = new Array(1000000).fill('important')
  setInterval(() => {
    console.log(largeData.length) // 持有 largeData 引用
  }, 1000)
}
// clearInterval 不调用，定时器+数据永远不释放

// 4. DOM 引用泄漏
const elements = new Map()
function storeElement(id) {
  const el = document.getElementById(id)
  elements.set(id, el) // Map 持有 DOM 强引用
  el.addEventListener('click', () => {
    console.log(`Clicked ${id}`)
  })
}
function removeElement(id) {
  const el = document.getElementById(id)
  el.remove() // DOM 从页面移除，但 elements 仍持有引用 -> DOM 不会 GC
  // 需要 elements.delete(id)
}

// 5. 事件监听未移除
class Component {
  constructor(button) {
    this.button = button
    this.clickHandler = () => console.log('clicked')
    button.addEventListener('click', this.clickHandler)
    // 组件销毁时没有 removeEventListener
  }
  destroy() {
    // ✅ 应该
    this.button.removeEventListener('click', this.clickHandler)
  }
}

// 6. console.log 陷阱
function debug() {
  const largeObj = { /* huge data */ }
  console.log(largeObj) // 在 DevTools 中，引用的对象不会被 GC
  // console.log 在开发模式下保留对象引用
}
```

**预防和检测**：

```js
// 1. 用 WeakMap/WeakSet 关联临时数据
const domData = new WeakMap()
function attachData(el, data) {
  domData.set(el, data)
  // el 移除时自动回收
}

// 2. 组件卸载时清理
class LifecycleComponent {
  constructor() {
    this.timers = new Set()
    this.listeners = []
  }
  addTimer(id) { this.timers.add(id) }
  addListener(target, event, handler) {
    target.addEventListener(event, handler)
    this.listeners.push(() => target.removeEventListener(event, handler))
  }
  destroy() {
    this.timers.forEach(clearInterval)
    this.listeners.forEach(cleanup => cleanup())
  }
}

// 3. 使用赋 null 释放引用
function processLargeData() {
  const data = getLargeData()
  // 使用 data ...
  // 完成后主动释放
  data = null // 提示 GC 可以回收
}

// 4. 避免闭包持有不必要的大对象：
// ❌
function outer() {
  const bigData = new Array(1000000)
  return function small() {
    // 只用 smallData，但闭包持有了 bigData
    const smallData = 'hello'
    return smallData
  }
}

// ✅
function outer() {
  const bigData = new Array(1000000)
  const smallData = 'hello'
  const result = bigData // 先使用 bigData
  return function small() {
    return smallData // 只闭包小变量
  }
}
```

**Chrome DevTools 查找内存泄漏**：

```js
// 1. Performance 面板录制，查看 JS Heap 是否持续增长
// 2. Memory 面板拍快照（Heap Snapshot），对比前后差异
// 3. 使用 Detached DOM Tree 查找分离的 DOM 节点
// 4. Allocation Timeline 记录分配时间线
```

**面试追问**：
- 闭包一定会导致内存泄漏吗？不是，只有当闭包生命周期超出预期且持有大对象引用时才叫泄漏。
- 怎么用 Chrome DevTools 找内存泄漏？拍堆快照对比，检测 Detached DOM Tree，用 Performance 面板录制。
- 内存泄漏和内存溢出的区别？内存泄漏是内存没有及时回收（不断积累），内存溢出是内存不够用（可能因泄漏导致）。

## Q13: 什么是 Service Worker？

Service Worker 是浏览器后台运行的脚本，独立于网页，充当网络代理，拦截请求、管理缓存、实现离线访问。

```js
// 注册
navigator.serviceWorker.register('/sw.js')

// sw.js — 拦截网络请求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  )
})
```

**用途**：离线缓存（PWA）、消息推送、后台同步。Service Worker 是 **Web Worker 的一种**，没有 DOM 访问权限。

**完整生命周期**：

```js
// sw.js — Service Worker 完整示例
const CACHE_NAME = 'v1'
const URLS_TO_CACHE = [
  '/',
  '/styles.css',
  '/app.js',
  '/offline.html',
]

// 安装阶段 — 预缓存资源
self.addEventListener('install', event => {
  console.log('SW installing...')
  // 强制新 SW 立即激活（不等待旧 SW 关闭）
  self.skipWaiting()

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  )
})

// 激活阶段 — 清理旧缓存
self.addEventListener('activate', event => {
  console.log('SW activating...')
  // 立即控制所有客户端
  event.waitUntil(clients.claim())

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    })
  )
})

// 网络请求拦截
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // 只处理同源的 GET 请求
  if (url.origin === self.location.origin && event.request.method === 'GET') {
    // 策略一：Cache First（适用于静态资源）
    if (url.pathname.match(/\.(css|js|png|jpg)$/)) {
      event.respondWith(cacheFirst(event.request))
    }
    // 策略二：Network First（适用于 HTML）
    else if (url.pathname.match(/\.html$/)) {
      event.respondWith(networkFirst(event.request))
    }
  }
})

function cacheFirst(request) {
  return caches.match(request)
    .then(cached => cached || fetch(request))
}

function networkFirst(request) {
  return fetch(request)
    .then(response => {
      // 缓存最新版本
      const clone = response.clone()
      caches.open(CACHE_NAME).then(cache => cache.put(request, clone))
      return response
    })
    .catch(() => caches.match(request)) // 离线时提供缓存
}

// 消息推送
self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.message,
    icon: '/icon.png',
    badge: '/badge.png',
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  )
})

// 后台同步
self.addEventListener('sync', event => {
  if (event.tag === 'sync-posts') {
    event.waitUntil(syncPosts())
  }
})
```

**注册和更新**：

```js
// main.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/' // SW 控制的范围
      })
      console.log('SW registered:', registration.scope)

      // 检查更新
      registration.addEventListener('updatefound', () => {
        const newSW = registration.installing
        newSW.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('New version available!')
            // 提示用户刷新
          }
        })
      })
    } catch (err) {
      console.error('SW registration failed:', err)
    }
  })

  // 当新的 SW 控制页面时刷新
  let refreshing = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return
    refreshing = true
    window.location.reload()
  })
}
```

**缓存策略对比**：

| 策略 | 描述 | 适用场景 |
|------|------|---------|
| Cache First | 先查缓存，没有则请求网络 | 静态资源（CSS/JS/图片） |
| Network First | 先请求网络，失败则用缓存 | HTML 页面、API 数据 |
| Stale While Revalidate | 返回缓存，后台更新缓存 | 非关键数据 |
| Network Only | 只从网络获取 | 实时数据（支付等） |
| Cache Only | 只从缓存获取 | 离线核心资源 |

**面试追问**：
- Service Worker 和 Web Worker 的区别？SW 充当网络代理、支持离线、PWA 推送；WW 做密集计算。SW 的生命周期更复杂。
- Service Worker 的缓存空间限制？不同浏览器不同，通常为存储空间的一定比例（如 Chrome 是可用空间的 60%）。
- Service Worker 更新机制？浏览器后台检查更新，新的 SW 安装后进入 waiting 状态，所有旧标签页关闭后才激活。可以调用 skipWaiting + clients.claim 强制立即激活。

## Q14: 什么是 BigInt？

BigInt 是 ES2020 引入的基本类型，用于表示超出 `Number.MAX_SAFE_INTEGER`（2^53 - 1）的整数。

```js
// 安全整数范围：-2^53+1 ~ 2^53-1
// BigInt 突破这个限制
const big = 9007199254740991n
const big2 = BigInt('9007199254740991')
big + 1n  // ✅
big + 1   // ❌ 不能混用
typeof big // 'bigint'
```

**场景**：高精度计算（金融、时间戳、数据库 ID）。

```js
// 高精度金融计算
const price = BigInt('9999999999999999')
const quantity = 3n
const total = price * quantity // 29999999999999997n

// 大时间戳
const timestamp = Date.now() * 1000000n // 纳秒精度

// 数据库 ID（超过 2^53-1 时）
const dbId = BigInt('18446744073709551615') // 64-bit 无符号整数
```

**操作和限制**：

```js
// 支持的运算符
const a = 10n
const b = 3n
a + b   // 13n
a - b   // 7n
a * b   // 30n
a / b   // 3n（除法截断，不保留小数）
a % b   // 1n
a ** b  // 1000n

// 位运算（所有位运算符都支持）
a & b   // 2n
a | b   // 11n
a ^ b   // 9n
a << 1n // 20n
a >> 1n // 5n

// ❌ 不支持的一元运算符
+a      // TypeError（不能正号）
// 不能与 Number 混用
a + 1   // TypeError

// ❌ 不能用于 Math 方法
Math.pow(a, 2n) // TypeError

// 比较（可以跨类型比较）
10n == 10  // true（== 会转换）
10n === 10 // false（不同类型）
10n < 20   // true
0n == false // true
0n === false // false

// 转 Boolean
if (0n) {}    // false
if (1n) {}    // true
Boolean(0n) // false

// 转换
Number(10n)   // 10（可能丢失精度）
String(10n)  // '10'
BigInt('0x1f') // 31n（支持进制前缀）
BigInt('0o77') // 63n
BigInt('0b11') // 3n
```

**边缘情况**：

```js
// 超出 Number 精度的转换
const big = BigInt('9007199254740993')
Number(big)          // 9007199254740992（精度丢失！）
console.log(Number(big) === 9007199254740993) // false

// BigInt 除法截断
5n / 2n  // 2n（不是 2.5n）
// 需要精确除法时转为 Number
Number(5n) / Number(2n) // 2.5

// 负数 BigInt
-10n    // ✅
10n / -3n // -3n（向下取整）

// JSON.stringify
const obj = { value: 10n }
JSON.stringify(obj) // '{"value":10}' .toString() 调用
// 但标准行为是抛 TypeError（非标准环境可能 toString）

// 自定义序列化
BigInt.prototype.toJSON = function() { return this.toString() }
JSON.stringify({ value: 10n }) // '{"value":"10"}'
```

**面试追问**：
- Number 的最大安全整数是多少？2^53 - 1（9007199254740991），超过这个值整数运算不精确。
- BigInt 为什么不能和 Number 混用？类型安全考虑，混用可能导致精度丢失，必须显式转换。
- BigInt 适用于哪些场景？高精度金融计算、大整数 ID 和哈希、加密货币、密码学操作、大数科学计算。

## Q15: 什么是 Symbol？

Symbol 是 ES6 新增的基本类型，表示**唯一**的值，常用于对象属性 key 和元编程。

```js
const sym1 = Symbol('描述')
const sym2 = Symbol('描述')
sym1 === sym2 // false（唯一）

// 作为对象 key（隐藏属性）
const TYPE = Symbol('type')
obj[TYPE] = 'internal'
Object.keys(obj) // 不包含 Symbol key
Object.getOwnPropertySymbols(obj) // 获取

// 内置 Symbol
Symbol.iterator    // 可迭代
Symbol.toStringTag // Object.prototype.toString
Symbol.hasInstance // instanceof
```

**创建和使用**：

```js
// 1. Symbol() — 唯一值
const s1 = Symbol()
const s2 = Symbol()
s1 === s2 // false

// 有描述
const s3 = Symbol('my symbol')
console.log(s3.toString()) // 'Symbol(my symbol)'
console.log(String(s3))    // 'Symbol(my symbol)'

// 2. Symbol.for() — 全局注册（跨模块共享）
const g1 = Symbol.for('app.constant')
const g2 = Symbol.for('app.constant')
g1 === g2 // true（相同 key 返回同一 Symbol）

Symbol.keyFor(g1) // 'app.constant'
Symbol.keyFor(Symbol()) // undefined（未注册）

// 3. 作为私有属性
const _private = Symbol('private')
class MyClass {
  constructor() {
    this[_private] = 'secret'
    this.public = 'visible'
  }
  getSecret() {
    return this[_private]
  }
}
const obj = new MyClass()
Object.keys(obj)          // ['public']
Object.getOwnPropertyNames(obj) // ['public']
Object.getOwnPropertySymbols(obj) // [Symbol(private)]
JSON.stringify(obj)       // '{"public":"visible"}'（忽略 Symbol key）
```

**内置 Symbol 的用途**：

```js
// Symbol.iterator — 让对象可迭代
const customIterable = {
  items: [10, 20, 30],
  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => ({
        value: this.items[i++],
        done: i > this.items.length
      })
    }
  }
}
console.log([...customIterable]) // [10, 20, 30]

// Symbol.toStringTag — 自定义类型标签
class MyArray {
  get [Symbol.toStringTag]() { return 'MyArray' }
}
console.log(Object.prototype.toString.call(new MyArray())) // '[object MyArray]'

// Symbol.hasInstance — 自定义 instanceof 逻辑
class SpecialNumber {
  static [Symbol.hasInstance](instance) {
    return Number.isFinite(instance) && instance > 0
  }
}
console.log(42 instanceof SpecialNumber) // true
console.log(-1 instanceof SpecialNumber) // false

// Symbol.toPrimitive — 控制类型转换
class Money {
  constructor(value) {
    this.value = value
  }
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return `$${this.value}`
    if (hint === 'number') return this.value
    return this.value
  }
}
const m = new Money(100)
console.log(+m)      // 100（number）
console.log(`${m}`)  // '$100'（string）
console.log(m + '')  // '100'（default）

// Symbol.species — 控制衍生对象
class MyArray extends Array {
  static get [Symbol.species]() { return Array }
}
const myArr = new MyArray(1, 2, 3)
const mapped = myArr.map(x => x * 2)
console.log(mapped instanceof MyArray) // false（使用 Array）
console.log(mapped instanceof Array)   // true

// Symbol.match — 自定义 match 行为
class StartsWith {
  [Symbol.match](str) {
    return str.startsWith(this.prefix)
  }
  constructor(prefix) { this.prefix = prefix }
}
'hello world'.startsWith('hello') // 实际上 String.startsWith 不依赖 Symbol.match
```

**Symbol 的局限性**：

```js
const sym = Symbol('test')

// 不会在 for...in 中枚举
for (const key in obj) {} // 不包含 Symbol key

// 不会在 Object.keys 中出现
Object.keys(obj) // 不包含 Symbol key

// 但可以被 Reflect.ownKeys 获取
Reflect.ownKeys(obj) // 包含 Symbol key

// Symbol key 仍然可以被 Object.assign 复制（属性被复制）
const target = {}
Object.assign(target, obj) // Symbol 属性被复制

// 仍然可以被 JSON.stringify 忽略
JSON.stringify(obj) // 忽略 Symbol 属性

// 仍然可以通过 getOwnPropertySymbols 获取
Object.getOwnPropertySymbols(obj) // 可枚举
```

**面试追问**：
- Symbol 可以实现私有属性吗？不完全私有，Object.getOwnPropertySymbols 可以获取到，只是"隐藏"而非"私有"。
- Symbol.for 和 Symbol 的区别？Symbol 每次创建唯一值；Symbol.for 在全局注册表中查找/创建，相同 key 返回同一 Symbol。
- 常用的内置 Symbol 有哪些？Symbol.iterator（可迭代）、Symbol.toStringTag（类型标签）、Symbol.toPrimitive（类型转换）、Symbol.hasInstance（instanceof）、Symbol.species（衍生对象）。

## Q16: 展开运算符和剩余参数

```js
// 展开 - 展开数组/对象
const arr = [1, 2, 3]
const newArr = [...arr, 4, 5]        // [1, 2, 3, 4, 5]
const obj = { a: 1, b: 2 }
const newObj = { ...obj, c: 3 }      // { a: 1, b: 2, c: 3 }

// 剩余 - 收集剩余参数
function sum(a, b, ...rest) {
  return rest.reduce((acc, v) => acc + v, a + b)
}
const [first, ...rest] = [1, 2, 3, 4]
// first = 1, rest = [2, 3, 4]
```

**展开运算符的深度用途**：

```js
// 1. 数组拷贝（浅）
const original = [1, 2, { a: 3 }]
const copy = [...original]
copy[2].a = 99
console.log(original[2].a) // 99（浅拷贝，对象共享引用）

// 2. 合并数组
const arr1 = [1, 2]
const arr2 = [3, 4]
const merged = [...arr1, ...arr2] // [1, 2, 3, 4]

// 3. 展开字符串
const chars = [...'hello'] // ['h', 'e', 'l', 'l', 'o']
// 正确处理 Unicode 代理对
const unicode = [...'你好世界'] // ['你', '好', '世', '界']

// 4. 函数调用传参
const numbers = [1, 5, 3, 9, 2]
Math.max(...numbers) // 9
Math.min(...numbers) // 1

// 5. 对象展开
const defaults = { theme: 'light', lang: 'en' }
const userConfig = { lang: 'zh' }
const config = { ...defaults, ...userConfig }
// { theme: 'light', lang: 'zh' } — 后覆盖前

// 6. 创建对象时去除 undefined 属性
const data = { name: 'Alice', age: undefined, role: 'admin' }
const clean = { ...Object.fromEntries(
  Object.entries(data).filter(([_, v]) => v !== undefined)
)} // { name: 'Alice', role: 'admin' }
```

**剩余参数的深度用途**：

```js
// 1. 变长参数
function logAll(...args) {
  args.forEach((arg, i) => console.log(`arg${i}:`, arg))
}
logAll('a', 'b', 'c')

// 2. 收集剩余属性
const user = { name: 'Alice', age: 25, role: 'admin', id: 1 }
const { name, age, ...rest } = user
console.log(name) // 'Alice'
console.log(age)  // 25
console.log(rest) // { role: 'admin', id: 1 }

// 3. 重构函数参数（提取部分参数 + 传剩余）
function fetchUser(id, ...options) {
  const config = { method: 'GET', ...options }
  return fetch(`/api/users/${id}`, config)
}

// 4. 变长元组类型（TypeScript）
// type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
```

**边缘情况**：

```js
// 展开 null/undefined（对象展开时）
const spreadNull = { ...null }     // {}（空对象）
const spreadUndef = { ...undefined } // {}（空对象）
const spreadArr = { ...[1, 2, 3] } // { 0: 1, 1: 2, 2: 3 }（数组变为对象索引）

// 浅拷贝的陷阱
const nested = { a: { b: 1 } }
const copy = { ...nested }
copy.a.b = 2
console.log(nested.a.b) // 2（共享引用）

// 解构剩余参数时的 length
function fn(a, b, ...rest) {}
console.log(fn.length) // 2（rest 参数不计入 length）

// 解构默认值 + 剩余
const [a = 1, ...rest] = []
console.log(a) // 1（默认值生效）
console.log(rest) // []（空数组，不是 undefined）

// 和 arguments 的区别
function oldWay() {
  console.log(arguments)    // 类数组，不是真正的数组
  console.log([...arguments]) // 真正的数组
}
function newWay(...args) {
  console.log(args) // 真正的数组
}
```

**面试追问**：
- 展开运算符是深拷贝还是浅拷贝？浅拷贝，嵌套对象仍然是引用。
- 剩余参数和 arguments 的区别？剩余参数是真正数组、可以只收集部分参数；arguments 是类数组、包含所有参数。
- 对象展开的顺序影响？后面的属性覆盖前面的同名属性。展开 null/undefined 安全返回空对象。

## Q17: 解构赋值

解构赋值从数组或对象提取值，赋值给变量，支持默认值、嵌套、重命名。

```js
// 数组解构
const [a, b, ...rest] = [1, 2, 3, 4]
const [first, second = 0] = [1]       // second = 0（默认值）

// 对象解构
const { name, age: userAge, role = 'user' } = person

// 嵌套解构
const { data: { items, total } } = response

// 函数参数解构
function Component({ title, children, ...props })
```

**高级用法**：

```js
// 1. 交换变量
let a = 1, b = 2
;[a, b] = [b, a] // a=2, b=1（不需要临时变量）

// 2. 解构多个返回值
function getConfig() {
  return { theme: 'dark', lang: 'zh', debug: true }
}
const { theme, ...rest } = getConfig()
// theme = 'dark', rest = { lang: 'zh', debug: true }

// 3. 解构正则匹配
const url = 'https://example.com/path?q=test'
const [, protocol, domain] = url.match(/^(\w+):\/\/([^/]+)/) || []
// protocol = 'https', domain = 'example.com'

// 4. 解构 Map
const map = new Map([['a', 1], ['b', 2]])
for (const [key, value] of map) {
  console.log(key, value)
}

// 5. 解构深度嵌套
const response = {
  status: 200,
  data: {
    user: {
      profile: {
        name: 'Alice',
        settings: { theme: 'dark' }
      }
    }
  }
}
const { data: { user: { profile: { name, settings: { theme } } } } } = response
// name = 'Alice', theme = 'dark'

// 6. 重命名 + 默认值
const person = { firstName: 'John' }
const { firstName: first = 'Guest', lastName: last = 'Unknown' } = person
// first = 'John', last = 'Unknown'

// 7. 函数参数默认值
function createUser({ name = 'Guest', age = 18, roles = [] } = {}) {
  return { name, age, roles }
}
createUser()                     // { name: 'Guest', age: 18, roles: [] }
createUser({ name: 'Alice' })    // { name: 'Alice', age: 18, roles: [] }

// 8. 计算属性名解构
const key = 'dynamicKey'
const { [key]: value } = { dynamicKey: 42 }
// value = 42
```

**边缘情况**：

```js
// 解构 undefined 或 null 会抛错
const { x } = undefined     // TypeError
const { y } = null          // TypeError
// ✅ 解决方案：默认值
const { z = 1 } = obj || {}

// 解构不存在的属性
const { missing } = { a: 1 }
console.log(missing) // undefined

// 数组越界解构
const [a, b, c] = [1, 2]
console.log(c) // undefined

// 默认值只在值为 undefined 时生效
const { x = 10 } = { x: null }
console.log(x) // null（null 不等同 undefined）
const { y = 10 } = { y: 0 }
console.log(y) // 0（0 不是 undefined）

// 放弃某些值
const [,, third] = [1, 2, 3]
console.log(third) // 3

// 解构 generator
function* fib() {
  let a = 0, b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b] // 交换并更新
  }
}
const [first, second, third, fourth] = fib()
// first=0, second=1, third=1, fourth=2
```

**面试追问**：
- 解构的默认值什么情况下生效？只有当解构目标的值严格等于 `undefined` 时，`null` 不会触发默认值。
- 嵌套解构如果中间层不存在会怎样？会抛 TypeError（不能从 undefined 或 null 中解构），需要逐层加默认值或可选链。
- 函数参数解构的好处？明确函数的预期参数结构，调用时自动展开，结合默认值提供完整配置。

## Q18: 可选链和空值合并

```js
// 可选链（?.）— 短路返回 undefined
const name = user?.profile?.name        // 不用判断 user 和 profile
const first = arr?.[0]                  // 数组可选
const result = obj?.method?.()          // 方法可选

// 空值合并（??）— 只有 null/undefined 才用默认值
const count = data ?? 0                // data 为 0 时返回 0
const count2 = data || 0               // data 为 0 时返回 0（bug！0 是 falsy）

// ✅ 区别
false ?? 'default' // false
false || 'default' // 'default'
```

**可选链的三类语法**：

```js
// 1. 属性访问
const city = user?.address?.city

// 2. 动态键
const key = 'name'
const val = obj?.[key]
const arrVal = arr?.[0]

// 3. 方法调用
const result = obj?.method?.()

// 可选链的短路
obj?.[key]?.()   // 如果 obj 是 null/undefined，整个表达式返回 undefined，不执行后续
const len = document.querySelector('ul')?.children?.length
```

**组合使用**：

```js
// 可选链 + 空值合并组合
const name = user?.profile?.name ?? 'Anonymous'
const count = storage?.getItem('count') ?? 0

// 避免常见的错误用法

// ❌ 在赋值左侧使用可选链（不支持）
// obj?.prop = 5 // SyntaxError

// ❌ delete 可选链
// delete obj?.prop // 不支持（某些引擎支持，不是标准）

// ❌ 可选链 + 模板字符串
// `${obj?.prop}` // 如果 undefined，输出 'undefined' 字符串

// ✅ 正确用法
const result = obj?.prop ?? 'default'
```

**与逻辑或/与的区别**：

```js
const value = 0

// || 会处理所有 falsy 值
const orResult = value || 'default'    // 'default'（0 是 falsy）

// ?? 只处理 null/undefined
const nullishResult = value ?? 'default' // 0（0 不是 nullish）

// && 用于条件访问（可选链的替代方案）
const city = user && user.address && user.address.city
// 可选链更简洁
const city2 = user?.address?.city

// 优先级
// ?. 优先级较高
// ?? 优先级低于 ||
// 不能直接混合 ?? 和 ||/&&（需要括号）
// null ?? '' || 'default' // SyntaxError
(null ?? '') || 'default' // ✅
```

**边缘情况**：

```js
// 可选链不能用于赋值
// let obj = {}
// obj?.prop = 1 // SyntaxError

// 可选链在 delete 中
const obj = { x: 1 }
// delete obj?.x // ❌ 非标准

// 可选链和 null/undefined
console.log(null?.prop)     // undefined
console.log(undefined?.method?.()) // undefined
console.log(void 0?.name)   // undefined

// 方法可选调用
const obj = {
  log() { console.log('logged') }
}
obj.log?.()    // 'logged'
obj.nonexist?.() // undefined（不抛错）

// 数组可选索引
const empty = []
empty[0]?.['name'] // undefined

// 注意：?. 不会区分"不存在"和"存在但为 undefined"
const user1 = {}
const user2 = { address: undefined }
console.log(user1?.address) // undefined
console.log(user2?.address) // undefined（区分不了）
```

**面试追问**：
- 可选链和逻辑 && 的区别？可选链更简洁，专门处理 null/undefined，不处理其他 falsy 值。
- ?? 和 || 的根本区别？?? 只处理 null/undefined（nullish），|| 处理所有 falsy（0、''、false、null、undefined）。
- 可选链的性能影响？现代引擎优化很好，性能影响可忽略，优先考虑代码可维护性。

## Q19: Reflect 是什么？

Reflect 是一组操作对象的静态方法，对应 Proxy 的拦截器。它把 Object 上一些命令式操作（如 delete、in）变为函数式调用，并提供更一致的返回值。

```js
Reflect.get(target, key)
Reflect.set(target, key, value)
Reflect.has(target, key)          // in 操作符
Reflect.deleteProperty(target, key)  // delete
Reflect.ownKeys(target)           // Object.keys + getOwnPropertySymbols
Reflect.construct(Constructor, args) // new

// Proxy + Reflect 是标准组合
const proxy = new Proxy(target, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})
```

**Reflect 全部方法**：

```js
// 1. 属性操作
Reflect.get(target, key, receiver)    // obj[key]
Reflect.set(target, key, value, receiver) // obj[key] = value
Reflect.has(target, key)              // key in obj
Reflect.deleteProperty(target, key)   // delete obj[key]

// 2. 原型
Reflect.getPrototypeOf(target)         // Object.getPrototypeOf
Reflect.setPrototypeOf(target, proto)  // Object.setPrototypeOf

// 3. 属性描述符
Reflect.getOwnPropertyDescriptor(target, key) // Object.getOwnPropertyDescriptor
Reflect.defineProperty(target, key, desc)     // Object.defineProperty

// 4. 可扩展性
Reflect.isExtensible(target)            // Object.isExtensible
Reflect.preventExtensions(target)       // Object.preventExtensions

// 5. 键
Reflect.ownKeys(target)                 // 返回所有自身属性（包括 Symbol 和不可枚举）

// 6. 函数调用
Reflect.apply(fn, thisArg, args)        // fn.apply(thisArg, args)
Reflect.construct(Constructor, args)    // new Constructor(...args)
```

**Proxy + Reflect 的必要性**：

```js
// 为什么需要 Reflect.get 的 receiver 参数？
const parent = {
  get value() {
    console.log('parent getter, this:', this)
    return this._value
  }
}

const child = {
  _value: 42
}
Object.setPrototypeOf(child, parent)

const proxy = new Proxy(child, {
  get(target, key, receiver) {
    // ❌ 如果直接用 target[key]
    // return target[key] // this = target（child），不是 proxy
    // 这样 parent getter 中的 this 是 child，不是 proxy

    // ✅ 用 Reflect.get 传递 receiver
    return Reflect.get(target, key, receiver) // this = receiver（proxy）
  }
})

console.log(proxy.value) // 42（如果不用 receiver，会从 child 找 _value）
// 如果 child 没有 _value，用 Reflect.get 会从原型链查找并正确绑定 this

// Reflect.set 同理
const proxy2 = new Proxy(child, {
  set(target, key, value, receiver) {
    console.log(`Setting ${String(key)} = ${value}`)
    return Reflect.set(target, key, value, receiver)
  }
})
```

**Reflect 的好处**：

```js
// 1. 函数式调用（代替命令式操作）
delete obj.prop        // 命令式
Reflect.deleteProperty(obj, 'prop') // 函数式

'key' in obj          // 命令式
Reflect.has(obj, 'key') // 函数式

// 2. 更一致的返回值
const obj = {}
console.log(Object.defineProperty(obj, 'x', { value: 1 })) // 返回 obj
console.log(Reflect.defineProperty(obj, 'x', { value: 1 })) // true

// Object.defineProperty 失败时抛异常
// Reflect.defineProperty 失败时返回 false（更安全）

// 3. 区分不同类型的 ownKeys
Object.keys(obj)      // 仅可枚举字符串
Object.getOwnPropertyNames(obj) // 所有字符串（含不可枚举）
Object.getOwnPropertySymbols(obj) // Symbol
Reflect.ownKeys(obj)  // 以上全部：字符串 + Symbol，包括不可枚举

// 4. 更可靠的 apply
// 旧方式：fn.apply(obj, args) — 但 apply 可能被重写
// 安全方式：
Reflect.apply(fn, obj, args)
```

**面试追问**：
- Proxy 中为什么需要 Reflect？为了正确传递 receiver 参数，使原型链中的 getter/setter 能正确绑定 this。
- Reflect 和 Object 的静态方法有什么不同？Reflect 返回布尔值/结果而非抛异常，Reflect 方法更统一，且 Reflect 是函数式。
- Reflect.ownKeys 和 Object.keys 的区别？ownKeys 返回所有自身属性（含不可枚举和 Symbol），keys 只返回可枚举字符串。
