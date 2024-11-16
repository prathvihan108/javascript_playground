//setTimeout(callback,time)

function a(){
    var a = 100;
    setTimeout(function(){
        console.log(a);;
    
    },3000);//it goes to the call back queue after 3ms expires.

    console.log("hello world");//this will be printed first
}
a();
