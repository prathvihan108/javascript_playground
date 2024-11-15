//Block scope and the shodowing in js
//a statement is a single line or block of code that performs a specific action or task. It forms the basic unit of execution in a program. Statements are instructions that the computer follows to carry out operations, 
//such as performing calculations, displaying output, or making decisions.

{
    //Blcok is also called a compoud statement;(multiple statements grouped together)
}

//Bock is used to combine the multiple js statement into a group.
//we group multiple statements toogether so that we can use the group in a place where the js accepts a single statement;

//for example 
//if(true) // this accepets the single statment after the if(true) //since there is no statement given so it will throw the syntax error
// if(true) var a=10;  //we have given a single statement

//so now we can provide the block for it so it treats the block as the single statement
if(true){
    //statements;
}

//block scope:what all variable and function we can access inside an block.
//How hoisting works in the block
//note:fucntion scope is not the block scope,it is different.
{
    var a = 10;//hoisted in the global scope(parent scope) even though it is declared in the block
    let b = 20; //hoisted the block scope
    const c =30;//same
    console.log(a) //ok
    console.log(b) //ok
    console.log(c) //ok
}
console.log(a)//ok
console.log(b)// reference error
console.log(c)//same.


//this is not the same for the fucntion scope
function example() {
    if (true) {
      var x = 10; // `var` is scoped to the function(i.e parent scope), not the block
    }
    console.log(x); // Works fine, outputs: 10
  }
  example();
  console.log(x); //var is not scoped to the global since the if-block is the direct child of the function scope .