'use strict';

// Функции

const average = (a, b = 0) => (a + b) / 2;

const square = (a = 0) => a * a;

const cube = (a = 0) => a * a * a;

console.log(average(square(7), cube(3)));
