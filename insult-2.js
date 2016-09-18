var inquirer = require('inquirer');

var victim;
var insults = ["you're garbage", "rot in hell", "you belong in a ditch"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomItem(array) {
  var item = getRandomInt(0, array.length - 1);
  return array[item];
}

//-----------------------------------------------------------------------------//

console.log('\nHi, welcome to the Insult Generator!\n');

var boolPrompt = {
  type: 'list',
  name: 'addInsult',
  message: 'Would you like to add an insult?',
  choices: ['Yes', 'No'],
  filter: function (val) {
    return val.toLowerCase();
  }
};

var insultPrompt = {
  type: 'input',
  name: 'insult',
  message: 'Enter your insult:',
  default: false,
  filter: function (val) {
    return val.toLowerCase();
  }
};

var victimBoolPrompt = {
  type: 'list',
  name: 'boolVictim',
  message: 'Who would you like to insult?',
  choices: ['Dylan', 'custom']
}

var victimPrompt = {
  type: 'input',
  name: 'victim',
  message: 'Enter a name:',
  default: 'Dylan'
}

var repeatPrompt = {
  type: 'list',
  name: 'repeat',
  message: 'Would you like to insult again?',
  choices: ['Yes', 'No'],
  filter: function (val) {
    return val.toLowerCase();
  }
}

function main() {
  askBool();
}

function askBool() {
  inquirer.prompt(boolPrompt).then(function (answers) {
    if (answers.addInsult === 'yes') {
      askInsult();
    } else {
      askBoolVictim();
    }
  });
}

function askInsult() {
  inquirer.prompt(insultPrompt).then(function (answers) {
    insults.push(answers.insult);
    console.log('"'+answers.insult+'"'+' was added.');
    askBool();
  });
}

function askBoolVictim() {
  inquirer.prompt(victimBoolPrompt).then(function (answers) {
    if (answers.boolVictim === 'Dylan'){
      victim = 'Dylan';
      insult(victim);
      askRepeat();
    } else {
      askVictim();
    }
  });
}

function askVictim() {
  inquirer.prompt(victimPrompt).then(function (answers) {
    victim = answers.victim;
    insult(victim);
    askRepeat();
  });
}

function getRandomItem(array) {
  var min = 0;
  var max = array.length;
  var randomInt = Math.floor(Math.random() * (max - min)) + min;
  var item = array[randomInt];
  return item;
}

function insult(name) {
  console.log(name + ", " + getRandomItem(insults) );
}

function askRepeat() {
  inquirer.prompt(repeatPrompt).then(function (answers) {
    if (answers.repeat === 'yes') {
      insult(victim);
      askRepeat();
    } else {
      return true;
    }
  });
}

main();
