let board;
let boardDimensionX = 15;
let boardDimensionY = 10;
let boardData = [];

window.addEventListener('load', function () {
    board = this.document.getElementById('board');

    initializeBoard();
});

function initializeBoard() {
    for (let i = 0; i < boardDimensionY; i++) {
        for (let j = 0; j < boardDimensionX; j++) {
            var newTile = document.createElement('div');
            newTile.className = 'tile';
            newTile.setAttribute('style', 'background-image: url("./assets/tiles/' + boardData[i][j]['image'] + '.png")');
            newTile.setAttribute('data-positionX', i);
            newTile.setAttribute('data-positionY', j);
            board.appendChild(newTile);
        }
      } 
}


boardData[0] = [];
boardData[0][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[0][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[1] = [];
boardData[1][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[2] = [];
boardData[2][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[3] = [];
boardData[3][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[4] = [];
boardData[4][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[5] = [];
boardData[5][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[6] = [];
boardData[6][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[7] = [];
boardData[7][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[8] = [];
boardData[8][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][14] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[9] = [];
boardData[9][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][9] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][10] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][11] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][12] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][13] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][14] = { 'image': 'basic/grass1', 'movementType': 0 };
