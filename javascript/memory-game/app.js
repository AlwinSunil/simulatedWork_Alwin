const cardArray = [
	{ name: "fries", img: "images/fries.png" },
	{ name: "cheeseburger", img: "images/cheeseburger.png" },
	{ name: "hotdog", img: "images/hotdog.png" },
	{ name: "ice-cream", img: "images/ice-cream.png" },
	{ name: "milkshake", img: "images/milkshake.png" },
	{ name: "pizza", img: "images/pizza.png" },
];

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#score");
const congratsDisplay = document.querySelector("#congrats");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// Create shuffled array with duplicates
const shuffledArray = cardArray
	.concat(cardArray)
	.sort(() => 0.5 - Math.random());

function createBoard() {
	shuffledArray.forEach((card, index) => {
		const cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/blank.png");
		cardElement.setAttribute("class", "card");
		cardElement.setAttribute("data-id", index);
		cardElement.addEventListener("click", flipCard);
		gridDisplay.appendChild(cardElement);
	});
}

function checkForMatch() {
	const cards = document.querySelectorAll("img");
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];

	if (optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute("src", "images/blank.png");
		alert("You have clicked the same image!");
	} else if (cardsChosen[0] === cardsChosen[1]) {
		alert("You found a match");
		cards[optionOneId].setAttribute("src", "images/white.png");
		cards[optionTwoId].setAttribute("src", "images/white.png");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute("src", "images/blank.png");
		cards[optionTwoId].setAttribute("src", "images/blank.png");
		alert("Sorry, try again");
	}
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === shuffledArray.length / 2) {
		congratsDisplay.textContent = "Congratulations! You found them all!";
	}
}

function flipCard() {
	const cardId = this.getAttribute("data-id");
	cardsChosen.push(shuffledArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute("src", shuffledArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

// Initialize board
createBoard();
