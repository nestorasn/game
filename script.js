document.querySelector(".start-message").addEventListener("click", function () {
  document.querySelector(".start-message").classList.add("hidden");
  document.querySelector(".start").classList.add("hidden");
});

function computerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}

const choice = ["Rock", "Scissors", "Paper"];

let computerScore = 0;
let playerScore = 0;
document.querySelector(".opponent-score").textContent = computerScore;
document.querySelector(".player-score").textContent = playerScore;
document.querySelector(".opponent-choice").textContent = "?";

document.querySelector(".pcr").addEventListener("click", function () {
  const computerSelection = computerChoice(choice);

  if (computerSelection === "Scissors") {
    document.querySelector(".opponent-choice").textContent = "🦞";

    document.querySelector(".round").textContent = "YOU WIN!";

    playerScore += 1;
    document.querySelector(".player-score").textContent = playerScore;
  } else if (computerSelection === "Rock") {
    document.querySelector(".opponent-choice").textContent = "🪨";
    document.querySelector(".round").textContent = "DRAW!";
  } else if (computerSelection === "Paper") {
    document.querySelector(".opponent-choice").textContent = "🐚";
    document.querySelector(".round").textContent = "YOU LOSE!";
    computerScore += 1;
    document.querySelector(".opponent-score").textContent = computerScore;
  }
  if (playerScore == 5) {
    document.querySelector(".win").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
    console.log("helo");
  }
  if (computerScore == 5) {
    document.querySelector(".lose").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
  }
});

document.querySelector(".pcs").addEventListener("click", function () {
  const computerSelection = computerChoice(choice);
  if (computerSelection === "Scissors") {
    document.querySelector(".opponent-choice").textContent = "🦞";
    document.querySelector(".round").textContent = "DRAW!";
  } else if (computerSelection === "Rock") {
    document.querySelector(".opponent-choice").textContent = "🪨";
    document.querySelector(".round").textContent = "YOU LOSE!";
    computerScore += 1;
    document.querySelector(".opponent-score").textContent = computerScore;
  } else if (computerSelection === "Paper") {
    document.querySelector(".opponent-choice").textContent = "🐚";
    document.querySelector(".round").textContent = "YOU WIN!";
    playerScore += 1;
    document.querySelector(".player-score").textContent = playerScore;
  }
  if (playerScore == 5) {
    document.querySelector(".win").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
    console.log("helo");
  }
  if (computerScore == 5) {
    document.querySelector(".lose").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
  }
});

document.querySelector(".pcp").addEventListener("click", function () {
  const computerSelection = computerChoice(choice);
  if (computerSelection === "Scissors") {
    document.querySelector(".opponent-choice").textContent = "🦞";
    document.querySelector(".round").textContent = "YOU LOSE!";
    computerScore += 1;
    document.querySelector(".opponent-score").textContent = computerScore;
  } else if (computerSelection === "Rock") {
    document.querySelector(".opponent-choice").textContent = "🪨";
    document.querySelector(".round").textContent = "YOU WIN!";
    playerScore += 1;
    document.querySelector(".player-score").textContent = playerScore;
  } else if (computerSelection === "Paper") {
    document.querySelector(".opponent-choice").textContent = "🐚";
    document.querySelector(".round").textContent = "DRAW!";
  }
  if (playerScore == 5) {
    document.querySelector(".win").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
    console.log("helo");
  }
  if (computerScore == 5) {
    document.querySelector(".lose").classList.remove("hidden");
    document.querySelector(".start").classList.remove("hidden");
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  computerScore = 0;
  playerScore = 0;
  document.querySelector(".player-score").textContent = playerScore;
  document.querySelector(".opponent-score").textContent = computerScore;
  document.querySelector(".round").textContent = "";
  document.querySelector(".opponent-choice").textContent = "?";
});

document.querySelector(".win").addEventListener("click", function () {
  computerScore = 0;
  playerScore = 0;
  document.querySelector(".player-score").textContent = playerScore;
  document.querySelector(".opponent-score").textContent = computerScore;
  document.querySelector(".round").textContent = "";
  document.querySelector(".opponent-choice").textContent = "?";
  document.querySelector(".win").classList.add("hidden");
  document.querySelector(".start").classList.add("hidden");
});

document.querySelector(".lose").addEventListener("click", function () {
  computerScore = 0;
  playerScore = 0;
  document.querySelector(".player-score").textContent = playerScore;
  document.querySelector(".opponent-score").textContent = computerScore;
  document.querySelector(".round").textContent = "";
  document.querySelector(".opponent-choice").textContent = "?";
  document.querySelector(".lose").classList.add("hidden");
  document.querySelector(".start").classList.add("hidden");
});
