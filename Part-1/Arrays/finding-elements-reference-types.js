const marks=
[{name:'john', score:90,}, 
{name: 'annie', score:100},
 {name:'bill', score:20},
 {name:'lily', score:75}]

const fail = marks.find(student => student.score<50);
// returns first occurrence only
const top = marks.find(student => student.score>50);

console.log(fail);
console.log(top);
