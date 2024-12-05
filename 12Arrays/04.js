//Finding and Searching
//indexOf(): Find the first occurrence of a value.
console.log(fruits.indexOf("banana")); // 1

//includes(): Check if an array contains a value.
console.log(fruits.includes("apple")); // true

//find(): Find the first element that satisfies a condition.
const numbers = [10, 20, 30];
const found = numbers.find(num => num > 15);
console.log(found); // 20

//findIndex():Find the first index of element that satisfies a condition.
const index = numbers.findIndex(num => num > 15);
console.log(index); // 1


