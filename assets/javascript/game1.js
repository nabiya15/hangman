var inventions=['wheel','television','telephone','paper','printing press','light bulb','steam engine','lens','ink', 'internet','bicycle','gunpowder','battery','steam turbine','microscope','transistor','cathode ray tube','penicillin',];
var winSound = new Audio("assets/sounds/win.mp3");
var looseSound= new Audio("assets/sounds/looser.mp3");
var win=0;
var guessCount=0;

function init(){
  var maxGuess=6;
  
  var guessList=[]; //displays all the keys user
  var answer=[];
  var remainingLetters;
  
  var match=false;
  document.getElementById("status").innerHTML="Start Guessing...."
  // select a random word to be guessed
  var chosenWord= inventions[Math.floor(Math.random()*inventions.length)]; //selects the word to be guessed
  console.log(chosenWord); 
  answer=chosenWord.split(); 

  //Hide the word with dashes
  for (var i = 0; i < chosenWord.length; i++) {
    if(chosenWord.charAt(i)===" "){
      answer[i]="&nbsp";  
    }else{
      answer[i]= " _";
    }
  }
  document.getElementById("word").innerHTML=answer.join("");
  document.getElementById("guesses").innerHTML=maxGuess;

  document.onkeyup=function function_name(keypress) {
 
    var userGuess=[keypress.key];

    if((keypress.keyCode>=65 && keypress.keyCode<=90)|| keypress.keyCode==32)
    {
      guessList.push(" "+userGuess);
      document.getElementById("guessedWords").innerHTML=guessList;
    }

    for (var j = 0; j < chosenWord.length; j++) {
  //replace mask with correct guesses
 
       if(chosenWord.charAt(j)==userGuess){
        answer[j]=userGuess;
        match=true;
      }
    }

    if(match!=true){
    maxGuess--;
   }

    document.getElementById("word").innerHTML=answer.join(" ");
    document.getElementById("guesses").innerHTML=(maxGuess);
 
 
        remainingLetters=answer.length;
        for (var i = 0; i < answer.length; i++) {
          if(answer[i] !== " _"){
            remainingLetters-=1;
          }
        }

        if(remainingLetters===0) {

          showThisMessage="You Won";
          win+=1;
          winSound.play();
          document.getElementById("wins").innerHTML=win;
          document.getElementById("status").innerHTML="Here's another one!"

          init();
        }

        if(maxGuess===0){
          looseSound.play();
          alert("Sorry!! You ran out of guesses");

          document.getElementById("status").innerHTML="Here's another one!"
          init();  
        }
      
    }
}
window.onload=init;