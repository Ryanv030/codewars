// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

function isValidIP(str) {
  console.log(str);
  const newStr = str.split(".");
  let valid = true;
  const validate = newStr.forEach(str => {
    let numStr = Number(str);
    if (numStr < 256 && numStr > 0 && str[0] !== 0 && str[0] !== " ") {
      return true;
    } else {
      valid = false;
    }
  });
  if (newStr.length === 4 && valid === true) {
    return true;
  } else return false;
}

console.log(isValidIP(" 1.2.3.4"));
// console.log(isValidIP("123.045.067.089"));
// console.log(isValidIP("1.2.3.4"));
// console.log(isValidIP("123.45.67.89"));
