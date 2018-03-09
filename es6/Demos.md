# Demos

## for-in & for-of

    * in array
    
        ```javascript
        let arr = [{a:true},{b:false}];
        for (let item in arr) {
            console.log(item);  //1
                                // 2
        }
        for (let item of arr) {
            console.log(item);  //Object { a: true }
                                //Object { b: false }
        }
        ```
    
    * in object
    
        ```javascript
        let obj = {a:1,b:2};
        for (let item in obj) {
            console.log(item);  //a
                                //b
        }
        for (let item of obj) {
            console.log(item);  //TypeError: obj is not iterable
        }
        ```

## Copy

## Object.assign

## Set

## Map







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
```