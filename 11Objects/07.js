// The Prototype Chain for Objects

// Every object in JavaScript is linked to Object.prototype at the end of its prototype chain, except for null, which has no prototype.

// Modifying Prototypes

// You can add methods or properties to the prototype of an object, a class, or a function.
// Example: Adding a method to Array prototype
Array.prototype.first = function () {
    return this[0];
};

const arr = [1, 2, 3];
console.log(arr.first()); // Output: 1


// Example: Adding a method to Object prototype
Object.prototype.sayHello = function () {
    console.log(`Hello, I am a ${this.constructor.name}`);
};

const obj = {};
obj.sayHello(); // Output: Hello, I am a Object


// Important Concepts Related to Prototypes

//     Prototype Inheritance: Objects inherit properties and methods from their prototypes.
//     __proto__: The __proto__ property points to an object's prototype.
//     Constructor Functions: The prototype chain is linked through constructor functions, where the constructor property points to the function that created the instance.

