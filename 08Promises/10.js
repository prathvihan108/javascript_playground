//Promise.race(promises)

// Takes an array of Promises and returns a single Promise.
// Resolves or rejects as soon as the first Promise settles.

const promise1 = new Promise(resolve => setTimeout(resolve, 100, "First"));
const promise2 = new Promise(resolve => setTimeout(resolve, 200, "Second"));

Promise.race([promise1, promise2])
  .then(value => console.log(value))  // Logs: "First"
  .catch(error => console.log(error));


  //. Promise.prototype.catch(onRejected)

//   Attaches a callback for handling rejections.
//   Returns a new Promise.

Promise.reject("Something went wrong")
  .catch(error => console.log(error));  // Logs: Something went wrong

//. Promise.prototype.finally(onFinally)

// Attaches a callback that is executed after the Promise is settled, regardless of whether it was fulfilled or rejected.
// Does not modify the result of the Promise.

Promise.resolve("Success")
  .finally(() => console.log("Cleaning up"))
  .then(value => console.log(value));

Promise.reject("Error")
  .finally(() => console.log("Cleaning up"))
  .catch(error => console.log(error));


  