const movies= [
    {title:'a', year:2018, rating:4.5},
    {title:'b', year:2018, rating:4.7},
    {title:'c', year:2018, rating:3},
    {title:'d', year:2017, rating:4.5},
]

// function showMovie(movies)
// {
//     let selected=[];
//     for(let i=0;i<movies.length;i++)
//     {
       
//     //   let selected=  movies.filter(()=>movies[i]['year']===2018 && movies[i]['rating']>4);
//         if(movies[i]['year']===2018 && movies[i]['rating']>4)
//         {
//            selected.push(movies[i]);
         
//         }

//     }

//     selected.sort((a,b)=>
//     {
//         if(a.rating>b.rating)
//         return 1
        
//         if(a.rating<b.rating)
//         return -1

//         return 0
//     })

//     selected.reverse();
    
//     for(let movie in selected)
//     {
//         console.log(selected[movie]['title']);
//     }
// }

// showMovie(movies);

// Better approach

const showMovie=(movies) =>
{
    const titles = movies
                  .filter(m => m.year===2018 && m.rating>4)
                  .sort((a,b) =>
                  {
                    if(a.rating>b.rating) return 1;
                    if(a.rating<b.rating) return -1;
                    return 0;
                  })
                  .reverse()
                  .map(m=>m.title);
               
    return titles;              
}

console.log(showMovie(movies));