'use strict';

// Wrapper will prevent call after timeout

const timeout = (msec, fn) => {
  let timer = setTimeout(() => {
    if (timer) console.log('Function timedout', msec);
    timer = null;
  }, msec);
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null; // убивает возможность вызова функции второй раз
      return fn(...args);
    }
  };
};

// Usage

const fn = par => {
  console.log('Function called, par:', par);
};

const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

setTimeout(() => {
  fn100('first');
  fn200('second');
  // fn200('second');
}, 150);
// setTimeout(() => {
// 	fn200('second');
// }, 400);
