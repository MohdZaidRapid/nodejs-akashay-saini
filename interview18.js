function freq(arr) {
  var freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem] = 1;
  });
  console.log(freq);
  console.log(Object.keys(freq));
  var ans = Object.keys(freq).reduce(function (acc, num) {
    return freq[acc] > freq[num] ? acc : num;
  });
  console.log(ans);
}

freq([1, 2, , 2, 2, 2, 2, 2, 3, 12, 4, 5, 6, 7, 8, 9, 10]);
