"use strict";
const displayPersonalinfo = (person) => {
    const [name, age, hasDriverLiscence] = person;
    console.log(`Name = ${name}, Age: ${age}, Has Driver's Liscence: ${hasDriverLiscence ? "Yes" : "No"}`);
};
const person1 = ["devam", 20, true];
const person2 = ["pihu", 22, false];
displayPersonalinfo(person1);
displayPersonalinfo(person2);
//# sourceMappingURL=tuples.js.map