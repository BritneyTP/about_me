var counter = 0;
var userName = prompt('Welcome to Britneys page. What is your name?');
alert('Welcome ' + userName + ', Let\'s see if you can answer some questions about me!');


function questionOne() {
var answer1 = prompt('Was Britney born in Oklahoma?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('You are correct');
  counter++;
  console.log('question one counter: ' + counter)
} else {
  alert('Sorry ' + userName + ',  the question is actually correct. She was born and raised in Tulsa, Oklahoma.');
}
}

questionOne();

var answer2 = prompt('Does Britney have any cats?').toLowerCase();
if (answer2 === 'no' || answer2 === 'n') {
  alert('You are wrong. She has 5 cats named Cookie, Rocky, Revel, Roy, & Ligo.');
} else {
  alert('You are correct ' + userName + ', Britney has 5 cats named Cookie, Rocky, Revel, Roy, & Ligo.');
  counter++;
  console.log('question 2 counter: ' + counter);
}

var answer3 = prompt('Was Britney any good at track?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('You are SO RIGHT! Record holder at every school she attended.');
  counter++;
  console.log('question 3 counter: '+ counter);
} else {
  alert('No?, Really ' + userName + ' ? Come on now. She held records at every school she attended.');
}

var answer4 = prompt('Is this Britney first time coding?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
  alert('You are right! three more question left.');
  counter++;
  console.log('question 4 counter: ' + counter);
} else {
  alert('Sorry, you got it wrong. Maybe you will have better luck with the last question.');
}

var answer5 = prompt('Will there be a zombie apocalypse?').toLowerCase();
if (answer5 === 'no' || answer5 === 'n') {
  alert('I sure hope not. Nobody has time for that foolishness.');
  counter++;
  console.log('question 5 counter: ' + counter);
} else {
  alert('Wow! I dont think you have anything to worry about. Theres not going to be any zombies');
}
var userCorrect = false;
var i = 0;

while (answer6 !== 200 && i < 4){
  var answer6 = parseInt(prompt('How many licks does it take to get to the center of the toosie pop?'));
  if (answer6 < 200){
    alert ('Your number is too low');
  }
  else if (answer6 > 200){
    alert('You number is to high');
  }
  else if (answer6 === 200) {
    alert('You are correct.');
    var userCorrect = true;
    counter++;
    console.log('question 6 counter: ' + counter);
    i = 4;
  }
  i++;
}
if (userCorrect = false){
  alert('Too many tries. The answer was 200.');
}

var sports = ['track', 'basketball', 'softball', 'sleeping','eating','shopping'];
var winning = false;
for (var x = 0; x < 6; x++) {
  var answer7 = prompt('What sport did Britney play?');
  for(var j = 0; j < sports.length; j++){
    if (answer7 === sports[j] ) {
      alert('You are correct.');
      winning = true;
      counter++;
      console.log('question 7 counter: ' + counter);
      break;
    }
  }
  if (winning === false){
    alert('No sorry. The answer is wrong.');
  }
  if (winning === true){
    break;
  }

}
alert('You got ' + counter + ' out of 7 questions correct,');
