const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const block = {
	x: 50,
	y: 50,
	width: 32,
	height: 32,
	velocityY: 0,
	gravity: 0.5,
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
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the block
	ctx.fillStyle = 'blue';
	ctx.fillRect(block.x, block.y, block.width, block.height);
}

function loop() {
	update();
	draw();
	requestAnimationFrame(loop);
}

loop();
