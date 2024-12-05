//shallow copy and deep copy of the objects

// . Shallow Clone

// A shallow clone copies only the first level of properties. If the object has nested objects or arrays, the references to those are copied, not the actual values. Changes to the nested objects will affect both the original and the cloned object.

// Examples of Shallow Cloning

// 1. Using the Spread Operator (...):
const original = { name: "Alice", address: { city: "Wonderland" } };
const shallowClone = { ...original };

shallowClone.name = "Bob";
shallowClone.address.city = "Gotham";

console.log(original.name); // "Alice" (unchanged)
console.log(original.address.city); // "Gotham" (changed due to reference sharing)


// 2. Using Object.assign():

const original1 = { name: "Alice", address: { city: "Wonderland" } };
const shallowClone = Object.assign({}, original1);

shallowClone.address.city = "Gotham";
console.log(original1.address.city); // "Gotham" (reference shared)

// 2. Deep Clone

// A deep clone creates a new object that is entirely independent of the original. All levels of nested objects and arrays are recursively copied, so changes to the clone won't affect the original and vice versa

// Examples of Deep Cloning

// 1. Using JSON.parse(JSON.stringify()):

//     This method works for simple objects but has limitations (e.g., it won't clone functions, symbols, or circular references).


const original3 = { name: "Alice", address: { city: "Wonderland" } };
const deepClone = JSON.parse(JSON.stringify(original3));

deepClone.address.city = "Gotham";
console.log(original3.address.city); // "Wonderland" (unchanged)
