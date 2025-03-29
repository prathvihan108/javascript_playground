// String Basics: Strings are immutable in JavaScript
//even the value of the sting object's value is immutable.Only reference can be changed.
let str1 = "Hello"; // String literal
let str2 = new String("Hello"); // String object (not recommended)

// Checking types
console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

// Common String Methods

// 1. length - Returns the length of a string
console.log("Hello".length); // 5

// 2. charAt(index) - Returns character at a specific index
console.log("Hello".charAt(1)); // "e"

// 3. toUpperCase() / toLowerCase() - Changes case
console.log("hello".toUpperCase()); // "HELLO"
console.log("HELLO".toLowerCase()); // "hello"

// 4. trim() - Removes whitespace from both ends
console.log("  hello  ".trim()); // "hello"

// 5. slice(start, end) - Extracts a section of a string
console.log("JavaScript".slice(0, 4)); // "Java"

// 6. substring(start, end) - Similar to slice but doesn’t accept negative indexes
console.log("JavaScript".substring(4, 10)); // "Script"

// 7. replace(search, replacement) - Replaces a substring
console.log("Hello World".replace("World", "JS")); // "Hello JS"

// 8. split(separator) - Splits a string into an array
console.log("apple,banana,grape".split(",")); // ["apple", "banana", "grape"]

// 9. includes(substring) - Checks if a substring exists
console.log("Hello World".includes("World")); // true

// 10. startsWith() / endsWith() - Checks if a string starts or ends with a given value
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true

// 11. indexOf(substring) - Returns the index of the first occurrence
console.log("Hello World".indexOf("o")); // 4

// 12. repeat(n) - Repeats the string n times
console.log("Hi ".repeat(3)); // "Hi Hi Hi "

// 13. concat() - Concatenates strings (Use `+` instead)
console.log("Hello".concat(" ", "World")); // "Hello World"

// 14. padStart() / padEnd() - Pads a string to a certain length
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"
