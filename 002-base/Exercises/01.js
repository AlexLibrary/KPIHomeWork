/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
'use strict';

console.dir({ hoisted }); // { hoisted: undefined }
hoisted = 5; // Assign 5 to hoisted
console.dir({ hoisted }); // { hoisted: 5 }
var hoisted; // Declare hoisted
