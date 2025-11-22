function retrieve(arr = [], n = 1) {
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(n + " out of index");
  }
}

retrieve([1, 2, 3, 4, 5, 6, 7], 38);
