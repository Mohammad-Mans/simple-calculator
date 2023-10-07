function isValidNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Invalid input type");
  }
}

function calc(...args) {
  if (args.length < 3 || args.length % 2 == 0) {
    throw new Error("Invalid input");
  }

  isValidNumber(args[0]);

  let sum = args[0],
    lastOperator = "*",
    lastOperand = args[0],
    currentOperator,
    currentOperand,
    reverted;

  for (let i = 1; i < args.length; ) {
    reverted = false;

    currentOperator = args[i++];
    currentOperand = args[i++];

    isValidNumber(currentOperand);

    switch (currentOperator) {
      case "+":
        sum += currentOperand;
        break;

      case "-":
        sum -= currentOperand;
        break;

      case "*":
        
        if (lastOperator === "+") {
            
            sum -= lastOperand;
            lastOperand = lastOperand * currentOperand;
            sum += lastOperand;
            reverted = true;

        } else if(lastOperator === "-") {
            
            sum += lastOperand;
            lastOperand = lastOperand * currentOperand;
            sum -= lastOperand;
            reverted = true;

        }
         else {
          sum *= currentOperand;
        }
        break;

      case "/":
        if (currentOperand === 0) {
          throw new Error("Division by zero");
        }

        if (lastOperator === "+") {
            
            sum -= lastOperand;
            lastOperand = lastOperand / currentOperand;
            sum += lastOperand;
            reverted = true;

        } else if(lastOperator === "-") {
            
            sum += lastOperand;
            lastOperand = lastOperand / currentOperand;
            sum -= lastOperand;
            reverted = true;
            
        }
         else {
          sum /= currentOperand;
        }
        break;

      default:
        throw new Error("Invalid operator");
    }

    if (!reverted) {
      lastOperator = currentOperator;
      lastOperand = currentOperand;
    }
  }

  return sum;
}

module.exports = calc;
