//promises in js are used to handle the asynck operations in js


// const cart = ['item1','item2','item3'];
// createOrder(cart);//api
// proceedToPayment(id);//api

//how we used to do it using the call back.
const cart = ['item1','item2','item3'];
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(status){
        updateStatus(status);
    });

});//function call to createOrder//creatoder will call the call back function after creating the order.
//the above thing  lead to inversion of control and als call back hell.
//and also the  api can call out function n number of times so its hell.