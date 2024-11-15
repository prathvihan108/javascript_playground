//Reference ,type ,and syntax errors

// Reference errors
// Occurs when you try to access a variable or function that doesn't exist or is not accessible in the current scope.
// When it happens:

//     Accessing a variable before it's declared (with let or const) due to the Temporal Dead Zone (TDZ).
//     Referencing a variable that hasn’t been defined.

console.log(x); // ReferenceError: x is not defined

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

//SyntaxError
// Occurs when the code doesn't follow the proper structure or rules of JavaScript.
// The engine cannot parse the code, and execution stops immediately.


//Type error
// Occurs when a value is used in a way that is incompatible with its data type.
// When it happens:

//     Calling a non-function as if it were a function.
//     Accessing a property on null or undefined.
//     Performing an operation on a value that doesn't support it (e.g., trying to modify a const).
const x = 10; //let and var will not give us the type error.
x = 20; // TypeError: Assignment to constant variable.






