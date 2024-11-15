//Showding in js

//Shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope.
//  This hides or "shadows" the outer variable within the inner scope. In JavaScript, shadowing can happen with var, let, and const,
//  but there are important differences in how it behaves with these declarations.

var a =100;
let b= 100;
{
    var a = 10;//hoisted in the function scope(i.e global(in this case))(since var is funcion scoped) and since there is already same variable declared so it so along withe shadowing it ,it also overwrites that .
    let b = 10; //hoisted the block scope,and it shodows the  global b inside the block only not out side the block as in case of the var
    const c =30;//same
    console.log(a) //10
    console.log(b) //10

}
console.log(a)//10 //since the both a refer to the fucntion scope only they one a overwrites the other.
console.log(b)//100 //is not shadowed outside the block ,since the scope of b is different 


//Illegal shadowing

let a = 10;
{
    var a = 100; // this will tell a is already declared ,since a is going to me assigned the memory in the global scope(parent scope)
}



let x = 10;
{
    function hello(){
        var x =100; //fine ,since the  var is function scoped when it is declared inside the function 
    }
}

var a = 10;
{
    let a = 100; // fine,since a is let (block scoped so the mememory reference for the both a's is different)
}


