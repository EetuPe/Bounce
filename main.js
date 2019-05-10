var ball;	//red ball
var ball2; //blue ball
var floor = [];
var key,pos=0;
var posX = 0;
var posY= 0;
var posX2 = 0;
var posY2 = 0;
var posSpikeX = 0;
var posSpikeY = 0;
var spikes;

window.onload = function () {
	var ball = new Image();
  ball.src = 'Ball.png';
  var ball2 = new Image();
  ball2.src = 'Ball2.png';
	var spikes = new Image();
  spikes.src = 'spikes.png';

  var canvas = document.getElementById('bg');
  let posXFloor = 0;
  let posYFloor = 0;
	var ctx = canvas.getContext('2d');
  for(i = 0; i < 9; i++) {
    floor[i] = new Image();
    floor[i].src = "Bricks.png";
    floor[i].onload=function() {
      ctx.drawImage(floor[i],i*50,posYFloor);
    }
  }

	ball.onload=function() {
		ctx.drawImage(ball,posX,posY);
	}

	ball2.onload=function() {
		ctx.drawImage(ball2,posX2,posY2);
	}

	spikes.onload=function() {
		ctx.drawImage(spikes,posSpikeX,posSpikeY);
	}

	document.onkeydown=function(e) {
		pos=1;
		key=window.event?e.keyCode:e.which;
	}

	document.onkeyup=function(e) {
		pos=0;
	}

	setInterval(function() {
		if(pos==0)return;
		if(key==65)posX-=2;
		if(key==87)posY-=2;
		if(key==68)posX+=2;
		if(key==83)posY+=2;

		if(key==37)posX2-=2;
		if(key==38)posY2-=2;
		if(key==39)posX2+=2;
		if(key==40)posY2+=2;
		canvas.width=canvas.width;
		ctx.drawImage(ball,posX,posY);
		ctx.drawImage(ball2,posX2,posY2);
	},5);
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
  ball.bounce = 1;
}

gameStart();
