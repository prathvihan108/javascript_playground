//String declaration
//stored in stack memory
let str1 = "Hello, World!"; //  Using single quotes
let str2 = "Hello, World!"; //  Using double quotes
let str3 = `Hello, World!`; //  Using backticks (Template literals)

console.log(str1, str2, str3);

//Note:we do not have the char type in js.

//avoid creating the string using the object,as its stored in the heap memory.
const str4 = new String("hello"); // Creates a String object
console.log(typeof str4); // "object"
