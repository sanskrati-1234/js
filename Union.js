const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 777, 3, 78, 97];
function findUnion(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return "Please enter a valid array";
  }

  const union = [];
  let flag = false;

  for (let j = 0; j < b.length; j++) {
    for (let i = j + 1; i < a.length - 1; i++) {
      if (b[j] === a[i]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      flag = false;
    } else {
      a.push(b[j]);
    }
  }
  return a;
}

console.log(findUnion(arr1, arr2)); // [1,2,3,4,5,6,7,777,3,78,97]
