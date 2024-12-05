// Use Cases of the object destructuring

// Extract specific data from an API response:\

const response = {
    data: { id: 1, title: "Post Title" },
    status: 200
};

const { data: { title }, status } = response;
console.log(title); // "Post Title"
console.log(status); // 200

// Function Parameters

//     You can destructure an object directly in function arguments.

function display({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

display(person); // Output: "Name: John, Age: 25"
