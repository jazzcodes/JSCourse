const numbers=[1,3,4,1];
const output=except(numbers,[1,3]);
console.log(output);

function except(numbers,excluded)
{
 
      const result =[];
      for(let number of numbers)
      {
        if(!excluded.includes(number))
        {
           result.push(number);
        }

      }

    

    return result;
}
