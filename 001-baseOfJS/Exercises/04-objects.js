'use strict';

// Объекты

const object1 = { name: 'Marcus' };
let object2 = { name: 'Pitter' };

object1.name = 'm';
object2.name = 'p';

console.dir({ object1, object2 });
// { object1: { name: 'm' }, object2: { name: 'p' } }

// object1 = { city: 'Rome' }; // нельзя изменять константу
object2 = { city: 'US' };

console.dir({ object1, object2 });
// { object1: { name: 'm' }, object2: { city: 'US' } }
const createUser = (nameStr, cityStr) => ({ name: nameStr, city: cityStr });

console.dir(createUser('Marcus Aurelius', 'Roma'));
// { name: 'Marcus Aurelius', city: 'Roma' }
