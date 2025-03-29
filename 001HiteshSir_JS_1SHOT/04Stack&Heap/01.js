// Stack Memory (Used for primitive values and function calls)
function stackExample() {
	let x = 10; // 'x' is stored in the stack
	let y = x; // 'y' gets a copy of 'x', changes to 'y' won't affect 'x'
	y = 20; // 'y' changes, but 'x' remains 10
}
stackExample();

// Heap Memory (Used for objects and reference types)
function heapExample() {
	let obj1 = { name: "Alice" }; // 'obj1' stores a reference to the object in the heap
	let obj2 = obj1; // 'obj2' gets the same reference, not a copy of the object
	obj2.name = "Bob"; // Changing 'obj2' also affects 'obj1' since both reference the same object
}
heapExample();
