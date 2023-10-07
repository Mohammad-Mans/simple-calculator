// calculator.test.js
const calc = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });

  //--------new tests--------

  // Test case: Order of operations (division and multiplication before subtraction)
  it('Should prioritize division and multiplication over subtraction', ()=>{
    expect(calc(3, '-', 4, '/', 2 ,'*',3)).toBe(-3);
  });

  // Test case: Order of operations (division and multiplication before addition)
  it('Should prioritize division and multiplication over addition', ()=>{
    expect(calc(3, '+', 4, '/', 2 ,'*',3)).toBe(9);
  });

  // Test case: handle an unknown amount of numbers (less than 3 arguments)
  it('should throw an Invalid input error for arguments less than 3', ()=>{
    expect(() => calc(2, '+')).toThrow('Invalid input');
  });

  // Test case: handle an unknown amount of numbers (operator without opearand)
  it('should throw an Invalid input error for even numbered arguments', ()=>{
    expect(() => calc(2, '+', 3 ,'-')).toThrow('Invalid input');
  });

  // Test case: handle an unknown amount of numbers (more than 3 arguments)
  it('should handle an unknown amount of numbers', ()=>{
    expect(calc(3 ,'+', 4 ,'/', 2 ,'*', 3 , '-' , 2)).toBe(7);
  });

  // Test case: ignore numbers bigger than 1000 (second operand)
  it('should ignore numbers bigger than 1000 in case of second operand', ()=>{
    expect(calc(2 ,'+', 1001)).toBe(2);
  });

  // Test case: ignore numbers bigger than 1000 (first operand)
  it('should ignore numbers bigger than 1000 in case of first operand', ()=>{
    expect(calc(1001 ,'+', 2)).toBe(2);
  });

  // Test case: ignore numbers bigger than 1000 (both operands)
  it('should ignore numbers bigger than 1000 in case of both operands', ()=>{
    expect(calc(1001 ,'+', 1002)).toBe(0);
  });


});