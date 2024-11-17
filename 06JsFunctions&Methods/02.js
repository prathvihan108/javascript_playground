//2. filter():

// The filter() method creates a new array with all elements that pass a test provided by a function. It allows you to filter out elements that don't satisfy a condition.

//When you want to filter out items from an array based on a condition.
// It returns a new array with only the elements that match the condition.

const arr = [1,2,3,4,5,6];
const  res = arr.filter(x=>x>2);//the callback function inside the filter must return either true or false;
console.log(res);

//exaple 2:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//exaple 3: using the regular function
function oddNumbers(num){
    return !(num%2===0);//must return 
}


const numbers1 = [1, 2, 3, 4, 5];
const oddNums = numbers1.filter(oddNumbers);//u just pass the function ,u can not call the function like this "oddNumbers()" when u are passing the functionn as an argument to another function.
console.log(oddNums); // [1,3,5]

