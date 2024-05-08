---
outline: [2, 3]
---

# Node.js 从零开始

- [学习地址](https://coding.imooc.com/class/320.html)
- [文档地址](https://github.com/Eished/node_blog_notes/blob/master/Node.js%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2.md)
- [代码地址](https://github.com/ele-cat/learn-node)

## 01. 开发接口（不使用框架）

### 1.1 请求概述

#### 1.1.1 http 请求概述

- DNS 解析，建立 TCP 连接，发送 http 请求
- server 接收到 http 请求，处理并返回数据
- 客户端接收到返回数据，处理数据（例如渲染、执行 JS）

#### 1.1.2 Node.js 处理 http 请求

- get 请求和 querystring
- post 请求和 postdata
- 路由（接口、地址）

```js
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello world!");
});
server.listen(8000);
//浏览器访问 http://127.0.0.1:8000/
```

#### 1.1.3 Node.js 处理 get 请求

- get 请求，客户端向 server 端获取数据，如查询博客列表
- 通过 querystring 来传递数据，如 a.html?a=100&b=200
- 浏览器直接访问，发送 get 请求

```js
const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  console.log(req.method); //GET
  const url = req.url; //获取请求的完整 URL
  //关键解析[0]是'?'前的内容, [1]是'?'后内容
  req.query = querystring.parse(url.split("?")[1]);
  res.end(JSON.stringify(req.query)); //将 querystring 返回
});
server.listen(8000);
//浏览器访问 http://127.0.0.1:8000/
```

#### 1.1.4 Node.js 处理 post 请求

- post 请求，即客户端要像服务端传递数据，如新建博客
- 通过 post data 传递数据，后面解释
- 浏览器无法直接模拟，需要手写 JS，或者使用 postman app

```js
const http = require('http')
const server = http.createServer((req, res) => {
  if (req.method === 'POST'){
    // POST 必须大写
    //数据格式
    console.log('content-type: ', req.headers['content-type'])
    //接收数据
    let postData = ''
    //开始接收数据
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    //结束数据接收
    req.on('end'， () => {
      console.log('postData:', postData)
      res.end('hello world!') //在这里返回，因为是异步
    })
  }
})
server.listen(300)
```

### 1.2 处理路由

> https://github.com/username/xxx 每个斜线后面的唯一标识就是路由

```js
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0]; //重点：split('?')[0]语法弄清楚
  const query = querystring.parse(url.split("?")[1]);

  //设置返回值格式为 JSON
  res.setHeader("Content-type", "application/json");

  //返回的数据
  const resData = {
    method,
    url,
    path,
    query,
  };

  //返回
  if (method === "GET") {
    res.end(JSON.stringify(req.query));
  }

  if (req.method === "POST") {
    let postData = "";
    //res.on('data')指每次发送的数据
    //chunk 逐步接收数据 req绑定一个data方法 chunk是变量
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    //req.on(end)数据发送完成；
    req.on("end", () => {
      console.log("postData:", postData);
      console.log("resData:", resData);
      resData.postData = postData;
      //返回
      res.end(JSON.stringify(resData));
    });
  }
});

server.listen(300);
console.log("OK");
```

### 1.3 环境搭建

> - 从零搭建，不使用框架
> - 使用 nodemon 监测文件变化，自动重启 node
> - 使用 cross-env 设置环境变量，兼容 Mac Linux 和 Windows
> - 配置完后使用 `npm run dev` 命令启动项目

1. 首先初始化项目 npm

```sh
npm init -y
```

2. 全局安装 nodemon、cross-env

```sh
npm install -g nodemon cross-env
```

### 1.4 项目配置

1. 在项目根目录创建 bin 文件夹和 app.js，在 bin 文件夹新建 www.js 文件
2. 修改 package.json 文件，新增几个启动命令，让服务可以热更新，运行`npm run dev`

```json
// package.json 代码 注意： =不能有空格
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "www.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
    "prd": "cross-env NODE_ENV=prd nodemon ./bin/www.js"
  },
  "author": "",
  "license": "ISC"
}
```

3. ./bin/www.js 代码

```js
// ./bin/www.js 代码
const http = require("http");

const PORT = 300;
const serverHandle = require("../app");
const server = http.createServer(serverHandle);
server.listen(PORT);
```

4. app.js 代码

```js
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

const serverHandle = (req, res) => {
  //设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");

  if (false) {
    const resData = {
      name: "zhang",
      site: "imooc",
      env: process.env.NODE_ENV,
    };

    res.end(JSON.stringify(resData));
  }

  //处理 blog 路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }
  //处理 user 路由
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }
  //未命中路由，返回404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 Not Found\n");
  res.end();
};

module.exports = serverHandle;
```

5. ./src/router/user.js

```js
// ./src/router/user.js
const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登录
  if (method === "POST" && req.url === "/api/user/login") {
    return {
      msg: "这是登录的接口",
    };
  }
};
module.exports = handleUserRouter;
```

6. ./src/router/blog.js

```js
// ./src/router/blog.js
const handleBlogRouter = (req, res) => {
  const method = req.method; //GET POST
  console.log(req.method);
  console.log(req);
  //登录
  if (method === "POST" && req.url === "/api/blog/list") {
    return {
      msg: "这是博客的接口",
    };
  }
};
module.exports = handleBlogRouter;
```

### 1.5 接口开发

#### 1.5.1 初始化路由

- 始化路由：根据之前设计方案，做出路由
- 返回假数据：将路由和数据处理分离，以符合设计原则

#### 1.5.2 接口设计方案

| 描述               | 接口             | 方法 | url 参数                        | 备注                      |
| ------------------ | ---------------- | ---- | ------------------------------- | ------------------------- |
| 获取博客列表       | /api/blog/list   | get  | author 作者，keyword 搜索关键字 | 参数为空则不进行查询过滤  |
| 获取一篇博客的内容 | /api/blog/detail | get  | id                              |
| 新增一篇博客       | /api/blog/new    | post |                                 | post 中有新增的信息       |
| 更新一篇博客       | /api/blog/update | post | id                              | postData 中有更新信息     |
| 删除一篇博客       | /api/blog/del    | post | id                              |
| 登录               | /api/user/login  | post |                                 | postData 中有用户名和密码 |

#### 1.5.3 业务开发

> - 业务分层 拆分业务
>   - createServer 业务单独放在 ./bin/www.js
>   - 系统基本设置、基本信息 app.js 放在根目录
>   - 路由功能 ./src/router/xxx.js
>   - 数据管理 ./src/controller/xxx.js
>   - 数据处理

1. 博客列表、详情

- 通过`split`获取 path、query 信息，传入到对应接口中

```js
// ./app.js
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");

const serverHandle = (req, res) => {
  //设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");

  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析 query
  req.query = querystring.parse(url.split("?")[1]);

  //处理 blog 路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
      // JSON.stringify({
      // 	errno: -1,
      // 	message: '传输失败'
      // })
    );
    return;
  }
  //处理 user 路由
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }
  //未命中路由，返回404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 Not Found\n");
  res.end();
};

module.exports = serverHandle;
```

- 接口返回信息存放在 controller 中

```js
// ./src/controller/blog.js
const getList = (author, keyword) => {
  //先返回假数据(格式正确)
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 20191101,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      createTime: 20191102,
      author: "zhangsan2",
    },
    {
      id: 3,
      title: "标题3",
      content: "内容3",
      createTime: 20191103,
      author: "zhangsan3",
    },
  ];
};

const getDetail = (id) => {
  //先返回假数据(格式正确)
  return {
    id: 3,
    title: "标题3",
    content: "内容3",
    createTime: 20191103,
    author: "zhangsan3",
  };
};

module.exports = {
  getList,
  getDetail,
};
```

- 通过 method 和 path 匹配对应的接口，将处理好的数据返回

```js
// ./src/router/blog.js
const { getList, getDetail } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method; //GET POST

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
    // return {
    // 	msg: '这是博客列表的接口'
    // }
  }

  //获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  //新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "这是新建博客的接口",
    };
  }

  //更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    return {
      msg: "这是更新博客的接口",
    };
  }

  //删除博客
  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "这是删除博客的接口",
    };
  }
};

module.exports = handleBlogRouter;
```

- 封装回包解构

```js
// ./src/model/resModel.js
class BaseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
```

> 到此访问[http://127.0.0.1:3000/api/blog/list](http://127.0.0.1:3000/api/blog/list)，即可获取到列表信息

2. 博客新增、编辑、删除

- 开发路由 （处理 POSTData）

```js
// app.js 代码
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");

//用于处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    let postData = "";
    //开始接收数据
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    //结束接收数据
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(querystring.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  //设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");

  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析 query
  req.query = querystring.parse(url.split("?")[1]);

  //处理 postData
  getPostData(req).then((postData) => {
    req.body = postData;

    //处理 blog 路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
        // JSON.stringify({
        // 	errno: -1,
        // 	message: '传输失败'
        // })
      );
      return;
    }
    //处理 user 路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }
    //未命中路由，返回404
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;
```

- 新建、更新、删除路由

```js
// ./src/router/blog.js
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method; //GET POST
  const id = req.query.id;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
    // return {
    // 	msg: '这是博客列表的接口'
    // }
  }

  //获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  //新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  //更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel("Update Successed!");
    } else {
      return new ErrorModel("Update Failed!");
    }
  }

  //删除博客
  if (method === "POST" && req.path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModel("Delete Successed!");
    } else {
      return new ErrorModel("Delete Failed!");
    }
  }
};

module.exports = handleBlogRouter;
```

- 数据返回

```js
// ./src/controller/blog.js
//博客列表
const getList = (author, keyword) => {
  //先返回假数据(格式正确)
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 20191101,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      createTime: 20191102,
      author: "zhangsan2",
    },
    {
      id: 3,
      title: "标题3",
      content: "内容3",
      createTime: 20191103,
      author: "zhangsan3",
    },
  ];
};

//博客详情
const getDetail = (id) => {
  //先返回假数据(格式正确)
  return {
    id: 3,
    title: "标题3",
    content: "内容3",
    createTime: 20191103,
    author: "zhangsan3",
  };
};

//新建博客
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title conten 属性
  return {
    id: 3, //表示新建博客，插入到数据表里面的 id
  };
};

//更新博客
const updateBlog = (id, blogData = {}) => {
  // id 就是要更新的 id
  // blogData 是一个博客对象，包含 tiltle content 属性
  console.log("updateBlog:", id, blogData);
  return true;
};

//删除博客
const delBlog = (id) => {
  // id 就是要删除的博客的 id
  console.log("delBlog:", id);
  return !!id;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
```

3. 登录博客

```js
// ./src/router/user.js 代码
const { loginCheck } = require("../controller/user"); //'路径里面不能有空格'
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登录
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if (result) {
      return new SuccessModel("login successed!");
    }
    return new ErrorModel("login failed!");
  }
};

module.exports = handleUserRouter;
```

```js
// ./src/controller/user.js 代码
//登录验证
const loginCheck = (username, password) => {
  console.log("username:", username, "password:", password);
  if (username === "zhangsan" && password === "123") {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};
```

#### 总结

> - node.js 处理 http 请求的常用技能，postman 的使用
> - node.js 开发博客项目的接口（未连接数据库，未登录使用）
> - 为何要将 router 和 controller 分开？
> - 路由和 API 区别：
>   - API ：前后端、不同端（子系统）之间对接的通用术语
>   - 路由：系统内部的接口定义，是 API 的一部分

## 02. 使用 MySQL 数据库

### 2.1 MySQL 介绍

1. 介绍

- web server 中最流行的关系型数据库
- 免费下载学习
- 轻量级，易学易用

2. 为什么使用 MySQL

- MySQL 最常用，有专人运维
- MySQL 有问题可以随时查到
- MySQL 本身是复杂的，本课只讲使用

### 2.2 MySQL 安装

1. MySQL[下载](https://dev.mysql.com/downloads/mysql/)
2. 解压到盘符中后，进入 bin 目录
3. 执行`.\mysqld --install`，显示安装成功
4. 执行`.\mysqld --initialize --console`，后会生成一个随机密码，要复制记录
5. 开启 Mysql 服务，执行`net start MySQL`
6. 登录，进入 MySQL 命令行，执行`.\mysql -u root -p`回车，粘贴刚刚生成的随机密码，回车
7. 修改 Mysql 登录密码，执行`alter user 'root'@'localhost' identified by 'root';`注意封号，就可以把密码修改为`root`，想修改为别的密码写别的
8. 验证：先执行`exit`退出 Mysql 操作，然后执行`.\mysql -u root -p`回车，输入`root`回车
9. 设置系统全局变量，打开环境变量，新增一个变量名`mysql`，变量值为`mysql放置位置`；修改`path`，在其下新增一条`%mysql%\bin`，配置完成之后，以后再开启、关闭 Mysql，就不用使用超管进入文件夹了，直接在任意目录执行`net start MySQL`就可以启动了
10. 执行`mysql -u root -p`，进入数据库命令操作
11. 安装 Navicat 数据库管理工具

### 2.3 MySQL 基本使用

#### 2.3.1 根据需求设计表

1. users：

| id  | username | password | realname |
| :-: | :------: | :------: | :------: |
|  1  | zhangsan |  123456  |   张三   |
|  2  |   lisi   |  111111  |   lisi   |

2. blogs：

| id  | title  | content |  createtime   |  author  |
| :-: | :----: | :-----: | :-----------: | :------: |
|  1  | 标题 A | 内容 A  | 1573989043149 | zhangsan |
|  2  | 标题 B | 内容 B  | 1573989111301 |   lisi   |

#### 2.3.2 MySQL 语法和操作

1. 右键表 `Drop table` 删除
2. 右键表 `Alter table` 修改

```sh
-- 显示数据库
 show databases;

-- 创建数据库
 CREATE SCHEMA `myblog` ;

-- 创建users数据表
 CREATE TABLE `myblog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `realname` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));

-- 创建blogs数据表
 CREATE TABLE `myblog`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `createtime` BIGINT(20) NOT NULL,
  `author` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));

-- 使用myblog数据库
 use myblog;

-- 显示当前数据库中的表
 show tables;

-- 增加数据到指定表内
 insert into users (username,`password`,realname)values('zhangsan','123','张三');
 insert into users (username,`password`,realname)values('lisi','1234','李四');

-- 从指定表内 查询数据 '*'代表所有 比较消耗性能
  select * from users;

-- 从指定表内 查询指定行列数据
 select id,username from users;

-- 从指定表内 根据条件查询并集或交集
 select * from users where username='zhangsan' and `password`='123';
 select * from users where username='zhangsan' or `password`='123';

-- 从指定表内 根据条件模糊查询
 select * from users where username like '%zhang%';

-- 从指定表内 根据条件模糊查询并根据条件倒序
 select * from users where password like '%1%' order by id desc;

-- Error Code: 1175. 先解除安全模式再更新或删除
 SET SQL_SAFE_UPDATES=0;

-- 从指定表内 更新数据表
 update users set realname='李四2' where username='lisi';

-- 从指定表内 删除数据表
 delete from users where username='lisi';

-- 软删除，给数据加上删除标记 state='0',通常不使用 delete 语句
ALTER TABLE `myblog`.`users`
ADD COLUMN `state` INT(11) NOT NULL AFTER `realname`;
 select * from users where state='1';

-- 不等于号 <>
 select * from users where state<>'0';

-- 本教程使用真删除，删除列 state
ALTER TABLE `myblog`.`users`
DROP COLUMN `state`;

-- 往 blogs 填充数据方便测试
 insert into blogs (title,content,createtime,author)values('标题A','内容A','1573989043149','zhangsan');
 insert into blogs (title,content,createtime,author)values('标题B','内容B','1573989111301','lisi');

-- 查询 blogs 数据 条件查询 倒序查询 模糊查询
 select * from blogs;
 select * from blogs where author='lisi' order by createtime desc;
 select * from blogs where title like '%A%' order by createtime desc;
```

::: tip 总结

- 如何建库、如何建表
- 建表时常用数据类型（ int bigint varchar longtext）
- SQL 语句实现增删改查
  :::

### 2.4 Node.js 操作 MySQL

1. 示例：用 demo 演示 Node.js 操作 MySQL
2. 封装：将其封装为系统可用的工具
3. 使用：让 API 直接操作 MySQL

#### 2.4.1 Node.js 操作 MySQL demo

```js
// 测试demo 文件
const mysql = require("mysql");

//创建连接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "myblog",
});

//开始连接
con.connect();

// 执行 SQL 语句
const sql = `update users set realname='李四1' where username='lisi';`;
// const sql = `select * from blogs;`
// const sql = `insert into blogs (title,content,createtime,author)values('标题A','内容A','1573989043149','zhangsan');`

con.query(sql, (err, result) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("result", result);
});

//关闭连接
con.end();
```

#### 2.4.2 MySQL 封装成工具

1. db 配置文件

```js
// ./src/conf/db.js
const env = process.env.NODE_ENV; //环境参数

//配置
let MYSQL_CONF;

if (env === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "myblog",
  };
}

if (env === "prd") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "myblog",
  };
}

module.exports = {
  MYSQL_CONF,
};
```

2. MySQL 封装

```js
// ./src/db/mysql.js
const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db.js");

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF);

//开始连接
con.connect();

// 统一执行 sql 语句的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}
module.exports = {
  exec,
};
```

3. 测试

```js
// 引入
const { exec } = require("./src/db/mysql");
// 执行 SQL 语句
const sql = `select * from blogs;`;
// 执行方法
exec(sql)
  .then((res) => {
    // 返回数据
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

#### 2.4.3 API 对接 MySQL

1. app.js 代码部分修改

```js
//处理 blog 路由
const blogResult = handleBlogRouter(req, res);
if (blogResult) {
  blogResult.then((blogData) => {
    res.end(JSON.stringify(blogData));
  });
  return;
}

//处理 user 路由
const userResult = handleUserRouter(req, res);
if (userResult) {
  userResult.then((userData) => {
    res.end(JSON.stringify(userData));
  });
  return;
}
```

2. ./src/controller/blog.js 修改

```js
const { exec } = require("../db/mysql");

//博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  //返回 promise
  return exec(sql);
};

//博客详情
const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

//新建博客
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title conten 属性
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createtime = Date.now();

  const sql = `
  insert into blogs (title, content, createtime, author)
  values('${title}', '${content}', '${createtime}', '${author}')
  `;

  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

//更新博客
const updateBlog = (blogData = {}) => {
  // id 就是要更新的 id
  // blogData 是一个博客对象，包含 title content 属性
  const id = blogData.id;
  const title = blogData.title;
  const content = blogData.content;

  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `;

  return exec(sql).then((updateData) => {
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

//删除博客
const delBlog = (id, author) => {
  // id 就是要删除的博客的 id
  const sql = `delete from blogs where id=${id} and author='${author}'`;

  return exec(sql).then((delData) => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
```

3. ./src/router/blog.js 修改

```js
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method; //GET POST
  const id = req.query.id;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  //获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }

  //新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const author = "zhangsan"; //作者假数据，等待登录
    req.body.author = author;

    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  //更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updateBlog(req.body);
    return result.then((value) => {
      if (value) {
        return new SuccessModel();
      }
      return new ErrorModel("Failed!");
    });
  }

  //删除博客
  if (method === "POST" && req.path === "/api/blog/del") {
    const author = "zhangsan"; //作者假数据，等待登录
    req.body.author = author;

    const result = delBlog(id, author);
    return result.then((value) => {
      if (value) {
        return new SuccessModel();
      }
      return new ErrorModel();
    });
  }
};

module.exports = handleBlogRouter;
```

4. ./src/controller/user.js 修改

```js
const { exec } = require("../db/mysql.js");

//登录验证
const loginCheck = (username, password) => {
  const sql = `
    select username from users where username='${username}' and password='${password}'
  `;
  return exec(sql).then((rows) => {
    return rows[0] || {};
  });
};

module.exports = {
  loginCheck,
};
```

5. ./src/router/user.js 修改

```js
const { loginCheck } = require("../controller/user"); //'路径里面不能有空格'
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登录
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    return result.then((data) => {
      if (data.username) {
        return new SuccessModel(username);
      }
      return new ErrorModel("login failed!");
    });
  }
};

module.exports = handleUserRouter;
```

::: tip 总结

- Node.js 连接 MySQL，如何执行 sql 语句
- 根据 NODE_ENV 区分环境
- 封装 exec 函数，API 使用 exec 操作数据库
  :::

### 2.5 各类缓存

#### 2.5.1 Cookie

- 什么是 Cookie

  - 存储在浏览器的字符串（最大 5KB）
  - 跨域不共享
  - 格式如 K1=V1;K2=V3;K3=V3; 因此可以存储结构化数据
  - 每次发送 Http 请求，会将请求域的 Cookie 一起发送给 Server
  - Server 可以修改 Cookie 并返回给浏览器
  - 浏览器也可以通过 JavaScript 修改 Cookie （有限制）

- JavaScript 操作 Cookie，在浏览器中查看 Cookie

  - `document.cookie = 'k1=100;'` 实现 Cookie 累加
  - F12 打开控制台 选择 Application，Storage，Cookie，选择指定 Cookie 按上方的 X 或 delete 键删除

- Server 端操作 Cookie，实现登录验证
  - 查看 Cookie
  - 修改 Cookie
  - 实现登录验证

登录接口中加入`getCookieExpires`方法，给 Cookie 加一个超时时间

```js
// ./src/router/user.js
const { login } = require("../controller/user"); // 路径里面不能有空格
const { SuccessModel, ErrorModel } = require("../model/resModel");

//获取 cookie 过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  console.log("d.toGMTString() is ", d.toGMTString());
  return d.toGMTString();
};

const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  // 登录
  if (method === "GET" && req.path === "/api/user/login") {
    // const {username, password } = req.body
    const { username, password } = req.query;
    const result = login(username, password);
    return result.then((data) => {
      if (data.username) {
        // 操作 cookie
        res.setHeader(
          "Set-Cookie",
          `username=${
            data.username
          }; path=/; httpOnly; expires=${getCookieExpires()}`
        );
        return new SuccessModel();
      }
      return new ErrorModel("login failed!");
    });
  }

  // 登录验证测试
  if (method === "GET" && req.path === "/api/user/login-test") {
    // console.log(req.cookie.username)
    // 只能按顺序读取
    if (req.cookie.username) {
      return Promise.resolve(new SuccessModel());
    }
    return Promise.resolve(new ErrorModel("未登录"));
  }
};

module.exports = handleUserRouter;
```

处理接收到的用户 Cookie

```js
// app.js 代码
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");

// 用于处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    // 开始接收数据
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    // 结束接收数据
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  // 设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");

  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析 query
  req.query = querystring.parse(url.split("?")[1]);

  // 解析 Cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ""; // k1=v1;k2=v2
  cookieStr.split(";").forEach((item) => {
    if (!item) {
      return;
    }
    const arr = item.split("=");
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });
  console.log("req.cookie:", req.cookie);

  // 处理 postData
  getPostData(req).then((postData) => {
    req.body = postData;

    // 处理 blog 路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    // 处理 user 路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        res.end(JSON.stringify(userData));
      });
      return;
    }
    // 未命中路由，返回404
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;
```

#### 2.5.2 Session

- Cookie 存放信息非常危险
- 如何解决：cookie 中存储 userId， server 端对应 username
- 解决方案：session ，即 server 端储存用户信息

./src/router/user.js 修改

```js
// ./src/router/user.js

const { login } = require("../controller/user"); //'路径里面不能有空格'
const { SuccessModel, ErrorModel } = require("../model/resModel");

//获取 cookie 过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  console.log("d.toGMTString() is ", d.toGMTString());
  return d.toGMTString();
};

const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST
  // 登录 GET 方法明文
  if (method === "GET" && req.path === "/api/user/login") {
    // const {username, password } = req.body
    const { username, password } = req.query;
    const result = login(username, password);
    return result.then((data) => {
      if (data.username) {
        // // 操作 cookie
        // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        req.session.username = data.username;
        req.session.realname = data.realname;
        console.log("session:", req.session);
        return new SuccessModel();
      }
      return new ErrorModel("login failed!");
    });
  }

  // 登录验证测试
  if (method === "GET" && req.path === "/api/user/login-test") {
    // console.log(req.cookie.username)
    // 只能按顺序读取
    if (req.session.username) {
      return Promise.resolve(
        new SuccessModel({
          session: req.session,
        })
      );
    }
    return Promise.resolve(new ErrorModel("未登录"));
  }
};

module.exports = handleUserRouter;
```

app.js 修改

```js
// app.js 代码
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");

//获取 cookie 过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  console.log("d.toGMTString() is ", d.toGMTString());
  return d.toGMTString();
};

// session 数据
const SESSION_DATA = {};

// 用于处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    // 开始接收数据
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    // 结束接收数据
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};
const serverHandle = (req, res) => {
  // 设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");
  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];
  // 解析 query
  req.query = querystring.parse(url.split("?")[1]);
  // 解析 Cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ""; // k1=v1;k2=v2
  cookieStr.split(";").forEach((item) => {
    if (!item) {
      return;
    }
    const arr = item.split("=");
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 解析 session
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {};
    }
  } else {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[userId] = {};
  }
  req.session = SESSION_DATA[userId];

  // 处理 postData
  getPostData(req).then((postData) => {
    req.body = postData;

    // 处理 blog 路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        if (needSetCookie) {
          // 操作 cookie
          res.setHeader(
            "Set-Cookie",
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    // 处理 user 路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        if (needSetCookie) {
          // 操作 cookie
          res.setHeader(
            "Set-Cookie",
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(userData));
      });
      return;
    }
    // 未命中路由，返回404
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;
```

::: warning 当前 session 代码的问题

- session 是 JS 变量，放在 Node.js 进程内存中
- 进程内存有限，访问量过大，内存暴增怎么办？
- 正式上线是多进程，进程之间内存无法共享
  :::

#### 2.5.3 Redis

1. Redis 特点
   - Web Server 最常用的缓存数据库，数据储存在内存中
   - 相比于 MySQL ，访问速度极快
   - 成本更高，储存空间小
   - 将 Web Server 和 Redis 拆分为两个单独服务
   - 双方独立，可扩展
   - 像 MySQL 一样
2. 安装 Redis

   - Windows [下载地址](http://www.runoob.com/redis/redis-install.html)
   - Mac 使用 brew install redis

3. 配置 Redis
   - 将下载好的压缩包放置`C:\Profram Files`，重命名为`Redis`
   - 打开系统设置，配置环境变量`Path = C:\Profram Files\Redis`
4. Redis 语法与操作
   - 启动 Redis：
   ```sh
     redis-server.exe redis.windows.conf
   ```
   - 连接数据库：【**连接数据库时需另起 cmd，否则刚刚启动的服务会断开**】
   ```sh
     redis-cli.exe -h 127.0.0.1 -p 6379
   ```
   - 设置键值对：
   ```sh
     set myKey abc
   ```
   - 取出键值对：
   ```sh
     get myKey
   ```
   - 查看所有键值对：
   ```sh
     keys *
   ```
   - 标准语法 - 连接数据库并等待执行命令：
   ```sh
     redis-cli -h host -p port -a password
   ```
   - 停止 Redis：
   ```sh
     redis-cli -h 127.0.0.1 -p 6379 shutdown
   ```
   - 将该程序放到 Windows 服务中：
   ```sh
     redis-server.exe --service-install redis.conf --loglevel verbose
   ```
   - 卸载 Windows 服务中的 Redis 服务：
   ```sh
     redis-server --service-uninstall
   ```
5. Redis keys 命令

   | 序号 | 命令及描述                                                                                                                                            |
   | :--: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
   |  1   | [DEL key](https://www.runoob.com/redis/keys-del.html) 该命令用于在 key 存在时删除 key。                                                               |
   |  2   | [DUMP key](https://www.runoob.com/redis/keys-dump.html) 序列化给定 key ，并返回被序列化的值。                                                         |
   |  3   | [EXISTS key](https://www.runoob.com/redis/keys-exists.html) 检查给定 key 是否存在。                                                                   |
   |  4   | [EXPIRE key](https://www.runoob.com/redis/keys-expire.html) seconds 为给定 key 设置过期时间，以秒计。                                                 |
   |  5   | [EXPIREAT key timestamp](https://www.runoob.com/redis/keys-expireat.html) 用于为 key 设置过期时间，命令接受的时间参数是 UNIX 时间戳(unix timestamp)。 |
   |  6   | [PEXPIRE key milliseconds](https://www.runoob.com/redis/keys-pexpire.html) 设置 key 的过期时间以毫秒计。                                              |
   |  7   | [PEXPIREAT key milliseconds-timestamp](https://www.runoob.com/redis/keys-pexpireat.html) 设置 key 过期时间的时间戳(unix timestamp) 以毫秒计           |
   |  8   | [KEYS pattern](https://www.runoob.com/redis/keys-keys.html) 查找所有符合给定模式( pattern)的 key 。                                                   |
   |  9   | [MOVE key db](https://www.runoob.com/redis/keys-move.html) 将当前数据库的 key 移动到给定的数据库 db 当中。                                            |
   |  10  | [PERSIST key](https://www.runoob.com/redis/keys-persist.html) 移除 key 的过期时间，key 将持久保持。                                                   |
   |  11  | [PTTL key](https://www.runoob.com/redis/keys-pttl.html) 以毫秒为单位返回 key 的剩余的过期时间。                                                       |
   |  12  | [TTL key](https://www.runoob.com/redis/keys-ttl.html) 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。                                    |
   |  13  | [RANDOMKEY](https://www.runoob.com/redis/keys-randomkey.html) 从当前数据库中随机返回一个 key 。                                                       |
   |  14  | [RENAME key newkey](https://www.runoob.com/redis/keys-rename.html) 修改 key 的名称                                                                    |
   |  15  | [RENAMENX key newkey](https://www.runoob.com/redis/keys-renamenx.html) 仅当 newkey 不存在时，将 key 改名为 newkey 。                                  |
   |  16  | [TYPE key](https://www.runoob.com/redis/keys-type.html) 返回 key 所储存的值的类型。                                                                   |

6. Redis 数据持久化
   :::tip 两种方式
   1. Rdb：快照形式，定期把内存中当前时刻的数据保存到磁盘。Redis 默认支持的持久化方案。
   2. aof 形式：append only file。把所有对 redis 数据库操作的命令，增删改操作的命令，保存到文件中。
      如果 redis 宕机：数据库恢复时把启动命令执行一遍即可。（其实就是直接启动）
      :::
   - 在`redis.windows.conf`文件中配置：
     :::tip aof 方式（这里直接修改就好）
     1. appendonly no -- 默认关闭 aof 持久化方案， 如果要开启要把 no 修改为 yes
     2. appendfilename "appendonly.aof" -- 设置 aof 持久化的文件名
        :::
        :::tip Rdb 方式（默认，这里可以自己修改）
        save 900 1 -- 900 秒存入 1 条数据，开始持久化数据
        save 300 10 -- 300 秒存入 10 条数据，开始持久化数据
        save 60 10000 -- 60 秒存入 10000 条数据，开始持久化数据
        :::
   - 手动输入命令存储到本地：`redis-cli bgsave`
     - 可能出现的问题：强制关闭 Redis 快照导致不能持久化。
     ```sh
     TypeError:MISCONF Redis is configured to save RDB snapshots, but is currently not 	able to persist on disk. Commands that may modify the data set are disabled. Please check Redis logs for details about the error.
     ```
     ```sh
     解决方案： 将 stop-writes-on-bgsave-error 设置为 no
     输入命令： 127.0.0.1:6379> config set stop-writes-on-bgsave-error no
     ```
7. Node.js 连接 Redis
   > 需要先启动 Redis 服务器`redis-server.exe`

```js
const redis = require("redis");

!(async function () {
  // 创建客户端
  const redisClient = redis.createClient(6379, "127.0.0.1");
  // 监听错误
  redisClient.on("error", (err) => console.log("Redis Client Error", err));
  // 连接
  await redisClient.connect();
  console.log("Redis connection is successful!");

  // 简单测试一下
  await redisClient.set("name", "李四");
  const name = await redisClient.get("name");
  console.log("name:", name);

  // 退出
  redisClient.quit();
})();
```

8. Session 存入 Redis

```js
// ../src/db/redis.js
const redis = require("redis");
const { REDIS_CONF } = require("../conf/db.js");

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.connect();
redisClient.on("error", (err) => {
  console.error(err);
});

function set(key, val) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val, redis.print);
}

function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val == null) {
        resolve(null);
        return;
      }

      try {
        resolve(JSON.parse(val));
      } catch (ex) {
        resolve(val);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};
```

```js
// 仅展示有改动的函数
// app.js 代码
const { get, set } = require("./src/db/redis");

const serverHandle = (req, res) => {
  // 设置返回值格式 JSON
  res.setHeader("Content-type", "application/json");

  // 获取 path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析 query
  req.query = querystring.parse(url.split("?")[1]);

  // 解析 Cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ""; // k1=v1;k2=v2
  cookieStr.split(";").forEach((item) => {
    if (!item) {
      return;
    }
    const arr = item.split("=");
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 解析 session
  // let needSetCookie = false
  // let userId = req.cookie.userid
  // if (userId) {
  // 	if (!SESSION_DATA[userId]) {
  // 		SESSION_DATA[userId] = {}
  // 	}
  // } else {
  // 	needSetCookie = true
  // 	userId = `${Date.now()}_${Math.random()}`
  // 	SESSION_DATA[userId] = {}
  // }
  // req.session = SESSION_DATA[userId]

  // 解析 session
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (!userId) {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    set(userId, {});
  }
  console.log("userId:", userId);

  // 获取session
  req.sessionId = userId;
  get(req.sessionId)
    .then((sessionData) => {
      if (sessionData == null) {
        // 初始化 redis 中的 session 值
        set(req.sessionId, {});
        //初始化 session
        req.session = {};
      } else {
        // 设置 session
        req.session = sessionData;
      }
      console.log("req.session:", req.session);

      // 处理 postData
      return getPostData(req);
    })
    .then((postData) => {
      req.body = postData;

      const blogResult = handleBlogRouter(req, res);
      if (blogResult) {
        blogResult.then((blogData) => {
          if (needSetCookie) {
            // 操作 cookie
            res.setHeader(
              "Set-Cookie",
              `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(blogData));
        });
        return;
      }

      // 处理 user 路由
      const userResult = handleUserRouter(req, res);
      if (userResult) {
        userResult.then((userData) => {
          if (needSetCookie) {
            // 操作 cookie
            res.setHeader(
              "Set-Cookie",
              `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(userData));
        });
        return;
      }
      // 未命中路由，返回404
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write("404 Not Found\n");
      res.end();
    });
};
```

```js
// 仅展示有改动的函数
// ../src/router/user.js
const { set, get } = require('../db/redis')

const handleUserRouter = (req, res) => {
const method = req.method //GET POST

// 登录
if (method === 'POST' && req.path === '/api/user/login') {
  // const {username, password } = req.body
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data =>{
    if (data.username) {
    // // 操作 cookie
    // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
      req.session.username = data.username
      req.session.realname = data.realname
      set(req.sessionId, req.session)
      return new SuccessModel('登录成功！')
    }
    return new ErrorModel('login failed!')
  })
}
```

```js
// ./src/router/blog.js
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(new ErrorModel("未登录"));
  }
};

const handleBlogRouter = (req, res) => {
  const method = req.method; //GET POST
  const id = req.query.id;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    let author = req.query.author || "";
    const keyword = req.query.keyword || "";
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)

    if (req.query.isadmin) {
      // 管理员界面
      const loginCheckResult = loginCheck(req);
      if (loginCheckResult) {
        // 未登录
        return loginCheckResult;
      }
      // 强制查询自己的博客
      author = req.session.username;
    }

    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  //获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }

  //新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    // const author ='zhangsan' //作者假数据，等待登录
    req.body.author = req.session.username;
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  //更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    // const author ='zhangsan' //作者假数据，等待登录
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    const result = updateBlog(id, req.body);
    return result.then((value) => {
      if (value) {
        return new SuccessModel();
      }
      return new ErrorModel("Failed!");
    });
  }

  //删除博客
  if (method === "POST" && req.path === "/api/blog/del") {
    // const author ='zhangsan' //作者假数据，等待登录
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    // const author ='zhangsan' //作者假数据，等待登录

    req.body.author = req.session.username;

    const result = delBlog(id, author);
    return result.then((value) => {
      if (value) {
        return new SuccessModel();
      }
      return new ErrorModel();
    });
  }
};

module.exports = handleBlogRouter;
```

### 2.6 日志

#### 2.6.1 介绍

- 系统日志记录系统状态
  - 访问日志 access log（ server 端最重要的日志）
  - 自定义日志（包括自定义时间，错误记录等）
- Node.js 文件操作，Node.js stream
  - 日志储存到文件中成本低方便
  - 日志文件文件大，文件单一
- 日志功能的开发和使用
- 日志文件拆分，日志内容分析
- [fs 操作文件](https://blog.csdn.net/m0_59345890/article/details/126031016)
<div class="iframe-box">
  <iframe style="height:520px;" src="https://blog.csdn.net/m0_59345890/article/details/126031016"></iframe>
</div>

#### 2.6.2 Node.js 操作文件

```js
const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "data.txt");

// 读取文件内容
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log("err1: ", err);
    return;
  }
  console.log("data:", data.toString());
  return;
});

const content = "这是新的内容\n";
const opt = {
  flag: "a", // 追加写入，覆盖用 W
};
fs.writeFile(fileName, content, opt, (err) => {
  if (err) {
    console.log("err2: ", err);
  }
});
```

#### 2.6.3 Stream

- IO 操作的性能瓶颈
  - IO 包括 “网络 IO” 和 “文件 IO”
  - 相对于 CPU 计算和内存读写， IO 的突出特点就是：慢
  - 如何在有限的硬件资源下提高 IO 的操作效率

```js
// 标准输入输出
// process.stdin.pipe(process.stdout)

// const http = require('http')
// const server = http.createServer((req, res) => {
// 	if (req.method === 'POST') {
// 		req.pipe(res)
// 	}
// })

// server.listen(8000)

// 复制文件
// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname, 'data.txt')
// const fileName2 = path.resolve(__dirname, 'data-back.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)
// readStream.on('data', chunk => {
// 	console.log(chunk.toString())
// })
// readStream.on('end', () => {
// 	console.log('done!')
// })

const http = require("http");
const fs = require("fs");
const path = require("path");
const fileName1 = path.resolve(__dirname, "data.txt");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const readStream = fs.createReadStream(fileName1);
    readStream.pipe(res);
  }
});

server.listen(8000);
```

#### 2.6.4 写日志

```js
// ../src/utils/log.js

const fs = require("fs");
const path = require("path");

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + "\n"); //关键代码
}

// 生成 write Stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, "../", "../", "logs", fileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: "a",
  });
  return writeStream;
}

// 写访问日志
const accessWriteStream = createWriteStream("access.log");
function access(log) {
  writeLog(accessWriteStream, log);
}

module.exports = {
  access,
};
```

使用：

```js
const { access } = require("./src/utils/log");

access(`${Date.now()}_${Math.random().toFixed(3)}`);
```

#### 2.6.5 日志分析

```js
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// 解析文件名
const fileName = path.join(__dirname, "./", "logs", "access.log");
// 创建 readStream
const readStream = fs.createReadStream(fileName);

// 创建 readline 对象
const rl = readline.createInterface({
  input: readStream,
});

let sum = 0;

// 逐行读取
rl.on("line", (lineData) => {
  if (!lineData) {
    return;
  }
  sum++;

  const arr = lineData.split("_");
  console.log("lineData: ", lineData);
});

// 监听读取完成
rl.on("close", () => {
  console.log("访问总数: ", sum);
});
```

:::tip 总结

- 日志对 server 的重要性
- IO 性能瓶颈，使用 `stream` 提高性能， node.js 中如何操作
- 使用 `readline` 分析日志内容
  :::

### 2.7 Web 安全

#### 2.7.1 常见安全问题和解决方案

- SQL 注入：窃取数据库内容
- XSS 攻击：窃取前端的 Cookie 内容
- 密码加密：保障用户信息安全（重要）
- Server 端攻击方式非常多，预防手段也非常多
- 本科只讲常见的、能通过 Web Server ( Node.js ) 层面预防的
- 有些攻击需要硬件和服务来支持（需要 OP 支持），如 DDOS

#### 2.7.2 SQL 注入

- 最原始、最简单的攻击，从有了 Web2.0 就有了 SQL 注入攻击
- 攻击方式：输入一个 SQL 片段，最终拼接成一段攻击代码
- 预防措施：使用 MySQL 的 escape 函数处理输入数据内容即可

```js
const mysql = require("mysql");

// 创建 MySQL 连接池
const con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  port: "3306",
  database: "database",
});

con.connect();

// 获取用户输入
const username = "admin";
const password = "12345";

// 转义用户输入
const escapedUsername = mysql.escape(username);
const escapedPassword = mysql.escape(password);

// 构造查询语句
const sql = `SELECT * FROM users WHERE username=${escapedUsername} AND password=${escapedPassword}`;

// 执行查询操作
con.query(sql, (error, results, fields) => {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
});
```

#### 2.7.3 XSS 攻击

- 前端同学熟知的攻击方式，但 Server 端更应该掌握
- 攻击方式：在页面展示内容中参杂 JS 代码，以获取网页信息
- 预防措施：转换生成 JS 的特殊字符

1. 攻击代码演示：

```html
<!-- 在新建博客 title 或 content 中输入： -->
<script>
  alert(1);
</script>
```

2. 解决方案：引入`xss`库

- 安装依赖`npm i xss`
- 解决 xss 攻击代码演示：

```js
const xss = require("xss");

// 获取用户输入
const userInput = '<script>alert("XSS");</script>';

// 转义用户输入
const safeInput = xss(userInput);

// 输出转义后的结果
console.log(safeInput);
```

#### 2.7.4 密码加密

- 万一数据库被攻破，避免泄露用户信息
- 攻击方式：获取用户名和密码，再去尝试登录其它系统
- 预防措施：密码加密，密文储存

```js
// ./src/utils/cryp.js
const crypto = require("crypto");
// 密钥
const SECRT_KEY = "ZWiep-2947@.?";

// md5 加密
function md5(content) {
  let md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

// 加密函数
function genPassword(password) {
  const str = `password=${password}&key=${SECRT_KEY}`;
  return md5(str);
}
// const result = genPassword('123456')
// console.log(result)

module.exports = {
  genPassword,
};
```

## 03. Express 框架

### 3.1 Express 介绍

- [Express 入门指南](https://mp.weixin.qq.com/s/QG4UitBChkiNgC2VOqtjRw)
- Express 是 Node.js 最常用的 Web Server 框架
- 什么是框架？
- 不要以为 Express 框架过时了

### 3.2 安装 Express

- `npm install express-generator -g`
- `express express-project`
- `npm install & npm start`

### 3.3 Express 解析

#### 3.3.1 入口代码 app.js

```js
var createError = require("http-errors"); // 处理404生成错误页
var express = require("express");
var path = require("path"); // 路径
var cookieParser = require("cookie-parser"); // 解析Cookie
var logger = require("morgan"); // 记录日志

var indexRouter = require("./routes/index"); // 路由
var usersRouter = require("./routes/users");

var app = express(); // 实例化express

// view engine setup
app.set("views", path.join(__dirname, "views")); // 前端页面
app.set("view engine", "jade");

app.use(logger("dev")); // 日志
app.use(express.json()); // POST数据格式化
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); // 静态文件位置

app.use("/", indexRouter); // 注册路由
app.use("/users", usersRouter);

// catch 404 and forward to error handler 获取404
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler 处理报错
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
```

#### 3.3.2 处理路由

```js
// app.js
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user')；

app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);
```

```js
// ./routes/blog.js
var express = require("express");
var router = express.Router();

router.get("/list", function (req, res, next) {
  res.json({
    error: 0,
    data: [1, 2, 3],
  });
});

router.get("/detail", function (req, res, next) {
  res.json({
    error: 0,
    data: "ok!",
  });
});

module.exports = router;
```

```js
// ./routes/user.js
var express = require("express");
var router = express.Router();

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  res.json({
    error: 0,
    data: {
      username,
      password,
    },
  });
});

module.exports = router;
```

#### 3.3.3 Express 中间件

:::tip 注意

- 有很多 app.use()
- 代码中的 next 参数是什么？
  :::

```js
// express-test/app.js
const express = require("express");

// 本次 http 请求实例
const app = express();

app.use((req, res, next) => {
  console.log("请求开始...", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  // 假设在处理 Cookie
  console.log("假设在处理 Cookie: ");
  req.cookie = {
    userId: "asd123",
  };
  next();
});

app.use((req, res, next) => {
  // 假设处理 postData
  console.log("假设处理 postData: ");
  // 异步
  setTimeout(() => {
    req.body = {
      a: 100,
      b: 200,
    };
    next();
  });
});

app.use("/api", (req, res, next) => {
  console.log("处理 api 路由");
  next();
});

app.get("/api", (req, res, next) => {
  console.log("get api 路由");
  next();
});

app.post("/api", (req, res, next) => {
  console.log("post api 路由");
  next();
});

// 模拟登录验证
function loginCheck(req, res, next) {
  console.log("模拟登陆失败");
  setTimeout(() => {
    res.json({
      error: -1,
      msg: "登陆失败",
    });
    // next()
  });
}

app.get("/api/get-cookie", loginCheck, (req, res, next) => {
  console.log("get /api/get-cookie");
  res.json({
    error: 0,
    data: req.cookie,
  });
});

app.post("/api/get-post-data", (req, res, next) => {
  console.log("post /api/get-poat-data");
  res.json({
    error: 0,
    data: req.body,
  });
});

app.use((req, res, next) => {
  console.log("处理 404");
  res.json({
    error: -1,
    msg: "404",
  });
});

app.listen(999, () => {
  console.log("server is running on port 999...");
});
```

```js
// 简单示例
const express = require("express");

const app = express();

app.use((req, res, next) => {
  req["test"] = "1122334";
  console.log(1);
  next();
  console.log(4);
});

app.use((req, res, next) => {
  console.log(2);
  next();
  console.log(3);
});

app.use("/", (req, res, next) => {
  console.log("11");
  res.json({
    error: 0,
    data: req["test"],
  });
  console.log("22");
});
// 访问http://127.0.0.1:8088，打印结果 1 2 11 22 3 4

app.listen("8088", () => {
  console.log("server is running on port 8088...");
});
```

:::tip 小结

- 初始化代码中，各个插件的作用
- Express 如何处理路由
- Express 中间件
  :::

### 3.4 实现

:::tip 注意

- 安装插件 mysql xss，`npm install mysql xss`
- controller resModel utils conf db 相关代码可以拷贝过来
- 使用 express-session 和 connect-redis ，简单方便，`npm install express-session connect-redis@4.0.3 redis@2.8.0`【需注意版本】
- req.session 保存登录信息，登录检验做成 express 中间件
  :::

```js
// app.js
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redisClient = require("./db/redis");
const sessionStore = new RedisStore({
  client: redisClient,
});
app.use(
  session({
    secret: "QZlp#31_59!",
    cookie: {
      // path: '', //默认配置
      // httpOnly: true, //默认配置
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: sessionStore,
  })
);
```

```js
// ./db/mysql.js
const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db");

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF);

//开始连接
con.connect();

// 统一执行 sql 语句的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}

module.exports = {
  exec,
  escape: mysql.escape,
};
```

```js
// ./db/redis.js
const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.on("error", (err) => {
  console.error(err);
});

module.exports = redisClient;
```

```js
// ./middleware/loginCheck.js
const { ErrorModel } = require("../model/resModel");

module.exports = (req, res, next) => {
  if (req.session.username) {
    next();
    return;
  }
  res.json(new ErrorModel("未登录"));
};
```

```js
// ./routes/blog.js
var express = require("express");
var router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck.js");

router.get("/list", function (req, res, next) {
  let author = req.query.author || "";
  const keyword = req.query.keyword || "";
  if (req.query.isadmin) {
    // 管理员界面
    console.log("is admin");
    if (req.session.username == null) {
      // 未登录
      console.log("is admin but not login");
      res.json(new ErrorModel("未登录"));
      return;
    }
    // 强制查询自己的博客
    author = req.session.username;
  }

  const result = getList(author, keyword);
  return result.then((listData) => {
    res.json(new SuccessModel(listData));
  });
});

router.get("/detail", (req, res, next) => {
  const result = getDetail(req.query.id);
  return result.then((detailData) => {
    res.json(new SuccessModel(detailData));
  });
});

router.post("/new", loginCheck, (req, res, next) => {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

router.post("/update", loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body);
  return result.then((value) => {
    if (value) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("更新博客失败!"));
    }
  });
});

router.post("/del", loginCheck, (req, res, next) => {
  const author = req.session.username;
  const result = delBlog(req.query.id, author);
  return result.then((value) => {
    if (value) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("删除失败！"));
    }
  });
});

module.exports = router;
```

```js
//../src/controller/blog.js
const { exec, escape } = require("../db/mysql");
const xss = require("xss");

//博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    author = escape(author);
    sql += `and author=${author} `;
  }
  if (keyword) {
    keyword = escape("%" + xss(keyword) + "%");
    sql += `and title like ${keyword} `;
  }
  sql += `order by createtime desc;`;

  // console.log(sql)
  //返回 promise
  return exec(sql);
};

//博客详情
const getDetail = (id) => {
  const sql = `select * from blogs where id=${id}`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

//新建博客
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title conten 属性
  const title = escape(xss(blogData.title));
  const content = escape(xss(blogData.content));
  const author = escape(blogData.author);
  const createtime = escape(Date.now());

  const sql = `
	insert into blogs (title, content, createtime, author)
	values(${title}, ${content}, ${createtime}, ${author})
	`;

  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

//更新博客
const updateBlog = (id, blogData = {}) => {
  // id 就是要更新的 id
  // blogData 是一个博客对象，包含 title content 属性
  const title = escape(xss(blogData.title));
  const content = escape(xss(blogData.content));

  const sql = `
		update blogs set title=${title}, content=${content} where id=${id}
	`;

  return exec(sql).then((updateData) => {
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

//删除博客
const delBlog = (id, author) => {
  author = escape(author);
  // id 就是要删除的博客的 id
  const sql = `delete from blogs where id=${id} and author=${author}`;
  console.log(sql);
  return exec(sql).then((delData) => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
```

```js
// ./routes/user.js
var express = require("express");
var router = express.Router();
const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  const result = login(username, password);
  return result.then((data) => {
    if (data.username) {
      // // 操作 cookie
      // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
      req.session.username = data.username;
      req.session.realname = data.realname;

      res.json(new SuccessModel());
      return;
    }
    res.json(new ErrorModel("登录失败!"));
  });
});

module.exports = router;
```

```js
// ./controller/user.js
const { exec, escape } = require("../db/mysql.js");
const { genPassword } = require("../utils/cryp.js");
const xss = require("xss");
// 登录验证
const login = (username, password) => {
  username = escape(xss(username));

  password = genPassword(password);
  password = escape(password);

  const sql = `
		select username, realname from users where username=${username} and password=${password}
	`;
  return exec(sql).then((rows) => {
    return rows[0] || {};
  });
};

module.exports = {
  login,
};
```

### 3.5 日志

:::tip 使用 Morgan 写日志

- [Morgan](https://github.com/expressjs/morgan)
- access log 记录，直接使用脚手架推荐的 Morgan
- 自定义日志使用 console.log 和 console.error 即可
- 日志拆分、日志内容分析
  :::

```js
//  app.js
var path = require("path"); // 路径
const fs = require("fs");

const ENV = process.env.NODE_ENV;
if (ENV != "production") {
  // 开发环境
  app.use(logger("dev"));
} else {
  const logFileName = path.join(__dirname, "logs", "access.log");
  const writeStream = fs.createWriteStream(logFileName, {
    flags: "a",
  });
  app.use(
    logger("combined", {
      stream: writeStream,
    })
  );
}
// app.use(logger('dev',{
// 	stream: process.stdout
// })); // 记录日志
```

### 3.6 详解 Express 中间件

- 回顾中间件使用
- 分析如何实现
- app.use 用来注册中间件，先收集起来
- 遇到 http 请求，根据 path 和 method 判断触发哪些
- 实现 next 机制，即上一个通过 next 触发下一个
- 代码演示

```js
// ./lib/express/like-express.js
const http = require("http");
const slice = Array.prototype.slice;

class LikeExpress {
  constructor() {
    // 存放中间件列表
    this.routes = {
      all: [], // app.use(...)
      get: [], // app.get(...)
      post: [], // app.post(...)
    };
  }

  register(path) {
    const info = {};
    if (typeof path === "string") {
      info.path = path;
      // 从第二个参数开始，转为数组，存入 stack
      info.stack = slice.call(arguments, 1);
    } else {
      info.path = "/";
      // 从第一个参数开始，转换为数组，存入 stack
      info.stack = slice.call(arguments, 0);
    }
    return info;
  }

  use() {
    const info = this.register.apply(this, arguments);
    this.routes.all.push(info);
  }

  get() {
    const info = this.register.apply(this, arguments);
    this.routes.get.push(info);
  }

  post() {
    const info = this.register.apply(this, arguments);
    this.routes.post.push(info);
  }

  match(method, url) {
    let stack = [];
    if (url === "/favicon.ico") {
      return stack;
    }

    // 获取 routes
    let curRoutes = [];
    curRoutes = curRoutes.concat(this.routes.all);
    curRoutes = curRoutes.concat(this.routes[method]);

    curRoutes.forEach((routeInfo) => {
      if (url.indexOf(routeInfo.path) === 0) {
        // url === '/api/get-cookie' 且 routeInfo.path === '/'
        // url === '/api/get-cookie' 且 routeInfo.path === '/api'
        // url === '/api/get-cookie' 且 routeInfo.path === '/api/get-cookie'
        stack = stack.concat(routeInfo.stack);
      }
    });
    return stack;
  }

  // 核心的 next 机制
  handle(req, res, stack) {
    const next = () => {
      // 拿到第一个匹配的中间件
      const middleware = stack.shift();
      if (middleware) {
        // 执行中间件函数
        middleware(req, res, next);
      }
    };
    next();
  }

  callback() {
    return (req, res) => {
      res.json = (data) => {
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(data));
      };
      const url = req.url;
      const method = req.method.toLowerCase();

      const resultList = this.match(method, url);
      this.handle(req, res, resultList);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

// 工厂函数
module.exports = () => {
  return new LikeExpress();
};
```

```js
// 测试代码 ./lib/express/test.js
const express = require("./like-express.js");

// 本次 http 请求的实例
const app = express();

app.use((req, res, next) => {
  console.log("请求开始...", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  // 假设在处理 cookie
  console.log("处理coookie...");
  req.cookie = {
    uerId: "abc123",
  };
  next();
});

app.use("/api", (req, res, next) => {
  console.log("处理 /api 路由");
  next();
});

app.get("/api", (req, res, next) => {
  console.log("get /api 路由");
  next();
});

// 模拟登录验证
function loginCheck(req, res, next) {
  setTimeout(() => {
    console.log("模拟登录成功");
    next();
  });
}

app.get("/api/get-cookie", loginCheck, (req, res, next) => {
  console.log("get /api/get-cookie");
  res.json({
    errno: 0,
    data: req.cookie,
  });
});

app.listen(8088, () => {
  console.log("server is running on port 800");
});
```

### 3.7 总结

- 使用框架开发的好处（相比之前不使用框架）
- express 的使用和路由处理，以及操作 session redis 日志等
- express 中间件的使用和原理

## 04. Koa2 框架

### 4.1 Koa2 介绍

- Express 中间件是异步回调，Koa2 原生支持 async/await
- 新开发的框架和系统，都是开始基于 Koa2，例如 egg.js
- Express 虽然未过时，但是 Koa2 肯定是未来的趋势
- 后端 Koa2 + MongoDB，前端 Vue3 + Element-Plus 编写的简书，[项目地址](https://github.com/ele-cat/vue3-jianshu)

```js
// async await 获取内容
async function readFileData() {
  // 同步写法
  try {
    const aData = await getFileContent("a.json");
    console.log("aData:", aData);
    const bData = await getFileContent(aData.next);
    console.log("bData:", bData);
    const cData = await getFileContent(bData.next);
    console.log("cData:", cData);
  } catch (err) {
    console.log("err", err);
  }
}

readFileData();

function getFileContent(file) {
  return new Promise((reslove, reject) => {
    if (Math.random() > 0.5) {
      reslove(121);
    } else {
      reject(202);
    }
  });
}

async function readAData() {
  try {
    const aData = await getFileContent("a.json");
    return aData;
  } catch (error) {
    console.log("readAData error: ", error);
  }
}
async function test() {
  try {
    const aData = await readAData();
    console.log("aData:", aData);
  } catch (error) {
    console.log("test error: ", error);
  }
}
test();

// 要点 async await
// 1. await 后面可以追加 promise 对象，获取 resolve 的值
// 2. await 必须包裹在 async 函数内
// 3. async 函数执行返回的也是一个 promise 对象
// 4. try-catch 截获 promise 中 reject 的值
```

### 4.2 安装 Koa2

- `npm install koa-generator -g`
- `Koa2 koa2-test(初始化目录名)`
- `npm install & npm run dev`

### 4.3 Koa2 解析

#### 4.3.1 入口代码 app.js

```js
const Koa = require("koa");
const app = new Koa(); // 实例化Koa
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const index = require("./routes/index");
const users = require("./routes/users");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger()); //日志
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
```

#### 4.3.2 介绍路由

```js
// ./blog-koa2/routes/blog.js
const router = require("koa-router")();

router.prefix("/api/blog"); // 设置前缀

router.get("/list", function (ctx, next) {
  const qurey = ctx.qurey;
  ctx.body = {
    errno: 0,
    qurey,
    data: ["这是博客列表"],
  };
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
```

#### 4.3.3 中间件机制

- app.use 和 express 一样
- next 返回 promise ，其它和 express 一样

### 4.4 实战

#### 4.4.1 实现 Session

- 和 express 类似
- 基于 koa-generic-session 和 koa-redis
  - `npm i koa-generic-session koa-redis redis --save`

```js
// ./blog-koa2/app.js
// session 配置
// 密匙
app.keys = ["Il34*fs24"];
app.use(
  session({
    // 配置 cookie
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    // 配置 redis
    store: redisStore({
      all: "127.0.0.1：6379", // 暂时写死
    }),
  })
);
```

```js
// ./blog-koa2/routes/users.js
// 测试 session
router.get("/session-test", async function (ctx, next) {
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0;
  }
  ctx.session.viewCount++;
  ctx.body = {
    errno: 0,
    viewCount: ctx.session.viewCount,
  };
});
```

#### 4.4.2 开发功能

- 复用之前的代码，controller resModel utils conf db
- 安装插件 mysql xss，`npm install mysql xss`

```js
// ./app.js
const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const { REDIS_CONF } = require("./conf/db.js");

const index = require("./routes/index");
const user = require("./routes/user.js");
const blog = require("./routes/blog.js");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// session 配置
app.keys = ["Il34*fs24"];
app.use(
  session({
    // 配置 cookie
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    // 配置 redis
    store: redisStore({
      // all: '127.0.0.1：6379' // 暂时写死
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  })
);

// routes
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());
app.use(blog.routes(), blog.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
```

```js
// ./routes/blog.js
const router = require("koa-router")();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck.js");

router.prefix("/api/blog");

router.get("/list", async function (ctx, next) {
  let author = ctx.query.author || "";
  const keyword = ctx.query.keyword || "";
  if (ctx.query.isadmin) {
    // 管理员界面
    console.log("is admin");
    if (ctx.session.username == null) {
      // 未登录
      console.log("is admin but not login");
      ctx.body = new ErrorModel("未登录");
      return;
    }
    // 强制查询自己的博客
    author = ctx.session.username;
  }

  const listData = await getList(author, keyword);
  ctx.body = new SuccessModel(listData);
});

router.get("/detail", async function (ctx, next) {
  const detailData = await getDetail(ctx.query.id);
  ctx.body = new SuccessModel(detailData);
});

router.post("/new", loginCheck, async function (ctx, next) {
  const body = ctx.request.body;
  body.author = ctx.session.username;
  const data = await newBlog(body);
  ctx.body = new SuccessModel(data);
});

router.post("/update", loginCheck, async function (ctx, next) {
  const value = await updateBlog(ctx.query.id, ctx.request.body);
  if (value) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("更新博客失败!");
  }
});

router.post("/del", loginCheck, async function (ctx, next) {
  const author = ctx.session.username;
  const value = await delBlog(ctx.query.id, author);
  if (value) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("删除失败！");
  }
});

module.exports = router;
```

```js
// ./controller/blog.js
const { exec, escape } = require("../db/mysql");
const xss = require("xss");

//博客列表
const getList = async (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    author = escape(author);
    sql += `and author=${author} `;
  }
  if (keyword) {
    keyword = escape("%" + xss(keyword) + "%");
    sql += `and title like ${keyword} `;
  }
  sql += `order by createtime desc;`;
  return await exec(sql);
};

//博客详情
const getDetail = async (id) => {
  const sql = `select * from blogs where id=${id}`;
  const rows = await exec(sql);
  return rows[0];
};

//新建博客
const newBlog = async (blogData = {}) => {
  // blogData 是一个博客对象，包含 title conten 属性
  const title = escape(xss(blogData.title));
  const content = escape(xss(blogData.content));
  const author = escape(blogData.author);
  const createtime = escape(Date.now());

  const sql = `
	insert into blogs (title, content, createtime, author)
	values(${title}, ${content}, ${createtime}, ${author})
	`;
  const insertData = await exec(sql);
  return {
    id: insertData.insertId,
  };
};

//更新博客
const updateBlog = async (id, blogData = {}) => {
  // id 就是要更新的 id
  // blogData 是一个博客对象，包含 title content 属性
  const title = escape(xss(blogData.title));
  const content = escape(xss(blogData.content));

  const sql = `
		update blogs set title=${title}, content=${content} where id=${id}
	`;
  const updateData = await exec(sql);
  if (updateData.affectedRows > 0) {
    return true;
  }
  return false;
};

//删除博客
const delBlog = async (id, author) => {
  author = escape(author);
  // id 就是要删除的博客的 id
  const sql = `delete from blogs where id=${id} and author=${author}`;
  // console.log(sql)
  const delData = await exec(sql);
  if (delData.affectedRows > 0) {
    return true;
  }
  return false;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
```

```js
// ./routes/users.js
const router = require("koa-router")();
const { login } = require("../controller/user.js");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.prefix("/api/user");

router.post("/login", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  const data = await login(username, password);
  if (data.username) {
    // // 操作 cookie
    // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
    ctx.session.username = data.username;
    ctx.session.realname = data.realname;
    ctx.body = new SuccessModel();
    return;
  }
  ctx.body = new ErrorModel("登录失败!");
});

// router.get('/session-test', async function (ctx, next) {
// 	if (ctx.session.viewCount == null) {
// 		ctx.session.viewCount = 0
// 	}
// 	ctx.session.viewCount++
// 	ctx.body = {
// 		errno: 0,
// 		viewCount: ctx.session.viewCount
// 	}
// })

module.exports = router;
```

```js
// ./controller/users.js
const { exec, escape } = require("../db/mysql.js");
const { genPassword } = require("../utils/cryp.js");
const xss = require("xss");
// 登录验证
const login = async (username, password) => {
  username = escape(xss(username));

  password = genPassword(password);
  password = escape(password);

  const sql = `
		select username, realname from users where username=${username} and password=${password}
	`;
  const rows = await exec(sql);
  return rows[0] || {};
};

module.exports = {
  login,
};
```

#### 4.4.3 日志

- `npm i koa-morgan`

```js
// app.js
// 记录日志
const ENV = process.env.NODE_ENV;
if (ENV != "production") {
  // 开发环境
  app.use(morgan("dev"));
} else {
  // 线上环境
  const logFileName = path.join(__dirname, "logs", "access.log");
  const writeStream = fs.createWriteStream(logFileName, {
    flags: "a",
  });
  app.use(
    morgan("combined", {
      stream: writeStream,
    })
  );
}
```

### 4.5 中间件原理

- 回顾中间件使用
- 分析如何实现
  - app.use 用来注册中间件，先收集起来
  - 实现 next 机制，即上一个通过 next 触发下一个
  - 不涉及 method 和 path 的判断
- 代码演示【洋葱模型】

```js
const Koa = require("koa");
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  console.log("第一层洋葱-开始");
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  console.log("第一层洋葱-结束");
});

// x-response-time

app.use(async (ctx, next) => {
  console.log("第二层洋葱-开始");
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
  console.log("第二层洋葱-结束");
});

// response

app.use(async (ctx) => {
  console.log("第三层洋葱-开始");
  ctx.body = "Hello World";
  console.log("第三层洋葱-结束");
});

app.listen(8000);
```

```js
// ./lib/koa2/like-koa2.js
const http = require("http");

// 组合中间件
function compose(middlewareList) {
  return function (ctx) {
    function dispatch(i) {
      const fn = middlewareList[i];
      try {
        return Promise.resolve(
          fn(ctx, dispatch.bind(null, i + 1)) // promise
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}

class LikeKoa2 {
  constructor() {
    this.middlewareList = [];
  }

  use(fn) {
    this.middlewareList.push(fn);
    return this;
  }

  createContext(req, res) {
    const ctx = {
      req,
      res,
    };
    ctx.query = req.query;
    return ctx;
  }

  handleRequest(ctx, fn) {
    return fn(ctx);
  }

  callback() {
    const fn = compose(this.middlewareList);
    return (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

module.exports = LikeKoa2;
```

```js
// ./lib/koa2/test.js
const Koa = require("./like-koa2.js");
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  console.log("第一层洋葱-开始");
  await next();
  const rt = ctx["X-Response-Time"];
  console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
  console.log("第一层洋葱-结束");
});

// x-response-time
app.use(async (ctx, next) => {
  console.log("第二层洋葱-开始");
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx["X-Response-Time"] = `${ms}ms`;
  console.log("第二层洋葱-结束");
});

// response
app.use(async (ctx) => {
  console.log("第三层洋葱-开始");
  ctx.res.end("Hello World");
  console.log("第三层洋葱-结束");
});

app.listen(8000);
```

### 4.6 总结

- 使用 async/await 的好处
- koa2 的使用，以及如何操作 session redis 日志
- koa2 中间件的使用和原理

## 05. 上线

- 服务器稳定性
- 充分利用服务器硬件资源，以便提高性能
- 线上日志记录

### 5.1 PM2

- 进程守护，系统崩溃自动重启
- 启动多进程，充分利用 CPU 和内存
- 自带日志记录功能

#### 5.1.1 下载安装

- `npm install pm2 -g`
- `pm2 --version `

#### 5.1.2 常用命令

- `pm2 start <配置或者文件> 启动 pm2`
- `pm2 list 查看所有 pm2 进程`
- `pm2 restart <Appname>/<id>`
- `pm2 stop <AppName>/<id>`
- `pm2 delete <AppName>/<id>`
- `pm2 info <AppName>/<id> 查看进程详细信息`
- `pm2 log <AppName>/<id> 查看进程日志`
- `pm2 monit <AppName>/<id> 查看 CPU 内存信息`

```sh
$ pm2 start app.js              # 启动app.js应用程序
$ pm2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用实例     # 4个应用程序会自动进行负载均衡
$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
$ pm2 start app.js --watch      # 当文件变化时自动重启应用
$ pm2 start script.sh           # 启动 bash 脚本

$ pm2 list                      # 列表 PM2 启动的所有的应用程序
$ pm2 monit                     # 显示每个应用程序的CPU和内存占用情况
$ pm2 show [app-name]           # 显示应用程序的所有信息

$ pm2 logs                      # 显示所有应用程序的日志
$ pm2 logs [app-name]           # 显示指定应用程序的日志
$ pm2 flush

$ pm2 stop all                  # 停止所有的应用程序
$ pm2 stop 0                    # 停止 id为 0的指定应用程序
$ pm2 restart all               # 重启所有应用
$ pm2 reload all                # 重启 cluster mode下的所有应用
$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode
$ pm2 delete all                # 关闭并删除所有应用
$ pm2 delete 0                  # 删除指定应用 id 0
$ pm2 scale api 10              # 把名字叫api的应用扩展到10个实例
$ pm2 reset [app-name]          # 重置重启数量

$ pm2 startup                   # 创建开机自启动命令
$ pm2 save                      # 保存当前应用列表
$ pm2 resurrect                 # 重新加载保存的应用列表
$ pm2 update                    # Save processes, kill PM2 and restore processes
$ pm2 generate                  # Generate a sample json configuration file

$ pm2 deploy app.json prod setup    # Setup "prod" remote server
$ pm2 deploy app.json prod          # Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2

$ pm2 module:generate [name]    # Generate sample module with name [name]
$ pm2 install pm2-logrotate     # Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # Uninstall module
$ pm2 publish                   # Increment version, git push and npm publish
```

#### 5.1.3 进程守护

- node app.js 和 nodemon app.js , 进程崩溃则不能访问
- pm2 遇到进程崩溃，会自动重启

```js
// ./pm2-test/app.js
const http = require("http");

const server = http.createServer((req, res) => {
  // 模拟日志
  console.log("cur time", Date.now());
  // 模拟错误
  console.log("假装出错了", Date.now());

  // 模拟一个错误
  if (req.url === "/err") {
    throw new Error("/err 出错了");
  }

  res.setHeader("Content-type", "application/json");
  res.end(
    JSON.stringify({
      errno: 0,
      msg: "pm2 test server 2",
    })
  );
});

server.listen(8000);
console.log("server is runnig on port 8000...");
```

- 执行`nodemon testError`，访问[http://127.0.0.1:8000/err](http://127.0.0.1:8000/err)报错无法重启
- 执行`pm2 start testError`，访问[http://127.0.0.1:8000/err](http://127.0.0.1:8000/err)报错后可以自动重启

#### 5.1.4 常用配置和日志记录

- 新建 PM2 配置文件（包括进程数量，日志文件目录等）
- 修改 PM2 启动命令，重启
- 访问 server ，检查日志文件的内容（日志记录是否生效）

配置文件 pm2.conf.json

```json
{
  "apps": {
    "name": "pm2-test-server",
    "script": "app.js",
    "watch": true,
    "ingnore_watch": ["node_modules", "logs"],
    "instances": 4,
    "error_file": "logs/err.log",
    "out_file": "logs/out.log",
    "log_date_format": "YYYY-MM-DD HH:mm:ss"
  }
}
```

启动方式 package.json

```json
{
  "name": "pm2-test",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=dev nodemon app.js",
    "prd": "cross-env NODE_ENV=production pm2 start pm2.conf.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pm2": "^4.2.0"
  }
}
```

### 5.2 多进程

- 为何使用多进程？
  - 回顾之前讲 session 时说过， 操作系统限制一个进程的内存
  - 内存：无法充分利用机器全部内存
  - CPU：无法充分利用多核 CPU
- 多进程和 redis
  - 多进程之间，内存无法共享
  - 多进程访问一个 redis ，实现数据共享

### 5.3 服务器运维

- 服务器运维，一般都由专业的 OP 人员和部门来处理
- 大公司都有自己的运维团队
- 中小型工期推荐使用一些云服务，如阿里云的 node 平台

### 5.4 总结

- PM2 的核心价值
- PM2 的常用命令和配置，日志记录
- 多进程

<Comment />
