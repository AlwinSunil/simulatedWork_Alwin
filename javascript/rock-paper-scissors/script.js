const choices = ["rock", "paper", "scissors"];
const resultContainer = document.getElementById("resultContainer");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => {
	playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
	playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
	playGame("scissors");
});

resetButton.addEventListener("click", resetGame);

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result;

	if (playerChoice === computerChoice) {
		result = "It's a tie!";
		displayResult(playerChoice, computerChoice, result, "gray");
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "rock")
	) {
		result = "You win!";
		playerScore++;
		displayResult(playerChoice, computerChoice, result, "green");
	} else {
		result = "You lose!";
		computerScore++;
		displayResult(playerChoice, computerChoice, result, "red");
	}

	updateScores();
}

function displayResult(playerChoice, computerChoice, result, color) {
	const resultDiv = document.createElement("div");
	resultDiv.style.color = color;
	resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
	resultContainer.appendChild(resultDiv);
}

function updateScores() {
	playerScoreDisplay.textContent = playerScore;
	computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	updateScores();
	resultContainer.innerHTML = ""; // Clear all results
}
