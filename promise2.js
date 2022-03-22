console.log("1 Program started");

/*  console.log("2 SetTimeOut started");
  setTimeout(() => {
    console.log("2.1 Inside SetTimeOut LN16");
  }, 0); */

const promise = new Promise((reply, reject) => {
  reject("I'm done");
});

console.log({ promise });

function add(a, b, cb) {
  return cb(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log("1.1 Add: ", add(1, 4, sum));

setTimeout(() => {
  console.log("2.2.1 Inside SetTimeOut LN24");
}, 0);

setTimeout(() => {
  console.log("2.2 Inside SetTimeOut LN20");
}, 0);

console.log("2.3 SetTimeOut completed");

console.log("3: Loop is starting");
for (let i = 0; i < 10; i++) {
  console.log("3 .1 i: ", i);
}

console.log("4: Loop is completed");

console.log("5: API Calling is started");
promise
  .then((data) => {
    console.log("5.1 Data: ", data);
  })
  .catch((err) => {
    console.log("5.1 err: ", err);
  });

promise.then((data) => {
  console.log("5.2 Data: ", data);
});

promise.then((data) => {
  console.log("5.3 Data: ", data);
});

promise.then((data) => {
  console.log("5.4 Data: ", data);
});

promise.then((data) => {
  console.log("5.5 Data: ", data);
});

console.log("6: API Calling is completed");
/* 
  

  console.log("5: API Calling is done"); */

/**
 *
 */
