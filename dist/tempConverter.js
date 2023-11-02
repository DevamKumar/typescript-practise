"use strict";
class Temperature {
    _celcius = 0;
    get celcius() {
        return this._celcius;
    }
    set celcius(newCelcius) {
        this._celcius = newCelcius;
    }
    get fahrenheit() {
        return (this._celcius * 9) / 5 + 32;
    }
    set fahrenheit(newFahrenheit) {
        this._celcius = ((newFahrenheit - 32) * 5) / 9;
    }
}
const temp = new Temperature();
temp.celcius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 98.6;
console.log(temp.celcius);
//# sourceMappingURL=tempConverter.js.map