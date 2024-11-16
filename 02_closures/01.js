//In JavaScript, a closure is a function that retains access to its
//  outer (enclosing) function's variables even after the outer 
// function has finished executing. This concept allows functions to 
// "remember" the environment in which they were created
function x(){
    var a = 10;
    function c(){
        console.log(a) //fucntion 'c' along with the lexical environment of fucntion 'a' forms the closure
    }
    
    return c; //fucntion 'c' along with its lexical environment is returned;
}

var y = x(); //y references to c()
console.log(y)// u will get the fucntion printed.
y(); // a is still remembered even though the fucntion x has finished executing.