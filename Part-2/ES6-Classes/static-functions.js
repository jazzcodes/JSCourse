class Circle{
    constructor(radius)
    {
        console.log('draw');
    }

    static parse(str)
    {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius":1}');
const circle2=new Circle(3);
