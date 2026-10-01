/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = n.toString().split("").reduce((a , b)=> a * b)
    let sum = n.toString().split("").reduce((a, b)=> Number(a) + Number(b))

    return product - sum
};