//3. Common Array Methods

// Adding and Removing Elements

//     push(): Add element(s) to the end of the array.
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]

//pop(): Remove the last element.
fruits.pop();
console.log(fruits); // ["apple", "banana"]

//unshift(): Add element(s) to the beginning.
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana"]

//shift(): Remove the first element.
fruits.shift();
console.log(fruits); // ["apple", "banana"]

//Splicing and Slicing
// splice(): Add, remove, or replace elements at a specific index.(thus modifies original)

// Add the new element
let arr = [1, 2, 3, 5];
let index = 3; // Position where the new element will be added
let newElement = 4;
arr.splice(index, 0, newElement);
console.log(arr); // Output: [1, 2, 3, 4, 5]


//remove
const fruits1 = ["apple", "banana", "cherry"];
const spliced=fruits1.splice(1, 2); // splice the banana and cherry from the original
console.log(fruits1); // ["apple"]
console.log(spliced);//[ 'banana', 'cherry' ](spliced)

//replace
const fruits2 = ["apple", "banana", "cherry"];
fruits2.splice(1, 1, "mango"); // Replace "banana" with "mango"
console.log(fruits2); // ["apple", "mango", "cherry"]

//slice(): Extract a portion of the array into a new array.(does't modfify the original)
const fruits3 = ["apple", "banana", "cherry"];
const sliced = fruits3.slice(0, 2);
console.log(sliced); // ["apple", "banana"]



