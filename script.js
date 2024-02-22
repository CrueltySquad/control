const gridSize = {
  beginner: [9, 9],
  intermediate: [16, 16],
  expert: [30, 16],
};

const cellCount = gridSize.expert[0] * gridSize.expert[1];
const mineCount = Math.floor(cellCount * 0.15);

let gameBoard = [];
let gameOver = false;
let gameWon = false;
let timer;
let time = 0;

function startGame() {
  gameBoard = [];
  gameOver = false;
  gameWon = false;
  time = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    time++;
    $('#timer').text(`Time: ${time}`);
  }, 1000);
  $('#timer').text(`Time: ${time}`);
  $('#minecounter').text(`Mines: ${mineCount}`);
  createBoard();
}

function createBoard() {
  const board = [];
  for (let i = 0; i < gridSize.expert[0]; i++) {
    const row = [];
    for (let j = 0; j < gridSize.expert[1]; j++) {
      row.push({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      });
    }
    board.push(row);
  }
  for (let i = 0; i < mineCount; i++) {
    let x, y;
    do {
      x = Math.floor(Math.random() * gridSize.expert[0]);
      y = Math.floor(Math.random() * gridSize.expert[1]);
    } while (board[x][y].isMine);
    board[x
