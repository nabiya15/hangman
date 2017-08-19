  var inventions=['wheel','television','telephone','paper','printing press','light bulb','steam engine','lens','ink', 'internet','bicycle','gunpowder','battery','steam turbine','microscope','transistor','cathode ray tube','penicillin',];
  var winSound = new Audio("assets/sounds/win.mp3");
  var looseSound= new Audio("assets/sounds/looser.mp3");
  var win=0;
  var guessCount;
  var maxGuess;
  var guessList; //displays all the keys user
  var answer;
  var match;
  var chosenWord;
  var isWinner;
  var isLooser;

  function reset (){
   guessCount=0;
   maxGuess=6;
   guesslist=[];
   
   document.getElementById("guessedWords").innerHTML.guesslist;
   answer=[];
   isWinner=false;
   isLooser=false;

   
  // select a random word to be guessed
  chosenWord= inventions[Math.floor(Math.random()*inventions.length)]; //selects the word to be guessed
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
 
}

reset();

function updateGame(){
   document.getElementById("status").innerHTML="Start Guessing...."
  document.getElementById("word").innerHTML=answer.join(" ");
  document.getElementById("guesses").innerHTML=maxGuess;
}

updateGame();

document.onkeyup=function (keypress) {

  var userGuess=keypress.key;

  if((keypress.keyCode>=65 && keypress.keyCode<=90)|| keypress.keyCode==32)
  {
    guessList.push(" "+userGuess);
    document.getElementById("guessedWords").innerHTML=guessList;
  }else{
    document.getElementById("status").innerHTML="Please use alphabets only!!!"
    return;
  }
  match=false;
  for (var j = 0; j < chosenWord.length; j++) {
  //replace mask with correct guesses
  if(chosenWord[j] === userGuess){
    match=true;
    answer[j]=userGuess;

  }
}

if(!match){
  maxGuess--;
}

updateGame();


isWinner=answer.indexOf(" _")===-1;
isLooser= maxGuess<=0;
if(isWinner){
  win++;
  document.getElementById("status").innerHTML="Yay!! You Win."
  document.getElementById("wins").innerHTML=win;
  winSound.play();
  reset();
  updateGame();
}
if(isLooser){
  document.getElementById("status").innerHTML="You Lost :( "
  looseSound.play();
  reset();
  updateGame();
}


}
