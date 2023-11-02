const numbers: number[] = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// mapping method

// doubling the value of array
// const doubleData:number[] = numbers.map((curVal:number)=> curVal * 2);
// console.log(doubleData);

// converting number to string

// const numberToString: string[] = numbers.map((curVal:number) =>curVal.toString());
// console.log(numberToString);

// const numberToString = numbers.map((curVal:number) =>curVal > 3);
// console.log(numberToString);

// filtering methond
// even numbers filtering

// const evenNumbers: number[] = numbers.filter((curVal:number) => curVal % 2 === 0);
// console.log(evenNumbers);

// numbers greater than 3

// const numberGreatthanThree = numbers.filter((curVal:number) => curVal > 3);
// console.log(numberGreatthanThree);

// homework

// convert name to uppercase

// const names: string[] = ["ayush", "devam", "rudra", "aniket"];
// const upperCase:string[] = names.map((curElm) => curElm.toUpperCase());
// console.log(upperCase);

// get squares of numbers in the array

// const squareOfNumber:number[] = numbers.map((curVal)=> curVal * curVal);
// console.log(squareOfNumber);


const names: string[] = ["Ayush", "Devam", "Rudra", "Aniket"];
// const namesGreaterthan15: string[] = names.filter((curElm:string)=> curElm.length > 5);
// console.log(namesGreaterthan15);

const namesWithA = names.filter((CurElm:string)=> CurElm.indexOf("A")=== 0  );
console.log(namesWithA); 