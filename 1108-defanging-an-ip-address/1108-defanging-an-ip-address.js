/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const result = address.split("").map((x)=>{
        if(x==="."){
            return "[.]"
        }
        return x
    })
    return result.join("")
};