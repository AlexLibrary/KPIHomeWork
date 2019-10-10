'use strict';

const array1 = [1, 2, 3, 4];
const add = x => x + 1;
const mult = x => x * 2;

const composition = (...funcs) => x => funcs.reduce((acc, f) => f(acc), x);

const func = composition(add, mult);

// [((1+1)*2), ((2+1)*2), ((3+1)*2), ((4+1)*2)]
console.log(array1.map(func));
// expected output: [ 4, 6, 8, 10 ]

// reducer
// acc {number}
// f {function}
// f(acc) return {number}
const reducer = (acc, f) => f(acc);
const x = 5;
// reduce = (5, add) => reducer(5, add);
// reducer = ((acc, add) => add(acc)); // add(5) вернет 6;
// reduce = (6, mult) => reducer(6, mult);
// reducer = ((6, mult) => mult(6)); // mult(6) вернет 12;
// reduce => 12;
// result = 12;
const result = [add, mult].reduce(reducer, x);
// expected output: 12
console.log(result);
