'use strict';

const log = (s, i) => {
  console.log(i, s);
  return s;
};

const f1 = x => x * 2; // 14 20 10
const f2 = x => ++x; // 15 21 11

const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);
// ...funcs => [[Function: f1] [Function: f2]]
// v => 7 10 5
/* f =>
  [Function: f1]
  [Function: f2]
  [Function: f1]
  [Function: f2]
  [Function: f1]
  [Function: f2]
*/
// x => 7 10 5
const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .filter(x => x > 4) // возвращает все элементы больше 4 ([7, 10, 5]);
  .map(f3)
  .reduce((acc, val) => acc + val);

console.log(res1); // 47
console.log();

[7, 10, 1, 5, 2]
  .map(log)
  .map(x => x * 2)
  .map(log)
  .map(x => ++x)
  .map(log);
