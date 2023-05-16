class Person {
    constructor (name) {
        this.name = name
    }
}
class Animal {
    constructor (name) {
        this.name = name
    }
}
let person = new Person('Tom')
// 判断是否属于该构造函数
console.log(person.__proto__ === Person.prototype);
console.log(person instanceof Person);
console.log(Person.prototype.isPrototypeOf(person));

