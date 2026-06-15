# TypeScript 面试题

## Q1: TypeScript 的核心优势

1. **类型安全**——编译期捕获类型错误
2. **IDE 支持**——自动补全、重构、导航
3. **可读性**——类型即文档
4. **静态分析**——更早发现 bug
5. **ECMAScript 超集**——兼容所有 JS 语法

**深入分析**：

```ts
// 1. 类型安全 — 编译期发现错误而不是运行时
// ❌ JS 中到运行时才发现
function add(a, b) {
  return a + b
}
add(1, '2') // JS 返回 '12'（可能不是预期行为）

// ✅ TS 编译就报错
function tsAdd(a: number, b: number): number {
  return a + b
}
// tsAdd(1, '2') // ❌ Argument of type 'string' is not assignable to parameter of type 'number'

// 2. 类型即文档
function processUser(
  id: number,
  options: {
    name?: string
    transform?: (data: string) => string
  }
): Promise<User>
// 只看函数签名就知道参数和返回值类型，不需要翻阅文档

// 3. 更早发现 bug
interface User {
  name: string
  age?: number
}
function greet(user: User) {
  console.log(user.name.toUpperCase()) // ✅ name 是 string
  console.log(user.age.toFixed(2))     // ❌ age 可能是 undefined，需要处理
}

// 4. 重构信心
// 修改接口时，所有使用的地方都会报错
interface ApiResponse {
  // status: number // 删除了这个字段
  code: number
}
// 所有依赖 status 的地方都会出现编译错误

// 5. ES 超集 + 额外语法
// TS 支持 enum、interface、decorators、类型工具等 JS 没有的特性
// 最终编译为纯 JS，兼容所有环境
```

**TS 和 JS 的代码量对比**：
```ts
// JS — 需要手动写类型检查
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers')
  }
  if (b === 0) throw new Error('cannot divide by zero')
  return a / b
}

// TS — 类型约束自动完成
function divide(a: number, b: number): number {
  if (b === 0) throw new Error('cannot divide by zero')
  return a / b
}
```

| 特性 | JavaScript | TypeScript |
|------|-----------|------------|
| 类型系统 | 动态、运行时 | 静态、编译期 |
| 错误发现 | 运行时 | 编译时 |
| IDE 支持 | 基础 | 丰富（类型推断） |
| 学习成本 | 低 | 中 |
| 项目规模 | 小/中 | 中/大 |

**面试追问**：
- TS 有哪些编译选项？strict、noImplicitAny、strictNullChecks、esModuleInterop 等。
- TS 和 Flow 的区别？TS 是完整的语言和编译器，Flow 是 Facebook 的类型检查器，TS 生态更好。
- 为什么大型项目需要 TS？类型安全降低大型团队协作成本，重构可靠，代码即文档。

## Q2: interface 和 type 的区别

```ts
// 相同点：都可以描述对象/函数
interface Person { name: string }
type Person = { name: string }

// 不同点：

// ① interface 可合并（declaration merging）
interface User { name: string }
interface User { age: number }  // ✅ 合并为 { name, age }

type User = { name: string }
type User = { age: number }  // ❌ 重复定义

// ② type 可做联合/交叉类型
type Status = 'active' | 'inactive'
type X = A & B  // 交叉类型
type Y = A | B  // 联合类型

// ③ interface 只能用 extends
// type 用 &
interface A extends B {}
type C = B & { extra: string }

// ④ interface 更适用于 OOP/类
// type 更适用于函数签名/复杂类型
```

**更多差异和类比**：

```ts
// 1. type 可以定义基本类型别名
type UserID = string | number
type StatusCode = 200 | 301 | 400 | 404 | 500
type Callback<T> = (data: T) => void

// 2. interface 可以用于类（implements）
interface Animal {
  name: string
  speak(): void
}
class Dog implements Animal {
  name = 'Dog'
  speak() { console.log('Woof') }
}
// type 也可以 implements（TS 2.7+）
type Cat = { name: string; speak(): void }
class Tiger implements Cat {
  name = 'Tiger'
  speak() { console.log('Roar') }
}

// 3. type 可以用映射类型
type Readonly<T> = { readonly [K in keyof T]: T[K] }
// interface 不能直接映射

// 4. 二者可以互相继承
interface Animal { name: string }
type Pet = Animal & { owner: string }   // type 继承 interface

type Person = { name: string }
interface Employee extends Person {     // interface 继承 type
  salary: number
}

// 5. 元组只能用 type
type Point = [number, number]
type StringNumberPair = [string, number]
// interface 不能表示元组

// 6. interface 的合并在实际开发中的用处
// 模块扩充（Declaration Merging）
// vuex.d.ts
declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<State>
  }
}
// 无需修改 Vue 源码，通过 interface 合并添加类型
```

**哪个更推荐**：

```ts
// 类/对象 -> interface
interface Props {
  title: string
  count?: number
}

// 联合/交叉/工具类型 -> type
type Result<T> = { success: true; data: T } | { success: false; error: string }
type Options = Partial<Props>

// 函数签名
type Handler = (event: MouseEvent) => void
// 或用 interface
interface Handler {
  (event: MouseEvent): void
}

// React 组件 Props/State -> interface（社区惯例）
interface MyComponentProps {
  name: string
  onClick: () => void
}
```

**面试追问**：
- interface 合并适用于什么场景？模块扩充、第三方库类型扩展、全局类型增强。
- 为什么 type 不能合并？type 定义的是类型别名，不是声明，不存在"多次声明同一别名"的概念。
- 什么时候必须用 type？联合类型、条件类型、映射类型、元组。其他情况两者都可。

## Q3: 泛型（Generic）

泛型允许在定义函数、类、接口时不指定具体类型，在使用时再指定，提高复用性。

```ts
// 函数泛型
function identity<T>(arg: T): T {
  return arg
}
identity<string>('hello')
identity(42) // 类型推断

// 泛型约束
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}
getLength('abc') // ✅
getLength([1, 2]) // ✅
getLength(123) // ❌ number 没有 length

// 泛型类
class Stack<T> {
  private items: T[] = []
  push(item: T) { this.items.push(item) }
  pop(): T | undefined { return this.items.pop() }
}
```

**泛型的多种用法**：

```ts
// 1. 泛型接口
interface ResponseData<T> {
  code: number
  data: T
  message: string
}
type UserResponse = ResponseData<{ id: number; name: string }>
type ListResponse<T> = ResponseData<T[]>

// 2. 泛型约束（多重约束）
interface HasId { id: number }
interface HasName { name: string }

function merge<T extends HasId, U extends HasName>(a: T, b: U): T & U {
  return { ...a, ...b }
}
const merged = merge({ id: 1 }, { name: 'Alice' })

// 3. 泛型参数默认值
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value)
}
createArray(3, 42) // number[]
createArray(3)     // string[]（使用默认类型）

// 4. 泛型条件 + 推断
// 见 Q6 条件类型

// 5. 泛型工具函数
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}
function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// 6. 泛型 + 工厂模式
function createInstance<T>(Constructor: new (...args: any[]) => T, ...args: any[]): T {
  return new Constructor(...args)
}

// 7. 泛型递归
type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }

// 8. 泛型 + 索引访问
type ValueOf<T> = T[keyof T]
type User = { name: string; age: number; id: string }
type UserValues = ValueOf<User> // string | number
```

**常见泛型命名约定**：

```ts
// T — Type（类型）
// K — Key（键）
// V — Value（值）
// E — Element（元素）
// R — Return Type（返回类型）
// P — Props（属性）

function map<T, R>(arr: T[], fn: (item: T) => R): R[] {}
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {}
```

**面试追问**：
- 泛型约束 `<T extends SomeType>` 解决了什么问题？限制泛型的使用范围，保证在泛型内部可以安全调用某些方法或访问某些属性。
- 多个泛型参数怎么协作？`<T, U extends T>` 或 `function pair<T, K extends keyof T>(obj: T, key: K)`。
- 泛型在类型推断中如何工作？TS 根据传入的参数自动推断类型参数，也可以手动指定。

## Q4: keyof 和 typeof

```ts
const user = { name: 'Alice', age: 30 }
type UserKeys = keyof typeof user // 'name' | 'age'

// keyof = 对象 key 的联合类型
interface Todo {
  id: number
  text: string
  completed: boolean
}
type TodoKeys = keyof Todo // 'id' | 'text' | 'completed'

// 结合泛型
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
```

**keyof 的深度用法**：

```ts
// 1. keyof + 索引访问
interface Person {
  name: string
  age: number
  address: { city: string; zip: string }
}
type AddressType = Person['address'] // { city: string; zip: string }
type NameOrAge = Person['name' | 'age'] // string | number
type AllValues = Person[keyof Person] // string | number | { city: string; zip: string }

// 2. 安全访问函数
function safeGet<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
  return obj?.[key]
}

// 3. 类型安全的 setter
function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}
const todo: Todo = { id: 1, text: 'hello', completed: false }
setValue(todo, 'text', 'world') // ✅
// setValue(todo, 'text', 123)  // ❌ number 不能赋值给 string

// 4. keyof + 映射类型
type Optional<T> = { [K in keyof T]?: T[K] }
type RequireSome<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

// 5. keyof 在类中的应用
class Collection<T extends object> {
  private items: T[] = []
  getByKey(key: keyof T, value: T[keyof T]): T | undefined {
    return this.items.find(item => item[key] === value)
  }
}
```

**typeof 的深度用法**：

```ts
// 1. 从值获取类型
const config = { theme: 'dark', version: 2 }
type ConfigType = typeof config
// { theme: string; version: number }

// 2. 获取函数类型
function greet(name: string, age: number): string {
  return `Hello, ${name} (${age})`
}
type GreetFn = typeof greet // (name: string, age: number) => string

// 3. 获取类类型
class MyClass {
  constructor(public name: string) {}
  method() {}
}
type MyClassType = typeof MyClass
// new (name: string) => MyClass（构造函数类型）

// 4. 结合 ReturnType
type GreetReturn = ReturnType<typeof greet> // string

// 5. 获取枚举类型
enum Direction { Up, Down }
type Dir = typeof Direction // { Up: Direction; Down: Direction }
type DirValue = keyof typeof Direction // 'Up' | 'Down'

// 6. 获取常量类型
const PI = 3.14159
type PiType = typeof PI // 3.14159（字面量类型，不是 number）
```

**面试追问**：
- keyof 对于索引签名对象的结果是什么？如果对象有 `[key: string]: any`，keyof 返回 string | number。
- typeof 对 const 和 let 有什么区别？const 推断为字面量类型，let 推断为基础类型。
- 如何用 keyof 实现类型安全的树遍历？递归 keyof + 条件类型逐个检查路径。

## Q5: 内置工具类型

```ts
// Partial — 所有属性可选
type PartialUser = Partial<User>  // { name?: string; age?: number }

// Required — 所有属性必填
type RequiredUser = Required<PartialUser>

// Readonly — 所有属性只读
type ReadonlyUser = Readonly<User>

// Pick — 选取部分属性
type NameOnly = Pick<User, 'name'>  // { name: string }

// Omit — 排除部分属性
type WithoutAge = Omit<User, 'age'>  // { name: string }

// Record — 对象类型
type PageInfo = Record<'home' | 'about' | 'contact', { title: string }>

// Exclude — 联合类型排除
type T = Exclude<'a' | 'b' | 'c', 'a'>  // 'b' | 'c'

// Extract — 联合类型提取
type T = Extract<'a' | 'b' | 'c', 'a' | 'c'>  // 'a' | 'c'

// ReturnType — 函数返回类型
type Fn = () => string
type R = ReturnType<Fn>  // string

// Parameters — 函数参数类型
type P = Parameters<(a: number, b: string) => void>  // [number, string]

// NonNullable — 排除 null/undefined
type T = NonNullable<string | null | undefined>  // string
```

**深入使用**：

```ts
// Partial 的实际应用
interface Config {
  url: string
  timeout: number
  retries: number
  headers: Record<string, string>
}
function createClient(config: Partial<Config> = {}): Config {
  return {
    url: 'http://localhost',
    timeout: 5000,
    retries: 3,
    headers: {},
    ...config,
  }
}

// Pick + Omit 的差异
interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}
// 选几个
type PublicUser = Pick<User, 'id' | 'name' | 'email'>
// 排除敏感字段
type SafeUser = Omit<User, 'password'>

// Record — 枚举映射
type Theme = 'light' | 'dark' | 'system'
type ThemeConfig = Record<Theme, {
  bg: string
  text: string
  border: string
}>
const themes: ThemeConfig = {
  light: { bg: '#fff', text: '#000', border: '#ccc' },
  dark: { bg: '#000', text: '#fff', border: '#333' },
  system: { bg: 'auto', text: 'auto', border: 'auto' },
}

// Exclude/Extract 在条件类型中的等价实现
// type Exclude<T, U> = T extends U ? never : T
// type Extract<T, U> = T extends U ? T : never

// ReturnType + Parameters 配合
function fetchData(url: string, params?: Record<string, string>): Promise<Response> {
  return fetch(url, { params })
}
type FetchParams = Parameters<typeof fetchData>
// [url: string, params?: Record<string, string>]
type FetchReturn = ReturnType<typeof fetchData>
// Promise<Response>

// NonNullable 实现
// type NonNullable<T> = T extends null | undefined ? never : T
type Clean = NonNullable<string | null | undefined | number> // string | number
```

**面试追问**：
- Partial 和 Required 的底层实现？用映射类型 `[K in keyof T]?: T[K]` 和 `-?` 语法。
- Omit 和 Pick 的区别？Pick 选择保留的属性，Omit 选择排除的属性。Omit 底层是 Pick + Exclude。
- 如何实现一个 DeepPartial？递归遍历每个属性，值类型为对象时继续可选化。

## Q6: 条件类型

条件类型根据类型关系选择不同的类型分支，类似类型层面的 if/else。

```ts
type IsString<T> = T extends string ? 'yes' : 'no'
type A = IsString<'hello'>  // 'yes'
type B = IsString<number>   // 'no'

// 分布式条件类型（联合类型自动分发）
type ToArray<T> = T extends any ? T[] : never
type R = ToArray<string | number> // string[] | number[]

// infer（条件类型中推导类型）
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never
type ArrayItem<T> = T extends (infer U)[] ? U : never
```

**分布式条件类型详解**：

```ts
// 联合类型分发：T 是联合类型时，条件类型会分别对每个成员应用
type IsString<T> = T extends string ? 'yes' : 'no'
// IsString<string | number>
// = (string extends string ? 'yes' : 'no') | (number extends string ? 'yes' : 'no')
// = 'yes' | 'no'

// 禁止分发：用 [] 包裹
type IsStringNoDist<T> = [T] extends [string] ? 'yes' : 'no'
type C = IsStringNoDist<string | number> // 'no'（不分发，整体判断）

// Never 的特殊行为
type DistributeNever<T> = T extends string ? 'yes' : 'no'
type D = DistributeNever<never> // never（空联合，无成员）
// 防止方式
type NotDistributeNever<T> = [T] extends [never] ? 'special' : T extends string ? 'yes' : 'no'
type E = NotDistributeNever<never> // 'special'
```

**infer 的实际应用**：

```ts
// 1. 提取函数返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// 2. 提取 Promise 值类型
type Unwrap<T> = T extends Promise<infer U> ? U : T
type Result = Unwrap<Promise<string>> // string
type Result2 = Unwrap<number> // number（非 Promise 原样返回）

// 3. 提取数组元素类型（递归）
type Flatten<T> = T extends any[] ? (T extends (infer U)[] ? Flatten<U> : never) : T
type Flat = Flatten<[1, [2, [3]]]> // 1 | 2 | 3

// 4. 提取函数参数类型
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never
type SecondArg<T> = T extends (first: any, second: infer S, ...args: any[]) => any ? S : never

// 5. 提取构造函数实例类型
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : never

// 6. 提取 this 类型
type ThisParam<T> = T extends (this: infer This, ...args: any[]) => any ? This : never

// 7. 链式提取
type DeepPromise<T> = T extends Promise<infer U> ? DeepPromise<U> : T
type DeepP = DeepPromise<Promise<Promise<string>>> // string
```

**实际开发中的条件类型**：

```ts
// 1. 类型安全的事件系统
type EventData = {
  click: { x: number; y: number }
  focus: { targetId: string }
  keydown: { key: string; ctrlKey: boolean }
}

type EventHandler<E extends keyof EventData> = (data: EventData[E]) => void

function on<E extends keyof EventData>(event: E, handler: EventHandler<E>): void {}
on('click', (data) => console.log(data.x, data.y)) // ✅ 类型安全
on('focus', (data) => console.log(data.targetId))  // ✅

// 2. 条件参数
type Options<T> = T extends boolean ? { show: boolean } : { value: T }
declare function configure<T>(val: T): Options<T>

// 3. 过滤特定类型
type FilterString<T> = T extends string ? T : never
type StringsOnly = FilterString<'a' | 1 | 'b' | true> // 'a' | 'b'
```

**面试追问**：
- 分布式条件类型的触发条件？当泛型参数 T 是裸类型（没有被 [] 包裹）且是联合类型时触发分发。
- infer 只能在条件类型的 extends 子句中使用，为什么？infer 是类型推导，必须在条件判断的分支里。
- 如何递归条件类型？条件类型可以自我引用（名称引用自身类型），类似递归函数。

## Q7: 映射类型

映射类型通过遍历键名生成新类型。基于 `[K in keyof T]` 语法。

```ts
// 遍历 key 生成新类型
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}

// 修改值类型
type Nullable<T> = {
  [K in keyof T]: T[K] | null
}

// 重命名 key
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}
type User = { name: string; age: number }
type UserGetters = Getters<User>
// { getName: () => string; getAge: () => number }
```

**映射类型修饰符**：

```ts
// 添加/移除修饰符
// +? 添加可选（默认行为）
// -? 移除可选
// +readonly 添加 readonly（默认行为）
// -readonly 移除 readonly

type Required<T> = { [K in keyof T]-?: T[K] }
type Mutable<T> = { -readonly [K in keyof T]: T[K] }

// 示例
interface Config {
  readonly id: string
  name?: string
  version?: number
}
type RequiredMutable = {
  -readonly [K in keyof Config]-?: Config[K]
} // { id: string; name: string; version: number }
```

**key 重映射（TS 4.1+）**：

```ts
// 过滤特定 key
type OnlyStringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K]
}
interface Doc {
  id: number
  title: string
  content: string
  createdAt: Date
}
type StringDoc = OnlyStringKeys<Doc> // { title: string; content: string }

// 添加前缀/后缀
type Prefixed<T, P extends string> = {
  [K in keyof T as `${P & string}${Capitalize<string & K>}`]: T[K]
}
type PrefixedUser = Prefixed<User, 'user'>
// { userName: string; userAge: number }

// 条件保留 key
type NonFunctionKeys<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K]
}
type Methods<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K]
}
```

**实用映射类型**：

```ts
// 1. Pick 的实现
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 2. Omit 的实现
type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P]
}

// 3. DeepReadonly
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}
interface Nested {
  x: { y: { z: number } }
}
type Deep = DeepReadonly<Nested>
// { readonly x: { readonly y: { readonly z: number } } }

// 4. 根据值类型选 key
type PickByValue<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
}
interface Model {
  id: string
  version: number
  name: string
  active: boolean
}
type StringFields = PickByValue<Model, string> // { id: string; name: string }

// 5. 转换为联合类型
type ValuesToUnion<T> = T[keyof T] // 所有值的联合
```

**面试追问**：
- 映射类型中的 `as` 子句有什么用？TS 4.1+ 引入 key 重映射，可以过滤、重命名 key。
- `-?` 和 `+?` 语法的作用？控制可选标记的添加（+）或移除（-），实现 Required 等类型。
- 如何实现只修改深层对象的部分字段？递归映射 + 条件判断值类型是否为对象。

## Q8: 类型守卫

类型守卫是在运行时检查类型，帮助 TypeScript 在特定代码块中收窄类型。

```ts
// typeof
function isString(val: unknown): val is string {
  return typeof val === 'string'
}

// instanceof
if (error instanceof HttpError) { ... }

// in
if ('name' in obj) { ... }

// 自定义类型守卫
interface Cat { meow(): void }
interface Dog { bark(): void }

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined
}
```

**类型守卫的多种形式**：

```ts
// 1. typeof 类型守卫（只能收窄基本类型）
function process(val: string | number | boolean) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase()) // ✅ string
  } else if (typeof val === 'number') {
    console.log(val.toFixed(2))    // ✅ number
  } else {
    console.log(val)               // ✅ boolean
  }
}

// 2. instanceof 类型守卫（检查原型链）
class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message)
  }
}
class NetworkError extends Error {
  constructor(public retryable: boolean, message: string) {
    super(message)
  }
}
function handleError(error: Error) {
  if (error instanceof ApiError) {
    console.log(`API Error ${error.statusCode}: ${error.message}`)
  } else if (error instanceof NetworkError) {
    if (error.retryable) retry()
  } else {
    console.log(`Unknown error: ${error.message}`)
  }
}

// 3. in 类型守卫（检查属性存在）
interface Fish { swim(): void }
interface Bird { fly(): void }
function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim() // ✅ Fish
  } else {
    animal.fly()  // ✅ Bird
  }
}

// 4. 自定义类型守卫（返回类型为 val is Type）
interface Square { kind: 'square'; size: number }
interface Circle { kind: 'circle'; radius: number }
type Shape = Square | Circle

function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square'
}
function calculateArea(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size // ✅ Shape 收窄为 Square
  }
  return Math.PI * shape.radius ** 2 // ✅ Circle
}

// 5. 可判别联合（Discriminated Union）
type Shape2 =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'triangle'; base: number; height: number }

function area(shape: Shape2): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.size ** 2
    case 'triangle':
      return (shape.base * shape.height) / 2
    // TS 会检查是否穷尽了所有 case
  }
}

// 6. Array.isArray 收窄
function process(data: string | string[]) {
  if (Array.isArray(data)) {
    data.forEach(item => console.log(item)) // ✅ string[]
  } else {
    console.log(data) // ✅ string
  }
}

// 7. truthy/falsy 收窄
function processValue(val: string | null | undefined) {
  if (val) {
    console.log(val.toUpperCase()) // ✅ string（排除 null/undefined）
  } else {
    console.log('No value') // val 是 '' | null | undefined
  }
}

// 8. 等值收窄
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    // 此时 x 和 y 的类型交集：string
    console.log(x.toUpperCase())
  }
}
```

**类型守卫函数 vs 断言函数**：

```ts
// 类型守卫 — 返回 boolean 并收窄
function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

// 断言函数（TS 3.7+）— 不返回值，抛出异常收窄
function assertNumber(val: unknown): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number')
  }
}

function process(value: unknown) {
  assertNumber(value)
  // value 现在已经是 number
  console.log(value.toFixed(2))
}
```

**面试追问**：
- 自定义类型守卫和断言函数的区别？类型守卫返回 boolean，断言函数在不满足条件时抛出异常。
- 可判别联合的优势？不需要额外的类型守卫函数，通过共有字段（kind）区分联合成员，switch 穷举时类型自动收窄。
- 类型守卫在过滤数组时的应用？`arr.filter(item => item !== null)` 不能自动收窄，需要用 `(item): item is Type`。

## Q9: 声明文件（.d.ts）

声明文件描述已有 JavaScript 代码的类型信息，不包含实现。

```ts
// 全局类型声明
declare global {
  interface Window {
    __ENV__: string
  }
}

// 模块声明
declare module 'some-lib' {
  export function doSomething(): void
  export const VERSION: string
}

// 通用模块声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

**声明文件类型**：

```ts
// 1. 全局 .d.ts
// globals.d.ts
declare const APP_VERSION: string
declare function trackEvent(name: string, data?: Record<string, any>): void

declare namespace MyLib {
  interface Config {
    apiKey: string
    debug?: boolean
  }
  function init(config: Config): void
}

// 2. ES Module 声明
// my-lib.d.ts
export interface Options {
  timeout?: number
  retries?: number
}
export function request<T>(url: string, opts?: Options): Promise<T>
export const version: string

// 3. UMD 声明
export as namespace MyLib // UMD 全局访问
export function greet(name: string): string

// 4. 扩充已有类型
// 全局扩充
declare global {
  interface Array<T> {
    first(): T | undefined
    last(): T | undefined
  }
}

// 模块扩充
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    title?: string
  }
}

// 5. 声明合并
interface Document {
  createElement(tagName: 'my-button'): MyButton
  // 重载现有方法
}
interface MyButton extends HTMLElement {
  variant: 'primary' | 'secondary'
}

// 6. 三斜线指令
/// <reference types="vite/client" />
/// <reference path="./custom-types.d.ts" />
```

**书写 .d.ts 的规则**：

```ts
// 1. 声明函数
declare function formatDate(date: Date, format?: string): string

// 2. 声明类
declare class Validator {
  constructor(rules: Record<string, any>)
  validate(data: unknown): { valid: boolean; errors: string[] }
}

// 3. 声明对象
declare const $: {
  (selector: string): HTMLElement | null
  ajax(options: Record<string, any>): Promise<any>
  version: string
}

// 4. 声明枚举（纯类型枚举）
declare enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

// 5. 重载声明
interface Document {
  getElementById(elementId: string): HTMLElement | null
}
// 重载
declare function createElement(tag: 'div'): HTMLDivElement
declare function createElement(tag: 'a'): HTMLAnchorElement
declare function createElement(tag: string): HTMLElement

// 6. 泛型声明
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>
```

**面试追问**：
- declare 关键字的作用？告诉 TS 编译器某个类型/变量/模块已经存在，不需要检查实现。
- 三斜线指令和 import 声明的区别？三斜线是 TS 早期模块系统，用于手动声明文件之间的依赖，现在推荐用 import。
- 声明合并的常见用途？扩展第三方库的类型（如给 express 的 Request 加 user 属性）、全局类型增强。

## Q10: 枚举（enum）

```ts
// 数字枚举（默认从 0 开始）
enum Direction { Up, Down, Left, Right }
Direction.Up      // 0
Direction[0]      // 'Up'（反向映射）

// 字符串枚举（无反映射）
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

// const enum（编译时内联，无运行时代码）
const enum Size { Small = 1, Medium = 2 }

// 联合类型替代枚举（推荐）
type Status = 'active' | 'inactive'
// 更简洁，tree-shakable
```

**枚举详解**：

```ts
// 1. 数字枚举 — 自动自增
enum Color {
  Red,      // 0
  Green,    // 1
  Blue,     // 2
  Yellow = 10, // 10
  Purple,   // 11（接续 10）
}
console.log(Color.Red)    // 0
console.log(Color[1])     // 'Green'（反向映射）
console.log(Color[10])    // 'Yellow'

// 编译后的 JS 代码
// var Color;
// (function (Color) {
//   Color[Color["Red"] = 0] = "Red";
//   Color[Color["Green"] = 1] = "Green";
//   ...
// })(Color || (Color = {}));

// 2. 字符串枚举 — 更易调试，无反向映射
enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
HttpMethod.GET // 'GET'
// HttpMethod[0] // undefined（无反向映射）

// 3. 混合枚举（不推荐）
enum Mixed {
  Yes = 'YES',
  No = 0,
}

// 4. const enum — 编译时内联
const enum Directions {
  Up = 'UP',
  Down = 'DOWN',
}
// const 用法
move(Directions.Up)
// 编译后：move("UP") — Directions.Up 被替换为字面量
// 不生成 Directions 对象

// 5. 外部枚举（declare enum）
declare enum ExternalColors {
  Red, Green, Blue
}
// 只声明类型信息，实现由其他 JS 提供
```

**枚举 vs 联合类型的选择**：

```ts
// 联合类型（推荐）
type State = 'loading' | 'success' | 'error'

// 优点：
// 1. 更简单，没有运行时代码
// 2. tree-shakable
// 3. 可以和字面量类型配合
// 4. 容易被类型推断

// 枚举
enum StateEnum {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
// 优点：
// 1. 可以通过名字反向查找值
// 2. 可以通过值反向查找名字
// 3. 编译为对象，可以在运行时使用
// 4. 更适合需要遍历枚举值的场景
```

**面试追问**：
- 数字枚举的反向映射如何实现？TS 编译为双向映射对象 `Color[Color["Red"] = 0] = "Red"`。
- const enum 和普通枚举的区别？const enum 编译时内联为字面量，不生成代码，但禁用反向映射，且不能用在 --isolatedModules 中。
- 为什么推荐用联合类型替代枚举？联合类型更简洁、tree-shakable、类型推断更好，且不会生成额外的运行时代码。

## Q11: any / unknown / never / void

```ts
// any — 跳过类型检查（尽量不用）
let x: any = 1
x = 'string'  // ✅ 任何操作都允许

// unknown — 安全版 any（必须类型收窄后才能用）
let y: unknown = 1
y.toFixed()   // ❌
if (typeof y === 'number') y.toFixed() // ✅

// never — 不会发生的值（函数抛出异常、无限循环）
function throwError(): never { throw new Error() }
type NonEmpty = string & number  // never

// void — 没有返回值
function log(): void { console.log('log') }
```

**深入理解**：

```ts
// any — 类型检查的逃生舱
let value: any
value = 42
value = 'hello'
value.foo.bar.baz() // ✅ 全部通过（运行时可能报错）
value() // ✅ 也可以（但运行时可能不是函数）

// 危险：
function unsafe(data: any) {
  // 完全失去类型保护
  return data.user.profile.name // TS 不检查
}

// unknown — 类型安全的 any
function safeProcess(data: unknown) {
  // 必须先收窄类型
  if (typeof data === 'string') {
    return data.toUpperCase()
  }
  if (Array.isArray(data)) {
    return data.length
  }
  if (data && typeof data === 'object') {
    // 对象类型需要进一步收窄
    if ('name' in data) {
      return (data as { name: string }).name
    }
  }
  throw new Error('Unknown data type')
}

// never — 穷举检查利器
type Direction = 'up' | 'down' | 'left' | 'right'

function move(direction: Direction) {
  switch (direction) {
    case 'up': break
    case 'down': break
    case 'left': break
    // 如果新增方向忘记处理...
    default:
      // exhaustive check
      const _exhaustive: never = direction
      throw new Error(`Unhandled direction: ${direction}`)
  }
}

// void vs undefined
function returnsVoid(): void { return }
function returnsUndefined(): undefined { return }
// void 类型可以返回 undefined，但 undefined 类型必须返回 undefined

// 函数类型的 void
type VoidFn = () => void
const fn1: VoidFn = () => 42 // ✅ void 类型允许返回任何值（只是被忽略）
const fn2: VoidFn = () => { return 'hello' } // ✅
// 但：
function explicitVoid(): void {
  return 42 // ❌ 函数具体返回类型声明为 void 时不能返回
}
```

**类型层次**：

```ts
// 类型层级（从宽到窄）：
// any > unknown > {} > object > 具体类型 > never
// 具体类型字面量 > 基础类型 > never

// unknown 可以赋值给 unknown | any，但不能赋值给其他类型
let unknownVal: unknown
let strVal: string = unknownVal // ❌
let anyVal: any = unknownVal   // ✅

// never 是所有类型的子类型
let neverVal: never
let stringFromNever: string = neverVal // ✅
let numberFromNever: number = neverVal // ✅

// 应用场景总结
function handleNever(x: never): void {
  // 只能处理 never 类型
}

// never 自动推断：
function checkValue(v: string | number) {
  if (typeof v === 'string') { /* v: string */ }
  else if (typeof v === 'number') { /* v: number */ }
  else { /* v: never — 所有分支已穷举 */ }
}
```

| 类型 | 可赋值性 | 可操作 | 典型用途 |
|------|---------|--------|---------|
| any | 任何 | 任何操作都允许 | 迁移期、第三方 JS 互操作 |
| unknown | 只能赋值给 any/unknown | 必须收窄 | 类型安全的 any |
| never | 可赋值给任何类型 | 无任何操作 | 穷举检查、无限循环 |
| void | 忽略返回值 | 只能赋值 undefined | 无返回值的函数 |

**面试追问**：
- any 和 unknown 的区别？any 跳过所有检查（不安全），unknown 必须收窄才能使用（安全）。
- never 类型的实际应用场景？穷举检查（switch default 分支）、条件类型中排除分支、联合类型过滤。
- void 和 undefined 的区别？void 表示函数返回值的类型被忽略（可以返回 undefined），更常用于回调。undefined 是具体值。

## Q12: satisfies 关键字（TS 4.9+）

```ts
// satisfies 检查类型但不改变推断结果
const palette = {
  red: [255, 0, 0],
  blue: 'rgb(0,0,255)',
} satisfies Record<string, string | number[]>

// palette.red 推断为 number[]（不是 string | number[]）
palette.red.map(x => x)  // ✅
```

**satisfies vs 类型注解**：

```ts
// 类型注解 — 推断被覆盖
type Colors = Record<string, string | number[]>

// ❌ 使用类型注解会让所有属性变成 string | number[]
const palette1: Colors = {
  red: [255, 0, 0],
  blue: 'rgb(0,0,255)',
}
// palette1.red 类型是 string | number[]
// palette1.red.map(x => x) // ❌（map 不是 string 的方法）

// ✅ 使用 satisfies 保留具体类型
const palette2 = {
  red: [255, 0, 0],
  blue: 'rgb(0,0,255)',
} satisfies Colors
// palette2.red 类型是 number[]（保留了具体推断）
// palette2.red.map(x => x) // ✅

// 同时检查是否满足约束
const palette3 = {
  // green: 42 // ❌ 不满足 string | number[]
} satisfies Colors
```

**更多 satisfy 用法**：

```ts
// 1. 对象类型检查 + 保留字面量
const user = {
  name: 'Alice',
  role: 'admin' as const,
} satisfies { name: string; role: string }
// user.role 类型是 'admin'（不是 string）

// 2. 字面量类型检查
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
const methods = {
  read: 'GET',
  write: 'POST',
  update: 'PUT',
} satisfies Record<string, HttpMethod>
// methods.read 类型是 'GET'（不是 string）

// 3. 嵌套类型检查
interface Config {
  api: string
  timeout: number
}
const appConfig = {
  api: 'https://api.example.com',
  timeout: 5000,
  // extra: true // ❌ 多出来的属性不会报错（satisfies 只检查是否符合）
} satisfies Config

// 4. 函数类型
const handler = ((req: Request) => {
  return new Response('ok')
}) satisfies (req: Request) => Response
// handler 的类型是 (req: Request) => Response

// 5. 数组 + 元组
const arr = [1, 'hello', true]
const tuple = [1, 'hello', true] as const

const checked = arr satisfies (string | number | boolean)[]
// arr 类型保持 (string | number | boolean)[]
```

**面试追问**：
- satisfies 和类型注解的区别？类型注解强制转换类型并覆盖推断，satisfies 只检查不改变推断。
- satisfies 和 as 的区别？as 是类型断言（告诉 TS"我知道我在做什么"），satisfies 是类型证明（检查类型是否兼容）。
- satisfies 的实际应用？保留对象属性具体字面量类型的同时检查接口约束、检查 const 对象是否符合 Record 类型但保留值类型。

## Q13: 模板字面量类型（TS 4.1+）

```ts
type EventName = `on${Capitalize<string>}`
type ClickEvent = `onClick`  // 'onClick'
type ChangeEvent = `onChange` // 'onChange'

type HttpMethod = 'GET' | 'POST'
type ApiPath = `/api/${Lowercase<HttpMethod>}`
// '/api/get' | '/api/post'
```

**模板字面量 + 联合类型**：

```ts
// 1. 联合类型自动展开
type Vertical = 'top' | 'bottom'
type Horizontal = 'left' | 'right'
type Position = `${Vertical}-${Horizontal}`
// 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

// 2. CSS 属性
type CssProperty = 'margin' | 'padding'
type Side = 'top' | 'right' | 'bottom' | 'left'
type CssSide = `${CssProperty}-${Side}`
// 'margin-top' | 'margin-right' | ... | 'padding-left'

// 3. 事件名
type Events = 'click' | 'focus' | 'blur' | 'change'
type EventHandler = `on${Capitalize<Events>}`
// 'onClick' | 'onFocus' | 'onBlur' | 'onChange'

// 4. 自动生成配置键
type FeatureFlags = 'darkMode' | 'autoSave' | 'notifications'
type FlagConfig = `enable${Capitalize<FeatureFlags>}`
// 'enableDarkMode' | 'enableAutoSave' | 'enableNotifications'
```

**类型字符串操作**：

```ts
// 内置字符串操作类型
type Upper = Uppercase<'hello'> // 'HELLO'
type Lower = Lowercase<'HELLO'> // 'hello'
type Capital = Capitalize<'hello'> // 'Hello'
type Uncapital = Uncapitalize<'Hello'> // 'hello'

// 提取/匹配
type ExtractName<T extends string> = T extends `get${infer Name}` ? Uncapitalize<Name> : never
type Field = ExtractName<'getName'> // 'name'

type RemovePrefix<T extends string> = T extends `:${infer Rest}` ? Rest : T
type Cleaned = RemovePrefix<':hover'> // 'hover'

// CSS 解析
type CssValue = '10px' | '20px' | 'auto'
type ExtractNumber<T extends string> = T extends `${infer N}px` ? N extends `${number}` ? N : never : never
type PxValue = ExtractNumber<'10px'> // '10'
```

**实际应用**：

```ts
// 1. 类型安全的路由
type Route = '/users' | '/users/:id' | '/posts' | '/posts/:id'
type ExtractParams<T extends Route> = {
  [K in T as K extends `${infer _}:${infer Param}` ? Param : never]: string
}
// 简化的参数推导

// 2. 事件系统
type EventTypes = 'click' | 'hover' | 'drag'
type EventPayload = {
  click: { x: number; y: number }
  hover: { element: HTMLElement }
  drag: { dx: number; dy: number }
}
type EventHandler = {
  [K in EventTypes as `on${Capitalize<K>}`]: (payload: EventPayload[K]) => void
}
// { onClick: (p: { x,y }) => void; onHover: (p: { element }) => void; ... }

// 3. 查询参数
type QueryParams = 'page' | 'limit' | 'sort' | 'filter'
type QueryString = { [K in QueryParams as `${K}`]?: string }
```

**面试追问**：
- 模板字面量类型的组合爆炸问题？当有多层联合类型展开时，类型数量是笛卡尔积 × 联合成员数。大量组合可能导致类型计算性能问题。
- 内置字符串操作类型的局限？只操作字面量类型，不能处理 union 中成员数量很多的情况。
- 模板字面量类型在 Redux action 类型中的应用？可以用 `{type: `counter/${'increment' | 'decrement'}`}` 来约束 action type。

## Q14: 装饰器

装饰器是一种特殊声明，可以附加到类、方法、属性、参数上，用于修改其行为。TS 中的装饰器是实验性特性（需开启 experimentalDecorators）。

```ts
// 类装饰器
function logClass(target: Function) {
  console.log(`Class ${target.name} defined`)
}

@logClass
class MyClass {}

// 属性装饰器
function readonly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false })
}

// 方法装饰器
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function(...args: any[]) {
    console.log(`Call: ${key}`, args)
    return original.apply(this, args)
  }
}
```

**装饰器详解**：

```ts
// 1. 类装饰器 — 接收构造函数
function sealed<T extends new (...args: any[]) => any>(constructor: T) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}
@sealed
class SealedClass {}

// 装饰器工厂 — 带参数
function logLevel(level: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value
    descriptor.value = function(...args: any[]) {
      console.log(`[${level}] ${key}:`, args)
      return original.apply(this, args)
    }
  }
}

class Service {
  @logLevel('INFO')
  getUser(id: number) {
    return { id, name: 'Alice' }
  }

  @logLevel('WARN')
  deleteUser(id: number) {
    console.log(`Deleting user ${id}`)
  }
}

// 2. 方法装饰器
function measure(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function(...args: any[]) {
    const start = performance.now()
    const result = original.apply(this, args)
    console.log(`${key} took ${performance.now() - start}ms`)
    return result
  }
  return descriptor
}

class Analytics {
  @measure
  heavyComputation(data: number[]) {
    return data.sort().reduce((a, b) => a + b, 0)
  }
}

// 3. 属性装饰器
function defaultValue(value: any) {
  return (target: any, key: string) => {
    const descriptor = Object.getOwnPropertyDescriptor(target, key) || {}
    descriptor.value = value
    Object.defineProperty(target, key, descriptor)
  }
}

class Settings {
  @defaultValue(3000)
  timeout!: number

  @defaultValue(3)
  retries!: number
}
console.log(new Settings().timeout) // 3000

// 4. 参数装饰器
function validate(target: any, key: string, parameterIndex: number) {
  // 标记某个参数需要验证
  const existing = Reflect.getOwnMetadata('validate', target, key) || []
  existing.push(parameterIndex)
  Reflect.defineMetadata('validate', existing, target, key)
}

class Validator {
  save(@validate userId: number, @validate data: any) {
    // 实际验证逻辑...
  }
}
```

**装饰器的执行顺序**：

```ts
// 执行顺序：
// 1. 实例成员装饰器（从内到外，从下到上）
// 2. 静态成员装饰器（从内到外，从下到上）
// 3. 构造函数参数装饰器（从右到左）
// 4. 类装饰器（从下到上，如果有多个）

function first() { console.log('first()'); return () => {} }
function second() { console.log('second()'); return () => {} }

@first()
@second()
class Example {
  @first() @second()
  method() {}
}
// 输出顺序：
// first() factory
// second() factory
// first() factory
// second() factory
// second() decorator
// first() decorator
// second() decorator (method)
// first() decorator (method)
// first() decorator (class)
```

**面试追问**：
- 装饰器和高阶函数的区别？装饰器是声明式的元编程语法，高阶函数是运行时包装。装饰器本质上是编译时的函数调用。
- 为什么装饰器在 TS 中是实验性特性？因为 TC39 的装饰器提案仍在变动，TS 的实现是早期版本，未来可能不兼容。
- 装饰器和 Reflect.metadata 的关系？装饰器常与 Reflect.metadata 配合实现依赖注入、参数验证、ORM 等框架特性。

## Q15: 协变和逆变

协变和逆变描述了类型参数在子类型关系中的变化方向。这是理解 TS 类型兼容性的基础。

```ts
// 协变（Covariance）：保持类型关系
// 'cat' extends 'animal' → Cat[] extends Animal[]
// ✅ 只读属性是协变的

// 逆变（Contravariance）：反转类型关系
// 'cat' extends 'animal' → (animal => void) extends (cat => void)
// ✅ 函数参数是逆变的

// 不变（Invariance）：必须精确匹配
// 'cat' extends 'animal' → 可写属性不变

// TypeScript 函数参数是双变（bivariant）——不报错
// strictFunctionTypes: true 后变为逆变（更安全）
```

**详细解释**：

```ts
// 1. 协变 — 数组
class Animal { name = '' }
class Cat extends Animal { meow() {} }
class Dog extends Animal { bark() {} }

let cats: Cat[] = [new Cat(), new Cat()]
let animals: Animal[] = cats // ✅ 协变：Cat[] 可以赋值给 Animal[]

animals.push(new Dog()) // ❌ 运行时错误！cats 里混入了 Dog
// 这就是 TS 中数组是可变的（允许 push），但数组类型仍是协变的

// 2. 逆变 — 函数参数
type FeedAnimal = (a: Animal) => void
type FeedCat = (c: Cat) => void

let feedAnimal: FeedAnimal = (a: Animal) => console.log(`Feed ${a.name}`)
let feedCat: FeedCat = feedAnimal // ✅ 逆变：Animal => void 可以赋值给 Cat => void

// 为什么是逆变的？
// 如果 feedCat 被调用，它期望 Cat（有 meow），但 feedAnimal 只处理 Animal（可能没有 meow）
// 但 TS 默认允许（双变），strictFunctionTypes 时不允许

// 3. 函数返回类型是协变的
type Getter<T> = () => T
let getAnimal: Getter<Animal> = () => new Animal()
let getCat: Getter<Cat> = () => new Cat()
getAnimal = getCat // ✅ 协变：返回 Cat 的函数可以赋值给返回 Animal 的函数

// 4. 不变 — 可写属性（读写属性）
interface Box<T> {
  value: T // 可读可写
}
let boxAnimal: Box<Animal> = { value: new Animal() }
let boxCat: Box<Cat> = { value: new Cat() }
// boxAnimal = boxCat // ❌ 不变（可写属性导致不能赋值）
// 因为可以 boxAnimal.value = new Dog()，但 boxCat.value 本应是 Cat
```

**strictFunctionTypes 的影响**：

```ts
// 默认（strictFunctionTypes: false）— 双变
type Fn1 = (x: Animal) => void
type Fn2 = (x: Cat) => void
let f1: Fn1 = (x: Animal) => {}
let f2: Fn2 = f1 // ✅ 默认允许（双变）

// strict（strictFunctionTypes: true）— 逆变
type Fn1Strict = (x: Animal) => void
type Fn2Strict = (x: Cat) => void
let f1s: Fn1Strict = (x: Animal) => {}
let f2s: Fn2Strict = f1s // ❌ 逆变检查失败

let f2s2: Fn2Strict = (x: Cat) => {}
let f1s2: Fn1Strict = f2s2 // ✅ 逆变：Cat => void 可以赋值给 Animal => void
// 因为如果 f1s2 被调用，它传 Animal，但实际函数处理 Cat（有额外属性但无害）
```

**实际应用**：

```ts
// 1. 函数参数的协变/逆变
interface EventListener<T> {
  (event: T): void
}

// 更具体的 event 类型的监听器能处理更通用的 event？
// 不，需要逆变

// 2. 不变的实际例子
interface MutableSet<T> {
  add(item: T): void
  has(item: T): boolean
}
// 如果 MutableSet<Animal> 可以赋值给 MutableSet<Cat>
// 那 add(new Dog()) 会破坏 Cat 集合

// Readonly 集合则是协变
interface ReadonlySet<T> {
  has(item: T): boolean
}
// ReadonlySet<Cat> 可以赋值给 ReadonlySet<Animal>（只读，不会新增）

// 3. 泛型中的变体标注（Flow 支持，TS 不支持显式标注）
// TS 根据使用位置自动推断
interface Wrapper<T> {
  // T 在协变位置（返回类型）
  get(): T
  // T 在逆变位置（参数）
  // set(value: T): void
}
```

**面试追问**：
- 为什么函数参数是逆变的？因为函数调用时传入的实参比形参更具体（子类型），所以在类型理论中参数位置是逆变的。
- strictFunctionTypes 开启了什么？只检查函数参数的位置是否为严格逆变，默认是双变（历史和兼容考虑）。
- 数组为什么是协变的？方便性考虑，但实际不安全（可以传入子类型不匹配的元素）。ReadonlyArray 是安全的协变。
