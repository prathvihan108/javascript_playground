async function myFunction() {
    try {
      const x = await p1;  // If p1 is rejected, an error is thrown here.
      console.log(x);        // This line won't run if p1 is rejected.
    } catch (error) {
      console.log('Error caught:', error);  // This will run if p1 is rejected.
    }
  }


  var p1 = new Promise((reject)=>{
    setTimeout(()=>{
        reject("error occured")
 

    },4000)
})
myFunction(); 