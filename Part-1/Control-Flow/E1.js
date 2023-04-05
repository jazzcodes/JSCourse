showStars(4);

function showStars(stars)
{
   
   for(let i=1;i<=stars;i++)
   {
    let pattern = '';
    
    for(let j=1;j<=i;j++)
    {   
        pattern+='*';
        
    }
    console.log(pattern);
   }
}