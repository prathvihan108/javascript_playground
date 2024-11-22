const p = new Promise((resolve,reject)=>{
    resolve(20);
})

async function abc(){
   return p; //returning a promise //this will not be wrapped in to another promise
}

const res = abc();
res.then((x)=>console.log(x));