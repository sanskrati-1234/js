console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
const promise = new Promise((request, response) => {
  request("4.done");
});
promise.then((res) => {
  console.log(res);
});
