// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// MY SOLUTION
// This iteration of function zeros doesn't work because factorialResult returns scientific notation.
function zeros(num) {
  let factorialResult = factorial(num);
  const splitNumbers = Array.from(factorialResult.toString()).map(Number);
  let wasLastNumZero = false;
  let count = 0;
  splitNumbers.forEach(num => {
    if (num === 0) {
      wasLastNumZero = true;
      count++;
    } else {
      wasLastNumZero = false;
      count = 0;
    }
  });
  return count;
}

function factorial(num) {
  let factorial = num - 1;
  for (let i = num; i > 1; i--) {
    if (i !== num - 1) {
      factorial = i * factorial;
    }
  }
  return factorial;
}

// console.log(zeros(30));

// Solution found online
function zeros(n) {
  var res = 0;
  for (var i = 5; i < n; i *= 5) res += Math.floor(n / i);
  return res;
}
