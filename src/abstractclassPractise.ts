abstract class Shape2{
    abstract calArea():number;
    abstract dispArea:() => void;
}

class Square extends Shape2{
    constructor(protected side : number){
        super();
    }
    public calArea(): number {
        return this.side * this.side;
    }
    public dispArea = () => {
        console.log(`Area of square with side ${this.side} is ${this.calArea()}`);
        
    }
}
class Rectangle extends Shape2{
    constructor(protected height:number, protected breadth:number){
        super();
    }
    public calArea(): number {
        return this.height * this.breadth;
    }
    public dispArea = () => {
        console.log(`Area of square with ${this.height} x ${this.breadth} is ${this.calArea()}`);
    }
}
const square = new Square(5);
const rectangle = new Rectangle(5 , 6);
console.log(square.dispArea());
console.log(rectangle.dispArea());