//Closure behaves in the similar way with let and const too.
function outerFunction() {
    let a = 10;  // Block-scoped
    const b = 20; // Block-scoped

    return function innerFunction() {
        console.log(a); // Closure captures `a`
        console.log(b); // Closure captures `b`
    };
}

const closure = outerFunction();
closure(); 
// Output:
// 10
// 20
//forming the closure with the let and const also allows the access of the let and const outside their scope as we are returning the fucntion
