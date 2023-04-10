const numbers = [2,4,6,1,0];
const empty=numbers.join();
const joined=numbers.join('-');

console.group(numbers);
console.log(empty);  // by default joined with commas
console.log(joined);