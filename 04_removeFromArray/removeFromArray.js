const removeFromArray = function(arr, ...args) {
 const set2 = new Set(args);
 const result = arr.filter(item => !set2.has(item));
 return result;
}

// Do not edit below this line
module.exports = removeFromArray;
