// 1. Number - Represents integers and floating-point numbers
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
console.log(typeof num1); // "number"

// 2. String - Sequence of characters enclosed in quotes
let str1 = "Hello";
let str2 = "World";
let str3 = `JS ${str1}`; // Template literal with interpolation
console.log(typeof str1); // "string"

// 3. Boolean - Represents true or false values
let isCodingFun = true;
let isBoring = false;
console.log(typeof isCodingFun); // "boolean"

// 4. Undefined - A variable declared but not assigned a value
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// 5. Null - Represents an intentional absence of value
let emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // "object" (a known JS bug)

// 6. Symbol - Unique identifiers (ES6)
let sym1 = Symbol("id");
let sym2 = Symbol("id"); // Even with the same description, they are unique
console.log(sym1 === sym2); // false
console.log(typeof sym1); // "symbol"

// 7. BigInt - Large integers beyond Number limit (ES11)
let bigNum = 123456789012345678901234567890n;
console.log(typeof bigNum); // "bigint"
