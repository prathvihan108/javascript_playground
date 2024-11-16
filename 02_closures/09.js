//Disadvantages of the closure.

function createClosure() {
    let largeArray = new Array(1000000).fill('data');
    return function() {
        console.log(largeArray.length);
    };
}

const closureFunc = createClosure(); 
// Even if `createClosure` finishes, `largeArray` is not garbage collected.


//example 2
function leakyFunction() {
    let obj = { key: 'value' };
    return function() {
        console.log(obj);
    };
}

const leak = leakyFunction(); 
// Even if `obj` is no longer required, it stays in memory due to the closure.
