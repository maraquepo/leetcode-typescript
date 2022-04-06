export const isValid = (s: string): boolean => {
  const matching: {[key: string]: string} = {
    "(":")",
    "{":"}",
    "[":"]"
  }

  const stack: string[] = [];

  for (const char of s) {
    // if current char exists in hash map, meaning that its an open parenthesis
    if(matching[char]) {
      // push it to the stack
      stack.push(char)
      // else if current char is not equal to the last item on the stack's pair
    } else if (char !== matching[stack.at(-1)]) {
      // return false
      return false
      // else current char is a closing parenthesis
    } else {
      // pop last element off stack
      stack.pop()
    }
  }
  // if stack is empty, return true
  return stack.length === 0;
}