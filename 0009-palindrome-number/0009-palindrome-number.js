/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = x.toString().split("").reverse().join("")
     
     return x == result
};
console.log(isPalindrome);