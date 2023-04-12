const numbers=[1,2,3,4];

const move=(array, index, offset)=>
{
     const result=[...array];
     const position=index+offset;
     if(position>=array.length|| position<0)
     {
        console.error("Kindly change the offset");
        return;
     }

     const element=result.splice(index,1)[0]; //deletion of 1 element
     result.splice(position,0,element); //just addition, no deletion
     return result;

}

console.log(move(numbers, 0, 1));