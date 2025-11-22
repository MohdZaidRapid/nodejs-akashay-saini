// palindrome
function stringPalChecker(str) {
  return str.split("").reverse().join("") === str;
}

console.log(stringPalChecker("pp"));
