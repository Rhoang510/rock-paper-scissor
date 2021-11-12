  
  let userScore = 0;
  let computerScore = 0;
  

  document.getElementById('rock').onclick = user;
  document.getElementById('paper').onclick = user;
  document.getElementById('scissors').onclick = user;
  
  function user(){
    let userChoice = this.id;
    const computerChoice = computerPlay(); 
    if (userChoice == 5 || computerChoice == 5) {
        return winCondition;
    }
    console.log(playRound(userChoice, computerChoice));
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }

  function computerPlay() {
    let computerPlay = Math.random();
    if (computerPlay < 0.34) {
      return "rock";
      } else if (computerPlay <= 0.67) {
      return "paper";
      } else {
      return "scissors";
    }
  }
  function playRound( userChoice, computerChoice ) {
    // Rock Choice
    if (userChoice == "rock" && computerChoice == "scissors") {
      userScore++;
      return "You win! Rock beats scissors!";
    } else if (userChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      return "You lose! Scissors beats rock";
    }
    // Paper Choice
    else if (userChoice == "paper" && computerChoice == "rock") {
      userScore++;
      return "You win! Paper beats rock";
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      return "You lose! Scissors beat paper!";
    }
    // Scissors Choice
    else if (userChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      return "You lose! Rock beats scissors";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userScore++;
      return "You win! Scissor beats rock!";
    } 
      // Tie
    else if (userChoice === computerChoice) {
      return "It's a draw!";
    } else {
      return "Error, please choose rock, paper, or scissors";
    }
  }
     // End game alert
  function winCondition() {
    if (userScore > computerScore) {
    return "Congrats! You win!";
    } else if (userScore < computerScore) {
      return "Sorry, you lose.";
    } else {
      return "It's a draw!";
    }

  }


  

 