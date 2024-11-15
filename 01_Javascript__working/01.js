console.log(a); //Not error// undefined (undifined is a special key word assigned to the var types during the memory allocation phase)
console.log(b); // ReferenceError // undefined will be assigned to the let and const also but on execution phase(if they are not initilised).
console.log(c); // ReferenceError

var a = 10;//undefined will be asigned to it in the memory allocatio phase 
let b = 20;//let and the const types will not be assigned any think and will be in TDZ until the code excution reaches the initialisation of these
const c = 30;

function greet() {
  console.log("Hello!");
}


//undfined vs not defined
//not defined: is when the variavle is not in the memory (no declared in the program) and then we try to access it.
//let a; without initialization, a is simply declared and holds an undefined value(after the execution phase) until you assign it a new value.

let a; 
console.log(a); // undefined //same for const

//console.log(x); // x is not defined


