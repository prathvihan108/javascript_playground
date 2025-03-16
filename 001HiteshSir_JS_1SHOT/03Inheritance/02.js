/*
4. Constructor Function Inheritance
Instead of Object.create(), we can use constructor functions to create reusable objects.


 */
// Constructor function (Parent)
function Animal(name) {
	this.name = name;
}

// Adding method to Animal's prototype (shared by all instances)
Animal.prototype.makeSound = function () {
	return `${this.name} makes a sound`;
};

// Creating an instance
const cat = new Animal("Kitty");
console.log(cat.makeSound()); // "Kitty makes a sound"
console.log(cat.__proto__ === Animal.prototype); // true
