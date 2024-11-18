//Promise.any(promises)

// Takes an array of Promises and returns a single Promise.
// Resolves as soon as any one Promise is resolved(success).
// Rejects only if all Promises are rejected.


const promise1 = Promise.reject("Error 1");
const promise2 = new Promise(resolve => setTimeout(resolve, 200, "Success"));
const promise3 = Promise.reject("Error 2");

Promise.any([promise1, promise2, promise3])
  .then(value => console.log(value))  // Logs: "Success"
  .catch(error => console.log(error)); // Runs only if all are rejected
