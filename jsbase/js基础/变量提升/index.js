console.log(a)

function a() {
    console.log('hello')
}

console.log(a1())
function a1() {
    return 'hello'
}



// console(a2())
// var a2 = function () {
//     return 'hello'
// }

// console.log(data1)
// console.log(data2)

// var data1 = 10;
// let data2 = 20;

var test1 = 1;
function foo() {
    console.log('test1'+ test1)
    function bar() {
        console.log('test1'+ test1);
        var test1 = 2;
    }
    bar();
}
foo();


var test2 = 1
function foo1() {
    console.log('test2 '+ test2)
    function bar() { 
        console.log('test2 '+ test2);
        var test2 = 2;
    }
    if (false) {
        var test2 = 3;
    }
    bar();
}
foo1();