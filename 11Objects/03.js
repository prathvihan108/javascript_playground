//IEFE
// An Immediately Invoked Function Expression (IIFE) is a function expression that is executed immediately after being defined. It is a common JavaScript pattern used to create a function scope and avoid polluting the global namespace. This pattern is often used for encapsulation, ensuring that variables and functions inside the IIFE are not accessible from the outside.

// Basic Syntax of an IIFE

// An IIFE is written using a function expression wrapped in parentheses, followed by another set of parentheses to invoke it immediately:

(function () {
    // Code inside the IIFE
    console.log("This is an IIFE!");
})();

//example 2
(function () {
    var name = "John";
    console.log("Hello, " + name); // Output: Hello, John
})();
// The variable 'name' is not accessible outside the IIFE

//example 3:
// IIFE with Parameters

// You can also pass arguments to the IIFE by providing values inside the second set of parentheses.

(function (greeting, name) {
    console.log(greeting + ", " + name); // Output: Hello, Alice
})("Hello", "Alice");


//example 3:
// IIFE with Return Value

// An IIFE can return a value, which can be assigned to a variable.

const result = (function () {
    return 2 + 2;
})();
console.log(result); // Output: 4

