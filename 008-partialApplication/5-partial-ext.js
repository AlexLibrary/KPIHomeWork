'use strict';

const partial = (fn, ...args) => (...rest) => {
  console.log('-----');
  console.dir({ name: fn.name });
  console.dir({ args });
  console.dir({ rest });
  fn(...args.concat(rest));
};

// Usage

const sum4 = (a, b, c, d) => (a + b + c + d);

const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);
const y1 = f13(4);
console.log(y1);

const f21 = partial(sum4, 1, 2);
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2);
