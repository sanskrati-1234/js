console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
const promise = new Promise((request, response) => {
  request("4.done");
});
const promise1 = new Promise((request, response) => {
  response("failed");
});
/*promise.then((res) => {
  console.log(res);
});*/
promise1
  .then((res) => {
    //console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
