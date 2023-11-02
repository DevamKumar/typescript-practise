class Persons {
  private _age: number | undefined;
  constructor(public name: string, protected hobbies: string[]) {}

  public set age(age: number) {
    if (age >= 111 || age <= 0) {
      throw new Error(`Age is not valid`);
    }
    this._age = age;
  }
  public get age() {
    if (this._age === undefined) {
      throw new Error(`Age is not defined`);
    }
    return this._age;
  }

  introduceParent(): string {
    return `Hi my name is ${this.name}, I'm ${
      this._age
    } years old, my hobbies are ${this.hobbies.join(" and ")}.`;
  }
}

const persons1: Persons = new Persons("Devam", [
  "Bike Riding",
  "Listening Music to calm my mind",
]);

persons1.age = 110;
console.log(persons1.introduceParent());
console.log(persons1.age);
