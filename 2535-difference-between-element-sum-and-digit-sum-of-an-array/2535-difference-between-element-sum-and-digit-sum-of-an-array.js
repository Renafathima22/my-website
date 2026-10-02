/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let num =nums.reduce((a , b)=> a + b);
    let sum =nums.join("").split("").reduce((a , b)=> Number (a) + Number(b))
    return num - sum
};
