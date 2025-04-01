//  `Date.now()` - Get the current timestamp in milliseconds (since Jan 1, 1970)

let timestamp = Date.now();
console.log(timestamp); // Example: 1743483330500

//  Useful for performance measurement
let start = Date.now(); // Start time
for (let i = 0; i < 1e6; i++) {} // Some operation
let end = Date.now(); // End time

console.log(`Execution time: ${end - start} ms`); // Example: "Execution time: 5 ms"

//  Convert timestamp to a readable date
let date = new Date(Date.now());
console.log(date.toLocaleString()); // Example: "3/29/2025, 10:15:30 AM"
