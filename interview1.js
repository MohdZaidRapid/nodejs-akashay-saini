// reverse every word in sentence and sentence also

var str = "saare jaha se acha hindustan hamara";

var savedStr = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(savedStr.join(" "));
