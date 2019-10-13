'use strict';

const room = {
  number: 23
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
  // console.log(`key: value = ${key}: ${value}`);
  const result = (key !== '' && value === meetup) ? undefined : value;
  // console.log('result =>');
  // console.log(result);
  return result;
}, 2));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

/**
 * ошибка:
 * { title: 'Совещание',
 * occupiedBy: [ { name: 'Иванов' }, { name: 'Петров' } ],
 * place: { number: 23, occupiedBy: [Circular] },
 * self: [Circular] }
 */
