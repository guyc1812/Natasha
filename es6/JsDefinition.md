# JS Definition

* **CommonJS**
    
    Node.js -> 服务器 -> 同步加载

    特有属性：
    * module
    * exports
    * require
    * global
    
    ```javascript
    var math = require('math');     //同步加载在浏览器中可能会阻塞
    var sum = math.add(2, 3);
    module.exports.sum = sum;
    ```

* **AMD（Asynchronous Module Definition)**

    RequireJS -> 浏览器 -> 并行加载，预执行
    
    * 无依赖
    
        ```javascript
        define(function(){
             return{
                  method1: function(){},
                  method2: function(){} 
             }
        });
        ```
    
    * 有依赖
    
        ```javascript
        define(['someModule1', 'someModule2'], function (someModule1, someModule2) {
            function foo () {
                 someModule1.test();
                 someModule2.test();
                 // ...
            }
            return {foo: foo}
        });
        ```
        
    * AMD规范允许输出模块兼容CommonJS规范
    
        ```javascript
        define(function (require, exports, module) {
        
          var reqModule = require("./someModule");
          requModule.test();
        
          exports.asplode = function () {
             //something
          }
        });
        ```
        
        但是值得注意的是： 仍然按照这种写法，加载的模块仍会被提前**读取且加载**，<br>
        原因是AMD使用正则去匹配 **require** 关键字，并进行加载,<br>
        所以哪怕 **require** 关键字在注释中，该模块依旧会被提前加载，等同于如下：
        
        ```javascript
        define(['./someModule'], function (require, exports, module, someModule) {
        
          someModule.test();
        
          exports.result = function () {
              // something
          }
        }); 
        ```

* **CMD（Common Module Definition）**

    SeaJS -> 浏览器 -> 并行加载，懒执行
    
    CMD经常使用的API ：define, require, require.async, exports,module.exports 
    
    ```javascript
    define(function(require, exports, module) {   //模块 factory 构造方法的第一个参数 必须命名为 require 。
         var a = require('./a');
         a.doSomething();
         // ...
         var b = require('./b');      // 依赖可以就近书写
         b.doSomething();
         // ...
    })
    ```
    
* **AMD 与 CMD 区别**

    * AMD: RequireJS, 并行加载，预执行<br>
        RequireJS 从 2.0 开始，也改成可以延迟执行<br>
         
    * CMD: SeaJS, 并行加载，懒执行
        CMD 推崇依赖就近<br>
    
