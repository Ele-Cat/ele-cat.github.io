---
outline: [2, 3]
---

# 自定义工具函数库

[学习地址](https://zxfjd3g.github.io/ec_utils-docs/)

## 打包工具库

### 01. 创建工具包项目

#### 1.1 安装 Node

[Node 官网](https://nodejs.org/en/)

#### 1.2 创建项目

```sh
# 创建一个空的项目文件夹: ec-utils
# 在文件夹下执行命令
npm init -y
```

#### 1.3 安装依赖

```sh
npm i webpack webpack-cli
```

#### 1.4 配置 webpack

- `webpack.config.js`

```js
const path = require("path");
module.exports = {
  // 模式
  mode: "development", // 也可以使用 production
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, "dist"),
    // 打包文件
    filename: "ec-utils.js",
    // 向外暴露的对象的名称
    library: "ecUtils",
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: "umd",
  },
};
```

#### 1.5 在入口 JS 中暴露功能

- `src/index.js`

```js
export function test() {
  document.write("测试自定义包");
  console.log("test()");
}
```

#### 1.6 配置打包命令

- `package.json`

```json
"scripts": {
  "build:watch": "webpack --watch"
},
```

#### 1.7 对项目进行打包

```sh
npm run build:watch
```

#### 1.8 测试使用自定义包

```html
<body>
  <script src="../dist/ec-utils.js"></script>
  <script>
    ecUtils.test();
  </script>
</body>
```

### 02. 发布到 npm 中央仓库

#### 2.1 完善 package.json

- 注意:
  - name: 必须是唯一的名称(在 npm 在线中央仓库中没有同名的)
  - main: 必须指定为打包生成的 js 文件
  - keywords: 指定一些方便别的程序员搜索到当前库的关键字

```json
{
  "name": "utils",
  "version": "1.0.0",
  "author": "xfzhang",
  "description": "尚硅谷-前端-自定义工具函数库",
  "keywords": [
    "ec",
    "utils",
    "array",
    "object",
    "function",
    "string",
    "axios",
    "event-bus",
    "pub-sub",
    "promise"
  ],
  "main": "dist/ec-utils.js",
  "license": "MIT",
  "scripts": {
    "build:watch": "webpack --watch",
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.10.0",
    "webpack-cli": "^4.2.0"
  }
}
```

#### 2.2 npm 配置

- npm 配置的中央仓库不能是淘宝镜像
- 发布前必须执行: `npm config set registry https://registry.npmjs.org/`
- 不用发布时: `npm config set registry http://registry.npm.taobao.org/`
- 查看配置: `npm config list`

#### 2.3 注册 npm 中央仓库账号

- 注册地址: https://www.npmjs.com/
- 关键信息: 用户名/密码/邮箱(需要验证)

#### 2.4 添加用户

- 执行: npm addUser
- 登陆 npm 仓库
- 依次指定用户名/密码/邮箱

#### 2.5 发布仓库

- 执行: `npm publish`
- 发布失败, 原因是库的名称重复了, 修改 name 为一个唯一值, 再发布

#### 2.6 更新代码后再发布

- 修改项目库的版本号: package.json 中的 version 从 1.0.0 改为 1.0.1, 注意一定要变大
- 修改代码后重新打包: `npm run build`
- 执行发布: `npm publish`

#### 2.7 强制删除已发布的库

- 执行: `npm unpublish --force`
- 注意: 必须在 72 小时内, 否则不能再删除

### 03. 使用自定义工具包

#### 3.1 下载工具包

```sh
# 名称是你前面指定的库的名称
npm install a-utils2
```

#### 3.2 网页中引入并使用

```html
<script src="./node_modules/a-utils2/dist/ec-utils.js"></script>
<script>
  ecUtils.test();
</script>
```

#### 3.3 模块化引入并使用

```js
// 使用ESM引入
import { test } from "a-utils2";
test();

// 使用commonjs引入
const { test } = require("a-utils2");
test();
```

## 各种自定义

### 01. 函数相关

#### 1.1 call()& apply()& bind()

##### 1.1.1 API 说明

- call()
  - 语法: call(fn, obj, ...args)
  - 功能: 执行 fn, 使 this 为 obj, 并将后面的 n 个参数传给 fn(功能等同于函数对象的 call 方法)
- apply()
  - 语法: apply(fn, obj, args)
  - 功能: 执行 fn, 使 this 为 obj, 并将 args 数组中的元素传给 fn(功能等同于函数对象的 apply 方法)
- bind()
  - 语法: bind(fn, obj, ...args)
  - 功能: 给 fn 绑定 this 为 obj, 并指定参数为后面的 n 个参数 (功能等同于函数对象的 bind 方法)

##### 1.1.2 实现说明

- 区别 call()/apply()/bind()
  - call(obj)/apply(obj): 调用函数, 指定函数中的 this 为第一个参数的值
  - bind(obj): 返回一个新的函数, 新函数内部会调用原来的函数, 且 this 为 bind()指定的第一参数的值
  - 注意: 如果 obj 是 null/undefined, this 为 window
- 应用
  - call()/apply()应用: 根据伪数组生成真数组
  - bind(): react 中组件的自定义方法 / vue 中的事件回调函数内部
- 自定义 call()/apply()
  - 给 obj 添加一个临时方法, 方法名任意, 值为当前函数
  - 通过 obj 调用这个临时方法, 并将接收的参数传入
  - 删除 obj 上的这个临时方法属性
- 自定义实现 bind()
  - 返回一个新函数
  - 在新函数内部通过原函数对象的 call 方法来执行原函数
  - 指定原函数的 this 为 obj
  - 指定参数为 bind 调用的参数和后面新函数调用的参数
    #1.1.3.编码实现
- 自定义函数对象的 call 方法

```js
/* 
自定义函数对象的call方法
*/
export function call(fn, obj, ...args) {
  console.log("call()");

  // 如果obj是undefined/null, this指定为window
  if (obj === undefined || obj === null) {
    // return fn(...args)
    obj = window;
  }

  // 给obj添加一个临时方法, 方法指向的函数就是fn
  obj.tempFn = fn;
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args);
  // 删除obj上的临时方法
  delete obj.tempFn;
  // 返回fn执行的结果
  return result;
}
```

- 自定义函数对象的 apply 方法

```js
/* 
自定义函数对象的apply方法
*/
export function apply(fn, obj, args) {
  console.log("apply()");

  // 如果obj是undefined/null, this指定为window
  if (obj === undefined || obj === null) {
    // return fn(...args)
    obj = window;
  }

  // 给obj添加一个临时方法, 方法指向的函数就是fn
  obj.tempFn = fn;
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args);
  // 删除obj上的临时方法
  delete obj.tempFn;
  // 返回fn执行的结果
  return result;
}
```

- 自定义函数对象的 bind 方法

```js
import { call } from "./call";
/* 
  自定义函数对象的bind方法
*/
export function bind(fn, obj, ...args) {
  console.log("bind()");
  // 返回一个新函数
  return (...args2) => {
    // 通过call调用原函数, 并指定this为obj, 实参为args与args2
    return call(fn, obj, ...args, ...args2);
  };
}
```

#### 1.2 函数的节流与防抖

##### 1.2.1 相关理解

- 事件频繁触发可能造成的问题?
  - 一些浏览器事件:window.onresize、window.mousemove 等，触发的频率非常高，会造成界面卡顿
  - 如果向后台发送请求，频繁触发，对服务器造成不必要的压力
- 如何限制事件处理函数频繁调用
  - 函数节流
  - 函数防抖
- 函数节流(throttle)
  - 理解:
    - 在函数需要频繁触发时: 函数执行一次后，只有大于设定的执行周期后才会执行第二次
    - 适合多次事件按时间做平均分配触发
  - 场景：
    - 窗口调整（resize）
    - 页面滚动（scroll）
    - DOM 元素的拖拽功能实现（mousemove）
    - 抢购疯狂点击（click）
- 函数防抖(debounce)
  - 理解:
    - 在函数需要频繁触发时: 在规定时间内，只让最后一次生效，前面的不生效。
    - 适合多次事件一次响应的情况
  - 场景:
    - 输入框实时搜索联想（keyup/input）
    - 区别函数节流与防抖

##### 1.2.2 API 说明

- throttle() 节流
  - 语法: throttle(callback, wait)
  - 功能: 创建一个节流函数，在 wait 毫秒内最多执行 callback 一次
- debounce() 防抖
  - 语法: debounce(callback, wait)
  - 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 callback

##### 1.2.3 编码实现

- 函数节流

```js
/* 
实现函数节流
- 语法: throttle(callback, wait)
- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次
*/
export function throttle(callback, wait) {
  let start = 0;
  // 返回一个事件监听函数(也就是节流函数)
  return function (event) {
    console.log("throttle event");
    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
    const current = Date.now();
    if (current - start > wait) {
      callback.call(this, event); // 需要指定this和参数
      start = current;
    }
  };
}
```

- 函数防抖

```js
/* 
实现函数防抖
- 语法: debounce(callback, wait)
- 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `callback`
*/
export function debounce(callback, wait) {
  // 用来保存定时器任务的标识id
  let timeoutId = -1;
  // 返回一个事件监听函数(也就是防抖函数)
  return function (event) {
    console.log("debounce event");
    // 清除未执行的定时器任务
    if (timeoutId !== -1) {
      clearTimeout(timeoutId);
    }
    // 启动延迟 await 时间后执行的定时器任务
    timeoutId = setTimeout(() => {
      // 调用 callback 处理事件
      callback.call(this, event);
      // 处理完后重置标识
      timeoutId = -1;
    }, wait);
  };
}
```

### 02. 数组相关

#### 2.1 API 列表

- map()
- reduce()
- filter()
- find()
- findIndex()
- every()
- some()
- unique1() / unique2() / unique3()
- concat()
- slice()
- flatten()
- chunk() / chunk2()
- difference()
- pull()
- pullAll()
- drop()
- dropRight()

#### 2.2 数组声明式系列方法

##### 2.2.1 使用数组声明式系列方法

- map(): 返回一个由回调函数的返回值组成的新数组
- reduce(): 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
- filter(): 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
- find(): 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
- findIndex(): 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
- every(): 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
- some(): 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。

##### 2.2.2 编码实现

- 实现数组声明式处理系列工具函数

```js
/* 
实现map()
*/
export function map(array, callback) {
  const arr = [];
  for (let index = 0; index < array.length; index++) {
    // 将callback的执行结果添加到结果数组中
    arr.push(callback(array[index], index));
  }
  return arr;
}

/*
实现reduce() 
*/
export function reduce(array, callback, initValue) {
  let result = initValue;
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index);
  }
  return result;
}

/* 
实现filter()
*/
export function filter(array, callback) {
  const arr = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index]);
    }
  }
  return arr;
}

/* 
实现find()
*/
export function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index];
    }
  }
  return undefined;
}

/* 
实现findIndex()
*/
export function findIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index;
    }
  }
  return -1;
}

/* 
 实现every()
 */
export function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) {
      // 只有一个结果为false, 直接返回false
      return false;
    }
  }
  return true;
}

/* 
实现some()
*/
export function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      // 只有一个结果为true, 直接返回true
      return true;
    }
  }
  return false;
}
```

#### 2.3 数组去重

##### 2.3.1 API 说明

- 根据当前数组产生一个去除重复元素后的新数组
- 如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]

##### 2.3.2 实现

- 方法 1: 利用 forEach()和 indexOf()
  - 说明: 本质是双重遍历, 效率差些
- 方法 2: 利用 forEach() + 对象容器
  - 说明: 只需一重遍历, 效率高些
- 方法 3: 利用 ES6 语法: from + Set 或者 ... + Set
  - 说明: 编码简洁

##### 2.3.3 编码实现

```js
/*
方法1: 利用forEach()和indexOf()
  说明: 本质是双重遍历, 效率差些
*/
export function unique1(array) {
  const arr = [];
  array.forEach((item) => {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
  });
  return arr;
}

/*
方法2: 利用forEach() + 对象容器
  说明: 只需一重遍历, 效率高些
*/
export function unique2(array) {
  const arr = [];
  const obj = {};
  array.forEach((item) => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true;
      arr.push(item);
    }
  });
  return arr;
}

/*
方法3: 利用ES6语法
    1). from + Set
    2). ... + Set
    说明: 编码简洁
*/
export function unique3(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)];
}
```

#### 2.4 数组合并与切片

##### 2.4.1 API 说明

- concat(): 合并
  - 语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]])
  - 功能: 将 n 个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
- slice(): 切片
  - 语法: var new_array = slice(array, [begin[, end]])
  - 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变

##### 2.4.2 编码实现

- 自定义数组合并

```js
/* 
语法: var new_array = concat(old_array, value1[, value2[, ...[, valueN]]]) 
功能: 将n个数组或值与当前数组合并生成一个新数组
*/
export function concat(array, ...values) {
  const arr = [...array];
  values.forEach((value) => {
    if (Array.isArray(value)) {
      arr.push(...value);
    } else {
      arr.push(value);
    }
  });
  return arr;
}
```

- 自定义数组切片

```js
/* 
  语法: var new_array = slice(oldArr, [begin[, end]])
  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
*/
export function slice(array, begin, end) {
  // 如果当前数组是[], 直接返回[]
  if (array.length === 0) {
    return [];
  }

  // 如果begin超过最大下标, 直接返回[]
  begin = begin || 0;
  if (begin >= array.length) {
    return [];
  }

  // 如果end不大于begin, 直接返回[]
  end = end || array.length;
  if (end > array.length) {
    end = array.length;
  }
  if (end <= begin) {
    return [];
  }

  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中
  const arr = [];
  for (let index = begin; index < end; index++) {
    arr.push(array[index]);
  }

  return arr;
}
```

#### 2.5 数组扁平化

##### 2.5.1 API 说明

- 语法: flatten(array)
- 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
- 如: [1, [3, [2, 4]]] ==> [1, 3, 2, 4]

##### 2.5.2.编码实现

- 方法一: 递归 + reduce() + concat()
- 方法二: ... + some() + concat()

```js
/* 
数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
  如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
*/

/*
方法一: 递归 + concat()
*/
export function flatten1(array) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten1(item));
    } else {
      result = result.concat(item);
    }
  });
  return result;
}

/*
方法二: 递归 + reduce() + concat() + some()
*/
export function flatten2(array) {
  return array.reduce((pre, item) => {
    if (Array.isArray(item) && item.some((cItem) => Array.isArray(cItem))) {
      return pre.concat(flatten2(item));
    } else {
      return pre.concat(item);
    }
  }, []);
}

/*
方法三: ... + some() + concat()
*/
export function flatten3(array) {
  let arr = [].concat(...array);
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

#### 2.6 数组分块

##### 2.6.1 API 说明

- 语法: chunk(array, size)
- 功能: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
- 如: [1, 3, 5, 6, 7, 8] 调用 chunk(arr, 4) ==> [[1, 3, 5, 6], [7,8]]

##### 2.6.2 编码实现

```js
/* 
将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
*/
export function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  size = size || 1;

  const bigArr = [];
  let smallArr = [];

  array.forEach((item) => {
    if (smallArr.length === 0) {
      bigArr.push(smallArr);
    }
    smallArr.push(item);
    if (smallArr.length === size) {
      smallArr = [];
    }
  });

  return bigArr;
}
```

#### 2.7 数组取差异

##### 2.7.1 API 说明

- 语法: difference(arr1, arr2)
- 功能: 得到当前数组中所有不在 arr 中的元素组成的数组(不改变原数组)
- 例子: difference([1,3,5,7], [5, 8]) ==> [1, 3, 7]

##### 2.7.2 编码实现

```js
/* 
difference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]
*/
export function difference(arr1, arr2 = []) {
  if (arr1.length === 0) {
    return [];
  } else if (arr2.length === 0) {
    return arr1.slice();
  }
  return arr1.filter((item) => arr2.indexOf(item) === -1);
  // return arr1.filter(item => !arr2.includes(item))
}
```

#### 2.8.删除数组中部分元素

##### 2.8.1 API 相关

- pull(array, ...values):
  - 删除原数组中与 value 相同的元素, 返回所有删除元素的数组
  - 说明: 原数组发生了改变
  - 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
- pullAll(array, values):
  - 功能与 pull 一致, 只是参数变为数组
  - 如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组 1 变为[1, 5], 返回值为[3,3,7]

##### 2.8.2 编码实现

```js
/* 
1. pull(array, ...values): 
  删除数组中与value相同的元素, 返回所有删除元素的数组
  说明: 数组发生了改变
  如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]
2. pullAll(array, values): 
  功能与pull一致, 只是参数变为数组
  如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]
*/
export function pull(array, ...values) {
  if (array.length === 0 || values.length === 0) {
    return [];
  }

  var result = [];
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (values.indexOf(item) !== -1) {
      array.splice(index, 1);
      result.push(item);
      index--;
    }
  }

  return result;
}

export function pullAll(array, values) {
  if (!values || !Array.isArray(values)) {
    return [];
  }
  return pull(array, ...values);
}
```

#### 2.9 得到数组的部分元素

##### 2.9.1 API 相关

- drop(array, count)
  - 得到当前数组过滤掉左边 count 个后剩余元素组成的数组
  - 说明: 不改变当前数组, count 默认是 1
  - 如: drop([1,3,5,7], 2) ===> [5, 7]
- dropRight(array, count)
  - 得到当前数组过滤掉右边 count 个后剩余元素组成的数组
  - 说明: 不改变当前数组, count 默认是 1
  - 如: dropRight([1,3,5,7], 2) ===> [1, 3]

##### 2.9.2 编码实现

```js
/* 
1. drop(array, count): 
   得到数组过滤掉左边count个后剩余元素组成的数组
   说明: 不改变当前数组, count默认是1
   如: drop([1,3,5,7], 2) ===> [5, 7]
2. dropRight(array, count): 
   得到数组过滤掉右边count个后剩余元素组成的数组
   说明: 不改变数组, count默认是1
   如: dropRight([1,3,5,7], 2) ===> [1, 3]
*/

export function drop(array, count = 1) {
  if (array.length === 0 || count >= array.length) {
    return [];
  }

  return array.filter((item, index) => index >= count);
}

export function dropRight(array, count = 1) {
  if (array.length === 0 || count >= array.length) {
    return [];
  }

  return array.filter((item, index) => index < array.length - count);
}
```

### 03. 对象相关

#### 3.1 API 相关

- newInstance()
- myInstanceOf()
- mergeObject()
- clone1() / clone2()
- deepClone1() / deepClone2() / deepClone3() / deepClone4()

#### 3.2 自定义 new

##### 3.2.1 API 相关

- 语法: newInstance(Fn, ...args)
- 功能: 创建 Fn 构造函数的实例对象

##### 3.2.3 编码实现

```js
export function newInstance(Fn, ...args) {
  // 创建一个空的object实例对象obj, 作为Fn的实例对象
  const obj = {};
  // 将Fn的prototype属性值赋值给obj的__proto__属性值
  obj.__proto__ = Fn.prototype;
  // 调用Fn, 指定this为obj, 参数为args列表
  const result = Fn.call(obj, ...args);
  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
  // 否则返回obj
  return result instanceof Object ? result : obj;
}
```

#### 3.3 自定义 instanceof

##### 3.3.1 API 相关

- 语法: myInstanceOf(obj, Type)
- 功能: 判断 obj 是否是 Type 类型的实例
- 实现: Type 的原型对象是否是 obj 的原型链上的某个对象, 如果是返回 true, 否则返回 false

##### 3.3.2 编码实现

```js
export function myInstanceOf(obj, Type) {
  // 得到原型对象
  let protoObj = obj.__proto__;

  // 只要原型对象存在
  while (protoObj) {
    // 如果原型对象是Type的原型对象, 返回true
    if (protoObj === Type.prototype) {
      return true;
    }
    // 指定原型对象的原型对象
    protoObj = protoObj.__proto__;
  }

  return false;
}
```

#### 3.4 合并多个对象

##### 3.4.1 API 相关

- 语法: object mergeObject(...objs)
- 功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
- 例子:
  - { a: [{ x: 2 }, { y: 4 }], b: 1}
  - { a: { z: 3}, b: [2, 3], c: 'foo'}
  - 合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }

##### 3.4.2 编码实现

```js
export function mergeObject(...objs) {
  const result = {};

  // 遍历objs
  objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      // 如果result还没有key值属性
      if (!result.hasOwnProperty(key)) {
        result[key] = obj[key];
      } else {
        // 否则 合并属性
        result[key] = [].concat(result[key], obj[key]);
      }
    });
  });

  // 可以使用reduce来代替forEach手动添加
  return result;
}
```

#### 3.5 对象/数组拷贝

##### 3.5.1 区别浅拷贝与深拷贝

- 纯语言表达:
  - 浅拷贝: 只是复制了对象属性或数组元素本身(只是引用地址值)
  - 深拷贝: 不仅复制了对象属性或数组元素本身, 还复制了指向的对象(使用递归)
- 举例说明: 拷贝 persons 数组(多个人对象的数组)
  - 浅拷贝: 只是拷贝了每个 person 对象的引用地址值, 每个 person 对象只有一份
  - 深拷贝: 每个 person 对象也被复制了一份新的

##### 3.5.2 实现浅拷贝

```js
/* 
实现浅拷贝
  方法一: 利用ES6语法
  方法二: 利用ES5语法: for...in
*/
/* 方法一: 利用ES6语法*/
export function clone1(target) {
  // 如果是对象(不是函数, 也就是可能是object对象或者数组)
  if (target != null && typeof target === "object") {
    if (target instanceof Array) {
      // return target.slice()
      // return target.filter(() => true)
      // return target.map(item => item)
      return [...target];
    } else {
      // return Object.assign({}, target)
      return { ...target };
    }
  }
  // 基本类型或者函数, 直接返回
  return target;
}

/* 方法二: 利用ES5语法: for...in */
export function clone2(target) {
  if (target != null && typeof target === "object") {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = target[key];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```

##### 3.5.3 实现深拷贝

- 实现一: 大众乞丐版
  - 问题 1: 函数属性会丢失
  - 问题 2: 循环引用会出错
- 实现二: 面试基础版
  - 解决问题 1: 函数属性还没丢失
- 实现三: 面试加强版本
  - 解决问题 2: 循环引用正常
- 实现四: 面试加强版本 2(优化遍历性能)
  - 数组: while | for | forEach() 优于 for-in | keys()&forEach()
  - 对象: for-in 与 keys()&forEach() 差不多

```js
/* 
1). 大众乞丐版
    问题1: 函数属性会丢失
    问题2: 循环引用会出错
*/
export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target));
}

/* 
2). 面试基础版本
    解决问题1: 函数属性还没丢失
*/
export function deepClone2(target) {
  if (target !== null && typeof target === "object") {
    const cloneTarget = target instanceof Array ? [] : {};

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone2(target[key]);
      }
    }

    return cloneTarget;
  }

  return target;
}

/* 
3). 面试加强版本
    解决问题2: 循环引用正常
*/
export function deepClone3(target, map = new Map()) {
  if (target !== null && typeof target === "object") {
    // 从缓存容器中读取克隆对象
    let cloneTarget = map.get(target);
    // 如果存在, 返回前面缓存的克隆对象
    if (cloneTarget) {
      return cloneTarget;
    }
    // 创建克隆对象(可能是{}或者[])
    cloneTarget = target instanceof Array ? [] : {};
    // 缓存到map中
    map.set(target, cloneTarget);

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        // 递归调用, 深度克隆对象, 且传入缓存容器map
        cloneTarget[key] = deepClone3(target[key], map);
      }
    }

    return cloneTarget;
  }

  return target;
}

/* 
4). 面试加强版本2(优化遍历性能)
    数组: while | for | forEach() 优于 for-in | keys()&forEach() 
    对象: for-in 与 keys()&forEach() 差不多
*/
export function deepClone4(target, map = new Map()) {
  if (target !== null && typeof target === "object") {
    // 从缓存容器中读取克隆对象
    let cloneTarget = map.get(target);
    // 如果存在, 返回前面缓存的克隆对象
    if (cloneTarget) {
      return cloneTarget;
    }
    // 创建克隆对象(可能是{}或者[])
    if (target instanceof Array) {
      cloneTarget = [];
      // 缓存到map中
      map.set(target, cloneTarget);
      target.forEach((item, index) => {
        cloneTarget[index] = deepClone4(item, map);
      });
    } else {
      cloneTarget = {};
      // 缓存到map中
      map.set(target, cloneTarget);
      Object.keys(target).forEach((key) => {
        cloneTarget[key] = deepClone4(target[key], map);
      });
    }

    return cloneTarget;
  }

  return target;
}
```

### 04. 字符串相关

#### 4.1 API 相关

- 字符串倒序
  - 语法: reverseString(str)
  - 功能: 生成一个倒序的字符串
- 字符串是否是回文
  - 语法: palindrome(str)
  - 功能: 如果给定的字符串是回文，则返回 true ；否则返回 false
- 截取字符串
  - 语法: truncate(str, num)
  - 功能: 如果字符串的长度超过了 num, 截取前面 num 长度部分, 并以...结束

#### 4.2 编码实现

```js
/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
*/
export function reverseString(str) {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join("");
}

/* 
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
*/
export function palindrome(str) {
  return str === reverseString(str);
}

/* 
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/
export function truncate(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

### 05. 手写 DOM 事件监听(带委托)

#### 5.1 理解事件冒泡与事件委托

- 事件冒泡的流程

  - 基于 DOM 树形结构
  - 事件在目标元素上处理后, 会由内向外(上)逐层传递
  - 应用场景: 事件代理/委托/委派

- 事件委托/代理
  - 将多个子元素的同类事件监听委托给(绑定在)共同的一个父组件上
  - 好处：
    - 减少内存占用(事件监听回调从 n 变为
    - 动态添加的内部元素也能响应

#### 5.2 API 相关

- 语法：addEventListener(element, type, fn, selector)
- 说明：如果 selector 没有，直接给 element 绑定事件，如果 selector 有，将 selector 对应的多个元素的事件委托绑定给父元素 element

#### 5.2 编码实现

```js
/* 
语法：addEventListener(element, type, fn, selector)
说明：如果selector没有，直接给element绑定事件，
  如果selector有，将selector对应的多个元素的事件委托绑定给父元素element
*/
export function addEventListener(element, type, fn, selector) {
  // 如果没有指定selector, 普通的事件绑定
  if (!selector) {
    element.addEventListener(type, fn);
  } else {
    // 否则是代委托的事件绑定
    element.addEventListener(type, function (event) {
      // 得到真正发生事件的目标元素
      const target = event.target;
      // 如果与选择器匹配
      if (target.matches(selector)) {
        // 调用处理事件的回调fn, 并指定this为目标元素, 参数为event
        fn.call(target, event);
      }
    });
  }
}
```

### 06. 手写 ajax 请求函数

#### 6.1 API 相关

- 语法：
  - axios(options)
    - 参数配置对象：url, method, params 与 data
    - 返回值为：promise 对象
  - axios.get(url, options)
  - axios.post(url, data, options)
  - axios.put(url, data, options)
  - axios.delete(url, options)
- 功能：使用 xhr 发送 ajax 请求的工具函数，与 axios 库功能类似

#### 6.2 实现整体流程

1. 函数的参数为一个配置对象
   `{ url: '', // 请求地址 method: '', // 请求方式 GET/POST/PUT/DELETE params: {}, // GET/DELETE 请求的 query 参数 data: {}, // POST 或 DELETE 请求的请求体参数 }`
2. 返回值: 函数的返回值为 promise, 成功的结果为 response, 失败的结果为 error
3. 能处理多种类型的请求: GET/POST/PUT/DELETE
4. 响应 json 数据自动解析为 js 的对象/数组

#### 6.3 编码实现

```js
/* 发送任意类型请求的函数 */
function axios({ url, method = "GET", params = {}, data = {} }) {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 处理method(转大写)
    method = method.toUpperCase();

    // 处理query参数(拼接到url上)   id=1&xxx=abc
    /* { id: 1, xxx: 'abc'} */
    let queryString = "";
    Object.keys(params).forEach((key) => {
      queryString += `${key}=${params[key]}&`;
    });
    if (queryString) {
      // id=1&xxx=abc&
      // 去除最后的&
      queryString = queryString.substring(0, queryString.length - 1);
      // 接到url
      url += "?" + queryString;
    }

    // 1. 执行异步ajax请求
    // 创建xhr对象
    const request = new XMLHttpRequest();
    // 打开连接(初始化请求, 没有请求)
    request.open(method, url, true);

    // 发送请求
    if (method === "GET") {
      request.send();
    } else if (method === "POST" || method === "PUT" || method === "DELETE") {
      // 告诉服务器请求体的格式是json
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=utf-8"
      );
      // 发送json格式请求体参数
      request.send(JSON.stringify(data));
    }

    // 绑定状态改变的监听
    request.onreadystatechange = function () {
      // 如果请求没有完成, 直接结束
      if (request.readyState !== 4) {
        return;
      }
      // 如果响应状态码在[200, 300)之间代表成功, 否则失败
      const { status, statusText } = request;
      // 2.1. 如果请求成功了, 调用resolve()
      if (status >= 200 && status <= 299) {
        // 准备结果数据对象response
        const response = {
          data: JSON.parse(request.response),
          status,
          statusText,
        };
        resolve(response);
      } else {
        // 2.2. 如果请求失败了, 调用reject()
        reject(new Error("request error status is " + status));
      }
    };
  });
}

/* 发送特定请求的静态方法 */
axios.get = function (url, options) {
  return axios(Object.assign(options, { url, method: "GET" }));
};
axios.delete = function (url, options) {
  return axios(Object.assign(options, { url, method: "DELETE" }));
};
axios.post = function (url, data, options) {
  return axios(Object.assign(options, { url, data, method: "POST" }));
};
axios.put = function (url, data, options) {
  return axios(Object.assign(options, { url, data, method: "PUT" }));
};

export default axios;
```

### 07. 手写事件总线

#### 7.1 API 说明

1. eventBus: 包含所有功能的事件总线对象
2. eventBus.on(eventName, listener): 绑定事件监听
3. eventBus.emit(eventName, data): 分发事件
4. eventBus.off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有

#### 7.2 编码实现

```js
const eventBus = {};

/* 
{
  add:  [callback1, callback2]
  delete: [callback3]
}
*/
let callbacksObj = {};

/* 
绑定事件监听
*/
eventBus.on = function (eventName, callback) {
  const callbacks = callbacksObj[eventName];
  if (callbacks) {
    callbacks.push(callback);
  } else {
    callbacksObj[eventName] = [callback];
  }
};

/* 
分发事件
*/
eventBus.emit = function (eventName, data) {
  const callbacks = callbacksObj[eventName];
  if (callbacks && callbacks.length > 0) {
    callbacks.forEach((callback) => {
      callback(data);
    });
  }
};

/* 
移除事件监听
*/
eventBus.off = function (eventName) {
  if (eventName) {
    delete callbacksObj[eventName];
  } else {
    callbacksObj = {};
  }
};

export default eventBus;
```

### 08. 手写消息订阅与发布

#### 8.1 API 说明

1. PubSub: 包含所有功能的订阅/发布消息的管理者
2. PubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数
3. PubSub.publish(msg, data): 异步发布消息: 指定消息名和数据
4. PubSub.publishSync(msg, data): 同步发布消息: 指定消息名和数据
5. PubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅

#### 8.2 编码实现

```js
/* 
自定义消息订阅与发布
*/

const PubSub = {};
/* 
  {
    add: {
      token1: callback1, 
      token2: callback2
    },
    update: {
      token3: callback3
    }
  }
*/
let callbacksObj = {}; // 保存所有回调的容器
let id = 0; // 用于生成token的标记

// 1. 订阅消息
PubSub.subscribe = function (msgName, callback) {
  // 确定token
  const token = "token_" + ++id;
  // 取出当前消息对应的callbacks
  const callbacks = callbacksObj[msgName];
  if (!callbacks) {
    callbacksObj[msgName] = {
      [token]: callback,
    };
  } else {
    callbacks[token] = callback;
  }
  // 返回token
  return token;
};

// 2. 发布异步的消息
PubSub.publish = function (msgName, data) {
  // 取出当前消息对应的callbacks
  let callbacks = callbacksObj[msgName];
  // 如果有值
  if (callbacks) {
    // callbacks = Object.assign({}, callbacks)
    // 启动定时器, 异步执行所有的回调函数
    setTimeout(() => {
      Object.values(callbacks).forEach((callback) => {
        callback(data);
      });
    }, 0);
  }
};

// 3. 发布同步的消息
PubSub.publishSync = function (msgName, data) {
  // 取出当前消息对应的callbacks
  const callbacks = callbacksObj[msgName];
  // 如果有值
  if (callbacks) {
    // 立即同步执行所有的回调函数
    Object.values(callbacks).forEach((callback) => {
      callback(data);
    });
  }
};

/*
4. 取消消息订阅
  1). 没有传值, flag为undefined
  2). 传入token字符串
  3). msgName字符串
*/
PubSub.unsubscribe = function (flag) {
  // 如果flag没有指定或者为null, 取消所有
  if (flag === undefined) {
    callbacksObj = {};
  } else if (typeof flag === "string") {
    if (flag.indexOf("token_") === 0) {
      // flag是token
      // 找到flag对应的callbacks
      const callbacks = Object.values(callbacksObj).find((callbacks) =>
        callbacks.hasOwnProperty(flag)
      );
      // 如果存在, 删除对应的属性
      if (callbacks) {
        delete callbacks[flag];
      }
    } else {
      // flag是msgName
      delete callbacksObj[flag];
    }
  } else {
    throw new Error("如果传入参数, 必须是字符串类型");
  }
};

export default PubSub;
```

### 09. 手写 Promise

#### 9.1 API 相关

#### 9.2 整体实现流程

1. 定义整体结构
2. Promise 构造函数的实现
3. promise.then()/catch()的实现
4. Promise.resolve()/reject()的实现
5. Promise.all/race()的实现
6. Promise.resolveDelay()/rejectDelay()的实现

#### 9.3.编码实现

```js
const PENDING = "pending"; // 初始未确定的状态
const RESOLVED = "resolved"; // 成功的状态
const REJECTED = "rejected"; // 失败的状态

/* 
Promise构造函数
*/
function Promise(excutor) {
  const self = this; // Promise的实例对象
  self.status = PENDING; // 状态属性, 初始值为pending, 代表初始未确定的状态
  self.data = undefined; // 用来存储结果数据的属性, 初始值为undefined
  self.callbacks = []; // {onResolved(){}, onRejected(){}}

  /* 
  将promise的状态改为成功, 指定成功的value
  */
  function resolve(value) {
    // 如果当前不是pending, 直接结束
    if (self.status !== PENDING) return;

    self.status = RESOLVED; // 将状态改为成功
    self.data = value; // 保存成功的value

    // 异步调用所有缓存的待执行成功的回调函数
    if (self.callbacks.length > 0) {
      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调
      setTimeout(() => {
        self.callbacks.forEach((cbsObj) => {
          cbsObj.onResolved(value);
        });
      });
    }
  }

  /* 
  将promise的状态改为失败, 指定失败的reason
  */
  function reject(reason) {
    // 如果当前不是pending, 直接结束
    if (self.status !== PENDING) return;

    self.status = REJECTED; // 将状态改为失败
    self.data = reason; // 保存reason数据

    // 异步调用所有缓存的待执行失败的回调函数
    if (self.callbacks.length > 0) {
      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调
      setTimeout(() => {
        self.callbacks.forEach((cbsObj) => {
          cbsObj.onRejected(reason);
        });
      });
    }
  }

  // 调用excutor来启动异步任务
  try {
    excutor(resolve, reject);
  } catch (error) {
    // 执行器执行出错, 当前promise变为失败
    console.log("-----");
    reject(error);
  }
}

/* 
用来指定成功/失败回调函数的方法
    1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved
    2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected
    3). 如果当前promise是pending, 保存回调函数
返回一个新的promise对象
    它的结果状态由onResolved或者onRejected执行的结果决定
    2.1). 抛出error ==> 变为rejected, 结果值为error
    2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值
    2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)
*/
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;

  onResolved = typeof onResolved === "function" ? onResolved : (value) => value; // 将value向下传递
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        }; // 将reason向下传递

  return new Promise((resolve, reject) => {
    // 什么时候改变它的状态

    /* 
    1. 调用指定的回调函数
    2. 根据回调执行结果来更新返回promise的状态
    */
    function handle(callback) {
      try {
        const result = callback(self.data);
        if (!(result instanceof Promise)) {
          //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值
          resolve(result);
        } else {
          // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)
          result.then(
            (value) => resolve(value),
            (reason) => reject(reason)
          );
          // result.then(resolve, reject)
        }
      } catch (error) {
        // 2.1). 抛出error ==> 变为rejected, 结果值为error
        reject(error);
      }
    }

    if (self.status === RESOLVED) {
      setTimeout(() => {
        handle(onResolved);
      });
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        handle(onRejected);
      });
    } else {
      // PENDING
      self.callbacks.push({
        onResolved(value) {
          handle(onResolved);
        },
        onRejected(reason) {
          handle(onRejected);
        },
      });
    }
  });
};

/* 
用来指定失败回调函数的方法
catch是then的语法糖
*/
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

/* 
用来返回一个指定vlaue的成功的promise
value可能是一个一般的值, 也可能是promise对象
*/
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    // 如果value是一个promise, 最终返回的promise的结果由value决定
    if (value instanceof Promise) {
      value.then(resolve, reject);
    } else {
      // value不是promise, 返回的是成功的promise, 成功的值就是value
      resolve(value);
    }
  });
};

/* 
用来返回一个指定reason的失败的promise
*/
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

/* 
返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败
*/
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0; // 已经成功的数量
    const values = new Array(promises.length); // 用来保存成功promise的value值
    // 遍历所有promise, 取其对应的结果
    promises.forEach((p, index) => {
      p.then(
        (value) => {
          resolvedCount++;
          values[index] = value;
          if (resolvedCount === promises.length) {
            // 都成功了
            resolve(values);
          }
        },
        (reason) => reject(reason)
      );
    });
  });
};

/* 
返回一个promise, 由第一个完成promise决定
*/
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    // 遍历所有promise, 取其对应的结果
    promises.forEach((p) => {
      // 返回的promise由第一个完成p来决定其结果
      p.then(resolve, reject);
    });
  });
};

/* 
返回一个延迟指定时间才成功(也可能失败)的promise
*/
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 如果value是一个promise, 最终返回的promise的结果由value决定
      if (value instanceof Promise) {
        value.then(resolve, reject);
      } else {
        // value不是promise, 返回的是成功的promise, 成功的值就是value
        resolve(value);
      }
    }, time);
  });
};

/* 
返回一个延迟指定时间才失败的promise
*/
Promise.rejectDelay = function (reason, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason);
    }, time);
  });
};

export default Promise;
```

## 自定义 util

::: details 子组件
<<< ../../example/tool/tool.js
:::

<Comment />
