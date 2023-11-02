// const formatVal = (input:string | number | boolean) : string| number | boolean => {
//     if(typeof input === 'string'){
//         return input.charAt(0).toUpperCase()+input.substring(1);
//     }else if (typeof input === "number"){
//         return `$${input}.00`
//     }else if(typeof input === "boolean"){
//         return input===true ? "yes" : "no"
//     }else{
//         throw new Error("Invalid inputs");
//     }
// }
// console.log(formatVal(175));
// console.log(formatVal(1866));
// console.log(formatVal("devam"));
// console.log(formatVal(true));
// console.log(formatVal(false));

// const format = (value: number | boolean | string) => {
//     if(typeof value === "number"){
//         return  `$${value}`
//     }else if (typeof value === 'boolean'){
//         return  value = true ? 'yes' : 'no'
//     }else if(typeof value === 'string'){
//         return value.charAt(0).toUpperCase()+value.slice(1)
//     }
// }
// console.log(format(true));
// console.log(format(false));
// console.log(format("ram"));
// console.log(format(12));

// type Person = {
//     name : string;
//     age: number;
// }
// type Employee = {
//     empi_d: number;
//     department : string;
// }
// type Details = Person & Employee;

// const empdetails : Details = {
//     name:'Devam',
//     age:20,
//     empi_d:21022003,
//     department:'cse'
// }

// const personalDetails : Person = {
//     name:'Devam',
//     age:20
// }

// console.log(personalDetails)
// console.log(empdetails)

// type User = {
//     name:string;
//     age:number;
//     dob:unknown;
// }
// type UserLocation = {
//     city:string;
//     district:string;
//     country:string;
// }

// const user:User={name: 'Devam', age: 20, dob:'20 Feb 2003'}
// const userLocation:UserLocation={city:'Naraingharh', district:'Ambala', country:'Bharat'}

// const createuserprofile = (user:User ,userLocation:UserLocation) => {
//     return {...user, ...userLocation}
// }

// const mycompleteinfo:User & UserLocation = createuserprofile(user, userLocation);
// console.log(mycompleteinfo)

// type User = {
//     name:string;
//     age:number;
//     dob:unknown;
// }
// type UserLocation = {
//     city:string;
//     district:string;
//     country:string;
// }

// const user:User={name: 'Devam', age: 20, dob:'20 Feb 2003'}
// const userLocation:UserLocation={city:'Naraingharh', district:'Ambala', country:'Bharat'}

// const createuserprofile = (user:User ,userLocation:UserLocation) => {
//     return {...user, ...userLocation}
// }

// const mycompleteinfo:User & UserLocation = createuserprofile(user, userLocation);
// console.log(mycompleteinfo)

type User = {
  id: number;
  name: string;
  email: string;
};
type Account = {
  acc_id: number;
  acc_type: string;
  acc_balance: number;
};

const user:User={id:123, name:'devam', email:'devam@gmail.com'}
const account:Account={acc_id: 10718, acc_type:'saving', acc_balance:200 }

const combineUserandAccount = (user:User , account:Account) => {
    return{...user,...account}
}
const displayAccDetails : User & Account = combineUserandAccount(user,account);
console.log(displayAccDetails);