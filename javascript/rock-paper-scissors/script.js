const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");

document.getElementById("rock").addEventListener("click", () => {
	playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
	playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
	playGame("scissors");
});

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result;

	if (playerChoice === computerChoice) {
		result = "It's a tie!";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "rock")
	) {
		result = "You win!";
	} else {
		result = "You lose!";
	}

	resultDisplay.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
