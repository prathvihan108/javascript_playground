//First class functions
//Definition: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
const greet = () => console.log('Hello!');
function executeFunction(fn) {
    fn();
}
executeFunction(greet);

