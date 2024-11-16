//call back functions;
//every thing in the js is executed in the call stack of the js (main theread.)
//A callback in JavaScript is a function passed as an argument to another function, which can then be invoked (or "called back") at a later time. Callbacks are commonly used for asynchronous operations, such as:

// Fetching data from a server.
// Reading files.
// Timers (like setTimeout or setInterval).

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function processUserInput(callback) {
    const name = "John";
    callback(name); // Call the passed function
  }
  
  processUserInput(greet); // Output: Hello, John! or we can directly pass the function itself as the defination.
  
//Example of the asynchronous call back
console.log("Start");

setTimeout(() => {
  console.log("This is the callback!");
}, 2000); // Executes after 2 seconds

console.log("End");
