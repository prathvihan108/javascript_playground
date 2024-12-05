//Advanced Array Techniques
//flat(): Flatten nested arrays to a single level.
const nested = [1, [2, [3, 4]]];
const flatArray = nested.flat(2);
console.log(flatArray); // [1, 2, 3, 4]

//flatMap(): Combine mapping and flattening.
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);//first every elemetn turns into this sub array
console.log(result); // [1, 2, 2, 4, 3, 6]//then flatens

//Copying


