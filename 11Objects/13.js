//1. Creation of Objects
//Object Literals:
const obj = { key: "value" };

//Constructor Function:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Alice", 25);

//Object Constructor:
const obj2 = new Object();

//2. Accessing Properties

//Dot Notation:
console.log(obj.key);

// Bracket Notation:
console.log(obj["key"]);


//3. Modifying Properties

// Adding New Properties:
obj.newKey = "newValue";
obj["anotherKey"] = "anotherValue";

//Updating Existing Properties:
obj.key = "updatedValue";


//4. Deleting Properties

// Using delete Operator:
delete obj.key;


//5. Checking for Properties

//in Operator:
console.log("key" in obj); // true if 'key' exists in obj

//hasOwnProperty():
console.log(obj.hasOwnProperty("key")); // true if 'key' exists directly on obj


//6. Iterating Over Object Properties
//for...in Loop (enumerable properties):
for (let key in obj) {
    console.log(key, obj[key]);
}

//Object.keys() (keys of the object):
console.log(Object.keys(obj)); // Array of keys

//Object.values() (values of the object):
console.log(Object.values(obj)); // Array of values

//Object.entries() (key-value pairs as an array of arrays):
console.log(Object.entries(obj)); // [[key1, value1], [key2, value2], ...]



