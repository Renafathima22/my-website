/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let arr =nums.filter(num => num % 2===0 && num % 3===0);
    if(arr.length === 0){
        return 0;
    }
    let sum = arr.reduce((a,b) => a+b,0);
    return Math.floor(sum / arr.length)
}