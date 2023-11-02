class Temperature {
  private _celcius: number = 0;

  public get celcius() {
    return this._celcius;
  }
  public set celcius(newCelcius: number) {
    this._celcius = newCelcius;
  }
  public get fahrenheit() {
    return (this._celcius * 9) / 5 + 32;
  }
  public set fahrenheit(newFahrenheit) {
    this._celcius = ((newFahrenheit - 32) * 5) / 9;
  }
}

const temp = new Temperature();
temp.celcius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit=98.6;
console.log(temp.celcius);