// AN EXAMPLE

// var	observable	=	Rx.Observable.create(function	(observer)	{ 
//     observer.next(1); 
//     observer.next(2); 
//     observer.next(3); 
//     setTimeout(()=>{ observer.next(4); observer.complete(); },5000); 
// });

// console.log('Start'); 
// observable.subscribe({ 
//     next:x=>console.log('got	value	'+x), 
//     error:err=>console.error('something	wrong	occurred:	'+	err), 
//     complete:()=>console.log('done'), 
// }); 
// console.log('Finished');


// MARK1
// return ===> next
// subscribe ===> call

// return
// function foo(){ 
//     console.log('Hello'); 
//     return 42; 
// }
// console.log(foo());

// next (可返回多个值)
// var	foo=Rx.Observable.create(function(observer){ 
//     console.log('Hello'); 
//     observer.next(42); 
//     observer.next(45); 
// });
// foo.subscribe(function(x){ console.log(x); }); 
// foo.subscribe(function(x){ console.log(x); }); 

// fun.call()意味着同步的给我一个值 observable.
// subscribe()意味着给我任意多个值，同步也好异步也罢。


// MARK2
// Observable中的 try catch
// var	observable = Rx.Observable.create(function subscribe(observer){
//     try	{ 
//         observer.next(1); 
//         observer.next(2); 
//         observer.next(3); 
//         observer.complete(); 
//     } catch	(err) { 
//         observer.error(err);
//     } 
// });


// MARK3 
// unsubscribe
// var	observable = Rx.Observable.from([10, 20, 30]); 
// var	subscription = observable.subscribe(x => console.log(x)); 
// subscription.unsubscribe();

// var	observable1 = Rx.Observable.interval(400); 
// var	observable2	= Rx.Observable.interval(300);
// var	subscription = observable1.subscribe(x => console.log('first :	'+x)); 
// var	childSubscription = observable2.subscribe(x	=>	console.log('second:	'+x));
// //两个subscription同时取消
// subscription.add(childSubscription);
// setTimeout(()=>{subscription.unsubscribe()},3000);


// MARK4
// Subject
// var subject = new Rx.Subject();
// subject.subscribe({next: (v) => console.log('observerA:	' + v)});
// subject.next(0);
// subject.subscribe({next: (v) => console.log('observerB:	' + v)});
// subject.next(1);
// subject.next(2);
// observerA:	0
// observerA:	1
// observerB:	1
// observerA:	2
// observerB:	2

// var source = Rx.Observable.from([1, 2, 3]);
// var subject = new Rx.Subject();
// var multicasted = source.multicast(subject);
// multicasted.subscribe({next: (v) => console.log('observerA:' + v)});
// multicasted.subscribe({next: (v) => console.log('observerB:	' + v)});
// subject.next(9);
// var subscription = multicasted.connect();
// subscription.unsubscribe();
// observerA:9
// observerB:9
// observerA:1
// observerB:1
// observerA:2
// observerB:2
// observerA:3
// observerB:3
