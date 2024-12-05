//Symbol datatype in js
// In JavaScript, the Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). It represents a unique, immutable value that can be used as a property key for objects. Symbols are often used to create hidden or private properties in objects and to avoid name collisions between object properties.


//syntax
// const symbol = Symbol(description);
// description (optional): A string that can be used for debugging purposes but does not affect the uniqueness of the symbol.

// Key Features of Symbols:

//     1.Uniqueness:
//         Every time you create a symbol, even with the same description, it is guaranteed to be unique.
const sym1 = Symbol("desc");
const sym2 = Symbol("desc");
console.log(sym1 === sym2); // false (even though they have the same description)


// 2.Symbols as Object Property Keys:

//     Symbols can be used as keys for object properties, providing uniqueness and avoiding accidental overwrites.

const sym = Symbol("id");
const user = {
    name: "Alice",
    [sym]: 123
};
console.log(user[sym]); // 123


// 3.Non-enumerable:

//     Properties keyed by symbols do not show up in for...in loops or Object.keys(). They are not enumerable in the usual ways, which can be useful for creating "private" properties.

const sym3 = Symbol("secret");
const obj = { [sym3]: "hidden" };

console.log(Object.keys(obj)); // []
for (let key in obj) {
    console.log(key); // No output
}

//4 Well-Known Symbols:

//     JavaScript defines a set of built-in symbols that represent internal behaviors and operations, such as Symbol.iterator (for iteration), Symbol.toStringTag (for custom string tags), and others.

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }

// 5.Global Symbols:

//     JavaScript provides a global registry for symbols, allowing you to share symbols across different parts of your application using Symbol.for() and retrieve them using Symbol.keyFor().

// it is accessible anywhere in your application,

const globalSymbol = Symbol.for("sharedSymbol");
const anotherSymbol = Symbol.for("sharedSymbol");

console.log(globalSymbol === anotherSymbol); // true
