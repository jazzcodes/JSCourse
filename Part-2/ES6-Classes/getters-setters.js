
const _radius = new WeakMap();


class Circle
{
    constructor(radius)
    {
        _radius.set(this,radius);

    }

    get radius()
    {
        return _radius.get(this);
    }

    set radius(value)
    {
        if(value<=0) throw new Error('Invalid radius value')
        _radius.set(this,value);
    }
}

const c= new Circle(1);
console.log(c.radius);
c.radius=3;
console.log(c.radius);

// So to access the values using functions by property names only use getters and setters
