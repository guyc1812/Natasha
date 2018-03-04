# CORS (Cross-origin resource sharing)

## 同源

协议 + 域名 + 端口号

## CORS 相关字段

* **Access-Control-Allow-Origin** (required)

    `Access-Control-Allow-Origin: http://api.bob.com  or *`

* **Access-Control-Allow-Credentials** (optional)

    `Access-Control-Allow-Credentials: true` 表示是否允许发送Cookie
    
    ```javascript
    //js
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    ```
    
    此时 `Access-Control-Allow-Origin` 不可为 "*" 

* **Access-Control-Expose-Headers** (optional)

    `Access-Control-Expose-Headers: FooBar`

    CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段,<br>
    如果想拿到其他自定义字段，就必须在Access-Control-Expose-Headers里面指定。
    
    * Cache-Control
    * Content-Language
    * Content-Type
    * Expires
    * Last-Modified
    * Pragma
    

## CORS 请求一：简单请求

* 特征：

    ```
    1. 请求方法是以下三种方法之一：
        HEAD, GET, POST

    2. HTTP的头信息不超出以下几种字段：
        Accept
        Accept-Language
        Content-Language
        Last-Event-ID
        Content-Type：application/x-www-form-urlencoded、multipart/form-data、text/plain
    ```
    
* 处理：

    浏览器自动在头信息之中添加一个Origin字段，
    Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。
    
    ```
    GET /cors HTTP/1.1
    Origin: http://api.bob.com
    ```
    
    服务器不允许该域的跨域请求：
    
    1. 回应的头信息没有包含Access-Control-Allow-Origin字段
    2. XMLHttpRequest的onerror回调函数可捕获异常
    3. 这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200
    
    服务器允许该域的跨域请求：
    
    ```
    Access-Control-Allow-Origin: http://api.bob.com  or *   =>required
    Access-Control-Allow-Credentials: true                  =>optional
    Access-Control-Expose-Headers: FooBar                   =>optional
    ```
    
## CORS 请求二：非简单请求

* 特征：

    ```
    1. 请求方法是 PUT, DELETE
    2. Content-Type字段的类型是application/json。
    3. 包含自定义头`xhr.setRequestHeader('X-Custom-Header', 'value');`
    ```
    
* 处理：

    预检(OPTION)：
    ```
    OPTIONS /cors HTTP/1.1
    Origin: http://api.bob.com
    Access-Control-Request-Method: PUT              => required
    Access-Control-Request-Headers: X-Custom-Header 
    ```
    
    服务器回应预检：
    ```
    Access-Control-Allow-Origin: http://api.bob.com  or * 
    Access-Control-Allow-Methods: GET, POST, PUT    => required
    Access-Control-Allow-Headers: X-Custom-Header
    Access-Control-Max-Age: 1728000                 => 20 days
    ```
    
## JSONP

JSONP只支持GET请求，CORS支持所有类型的HTTP请求


### Reference:

[跨域资源共享 CORS 详解,阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)