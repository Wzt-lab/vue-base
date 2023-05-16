/**
 * 数组的原始方法有
 * pop、push、shift、unshift、slice、splice、reverse、sort、indexOf、lastIndexOf、some、every、filter、forEach、map、reduce、reduceRight
 * */ 
Array.prototype.myPush = function (...items) {
    // 长度要定义在这里，不然放到循环里面长度会一直变化
    let length = this.length;
    for(let i = 0; i < items.length; i++) {
        this[length + i] = items[i]
    }
    return this;
};
Array.prototype.myPop = function () {
    let lastItem = this[this.length - 1];
    this.length  = this.length -1;
    return lastItem;
};
Array.prototype.myUnshift = function (...items) {
    let oldData = JSON.parse(JSON.stringify(this));
    this.length = 0;
    for (let i = 0; i < items.length; i ++) {
        this[i] = items[i];
    };
    let length = this.length
    for (let i = 0; i < oldData.length; i ++) {
        this[length + i] = oldData[i]
    }
    return this;
};
Array.prototype.myShift = function() {
  // 保存第一个元素
  const first = this[0];
  // 移动所有元素
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  // 删除最后一个元素
  this.length = this.length - 1;
  // 返回第一个元素
  return first;
};
Array.prototype.myReverse = function () {
    let length = this.length;
    for (let i = 0; i < length; i ++) {
        if ( i < length - i - 1) {
            const result = this[i]
            this[i] = this[length - i - 1];
            this[length - i - 1] = result;
        } else {
            break;
        }
    };
    return this;
};
let arr = [];
// push
arr.myPush(1, 2, 3);
console.log(arr)
// pop
let delData = arr.myPop();
console.log(arr);
console.log(delData);
// unshift
arr.myUnshift('a', 'b', 'c', 'd');
console.log(arr)
// shift
arr.myShift()
console.log(arr)
// reverse
arr.myReverse()
console.log(arr);


let arr1 = [1, 2, 3, 4, 5, 1]
// some
let flag = arr1.some((item) =>  item > 1);
console.log('%c [ flag ]-65', 'font-size:13px; background:pink; color:#bf2c9f;', flag)
// every
let flag1 = arr1.every((item) =>  item > 1);
console.log(flag1);
// lastIndexOf
let flag2 = arr1.lastIndexOf(1)
console.log(flag2)
// indexOf
let flag3 = arr1.indexOf(1)
console.log(flag3)
// reduce
let arrData = [1, 2]
let arrData1 = [3, 4]
let arrData2 = [5, 6]
let newArr = [arrData, arrData1, arrData2].reduce((prev, next) =>{ let result = prev.concat(next); return result});
console.log(newArr)

