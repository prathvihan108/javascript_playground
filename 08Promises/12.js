//Promise.prototype.then(onFulfilled, onRejected)

// Attaches callback functions for success (onFulfilled) and failure (onRejected).
// Returns a new Promise.

Promise.resolve("Hello")
  .then(value => console.log(value))  // Logs: Hello
  .catch(error => console.log(error));


  //https://youtu.be/DlTVt1rZjIo?si=JJz8TpEivcvjRnMI