// _.concat
// Creates a new array concatenating array with any additional arrays and/or values.
//
// // Underscore/Lodash
//     var array = [1]
// var other = _.concat(array, 2, [3], [[4]])
//
// console.log(other)
// // output: [1, 2, 3, [4]]
//
// // Native
// var array = [1]
// var other = array.concat(2, [3], [[4]])
//
// console.log(other)
// // output: [1, 2, 3, [4]]

// 递归实现
const _concat = (...input) => {
    const result = [];
    (function rec(input) {
        input.forEach(item => {
            if (Array.isArray(item)) {
                rec(item);
            } else {
                result.push(item);
            }
        })
    })(input);
    return result;
}

console.log(_concat([1, 2, 3, 4], 5, 6, 7, [8, [9, [10, [11, [12, [13, [14, [15]]]]]]]]));



