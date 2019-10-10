'use strict';

// example 1 Использование reduce вместо map или filter

const numbers = [10, 20, 30, 40];

const doubledOver50 = numbers.reduce((finalList, num) => {

  num *= 2; // удвоить каждое число (аналог map)

  if (num > 50) { // отобрать числа > 50 (аналог filter)
    finalList.push(num);
  }

  return finalList;
}, []);
doubledOver50; // [60, 80]

// example 2 Использование reduce для анализа расстановки скобок

const isParensBalanced = (str) => str
  .split('')
  .reduce((counter, char) => {
    if (counter < 0) { // matched ")" before "("
      return counter;
    } else if (char === '(') {
      return ++counter;
    } else if (char === ')') {
      return --counter;
    }  else { // найден какой-то другой символ
      return counter;
    }

  }, 0) // <-- начальное значение для счётчика
;
isParensBalanced('(())'); // 0 <-- скобки сбалансированы
isParensBalanced('(asdfds)'); // 0 <-- скобки сбалансированы
isParensBalanced('(()'); // 1 <-- скобки несбалансированы
isParensBalanced(')('); // -1 <-- скобки несбалансированы

// example 3 Подсчёт количества совпадающих значений массива

const cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
const carsObj = cars.reduce((obj, name) => {

  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj;

}, {});
carsObj; // { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
