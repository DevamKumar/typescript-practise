const person:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        country:string;
        pincode:number;
    }
} = {
    name: "Devam_Kumar",
    age: 20,
    isStudent: true,
    address:{
        city: "Naraingarh",
        country:"India",
        pincode: 134203
    }
}
console.log(person.address.country);
person.address.country = "Bharat";
console.log(person.address.country);
// person.address.city = 134203;
