/**
 * 1.首先创建了一个新的空对象
 * 2.设置原型，将对象的原型设置为函数的prototype上
 * 3.让函数的this指向这个对象，执行构造函数的代码（初始化数据和方法）
 * 4.判断函数的返回值类型，如果是值类型，返回创建对象。如果是引用类型，就返回整个引用类型的对象
 * */
function objectFactory() {
  let newObject = null,
    constructor = Array.prototype.shift.call(arguments),
    result = null;
  if (!(constructor instanceof Function)) return console.log("type error");
  newObject = Object.create(constructor.prototype);
  console.log(newObject.__proto__ === constructor.prototype)
  result = constructor.apply(newObject, arguments);
  let flag =
    result && (typeof result === "object" || typeof result === "function");
  return flag ? result : newObject;
}
function Person(name) {
  this.name = name;
}
Person.prototype.sing = function () {
  console.log(
    "%c [  ]-36",
    "font-size:13px; background:pink; color:#bf2c9f;",
    "唱"
  );
};
let person = objectFactory(Person, "tom");
person.sing = function () {
  console.log("sing");
};
person.sing();
console.log(person.__proto__ === Person.prototype);
