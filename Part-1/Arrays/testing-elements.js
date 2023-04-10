// all positive?
const numbers = [2,4,5,6,0, -1, -2];

const allPostive=numbers.every(number=>number>=0);

console.log(allPostive);

// atleast 1 positive?

const atleastOnePostive=numbers.some(number=>number>=0);
console.log(atleastOnePostive);

// works on primitive as well as reference data types
const marks=
[{name:'john', score:90,}, 
{name: 'annie', score:100},
 {name:'bill', score:20},
 {name:'lily', score:75}]

const greaterThanTen = marks.every(student => student.score>10);
console.log(greaterThanTen);
