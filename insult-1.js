var response;
var newInsult;
var insultee;
var insults = ["You're garbage", "Rot in hell", "You belong in a ditch"];

function getRandomItem(array) {
  var min = 0;
  var max = array.length;
  var randomInt = Math.floor(Math.random() * (max - min)) + min;
  var item = array[item];
  return item;
}

var prompt = require('prompt');

  prompt.start();

  console.log("Would you like to add an insult? yes/no\n");
  // do{
    prompt.get(['response'], function(err, first) {
      response = first.response;
    });

    if(response.toLowerCase() == 'yes' || response.toLowerCase() == 'y'){
      console.log("Type your insult.\n");
      prompt.get(['insult'], function(err, second) {
        newInsult = second.insult;
        insults.push(newInsult);
        console.log('You entered: "'+ newInsult + '"');
      });
    }
  // }while (response = 'yes');

  console.log("Who would you like to insult?\n");
  prompt.get(['insultee'], function(err, third) {
    insultee = third.insultee;
  });

  console.log(insultee + ", " + getRandomItem(insults));
