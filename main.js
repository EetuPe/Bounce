var ball;   //red ball
var ball2; //blue ball
var floor;
var posX = 0;
var posY= 0;

var canvas = document.getElementById("bg");
//var ctx = canvas.getContext("2d");
// posX =
// posY =

function gameStart() {
    ball = new Image();
    ball.src = "Ball.png";
    ball2 = new Image();
    ball2.src = "Ball2.png";
    floor = [];
    
    for (i = 0; i < 9; i++) {
        floor[i] = new Image();
    }
    

    ball.style.position = "absolute";
    ball.style.left = posX+'px';
    ball.style.top = posY+'px';
}

function gameChar1(width, height, color, x, y, type) {
    ball.type = type;
    ball.width = width;
    ball.height = height;
    ball.x = x;
    ball.y = y;    
    ball.speedX = 0;
    ball.speedY = 0;    
    ball.gravity = 0.1;
    ball.gravitySpeed = 0;
    ball.bounce = 0.6;
    
}

function allTheOtherStuff() {
    // ball.checkKeys = function(){ 
    // if (keysDown[K_W]){ 
    
    // } 

    // elif (keysDown[K_A]){ 

    // } 

    // elif (keysDown[K_S]){ 

    // }

    // elif (keysDown[K_D]){ 

    // }

    // elif (keysDown[K_SPACE]){ 

    // }
}

gameStart();