// 📌 Different ways to declare dates in JavaScript

// 1️Default: Current date and time
let now = new Date();
console.log(now); // Example: Sat Mar 29 2025 10:15:30 GMT+0000

// 2️ Using year, month (0-based), day, hours, minutes, seconds, milliseconds
let date1 = new Date(2025, 2, 29, 10, 15, 30, 500);
console.log(date1); // Sat Mar 29 2025 10:15:30 GMT+0000

// 3️ Using a date string (YYYY-MM-DD format, recommended)
let date2 = new Date("2025-03-29");
console.log(date2); // Sat Mar 29 2025 00:00:00 GMT+0000

// 4️Using a different format (MM-DD-YYYY, works but not recommended)
let date3 = new Date("03-29-2025");
console.log(date3); // Sat Mar 29 2025 00:00:00 GMT+0000

// 5️ Using a format with slashes (MM/DD/YYYY, required in some locales)
let date4 = new Date("03/29/2025");
console.log(date4); // Sat Mar 29 2025 00:00:00 GMT+0000

// 6️ Using timestamp (milliseconds since Jan 1, 1970)
let date5 = new Date(1743483330500);
console.log(date5); // Example: Sat Mar 29 2025 10:15:30 GMT+0000

// 7️ Using individual date-time values (only up to seconds)
let date6 = new Date(2025, 2, 29, 10, 15, 30);
console.log(date6); // Sat Mar 29 2025 10:15:30 GMT+0000

// 8️ UTC date (YYYY, MM, DD, HH, MM, SS, MS in UTC)
let date7 = new Date(Date.UTC(2025, 2, 29, 10, 15, 30, 500));
console.log(date7.toUTCString()); // Sat, 29 Mar 2025 10:15:30 GMT
