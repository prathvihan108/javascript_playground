//strict and non-stric mode

//non stric mode

a=10; //no error for the undeclared variables
console.log(a);


//Stric mode
'use strict';
var x = 3.14; // This works fine in strict mode
undeclaredVariable = 10; // ReferenceError: undeclaredVariable is not defined


'use strict';
const obj = {};
Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false //writable:false make this object read only.
});

obj.readOnly = 100;  // TypeError: Cannot assign to read-only property 'readOnly'
