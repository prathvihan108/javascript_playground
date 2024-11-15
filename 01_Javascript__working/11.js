//Types of the scopes
// In JavaScript, there are several types of scopes that determine the accessibility and visibility 
// of variables. Scoping is a critical concept 
// because it defines where a variable is available for use and how long it lasts.

// Global Scope

//     Variables declared outside of any function or block are in the global scope.
//     These variables can be accessed from anywhere in the code, across functions and blocks.
//     In browsers, global variables are attached to the window object.

// var globalVar = "I am global";

// function showGlobal() {
//   console.log(globalVar); // Accessible here
// }

// showGlobal();
// console.log(globalVar); // Accessible here too




// Function Scope

//     Function scope means that a variable is accessible only within the function in which it is declared.
//     This type of scope applies to variables declared with var within a function.
//     Variables declared with let or const inside a function have block scope (explained below).



function test() {
    var x = 10; // x is function-scoped
    console.log(x); // Accessible here
    {
        let a = 100; ///let and const  are the block scoped so they are not avalable in the parent scope(i.e function scope )
    }
    console.log(a); // ReferenceError: a is not defined
  }

  test();
  
  console.log(x); // ReferenceError: x is not defined

//   . Block Scope

//     Block scope is created by code blocks such as if, for, while, and {}.
//     Variables declared with let or const inside a block are scoped to that block, not the function.
//     Block-scoped variables are not accessible outside the block in which they are declared.

{
    let a = 5;
    const b = 10;
    console.log(a); // Accessible here
    console.log(b); // Accessible here
  }
  
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined

//   Lexical Scope (Static Scope)

//   Lexical scope refers to the scope that is determined by the physical location of the variable declarations in the source code.
//   Variables are scoped based on where they are declared in the source code (during compile-time), not based on how the code is executed (runtime).
//   This means that nested functions can access variables from their outer function scope.

function outer() {
    let outerVar = "I am from outer";
  
    function inner() {
      console.log(outerVar); // Lexical scoping: inner function can access outer function's variable
    }
  
    inner();
  }
  
  outer(); // Outputs: "I am from outer"

  //Scoping almost works similar to the arrow functions too.
  
  
  