//A polyfill is a piece of code (often JavaScript) that provides modern functionality on older browsers that do not natively support it.
//Creating the polyfill for the map

const area = r => (Math.PI)*r**2;
const cicumference = r => 2*(Math.PI)*r;
const diameter = r => r*2;

const radius = [1,2,3,4];

//note don't use the arrow function for creating the polyfills ,beccause arrow function do not have their own this key word(they inherit it from the lexical scope),since we can not create the objects of the arrow function.
Array.prototype.calculate = function(logic){ //set he function on the array's prototype.
    const arr=[];// const type does't mean u can not push the elements in it.
    for(let i=0;i<this.length;i++){
        arr.push(logic(this[i]));

    }

    return arr;
}

var d1= radius.calculate(diameter); //Now this is similar to map syntax.
var c1= radius.calculate(cicumference);
var a1= radius.calculate(area);

console.log(d1);
console.log(c1);
console.log(a1);