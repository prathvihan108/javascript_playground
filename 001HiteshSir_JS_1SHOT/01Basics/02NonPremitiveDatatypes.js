//Non premitive datatypes in js are the reference types ,mean they are stored by reference not by value

//there is only one non premitive data type in js and that is the object.
//but it includes several specialised forms

// 1. Object - A collection of key-value pairs
let person = {
	name: "John",
	age: 30,
	isStudent: false,
};
console.log(person.name); // "John"

// 2. Array - An ordered list of values
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1 (Accessing first element)

// 3. Function - A block of reusable code
function greet() {
	return "Hello, World!";
}
console.log(greet()); // "Hello, World!"

// 4. Date - Used for handling dates and times
let today = new Date();
console.log(today.toDateString()); // "Sun Mar 16 2025" (Example output)

// 5. RegExp - Regular expressions for pattern matching
let pattern = /hello/i;
console.log(pattern.test("Hello World")); // true

// 6. Map - A key-value collection with any type as a key
let map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // "Alice"

// 7. Set - A collection of unique values
let set = new Set([1, 2, 3, 3, 4]);
console.log(set.size); // 4 (Duplicates are removed)
