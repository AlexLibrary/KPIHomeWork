'use strict';

const inc1 = n => ++n;
const a = 5;
const b = inc1(a);
console.dir({ a, b });

const inc2 = (num) => ++num.n;
const obj = { n: 5 };
inc2(obj);
console.dir(obj);
