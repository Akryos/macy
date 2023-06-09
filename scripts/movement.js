let player;
let tileSize = 32;
let movementSpeed = 100; //smaller number equals faster animations
var moveInterval;
var currentPlayerPostureNumber = 1;
var loopCounter = 0;
let framePixelDistance = tileSize / 8;
var playerPositionX = 0;
var playerPositionY = 0;

window.addEventListener('load', function () {
    player = this.document.getElementById('player');
    player.style.top = "33px"; //needed because otherwise it is an empty string
    player.style.left = "33px";

    window.addEventListener("keydown", performPlayerMovement);
});



function performPlayerMovement(e, needCheckMovement = true, callback = false, callbackParam = false) {
    console.log('beginning: ' + callbackParam);
    let direction = getMovementDirection(e.keyCode);

    if(needCheckMovement && !isMovementPossible(direction, playerPositionX, playerPositionY)) {
        return false;
    }

    if(direction && !moveInterval) {
        console.log('middle: ' + callbackParam);
        moveInterval = setInterval(function(){

            switch(direction) {
                case 'left':
                    player.style.left = (parseInt(player.style.left, 10) - framePixelDistance) + "px";
                    break;
                case 'up':
                    player.style.top = (parseInt(player.style.top, 10) - framePixelDistance) + "px";
                    break;
                case 'right':
                    player.style.left = (parseInt(player.style.left, 10) + framePixelDistance) + "px";
                    break;
                case 'down':
                    player.style.top = (parseInt(player.style.top, 10) + framePixelDistance) + "px";
                    break;
                default:
                    break;
            }

            currentPlayerPostureNumber = (currentPlayerPostureNumber == 4) ? 1 : (++currentPlayerPostureNumber);
            player.src = `./assets/player/${direction}_${currentPlayerPostureNumber}.png`;

            loopCounter += framePixelDistance;

            if(loopCounter == tileSize) {
                switch(direction) {
                    case 'left':
                        playerPositionX--;
                        break;
                    case 'up':
                        playerPositionY--;
                        break;
                    case 'right':
                        playerPositionX++;
                        break;
                    case 'down':
                        playerPositionY++;
                        break;
                    default:
                        break;
                }

                loopCounter = 0;
                moveInterval = clearInterval(moveInterval);

                if(callback) {
                    console.log('end: ' + callbackParam);
                    callback(callbackParam);
                }
            }
        }, movementSpeed);
    }
}

function getMovementDirection(eKeyCode) {
    let direction;

    switch(eKeyCode) {
        case 37: //left arrow
        case 65: //a key
            direction = 'left';
            break;

        case 38: //up arrow
        case 87: //w key
            direction = 'up';
            break;

        case 39: //right arrow
        case 68: //d key
            direction = 'right';
            break;

        case 40: //down arrow
        case 83: //s key
            direction = 'down';
            break;

        default:
            return false;
            break;
    }

    return direction;
}

function isMovementPossible(direction, posX, posY) {
    let canMove;

    switch(direction) {
        case 'left':
            canMove = ((posX > 0) && (boardData[posX-1][posY]['movementType'] == 0)) ? true : false;
            break;
        case 'up':
            canMove = ((posY > 0) && (boardData[posX][posY-1]['movementType'] == 0)) ? true : false;
            break;
        case 'right':
            canMove = ((posX < (boardDimensionX-1)) && (boardData[posX+1][posY]['movementType'] == 0)) ? true : false;
            break;
        case 'down':
            canMove = ((posY < (boardDimensionY-1)) && (boardData[posX][posY+1]['movementType'] == 0)) ? true : false;
            break;
        default:
            canMove = false;
            break;
    }

    return canMove;
}