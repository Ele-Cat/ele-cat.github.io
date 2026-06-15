# Node.js 面试题

## Q1: Node.js 的特点
- **事件驱动**：基于事件循环处理请求，非阻塞 I/O
- **单线程**：JavaScript 主线程单线程，通过事件循环处理并发
- **跨平台**：基于 libuv 实现跨平台异步 I/O

## Q2: 事件循环（Event Loop）
Node.js 的事件循环分阶段：

```
timers → pending callbacks → idle/prepare → poll → check → close
```

- **timers**：执行 setTimeout/setInterval 回调
- **poll**：检索新的 I/O 事件，执行 I/O 回调
- **check**：执行 setImmediate 回调
- **close**：执行 close 事件回调

**process.nextTick** 优先级最高，在当前阶段结束前执行。

## Q3: CommonJS 和 ES Module 的区别

| 维度 | CommonJS | ES Module |
|------|----------|-----------|
| 语法 | require/module.exports | import/export |
| 加载 | 同步 | 异步 |
| 运行时 | 运行时加载 | 静态编译 |
| 值拷贝/引用 | 值拷贝 | 动态引用 |
| tree-shaking | 不支持 | 支持 |

## Q4: Buffer 是什么？
Buffer 用于处理二进制数据流，在 Node.js 中全局可用。

```js
const buf = Buffer.from('hello', 'utf8')
const base64 = buf.toString('base64')
```

## Q5: Stream 有哪些类型？
- **Readable**：可读流（如 `fs.createReadStream`）
- **Writable**：可写流（如 `fs.createWriteStream`）
- **Duplex**：可读可写（如 `net.Socket`）
- **Transform**：转换流（如 `zlib.createGzip`）

**优点**：处理大文件时节省内存，边读边处理。

## Q6: 如何处理异步错误？
- Promise 链式 `.catch()`
- async/await 配合 try/catch
- 回调函数使用 error-first 模式（`(err, data)`）
- 未捕获异常：`process.on('uncaughtException')`

## Q7: Cluster 模块的作用？
利用多核 CPU，创建多个 Worker 进程共享同一个端口。

```js
const cluster = require('cluster')
const os = require('os')

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork())
} else {
  // Worker 进程启动 HTTP 服务
}
```

## Q8: process.nextTick vs setImmediate
- **process.nextTick**：在当前操作完成后立即执行，优先级最高
- **setImmediate**：在事件循环的 check 阶段执行

```js
setImmediate(() => console.log('immediate'))
process.nextTick(() => console.log('nextTick'))
// 输出: nextTick → immediate
```

## Q9: 常见的 Node.js 框架
- **Express**：最流行的轻量级框架
- **Koa**：基于 async/await，更现代
- **NestJS**：企业级 TypeScript 全栈框架
- **Fastify**：高性能，低开销
