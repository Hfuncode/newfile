const isValid = (string) => {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "{" || string[i] == "(" || string[i] == "[") {
      stack.push(string[i]);
    } else {
      let sl = stack.length - 1;
      if (
        (stack[sl] == "(" && string[i] == ")") ||
        (stack[sl] == "{" && string[i] == "}") ||
        (stack[sl] == "[" && string[i] == "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("(({}){{}})"));

const valid_parenthesis = function (arr) {
  let parenthesis = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (parenthesis[arr[i]]) {
      stack.push(arr[i]);
    } else if (arr[i] !== parenthesis[stack.pop()]) return false;
  }
  return stack.length == 0;
};

console.log(valid_parenthesis("[(())()[]{{}}]"));
