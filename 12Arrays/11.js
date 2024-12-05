//6. Searching and Testing
const numbers = [1, 2, 3];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true


//every(): Check if all elements satisfy a condition.
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

