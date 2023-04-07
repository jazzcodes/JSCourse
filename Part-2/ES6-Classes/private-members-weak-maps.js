
const _radius= new WeakMap();
const _move=new WeakMap();
class Circle
{
    constructor(radius)
    {
        _radius.set(this, radius);       // set value of private property
        _move.set(this, ()=>{console.log('move', `and The value of this is ${this}`)});
        // private method created
    }

    getRadius()
    {
       console.log(_radius.get(this));
    }

    draw()
    {
        _move.get(this)()  // private method called here
        console.log('Draw');
    }
}

const c= new Circle(2);
console.log(c);
c.getRadius();
c.draw();