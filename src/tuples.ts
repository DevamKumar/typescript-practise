type PersonalInfo = readonly [string, number, boolean];

const displayPersonalinfo = (person: PersonalInfo) => {
  const [name, age, hasDriverLiscence] = person;
  console.log( `Name = ${name}, Age: ${age}, Has Driver's Liscence: ${hasDriverLiscence ? "Yes" : "No"}`);
};

const person1: PersonalInfo = ["devam", 20, true];
const person2: PersonalInfo = ["pihu", 22, false];

displayPersonalinfo(person1);
displayPersonalinfo(person2);
