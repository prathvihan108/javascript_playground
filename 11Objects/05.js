//Prototype Chain

// The prototype chain is a mechanism through which JavaScript objects can inherit properties and methods from other objects. When an object doesn't have a property, JavaScript looks for that property in its prototype, and if it's not there, it continues searching up the prototype chain.

// For example:

//     Every object in JavaScript inherits from Object.prototype.
//     Arrays inherit from Array.prototype.
//     Functions inherit from Function.prototype


const arr = [1, 2, 3];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
