var wins = 0;
var losses = 0;
var guessesRemaining = 10;
/* create wolrds in array 
   word needs to be hidden 
   one user guesses a letter it needs to be stored in a field for used letters
   user has 10 guesses 
   every missed guess takes away for the remaining guesses
   every right guess shows the letter in the word 
   when user guesses all the right letters alert you win
   when user uses up al;l guesses alert you lose 
   at end of game alert to play again */


//words in the game  
var words = ["mario", "Mushroom", "luigi", "Star", "flower"];

// computer picks random word 
var word = words[Math.floor(Math.random() * words.length)];

// this displays word with dashes 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_"
}

// tells us how amny letters are left i the sord 
var remainingLetters = word.length;

// from here i had help I was completly stuck

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Take a guess or click cancel to quit.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("enter your guess");
    } else {
        for (var j = 0; j < word.length; j++) {
             if (word[j] === guess) {
             answerArray[j] = guess;
             remainingLetters--;
             }
            }
    }
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

