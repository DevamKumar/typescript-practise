// class Persons {
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {}
//   introduceParent(): string {
//     return `Hi my name is ${this.name}, I'm ${
//       this.age
//     } years old, my hobbies are ${this.hobbies.join(", ")} `;
//   }
// }

// class Students extends Persons {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public grade: number
//   ) {
//     super(name, age, hobbies);
//   }

//   introduce(): string[] {
//     // return `${super.introduce()}I am in ${this.grade}th grade`;
//     return this.hobbies;
//   }
// }

// const persons1: Persons = new Persons("Devam", 20, ["Bike Riding", "Music"]);
// const persons2: Persons = new Persons("Kumar", 19, ["Coding", "DSA"]);
// const students1: Students = new Students(
//   "Gupta",
//   18,
//   ["Media", "Adventure"],
//   8
// );
// console.log(persons1.introduceParent());
// console.log(persons2.introduceParent());
// console.log(students1.introduce());
