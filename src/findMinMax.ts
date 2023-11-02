function findMaxValue(array: number[]): number | undefined {
  if (array.length === 0) {
    return undefined; // Return undefined for an empty array.
  }

  // Use the reduce method to find the maximum value.
  const maxValue = array.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
  });
  return maxValue;
}
function findMinValue(array: number[]): number | undefined {
  if (array.length === 0) {
    return 0;
  }

  const minValue = array.reduce((accumulator, currentValue) => {
    return Math.min(accumulator, currentValue);
  });

  return minValue;
}

// Example usage:
const arr: number[] = [10, 20, 30, 40, 50];
const maxVal: number | undefined = findMaxValue(arr);
const minVal: number | undefined = findMinValue(arr);

if (maxVal !== undefined && minVal !== undefined) {
  console.log(`The maximum value is: ${maxVal} & the minimum value is : ${minVal}`);
} else {
  console.log("The array is empty.");
}
