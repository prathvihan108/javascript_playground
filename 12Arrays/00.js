const fruits1 = ["apple", "banana", "cherry"];
const f1=fruits1.splice(1, 2); // splice the banana and cherry from the original
console.log(fruits1); // ["apple"]
console.log(f1);//[ 'banana', 'cherry' ](spliced)