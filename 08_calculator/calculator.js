const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, el) => acc * el);
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
	if(num === 0 || num === 1) return 1;
  else {
    let result = num * (num-1);
    for(let multiplier = num-2; multiplier >= 2; multiplier--){
      result *= multiplier;
    }
    return result;
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
