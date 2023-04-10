const numbers = [1,4,6,8,0,1,8];

console.log('Index of 1st occurrence of 1 is: '+ numbers.indexOf(1));

console.log('Index of 1st occurrence of 1 is: '+ numbers.indexOf(100));

console.log('Index of last occurrence of 1 is: '+ numbers.lastIndexOf(1));

console.log('Index of first occurrence of 1 starting from 2nd index is: '+ numbers.indexOf(1, 2));

console.log('Does the array include 1: '+ numbers.includes(1));

console.log('Does the array include 100: '+ numbers.includes(100));
