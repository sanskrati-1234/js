// Add two string
const addString = (a, b) => {
  arr1 = Array.from(a);
  console.log(arr1);
  arr2 = Array.from(b);
  console.log(arr2);
  carry = 0;
  result = [];
  addition = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length - 1 - i > -1) {
      addition =
        parseInt(arr1[arr1.length - 1 - i]) +
        parseInt(arr2[arr2.length - 1 - i]);
    } else {
      addition = parseInt(arr1[arr1.length - 1 - i]);
    }

    if (carry == 1) addition = addition + 1;
    if (addition < 10) {
      result.unshift(addition);
      carry = 0;
    } else {
      result.unshift(addition % 10);
      carry = 1;
    }
  }
  return result;
};

console.log(
  addString(
    "123455123456789234564567845674567894567890845678456783456745674567789345678945678456745674567456745673456745679",
    "3554567845678456745674567456785678456784567845678456784567845674567"
  )
);
