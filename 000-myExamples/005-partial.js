'use strict';

const partial = (fn, ...a) => (...rest) => fn(...a.concat(rest));

const sum = (...a) => a.reduce((acc, a) => (acc + a));

const f1 = partial(sum, 1);
const f2 = partial(f1, 1);
console.log(f2);
