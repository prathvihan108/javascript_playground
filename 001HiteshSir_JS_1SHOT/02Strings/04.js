let strObj = new String("Hello");
let upper = strObj.toUpperCase();

console.log(strObj); // [String: "Hello"] (Remains an object)
console.log(upper); // "HELLO" (New primitive string)
console.log(typeof strObj); // "object"
console.log(typeof upper); // "string"
