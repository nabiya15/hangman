var inventions=['wheel','television','telephone','paper','printing press','light bulb','steam engine','lens','ink', 'internet','bicycle','gunpowder','battery','steam turbine','microscope','transistor','cathode ray tube','penicillin',];

var correctGuess=false; //checks if user guess the correct letter
var wrongGuess=6; // checks for a wrong letter guess
var win=0;  //states the total number of games won
var remainingLetters=0; // check to see if there are any more letters remaining to be guessed
var guessList=[]; //displays all the keys user has pressed

var chosenWord= inventions[Math.floor(Math.random()*inventions.length)]; //selects the word to be guessed
console.log(chosenWord); /*display chosen word on console*/

wordLength=chosenWord.length; //find th length if the word to be guessed
var answer=[];
answer=chosenWord.split(); //define an array

console.log(answer);
//display the word in form of dashes
for (var i = 0; i < wordLength; i++) {
  if(chosenWord.charAt(i)===" "){
    answer[i]="&nbsp";  
  }else{
    answer[i]= "_";
  }
}
document.getElementById('word').innerHTML= answer.join(' ');

//assign value of bad guess and display it

document.getElementById("guesses").innerHTML=wrongGuess;
// accept user's guess, add guessed word to guesslist and display the list 
document.onkeyup=function function_name(keypress) {
  var userGuess=[keypress.key];
  if((keypress.keyCode>=65 && keypress.keyCode<=90)|| keypress.keyCode==32){
    guessList.push(" "+userGuess);
    document.getElementById("guessedWords").innerHTML=guessList;
  }

//replace mask with correct guesses
for (var j = 0; j < wordLength; j++) {
  if ((keypress.keyCode>=65 && keypress.keyCode<=90)|| keypress.keyCode==32) {
     if(chosenWord.charAt(j)==userGuess){
      correctGuess=true;
      answer[j]=userGuess;
    }
  }else{
      document.getElementById("status").innerHTML="Please use alphabets only."
      return;
    }

  }
  document.getElementById("word").innerHTML=answer.join(" ");

 //decrease remaining tries if wrong letter is guessed
 if (correctGuess===false) {
  wrongGuess--;
  document.getElementById("guesses").innerHTML = wrongGuess;
 } 
 //reset correctGuess value
 correctGuess=false;

//reset function

function reset(){
   chosenWord = inventions[Math.floor(Math.random() * inventions.length)];
    console.log(chosenWord);  
      wordLength = chosenWord.length;
      var answer=[];
      answer = chosenWord.split();
      correctGuess = false; 
      guessList=[];
      remainingLetters=0;

      for (i = 0; i < wordLength; i++) { 
        if(chosenWord.charAt(i)===' '){
          answer[i]="&nbsp";  
        }else{
          answer[i]= " _";
        }
      }
      document.getElementById("word").innerHTML = answer.join(' '); //prints blanks
      wrongGuess = 6;
      document.getElementById("guesses").innerHTML = wrongGuess;
}

 //check to see if you lost the game
 if (wrongGuess === 0){
   
    reset();
    document.getElementById("status").innerHTML = "Lives over! Try again.";
  }

  for(k=0;k<wordLength-1;k++){
    if(chosenWord.charAt(k) !== answer[k]){
    remainingLetters=remainingLetters+1;

    }
    document.getElementById("status").innerHTML="Letters remaining to guess "+remainingLetters;
  }
  
  if (remainingLetters===0) {
    win++;
    
    document.getElementById("status").innerHTML="Yay!! you win the round";
    document.getElementById("wins").innerHTML=win;

    chosenWord = inventions[Math.floor(Math.random() * inventions.length)];
    console.log(chosenWord);  
      wordLength = chosenWord.length;
      answer = chosenWord.split();
      wrongGuess=0;
      correctGuess = false; 
      guessList=[];
      remainingLetters=0;

      for (i = 0; i < wordLength; i++) { 
        if(chosenWord.charAt(i)===' '){
          answer[i]="&nbsp";  
        }else{
          answer[i]= " _";
        }
      }
      document.getElementById("word").innerHTML = answer.join(' '); //prints blanks
      wrongGuess = wordLength-1;
      document.getElementById("guesses").innerHTML = wrongGuess;
  }
}

/*While the word has not been guessed {

  Show the player their current progress

  Get a guess from the player

  If the player wants to quit the game {

    Quit the game

  }

  Else If the guess is not a single letter {

    Tell the player to pick a single letter

  }

  Else
    If the guess is in the word {

      Update the player's progress with the guess

    }

  }

}*/

