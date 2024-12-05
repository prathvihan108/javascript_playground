//Transforming Arrays

// map(): Create a new array by applying a function to each element.
const numbers2 = [1, 2, 3];
const squares = numbers2.map(num => num * num);
console.log(squares); // [1, 4, 9]

// filter(): Create a new array with elements that satisfy a condition.
const numbers3 = [1, 2, 3, 4];
const even = numbers3.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


//reduce(): Reduce the array to a single value by applying a function.
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6



