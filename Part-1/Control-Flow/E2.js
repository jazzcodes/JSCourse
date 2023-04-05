console.log(isPrime(7));
showPrime(7);

function isPrime(num)
{
    for(i=2;i<=num;i++)
    {
        if(num%i===0)
        {   
            return false;
        }

        return true;
    }


}

function showPrime(limit)
{
    for(let i=0;i<=limit;i++)
    {
        if(isPrime(i))
        {
            console.log(i);
        }
    }
}

