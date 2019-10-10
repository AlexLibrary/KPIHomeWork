'use strict';

const required = () => {
  throw new Error('Missing parameter');
};
// При вызове этой функции произойдёт ошибка,
// если параметры "a" или "b" не заданы
const add = (a = required(), b = required()) => a + b;
add(1, 2); // 3
add(1); // Error: Missing parameter.
