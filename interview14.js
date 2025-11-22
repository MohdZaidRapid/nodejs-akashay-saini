// function cloneArr(arr) {
//   return [...arr];
// }

function cloneArr(arr) {
  var newarr = [];
  arr.forEach(function (e) {
    newarr.push(e);
  });
  return newarr;
}

var newarr = cloneArr([1, 2, 3, 4]);

console.log(newarr);

