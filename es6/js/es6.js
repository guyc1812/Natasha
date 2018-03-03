// for-in 与 for-of
let arr = [{a:true},{b:false}];
for (let a in arr) {
    console.log(a);//1,2
}
for (let a of arr) {
    console.log(a);//object,object
}


// let and const
let a = 'a';
let b = 'b';
const c = 'c';
console.log(window.a);  //undefined
console.log(window.b);  //undefined
console.log(window.c);  //undefined


// 函数默认参数，参数列表未填补的项使用默认值
// 默认值也可以是函数表达式的结果，如 timeout = getTime()
function makeRequest(url, timeout = 2000, callback = function() {}) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments);
}
makeRequest('/aa'); // /aa
                    // undefined
                    // undefined

// 剩余参数(rest parameter)
// 剩余参数受到两点限制。一是函数只能有一个剩余参数，并且它必须被放在最后。
// 第二个限制是剩余参数不能在对象字面量的 setter 属性中使用。
// 下例展示 arguments 是一个伪数组（Array-like）,可使用Array.prototype.slice.call(arguments)转化为数组。
function test() {
    console.log(test.name);      // 函数具有那么属性
    console.log(test.length);    // 函数具有参数长度属性
    let arg = Array.prototype.slice.call(arguments,0);
    console.log(arg);
}
test("a","b","c","d"); //b,c,d
// Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
let al ={length:2,0:'first',1:'second'};          //类数组,有length属性，长度为2，第0个是first，第1个是second
console.log(Array.prototype.slice.call(al,0));    // ["first", "second"],调用数组的slice(0);

// 剩余参数例
function checkArgs(...args) {
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}
checkArgs("a", "b");


// 使用剩余参数进行拓展运算符,使max操作符处理数组
let values = [25, 50, 75, 100]
console.log(Math.max.apply(Math, values)); // 100
console.log(Math.max(...values));
console.log(Math.max(...values,0,1000));

// 关于 call 和 apply
// obj.call(thisObj, arg1, arg2, ...);
// obj.apply(thisObj, [arg1, arg2, ...]);
// 两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。
// 或者说thisObj『继承』了obj的属性和方法。
// 唯一区别是apply接受的是数组参数，call接受的是连续参数。


// 关于块级函数
// "use strict";
// if (true) {
//     console.log(typeof doSomething1);    // 抛出错误,暂时性死区
//     let doSomething1 = function () {
//         //...
//     }
//     console.log(typeof doSomething2);    // "function"   --  es6
//                                          // 抛出错误      --  es5
//     function doSomething2() {
//         // ...
//     }
//     doSomething1()
//     doSomething2();
// }


// 立即调用函数表达式（ immediately-invoked function expression ， IIFE ）


// 使用箭头函数 修正 callback函数内部的this

let PageHandler1 = {
    id: "123456",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type); // 没有错误
        }).bind(this), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};

let PageHandler2 = {
    id: "123456",
    init: function() {
        document.addEventListener("click",
            event => this.doSomething(event.type), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};

// Object.is() 方法
// Object.is() 的结果与 === 运算符是相同的，仅有的例外是：它会认为+0 与 -0 不相等，而且 NaN 等于 NaN
// 使用 == 运算符会发生强制转换
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true


// Object.assign(obj1,obj2)
// Cloning an object
let obj1 = { a: 1 };
let copy = Object.assign({}, obj1);
console.log(copy); // { a: 1 }

// Merging objects
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };
let obj2 = Object.assign(o1, o2, o3);
console.log(obj2); // { a: 1, b: 2, c: 3 }
console.log(o1);    // { a: 1, b: 2, c: 3 }, target object itself is changed.


//浅拷贝与深拷贝
let origin = {a:1,b:2};
let copy1 = origin;
let copy2 = origin;
let copy3 = Object.assign({},origin)    //对于Object中第一层实现深拷贝，若Object中存在嵌套对象，则不再继续深拷贝
copy1['c'] = 3;         //改变了原始数据
console.log(origin);
console.log(copy1);
console.log(copy2);
console.log(copy3);

let origin1 = [1,2,3];
let copy4 = origin1;
copy4[2] = 4;           //改变了原始数据
console.log(origin1);
console.log(copy4);

let origin2 = 11111;
let copy5 = origin2;
copy5 = 22222;          //对于二次赋值不会影响原始数据，只有对其进行对象属性或数组的改变时才会有影响
console.log(origin2);
console.log(copy5);


//数组的深拷贝
let arrOrigin = ["One","Two","Three"];
let arrCopy1 = arrOrigin.slice(0);
let arrCopy2 = arrOrigin.concat();


//对象的深拷贝
let deepCopy= function(source) {
    let result={};
    for (let key in source) {
        result[key] = typeof source[key]==='Object'? deepCopy(source[key]): source[key];
    }
    return result;
}
let objCopy = JSON.parse(JSON.stringify(origin));


// 关于解构，不建议使用，了解即可
// 关于符号与符号属性，了解即可


// Set
let set = new Set();
set.add(5);
set.add("5");
console.log(set.has(5)); // true
set.delete(5);
console.log(set.has(5)); // false
console.log(set.size); // 1
set.clear();
console.log(set.has("5")); // false
console.log(set.size); // 0

let set1 = new Set([10, 20]);
set1.forEach(function(value, key, ownerSet) {
    console.log(key + " " + value);     // key === value
    console.log(ownerSet === set1);
});

// Set 转化为数组
let set2 = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [...set];
console.log(array); // [1,2,3,4,5]

// 利用 Set 实现数组去重
function eliminateDuplicates(items) {
    return [...new Set(items)];
}
let numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);
console.log(noDuplicates); // [1,2,3,4,5]

