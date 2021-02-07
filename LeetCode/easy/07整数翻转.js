/**
 * @param {number} x
 * @return {number}
 */
// 1.暴力法 转成字符串反转
var reverse = function(x) {
    let now = Math.abs(x).toString().split("").reverse().join(""); // 绝对值=>string=>array=>reverse=>string
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};


// 2.取余法 321 = 123%10 12%10 1%10
var reverse = function(x) {
    let ord = Math.abs(x); //去符号
    let now = 0;
    while(ord > 0) {
        now = now*10+ord%10; //1=>12=>123
        ord = Math.floor(ord/10);  //321=>32=>3
    }
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    } else{
        return now < Math.pow(2,31) ? now : 0;
    }
}