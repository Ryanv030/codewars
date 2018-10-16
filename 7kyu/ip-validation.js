// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

function isValidIP(str) {
  return (
    str.split(".").filter(v => {
      return v == Number(v).toString() && Number(v) < 256;
    }).length == 4
  );
}

//This is my favorite answer
