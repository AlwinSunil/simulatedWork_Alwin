const timeLeftDisptay = document.querySelector("#time-left");
const resultDisptay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

let currentIndex = 76;
const width = 9;

function moveFrog(e) {
	squares[currentIndex].classList.remove("frog");

	switch (e.key) {
		case "ArrowLeft":
			if (currentIndex % width !== 0) currentIndex -= 1; // Move left
			break;
		case "ArrowRight":
			if (currentIndex % width < width - 1) currentIndex += 1; // Move right
			break;
		case "ArrowUp":
			if (currentIndex - width >= 0) currentIndex -= width; // Move up
			break;
		case "ArrowDown":
			if (currentIndex + width < width * width) currentIndex += width; // Move down
			break;
	}

	// Add the 'frog' class to the new square
	squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
