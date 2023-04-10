const numbers=[2,1,0,7,9,1];

const sum=numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0 // initial value of accumulator (by defualt zero)
);

console.log(sum);
