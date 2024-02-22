const block = document.getElementById('block');
const blockWidth = parseInt(window.getComputedStyle(block).width);
const blockHeight = parseInt(window.getComputedStyle(block).height);
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let blockX = screenWidth / 2 - blockWidth / 2;
let blockY = screenHeight - blockHeight - 20;

function updateBlockPosition() {
    block.style.left = blockX + 'px';
    block.style.top = blockY + 'px';
}

const horizontalInput = document.getElementById('horizontal');
const verticalInput = document.getElementById('vertical');

horizontalInput.addEventListener('input', () => {
    blockX += parseInt(horizontalInput.value);
    updateBlockPosition();
});

verticalInput.addEventListener('input', () => {
    blockY += parseInt(verticalInput.value);
    updateBlockPosition();
});

updateBlockPosition();
