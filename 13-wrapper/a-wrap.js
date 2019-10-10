'use strict';

/**
 * Д/З // https://youtu.be/2h9syXN5wO0?t=2230
 * Сделать метод wrapper.resume
 * // мой вариант (Если fn === Null то fn = oldFn )
 * с помощью переключателя toggle
 * hasDone // true
 */

const wrap = fn => {
  let limit = 0;
  let counter = 0;
  // let oldFn = fn; //
  let toggle = true; //

  const wrapper = (...args) => {
    if (limit && counter === limit) wrapper.cancel();
    if (toggle) { //
      // if (fn) { //
      const res = fn(...args);
      counter++;
      return res;
    }
  };

  wrapper.cancel = () => {
    // fn = null; //
    toggle = false; //
    return wrapper;
  };

  wrapper.timeout = msec => {
    setTimeout(() => {
      wrapper.cancel();
    }, msec);
    return wrapper;
  };

  wrapper.limit = count => {
    limit = count;
    return wrapper;
  };

  wrapper.resume = () => {
    // fn = oldFn; //
    toggle = true; //
    return wrapper;
  };

  return wrapper;
};

// Usage

const fn = par => {
  console.log('Function called, par:', par);
};

const f = wrap(fn).timeout(200).limit(3);
f('1st');

setTimeout(() => {
  f('2nd');
  // f('3rd');
  f.cancel();
  f.resume();
  f('4th');
  f('5th');
}, 150);
