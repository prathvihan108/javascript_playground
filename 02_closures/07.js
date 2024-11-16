//understanding  closure
//behaviour of the let and var inside the forloop when used with the setTimeout
function a(){
    
    for(let i=1;i<=5;i++){//new instance of i  is created every iteration
        
        setTimeout(function(){
            console.log(i); // 1 2 3 4 5 
        
        },i*1000);
        
    }
}
a();

//behind the scenes when we use the let in for loop

// {
//     let i = 0; // First iteration scope
//     console.log(i);
// }
  
//   {
//     let i = 1; // Second iteration scope
//     console.log(i);
//   }
  
//   {
//     let i = 2; // Third iteration scope
//     console.log(i);
//   }
  


//---var--
console.log("--var--")

function b(){
    
    for(var i=1;i<=5;i++){//same reference of i  is shared every iteration
        
        setTimeout(function(){
            console.log(i); // 6 6 6 6 6 
        
        },i*1000);
        
    }
}
b();

//---Achieving the same behaviour with var by creating the different scope every time as shown below
console.log("--var--")

function c(){

    for(var i=1;i<=5;i++){//same reference of i  is shared every iteration
        function close(i){

            setTimeout(function(){
                console.log(i); // 1 2 3 4 5 
            
            },i*1000);


        }

        close(i);//evry time new scope is created for the close function
        
        
    }
}
c();