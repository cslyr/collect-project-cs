// 定义一个函数extend，用于实现类的继承
function extend(sup, base) {
  // 在这里的作用就是 用于保存 base.prototype 中 constructor 属性的描述符，以便后续重置 constructor
  var descriptor = Object.getOwnPropertyDescriptor(base.prototype, "constructor");
  
  // 将Boy的原型链指向person
  base.prototype = Object.create(sup.prototype);
  // 定义一个handler对象，包含construct和apply两个方法
  var handler = {//当使用new  boy创造一个实例的时候handler就会被调用
    // construct方法用于创建实例
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    // apply方法用于调用函数
    apply: function (target, that, args) {//即使在父类当中没有找到，那么就去父类去找，看看父类能不能找到
      sup.apply(that, args); // 调用sup函数
      base.apply(that, args); // 调用base函数
    },
  };
  // 创建一个代理对象proxy，使用proxy去代理boy，当操作了proxy的时候就相当于操作了boy
  var proxy = new Proxy(base, handler);
  // 将proxy赋值给descriptor的value属性
  descriptor.value = proxy;
  // 因为之前将boy的原型链指向其他的地方了，这里要指回原来的地方
  Object.defineProperty(base.prototype, "constructor", descriptor);
  // 返回代理对象proxy
  return proxy;
}

// 定义一个Person类
var Person = function (name) {
  this.name = name;
};

// 使用extend函数，让Boy类继承自Person类
var Boy = extend(Person, function (name, age) {
  this.age = age;
});

// 给Boy类的prototype添加一个sex属性
Boy.prototype.sex = "M";

// 创建一个Peter实例
var Peter = new Boy("Peter", 13);
console.log(Peter.sex); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13