const longestPalindrom = (str) => {
  const arr = [];
  let max = "";
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      arr.push(str.slice(i, j));
    }
  }
  //console.log(arr);
  let rev = "";
  for (let i = 0; i < arr.length; i++) {
    rev = arr[i].split("").reverse().join("");
    if (max.length < rev.length && rev === arr[i]) {
      max = arr[i];
    }
    //console.log(rev);
  }
  return max;
};
console.log(longestPalindrom("asaaskrati"));
