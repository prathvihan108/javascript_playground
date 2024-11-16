//behaviour of the let when used with the setTimeout
function a(){
    
    for(let i=1;i<=5;i++){//new instance of i  is created every iteration
        
        setTimeout(function(){
            console.log(i); // 1 2 3 4 5 
        
        },i*1000);
        
    }
}
a();


//---var--
console.log("--var--")

function b(){
    
    for(var i=1;i<=5;i++){//same reference of i  is shared every iteration
        
        setTimeout(function(){
            console.log(i); // 1 2 3 4 5 
        
        },i*1000);
        
    }
}
b();