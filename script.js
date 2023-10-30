//rock paper scissors



//global variables

let computerScore = 0;

let userScore = 0;

const userInput = ['rock', 'paper', 'scissors'];

//function getUserChoice

const getUserChoice = userInput => {
  prompt('Please enter paper, rock, or, scissors');
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput;
    
  } else {
    return ('Invalid, enter rock, paper, or scissors.')
  }
};

//console.log(getUserChoice('rock'));
//console.log(getUserChoice('scissor'));




//use prompt to ask user to enter their choice for rock paper or scissors

//return users choice



//function getComputerChoice

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  switch(randomChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;     
  }
};
//console.log(getComputerChoice());





//uses Math.random to pick rock, paper or scissors at random from an array 

//returns computer's choice



//function compareChoice
const compareChoice = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'It is a tie!';
  } else if (userChoice === 'rock' && computerChoice ==='paper'){
    return 'You lost this round!';
  } else if (userChoice === 'paper' && coumputerChoice === 'rock'){
    return 'You are a winner!';
  } else if (userChoice === 'paper' && computerChoice ==='scissors'){
    return 'You lost this round!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
    return 'You are a winner!';
  } else if (userChoice ==='scissors' && computerChoice === 'rock'){
    return 'You lost this round!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
    return 'You are a winner!';
  }

    
  };

console.log(compareChoice(getUserChoice(), getComputerChoice()))
//takes in userChoice and computerChoice as arguments

//use nested if else to test user vs computer

//output alert messages for each outcome - ex: "user chose paper. computer chose rock. paper covers rock! player wins"

//increments the winners score




//function playGame

//counts round number

//run a while loop as long as computer and user's score are < 2(best 2/3)

//inside the while loop:

  //increment round counter

  //give an alert with the round # and user and computer's current scores

  //run compare choice, passing it user's choice and computer's choice