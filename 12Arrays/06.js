//4. Iterating Over Arrays
// Using Loops

//     for loop:

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of:
for (const fruit of fruits) {
    console.log(fruit);
}


//forEach():
fruits.forEach(fruit => console.log(fruit));

