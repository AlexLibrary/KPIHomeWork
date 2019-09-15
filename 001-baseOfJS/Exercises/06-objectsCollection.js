'use strict';

// Коллекции: хеш-таблицы

const findPhoneByName = (name = '') => {
  const persons = {
    Aurelius: { name: 'Marcus Aurelius', phone: '+380445554433' },
    Smith: { name: 'Pitter Smith', phone: '+380778888844' },
    Jones: { name: 'Pitter Jones', phone: '+380446813446' },
    Fomin: { name: 'Alexander Fomin', phone: '+380889999955' }
  };
  for (const key in persons) {
    const person = persons[key];
    if (name === person.name || person.name.includes(name))
      return person.phone;
  }
  return 'not found';
};

console.log(findPhoneByName('Pit'));
