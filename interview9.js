// upper case sentecne first of aword
function capitalizeKaro(str) {
  let allWords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
  return allWords.join(" ");
}

console.log(capitalizeKaro("hello bhai"));
