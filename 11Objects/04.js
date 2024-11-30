//Prototype inheritance in js
//Inheritance in js is different than most other languages.

// In JavaScript, prototypes are a fundamental part of the language's inheritance system. Every JavaScript object, including arrays, functions, and classes, has a hidden internal property called [[Prototype]] (often accessed via the __proto__ property) that points to another object. This forms a prototype chain. Let's dive into what that means and how it applies to arrays, functions, and classes.

// What is a Prototype?

// A prototype is essentially an object that provides methods and properties to other objects. Every JavaScript object has a prototype, and the prototype itself can have a prototype, forming a chain of objects known as the prototype chain.

// When you attempt to access a property or method on an object, JavaScript looks for it in the object itself. If it can't find it, it looks in the prototype, and then in the prototype's prototype, and so on, until it reaches the end of the chain.

const person = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

// person has a prototype object, which is the Object prototype
console.log(person.__proto__); // Logs the prototype of the 'person' object
