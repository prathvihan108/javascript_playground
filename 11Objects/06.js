//Prototype of Arrays, Functions, and Classes

// 1.Arrays
// Arrays are objects in JavaScript, and they have their own prototype: Array.prototype.

//     Array.prototype includes methods like .push(), .pop(), .map(), etc.
//     When you call a method on an array, JavaScript looks for that method in Array.prototype.

const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

//arr → Array.prototype → Object.prototype → null

//2. Functions
// Every function in JavaScript is an object and has a prototype object called Function.prototype. This is different from a regular object's prototype because it allows functions to have methods like .call(), .apply(), and .bind().

function greet() {
    console.log('Hello');
}

console.log(greet.__proto__ === Function.prototype); // true
greet.call(); // Uses the 'call' method from Function.prototype
//greet → Function.prototype → Object.prototype → null


//3.Classes
// JavaScript classes are syntactic sugar over constructor functions.
// When you define a class, it is essentially a function, and its prototype is Class.prototype, which is based on Function.prototype.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const person = new Person('Alice');
console.log(person.__proto__ === Person.prototype); // true

//person → Person.prototype → Object.prototype → null


