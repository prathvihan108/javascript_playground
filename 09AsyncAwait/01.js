//Async function will always return a promise
//

async function abc(){
    value =10;
    return value;//value will be wrapped in to promise and will be returned
}

const res = abc();
res.then((x)=>console.log(x));