// In the modules/calculator.js, export an object whose properties are the functions add, subtract, multiply, divide 
// using ES6 Object initialize shorthand.

let calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
}

module.exports = calculator;