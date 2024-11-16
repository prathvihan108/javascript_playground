var sum = function(a,b){
    console.log(a+b);

}

function calculate(callback){
    var a =10;
    var b= 12;
    callback(10,12);
}

calculate(sum);
