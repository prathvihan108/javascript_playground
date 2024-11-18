//Promise apis calls;
//Parallel api calls;

//. Promise.all(promises)

// Takes an array of Promises and returns a single Promise.
// Resolves when all Promises are resolved.
// Rejects immediately if any one Promise is rejected.
//The all other promises are not cancelled ,since we can not cancel the promise as of now ,even if they get resolved also there  will be no effect on the result.

//setTimeout(callback, delay, [args])

const promise1 = Promise.resolve(10);
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 20));//20 is the argument to the resolve
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))  // Logs: [10, 20, 30] after 2s
  .catch(error => console.log(error));
