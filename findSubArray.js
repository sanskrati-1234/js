let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 10;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];
    if (sum === target) {
      console.log("i,j", i, j);
      break;
    }
  }
  if (sum === target) {
    break;
  }
}
