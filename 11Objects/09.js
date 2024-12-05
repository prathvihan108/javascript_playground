//object destructuring in js
// Object destructuring in JavaScript is a convenient way to extract properties from objects and assign them to variables in a single statement. It allows you to "unpack" values from an object into individual variables, making your code cleaner and more readable.
const person = { name: "John", age: 25, city: "New York" };

// Destructuring the `person` object
const { name, age } = person;

console.log(name); // Output: "John"
console.log(age);  // Output: 25

// Features of Object Destructuring

// Default Values

//     You can assign default values to variables if the property is undefined in the object.

const {name1,age1,job1="other"}=person;
console.log(name1); // Output: "John"
console.log(age1);  // Output: 25
console.log(job1);  // Output: other

// Renaming Variables

//     You can rename variables while destructuring using the syntax propertyName: newVariableName.
const { name: firstName, city: location } = person;
console.log(firstName); // Output: "John"
console.log(location);  // Output: "New York"

// Nested Destructuring

//     You can destructure nested objects.

const employee = {
    name: "Alice",
    job: {
        title: "Developer",
        department: "Engineering"
    }
};

const { job: { title, department } } = employee;
console.log(title);       // Output: "Developer"
console.log(department);  // Output: "Engineering"


// Rest Operator (...)

//     You can collect the remaining properties into another object using the rest operator.

const { name3, ...rest } = person;
console.log(rest); // Output: { age: 25, city: "New York" }
