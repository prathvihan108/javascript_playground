//Functional programming (FP) in JavaScript is a programming paradigm where you design and structure your code by composing and applying functions. It's a declarative style of programming that emphasizes immutability, pure functions, and higher-order functions. Here's a breakdown of key concepts in functional programming:

//Pure functions:
//Definition: Functions that return the same output for the same input and have no side effects (don’t modify external state).
//examples:

var sum = (x,y) => x+y+1;//pure 

function sum(x,y){//pure
    return x+y+z;
}

var res= sum(1,2);//arrow function will be called since its in the local scope so it shadows the named funntion.
console.log(res);