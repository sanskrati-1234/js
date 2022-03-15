// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (print same number)
const numbers = 1;
const multipleElementByTwoButNotFive = (numArr) => {
  if (!Array.isArray(numArr)) {
    return "Enter Array";
  }
  return numbers.map((item) => {
    if (item % 5 !== 0) {
      return item * 2;
    }
    return item;
  });
};

console.log(multipleElementByTwoButNotFive(numbers)); // [ 5, 6, 18, 30 ]
