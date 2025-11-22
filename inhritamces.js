var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  haveFourLegs: false,
};

var shariyansStudent = {
  canMakeAmazingWebsite: true,
  canMakeAwesomeAnimations: true,
  canMakeWorldClassAwardedWebsites: true,
};

shariyansStudent.__proto__ = human;
console.log(shariyansStudent.canTalk);
