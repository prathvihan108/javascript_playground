//Lexical environment //and the scope of the variables;

function a(){
    console.log(b) //this works sincce the  b is in global scope even though it's not in the local scope.
}
var b =10;


function c(){
    var x=10;
    let z=5;
    d();
    var y=11;
   

    function d(){
        console.log(x);//10 //this too works as the x is in the lexical environment of the fucntion d scope
        console.log(y);//undefined (since y is still not initialised); 
        console.log(z);//5
    }

}

a();
c();