# 常用正则

|符号|描述|
|:-:|--|
|`d`|匹配一个数字字符|
|`D`|匹配一个非数字字符|
|`w`|匹配字母、数字或者下划线，类似于[A-Za-z0-9_]|
|`W`|匹配除字母、数字或者下划线以外的字符。等价于[^A-Za-z0-9_]|
|`s`|匹配一个空白字符（空格、制表符和换行符）|
|`.`|匹配任意一个字符|
|`^`|匹配开头|
|`$`|匹配结尾|
|`/`|在特殊字符前加，表示下一个字符不是特殊字符，应该按照字面意理解例如：/^.表示匹配任意字符。/表示匹配点|
|`[]`|可以创建字符集合，表示匹配方括号中的任意字符。<br />1、[ab]匹配 a 或者是 b<br />2、使用短横线-来指定一个字符范围，如：[a-z]匹配 a 到 z 之间的任意一个字符<br />3、^表示否定，如： [^a] 匹配除 a 之外的任意一个字符）|
|`*`|匹配前面的子表达式零次或多次，等价于: `{0,}`|
|`+`|匹配前面的子表达式一次或多次，等价于: `{1,}`|
|`?`|匹配前面的子表达式零次或一次，等价于: `{0,1}`|
|`{n}`|n 是一个正整数，匹配前面的子表达式n次|
|`{n,}`|n 是一个正整数，匹配前面的子表达式至少n次|
|`{n,m}`|n 和 m 是一个正整数，匹配前面的子表达式至少n次，至多m次|
|`i`|不区分大小写|
|`g`|全局匹配|

## 1、邮箱

```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 测试
console.log(emailRegex.test('test@example.com')); // true
console.log(emailRegex.test('invalid-email')); // false
```

## 2、手机号

```js
const phoneRegex = /^1[3456789]\d{9}$/;

// 测试
console.log(phoneRegex.test('13800138000')); // true
console.log(phoneRegex.test('12345678901')); // false
```

## 3、身份证号

```js
const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

// 测试
console.log(idCardRegex.test('41010119900101001X')); // true
console.log(idCardRegex.test('123456789012345678')); // false
```

## 4、URL

```js
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

// 测试
console.log(urlRegex.test('http://www.example.com')); // true
```

## 5、获取网页 img 地址

```js
const matchImgs = (sHtml) => {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi;
  let matchImgUrls = [];

  sHtml.replace(imgUrlRegex, (match, $1) => {
    $1 && matchImgUrls.push($1);
  });
  return matchImgUrls;
};

console.log(matchImgs(document.body.innerHTML));
```