let objData = {
    a: 1,
};
objData[Symbol.iterator] = function () {
    let keys = Object.keys(this),
        count = 0;
    return {
        next () {
            if(count < keys.length) {
                return {value: keys[count ++], done: false}
            }else{
                return {value: null, done: true}
            }
        }
    }
};
for(let key of objData) {
    console.log(key)
}
return

let obj = {
    a: 1,
    b: 2
};

// 会报错 obj is not iterable
// for(let key of obj) {
//     console.log('%c [  ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', key)
// }

// 1.加一个迭代器
obj[Symbol.iterator] = function () {
    let keys = Object.keys(this);
    let count = 0;
    return {
        next () {
            if(count < keys.length) {
                return {value: keys[count++], done: false}
            } else {
                return {value: null, done: true}
            }
        }
    }
}
for(let key of obj) {
    console.log('%c [  ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', key)
}

// 2.类数组用Aarry.from转换成数组
let obj1 = {
    0: 1,
    1: 2,
    length: 2
}
obj1 = Array.from(obj1);
for(let key of obj1) {
    console.log('%c [  ]-2', 'font-size:13px; background:pink; color:#bf2c9f;', key)
}


// 3.用Generator生成器
let obj2 = { a: 1, b: 2}
obj2[Symbol.iterator] = function* () {
    let keys = Object.keys(this);
    for (let key of keys) {
        yield [key, this[key]]
    }
}

for (let [key, value] of obj2) {
    console.log(key, value);
}
