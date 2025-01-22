const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

const blockWidth = 100;
const blockHeight = 20;

const ballDiameter = 20;

const boardWidth = 560;
const boardHeight = 300;

let xDirection = -2;
let yDirection = 2;

class block {
	constructor(xAxis, yAxis) {
		this.bottomLeft = [xAxis, yAxis];
		this.bottomRight = [xAxis + blockWidth, yAxis];
		this.topLeft = [xAxis, yAxis + blockHeight];
		this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
	}
}

const blocks = [
	new block(10, 270),
	new block(120, 270),
	new block(230, 270),
	new block(340, 270),
	new block(450, 270),
	new block(10, 240),
	new block(120, 240),
	new block(230, 240),
	new block(340, 240),
	new block(450, 240),
	new block(10, 210),
	new block(120, 210),
	new block(230, 210),
	new block(340, 210),
	new block(450, 210),
];

function addBlock() {
	for (let i = 0; i < blocks.length; i++) {
		const blockElement = document.createElement("div");
		blockElement.classList.add("block");

		blockElement.style.left = `${blocks[i].bottomLeft[0]}px`;
		blockElement.style.top = `${blocks[i].bottomLeft[1]}px`;
		blockElement.style.width = `${blockWidth}px`;
		blockElement.style.height = `${blockHeight}px`;

		grid.appendChild(blockElement);
	}
}

addBlock();
