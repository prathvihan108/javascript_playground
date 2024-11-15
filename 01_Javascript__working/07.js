//Understanding of the let and const,var

//let,const are the block scope
//var is of the global scope.

//we can not declare let and const  variables in the same scope(lexical scoping is ok)

//js will not even execute the code above it as the redeclaration of the same variable is identified during the memory allocation phase only.
// let a =10;
// let a =11; //syntax error.

var x =10;
var x= 11; //variable redeclaration is possible  in the var type.

//initilisation of the let and var can be done after the declaration of the varaible
//initilisation of the const should be done at the time of the const declaration.//else it will be syntax error.
let a;
a=10; //this is ok
console.log(a);

// const b;
// b=10;  //type error.
// console.log(b); //syntax error




