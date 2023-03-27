let startX = 0;
let startY = 0;
let endX = 7;
let endY = 9;
var alreadyVisited = [];
var correctPath = [];

window.addEventListener('load', function () {
    buttonSolve = this.document.getElementById('buttonSolve');
    buttonSolve.addEventListener("click", solveMaze);
});

function solveMaze() {
    for(var x = 0; x < boardDimensionX; x++) {
        alreadyVisited[x] = [];
        correctPath[x] = [];

        for(var y = 0; y < boardDimensionY; y++) {
            alreadyVisited[x][y] = false;
            correctPath[x][y] = false;
        }
    }

    let solvable = recursiveSolve(startX, startY);

    if(!solvable) {
        alert('not solvable');
    } else {
        //show solution
        console.log(correctPath);
    }
}

function recursiveSolve(posX, posY) {
    if(posX == endX && posY == endY) { return true; } //goal is reached
    if(alreadyVisited[posX][posY]) { return false; } //trying to visit an already visited field (all paths from there are already explored)
    alreadyVisited[posX][posY] = true; //mark current position as visited

    //check if moving left works
    if(isMovementPossible('left', posX, posY)) {  if(recursiveSolve(posX-1, posY)) { correctPath[posX-1][posY] = true; return true; } }

    //check if moving down works
    if(isMovementPossible('down', posX, posY)) { if(recursiveSolve(posX, posY+1)) { correctPath[posX][posY+1] = true; return true; } }

    //check if moving right works
    if(isMovementPossible('right', posX, posY)) { if(recursiveSolve(posX+1, posY)) { correctPath[posX+1][posY] = true; return true; } }

    //check if moving up works
    if(isMovementPossible('up', posX, posY)) { if(recursiveSolve(posX, posY-1)) { correctPath[posX][posY-1] = true; return true; } }

    return false; //can move in no direction (either due to obstacles or already visiting all adjacent fields)
}