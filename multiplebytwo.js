// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (Remove that number)
const numbers = [5, 3, 9, 30];
const multipleElementByTwoAndDeleteIfDivisibleBy5 = (numArr) => {
  if (!Array.isArray(numArr)) {
    return "Enter valid array";
  }
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
    if (numArr[i] % 5 !== 0) {
      numArr[i] = numArr[i] * 2;
    } else {
      numArr.splice(i, 1);
      i--;
    }
  }
  return numArr;
};
console.log(multipleElementByTwoAndDeleteIfDivisibleBy5(numbers));
