'use strict';

const log = l => console.log(l);

const numbers = [1, 2, 3, 5, 4];

const multiplyByTwo = x => x * 2;
const addByOne = x => ++x;

const compose = (...funcs) => x => funcs;

const func3 = compose(multiplyByTwo, addByOne);

const result = numbers.map(func3);

// we can
// .map(compose(multiplyByTwo, addByOne));

log(result);
