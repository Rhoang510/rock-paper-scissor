  let userScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll("button");
  const humanScore = document.querySelector("#humanScore");
  const compScore = document.querySelector("#compScore");
  const results = document.querySelector("#results");
  const restart = document.querySelector("#restart");
  const restartButton = document.querySelector(".resetBtn");
  
  // Buttons 
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoice = computerPlay();
      if (userScore === 5 || computerScore === 5) {
        winCondition();
      } else {
        playRound(userChoice, computerChoice);
      }
    });
  });

  restartButton.addEventListener("click", () => {
      userScore = 0;
      computerScore = 0;
      compScore.textContent = 0;
      humanScore.textContent = 0;
      restart.textContent = "";
      results.removeAttribute("style");
      results.textContent = "You have restarted the game.";
  });
  
// GAME FUNCTION
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

  function playRound(userChoice, computerChoice) {
    // Rock Choice
    if (userChoice == "rock" && computerChoice == "scissors") {
      userScore++;
      humanScore.textContent = userScore;
      results.textContent = "You win! Rock beats scissors!";
    } else if (userChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      compScore.textContent = computerScore;
      results.textContent = "You lose! Scissors beats rock";
    }
    // Paper Choice
    else if (userChoice == "paper" && computerChoice == "rock") {
      userScore++;
      humanScore.textContent = userScore;
      results.textContent = "You win! Paper beats rock";
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      compScore.textContent = computerScore;
      results.textContent = "You lose! Scissors beat paper!";
    }
    // Scissors Choice
    else if (userChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      compScore.textContent = computerScore;
      results.textContent = "You lose! Rock beats scissors";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userScore++;
      humanScore.textContent = userScore;
      results.textContent = "You win! Scissor beats rock!";
    } 
      // Tie
    else {
      results.textContent = "It's a draw!";
    }
    winCondition();
  }
     // End game alert
  function winCondition() {
    if (userScore === 5) {
      endGameBanner();
      results.textContent = "Congratulations! You win!!!";
      restart.textContent = "Please click on reset to restart the game.";
    } else if (computerScore === 5) {
      endGameBanner();
       results.textContent = "Sorry, you lost.";
       restart.textContent = "Please click on reset to restart the game.";
    }
  }

  function endGameBanner() {
    results.style.color = "red";
    results.style.fontSize = "40px";
    results.style.fontWeight = "bold";
  }


 