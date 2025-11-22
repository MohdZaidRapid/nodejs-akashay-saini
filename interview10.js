// convert  all string to letter count
function occurence(str) {
  let occurences = {};
  str.split("").forEach(function (elem) {
    if (occurences.hasOwnProperty(elem) === false) {
      occurences[elem] = 1;
    } else {
      occurences[elem]++;
    }
  });
  return occurences;
}

console.log(occurence("apple"));
