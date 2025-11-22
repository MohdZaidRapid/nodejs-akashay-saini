// prototype
// prototype inheritance
// this call apply bind
// pure and impure
// closures

function saanchaOfBiscuits() {
  this.width = 12;
  this.height = 22;
  this.color = "brown";
  this.taste = "sugary";
}

var bisc1 = new saanchaOfBiscuits();
var bisc2 = new saanchaOfBiscuits();
var bisc3 = new saanchaOfBiscuits();
// console.log(bisc1);
// console.log(bisc2);
// console.log(bisc3);

function circularButtonBanao(color) {
  this.radius = 2;
  this.color = color;
  this.icon = "image.png";
  this.pressable = true;
}

const redbtn = new circularButtonBanao("red");
const greenbtn = new circularButtonBanao("green");

console.log(redbtn);
console.log(greenbtn);

function abcd() {
  this.age = 12;
}

// const age = new abcd(); new create blenck pobject

// iife ->immediately invoked function expression

var ans = (function () {
  var privateval = 12;

  return {
    getter: function () {
      console.log(privateval);
    },
    setter: function (val) {
      privateval = val;
    },
  };
})();
ans.getter();
ans.setter(3);
ans.getter();
