//singleton objects

// Singleton Objects

//     A singleton ensures that only one instance of a class or object exists throughout the application.
//     It provides a global point of access to that instance.
//     Use case: Situations where maintaining a single shared resource is necessary, such as configuration settings, logging, or caching.


//how to create?
//using the IEFE(immediately invoked function expression)
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "I am the only instance" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

// Usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true

//we can create these using the class too
