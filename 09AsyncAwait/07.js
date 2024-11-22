//since the async always returns the promise we can also shift to the 
//older way of handling errors. as shown below.
async function myFunction() {

      const x = await p1;  // If p1 is rejected, an error is thrown here.
      console.log(x);        // This line won't run if p1 is rejected.
  
      console.log('Error caught:', error);  // This will run if p1 is rejected.
   
  }


  var p1 = new Promise((reject)=>{
    setTimeout(()=>{
        reject("error occured")
 

    },4000)
})
myFunction().catch((error)=>{

}); 
//Async await is just synthatic sugar to the promises,js will handle the thing as usual;