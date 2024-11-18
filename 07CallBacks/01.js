//what is call back:
// A callback is a function passed as an argument to another function, which can then be executed at a later time. This mechanism is commonly used in asynchronous programming to ensure that certain tasks are completed before executing the next step.

//problems using the call back: callback hell,inversion of control.
//1.Cal back hell.
//Characteristics of the Pyramid of Doom:

// Deep Nesting: Callbacks are nested inside other callbacks, leading to a visually "pyramidal" structure.
// Poor Readability: The code becomes harder to read and understand due to excessive indentation.
// Difficult Maintenance: Debugging and refactoring nested callbacks can be challenging.
//Call back hell;
//The Pyramid of Doom is a term used in programming to describe a situation where nested callbacks in asynchronous code lead to code that is deeply indented and difficult to read or maintain. This typically occurs in JavaScript when multiple asynchronous operations are chained using callbacks, and each subsequent operation depends on the previous one.

getData(function(result1) {
    processResult(result1, function(result2) {
      saveResult(result2, function(result3) {
        logResult(result3, function() {
          console.log('All operations completed.');
        });
      });
    });
  });

//to avoid the call back hell we use the promises and async and await.
  