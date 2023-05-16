var longestPalindrome = function(s) {
    if(!s.length) return '';
    if(s.length === 1) return s;
    let result = '';
    let arr = [];
    s.split('').forEach(item => {
        if(!arr.includes(item)){
            arr.push(item);
        }
    })
    if(arr.length === s.length) {
        return result = s[0];
    };
    let i = 0 ,
        j = 1;
    while(true) {
        if(i >= s.length) break;
        let newStr = s.substring(i, j + 1);
        let reserveStr = newStr.split('').reverse().join('');
        if(newStr === reserveStr && ( !result || result.length < newStr.length)) {
            result = newStr
        }
        j++;
        if(j >= s.length) {
            j = ++ i + 1;
        }
    }
    result =  result || s[0];
    return result;
};
let str = longestPalindrome("anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg")
console.log('%c [ str ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', str)