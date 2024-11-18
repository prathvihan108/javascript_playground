// E commarce example for the promises
//createOrder()//Async operations
//proceedToPayment()//Async operations
//updateStatus()//Async operations

const cart = ['item1','item2'];

// const promise = createOrder(cart);
createOrder(cart)
.then((orderId)=>{
    console.log(orderId);
    return proceedToPayment(orderId);

})
.then((paymentId)=>{
    console.log(paymentId);
    return updateStatus(paymentId);
})
.then((state)=>{
    console.log(state);
})
.catch((error)=>{
    console.log(error)
});
//note:each then block returns(value or a another promise to move to next) to move to next

//the last catch block is capable of catching the any error(rejected state) on the top of it.
//if u write the catch inbetween the then blocks then too its fine(it will only catch the errors above it) and the next blocks will continue executing .


function createOrder(cart){
    const pr = new Promise(function (resolve,reject){
        if(!validateCart(cart)){
            throw new Error("cart is not valid");
            reject("Error in creating cart");
        }

        else{
            setTimeout(function(){
                console.log("Odder id generated");
                var orderId=123;
                resolve(orderId);

            },5000);
           
        }
    })

    return pr
}

function proceedToPayment(orderId){
    const pr = new Promise((resolve,reject)=>{
        const paymentId = 900;
        resolve(paymentId);

    });

    
    return pr;
}

function updateStatus(paymentId){
    const pr  = new Promise((resolve,reject)=>{
        resolve("Success");
    });

    return pr;
}

function validateCart(cart){
    return true;
}

