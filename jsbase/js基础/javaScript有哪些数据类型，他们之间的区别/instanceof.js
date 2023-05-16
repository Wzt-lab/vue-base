/**
 * 在 JavaScript 中，原始数据类型（Primitive Type）和复杂数据类型（Object Type）是两种不同的数据类型，它们的性质和特点也有所不同。
 * Number、String 和 Boolean 是三种原始数据类型中的对象包装器，它们分别对应着数字、字符串和布尔值。
 *      尽管它们是原始数据类型，但在一些场景下，它们可以像对象一样被使用，并且具有一些内置的方法和属性，比如 `Number.prototype.toFixed()`、`String.prototype.split()` 等。
 *      因此，为了实现这些功能，JavaScript 引擎会自动将原始数据类型转换为对应的对象，这些对象都继承自相应的构造函数的原型，
 *      即 Number.prototype、String.prototype 和 Boolean.prototype，所以它们都具有 `__proto__` 属性。
 * undefined 和 null 是 JavaScript 中的两个特殊值，它们都属于原始数据类型。
 *      由于它们不是对象类型，没有任何方法或属性，因此它们也没有 `__proto__` 属性，而是直接继承自它们各自的构造函数 Object.prototype 的原型。
 *      虽然 undefined 和 null 不具备对象的行为，但可以使用 typeof 运算符检查它们的类型，分别返回 "undefined" 和 "object"。
 * */ 

function myInstanceOf (left, right) {
    let proto = Object.getPrototypeOf(left);
    // let proto = left?.__proto__ || '';
    let prototype = right.prototype;
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
        // proto = proto.__proto__;
    }
}
function add () {

}
let result = myInstanceOf(1, Number);
let result1 = myInstanceOf(add, Function);

console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', result1);

