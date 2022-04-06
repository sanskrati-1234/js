const arr = [4, 1, 9, 10, 15, 22, 5, 14];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);
