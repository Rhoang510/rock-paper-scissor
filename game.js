  
  let userScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll("button");
  const humanScore = document.querySelector("#humanScore");
  const compScore = document.querySelector("#compScore");
  const reset = document.querySelector("#reset");
  const results = document.getElementById("results");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoice = computerPlay();
      if (userScore === 5 || computerScore === 5) {
        return winCondition(); 
      } else {
        playRound(userChoice, computerChoice);
      }
    });
  });

  reset.addEventListener("click", () => {
      userScore = 0;
      computerScore = 0;
      compScore.textContent = 0;
      humanScore.textContent = 0;
      results.removeAttribute("style");
      results.textContent = "You have restarted the game.";
  });

 

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
      return results.textContent = "You win! Rock beats scissors!";
    } else if (userChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      compScore.textContent = computerScore;
      return results.textContent = "You lose! Scissors beats rock";
    }
    // Paper Choice
    else if (userChoice == "paper" && computerChoice == "rock") {
      userScore++;
      humanScore.textContent = userScore;
      return results.textContent = "You win! Paper beats rock";
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      compScore.textContent = computerScore;
      return results.textContent = "You lose! Scissors beat paper!";
    }
    // Scissors Choice
    else if (userChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      compScore.textContent = computerScore;
      return results.textContent = "You lose! Rock beats scissors";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userScore++;
      humanScore.textContent = userScore;
      return results.textContent = "You win! Scissor beats rock!";
    } 
      // Tie
    else if (userChoice === computerChoice) {
      return results.textContent = "It's a draw!";
    }
  }
     // End game alert
  function winCondition() {
    results.style.color = "red";
    results.style.fontSize = "40px";
    results.style.fontWeight = "bold";
    if (userScore > computerScore) {
    return results.textContent = "Congrats! You win the game!!!";
    } else if (userScore < computerScore) {
      return results.textContent = "Sorry, you lost the game.";
    }

  }


  

 