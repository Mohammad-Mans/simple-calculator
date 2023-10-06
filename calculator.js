function calc(...args) {
    if (args.length !== 3) {
      throw new Error('Invalid input');
    }
  
    const [num1, operator, num2] = args;
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('Division by zero');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operator');
    }
  }

module.exports = calc;
  