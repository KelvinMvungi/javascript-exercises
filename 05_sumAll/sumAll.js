const sumAll = function(a, b) {
   if(typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) return 'ERROR';

   const argsArr = [a, b]
    let sum = 0;
    for(let i = Math.max(...argsArr); i >= Math.min(...argsArr); i--){
        sum += i;
    }
    return sum;
    }
// Do not edit below this line
module.exports = sumAll;
