'use strict';

const user = {
  name: 'Василий Иванович',
  age: 35,
};

const jsonUser = JSON.stringify(user);

console.log(jsonUser);

const jsObjectUser = JSON.parse(jsonUser);

console.log(jsObjectUser);
