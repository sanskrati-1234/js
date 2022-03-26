console.time("using{}");
for (var i = 0; i < 200000000; i++) {
  var obj = {};
}
console.timeEnd("using{}");

console.time("using new");
for (var i = 0; i < 200000000; i++) {
  var obj = new Object();
}
console.timeEnd("using new");
