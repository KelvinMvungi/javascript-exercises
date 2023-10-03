const str = 'hey';
const num = 3;
const repeatString = function(str, num) {
let res = "";
for (let i = 0; i < num; i++){
    if(i < 0 ) {
        return "ERROR";
    }
    res += str;
}
return res;
}
// Do not edit below this line
module.exports = repeatString;
