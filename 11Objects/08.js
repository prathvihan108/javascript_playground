//new keyword in creating the object vs not using the new keyword
// In JavaScript, the new keyword is used to create a new instance of an object that is defined by a constructor function or class. Here's a detailed explanation of its use and the differences between creating objects with and without the new keyword

// Using the new keyword

// The new keyword performs the following steps:

//     Creates a new, empty object.
//     Sets the prototype of the new object to the prototype property of the constructor function or class.
//     Calls the constructor function or class with the new object as its this context.
//     Returns the new object unless the constructor explicitly returns a non-primitive value.


function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person("John", 25); // Creates an instance of Person
console.log(john); // { name: 'John', age: 25 }


// 2.Without the new keyword

// If you call a constructor function without the new keyword:

//     The this keyword inside the function will refer to the global object (in non-strict mode) or be undefined (in strict mode).
//     The function won't create a new object or set the prototype chain properly.
//     It may lead to unexpected behavior or errors.

const jane = Person("Jane", 30); // Called without new
console.log(jane); // undefined since the referene is not returned.
console.log(globalThis.name); // "Jane" (in non-strict mode)
