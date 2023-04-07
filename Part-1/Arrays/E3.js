const numbers=[1,3,4,1];



const except=(numbers,excluded)=>
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

console.log(except(numbers,[1,3]));