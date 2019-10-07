'use strict';

const multipluer = (base, n) => n / base;

const createMultipluer = base => n => multipluer(base, n);

{
  const n2 = createMultipluer(2);
  // const n3 = createMultipluer(3);

  console.log('2/2 = ' + n2(2));
  console.log('4/2 = ' + n2(4));
  console.log('1/2 = ' + n2(1));
}
