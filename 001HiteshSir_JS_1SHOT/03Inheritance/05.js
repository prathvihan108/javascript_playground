// 1️ Every function (except arrow functions) gets a `prototype` property
// even the named function expression has the prototype property.
function Person() {}

console.log(Person.prototype); // {} (An empty object by default)

// 2️ The `prototype` property is used for inheritance
Person.prototype.greet = function () {
	return "Hello!";
};

let p1 = new Person();
console.log(p1.greet()); // "Hello!"
console.log(p1.__proto__ === Person.prototype); // true

// 3️ Arrow functions do NOT have `prototype`
const ArrowFunc = () => {};
console.log(ArrowFunc.prototype); // undefined  (Arrow functions do not have a prototype)

// 4️ When using `new`, the created object's `__proto__` links to the constructor's `prototype`
console.log(p1.__proto__); // Same as Person.prototype
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
