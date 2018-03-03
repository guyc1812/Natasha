# ES6 新特性

* 默认参数
* 模版表达式
* 解构赋值
* 拆包表达式
* 改进的对象表达式
* 箭头函数 =&>
* 块级作用域的let和const
* 类
* 模块化
* 延展操作符
* Promise

## ES6中的默认参数

```javascript
var link = function(height = 50, color = 'red') {
  //...
}
```

## ES6中的模版表达式

```javascript
var name = `Your name is ${first} ${last}`
```

## ES6解构赋值

```javascript
let [a, b, c] = [1, 2, 3];
//等同于
let a = 1;
let b = 2;
let c = 3;
```

## ES6中的拆包表达式

```javascript
var data = $('body').data(); // 假设data中有mouse和house的值
var house = data.house;
var mouse = data.mouse;
```
==>
```javascript
var { house, mouse} = $('body').data()
```
or
```javascript
var [line1, line2, line3, , line5] = file.split('n')
```

## ES6中的箭头函数
```javascript
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})
```
==>
```javascript
$('.btn').click((event) =>{
  this.sendData()
})
```

## 块级作用域的let和const

```javascript
function calculateTotalAmount (vip) {
  let amount = 0;
  if (vip) {
    let amount = 1; // amount = 1 ==> 1
  } 
  { 
    let amount = 100;
    {
      let amount = 1000;
    }
  }  
  return amount;
}
console.log(calculateTotalAmount(true)); // 0
```

```javascript
function calculateTotalAmount (vip) {
  const amount = 0; 
  if (vip) {
    const amount = 1; // amount = 1 ==> error
  } 
  {
    const amount = 100;
    {
      const amount = 1000;
      }
  }  
  return amount;
}
console.log(calculateTotalAmount(true)); // 0
```

## ES6中的类

```javascript
class baseModel {
    constructor(options = {}, data = []) { 
        this.name = 'Base';
        this.url = 'http://azat.co/api';
        this.data = data;
        this.options = options;
    }
    getName() { 
        console.log(`Class name: ${this.name}`);
    }
}

class AccountModel extends baseModel {
    constructor(options, data) {
        super(options, data);
        this.name = 'Account Model';
        this.url +='/accounts/';
    }
}
```

## ES6中的模块化

CommenJS:

```javascript
//module.js
module.exports = {
  port: 3000,
  getAccounts: function() {
    // ...
  }
}
```
```javascript
//main.js
var service = require('module.js')
console.log(service.port)   // 3000
```

ES6:

```javascript
//module.js
export var port = 3000
export function getAccounts(url) {
  // ...
}
```
```javascript
//main.js
import {port, getAccounts} from 'module'
console.log(port)           // 3000
```
or
```javascript
//main.js
import * as service from 'module'
console.log(service.port)   // 3000
```

## ES6 延展操作符
       
通过它可以将数组作为参数直接传入函数：

```javascript
let people=['Wayou','John','Sherlock'];
function sayHello(people1,people2,people3){
   console.log(`Hello ${people1},${people2},${people3}`);
}

sayHello(...people);//输出：Hello Wayou,John,Sherlock 
```

在函数定义时可以通过…rest获取定义参数外的所有参数：

```javascript
function foo(a, b, ...rest) {
   console.log('a = ' + a);
   console.log('b = ' + b);
   console.log(rest);
}

foo(1, 2, 3, 4, 5);
// output:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]
```

### Reference

[http://web.jobbole.com/87140/](http://web.jobbole.com/87140/)
[http://blog.csdn.net/miaorunqing/article/details/54964815](http://blog.csdn.net/miaorunqing/article/details/54964815)

