const removeFromArray = function(arr, ...args) {
let newArr = [...arr];
return newArr.filter((val) => {return args.indexOf(val) == -1;})
};
console.log([1,2,3],3);
// Do not edit below this line
module.exports = removeFromArray;
