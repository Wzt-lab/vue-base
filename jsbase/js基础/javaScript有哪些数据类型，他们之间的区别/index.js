/**
 * javaScript类型有Number、String、Boolean、Null、undefined、Symbol、BigInt、Object
 * Symbol是ES6新增的属性，用来表示唯一标识符，用于创建匿名对象属性或者防止名称冲突
 * BigInt是ES2020新增的属性，用来表示任意大整数
 * Number、String、Boolean、Null、undefined存放与栈中
 * 函数、对象、数组放在堆内存中
 * 
 * */ 
let num = 1,
    boolean = true,
    undef = undefined,
    nullDat = null,
    string = 'str',
    obj = {},
    arr = [],
    fun = function () {

    };
/**
 * 怎么检测数据类型
*/

/**
 * 1.typeOf去检测数据
 * num => number
 * string => string
 * undef => undefined
 * boolean => boolean
 * nullDat => object
 * arr => object
 * obj => object
 * fun => function
 * */ 
console.log(typeof num === 'number') // true
console.log(typeof boolean === 'boolean') // true
console.log(typeof undef === 'undefined') // true
console.log(typeof string === 'string') // true
console.log(typeof nullDat === 'object') // true
console.log(typeof obj === 'object') // true
console.log(typeof arr === 'object') // true
console.log(typeof fun === 'function') // true

/**
 *2.instanceof
 **/ 
console.log('======================instanceof======================')
 console.log(num instanceof Number) // false
 console.log(boolean instanceof Boolean) // false
//  console.log(undef instanceof undefined) // 报错
 console.log(string instanceof String) // false
//  console.log(nullDat instanceof null) // 报错
 console.log(obj instanceof Object) // true
 console.log(arr instanceof Array) // true
 console.log(fun instanceof Function) // true

/**
 * 3.constructor
 * */  
console.log('======================constructor======================')
console.log(num.constructor === Number);
console.log(boolean.constructor === Boolean);
console.log(string.constructor === String);
console.log(obj.constructor === Object);
console.log(arr.constructor === Array);
console.log(fun.constructor === Function);
// 如果创建一个对象并且改变了他的原型，就不能通过constructor方式去判断
function Fn() {};
console.log(Fn.constructor === Function);
Fn.prototype = new Array();
let f = new Fn();
console.log(f.constructor === Function);
console.log(f.constructor === Array);

/**
 * 4.Object.prototype.toString.call()
 * */ 
console.log('======================Object.prototype.toString.call()======================');
console.log(Object.prototype.toString.call(num) === '[object Number]');
console.log(Object.prototype.toString.call(boolean) === '[object Boolean]');
console.log(Object.prototype.toString.call(string) === '[object String]');
console.log(Object.prototype.toString.call(undef) === '[object Undefined]');
console.log(Object.prototype.toString.call(nullDat) === '[object Null]');
console.log(Object.prototype.toString.call(obj) === '[object Object]');
console.log(Object.prototype.toString.call(arr) === '[object Array]');
console.log(Object.prototype.toString.call(fun) === '[object Function]');


let number = NaN;
// 判断数据是否是NaN，最好用Number.isNaN,因为如果是除了是Number类型的用isNaN也会返回true
console.log(number === NaN)
console.log(number !== NaN)
console.log(Number.isNaN(number))
console.log(Number.isNaN(num))
console.log(Number.isNaN(obj))
console.log(isNaN(number))
console.log(isNaN(num))
console.log(isNaN(obj))
console.log(isNaN(string))