// Implicit Type Conversion (Type Coercion)

// 1. String Conversion (Concatenation)
console.log("5" + 2); // "52" (Number 2 is converted to string)
console.log(2 + "5"); // "25" (Same reason)
console.log("5" + 2 + 3); // "523" (String first, so all numbers convert)
console.log(2 + 3 + "5"); // "55" (Numbers first, then string conversion)

// 2. Number Conversion in Arithmetic Operations
console.log("5" - 2); // 3  ("5" is converted to number)
console.log("5" * 2); // 10 ("5" is converted to number)
console.log("10" / "2"); // 5 (Both converted to numbers)
console.log("abc" - 2); // NaN (Not a Number, "abc" can't be converted)

// 3. Boolean Conversion (Falsy and Truthy values)
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean(null)); // false

// Explicit Type Conversion (Type Casting)

// 4. Convert to String
let num = 10;
console.log(String(num)); // "10"
console.log((10).toString()); // "10"

// 5. Convert to Number
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN  type of will say it as the Number but the value will be NaN.
console.log(parseInt("42.99")); // 42 (Removes decimal part)
console.log(parseFloat("42.99")); // 42.99 (Keeps decimal part)
console.log(+"100"); // 100 (Unary `+` also converts to number)

// 6. Convert to Boolean
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true (non-empty string)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
