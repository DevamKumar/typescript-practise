"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`Area of circle with radius ${this.radius} is ${this.calculateArea()}`);
    };
}
const circle = new Circle('red', 5);
console.log(circle.displayArea());
//# sourceMappingURL=abstractMethod.js.map