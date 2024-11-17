//immutibility;
//Definition: Data structures should not be modified after they are created. Instead, you create new ones.
const arr = [1, 2, 3];
const newArr = arr.map(x => x * 2); // original array is not modified
