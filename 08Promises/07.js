//https://youtu.be/U74BJcr8NeQ?si=Dlf1Qy3TNUeqclsc
// E commarce example for the promises
//createOrder()//Async operations
//proceedToPayment()//Async operations
//updateStatus()//Async operations

const cart = ['item1','item2'];

// const promise = createOrder(cart);
//attach the function to then blocks
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
.catch((error)=>{ //attach a callback failure method to catch the errors.
    console.log(error)
});
//note:each then block returns(value or a another promise to move to next) to move to next

//the last catch block is capable of catching the any error(rejected state) on the top of it.
//if u write the catch inbetween the then blocks then too its fine(it will only catch the errors above it) and the next blocks will continue executing .

//Api side
//Producers:
//we can not call resolve/reject twice(first sattelement is final)
function createOrder(cart){
    const pr = new Promise(function (resolve,reject){
       
        if(!validateCart(cart)){
            const error= new Error("cart is not valid");
            reject(error);
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

