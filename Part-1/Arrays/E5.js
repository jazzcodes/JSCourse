const numbers =[1,2,3,4,1];

// function countOccurrences(array, searchElement)
// {
//     let ctr = 0;
//     for(let num of numbers)
//     {
//         if(num===searchElement)
//         {
//             ctr++;
           
           
//         }

//         else{
//             continue;
//         }
        
        
//     }
//     return ctr||0;
 

// }

// const occurrences= countOccurrences(numbers,2);
// console.log(occurrences)

//using reduce array method

const countOccurrences=(array, searchElement)=>
{
    return array.reduce((accumulator,currentValue )=>
    {
       const occurrence= +(currentValue===searchElement)
        return accumulator+occurrence;
    },0);
    
}  

console.log(countOccurrences(numbers,1));