"use strict";
class Shape2 {
}
class Square extends Shape2 {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    calArea() {
        return this.side * this.side;
    }
    dispArea = () => {
        console.log(`Area of square with side ${this.side} is ${this.calArea()}`);
    };
}
class Rectangle extends Shape2 {
    height;
    breadth;
    constructor(height, breadth) {
        super();
        this.height = height;
        this.breadth = breadth;
    }
    calArea() {
        return this.height * this.breadth;
    }
    dispArea = () => {
        console.log(`Area of square with ${this.height} x ${this.breadth} is ${this.calArea()}`);
    };
}
const square = new Square(5);
const rectangle = new Rectangle(5, 6);
console.log(square.dispArea());
console.log(rectangle.dispArea());
//# sourceMappingURL=abstractclassPractise.js.map