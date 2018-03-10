# Demos

## for-in & for-of

* In Array

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

* In Object

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

* Deep Copy of Array

    ```javascript
    let arrOrigin = ["One","Two","Three"];
    //way 1
    let arrCopy1 = arrOrigin.slice(0);
    //way 2
    let arrCopy2 = arrOrigin.concat();
    ```

* Deep Copy of Object

    ```javascript
    //way 1
    let objCopy = JSON.parse(JSON.stringify(origin));
    //way 2
    let deepCopy= function(source) {
        let result={};
        for (let key in source) {
            result[key] = typeof source[key]==='Object'? deepCopy(source[key]): source[key];
        }
        return result;
    }
    ```

## Object.is() & Object.assign()

* Object.is(a,b)

    Object.is(a,b) equals to '==='<br>
    But :

    ```javascript
    console.log(+0 === -0);             // true
    console.log(Object.is(+0, -0));     // false
    console.log(NaN === NaN);           // false
    console.log(Object.is(NaN, NaN));   // true
    ```

* Object.assign()

    only deep copy the first depth of object

    ```javascript
    // assign object
    let obj1 = { a: 1 };
    let copy1 = Object.assign({}, obj1);
    console.log(copy1);     // Object { a: 1 }

    // Merge objects
    let o1 = { a: 1 };
    let o2 = { b: 2 };
    let o3 = { c: 3 };
    let obj2 = Object.assign(o1, o2, o3);
    console.log(obj2);  // Object { a: 1, b: 2, c: 3 }
    console.log(o1);    // Object { a: 1, b: 2, c: 3 }, o1 is target object
    console.log(o2);    // Object { b: 2 }
    console.log(o3);    // Object { c: 3 }
    ```

## Array

* array.shift()

    remove from first

    ```javascript
    let array = [1, 2, 3];
    let firstElement = array.shift();
    console.log(array);         // Array [2, 3]
    console.log(firstElement);  // 1
    ```

* array.unshift()

    add to first

    ```javascript
    var array = [1, 2, 3];
    console.log(array.unshift(4, 5));  // 5
    console.log(array);                // Array [4, 5, 1, 2, 3]
    ```

* array.splice(start, deleteCount, ...items)

    add at position

    ```javascript
    var months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at 1st index position
    console.log(months);
    // Array ['Jan', 'Feb', 'March', 'April', 'June']

    months.splice(4, 1, 'May');
    // replaces 1 element at 4th index
    console.log(months);
    // Array ['Jan', 'Feb', 'March', 'April', 'May']
    ```

* array.map()

    ```javascript
    var array = [1, 4, 9, 16];
    const map1 = array.map(x => x * 2);
    console.log(map1);// Array [2, 8, 18, 32]
    ```

* array.reduce(callback, [initialValue])

    ```javascript
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));    // 10

    // 5 + 1 + 2 + 3 + 4, 5 is initialValue
    console.log(array1.reduce(reducer, 5)); // 15
    ```

* array.join([separator])

    ```javascript
    var elements = ['Fire', 'Wind', 'Rain'];

    console.log(elements.join());   // Fire,Wind,Rain
    console.log(elements.join('')); // FireWindRain
    console.log(elements.join('-'));// Fire-Wind-Rain
    ```

* array.every()

    ```javascript
    function isBelowThreshold(currentValue) {
    return currentValue < 40;
    }
    var array1 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold));  // true
    ```

* array.flatten(depth)

    ```javascript
    var arr1 = [1, 2, [3, 4]];
    arr1.flatten();     // [1, 2, 3, 4]

    var arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flatten();     // [1, 2, 3, 4, [5, 6]]

    var arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flatten(2);    // [1, 2, 3, 4, 5, 6]
    ```

## Set

* Basic

    ```javascript
    // Set
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log(set.has(5));    // true
    set.delete(5);
    console.log(set.has(5));    // false
    console.log(set.size);      // 1
    set.clear();
    console.log(set.has("5"));  // false
    console.log(set.size);      // 0
    ```

* Relation with Array objects

    ```javascript
    let mySet = new Set([1, 2, 3, 3, 3, 4, 5]);
    let array1 = [...mySet];
    var array2 = Array.from(mySet); 
    console.log(array1);    // [1, 2, 3, 4, 5]
    console.log(array2);    // [1, 2, 3, 4, 5]
    ```
    ```
    // eliminate duplicates
    function eliminateDuplicates(items) {
        return [...new Set(items)];
    }
    let numbers = [1, 2, 3, 3, 3, 4, 5];
    let noDuplicates = eliminateDuplicates(numbers);
    console.log(noDuplicates); // [1, 2, 3, 4, 5]
    ```

* Implementing basic set operations

    ```javascript
    Set.prototype.isSuperset = function(subset) {
        for (var elem of subset) {
            if (!this.has(elem)) {
                return false;
            }
        }
        return true;
    }

    Set.prototype.union = function(setB) {
        var union = new Set(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union;
    }

    Set.prototype.intersection = function(setB) {
        var intersection = new Set();
        for (var elem of setB) {
            if (this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }

    Set.prototype.difference = function(setB) {
        var difference = new Set(this);
        for (var elem of setB) {
            difference.delete(elem);
        }
        return difference;
    }

    //Examples
    var setA = new Set([1, 2, 3, 4]),
        setB = new Set([2, 3]),
        setC = new Set([3, 4, 5, 6]);

    setA.isSuperset(setB); // => true
    setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
    setA.intersection(setC); // => Set [3, 4]
    setA.difference(setC); // => Set [1, 2]
    ```

## Map

* Basic

    ```javascript
    var myMap = new Map();

    var keyString = 'a string',
        keyObj = {},
        keyFunc = function() {};

    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, 'value associated with keyObj');
    myMap.set(keyFunc, 'value associated with keyFunc');

    myMap.size; // 3

    // getting the values
    myMap.get(keyString);    // "value associated with 'a string'"
    myMap.get(keyObj);       // "value associated with keyObj"
    myMap.get(keyFunc);      // "value associated with keyFunc"

    myMap.get('a string');   // "value associated with 'a string'"
                            // because keyString === 'a string'
    myMap.get({});           // undefined, because keyObj !== {}
    myMap.get(function() {}) // undefined, because keyFunc !== function () {}
    ```

* Iterating Maps with for..of

    ```javascript
    var myMap = new Map();
    myMap.set(0, 'zero');
    myMap.set(1, 'one');
    for (var [key, value] of myMap) {
    console.log(key + ' = ' + value);
    }
    // 0 = zero
    // 1 = one

    for (var key of myMap.keys()) {
    console.log(key);
    }
    // 0
    // 1

    for (var value of myMap.values()) {
    console.log(value);
    }
    // zero
    // one

    for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
    }
    // 0 = zero
    // 1 = one
    ```

* Iterating Maps with forEach

    ```javascript
    myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
    });
    // Will show 2 logs; first with "0 = zero" and second with "1 = one"
    ```

* Relation with Array objects

    ```javascript
    var kvArray = [['key1', 'value1'], ['key2', 'value2']];

    // Use the regular Map constructor to transform a 2D key-value Array into a map
    var myMap = new Map(kvArray);

    myMap.get('key1'); // returns "value1"

    // Use the Array.from function to transform a map into a 2D key-value Array
    console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

    // Or use the keys or values iterators and convert them to an array
    console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
    ```



