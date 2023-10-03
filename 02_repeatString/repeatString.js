const str = 'hey';
const num = 3;
const repeatString = function(str, num) {
let res = "";
let i = 0;
do {
    if (i < 0) {
        return "ERROR";
    }
    res += str;
    i++;
} while( i < num)
return res;
}
// Do not edit below this line
module.exports = repeatString;
