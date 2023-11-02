"use strict";
function greet1(name, id) {
    if (id) {
        return `Welcome! ${name}, your id is ${id}`;
    }
    else {
        return `Welcome! ${name}`;
    }
}
const emp = greet1("Devam", 1);
const emp2 = greet1("Ayush");
console.log(emp);
console.log(emp2);
//# sourceMappingURL=default&optional.js.map