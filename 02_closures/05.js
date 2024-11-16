//properties of the functions also part of  the closure.
//note:properties of the function are diffferent than the variables.
//properties are accessible outside of the funcion too using the funcion name.
function x() {
    x.a = 10;//property of the fucntion(originally functions are the objects)
    var a =10;
    function c() {
        console.log(x.a);
    }
    

    console.log(x.a); 

    return c;
}
console.log(a);//u can not access the var outside the funcion like properties of function.
console.log(x.a); //undefined(x.a is initially hold undefined)
var y=x();//x.a is initialised since we call the function.
console.log(x.a); //10

y();// c remembers x.a 




