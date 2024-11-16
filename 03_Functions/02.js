//Named function expressions;

//A named function expression is a type of function expression where the function has a name. This name is local to the function's scope and can be used for recursion or debugging purposes. Unlike a function declaration, the name of the function is not accessible outside of the function's scope.

var a = function xyz(){
    console.log("hello");
}

a();//ok
xyz();//reference error

// Key Points:

//     The name is local to the function and cannot be accessed from outside the function.
//     The name is useful for recursion (calling the function within itself) or for identifying the function in stack traces during debugging.