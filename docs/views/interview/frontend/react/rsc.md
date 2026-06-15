# Server Components 和 SSR 有什么区别？

## 核心差异

| | 传统 SSR | Server Components |
|--|---------|-----------------|
| 渲染时机 | 请求时 | 构建时或请求时 |
| JS 体积 | 全量发送到客户端 | **零 JS 发送到客户端** |
| 交互能力 | 水合后可以交互 | **不能有交互**（无 useState/useEffect） |
| 数据获取 | 页面级，整页刷新 | 组件级，精准按需 |

## RSC 示例

```tsx
// ServerComponent.tsx — 不会到浏览器端
// 可以直接访问数据库、文件系统
export default async function ProductList() {
  const products = await db.product.findMany() // 直接查库
  return (
    <ul>
      {products.map(p => (
        <AddToCart key={p.id} product={p} />
      ))}
    </ul>
  )
}
```

## 关键规则

RSC 可以 import Client Component，反之不行。`'use client'` 是边界。

## 面试追问

**Q: RSC 解决了什么问题？**
减少客户端 JS 体积 + 服务端直出数据 + 组件级数据获取（以前只有页面级 getServerSideProps）。
