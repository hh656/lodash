// _.fromPairs
// Returns an object composed from key-value pairs.
//
//     // Underscore/Lodash
//     _.fromPairs([['a', 1], ['b', 2]]);
// // => { 'a': 1, 'b': 2 }
//
// // Native
// const fromPairs = function(arr) {
//     return arr.reduce(function(accumulator, value) {
//         accumulator[value[0]] = value[1];
//         return accumulator;
//     }, {})
// }
//
// // Compact form
// const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {})
//
// fromPairs([['a', 1], ['b', 2]]);
// // => { 'a': 1, 'b': 2 }
//
// // Native(ES2019)
// Object.fromEntries([['a', 1], ['b', 2]])
// // => { 'a': 1, 'b': 2 }


const _fromPairs = (input) => {
    return input.reduce((pre, cur) => (pre[cur[0]] = cur[1], pre), {});
}

console.log(_fromPairs([['a', 1], ['b', 2]]));
