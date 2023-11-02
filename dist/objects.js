"use strict";
const person = {
    name: "Devam_Kumar",
    age: 20,
    isStudent: true,
    address: {
        city: "Naraingarh",
        country: "India",
        pincode: 134203
    }
};
console.log(person.address.country);
person.address.country = "Bharat";
console.log(person.address.country);
//# sourceMappingURL=objects.js.map