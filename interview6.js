function reverseKaro(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseKaro(123445566782));
