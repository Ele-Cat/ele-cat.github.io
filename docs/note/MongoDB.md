# MongoDB

## 01.NoSQL 简介

> NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是 SQL"。

### 1.1 什么是 NoSQL？

- NoSQL，指的是非关系型的数据库。NoSQL 有时也称作 Not Only SQL 的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。
- NoSQL 用于超大规模数据的存储。（例如谷歌或 Facebook 每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。

### 1.2 NoSQL 的优点/缺点

- 优点
  - 高可扩展性
  - 分布式计算
  - 低成本
  - 架构的灵活性，半结构化数据
  - 没有复杂的关系
- 缺点
  - 没有标准化
  - 有限的查询功能（到目前为止）
  - 最终一致是不直观的程序

## 02.MongoDB 是什么

- MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
- MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

### 2.1 主要特点

- MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。
- 你可以在 MongoDB 记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。
- 你可以通过本地或者网络创建数据镜像，这使得 MongoDB 有更强的扩展性。
- 如果负载的增加（需要更多的存储空间和更强的处理能力），它可以分布在计算机网络中的其他节点上这就是所谓的分片。
- Mongo 支持丰富的查询表达式。查询指令使用 JSON 形式的标记，可轻易查询文档中内嵌的对象及数组。
- MongoDb 使用 update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。
- Mongodb 中的 Map/reduce 主要是用来对数据进行批量处理和聚合操作。
- Map 和 Reduce。Map 函数调用 emit(key,value)遍历集合中所有的记录，将 key 与 value 传给 Reduce 函数进行处理。
- Map 函数和 Reduce 函数是使用 Javascript 编写的，并可以通过 db.runCommand 或 mapreduce 命令来执行 MapReduce 操作。
- GridFS 是 MongoDB 中的一个内置功能，可以用于存放大量小文件。
- MongoDB 允许在服务端执行脚本，可以用 Javascript 编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。
- MongoDB 支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
- MongoDB 安装简单。

### 2.2 下载&安装

- [MongoDB Shell](https://www.mongodb.com/try/download/shell)
- [MongoDB Compass(GUI)](https://www.mongodb.com/try/download/compass)
- [Windows MongoDB](https://www.runoob.com/mongodb/mongodb-window-install.html)

## 03.MongoDB 概念解析

### 3.1 基础概念

| SQL 术语/概念 | MongoDB 术语/概念 | 解释/说明                              |
| ------------- | ----------------- | -------------------------------------- |
| database      | database          | 数据库                                 |
| table         | collection        | 数据库表/集合                          |
| row           | document          | 数据记录行/文档                        |
| column        | field             | 数据字段/域                            |
| index         | index             | 索引                                   |
| table joins   |                   | 表连接,MongoDB 不支持                  |
| primary key   | primary key       | 主键,MongoDB 自动将\_id 字段设置为主键 |

#### 3.1.1 数据库

- 一个 mongodb 中可以建立多个数据库。
- MongoDB 的默认数据库为"db"，该数据库存储在 data 目录中。
- MongoDB 的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

#### 2.1.2 集合

- 集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。
- 集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。

#### 2.1.3 文档(Document)

文档是一组键值(key-value)对(即 BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

### 3.2 数据类型

| 数据类型           | 描述                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| String             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。                              |
| Integer            | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。                                       |
| Boolean            | 布尔值。用于存储布尔值（真/假）。                                                                          |
| Double             | 双精度浮点值。用于存储浮点值。                                                                             |
| Min/Max keys       | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。                                               |
| Array              | 用于将数组或列表或多个值存储为一个键。                                                                     |
| Timestamp          | 时间戳。记录文档修改或添加的具体时间。                                                                     |
| Object             | 用于内嵌文档。                                                                                             |
| Null               | 用于创建空值。                                                                                             |
| Symbol             | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。                     |
| Date               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID          | 对象 ID。用于创建文档的 ID。                                                                               |
| Binary Data        | 二进制数据。用于存储二进制数据。                                                                           |
| Code               | 代码类型。用于在文档中存储 JavaScript 代码。                                                               |
| Regular expression | 正则表达式类型。用于存储正则表达式。                                                                       |

## 04.数据库连接

- 安装依赖

```sh
yarn add mongoose
npm i -S mongoose
```

- 创建连接 /db/index.js

```js
const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/learn", {
      // useNewUrlParser: true,
    })
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch((err) => {
      console.error("数据库连接失败", err);
    });
};
```

- 连接数据库 /app.js

```js
const MongoConnect = require("./db");
MongoConnect();
```

## 05.数据库操作

### 5.1 创建数据库