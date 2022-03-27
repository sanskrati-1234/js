const obj = {
  name: "John",
  age: 23,
};
const address = {
  hNo: 1234,
  city: "Pune",
};
console.log(obj.hasOwnProperty("name"));
//true
console.log(Object.keys(obj));
//[ 'name', 'age' ]
console.log(Object.values(obj));
//[ 'John', 23 ]
console.log(Object.entries(obj));
//[ [ 'name', 'John' ], [ 'age', 23 ] ]
console.log(Object.assign(obj, address));
//{ name: 'John', age: 23, hNo: 1234, city: 'Pune' }
Object.freeze(obj);
obj.name = "Ken";
console.log(obj);
//{ name: 'John', age: 23, hNo: 1234, city: 'Pune' }
