/**
 * Generator
 * */ 
// 在function加上*
function* gen() {
    console.log(1)
};

const iterator = gen();
// 只有调用next方法才会触发
iterator.next();

function* test1() {
    yield 1
    console.log(1)

    yield 2
    console.log(2)
}
const test = test1();
// 第一次next，碰到yield1会停止，所以不会打印
test.next();
// 第二次next，碰到yield2会停止，所以会打印1
test.next();
// 第三次next，会打印2
test.next();


function* setValue() {
    let data1 = yield 1
    console.log(data1)

    let data2 = yield 2
    console.log(data2)

    let data3 = yield 3
    console.log(data3)

    return 4
}
const setVal = setValue();
// 不用给值，给了值也不会生效
setVal.next()
setVal.next('A')
setVal.next('B')
setVal.next('C')