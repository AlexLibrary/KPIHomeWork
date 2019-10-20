'use strict';

const range = () => {
  const arr = [];

  // если не изменяет память то через Array.range(start end)
  // я бы смог заполнить arr в одну строку
  // не уверен в этом

  for (let i = 0; i < 1001; i++) {
    arr.push(i);
  }

  const numbers = arr
    .filter(i => (i % 3) === 0)
    .filter(i => (i % 5) !== 0);

  const arr2 = [];

  for (const number of numbers) {

    const str = number + ''; // (либо можно number.toString)
    let sum = 0;

    for (const simb of str) {
      sum += Number(simb);
    }

    if (sum < 10) {
      arr2.push(number);
    }

  }
  return arr2;
};

console.log(range());
