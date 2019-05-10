var ball;	//red ball
var ball2; //blue ball
var floor = [];
var key = 0;
var pos = false;
var posX = 0;
var posY= 0;
var posX2 = 0;
var posY2 = 0;
var posSpikeX = 800;
var posSpikeY = 530;
var spikes;
var fallSpeed = 2;
var jumpSpeed = 4;

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
  var floor = [];
  for(let i = 0; i < 9; i++)
  {
    floor = new Image();
	if(floor && floor.style) {
    floor.style.height = '50px';
    floor.style.width = '50px';
	}
    floor.src = "Bricks.png";
    floor.onload=function() 
    {
        ctx.drawImage(floor,i*50,posYFloor);
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
		pos = true;
		key=window.event?e.keyCode:e.which;
	}

	document.onkeyup=function(e) {
		pos = false;
	}

	setInterval(function() {
		if(pos==false)return;
		if(key==65)posX-=2;
		if(key==87)posY-=jumpSpeed;
		if(key==68)posX+=2;

		if(key==37)posX2-=2;
		if(key==38)posY2-=jumpSpeed;
		if(key==39)posX2+=2;
	},1);

	setInterval(function() {
		canvas.width=canvas.width;
		ctx.drawImage(ball,posX,posY);
		ctx.drawImage(ball2,posX2,posY2);
		ctx.drawImage(spikes, posSpikeX, posSpikeY);
		for(let i = 0; i < 9; i++)
		{
			ctx.drawImage(floor, i*50, posYFloor);
		}
	},1);
}

function gameStart() {
	
}

function gameChar1() {
	var gravityRed = true;
	
	setInterval(() => {
		if (gravityRed && posY < 549) {
			posY+=fallSpeed;
		}
	}, 1);

	setInterval(() => {
		console.log("posX = ", posX);
		console.log("posSpikeX = ", posSpikeX);
		console.log("posY", posY);
		console.log("posSpikeY", posSpikeY);
	}, 5000);

	if (posX>=770 && posX<=830) {
		alert("u ded");
	}
}

function gameChar2() {
	var gravityBlue = true;
	
	setInterval(() => {
		if (gravityBlue && posY2 < 549) {
			posY2+=fallSpeed;
		}
	}, 1);
}



gameStart();
gameChar1();
gameChar2();
