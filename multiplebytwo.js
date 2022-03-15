// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (Remove that number)
const numbers = [5, 3, 9, 30];
const multipleElementByTwoAndDeleteIfDivisibleBy5 = (numArr) => {
  if (!Array.isArray(numArr)) {
    return "Enter valid array";
  }
  return numArr
    .map((item) => {
      return (item = item * 2);
    })
    .filter((item) => {
      if (item % 5 !== 0) {
        return item;
      }
    });
};
console.log(multipleElementByTwoAndDeleteIfDivisibleBy5(numbers));
