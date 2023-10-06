const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0; 
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return parseInt(sum);
};

const multiply = function(arr) {
  if(arr.length === 0) return 0;
  let product = 1
  for( let i = 0; i < arr.length; i++){
    product *= arr[i];
  }
return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if(n === 0){
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
