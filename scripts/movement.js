let player;
let playerCoordinateX = 0;
let playerCoordinateY = 0;
let tileSize = 32;
let movementSpeed = 100; //smaller number equals faster animations
var moveInterval;
var currentPlayerPostureNumber = 1;
var loopCounter = 0;
let framePixelDistance = tileSize / 8;

window.addEventListener('load', function () {
    player = this.document.getElementById('player');
    player.style.top = "0px";
    player.style.left = "0px";

    window.addEventListener("keydown", performPlayerMovement);
});






function performPlayerMovement(e) {
    switch(e.keyCode) {
        case 37: //left arrow
        case 65: //a key
            break;

        case 38: //up arrow
        case 87: //w key
            break;

        case 39: //right arrow
        case 68: //d key
            break;

        case 40: //down arrow
        case 83: //s key

        if(!moveInterval) {
            moveInterval = setInterval(function(){
                player.style.top = parseInt(player.style.top, 10) + framePixelDistance + "px";

                currentPlayerPostureNumber = (currentPlayerPostureNumber == 4) ? 1 : (++currentPlayerPostureNumber);
                player.src = "./assets/player/down_" + currentPlayerPostureNumber + ".png";

                loopCounter += framePixelDistance;

                if(loopCounter == tileSize) {
                    loopCounter = 0;
                    clearInterval(moveInterval);
                }
            }, movementSpeed);
        }




            break;

        default:
            // console.log(e.keyCode);
            break;
    }
}