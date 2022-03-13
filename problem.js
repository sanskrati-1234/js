/**
 * @description Method to perform airthmetic operation
 * @param {Number} a
 * @param {Number} b
 * @param {String} operator
 * @returns {Number} *
 */
function calculatorV1(a, b, operator) {

  switch(operator){
      case "add":
          return a+b;
      case "subtract":
            return a-b;
      case "multiply":
          return  a * b;
      case "divide":
          return a/b;
      default: 
           return "Not a valid operator"    

  }
  /*
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "divide") {
    return a / b;
  } else if (operator === "multiply") {
    return a * b;
  } 
    return "Not a valid operator";
    // Not a valid operator
  */  
}

console.log(calculatorV1(1, 3, "add")); // 4
console.log(calculatorV1(10, 2, "subtract")); // 8
console.log(calculatorV1(10, 5, "divide")); // 2
console.log(calculatorV1(10, 3, "multiply")); // 30
console.log(calculatorV1(10, 3, "modular")); // Not a valid operator