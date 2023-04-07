class Shape{

    constructor(color)
    {
        this.color=color;
    }
    
    move()
    {
        console.log(`move the shape and color is ${this.color}`);
    }
}

class Circle extends Shape
{
  constructor(color,radius)
  {
    super(color);   // if we want to craete constructor in child class, we need to call the super class's constructor!
    this.radius=radius;
    
  }

   draw()
   {
    console.log(`Draw Circle and radius is ${this.radius}`);
   }
}

const c= new Circle();
c.draw();
c.move();  // can acess parent's method too

const s = new Shape('red');   // parent's constructor
s.move();

const c1= new Circle('blue', 4);
c1.draw();
c1.move();