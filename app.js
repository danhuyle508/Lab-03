'use strict';  
var correctAnswer = 0; 
var questions = ['Was I in the Army? (yes/y/no/n)', 'Do I like CSS more than JavaScript? (yes/y/no/n)', 'Was I born in March? (yes/y/no/n)', 'Do I live in Seattle? (yes/y/no/n)', 'Do I like PCs more than Macs? (yes/y/no/n)']
var correctAnswers = [['yes','y'], ['no','n'], ['yes', 'y'], ['yes', 'y'], ['yes','y']];
var userAnswer= [];

//First 5 questions in an array. A for loop is going to cycle through all the questions and check the answers against the answer array.
function askFiveQuestions(){
  var stop = true;
  for(var i = 0; i < questions.length; i++){
    stop = true;
    userAnswer.push(prompt(questions[i]));
    console.log(userAnswer);
    for(var j= 0; j <2; j++){
      if(correctAnswers[i][j] == userAnswer[i]){
      alert('You are correct!')
      correctAnswer++;
      stop = false;
      }
    }
    if(stop === true){
      alert('You are wrong!');
    }
  }
} 

function getRandomNumber(){
  var randNum = Math.floor(Math.random() * (50 - 1) + 1);
  console.log(randNum);
  return randNum;
}

//function for sixth question
function question6(){
  var guessThisNumber = getRandomNumber();
  var questionSix = parseInt(prompt("Guess my number between 1- 50."));
  console.log("user's answer to question six.", questionSix);
  var counter1 = 1;

  while(questionSix !== guessThisNumber  && counter1 < 4){
    if(questionSix < guessThisNumber ){
      questionSix = parseInt(prompt("Your number is too low. Try agian"));
      counter1++;
    }
    else if(questionSix > guessThisNumber ){
      questionSix = parseInt(prompt("Your number is too high."));
      counter1++;
    }
  }
  if(questionSix == guessThisNumber ){
    alert("You guessed the right number!");
    correctAnswer++;
  }
  else{
    alert("You are out of tries!");
  }
}
//function for seventh question
function question7(){
  var questionSeven = prompt("Guess a state a state I have lived in").toLowerCase();
  console.log("user's answer to question seven.", questionSeven);
  var counter2 = 1;
  var stop = true;
  var answers=['vermont', 'massachusetts', 'missouri'];
  while(counter2 < 7 && stop == true){
    for(var index = 0; index <= answers.length; index++){
      if(questionSeven == answers[index]){
        alert("You are correct!")
        correctAnswer++;
        stop = false;
        break;
      } 
    } 
    if(stop == false){
      break;
    }
    else{
      questionSeven = prompt("Try again.");
      counter2++;
    }
  }
}

askFiveQuestions();
question6();
question7();
function printThis(){
  var questionsElement = document.getElementById("questions");
  for(var i= 0; i<questions.length; i++){
    var qElement = document.createElement("p");
    var qText = document.createTextNode(questions[i]);
    qElement.appendChild(qText);
    questionsElement.appendChild(qElement);

    var aElement = document.createElement("p");
    var aText = document.createTextNode(userAnswer[i]);
    aElement.appendChild(aText);
    questionsElement.appendChild(aElement);
  }
}
printThis();
alert("You got " + correctAnswer + " questions right!");
console.log("number of correct answers from user.", correctAnswer);