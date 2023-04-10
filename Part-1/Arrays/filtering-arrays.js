// works on primitive as well as reference data types
const numbers=[0,-1,3,4];
const positive=numbers.filter(num=>num>=0);
console.log(positive);

const marks=
[{name:'john', score:90,}, 
{name: 'annie', score:100},
 {name:'bill', score:20},
 {name:'lily', score:75}]

const fail = marks.filter(student => student.score<50);
console.log(fail);

const pass = marks.filter(student => student.score>50);
console.log(pass);