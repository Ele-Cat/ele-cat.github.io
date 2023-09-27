# Moment

> 整理一些平时工作中常用的 `Momentjs` 函数方法，省的老查官网！

- [官方中文文档](http://momentjs.cn/)
- [官方英文文档](https://momentjs.com/)

## 01. 使用

### 1.1 介绍

> Moment.js：在 JavaScript 中解析、校验、操作、显示日期和时间。

### 1.2 安装

```sh
npm install moment --save
yarn add moment
```

### 1.3 范例

```js
// 首先需引入moment
import moment from "moment";
```

1. 格式化日期

```js
moment().format("MMMM Do YYYY, h:mm:ss a"); // 六月 26日 2023, 5:48:38 下午
moment().format("dddd"); // 星期一
moment().format("MMM Do YY"); // 6月 26日 23
moment().format("YYYY [escaped] YYYY"); // 2023 escaped 2023
moment().format(); // 2023-06-26T17:48:38+08:00
```

2. 相对时间

```js
moment("20111031", "YYYYMMDD").fromNow(); // 12 年前
moment("20120620", "YYYYMMDD").fromNow(); // 11 年前
moment().startOf("day").fromNow(); // 18 小时前
moment().endOf("day").fromNow(); // 6 小时后
moment().startOf("hour").fromNow(); // 1 小时前
```

3. 日历时间

```js
moment().subtract(10, "days").calendar(); // 2023/06/16
moment().subtract(6, "days").calendar(); // 上周二17:49
moment().subtract(3, "days").calendar(); // 上周五17:49
moment().subtract(1, "days").calendar(); // 昨天17:49
moment().calendar(); // 今天17:49
moment().add(1, "days").calendar(); // 明天17:49
moment().add(3, "days").calendar(); // 本周四17:49
moment().add(10, "days").calendar(); // 2023/07/06
```

4. 多语言环境支持

```js
moment.locale(); // zh-cn
moment().format("LT"); // 17:49
moment().format("LTS"); // 17:49:23
moment().format("L"); // 2023/06/26
moment().format("l"); // 2023/6/26
moment().format("LL"); // 2023年6月26日
moment().format("ll"); // 2023年6月26日
moment().format("LLL"); // 2023年6月26日下午5点49分
moment().format("lll"); // 2023年6月26日 17:49
moment().format("LLLL"); // 2023年6月26日星期一下午5点49分
moment().format("llll"); // 2023年6月26日星期一 17:49
```

## 02. 基础

### 2.1 时间格式化

#### 2.1.1 简单格式化

```js
// 简单格式化，具体含义见下表
// 切记这里的时间戳是int类型的数据
moment(1670818332000).format("YYYY-MM-DD HH:mm:ss"); // 2022-12-12 12:12:12
moment().format("x"); // 1687859049000
moment().valueOf(); // 1687859049000
moment().format("YYYY-MM-DD HH:mm:ss"); // 2023-06-27 17:44:09
// 时间戳（毫秒）
moment(1670818332000).format("YYYY/MM/DD HH:mm:ss"); // 2022/12/12 12:12:12
// 时间戳（秒）
moment.unix(1670818332).format("YYYY-MM-DD HH:mm:ss"); // 2022-12-12 12:12:12
```

<details><summary>查看参数含义</summary>

|     输入 | 例子           | 描述                                              |
| -------: | -------------- | ------------------------------------------------- |
|     YYYY | 2014           | 4 或 2 位数年份。 注意： strict 模式只能解析 4 位 |
|       YY | 14             | 2 位数年份                                        |
|        Y | -25            | 带有任意数字和符号的年份                          |
|        Q | 1..4           | 季度。 将月份设置为季度的第一个月。               |
|     M MM | 1..12          | 月份                                              |
| MMM MMMM | Jan..December  | moment.locale() 设置的语言环境中的月份名称        |
|     D DD | 1..31          | 一个月中的第几天                                  |
|       Do | 1st..31st      | 带序号的月份中的第几天                            |
| DDD DDDD | 1..365         | 一年中的某一天                                    |
|        X | 1410715640.579 | Unix 时间戳                                       |
|        x | 1410715640579  | Unix 毫秒时间戳                                   |
|        w | ww 1..53       | 一年中的语言环境周                                |
|        e | 0..6           | 星期几                                            |
|        E | 1..7           | ISO 星期几                                        |
| ddd dddd | Mon...Sunday   | moment.locale() 设置的语言环境中的日期名称        |
|     H HH | 0..23          | 小时（24 小时制）                                 |
|     h hh | 1..12          | 小时（与 a A 一起使用的 12 小时时间。）           |
|     k kk | 1..24          | 小时（24 小时制，从 1 到 24）                     |
|      a A | am pm          | 子午线前后（注意一个字符 a p 也被认为是有效的）   |
|     m mm | 0..59          | 分钟                                              |
|     s ss | 0..59          | 秒                                                |
|     Z ZZ | +12:00         | 与 UTC 的偏移量为 +-HH:mm、+-HHmm 或 Z            |

</details>

```js
// 1670818332000为2022-12-12 12:12:12的时间戳
moment(1670818332000).format("Q"); // 4，指代第4季度
moment(1670818332000).format("w"); // 51，指代第51周
moment(1670818332000).format("E"); // 1，指代星期1
moment(1670818332000).format("a"); // pm，指代下午
```

#### 2.1.2 复杂格式化

> 上面只是把时间转换成普通模式，如`2023-12-12 12:12:12`，下面是人性化的格式化

```js
// 先设定语言环境
moment.locale("zh-CN");
moment("2023-12-12 12:12:12").format("[今天是]dddd"); // 今天是星期二
// 过去距离现在的时间
moment("2023-2-12 12:12:12").fromNow(); // 具体展现见下方细目
// 未来距离现在的时间
moment("2023-12-12 12:12:12").toNow(); // 具体展现见下方细目
// 过去距离 X 的时间
moment("2023-12-11 12:12:12").from("2023-12-12 12:12:12"); // 1 天前
// 未来距离 X 的时间
moment("2023-12-11 12:12:12").to("2023-12-12 12:12:12"); // 1 天后
```

<details><summary>每个时间长度显示哪个字符串的细目</summary>

|                    范围 | Key | 示例输出               |
| ----------------------: | --- | :--------------------- |
|              0 到 44 秒 | s   | 几秒钟前               |
|                取消设置 | SS  | 44 秒前                |
|             45 至 89 秒 | m   | 一分钟前               |
|         90 秒到 44 分钟 | mm  | 2 分钟前... 44 分钟前  |
|           45 至 89 分钟 | h   | 一小时前               |
|       90 分钟到 21 小时 | hh  | 2 小时前 ... 21 小时前 |
|           22 至 35 小时 | d   | 一天前                 |
|         36 小时至 25 天 | dd  | 2 天前 ... 25 天前     |
|             26 至 45 天 | M   | 一个月前               |
|            45 至 319 天 | MM  | 2 个月前 ... 10 个月前 |
| 320 至 547 天（1.5 年） | y   | 一年前                 |
|                 548 天+ | yy  | 2 年前 ... 20 年前     |

</details>

### 2.2 取值、赋值

> 以上是以`format`函数获取时间相关信息，下面通过一系列方法来获取，会更加灵活

```js
// moment().Fn() 均可实现取值+赋值操作
moment().hour(); // Number获取小时
moment().hour(Number); // 设置小时
```

<details><summary>查看全部配置函数</summary>

| 主题                         | 函数                     | 例子                   | 描述                                                     |
| ---------------------------- | ------------------------ | ---------------------- | -------------------------------------------------------- |
| 获取或设置**年份**           | year                     | moment().year()        | 接受从 -270,000 到 270,000 的数字。                      |
| 获取或设置**月份**           | month                    | moment().month()       | 接受从 0 到 11 的数字。 如果超出范围，它将冒泡到年份。   |
| 获取或设置**月中的第几天**   | date                     | moment().date()        | 接受从 1 到 31 的数字。 如果超出范围，它将冒泡到几个月。 |
| 获取或设置**星期几**         | day/days                 | moment().day()         | 该方法可用于设置星期几，星期日为 0，星期六为 6。         |
| 获取或设置**一年中的第几周** | week/weeks               | moment().week()        |                                                          |
| 获取或设置**一年中的第几天** | dayOfYear                | moment().dayOfYear()   | 接受从 1 到 366 的数字。 如果超出范围，它将冒泡到年份。  |
| 获取或设置**小时**           | hour/hours               | moment().hour()        | 接受从 0 到 23 的数字。 如果超出范围，它将冒泡到当天。   |
| 获取或设置**分钟**           | minute/minutes           | moment().minute()      | 接受从 0 到 59 的数字。 如果超出范围，它将冒泡到小时。   |
| 获取或设置**秒数**           | second/seconds           | moment().second()      | 接受从 0 到 59 的数字。 如果超出范围，它将冒泡到分钟。   |
| 获取或设置**毫秒数**         | millisecond/milliseconds | moment().millisecond() | 接受从 0 到 999 的数字。 如果超出范围，它将冒泡到秒。    |

</details>

:::tip 当然也可以通过 get()方法获取对应值
`moment().get(unit) === moment()[unit]()`

```js
moment().get("year");
moment().get("month"); // 0 to 11
moment().get("date");
moment().get("hour");
moment().get("minute");
moment().get("second");
moment().get("millisecond");
```

:::
:::tip 可以通过 set()方法赋值

```js
moment().set("year", 2013);
moment().set("month", 3); // April
moment().set("date", 1);
moment().set("hour", 13);
moment().set("minute", 20);
moment().set("second", 30);
moment().set("millisecond", 123);

moment().set({ year: 2013, month: 3 });
```

:::

### 2.3 开始、结束时间

```js
// moment().startOf(String);
moment().startOf("year"); // set to January 1st, 12:00 am this year
moment().startOf("month"); // set to the first of this month, 12:00 am
moment().startOf("quarter"); // set to the beginning of the current quarter, 1st day of months, 12:00 am
moment().startOf("week"); // set to the first day of this week, 12:00 am
moment().startOf("isoWeek"); // set to the first day of this week according to ISO 8601, 12:00 am
moment().startOf("day"); // set to 12:00 am today
moment().startOf("date"); // set to 12:00 am today
moment().startOf("hour"); // set to now, but with 0 mins, 0 secs, and 0 ms
moment().startOf("minute"); // set to now, but with 0 seconds and 0 milliseconds
moment().startOf("second"); // same as moment().milliseconds(0);

// moment().endOf(String);
moment().endOf("year");
```

## 03. 计算

### 3.1 添加、减去

```js
// 添加
// moment().add(Number, String);
moment().add(7, "days");
moment().add(7, "d"); // 简写
// moment().add(Duration);
moment().add(10000);
// moment().add(Object);
moment().add({ days: 7, months: 1 });
// 特殊
moment([2023, 0, 31]); // January 31
moment([2023, 0, 31]).add(1, "months"); // February 28

// 减去【与添加同理】
// moment().subtract(Number, String);
// moment().subtract(Duration);
// moment().subtract(Object);
```

<details><summary>查看简写速记</summary>

| Key    | 速记 |
| ------ | ---- |
| 年     | y    |
| 季度   | Q    |
| 几个月 | M    |
| 周     | w    |
| 天     | d    |
| 小时   | h    |
| 分钟   | m    |
| 秒     | s    |
| 毫秒   | ms   |

</details>

### 3.2 时间差

```js
// moment().diff(Moment|String|Number|Date|Array, String, Boolean);
let a = moment([2007, 0, 29]);
let b = moment([2007, 0, 28]);
a.diff(b); // 86400000
a.diff(b, "d"); // 1
b.diff(a, "d"); // -1

let c = moment([2023, 9]);
let d = moment([2022, 0]);
c.diff(d, "years"); // 1
c.diff(d, "years", true); // 1.75
```

### 3.3 多日期时间比较

- 最大

```js
// moment.max(Moment[,Moment...]);
// moment.max(Moment[]);
let a = moment().subtract(1, "day");
let b = moment().add(1, "day");
moment.max(a, b); // b

let friends = [
  { name: "Dan", birthday: "11.12.1977" },
  { name: "Mary", birthday: "11.12.1986" },
  { name: "Stephan", birthday: "11.01.1993" },
];
let friendsBirthDays = friends.map(function (friend) {
  return moment(friend.birthday, "DD.MM.YYYY");
});
moment.max(friendsBirthDays); // '11.01.1993'
```

- 最小

```js
// moment.min(Moment[,Moment...]);
// moment.min(Moment[]);
let a = moment().subtract(1, "day");
let b = moment().add(1, "day");
moment.min(a, b); // a
moment.min([a, b]); // a
```

### 3.4 两日期时间比较

::: tip 方法传参
isSame、isBefore、isAfter 方法中，第一个参数为日期信息，第二个为可选参数（year、y、month、M、day、d、h、m、s）

```js
moment().Fn(Moment | String | Number | Date | Array);
moment().Fn(Moment | String | Number | Date | Array, String);
```

:::

- 是否相同 `isSame`

```js
moment("2023-10-20").isSame("2023-10-20"); // true

moment("2023-10-20").isSame("2023-10-22"); // false
moment("2023-10-20").isSame("2023-10-22", "month"); // true

moment("2023-10-20").isSame("2022-12-31", "year"); // false
moment("2023-10-20").isSame("2023-01-01", "year"); // true
```

- 是否之前 `isBefore`

```js
moment("2023-10-20").isBefore("2023-10-21"); // true

moment("2023-10-20").isBefore("2023-12-31", "year"); // false
moment("2023-10-20").isBefore("2024-01-01", "year"); // true
```

- 是否之后 `isAfter`

```js
moment("2023-10-21").isAfter("2023-10-20"); // true

moment("2023-10-20").isAfter("2023-12-31", "year"); // false
moment("2024-10-20").isAfter("2023-01-01", "year"); // true
```

- 是否相同或之前 `isSameOrBefore`
- 是否相同或之后 `isSameOrAfter`

- 是否之间 `isBetween`

```js
moment().isBetween(moment - like, moment - like);
moment().isBetween(moment - like, moment - like, String);
moment().isBetween(moment - like, moment - like, String, String);

moment("2023-10-20").isBetween("2023-10-19", "2023-10-25"); // true
moment("2022-10-20").isBetween("2022-10-19", undefined); // true, since moment(undefined) evaluates as moment()

// isBetween的参数中，小值应该在前边
moment("2023-10-20").isBetween("2023-10-19", "2023-10-25"); // true
moment("2023-10-20").isBetween("2023-10-25", "2023-10-19"); // false

moment("2021-10-20").isBetween("2021-01-01", "2023-01-01", "year"); // false
moment("2021-10-20").isBetween("2020-12-31", "2023-01-01", "year"); // true
```

### 3.5 判断是否

- 时间是否有效 `isValid`

```js
// 判断是否有效时间
moment("2013-02-08 09+09:00").isValid(); // true
moment("this is not a timestamp").isValid(); // false
```

- 是否 Moment `isMoment`

```js
moment.isMoment(); // false
moment.isMoment(new Date()); // false
moment.isMoment(moment()); // true
```

- 是否日期 `isDate`

```js
moment.isDate(); // false
moment.isDate(new Date()); // true
moment.isDate(moment()); // false
```

- 是否闰年 `isLeapYear`

```js
moment([2000]).isLeapYear(); // true
moment([2001]).isLeapYear(); // false
moment([2100]).isLeapYear(); // false
```
