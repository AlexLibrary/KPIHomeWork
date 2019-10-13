'use strict';

/**
 * slow fibbonacci
 */
const fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));

/**
 * fast fibbonacci
 */
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
console.log(fib(40));
