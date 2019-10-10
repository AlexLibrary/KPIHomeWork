'use strict';

// Уникальный массив
const numbers = [1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] // => [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ]


// Обновление объекта в массиве по свойству
const initial = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}]
const newValue = {id: 3, score: 3}
const updated = initial.map(x => x.id === newValue.id ? newValue : x)


// Удаление объекта из массива по свойству
const removeId = 3
const without3 = initial.filter(x => x.id !== removeId)


// Деконстуирование ключей из объекта
const a = {
    foo: 'bar',
    usefull: 1,
    useless: 0
};

const {useless, ...clean} = a;


// Объединение массива объектов
// merge an array of objects
const data = [ {a: 1}, {b: 2}, {c: 3} ]
const merged = data.reduce((res, obj) => ({...res, ...obj}), {})
console.log(merged) // => { a: 1, b: 2, c: 3  }

// merge an array of objects by property
const toMerge = [
  { id: 1, value: 'a', },
  { id: 2, value: 'b', },
  { id: 3, value: 'c' },
  { id: 1, score: 1 },
  { id: 2, score: '2' },
]
const mergedByProperty = toMerge.reduce((result, obj) => ({
  ...result,
  [obj.id]: {
    ...result[obj.id],
    ...obj
  }
}), {})
console.log(mergedByProperty) // =>
/*
 *{ '1': { id: 1, value: 'a', score: 1 },
 *  '2': { id: 2, value: 'b', score: '2' },
 *  '3': { id: 3, value: 'c' } }
 */

 // merge two array of objects together


 // Flatten
const arrayOfArray = [ [1, 2], [3, 4], [[5, 6]] ]
const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], [] )
console.log(flattened) // => [1, 2, 3, 4, [5, 6]]

// FromPairs
const pairs = [['a', 1], ['b', 2], ['c', 3]]
const asObjects = pairs
  .reduce((res, [key, value]) => ({ ...res, [key]: value }), {})

// Or event smarter (thanks to @nomaed for pointing this one out)
const asObjects2 = { ...(new Map(pairs)) }

console.log(asObjects) // => { a: 1, b: 2, c: 3  }


// Вычитание из наборов
// subtract two sets
const s1 = [ 1, 2, 3, 4, 5 ]
const s2 = [ 2, 4 ]
const subtracted = s1.filter(x => s2.indexOf(x) < 0)
console.log(subtracted)


// https://habrahabr.ru/company/ruvds/blog/352128/
// Обязательные параметры функции
const required = () => { throw new Error('Missing parameter'); };
//При вызове этой функции произойдёт ошибка, если параметры "a" или "b" не заданы
const add = (a = required(), b = required()) => a + b;
add(1, 2) //3
// add(1) // Error: Missing parameter.
