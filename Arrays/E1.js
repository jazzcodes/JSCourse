

function arrayFromRange(min,max)
{
    let arr=[];
    for(let i=min;i<=max;i++)
    {
        arr.push(i)
    }

    return arr;
}

const numbers = arrayFromRange(-5,1);
console.log(numbers);

