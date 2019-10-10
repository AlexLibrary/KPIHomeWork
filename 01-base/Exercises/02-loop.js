'use strict';

// Циклы

const range = (a, b, step = 0) => {
  if (step < 0 && a > b) {
    while (a >= b) {
      console.log(a);
      a += step;
    }
  } else if (step > 0 && a < b) {
    while (a <= b) {
      console.log(a);
      a += step;
    }
  } else if (step === 0) {
    console.log('step = 0');
  } else console.log('ERROR: start, end, step');
};

range(15, 30, 2); //range(start, end, step)
range(15, 30, -2); //range(start, end, step)
range(30, 15, 2); //range(start, end, step)
range(30, 15, -2); //range(start, end, step)
range(15, 15, 2); //range(start, end, step)
range(30, 15, 0); //range(start, end, step)
range(); //range(start, end, step)
