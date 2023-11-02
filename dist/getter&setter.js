"use strict";
class Persons {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age >= 111 || age <= 0) {
            throw new Error(`Age is not valid`);
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error(`Age is not defined`);
        }
        return this._age;
    }
    introduceParent() {
        return `Hi my name is ${this.name}, I'm ${this._age} years old, my hobbies are ${this.hobbies.join(" and ")}.`;
    }
}
const persons1 = new Persons("Devam", [
    "Bike Riding",
    "Listening Music to calm my mind",
]);
persons1.age = 110;
console.log(persons1.introduceParent());
console.log(persons1.age);
//# sourceMappingURL=getter&setter.js.map