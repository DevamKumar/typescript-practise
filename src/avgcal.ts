// Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

// function calculateAverage(_num2:number[]) {
//     let myavg = avg.
// }
// avg([1,4,6,9,23,56,87])

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  const sum: number = numbers.reduce((total, num) => total + num, 0);
  const average: number = sum / numbers.length;

  return average;
}

const numArray: number[] = [1, 2, 3, 4, 5];
const avgResult: number = calculateAverage(numArray);
console.log(`The average is: ${avgResult}`);
