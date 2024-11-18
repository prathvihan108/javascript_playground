//Promise.allSettled(promises)

// Takes an array of Promises and returns a single Promise.
// Resolves when all Promises are settled (either resolved or rejected).
// Never rejects.

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Error");
const promise3 = new Promise(resolve => setTimeout(resolve, 5000, 20));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));//after 5s
//no need of the catch

  //output
[
  { status: 'fulfilled', value: 10 }, //array of objects
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 20 }
]
