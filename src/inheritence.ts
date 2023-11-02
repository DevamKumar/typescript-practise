// class Persons {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introduce(): string {
//     return `Hi my name is ${this.name}, I'm ${
//       this.age
//     } years old, my hobbies are ${this.hobbies.join(", ")} `;
//   }
// }

// class Students extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introduce(): string {
//     return `${super.introduce()}I am in ${this.grade}th grade`;
//   }
// }

// const persons1: Persons = new Persons("Devam", 20, ["Bike Riding", "Music"]);
// const persons2: Persons = new Persons("Kumar", 19, ["Coding", "DSA"]);
// const students1: Students = new Students("Gupta",18,["Media", "Adventure"],8);
// console.log(persons1.introduce());
// console.log(persons2.introduce());
// console.log(students1.introduce());
