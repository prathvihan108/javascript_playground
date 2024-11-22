//Async and Await are used to handle promises.


 const p = new Promise((resolve,reject)=>{
    resolve(23);
})

// async function getData(){
//     p.then(x=>{
//         console.log(x);
//     })
// }//befor how we used to handle

//Await can only be used inside the async function.
async function getData(){
       const res=  await p;//await is used in front of the promise;
       console.log(res);
            
      
 } //modern way of handling

getData();



 