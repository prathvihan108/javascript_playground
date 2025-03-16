// Stack Memory (Used for Primitive Data Types & Function Execution)
function stackExample() {
	let a = 10; // Stored in Stack (Primitive)
	let b = a; // Copy of 'a' is created (Stack holds separate values)
	b = 20;
	console.log(a, b); // 10, 20 (a remains unchanged)
}
stackExample();

// Heap Memory (Used for Objects, Arrays, and Functions)
function heapExample() {
	let obj1 = { name: "Alice" }; // Stored in Heap, reference in Stack
	let obj2 = obj1; // obj2 holds a reference to the same Heap memory
	obj2.name = "Bob";
	console.log(obj1.name, obj2.name); // Bob, Bob (Both reference same object)
}
heapExample();

// Key Difference: Stack copies values, Heap stores references.
