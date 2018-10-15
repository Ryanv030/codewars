// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParens(parens) {
  let count = 0;
  for (let i = 0; i < parens.length && count >= 0; i++) {
    count += parens[i] == "(" ? 1 : -1;
  }
  return count == 0;
}

console.log(validParens("()))"));
