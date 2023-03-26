let board;
let boardDimensionX = 25;
let boardDimensionY = 20;
let boardData = [];
boardData['imageData'] = [];
boardData['moveData'] = [];



window.addEventListener('load', function () {
    board = this.document.getElementById('board');

    initializeBoard();
});

function initializeBoard() {
    for (let i = 0; i < boardDimensionX; i++) {
        for (let j = 0; j < boardDimensionY; j++) {
            var newTile = document.createElement('div');
            newTile.className = 'tile';
            board.appendChild(newTile);
        }
      } 
}