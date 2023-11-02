type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (city: string) => string;
};

const student1: Student = {
  name: "Devam",
  age: 20,
  greet: (city) =>
    `Hey my name is ${student1.name} and i am ${student1.age} years old and i am from ${city}`,
};
const student2: Student = {
  name: "Kumar",
  age: 22,
  greet: (city) =>
    `Hey my name is ${student2.name} and i am ${student2.age} years old and i am from ${city}`,
};

// const introduction = (student1: Student) => {
//   const { name, age } = student1;
//   return `Hey my name is ${name} and i am ${age} years old`;
// };

// console.log(introduction(student1));
console.log(student1.greet("Naraingarh"));
console.log(student2.greet("Shahzadpur"));
