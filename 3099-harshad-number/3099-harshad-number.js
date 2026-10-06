/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let result =x.toString().split('').reduce((a , b)=> Number(a) + Number(b))
    if( x % result === 0){
        return Number(result)
    }
    return -1
};