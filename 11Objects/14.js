//7. Object Methods

//Merging Objects:
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }


// Using Spread Operator:
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };//obj1 is not changed,new object is created
console.log(merged);// { a: 1, b: 2 }


//Freezing an Object (Object.freeze()):
// Makes an object immutable (prevents adding, modifying, or deleting properties).
const obj = Object.freeze({ key: "value" });
obj.key = "newValue"; // Fails silently or throws error in strict mode

//Sealing an Object (Object.seal()):
// Prevents adding or removing properties but allows modification of existing ones.
const obj = Object.seal({ key: "value" });
obj.key = "newValue"; // Works
obj.newKey = "anotherValue"; // Fails silently


//8. Prototypes and Inheritance

// Accessing Prototype:
console.log(Object.getPrototypeOf(obj));

//Setting Prototype:
Object.setPrototypeOf(obj, proto);

//10. Conversion
// Object to Array:
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

//Object to JSON:
const jsonString = JSON.stringify(obj);

// JSON to Object:
const obj = JSON.parse(jsonString);

//11. Comparing Objects
// Direct Comparison: Objects are compared by reference, not by value.
const obj4 = { a: 1 };
const obj5 = { a: 1 };
console.log(obj4 === obj5); // false




