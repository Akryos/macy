let board;
let boardDimensionX = 15;
let boardDimensionY = 10;
let boardData = [];

window.addEventListener('load', function () {
    board = this.document.getElementById('board');

    initializeBoard();
});

function initializeBoard() {
    for (let y = 0; y < boardDimensionY; y++) {
        for (let x = 0; x < boardDimensionX; x++) {
            var newTile = document.createElement('div');
            newTile.className = 'tile';
            newTile.setAttribute('style', 'background-image: url("./assets/tiles/' + boardData[x][y]['image'] + '.png")');

            //add data that is useful for debugging
            newTile.setAttribute('data-positionX', x);
            newTile.setAttribute('data-positionY', y);
            newTile.setAttribute('data-movementType', boardData[x][y]['movementType']);

            board.appendChild(newTile);
        }
      } 
}

// static board array for development purposes
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

boardData[1] = [];
boardData[1][0] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][1] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][2] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][3] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][4] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[1][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[1][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[2] = [];
boardData[2][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[2][7] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[2][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[2][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[3] = [];
boardData[3][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[3][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[3][8] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[3][9] = { 'image': 'basic/rock', 'movementType': 1 };

boardData[4] = [];
boardData[4][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][4] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[4][5] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[4][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[4][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[4][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[5] = [];
boardData[5][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][4] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[5][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[5][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[6] = [];
boardData[6][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][3] = { 'image': 'basic/flower', 'movementType': 0 };
boardData[6][4] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[6][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[6][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[6][8] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[6][9] = { 'image': 'basic/rock', 'movementType': 1 };

boardData[7] = [];
boardData[7][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][4] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[7][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[7][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[7][8] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[7][9] = { 'image': 'basic/wooden_shield', 'movementType': 0 };

boardData[8] = [];
boardData[8][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[8][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[8][8] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[8][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[9] = [];
boardData[9][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][6] = { 'image': 'basic/rock', 'movementType': 1 };
boardData[9][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[9][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[10] = [];
boardData[10][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[10][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[11] = [];
boardData[11][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[11][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[12] = [];
boardData[12][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[12][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[13] = [];
boardData[13][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[13][9] = { 'image': 'basic/grass1', 'movementType': 0 };

boardData[14] = [];
boardData[14][0] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][1] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][2] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][3] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][4] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][5] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][6] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][7] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][8] = { 'image': 'basic/grass1', 'movementType': 0 };
boardData[14][9] = { 'image': 'basic/grass1', 'movementType': 0 };