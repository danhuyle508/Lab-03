'use strict';
alert("Welcome to the Guess Game!");
var correctAnswer = 0;
//function for first question
function question1(){
  var questionOne = prompt("Was I in the Army? (yes/y/no/n)").toLowerCase();
  console.log("User's answer to question one", questionOne);
  if(questionOne === "yes" || questionOne ==='y'){
    alert("You are correct!");
    correctAnswer++;
  }
  else if (questionOne === "no" || questionOne ==="n"){
    alert("Wrong! I was in the army.")
  }
  else{
    alert("You have to answer with yes or no.");
  }
//function for second question
function question2(){
  var questionTwo = prompt("Do i like CSS more than JavaScript? (yes/y/no/n)").toLowerCase();
  console.log("User's answer to question two", questionTwo);

  if (questionTwo === "yes" || questionTwo ==='y'){
    alert("You are wrong! I prefer JavaScript.");
  }
  else if(questionTwo === "no" || questionTwo ==="n"){
    alert("You're right!");
    correctAnswer++;
  }
  else{
    alert("You have to answer with yes or no.");
  }
}
//function for third question
function question3(){
  var questionThree = prompt("Was i born in March? (yes/y/no/n)").toLowerCase();
  console.log("User's answer to question three", questionThree);
  if (questionThree === "yes" || questionThree ==='y'){
    alert("Yes!");
    correctAnswer++;
  }
  else if(questionOne === "no" || questionOne ==="n"){
    alert("You're wrong.");
  }
  else{
    alert("You have to answer with yes or no.");
  }
}
//function for fourth question
function question4(){
  var questionFour = prompt("Do I live in Seattle? (yes/y/no/n)").toLowerCase();
  console.log("User's answer to question four", questionFour);
  if (questionFour === "yes" || questionFour ==='y'){
    alert("You are right!.");
    correctAnswer++;
  }
  else if(questionFour === "no" || questionFour ==="n"){
    alert("Wrong! I live in Seattle.");
  }
  else{
    alert("You have to answer with yes or no.");
  }
  var questionFive = prompt("Do I like PCs more than Macs? (yes/y/no/n)").toLowerCase();
  console.log("User's answer to question five", questionFive);
  if (questionFive === "yes" || questionFive ==='y'){
    alert("Yes I do!");
    correctAnswer++;
  }
  else if(questionFive === "no" || questionFive ==="n"){
    alert("Wrong.");
  }
  else{
    alert("You have to answer with yes or no.");
  }
}
//6th question with 4 chances to guess the right number.
//function for sixth question
function question6(){
  var questionSix = parseInt(prompt("Guess my number between 1- 50."));
  console.log("user's answer to question six.", questionSix);
  var counter1 = 1;

  while(questionSix !== 34 && counter1 < 4){
    if(questionSix < 34){
      questionSix = parseInt(prompt("Your number is too low. Try agian"));
      counter1++;
    }
    else if(questionSix > 34){
      questionSix = parseInt(prompt("Your number is too high."));
      counter1++;
    }
  }
  if(questionSix == 34){
    alert("You guessed the right number!");
    correctAnswer++;
  }
  else{
    alert("You are out of tries!");
  }
}
//7th question with 6 chances to geuess a correct state.
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
alert("You got " + correctAnswer + " questions right!");
console.log("number of correct answers from user.", correctAnswer);