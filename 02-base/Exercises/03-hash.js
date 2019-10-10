'use strict';

const scalars = [true, 'hello', 5, 12, -200, false, false, 'word'];

const hash = {
  number: { val: 0 },
  string: { val: 0 },
  boolean: { val: 0 }
};

for (const scalar of scalars) {
  const type = typeof scalar;
  console.dir({ type });
  hash[type].val++;
}
//   if (type === 'number' || type === 'string' || type === 'boolean') {
//     hash[type].val++;
//   }
//   if (type === 'number') hash[type].val++;
//   if (type === 'string') hash['string'].val++;
//   if (type === 'boolean') hash['boolean']['val']++;
console.dir({ hash });
