---
outline: [2]
---

# MySQL 数据库

Java 学累了，学学 MySQL

## 01. 简介

### 1.1 什么是 MySQL

MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL 是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。

### 1.2 为什么需要数据库

应用程序储存信息可以把数据储存在文档中，但是随着业务复杂度提升，数据量增大，如何管理数据成了最大的问题。同时，不同的程序读取数据的方式也不同，导致代码难以复用。

所以，数据库作为一种专门管理数据的软件就出现了。应用程序不需要自己管理数据，而是通过数据库软件提供的接口来读写数据。至于数据本身如何存储到文件，那是数据库软件的事情，应用程序自己并不关心：

<pre>
┌───────────┐
│application│
└───────────┘
     ▲ │
     │ │
 read│ │write
     │ │
     │ ▼
┌───────────┐
│ database  │
└───────────┘
</pre>

这样一来，编写应用程序的时候，数据读写的功能就被大大地简化了。

### 1.3 数据库的分类

- 关系型数据库
  - MySQL
  - Oracle
  - SQL Server
  - PostgreSQL
  - SQLite
  - ...
- 非关系型数据库
  - MongoDB
  - Redis
  - ...
- 数据库的选择
  - 关系型数据库：适用于需要复杂查询和事务处理的场景，如金融、银行、电商等。
  - 非关系型数据库：适用于需要高并发、高可用、高可扩展性的场景，如社交媒体、游戏、物联网等。

### 1.4 数据类型

对于一个关系表，除了定义每一列的名称外，还需要定义每一列的数据类型。关系数据库支持的标准数据类型包括数值、字符串、时间等：

| 名称         | 类型           | 说明                                                                                       |
| ------------ | -------------- | ------------------------------------------------------------------------------------------ |
| INT          | 整型           | 4 字节整数类型，范围约+/-21 亿                                                             |
| BIGINT       | 长整型         | 8 字节整数类型，范围约+/-922 亿亿                                                          |
| REAL         | 浮点型         | 4 字节浮点数，范围约+/-1038                                                                |
| DOUBLE       | 浮点型         | 8 字节浮点数，范围约+/-10308                                                               |
| DECIMAL(M,N) | 高精度小数     | 由用户指定精度的小数，例如，DECIMAL(20,10)表示一共 20 位，其中小数 10 位，通常用于财务计算 |
| CHAR(N)      | 定长字符串     | 存储指定长度的字符串，例如，CHAR(100)总是存储 100 个字符的字符串                           |
| VARCHAR(N)   | 变长字符串     | 存储可变长度的字符串，例如，VARCHAR(100)可以存储 0~100 个字符的字符串                      |
| BOOLEAN      | 布尔类型       | 存储 True 或者 False                                                                       |
| DATE         | 日期类型       | 存储日期，例如，2018-06-22                                                                 |
| TIME         | 时间类型       | 存储时间，例如，12:20:59                                                                   |
| DATETIME     | 日期和时间类型 | 存储日期+时间，例如，2018-06-22 12:20:59                                                   |

## 02. 安装

1. 从 [MySQL 官方](https://dev.mysql.com/downloads/mysql/)，下载最新的 MySQL Community Server 版本，并安装
2. 配置环境变量
   1. 打开环境变量配置界面
   2. 点击 `新建`，变量名 `MYSQL_HOME`，变量值为 MySQL 安装目录
   3. 在 `Path` 变量中添加 MySQL 安装目录的 `bin` 目录
3. 启动 MySQL 服务
   1. 打开命令行工具
   2. 输入 `mysql -u root -p` 并回车
   3. 输入密码并回车【_密码为安装时创建的，默认为`root`_】
   4. 登录成功后，会显示 MySQL 版本信息
4. 输入 `exit` 退出 MySQL 数据库

## 03. 关系模型

:::tip 概念

- 表的每一行称为记录（Record），记录是一个逻辑意义上的数据。
- 表的每一列称为字段（Column），同一个表的每一行记录都拥有相同的若干字段。

:::

关系数据库的表和表之间需要建立“一对多”，“多对一”和“一对一”的关系，这样才能够按照应用程序的逻辑来组织和存储数据。关系是通过 **_主键_** 和 **_外键_** 来维护的。

### 3.1 主键

:::tip 引子

对于关系表，有个很重要的约束，就是任意两条记录不能重复。不能重复不是指两条记录不完全相同，而是指能够通过某个字段唯一区分出不同的记录，这个字段被称为 **_主键_** 。

:::

作为主键最好是完全业务无关的字段，我们一般把这个字段命名为`id`。常见的可作为`id`字段的类型有：

- 自增整数类型：数据库会在插入数据时自动为每一条记录分配一个自增整数，这样我们就完全不用担心主键重复，也不用自己预先生成主键；
- 全局唯一 GUID 类型：也称 UUID，使用一种全局唯一的字符串作为主键，类似`8f55d96b-8acc-4636-8cb8-76bf8abc2f57`。GUID 算法通过网卡 MAC 地址、时间戳和随机数保证任意计算机在任意时间生成的字符串都是不同的，大部分编程语言都内置了 GUID 算法，可以自己预算出主键。

对于大部分应用来说，通常自增类型的主键就能满足需求。

:::warning 注意

如果使用 INT 自增类型，那么当一张表的记录数超过 2147483647（约 21 亿）时，会达到上限而出错。使用 BIGINT 自增类型则可以最多约 922 亿亿条记录。

:::

### 3.2 外键

1. 一对多

   当我们用主键唯一标识记录时，我们就可以在`students`表中确定任意一个学生的记录：

   | id  | name | other columns... |
   | --- | ---- | ---------------- |
   | 1   | 小明 | ...              |
   | 2   | 小红 | ...              |

   我们还可以在`classes`表中确定任意一个班级记录：

   | id  | name | other columns... |
   | --- | ---- | ---------------- |
   | 1   | 一班 | ...              |
   | 2   | 二班 | ...              |

   但是我们如何确定`students`表的一条记录，例如，`id=1`的小明，属于哪个班级呢？

   由于一个班级可以有多个学生，在关系模型中，这两个表的关系可以称为“一对多”，即一个`classes`的记录可以对应多个`students`表的记录。

   为了表达这种一对多的关系，我们需要在`students`表中加入一列`class_id`，让它的值与`classes`表的某条记录相对应：

   | id  | class_id | name | other columns... |
   | --- | -------- | ---- | ---------------- |
   | 1   | 1        | 小明 | ...              |
   | 2   | 1        | 小红 | ...              |
   | 5   | 2        | 小白 | ...              |

   这样，我们就可以根据`class_id`这个列直接定位出一个`students`表的记录应该对应到`classes`的哪条记录。

   例如：

   - 小明的`class_id`是`1`，因此，对应的`classes`表的记录是`id=1`的一班；
   - 小红的`class_id`是`1`，因此，对应的`classes`表的记录是`id=1`的一班；
   - 小白的`class_id`是`2`，因此，对应的`classes`表的记录是`id=2`的二班。

   > 在`students`表中，通过`class_id`的字段，可以把数据与另一张表关联起来，这种列称为外键。

   外键并不是通过列名实现的，而是通过定义外键约束实现的：

   ```sql
   -- 外键约束
   ALTER TABLE students
   ADD CONSTRAINT fk_class_id
   FOREIGN KEY (class_id)
   REFERENCES classes(id);

   ```

   其中，外键约束的名称`fk_class_id`可以任意，`FOREIGN KEY (class_id)`指定了`class_id`作为外键，`REFERENCES classes (id)`指定了这个外键将关联到`classes`表的`id`列（即`classes`表的主键）。

   通过定义外键约束，关系数据库可以保证无法插入无效的数据。即如果`classes`表不存在`id=99`的记录，`students`表就无法插入`class_id=99`的记录。

   由于外键约束会降低数据库的性能，大部分互联网应用程序为了追求速度，并不设置外键约束，而是仅靠应用程序自身来保证逻辑的正确性。这种情况下，`class_id`仅仅是一个普通的列，只是它起到了外键的作用而已。

2. 多对多

   通过一个表的外键关联到另一个表，我们可以定义出一对多关系。有些时候，还需要定义“多对多”关系。例如，一个老师可以对应多个班级，一个班级也可以对应多个老师，因此，班级表和老师表存在多对多关系。

   多对多关系实际上是通过两个一对多关系实现的，即通过一个中间表，关联两个一对多关系，就形成了多对多关系：

   `teachers`表：

   | id  | name   |
   | --- | ------ |
   | 1   | 张老师 |
   | 2   | 王老师 |
   | 3   | 李老师 |
   | 4   | 赵老师 |

   `classes`表：

   | id  | name |
   | --- | ---- |
   | 1   | 一班 |
   | 2   | 二班 |

   中间表`teacher_class`关联两个一对多关系：

   | id  | teacher_id | class_id |
   | --- | ---------- | -------- |
   | 1   | 1          | 1        |
   | 2   | 1          | 2        |
   | 3   | 2          | 1        |
   | 4   | 2          | 2        |
   | 5   | 3          | 1        |
   | 6   | 4          | 2        |

   通过中间表`teacher_class`可知`teachers`到`classes`的关系：

   - `id=1`的张老师对应`id=1,2`的一班和二班；
   - `id=2`的王老师对应`id=1,2`的一班和二班；
   - `id=3`的李老师对应`id=1`的一班；
   - `id=4`的赵老师对应`id=2`的二班。

   同理可知`classes`到`teachers`的关系：

   - `id=1`的一班对应`id=1,2,3`的张老师、王老师和李老师；
   - `id=2`的二班对应`id=1,2,4`的张老师、王老师和赵老师；

   因此，通过中间表，我们就定义了一个“多对多”关系。

3. 一对一

   一对一关系是指，一个表的记录对应到另一个表的唯一一个记录。

   例如，`students`表的每个学生可以有自己的联系方式，如果把联系方式存入另一个表`contacts`，我们就可以得到一个“一对一”关系：

   | id  | student_id | mobile      |
   | --- | ---------- | ----------- |
   | 1   | 1          | 135xxxx6300 |
   | 2   | 2          | 138xxxx2209 |
   | 3   | 5          | 139xxxx8086 |

   有细心的童鞋会问，既然是一对一关系，那为啥不给`students`表增加一个`mobile`列，这样就能合二为一了？

   如果业务允许，完全可以把两个表合为一个表。但是，有些时候，如果某个学生没有手机号，那么，`contacts`表就不存在对应的记录。实际上，一对一关系准确地说，是`contacts`表一对一对应`students`表。

   还有一些应用会把一个大表拆成两个一对一的表，目的是把经常读取和不经常读取的字段分开，以获得更高的性能。例如，把一个大的用户表分拆为用户基本信息表`user_info`和用户详细信息表`user_profiles`，大部分时候，只需要查询`user_info`表，并不需要查询`user_profiles`表，这样就提高了查询速度。

### 3.3 索引

在关系数据库中，如果有上万甚至上亿条记录，在查找记录的时候，想要获得非常快的速度，就需要使用索引。

索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过使用索引，可以让数据库系统不必扫描整个表，而是直接定位到符合条件的记录，这样就大大加快了查询速度。

例如，对于`students`表：

| id  | class_id | name | gender | score |
| --- | -------- | ---- | ------ | ----- |
| 1   | 1        | 小明 | M      | 90    |
| 2   | 1        | 小红 | F      | 95    |
| 3   | 1        | 小军 | M      | 88    |

如果要经常根据 score 列进行查询，就可以对 score 列创建索引：

```sql
ALTER TABLE students
ADD INDEX idx_score (score);
```

使用`ADD INDEX idx_score (score)`就创建了一个名称为`idx_score`，使用列`score`的索引。索引名称是任意的，索引如果有多列，可以在括号里依次写上，例如：

```sql
ALTER TABLE students
ADD INDEX idx_name_score (name, score);
```

索引的效率取决于索引列的值是否散列，即该列的值如果越互不相同，那么索引效率越高。反过来，如果记录的列存在大量相同的值，例如`gender`列，大约一半的记录值是`M`，另一半是`F`，因此，对该列创建索引就没有意义。

可以对一张表创建多个索引。索引的优点是提高了查询效率，缺点是在插入、更新和删除记录时，需要同时修改索引，因此，索引越多，插入、更新和删除记录的速度就越慢。

对于主键，关系数据库会自动对其创建主键索引。使用主键索引的效率是最高的，因为主键会保证绝对唯一。

:::tip 唯一索引

在设计关系数据表的时候，看上去唯一的列，例如身份证号、邮箱地址等，因为他们具有业务含义，因此不宜作为主键。

但是，这些列根据业务要求，又具有唯一性约束：即不能出现两条记录存储了同一个身份证号。这个时候，就可以给该列添加一个唯一索引。例如，我们假设`students`表的`name`列不能重复：

```sql
ALTER TABLE students
ADD UNIQUE INDEX uni_name (name);
```

通过`UNIQUE`关键字我们就添加了一个唯一索引。

也可以只对某一列添加一个唯一约束而不创建唯一索引：

```sql
ALTER TABLE students
ADD CONSTRAINT uni_name UNIQUE (name);
```

这种情况下，`name`列没有索引，但仍然具有唯一性保证。

无论是否创建索引，对于用户和应用程序来说，使用关系数据库不会有任何区别。这里的意思是说，当我们在数据库中查询时，如果有相应的索引可用，数据库系统就会自动使用索引来提高查询效率，如果没有索引，查询也能正常执行，只是速度会变慢。因此，索引可以在使用数据库的过程中逐步优化。

:::

## 04. 查询数据

:::tip 数据准备

1. 下载[SQL 脚本](https://liaoxuefeng.com/books/sql/query/mysql-init-test-data.sql)，并在命令行运行：
2. 推荐使用 MySQL 客户端工具，例如 Navicat 等，运行 SQL 文件导入。

就会得到两张表`classes`和`students`。

`classes`表：

| id  | name |
| --- | ---- |
| 1   | 一班 |
| 2   | 二班 |
| 3   | 三班 |
| 4   | 四班 |

`students`表：

| id  | class_id | name | gender | score |
| --- | -------- | ---- | ------ | ----- |
| 1   | 1        | 小明 | M      | 90    |
| 2   | 1        | 小红 | F      | 95    |
| 3   | 1        | 小军 | M      | 88    |
| 4   | 1        | 小米 | F      | 73    |
| 5   | 2        | 小白 | F      | 81    |
| 6   | 2        | 小兵 | M      | 55    |
| 7   | 2        | 小林 | M      | 85    |
| 8   | 3        | 小新 | F      | 91    |
| 9   | 3        | 小王 | M      | 89    |
| 10  | 3        | 小丽 | F      | 85    |

:::

### 4.1 基础查询

**全表查询** SQL 语句：

```sql
SELECT * FROM <表名>;
```

如表名是`students`，要查询`students`表的所有行，则查询语句为：

```sql
SELECT * FROM students;
```

:::tip 解析

语句中，`SELECT`是关键字，`*`表示查询所有列，`FROM`表示将要从哪个表查询，最后是要查询的表名。

1. `SELECT`语句是大小写不敏感的，`select`、`SELECT`、`SeLeCt`等都是一样的。
2. `*`表示查询所有列，也可以指定要查询的列，例如：`SELECT id, name FROM students;`表示查询`students`表的`id`和`name`列。

:::

### 4.2 条件查询

**条件查询** SQL 语句：

```sql
SELECT * FROM <表名> WHERE <条件>;
```

如要查询`students`表中`gender`为`M`的行，则查询语句为：

```sql
SELECT * FROM students WHERE gender = 'M';
```

:::tip 解析

语句中，`WHERE`表示查询条件，`gender = 'M'`表示查询`gender`列值为`M`的行。

:::

通过`AND`和`OR`可以组合多个条件，例如：

```sql
SELECT * FROM students WHERE gender = 'M' AND score >= 80;
```

表示查询`gender`为`M`且`score`大于等于`80`的行。

`OR`表示或的关系，例如：

```sql
SELECT * FROM students WHERE gender = 'M' OR score >= 80;
```

表示查询`gender`为`M`或`score`大于等于`80`的行。

`AND`和`OR`可以组合使用，例如：

```sql
SELECT * FROM students WHERE gender = 'M' AND (score >= 80 OR score <= 60);
```

表示查询`gender`为`M`且`score`大于等于`80`或小于等于`60`的行。

:::tip 解析

语句中，`()`表示优先级，`AND`和`OR`的优先级相同，从左到右依次执行。

:::

`NOT`表示非的关系，例如：

```sql
SELECT * FROM students WHERE NOT class_id = 2;
```

表示查询`class_id`不为`2`的行，其实等价于：`SELECT * FROM students WHERE class_id <> 2;`，`NOT`查询不常用。

:::tip 常用表达式

| 条件               | 表达式举例 1    | 表达式举例 2     | 说明                                                |
| ------------------ | --------------- | ---------------- | --------------------------------------------------- |
| `=`判断相等        | score = 80      | name = 'abc'     | 字符串需要用单引号括起来                            |
| `>`判断大于        | score > 80      | name > 'abc'     | 字符串比较根据 ASCII 码，中文字符比较根据数据库设置 |
| `>`=判断大于或相等 | score >= 80     | name >= 'abc'    |                                                     |
| `<`判断小于        | score < 80      | name <= 'abc'    |                                                     |
| `<=`判断小于或相等 | score <= 80     | name <= 'abc'    |                                                     |
| `<>`判断不相等     | score <> 80     | name <> 'abc'    |                                                     |
| `LIKE`判断相似     | name LIKE 'ab%' | name LIKE '%bc%' | %表示任意字符，例如'ab%'将匹配'ab'，'abc'，'abcd'   |

:::

### 4.3 投影查询

**投影查询** SQL 语句：

```sql
SELECT <列名>, <列名>, ... FROM <表名>;
```

如要查询`students`表中`id`、`name`、`score`列的所有行，则查询语句为：

```sql
SELECT id, name, score FROM students;
```

可以看到只返回了`id`、`name`、`score`这三列的所有行数据，**投影查询就是让结果仅包含指定列**。

使用投影查询还可以给列起别名，例如：

```sql
SELECT id, name, score AS `成绩` FROM students;
```

可以看到返回的结果中，`score`列的标题是`成绩`。

:::tip 解析

语句中，`AS`表示别名，`成绩`是`score`的别名，也可以省略`AS`，例如：`SELECT id, name, score 成绩 FROM students;`。

:::

当然，也可以拼接`where`条件实现复杂查询，例如：

```sql
SELECT id, name, score AS `成绩` FROM students WHERE class_id = 1;
```

### 4.4 排序

**排序** SQL 语句：

```sql
SELECT <列名> FROM <表名> ORDER BY <列名> <排序方式>;
```

:::tip 解析

语句中，`ORDER BY`表示排序，`列名`表示要排序的列，`排序方式`表示排序方式，`ASC`表示升序，`DESC`表示降序。

:::

例如：

```sql
SELECT id, name, score FROM students ORDER BY score DESC;
```

:::tip 解析

表示查询`students`表的`id`、`name`、`score`列，按`score`列降序排序。

:::

可以进行**多列排序**，例如：

```sql
SELECT id, class_id, name, score FROM students ORDER BY class_id, score DESC;
```

:::tip 解析

语句中，`ORDER BY`表示排序，`class_id`表示要排序的列默认升序，`score`表示要排序的列且为降序。

:::

**条件+排序** SQL 语句：

```sql
SELECT <列名> FROM <表名> WHERE <条件> ORDER BY <列名> <排序方式>;
```

如只查询`class_id`为`1`的行，按`score`列降序排序，则查询语句为：

```sql
SELECT id, class_id, name, score FROM students WHERE class_id = 1 ORDER BY score DESC;
```

:::warning 注意

`WHERE`子句要在`ORDER BY`子句之前，否则会查询报错。

:::

### 4.5 分页查询

**分页查询** SQL 语句：

```sql
SELECT <列名> FROM <表名> LIMIT <N> OFFSET <M>;
```

:::tip 解析

语句中，`LIMIT`表示限制，`N`表示限制返回的行数，`OFFSET`表示偏移，`M`表示偏移量。

:::

如要查询`students`表中按`score`降序排列的第`1`页，每页`3`条数据，则查询语句为：

```sql
SELECT id, name, score FROM students ORDER BY score DESC LIMIT 3 OFFSET 0;
```

如要查询`students`表中按`score`降序排列的第`2`页，每页`3`条数据，则查询语句为：

```sql
SELECT id, name, score FROM students ORDER BY score DESC LIMIT 3 OFFSET 3;
```

如要查询`students`表中按`score`降序排列的第`4`页，每页`3`条数据，则查询语句为：

```sql
SELECT id, name, score FROM students ORDER BY score DESC LIMIT 3 OFFSET 9;
```

会发现只返回了一条数据，这是因为`students`表中只有`10`条数据，第`4`页只剩了一条数据。

当我们查询第`5`页，每页`3`条数据，则查询语句为：

```sql
SELECT id, name, score FROM students ORDER BY score DESC LIMIT 3 OFFSET 12;
```

会发现返回了`0`条数据，这是因为`students`表中只有`10`条数据，第`5`页已经没有数据可返回。

规律：

| 限制 LIMIT | 条数 ROW | 偏移量 OFFSET |
| ---------- | -------- | ------------- |
| 1          | 3        | 0             |
| 2          | 3        | 3             |
| 3          | 3        | 6             |
| 4          | 3        | 9             |
| 5          | 3        | 12            |

根据上表，可推断`OFFSET = (LIMIT - 1) * ROW`，即`LIMIT = pageSize`，`OFFSET = (pageNo - 1) * pageSize`。

:::tip 其他


:::

### 4.6 聚合查询

### 4.7 多表查询

### 4.8 连接查询

## 05. 修改数据

## 06. MYSQL

## 07. 事务
