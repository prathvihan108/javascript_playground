//real world applications examples;
const obj = [
    { firstName: "John", lastName: "Doe", age: 28, city: "New York" },
    { firstName: "Jane", lastName: "Smith", age: 32, city: "Los Angeles" },
    { firstName: "Sam", lastName: "Brown", age: 25, city: "Chicago" },
    { firstName: "Emily", lastName: "Johnson", age: 28, city: "Houston" },
    { firstName: "Michael", lastName: "Williams", age: 35, city: "Phoenix" }
];

//get the first and last name of each person;
const fullName = obj.map(x=>x.firstName+" "+x.lastName)//returns array of values of firstname+lastname
console.log(fullName);

//get all the people whose age is <30
const ageLimit = obj.filter(x=>x.age<30);//return the array of objects
console.log(ageLimit);

//get the first name of all whose age is 28
//chaining of the methods.
//we can not chain the methods further if use the reduce method as last.(since it returns single object.)
const fisrtName = obj.filter(x=>x.age==28).map(x=>x.firstName);//return the array of objects
console.log(fisrtName);


//get tthe frequency  of each age (as key value pair)


const frequency = obj.reduce((acc,curr)=>{
    if(acc[curr.age]){//checks if the value of the curr.age is key in the acc
        acc[curr.age]++;//syntax is similar to obj[key] which is value of the key in a single object.
    }

    else{
        acc[curr.age]=1;
    }

    return acc;
},{})//note : initial value is the empty object.
console.log(frequency);
