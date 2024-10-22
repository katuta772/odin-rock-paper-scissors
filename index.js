let humanScore = 0;
let computerScore = 0;
let playing = true;

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
function getComputerChoice() {
  let chance = getRandomNumber();
  if (chance <= 34) {
    return "ROCK";
  } else if (chance <= 67) {
    return "PAPER";
  } else return "SCISSORS";
}

function fight(choice) {
  humanChoice = choice;
  computerChoice = getComputerChoice();

  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    return 0; // 0 = human win
  } else if (humanChoice === "ROCK" && computerChoice === "ROCK") {
    return 1; // 1 = draw
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    return 2; // 2 = computer win
  }
  if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    return 2;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    return 0;
  } else if (humanChoice === "PAPER" && computerChoice === "PAPER") {
    return 1;
  }
  if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
    return 1;
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    return 2;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    return 0;
  }
}

function score(choice) {
  fightResult = fight(choice);
  let winner;
  if (fightResult === 0) {
    console.log("Player WINS!!!");
    console.log("");
    humanScore = humanScore + 1;
    winner = "PLAYER";
  } else if (fightResult === 2) {
    console.log("Computer WINS!!!");
    console.log("");
    computerScore = computerScore + 1;
    winner = "COMPUTER";
  } else {
    console.log("It's a DRAW!!!");
    console.log("");
    winner = "DRAW";
  }

  document.getElementById(
    "content-player"
  ).textContent = `Player: ${humanScore}`;
  document.getElementById(
    "content-computer"
  ).textContent = `Computer: ${computerScore}`;

  const resultWinner = document.querySelector("#result-winner");
  resultWinner.textContent = `${winner}`;
}

function play() {
  console.log("WORKS");
  const container = document.querySelector(".container");
  // score header
  const titleScoreElement = document.createElement("h3");
  titleScoreElement.setAttribute("id", "title-score");
  titleScoreElement.textContent = "SCORE";
  container.appendChild(titleScoreElement);

  // score table content
  const scoreContent = document.createElement("div");
  scoreContent.classList.add("score-content");

  const scoreContentPlayer = document.createElement("div");
  scoreContentPlayer.classList.add("score-content-player");

  const scoreContentPlayerP = document.createElement("p");
  scoreContentPlayerP.setAttribute("id", "content-player");
  scoreContentPlayerP.textContent = "Player: 0";

  const scoreContentComputer = document.createElement("div");
  scoreContentComputer.classList.add("score-content-computer");

  const scoreContentComputerP = document.createElement("p");
  scoreContentComputerP.setAttribute("id", "content-computer");
  scoreContentComputerP.textContent = "Computer: 0";

  scoreContentPlayer.appendChild(scoreContentPlayerP);
  scoreContentComputer.appendChild(scoreContentComputerP);
  scoreContent.appendChild(scoreContentPlayer);
  scoreContent.appendChild(scoreContentComputer);
  container.appendChild(scoreContent);

  // result header
  const result = document.createElement("div");
  result.classList.add("result");
  const resultHeader = document.createElement("h3");
  resultHeader.textContent = "WINNER:";
  const resultWinner = document.createElement("h4");
  resultWinner.setAttribute("id", "result-winner");

  result.appendChild(resultHeader);
  result.appendChild(resultWinner);
  container.appendChild(result);

  // buttons
  const buttons = document.createElement("div");
  buttons.classList.add("options");

  const rockButton = document.createElement("button");
  rockButton.setAttribute("id", "options-button");
  rockButton.textContent = "ROCK";
  rockButton.addEventListener("click", () => playRound("ROCK"));

  const paperButton = document.createElement("button");
  paperButton.setAttribute("id", "options-button");
  paperButton.textContent = "PAPER";
  paperButton.addEventListener("click", () => playRound("PAPER"));

  const scissorsButton = document.createElement("button");
  scissorsButton.setAttribute("id", "options-button");
  scissorsButton.textContent = "SCISSORS";
  scissorsButton.addEventListener("click", () => playRound("SCISSORS"));

  buttons.appendChild(rockButton);
  buttons.appendChild(paperButton);
  buttons.appendChild(scissorsButton);
  container.appendChild(buttons);

  // remove start button
  const startButton = document.querySelector("#options-button-start");
  container.removeChild(startButton);
}

function playRound(choice) {
  score(choice);
}
