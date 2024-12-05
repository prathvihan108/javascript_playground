//Sorting
// Sorting

//     sort(): Sort elements alphabetically or by a custom comparator.

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

const numbers = [10, 5, 20];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // [5, 10, 20]

//reverse(): Reverse the order of elements.
fruits.reverse();
console.log(fruits); // ["cherry", "banana", "apple"]

//Joining and Splitting

// join(): Combine all elements into a string.
const fruits1 = ["apple", "banana", "cherry"];
const result = fruits1.join(", ");
console.log(result); // "apple, banana, cherry"

//concat(): Merge two or more arrays.
const numbers1 = [1, 2];
const numbers2 = [3, 4];
const merged = numbers1.concat(numbers2);
console.log(merged); // [1, 2, 3, 4]



