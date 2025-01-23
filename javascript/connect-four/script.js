document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll(".grid div");
	const result = document.querySelector("#result");
	const displayCurrentPlayer = document.querySelector("#current-player");

	let currentPlayer = 1;

	for (let i = 0; i < squares.length; i++) {
		squares[i].onClick = () => {
			if (squares[i + 7].classList.contains("taken")) {
				return;
			}
		};
	}
});
