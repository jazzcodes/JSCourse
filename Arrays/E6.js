const numbers =[1,2,3,4,2];
// function getMax(array)
// {   
//     for(let i=0;i<array.length-1;i++)
//     {
//      var max= (array[i]>array[i+1])?array[i]:array[i+1];
//     //   console.log(max);
//     }
//     return max;
// }

// using reduce function

function getMax(array)
{
    return array.reduce((accumulator, currentValue)=>
    
    {
        return accumulator>currentValue?accumulator:currentValue;
        
    },undefined)
}
console.log(getMax(numbers));