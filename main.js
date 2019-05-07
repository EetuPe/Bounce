var ball;   //red ball
var ball2; //blue ball
var floor;
var key,pos=0;
var posX = 0;
var posY= 0;

window.onload = function () {
	  var ball = new Image();
	  ball.src = 'Ball.png';
      var ball2 = new Image();
	  ball2.src = 'Ball2.png';
      var canvas = document.getElementById('bg');
	  var ctx = canvas.getContext('2d');
 
	  ball.onload = function () {
		  ctx.drawImage(ball, posX, posY);  
          ctx.drawImage(ball2, 50, 50);
	   }

        document.onkeydown=function(e)
        {
        pos=1;
        }
        document.onkeyup=function(e){pos=0;}

        document.addEventListener('keydown', function(e){
        setInterval(function()
        {

        if(pos == 0){
            return;
        }

        if(e.key === 'w') {
        posX+=2;
        console.log(posX);
        console.log(e.key=== 'w');
        }
        
        if(e.key === 'a') {
        console.log("A");
        }

        if(e.key === 's') {
        console.log("S");
        }
        
        if(e.key === 'd') {
        console.log("D");
        }
        ctx.drawImage(ball,posX,posY);
        },500);
        
        }
        )

       
  

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

}

gameStart();
allTheOtherStuff();