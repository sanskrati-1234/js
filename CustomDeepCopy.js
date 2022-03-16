const obj = {
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "42",
      attributes: {
        name: "John",
      },
    },
  ],
};

const deepObjectCloning = (obj) => {
  if (!isObject(obj)) {
    return "Enter valid object";
  }
  const clonedObject = {};
  for (let item in obj) {
    if (!isObject(obj[item])) {
      clonedObject[item] = obj[item];
    } else if (isObject(obj[item])) {
      clonedObject[item] = deepObjectCloning(obj[item]);
    }
  }

  return clonedObject;
};

const isObject = (obj) => {
  return typeof obj === "object";
};

const newObj = deepObjectCloning(obj);

console.log(newObj);
newObj.data[0].type = "articls1";
console.log(newObj.data[0].type); //articls1
console.log(obj.data[0].type); //articles
