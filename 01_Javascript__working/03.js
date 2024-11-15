console.log(this === window); // true in Browser Environment(BE)

// Inside a Function: In non-strict mode, inside a regular function, this refers to the global object (window in the browser).
function myFunction() {
  console.log(this); // this refers to the global object (window in the browser)
}
myFunction();


// Inside an Object Method: When this is used inside an object method, it refers to the object that is calling the method.
const person = {
  name: "John",
  greet: function() {
    console.log(this.name); // "John", as 'this' refers to the person object
  }
};
person.greet();



// Inside a Constructor Function: When this is used inside a constructor function (with the new keyword), it refers to the newly created object.
function Person2(name) {
  this.name = name;
}
const person2 = new Person("Alice");
console.log(person1.name); // "Alice"



// Arrow Functions and this: Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical context (the context in which the arrow function is defined).
const person1 = {
  name: "John",
  greet: () => {
    console.log(this.name); // undefined, as 'this' is inherited from the global context (window in browsers)
  }
};
person1.greet();



// In Event Handlers: When an event handler is attached to an element in the browser, this refers to the DOM element that triggered the event.
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // 'this' refers to the button element
});


