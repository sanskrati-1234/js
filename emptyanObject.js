const abc = {
  a: "a",
  x: {
    key1: {
      key2: {
        xyz: 111,
      },
    },
  },
};
const mno = abc.x;
const clearObject = (obj) => {
  for (let item in obj) {
    //console.log(item);
    if (typeof obj[item] === "object") {
      delete clearObject(obj[item]);
    } else {
      console.log(item);
      delete obj[item];
    }
  }
  return obj;
};
console.log(clearObject(abc));
console.log(abc);
console.log(mno);
