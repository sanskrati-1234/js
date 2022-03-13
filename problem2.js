/**
 * @description - Method to perform calculation based on params
 * @param {Number} a
 * @param {Number} b
 * @param {Function} callback
 * @returns {Number}
 */
function calculator(a, b, callback) {
  // Call when task is completed
   const val1=parseInt(a) 
   const val2=parseInt(b)
   if( isNaN(val1) || isNaN(val2) || typeof callback!=='function')
      return "Please provide valid argument"
   return callback(val1, val2);
}

/**
 * @description Function to add two value
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function add(a, b) {
   return a + b;
}

/**
 * @description Function to Multiply two value
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * @description Function to Divide two value
 * @param {*} a
 * @param {*} b
 */
function divide(a, b) {
  return a / b;
}

/**
 * @description Function to Subtract two value
 * @param {*} a
 * @param {*} b
 */
function subtract(a, b) {
  return a - b;
}
console.log(typeof add);
console.log("Add: ", calculator("1", null, add)); // 3
console.log("Multiply: ", calculator('3', 4, multiply)); //12
console.log("Divide: ", calculator(4, 2, divide)); // 2
console.log("Subtract: ", calculator(50, 3, subtract)); //47
