const sumAll = function(x, y) {
if (typeof x !== 'number' | typeof y !== 'number' | x*y < 0) {
    return 'ERROR';
}
let arr = [];
    if (x < y) {
        for (let i = x; i <= y; i++) {
            arr.push(i);
        }
    } else {
        for (let i = y; i <= x; i++) {
            arr.push(i);
        }
    }
return arr.reduce((a, v) => {a+=v; return a;});
};

// Do not edit below this line
module.exports = sumAll;
