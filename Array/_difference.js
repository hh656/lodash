// _.difference
// Similar to without, but returns the values from array that are not present in the other arrays.
//
//     // Underscore/Lodash
//     console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]))
// // output: [1, 3, 4]
//
// // Native
// var arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
// console.log(arrays.reduce(function(a, b) {
//     return a.filter(function(value) {
//         return !b.includes(value);
//     });
// }));
// // output: [1, 3, 4]
//
// // ES6
// let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
// console.log(arrays.reduce((a, b) => a.filter(c => !b.includes(c))));
// // output: [1, 3, 4]

// reduce
const _difference = (input) => {
    return input.reduce((pre, cur) => pre.filter(item => !cur.includes(item)));
}

// console.log(_difference([[1, 2, 3, 4, 5], [2], [3], [4], [5]]));

//
const _difference2 = (input, ...arr) => {
    const result = [];
    (function rec(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                rec(item);
            } else {
                result.push(item);
            }
        })
    })(arr);
    return input.filter(item => !result.includes(item));
}
console.log(_difference2([1, 2, 3, 4, 5], [2], [3], [4], [5]));
