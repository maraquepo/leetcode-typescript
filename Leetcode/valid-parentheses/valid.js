const isValid = (s) => {
  const matching = {
    "(":")",
    "{":"}",
    "[":"]"
  }

  const stack = [];

  for (const char of s) {
    debugger;
    if(matching[char]) {
      stack.push(char)
    } else if (char !== matching[stack.at(-1)]) {
      return false
    } else {
      stack.pop()
    }
  }
  return stack.length === 0;
}

console.log(isValid('({)}'))