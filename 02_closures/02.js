//simply: inner fucntion along with its lexical environement forms the closure
//In JavaScript, functions are lexically scoped,
//  meaning they "remember" the scope in 
// which they were defined, not where they are invoked.(i.e the fondation of the closure)
function x(){
    var a = 10;
    return function c(){//similar syntax;
        console.log(a) 
    }

    a = 100;
    
 
}

var y = x(); //100
//when ever the inner fucntion is returned the reference to it is returened
//not the copy ,since in js the fucnton are the first class citizens
//when ever there is formation of closure the lexical environment of the outer functions are not destroyed
