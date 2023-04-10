// primitives
const numbers=[1,4,6,2];

numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

//reference types

const marks=
[{name:'john', score:90,}, 
{name: 'annie', score:100},
 {name:'bill', score:20},
 {name:'lily', score:75}]

marks.sort((a,b)=> {if (a.score>b.score) return 1; if(b.score>a.score) return -1; return 0;} );
console.log(marks);
marks.reverse(); // this works as on primitives :D
console.log(marks);
