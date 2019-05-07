var ball;   //red ball
var ball2; //blue ball
var floor;
var posX = 0;
var posY= 0;

window.onload = function () {
	  var ball = new Image();
	  ball.src = 'Ball.png';
      var ball2 = new Image();
	  ball2.src = 'Ball2.png';
 
	  ball.onload = function () {
		  // CREATE CANVAS CONTEXT.
		  var canvas = document.getElementById('bg');
		  var ctx = canvas.getContext('2d');
 
		  ctx.drawImage(ball, 0, 0);  
          ctx.drawImage(ball2, 50, 50);
	   }
	}


function gameStart() {
    
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