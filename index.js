var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question("What's your name ? ");
console.log("Welcome " + userName + " to DO YOU KNOW VISHAL ? ") 
var score = 0;
console.log("------------------------");
var highrScore = [{
name : "vishal",
score: 7
}
]

//play function 
function play(question,answer){
  var usernaswer = readlineSync.question(question + '\n');
  if(usernaswer.toUpperCase() === answer.toUpperCase()){
    console.log("right");
    score = score +1;
  }
  else{
    console.log("wrong");
  }
  console.log(chalk.green("current score: " + score));
  console.log("------------------------");
}


var questions = [
  {
    question: "Where do i live?" ,
    answer: "ajmer"
  },
  {
    question: "Which is my favourite superHero?" ,
    answer: "captain america"
  },
  {
    question: "Which is my favourite color?" ,
    answer: "blue"
  },
  {
    question: "What is my favourite sport?" ,
    answer: "cricket"
  },
  {
    question: "What is month of birth?" ,
    answer: "june"
  },
  {
    question: "What is my age?" ,
    answer: "21"
  },
  {
    question: "Who is my inspiration?" ,
    answer: "steve jobs"
  }
]


for(var i = 0 ; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.red("Yay!! you scored: " + score));
console.log("------------------------");
console.log("check out the highest score: ")
console.log("--------------");
for(var i = 0; i<highrScore.length; i++){
  console.log(highrScore[i].name);
  console.log(highrScore[i].score);
}
console.log("------------------------");
console.log("If you beat highest score send me screenshot"); 