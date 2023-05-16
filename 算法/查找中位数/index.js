var findMedianSortedArrays = function(nums1, nums2) {
    debugger
    let totalArr = [...nums1, ...nums2];
    let len = totalArr.length;
    let halflen = parseInt(len / 2);
    let num;
    for(let i = 0; i<totalArr.length; i++){
        for(let j = 0; j<totalArr.length; j++){
            if(totalArr[i] > totalArr[j]) {
                let tem = totalArr[i];
                totalArr[i] = totalArr[j];
                totalArr[j] = tem;
            }
        }
    };
    if(len % 2 === 0) {
        num = (totalArr[halflen - 1] + totalArr[halflen]) / 2
    }else{
        num = totalArr[halflen]
    }
    return num;
};
let num = findMedianSortedArrays([1,3],[2])
console.log('%c [ num ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', num)