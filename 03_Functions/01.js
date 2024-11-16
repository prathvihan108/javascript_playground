//fucntion statement; or fucntion declaration;
//fucntion expression;
//anonymous functions;
//Fisrt class fucntions

//1 A function statement (also known as a function declaration) defines a named function in JavaScript.
//  This function is hoisted, meaning it is 
// available for use throughout the entire scope, even before the function is defined in the code.

// Hoisting: This function declaration is hoisted to the top of its scope, so you can call the function before it is defined in the code.

function functionName() {
    console.log("This is a function statement.");
}


//2  A function expression defines a function as part of an expression. Function expressions are not hoisted like function declarations, so they must be defined before they are called.

//     Function expressions can be named or anonymous.
//     They are typically assigned to a variable.
//they can be arrow functions too.

var myFunction = function() {
    console.log("This is a function expression.");
};


// 3. Anonymous Functions

// An anonymous function is a function that does not have a name. It is typically used when you need to define a function temporarily or as an argument to another function, such as in callbacks or higher-order functions.
// Anonymous functions are commonly used in JavaScript as arguments for event handlers, timeouts, or callbacks.
//Anonymous functions are used in a place where the functions are used as values.
//Anonymous function don't have there own identity.
//fucntion statement can not have a anonymous functions.
var anonymousFunc = function() {
    console.log("I am an anonymous function!");
};



// 4 First-Class Functions

// In JavaScript, functions are first-class objects. This means that functions can be:

//     Assigned to variables.
//     Passed as arguments to other functions.
//     Returned from other functions.
//     Stored in data structures (arrays, objects, etc.).

//assigning to variables.
var greet = function() {
    console.log("Hello, world!");
};
greet();  // Output: "Hello, world!"

//passing to other fucntions

function sayHello() {
    console.log("Hello!");
}

function executeFunction(fn) {
    fn();  // fn is treated as a first-class function
}

executeFunction(sayHello);  // Output: "Hello!"

//Returning from the other functions

function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

var multiplyBy2 = multiplier(2);
console.log(multiplyBy2(3));  // Output: 6


