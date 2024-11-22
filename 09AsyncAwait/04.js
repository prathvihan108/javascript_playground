//difference between handling the promises in older way vs async await

//When you use the await keyword in an async function, it will wait for the promise to resolve or reject.  If the promise resolves, the value is stored in the variable (val1.val2). If the promise is rejected, an error is thrown, and the control will jump to the nearest catch block.

const p1 = new Promise((reslove)=>{
    setTimeout(()=>{
        reslove("promise 1 resolved")
 

    },10000)
})

const p2 = new Promise((reslove)=>{
    setTimeout(()=>{
        reslove("promise 2 resolved")

    },5000)
}) //this promise will have already been resolved till the first promise resolves since the time is less

async function getData(){

    console.log("This will be first")
    const val1 = await p1; //10s  ,suspends till 10s
    console.log(val1);//immidiate
    console.log("hello world") //so this statement is also not going to print till the above promices are resolved unlike the old funtions without the async keyword.
    const val2 = await p2;//immediate
    console.log(val2);//immidiate
}

getData();

//how it works behind the scenes?

//js engine waits for none;
//when the js engine encounter the await ,i basically suspends that function and thus the function comes
//out of the call stack .when ever the promisse is resolved it returns back to the call stack and start executing from where it prevously suspended.

//How to handle the promises using the async await;
//step1: use the await key word infron of the promise
//step2:catch the returning value of the promise in some varaible;
//step3:if suppose the returning value is also a promise then follow the same steps as told to handle it
//Step4:do what u want to do witht the returned  value

