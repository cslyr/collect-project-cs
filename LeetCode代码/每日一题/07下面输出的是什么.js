// var length = '10'

// console.log(this.length)
// function fn(){
//     console.log(this.length)
// }
// var obj = {
//   length:5,
//   method:function(fn){
//     fn()
//     arguments[0]()    //arguments[0]() 中调用 fn 函数，此时 this 指向的是 arguments 对象，而 arguments 对象有一个 length 属性，所以返回 1。
//     console.log(arguments)
//   }
// }

// obj.method(fn) 
// obj.method(fn, 123) 


// console.log(num())
// var num1 =10
// function num(){
//   console.log('hello111')
// }
// 输出的结果是 hello111   undefined


// var name = '222';
// var a = {
//   name: '111',
//   say: function() {
//     console.log(this.name);
//   }
// };
// var fun = a.say;
// fun();

