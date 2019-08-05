const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth);
let rightPressed = false;
let leftPressed = false;

drawPaddle = () => {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, canvas.width - paddleWidth);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

drawPaddle();