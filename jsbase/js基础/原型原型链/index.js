function Person(name) {
  this.name = name;
  // this.sing = function () {
  //   console.log('sing1')
  // }
};
Person.prototype.sing = function () {
  console.log('sing')
}
let person = new Person('tom');
person.getName = function () {
  return this.name
};
console.log(person.constructor === Person);
console.log(person.__proto__.constructor === Person);
console.log(Person.prototype.constructor === Person);
console.log(Person.constructor === Function);
console.log(person.__proto__.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Person.constructor.prototype.__proto__ === Object.prototype);
console.log(person.constructor.constructor.prototype.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(Object.getPrototypeOf(person) === person.__proto__);
console.log(Person.prototype.isPrototypeOf(person));
// hasOwnProperty 用来检测一个对象是否有指定的属性名，并且不是从原型上获取的
console.log(Person.prototype.hasOwnProperty('sing'));
console.log(person.hasOwnProperty('sing'));
// 实例对象没有prototype属性
console.log(person.prototype);
