// By default all properties are public
const _radius = Symbol(); // private property
const _draw = Symbol();  // private method

class Circle
{
    constructor(radius)                         // visible in the objectBase
    {
         this[_radius]=radius;

    }

    [_draw]()                                    // visible in the prototype one level below the CircleBase
    {
        console.log('draw');
    }
}

const c=new Circle(1);
console.log(c);

const key1 = Object.getOwnPropertyNames(c); 
console.log(key1); // symbols not displayed
const key2 = Object.getOwnPropertySymbols(c)[0];
console.log(key2);
// we can display value of this private variable but it's not recommended
console.log(c[key2]);


