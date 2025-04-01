//  Date methods to get different parts of a date

let date = new Date(2025, 2, 29, 10, 15, 30, 500); // March 29, 2025, 10:15:30.500 AM

// Getting date components
console.log(date.getFullYear()); // 2025  → Year
console.log(date.getMonth()); // 2      → Month (0-based, March = 2)
console.log(date.getDate()); // 29     → Day of the month
console.log(date.getDay()); // 6      → Day of the week (0 = Sunday, 6 = Saturday)

//  Getting time components
console.log(date.getHours()); // 10     → Hours (24-hour format)
console.log(date.getMinutes()); // 15     → Minutes
console.log(date.getSeconds()); // 30     → Seconds
console.log(date.getMilliseconds()); // 500 → Milliseconds

//  Getting UTC time components (Universal Time Coordinated)
console.log(date.getUTCFullYear()); // 2025
console.log(date.getUTCMonth()); // 2
console.log(date.getUTCDate()); // 29
console.log(date.getUTCDay()); // 6
console.log(date.getUTCHours()); // 10
console.log(date.getUTCMinutes()); // 15
console.log(date.getUTCSeconds()); // 30
console.log(date.getUTCMilliseconds()); // 500

//  Get timestamp (milliseconds since Jan 1, 1970)
console.log(date.getTime()); // Example: 1743483330500

//  Get timezone offset in minutes (difference from UTC)
console.log(date.getTimezoneOffset()); // Example: -330 (for IST, UTC+5:30)
