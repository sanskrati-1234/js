function parent() {
  var a = 10; // "a" is a local variable created by parent

  return function child() {
    return a;
  };
}

var b = parent(); // parent is called & returned the result
console.log(b()); // b function will still be holding the context of a = 10
