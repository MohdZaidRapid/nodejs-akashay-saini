var arr = ["hehhheheh", 123, "sdsdsd", 456, "wewewe", 678, "pokemon"];
var sum = 0;

arr.forEach(function (elem) {
  if (typeof elem === "number") {
    sum = sum + elem;
  }
});


console.log(sum)