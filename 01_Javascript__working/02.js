console.log(x); // undefined
foo(); // "Hello from foo"

var x = 10;

function foo() {
  console.log("Hello from foo");
}

bar(); // TypeError: bar is not a function

var bar = function() {
  console.log("Hello from bar");
};
