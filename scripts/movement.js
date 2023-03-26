let player;
let tileSize = 32;
let movementSpeed = 100; //smaller number equals faster animations
var moveInterval;
var currentPlayerPostureNumber = 1;
var loopCounter = 0;
let framePixelDistance = tileSize / 8;

window.addEventListener('load', function () {
    player = this.document.getElementById('player');
    player.style.top = "0px"; //needed because otherwise it is an empty string
    player.style.left = "0px";

    window.addEventListener("keydown", performPlayerMovement);
});



function performPlayerMovement(e) {
    let direction = getMovementDirection(e.keyCode);

    if(direction && !moveInterval) {
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
                loopCounter = 0;
                moveInterval = clearInterval(moveInterval);
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