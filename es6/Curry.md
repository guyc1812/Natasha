# Curry

## Reuse

```javascript
let curry = function(fn){
	let args = Array.prototype.slice.call(arguments,1); // [3, 4, 5]
	return function(){
		let innerArgs = Array.prototype.slice.call(arguments); // [6, 7]  
		let finalArgs = args.concat(innerArgs); // [3, 4, 5, 6, 7]
        return fn.apply(null,finalArgs);
    }
}

let add = function(){
	let args = Array.prototype.slice.call(arguments);
	let sum = args.reduce((previous, current) => {
		console.log(previous+" , "+current);    // 3 , 4
                                                // 7 , 5
                                                // 12 , 6
                                                // 18 , 7
    	return previous + current;
  	});
	return sum;
}

let curryAdd=curry(add,3,4,5);
console.log(curryAdd(6,7));      // 25
```

## Delay 

```javascript
let curryDelay = function(fn){
    // save but not apply until the arguments is empty
	let array = Array.prototype.slice.call(arguments,1);
	return function(){
		if(arguments.length==0){                    
			return fn.apply(null,array);
		}else{
			array = array.concat(Array.prototype.slice.call(arguments));
			console.log(array);
		}
	}
}

let curryDelayAdd=curryDelay(add,3,4,5);
curryDelayAdd(6);   // array = [3, 4, 5, 6]
curryDelayAdd(7);   // array = [3, 4, 5, 6, 7]
curryDelayAdd(8);   // array = [3, 4, 5, 6, 7, 8]
console.log(curryDelayAdd());   // 33
```

### Reference

[js currying](https://www.jianshu.com/p/aaeb4071d28e)