/**
 * 什么是类数组？
 * 一个拥有length属性和若干索引属性的对象就可以称为类数组对象，常见的类数组对象有arguments和获取的dom元素
 * 
 * */ 
let obj = {
    0: 'a',
    1: 'b',
    length: 2
};
console.log(Array.from(obj));


function getData() {
    console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', arguments)
    // console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', Array.from(arguments))
    // console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', Array.prototype.slice.call(arguments))
    // console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', Array.prototype.splice.call(arguments, 0))
    console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', Array.prototype.concat.apply([], arguments))
}
getData(1,2,3)
