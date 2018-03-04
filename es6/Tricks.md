# Some JS Tricks

* **setTimeout**

```javascript
function check(){
    alert("Hello");
}

window.setTimeout(check,10000);   // 10s后调用
window.setTimeout(check(),10000);     // 立即被调用
```

* **false**

    undefined, null, "", 0, NAN
    
    其中使用 **==** 操作符时，undefined, null不会自动进行类型转换
    ```javascript
    console.log(null == false);           // false
    console.log(null == true);            // false
    console.log(undefined == false);      // false
    console.log(undefined == true);       // false
    console.log(null == undefined);       // true
    console.log(undefined == null);       // true
    console.log(null == null);            // true
    console.log(undefined == undefined);  // true
    ```
    
* **同名函数**

    JS中不存在函数重载，同名函数只会覆盖
    
* **this,prototype**

    ```javascript
    var A = {n:4399};
    var B = function() {this.n = 9999};   // 赋值 this.n = 9999
    var C = function() {var n = 8888};    // this->C, n为局部变量，
    B.prototype = A;
    C.prototype = A;
    var b = new B();
    var c = new C();
    A.n++;
    console.log(b.n);     // 9999
    console.log(c.n);     // 4400
    ```
    
* **var a=b=3**

    ```javascript
    var a=b=3;        // b=3(全局), var a=b
    console.log(a);   // 3
    console.log(b);   // 3
    ```


    
