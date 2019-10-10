'use strict';

const log = l => console.log(l);

const arr = [1, 2, 3, 'string1', 'string29949'];

const asObj = value => ({ value });
const asValue = obj => obj.value;

const objs = arr.map(asObj); // or map(value => ({ value }) );
log(objs);
const vals = objs.map(asValue); // or map(obj => obj.value);
log(vals);

const persons = [
  {
    name: 'Lydia',
    age: 20,
  },
  {
    name: 'Peter',
    age: 21,
  },
];
log(persons);
persons.map(obj => obj.age += 2);
log(persons);
