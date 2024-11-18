
//Read 02.md
const cart=[];
const promise = createOrder(cart);//now the createOrder api will return the promise 
promise.then(function(orderId){
    proceedToPayment(orderId);
}).then(function(status){
    updateStatus(status);
})

//example 2
fetchData() //fetch data returns the promise.
  .then(processData)
  .then(displayData)
  .catch(handleError);

