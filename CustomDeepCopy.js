const obj = {
  name: "Sanskrati",
  details: {
    address: "Patan",
    phone: {
      number2: {
        xyz: {
          zx: "abc",
        },
      },
    },
  },
  image: {
    image1: "11",
    image2: {
      key1: {
        key2: "xyz",
        key3: {
          key4: [1, 2, 3, 4],
        },
      },
    },
  },
};

const deepCopy = (obj) => {
  if (!Boolean(obj)) {
    return;
  }
  let newObj = {};
  for (let item in obj) {
    if (typeof obj[item] !== "object") {
      newObj[item] = obj[item];
    } else if (typeof obj[item] === "object") {
      newObj[item] = deepCopy(obj[item]);
    }
  }

  return newObj;
};

obj1 = deepCopy(obj);
obj1.details.address = "Jabalpur";
console.log(obj1);
console.log(obj1.details.address);
console.log(obj.details.address);
