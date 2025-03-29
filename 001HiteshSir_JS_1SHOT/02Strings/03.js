let str1 = "Hello"; // String literal (primitive)
let str2 = new String("Hello"); // String object (not recommended)

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

console.log(str1 === "Hello"); // true (primitive comparison)
console.log(str2 === "Hello"); // false (object vs primitive)
console.log(str2 == "Hello"); // true (type coercion)

console.log(str2.valueOf()); // "Hello" (Extracts primitive value from object)
