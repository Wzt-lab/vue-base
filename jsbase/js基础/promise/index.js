let promise = new Promise((resovle, reject) => {
    setTimeout(() => {
        reject(1)
    }, 1000);
});
let promise1 = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle(2)
    }, 2000);
});
let promise2 = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle(3)
    }, 3000);
});
let promiseArray = [promise, promise1, promise2];
/**
 * race方法，不管prmise的状态的reject还是resolve，只会返回最快的一个接口，如果是reject就会走catch，如果是resolve就走then
 * all方法，会返回最新执行的reject的值，如果全部都执行成功，则会返回一个数组
 * */ 
Promise.race(promiseArray).then(res=>{
    console.log('%c [  ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', res)
}).catch(err => {
    console.log('error',err)
});

Promise.all(promiseArray).then(res=>{
    console.log('%c [  ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', res)
}).catch(err => {
    console.log('error',err)
});


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('111111')
        }, 2000);
    })
};
async function setData() {
    let data = await getData();
    console.log(data);
    console.log('%c [  ]-45', 'font-size:13px; background:pink; color:#bf2c9f;', 1111)
}
setData();