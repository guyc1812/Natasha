# About Arguments

* **Array-like to array**

    * `let arr = Array.prototype.slice.call(arguments, 0);`
    * `let arr = Array.from(arguments);`<br>
    
    ```javascript
    function f(a, b) {
        
        console.log(f.name);      //f
        console.log(f.length);    //2
        console.log(arguments);   //Arguments { 0: 1, 1: 2, 2: 3, 3: 4,... }
        
        let arr1 = Array.from(arguments);
        let arr2 = Array.prototype.slice.call(arguments, 0, 1);
        console.log(arr1);    //Array [ 1, 2, 3, 4 ]
        console.log(arr2);    //Array [ 1 ]
        
    }
  
    f(1,2,3,4); //=>run
    ```
    
    ```javascript
    let a = {
        length:3,
        0:1,
        1:2,
        2:3
    }
    
    let arr = Array.from(a);
    console.log(arr);   //Array [ 1, 2, 3 ]
    ```
    
* **Rest is an array**

    ```javascript
    function f(a, b, ...rest) {
        console.log(f.name);    //f
        console.log(f.length);  //2
        console.log(arguments); //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, … }
        console.log(rest);      //Array [ 3, 4, 5 ]
    }
    
    f(1,2,3,4,5); //=>run
    ```

* **Difference between rest parameters and the arguments object**
  
    * rest parameters are only the ones that haven't been given a separate name,<br>
        while the arguments object contains all arguments passed to the function;
    * the arguments object is not a real array, <br>
        while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
    * the arguments object has additional functionality specific to itself (like the callee property).

* **Some usage**

    ```javascript
    function f(...[a, b, c]) {
      return a + b + c;
    }
    
    f(1);          // NaN (b and c are undefined)
    f(1, 2, 3);    // 6
    f(1, 2, 3, 4); // 6 (the fourth parameter is not destructured)
    ```
    
    ```javascript
    function multiply(multiplier, ...theArgs) {
      return theArgs.map(function(element) {
        return multiplier * element;
      });
    }
    
    let arr = multiply(2, 1, 2, 3); 
    console.log(arr); // [2, 4, 6]
    ```


