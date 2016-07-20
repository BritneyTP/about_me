var userName = prompt('Welcome to Britneys page. What is your name?');
alert('Welcome ' + userName + ', Let\'s see if you can answer some questions about me!');

var answer1 = prompt('Was Britney born in Oklahoma?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('You are correct');
} else {
  alert('Sorry ' + userName + ',  the question is actually correct. She was born and raised in Tulsa, Oklahoma.');
}

var answer2 = prompt('Does Britney have any cats?').toLowerCase();
if (answer2 === 'no' || answer2 === 'n') {
  alert('You are wrong. She has 5 cats named Cookie, Rocky, Revel, Roy, & Ligo.');
} else {
  alert('You are correct ' + userName + ', Britney has 5 cats named Cookie, Rocky, Revel, Roy, & Ligo.');
}

var answer3 = prompt('Was Britney any good at track?').toLowerCase();
if (answer3 === 'Yes' || answer3 === 'y') {
  alert('You are SO RIGHT! Record holder at every school she attended.');
} else {
  alert('No?, Really ' + userName + ' ? Come on now. She held records at every school she attended.');
}

var answer4 = prompt('Is this Britney first time coding?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
  alert('You are right! One more question left.');
} else {
  alert('Sorry, you got it wrong. Maybe you will have better luck with the last question.');
}

var answer5 = prompt('Will there be a zombie apocalypse?').toLowerCase();
if (answer5 === 'no' || answer5 === 'n') {
  alert('I sure hope not. Nobody has time for that foolishness.');
} else {
  alert('Wow! I dont think you have anything to worry about. Theres not going to be any zombies');
}
