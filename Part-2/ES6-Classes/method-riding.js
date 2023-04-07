class Shape
{
    move()
    {
        console.log('move');
    }
}

class Circle extends Shape
{
   

    move()
    {
        super.move();
        console.log('move Circle');
        super.move();
    }
}

const c=new Circle();
c.move();