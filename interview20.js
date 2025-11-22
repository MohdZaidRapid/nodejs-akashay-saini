function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 10, 3, 4], [2, 3, 4, 6]));
