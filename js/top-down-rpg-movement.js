// // Setup

'use strict';

// Sets up canvas, and sets its width and height

const canvas = document.getElementById('main-canvas'),
	ctx = canvas.getContext('2d'),
	width = 600,
	height = 600;

canvas.width = width;
canvas.height = height;



// // Variables

// Holds data about what key is pressed

const keyPressed = [];

//  Objects

// The Player object.

const player = {
	x: 288,
	y: 288,
	xVelocity: 0,
	yVelocity: 0,
	speed: 2,
	direction: 'left'
}



// // Event Listeners

document.body.addEventListener('keydown', (event) => {
	keyPressed[event.keyCode] = true;
});

document.body.addEventListener('keyup', (event) => {
	keyPressed[event.keyCode] = false;
});



// // Functions

// Just draws a rectangle based on the arguments you put in.

const drawRect = (x, y, width, height) => {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.fillStyle = '#000000';
	ctx.fill();
	ctx.closePath();
	return true;
}

// Draws the player using the drawRect function.

const drawPlayer = () => {
	drawRect(player.x, player.y, 25, 25);
}

// Checks if the user is pressing any of the arrow keys, and/or the Shift key.

const checkKeys = () => {

	// Checks for up, right, down, and left arrow keys in that order (clockwise)

	if (keyPressed[38]) {
		player.y -= player.speed;
		player.direction = 'up';
	} else if (keyPressed[39]) {
		player.x += player.speed;
		player.direction = 'right';
	} else if (keyPressed[40]) {
		player.y += player.speed;
		player.direction = 'down';
	} else if (keyPressed[37]) {
		player.x -= player.speed;
		player.direction = 'left';
	} else {
		// nothing!
	}

	if (keyPressed[16]) {
		player.speed = 4;
	} else {
		player.speed = 2;
	}

}

// Clears the canvas.

const clearCanvas = () => {
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.closePath();
}



// // Draw Loop

const draw = () => {

	clearCanvas();

	checkKeys();

	drawPlayer();

	requestAnimationFrame(draw);

}

// Draws the canvas

draw();