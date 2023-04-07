class Circle
{
   constructor(radius)                  
   {
      this.radius=radius;
      this.draw=function()            
      {
      console.log('draw');      
        };
   }        
   
  paint()
  {
   console.log('Paint');                
      };
 }
 
 

 
 const c = new Circle(1);
 c.draw();
 c.paint();
 