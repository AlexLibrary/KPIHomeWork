'use strict';

// Function throttling, executed once per interval

const throttle = (timeout, fn, ...args) => {
  let timer;
	let wrapped = null;

  const throttled = () => {
		timer = undefined;
	};

  wrapped = (...par) => {
    if (!timer) {
			timer = setTimeout(throttled, timeout);
      return fn(...args.concat(par));
    }
  };

  return wrapped;
};

// Usage

const fn = (...args) => {
  console.log('Function called, args:', args);
};

const ft = throttle(200, fn, 'value1');

const timer = setInterval(() => {
  fn('value2');
  ft('value3');
}, 50);

setTimeout(() => {
  clearInterval(timer);
}, 2000);
