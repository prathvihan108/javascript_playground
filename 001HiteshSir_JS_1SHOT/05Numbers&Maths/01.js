//Since JavaScript wraps primitive numbers in Number objects when calling methods, these methods come from Number.prototype:
let num = 1234.56789;

// 1. toFixed(digits) - Rounds to a fixed number of decimal places (returns string)
console.log(num.toFixed(2)); // "1234.57"
console.log(num.toFixed(0)); // "1235" (Rounded)

// 2. toPrecision(digits) - Formats number with a specific total number of significant digits
console.log(num.toPrecision(5)); // "1234.6"
console.log(num.toPrecision(3)); // "1.23e+3" (Scientific notation when needed)

// 3. toLocaleString(locale, options) - Formats number according to locale
console.log(num.toLocaleString("en-US")); // "1,234.568"
console.log(num.toLocaleString("de-DE")); // "1.234,568" (German uses commas for decimals)

// Custom formatting with options
console.log(
	num.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // "$1,234.57"
console.log(num.toLocaleString("en-IN")); // "1,234.568" (Indian numbering format)
