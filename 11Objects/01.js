// In JavaScript, objects are collections of properties and methods that represent real-world entities or abstract concepts. Objects are one of the most fundamental and versatile structures in JavaScript.
// Key Characteristics of Objects:

//     Properties: These are key-value pairs where the key is a string (or Symbol) and the value can be of any data type (primitive or another object).
//     Methods: Functions defined as the values of an object's properties, allowing the object to perform actions.

// Using object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};

// Using Object constructor
const obj = new Object();
obj.name = "Jane";
obj.age = 25;




// Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car("Toyota", "Camry");

// Using classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
