const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const resetButton = document.querySelector("button.reset");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId = null;

// Function to randomly place the mole in a square
function randomSquare() {
	squares.forEach((square) => {
		square.classList.remove("mole");
	});

	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add("mole");
	hitPosition = randomSquare.id;
}

// Event listener for clicking on squares
squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id == hitPosition) {
			result++;
			score.textContent = result;
			hitPosition = null;
		}
	});
});

// Function to start moving the mole
function moveMole() {
	timerId = setInterval(randomSquare, 500);
}

// Function to count down the timer
function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert("GAME OVER! Your final score is " + result);
	}
}

// Function to reset the game
function resetGame() {
	clearInterval(timerId);
	clearInterval(countDownTimerId);
	result = 0;
	currentTime = 60;
	score.textContent = result;
	timeLeft.textContent = currentTime;
	squares.forEach((square) => {
		square.classList.remove("mole");
	});
	moveMole();
	countDownTimerId = setInterval(countDown, 1000);
}

// Start the game
moveMole();
countDownTimerId = setInterval(countDown, 1000);

// Event listener for the reset button
resetButton.addEventListener("click", resetGame);
