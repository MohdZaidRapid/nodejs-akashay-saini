// this call apply bind

// var obj = {
//   name: "zaid",
//   baatKaro: function () {
//     console.log(this);
//   },
// };

// obj.baatKaro();

// function abcd(val1, val2, val3) {
//   console.log(this.age);
//   console.log(val1, val2, val3);
// }

// var obj = { age: 24 };
// // abcd.call(obj, 1, 2, 3);

// abcd.apply(obj, [1, 2, 3]);

function abcd() {
  console.log(this);
}

var obj = { age: 24 };

var bindedfnc = abcd.bind(obj);
bindedfnc();
