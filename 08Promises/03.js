

// new Promise Constructor:
// The Promise constructor is responsible for immediately invoking the executor function that you pass as an argument.
// It also defines the functions resolve and reject internally and passes them to the executor function as arguments.

// resolve and reject in the Executor Function:
// These are provided by the JavaScript engine and are used to transition the promise's state.
//     resolve(value) — Marks the promise as fulfilled and passes the value.
//     reject(reason) — Marks the promise as rejected and passes the reason.

//promise constructor takes only single argument that is the executor function.
const promise = new Promise((resolve,reject)=>{

    setTimeout(function(){

        resolve("success");//call the resolve function.
    },3000);
    reject("failed"); //primise will be always rejected we the state of the promise can not be modified once setteled.
});

promise.then(function(resolve){
    console.log(resolve);
})
.catch(function(reject){
    console.log(reject);
});

//

//Example of how the js engine might handle this
// function Promise(executor) {
//     let state = 'pending'; // Internal state
//     let value; // Fulfillment or rejection value
  
//     function resolve(result) {
//       if (state === 'pending') {
//         state = 'fulfilled';
//         value = result;
//         // Trigger .then() callbacks
//       }
//     }
  
//     function reject(error) {
//       if (state === 'pending') {
//         state = 'rejected';
//         value = error;
//         // Trigger .catch() callbacks
//       }
//     }
  
//     executor(resolve, reject); // Executor is called immediately
//   }
  
