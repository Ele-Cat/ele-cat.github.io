# Vite 面试题

## Q1: Vite 的核心原理
- **开发服务器**：基于 ESM（原生 ES Module），无需打包，按需编译
- **构建**：使用 Rollup 进行生产打包
- **HMR**：基于 ESM 的模块热更新，只更新变动的模块

### 与传统构建工具（Webpack）的对比

| 维度 | Vite | Webpack |
|------|------|---------|
| 开发启动 | 秒级（无需打包） | 分钟级（需要打包） |
| HMR 速度 | 模块级 | 模块级（但大项目变慢） |
| 构建 | Rollup | 自身 |
| 开发时编译 | 按需编译 | 预编译所有模块 |
| ESM 支持 | 原生 | 转译 |

## Q2: Vite 为什么比 Webpack 快？
1. **启动时**：Vite 按需编译，只有请求到的模块才编译，Webpack 需要构建整个依赖图
2. **HMR**：Vite 只替换变动的模块，Webpack 需要重新构建该模块及其依赖链
3. **预构建**：Vite 用 esbuild（Go 编写）预构建依赖，Webpack 用 JS 处理

## Q3: Vite 的预构建是什么？
- 将 CommonJS/UMD 依赖转为 ESM
- 将多个内部模块合并为一个模块，减少请求数
- 使用 esbuild 完成，速度极快

## Q4: Vite 支持哪些框架？
- Vue（官方 @vitejs/plugin-vue）
- React（官方 @vitejs/plugin-react）
- Svelte、Solid、Lit 等

## Q5: Vite 生产构建为什么用 Rollup 而不是 esbuild？
- Rollup 有更成熟的打包优化（Tree-shaking、代码分割）
- esbuild 打包输出的代码体积和质量暂不如 Rollup
- esbuild 用于预构建，Rollup 用于最终打包

## Q6: Vite 环境变量
```js
// .env 文件
VITE_API_URL=https://api.example.com

// 使用
import.meta.env.VITE_API_URL
```

只有 `VITE_` 前缀的变量才会暴露给客户端。

## Q7: 如何配置 Vite 代理？
```js
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
}
```

## Q8: Vite 的优缺点
**优点**：启动快、HMR 快、配置简洁、生态完善
**缺点**：对复杂 Webpack 配置迁移成本高、开发与构建用不同工具、部分老兼容性需额外配置
