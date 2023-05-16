let arr = [];
console.log(arr instanceof Array);
console.log(arr.__proto__ === Array.prototype);
console.log(Object.prototype.toString.call(arr) === '[object Array]');
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr).slice(8, -1) === 'Array');
console.log(Array.prototype.isPrototypeOf(arr));