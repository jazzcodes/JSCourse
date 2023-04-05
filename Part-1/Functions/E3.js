try{

const numbers=null;
console.log(countOccurrences(numbers,1));
}

catch(e)
{
    console.log(e.message);
}

const numbers =[1,2,3,4,1];
console.log(countOccurrences(numbers,1));
function countOccurrences(array, searchElement)
{
    if(!Array.isArray(array))
{
    throw new Error('Not an Array');
}
    return array.reduce((accumulator,currentValue )=>
    {
       const occurrence= +(currentValue===searchElement)
        return accumulator+occurrence;
    },0);
    
}  

