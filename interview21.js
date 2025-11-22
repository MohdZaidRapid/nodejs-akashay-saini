//   higher order function

function abcd(val) {}

function abcd(val) {
  return function () {};
}

abcd(function () {});
