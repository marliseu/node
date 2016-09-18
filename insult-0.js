var Dylan = "sucks";
console.log("Dylan "+Dylan);
Dylan = "dumb";
console.log("Dylan is "+Dylan);
var insults = ["You're garbage", "Rot in hell", "You belong in a ditch"];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomItem(array) {
  var item = getRandomInt(0, array.length);
  return array[item];
}
console.log(getRandomItem(insults));
