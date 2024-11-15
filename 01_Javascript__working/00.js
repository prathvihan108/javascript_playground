function example() {
    if (true) {
      var x = 10; // `var` is scoped to the function, not the block
    }
    console.log(x); // Works fine, outputs: 10
  }
  example();
  console.log(x); // will give the reference error.
  