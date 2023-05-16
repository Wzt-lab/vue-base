var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    if(s.length === 1) return 1;
    let strArr = s.split('');
    let strForm = {};
    for(let i = 0; i < strArr.length; i ++) {
        for(let j = i + 1; j < strArr.length; j ++) {
            let nowStr = s.substring(i, j + 1);

            if(nowStr.indexOf(strArr[j]) !== j - i) {
                debugger
                let len = j - i;
                if(strForm.maxLen < len || !strForm.maxLen) {
                    strForm.maxLen = len;
                }
                break;
            }else if (j === strArr.length -1 && nowStr.indexOf(strArr[j]) === j - i) {
                let len = nowStr.length;
                if(strForm.maxLen < len || !strForm.maxLen) {
                    strForm.maxLen = len;
                }
            }
        }
    }
    return strForm.maxLen;
};
let len = lengthOfLongestSubstring("au")
console.log('%c [ len ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', len)