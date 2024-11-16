//  No closure example.
// it's necessary for the fucntion to be returned for the formation of the closure.
function x() {
    var a = 10;
    function c() {
        console.log(a);
    }
}

x(); 
// The function `x` runs, creates `a`, and defines `c`.
// But since `c` is not returned or invoked from outside, 
// the lexical environment of `x` is destroyed after its execution.
