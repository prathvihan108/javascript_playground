//Composite functions.
//Function Composition

// Definition: Combining multiple functions to produce a new function or result.

// var add = (x,y) => {x+y};// if we use the curly braces then return statement must be used.//will not work.
var add = (x,y) => { return x+y};
var multiply = x => {return x*10};
var substract =(x,y) =>{return x-y};
var divide =x =>{return x/10};

var compose = (f,g) => (x,y)=>f(g(x,y))//takes f,g and returns another arrow function 

var cal = compose(multiply,add)
var res=cal(3,4);
console.log(res);

//bnefits of Functional Programming

// Easier to reason about: Pure functions and immutability make the code predictable.
// Reusability: Smaller, modular functions can be reused.
// Ease of testing: Pure functions don’t depend on external state, simplifying tests.
// Concurrency: Immutability helps avoid issues with shared state in multi-threaded environments.