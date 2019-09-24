'use strict';

// Коллекции: Массивы

const findPhoneByName = (name = '') => {
  const persons = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Pitter Smith', phone: '+380778888844' },
    { name: 'Pitter Jones', phone: '+380446813446' },
    { name: 'Alexander Fomin', phone: '+380889999955' }
  ];
  for (const person of persons) {
    if (name === person.name || person.name.includes(name))
      return person.phone;
  }
  return 'not found';
};

console.log(findPhoneByName('Pit'));
