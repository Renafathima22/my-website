/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
   let stg = {
    R : 0 ,
    L : 0 ,
    U : 0 ,
    D : 0
   }
   for ( var i in moves){
        stg [moves[i]]+=1
   }
   return (stg ['R']== stg ['L'] && stg['U']== stg['D'])

}