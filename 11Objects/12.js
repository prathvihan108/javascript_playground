//creating the object using the Object constructor
const obj1 = new Object();
const obj2 = new Object();

console.log(obj1 === obj2); // false

//example2
const obj = new Object({ key: "value" });
console.log(obj); // { key: "value" }

// What is a Singleton?

// A singleton is a design pattern that ensures only one instance of a class or object exists throughout the lifecycle of an application. In JavaScript, this behavior typically involves using closures or modules to manage a single instance.


const Singleton = (function () {
    let instance;

    function createInstance() {
        return { id: Date.now() };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const obj3 = Singleton.getInstance();
const obj4 = Singleton.getInstance();

console.log(obj3 === obj4); // true (same instance)
