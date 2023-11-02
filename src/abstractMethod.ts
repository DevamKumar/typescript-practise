abstract class Shape{
    constructor(protected color:string){}
    abstract calculateArea(): number;
    abstract displayArea: () => void; 
}


class Circle extends Shape{
    constructor(protected color:string, protected radius:number){
        super(color);
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public displayArea = () => {
        console.log(`Area of circle with radius ${this.radius} is ${this.calculateArea()}`);
    } 
}
const circle = new Circle('red', 5);
console.log(circle.displayArea());