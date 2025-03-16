//prototyple inheritance example.

console.log(myDog.bark()); // Found in Dog
console.log(myDog.makeSound()); // Not in Dog, so JS looks in Animal
console.log(myDog.toString()); // Not in Dog or Animal, so JS looks in Object.prototype
console.log(myDog.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true ✅ (End of the chain)
