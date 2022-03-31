const anagram = (firstString, secondString) => {
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    return;
  }
  let count = 0;
  let firstString1 = Array.from(firstString);
  let secondString1 = Array.from(secondString);
  if (firstString1.length != secondString1.length) {
    return "Not a anagram";
  }
  for (let i = 0; i < firstString1.length; i++) {
    count = 0;
    for (let j = 0; j < secondString1.length; j++) {
      if (firstString1[i] === secondString1[j]) {
        secondString1.splice(j, 1);
        count = 1;
        break;
      }
    }
    if (count === 0) {
      break;
    }
  }

  if (secondString1.length === 0) {
    return "anagram";
  }
  return "not anagram";
};

console.log(anagram("sans", "saas"));
