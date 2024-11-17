//3. reduce():

// The reduce() method applies a function to reduce an array to a single value (e.g., a sum, a product, or any other type of aggregation). 

// It takes two parameters: a callback function and an initial accumulator value.
////callback function takes acc and curr as the arguments.
// Use Case:

//     When you want to accumulate or reduce all elements of an array into a single value (e.g., sum, product, or a more complex operation).
//     It is highly versatile and can be used for a wide variety of tasks.

const arr = [1,2,3,4];
const res = arr.reduce(function(acc,curr){//sum of the array elements; //callback function takes acc and curr

     return acc=acc+curr;//acc is the accumulator and the curr referes to the curr elelement being accessed

},0); //'0' is the initial value for the accumulator
console.log(res);
//acc ,curr are  not a key words.

//exaple 2: using the separete regular fucntion as call back.

const max =arr.reduce(findMax,0)//pass the call back functiona and initial value of the acc(i.e max=0).//don't use the braces () when u are passing a callback function or any other functions .
 function findMax(max,curr){
    if(curr>max){
        max=curr;
    }

    return max;//acc is what whihc is goinng to stay till the end.
    

}

console.log(max); 
//reduce always returns the single object .
//reduce can not be chained further by map and filter