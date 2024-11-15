//Hoisting with let and const
//let and const are also hoisted but are not iattached with the global object ,they are in separate memory space.
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // undefined (hoisted with `var`)

let a = 10; //if u debug u will see that it is assigned as undefined but since its not in the globbal space so u will get the reference error
const b = 20;
var c = 30;

// Key Points about Hoisting for let and const:

//     Hoisting Definition:
//         Hoisting means that variable and function declarations are moved to the top of their containing scope during the compilation phase, allowing them to be accessed before their actual declaration in the code.

//     Behavior of let and const During Hoisting:
//         Both let and const are hoisted to the top of their scope, but they are not initialized.
//         Unlike var, which is initialized to undefined during hoisting, let and const remain uninitialized until their actual declaration is encountered in the code.

//     Temporal Dead Zone (TDZ):
//         The time between the start of the block scope and the line where the let or const is declared is called the Temporal Dead Zone.
//         In this zone, accessing the let or const variable will result in a ReferenceErr


let x = 20;
const y = 30;

console.log(global.x); // undefined //global is same as window(browser environment)
console.log(global.y); // undefined

// let and const Hoisting in the Global Space:

//     Variables declared with let and const are hoisted, but they do not become properties of the global object.
//     They are stored in a separate Declarative Environment Record in the global lexical environment.
//     This means they are accessible globally but not as properties of the window or global object.


