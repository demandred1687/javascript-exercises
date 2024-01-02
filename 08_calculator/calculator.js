const add = function(...args) {
  let sum = 0;
	for (let i = 0; i<args.length; i++) {
  sum+=args[i];
  }
  return sum;
};

const subtract = function(x,y) {
	x-=y;
  return x;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i<arr.length; i++) {
  sum+=arr[i];
  }
  return sum;
};

const multiply = function(arr) {
let total = 1;
for (let i = 0; i < arr.length; ++i) {
 total *= arr[i];
}
return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
