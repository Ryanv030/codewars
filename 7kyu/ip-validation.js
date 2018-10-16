// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

function isValidIP(str) {
  return (
    str.split(".").filter(v => {
      return v == Number(v).toString() && Number(v) < 256;
    }).length == 4
  );
}

console.log(isValidIP("1e0.1e1.1e2.2e2"));
// console.log(isValidIP("123.045.067.089"));
// console.log(isValidIP("1.2.3.4"));
// console.log(isValidIP("123.45.67.89"));
