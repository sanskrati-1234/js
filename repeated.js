/*const input1 = [1, 1, 2, 2, 4, 5, 6, 1, 3, 7, 9, 10, 10, 111, 2, 5]; // [1, 2, 5]

const findDuplicates = (input1) => {
  if (typeof input1 !== "object") {
    return "Please enter a valid array";
  }
  result = {};
  duplicate = [];
  for (let i = 0; i < input1.length; i++) {
    if (result.hasOwnProperty(input1[i])) {
      result[input1[i]] = result[input1[i]] + 1;
    } else {
      result[input1[i]] = 1;
    }
  }
  for (let item in result) {
    if (result[item] > 1) {
      duplicate.push(parseInt(item));
    }
  }
  console.log(result);
  return duplicate;
};

console.log(findDuplicates(input1)); // [1,2,3]*/
const input1 = [1, 2, 4, 5, 6, 1, 3, 7, 9, 10, 2, 5]; // [1, 2, 5]

const findDuplicates = (input1) => {
  for (let i = 0; i < input1.length; i++) {
    for (let j = 1 + i; j < input1.length; j++) {
      if (input1[i] === input1[j]) {
        input1.splice(j, 1);

        j--;
        i--;
      }
    }
  }
  return input1;
};
console.log(findDuplicates(input1)); // [1,2,3]
