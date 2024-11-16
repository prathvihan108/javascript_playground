//Constructor functions
function Counter(){ //start with the capital letter.
    var count =1;
    this.increamentCount=function(){//'this' refers to the newly created object 
        count++;//if there is no object created then the this referes to the global object
        console.log(count);

    }
    this.decreamentCount=function(){
        count--;
        console.log(count);

    }
}

var counter1 = new Counter()//use the new keyword to create the object of the function
counter1.increamentCount();
counter1.decreamentCount(); 
//each time we call the fucntions each has its own scope and the var is not shared among them
var counter2 = new Counter()
counter1.increamentCount();
counter1.decreamentCount(); 

// example 2

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

