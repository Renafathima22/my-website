/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min =Math.min(...nums);
    return gcd(max,min)
};
function gcd (a, b){
  while (b !==0){
    [a,b]=[b, a % b];
  }
  return a;
}
console.log(gcd)