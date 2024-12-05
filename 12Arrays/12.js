//Shallow Copy

// A shallow copy creates a new array, but the elements inside the array are still references to the original array's elements. For primitive data types (e.g., numbers, strings), this works fine because their values are copied. However, for non-primitive data types (e.g., objects, arrays), only the references are copied, not the actual values.

//Methods to Create a Shallow Copy

// Using slice():

const original = [1, 2, 3];
const shallowCopy = original.slice();
console.log(shallowCopy); // [1, 2, 3]

//Using spread operator (...):
const original1 = [1, 2, 3];
const shallowCopy1 = [...original1];
console.log(shallowCopy1); // [1, 2, 3]

//Using Array.from():
const original2 = [1, 2, 3];
const shallowCopy2 = Array.from(original2);
console.log(shallowCopy2); // [1, 2, 3]

//Behavior with Nested Arrays
const nestedArray3 = [1, [2, 3]];
const shallowCopy3 = [...nestedArray3];

shallowCopy3[1][0] = 42; // Modifies the original array's nested element
console.log(nestedArra3); // [1, [42, 3]]


//Deep Copy

// A deep copy creates a new array and recursively duplicates all elements and sub-elements, ensuring that changes to the copied array do not affect the original array.

// Methods to Create a Deep Copy

//     Using JSON.stringify() and JSON.parse(): This is a simple method for deep copying, but it works only if the array doesn't contain circular references or unsupported types like undefined, functions, or symbols.

const nestedArray = [1, [2, 3]];
const deepCopy = JSON.parse(JSON.stringify(nestedArray));

deepCopy[1][0] = 42;
console.log(nestedArray); // [1, [2, 3]]
console.log(deepCopy);    // [1, [42, 3]]

//Using a Recursive Function: For complete control, you can implement your own deep copy logic.

function deepClone(arr) {
    return arr.map(item => 
        Array.isArray(item) ? deepClone(item) : item
    );
}

const nestedArray4 = [1, [2, 3]];
const deepCopy = deepClone(nestedArray4);

deepCopy[1][0] = 42;
console.log(nestedArray4); // [1, [2, 3]]
console.log(deepCopy);    // [1, [42, 3]]
