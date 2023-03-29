let startX = 0;
let startY = 0;
let endX = 7;
let endY = 9;
var alreadyVisited = [];
var correctPath = [];
var flatCorrectPath = [];

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
        showSolution(1);
    }
}

function recursiveSolve(posX, posY) {
    if(posX == endX && posY == endY) { return true; } //goal is reached
    if(alreadyVisited[posX][posY]) { return false; } //trying to visit an already visited field (all paths from there are already explored)
    alreadyVisited[posX][posY] = true; //mark current position as visited

    //check if moving left works
    if(isMovementPossible('left', posX, posY)) {  if(recursiveSolve(posX-1, posY)) { correctPath[posX-1][posY] = true; flatCorrectPath.push({'x': posX-1, 'y': posY}); return true; } }

    //check if moving down works
    if(isMovementPossible('down', posX, posY)) { if(recursiveSolve(posX, posY+1)) { correctPath[posX][posY+1] = true; flatCorrectPath.push({'x': posX, 'y': posY+1}); return true; } }

    //check if moving right works
    if(isMovementPossible('right', posX, posY)) { if(recursiveSolve(posX+1, posY)) { correctPath[posX+1][posY] = true; flatCorrectPath.push({'x': posX+1, 'y': posY}); return true; } }

    //check if moving up works
    if(isMovementPossible('up', posX, posY)) { if(recursiveSolve(posX, posY-1)) { correctPath[posX][posY-1] = true; flatCorrectPath.push({'x': posX, 'y': posY-1}); return true; } }

    return false; //can move in no direction (either due to obstacles or already visiting all adjacent fields)
}




function showSolution(elementCounter = 0) {
    console.log('loop nr: ' + elementCounter);
    var isFirst = true;
    var prevElem;
    var keyCodeHolder = new Object();
    let reversedPath = flatCorrectPath.slice().reverse();

    if(elementCounter == 0) { //first loop, no prevElem
        //can be skipped, is player start position
    } else if(elementCounter + 1 == reversedPath.length) { //last element
        prevElem = reversedPath[elementCounter-1];
        elem = reversedPath[elementCounter];

        if( (elem['x'] < prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 37; } //left
        if( (elem['x'] == prevElem['x']) && (elem['y'] > prevElem['y']) ) { keyCodeHolder.keyCode = 40; } //down
        if( (elem['x'] > prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 39; } //right
        if( (elem['x'] == prevElem['x']) && (elem['y'] < prevElem['y']) ) { keyCodeHolder.keyCode = 38; } //up

        console.log('end reached');
        performPlayerMovement(keyCodeHolder);
    } else {
        prevElem = reversedPath[elementCounter-1];
        elem = reversedPath[elementCounter];

        if( (elem['x'] < prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 37; } //left
        if( (elem['x'] == prevElem['x']) && (elem['y'] > prevElem['y']) ) { keyCodeHolder.keyCode = 40; } //down
        if( (elem['x'] > prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 39; } //right
        if( (elem['x'] == prevElem['x']) && (elem['y'] < prevElem['y']) ) { keyCodeHolder.keyCode = 38; } //up

        performPlayerMovement(keyCodeHolder, showSolution, elementCounter+1);
    }
}






/* function showSolution() {
    var isFirst = true;
    var prevElem;
    var keyCodeHolder = new Object();
    loopIteration = 0;

    let reversedPath = flatCorrectPath.slice().reverse();
    console.log(reversedPath);

    for(const elem of reversedPath) {
        if(isFirst) {
            isFirst = false;
            prevElem = elem;
        } else {
            if( (elem['x'] < prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 37; } //left
            if( (elem['x'] == prevElem['x']) && (elem['y'] > prevElem['y']) ) { keyCodeHolder.keyCode = 40; } //down
            if( (elem['x'] > prevElem['x']) && (elem['y'] == prevElem['y']) ) { keyCodeHolder.keyCode = 39; } //right
            if( (elem['x'] == prevElem['x']) && (elem['y'] < prevElem['y']) ) { keyCodeHolder.keyCode = 38; } //up

            // console.log(keyCodeHolder);
            performPlayerMovement(keyCodeHolder);

            prevElem = elem;
        }
    }
} */