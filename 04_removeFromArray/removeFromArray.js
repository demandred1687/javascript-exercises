const removeFromArray = function(arr, ...x) {
let newArr = [...arr];
return newArr.filter((val) => {return x.indexOf(val) == -1;})
};
console.log([1,2,3],3);
// Do not edit below this line
module.exports = removeFromArray;
