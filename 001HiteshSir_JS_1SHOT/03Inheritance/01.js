/*
1. What is Prototypal Inheritance?
Prototypal inheritance is JavaScript’s way of enabling objects to inherit properties and methods from other objects via the prototype chain.
Instead of classes (like in Java or Python), JavaScript uses prototypes to share properties and methods.

2. How It Works – Step by Step
Every JavaScript object has an internal link (__proto__) to another object, called its prototype.
If a property or method is not found in the object itself, JavaScript looks up the prototype chain until it finds it or reaches null.
The prototype of an object is determined by its constructor function or Object.create().
*/

// Parent object (prototype)
const animal = {
	makeSound: function () {
		return "Some generic sound";
	},
};

// Child object inheriting from 'animal'
const dog = Object.create(animal); // dog.__proto__ = animal
dog.bark = function () {
	return "Woof!";
};

console.log(dog.makeSound()); // "Some generic sound"  (Inherited from animal)
console.log(dog.bark()); // "Woof!"  (Defined in dog)
console.log(dog.__proto__ === animal); // true
