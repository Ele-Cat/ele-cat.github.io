# HTTP 面试题

## Q1: HTTP 和 HTTPS 的区别
- **HTTPS** = HTTP + TLS/SSL 加密传输
- HTTPS 默认端口 443，HTTP 默认端口 80
- HTTPS 需要 CA 证书，保证身份验证和数据完整性

## Q2: HTTP 1.0 / 1.1 / 2.0 / 3.0 的区别

| 版本 | 特点 |
|------|------|
| HTTP 1.0 | 短连接，每次请求重新建立 TCP |
| HTTP 1.1 | 长连接（keep-alive）、管道化、Host 头 |
| HTTP 2.0 | 多路复用、头部压缩（HPACK）、服务器推送、二进制分帧 |
| HTTP 3.0 | 基于 QUIC（UDP），解决队头阻塞 |

## Q3: HTTP 请求方法

| 方法 | 用途 | 幂等 | 安全 |
|------|------|------|------|
| GET | 获取资源 | ✓ | ✓ |
| POST | 创建资源 | ✗ | ✗ |
| PUT | 更新/替换 | ✓ | ✗ |
| PATCH | 部分更新 | ✗ | ✗ |
| DELETE | 删除资源 | ✓ | ✗ |
| HEAD | 获取响应头 | ✓ | ✓ |
| OPTIONS | 查询支持方法 | ✓ | ✓ |

## Q4: HTTP 状态码

### 1xx（信息）
- **101**：切换协议（WebSocket 升级）

### 2xx（成功）
- **200**：成功
- **201**：已创建
- **204**：无内容

### 3xx（重定向）
- **301**：永久重定向
- **302**：临时重定向
- **304**：未修改（缓存有效）

### 4xx（客户端错误）
- **400**：请求参数错误
- **401**：未认证
- **403**：无权限
- **404**：资源不存在
- **405**：方法不允许
- **429**：请求过多

### 5xx（服务端错误）
- **500**：服务器内部错误
- **502**：网关错误
- **503**：服务不可用
- **504**：网关超时

## Q5: GET 和 POST 的区别
- GET 参数在 URL 中，POST 在请求体中
- GET 有长度限制（浏览器/服务器限制），POST 无
- GET 可缓存、可收藏为书签，POST 不行
- GET 不应修改服务器数据（幂等），POST 用于提交数据
- GET 比 POST 更不安全（URL 明文参数）

## Q6: 浏览器缓存策略

### 强缓存
- **Expires**：绝对过期时间（HTTP 1.0）
- **Cache-Control: max-age=3600**：相对过期时间（HTTP 1.1，优先级更高）

### 协商缓存
- **Last-Modified / If-Modified-Since**：最后修改时间
- **ETag / If-None-Match**：内容哈希（优先级更高）

流程：强缓存命中 → 直接使用缓存 → 不发送请求；强缓存失效 → 协商缓存 → 返回 304 或 200。

## Q7: Cookie / localStorage / sessionStorage 的区别

| 特性 | Cookie | localStorage | sessionStorage |
|------|--------|--------------|----------------|
| 容量 | 4KB | 5-10MB | 5-10MB |
| 发送到服务器 | ✓（每次请求自动带） | ✗ | ✗ |
| 过期时间 | 可设置 | 永久 | 关闭标签页 |
| 作用域 | 同源 | 同源 | 同源同标签 |

## Q8: 跨域问题（CORS）
浏览器同源策略限制：协议、域名、端口任一不同即跨域。

解决方案：
- **CORS**：服务端设置 `Access-Control-Allow-Origin`
- **JSONP**：利用 script 标签不受同源限制（仅 GET）
- **代理服务器**：开发环境 Webpack/Vite proxy 配置
- **Nginx 反向代理**：生产环境

### CORS 预检请求
- 非简单请求（PUT/DELETE/自定义头部）会先发 OPTIONS 请求
- 服务端需返回 `Access-Control-Allow-Methods` 和 `Access-Control-Allow-Headers`
