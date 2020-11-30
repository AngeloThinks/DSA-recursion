// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(integer, exponent) {
  //base case exits the loop
  if (exponent < 0) {
    return "exponent should be >=0";
  } else if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return integer;
  }
  //general case
  else {
    return integer * powerCalculator(integer, exponent - 1);
  }
}

let int = 10;
let exp = 2;
console.log(powerCalculator(int, exp));
