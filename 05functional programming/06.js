//functional progrramming paradigm example::

const area = r => (Math.PI)*r**2;
const cicumference = r => 2*(Math.PI)*r;
const diameter = r => r*2;

const arr = [1,2,3,4];

var d1= arr.map(diameter);
var c1= arr.map(cicumference);
var a1= arr.map(area);

console.log(d1);
console.log(c1);
console.log(a1);