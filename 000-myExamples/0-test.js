'use strict';
/**
 * д/з
 * мы можем написать
 * специальный вариант асинхроннового timeout
 * который будет ждать не начало вызова, а конца вызова,
 * что бы timeout накладыывался не на вызов функции а
 * на возврат результата через callback
 * (НОРМАЛЬНОЕ ДОМАШНЕЕ ЗАДАНИЕ)
 */
// const wrapAsync = (before, after, beforeCb, afterCb, fn) =>
//   (...args) => {
//     const callback = args[args.length -1];
//     if (typeof callback === 'function') {
//       args[args.length - 1] = (...pars) =>
//         afterCb(callback(...beforeCb(...pars)));
//     }
//     return after(fn(...before(...args)));
//   };
// Wrapper will prevent call after timeout

const timeout = (msec, fn) => {
  let timer = setTimeout(() => {
    if (timer) console.log('Function timedout');
    timer = null;
  }, msec);
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      return fn(...args);
    }
  };
};

// Usage

const fn = (par, callback) => {
  console.log('Function called, par:', par);
  callback(null, par);
};

const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

setTimeout(() => {
  fn100('first', (err, data) => {
    console.log('Callback first', data);
  });
  fn200('second', (err, data) => {
    console.log('Callback second', data);
  });
}, 150);
