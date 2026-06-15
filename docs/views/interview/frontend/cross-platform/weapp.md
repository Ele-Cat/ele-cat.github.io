# 微信小程序面试题

## Q1: 小程序和 H5 的区别

| 维度 | 小程序 | H5 |
|------|--------|-----|
| 运行环境 | 微信原生环境 | 浏览器 |
| 渲染 | 原生渲染 + WebView | DOM/BOM |
| 入口 | 微信扫一扫/搜索 | URL 链接 |
| 存储 | 本地缓存 10MB+ | localStorage |
| 更新 | 审核发布 | 实时生效 |
| 开发语言 | 自定义 WXML/WXSS/JS | HTML/CSS/JS |

## Q2: 小程序的生命周期

### 应用生命周期
- `onLaunch`：小程序初始化完成时触发（全局一次）
- `onShow`：小程序启动或从后台切到前台时
- `onHide`：小程序切到后台时

### 页面生命周期
- `onLoad`：页面加载时触发（只一次）
- `onShow`：页面显示时触发
- `onReady`：页面初次渲染完成
- `onHide`：页面隐藏时
- `onUnload`：页面卸载时

## Q3: WXML 和 HTML 的区别
- 没有 div/p/span，使用 view/text/image 等标签
- 数据绑定用双大括号 `{{}}`，不是 innerHTML
- 条件渲染：`wx:if` 指令
- 列表渲染：`wx:for` 指令
- 事件绑定：`bindtap` / `catchtap`，不是 onclick

## Q4: 小程序如何传参？
1. **URL 传参**：`navigateTo({ url: '/pages/detail?id=1' })`
2. **全局数据**：`getApp().globalData`
3. **缓存**：`wx.setStorageSync('key', value)`
4. **EventChannel**：页面间通信
5. **组件触发事件**：`triggerEvent`

## Q5: setData 的注意事项
```js
// 注意：直接修改 this.data 不会更新视图
this.data.name = 'new' // 错误

// 必须通过 setData
this.setData({ name: 'new' }) // 正确
```

- setData 是异步的，频繁调用会导致性能问题
- 单次设置数据不要超过 1MB
- 避免一次性设置大量不必要的数据

## Q6: 小程序性能优化
1. **减少 setData 频率**：合并多次为一次
2. **降低 setData 数据量**：只传变化的部分
3. **使用 WXS**：在视图层处理复杂计算
4. **分包加载**：按需加载子包
5. **图片优化**：使用 CDN + webP + 懒加载
6. **避免过多的 wx:if**

## Q7: 小程序和 UniApp / Taro 的关系
- **UniApp**：一套代码编译到多端（小程序/H5/App），基于 Vue
- **Taro**：一套代码编译到多端，支持 React/Vue 语法

两者都解决"多端复用"问题，但运行时包体积比原生小程序大。

## Q8: 自定义组件
```js
Component({
  properties: { title: String },
  data: { count: 0 },
  methods: {
    handleTap() {
      this.setData({ count: this.data.count + 1 })
      this.triggerEvent('change', { count: this.data.count })
    }
  }
})
```
