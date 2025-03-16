/**
 * 5. Class-Based Prototypal Inheritance (ES6 Syntax)
JavaScript’s class is just syntactic sugar over prototype-based inheritance.
 */

class Animal {
	constructor(name) {
		this.name = name;
	}
	makeSound() {
		return `${this.name} makes a sound`;
	}
}

class Dog extends Animal {
	bark() {
		return "Woof!";
	}
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound()); // "Buddy makes a sound"  (Inherited)
console.log(myDog.bark()); // "Woof!"  (Defined in Dog)
console.log(myDog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true

//📌 The extends keyword automatically sets up Dog.prototype.__proto__ = Animal.prototype.
