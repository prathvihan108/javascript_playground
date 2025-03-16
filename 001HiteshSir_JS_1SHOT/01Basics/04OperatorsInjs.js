//js provides various operators for  performing opration on various variables and values

//Arithematic operators
let a = 10,
	b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1  (Modulus - Remainder)
console.log(a ** b); // 1000 (Exponentiation - 10^3)

//Assignment operators
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 4; // x = x * 4 → 24
x /= 2; // x = x / 2 → 12
x %= 5; // x = x % 5 → 2
x **= 2; // x = x ** 2 → 4
console.log(x);

//Comparison Operators

console.log(5 == "5"); // true  (Only checks value)
console.log(5 === "5"); // false (Strict equality - checks value & type)
console.log(5 != "5"); // false (Not equal)
console.log(5 !== "5"); // true  (Strict not equal)
console.log(5 > 3); // true  (Greater than)
console.log(5 < 3); // false (Less than)
console.log(5 >= 5); // true  (Greater than or equal)
console.log(5 <= 3); // false (Less than or equal)

//Logical Operators

console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true  (OR - at least one must be true)
console.log(!true); // false (NOT - negates value)

//Bit wise operators

console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true  (OR - at least one must be true)
console.log(!true); // false (NOT - negates value)

//Bit wise operators

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

//Type of operators

console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof null); // "object" (Known JavaScript bug)
console.log(typeof undefined); // "undefined"
console.log(typeof function () {}); // "function"

//Spread and Rest Operator

//Spread (...): Expands an array or object.
//Rest (...): Collects multiple values into an array.

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

function sum(...nums) {
	return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10

//optional chaining

//Prevents errors when accessing deeply nested properties.
let userObj = { profile: { name: "Alice" } };
console.log(userObj?.profile?.name); // "Alice"
console.log(userObj?.address?.city); // undefined (No error)

//increament and decreament operators

//1. Post-Increment (i++) and Post-Decrement (i--)
let a1 = 5;
console.log(a1++); // 5 (Returns original, then increments)
console.log(a1); // 6 (Now updated)

let b1 = 10;
console.log(b1--); // 10 (Returns original, then decrements)
console.log(b1); // 9 (Now updated)

//. Pre-Increment (++i) and Pre-Decrement (--i)

let x1 = 5;
console.log(++x1); // 6 (Increments first, then returns)
console.log(x1); // 6 (Already updated)

let y1 = 10;
console.log(--y1); // 9 (Decrements first, then returns)
console.log(y1); // 9 (Already updated)
