# ES6 New Features

* Default Parameters
* Template Literals
* Destructuring Assignment
* Arrow Functions
* Block-Scoped Constructs Let and Const
* Classes
* Modules
* Rest and Spread Operator
* Promise

## Default Parameters

```javascript
let link = function(height = 50, color = 'red') {
  //...
}
```

## Template Literals

```javascript
let name = `Your name is ${first} ${last}`

// Multi-line Strings
let roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`
```

## Destructuring Assignment

```javascript
let [a, b] = [10, 20];
console.log(a);     // 10
console.log(b);     // 20

let [a1, b1, ...rest] = [10, 20, 30, 40, 50];
console.log(a1);    // 10
console.log(b1);    // 20
console.log(rest);  // Array [ 30, 40, 50 ]

let { a2, b2 } = { a2: 10, b2: 20 };
console.log(a2);    // 10
console.log(b2);    // 20

let {a3, b3, ...rest3} = {a3: 10, b3: 20, c3: 30, d3: 40};
console.log(a3);    // 10
console.log(b3);    // 20
console.log(rest3); // Object { c3: 30, d3: 40 }
```

## Arrow Functions

About 'this'

```javascript
// old
let _this = this
$('.btn').click(function(event){
  _this.sendData()
})
```
```javascript
// new
$('.btn').click((event) =>{
  this.sendData()
})
```

About return

```javascript
let ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
let messages = ids.map(function (value) {
  return "ID is " + value // explicit return
})
```
```javascript
let ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
let messages = ids.map(value => `ID is ${value}`) // implicit return
```

## Block-Scoped Constructs Let and Const

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
console.log(calculateTotalAmount(true)); // 1000
```

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
    const amount = 1; 
    //amount = 1;   //if no const => error
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

## Classes

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

## Modules 

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
let service = require('module.js')
console.log(service.port)   // 3000
```

ES6:

```javascript
//module.js
export let port = 3000
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

## Rest and Spread Operator
       
Rest

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

Spread

```javascript
let people=['Wayou','John','Sherlock'];
function sayHello(people1,people2,people3){
   console.log(`Hello ${people1},${people2},${people3}`);
}
sayHello(...people);//输出：Hello Wayou,John,Sherlock 
```

```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));  // expected output: 6
```


### Reference

[Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/)

