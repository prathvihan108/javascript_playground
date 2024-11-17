// The map, filter, and reduce methods in JavaScript are commonly used for working with arrays. They are built-in higher-order functions that provide a more functional approach to manipulate and transform data in arrays. They are often preferred over traditional loops because they lead to more concise, readable, and declarative code.

// 1. map():

// The map() method is used to transform each element in an array. It creates a new array by applying a function to each element of the original array without modifying the original array.

//1. callback (Required):

// A function that will be executed on each element of the array. This function has up to three arguments of its own:
// Callback function Arguments:

//     currentValue: The current element being processed in the array.
//     index (Optional): The index of the current element being processed.
//     array (Optional): The array on which map() was called.

const doubleFunction = (x)=>x*2;
const binaryFunction = (x)=>x.toString(2); //converts to binary.
const squareFunction = (x)=>x**2;

const arr = [1,2,3,4];
var double = arr.map(doubleFunction);
var binary = arr.map(binaryFunction);
var square = arr.map(squareFunction);

console.log(double);
console.log(binary);
console.log(square);

//the below is also a valid syntax;
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

