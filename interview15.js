function typeTeller(arg) {
  return typeof arg;
}

console.log(typeTeller(12));
console.log(typeTeller("12"));
console.log(typeTeller(null));
console.log(typeTeller(undefined));
console.log(typeTeller(true));
console.log(typeTeller(function () {}));
