  
  let userScore = 0;
  let computerScore = 0;
  let humanScore = document.querySelector("#humanScore");
  let compScore = document.querySelector("#compScore");

  document.getElementById('rock').onclick = user;
  document.getElementById('paper').onclick = user;
  document.getElementById('scissors').onclick = user;
  
  function user(){
    let userChoice = this.id;
    const computerChoice = computerPlay(); 
    if (userScore === 5 || computerScore === 5) {
        return winCondition();
    } else {
      playRound(userChoice, computerChoice);
    }
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
      humanScore.innerHTML = userScore;
      return document.getElementById("results").innerHTML = "You win! Rock beats scissors!";
    } else if (userChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return document.getElementById("results").innerHTML = "You lose! Scissors beats rock";
    }
    // Paper Choice
    else if (userChoice == "paper" && computerChoice == "rock") {
      userScore++;
      humanScore.innerHTML = userScore;
      return document.getElementById("results").innerHTML = "You win! Paper beats rock";
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return document.getElementById("results").innerHTML = "You lose! Scissors beat paper!";
    }
    // Scissors Choice
    else if (userChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return document.getElementById("results").innerHTML = "You lose! Rock beats scissors";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userScore++;
      humanScore.innerHTML = userScore;
      return document.getElementById("results").innerHTML = "You win! Scissor beats rock!";
    } 
      // Tie
    else if (userChoice === computerChoice) {
      return document.getElementById("results").innerHTML = "It's a draw!";
    } else {
      return "Error, please choose rock, paper, or scissors";
    }
  }
     // End game alert
  function winCondition() {
    if (userScore > computerScore) {
    return document.getElementById("results").innerHTML = "Congrats! You win the game!";
    } else if (userScore < computerScore) {
      return document.getElementById("results").innerHTML = "Sorry, you lost the game.";
    }

  }


  

 