const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const block = {
	x: 50,
	y: 50,
	width: 32,
	height: 32,
	velocityY: 0,
	gravity: 0.5,
	velocityX: 0,
	speed: 2,
};

function update() {
	// Apply gravity
	block.velocityY += block.gravity;

	// Update block position
	block.y += block.velocityY;

	// Check for collisions with the ground
	if (block.y + block.height > canvas.height) {
		block.y = canvas.height - block.height;
		block.velocityY = 0;
	}

	// Check for controller input
	if (navigator.getGamepads()[0]) {
		const gamepad = navigator.getGamepads()[0];
		if (gamepad.buttons[0].pressed) {
			// Move left
			block.velocityX = -block.speed;
		} else if (gamepad.buttons[1].pressed) {
			// Move right
			block.velocityX = block.speed;
		} else {
			// Stop moving
			block.velocityX = 0;
		}
