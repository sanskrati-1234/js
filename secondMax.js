function secondMax(arr) {
  if (arr.length < 1) {
    return -1;
  }
  let max = -Infinity,
    second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > max) {
      max = parseInt(arr[i]);
    } else if (parseInt(arr[i]) < max && parseInt(arr[i]) > second) {
      second = parseInt(arr[i]);
    }
  }
  if (second == Infinity) {
    return -1;
  }
  return second;
}

console.log(secondMax(["4", "4", "4"]));
